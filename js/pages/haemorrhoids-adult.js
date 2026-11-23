/* Haemorrhoids and anal fissure (Bhutan STG 4.2.1–4.2.2, ASCRS 2018/2023) */
registerPage({
id: "haemorrhoids-adult",
title: "Haemorrhoids & Anal Fissure",
subtitle: "Painless bright red bleeding is usually piles, painful defecation with streaks is a fissure — fibre and fluids for both, but always exclude cancer in older adults and those with alarm features",
age: "Adults", specs: ["surg", "gi"],
keywords: ["haemorrhoids", "piles", "anal fissure", "rectal bleeding", "thrombosed haemorrhoid", "banding", "haemorrhoidectomy", "sitz bath", "lignocaine gel", "constipation"],
related: ["ugib-adult", "ge-adult", "anaemia-adult", "gastric-cancer-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Very common, especially with constipation and pregnancy. Treat the bowel habit first.</p>
<div class="glance">
<div><h4>Piles</h4><p>Painless fresh bleeding, prolapse; fibre, fluids, ointment.</p></div>
<div><h4>Fissure</h4><p>Pain on defecation; ${dr("lignocaine_gel", "lignocaine gel")}, ${dr("senna")}, sitz baths.</p></div>
<div><h4>Refer</h4><p>Grade III–IV, thrombosed, chronic fissure, failure.</p></div>
<div><h4>Alarm</h4><p>Over 50, weight loss, anaemia, change in bowel habit → colonoscopy.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 4.2.1: high-fibre diet, fluids, anti-haemorrhoidal ointment, laxative, refer. STG 4.2.2: fibre, lignocaine ointment, senna, sitz baths with dilute potassium permanganate. Topical GTN/diltiazem for chronic fissure are not on the NEML. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Haemorrhoid grades (Goligher)", html: `${tbl(["Grade", "Feature", "Treatment"], [["I", "Bleed, no prolapse", "Fibre, fluids"], ["II", "Prolapse, reduce spontaneously", "Banding"], ["III", "Prolapse, manual reduction", "Banding or surgery"], ["IV", "Irreducible", "Haemorrhoidectomy"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Fissure", [F.s("Hard stool tears anoderm"), F.a, F.s("Pain → sphincter spasm → poor blood flow"), F.e("Chronic non-healing fissure, sentinel tag")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "ASCRS", "This guide"], [["Chronic fissure", "Conservative, refer", "Topical diltiazem/GTN, botox, sphincterotomy", "Refer for sphincterotomy if available " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Piles: bright red blood on paper/pan, prolapse, mucus, itch.</li><li>Fissure: sharp pain during and after stool, streak of blood; posterior midline usually.</li><li>Thrombosed external pile: sudden painful purple lump.</li></ul><h3>The typical patient</h3><p>A 30-year-old in Thimphu has severe pain on passing hard stools for 3 weeks, with blood streaks; a posterior midline fissure is seen. <b>Acute anal fissure</b>: fibre, water, senna, lignocaine gel, warm sitz baths; review in 6–8 weeks.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Colorectal cancer", "Age, weight loss, anaemia, blood mixed with stool"], ["IBD", "Diarrhoea, lateral fissures"], ["Perianal abscess", "Swelling, fever"], ["Rectal prolapse", "Concentric folds"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Inspection, DRE (not in acute fissure pain), proctoscopy; Hb; colonoscopy if alarm features.</p>` },
{ id: "staging", title: "Alarm features", html: `${tbl(["Refer for colonoscopy if", ""], [["Age 50+ with new rectal bleeding", ""], ["Iron-deficiency anaemia, weight loss", ""], ["Change in bowel habit, mass, family history of colorectal cancer", ""]])}` },
{ id: "manage", title: "Management", html: `<ul><li>Fibre 25–30 g/day, fluids, avoid straining, sitz baths.</li><li>Piles: anti-haemorrhoidal ointment short term; banding for grade II–III; surgery for IV.</li><li>Thrombosed external pile under 72 h: excision; later: conservative.</li><li>Fissure: lignocaine gel, laxative; chronic (over 6–8 weeks): refer (sphincterotomy).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("senna"), "15 mg at night", "Constipation"], [dr("lactulose"), "15 mL twice daily", "Softener"], [dr("lignocaine_gel"), "Apply 3–4 times daily", "Fissure pain"]])}` },
{ id: "populations", title: "Pregnancy", html: `<p>Common in late pregnancy; fibre, fluids, lactulose; most settle after delivery.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Heavy bleeding with anaemia", "Exclude other source; refer"]])}` },
{ id: "complications", title: "Complications", html: `<p>Anaemia, thrombosis, strangulated prolapse, chronic fissure, incontinence after surgery.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review in 6–8 weeks; refer if not healing.</p>` },
{ id: "images", title: "Images", html: `<p>No images needed.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Rectal bleeding", [F.d("Alarm features?"), F.a, F.b([["Yes", F.e("Colonoscopy referral")], ["No", F.ok("Piles/fissure: fibre, fluids, topical")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Blaming piles in a 60-year-old", "Missed cancer", "Colonoscopy"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Typical site of anal fissure?", "Posterior midline.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Davis BR, Lee-Kong SA, Migaly J, et al. The American Society of Colon and Rectal Surgeons clinical practice guidelines for the management of hemorrhoids. Dis Colon Rectum. 2018;61:284-292. <a href="https://doi.org/10.1097/DCR.0000000000001030" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, sections 4.2.1–4.2.2.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
