/* Ebola and viral haemorrhagic fever — preparedness and first response, all ages. Batch E-13, 27 Nov 2026.
   Sources read: WHO Therapeutics for Ebola virus disease — living guideline (Aug 2022; PDF via IRIS: strong recommendation for mAb114 or REGN-EB3
   for RT-PCR-confirmed EVD and for neonates ≤ 7 days of mothers with confirmed EVD; conditional against remdesivir and ZMapp; mAb114 50 mg/kg single
   IV infusion over 60 min; REGN-EB3 150 mg/kg single IV infusion over 2–4 h); Merck Manual Professional 'Marburg and Ebola virus infections' (2026:
   species, transmission, incubation 2–21 days, clinical course, testing via public health, supportive care, vaccines rVSV-ZEBOV and
   Ad26/MVA, isolation, semen persistence); Bhutan STG 2024 §8.5.3 Ebola (filtered); BCR topic 'ebola'. Not read: WHO IPC for filovirus 2023,
   WHO optimized supportive care SOP, CDC VHF clinician guide — marked. Bhutan has had no Ebola cases. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "ebola-vhf",
title: "Ebola and viral haemorrhagic fever — preparedness and first response",
subtitle: "A febrile traveller or contact from an outbreak area within 21 days: isolate first, protect staff, notify RCDC immediately, test for malaria too, and give intensive supportive care — confirmed Zaire Ebola is treated with a single dose of a monoclonal antibody",
age: "All ages", specs: ["id", "emerg", "ph", "medicine", "paeds"],
keywords: ["Ebola", "Ebola virus disease", "EVD", "Marburg", "viral haemorrhagic fever", "VHF", "filovirus", "Sudan virus", "Zaire ebolavirus", "returning traveller fever", "21 days", "isolation", "PPE", "contact tracing", "mAb114", "ansuvimab", "REGN-EB3", "Inmazeb", "rVSV-ZEBOV", "Ervebo", "Lassa", "Crimean-Congo", "notifiable"],
related: ["fever-approach", "afi-adult", "malaria-adult", "malaria-child", "dengue-adult", "sepsis-adult", "shock-adult", "covid-19"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Ebola and Marburg are filoviruses causing fever, vomiting, diarrhoea, bleeding and shock, with case fatality of 25–90% ${r(2)}. They spread by direct contact with body fluids of a sick person or a body — not before symptoms start ${r(2)}. Bhutan has had no cases, so the job in Bhutan is <b>recognition, isolation and notification</b> of an imported case ${r(3)} ${LB.loc()}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever (or unexplained bleeding) <b>and</b> travel to an outbreak area, or contact with a case, a body, or bats/bush meat, within 21 days ${r(2)} ${r(4)}.</p></div>
<div><h4>First minutes</h4><p>Separate the patient in a single room, minimum staff, full PPE, no unnecessary procedures; <b>notify RCDC</b> at once ${r(3)} ${r(2)}.</p></div>
<div><h4>Test</h4><p>RT-PCR/ELISA arranged with public health; always test for <b>malaria</b> too ${r(2)} ${r(4)}.</p></div>
<div><h4>Treat</h4><p>Intensive supportive care; confirmed Zaire Ebola: mAb114 50 mg/kg or REGN-EB3 150 mg/kg, single IV dose ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024: universal precautions, isolation, blood transfusion if indicated and intensive supportive care ${r(3)}. Ebola-specific monoclonal antibodies are not available in Bhutan — they are supplied through WHO outbreak response ${r(4)} ${LB.loc()}. Plan ahead: each hospital should know its isolation room, PPE stock, the person trained to put on and take off PPE, and the RCDC notification route ${LB.int()}.</p>`)}
` },
{ id: "overview", title: "The diseases in brief", html: `${tbl(["Feature", "Detail"], [
["Viruses", "Ebola species: Zaire, Sudan, Tai Forest, Bundibugyo (Reston does not cause human disease); Marburg — clinically similar " + r(2)],
["Where", "Mostly sub-Saharan Central and West Africa; spread elsewhere by travellers; outbreaks in DRC 2017–2022, Uganda (Sudan virus) 2022 and 2025 " + r(2)],
["Source", "Non-human primates, bats (Marburg — caves, mines), bush meat " + r(2)],
["Spread", "Contact with blood, vomit, stool, urine, saliva, sweat, breast milk, semen of a symptomatic person or a body; funerals; not infectious before symptoms; aerosol rare " + r(2)],
["Incubation", "2–21 days " + r(2)],
["Persistence", "Virus can persist in eye, brain, testes; Ebola RNA in semen for a year or more; sexual transmission described > 500 days " + r(2)]
])}` },
{ id: "patho", title: "Course", html: `${F.chart("Ebola disease", [F.s("Fever, myalgia, headache, sore throat"), F.a, F.s("Vomiting, diarrhoea — severe fluid and electrolyte loss; capillary leak"), F.a, F.s("Bleeding (petechiae, puncture sites, mucosa); rash on trunk ~day 5"), F.a, F.d("Second week"), F.a, F.b([["Recovery", F.ok("Long convalescence; uveitis, joint pain")], ["Deterioration", F.e("Shock, multi-organ failure, death")]])])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "WHO 2022", "This guide"], [
["Specific treatment", "Supportive care only", "Strong recommendation: mAb114 or REGN-EB3 for confirmed EVD (Zaire) and for neonates ≤ 7 days born to mothers with confirmed EVD; conditional against remdesivir and ZMapp", "Supportive care in Bhutan; antibodies via WHO/outbreak teams " + r(1) + r(3)],
["Sudan virus / Marburg", "—", "Antibodies are for Zaire ebolavirus; no proven specific therapy for Marburg", "Supportive care " + r(1) + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `${tbl(["Stage", "Features"], [
["Early", "Fever, myalgia, headache, abdominal pain, nausea, cough, chest pain, sore throat, photophobia, red eyes, jaundice, nodes " + r(2)],
["Gastrointestinal", "Vomiting (may be bloody), diarrhoea — severe hypovolaemia, low Na, K, Ca, arrhythmias " + r(2) + r(3)],
["Haemorrhagic", "Petechiae, bruising, bleeding at puncture sites and mucosa, haemorrhagic rash " + r(2) + r(3)],
["Neurological", "Delirium, stupor, coma " + r(2)],
["Survivors", "Hepatitis, myelitis, orchitis; uveitis; cataract in children; cognitive and joint problems; relapse " + r(2)]
])}
<div class="calc" data-calc="vhfscreen"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Malaria", "Most common cause of fever in a traveller from Africa — always test " + P("malaria-adult", "malaria") + " " + r(4)],
["Dengue, typhoid, leptospirosis, rickettsia", P("afi-adult", "acute febrile illness") + " " + P("leptospirosis", "leptospirosis")],
["Bacterial sepsis, meningococcal disease", P("sepsis-adult", "sepsis")],
["Other VHFs (Lassa, Crimean-Congo, Marburg)", "Exposure history " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `<ul><li>Discuss with public health before sampling — they arrange safe transport and testing ${r(2)}.</li><li>RT-PCR and ELISA; electron microscopy is the gold standard in reference laboratories ${r(2)}.</li><li>CBC, chemistry, liver, coagulation tests, urinalysis — with strict biosafety; malaria test ${r(2)} ${r(4)}.</li></ul>` },
{ id: "staging", title: "Exposure risk", html: `${tbl(["Exposure in last 21 days", "Risk"], [
["Contact with blood/body fluids of a symptomatic case or body, needle-stick, funeral washing", "High " + r(2) + " " + LB.exp("RISK TIERS SIMPLIFIED")],
["Same household, health worker caring for case with PPE", "Some risk — monitor " + LB.exp()],
["Travel to outbreak country without contact", "Low — monitor if fever " + LB.exp()]
])}` },
{ id: "manage", title: "Management", html: `
<h3>1. Isolate and notify</h3>
<ul><li>Single room with own toilet or commode, door closed, minimal staff, log of everyone entering ${r(2)} ${LB.exp()}.</li><li>Full PPE with trained observer for donning and doffing; no invasive procedures unless essential ${r(2)}.</li><li>Notify RCDC immediately; begin contact listing (follow contacts 21 days) ${r(3)} ${r(4)}.</li></ul>
<h3>2. Supportive care</h3>
<ul><li>Oral or IV fluids and electrolytes; correct low Na, K, Ca; treat shock ${r(2)} ${r(3)}.</li><li>Blood products and coagulation factor replacement as needed ${r(2)} ${r(3)}.</li><li>Analgesia, antipyretic, antiemetic; treat malaria if positive ${r(2)} ${r(4)}.</li></ul>
<h3>3. Specific treatment (confirmed Zaire Ebola, via WHO)</h3>
${tbl(["Drug", "Dose"], [
["mAb114 (ansuvimab)", "50 mg/kg (1 mL/kg) single IV infusion over 60 minutes — adults and children " + r(1)],
["REGN-EB3 (atoltivimab/maftivimab/odesivimab)", "150 mg/kg (3 mL/kg) single IV infusion over 2–4 hours " + r(1)]
])}
<p>Give as soon as possible after confirmation; also for neonates up to 7 days old born to mothers with confirmed EVD ${r(1)}. Not remdesivir, not ZMapp ${r(1)}.</p>
<h3>4. Prevention</h3>
<p>Vaccines against Zaire Ebola: rVSV-ZEBOV (18 years and older) and Ad26.ZEBOV + MVA-BN-Filo (1 year and older); no cross-protection against Sudan virus ${r(2)}. Survivors and partners: abstain or use condoms until semen tests are negative per WHO ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul><li>mAb114 (ansuvimab) and REGN-EB3 — WHO-supplied only ${r(1)}.</li><li>${D("paracetamol", "Paracetamol")} — not NSAIDs or aspirin in bleeding illness ${LB.exp()}.</li><li>${D("sodium-chloride", "IV fluids")} ${r(2)}.</li></ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Pregnancy", "Higher mortality; treat with antibodies (WHO included pregnancy) " + r(1) + " " + LB.exp()],
["Neonates of infected mothers", "mAb114 or REGN-EB3 within 7 days of birth even if status unconfirmed " + r(1)],
["Health workers", "Highest occupational risk; PPE training " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Worker returned from Uganda 9 days ago with fever and diarrhoea", "Isolate, PPE, notify RCDC, malaria RDT, discuss Ebola testing with public health " + r(2) + r(4)],
["Fever 25 days after leaving an outbreak area", "Beyond 21 days — Ebola unlikely; usual fever work-up " + r(2)],
["Nurse splashed with vomit of a confirmed case", "High-risk exposure: report, monitor 21 days; vaccine if available " + LB.exp()]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Hypovolaemic shock, electrolyte disturbance, arrhythmias ${r(2)}.</li><li>Multi-organ failure, bleeding, death ${r(2)} ${r(3)}.</li><li>Post-Ebola syndrome: uveitis, cataract, joint pain, cognitive impairment, relapse ${r(2)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Contacts monitored for 21 days ${r(4)}; survivors need eye review and advice on sexual transmission ${r(2)} ${r(4)}.</p>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Fever + outbreak exposure ≤ 21 days", [F.s("Isolate; PPE; minimal staff"), F.a, F.s("Notify RCDC; malaria test"), F.a, F.s("Public health arranges Ebola/VHF testing"), F.a, F.d("Confirmed?"), F.a, F.b([["Yes", F.e("Supportive care + WHO antibody (Zaire); contacts 21 days")], ["No", F.ok("Treat other cause; stand down")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Examining before isolating", "Staff infection", "Isolate and protect first " + r(2)],
["Forgetting malaria", "Commoner and treatable", "Test for malaria too " + r(4)],
["Unsafe removal of PPE", "Self-contamination", "Trained observer " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "How long are Ebola contacts followed?", "21 days.")}${qa("Specialist", "WHO-recommended Ebola treatments and doses?", "mAb114 50 mg/kg single IV over 60 min, or REGN-EB3 150 mg/kg single IV over 2–4 h, for confirmed Zaire EVD.")}` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">World Health Organization. Therapeutics for Ebola virus disease (Clinical management of EVD: living guideline). Geneva: WHO; 19 Aug 2022.</li>
<li id="ref-2">Merck Manual Professional Edition. Marburg and Ebola virus infections; accessed Nov 2026.</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.5.3 Ebola.</li>
<li id="ref-4">Bhutan Clinical Reference app, topic page 'Ebola disease' (Nov 2026).</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["WHO 2022 therapeutics guideline", "<span class='pass'>Checked</span>", "Recommendations and doses read"],
["Merck Ebola/Marburg", "<span class='pass'>Checked</span>", "Read"],
["Bhutan STG §8.5.3", "<span class='pass'>Checked</span>", "Partly scrambled"],
["WHO IPC filovirus guidance, CDC VHF guide", "<span class='unv'>Not read</span>", "Isolation details marked"],
["Calculator", "<span class='pass'>Checked</span>", "Screening + antibody dose"],
["Images", "<span class='pass'>None</span>", "—"]
], "qc")}` }
]
});
})();
