/* Open soft-tissue injuries: wounds, lacerations and bites — all ages. Batch E-4, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §13.3 Open soft tissue injuries (causes, signs, X-ray, pain relief, TT 0.5 mL IM, irrigation, bleeding
   control, antibiotics, splints, 'do not suture the wound', refer tendon and neurovascular injuries; summary table 13.1); NEML 2025.
   Cochrane (abstracts read): Fernandez 2022 water for wound cleansing; Eliya-Masamba 2013 primary vs delayed closure; Medeiros 2001 antibiotic
   prophylaxis for mammalian bites. Tetanus rules: this guide's tetanus pages (CDC 2026, MSF 2022). Amoxicillin-clavulanate dose: FDA label (monograph). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "wounds",
title: "Wounds, lacerations and bites",
subtitle: "Stop the bleeding, look for what lies beneath, wash thoroughly, protect against tetanus and rabies, and choose wisely between closing the wound and leaving it open",
age: "All ages", specs: ["surg", "emerg", "ortho", "paeds"],
keywords: ["wound", "laceration", "cut", "abrasion", "open soft tissue injury", "wound irrigation", "wound closure", "suturing", "delayed primary closure", "tissue glue", "dog bite", "human bite", "hand injury", "tendon injury", "tetanus prophylaxis wound", "amoxicillin clavulanate bite"],
related: ["tetanus-adult", "tetanus-child", "rabies-adult", "fracture-adult", "trauma-adult", "ssti-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Cuts from sickles, axes and glass, injuries at work and on the road, and dog bites fill every emergency room in Bhutan. Good wound care is simple, but the mistakes — a missed tendon, a sutured dirty bite, forgotten tetanus — are costly.</p>
<div class="glance">
<div><h4>First</h4><p>Pressure to stop bleeding; check circulation, nerves and tendons beyond the wound ${r(1)}.</p></div>
<div><h4>Wash</h4><p>Irrigate generously; clean tap water is as acceptable as saline ${r(1, 2)}.</p></div>
<div><h4>Protect</h4><p>Tetanus (STG: TT 0.5 mL IM) and, for animal bites, rabies post-exposure care ${r(1, 5)}.</p></div>
<div><h4>Close or leave open?</h4><p>Clean, recent, low-risk wounds can be closed; contaminated, crushed and most bite wounds are left open (STG: do not suture) ${r(1, 3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG's short rule — irrigate, stop bleeding, antibiotics, splint, tetanus, <b>do not suture</b>, refer tendon and nerve injuries — is written for open soft-tissue injuries at first-contact level ${r(1)}. This page adds when a clean wound can safely be closed by a trained doctor. ${LB.loc()}</p>`)}
` },
{ id: "overview", title: "Types of wound", html: `${tbl(["Type", "Description", "Key point"], [
["Abrasion", "Graze — top layers scraped off " + r(1), "Remove embedded grit to prevent tattooing"],
["Laceration", "Torn, irregular edges from blunt force " + r(1), "Check depth and contamination"],
["Incised wound", "Clean cut from a sharp edge " + r(1), "Often deep — test tendons and nerves"],
["Puncture", "Nail, thorn, knife", "Small surface, deep contamination"],
["Crush / degloving", "Machinery, vehicles", "Tissue viability; compartment syndrome"],
["Bite (dog, cat, human)", "Puncture plus laceration", "High infection risk; rabies risk for animals " + r(4, 5)]
])}` },
{ id: "patho", title: "Why wounds get infected", html: `
${F.chart("From wound to infection", [F.s("Bacteria from skin, soil, saliva or the object"), F.a, F.d("Dead tissue, foreign material, poor blood supply, time"), F.a, F.e("Infection, tetanus, failed healing")])}
<p>Cleaning, removing dead tissue and foreign bodies, and not closing heavily contaminated wounds are what prevent infection; antibiotics help only in selected wounds ${r(1, 4)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "Evidence", "This guide"], [
["Suturing", "Do not suture the wound (open soft-tissue injuries)", "No trials on primary vs delayed closure within 24 h (Cochrane 2013)", "Close clean, low-risk, recent wounds after cleaning; leave contaminated, crushed, puncture and most bite wounds open for delayed closure " + LB.exp()],
["Antibiotics", "Antibiotics for open injuries", "Bites: benefit after human bites and hand bites; no clear benefit after dog or cat bites overall (Cochrane 2001)", "Antibiotics for bites to the hand, human bites, deep or contaminated wounds, open fractures, immune compromise; not for clean simple cuts " + LB.exp()],
["Cleansing fluid", "Irrigation", "Tap water vs saline: no clear difference in infection (Cochrane 2022)", "Clean tap water or saline, plenty of it " + r(2)]
])}` },
{ id: "presentation", title: "Assessment", html: `
<ul>
<li>How, when, with what (glass, rusty metal, animal), where (farm, road), tetanus vaccination history, diabetes, immune compromise ${r(1)} ${LB.exp()}.</li>
<li>Examine beyond the wound: pulses and capillary refill, sensation, active movement of each tendon against resistance; explore the wound under good light and anaesthesia ${r(1)}.</li>
<li>Look for foreign bodies (glass, wood) — X-ray if available ${r(1)}.</li>
<li>Bleeding, loss of movement or loss of sensation signal deeper injury ${r(1)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 19-year-old cut the back of his hand with a sickle while cutting grass in Samtse 2 hours ago. The 3 cm wound is clean but he cannot straighten his ring finger. <b>Extensor tendon injury.</b> Irrigate, cover, splint, tetanus, antibiotics, and refer for tendon repair; do not simply close the skin over it ${r(1)}.</p>` },
{ id: "ddx", title: "Deeper injuries not to miss", html: `${tbl(["Injury", "Clue"], [
["Tendon division", "Loss of active movement or weakness against resistance, abnormal finger posture " + r(1)],
["Nerve injury", "Numbness beyond the wound " + r(1)],
["Arterial injury", "Pulsatile bleeding, cold pale limb, expanding swelling"],
["Open fracture or joint", "Bone visible, deformity, wound over a joint — see Fractures " + r(1)],
["Retained foreign body", "Persistent pain, glass or wood mechanism — X-ray or ultrasound " + r(1)],
["Compartment syndrome", "Pain out of proportion after crush — see Compartment syndrome"]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li>X-ray if fracture or radio-opaque foreign body is possible (STG: if available) ${r(1)}.</li>
<li>Glucose in diabetics with poorly healing or infected wounds ${LB.exp()}.</li>
<li>Swab only if infected.</li>
</ul>` },
{ id: "staging", title: "Tetanus and rabies decisions", html: `
<p>Tetanus prophylaxis depends on the wound type and vaccination history — use the tetanus calculator ${r(5)}:</p>
<div class="calc" data-calc="tetanuswound"></div>
<p>For any dog, cat or wild animal bite or scratch, follow the rabies post-exposure pathway — see Rabies ${r(5)}.</p>` },
{ id: "manage", title: "Treatment", html: `
<ol>
<li><b>Bleeding</b>: direct pressure and elevation; tourniquet only for life-threatening limb bleeding (see Major trauma) ${r(1)}.</li>
<li><b>Pain relief</b>: paracetamol or ibuprofen; ${D("lidocaine", "lidocaine")} 1–2% infiltration for cleaning and closure, within the weight-based maximum ${r(1)}.</li>
<li><b>Irrigate</b> thoroughly with clean tap water or saline under some pressure; remove dirt and dead tissue ${r(1, 2)}.</li>
<li><b>Tetanus</b>: TT (Td) 0.5 mL IM as indicated; tetanus immunoglobulin for dirty wounds in unvaccinated people ${r(1, 5)}.</li>
<li><b>Close or leave open</b>:
${tbl(["Close now (after cleaning)", "Leave open / delayed closure"], [
["Clean, recent, low-risk lacerations; face and scalp (good blood supply); bites on the face after thorough cleaning (specialist advice)", "Heavily contaminated, crushed, puncture wounds; most animal and human bites (especially hand); wounds with dead tissue; late-presenting wounds " + LB.exp()]
])}
Options for closure: sutures, staples (scalp), adhesive strips or tissue glue for small clean low-tension wounds ${LB.exp()}.</li>
<li><b>Antibiotics</b> for selected wounds (bites to the hand, human bites, deep contaminated wounds, open fractures, immune compromise): ${D("amoxicillin-clavulanate", "amoxicillin–clavulanate")} 500/125 mg every 8 hours by mouth (adults) ${r(4, 6)}.</li>
<li><b>Splint</b> injuries over joints and tendons ${r(1)}.</li>
<li><b>Refer</b> tendon, nerve and vessel injuries ${r(1)}.</li>
</ol>` },
{ id: "drugs", title: "Medicines (NEML 2025)", html: `${tbl(["Medicine", "Use", "NEML"], [
[D("lidocaine", "Lidocaine 2%"), "Local anaesthesia", "Injection (plain and with adrenaline)"],
[D("amoxicillin-clavulanate", "Amoxicillin–clavulanate"), "Bite and contaminated-wound prophylaxis", "500 mg + 125 mg tablet"],
[D("td-vaccine", "Td vaccine"), "Tetanus booster", "Yes"],
[D("tetanus-immunoglobulin", "Tetanus immunoglobulin"), "Dirty wounds, unvaccinated", "Yes"],
[D("paracetamol", "Paracetamol") + ", " + D("ibuprofen", "ibuprofen"), "Pain", "Yes"]
])}` },
{ id: "populations", title: "Special groups", html: `${tbl(["Group", "What changes"], [
["Children", "Distraction, topical anaesthesia where available, tissue glue or strips for small wounds; think of non-accidental injury if the story does not fit " + LB.exp()],
["Diabetes, immune compromise", "Lower threshold for antibiotics and review " + LB.exp()],
["Older adults", "Skin tears: re-lay the flap with strips rather than sutures " + LB.exp()],
["Hand injuries", "Always test every tendon; antibiotics for bites " + r(4)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Dog bite to a child's calf in Thimphu", "Wash 15 minutes, rabies PEP pathway, tetanus, leave open or loosely approximate; antibiotics if deep " + r(4, 5)],
["Punch to the mouth — knuckle cut", "Human bite ('fight bite'): explore, irrigate, antibiotics, do not suture, hand surgeon review " + r(4)],
["Clean 4 cm scalp laceration 1 hour old", "Irrigate, close (sutures or staples)"],
["Rusty nail through a shoe into the foot", "Puncture: irrigate, leave open, tetanus, watch for infection"]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Wound infection, cellulitis, abscess ${r(1)}.</li>
<li>Tetanus — see Tetanus ${r(5)}.</li>
<li>Missed tendon or nerve injury with permanent loss of function ${r(1)}.</li>
<li>Hypertrophic scars and keloids.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>Keep the wound clean and dry for 48 hours; return for redness, swelling, pus, fever or red streaks ${LB.exp()}.</li>
<li>Delayed closure review at 3–5 days for wounds left open ${LB.exp()}.</li>
<li>Suture removal: face about 5 days; scalp and trunk 7–10 days; limbs and over joints 10–14 days ${LB.exp()}.</li>
</ul>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Open wound", [F.s("Stop bleeding; check pulses, sensation, tendons"), F.a, F.d("Tendon, nerve, vessel, fracture or joint involved?"), F.a, F.b([["Yes", F.e("Irrigate, cover, splint, antibiotics, tetanus — refer")], ["No", F.s("Anaesthetise, irrigate, debride, remove foreign bodies")]]), F.a, F.d("Clean, recent, low-risk?"), F.a, F.b([["Yes", F.ok("Close; tetanus as indicated")], ["No (bite, crush, dirty)", F.e("Leave open; antibiotics if indicated; tetanus ± rabies")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Suturing a dirty bite", "Abscess, lost function", "Leave open, review"],
["Not testing tendons", "Missed injury, later repair is harder", "Test each tendon against resistance"],
["Forgetting tetanus and rabies", "Preventable deaths", "Ask every time"],
["Antibiotics for every cut", "Resistance, side effects", "Only for selected wounds"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Is tap water acceptable for cleaning wounds?", "Yes — Cochrane found no clear difference in infection between tap water and saline.")}
${qa("Intern/MO", "Which bites benefit most from prophylactic antibiotics?", "Human bites and bites to the hand.")}
${qa("Specialist", "What evidence guides the timing of wound closure?", "None from trials — the Cochrane review found no eligible studies; decisions rest on contamination, tissue damage and location.")}
${qa("Specialist", "Why is a 'fight bite' dangerous?", "Mouth flora are driven into the joint and tendon sheath of the knuckle — explore, irrigate, antibiotics, do not close.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §13.3 Open soft tissue injuries and table 13.1.</li>
<li id="ref-2">Fernandez R, Green HL, Griffiths R, et al. Water for wound cleansing. Cochrane Database Syst Rev 2022;9:CD003861. <a href="https://doi.org/10.1002/14651858.CD003861.pub4" target="_blank" rel="noopener">doi:10.1002/14651858.CD003861.pub4</a></li>
<li id="ref-3">Eliya-Masamba MC, Banda GW. Primary closure versus delayed closure for non bite traumatic wounds within 24 hours post injury. Cochrane Database Syst Rev 2013;10:CD008574. <a href="https://doi.org/10.1002/14651858.CD008574.pub3" target="_blank" rel="noopener">doi:10.1002/14651858.CD008574.pub3</a></li>
<li id="ref-4">Medeiros I, Saconato H. Antibiotic prophylaxis for mammalian bites. Cochrane Database Syst Rev 2001;2:CD001738. <a href="https://doi.org/10.1002/14651858.CD001738" target="_blank" rel="noopener">doi:10.1002/14651858.CD001738</a></li>
<li id="ref-5">This guide: Tetanus (adults; children) and Rabies pages — wound-based tetanus prophylaxis (CDC 2026) and Bhutan rabies guideline 2023.</li>
<li id="ref-6">US Food and Drug Administration prescribing information for amoxicillin–clavulanate, as summarised in this guide's drug monograph; NEML 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG management", "<span class='pass'>Checked</span>", "§13.3 read (partly garbled; key steps clear)"],
["Cleansing, closure timing, bite antibiotics", "<span class='pass'>Checked</span>", "Three Cochrane abstracts"],
["Closure categories, suture-removal times, after-care", "<span class='unv'>Expert opinion</span>", "No guideline text read — labelled"],
["Amoxicillin–clavulanate dose", "<span class='pass'>One source</span>", "FDA label; duration not specified"],
["Images", "—", "No suitable licensed image; section hidden"]
], "qc")}` }
]
});
})();
