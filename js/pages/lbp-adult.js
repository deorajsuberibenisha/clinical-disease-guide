/* Low back pain and sciatica — adults */
registerPage({
id: "lbp-adult",
title: "Low Back Pain & Sciatica — Adults",
subtitle: "Screen for the rare dangerous causes, then help the person stay active: reassurance, short-term NSAIDs and exercise beat bed rest, scans and long-term opioids",
age: "Adults", specs: ["ortho", "rehab", "medicine"],
keywords: ["low back pain", "back pain", "sciatica", "prolapsed disc", "PIVD", "cauda equina", "spinal TB", "Pott's disease", "lumbar spondylosis", "red flags back pain", "physiotherapy"],
related: ["oa-adult", "tb-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Back pain is one of the commonest reasons Bhutanese farmers and office workers seek care. Over 90% is non-specific and improves within weeks; the task is to catch the few serious causes and keep everyone else moving.</p>
<div class="glance">
<div><h4>Red flags</h4><ul><li>Cauda equina symptoms</li><li>Progressive weakness</li><li>Cancer, weight loss, night pain</li><li>Fever, TB contact (spinal TB)</li><li>Trauma, osteoporosis</li></ul></div>
<div><h4>Non-specific</h4><p>Reassure, stay active, ${dr("ibuprofen")} short course, heat, exercise; no imaging.</p></div>
<div><h4>Sciatica</h4><p>Most settle in 6–12 weeks; refer if severe after 6 weeks or deficit.</p></div>
<div><h4>Avoid</h4><p>Bed rest, routine X-ray/MRI, long-term opioids, gabapentinoids.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §13.11–13.12: NSAIDs and physiotherapy for mechanical pain; rest, pain relief and referral for disc prolapse, especially with bladder or bowel involvement. Spinal TB remains important in Bhutan. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Category", "Examples", "Share"], [["Non-specific (mechanical)", "Muscles, ligaments, facet joints, discs", "Over 90%"], ["Radicular", "Disc prolapse (L4/5, L5/S1), spinal stenosis", "About 5%"], ["Serious", "Cauda equina, fracture, cancer, infection (TB, abscess), axial spondyloarthritis", "Under 1–2%"], ["Referred", "Kidney stone, pyelonephritis, aortic aneurysm, pancreatitis, gynaecological", "—"]])}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Pain and recovery", [F.s("Strain, disc and joint changes are common even without pain"), F.a, F.s("Fear and inactivity worsen pain and disability"), F.a, F.ok("Movement, reassurance and graded activity drive recovery")])}<p>Imaging findings (disc bulges, degeneration) are common in people without pain, which is why routine scans mislead.${r(2)}</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "International (NICE NG59, Lancet 2018)", "This guide"], [["Rest", "Rest for acute pain and disc prolapse", "Stay active; avoid bed rest", "Stay active " + LB.loc()], ["Medicines", "NSAIDs", "NSAIDs short term; no paracetamol alone, no gabapentinoids or long-term opioids for non-specific pain", "Short NSAID course; exercise"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Pain pattern, leg symptoms below the knee, bladder/bowel/saddle sensation, weight loss, fever, TB, cancer, trauma, steroids, age.</li><li>Examine spine, straight-leg raise, power, reflexes and sensation in both legs.</li></ul>${box("red", "Cauda equina: emergency", `<ul><li>Saddle numbness</li><li>New urinary retention or incontinence, bowel dysfunction</li><li>Bilateral sciatica, sexual dysfunction</li></ul>`)}
<h3>The typical patient</h3><p>A 38-year-old man from Wangdue developed low back pain after lifting rice sacks 4 days ago, with no leg symptoms or red flags. <b>This is non-specific low back pain</b>: mechanical trigger, no neurological signs, no red flags. Reassure, ibuprofen for a few days, keep active, simple exercises; no X-ray.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Spinal TB", "Weeks of pain, fever, weight loss, gibbus"], ["Metastases", "Cancer history, night pain, age over 50"], ["Kidney stone, pyelonephritis", "Colicky loin pain, urinary symptoms"], ["Aortic aneurysm", "Older smoker, pulsatile mass"], ["Axial spondyloarthritis", "Young, morning stiffness, improves with activity"]])}` },
{ id: "invest", title: "Investigations", html: `<p>None for non-specific pain. Red flags: FBC, ESR/CRP, X-ray; MRI for cauda equina, cancer, infection or surgical sciatica; TB work-up where suspected.</p>` },
{ id: "staging", title: "Red-flag tool", html: `<div class="calc" data-calc="lbpflags"></div>` },
{ id: "manage", title: "Management", html: `<ul><li><b>Reassure and educate:</b> back pain is common and usually improves.</li><li><b>Stay active</b>; return to work early with adjustments.</li><li>${dr("ibuprofen")} 400 mg three times daily for up to 1–2 weeks (PPI if over 65); ${dr("tramadol")} only short term if NSAIDs unsuitable.</li><li><b>Exercise and physiotherapy</b> (strengthening, stretching, yoga); manual therapy as part of a package.</li><li><b>Sciatica:</b> as above; refer if severe or persisting beyond 6 weeks, or any motor deficit; epidural or surgery for selected patients.</li><li>Chronic pain: psychological support, graded activity; ${dr("amitriptyline")} low dose may help sleep.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ibuprofen"), "400 mg TDS", "Short course"], [dr("diclofenac"), "50 mg TDS", "Alternative"], [dr("tramadol"), "50–100 mg 6-hourly", "Short term only"], [dr("paracetamol"), "1 g QDS", "Add-on only"]])}` },
{ id: "populations", title: "Special groups", html: `<ul><li>Older adults: osteoporotic fracture, cancer, stenosis.</li><li>Pregnancy: common; physiotherapy; paracetamol.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Patient wants an MRI", "Explain it rarely changes care and may cause worry"], ["Retention after a disc prolapse", "Cauda equina: emergency referral"]])}` },
{ id: "complications", title: "Prognosis", html: `<p>Most improve within 6 weeks; recurrence is common; a minority develop chronic disabling pain, predicted by fear, low mood and job dissatisfaction.</p>` },
{ id: "followup", title: "Follow-up", html: `${box("green", "Advice", `<ul><li>Keep moving; gentle walking daily.</li><li>Lift with bent knees, close to the body.</li></ul>`)}${box("red", "Come back at once if", `<ul><li>Numbness between the legs, trouble passing urine or stool</li><li>Leg weakness</li><li>Fever or weight loss</li></ul>`)}` },
{ id: "images", title: "Images", html: `<p>No image needed for routine back pain; imaging is reserved for red flags.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Back pain", [F.d("Red flags?"), F.a, F.b([["Yes", F.e("Investigate / refer (cauda equina: emergency)")], ["No", F.ok("Reassure, active, NSAID, exercise; review 2–6 weeks")]])])}` },
{ id: "pearls", title: "Pearls and mistakes", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Bed rest", "Slower recovery", "Stay active"], ["Routine X-ray", "Radiation, false alarms", "Only for red flags"], ["Missing spinal TB", "Paraplegia", "Ask about fever, weight loss, contacts"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Student", "Symptoms of cauda equina syndrome?", "Saddle anaesthesia, urinary retention or incontinence, bowel dysfunction, bilateral sciatica.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">National Institute for Health and Care Excellence. Low back pain and sciatica in over 16s (NG59). 2016, updated 2020. <a href="https://www.nice.org.uk/guidance/ng59" target="_blank" rel="noopener">nice.org.uk</a></li><li id="ref-2">Foster NE, Anema JR, Cherkin D et al. Prevention and treatment of low back pain: evidence, challenges, and promising directions. <i>Lancet</i> 2018;391:2368–2383. <a href="https://doi.org/10.1016/S0140-6736(18)30489-6" target="_blank" rel="noopener">doi:10.1016/S0140-6736(18)30489-6</a></li><li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §13.11–13.12.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Guidance", "<span class='pass'>Checked</span>", "NICE NG59, Lancet series"]], "qc")}` }
]
});
