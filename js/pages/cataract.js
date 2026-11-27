/* Cataract (adult and congenital) and corneal opacity — all ages. Batch E-15, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §15.8 Cataract and §15.5 Corneal opacity (filtered text); NICE NG77 Cataracts in adults (2017: information, referral
   decision, do not restrict by visual acuity, biometry, risk stratification, anaesthesia, intracameral cefuroxime, steroid/NSAID drops, bilateral
   surgery, no routine first-day review); Merck Manual Professional 'Cataract' (types, symptoms, red reflex, surgical indications, techniques) and
   'Congenital cataract' (Apr 2026: 4–24/10,000; unilateral surgery within 4–6 weeks; amblyopia); NEML 2025. Not read: WHO eye care report, IAPB data
   for Bhutan — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "cataract",
title: "Cataract and corneal opacity — all ages",
subtitle: "Slow, painless blurring with glare in an older adult, or a white pupil or abnormal red reflex in a baby: adults are referred when vision limits their life (not by a fixed acuity), and a baby's cataract is an urgent referral to prevent lifelong amblyopia",
age: "All ages", specs: ["eye", "medicine", "paeds", "neo"],
keywords: ["cataract", "lens opacity", "senile cataract", "age-related cataract", "nuclear cataract", "posterior subcapsular cataract", "cortical cataract", "congenital cataract", "white pupil", "leukocoria", "red reflex", "amblyopia", "cataract surgery", "phacoemulsification", "intraocular lens", "SICS", "corneal opacity", "corneal scar", "corneal transplant", "endophthalmitis after cataract surgery"],
related: ["redeye-adult", "redeye-child", "eye-injury", "dm-adult", "rop-child", "eyelid-disorders"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Cataract — clouding of the lens — is the leading cause of blindness worldwide and the commonest cause of avoidable blindness in the community; about 54% of people aged 60 or more have cataract ${r(1)} ${r(3)}. Surgery restores sight ${r(1)}.</p>
<div class="glance">
<div><h4>Adult</h4><p>Gradual painless blur, glare and halos, needing more light, colours fade; white or grey pupil in advanced cataract ${r(1)} ${r(3)}.</p></div>
<div><h4>Check</h4><p>Visual acuity each eye; red reflex with the ophthalmoscope at about 30 cm through a dilated pupil — dark spots or lost reflex ${r(3)}.</p></div>
<div><h4>Refer</h4><p>When cataract limits daily life — NICE says not to restrict surgery by visual acuity alone ${r(2)}.</p></div>
<div><h4>Baby</h4><p>Abnormal red reflex or white pupil: urgent ophthalmology — unilateral congenital cataract needs surgery in the first 4–6 weeks ${r(4)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: refer if vision is affected; people need not remain needlessly blind when simple surgery restores vision ${r(1)}. Cataract surgery is done by ophthalmologists at JDWNRH and regional hospitals and in outreach eye camps ${LB.loc()} ${LB.exp("SERVICE DETAILS NOT CONFIRMED")}. Corneal scars from old ulcers and injuries are a second preventable cause of blindness — protect eyes at work, treat corneal ulcers early, give vitamin A where indicated ${r(5)}.</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Type", "Features"], [
["Nuclear", "Centre of lens; distance vision worsens; near vision may briefly improve ('second sight') " + r(3)],
["Posterior subcapsular", "Glare, worse in bright light and reading; younger patients, steroids, diabetes " + r(3)],
["Cortical", "Spoke-like at the edge; affects vision when it reaches the centre " + r(3)],
["Congenital / developmental", "4–24 per 10,000 births; genetic, rubella, galactosaemia, chromosomal; unilateral or bilateral " + r(4)],
["Corneal opacity (not a cataract)", "White scar on the cornea after ulcer or injury; poor vision if over the pupil " + r(5)]
])}` },
{ id: "patho", title: "Risk factors", html: `${F.chart("Lens clouding", [F.s("Ageing lens proteins"), F.a, F.d("Plus: diabetes, smoking, alcohol, UV light, trauma, steroids, uveitis, radiation, undernutrition"), F.a, F.e("Opacity → blur, glare; rarely swollen lens → angle-closure glaucoma")])}<p>${r(3)}</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Merck", "NICE NG77", "This guide"], [
["When to operate", "Usually best-corrected vision worse than 6/12, or disabling glare, or vision limiting activities", "Decide with the person on impact on life; do not restrict by visual acuity", "Impact on life first; acuity as a guide " + r(2) + r(3)],
["Asymptomatic cataract", "No indication to remove", "—", "Do not operate " + r(3)]
])}` },
{ id: "presentation", title: "Clinical features", html: `${tbl(["Feature", "Detail"], [
["Symptoms", "Slow painless blur, loss of contrast, glare (halos, starbursts at night), needs more light, colours dull; rarely monocular double vision " + r(3)],
["Signs", "Reduced acuity; dark spots in red reflex or absent reflex; white, grey or brown pupil " + r(1) + r(3)],
["Child", "White pupil, abnormal red reflex, squint, nystagmus, poor visual behaviour " + r(4) + " " + LB.exp()]
])}
<div class="calc" data-calc="cataractref"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Refractive error", "Improves with pinhole/glasses " + LB.exp()],
["Diabetic retinopathy, macular degeneration", "Fundus changes; cataract may hide them " + r(3)],
["Glaucoma", "Field loss, cupped disc " + P("redeye-adult", "red eye / glaucoma")],
["Corneal opacity", "White mark on cornea, not behind the pupil " + r(5)],
["Leukocoria in a child: retinoblastoma, ROP, retinal detachment", "Urgent ophthalmology " + P("rop-child", "ROP") + " " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Visual acuity, pinhole, red reflex, dilated slit-lamp and fundus by the eye team ${r(3)}; biometry (optical or ultrasound) and keratometry before surgery ${r(2)}; blood sugar and BP ${LB.exp()}.</p>` },
{ id: "staging", title: "Who needs referral?", html: `<ul><li>Adults: cataract limiting daily activities (reading, work, driving, self-care), or causing glaucoma, or hiding the fundus in diabetes ${r(2)} ${r(3)}.</li><li>Children: any suspected cataract — urgent ${r(4)}.</li><li>Corneal opacity reducing vision — refer for corneal transplant, optical iridectomy or cosmetic options ${r(5)}.</li></ul>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Before surgery</h3><ul><li>Updated glasses and good lighting help early cataract ${r(3)}.</li><li>Explain what cataract is, the operation, risks, recovery and that glasses may still be needed ${r(2)}.</li></ul>
<h3>2. Surgery</h3><ul><li>Phacoemulsification (small incision) or extracapsular extraction, with an intraocular lens ${r(3)}.</li><li>Topical or sub-Tenon's anaesthesia; not retrobulbar (NICE) ${r(2)}.</li><li>Intracameral cefuroxime to prevent endophthalmitis; steroid and/or NSAID drops after surgery ${r(2)}.</li><li>Second eye on the same criteria; bilateral same-day surgery in selected low-risk people ${r(2)}.</li></ul>
<h3>3. Congenital cataract</h3><p>Surgical removal (unilateral within 4–6 weeks), intraocular lens often after 6 months, glasses or contact lenses, and amblyopia treatment ${r(4)}.</p>
<h3>4. Corneal opacity</h3><p>Small scar not affecting vision can be left; otherwise corneal transplant, optical iridectomy, or cosmetic contact lens/tattooing ${r(5)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul><li>Cefuroxime (intracameral, by the surgeon) ${r(2)}.</li><li>Postoperative steroid and NSAID eye drops ${r(2)}.</li><li>${D("chloramphenicol", "Chloramphenicol")} eye drops/ointment — NEML ${r(6)} ${LB.loc()}.</li></ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Diabetes", "Earlier cataract; higher risk of macular oedema — steroid + NSAID drops " + r(2) + r(3)],
["Only one seeing eye", "Experienced surgeon " + r(2)],
["Babies", "Red reflex check at birth and well-baby visits " + r(4)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["70-year-old farmer can no longer see to thread a needle; vision 6/24 both eyes", "Refer for cataract surgery " + r(2) + r(3)],
["Red, painful eye with falling vision 3 days after cataract surgery", "Possible endophthalmitis — same-day ophthalmology " + LB.exp()],
["Newborn with a white pupil on one side", "Urgent ophthalmology — surgery within weeks " + r(4)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Untreated: blindness; swollen lens glaucoma ${r(1)} ${r(3)}.</li><li>Surgery: endophthalmitis, cystoid macular oedema, posterior capsule rupture, retinal detachment (high myopia) ${r(2)}.</li><li>Children: amblyopia ${r(4)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>No routine in-person first-day review after uncomplicated surgery (NICE); clear instructions on drops and warning signs ${r(2)}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Painless gradual blur", [F.s("Acuity + pinhole + red reflex"), F.a, F.d("Lens opacity?"), F.a, F.b([["Adult, limits life", F.ok("Refer for surgery")], ["Child", F.e("Urgent ophthalmology")], ["Cornea scar", F.s("Refer if vision affected")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Skipping the red reflex in newborns", "Missed congenital cataract and retinoblastoma", "Check at birth " + r(4)],
["Waiting for a 'ripe' cataract", "Dense cataract raises surgical risk", "Refer when life is limited " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "How do you screen for cataract without a slit lamp?", "Red reflex with an ophthalmoscope at about 30 cm through a dilated pupil.")}${qa("Specialist", "Timing of surgery for unilateral congenital cataract?", "Within the first 4–6 weeks of life.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §15.8 Cataract.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Cataracts in adults: management (NG77), 2017.</li>
<li id="ref-3">Merck Manual Professional Edition. Cataract; accessed Nov 2026.</li>
<li id="ref-4">Merck Manual Professional Edition. Congenital cataract; reviewed Apr 2026.</li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §15.5 Corneal opacity.</li>
<li id="ref-6">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §15.5, 15.8", "<span class='pass'>Checked</span>", "Short sections"],
["NICE NG77", "<span class='pass'>Checked</span>", "Read"],
["Merck cataract, congenital cataract", "<span class='pass'>Checked</span>", "Read"],
["Bhutan eye service data", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "Referral helper"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
