/* Rheumatic heart disease — adults (Bhutan STG 2.4, ESC/EACTS 2021 valvular, WHO 2024) */
registerPage({
id: "rhd-adult",
title: "Rheumatic Heart Disease — Adults",
subtitle: "Continue prophylaxis, treat heart failure and AF, anticoagulate with warfarin when mitral stenosis or a mechanical valve is present, and refer early for valve intervention",
age: "Adults (including pregnancy)", specs: ["cardio", "medicine", "obg"],
keywords: ["rheumatic heart disease", "mitral stenosis", "mitral regurgitation", "aortic regurgitation", "balloon mitral valvotomy", "mechanical valve warfarin", "RHD pregnancy", "infective endocarditis"],
related: ["rhd-child", "af-adult", "hf-adult", "stroke-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Adults with RHD present with breathlessness, AF, stroke or decompensation in pregnancy. Many have never been diagnosed.</p>
<div class="glance">
<div><h4>Prophylaxis</h4><p>${dr("benzathine_pen")} 12 lakh units every 4 weeks until 40 (moderate–severe) or lifelong.</p></div>
<div><h4>Mitral stenosis + AF</h4><p>${dr("warfarin")} INR 2–3 — <b>not DOACs</b>.</p></div>
<div><h4>Mechanical valve</h4><p>Warfarin lifelong (INR 2.5–3.5 mitral).</p></div>
<div><h4>Refer</h4><p>Symptomatic or severe valve disease → cardiology for valvotomy/surgery.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Echo is available at JDWNRH and regional hospitals; valve surgery is done abroad through referral (India) under the government scheme. INR monitoring is available at district hospitals. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `${tbl(["Lesion", "Key features", "Main treatment"], [["Mitral stenosis", "Dyspnoea, AF, haemoptysis, loud S1, diastolic rumble", "Beta-blocker, diuretic, warfarin if AF; balloon valvotomy"], ["Mitral regurgitation", "Pansystolic murmur, LV dilatation", "Diuretic, ACE inhibitor; surgery when symptomatic or LV dysfunction"], ["Aortic regurgitation", "Wide pulse pressure, early diastolic murmur", "Vasodilator; surgery"], ["Mixed/multivalve", "Common", "Specialist"]])}${r(1, 2)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Mitral stenosis", [F.s("Fused commissures, narrowed orifice"), F.a, F.s("Raised left atrial pressure → AF, pulmonary congestion"), F.a, F.e("Pulmonary hypertension, right heart failure, stroke")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "ESC 2021 / 2024 AF", "This guide"], [["DOAC in rheumatic MS", "Sometimes used", "Not recommended (INVICTUS trial)", "Warfarin " + LB.loc()], ["Prophylaxis after surgery", "Often stopped", "Continue", "Continue"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Breathlessness on exertion, orthopnoea, palpitations, fatigue, haemoptysis.</li><li>Malar flush, irregular pulse, murmurs, signs of heart failure.</li></ul>${box("red", "Urgent", `<ul><li>Pulmonary oedema, especially in pregnancy</li><li>New AF with fast rate or stroke</li><li>Fever with murmur (endocarditis)</li></ul>`)}<h3>The typical patient</h3><p>A 28-year-old woman at 26 weeks' pregnancy in Gelephu develops breathlessness and palpitations; irregular pulse 130, mid-diastolic murmur. <b>This is decompensated rheumatic mitral stenosis with AF in pregnancy</b>: metoprolol, furosemide, LMWH, urgent echo and obstetric-cardiology referral; balloon valvotomy can be done in pregnancy.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Peripartum cardiomyopathy", "Dilated LV, no valve disease"], ["Congenital heart disease (ASD)", "Fixed split S2"], ["Endocarditis", "Fever, positive cultures"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Echocardiography (valve area, gradients, LV function, PA pressure, Wilkins score), ECG, chest X-ray, INR if on warfarin, blood cultures if febrile.</p>` },
{ id: "staging", title: "Prophylaxis duration", html: `<div class="calc" data-calc="rhdprophylaxis"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Heart failure: diuretic, salt restriction; beta-blocker in MS (prolongs diastole); ACE inhibitor in regurgitation (not in pregnancy).</li><li>AF: rate control (beta-blocker, digoxin); <b>warfarin INR 2–3</b> for MS with AF, prior embolism or LA thrombus.</li><li>Mechanical valves: warfarin lifelong (INR 2.5–3.5 for mitral, 2–3 for aortic without risk factors).</li><li>Intervention: percutaneous balloon mitral valvotomy for suitable symptomatic MS; valve repair/replacement for others.</li><li>Endocarditis prophylaxis (amoxicillin 2 g before dental extraction) for prosthetic valves or previous endocarditis; good dental care for all.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("benzathine_pen"), "12 lakh units IM every 4 weeks", "Prophylaxis"], [dr("warfarin"), "INR 2–3 (2.5–3.5 mechanical mitral)", "Not DOACs"], [dr("metoprolol"), "25–100 mg twice daily", "Rate control in MS"], [dr("furosemide"), "20–80 mg daily", "Congestion"], [dr("digoxin"), "62.5–250 µg daily", "AF rate"]])}` },
{ id: "populations", title: "Pregnancy", html: `<p>Moderate–severe MS is high risk (mWHO III–IV): pre-pregnancy counselling and intervention. Warfarin is teratogenic in the first trimester (dose over 5 mg/day especially): switch to LMWH weeks 6–12 under specialist care, and near delivery. Continue benzathine penicillin.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Labile INR far from a lab", "Point-of-care INR, diet counselling, fixed weekly visits"], ["Pregnant woman on warfarin for mechanical valve", "Urgent specialist plan; never stop anticoagulation"]])}` },
{ id: "complications", title: "Complications", html: `<p>Heart failure, AF, stroke, endocarditis, pulmonary hypertension, valve thrombosis, bleeding on warfarin.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Echo yearly (6-monthly if severe); INR monthly or more; prophylaxis register; contraception advice.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "AF on ECG", src: "images/stroke-af-ecg.jpg", mod: "12-lead ECG", ctx: "Atrial fibrillation", loc: "Rhythm strip", find: "Irregularly irregular rhythm, no P waves", interp: "In mitral stenosis: warfarin, not DOAC", by: "Ewingdo", page: "https://commons.wikimedia.org/wiki/File:ECG_Atrial_Fibrillation_90_bpm.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Adult with RHD", [F.s("Echo: lesion and severity"), F.a, F.d("Symptoms or severe lesion?"), F.a, F.b([["Yes", F.e("Refer for valvotomy/surgery")], ["No", F.ok("Prophylaxis, yearly echo")]]), F.a, F.ok("AF/mechanical valve → warfarin")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["DOAC in rheumatic MS", "More strokes and deaths (INVICTUS)", "Warfarin"], ["Missing MS in pregnancy breathlessness", "Pulmonary oedema", "Auscultate, echo"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Registrar", "Anticoagulant for AF with moderate rheumatic MS?", "Warfarin, INR 2–3; DOACs are not recommended.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Van Gelder IC, Rienstra M, Bunting KV, et al. 2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J. 2024;45:3314-3414. <a href="https://doi.org/10.1093/eurheartj/ehae176" target="_blank" rel="noopener">doi</a></li><li id="ref-2">World Health Organization. WHO guideline on the prevention and diagnosis of rheumatic fever and rheumatic heart disease. Geneva: WHO; 2024. <a href="https://www.who.int/publications/i/item/9789240100077" target="_blank" rel="noopener">who.int</a></li><li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, section 2.4.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
