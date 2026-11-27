/* Oral health: teething, children and pregnancy, bleeding and dry socket after extraction, jaw joint (TMD) — all ages. Batch E-12, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §17.2 Teething, §17.3 Bleeding after extraction, §17.10 TMD, §17.11 Oral health in pregnancy, §17.12 Oral hygiene
   (filtered text — some numbers missing); Merck Manual Professional 'Toothache and infection' (teething: weight-based paracetamol/ibuprofen, cold
   teething rings; benzocaine not under 2 years), 'Postextraction problems' (ice; gauze or tea bag biting 1 h; anticoagulants; dry socket),
   'Temporomandibular myofascial pain syndrome'; NEML 2025. Not read: WHO/FDI fluoride toothpaste guidance — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "oral-health",
title: "Oral health — teething, tooth care, bleeding after extraction and jaw joint pain",
subtitle: "Everyday dental problems seen in clinics: teething babies (paracetamol, cold teethers, no numbing gels), brushing advice for families and pregnant women, bleeding sockets (firm gauze pressure), dry socket, and jaw joint pain (self-care, soft diet, splint)",
age: "All ages", specs: ["ent", "paeds", "obg", "medicine"],
keywords: ["teething", "teething gel", "benzocaine", "oral hygiene", "tooth brushing", "fluoride toothpaste", "early childhood caries", "bottle caries", "pregnancy gingivitis", "pregnancy gum", "bleeding after extraction", "post extraction bleeding", "tooth socket bleeding", "dry socket", "alveolitis", "temporomandibular disorder", "TMD", "jaw pain", "jaw clicking", "bruxism", "teeth grinding"],
related: ["toothache", "dental-trauma", "oral-lesions", "bleeding-adult", "ftt-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Teething</h4><p>Irritability, drooling, gnawing; paracetamol for pain; teething ring; no benzocaine/lidocaine gels; fever or diarrhoea are not 'just teething' ${r(1)} ${r(5)}.</p></div>
<div><h4>Bleeding socket</h4><p>Bite firmly on clean gauze (or a tea bag) for up to an hour without checking; ice pack outside; no spitting, rinsing, smoking, alcohol or exertion ${r(2)} ${r(6)}.</p></div>
<div><h4>Dry socket</h4><p>Severe pain from day 2–3 after extraction, often to the ear; saline rinse and dressing by the dentist ${r(6)}.</p></div>
<div><h4>Jaw joint (TMD)</h4><p>Jaw pain, clicking, limited opening, worse chewing or stress: reassurance, heat, soft diet, splint, physiotherapy, simple analgesics ${r(3)} ${r(7)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG hygiene advice: wipe babies' gums after feeds with a clean moist cloth; no bottle in bed; few sugary drinks; supervise brushing; a smear of toothpaste for young children and more for children over 3; soft brush, change every 3 months; brush at least twice a day, especially at night; floss daily; 6-monthly dental checks ${r(4)}. Pregnancy: gingivitis, gum overgrowth, pyogenic granuloma and enamel erosion from vomiting are common — reinforce hygiene and dental checks ${r(4)}.</p>`)}
` },
{ id: "overview", title: "Topics", html: `${tbl(["Topic", "Key points"], [
["Teething", "Begins in the first year; discomfort, drooling rash, disturbed sleep, chewing " + r(1)],
["Early childhood caries", "Bottle at night, sugary drinks " + r(4)],
["Pregnancy", "Gingivitis, gum hyperplasia, pyogenic granuloma, salivary change, acid erosion " + r(4)],
["Post-extraction bleeding", "Small vessels; local measures usually work " + r(2) + r(6)],
["Dry socket", "Clot lost; lower molars, smokers, older, oral contraceptives " + r(6)],
["TMD", "Injury, grinding/clenching, wear, malalignment, arthritis, stress " + r(3)]
])}` },
{ id: "patho", title: "Why bleeding restarts", html: `<p>The clot in the socket is fragile in the first day; spitting, rinsing, sucking, smoking, alcohol and raised blood pressure dislodge it ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["Gauze pressure time", "At least [minutes unreadable]", "Continuous biting for 1 hour, do not check; repeat 2–3 times", "Firm pressure up to 1 hour " + r(2) + r(6)],
["Anticoagulants before minor dental work", "—", "Usually continue; individualise for invasive procedures", "Do not stop without the prescriber " + r(6)]
])}` },
{ id: "presentation", title: "Assessment", html: `<p>Teething: exclude infection if fever, diarrhoea or unusual symptoms ${r(1)}. Bleeding: amount (a little blood in saliva looks a lot), anticoagulants, liver disease, bleeding disorders ${r(6)} ${LB.exp()}.</p>
<div class="calc" data-calc="postext"></div>` },
{ id: "ddx", title: "Differential", html: `${tbl(["Problem", "Think of"], [
["'Teething' with fever", "Otitis, UTI, other infection — not teething " + r(1) + " " + P("fever-approach", "fever approach")],
["Bleeding that will not stop", "Anticoagulants, bleeding disorder, liver disease " + P("bleeding-adult", "bleeding") + " " + LB.exp()],
["Jaw pain", "Dental infection, ear disease, cardiac pain " + P("toothache", "toothache")]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Persistent post-extraction bleeding: FBC, clotting (INR if on warfarin) ${LB.exp()}.</p>` },
{ id: "staging", title: "When to refer", html: `<ul><li>Bleeding not controlled after 2–3 rounds of pressure → dental team (suture, haemostatic agents) ${r(2)} ${r(6)}.</li><li>Swelling increasing after 3 days or severe pain → dentist ${r(6)}.</li><li>TMD not improving with self-care ${r(3)}.</li></ul>` },
{ id: "manage", title: "Management", html: `
<h3>Teething</h3><ul><li>Gently massage gums; teething ring or silicone teether (cold) ${r(1)} ${r(5)}.</li><li>Paracetamol syrup for pain (STG: 125 mg as needed) — use weight-based dosing ${r(1)} ${r(5)}.</li><li>Avoid benzocaine or lidocaine teething gels — harmful if swallowed (methaemoglobinaemia) ${r(1)} ${r(5)}.</li></ul>
<h3>Bleeding after extraction</h3><ol><li>Remove loose clot; fold clean gauze (or a damp tea bag) over the socket; bite firmly for up to an hour without checking; repeat 2–3 times ${r(6)}; STG: replace gauze and continue pressure ${r(2)}.</li><li>Ice pack outside the cheek (wrapped) ${r(2)}.</li><li>Head elevated; no spitting, rinsing, heavy lifting, bending; no smoking or alcohol for 24 hours ${r(2)}.</li><li>Persisting: dental team — local anaesthetic, curettage, suture, haemostatic agent ${r(6)}.</li></ol>
<h3>Dry socket</h3><p>Saline irrigation; analgesic dressing in the socket by the dentist; analgesia ${r(6)}.</p>
<h3>TMD</h3><ul><li>Reassure; reduce clenching and grinding; soft diet, no gum ${r(3)} ${r(7)}.</li><li>Heat to the jaw; dentist-made splint (not over-the-counter guards long term); physiotherapy exercises ${r(3)} ${r(7)}.</li><li>Paracetamol or NSAIDs; no opioids for chronic pain; an antidepressant can help chronic pain (Merck) ${r(7)}; the STG adds a bedtime medicine for 1 month (name unreadable in our copy) ${r(3)}.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `<ul><li>${D("paracetamol", "Paracetamol")} — teething, pain ${r(1)}.</li><li>${D("ibuprofen", "Ibuprofen")} ${r(5)}.</li><li>${D("tranexamic-acid", "Tranexamic acid")} — mouthwash or tablets for bleeding in specialist hands ${LB.exp("NOT IN SOURCES READ")}.</li></ul>` },
{ id: "populations", title: "Special situations", html: `<p>On anticoagulants: most minor dental work without stopping ${r(6)}. Pregnancy: dental care is safe; treat gum disease ${r(4)} ${LB.exp()}.</p>` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Man bleeding 4 hours after extraction, keeps spitting", "Bite on gauze firmly 1 hour without checking, ice, head up, no spitting; dentist if continues " + r(2) + r(6)],
["8-month-old with drooling and 39 °C fever", "Do not blame teething — look for infection " + r(1)],
["Woman with jaw clicking and morning jaw ache", "TMD/bruxism: self-care, soft diet, heat, dentist splint " + r(3) + r(7)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Early childhood caries ${r(4)}.</li><li>Methaemoglobinaemia from benzocaine gels ${r(5)}.</li><li>Chronic jaw pain ${r(7)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>6-monthly dental checks for everyone ${r(4)}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Bleeding socket", [F.s("Remove loose clot; gauze; bite 1 hour"), F.a, F.d("Still bleeding after 2–3 rounds?"), F.a, F.b([["No", F.ok("Home advice: no spitting/smoking 24 h")], ["Yes", F.e("Dental team: suture, haemostatic; check anticoagulants")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Checking the gauze every few minutes", "Clot keeps breaking", "Leave it for an hour " + r(6)],
["Numbing gels for teething", "Toxic if swallowed", "Cold teether, paracetamol " + r(1) + r(5)],
["Calling fever 'teething'", "Missed infection", "Assess fever separately " + r(1)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "First-aid for a bleeding tooth socket?", "Firm biting on folded gauze (or tea bag) for up to an hour without checking, ice outside, no spitting or rinsing.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §17.2 Teething.</li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §17.3 Bleeding after extraction.</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §17.10 Temporomandibular disorders.</li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §17.11 Oral health during pregnancy; §17.12 Oral hygiene practices.</li>
<li id="ref-5">Merck Manual Professional Edition. Toothache and infection (teething); accessed Nov 2026.</li>
<li id="ref-6">Merck Manual Professional Edition. Postextraction problems; accessed Nov 2026.</li>
<li id="ref-7">Merck Manual Professional Edition. Temporomandibular myofascial pain syndrome; accessed Nov 2026.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §17.2, 17.3, 17.10–17.12", "<span class='pass'>Checked</span>", "Some numbers unreadable"],
["Merck pages", "<span class='pass'>Checked</span>", "Read"],
["WHO/FDI fluoride guidance", "<span class='unv'>Not read</span>", "Toothpaste amounts not quantified"],
["Calculator", "<span class='pass'>Checked</span>", "Post-extraction steps"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
