/* Tachyarrhythmias (SVT, VT) and bradyarrhythmias (heart block) — adults, with children's doses. NEW disease (batch N-2, 27 Nov 2026).
   Sources read directly: Resuscitation Council UK 2025 adult tachyarrhythmia algorithm (V3, March 2026) and adult bradyarrhythmia algorithm 2025
   (PDFs from resus.org.uk, text read: life-threatening features — shock, syncope with severe/ongoing hypotension, myocardial ischaemia, severe heart
   failure, immediately post-ROSC; unstable → synchronised shock up to 3, then amiodarone 300 mg IV over 10–20 min or procainamide; narrow regular →
   vagal manoeuvres, adenosine 6 → 12 → 18 mg (no pre-excitation), then verapamil or beta-blocker, then shock; irregular narrow (AF) → rate control
   by EF, anticoagulate if > 24 h; regular broad → treat as VT, amiodarone 300 mg over 10–60 min then 900 mg/24 h; torsades → magnesium 8 mmol over
   10 min, avoid amiodarone; pre-excited AF → procainamide or cardioversion; sinus tachycardia not to be slowed with drugs; brady — life-threatening
   features → atropine 500 mcg IV, repeat to 3 mg; interim isoprenaline 5 mcg/min, adrenaline 2–10 mcg/min, aminophylline, dopamine, glucagon
   (beta-blocker/CCB overdose), glycopyrrolate; transcutaneous pacing; asystole risk — recent asystole, Mobitz II, CHB with broad QRS, pause > 3 s);
   ICMR/DHR STW Bradyarrhythmias in symptomatic patients (Jan 2025, library: HR < 50 with symptoms; reversible causes — beta-blockers, CCB, digoxin,
   clonidine, lithium, hypothyroidism, kidney disease/hyperkalaemia, sleep apnoea; hyperkalaemia — calcium gluconate 10 mL 10% over 10 min, insulin–
   glucose, bicarbonate, salbutamol; dopamine or isoprenaline until temporary pacing; urgent referral criteria; permanent pacing indications —
   CHB, advanced AV block, Mobitz II, sinus pauses > 3 s or HR < 40 awake with symptoms, syncope with BBB);
   ICMR/DHR STW Tachyarrhythmia (July 2024, paediatric: adenosine 100–200 mcg/kg rapid push with 5–10 mL flush, max 0.3 mg/kg; synchronised
   0.5–2 J/kg; defibrillation 2–4 J/kg; ECG during the arrhythmia);
   BCR topics 'SVT' (Bhutan Emergency booklet 2018 via app protocol: cardioversion narrow regular 50–100 J; child adenosine 0.1 mg/kg max 6 mg then
   0.2 mg/kg max 12 mg; modified Valsalva) and 'Bradycardia, heart block' (ECG course; atropine 1 mg used in AHA-style teaching).
   NEML 2025: adenosine 3 mg/mL (2 mL), atropine 0.6 mg/mL, amiodarone 50 mg/mL inj and 200 mg tab, diltiazem 5 mg/mL inj, verapamil 40 mg tab (no IV),
   metoprolol 25 mg tab (no IV), digoxin tab and inj, dopamine, magnesium sulfate 50%; isoprenaline not found. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
const F2 = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "arrhythmia-adult",
title: "SVT, VT & Bradycardia (Arrhythmias)",
subtitle: "Is the patient unstable? If yes — shock a fast rhythm or give atropine and pace a slow one. If stable — record a 12-lead ECG, then vagal manoeuvres and adenosine for regular narrow tachycardia, amiodarone for broad, and look for drugs, potassium and thyroid causes of slow rhythms",
age: "Adults (children's doses included)", specs: ["cardio", "emerg", "medicine", "paeds"],
keywords: ["arrhythmia", "SVT", "supraventricular tachycardia", "AVNRT", "WPW", "pre-excitation", "ventricular tachycardia", "VT", "broad complex tachycardia", "torsades de pointes", "bradycardia", "heart block", "complete heart block", "Mobitz II", "sick sinus", "adenosine", "atropine", "synchronised cardioversion", "transcutaneous pacing", "palpitations", "Valsalva"],
related: ["af-adult", "arrest-adult", "syncope-adult", "potassium-adult", "acs-adult", "cardiomyopathy-adult", "shock-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">For every abnormal rhythm ask two questions: <b>is the patient unstable</b> (shock, fainting with low BP, chest pain, severe heart failure), and <b>what does the 12-lead ECG show</b> (narrow or broad, regular or irregular, fast or slow) ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Fast + unstable</h4><p>Synchronised shock (up to 3) under sedation; then amiodarone 300 mg IV ${r(1)}.</p></div>
<div><h4>Narrow regular (SVT)</h4><p>Modified Valsalva → ${F2("adenosine", "adenosine")} 6 → 12 → 18 mg rapid IV push ${r(1)}.</p></div>
<div><h4>Broad regular</h4><p>Treat as VT: amiodarone 300 mg IV over 10–60 min, or shock ${r(1)}.</p></div>
<div><h4>Slow + unstable</h4><p>${dr("atropine")} 500 mcg IV, repeat to 3 mg; adrenaline infusion or pacing if no response or high asystole risk ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan Emergency booklet 2018 uses synchronised cardioversion at 50–100 J for narrow regular tachycardia ${r(5)}. NEML 2025 lists adenosine 6 mg/2 mL vials (18 mg = 3 vials), atropine 0.6 mg/mL, amiodarone injection, diltiazem injection, digoxin, dopamine and magnesium sulfate; <b>verapamil and metoprolol are tablets only and isoprenaline was not found</b> ${r(6)}. Temporary and permanent pacing are at JDWNRH; arrange early transfer for complete heart block ${LB.loc()}.</p>`)}
` },

{ id: "overview", title: "Rhythm types", html: `
${tbl(["Rhythm", "ECG", "Usual cause"], [
["Sinus tachycardia", "Normal P before each QRS; rate varies", "Fever, pain, bleeding, dehydration, sepsis, anaemia, thyroid — treat the cause, never 'cardiovert' " + r(1)],
["SVT (AVNRT, AVRT)", "Regular narrow QRS, often 150–250, P hidden", "Re-entry circuit; WPW " + r(1)],
["Atrial flutter", "Regular narrow, sawtooth waves, often 150 (2:1)", "Structural heart disease — adenosine unmasks waves " + r(3)],
["Atrial fibrillation", "Irregular narrow", "See " + P("af-adult", "AF")],
["Ventricular tachycardia", "Regular broad QRS (≥ 0.12 s)", "Old MI, cardiomyopathy " + r(1)],
["Torsades de pointes", "Polymorphic broad, twisting", "Long QT (drugs, low K/Mg) " + r(1)],
["Sinus node dysfunction", "Slow sinus, pauses > 3 s", "Age, drugs, hypothyroidism " + r(4)],
["AV block", "1st degree; Mobitz I; Mobitz II; complete (CHB)", "Drugs, inferior MI, hyperkalaemia, degeneration " + r(4)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Arrhythmia", [F.s("Re-entry, abnormal automaticity or conduction block"), F.a, F.d("Rate"), F.a, F.b([["Too fast", F.e("Short filling time → low output, ischaemia")], ["Too slow", F.e("Low output → dizziness, syncope, failure")]]), F.a, F.e("Instability → arrest")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "RCUK 2025", "Other sources used locally", "This guide"], [
["Atropine dose", "500 mcg, repeat to 3 mg", "1 mg every 3–5 min, max 3 mg (AHA-style teaching in the BCR topic)", "500 mcg–1 mg; NEML ampoule is 0.6 mg — give 1 ampoule, repeat to 3 mg " + r(2) + r(5) + " " + LB.loc()],
["Adenosine sequence", "6 → 12 → 18 mg", "6 → 12 → 12 mg (formulary in BCR)", "6 → 12 → 18 mg if needed " + r(1) + r(5)],
["Cardioversion energy (narrow regular)", "Synchronised, energy by device", "Bhutan booklet 50–100 J", "Start 50–100 J synchronised, escalate " + r(5)],
["Child adenosine", "—", "ICMR 100–200 mcg/kg (max 0.3 mg/kg); BCR 0.1 mg/kg (max 6 mg) then 0.2 mg/kg (max 12 mg)", "0.1 mg/kg then 0.2 mg/kg (max 12 mg) " + r(3) + r(5)]
])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul>
<li><b>ABCDE</b>; oxygen if SpO₂ under 94%; IV access; monitor ECG, BP, SpO₂ ${r(1)}.</li>
<li><b>Record a 12-lead ECG during the arrhythmia</b> (and after conversion) — it decides treatment and later ablation ${r(1)} ${r(3)}.</li>
<li><b>Life-threatening features</b>: shock, syncope with ongoing low BP, myocardial ischaemia, severe heart failure, immediately after ROSC ${r(1)} ${r(2)}.</li>
<li>Slow rhythms: ask about beta-blockers, calcium-channel blockers, digoxin, clonidine, lithium; kidney disease (hyperkalaemia); hypothyroidism; sleep apnoea ${r(4)}.</li>
<li>SVT: sudden onset and offset of palpitations, neck pounding; in infants poor feeding, sweating, heart failure ${r(3)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 26-year-old teacher in Bumthang has sudden pounding palpitations for 40 minutes; HR 190 regular, BP 110/70, no chest pain. ECG: regular narrow-complex tachycardia. <b>Stable SVT</b>: modified Valsalva (blow into a syringe for 15 s semi-recumbent, then lie flat with legs raised); if it fails, adenosine 6 mg rapid IV push with a 20 mL flush, then 12 mg, then 18 mg, recording the ECG ${r(1)} ${r(5)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Looks like", "Could be", "Clue"], [
["SVT", "Sinus tachycardia", "Gradual onset, a cause (fever, bleeding), rate varies " + r(1)],
["SVT", "Atrial flutter 2:1", "Rate about 150; adenosine reveals flutter waves " + r(3)],
["Broad-complex tachycardia", "SVT with bundle branch block", "Known BBB with same QRS; if unsure treat as VT " + r(1)],
["Irregular broad", "Pre-excited AF (WPW)", "Very fast, varying QRS — no adenosine, verapamil or digoxin " + r(1)],
["Bradycardia", "Hypothermia, raised ICP, hypoxia, athlete", "Context " + LB.exp("STANDARD TEACHING")]
])}
` },

{ id: "invest", title: "Investigations", html: `<ul><li>12-lead ECG (during and after) ${r(1)}.</li><li>Potassium, magnesium, calcium, glucose, creatinine, TSH; troponin if chest pain; drug levels (digoxin) ${r(4)}.</li><li>Echo for structural heart disease ${r(4)}.</li><li>Holter or event monitoring for intermittent symptoms ${r(4)}.</li></ul>` },

{ id: "staging", title: "Arrhythmia helper", html: `<div class="calc" data-calc="arrhyplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>Tachyarrhythmia — unstable</h3>
<ul><li>Synchronised shock, up to 3 attempts, with sedation or anaesthesia if conscious; then amiodarone 300 mg IV over 10–20 min and repeat the shock ${r(1)}.</li></ul>
<h3>Tachyarrhythmia — stable</h3>
<ul>
<li><b>Narrow regular (SVT):</b> vagal manoeuvres → adenosine 6 mg rapid IV bolus, then 12 mg, then 18 mg (not if pre-excitation) → verapamil or a beta-blocker (not both) → synchronised shock ${r(1)}. NEML has diltiazem injection as the IV rate-limiting option ${r(6)} ${LB.exp("DILTIAZEM FOR SVT")}.</li>
<li><b>Narrow irregular (AF):</b> rate control — EF over 40%: beta-blocker, verapamil, diltiazem or digoxin; EF under 40%: beta-blocker or digoxin; anticoagulate if over 24 hours ${r(1)}. See ${P("af-adult", "AF")}.</li>
<li><b>Broad regular (VT):</b> amiodarone 300 mg IV over 10–60 min, then 900 mg over 24 h (or procainamide); shock if drugs fail ${r(1)}.</li>
<li><b>Torsades:</b> magnesium 8 mmol (2 g) IV over 10 min; isoprenaline or pacing to raise the rate; avoid amiodarone; correct potassium; stop QT-prolonging drugs ${r(1)}.</li>
<li><b>Pre-excited AF:</b> procainamide or cardioversion — avoid AV-node blockers ${r(1)}.</li>
</ul>
<h3>Bradyarrhythmia</h3>
<ul>
<li>Life-threatening features: ${dr("atropine")} 500 mcg IV, repeat to a maximum of 3 mg ${r(2)}.</li>
<li>No response, or <b>risk of asystole</b> (recent asystole, Mobitz II, complete block with broad QRS, pause over 3 s): adrenaline 2–10 mcg/min IV, isoprenaline 5 mcg/min, or ${dr("dopamine")}; transcutaneous pacing; arrange transvenous pacing ${r(2)} ${r(4)}.</li>
<li>Beta-blocker or calcium-channel blocker overdose: glucagon; hyperkalaemia: calcium gluconate 10 mL of 10% over 10 min, insulin–glucose ${r(2)} ${r(4)}. See ${P("potassium-adult", "Potassium")}.</li>
<li>Stop the offending drug ${r(4)}.</li>
<li><b>Permanent pacing</b> (refer): complete or advanced AV block, Mobitz II, symptomatic sinus pauses over 3 s or awake HR under 40, unexplained syncope with bundle branch block ${r(4)}.</li>
</ul>
<h3>Children</h3>
<ul>
<li>SVT: vagal manoeuvres (ice to face in infants); adenosine 0.1 mg/kg (max 6 mg) then 0.2 mg/kg (max 12 mg) rapid push through a proximal line with a 5–10 mL flush ${r(3)} ${r(5)}.</li>
<li>Unstable: synchronised shock 0.5–1 J/kg, then 2 J/kg ${r(3)} ${r(5)}.</li>
<li>Bradycardia in children is usually hypoxia — oxygenate and ventilate first ${LB.exp("PAEDIATRIC LIFE SUPPORT")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "NEML 2025"], [
[F2("adenosine", "Adenosine"), "Adult 6 → 12 → 18 mg rapid IV; child 0.1 → 0.2 mg/kg (max 12 mg) " + r(1) + r(5), "3 mg/mL, 2 mL " + r(6)],
[dr("amiodarone_iv", "Amiodarone"), "300 mg IV over 10–60 min, then 900 mg/24 h " + r(1), "50 mg/mL inj; 200 mg tab " + r(6)],
[dr("atropine"), "500 mcg IV, repeat to 3 mg " + r(2), "0.6 mg/mL " + r(6)],
[dr("magnesium_sulfate"), "8 mmol (2 g) IV over 10 min (torsades) " + r(1), "50% " + r(6)],
[F2("diltiazem", "Diltiazem"), "IV for rate control/SVT (specialist dosing) " + LB.exp("DOSE"), "5 mg/mL inj " + r(6)],
[F2("verapamil", "Verapamil"), "IV in RCUK algorithm " + r(1), "40 mg tab only " + r(6)],
[dr("digoxin"), "AF rate control " + r(1), "Tab, inj " + r(6)],
[dr("dopamine"), "Bradycardia bridge to pacing " + r(4), "40 mg/mL " + r(6)],
[dr("calcium_gluconate"), "10 mL 10% over 10 min (hyperkalaemia) " + r(4), "Yes"]
])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Asthma:</b> adenosine can cause bronchospasm — use with care or choose verapamil/diltiazem ${r(5)}.</li><li><b>Heart transplant or dipyridamole:</b> lower adenosine dose ${LB.exp("STANDARD TEACHING")}.</li><li><b>Pregnancy:</b> adenosine and cardioversion are safe; avoid amiodarone where possible ${LB.exp("STANDARD PRACTICE")}.</li><li><b>Infants:</b> prolonged SVT causes heart failure ${r(5)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["SVT recurs immediately after adenosine", "Verapamil/diltiazem or beta-blocker; expert help " + r(1)],
["Broad complex, unsure if VT", "Treat as VT " + r(1)],
["Complete heart block at a district hospital", "Atropine, adrenaline infusion, transcutaneous pacing pads; urgent transfer to JDWNRH " + r(2) + " " + LB.loc()],
["Bradycardia with peaked T waves", "Hyperkalaemia — calcium gluconate first " + r(4)],
["No ECG machine", "Record the monitor on a phone video (ICMR advice) " + r(3)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Cardiac arrest, syncope and injury, heart failure (tachycardia-induced cardiomyopathy — see ${P("cardiomyopathy-adult", "Cardiomyopathy")}), stroke (AF/flutter), adenosine-induced brief asystole and bronchospasm, amiodarone hypotension ${r(1)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Refer recurrent SVT or WPW on the resting ECG to cardiology (ablation) ${r(5)}.</li><li>Teach the modified Valsalva for future episodes ${r(5)}.</li><li>Pacemaker clinic follow-up; review drugs that slow the heart ${r(4)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed ECG image used here; see ${P("af-adult", "AF")} for an ECG of atrial fibrillation.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Abnormal rhythm", [F.s("ABCDE, O₂ if SpO₂ < 94%, IV, 12-lead ECG"), F.a, F.d("Life-threatening features?"), F.a, F.b([["Fast + yes", F.e("Synchronised shock ×3 → amiodarone")], ["Slow + yes", F.e("Atropine 500 mcg → adrenaline / pacing")], ["No", F.s("Classify on ECG")]]), F.a, F.ok("Narrow regular: Valsalva → adenosine 6/12/18; broad regular: amiodarone; slow: find the cause, refer for pacing if indicated")])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Slow adenosine through a hand vein", "Metabolised before it reaches the heart", "Rapid push, proximal vein, fast flush " + r(3)],
["Verapamil for broad-complex tachycardia", "Collapse if VT", "Treat broad as VT " + r(1)],
["Adenosine or verapamil in pre-excited AF", "VF", "Procainamide or shock " + r(1)],
["Relying on atropine in broad-QRS complete block", "Often fails", "Pads on early, adrenaline, pacing " + r(2)],
["No ECG recorded during the arrhythmia", "Lost diagnosis", "Always record " + r(3)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Adenosine sequence in adult SVT (RCUK 2025)?", "6 mg, then 12 mg, then 18 mg rapid IV bolus.")}
${qa("Intern/MO", "Atropine dose for unstable bradycardia (RCUK)?", "500 mcg IV, repeated to a maximum of 3 mg.")}
${qa("Registrar", "Features that predict asystole?", "Recent asystole, Mobitz II, complete heart block with broad QRS, ventricular pause over 3 s.")}
${qa("Registrar", "Torsades de pointes treatment?", "Magnesium 8 mmol IV over 10 min; raise rate (isoprenaline/pacing); avoid amiodarone; correct K.")}
${qa("Specialist", "Permanent pacing indications (ICMR)?", "Complete/advanced AV block, Mobitz II, symptomatic sinus pauses > 3 s or awake HR < 40, unexplained syncope with BBB.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Resuscitation Council UK. Adult tachyarrhythmia algorithm (2025 Guidelines, version 3, March 2026). <a href="https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-advanced-life-support-guidelines" target="_blank" rel="noopener">resus.org.uk</a></li>
<li id="ref-2">Resuscitation Council UK. Adult bradyarrhythmia algorithm (2025 Guidelines).</li>
<li id="ref-3">Indian Council of Medical Research / Department of Health Research. Standard Treatment Workflow: Tachyarrhythmia (paediatric). July 2024.</li>
<li id="ref-4">Indian Council of Medical Research / Department of Health Research. Standard Treatment Workflow: Bradyarrhythmias in symptomatic patients. January 2025.</li>
<li id="ref-5">Ministry of Health, Bhutan. Emergency Medicine Clinical Guidelines booklet 2018 (via the Bhutan Clinical Reference SVT and bradycardia topics).</li>
<li id="ref-6">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["RCUK 2025 algorithms", "<span class='pass'>Read</span>", "PDFs, 27 Nov 2026"], ["ICMR STWs (brady 2025, tachy 2024)", "<span class='pass'>Read</span>", "Library PDFs"], ["Bhutan EM booklet", "<span class='unv'>Indirect</span>", "Via BCR topics"], ["Atropine/adenosine dose conflicts", "<span class='flag'>Shown</span>", "RCUK vs local teaching"], ["NEML 2025", "<span class='flag'>Gap</span>", "No IV verapamil/metoprolol, no isoprenaline"], ["Calculator", "<span class='pass'>New</span>", "arrhyplan"]], "qc")}` }
]
});
})();
