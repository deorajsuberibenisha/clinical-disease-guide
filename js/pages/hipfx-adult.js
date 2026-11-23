/* Hip fracture in older adults (NICE CG124, NHFS) */
registerPage({
id: "hipfx-adult",
title: "Hip Fracture in Older Adults",
subtitle: "An older person who cannot bear weight after a fall has a hip fracture until proven otherwise: relieve pain with a nerve block, operate within 36 hours, mobilise the next day, and treat the bones and the fall",
age: "Older adults", specs: ["ortho", "medicine", "rehab", "emerg"],
keywords: ["hip fracture", "neck of femur fracture", "intertrochanteric fracture", "fascia iliaca block", "hemiarthroplasty", "DHS", "orthogeriatrics", "delirium", "Nottingham Hip Fracture Score", "falls"],
related: ["osteoporosis-adult", "fracture-adult", "vte-adult", "syncope-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Recognise</h4><p>Short, externally rotated leg; X-ray (repeat/CT if occult).</p></div>
<div><h4>Pain</h4><p>Paracetamol + fascia iliaca block (${dr("bupivacaine")}).</p></div>
<div><h4>Surgery</h4><p>Within 36 h; full weight-bearing after.</p></div>
<div><h4>Bones/falls</h4><p>${dr("alendronate")}, vitamin D, falls review.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Hip fracture surgery (DHS, hemiarthroplasty) at JDWNRH and regional referral hospitals; district hospitals stabilise, give analgesia/nerve block where trained, and transfer. Bupivacaine is on the NEML at hospitals with theatres. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Fracture", "Usual operation"], [["Intracapsular undisplaced", "Screws (or arthroplasty if older)"], ["Intracapsular displaced", "Hemiarthroplasty (total hip if fit, active)"], ["Extracapsular intertrochanteric", "Dynamic hip screw"], ["Subtrochanteric", "Intramedullary nail"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Hip fracture", [F.s("Osteoporosis + fall"), F.a, F.s("Intracapsular → blood supply to head at risk (AVN)"), F.e("Immobility → delirium, pneumonia, VTE, pressure sores")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "NICE", "This guide"], [["Traction", "Skin traction", "Not recommended", "No traction " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Why did they fall (syncope, stroke, infection, drugs)? Long lie (rhabdomyolysis, pressure areas)?</li><li>Cognition (AMT), hydration, Hb, ECG, chest.</li></ul><h3>The typical patient</h3><p>An 82-year-old woman in Punakha falls at home and cannot stand; right leg short and externally rotated; X-ray displaced intracapsular fracture. <b>Hip fracture</b>: fascia iliaca block, IV fluids, transfer for hemiarthroplasty within 36 h; delirium precautions; bone protection.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Pubic ramus fracture", "Can bear some weight; X-ray"], ["Occult hip fracture", "Normal X-ray, pain — MRI/CT"]])}` },
{ id: "invest", title: "Investigations", html: `<p>X-ray AP pelvis + lateral hip; FBC, U&E, glucose, CK if long lie, crossmatch, ECG, chest X-ray if indicated.</p>` },
{ id: "staging", title: "NHFS", html: `<div class="calc" data-calc="nhfs"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Analgesia: paracetamol, nerve block, cautious opioid.</li><li>Fluids, pressure care, catheter only if needed.</li><li>Surgery within 36 h; spinal or general anaesthesia.</li><li>Post-op: full weight-bearing, mobilise day 1, VTE prophylaxis, delirium prevention, nutrition.</li><li>Secondary prevention: bone protection, falls assessment.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("paracetamol"), "1 g 6-hourly", "Regular"], [dr("bupivacaine"), "Up to 2 mg/kg", "Fascia iliaca block"], [dr("enoxaparin"), "40 mg daily", "VTE"], [dr("alendronate"), "70 mg weekly", "After vitamin D/calcium replete"]])}` },
{ id: "populations", title: "Dementia", html: `<p>Operate anyway (best pain relief); involve family; delirium care.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["On warfarin", "Vitamin K to reverse, operate when INR under 1.5–2"]])}` },
{ id: "complications", title: "Complications", html: `<p>Delirium, pneumonia, VTE, pressure sores, AKI, death (about 1 in 10 at 30 days), loss of independence.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Rehabilitation; falls clinic; adherence to bone treatment.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Neck of femur fracture", src: "images/nof-fracture.png", mod: "X-ray", ctx: "Hip fracture in an 80-year-old", loc: "Right hip", find: "Fracture through the femoral neck", interp: "Surgery within 36 h", by: "Drvaram", page: "https://commons.wikimedia.org/wiki/File:Neck_of_Femur_fracture_Right_side_in_a_80_years_old_female_patient.png", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fall + hip pain", [F.s("X-ray, analgesia, nerve block"), F.a, F.s("Optimise quickly"), F.a, F.ok("Surgery within 36 h → mobilise day 1")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Delaying surgery for minor issues", "Higher mortality", "Operate within 36 h"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Target time to surgery for hip fracture?", "Within 36 hours of admission.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Maxwell MJ, Moran CG, Moppett IK. Development and validation of a preoperative scoring system to predict 30 day mortality in patients undergoing hip fracture surgery. Br J Anaesth. 2008;101:511-517. <a href="https://doi.org/10.1093/bja/aen236" target="_blank" rel="noopener">doi</a></li><li id="ref-2">National Institute for Health and Care Excellence. Hip fracture: management (CG124), updated 2023.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
