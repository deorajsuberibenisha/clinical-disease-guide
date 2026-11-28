/* Brain tumours: warning signs and referral — adults (with children's warning signs). NEW disease (batch N-5, 28 Nov 2026).
   Sources read directly: NICE NG12 §1.9 (read 28 Nov 2026: adults — consider urgent direct-access MRI brain (CT if MRI contraindicated) for
   progressive, sub-acute loss of central neurological function; children/young people — consider very urgent referral within 48 h for newly
   abnormal cerebellar or other central neurological function) and §1.12–1.13 (childhood cancers; take parents' persistent concern into account);
   NICE NG99 Brain tumours (primary) and brain metastases in over 16s (updated Jan 2021, read 28 Nov 2026: standard structural MRI — T2, FLAIR, DWI,
   T1 pre/post contrast — first for suspected glioma, meningioma or metastases; refer to neuro-oncology MDT at first radiological diagnosis;
   glioblastoma ≤ ~70 with KPS ≥70: maximal safe resection then 60 Gy/30 fractions + temozolomide; older: 40 Gy/15 + temozolomide; meningioma
   grade 1 completely excised → active monitoring; brain metastases: extracranial imaging and biopsy before MDT, single metastasis → surgery or
   stereotactic radiosurgery; complex care needs, epilepsy, cognition); NEML 2025 (dexamethasone, levetiracetam, phenytoin, mannitol; no
   temozolomide). Headache red flags, dexamethasone for oedema and avoiding steroids before biopsy if lymphoma suspected are standard — marked.
   Covers remaining-list item 'Brain tumours: warning signs and referral'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "brain-tumour-adult",
title: "Brain Tumours — warning signs & referral",
subtitle: "Progressive neurological loss over weeks, new seizures in an adult, headache with vomiting or papilloedema, or new clumsiness in a child: image the brain, start dexamethasone only for symptomatic swelling, control seizures, and refer to neurosurgery/neuro-oncology",
age: "Adult (child warning signs)", specs: ["neuro", "onc", "surg", "paeds"],
keywords: ["brain tumour", "brain tumor", "glioma", "glioblastoma", "meningioma", "brain metastases", "raised intracranial pressure", "papilloedema", "new seizure adult", "headache red flags", "cerebellar signs child", "medulloblastoma", "dexamethasone brain oedema", "pituitary tumour", "CNS lymphoma"],
related: ["headache-adult", "headache-child", "epilepsy-adult", "brain-abscess", "neurocysticercosis", "lung-cancer-adult", "breast-cancer-adult", "palliative-care", "palliative-child", "icp-child"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most headaches are not tumours. Tumours declare themselves by <b>progression</b>: a neurological function that is getting worse over days–weeks, a first seizure in an adult, or signs of raised pressure ${r(1)} ${LB.exp("RED FLAGS STANDARD")}.</p>
<div class="glance">
<div><h4>Adults</h4><p>Progressive, sub-acute loss of central neurological function → urgent MRI brain (CT if MRI not possible) ${r(1)}.</p></div>
<div><h4>Children</h4><p>New abnormal cerebellar or other central neurological function → very urgent referral (within 48 h) ${r(1)}.</p></div>
<div><h4>Image</h4><p>MRI with contrast (T2, FLAIR, DWI, T1 ± contrast); refer to the neuro-oncology team at first scan ${r(2)}.</p></div>
<div><h4>Bridge</h4><p>${dr("dexamethasone")} for symptomatic oedema; treat seizures; no steroids before biopsy if lymphoma is possible ${LB.exp("STANDARD")}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>CT is available at JDWNRH and regional hospitals; MRI and neurosurgery mainly at JDWNRH; radiotherapy and temozolomide usually need referral to India ${LB.loc()}. In Bhutan, a ring lesion with seizures is often <b>neurocysticercosis</b> or TB — see ${P("neurocysticercosis", "Neurocysticercosis")} and ${P("brain-abscess", "Brain abscess")}.</p>`)}
` },

{ id: "overview", title: "Types", html: `
${tbl(["Type", "Typical patient"], [
["Brain metastases", "Commonest in adults — lung, breast, melanoma, kidney " + r(2) + " " + LB.exp("FREQUENCY STANDARD")],
["Glioma (low grade → glioblastoma)", "Adults; seizures, progressive deficit " + r(2)],
["Meningioma", "Older adults, women; slow; often found by chance " + r(2)],
["Pituitary adenoma", "Visual field loss (bitemporal), hormone effects " + LB.exp("STANDARD")],
["Primary CNS lymphoma", "HIV/immunosuppressed; dramatic steroid response " + LB.exp("STANDARD")],
["Childhood tumours (medulloblastoma, astrocytoma, ependymoma, craniopharyngioma)", "Posterior fossa: ataxia, vomiting, head tilt, early-morning headache " + LB.exp("STANDARD")]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Brain tumour", [F.s("Growing mass + surrounding (vasogenic) oedema"), F.a, F.s("Local damage → focal signs, seizures; pressure → headache, vomiting, papilloedema"), F.a, F.e("Herniation, obstructive hydrocephalus")])} <p>${LB.exp("STANDARD")}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "NICE", "Local reality", "This guide"], [
["First imaging", "MRI (NG99)", "CT more available", "Contrast CT first is acceptable; MRI to characterise " + r(2) + " " + LB.loc()],
["Glioblastoma treatment", "Surgery + chemoradiation with temozolomide", "Radiotherapy/temozolomide via referral", "Early referral; palliative pathway if unfit " + r(2)],
["Steroids before diagnosis", "—", "Often given early", "Only for symptomatic oedema; avoid if lymphoma possible " + LB.exp("STANDARD")]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li><b>Progressive focal deficit</b>: weakness, speech, vision, personality/cognitive change over weeks ${r(1)}.</li>
<li><b>First seizure in an adult</b>, especially focal ${LB.exp("STANDARD")} ${P("epilepsy-adult", "Epilepsy")}.</li>
<li><b>Raised pressure</b>: headache worse on waking, lying, coughing or straining; vomiting; papilloedema; drowsiness ${LB.exp("STANDARD")}.</li>
<li><b>Children</b>: unsteady walking, clumsiness, head tilt, squint, early-morning vomiting, growth/puberty problems, large head in infants ${r(1)} ${LB.exp("CHILD FEATURES STANDARD")}.</li>
<li>Pituitary: bitemporal visual loss, galactorrhoea, acromegaly, Cushing's ${LB.exp("STANDARD")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 58-year-old woman from Haa, ex-smoker, has 3 weeks of morning headache and worsening left-hand clumsiness; today a focal seizure. Mild left weakness, papilloedema. <b>Possible metastasis or glioma</b>: CT/MRI with contrast, dexamethasone for oedema, levetiracetam, chest X-ray/CT for a primary, neurosurgery referral ${r(1)} ${r(2)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Brain abscess", "Fever, source, ring lesion " + P("brain-abscess", "Brain abscess")],
["Neurocysticercosis / tuberculoma", "Seizures, cysts with scolex, TB contact " + P("neurocysticercosis", "Neurocysticercosis")],
["Stroke", "Sudden onset " + P("stroke-adult", "Stroke")],
["Chronic subdural haematoma", "Older, falls, antithrombotics " + P("chronic-subdural-adult", "Chronic SDH")],
["Idiopathic intracranial hypertension", "Young obese woman, normal scan " + LB.exp("STANDARD")],
["Migraine / tension headache", "Long history, normal examination " + P("headache-adult", "Headache")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>MRI brain with contrast (T2, FLAIR, DWI, T1 ± contrast); CT with contrast where MRI is unavailable ${r(2)}.</li>
<li>Suspected metastases: chest X-ray/CT chest-abdomen-pelvis, breast examination, biopsy of extracranial disease before MDT ${r(2)}.</li>
<li>HIV test (lymphoma, toxoplasma); bloods incl. sodium and glucose ${LB.exp("STANDARD")}.</li>
<li>Pituitary: visual fields, prolactin and pituitary hormones ${LB.exp("STANDARD")}.</li>
<li>Do not do a lumbar puncture before imaging when a mass is suspected ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "staging", title: "Brain tumour warning-sign helper", html: `<div class="calc" data-calc="braintumour"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Before specialist care</h3>
<ul>
<li>${dr("dexamethasone")} for symptomatic oedema (e.g. 8–16 mg daily, then the lowest effective dose) with PPI and glucose checks; avoid before biopsy if lymphoma is suspected ${LB.exp("DOSE STANDARD")}.</li>
<li>Seizures: ${dr("levetiracetam")} (fewer interactions) or ${dr("phenytoin")} ${LB.exp("STANDARD")}; status epilepticus pathway as usual.</li>
<li>Impending herniation: head up, ${dr("mannitol")}, urgent neurosurgery ${LB.exp("STANDARD")}.</li>
<li>Driving advice after seizures; VTE prophylaxis when immobile ${LB.exp("STANDARD")}.</li>
</ul>
<h3>Specialist treatment ${r(2)}</h3>
<ul>
<li>Glioma: maximal safe resection or biopsy; glioblastoma in fit patients ≤ ~70: radiotherapy 60 Gy/30 fractions with temozolomide; older fit: 40 Gy/15 fractions + temozolomide.</li>
<li>Meningioma: completely excised grade 1 → active monitoring; higher grades or incomplete excision → radiotherapy or more surgery.</li>
<li>Metastases: single → surgery or stereotactic radiosurgery; systemic therapy for sensitive tumours (germ cell, small-cell lung).</li>
<li>Supportive and palliative care for cognition, personality change, epilepsy, fatigue and carer strain ${P("palliative-care", "Palliative care")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("dexamethasone"), "Symptomatic oedema " + LB.exp("STANDARD"), "4 mg tab, 4 mg/mL inj"],
[dr("levetiracetam"), "Tumour-related seizures " + LB.exp("STANDARD"), "500 mg tab (DH), 100 mg/mL inj (MDR-TB use)"],
[dr("phenytoin"), "Seizures (interactions) " + LB.exp("STANDARD"), "100 mg tab, 50 mg/mL inj"],
[dr("mannitol"), "Herniation bridge " + LB.exp("STANDARD"), "20% solution"],
["Temozolomide", "Glioma " + r(2), "Not listed"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Children:</b> listen to parents' persistent concern; refer new cerebellar signs within 48 h ${r(1)} ${P("palliative-child", "Palliative care (child)")}.</li><li><b>HIV:</b> lymphoma vs toxoplasmosis — specialist ${LB.exp("STANDARD")}.</li><li><b>Pregnancy:</b> MRI without gadolinium; seizure drugs with specialist ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Headache for years, normal exam", "Reassure; treat primary headache " + P("headache-adult", "Headache")],
["Child vomiting every morning, falling over", "Very urgent referral and imaging " + r(1)],
["Ring lesion in a young man with seizures", "Neurocysticercosis/TB first in Bhutan " + P("neurocysticercosis", "Neurocysticercosis")],
["Glioblastoma, poor performance status", "Best supportive care; palliative team " + r(2)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Herniation, hydrocephalus, seizures, VTE, steroid side effects, cognitive decline ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Per neuro-oncology plan; regular MRI ${r(2)}.</li><li>Named coordinator for health and social care needs ${r(2)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Neurological symptoms", [F.d("Progressive deficit, new adult seizure, raised-pressure signs, child cerebellar signs?"), F.a, F.b([["Yes", F.s("Urgent CT/MRI with contrast; no LP")], ["No", F.s("Primary headache care; safety-net")]]), F.a, F.e("Mass → dexamethasone if symptomatic, seizure control, neurosurgery/neuro-oncology")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Labelling new adult seizures as epilepsy without imaging", "Tumour missed", "Image every first seizure in adults " + LB.exp("STANDARD")],
["Steroids before biopsy in possible lymphoma", "Biopsy non-diagnostic", "Discuss with neurosurgery first"],
["LP in a patient with papilloedema", "Herniation", "Image first"],
["Ignoring parents' concern", "Delayed childhood diagnosis", "NICE NG12 §1.13 " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "NICE action for an adult with progressive sub-acute loss of central neurological function?", "Consider urgent direct-access MRI brain (CT if MRI contraindicated).")}
${qa("Intern/MO", "Child with new ataxia — referral timing?", "Very urgent, within 48 hours.")}
${qa("Registrar", "First-line imaging for suspected glioma (NG99)?", "Standard structural MRI: T2, FLAIR, DWI, T1 pre/post contrast.")}
${qa("Specialist", "Standard therapy for glioblastoma in a fit 55-year-old?", "Maximal safe resection, then 60 Gy in 30 fractions with temozolomide and adjuvant temozolomide.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">National Institute for Health and Care Excellence. Suspected cancer: recognition and referral (NG12), §1.9, §1.12–1.13. <a href="https://www.nice.org.uk/guidance/ng12" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-2">National Institute for Health and Care Excellence. Brain tumours (primary) and brain metastases in over 16s (NG99, updated 2021). <a href="https://www.nice.org.uk/guidance/ng99" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["NICE NG12 §1.9", "<span class='pass'>Read</span>", "28 Nov 2026"], ["NICE NG99", "<span class='pass'>Read</span>", "Glioma, meningioma, metastases"], ["Red flags, steroid dose", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
