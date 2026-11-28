/* Peripheral neuropathy (diabetic, alcohol, B12, leprosy, drugs) — adults. NEW disease (batch N-4, 28 Nov 2026).
   Sources read directly: Merck Manual Professional — Polyneuropathy (full review May 2026, updated Nov 2026: classification by myelin / vasa
   nervorum / axon; symmetric distal = toxic-metabolic; asymmetric = vasculitis; acute = autoimmune/toxin/infection; causes incl. diabetes, CKD,
   vinca alkaloids, thiamine/B6/B12 deficiency, alcohol, B6 excess, hypothyroidism, leprosy, HIV, lead, dapsone; baseline labs: fasting glucose/
   HbA1c, B12 (+MMA) and folate, SPEP with immunofixation, CBC, metabolic panel, TSH, HIV/RPR, ANA/ANCA, heavy metals; EMG/NCS in all; treat cause;
   first-line pain drugs gabapentinoids, TCAs, SNRIs, topical); NICE CG173 Neuropathic pain in adults (updated Sept 2020, read 28 Nov 2026:
   offer amitriptyline, duloxetine, gabapentin or pregabalin; switch if not effective; tramadol only for acute rescue; capsaicin cream for localised
   pain; carbamazepine for trigeminal neuralgia; do not start morphine, long-term tramadol, valproate etc. in non-specialist settings); NEML 2025
   (amitriptyline 25 mg, gabapentin 300 mg, carbamazepine 200 mg, pyridoxine 25 mg, vitamin B complex; no duloxetine/pregabalin; no B12 injection
   — as recorded on the anaemia page); existing CDG pages for diabetic foot (monofilament), TB (pyridoxine with isoniazid), leprosy, thiamine.
   Drug titration steps are BNF-style standard practice — marked. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "neuropathy-adult",
title: "Peripheral Neuropathy — Adults",
subtitle: "Numb, burning or weak feet and hands: decide the pattern (symmetric, asymmetric, acute, motor), look for diabetes, alcohol, B12 lack, leprosy, HIV, drugs and kidney disease, protect the feet, and treat pain with amitriptyline or gabapentin",
age: "Adult", specs: ["neuro", "medicine", "endo"],
keywords: ["peripheral neuropathy", "polyneuropathy", "diabetic neuropathy", "alcoholic neuropathy", "B12 deficiency neuropathy", "numbness feet", "burning feet", "tingling", "glove and stocking", "neuropathic pain", "amitriptyline", "gabapentin", "isoniazid neuropathy", "leprosy neuropathy", "mononeuritis multiplex", "foot drop", "trigeminal neuralgia"],
related: ["diabeticfoot-adult", "dm-adult", "leprosy", "thiamine-adult", "alcohol-adult", "anaemia-adult", "gbs-adult", "tb-adult", "hiv-adult", "ckd-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most neuropathy in our clinics is <b>distal, symmetric and sensory</b> — "glove and stocking" — caused by diabetes, alcohol, vitamin deficiency, drugs (isoniazid) or kidney disease. <b>Asymmetric</b> or <b>fast</b> neuropathy needs a different search (leprosy, vasculitis, GBS) ${r(1)}.</p>
<div class="glance">
<div><h4>Pattern first</h4><p>Symmetric distal → toxic/metabolic. Asymmetric or patchy → leprosy, vasculitis, diabetes mononeuropathy. Acute ascending weakness → ${P("gbs-adult", "GBS")} ${r(1)}.</p></div>
<div><h4>Baseline tests</h4><p>Glucose/HbA1c, B12 and folate, FBC, kidney and liver tests, TSH, HIV, syphilis; skin check for leprosy ${r(1)}.</p></div>
<div><h4>Feet</h4><p>10 g monofilament, daily foot checks, footwear — numb feet ulcerate ${P("diabeticfoot-adult", "Diabetic foot")}.</p></div>
<div><h4>Pain</h4><p>${dr("amitriptyline")} or ${dr("gabapentin")} (duloxetine/pregabalin are alternatives); switch if one fails; tramadol only short rescue ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Amitriptyline 25 mg, gabapentin 300 mg, carbamazepine and pyridoxine 25 mg are on the NEML; duloxetine and pregabalin are not ${r(3)}. Always look for <b>leprosy</b> (thickened nerves, anaesthetic skin patches) and ask about <b>isoniazid</b> and alcohol ${LB.loc()}. Nerve conduction studies are done at JDWNRH ${LB.loc()}.</p>`)}
` },

{ id: "overview", title: "Types and causes", html: `
${tbl(["Pattern", "Common causes"], [
["Distal symmetric sensory/sensorimotor (axonal)", "Diabetes, alcohol, CKD, B12/thiamine/B6 deficiency, hypothyroidism, chemotherapy (vincristine), isoniazid without pyridoxine, HIV " + r(1)],
["Mainly sensory", "Diabetes, leprosy, advanced HIV, B6 excess " + r(1)],
["Mainly motor", "GBS and immune neuropathies, lead, dapsone, porphyria " + r(1)],
["Asymmetric / multiple mononeuropathy", "Leprosy, vasculitis, diabetes, hypercoagulable states " + r(1)],
["Single nerve (mononeuropathy)", "Carpal tunnel (median), ulnar at elbow, common peroneal (foot drop), cranial nerves III/VI in diabetes " + r(1)],
["Demyelinating", "GBS (acute), CIDP (chronic, relapsing) " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Neuropathy", [F.s("Metabolic/toxic injury, ischaemia of vasa nervorum, or immune attack on myelin"), F.a, F.s("Longest axons fail first → feet before hands"), F.a, F.e("Numbness, pain, weakness, lost reflexes, ulcers, autonomic symptoms")])} <p>${r(1)}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Merck 2026", "NICE CG173", "This guide"], [
["Nerve conduction studies", "In all patients", "—", "When the cause is unclear, asymmetric, motor or progressive " + LB.loc()],
["First-line pain drug", "Gabapentinoids, TCAs, SNRIs, topical", "Amitriptyline, duloxetine, gabapentin or pregabalin", "Amitriptyline or gabapentin (on NEML) " + r(2) + " " + r(3)],
["Opioids", "—", "Do not start morphine/long-term tramadol in non-specialist care", "Same " + r(2)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Tingling, numbness, burning or electric pain in the toes and feet, later hands; worse at night ${r(1)}.</li>
<li>Loss of ankle reflexes, reduced vibration and pinprick, imbalance in the dark (sensory ataxia) ${r(1)}.</li>
<li>Weakness: foot drop, wasting of small hand muscles; autonomic — postural dizziness, sweating changes, impotence, gastroparesis ${r(1)}.</li>
<li>Red flags: fast progression, weakness more than sensory loss, asymmetry, breathing or swallowing trouble — see ${P("gbs-adult", "GBS")}; back pain with bladder change — think cord compression ${P("cord-compression-adult", "Spinal cord compression")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 56-year-old man from Samtse with diabetes for 12 years and daily ara drinking has burning feet at night. Ankle reflexes absent, monofilament not felt at 4 of 10 sites, HbA1c 9.8%. <b>Diabetic (± alcohol) distal symmetric neuropathy</b>: improve glucose, stop alcohol, check B12 (on metformin), daily foot care, amitriptyline 10 mg at night titrated ${r(1)} ${r(2)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Spinal cord disease (B12, compression, TB spine)", "Brisk reflexes, upgoing plantars, sensory level, bladder " + P("cord-compression-adult", "Cord compression")],
["Radiculopathy (sciatica, cervical)", "Dermatomal, back/neck pain " + P("lbp-adult", "Low back pain")],
["Peripheral arterial disease", "Claudication, absent pulses " + P("pad-adult", "PAD")],
["Myopathy", "Proximal weakness, normal sensation, raised CK"],
["Myasthenia gravis", "Fatigable weakness, ptosis, normal sensation " + P("myasthenia-adult", "Myasthenia")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>Fasting glucose / HbA1c; vitamin B12 and folate; FBC (macrocytosis); kidney and liver tests; TSH ${r(1)}.</li>
<li>HIV and syphilis serology; hepatitis if relevant ${r(1)}.</li>
<li>Serum protein electrophoresis if painful sensory neuropathy not explained by diabetes, or age over 60 ${r(1)}.</li>
<li>ESR, ANA, ANCA, rheumatoid factor for asymmetric neuropathy ${r(1)}.</li>
<li>Skin smear / biopsy if leprosy suspected ${P("leprosy", "Leprosy")}.</li>
<li>Nerve conduction studies/EMG to classify (axonal vs demyelinating), especially if atypical ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "Neuropathy helper", html: `<div class="calc" data-calc="neuroplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Treat the cause ${r(1)}</h3>
<ul>
<li>Diabetes: glucose control, foot protection, yearly monofilament ${P("dm-adult", "Diabetes")}.</li>
<li>Alcohol: stop; ${dr("thiamine")} and nutrition ${P("thiamine-adult", "Thiamine deficiency")}.</li>
<li>B12 deficiency: ${dr("vitamin_b12", "hydroxocobalamin")} IM (specialist supply) — neurological recovery is slow ${P("anaemia-adult", "Anaemia")}.</li>
<li>Isoniazid: ${dr("pyridoxine")} for at-risk people ${P("tb-adult", "TB")}.</li>
<li>Leprosy: MDT, steroids for neuritis ${P("leprosy", "Leprosy")}.</li>
<li>Drugs/toxins: stop the cause where possible.</li>
</ul>
<h3>Neuropathic pain ${r(2)}</h3>
<ul>
<li>Offer ${dr("amitriptyline")} (start 10 mg at night, increase slowly; usual up to 75 mg) or ${dr("gabapentin")} (start 300 mg, increase stepwise to three times daily; reduce in kidney failure) ${LB.exp("TITRATION — BNF-STYLE STANDARD")}. Duloxetine or pregabalin are the other options.</li>
<li>If not effective or not tolerated, switch to another of the four; review early for side effects.</li>
<li>Tramadol only for short acute rescue; capsaicin cream for localised pain.</li>
<li>Trigeminal neuralgia: ${dr("carbamazepine")} first.</li>
<li>Do not start morphine, long-term tramadol, valproate or lamotrigine for neuropathic pain outside specialist care.</li>
</ul>
<h3>Function</h3>
<ul><li>Daily foot inspection, proper footwear, no walking barefoot, test bath water by elbow; physiotherapy, ankle-foot orthosis for foot drop ${LB.exp("STANDARD")}.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("amitriptyline"), "Neuropathic pain, start low at night " + r(2), "25 mg tablet"],
[dr("gabapentin"), "Neuropathic pain; renal dose adjustment " + r(2), "300 mg capsule"],
[dr("carbamazepine"), "Trigeminal neuralgia " + r(2), "200 mg tablet"],
[dr("pyridoxine"), "Prevent isoniazid neuropathy", "25 mg tablet"],
["Duloxetine, pregabalin", "Alternatives " + r(2), "Not on NEML " + r(3)]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Older people:</b> amitriptyline causes falls, confusion, urinary retention — start 10 mg ${LB.exp("STANDARD")}.</li><li><b>Kidney failure:</b> reduce gabapentin dose ${LB.exp("STANDARD")}.</li><li><b>Pregnancy:</b> review anti-epileptic drugs (carbamazepine) with a specialist ${r(2)}.</li><li><b>HIV:</b> neuropathy from HIV and older ART drugs ${r(1)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Numb hand patch with a thickened ulnar nerve", "Leprosy until proven otherwise " + P("leprosy", "Leprosy")],
["Weakness rising over days", "GBS: vital capacity, refer " + P("gbs-adult", "GBS")],
["Burning feet on isoniazid", "Pyridoxine, check other causes " + P("tb-adult", "TB")],
["Painless foot ulcer", "Neuropathic foot — offload, treat infection " + P("diabeticfoot-adult", "Diabetic foot")]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Foot ulcers, Charcot joint, amputation, falls, burns, chronic pain, depression, autonomic dysfunction ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Pain and function review after each dose change ${r(2)}.</li><li>Feet checked every visit in diabetes; refer to foot clinic if high-risk ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. Glove-and-stocking loss of sensation is the typical sign.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Numb / burning feet", [F.s("History, drugs, alcohol, diabetes; examine pattern"), F.a, F.d("Acute, motor, asymmetric, or cord signs?"), F.a, F.b([["Yes", F.e("Urgent: GBS, cord compression, leprosy, vasculitis — refer")], ["No (distal symmetric)", F.s("Glucose, B12, TFT, kidney, HIV; treat cause; foot care; pain drug")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Blaming diabetes without checking B12", "Treatable cause missed (metformin lowers B12)", "Check B12 " + r(1)],
["Missing leprosy", "Disability and transmission", "Feel nerves, test skin patches"],
["High starting amitriptyline dose", "Sedation, falls", "Start 10 mg at night"],
["Opioids for chronic neuropathic pain", "Dependence, little benefit", "Not in non-specialist care " + r(2)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "First-line drugs for neuropathic pain (NICE CG173)?", "Amitriptyline, duloxetine, gabapentin or pregabalin — choose one, switch if it fails.")}
${qa("Intern/MO", "First drug for trigeminal neuralgia?", "Carbamazepine.")}
${qa("Registrar", "Asymmetric neuropathy — which causes?", "Leprosy, vasculitis, diabetes (mononeuritis multiplex), hypercoagulable states.")}
${qa("Specialist", "Baseline tests for distal symmetric polyneuropathy?", "Glucose/HbA1c, B12 (± MMA), folate, SPEP with immunofixation, FBC, metabolic panel, TSH, HIV/syphilis.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Merck Manual Professional Edition. Polyneuropathy (full review May 2026, updated Nov 2026).</li>
<li id="ref-2">National Institute for Health and Care Excellence. Neuropathic pain in adults: pharmacological management in non-specialist settings (CG173; updated Sept 2020). <a href="https://www.nice.org.uk/guidance/cg173" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Merck polyneuropathy", "<span class='pass'>Read</span>", "28 Nov 2026"], ["NICE CG173", "<span class='pass'>Read</span>", "Recommendations 1.1.1–1.1.14"], ["NEML", "<span class='pass'>Checked</span>", "No duloxetine/pregabalin"], ["Titration doses", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
