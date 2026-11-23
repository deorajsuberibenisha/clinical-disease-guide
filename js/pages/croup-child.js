/* Croup (Bhutan EM booklet 2018, Cochrane/RCH, Bjornson 2004) */
registerPage({
id: "croup-child",
title: "Croup",
subtitle: "A barking cough with stridor in a young child: keep them calm, give dexamethasone to all, nebulised adrenaline for stridor at rest, and watch for rebound",
age: "6 months – 6 years", specs: ["paeds", "resp", "emerg"],
keywords: ["croup", "laryngotracheobronchitis", "barking cough", "stridor", "dexamethasone", "nebulised adrenaline", "Westley score", "epiglottitis", "bacterial tracheitis", "parainfluenza"],
related: ["urti-child", "bronchiolitis-child", "anaphylaxis-child", "asthma-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Croup is a viral swelling below the vocal cords. One dose of dexamethasone shortens it and prevents admissions; most children go home.</p>
<div class="glance">
<div><h4>Calm</h4><p>On the parent's lap; do not examine the throat.</p></div>
<div><h4>All</h4><p>${dr("dexamethasone")} 0.15 mg/kg oral once (0.6 mg/kg if severe).</p></div>
<div><h4>Stridor at rest</h4><p>${dr("adrenaline_neb", "Nebulised adrenaline")} 1:1000 0.5 mL/kg (max 5 mL).</p></div>
<div><h4>Observe</h4><p>At least 3 hours after adrenaline (Bhutan).</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan EM booklet: nebulised adrenaline 0.5 mL/kg diluted in 3 mL saline, repeat every 20 min up to 3 doses; dexamethasone or budesonide/prednisolone; oxygen to keep SpO₂ over 94%; admit if stridor at rest persists or age under 12 months; observe at least 3 hours. Nebulised budesonide is not on the NEML. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Peak age 1–2 years, autumn and winter; parainfluenza commonest. Usually lasts 2–3 days, worse at night.${r(1, 2)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Croup", [F.s("Viral infection of larynx and trachea"), F.a, F.s("Subglottic oedema (narrowest part in children)"), F.a, F.e("Barking cough, inspiratory stridor, distress")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan EM booklet", "International", "This guide"], [["Adrenaline", "Diluted in 3 mL saline", "Undiluted 0.5 mL/kg", "Same dose either way"], ["Oxygen target", "Over 94%", "If under 92%", "Over 92–94% " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Coryza then barking cough, hoarse voice, inspiratory stridor, low-grade fever.</li></ul>${box("red", "Severe / impending failure", `<ul><li>Stridor at rest with marked recession, agitation</li><li>Lethargy, cyanosis, quieter stridor with tiring</li><li>SpO₂ under 92%</li></ul>`)}<h3>The typical patient</h3><p>A 2-year-old (12 kg) in Thimphu wakes at night with a barking cough and stridor at rest, moderate recession. <b>Westley 4–5: moderate croup</b> — dexamethasone 1.8–7 mg orally, nebulised adrenaline 5 mL if stridor at rest persists, observe at least 3 hours.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Epiglottitis", "Toxic, drooling, sitting forward, no bark; Hib unvaccinated"], ["Bacterial tracheitis", "High fever, toxic, poor response to adrenaline"], ["Foreign body", "Sudden onset, choking episode"], ["Anaphylaxis/angioedema", "Allergen, urticaria, swelling"], ["Retropharyngeal abscess", "Neck stiffness, drooling"]])}` },
{ id: "invest", title: "Investigations", html: `<p>None in typical croup; SpO₂. X-ray (steeple sign) only if diagnosis is uncertain and the child is stable.</p>` },
{ id: "staging", title: "Westley score", html: `<div class="calc" data-calc="westley"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Mild: dexamethasone 0.15 mg/kg orally once; home with advice.</li><li>Moderate: dexamethasone 0.15–0.6 mg/kg; observe; adrenaline if stridor at rest.</li><li>Severe: nebulised adrenaline 0.5 mL/kg of 1:1000 (max 5 mL) with oxygen, repeat as needed; dexamethasone 0.6 mg/kg (max 12 mg) oral/IM/IV; admit.</li><li>Impending failure: senior/anaesthetist, intubation with a tube 0.5–1 size smaller.</li><li>No antibiotics; no steam/humidified air (no benefit).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("dexamethasone"), "0.15–0.6 mg/kg once", "Max 12 mg"], [dr("adrenaline_neb"), "0.5 mL/kg 1:1000, max 5 mL", "Stridor at rest"], [dr("prednisolone"), "1 mg/kg", "If no dexamethasone"]])}` },
{ id: "populations", title: "Under 12 months and recurrent croup", html: `<p>Under 6 months or recurrent/atypical croup: think subglottic stenosis, haemangioma, vascular ring — refer for ENT review.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Needs adrenaline twice", "Admit"], ["Far from hospital at night", "Lower threshold for admission after adrenaline"]])}` },
{ id: "complications", title: "Complications", html: `<p>Airway obstruction, hypoxia, bacterial tracheitis, pneumonia.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Return at once for stridor at rest, recession, blue lips or drowsiness.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Steeple sign", src: "images/croup-steeple.jpg", mod: "Neck X-ray (AP)", ctx: "Croup", loc: "Subglottic trachea", find: "Tapered subglottic narrowing", signs: "Steeple sign", interp: "Supports croup; X-ray is rarely needed", by: "Frank Gaillard", page: "https://commons.wikimedia.org/wiki/File:Croup_steeple_sign.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Barking cough + stridor", [F.s("Keep calm, SpO₂, Westley"), F.a, F.s("Dexamethasone for all"), F.a, F.d("Stridor at rest?"), F.a, F.b([["Yes", F.e("Nebulised adrenaline, observe 3 h+")], ["No", F.ok("Home with advice")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Examining the throat", "Agitation, obstruction", "Leave it"], ["Discharge soon after adrenaline", "Rebound stridor", "Observe 3 hours"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Nebulised adrenaline dose for a 14 kg child with croup?", "5 mL of 1:1000 (0.5 mL/kg, maximum 5 mL).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Bjornson CL, Klassen TP, Williamson J, et al. A randomized trial of a single dose of oral dexamethasone for mild croup. N Engl J Med. 2004;351:1306-1313. <a href="https://doi.org/10.1056/NEJMoa033534" target="_blank" rel="noopener">doi</a></li><li id="ref-2">Westley CR, Cotton EK, Brooks JG. Nebulized racemic epinephrine by IPPB for the treatment of croup. Am J Dis Child. 1978;132:484-487. <a href="https://doi.org/10.1001/archpedi.1978.02120300044008" target="_blank" rel="noopener">doi</a></li><li id="ref-3">Ministry of Health, Bhutan. Emergency booklet 2018, chapter 8B: Croup.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOIs", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
