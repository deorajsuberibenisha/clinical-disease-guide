/* Poliomyelitis and acute flaccid paralysis (AFP) — all ages. Batch E-6, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §8.5.10 Poliomyelitis (isolation, avoid injections, physiotherapy, stool RT-PCR, immunisation);
   Bhutan VPD Integrated Surveillance Guideline (2018) chapter 4 AFP surveillance (case definition, immediate NEWARS reporting, zero reporting, active
   search, two stools ≥ 24 h apart within 14 days, reverse cold chain, NIH Bangkok GPLN lab, hot cases, contact sampling, 60-day follow-up, ERC
   classification, case management, IHR notification); Bhutan EPI Manual for Health Staff (polio section); WHO Immunization Data portal Bhutan schedule
   (bOPV birth, 6, 10, 14 weeks; IPV 14 and 32 weeks); WHO poliomyelitis fact sheet (2 April 2025). Differential diagnosis of AFP is expert practice. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "polio-afp",
title: "Polio and acute flaccid paralysis (AFP)",
subtitle: "Any child under 15 with sudden floppy weakness is an AFP case until proved otherwise: report it the same day, collect two stools within 14 days, and examine again at 60 days — this is how Bhutan stays polio-free",
age: "All ages", specs: ["paeds", "id", "neuro", "ph"],
keywords: ["polio", "poliomyelitis", "acute flaccid paralysis", "AFP surveillance", "AFP case definition", "stool specimens polio", "60-day follow-up", "hot case", "vaccine-derived poliovirus", "VDPV", "Guillain-Barré syndrome", "transverse myelitis", "bOPV", "IPV", "NEWARS", "polio eradication"],
related: ["meningitis-child", "febsz-child", "trauma-child", "snakebite-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Bhutan has had no polio since 1986 and was certified polio-free in 2014. It stays that way only because every floppy child is reported and tested. Most AFP cases turn out to be Guillain-Barré syndrome or something else — and that is exactly the point: the system works only if doctors report even when they are sure it is not polio.</p>
<div class="glance">
<div><h4>Case definition</h4><p>Any child <b>under 15</b> with acute flaccid paralysis (including GBS, transverse myelitis, flaccid hemiplegia, traumatic neuritis), or anyone of any age with paralytic illness if polio is suspected ${r(1)}.</p></div>
<div><h4>Report</h4><p>Immediately, through NEWARS (SMS or web); weekly zero reports when there are no cases ${r(1)}.</p></div>
<div><h4>Two stools</h4><p>At least 24 hours apart, <b>within 14 days of paralysis onset</b> (up to 60 days if late), 8–10 g each, cold chain to EPI Thimphu ${r(1)}.</p></div>
<div><h4>Follow up</h4><p>Examine at 60 days for residual weakness ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The last clinically compatible polio case was in 1986; WHO certified the South-East Asia Region, including Bhutan, polio-free in 2014 ${r(2)}. AFP specimens are shipped through EPI (MSPD) to the WHO-accredited Global Polio Laboratory Network laboratory (NIH, Bangkok) ${r(1)}. Bhutan's schedule gives bOPV at birth, 6, 10 and 14 weeks and IPV at 14 and 32 weeks ${r(4)}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Cause", "Polioviruses 1, 2 and 3 (enteroviruses) " + r(3)],
["Spread", "Faecal–oral, less often droplets or contaminated water and food " + r(3, 5)],
["Incubation", "3–21 days " + r(3)],
["Who", "Mainly children under 5, but anyone unvaccinated " + r(5)],
["How often it paralyses", "1 in 200 infections causes irreversible paralysis (usually the legs); 5–10% of those die when breathing muscles fail " + r(5)],
["Global status", "Wild poliovirus cases have fallen by over 99% since 1988; endemic transmission continues only in Afghanistan and Pakistan " + r(5)],
["Vaccine-derived virus", "Rare outbreaks of VDPV where coverage is low; VDPV2 anywhere must be reported to WHO under IHR " + r(1)],
["Cure", "None — it can only be prevented " + r(5)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("From gut to anterior horn", [F.s("Virus multiplies in the throat and gut (most infections silent)"), F.a, F.s("Viraemia → minor illness: fever, sore throat, fatigue, headache"), F.a, F.s("In a few: invasion of the CNS → anterior horn cells destroyed"), F.a, F.e("Asymmetric flaccid paralysis, no sensory loss; bulbar or respiratory paralysis in severe cases")])}
<p>Injections into a muscle during the acute illness can provoke paralysis in that limb (provocation paralysis) — avoid IM injections ${r(1, 3)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG / surveillance guideline", "WHO / GPEI", "This guide"], [
["Who to report", "Every child under 15 with AFP, any age if polio suspected", "Same standard case definition (AFP surveillance)", "Report every case, whatever the clinical diagnosis " + r(1)],
["Stools", "2 specimens ≥ 24 h apart within 14 days; up to 60 days", "Same", r(1)],
["Vaccine schedule", "bOPV birth, 6, 10, 14 weeks; IPV 14 and 32 weeks", "bOPV zero dose + 3 bOPV + 2 IPV (first IPV from 14 weeks) in high-risk settings", "Bhutan schedule " + r(4)]
])}
<p>There is no real conflict: the national guideline follows WHO's AFP surveillance standards.</p>` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Fever, sore throat, fatigue, headache; vomiting and neck stiffness in severe illness ${r(3)}.</li>
<li>Acute flaccid paralysis of one or more limbs, typically asymmetric and proximal; dysphagia, dysarthria; respiratory failure in bulbar or high spinal disease ${r(3)}.</li>
<li><b>Sensation is normal</b>; reflexes reduced or absent; meningeal signs may be present ${r(3)}.</li>
<li>Late: muscle wasting ${r(3)}.</li>
</ul>
<h3>"Hot case"</h3>
<p>Age under 5 <b>plus</b> fever at the onset of paralysis <b>plus</b> asymmetric proximal or patchy paralysis <b>plus</b> incomplete polio vaccination — notify the national polio surveillance unit immediately ${r(1)}.</p>
<h3>The typical patient</h3>
<p>A 4-year-old girl in Gelephu had fever for two days and now cannot stand on her right leg. Sensation is normal and the right knee jerk is absent. She is fully vaccinated. The paediatrician thinks of GBS, but she is under 15 with acute flaccid paralysis: report through NEWARS today, fill the case investigation form, collect stool 1 now and stool 2 tomorrow, keep them at 4–8 °C and send to EPI within 72 hours, avoid IM injections, and book the 60-day examination ${r(1)}.</p>` },
{ id: "ddx", title: "Differential diagnosis of AFP", html: `${tbl(["Condition", "Clue"], [
["Guillain-Barré syndrome", "Symmetric, ascending, sensory symptoms, no fever at onset, high CSF protein " + LB.exp()],
["Transverse myelitis", "Sensory level, bladder involvement " + LB.exp()],
["Traumatic neuritis", "Paralysis after an injection into the buttock " + LB.exp()],
["Other enteroviruses (EV-A71, EV-D68)", "Clinically similar; virology distinguishes " + LB.exp()],
["Hypokalaemic paralysis, botulism, snakebite neurotoxicity", "Potassium; descending paralysis with ptosis; bite history " + LB.exp()],
["Japanese encephalitis with AFP", "Encephalopathy plus flaccid weakness " + LB.exp()]
])}
<p>All of these are still reported as AFP in children under 15 — the expert review committee classifies them ${r(1)}.</p>` },
{ id: "invest", title: "Investigations", html: `<ul>
<li><b>Two stool specimens</b> at least 24 hours apart, within 14 days of onset (still collect up to 60 days); 8–10 g each; rectal tube only in critically ill children who pass no stool ${r(1)}.</li>
<li>Store at 4–8 °C; arrive at EPI within 72 hours, otherwise freeze at −20 °C and ship frozen (reverse cold chain); label with the EPID number ${r(1)}.</li>
<li>Contact stools (children under 15, preferably under 5, in contact within the week before to two weeks after onset) for inadequate samples, hot cases and hard-to-reach areas ${r(1)}.</li>
<li>Clinical work-up as needed: CSF, MRI brain and spine, nerve conduction studies; stool RT-PCR ${r(3)}.</li>
</ul>` },
{ id: "staging", title: "Classification", html: `
${tbl(["Step", "What happens"], [
["Reporting", "Immediately on NEWARS; unique EPID number (e.g. BHU/AFP/GAS/2018/01) " + r(1)],
["Laboratory", "Poliovirus isolation at the GPLN laboratory " + r(1)],
["60-day follow-up", "No residual weakness → non-polio AFP " + r(1)],
["Residual paralysis, death or lost to follow-up", "Expert Review Committee: non-polio AFP or polio-compatible " + r(1)],
["Poliovirus isolated", "Wild, VDPV or Sabin-like 2: report to WHO under IHR; outbreak response " + r(1)]
])}` },
{ id: "manage", title: "Treatment", html: `
<ul>
<li>No antiviral cure ${r(1, 5)}.</li>
<li>Isolation (stool precautions, hand hygiene) ${r(3)}.</li>
<li><b>Avoid intramuscular injections</b> and massage in the acute phase ${r(1, 3)}.</li>
<li>Isolated limb paralysis: can be managed at home — complete rest, correct positioning, passive range-of-movement exercises ${r(1)}.</li>
<li>Bulbar or respiratory involvement: admit; airway protection and ventilatory support ${r(1)}.</li>
<li>Physiotherapy and rehabilitation; orthoses for residual weakness ${r(3)}.</li>
<li>Pain relief with ${D("paracetamol", "paracetamol")} ${LB.exp()}.</li>
</ul>
<h3>Public health response if poliovirus is found</h3>
<p>Rapid investigation, strengthened AFP surveillance in the area, and immediate immunisation activities, following the GPEI outbreak SOPs ${r(1)}.</p>` },
{ id: "drugs", title: "Vaccines and medicines", html: `<ul>
<li>${D("opv-bivalent", "Bivalent oral polio vaccine (bOPV)")} — birth, 6, 10 and 14 weeks ${r(4)}.</li>
<li>${D("ipv-vaccine", "Inactivated polio vaccine (IPV)")} — 14 and 32 weeks ${r(4)}.</li>
<li>Travellers to polio-endemic countries: one dose of OPV a month before travel (EPI manual) ${r(2)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Adults with paralytic illness", "Report if polio is suspected " + r(1)],
["Immunodeficient children", "May shed vaccine-derived virus for months — contact sampling and specialist advice " + r(1)],
["Cross-border cases", "Notify the district of residence; WHO offices for cases from other countries " + r(1)],
["Polio survivors", "Post-polio syndrome later in life — rehabilitation " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["6-year-old with ascending symmetric weakness, likely GBS", "Still AFP: report, two stools, 60-day follow-up; treat GBS " + r(1)],
["Child seen on day 20 after onset", "Collect stools anyway (up to 60 days) " + r(1)],
["3-year-old, fever, right-leg proximal paralysis, missed vaccines", "Hot case: immediate notification to the national unit " + r(1)],
["Paralysis in the buttock-injected leg after IM injection", "Traumatic neuritis is in the case definition — report " + r(1)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Respiratory failure and death (5–10% of paralytic cases) ${r(5)}.</li>
<li>Permanent paralysis, limb shortening and deformity ${r(5)} ${LB.exp()}.</li>
<li>Aspiration with bulbar palsy ${LB.exp()}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and prevention", html: `<ul>
<li>60-day examination for every AFP case ${r(1)}.</li>
<li>Complete every child's polio vaccinations; catch up missed doses ${r(2, 4)}.</li>
<li>Hand hygiene, safe water and sanitation ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Residual paralysis after polio", src: "images/polio-leg-atrophy.jpg", mod: "Clinical photograph", ctx: "Paralytic poliomyelitis (late)", loc: "Right leg and foot", find: "Atrophy and paralysis of the right leg and foot", signs: "Wasting, deformity", interp: "The lifelong disability that vaccination and AFP surveillance prevent", by: "CDC / NIP", page: "https://commons.wikimedia.org/wiki/File:Polio_lores134.jpg", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Child under 15 with acute flaccid weakness", [F.s("Report today on NEWARS; case investigation form; EPID number"), F.a, F.s("Stool 1 now, stool 2 ≥ 24 h later (within 14 days; up to 60)"), F.a, F.d("Hot case? (< 5 y, fever at onset, asymmetric proximal, under-vaccinated)"), F.a, F.b([["Yes", F.e("Notify national polio unit immediately; contact stools")], ["No", F.s("Routine AFP pathway")]]), F.a, F.s("Supportive care; no IM injections; physiotherapy"), F.a, F.ok("60-day examination → classification")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Not reporting because it is 'obviously GBS'", "Surveillance loses sensitivity", "Report every AFP under 15"],
["One stool sample", "Shedding is intermittent", "Two, ≥ 24 h apart"],
["Samples left at room temperature", "Virus lost", "4–8 °C; reverse cold chain"],
["IM injections in the acute phase", "Provocation paralysis", "Oral or IV routes"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What is Bhutan's AFP case definition?", "Any child under 15 with acute flaccid paralysis (including GBS, transverse myelitis, flaccid hemiplegia, traumatic neuritis), or any person with paralytic illness if polio is suspected.")}
${qa("Intern/MO", "What makes stool specimens 'adequate'?", "Two specimens ≥ 24 h apart within 14 days of onset, 8–10 g each, arriving at the lab in good condition with cold chain kept.")}
${qa("Specialist", "What is a 'hot case'?", "Under 5 years, fever at onset, asymmetric proximal or patchy paralysis, and incomplete polio vaccination.")}
${qa("Specialist", "How is an AFP case classified at 60 days?", "No residual weakness → non-polio AFP; residual weakness, death or lost to follow-up → Expert Review Committee.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Vaccine Preventable Disease Integrated Surveillance Guideline — chapter 4, Acute flaccid paralysis surveillance.</li>
<li id="ref-2">Ministry of Health, Bhutan. Expanded Programme on Immunization (EPI) Manual for Health Staff, 6th edition, 2022 — polio section and programme history.</li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.5.10 Poliomyelitis.</li>
<li id="ref-4">World Health Organization. Immunization Data portal — vaccination schedule for Bhutan (country-reported, read 26 November 2026). <a href="https://immunizationdata.who.int/" target="_blank" rel="noopener">immunizationdata.who.int</a></li>
<li id="ref-5">World Health Organization. Poliomyelitis — fact sheet, 2 April 2025. <a href="https://www.who.int/news-room/fact-sheets/detail/poliomyelitis" target="_blank" rel="noopener">who.int</a></li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan AFP surveillance chapter", "<span class='pass'>Checked</span>", "Read in full"],
["STG §8.5.10", "<span class='pass'>Checked</span>", "Read from the STG text"],
["Schedule", "<span class='pass'>Checked</span>", "WHO portal, Bhutan country report"],
["Global figures", "<span class='pass'>Checked</span>", "WHO fact sheet 2025"],
["AFP differential diagnosis clues", "<span class='unv'>Expert practice</span>", "Marked"],
["Image", "<span class='pass'>Checked</span>", "CDC, public domain"]
], "qc")}` }
]
});
})();
