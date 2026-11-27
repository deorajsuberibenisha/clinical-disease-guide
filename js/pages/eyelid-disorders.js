/* Eyelid and conjunctival lumps: stye, chalazion, pterygium, pinguecula, subconjunctival haemorrhage, eyelid laceration — all ages. Batch E-15,
   27 Nov 2026. Sources read: Bhutan STG 2024 §15.10 Eyelid disorders (stye: amoxicillin 500 mg tds 5 days if severe, chloramphenicol ointment;
   chalazion: warm compress, lid massage, chloramphenicol, refer if unresolved; pterygium: UV sunglasses, avoid wind and dust; lid laceration: pad and
   refer) and §15.13 Subconjunctival haemorrhage (avoid aspirin/ibuprofen; cold compresses; resolves in weeks) — filtered text; Merck Manual
   Professional 'Chalazion and hordeolum', 'Pinguecula and pterygium', 'Subconjunctival hemorrhages'; NEML 2025. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "eyelid-disorders",
title: "Stye, chalazion, pterygium and subconjunctival haemorrhage",
subtitle: "Common, mostly harmless eye lumps and red patches: warm compresses for stye and chalazion, sun protection for pterygium, reassurance for a painless bright-red patch on the white of the eye — and urgent referral for lid lacerations through the margin",
age: "All ages", specs: ["eye", "medicine", "paeds", "emerg"],
keywords: ["stye", "hordeolum", "chalazion", "meibomian cyst", "eyelid lump", "eyelid swelling", "pterygium", "pinguecula", "subconjunctival haemorrhage", "red patch eye", "eyelid laceration", "lid margin laceration", "preseptal cellulitis", "warm compress"],
related: ["redeye-adult", "redeye-child", "eye-injury", "cataract", "htn-adult", "bleeding-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Stye (hordeolum)</h4><p>Painful red bump at the lid margin from an infected lash follicle: warm compresses; antibiotics only if severe or with lid cellulitis ${r(1)} ${r(2)}.</p></div>
<div><h4>Chalazion</h4><p>Painless firm lump in the lid from a blocked oil gland: warm compresses and massage; refer if it persists ${r(1)} ${r(2)}.</p></div>
<div><h4>Pterygium</h4><p>Fleshy triangle growing from the white of the eye onto the cornea (sun, wind, dust): UV sunglasses; refer if it threatens vision ${r(1)} ${r(3)}.</p></div>
<div><h4>Subconjunctival haemorrhage</h4><p>Painless bright-red patch, normal vision: reassure; clears in 1–3 weeks; check BP and bleeding if recurrent ${r(4)} ${r(5)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: stye — chloramphenicol ointment once daily for 5 days, amoxicillin 500 mg three times daily for 5 days in severe cases; chalazion — warm compress, lid massage, chloramphenicol, refer if not resolved; pterygium — UV-protective sunglasses, less wind and dust; subconjunctival haemorrhage — avoid aspirin and ibuprofen, paracetamol for pain, cold compresses ${r(1)} ${r(5)}. NEML: chloramphenicol 0.4% eye drops, amoxicillin ${r(6)}. High-altitude sun, wind and dust make pterygium common ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The conditions", html: `${tbl(["Condition", "Cause", "Look"], [
["External hordeolum (stye)", "Infection of lash follicle/gland (usually staphylococcal) " + r(2) + " " + LB.exp("ORGANISM NOT IN TEXT READ"), "Tender red swelling pointing at the lid margin " + r(1) + r(2)],
["Internal hordeolum", "Infected meibomian gland", "Tender swelling on the inner lid " + r(2)],
["Chalazion", "Blocked meibomian gland, sterile granuloma", "Painless firm nodule in the lid; may blur vision if large " + r(1) + r(2)],
["Pinguecula", "Sun damage", "Raised yellow-white spot beside the cornea, does not grow onto it " + r(3)],
["Pterygium", "Sun, hot dry dusty climate", "Fleshy vascular triangle onto the cornea at 3 or 9 o'clock; may cause astigmatism " + r(3)],
["Subconjunctival haemorrhage", "Minor trauma, straining, coughing, sneezing; rarely bleeding disorder", "Flat bright-red patch, painless, vision normal " + r(4) + r(5)],
["Lid laceration", "Sharp injury", "Cut through lid; involving the margin or tear duct needs specialist repair " + r(1)]
])}` },
{ id: "patho", title: "Why they happen", html: `<p>Lid lumps come from the lid's oil glands and lash follicles; conjunctival growths come from chronic ultraviolet damage; bleeding under the conjunctiva comes from fragile small vessels ${r(2)} ${r(3)} ${r(4)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["Antibiotic ointment for stye/chalazion", "Chloramphenicol ointment once daily 5 days", "Topical antibiotics usually ineffective for internal hordeolum; warm compresses first; systemic antibiotics (doxycycline/erythromycin) if preseptal cellulitis", "Warm compresses first; ointment optional; oral antibiotic if cellulitis " + r(1) + r(2)],
["Subconjunctival haemorrhage", "Cold compresses for a couple of days", "Compresses, steroids, antibiotics do not speed reabsorption; reassurance is enough", "Reassure; compresses for comfort only " + r(4) + r(5)]
])}` },
{ id: "presentation", title: "Assessment", html: `<p>Check vision, pain, redness beyond the lid (cellulitis), fever, eye movement and proptosis (orbital cellulitis), and for subconjunctival haemorrhage any trauma, blood pressure and bleeding tendency ${r(2)} ${r(4)} ${LB.exp()}.</p>
<div class="calc" data-calc="eyelump"></div>` },
{ id: "ddx", title: "Red flags and mimics", html: `${tbl(["Condition", "Clue"], [
["Orbital cellulitis", "Fever, painful eye movements, proptosis, reduced vision — emergency " + LB.exp()],
["Preseptal cellulitis", "Diffuse lid swelling and redness — oral antibiotics " + r(2)],
["Recurrent chalazion in the same place, older adult", "Sebaceous carcinoma — biopsy " + LB.exp()],
["Conjunctivitis", "Diffuse redness, discharge " + P("redeye-adult", "red eye")],
["Ocular trauma with haemorrhage", "Reduced vision, irregular pupil — " + P("eye-injury", "eye injury")]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Usually none. Recurrent or unexplained subconjunctival haemorrhage: BP, platelets and clotting; anticoagulant use ${r(4)} ${LB.exp()}.</p>` },
{ id: "staging", title: "When to refer", html: `<ul><li>Chalazion not resolving (large, unsightly, several weeks) — incision and curettage or steroid injection ${r(1)} ${r(2)}.</li><li>Pterygium growing toward the pupil, affecting vision or comfort — surgery ${r(3)}.</li><li>Lid laceration through the margin or near the inner corner — pad and refer ${r(1)}.</li></ul>` },
{ id: "manage", title: "Treatment", html: `
<ul>
<li><b>Stye/chalazion:</b> warm compresses 5–10 minutes 2–3 times a day and gentle massage ${r(1)} ${r(2)}; STG chloramphenicol ointment once daily for 5 days ${r(1)}; stye not responding — incision; oral antibiotic (amoxicillin per STG; Merck doxycycline or erythromycin) if severe or with preseptal cellulitis ${r(1)} ${r(2)}.</li>
<li><b>Chalazion persisting:</b> incision and curettage or intralesional triamcinolone ${r(2)}.</li>
<li><b>Pterygium:</b> UV sunglasses, hat; artificial tears or a short course of steroid drops for irritation; surgery for growth, vision or cosmesis ${r(1)} ${r(3)}.</li>
<li><b>Subconjunctival haemorrhage:</b> reassurance; paracetamol not aspirin/ibuprofen; avoid straining and rubbing ${r(4)} ${r(5)}.</li>
<li><b>Lid laceration:</b> clean, cover, tetanus, refer for layered repair ${r(1)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul><li>${D("chloramphenicol", "Chloramphenicol")} 0.4% eye drops — NEML ${r(6)}.</li><li>${D("amoxicillin", "Amoxicillin")} 500 mg three times daily 5 days (STG, severe stye) ${r(1)}.</li><li>${D("doxycycline", "Doxycycline")} / ${D("erythromycin", "erythromycin")} — preseptal cellulitis (Merck) ${r(2)}.</li></ul>` },
{ id: "populations", title: "Special situations", html: `<p>Children with lid swelling and fever — consider orbital cellulitis ${LB.exp()}. Older adults with recurrent lid lumps — biopsy ${LB.exp()}. People on anticoagulants with haemorrhage — check INR if recurrent ${LB.exp()}.</p>` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Painful red bump at the lash line for 2 days", "Stye: warm compresses; ointment optional " + r(1) + r(2)],
["Painless pea-sized lump in the upper lid for 6 weeks", "Chalazion: compresses; refer for incision " + r(2)],
["Bright-red patch after a coughing fit, vision normal", "Subconjunctival haemorrhage: reassure " + r(4)],
["Farmer with a fleshy growth reaching the cornea", "Pterygium: sunglasses; refer if near the pupil " + r(3)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Preseptal cellulitis from a stye ${r(2)}.</li><li>Astigmatism and reduced vision from pterygium ${r(3)}.</li><li>Lid deformity after poorly repaired laceration ${r(1)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Review stye/chalazion in 1–2 weeks; recurrence after pterygium surgery is possible ${LB.exp()}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Lid lump or red patch", [F.d("Painful lid lump?"), F.a, F.b([["Yes", F.s("Stye: warm compresses ± antibiotic")], ["No, lid", F.s("Chalazion: compresses; refer if persists")], ["Red patch on white", F.ok("Subconjunctival haemorrhage: reassure")]]), F.a, F.e("Fever, eye-movement pain, vision loss → orbital cellulitis/trauma: urgent")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Squeezing a stye", "Spreads infection", "Warm compresses " + LB.exp()],
["Antibiotics for subconjunctival haemorrhage", "No benefit", "Reassure " + r(4)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Stye vs chalazion?", "Stye is painful and at the lid margin (infection); chalazion is a painless firm lump within the lid (blocked gland).")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §15.10 Eyelid disorders and eyelid laceration.</li>
<li id="ref-2">Merck Manual Professional Edition. Chalazion and hordeolum (stye); accessed Nov 2026.</li>
<li id="ref-3">Merck Manual Professional Edition. Pinguecula and pterygium; accessed Nov 2026.</li>
<li id="ref-4">Merck Manual Professional Edition. Subconjunctival hemorrhages; accessed Nov 2026.</li>
<li id="ref-5">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §15.13 Subconjunctival haemorrhage.</li>
<li id="ref-6">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §15.10, 15.13", "<span class='pass'>Checked</span>", "Partly scrambled"],
["Merck pages", "<span class='pass'>Checked</span>", "Read"],
["Orbital cellulitis guidance", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "STG + Merck"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
