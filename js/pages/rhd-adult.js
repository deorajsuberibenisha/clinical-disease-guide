/* Rheumatic heart disease — adults. Thin-page upgrade Round 3, 27 Nov 2026 (id, rhdprophylaxis calculator, AF image and related links kept).
   Sources: Bhutan STG 2024 §2.4 (prophylaxis 12 lakh ≥ 30 kg monthly; carditis to 25 y/10 y; chronic carditis to 40 y or lifelong);
   WHO 2024 RF/RHD guideline (read: echo screening in pregnancy (conditional); prophylaxis for adults ≥ 20 with advanced RHD by shared decision
   (conditional) and for screen-detected RHD (conditional); BPG first line; oral test dose; lidocaine; adherence; macrolide if allergic);
   Merck Manual Professional 'Mitral stenosis' (updated Sept 2026, read: moderate > 1.5–2.5 cm² / PHT < 150 ms; severe ≤ 1.5 cm² / PHT ≥ 150 ms;
   diuretics, beta-blockers or CCB; VKA if AF, prior embolism or LA thrombus, consider if LA > 50 mm or dense contrast; NOACs not indicated in rheumatic
   MS; endocarditis prophylaxis only after valve replacement; PMBC for symptomatic severe MS with suitable valve, consider if PASP > 50 or new AF;
   surgery if unsuitable); ESC/EACTS 2021 valvular guideline (Vahanian, DOI verified) and ESC 2018 pregnancy guideline (DOI verified) for
   prosthetic-valve INR and pregnancy principles; INVICTUS (Connolly 2022, DOI verified: rivaroxaban inferior to VKA in RHD-associated AF);
   ESC 2024 AF (previous version). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "rhd-adult",
title: "Rheumatic Heart Disease — Adults",
subtitle: "Continue prophylaxis, treat heart failure and AF, anticoagulate with warfarin when mitral stenosis or a mechanical valve is present, and refer early for valve intervention",
age: "Adults (including pregnancy)", specs: ["cardio", "medicine", "obg"],
keywords: ["rheumatic heart disease", "mitral stenosis", "mitral regurgitation", "aortic regurgitation", "balloon mitral valvotomy", "PTMC", "PMBC", "mechanical valve warfarin", "RHD pregnancy", "infective endocarditis", "INVICTUS", "Wilkins score", "mitral valve area"],
related: ["rhd-child", "af-adult", "hf-adult", "stroke-adult", "vte-adult", "ssti-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Adults with RHD present with breathlessness, AF, stroke, endocarditis, or sudden decompensation in pregnancy — many were never diagnosed as children. Mitral stenosis is the classic lesion ${r(3)}.</p>
<div class="glance">
<div><h4>Prophylaxis</h4><p>${dr("benzathine_pen")} 12 lakh units every 4 weeks; chronic carditis until at least 40, lifelong may be better ${r(1)}.</p></div>
<div><h4>MS + AF</h4><p>${dr("warfarin")} INR 2–3 — <b>not a DOAC</b>: rivaroxaban was worse than warfarin in INVICTUS ${r(5)} ${r(3)}.</p></div>
<div><h4>Mechanical valve</h4><p>Warfarin lifelong; DOACs are contraindicated ${r(4)}.</p></div>
<div><h4>Refer</h4><p>Symptomatic severe MS (area ≤ 1.5 cm²) → balloon valvotomy if suitable; severe regurgitation with symptoms or LV dysfunction → surgery ${r(3)} ${r(4)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Echo is available at JDWNRH and the regional referral hospitals; balloon valvotomy and valve surgery are arranged through referral abroad (mainly India) ${LB.loc()}. INR testing at district hospitals allows warfarin follow-up close to home. Benzathine penicillin, warfarin, metoprolol, furosemide and digoxin are on the NEML ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Valve lesions", html: `
${tbl(["Lesion", "Key features", "Main treatment"], [
["Mitral stenosis", "Exertional breathlessness, AF, haemoptysis, pulmonary oedema in pregnancy; loud S1, opening snap, mid-diastolic rumble", "Diuretic, rate control, warfarin if AF; balloon valvotomy " + r(3)],
["Mitral regurgitation", "Breathlessness, apical pansystolic murmur, LV dilatation", "Diuretic; surgery (repair preferred) when symptomatic or LV dysfunction " + r(4)],
["Aortic regurgitation", "Wide pulse pressure, collapsing pulse, early diastolic murmur", "Surgery when symptomatic or LV dysfunction " + r(4)],
["Aortic stenosis (rheumatic)", "Usually with mitral disease", "Surgery when severe and symptomatic " + r(4)],
["Mixed / multivalve", "Common in RHD", "Specialist heart team"]
])}
` },
{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Rheumatic mitral stenosis", [F.s("Repeated ARF → fused commissures, thick leaflets and chordae"), F.a, F.s("Narrow orifice (normal 4–5 cm²) → high left atrial pressure"), F.a, F.s("LA dilatation → AF and LA thrombus"), F.a, F.e("Pulmonary congestion → pulmonary hypertension → right heart failure; stroke")])}
<p>Anything that shortens diastole (fast AF, fever, pregnancy, exercise) raises the gradient and can cause sudden pulmonary oedema ${r(3)}.</p>
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "WHO 2024", "ESC / Merck", "This guide"], [
["Prophylaxis in adults", "Chronic carditis: until 40, lifelong may be better", "Advanced RHD ≥ 20 y: by shared decision (conditional)", "Indefinitely or until 40 (Merck, AHA)", "Until at least 40; discuss lifelong " + r(1) + r(2)],
["DOAC in rheumatic MS with AF", "—", "—", "Not indicated (INVICTUS)", "Warfarin " + r(3) + r(5)],
["Anticoagulation without AF", "—", "—", "Prior embolism or LA thrombus; consider LA > 50 mm", "Same " + r(3)],
["Endocarditis prophylaxis", "—", "—", "Only prosthetic valve or previous endocarditis", "Same; good dental care for all " + r(3) + r(4)],
["Echo screening in pregnancy", "—", "May be considered (conditional)", "—", "Echo any pregnant woman with a murmur or breathlessness " + r(2)]
])}
` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Breathlessness on exertion, orthopnoea, palpitations, fatigue, haemoptysis; many are asymptomatic until pregnancy or AF ${r(3)}.</li>
<li>Malar flush, irregular pulse, raised JVP, murmurs, crackles, oedema.</li>
<li>Stroke or limb embolism may be the first event.</li>
</ul>
${box("red", "Urgent", `<ul><li>Pulmonary oedema, especially in pregnancy</li><li>New AF with fast rate, or stroke</li><li>Fever with a murmur — think endocarditis, take 3 blood cultures</li><li>Mechanical valve with breathlessness, new murmur change or embolism — valve thrombosis</li></ul>`)}
<h3>The typical patient</h3>
<p>A 28-year-old woman at 26 weeks' pregnancy in Gelephu becomes breathless with palpitations; irregular pulse 130, mid-diastolic murmur. <b>Decompensated rheumatic mitral stenosis with AF in pregnancy</b>: sit up, oxygen, metoprolol to slow the rate, furosemide, therapeutic LMWH, urgent echo and joint obstetric–cardiology referral; balloon valvotomy can be done in pregnancy ${r(6)}.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Peripartum cardiomyopathy", "Dilated poor LV, no valve disease"],
["Congenital heart disease (ASD)", "Fixed split S2, right heart dilatation"],
["Infective endocarditis", "Fever, new murmur, positive cultures"],
["Degenerative valve disease", "Older age, calcified valve, no rheumatic history"],
["Pulmonary disease (TB, COPD)", "Normal echo; abnormal X-ray"]
])}
` },
{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Echocardiography</b>: lesion, mitral valve area and pressure half-time, gradients, LV size and function, pulmonary pressure, LA size and thrombus, valve suitability for balloon valvotomy ${r(3)}.</li>
<li>ECG (AF, LA enlargement, RV strain); chest X-ray.</li>
<li>INR if on warfarin; creatinine; blood cultures if febrile; pregnancy test before starting warfarin in women.</li>
</ul>
${tbl(["Mitral stenosis", "Valve area", "Pressure half-time"], [["Moderate", "> 1.5 to 2.5 cm²", "< 150 ms"], ["Severe", "≤ 1.5 cm²", "≥ 150 ms"]])}
<p class="small">Merck Manual, Sept 2026 ${r(3)}.</p>
` },
{ id: "staging", title: "Prophylaxis calculator", html: `<div class="calc" data-calc="rhdprophylaxis"></div>` },
{ id: "manage", title: "Management", html: `
<h3>1. Prevent recurrence</h3>
<p>${dr("benzathine_pen")} 12 lakh units deep IM every 4 weeks; continue after valve surgery. Oral penicillin V 250 mg twice daily if injections are refused; erythromycin if truly allergic ${r(1)} ${r(2)}.</p>
<h3>2. Symptoms and heart failure</h3>
<ul>
<li>Diuretic (${dr("furosemide")}) for congestion; salt restriction ${r(3)}.</li>
<li>Mitral stenosis: beta-blocker (${dr("metoprolol")}) or a rate-limiting calcium-channel blocker to slow the heart and lengthen diastole ${r(3)}.</li>
<li>Regurgitation: standard heart failure treatment (see ${P("hf-adult", "Heart failure")}); ACE inhibitors are contraindicated in pregnancy.</li>
<li>Encourage some regular exercise despite breathlessness ${r(3)}.</li>
</ul>
<h3>3. Atrial fibrillation and anticoagulation</h3>
<ul>
<li>Rate control: beta-blocker; ${dr("digoxin")} as an add-on.</li>
<li><b>Warfarin, target INR 2–3,</b> for MS with AF (current or past), prior embolism or LA thrombus; consider if LA over 50 mm or dense spontaneous contrast ${r(3)}.</li>
<li><b>No DOACs in rheumatic MS</b>: in INVICTUS, rivaroxaban gave more strokes, embolism and deaths than warfarin ${r(5)}. Risk scores such as CHA₂DS₂-VA are not used to decide anticoagulation in moderate–severe MS ${r(7)}. See ${P("af-adult", "AF")}.</li>
</ul>
<h3>4. Valve intervention (refer)</h3>
<ul>
<li><b>Severe MS with symptoms</b> and a suitable valve: percutaneous balloon mitral commissurotomy — procedure of choice in younger patients without heavy calcification, LA thrombus or more than mild MR; consider even without symptoms if pulmonary systolic pressure over 50 mmHg or new AF ${r(3)}.</li>
<li>Surgical commissurotomy or valve replacement if unsuitable for balloon ${r(3)}.</li>
<li>Severe MR or AR: surgery when symptomatic, or when the LV starts to dilate or fail ${r(4)}.</li>
</ul>
<h3>5. After valve replacement</h3>
<ul>
<li>Mechanical valve: warfarin lifelong; usual INR targets 2.5–3.5 for mitral and 2.0–3.0 for aortic without extra risk factors (ESC sets the target by prosthesis and patient risk) ${r(4)}. DOACs are contraindicated ${r(4)}.</li>
<li>Bioprosthesis: warfarin for the first months, then by rhythm ${r(4)} ${LB.exp("DURATION")}.</li>
<li>Endocarditis prophylaxis (amoxicillin 2 g orally before dental extraction or scaling) for prosthetic valves or previous endocarditis ${r(3)} ${LB.exp("DOSE")}.</li>
</ul>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("benzathine_pen"), "12 lakh units IM every 4 weeks " + r(1), "Continue after surgery"],
[dr("warfarin"), "Titrate to INR 2–3 (MS + AF); mechanical mitral 2.5–3.5 " + r(3) + r(4), "Not DOACs"],
[dr("metoprolol"), "25–100 mg twice daily " + LB.exp("DOSE"), "Rate control in MS; safe in pregnancy"],
[dr("furosemide"), "20–80 mg daily " + LB.exp("DOSE"), "Congestion"],
[dr("digoxin"), "62.5–250 µg daily " + LB.exp("DOSE"), "AF rate, add-on"],
[dr("enoxaparin"), "1 mg/kg 12-hourly " + LB.exp("DOSE"), "Pregnancy, bridging (anti-Xa monitoring with mechanical valves)"]
])}
` },
{ id: "populations", title: "Pregnancy", html: `
<ul>
<li>Pregnancy raises blood volume and heart rate: MS often decompensates in the second trimester or around delivery ${r(3)} ${r(6)}.</li>
<li>Moderate–severe MS is high risk: counsel before pregnancy and treat severe MS (balloon valvotomy) first ${r(6)}.</li>
<li>In pregnancy: beta-blocker for symptoms, diuretic for congestion, anticoagulation for AF or LA thrombus; balloon valvotomy if symptoms persist ${r(6)}.</li>
<li><b>Mechanical valve:</b> highest risk. Warfarin is teratogenic in the first trimester (especially over 5 mg/day); the anticoagulation plan (warfarin vs LMWH with anti-Xa monitoring) must be made by a specialist before or as soon as pregnancy is known — never stop anticoagulation ${r(6)}.</li>
<li>Continue benzathine penicillin ${r(2)}. Contraception: avoid oestrogen with AF or mechanical valves; copper IUD or progestogen methods ${LB.exp("UKMEC")}.</li>
</ul>
` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Labile INR far from a lab", "Fixed-day INR checks at the district hospital, diet and drug interaction counselling"],
["Pregnant woman on warfarin for a mechanical valve", "Urgent specialist plan; never stop anticoagulation " + r(6)],
["Patient already on a DOAC for 'AF' with rheumatic MS", "Switch to warfarin " + r(5)],
["Waiting for valve surgery abroad", "Optimise diuretics and rate, keep prophylaxis, treat anaemia, dental review"],
["Fever and murmur after dental work", "3 blood cultures before antibiotics; treat as endocarditis"]
])}
` },
{ id: "complications", title: "Complications", html: `<p>Heart failure, AF, stroke and systemic embolism, infective endocarditis, pulmonary hypertension, haemoptysis, prosthetic valve thrombosis, bleeding on warfarin, maternal and fetal death in pregnancy.</p>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Echo yearly (6-monthly if severe or in pregnancy) ${LB.exp("INTERVAL")}.</li><li>INR at least monthly once stable.</li><li>Prophylaxis register; dental check-ups; contraception and pre-pregnancy counselling.</li></ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "AF on ECG", src: "images/stroke-af-ecg.jpg", mod: "12-lead ECG", ctx: "Atrial fibrillation", loc: "Rhythm strip", find: "Irregularly irregular rhythm, no P waves", interp: "In rheumatic mitral stenosis: warfarin, not a DOAC", by: "Ewingdo", page: "https://commons.wikimedia.org/wiki/File:ECG_Atrial_Fibrillation_90_bpm.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("Adult with RHD", [F.s("Echo: lesion and severity"), F.a, F.d("AF, prior embolism or LA thrombus?"), F.a, F.b([["Yes", F.e("Warfarin INR 2–3 (no DOAC)")], ["No", F.ok("No anticoagulant (unless mechanical valve)")]]), F.a, F.d("Symptoms or severe lesion?"), F.a, F.b([["Yes", F.e("Refer: balloon valvotomy or surgery")], ["No", F.ok("Prophylaxis, yearly echo")]])])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["DOAC in rheumatic MS", "More strokes and deaths (INVICTUS)", "Warfarin " + r(5)],
["Missing MS in a breathless pregnant woman", "Pulmonary oedema, maternal death", "Auscultate, echo " + r(2)],
["Stopping benzathine after surgery", "Recurrence damages the new or other valves", "Continue " + r(1)],
["Fast AF left untreated", "Short diastole → pulmonary oedema", "Rate control first"],
["Antibiotics before blood cultures", "Endocarditis missed", "Cultures first"]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Mitral valve area that defines severe mitral stenosis?", "≤ 1.5 cm² (or pressure half-time ≥ 150 ms).")}
${qa("Registrar", "Anticoagulant for AF with moderate rheumatic MS?", "Warfarin, INR 2–3; DOACs are not indicated (INVICTUS).")}
${qa("Registrar", "Who needs endocarditis prophylaxis before dental extraction?", "Patients with a prosthetic valve or previous endocarditis.")}
${qa("Specialist", "When is balloon commissurotomy preferred?", "Symptomatic severe MS with a pliable, non-calcified valve, no LA thrombus and no more than mild MR.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §2.4 Acute rheumatic fever.</li>
<li id="ref-2">World Health Organization. WHO guideline on the prevention and diagnosis of rheumatic fever and rheumatic heart disease. Geneva: WHO; 2024. <a href="https://www.who.int/publications/i/item/9789240100077" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">Merck Manual Professional Edition. Mitral stenosis (last updated Sept 2026).</li>
<li id="ref-4">Vahanian A, Beyersdorf F, Praz F, et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J 2022;43:561–632. <a href="https://doi.org/10.1093/eurheartj/ehab395" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehab395</a></li>
<li id="ref-5">Connolly SJ, Karthikeyan G, Ntsekhe M, et al. Rivaroxaban in rheumatic heart disease–associated atrial fibrillation (INVICTUS). N Engl J Med 2022;387:978–988. <a href="https://doi.org/10.1056/NEJMoa2209051" target="_blank" rel="noopener">doi:10.1056/NEJMoa2209051</a></li>
<li id="ref-6">Regitz-Zagrosek V, Roos-Hesselink JW, Bauersachs J, et al. 2018 ESC Guidelines for the management of cardiovascular diseases during pregnancy. Eur Heart J 2018;39:3165–3241. <a href="https://doi.org/10.1093/eurheartj/ehy340" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehy340</a></li>
<li id="ref-7">Van Gelder IC, Rienstra M, Bunting KV, et al. 2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J 2024;45:3314–3414. <a href="https://doi.org/10.1093/eurheartj/ehae176" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehae176</a></li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["STG §2.4, WHO 2024", "<span class='pass'>Read</span>", "27 Nov 2026"], ["Merck mitral stenosis", "<span class='pass'>Read</span>", "Sept 2026 update"], ["DOIs (ESC 2021, ESC 2018, INVICTUS, ESC 2024)", "<span class='pass'>Verified</span>", "Crossref"], ["ESC full texts", "<span class='unv'>Not read</span>", "INR and pregnancy details from summary knowledge; marked where dose-level"], ["Calculator", "<span class='pass'>Kept</span>", "rhdprophylaxis (duration logic corrected)"]], "qc")}` }
]
});
})();
