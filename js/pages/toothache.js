/* Toothache and dental infection — all ages. Batch E-12, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §17.1 Toothache (causes; signs; amoxicillin 8-hourly for 5 days if infected — dose unreadable in our copy;
   paracetamol 250–1,000 mg as needed; salt-water rinse; cold compress; refer to dental team) — filtered text; Merck Manual Professional
   'Toothache and infection' (red flags; antibiotics beyond irreversible pulpitis; penicillin/amoxicillin first; allergy alternatives; incision
   and drainage; pericoronitis salt-water/chlorhexidine; Ludwig angina, cavernous sinus thrombosis) and 'Caries', 'Pulpitis' (index); NEML 2025.
   Not read: SDCEP Drug prescribing for dentistry, WHO oral health — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "toothache",
title: "Toothache and dental infection — all ages",
subtitle: "Most toothache is caries or pulpitis that needs a dentist, not antibiotics; give analgesia, give antibiotics only when infection spreads beyond the tooth, and act fast on fever, floor-of-mouth swelling, trismus or eye signs",
age: "All ages", specs: ["ent", "emerg", "medicine", "paeds", "surg"],
keywords: ["toothache", "dental pain", "dental caries", "tooth decay", "pulpitis", "dental abscess", "periapical abscess", "facial swelling", "pericoronitis", "wisdom tooth", "third molar", "Ludwig angina", "cellulitis face", "cavernous sinus thrombosis", "trismus", "amoxicillin dental", "salt water rinse"],
related: ["oral-lesions", "dental-trauma", "oral-health", "ssti-adult", "sepsis-adult", "headache-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Toothache is pain in or around a tooth from caries, pulpitis, abscess, a cracked tooth, an erupting or impacted wisdom tooth, gum infection, food impaction or sinusitis ${r(1)} ${r(2)}. Infection can spread to the jaws and neck ${r(1)}.</p>
<div class="glance">
<div><h4>Red flags</h4><p>Fever, swelling of the floor of the mouth (Ludwig angina), trismus, headache with eye signs (cavernous sinus thrombosis), cranial nerve signs, difficulty breathing or swallowing ${r(2)}.</p></div>
<div><h4>Analgesia</h4><p>Paracetamol (STG 250–1,000 mg as needed) and/or ibuprofen; salt-water rinses, cold compress for swelling ${r(1)} ${r(2)}.</p></div>
<div><h4>Antibiotics?</h4><p>Only for infection beyond the pulp (abscess, cellulitis) or when the dentist cannot see the patient soon; amoxicillin first choice ${r(1)} ${r(2)}.</p></div>
<div><h4>Definitive care</h4><p>Dentist: drainage, root canal or extraction — antibiotics do not cure a dead tooth ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: if infected, amoxicillin capsules 8-hourly for 5 days (strength unreadable in our copy), paracetamol for pain and fever, warm salt-water rinses, cold compresses, and referral to the dental team ${r(1)}. NEML amoxicillin is 250 mg capsules and 125 or 250 mg/5 mL syrups; metronidazole 400 mg; no chlorhexidine mouthwash listed ${r(3)}. Doma (areca nut) chewing and sugary snacks are common risks for gum disease and caries ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Cause", "Pain pattern"], [
["Caries / reversible pulpitis", "Brief pain with cold, sweets; stops when stimulus removed " + r(2)],
["Irreversible pulpitis", "Pain lingers after stimulus, or spontaneous, throbbing " + r(2)],
["Periapical abscess / necrotic pulp", "Constant pain, tender to tap, swelling, may point in the gum " + r(2)],
["Pericoronitis", "Pain and swelling around a partly erupted lower wisdom tooth; trismus " + r(1) + r(2)],
["Cracked tooth", "Sharp pain on biting " + r(1)],
["Maxillary sinusitis", "Several upper back teeth ache, headache " + r(2)],
["Food impaction, gum infection", "Local gum pain " + r(1)]
])}` },
{ id: "patho", title: "How infection spreads", html: `${F.chart("Dental infection", [F.s("Caries reaches the pulp"), F.a, F.s("Pulpitis → pulp necrosis"), F.a, F.s("Periapical abscess"), F.a, F.d("Spread?"), F.a, F.e("Facial cellulitis, floor of mouth (Ludwig), neck spaces, sinus, cavernous sinus")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["When to give antibiotics", "If infected", "For necrotic pulp, abscess, cellulitis, pericoronitis; can be deferred if a dentist removes the source the same day; unclear benefit in irreversible pulpitis", "Not for pain alone " + r(1) + r(2)],
["Drug", "Amoxicillin 8-hourly 5 days", "Penicillin or amoxicillin; allergy: cephalexin (no anaphylaxis history), azithromycin, clarithromycin, clindamycin", "Amoxicillin; metronidazole is a common add-on " + LB.exp("METRONIDAZOLE NOT IN SOURCES READ")]
])}` },
{ id: "presentation", title: "Clinical features", html: `<p>Sharp, throbbing or constant pain; swelling around the tooth; pain on chewing or touch; bad breath or taste; facial swelling ${r(1)}. Examine teeth, gums, swelling, trismus, floor of mouth, neck nodes, eyes and cranial nerves ${r(2)}.</p>
<div class="calc" data-calc="toothrx"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Sinusitis", "Upper molars, headache, nasal symptoms " + r(2)],
["Trigeminal neuralgia", "Electric shocks, trigger zones " + LB.exp()],
["Cardiac pain referred to jaw", "Exertional, risk factors " + LB.exp() + " " + P("acs-adult", "ACS")],
["TMD", "Jaw joint and muscle pain, clicking " + P("oral-health", "oral health / TMD")]
])}` },
{ id: "invest", title: "Investigations", html: `<p>Usually none; dental X-ray by the dental team; CT and blood cultures for deep neck space infection ${r(2)} ${LB.exp()}.</p>` },
{ id: "staging", title: "Urgency", html: `${tbl(["Situation", "Action"], [
["Ludwig angina, airway swelling, cavernous sinus signs", "Emergency admission, airway, IV antibiotics, surgery " + r(2)],
["Facial swelling with fever", "Same-day dental/medical review; antibiotics; drainage " + r(2)],
["Localised pain", "Analgesia; dental appointment " + r(1)]
])}` },
{ id: "manage", title: "Treatment", html: `
<ul>
<li>Analgesia: paracetamol, ibuprofen (if no contraindication); dental nerve block by trained staff for severe pain ${r(1)} ${r(2)}.</li>
<li>Warm salt-water rinses; cold compress for swelling ${r(1)}.</li>
<li>Pericoronitis: hot salt-water mouth baths 3–4 times daily (1 tablespoon salt in a glass of water) or chlorhexidine 0.12% rinses ${r(2)}.</li>
<li>Abscess with soft fluctuance: incision and drainage ${r(2)}.</li>
<li>Antibiotic when indicated: amoxicillin 8-hourly for 5 days (STG) ${r(1)}; penicillin allergy — azithromycin, clarithromycin or clindamycin ${r(2)}.</li>
<li>Refer to the dental team for definitive treatment ${r(1)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("paracetamol", "Paracetamol")} — STG 250–1,000 mg as needed ${r(1)}.</li>
<li>${D("ibuprofen", "Ibuprofen")} ${r(2)}.</li>
<li>${D("amoxicillin", "Amoxicillin")} 250 mg capsule, 125/250 mg per 5 mL — NEML ${r(3)}.</li>
<li>${D("metronidazole", "Metronidazole")} 400 mg — NEML ${r(3)}.</li>
<li>${D("chlorhexidine", "Chlorhexidine")} 0.12% mouthwash — not found on NEML ${r(2)} ${r(3)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Children", "Weight-based paracetamol/ibuprofen; caries from night bottle feeding " + r(2) + " " + P("oral-health", "oral health")],
["Pregnancy", "Dental care is safe and important; paracetamol for pain " + LB.exp()],
["Immunocompromised, diabetes", "Lower threshold for antibiotics and referral " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Throbbing toothache 2 days, no swelling, no fever", "Analgesia, dental referral; no antibiotic " + r(2)],
["Swollen cheek, fever, tooth tender to tap", "Amoxicillin, analgesia, urgent dental drainage/extraction " + r(1) + r(2)],
["Swelling under the tongue on both sides, drooling, voice change", "Ludwig angina — airway emergency, admit " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Facial cellulitis, deep neck infection, Ludwig angina ${r(1)} ${r(2)}.</li><li>Cavernous sinus thrombosis ${r(2)}.</li><li>Sepsis ${LB.exp()}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Dental review to treat the cause; prevention — brushing twice daily, less sugar, 6-monthly dental check ${r(1)} ${P("oral-health", "oral health")}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Toothache", [F.d("Red flags (fever, floor-of-mouth swelling, eye signs, airway)?"), F.a, F.b([["Yes", F.e("Emergency: airway, IV antibiotics, surgery")], ["No", F.d("Swelling / abscess?")]]), F.a, F.b([["Yes", F.s("Amoxicillin + drainage + dentist")], ["No", F.ok("Analgesia + dentist; no antibiotic")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Antibiotics for every toothache", "Does not treat pulpitis; resistance", "Analgesia + dentist " + r(2)],
["Missing floor-of-mouth swelling", "Airway loss", "Look under the tongue " + r(2)],
["Aspirin on the gum", "Chemical burn " + LB.exp(), "Oral analgesia"]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "When is an antibiotic indicated for toothache?", "Spreading infection — abscess, cellulitis, pericoronitis with systemic signs — or if a dentist cannot remove the source soon.")}${qa("Specialist", "What is Ludwig angina?", "Bilateral floor-of-mouth (submandibular space) cellulitis threatening the airway.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §17.1 Toothache.</li>
<li id="ref-2">Merck Manual Professional Edition. Toothache and infection; accessed Nov 2026.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §17.1", "<span class='pass'>Checked</span>", "Amoxicillin strength unreadable"],
["Merck toothache", "<span class='pass'>Checked</span>", "Read"],
["SDCEP dental prescribing", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "Red flags + antibiotic decision"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
