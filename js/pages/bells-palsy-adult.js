/* Bell's palsy — adults, with a children's section. Batch E-3 part 2, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §7.5 Bell's palsy (causes; unilateral paralysis, Bell's sign; steroid therapy — dose line garbled in the
   PDF text; protect and tape the eye during sleep; review at 1–2 months); NEML 2025.
   AAO-HNSF Clinical Practice Guideline: Bell's Palsy (Baugh et al. 2013) — full text on Wiley (action statements, steroid regimens, children,
   antivirals, eye care, House-Brackmann table, recovery figures). No newer AAO-HNSF version found (search, Nov 2026).
   Trials (abstracts read): Sullivan NEJM 2007; Engström Lancet Neurol 2008; Babl Neurology 2022 (children). Cochrane 2016/2019 and AAN 2012
   cited as supporting reviews (DOIs verified; full texts not read). NICE CKS is UK-only and could not be opened. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "bells-palsy-adult",
title: "Bell's palsy",
subtitle: "Sudden weakness of one whole side of the face, forehead included: exclude stroke and other causes, give prednisolone within 72 hours, protect the eye, and expect most people to recover",
age: "Adults (children's section included)", specs: ["neuro", "ent", "medicine", "ph"],
keywords: ["Bell's palsy", "Bells palsy", "facial palsy", "facial nerve palsy", "facial paralysis", "lower motor neuron facial palsy", "seventh nerve palsy", "prednisolone Bell's palsy", "valaciclovir", "aciclovir", "Ramsay Hunt syndrome", "House-Brackmann", "eye care facial palsy", "Bell's phenomenon"],
related: ["stroke-adult", "redeye-adult", "otitis-adult", "chickenpox-child"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Bell's palsy is the commonest cause of sudden one-sided facial weakness. It is frightening for patients, who often fear a stroke, yet most recover fully. Two things change the outcome: steroids started early and an eye that is kept safe.</p>
<div class="glance">
<div><h4>Diagnose</h4><p>Whole half of the face weak, <b>forehead included</b>, reaching its worst within 72 hours, no other neurological signs ${r(1, 2)}.</p></div>
<div><h4>Steroid</h4><p>${D("prednisolone", "Prednisolone")} 50 mg daily for 10 days, or 60 mg daily for 5 days then reduce by 10 mg a day — start within 72 hours, age 16+ ${r(2, 3, 4)}.</p></div>
<div><h4>Eye</h4><p>Lubricant drops by day, ointment and taping the lid shut at night ${r(1, 2)}.</p></div>
<div><h4>Refer</h4><p>New or worsening neurological signs, eye symptoms, or incomplete recovery at 3 months ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG says "steroid therapy", eye protection with taping during sleep, and review after 1–2 months ${r(1)}. The STG dose line is unreadable in the PDF text, so the dose here follows AAO-HNSF and the trials. Prednisolone 5 mg and 20 mg tablets, aciclovir 400 mg tablets and carboxymethylcellulose 1% eye drops are on the NEML 2025; valaciclovir is not ${r(8)}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["What it is", "Sudden lower motor neuron weakness or paralysis of the facial nerve (VII) with no identifiable cause " + r(1, 2)],
["Cause", "Unknown; viral (herpes simplex) inflammation is suspected; cold exposure has been implicated " + r(1, 2)],
["How common", "11.5–53.3 per 100,000 person-years; about 6–19 per 100,000 in children " + r(2)],
["Who", "Commonest at 15–45 years, in diabetes, immune compromise, after upper respiratory infection and in pregnancy " + r(2)],
["Natural course", "Most begin to improve within 2–3 weeks and recover fully within 3–4 months; without treatment, about 70% with complete paralysis and up to 94% with incomplete paralysis recover fully by 6 months " + r(2)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("Facial nerve in its bony canal", [F.s("Viral inflammation of the facial nerve"), F.a, F.s("Swelling inside the narrow facial canal → compression and ischaemia"), F.a, F.b([["Mild", F.ok("Conduction block — recovers in weeks")], ["Severe", F.e("Axonal damage — slower, incomplete recovery, synkinesis")]]), F.a, F.d("Lost blink and lid closure → dry, exposed cornea")])}
<p>The nerve also carries taste from the front of the tongue, tear and saliva secretion, and supply to the stapedius muscle, so patients may notice altered taste, a dry or watering eye and sounds that seem too loud ${r(2)}. Steroids are thought to work by reducing the swelling early, which is why the 72-hour window matters.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "AAO-HNSF 2013", "Trials", "This guide"], [
["Steroid", "Steroid therapy (dose unreadable)", "Within 72 h for age ≥ 16: prednisolone 50 mg × 10 d or 60 mg × 5 d + 5-day taper (strong)", "Sullivan 2007, Engström 2008: faster and more complete recovery", "Prednisolone 50 mg × 10 days " + LB.int()],
["Antiviral", "—", "Not alone (strong against); may add to steroid (option)", "No added benefit in the two largest trials", "Not routinely; consider with steroid in complete paralysis after discussion " + LB.exp()],
["Children", "Not separate", "Benefit of steroid inconclusive", "Babl 2022: no significant benefit (underpowered)", "Discuss; most recover without treatment; steroid is reasonable for severe palsy " + LB.exp()],
["Follow-up", "Review at 1–2 months", "Refer if incomplete recovery at 3 months", "—", "Review at 1–2 weeks (eye) and at 1–2 months; refer at 3 months " + LB.loc()],
["Investigations", "—", "No routine labs or imaging", "—", "Clinical diagnosis; check glucose before steroids in diabetes " + LB.exp()]
])}` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Sudden weakness of one side of the face, worst within 72 hours: mouth pulled to the other side, drooling, food collecting in the cheek ${r(1, 2)}.</li>
<li>Cannot close the eye fully; on trying, the eyeball rolls upward (Bell's phenomenon) ${r(1)}.</li>
<li>Forehead cannot wrinkle on the affected side — this is the key difference from a stroke, which spares the forehead.</li>
<li>Pain behind the ear, altered taste, sensitivity to loud sound, dry eye or watering ${r(2)}.</li>
</ul>
<h3>House-Brackmann grade (for recording recovery)</h3>
${tbl(["Grade", "Description"], [
["I", "Normal"],
["II — mild", "Slight weakness on close inspection; eye closes with minimal effort"],
["III — moderate", "Obvious but not disfiguring; forehead slight to no movement; eye closes with effort"],
["IV — moderately severe", "Obvious weakness or disfiguring asymmetry; no forehead movement; eye does not close fully"],
["V — severe", "Barely perceptible movement; incomplete eye closure"],
["VI — total", "No movement"]
])}
<p>Adapted from the House-Brackmann table reproduced by AAO-HNSF; it was designed for recovery, not initial severity ${r(2)}.</p>
<h3>The typical patient</h3>
<p>A 34-year-old farmer from Haa woke with his right eye watering and water spilling from the right side of his mouth. By the next day he cannot raise his right eyebrow or close the right eye. There is no limb weakness, no ear rash and the ear drum is normal. He is 30 hours from onset. <b>This is Bell's palsy.</b> Give prednisolone 50 mg each morning for 10 days, carboxymethylcellulose drops by day, ointment and taping at night, and review in 1–2 weeks and again at 1–2 months ${r(1, 2, 3)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `
${box("red", "Not Bell's palsy — look harder", `<ul><li>Forehead spared (upper motor neuron — stroke)</li><li>Other cranial nerves, limb weakness or ataxia</li><li>Gradual onset over weeks, or no recovery at all by 3–4 months (tumour)</li><li>Both sides affected; recurrent on the same side</li><li>Vesicles in the ear or mouth (Ramsay Hunt)</li><li>Ear discharge or a bulging drum (otitis media, cholesteatoma)</li></ul>`)}
${tbl(["Cause", "Clue"], [
["Stroke", "Forehead spared; arm or speech involved — see Stroke"],
["Ramsay Hunt syndrome (zoster)", "Severe ear pain, vesicles in the ear canal or palate, hearing loss or vertigo " + r(2)],
["Otitis media, cholesteatoma", "Gradual onset, ear pain, fever, hearing loss " + r(2)],
["Parotid or facial nerve tumour", "Slow progression, a lump, only some branches involved " + r(2)],
["Trauma (temporal bone fracture)", "Head injury history"],
["Guillain–Barré, sarcoidosis, HIV, Lyme disease, diabetes", "Bilateral palsy, other neurology, systemic features " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>Bell's palsy is a clinical diagnosis; routine laboratory tests and routine imaging are not recommended ${r(2)}.</li>
<li>Check blood glucose in known or suspected diabetes before steroids ${LB.exp()}.</li>
<li>Otoscopy in every patient; HIV test if risk factors ${LB.exp()}.</li>
<li>Electrodiagnostic testing may be offered for complete paralysis (not for incomplete) — specialist centres only ${r(2)}.</li>
<li>Imaging (MRI with contrast) for atypical features or no recovery ${r(2)}.</li>
</ul>` },
{ id: "staging", title: "Treatment planner", html: `
<p>Enter age, weight, time since onset and key features to get a regimen and the eye plan.</p>
<div class="calc" data-calc="bellsplan"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Steroid — the treatment that works</h3>
${tbl(["Regimen", "Dose", "Source"], [
["Prednisolone, 10 days", "50 mg once daily (or 25 mg twice daily) for 10 days", r(2, 3)],
["Prednisolone with taper", "60 mg daily for 5 days, then reduce by 10 mg a day for 5 days (10 days total)", r(2, 4)]
])}
<p>Start within 72 hours of onset in patients aged 16 and over; benefit after 72 hours is uncertain ${r(2)}. In Sullivan's trial, 83% recovered by 3 months with prednisolone vs 64% without, and 94% vs 82% by 9 months ${r(3)}. Use caution in diabetes, morbid obesity, previous steroid intolerance, and decide individually in pregnancy ${r(2)}.</p>
<h3>2. Antiviral — only with the steroid, if at all</h3>
<ul>
<li>Never give an antiviral alone ${r(2)}.</li>
<li>Adding one is an option: the large trials showed no added benefit (aciclovir 3-month recovery 79.7% with prednisolone vs 83% with prednisolone alone; valaciclovir did not shorten recovery) ${r(2, 3, 4)}.</li>
<li>If chosen (e.g. complete paralysis, after discussion): ${D("valaciclovir", "valaciclovir")} 1 g three times daily for 7 days (Engström trial; not on NEML) ${r(4)}, or ${D("aciclovir", "aciclovir")} 400 mg five times daily for 10 days ${LB.exp("TRIAL DOSE — ONE SOURCE")}.</li>
<li>Ramsay Hunt syndrome is different — treat as zoster with ${D("aciclovir", "aciclovir")} 800 mg five times daily for 7–10 days (FDA) plus steroid, and refer to ENT ${LB.exp()}.</li>
</ul>
<h3>3. Eye care — for every patient who cannot close the eye</h3>
<ul>
<li>${D("carboxymethylcellulose", "Lubricant drops")} (carboxymethylcellulose 1%, NEML) frequently by day; ${D("white-soft-paraffin", "ointment")} at night ${r(2, 8)}.</li>
<li>Close the lid and tape it during sleep (STG); moisture chambers or a clear cover also work ${r(1, 2)}.</li>
<li>Sunglasses outdoors in wind and dust ${r(2)}.</li>
<li>Pain, redness, reduced vision or a foreign-body feeling → same-day eye review ${r(2)}.</li>
</ul>
<h3>4. Other</h3>
<p>No recommendation can be made for or against surgical decompression, acupuncture or physical therapy ${r(2)}. Simple facial exercises and massage are harmless and patients like them ${LB.exp()}.</p>` },
{ id: "drugs", title: "Medicines (NEML 2025)", html: `${tbl(["Medicine", "Use", "NEML"], [
[D("prednisolone", "Prednisolone"), "Steroid course", "5 mg and 20 mg tablets"],
[D("aciclovir", "Aciclovir"), "Ramsay Hunt; optional add-on", "400 mg tablet; 500 mg injection; 3% eye ointment"],
[D("valaciclovir", "Valaciclovir"), "Optional add-on (trial drug)", "Not listed"],
[D("carboxymethylcellulose", "Carboxymethylcellulose 1%"), "Eye lubricant", "1% eye drops"],
[D("white-soft-paraffin", "White soft paraffin"), "Night-time lubricant (eye-grade ointment)", "1 kg jar is skin-grade — use an ophthalmic preparation"]
])}` },
{ id: "populations", title: "Children and other groups", html: `
<h3>Children</h3>
<ul>
<li>Bell's palsy is less common in children (about 6–19 per 100,000 a year) and the outlook is better than in adults ${r(2)}.</li>
<li>Steroid evidence is weak: in the only placebo-controlled trial (187 children aged 6 months to 17 years, prednisolone about 1 mg/kg for 10 days), complete recovery at 1 month was 49% with prednisolone and 57% with placebo; by 6 months it was 99% and 93% — no significant difference, but the trial was too small to exclude a benefit or harm ${r(5)}.</li>
<li>Look harder for a cause in children: otitis media, zoster, trauma, hypertension and tumours ${LB.exp()}.</li>
<li>Eye care matters just as much ${r(2)}.</li>
</ul>
${tbl(["Group", "What changes"], [
["Pregnancy", "Bell's palsy is more common in pregnancy; individual decision on steroids — check BP and glucose (pre-eclampsia, diabetes) " + r(2) + " " + LB.exp()],
["Diabetes", "Steroids raise glucose — monitor and adjust treatment " + r(2)],
["HIV or immune compromise", "Higher risk; consider zoster and other causes " + r(2)],
["Older adults", "Slower recovery; think of tumour and stroke " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Facial weakness 4 days ago, forehead weak, otherwise well", "Over 72 hours — steroid benefit uncertain; still protect the eye; discuss steroid " + r(2)],
["Right face weak but forehead wrinkles normally, slurred speech", "Upper motor neuron — stroke pathway now"],
["Painful ear with vesicles, facial palsy and vertigo", "Ramsay Hunt: aciclovir + prednisolone, ENT referral"],
["No movement at all on day 3", "Complete paralysis: steroid; antiviral optional; specialist for nerve testing if available " + r(2)],
["Still asymmetric at 3 months", "Refer to ENT / facial nerve specialist; consider MRI " + r(2)],
["8-year-old, onset yesterday, eye closes with effort", "Explain good prognosis; eye care; steroid optional after discussion " + r(5)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Exposure keratitis and corneal ulcer, with risk to vision ${r(2)}.</li>
<li>Incomplete recovery — up to about 30% overall ${r(2)}.</li>
<li>Synkinesis (eye closes when smiling), contracture, hemifacial spasm, "crocodile tears" ${r(2)}.</li>
<li>Psychological distress from altered appearance ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Review the eye within 1–2 weeks if closure is incomplete ${LB.exp()}.</li>
<li>Review recovery after 1–2 months (STG) ${r(1)}.</li>
<li>Reassess or refer at any time for new or worsening neurology or eye symptoms, and at 3 months if recovery is incomplete ${r(2)}.</li>
<li>Reassure: most people improve within weeks and recover within months ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Bell's palsy (illustration)", src: "images/bells-palsy-cdc.jpg", mod: "Illustration", ctx: "Acute facial nerve palsy", loc: "Left side of the face", find: "Drooping mouth corner and flattened forehead and nasolabial fold on one side", interp: "Whole half of the face is weak — lower motor neuron pattern", by: "Centers for Disease Control and Prevention", page: "https://commons.wikimedia.org/wiki/File:Bells_Palsy_CDC.jpg", lic: "Public domain" })}${fig({ title: "Bell's palsy — attempting to smile", src: "images/bells-palsy-smile.jpg", mod: "Clinical photograph", ctx: "Bell's palsy", find: "Mouth pulled to the healthy side when smiling", interp: "Asymmetry is most obvious on movement", by: "Shantoo", page: "https://commons.wikimedia.org/wiki/File:Bell%27s_Palsy_smiling.jpg", lic: "CC0" })}${fig({ title: "Ramsay Hunt syndrome (illustration)", src: "images/ramsay-hunt.png", mod: "Illustration", ctx: "Herpes zoster oticus", find: "Vesicles in the external ear with ipsilateral facial palsy", interp: "Not Bell's palsy — treat with aciclovir plus steroid and refer", by: "Worme M, Chada R, Lavallee L", page: "https://commons.wikimedia.org/wiki/File:Ramsey_Hunt_Syndrome.png", lic: "CC BY 2.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Acute one-sided facial weakness", [F.d("Forehead weak too? No other neurology?"), F.a, F.b([["No", F.e("Stroke / other cause — urgent assessment")], ["Yes", F.d("Ear vesicles, otitis, gradual onset, bilateral?")]]), F.a, F.b([["Yes", F.e("Ramsay Hunt / secondary cause — treat and refer")], ["No", F.s("Bell's palsy")]]), F.a, F.ok("Within 72 h: prednisolone 10 days; eye care for all; review 1–2 months; refer if not recovered at 3 months")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Calling every facial droop Bell's palsy", "Stroke missed", "Check the forehead and limbs"],
["Antiviral alone", "No benefit; steroid delayed", "Steroid first"],
["Forgetting the eye", "Corneal ulcer", "Drops, ointment, tape at night"],
["Not looking in the ear", "Ramsay Hunt or otitis missed", "Otoscopy every time"],
["Starting steroids without checking glucose in diabetes", "Hyperglycaemia", "Check and plan"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "How do you tell Bell's palsy from stroke at the bedside?", "Bell's palsy weakens the forehead as well; a stroke usually spares the forehead and often affects the arm or speech.")}
${qa("Intern/MO", "Give one evidence-based prednisolone regimen.", "50 mg daily for 10 days, or 60 mg daily for 5 days then reduce by 10 mg a day — within 72 hours.")}
${qa("Specialist", "What does AAO-HNSF say about antivirals?", "Never alone (strong recommendation against); adding to steroids is an option with small possible benefit.")}
${qa("Specialist", "When should a patient be referred?", "New or worsening neurological signs or eye symptoms at any time, or incomplete recovery at 3 months.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §7.5 Bell's palsy.</li>
<li id="ref-2">Baugh RF, Basura GJ, Ishii LE, et al. Clinical practice guideline: Bell's palsy. Otolaryngol Head Neck Surg 2013;149(3 Suppl):S1–S27. <a href="https://doi.org/10.1177/0194599813505967" target="_blank" rel="noopener">doi:10.1177/0194599813505967</a></li>
<li id="ref-3">Sullivan FM, Swan IRC, Donnan PT, et al. Early treatment with prednisolone or acyclovir in Bell's palsy. N Engl J Med 2007;357:1598–1607. <a href="https://doi.org/10.1056/NEJMoa072006" target="_blank" rel="noopener">doi:10.1056/NEJMoa072006</a></li>
<li id="ref-4">Engström M, Berg T, Stjernquist-Desatnik A, et al. Prednisolone and valaciclovir in Bell's palsy: a randomised, double-blind, placebo-controlled, multicentre trial. Lancet Neurol 2008;7:993–1000. <a href="https://doi.org/10.1016/S1474-4422(08)70221-7" target="_blank" rel="noopener">doi:10.1016/S1474-4422(08)70221-7</a></li>
<li id="ref-5">Babl FE, Herd D, Borland ML, et al. Efficacy of prednisolone for Bell palsy in children: a randomized, double-blind, placebo-controlled, multicenter trial. Neurology 2022;99(20):2241–2252. <a href="https://doi.org/10.1212/WNL.0000000000201164" target="_blank" rel="noopener">doi:10.1212/WNL.0000000000201164</a></li>
<li id="ref-6">Madhok VB, Gagyor I, Daly F, et al. Corticosteroids for Bell's palsy (idiopathic facial paralysis). Cochrane Database Syst Rev 2016;7:CD001942. <a href="https://doi.org/10.1002/14651858.CD001942.pub5" target="_blank" rel="noopener">doi:10.1002/14651858.CD001942.pub5</a>. And: Gagyor I, Madhok VB, Daly F, Sullivan F. Antiviral treatment for Bell's palsy. Cochrane Database Syst Rev 2019;9:CD001869. <a href="https://doi.org/10.1002/14651858.CD001869.pub9" target="_blank" rel="noopener">doi:10.1002/14651858.CD001869.pub9</a></li>
<li id="ref-7">Gronseth GS, Paduga R. Evidence-based guideline update: steroids and antivirals for Bell palsy. Neurology 2012;79:2209–2213. <a href="https://doi.org/10.1212/WNL.0b013e318275978c" target="_blank" rel="noopener">doi:10.1212/WNL.0b013e318275978c</a></li>
<li id="ref-8">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Steroid regimens", "<span class='pass'>Checked</span>", "AAO-HNSF 2013 full text + Sullivan and Engström trials"],
["Antiviral evidence and valaciclovir dose", "<span class='pass'>Checked</span>", "AAO-HNSF + Engström abstract"],
["Aciclovir 400 mg five times daily", "<span class='unv'>One source</span>", "Trial dose; marked on the page"],
["Children", "<span class='pass'>Checked</span>", "AAO-HNSF + Babl 2022 abstract"],
["STG steroid dose", "<span class='unv'>Unreadable</span>", "Garbled in the STG PDF text; AAO-HNSF dose used"],
["House-Brackmann table", "<span class='pass'>Checked</span>", "As reproduced in AAO-HNSF table 2 (paraphrased)"],
["Images", "<span class='pass'>Checked</span>", "3 Commons images, licence checked per file"]
], "qc")}<p>Supporting reviews: Cochrane ${r(6)}; AAN 2012 ${r(7)}.</p>` }
]
});
})();
