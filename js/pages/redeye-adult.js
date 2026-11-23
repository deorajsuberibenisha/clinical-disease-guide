/* Red eye — adults */
registerPage({
id: "redeye-adult",
title: "Red Eye: Conjunctivitis, Keratitis & Acute Glaucoma — Adults",
subtitle: "Most red eyes are conjunctivitis and settle; a few threaten sight within hours. Check vision, pain, photophobia, cornea and pupil, and refer those that need an eye unit today",
age: "Adults", specs: ["eye", "emerg"],
keywords: ["red eye", "conjunctivitis", "bacterial conjunctivitis", "viral conjunctivitis", "allergic conjunctivitis", "keratitis", "corneal ulcer", "acute angle-closure glaucoma", "iritis", "uveitis", "subconjunctival haemorrhage", "chloramphenicol eye drops", "acetazolamide", "timolol", "pilocarpine"],
related: ["redeye-child", "headinjury-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">A red eye with normal vision, grittiness and discharge is usually conjunctivitis. Reduced vision, real pain, photophobia, a corneal spot or an odd pupil mean something more serious.</p>
<div class="glance">
<div><h4>Treat here</h4><ul><li>Bacterial conjunctivitis: ${dr("chloramphenicol_eye", "chloramphenicol")} drops and ointment</li><li>Viral: hygiene, cool compresses</li><li>Allergic: antihistamine</li><li>Subconjunctival haemorrhage: reassure, check BP</li></ul></div>
<div><h4>Refer today</h4><ul><li>Reduced vision, pain, photophobia</li><li>Corneal ulcer or opacity</li><li>Fixed mid-dilated pupil, hard eye</li><li>Contact lens wearer with pain</li><li>Chemical or penetrating injury</li></ul></div>
<div><h4>Acute glaucoma</h4><p>${dr("acetazolamide")} 500 mg, ${dr("timolol")}, then ${dr("pilocarpine")}; refer for laser.</p></div>
<div><h4>Never</h4><p>Steroid drops without a slit lamp.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG chapter 15 covers bacterial and viral conjunctivitis, corneal ulcer, iritis and glaucoma (analgesia and urgent referral). Eye units are at the national and regional referral hospitals, with ophthalmic staff in many districts. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `
${tbl(["Cause", "Key features", "Urgency"], [
["Bacterial conjunctivitis", "Sticky purulent discharge, lids stuck in the morning, normal vision", "Treat"],
["Viral conjunctivitis", "Watery, gritty, follicles, preauricular node, recent cold; both eyes in turn", "Self-limiting"],
["Allergic conjunctivitis", "Itching, both eyes, seasonal", "Treat"],
["Subconjunctival haemorrhage", "Painless bright red patch, normal vision", "Reassure"],
["<b>Keratitis / corneal ulcer</b>", "Pain, photophobia, reduced vision, white spot; trauma with vegetable matter (fungal), contact lenses", "Same day"],
["<b>Acute iritis (anterior uveitis)</b>", "Ache, photophobia, redness around the cornea, small pupil", "Same day"],
["<b>Acute angle-closure glaucoma</b>", "Severe pain, haloes, headache, vomiting, hazy cornea, fixed mid-dilated pupil, hard eye", "Emergency"],
["Scleritis", "Severe boring pain, tender, autoimmune disease", "Same day"]])}
` },
{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Where the redness comes from", [F.b([["Conjunctiva", F.s("Diffuse redness, discharge, normal vision")], ["Cornea / iris", F.s("Ciliary flush around the cornea, pain, photophobia, reduced vision")], ["Angle closure", F.e("Aqueous outflow blocked → pressure rises to 50–80 mmHg → optic nerve damage within hours")]]), F.a, F.ok("Vision, pain and pupil sort benign from sight-threatening")])}
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "International", "This guide"], [["Acute glaucoma before referral", "Analgesia and refer", "Acetazolamide, topical timolol, pilocarpine once pressure falls, then laser", "Start pressure-lowering drugs before transfer " + LB.loc()], ["Viral conjunctivitis", "Chloramphenicol to prevent secondary infection", "No antibiotics routinely", "Antibiotic only if secondary bacterial infection"]])}
` },
{ id: "presentation", title: "Assessment", html: `
<ul><li><b>Visual acuity</b> in every red eye (with glasses or pinhole).</li><li>Pain vs grittiness; photophobia; discharge type; contact lenses; trauma.</li><li>Look: distribution of redness, cornea (fluorescein if available), pupil size and reaction, eye pressure by gentle palpation (compare with the other eye).</li></ul>
${box("red", "Refer today", `<ul><li>Reduced vision</li><li>Moderate or severe pain, photophobia</li><li>Corneal opacity or staining</li><li>Abnormal pupil, hard eye</li><li>Chemical or penetrating injury</li></ul>`)}
<h3>The typical patient</h3>
<p>A 58-year-old woman in Trashigang had sudden severe left eye pain with blurred vision and haloes after an evening in a dim room, then vomited. The eye is red, the cornea hazy, the pupil fixed and mid-dilated, and the eye feels hard. <b>This is acute angle-closure glaucoma</b>: older woman, dim light, pain with haloes and vomiting, hazy cornea and fixed pupil. Give acetazolamide 500 mg, timolol drops, analgesia and an antiemetic, and refer immediately for laser.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Distinguishing feature"], [["Migraine", "Normal eye, normal pressure"], ["Sinusitis", "Facial pain, normal eye"], ["Orbital cellulitis", "Lid swelling, painful eye movements, fever: emergency"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Mostly clinical: visual acuity, fluorescein staining, tonometry at eye units. Swab purulent discharge in neonates, severe or recurrent cases. Check BP and clotting for recurrent subconjunctival haemorrhage.</p>` },
{ id: "staging", title: "Triage tool", html: `<div class="calc" data-calc="redeye"></div>` },
{ id: "manage", title: "Management", html: `
<ul><li><b>Bacterial conjunctivitis:</b> clean lids; ${dr("chloramphenicol_eye", "chloramphenicol")} drops 2–3-hourly for 2 days then 4 times daily, ointment at night, 5–7 days (STG).</li>
<li><b>Viral:</b> cool compresses, artificial tears, strict hand hygiene, no shared towels; refer if vision falls or a membrane forms.</li>
<li><b>Allergic:</b> avoid triggers, cold compresses, oral antihistamine.</li>
<li><b>Corneal ulcer:</b> remove superficial foreign body; hourly antibiotic drops (chloramphenicol or ciprofloxacin), ointment at night, no patch in contact lens wearers, refer same day (STG).</li>
<li><b>Acute angle closure:</b> ${dr("acetazolamide")} 500 mg IV or orally (avoid in sulfa allergy, severe kidney disease), ${dr("timolol")} 0.5% one drop (not in asthma), ${dr("pilocarpine")} 2% once pressure begins to fall, analgesia, antiemetic, lie flat; immediate referral for laser iridotomy (the other eye too).</li>
<li><b>Iritis:</b> refer for steroid and dilating drops.</li>
<li><b>Chemical injury:</b> irrigate with saline or clean water for at least 30 minutes immediately, then refer.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("chloramphenicol_eye"), "Drops 2–3-hourly then QDS; ointment nightly", "5–7 days"], [dr("acetazolamide"), "500 mg IV/oral", "Angle closure"], [dr("timolol"), "0.5%, 1 drop", "Not in asthma"], [dr("pilocarpine"), "2%, 1 drop every 15 min × 4", "After pressure falls"]])}` },
{ id: "populations", title: "Special groups", html: `<ul><li><b>Contact lens wearers:</b> stop lenses; painful red eye is keratitis until proven otherwise.</li><li><b>Diabetes, HIV:</b> herpes zoster ophthalmicus and fungal ulcers.</li><li><b>Herpes zoster on the forehead/nose tip:</b> oral aciclovir and eye referral.</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Farmer with corneal scratch from a plant", "Fungal keratitis risk: refer early"], ["Red eye after hammering metal", "Intraocular foreign body: X-ray, refer"]])}` },
{ id: "complications", title: "Complications and prognosis", html: `<p>Corneal scarring and perforation, permanent glaucomatous visual loss, blindness. Conjunctivitis heals without sequelae.</p>` },
{ id: "followup", title: "Follow-up and counselling", html: `${box("red", "Come back at once if", `<ul><li>Vision gets worse</li><li>Pain increases or light hurts</li><li>No better after 3–5 days of drops</li></ul>`)}` },
{ id: "images", title: "Images", html: `<div class="pair">
${fig({ title: "Conjunctivitis", src: "images/conjunctivitis-swollen.jpg", mod: "Clinical photograph", ctx: "Red, swollen eye", loc: "Conjunctiva and lids", find: "Diffuse redness and lid swelling", signs: "Conjunctival injection", interp: "Conjunctivitis: check vision and discharge type", by: "Tanalai", page: "https://commons.wikimedia.org/wiki/File:Swollen_eye_with_conjunctivitis.jpg", lic: "CC BY 3.0" })}
${fig({ title: "Acute angle-closure glaucoma", src: "images/aacg-eye.jpg", mod: "Clinical photograph", ctx: "Painful red eye", loc: "Cornea and pupil", find: "Hazy cornea, mid-dilated pupil, redness around the cornea", signs: "Acute angle closure", interp: "Emergency: lower pressure and refer for laser", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:Acute_angle_closure_glaucoma.JPG", lic: "CC BY-SA 3.0" })}</div>` },
{ id: "flows", title: "Clinical flowcharts", html: `${F.chart("Red eye", [F.s("Visual acuity, pain, photophobia, cornea, pupil"), F.a, F.d("Any red flag?"), F.a, F.b([["Yes", F.e("Refer today (glaucoma: drugs first)")], ["No", F.ok("Conjunctivitis type → treat; review 3–5 days")]])])}` },
{ id: "pearls", title: "Clinical pearls and common mistakes", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Not checking vision", "Missed keratitis or glaucoma", "Acuity every time"], ["Steroid drops for a red eye", "Herpetic or fungal ulcer worsens", "Never without slit lamp"], ["Calling glaucoma a migraine", "Blindness", "Look at the eye"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Student", "Name three red flags in a red eye.", "Reduced vision, significant pain or photophobia, corneal opacity, abnormal pupil, hard eye.")}${qa("Intern/MO", "Pre-referral treatment of acute angle closure?", "Acetazolamide 500 mg, timolol 0.5%, pilocarpine 2% once pressure falls, analgesia, antiemetic.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Azari AA, Arabi A. Conjunctivitis: a systematic review. <i>J Ophthalmic Vis Res</i> 2020;15:372–395. <a href="https://doi.org/10.18502/jovr.v15i3.7456" target="_blank" rel="noopener">doi:10.18502/jovr.v15i3.7456</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, chapter 15 (eye); via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-3">Community Eye Health Journal. Emergency management: angle-closure glaucoma. <a href="https://www.cehjournal.org/" target="_blank" rel="noopener">cehjournal.org</a></li></ol>` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["STG chapter 15", "<span class='flag'>Partly garbled PDF</span>", "App summaries used"], ["Pre-referral glaucoma drugs", "<span class='pass'>Checked</span>", "NEML: acetazolamide, timolol, pilocarpine listed"]], "qc")}` }
]
});
