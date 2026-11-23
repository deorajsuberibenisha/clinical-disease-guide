/* Osteoarthritis — adults */
registerPage({
id: "oa-adult",
title: "Osteoarthritis — Adults",
subtitle: "A clinical diagnosis in older adults with activity-related joint pain: exercise and weight loss are the core treatments, with topical then oral NSAIDs, and surgery for the few who need it",
age: "Adults", specs: ["ortho", "rheum", "rehab"],
keywords: ["osteoarthritis", "OA", "knee osteoarthritis", "hip osteoarthritis", "hand osteoarthritis", "degenerative joint disease", "joint replacement", "intra-articular steroid"],
related: ["ra-adult", "gout-adult", "lbp-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Knee osteoarthritis is very common in Bhutanese adults who have spent decades climbing steep paths and squatting. Most people can stay active with the right exercise and pain relief.</p>
<div class="glance">
<div><h4>Diagnose clinically</h4><p>Age 45+, activity-related pain, morning stiffness under 30 minutes. X-ray not needed.</p></div>
<div><h4>Core treatment</h4><p>Exercise (quadriceps strengthening), weight loss, education, walking aids.</p></div>
<div><h4>Medicines</h4><p>Topical NSAID, then ${dr("ibuprofen")} short courses; intra-articular steroid for flares.</p></div>
<div><h4>Refer</h4><p>Severe pain and disability despite treatment: joint replacement.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §13.10: pain relief, weight loss, quadriceps strengthening; refer if severe. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Who gets it", html: `<p>Risk factors: age, female sex, obesity, previous joint injury, repetitive kneeling or squatting, family history, malalignment. Common sites: knees, hips, hands (DIP/PIP, base of thumb), spine.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Whole-joint disease", [F.s("Cartilage loss, bone remodelling, osteophytes, synovitis, muscle weakness"), F.a, F.s("Pain → less activity → weaker muscles → more pain"), F.a, F.ok("Exercise breaks the cycle")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "International (ACR 2019, NICE NG226)", "This guide"], [["Paracetamol", "Pain relief", "Paracetamol has little benefit; topical NSAID first for knee and hand", "Topical NSAID first " + LB.loc()], ["Imaging", "X-ray shown", "Clinical diagnosis; X-ray only if atypical", "Clinical diagnosis"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Pain with use, relieved by rest; brief morning stiffness; crepitus; bony swelling; reduced range; Heberden's and Bouchard's nodes.</li></ul>${box("red", "Think again if", `<ul><li>Hot swollen joint (septic arthritis, gout)</li><li>Prolonged morning stiffness, small-joint swelling (RA)</li><li>Night pain, weight loss</li></ul>`)}
<h3>The typical patient</h3><p>A 62-year-old woman from Haa has had right knee pain on stairs for 2 years, stiff for 10 minutes in the morning, with crepitus and bony enlargement. <b>This is knee osteoarthritis</b>: age, activity-related pain, short stiffness, crepitus and bony swelling. Exercise programme, weight advice, topical NSAID and short oral courses for flares.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Rheumatoid arthritis", "Symmetrical small joints, stiffness over 30 min"], ["Gout / pseudogout", "Acute hot joint"], ["Septic arthritis", "Fever, hot single joint: aspirate"], ["Referred hip pain", "Knee pain from hip OA"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Clinical diagnosis. X-ray for atypical features or before surgery (joint space narrowing, osteophytes, sclerosis, cysts). Aspirate any hot effusion.</p>` },
{ id: "staging", title: "Severity", html: `<p>Grade by pain, function and impact on daily life rather than X-ray. Consider referral when pain and disability persist despite 3–6 months of core treatment.</p>` },
{ id: "manage", title: "Management", html: `<ul><li><b>Exercise:</b> daily quadriceps and hip strengthening, walking, cycling, tai chi or yoga.</li><li><b>Weight loss</b> of 5–10% if overweight.</li><li>Walking stick in the opposite hand, supportive footwear.</li><li><b>Medicines:</b> topical NSAID (where available); oral ${dr("ibuprofen")} 400 mg up to three times daily for flares (with PPI if over 65; avoid in CKD, heart failure); avoid long-term opioids.</li><li><b>Intra-articular steroid</b> (triamcinolone 40 mg) for flares, not more than every 3 months.</li><li><b>Refer</b> for joint replacement when severe.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ibuprofen"), "400 mg TDS for flares", "GI/kidney caution"], [dr("diclofenac"), "50 mg TDS or topical gel", "Topical preferred"], [dr("paracetamol"), "1 g QDS", "Limited benefit"]])}` },
{ id: "populations", title: "Older adults", html: `<p>Prefer topical NSAIDs; check kidney function and BP with oral NSAIDs; fall prevention.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Wants injections every month", "Limit to every 3 months; focus on exercise"]])}` },
{ id: "complications", title: "Prognosis", html: `<p>Slowly progressive in some, stable in many; exercise and weight loss reduce pain and disability.</p>` },
{ id: "followup", title: "Follow-up", html: `${box("green", "Advice", `<ul><li>Movement is medicine: exercise most days.</li><li>Pace activities; use a stick on steep paths.</li></ul>`)}` },
{ id: "images", title: "Images", html: `${fig({ title: "Knee osteoarthritis", src: "images/oa-knee-xr.jpg", mod: "X-ray", ctx: "Knee pain", loc: "Knee joint", find: "Joint-space narrowing, osteophytes, subchondral sclerosis", signs: "Osteoarthritis", interp: "Supports diagnosis; treatment depends on symptoms, not the film", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Osteoarthritis_on_X-ray.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Joint pain, age 45+", [F.s("Activity-related, stiffness <30 min → OA"), F.a, F.s("Exercise + weight + education"), F.a, F.s("Topical → oral NSAID; injection for flares"), F.a, F.e("Severe despite this → surgical referral")])}` },
{ id: "pearls", title: "Pearls and mistakes", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Telling patients to rest", "Weakness, worse pain", "Prescribe exercise"], ["Long-term NSAIDs without review", "GI bleed, AKI", "Short courses, PPI, monitor"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Student", "Core treatments for knee OA?", "Exercise, weight loss if overweight, and education.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Kolasinski SL, Neogi T, Hochberg MC et al. 2019 American College of Rheumatology/Arthritis Foundation guideline for the management of osteoarthritis of the hand, hip, and knee. <i>Arthritis Care Res</i> 2020;72:149–162. <a href="https://doi.org/10.1002/acr.24131" target="_blank" rel="noopener">doi:10.1002/acr.24131</a></li><li id="ref-2">National Institute for Health and Care Excellence. Osteoarthritis in over 16s (NG226). 2022. <a href="https://www.nice.org.uk/guidance/ng226" target="_blank" rel="noopener">nice.org.uk</a></li><li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §13.10.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Guidance", "<span class='pass'>Checked</span>", "ACR 2019, NICE NG226"]], "qc")}` }
]
});
