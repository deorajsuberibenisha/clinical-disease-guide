/* Myasthenia gravis — adults (with notes for children, pregnancy and newborns). NEW disease (batch N-4, 28 Nov 2026).
   Sources read directly: International consensus guidance for management of MG — executive summary (Sanders et al., Neurology 2016;87:419,
   PMC4977114, read 28 Nov 2026: pyridostigmine part of initial treatment; corticosteroids or immunosuppression if goals not met; azathioprine
   first-line non-steroidal agent; IVIg/PLEX for crisis, bulbar weakness, pre-surgery; steroids may transiently worsen weakness; impending crisis →
   admit with respiratory/bulbar monitoring; thymoma → surgery; pregnancy: oral pyridostigmine first line, prednisone IS of choice, MMF/MTX
   contraindicated, magnesium sulfate not recommended for eclampsia, vaginal delivery, examine all newborns for transient myasthenia) and the
   2020 update (Narayanaswami et al., Neurology 2021;96:114, PMC7884987: thymectomy early in non-thymomatous AChR-Ab+ generalized MG aged 18–50;
   rituximab, eculizumab, methotrexate statements); NEML 2025 checked: NO pyridostigmine tablets (neostigmine 0.5 mg/mL injection only, DH with OT),
   prednisolone 5/20 mg, methylprednisolone, methotrexate 2.5 mg, mycophenolate (RRH/NRH), no azathioprine, no IVIg. Drugs that worsen MG,
   pyridostigmine dosing and bedside respiratory thresholds are standard practice — marked. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "myasthenia-adult",
title: "Myasthenia Gravis",
subtitle: "Fatigable weakness: droopy lids, double vision, slurred speech, trouble swallowing. Confirm with antibodies, treat with pyridostigmine and steroids, avoid drugs that worsen it, and admit anyone with bulbar or breathing weakness",
age: "Adult (child & pregnancy notes)", specs: ["neuro", "medicine", "emerg"],
keywords: ["myasthenia gravis", "MG", "ptosis", "diplopia", "fatigable weakness", "myasthenic crisis", "pyridostigmine", "neostigmine", "acetylcholine receptor antibody", "AChR", "MuSK", "thymoma", "thymectomy", "ice pack test", "bulbar weakness", "neonatal myasthenia"],
related: ["gbs-adult", "neuropathy-adult", "stroke-adult", "ards-adult", "thyroid-adult", "preeclampsia-preg", "bells-palsy-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Autoimmune attack on the neuromuscular junction (usually acetylcholine-receptor antibodies) causes weakness that <b>worsens with use and improves with rest</b>. Eyes are involved first in most people; danger comes from <b>bulbar and breathing muscles</b> ${r(1)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Ptosis and double vision worse in the evening, nasal speech, choking, chewing fatigue, arm weakness on repetition — normal sensation and reflexes ${LB.exp("STANDARD")}.</p></div>
<div><h4>Treat</h4><p>Pyridostigmine for symptoms; prednisolone or other immunosuppression if goals are not met; azathioprine first steroid-sparing agent ${r(1)}.</p></div>
<div><h4>Crisis</h4><p>Bulbar weakness or breathlessness → admit with ICU access; IVIg or plasma exchange; steroids may first worsen weakness ${r(1)}.</p></div>
<div><h4>Thymus</h4><p>CT chest for thymoma (remove it); thymectomy early in AChR-positive generalized MG aged 18–50 ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Oral <b>pyridostigmine is not on the NEML</b> — only neostigmine injection at hospitals with an OT ${r(3)}. Azathioprine and IVIg are not listed; prednisolone, methotrexate and (at referral hospitals) mycophenolate are ${r(3)}. Diagnosis (antibodies, nerve studies, CT) and thymectomy are usually arranged through JDWNRH or referral to India ${LB.loc()}.</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Type", "Features"], [
["Ocular MG", "Ptosis/diplopia only; some generalize later " + r(1)],
["Generalized AChR-antibody MG", "Commonest; thymic hyperplasia or thymoma " + r(2)],
["MuSK-antibody MG", "Bulbar/neck weakness; poor response and side effects with pyridostigmine; responds to steroids, PLEX, rituximab " + r(1)],
["Seronegative", "No detectable antibodies; consider other disorders " + r(1)],
["Juvenile MG", "Ocular forms often remit spontaneously " + r(1)],
["Transient neonatal MG", "Baby of a myasthenic mother — weak suck, cry, breathing " + r(1)]
])}
<p>Incidence 0.3–2.8 per 100 000 ${r(1)}.</p>
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("MG", [F.s("Antibodies to AChR (or MuSK/LRP4)"), F.a, F.s("Fewer working receptors at the neuromuscular junction"), F.a, F.e("Weakness that fatigues with repeated use")])} <p>${r(1)}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "International consensus", "Local reality", "This guide"], [
["First-line symptomatic drug", "Pyridostigmine", "Not on NEML", "Request/import pyridostigmine; steroids early if unavailable " + r(1) + " " + r(3)],
["Steroid-sparing agent", "Azathioprine first", "Not on NEML; methotrexate, mycophenolate listed", "Specialist choice " + r(2) + " " + r(3)],
["Crisis", "IVIg or PLEX", "Neither widely available", "Early transfer; ventilation support " + LB.loc()],
["Azathioprine in pregnancy", "Relatively safe (strong minority against)", "—", "Specialist decision " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Ptosis (often asymmetric) and double vision, worse with prolonged upgaze and in the evening ${LB.exp("STANDARD")}.</li>
<li>Bulbar: nasal speech, choking on liquids, jaw fatigue; neck flexor weakness ${LB.exp("STANDARD")}.</li>
<li>Limbs: proximal fatigable weakness; sensation and reflexes normal ${LB.exp("STANDARD")}.</li>
<li>Breathlessness lying flat, weak cough, rising respiratory rate — <b>impending crisis</b> ${r(1)}.</li>
<li>Triggers: infection, surgery, pregnancy/post-partum, stopping treatment, new drugs ${r(1)} ${LB.exp("DRUG TRIGGERS STANDARD")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 28-year-old woman from Trashigang has drooping eyelids and double vision by evening for 2 months, and now chokes on tea. Ptosis worsens after 60 seconds of upgaze; sensation and reflexes normal. <b>Generalized MG with bulbar symptoms</b>: admit, monitor breathing and swallowing, AChR antibodies and CT chest, start treatment with the neurologist ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Stroke / brainstem lesion", "Sudden, other brainstem signs " + P("stroke-adult", "Stroke")],
["Guillain–Barré (Miller Fisher)", "Areflexia, ataxia, ophthalmoplegia " + P("gbs-adult", "GBS")],
["Thyroid eye disease", "Proptosis, lid retraction " + P("thyroid-adult", "Thyroid")],
["Botulism / snake envenoming (krait, cobra)", "Acute descending paralysis, ptosis — history " + P("snakebite-adult", "Snakebite")],
["Organophosphate poisoning", "Secretions, miosis " + P("poisoning-adult", "Poisoning")],
["Third nerve palsy", "Pupil involved, painful (aneurysm) " + P("sah-adult", "SAH")],
["Lambert–Eaton", "Proximal leg weakness improving with effort, dry mouth, cancer"]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>AChR antibodies; MuSK antibodies if negative ${r(1)} ${LB.exp("STANDARD")}.</li>
<li>Bedside: ice-pack test on ptosis (improvement supports MG) ${LB.exp("STANDARD")}.</li>
<li>Repetitive nerve stimulation / single-fibre EMG (specialist) ${LB.exp("STANDARD")}.</li>
<li>CT chest for thymoma — all patients ${r(1)} ${LB.exp("STANDARD")}.</li>
<li>Thyroid function (associated autoimmunity) ${LB.exp("STANDARD")}.</li>
<li>Breathing: count to 20 in one breath, vital capacity where available, swallowing assessment; blood gases are a late sign ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "staging", title: "MG crisis and drug-safety helper", html: `<div class="calc" data-calc="mgcheck"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Symptomatic ${r(1)}</h3>
<ul><li><a href="#/fdb/pyridostigmine">Pyridostigmine</a> as part of initial treatment; adjust to symptoms (commonly 30–60 mg 3–4 times daily, titrated) ${LB.exp("DOSE STANDARD")}. Side effects: cramps, diarrhoea, sweating, salivation. Too much can increase weakness and secretions.</li></ul>
<h3>Immunotherapy ${r(1)}</h3>
<ul>
<li>${dr("prednisolone")} if goals not met on pyridostigmine: start low and increase slowly in generalized MG (risk of early worsening) ${LB.exp("TITRATION STANDARD")}; taper once goals are met; low dose may continue long-term.</li>
<li>Steroid-sparing agent (azathioprine first-line; mycophenolate, ${dr("methotrexate")}, tacrolimus, cyclosporine) when steroids are contraindicated, insufficient, or cannot be reduced.</li>
<li>Refractory MG: specialist centre — rituximab, chronic IVIg/PLEX, eculizumab ${r(2)}.</li>
</ul>
<h3>Thymectomy ${r(1)} ${r(2)}</h3>
<ul><li>All thymomas removed. Non-thymomatous AChR-positive generalized MG aged 18–50: consider early thymectomy, when stable.</li></ul>
<h3>Impending or manifest crisis ${r(1)}</h3>
<ul>
<li>Admit with ICU access; monitor breathing and swallowing several times daily; nil by mouth if swallowing unsafe.</li>
<li>IVIg or plasma exchange (PLEX faster; not in sepsis; IVIg not in renal failure or hypercoagulable states).</li>
<li>Intubate or non-invasive ventilation early for failing breathing — do not wait for low oxygen ${LB.exp("STANDARD")}. Treat infection; review drugs.</li>
<li>Pyridostigmine is often paused in ventilated patients because it increases secretions ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[`<a href="#/fdb/pyridostigmine">Pyridostigmine</a>`, "Symptomatic first line " + r(1), "Not listed " + r(3)],
[dr("neostigmine"), "Parenteral cholinesterase inhibitor (specialist; not IV in pregnancy) " + r(1), "0.5 mg/mL injection (DH with OT)"],
[dr("prednisolone"), "Main immunotherapy " + r(1), "5 mg, 20 mg"],
[dr("methotrexate"), "Steroid-sparing (contraindicated in pregnancy) " + r(1) + " " + r(2), "2.5 mg"],
["Mycophenolate", "Steroid-sparing (contraindicated in pregnancy) " + r(1), "RRH/NRH"],
["Azathioprine, IVIg, rituximab", "Specialist " + r(1), "Not listed " + r(3)]
])}
${box("red", "Drugs that can worsen MG", `<p>Aminoglycosides (gentamicin), fluoroquinolones, macrolides (azithromycin), IV <b>magnesium</b>, beta-blockers, quinine/chloroquine, neuromuscular blockers, immune-checkpoint inhibitors ${LB.exp("STANDARD LIST")}. Magnesium sulfate is not recommended for eclampsia in MG ${r(1)}.</p>`)}
` },

{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>Pregnancy:</b> plan ahead; most stay stable; worsening more likely after delivery. Oral pyridostigmine first-line, prednisolone the immunosuppressant of choice; no mycophenolate or methotrexate; no IV cholinesterase inhibitors; aim for vaginal delivery; <b>no magnesium sulfate</b> for eclampsia (use phenytoin or barbiturates) ${r(1)} ${P("preeclampsia-preg", "Pre-eclampsia")}.</li>
<li><b>Newborn of a myasthenic mother:</b> examine every baby for weak suck, cry and breathing; rapid access to neonatal care ${r(1)}.</li>
<li><b>Children:</b> ocular MG can start with pyridostigmine; minimise steroids (growth, bones, infection) ${r(1)}.</li>
<li><b>Surgery/anaesthesia:</b> inform the anaesthetist; IVIg/PLEX before surgery if bulbar weakness is significant ${r(1)}.</li>
</ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Known MG with pneumonia, given gentamicin, now weaker", "Stop the drug, admit, monitor breathing — impending crisis " + r(1)],
["Eclampsia in a woman with MG", "Avoid magnesium; phenytoin or barbiturate " + r(1)],
["Weaker after starting high-dose prednisolone", "Expected early worsening — monitor closely; specialist " + r(1)],
["Ptosis after a krait bite", "Envenoming, not MG — antivenom " + P("snakebite-adult", "Snakebite")]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Myasthenic crisis (respiratory failure), aspiration pneumonia, steroid side effects, thymoma spread, cholinergic excess ${r(1)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Goal: minimal manifestations or better with only mild drug side effects ${r(1)}.</li><li>Taper immunosuppression slowly after 6 months–2 years of stability; adjust doses no more often than every 3–6 months ${r(1)}.</li><li>Monitor blood counts and liver tests on steroid-sparing drugs ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. Fatigable ptosis on sustained upgaze is the key sign.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Fatigable ptosis / bulbar weakness", [F.d("Breathing or swallowing affected?"), F.a, F.b([["Yes", F.e("Admit, ICU access, IVIg/PLEX, ventilate early")], ["No", F.s("Antibodies, CT chest, neurology")]]), F.a, F.s("Pyridostigmine → steroids → steroid-sparing agent; thymectomy if indicated")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for low oxygen saturation", "Neuromuscular failure is late on oximetry", "Watch bulbar signs, breath count, cough " + LB.exp("STANDARD")],
["Gentamicin or magnesium in MG", "Precipitates crisis", "Check the drug list"],
["Missing thymoma", "Tumour spread", "CT chest in all " + r(1)],
["Calling it 'psychological fatigue'", "Delay", "Test fatigable ptosis"]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Which antibiotic class should be avoided in MG?", "Aminoglycosides (also fluoroquinolones and macrolides).")}
${qa("Intern/MO", "Why can starting steroids be risky in generalized MG?", "Corticosteroids may transiently worsen weakness — start in hospital or low and slow.")}
${qa("Registrar", "Treatment of myasthenic crisis?", "ICU-capable admission, ventilatory support, IVIg or plasma exchange, then immunosuppression.")}
${qa("Specialist", "Who should be offered early thymectomy?", "Non-thymomatous AChR-antibody-positive generalized MG aged 18–50; all thymomas resected.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Sanders DB, et al. International consensus guidance for management of myasthenia gravis: Executive summary. Neurology 2016;87(4):419–25. doi:10.1212/WNL.0000000000002790. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4977114/" target="_blank" rel="noopener">PMC4977114</a></li>
<li id="ref-2">Narayanaswami P, et al. International Consensus Guidance for Management of Myasthenia Gravis: 2020 Update. Neurology 2021;96(3):114–22. doi:10.1212/WNL.0000000000011124. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7884987/" target="_blank" rel="noopener">PMC7884987</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["International consensus 2016", "<span class='pass'>Read</span>", "PMC, 28 Nov 2026"], ["2020 update (thymectomy)", "<span class='pass'>Read</span>", ""], ["NEML", "<span class='pass'>Checked</span>", "No pyridostigmine tablets"], ["Drug-worsening list, doses", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
