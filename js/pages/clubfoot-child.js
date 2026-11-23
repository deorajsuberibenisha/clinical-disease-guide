/* Club foot and developmental dysplasia of the hip (Ponseti method, AAOS DDH) */
registerPage({
id: "clubfoot-child",
title: "Club Foot & Developmental Dysplasia of the Hip",
subtitle: "Examine every newborn's feet and hips; start Ponseti casting for club foot in the first weeks and keep the brace on for years; screen hips with Ortolani/Barlow and treat DDH early with a Pavlik harness",
age: "Newborns & infants", specs: ["paeds", "ortho", "neo"],
keywords: ["club foot", "clubfoot", "talipes equinovarus", "CTEV", "Ponseti", "Pirani score", "Achilles tenotomy", "foot abduction brace", "DDH", "developmental dysplasia of the hip", "Ortolani", "Barlow", "Pavlik harness"],
related: ["cleft-child", "down-child", "devdelay-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Club foot</h4><p>Ponseti: weekly casts → tenotomy → brace to age 4.</p></div>
<div><h4>Score</h4><p>Pirani 0–6 guides casts.</p></div>
<div><h4>DDH</h4><p>Ortolani/Barlow at birth and 6–8 weeks; ultrasound if risk.</p></div>
<div><h4>Treat</h4><p>Pavlik harness under 6 months.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Ponseti club foot treatment is available at JDWNRH and regional hospitals (orthopaedics/physiotherapy); families need support for weekly visits and brace adherence. Hip ultrasound at referral hospitals. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Club foot (1 in 1000): cavus, adductus, varus, equinus — rigid, cannot be corrected passively (unlike positional talipes). DDH: risk factors — breech, female, family history, first-born, oligohydramnios, tight swaddling with legs straight.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Club foot", [F.s("Tight medial/posterior soft tissues"), F.a, F.s("Gentle serial stretching remodels ligaments"), F.e("Untreated → walking on the side of the foot, disability")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "Current", "This guide"], [["Club foot", "Extensive surgery", "Ponseti casting (over 95% success)", "Ponseti " + LB.loc()], ["Swaddling", "Legs straight", "Hip-healthy (hips flexed, abducted)", "Hip-healthy"]])}` },
{ id: "presentation", title: "Examination", html: `<ul><li>Club foot: foot turned in and down, cannot be brought to neutral; check spine and hips (associated conditions).</li><li>DDH: Ortolani (reduce dislocated hip — clunk), Barlow (dislocate), limited abduction, leg-length difference, asymmetrical thigh creases (older infants).</li></ul><h3>The typical patient</h3><p>A 2-week-old in Tsirang has a rigid inturned right foot; Pirani 5. <b>Idiopathic club foot</b>: weekly Ponseti casts (about 6), Achilles tenotomy, then boots and bar 23 h/day for 3 months and nights until age 4; hip check.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Positional talipes", "Fully correctable passively"], ["Syndromic/neuro club foot", "Spina bifida, arthrogryposis"], ["Metatarsus adductus", "Forefoot only"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Club foot: clinical. DDH: hip ultrasound at 4–6 weeks if abnormal exam or risk factors; X-ray after 4–6 months.</p>` },
{ id: "staging", title: "Pirani score", html: `<div class="calc" data-calc="pirani"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Club foot: Ponseti casting, tenotomy, brace; relapse — recasting; tibialis anterior transfer if dynamic supination later.</li><li>DDH under 6 months: Pavlik harness 6–12 weeks with ultrasound monitoring; 6–18 months: closed reduction + spica; older: open reduction/osteotomy.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `<p>Not usually needed; local anaesthetic for tenotomy.</p>` },
{ id: "populations", title: "Late presenters", html: `<p>Ponseti works up to several years of age (more casts).</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Family stops the brace", "Relapse risk very high — counselling, follow-up"]])}` },
{ id: "complications", title: "Complications", html: `<p>Relapse, cast sores; DDH: avascular necrosis, early arthritis, limp.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Club foot every 3 months until 4–5 years; DDH until skeletal maturity in treated cases.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Club foot", src: "images/clubfoot.jpg", mod: "Illustration", ctx: "Congenital talipes equinovarus", loc: "Feet", find: "Feet turned inward and downward", interp: "Ponseti casting from early infancy", by: "OpenStax College", page: "https://commons.wikimedia.org/wiki/File:813_Clubfoot.jpg", lic: "CC BY 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Newborn foot/hip check", [F.d("Rigid club foot?"), F.a, F.b([["Yes", F.e("Ponseti referral")], ["No", F.ok("Positional — stretches")]]), F.a, F.d("Ortolani/Barlow positive or risk?"), F.a, F.ok("Ultrasound 4–6 weeks → Pavlik if DDH")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Skipping the brace phase", "Relapse", "Brace to age 4"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "How long is the club foot brace worn?", "23 hours/day for 3 months, then nights and naps until about age 4.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ponseti IV. Congenital clubfoot: fundamentals of treatment. Oxford University Press; 1996; Global Clubfoot Initiative resources.</li><li id="ref-2">American Academy of Orthopaedic Surgeons. Management of developmental dysplasia of the hip in infants up to six months of age: evidence-based guideline, 2014.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["Ponseti protocol", "<span class='pass'>Checked</span>", "Standard"]], "qc")}` }
]
});
