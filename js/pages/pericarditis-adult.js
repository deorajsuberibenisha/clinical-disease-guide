/* Pericarditis, pericardial effusion and tamponade — adults (TB pericarditis emphasised). NEW disease (batch N-2, 27 Nov 2026).
   Sources read directly: Merck Manual Professional 'Pericarditis' (last updated Oct 2026; read in browser — causes table, TB the commonest cause in
   endemic regions; ACC 2025 criteria: typical pain + ≥ 2 findings (rub, diffuse ST elevation/PR depression, raised CRP/ESR, new or worse effusion,
   MRI oedema/LGE) = definite, 1 = possible; 4 ECG stages; tamponade — low output, raised JVP, pulsus paradoxus > 10 mmHg, muffled sounds;
   treatment: aspirin 325–650 mg 4–6-hourly or ibuprofen 600–800 mg 6–8-hourly + colchicine 0.5–0.6 mg once or twice daily, PPI; colchicine 3
   months cuts recurrence; restrict exercise; admit high-risk (fever, subacute onset, immunosuppression, trauma, oral anticoagulant, NSAID
   failure, myopericarditis, moderate/large effusion); stop causative drugs; pericardiocentesis for tamponade, echo-guided; steroids low dose
   (prednisone 0.2–0.5 mg/kg/day) only after TB and pyogenic causes excluded, slow taper; IL-1 inhibitors second line for inflammatory phenotype;
   anticoagulants usually contraindicated; TB pericarditis without HIV — glucocorticoids prevent constriction; pericardial resection for
   constriction); ICAP trial (Imazio, NEJM 2013 abstract read: colchicine 0.5 mg BD > 70 kg or once daily ≤ 70 kg for 3 months halved recurrence,
   NNT 4); IMPI trial (Mayosi, NEJM 2014 abstract read: prednisolone 6 weeks did not change death/tamponade/constriction composite but reduced
   constriction 4.4% vs 7.8%; two-thirds HIV-positive; HIV-associated cancers rose); Bhutan NTP guideline (via _work/research/tb-brief.md:
   Xpert Ultra on pericardial fluid; 2HRZE/4HR; child steroids for pericardial TB prednisolone 2–4 mg/kg/day, max 60 mg, 4 weeks then taper;
   no adult dose given); ACC 2025 concise clinical guidance (Wang 2025, DOI verified; cited via Merck). NEML 2025: aspirin 75 and 300 mg, ibuprofen
   400 mg, prednisolone 5/20 mg, omeprazole; COLCHICINE NOT FOUND. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "pericarditis-adult",
title: "Pericarditis & Pericardial Effusion",
subtitle: "Sharp chest pain that is worse lying flat and better sitting forward, a rub and widespread ST elevation: treat with NSAID plus colchicine, look hard for tuberculosis in Bhutan, and drain the fluid at once if tamponade develops",
age: "Adults (children noted)", specs: ["cardio", "medicine", "emerg", "id"],
keywords: ["pericarditis", "acute pericarditis", "pericardial effusion", "cardiac tamponade", "tuberculous pericarditis", "TB pericarditis", "constrictive pericarditis", "pericardial rub", "saddle ST elevation", "PR depression", "pulsus paradoxus", "Beck's triad", "pericardiocentesis", "colchicine", "myopericarditis", "uraemic pericarditis", "Dressler syndrome"],
related: ["acs-adult", "tb-adult", "tb-child", "hiv-adult", "ckd-adult", "rhd-child", "shock-adult", "endocarditis-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Pericarditis is inflammation of the sac around the heart. In Europe and North America most cases are viral or idiopathic; <b>in TB-endemic countries like Bhutan, tuberculosis is a leading cause</b>, especially of large effusions ${r(1)}. The danger is tamponade — fluid squeezing the heart.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Sharp pleuritic chest pain, better sitting forward; rub; widespread concave ST elevation with PR depression ${r(1)}.</p></div>
<div><h4>Diagnose</h4><p>Typical pain + 2 of: rub, ECG changes, raised CRP/ESR, new effusion on echo = definite ${r(1)}.</p></div>
<div><h4>Treat</h4><p>${dr("ibuprofen")} or ${dr("aspirin")} + ${dr("colchicine")} for 3 months; PPI; rest from strenuous exercise ${r(1)} ${r(2)}.</p></div>
<div><h4>Danger</h4><p>Low BP, raised JVP, pulsus paradoxus → <b>tamponade: pericardiocentesis now</b> ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>There is no STG section on pericarditis. Large effusions in Bhutan should be treated as possible <b>TB pericarditis</b>: send pericardial fluid for Xpert Ultra and treat with 2HRZE/4HR (national TB guideline) ${r(4)}. Echo is at JDWNRH and the regional referral hospitals ${LB.loc()}. <b>Colchicine was not found in the NEML 2025 text</b> — aspirin, ibuprofen, prednisolone and omeprazole are listed ${r(5)}. See ${P("tb-adult", "TB — adults")}.</p>`)}
` },

{ id: "overview", title: "Causes", html: `
${tbl(["Group", "Examples"], [
["Infection", "Tuberculosis (commonest in endemic regions), viruses (Coxsackie, echovirus, influenza, HIV, SARS-CoV-2), purulent bacterial (after pneumonia, sepsis, endocarditis, trauma), fungal, amoebic, hydatid " + r(1)],
["Heart injury", "Acute MI (early) and post-MI (Dressler) syndrome, after cardiac surgery (5–30%), trauma, procedures " + r(1)],
["Systemic disease", "SLE, rheumatoid arthritis, systemic sclerosis, rheumatic fever, sarcoidosis, IBD " + r(1)],
["Other", "Uraemia, hypothyroidism, cancer (breast, lung, lymphoma, leukaemia), radiation, drugs (hydralazine, isoniazid, phenytoin, procainamide, checkpoint inhibitors) " + r(1)],
["Idiopathic", "No cause found — mostly presumed viral " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Pericardial disease", [F.s("Inflammation of the pericardium (fibrinous)"), F.a, F.d("Fluid?"), F.a, F.b([["Small", F.ok("Pain, rub, ECG changes")], ["Large or fast", F.e("Tamponade: heart cannot fill → low output, shock")]]), F.a, F.e("Healing with scarring (TB) → constrictive pericarditis")])}
<p>Speed matters more than volume: a small effusion that forms quickly (trauma, rupture) can cause tamponade, while a large TB effusion may build slowly ${LB.exp("STANDARD TEACHING")}.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "International (Merck 2026 / ACC 2025)", "Local reality", "This guide"], [
["Colchicine", "First-line with NSAID for 3 months (ICAP)", "Not on NEML 2025", "Use if supply allows; NSAID course with CRP-guided taper otherwise " + r(1) + r(2) + r(5)],
["Steroids, viral/idiopathic", "Only if NSAIDs contraindicated; low dose after excluding TB and pyogenic causes", "Often given early", "Avoid early steroids — more recurrences " + r(1)],
["Steroids, TB pericarditis", "Adjunct to prevent constriction (HIV-negative)", "IMPI: no effect on death; less constriction; more HIV-related cancers", "Consider prednisolone in HIV-negative patients (specialist) " + r(1) + r(3)],
["Second-line", "IL-1 inhibitors (anakinra, rilonacept)", "Not available", "Refer recurrent disease " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li><b>Chest pain</b>: sharp, central, worse on lying flat, breathing or coughing, better sitting forward; may spread to the trapezius ridge.</li>
<li><b>Pericardial rub</b>: scratching sound, best with the patient leaning forward, comes and goes ${r(1)}.</li>
<li>Fever, malaise; TB: weeks of fever, night sweats, weight loss, breathlessness, swollen legs and abdomen.</li>
<li><b>Tamponade</b>: breathlessness, fast pulse, low BP, raised JVP, muffled heart sounds, <b>pulsus paradoxus</b> (systolic fall over 10 mmHg on inspiration) ${r(1)}.</li>
<li><b>Constriction</b> (late, often TB): raised JVP rising on inspiration (Kussmaul), ascites, leg oedema, pericardial knock.</li>
</ul>
<h3>The typical patient</h3>
<p>A 38-year-old man from Samtse has 6 weeks of fever, night sweats and increasing breathlessness; pulse 118, BP 96/70, JVP raised, quiet heart sounds, big globular heart on X-ray. <b>Large pericardial effusion, probably tuberculous, with early tamponade</b>: urgent echo, echo-guided pericardiocentesis with fluid for Xpert Ultra, ADA, cell count and culture; HIV test; start 2HRZE ${r(1)} ${r(4)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Acute MI / STEMI", "Regional ST elevation with reciprocal depression, Q waves; troponin high " + P("acs-adult", "ACS")],
["Pulmonary embolism", "Breathless, tachycardic, risk factors " + P("vte-adult", "VTE")],
["Aortic dissection", "Tearing pain to the back, unequal pulses"],
["Pleurisy / pneumonia", "Pleural rub, chest signs"],
["Myocarditis", "Troponin rise, reduced LV function — myopericarditis if both"],
["Early repolarisation", "Young, no PR depression, stable over time"]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>ECG</b>: stage 1 — widespread concave ST elevation and PR depression (opposite in aVR, V1), no reciprocal ST depression, no Q waves; then ST normalises, T waves invert, then recover. Large effusion: low voltage, electrical alternans ${r(1)}.</li>
<li><b>Echo</b>: effusion size, signs of tamponade, LV function ${r(1)}.</li>
<li>CRP/ESR (also guide duration), FBC, troponin (myopericarditis), creatinine/urea (uraemia), TSH, HIV test, chest X-ray ${r(1)}.</li>
<li><b>Pericardial fluid</b> (if drained): Xpert Ultra, AFB and culture, ADA, cell count, protein, LDH, Gram stain and culture, cytology ${r(4)} ${LB.exp("ADA STANDARD")}.</li>
<li>CT or MRI where available for thickening, calcification and constriction ${r(1)}.</li>
</ul>
<h3>Diagnostic criteria (ACC 2025, via Merck)</h3>
<p>With typical pleuritic pain: <b>definite</b> if 2 or more of — rub; diffuse ST elevation or PR depression; raised CRP or ESR; new or worsening effusion; MRI pericardial oedema or enhancement. <b>Possible</b> if 1 ${r(1)}.</p>
` },

{ id: "staging", title: "Pericarditis helper", html: `<div class="calc" data-calc="pericardplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Admit if any high-risk feature</h3>
<p>Fever, subacute onset, moderate or large effusion, tamponade, immunosuppression, trauma, on oral anticoagulant, no response to NSAID within a week, or myopericarditis (raised troponin) ${r(1)}.</p>
<h3>Viral / idiopathic pericarditis</h3>
<ul>
<li>${dr("ibuprofen")} 600–800 mg every 6–8 hours or ${dr("aspirin")} 325–650 mg every 4–6 hours (with ${dr("omeprazole")}) until pain and CRP settle, then taper ${r(1)}.</li>
<li>Plus ${dr("colchicine")} for 3 months — 0.5 mg twice daily over 70 kg, 0.5 mg once daily at 70 kg or less; it halves recurrence (ICAP, NNT 4) ${r(2)}.</li>
<li>No strenuous exercise until symptoms and inflammation resolve; graduated return ${r(1)}.</li>
<li>Stop causative drugs; avoid anticoagulants unless pericarditis complicates acute MI ${r(1)}.</li>
<li>Steroids only if NSAIDs are contraindicated or fail, at low dose (prednisolone 0.2–0.5 mg/kg/day) with a slow taper over about 3 months, and <b>only after TB and pus are excluded</b> ${r(1)}.</li>
</ul>
<h3>Tamponade</h3>
<ul>
<li>Immediate pericardiocentesis — removing even a little fluid can save life; echo-guided by an experienced operator, with resuscitation equipment and ECG monitoring ${r(1)}.</li>
<li>Subxiphoid approach; catheter left in until drainage is under 25–50 mL a day (usually 2–4 days) ${r(1)}.</li>
<li>While preparing: IV fluid bolus can help briefly; avoid diuretics and vasodilators ${LB.exp("STANDARD PRACTICE")}.</li>
</ul>
<h3>Tuberculous pericarditis</h3>
<ul>
<li>Antituberculosis treatment 2HRZE/4HR (national guideline) ${r(4)}. See ${P("tb-adult", "TB")}.</li>
<li>Drain large effusions; HIV test ${r(1)}.</li>
<li>Prednisolone reduces constriction (IMPI: 4.4% vs 7.8%) but not death; it increased HIV-associated cancers — consider in HIV-negative adults (specialist) ${r(3)}. Children: prednisolone 2–4 mg/kg/day (max 60 mg) for 4 weeks, then taper (Bhutan TB guideline) ${r(4)}.</li>
<li>Constriction: pericardiectomy at a cardiac surgical centre ${r(1)}.</li>
</ul>
<h3>Other causes</h3>
<p>Purulent: drainage + IV antibiotics. Uraemic: dialysis. Autoimmune/cancer: treat the cause. Recurrent pericarditis: NSAID + colchicine for 6–12 months with slow taper; refer ${r(1)}.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "NEML 2025"], [
[dr("ibuprofen"), "600–800 mg every 6–8 h with food " + r(1), "400 mg " + r(5)],
[dr("aspirin"), "325–650 mg every 4–6 h " + r(1), "75 mg, 300 mg " + r(5)],
[dr("colchicine"), "0.5 mg twice daily (> 70 kg) or once daily (≤ 70 kg) for 3 months " + r(2), "Not found " + r(5)],
[dr("omeprazole"), "20 mg daily with NSAID " + r(1) + " " + LB.exp("DOSE"), "Yes " + r(5)],
[dr("prednisolone"), "0.2–0.5 mg/kg/day, slow taper (only after excluding TB/pus); TB child 2–4 mg/kg/day max 60 mg " + r(1) + r(4), "5, 20 mg " + r(5)]
])}
` },

{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>HIV:</b> TB pericarditis common; steroids may increase cancer risk (IMPI) ${r(3)}.</li>
<li><b>Kidney failure:</b> uraemic pericarditis — intensify dialysis; avoid NSAIDs where possible ${r(1)}.</li>
<li><b>After MI:</b> use aspirin; avoid other NSAIDs and steroids ${r(1)}.</li>
<li><b>Pregnancy:</b> NSAIDs are avoided after 20 weeks and colchicine is a specialist decision ${LB.exp("STANDARD PRACTICE")}.</li>
<li><b>Children:</b> viral and purulent pericarditis; TB in endemic areas; rheumatic fever ${P("rhd-child", "ARF")}.</li>
</ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Tamponade at a district hospital, no cardiologist", "Bedside ultrasound-guided subxiphoid drainage by the most experienced clinician; resuscitate; transfer " + r(1) + " " + LB.loc()],
["Large effusion, Xpert negative", "TB still possible — ADA, culture, biopsy; empirical ATT if strongly suspected " + LB.exp("SPECIALIST")],
["No colchicine available", "NSAID with CRP-guided taper; refer recurrences " + r(5)],
["Pain recurs when steroids are tapered", "Slower taper, add colchicine, refer " + r(1)],
["ST elevation — pericarditis or STEMI?", "Look for reciprocal depression and regional pattern; troponin; when unsure treat as STEMI pathway"]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Tamponade, recurrent pericarditis (common), constrictive pericarditis (especially TB), myocarditis, NSAID gastrointestinal bleeding, steroid side effects ${r(1)} ${r(3)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Review in 1 week; CRP to guide tapering ${r(1)}.</li><li>Echo for effusions until resolved.</li><li>TB pericarditis: watch for constriction over months (JVP, oedema, ascites) ${r(3)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. ECG stage 1 shows concave ST elevation with PR depression in most leads (see the description above) ${r(1)}.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Pleuritic chest pain", [F.s("ECG, troponin, CRP, echo"), F.a, F.d("Tamponade?"), F.a, F.b([["Yes", F.e("Pericardiocentesis now; fluid for Xpert, ADA, culture")], ["No", F.s("High-risk features or large effusion?")]]), F.a, F.b([["Yes", F.e("Admit; look for TB, pus, cancer, uraemia")], ["No", F.ok("NSAID + colchicine 3 months; review 1 week")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Early steroids for viral pericarditis", "More recurrences", "NSAID + colchicine first " + r(1)],
["Steroids before excluding TB", "Disseminates TB", "Xpert/ADA first " + r(1)],
["Anticoagulating 'for the ST elevation'", "Bleeding into the pericardium, tamponade", "Confirm diagnosis " + r(1)],
["Diuretics for a raised JVP in tamponade", "Further fall in filling and BP", "Drain the fluid"],
["Missing TB in a large effusion", "Constriction, death", "Treat as TB until proved otherwise in Bhutan " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "ECG of acute pericarditis?", "Widespread concave ST elevation with PR depression, no reciprocal changes (except aVR, V1), no Q waves.")}
${qa("Intern/MO", "Colchicine dose for a 60 kg adult?", "0.5 mg once daily for 3 months (0.5 mg twice daily if over 70 kg).")}
${qa("Registrar", "Signs of tamponade?", "Hypotension, raised JVP, muffled heart sounds, pulsus paradoxus over 10 mmHg.")}
${qa("Registrar", "What did IMPI show?", "Prednisolone for TB pericarditis did not reduce death/tamponade but reduced constriction; it increased HIV-associated cancers.")}
${qa("Specialist", "Second-line for recurrent inflammatory pericarditis?", "IL-1 inhibitors (anakinra, rilonacept) per ACC 2025; low-dose steroids for the non-inflammatory phenotype.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Merck Manual Professional Edition. Pericarditis (last updated Oct 2026); Wang TKM, Klein AL, Cremer PC, et al. 2025 Concise clinical guidance: an ACC expert consensus statement on the diagnosis and management of pericarditis. J Am Coll Cardiol 2025;86:2691–2719. <a href="https://doi.org/10.1016/j.jacc.2025.05.023" target="_blank" rel="noopener">doi:10.1016/j.jacc.2025.05.023</a></li>
<li id="ref-2">Imazio M, Brucato A, Cemin R, et al. A randomized trial of colchicine for acute pericarditis (ICAP). N Engl J Med 2013;369:1522–1528. <a href="https://doi.org/10.1056/NEJMoa1208536" target="_blank" rel="noopener">doi:10.1056/NEJMoa1208536</a></li>
<li id="ref-3">Mayosi BM, Ntsekhe M, Bosch J, et al. Prednisolone and Mycobacterium indicus pranii in tuberculous pericarditis (IMPI). N Engl J Med 2014;371:1121–1130. <a href="https://doi.org/10.1056/NEJMoa1407380" target="_blank" rel="noopener">doi:10.1056/NEJMoa1407380</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National guideline for management of tuberculosis (National TB Control Programme) — Xpert Ultra on extrapulmonary fluids, 2HRZE/4HR, steroids in children.</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Merck (Oct 2026) with ACC 2025 criteria", "<span class='pass'>Read</span>", "27 Nov 2026"], ["ICAP, IMPI", "<span class='pass'>Abstracts read</span>", "DOIs verified"], ["Bhutan TB guideline", "<span class='pass'>Read</span>", "Via research brief"], ["NEML 2025", "<span class='flag'>Gap</span>", "No colchicine"], ["ESC 2025 pericarditis guideline", "<span class='unv'>Not read</span>", "Not open access"], ["Calculator", "<span class='pass'>New</span>", "pericardplan"]], "qc")}` }
]
});
})();
