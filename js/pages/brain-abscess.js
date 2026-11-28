/* Brain abscess — adults and children. NEW disease (batch N-5, 28 Nov 2026).
   Sources read directly: ESCMID guidelines on diagnosis and treatment of brain abscess in children and adults (Bodilsen et al., Clin Microbiol
   Infect 2024;30(1):66–89, doi:10.1016/j.cmi.2023.08.016 — abstract with all key recommendations read via Europe PMC 28 Nov 2026: MRI recommended
   for diagnosis; antimicrobials may be withheld until aspiration/excision in patients without severe disease if neurosurgery within ~24 h;
   molecular diagnostics if cultures negative; aspiration or excision whenever feasible (except toxoplasmosis); empirical community-acquired
   = 3rd-generation cephalosporin + metronidazole, add cotrimoxazole + voriconazole if severely immunocompromised; post-neurosurgical =
   carbapenem + vancomycin or linezolid; 6–8 weeks; oral consolidation after ≥6 weeks IV not routine; glucocorticoids for severe oedema/impending
   herniation; no primary anti-epileptic prophylaxis); NEML 2025 (ceftriaxone 1 g/250 mg inj, metronidazole 5 mg/mL IV and 400 mg tab, vancomycin
   500 mg inj, meropenem at referral hospitals, dexamethasone, phenytoin and levetiracetam). Doses (ceftriaxone 2 g 12-hourly, metronidazole
   500 mg 8-hourly; child doses), sources of infection and the cyanotic heart disease link are standard — marked. Covers remaining-list item
   'Brain abscess'. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "brain-abscess",
title: "Brain Abscess — adults & children",
subtitle: "Headache, fever and a new focal sign or seizure in someone with ear, sinus or dental infection, cyanotic heart disease or low immunity: get contrast imaging, send pus, start ceftriaxone plus metronidazole, and arrange neurosurgical drainage",
age: "All ages", specs: ["neuro", "id", "surg", "paeds"],
keywords: ["brain abscess", "cerebral abscess", "ring-enhancing lesion", "otogenic abscess", "cyanotic heart disease abscess", "ceftriaxone metronidazole", "burr hole aspiration", "subdural empyema", "toxoplasmosis", "tuberculoma", "focal seizure fever", "headache fever focal"],
related: ["meningitis-adult", "meningitis-child", "otitis-adult", "otitis-child", "chd-child", "hiv-adult", "neurocysticercosis", "tb-adult", "headache-adult", "endocarditis-adult"],
updated: "28 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">The classic triad — <b>headache, fever, focal deficit</b> — is present in only some patients; headache is the commonest symptom ${LB.exp("STANDARD")}. Most abscesses spread from ears, sinuses or teeth, or through the blood ${LB.exp("STANDARD")}.</p>
<div class="glance">
<div><h4>Image</h4><p>MRI (or contrast CT where MRI is not available): ring-enhancing lesion. <b>No lumbar puncture</b> if a mass is possible ${r(1)} ${LB.exp("LP — STANDARD")}.</p></div>
<div><h4>Drain</h4><p>Aspiration or excision whenever feasible — diagnosis and treatment ${r(1)}.</p></div>
<div><h4>Antibiotics</h4><p>${dr("ceftriaxone")} + ${dr("metronidazole")} for community-acquired; meropenem + vancomycin after neurosurgery; 6–8 weeks ${r(1)}.</p></div>
<div><h4>Steroids</h4><p>${dr("dexamethasone")} only for severe oedema or herniation risk ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>CT and neurosurgery are at JDWNRH and regional referral hospitals ${LB.loc()}. Ceftriaxone and IV metronidazole are on the NEML; vancomycin and meropenem are at referral level ${r(2)}. In Bhutan also think of <b>TB (tuberculoma)</b> and <b>neurocysticercosis</b> — see ${P("neurocysticercosis", "Neurocysticercosis")}.</p>`)}
` },

{ id: "overview", title: "Sources", html: `
${tbl(["Source", "Usual site / organisms"], [
["Ear (chronic otitis media, mastoiditis)", "Temporal lobe, cerebellum — streptococci, anaerobes, Gram-negatives " + LB.exp("STANDARD")],
["Sinus / dental", "Frontal lobe — streptococci (S. anginosus group), anaerobes " + LB.exp("STANDARD")],
["Blood spread", "Multiple — cyanotic heart disease, endocarditis, lung abscess/bronchiectasis " + LB.exp("STANDARD")],
["Trauma / neurosurgery", "Staphylococci, Gram-negatives " + r(1)],
["Immunocompromise (HIV, transplant)", "Toxoplasma, Nocardia, fungi, TB " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `${F.chart("Brain abscess", [F.s("Bacteria reach brain (contiguous, blood, trauma)"), F.a, F.s("Cerebritis (days)"), F.a, F.s("Capsule forms (≈2 weeks)"), F.a, F.e("Mass effect, oedema, rupture into ventricle")])} <p>${LB.exp("STANDARD")}</p>` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ESCMID 2024", "Local reality", "This guide"], [
["Imaging", "MRI", "CT more available", "Contrast CT acceptable; MRI if unclear " + r(1) + " " + LB.loc()],
["Withholding antibiotics for culture", "Possible if not severe and surgery within ~24 h", "Transfer often &gt;24 h", "Start antibiotics after blood cultures unless surgery is truly imminent " + r(1) + " " + LB.loc()],
["Oral step-down", "Not routinely after ≥6 weeks IV", "Long IV courses hard", "Specialist decision " + r(1)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Headache (often progressive), fever (may be absent), vomiting, drowsiness ${LB.exp("STANDARD")}.</li>
<li>Focal deficit: hemiparesis, dysphasia, ataxia (cerebellar), visual field loss; seizures ${LB.exp("STANDARD")}.</li>
<li>Source clues: ear discharge, sinus or dental infection, cyanosis/clubbing, recent neurosurgery ${LB.exp("STANDARD")}.</li>
<li>Sudden worsening with neck stiffness: rupture into the ventricles — emergency ${LB.exp("STANDARD")}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 15-year-old boy from Pemagatshel with years of foul ear discharge has 10 days of headache and vomiting, now unsteady with nystagmus. Contrast CT: ring-enhancing right cerebellar lesion. <b>Otogenic cerebellar abscess</b>: blood cultures, ceftriaxone + metronidazole, urgent neurosurgery and ENT ${r(1)} ${P("otitis-child", "Otitis (child)")}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Tuberculoma / TB abscess", "TB contact, chest X-ray, CSF " + P("tb-adult", "TB")],
["Neurocysticercosis", "Scolex, multiple cysts, seizures, afebrile " + P("neurocysticercosis", "Neurocysticercosis")],
["Glioma / metastasis", "No fever, irregular thick enhancement " + P("brain-tumour-adult", "Brain tumours")],
["Toxoplasmosis (HIV)", "Low CD4, multiple lesions " + P("hiv-adult", "HIV")],
["Meningitis", "No mass — LP if safe " + P("meningitis-adult", "Meningitis")],
["Subdural empyema", "Sinusitis, crescent collection — neurosurgical emergency " + LB.exp("STANDARD")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li>MRI with diffusion (abscess restricts diffusion) or contrast CT ${r(1)} ${LB.exp("DWI — STANDARD")}.</li>
<li>Blood cultures before antibiotics; FBC, CRP ${LB.exp("STANDARD")}.</li>
<li>Pus from aspiration: Gram stain, culture (aerobic and anaerobic), AFB/TB tests, fungal; molecular tests if culture negative ${r(1)}.</li>
<li>Look for the source: ear/sinus CT, dental check, echocardiogram, chest X-ray; HIV test ${LB.exp("STANDARD")}.</li>
</ul>
` },

{ id: "staging", title: "Brain abscess helper", html: `<div class="calc" data-calc="abscessplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Surgery ${r(1)}</h3>
<ul><li>Aspiration (burr hole) or excision whenever feasible; except presumed toxoplasmosis in HIV (treat first). Drain the source (mastoid, sinus, teeth) with ENT/dental.</li></ul>
<h3>Antimicrobials ${r(1)}</h3>
<ul>
<li>Community-acquired, immunocompetent: ${dr("ceftriaxone")} (adult 2 g every 12 h; child 50 mg/kg every 12 h, max 2 g) + ${dr("metronidazole")} (adult 500 mg every 8 h; child 7.5 mg/kg every 8 h) ${LB.exp("DOSES STANDARD")}.</li>
<li>Severe immunocompromise: add cotrimoxazole (Nocardia/Toxoplasma) and voriconazole (fungi).</li>
<li>After neurosurgery or trauma: ${dr("meropenem")} + ${dr("vancomycin")} (or linezolid).</li>
<li>Duration 6–8 weeks, guided by response and repeat imaging; narrow when cultures return.</li>
</ul>
<h3>Supportive</h3>
<ul>
<li>${dr("dexamethasone")} only for severe perifocal oedema or impending herniation ${r(1)}.</li>
<li>Treat seizures (${dr("levetiracetam")} or ${dr("phenytoin")}); no routine primary prophylaxis ${r(1)}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "NEML 2025"], [
[dr("ceftriaxone"), "Empirical, community-acquired " + r(1), "1 g, 250 mg injection"],
[dr("metronidazole"), "Anaerobes " + r(1), "5 mg/mL IV, 400 mg tab"],
[dr("meropenem"), "Post-neurosurgical " + r(1), "Referral hospitals"],
[dr("vancomycin"), "Post-neurosurgical / MRSA " + r(1), "500 mg injection"],
[dr("dexamethasone"), "Severe oedema only " + r(1), "4 mg/mL injection"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Children with cyanotic heart disease:</b> headache or new neurological signs = brain abscess until proven otherwise ${LB.exp("STANDARD")} ${P("chd-child", "Congenital heart disease")}.</li><li><b>HIV:</b> toxoplasmosis is commonest — empirical treatment and re-image; TB and lymphoma are mimics ${r(1)} ${P("hiv-adult", "HIV")}.</li><li><b>Neonates:</b> Citrobacter and Gram-negative meningitis can cause abscesses ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Fever + focal signs at a district hospital, no CT", "Blood cultures, ceftriaxone + metronidazole, transfer; no LP"],
["Neurosurgery available today, patient stable", "Discuss delaying antibiotics until aspiration " + r(1)],
["Sudden deterioration with meningism", "Ventricular rupture — emergency neurosurgery"],
["Ring lesion, afebrile, seizures, pork eater", "Neurocysticercosis likely " + P("neurocysticercosis", "Neurocysticercosis")]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Herniation, ventricular rupture/ventriculitis, hydrocephalus, epilepsy, permanent deficits, recurrence ${LB.exp("STANDARD")}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Repeat imaging during treatment and if worsening ${LB.exp("STANDARD")}.</li><li>Seizure and rehabilitation follow-up; fix the source (ear surgery, dental) ${LB.exp("STANDARD")}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image used. Smooth thin ring enhancement with restricted diffusion in the centre favours abscess.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Headache + fever/focal signs", [F.s("Contrast CT / MRI (no LP first)"), F.a, F.d("Ring-enhancing lesion?"), F.a, F.b([["Yes", F.e("Blood cultures, ceftriaxone + metronidazole, neurosurgery for aspiration; treat source")], ["No", F.s("Meningitis/encephalitis pathway")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Lumbar puncture before imaging", "Herniation", "Image first"],
["Short antibiotic course", "Relapse", "6–8 weeks " + r(1)],
["Ignoring the ear/sinus/tooth", "Recurrence", "Treat source with ENT/dental"],
["Routine steroids", "May reduce antibiotic penetration and mask response", "Only for severe oedema " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Empirical antibiotics for community-acquired brain abscess (ESCMID)?", "Third-generation cephalosporin (ceftriaxone) plus metronidazole.")}
${qa("Intern/MO", "Should LP be done?", "Not before imaging when a mass lesion is possible.")}
${qa("Registrar", "Duration of treatment?", "6–8 weeks.")}
${qa("Specialist", "When can antibiotics wait for aspiration?", "Non-severe disease with neurosurgery possible within about 24 hours.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Bodilsen J, et al. European Society of Clinical Microbiology and Infectious Diseases guidelines on diagnosis and treatment of brain abscess in children and adults. Clin Microbiol Infect 2024;30(1):66–89. doi:10.1016/j.cmi.2023.08.016</li>
<li id="ref-2">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["ESCMID 2024", "<span class='pass'>Abstract recommendations read</span>", "Full text not open"], ["Doses, sources", "<span class='unv'>Standard</span>", "Marked"]], "qc")}` }
]
});
})();
