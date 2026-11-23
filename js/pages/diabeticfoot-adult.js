/* Diabetic foot (IWGDF/IDSA 2023, NICE NG19) */
registerPage({
id: "diabeticfoot-adult",
title: "Diabetic Foot: Ulcers & Infection",
subtitle: "Examine every diabetic foot, grade infection and ischaemia, probe to bone, debride and off-load, and give antibiotics only for infection — matched to its severity",
age: "Adults with diabetes", specs: ["endo", "surg", "medicine"],
keywords: ["diabetic foot", "diabetic foot ulcer", "foot infection", "osteomyelitis", "probe to bone", "off-loading", "neuropathy", "peripheral arterial disease", "amputation", "Charcot foot", "IWGDF"],
related: ["dm-adult", "ssti-adult", "bonejoint-adult", "sepsis-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Most amputations in diabetes start with a small, painless ulcer. Daily foot care and early aggressive treatment save limbs.</p>
<div class="glance">
<div><h4>Assess</h4><p>Neuropathy (monofilament), pulses, ulcer depth, probe-to-bone.</p></div>
<div><h4>Infection</h4><p>Grade mild / moderate / severe (IWGDF).</p></div>
<div><h4>Treat</h4><p>Debride, off-load, antibiotics by grade, glucose control.</p></div>
<div><h4>Ischaemia</h4><p>Absent pulses → vascular referral.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Diabetes is rising fast in Bhutan; the national diabetes protocol includes annual foot screening at health centres. Surgical debridement and amputation at district/regional hospitals; vascular surgery limited — referral. Cefalexin, cloxacillin, amoxicillin–clavulanate, ceftriaxone and metronidazole are on the NEML. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Neuropathy (painless injury), ischaemia and infection combine. Pressure areas: under metatarsal heads, toes, heel.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Diabetic foot", [F.s("Neuropathy + deformity + trauma"), F.a, F.s("Ulcer; poor blood supply delays healing"), F.e("Infection → osteomyelitis → gangrene → amputation")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Common practice", "IWGDF/IDSA 2023", "This guide"], [["Uninfected ulcer", "Antibiotics given", "No antibiotics", "No antibiotics " + LB.loc()], ["Cultures", "Surface swab", "Deep tissue after debridement", "Deep tissue"]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Ulcer size, depth, probe-to-bone, discharge, smell, surrounding redness, crepitus, gangrene.</li><li>Pulses, capillary refill, monofilament, deformity, footwear.</li><li>Systemic signs (fever, tachycardia), glucose.</li></ul><h3>The typical patient</h3><p>A 60-year-old with diabetes for 15 years in Gelephu has a smelly ulcer under the big toe; redness 3 cm, probe touches bone, pulses present. <b>Moderate infection with osteomyelitis</b>: admit, X-ray, deep tissue culture, debridement, amoxicillin–clavulanate IV, off-loading, insulin, 6 weeks of antibiotics (or less after bone resection).</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Charcot foot", "Hot swollen foot, no ulcer, X-ray changes — immobilise"], ["Gout", "Joint, crystals"], ["Cellulitis without ulcer", "No portal visible"], ["Ischaemic rest pain", "Pain at night, no pulses"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Glucose, HbA1c, FBC, CRP/ESR, creatinine; X-ray foot; deep tissue/bone culture; ABPI or Doppler.</p>` },
{ id: "staging", title: "Infection grade tool", html: `<div class="calc" data-calc="diabfoot"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Debridement of dead tissue and callus; drainage of abscess.</li><li>Off-loading (no weight-bearing, total-contact cast, crutches).</li><li>Antibiotics by grade only if infected; osteomyelitis 6 weeks.</li><li>Glucose control (insulin), stop smoking, treat ischaemia.</li><li>Moist dressings; tetanus status.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("cefalexin"), "500 mg 6-hourly", "Mild"], [dr("cloxacillin"), "500 mg 6-hourly", "Mild"], [dr("coamoxiclav"), "625 mg 8-hourly / 1.2 g IV", "Mild–moderate"], [dr("ceftriaxone"), "2 g IV daily", "With metronidazole"], [dr("metronidazole"), "500 mg 8-hourly", "Anaerobes"], [dr("piptazo"), "4.5 g 8-hourly", "Severe"]])}` },
{ id: "populations", title: "Dialysis and elderly", html: `<p>High risk — inspect feet at every visit; renal dosing.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Wet gangrene with sepsis", "Emergency debridement/amputation, IV antibiotics"]])}` },
{ id: "complications", title: "Complications", html: `<p>Osteomyelitis, gangrene, sepsis, amputation, death.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Foot clinic; high-risk feet every 1–3 months; footwear; education.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Diabetic foot ulcer", src: "images/dfu.jpg", mod: "Clinical photograph", ctx: "Diabetic foot", loc: "Plantar surface", find: "Punched-out ulcer with callus", interp: "Probe to bone, off-load, assess infection", by: "Mark A. Dreyer, DPM, FACFAS", page: "https://commons.wikimedia.org/wiki/File:Diabetic_Foot_Ulcer.jpg", lic: "CC BY 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Diabetic foot ulcer", [F.s("Grade infection, check pulses, probe"), F.a, F.d("Infected?"), F.a, F.b([["Yes", F.e("Antibiotics by grade, debride")], ["No", F.ok("Off-load, dressings, no antibiotics")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Antibiotics without debridement", "Failure", "Debride"], ["Missing ischaemia", "Non-healing, amputation", "Check pulses"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Duration of antibiotics for diabetic foot osteomyelitis without resection?", "About 6 weeks.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Senneville É, Albalawi Z, van Asten SA, et al. IWGDF/IDSA guidelines on the diagnosis and treatment of diabetes-related foot infections (IWGDF/IDSA 2023). Clin Infect Dis. 2023. <a href="https://doi.org/10.1093/cid/ciad527" target="_blank" rel="noopener">doi</a></li><li id="ref-2">National Institute for Health and Care Excellence. Diabetic foot problems: prevention and management (NG19), 2015, updated 2019.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
