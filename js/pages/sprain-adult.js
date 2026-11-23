/* Sprains, strains and soft-tissue injuries (Bhutan STG 13.1/13.3, Ottawa rules) */
registerPage({
id: "sprain-adult",
title: "Sprains, Strains & Soft-Tissue Injuries",
subtitle: "Use the Ottawa rules to decide who needs an X-ray, protect and load sprains early, clean wounds thoroughly with tetanus cover, and recognise tendon, nerve and compartment injuries",
age: "Adults & children", specs: ["ortho", "emerg", "surg"],
keywords: ["sprain", "strain", "ankle sprain", "Ottawa ankle rules", "Ottawa knee rules", "soft tissue injury", "laceration", "wound care", "tetanus", "RICE", "POLICE", "tendon injury"],
related: ["fracture-adult", "compartment-adult", "ssti-adult", "lbp-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>X-ray?</h4><p>Ottawa ankle/foot/knee rules.</p></div>
<div><h4>Sprain</h4><p>Protect, Optimal Loading, Ice, Compression, Elevation; ${dr("paracetamol")}/${dr("ibuprofen")}.</p></div>
<div><h4>Wounds</h4><p>Irrigate, explore, tetanus, close or delay; antibiotics if contaminated.</p></div>
<div><h4>Refer</h4><p>Unstable joint, tendon/nerve injury, no improvement in 1–2 weeks.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 13.1: RICE, analgesia, splint/crutches, refer if unstable; STG 13.3 open wounds: tetanus toxoid, irrigation, haemostasis, antibiotics, splint, refer, no suturing at BHU level. Clean wounds under 12–24 h can be closed by trained staff at hospitals. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Grades of sprain", html: `${tbl(["Grade", "Injury", "Recovery"], [["I", "Stretch, no laxity", "1–2 weeks"], ["II", "Partial tear, some laxity", "3–6 weeks"], ["III", "Complete tear, unstable", "6–12 weeks; may need surgery"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Ankle sprain", [F.s("Inversion injury"), F.a, F.s("Anterior talofibular ligament tear"), F.e("Swelling, bruising; recurrent instability if poorly rehabilitated")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older", "Current", "This guide"], [["Rest", "Prolonged rest/cast", "Early functional loading, brace", "Early loading " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Mechanism, ability to bear weight, swelling, bruising, bony tenderness, joint stability, neurovascular status.</li><li>Wounds: depth, contamination, tendon function, sensation, foreign body.</li></ul><h3>The typical patient</h3><p>A 22-year-old twisted his ankle playing football in Thimphu; swelling over the lateral ligament, no bony tenderness, walked 4 steps. <b>Ankle sprain, no X-ray needed (Ottawa)</b>: ice, compression, elevation, early weight-bearing, ibuprofen, balance exercises.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Fracture", "Ottawa positive"], ["Achilles rupture", "Thompson test, gap"], ["Syndesmotic injury", "High ankle pain, squeeze test"]])}` },
{ id: "invest", title: "Investigations", html: `<p>X-ray per Ottawa rules; ultrasound for tendon/foreign body.</p>` },
{ id: "staging", title: "Ottawa rules", html: `<div class="calc" data-calc="ottawa"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Sprain: POLICE for 48–72 h, analgesia, brace/elastic support, early mobilisation, physiotherapy (balance).</li><li>Muscle strain: rest from aggravating activity, gradual stretching and strengthening.</li><li>Wounds: irrigate with saline, remove debris, explore, close if clean and under 12–24 h (face up to 24 h); leave contaminated wounds open; tetanus; antibiotics for bites/contaminated/deep wounds.</li><li>Refer: tendon/nerve injury, joint involvement, large tissue loss.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ibuprofen"), "400 mg TDS", "Short course"], [dr("paracetamol"), "1 g QDS", "Pain"], [dr("td_vaccine", "Tetanus toxoid"), "0.5 mL IM", "Wounds"], [dr("coamoxiclav"), "625 mg TDS", "Bites/contaminated"]])}` },
{ id: "populations", title: "Children", html: `<p>Growth plate injuries mimic sprains — tenderness over the physis needs X-ray.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Dog bite", "Irrigate, leave open/loose closure, co-amoxiclav, rabies PEP"]])}` },
{ id: "complications", title: "Complications", html: `<p>Chronic instability, missed fracture, wound infection, tetanus.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review if not improving in 1–2 weeks.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Ankle sprain", src: "images/ankle-sprain.jpg", mod: "Clinical photograph", ctx: "Lateral ligament injury", loc: "Ankle", find: "Swelling and bruising", interp: "Apply Ottawa rules", by: "Usien", page: "https://commons.wikimedia.org/wiki/File:Schwellung_Bluterguss_Baenderirss.JPG", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Twisted ankle", [F.d("Ottawa positive?"), F.a, F.b([["Yes", F.e("X-ray")], ["No", F.ok("Sprain care, early loading")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["X-ray for every sprain", "Waste", "Ottawa rules"], ["Missing tendon injury in hand wound", "Disability", "Test each tendon"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Ottawa: which foot bone tenderness needs X-ray?", "Base of 5th metatarsal or navicular.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Stiell IG, Greenberg GH, McKnight RD, et al. Decision rules for the use of radiography in acute ankle injuries. JAMA. 1993;269:1127-1132. <a href="https://doi.org/10.1001/jama.1993.03500090063034" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, sections 13.1 and 13.3.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
