/* Chronic subdural haematoma — adults (mostly older people). NEW disease (batch N-4, 28 Nov 2026).
   Sources read directly (abstracts via Europe PMC, DOIs checked on Crossref 28 Nov 2026): Hutchinson et al., Trial of dexamethasone for chronic
   subdural hematoma (Dex-CSDH), N Engl J Med 2020;383:2616–27 — 748 patients, mean age 74, 94% had surgery; 2-week tapering dexamethasone from
   8 mg twice daily gave FEWER favourable outcomes at 6 months (83.9% vs 90.3%); Santarius et al., Drains vs no drains after burr-hole evacuation,
   Lancet 2009;374:1067–73 — recurrence 9.3% vs 24%, 6-month mortality 8.6% vs 18.1%; Liu et al., MMA embolization for nonacute SDH, NEJM 2024;
   391:1901–12 — 90-day recurrence/progression 6.7% vs 9.9% (P = 0.10), fewer serious adverse events; Fiorella et al., MMA embolization for
   chronic SDH, NEJM 2025;392:855–64 — primary outcome 16% vs 36%. ICMR Neurosurgery STW (head-injury workflow: steroids not useful in head
   injury; surgery thresholds for acute SDH). Clinical features, anticoagulant reversal and restart timing are standard practice — marked. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "chronic-subdural-adult",
title: "Chronic Subdural Haematoma",
subtitle: "An older person, often on aspirin or anticoagulants, with weeks of headache, confusion, falls or one-sided weakness after a minor or forgotten knock: CT head, reverse anticoagulation, refer for burr-hole drainage with a drain — and do not give dexamethasone",
age: "Adult (mostly older)", specs: ["neuro", "surg", "emerg", "medicine"],
keywords: ["chronic subdural haematoma", "chronic subdural hematoma", "CSDH", "subdural", "burr hole", "subdural drain", "confusion elderly", "falls elderly", "anticoagulant head injury", "dexamethasone subdural", "middle meningeal artery embolisation", "hemiparesis elderly"],
related: ["headinjury-adult", "dementia-adult", "stroke-adult", "coma-adult", "headache-adult", "alcohol-adult", "af-adult", "vte-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">A slowly enlarging collection of old blood between the dura and brain, mostly in older people. It can mimic <b>dementia, stroke or delirium</b> — and is one of the most treatable causes of them ${r(1)} ${LB.exp("STANDARD")}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Older age, alcohol, anticoagulant/antiplatelet use, falls; headache, confusion, drowsiness, gait change, one-sided weakness over days–weeks ${LB.exp("STANDARD")}.</p></div>
<div><h4>Test</h4><p>Non-contrast CT head — hypodense or mixed crescent-shaped collection ${LB.exp("STANDARD")}.</p></div>
<div><h4>Treat</h4><p>Symptomatic → neurosurgery: burr-hole drainage <b>with a subdural drain</b> (halves recurrence, lowers mortality) ${r(2)}.</p></div>
<div><h4>Do not</h4><p>Give dexamethasone — it worsened 6-month outcomes in a large trial ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>CT and neurosurgery are at JDWNRH and the regional referral hospitals ${LB.loc()}. While arranging transfer: stop antithrombotics, check clotting, reverse warfarin with vitamin K and plasma if needed (see ${P("bleeding-adult", "Bleeding disorders")}), and monitor GCS ${LB.exp("STANDARD")}.</p>`)}
` },

{ id: "overview", title: "Who gets it", html: `
<ul>
<li>Older adults (mean age 73–74 in the large trials) ${r(1)} ${r(4)}.</li>
<li>Risk factors: falls, brain atrophy (age, alcohol), anticoagulants, antiplatelets, bleeding disorders, CSF shunts ${LB.exp("STANDARD")}.</li>
<li>The injury is often trivial or forgotten ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Chronic SDH", [F.s("Bridging veins tear (often minor injury in an atrophic brain)"), F.a, F.s("Inflammation and fragile new membranes; repeated small bleeds (middle meningeal artery branches)"), F.a, F.e("Slow growth → raised pressure, midline shift")])} <p>Embolising the middle meningeal artery targets this membrane blood supply ${r(3)} ${r(4)}.</p>` },

{ id: "conflicts", title: "Where evidence differs", html: `
${tbl(["Topic", "Evidence", "This guide"], [
["Dexamethasone", "Dex-CSDH: worse outcomes (83.9% vs 90.3% favourable) " + r(1), "Do not use"],
["Drain after burr hole", "Recurrence 9.3% vs 24%; mortality 8.6% vs 18.1% " + r(2), "Drain when safe"],
["MMA embolisation", "Liu 2024: no significant fall in recurrence (6.7% vs 9.9%); Fiorella 2025: 16% vs 36% for the primary outcome " + r(3) + " " + r(4), "Specialist option where available; not in Bhutan routinely " + LB.loc()]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Headache, confusion, memory change, drowsiness, personality change ${LB.exp("STANDARD")}.</li>
<li>Gait disturbance, falls, hemiparesis, speech difficulty, seizures ${LB.exp("STANDARD")}.</li>
<li>Fluctuating symptoms — can be mistaken for TIA, stroke, dementia or delirium ${LB.exp("STANDARD")}.</li>
<li>Late: falling GCS, pupil change, coma ${P("coma-adult", "Coma")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 76-year-old man from Mongar on aspirin, who drinks daily, has been more forgetful and unsteady for 3 weeks and now has a weak right hand. He slipped in the kitchen a month ago. CT shows a 14 mm left hypodense subdural collection with midline shift. <b>Symptomatic chronic SDH</b>: stop aspirin, check clotting and platelets, refer for burr-hole drainage with drain; no dexamethasone ${r(1)} ${r(2)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Stroke / TIA", "Sudden onset; CT/MRI " + P("stroke-adult", "Stroke")],
["Dementia", "Slow over months–years, no focal signs " + P("dementia-adult", "Dementia")],
["Delirium from infection, drugs, metabolic", "Fever, sodium, glucose"],
["Brain tumour", "Mass on CT, oedema"],
["Acute SDH", "Hyperdense on CT, recent injury " + P("headinjury-adult", "Head injury")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>Non-contrast CT head ${LB.exp("STANDARD")}.</li>
<li>FBC/platelets, INR/clotting, kidney function, glucose, sodium ${LB.exp("STANDARD")}.</li>
<li>List all antithrombotic drugs; alcohol history ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "staging", title: "Chronic SDH helper", html: `<div class="calc" data-calc="csdhplan"></div>` },

{ id: "manage", title: "Management", html: `
<ul>
<li><b>Symptomatic collection with mass effect</b>: neurosurgical referral; burr-hole evacuation, then a <b>subdural drain</b> where safe ${r(2)}.</li>
<li><b>Small, symptom-free</b> collection: observe with repeat CT and neurological review (neurosurgical advice) ${LB.exp("STANDARD")}.</li>
<li><b>No dexamethasone</b> ${r(1)}.</li>
<li>Stop antiplatelets/anticoagulants; reverse warfarin; restart timing is a joint decision weighing clot risk ${LB.exp("STANDARD")}.</li>
<li>Seizures: treat; routine prophylaxis not shown here ${LB.exp("STANDARD")}.</li>
<li>Middle meningeal artery embolisation: an add-on or alternative at specialist centres ${r(3)} ${r(4)}.</li>
<li>Falls prevention, alcohol support, thiamine where relevant ${P("alcohol-adult", "Alcohol")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Point"], [
[dr("dexamethasone"), "Do <b>not</b> use for chronic SDH " + r(1)],
[dr("vitamin_k", "Vitamin K"), "Warfarin reversal " + LB.exp("STANDARD")],
[dr("aspirin"), "Stop; specialist decides restart " + LB.exp("STANDARD")]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Infants:</b> subdural collections raise concern for abusive head trauma — child protection assessment ${LB.exp("STANDARD")}.</li><li><b>Very frail:</b> discuss goals of care; burr-hole surgery can still be done under local anaesthesia in many ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["On anticoagulation for AF, CSDH found", "Stop and reverse; restart decision with neurosurgery and cardiology " + P("af-adult", "AF")],
["Family thinks it is 'old age'", "CT for any new confusion with falls or focal signs"],
["Recurrence after drainage", "Re-image, neurosurgery — redrainage or embolisation " + r(2) + " " + r(3)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Recurrence (5–30% after burr-hole drainage without drain ${r(2)}), seizures, infection, pneumocephalus, death ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Clinical review and CT if symptoms return ${LB.exp("STANDARD")}.</li><li>Teach family warning signs: headache, confusion, weakness, drowsiness.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. Chronic SDH is crescent-shaped and darker than brain (hypodense) on CT.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Older person: confusion, falls, weakness", [F.s("CT head"), F.a, F.d("Chronic SDH with symptoms or mass effect?"), F.a, F.b([["Yes", F.e("Stop/reverse antithrombotics; burr hole + drain")], ["No / small", F.s("Observe, repeat CT, neurosurgical advice")]]), F.a, F.s("No dexamethasone")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Labelling as dementia or stroke without CT", "Treatable cause missed", "CT for subacute change"],
["Giving dexamethasone", "Worse outcomes", "Not used " + r(1)],
["Continuing aspirin/warfarin", "Expansion, recurrence", "Stop and reverse"],
["No drain after burr hole", "More recurrence and death", "Drain when safe " + r(2)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Does dexamethasone help chronic SDH?", "No — the Dex-CSDH trial found fewer favourable outcomes at 6 months with dexamethasone.")}
${qa("Registrar", "Effect of a drain after burr-hole evacuation?", "Recurrence fell from 24% to 9.3% and 6-month mortality from 18.1% to 8.6% (Santarius 2009).")}
${qa("Specialist", "What does middle meningeal artery embolisation target?", "The membrane blood supply that causes repeated bleeding; trials show mixed but promising effects on recurrence.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Hutchinson PJ, et al. Trial of dexamethasone for chronic subdural hematoma. N Engl J Med 2020;383:2616–27. doi:10.1056/NEJMoa2020473</li>
<li id="ref-2">Santarius T, et al. Use of drains versus no drains after burr-hole evacuation of chronic subdural haematoma: a randomised controlled trial. Lancet 2009;374:1067–73. doi:10.1016/S0140-6736(09)61115-6</li>
<li id="ref-3">Liu J, et al. Middle meningeal artery embolization for nonacute subdural hematoma. N Engl J Med 2024;391:1901–12. doi:10.1056/NEJMoa2401201</li>
<li id="ref-4">Fiorella D, et al. Embolization of the middle meningeal artery for chronic subdural hematoma. N Engl J Med 2025;392:855–64. doi:10.1056/NEJMoa2409845</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Dex-CSDH, drains, two MMA trials", "<span class='pass'>Abstracts read</span>", "DOIs verified 28 Nov 2026"], ["Clinical features, anticoagulant handling", "<span class='unv'>Standard</span>", "Marked; no guideline read"]], "qc")}` }
]
});
})();
