/* Acute coronary syndromes (myocardial infarction and unstable angina) — adults */
registerPage({
id: "acs-adult",
title: "Acute Coronary Syndromes — Adults",
subtitle: "STEMI, NSTEMI and unstable angina: the first ten minutes, reperfusion, antithrombotic therapy and secondary prevention",
age: "Adults", specs: ["cardio", "medicine", "emerg"],
keywords: ["acute coronary syndrome", "ACS", "myocardial infarction", "heart attack", "MI", "STEMI", "NSTEMI", "NSTE-ACS", "unstable angina", "angina", "chest pain", "troponin", "high-sensitivity troponin", "thrombolysis", "fibrinolysis", "tenecteplase", "streptokinase", "primary PCI", "angioplasty", "aspirin", "clopidogrel", "ticagrelor", "prasugrel", "enoxaparin", "heparin", "statin", "atorvastatin", "metoprolol", "nitrate", "GTN", "isosorbide", "HEART score", "TIMI score", "GRACE score", "Killip", "cardiogenic shock", "right ventricular infarction", "ischaemic heart disease", "ischemic heart disease", "coronary artery disease"],
related: ["hf-adult", "dm-adult", "ckd-adult"],
updated: "22 Nov 2026", review: "Nov 2027 (or sooner if ESC or ACC/AHA publish a new ACS guideline)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In a heart attack, heart muscle dies by the minute. Everything in this chapter serves two aims: find the patient whose artery is blocked and open it fast, and stop the next clot forming.</p>
<div class="glance">
<div><h4>First 10 minutes</h4><p><b>12-lead ECG within 10 minutes</b> of arrival. Monitor, IV access, bloods including <b>troponin</b>. Oxygen only if SpO₂ is below 90%.</p></div>
<div><h4>Give at once</h4><p>${dr("aspirin_acs", "Aspirin")} 300 mg chewed + ${dr("atorvastatin_hi", "atorvastatin")} 80 mg. Use a ${dr("nitrate_sl", "sublingual nitrate")} for pain if SBP is over 90. Give ${dr("morphine", "morphine")} with ${dr("metoclopramide", "metoclopramide")} only if the pain persists.</p></div>
<div><h4>STEMI: open the artery</h4><ul><li>Primary PCI if it can be done <b>within 120 min</b></li><li>Otherwise ${dr("tenecteplase", "tenecteplase")} <b>within 10 min</b> of diagnosis (symptoms under 12 h), then transfer</li></ul></div>
<div><h4>NSTEMI / unstable angina</h4><p>Serial hs-troponin, ${dr("enoxaparin", "enoxaparin")} or ${dr("heparin_ufh", "heparin")}, and a second antiplatelet. Score risk with <b>GRACE</b> and refer for angiography.</p></div>
<div><h4>Two antiplatelets</h4><p>Aspirin + a P2Y12 inhibitor (${dr("ticagrelor", "ticagrelor")} or ${dr("prasugrel", "prasugrel")} preferred; ${dr("clopidogrel", "clopidogrel")} with fibrinolysis or where the others are unavailable) for <b>12 months</b>.</p></div>
<div><h4>Red flags</h4><ul><li>Hypotension, cold peripheries (shock)</li><li>Pulmonary oedema</li><li>VT/VF, complete heart block</li><li>New murmur (mechanical complication)</li></ul></div>
<div><h4>For life</h4><p>Aspirin, high-intensity statin, a ${dr("metoprolol", "beta-blocker")} (essential if LVEF ≤40%), an ${dr("enalapril", "ACE inhibitor")}, no smoking, and cardiac rehabilitation.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 (§2.1) asks for <b>absolute bed rest, oxygen, aspirin 300 mg stat, a high-dose statin 40–80 mg stat, morphine 5–10 mg IV and metoclopramide 10 mg IV if required, then referral</b>. NEML 2025 replaced streptokinase with <b>tenecteplase</b> (down to district hospital level). The JDWNRH Heart Centre in Thimphu has had a catheterisation laboratory since September 2023, providing angiography and angioplasty${r(21)}. Ticagrelor and prasugrel are <b>not</b> on NEML 2025, and atorvastatin is listed only as a 10 mg tablet, so an 80 mg dose is <b>eight tablets</b>.${r(1, 3)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What an acute coronary syndrome is, and who gets it", html: `
<h3>One disease, three labels</h3>
<p>Acute coronary syndrome (ACS) is the sudden loss of blood flow to part of the heart muscle, nearly always because an atherosclerotic plaque has cracked and a clot has formed on it. The three labels describe how complete the blockage is and whether muscle has died. They are not separate diseases.</p>
${tbl(["Type", "ECG", "Troponin", "What is happening in the artery", "What it demands"], [
["<b>STEMI</b> (ST-elevation MI)", "Persistent ST elevation (or new LBBB with symptoms, or a STEMI equivalent)", "Rises (but do not wait for it)", "Usually complete, persistent occlusion: full-thickness injury in progress", "Immediate reperfusion: primary PCI or fibrinolysis"],
["<b>NSTEMI</b> (non-ST-elevation MI)", "ST depression, T inversion, or normal", "Raised above the 99th percentile with a rise or fall", "Partial or intermittent occlusion; muscle death, usually subendocardial", "Antithrombotic treatment, risk scoring, angiography within 24–72 h"],
["<b>Unstable angina</b>", "As NSTEMI, or normal", "Normal (no rise)", "Ischaemia without muscle death", "As NSTEMI, but lower risk; increasingly rare with high-sensitivity troponin"]])}
<p>The <b>Fourth Universal Definition</b> calls it myocardial infarction when troponin rises and/or falls with at least one value above the 99th percentile of normal, <b>plus</b> evidence of ischaemia: symptoms, new ischaemic ECG changes, new Q waves, imaging showing new loss of viable muscle, or a coronary thrombus at angiography${r(7)}.</p>
${tbl(["MI type", "Mechanism", "Example"], [
["Type 1", "Plaque rupture or erosion with thrombus", "The classic heart attack, and the subject of this chapter"],
["Type 2", "Oxygen supply–demand mismatch without plaque rupture", "Severe anaemia, sepsis, fast AF, hypotension or hypoxia in someone with stable coronary disease"],
["Types 3–5", "Sudden cardiac death before troponin; after PCI; after CABG", "Specialist definitions"]])}
<p>Type 2 MI is treated by fixing the cause (the anaemia, the sepsis, the arrhythmia), <b>not</b> by fibrinolysis or a rush to the catheter laboratory.</p>

<h3>Who gets it in South Asia</h3>
<ul>
<li>Ischaemic heart disease is the leading cause of death worldwide. South Asians develop it <b>about a decade younger</b> than Europeans. In the Indian CREATE registry, patients were younger and more often had STEMI, and poorer patients were less likely to receive reperfusion${r(17)}.</li>
<li>The risk factors are the familiar ones: <b>smoking, diabetes, hypertension, high LDL cholesterol, central obesity, physical inactivity</b> and a family history of early disease. In Bhutan, chewing tobacco and alcohol add to the burden, and diabetes is rising quickly.</li>
<li>Women, older people and people with diabetes more often present <b>without classic chest pain</b>, with breathlessness, fatigue, nausea or epigastric discomfort. They are diagnosed later and die more often.</li></ul>
${box("amber", "Evidence gap", `<p>We could not find a published national figure for the incidence of ACS in Bhutan. The PEN programme and STG treat ischaemic heart disease as a priority non-communicable disease, but local outcome data (time to reperfusion, mortality) are not yet published. <span class="lbl l-draft">NOT VERIFIED</span></p>`)}
` },

{ id: "patho", title: "Pathophysiology: why time is muscle", html: `
${F.chart("From plaque to infarct, and where each treatment acts", [
F.s("<b>Years of risk factors</b>: smoking, diabetes, high LDL, hypertension → lipid-rich, inflamed plaque with a thin cap"), F.a,
F.e("<b>Plaque ruptures or erodes</b>"), F.a,
F.b([["Platelets", F.s("Adhere, activate, release thromboxane and ADP"), F.ok("Blocked by <b>aspirin</b> and <b>P2Y12 inhibitors</b>")], ["Coagulation", F.s("Thrombin turns fibrinogen into fibrin"), F.ok("Blocked by <b>heparin / enoxaparin</b>")]]), F.a,
F.d("How complete is the blockage?"), F.a,
F.b([["Complete, persistent", F.e("<b>STEMI</b>: transmural injury spreading by the minute"), F.ok("<b>Reperfusion</b>: primary PCI or tenecteplase")], ["Partial / intermittent", F.s("<b>NSTEMI</b> (troponin rises) or <b>unstable angina</b> (no rise)"), F.ok("Antithrombotics + angiography by risk")]]), F.a,
F.s("<b>Infarcted muscle</b> → arrhythmia (VF), pump failure, rupture; later remodelling → heart failure"), F.a,
F.ok("<b>Secondary prevention</b>: statin stabilises plaque; beta-blocker, ACEi, MRA limit remodelling")])}
<h3>From plaque to infarct</h3>
<ol class="chain">
<li><b>A vulnerable plaque</b> builds up silently over years: a lipid-rich core under a thin fibrous cap, inflamed by macrophages. It often narrows the artery by less than 70%, so it caused no angina beforehand.</li>
<li><b>The cap ruptures or erodes.</b> Blood meets the thrombogenic core, and platelets stick, activate and clump together, releasing thromboxane and ADP that recruit more platelets. That is why <b>aspirin</b> (which blocks thromboxane) and <b>P2Y12 inhibitors</b> (which block ADP) work.</li>
<li><b>The coagulation cascade adds fibrin</b>, turning the platelet plug into a stable clot. That is why an <b>anticoagulant</b> (heparin, enoxaparin) is added.</li>
<li><b>The clot either blocks the artery completely</b> (usually STEMI) or partially and intermittently, with fragments embolising downstream (NSTEMI/unstable angina).</li>
<li><b>Muscle dies in a wave</b> from the inner wall (subendocardium) outwards. Most of the salvageable muscle is lost in the first 2–3 hours, and very little remains after 12 hours. That is why every minute of delay to reperfusion matters, and why fibrinolysis is most effective when given early.</li></ol>
<p class="qn">Background pathophysiology paraphrased from standard texts.${r(20)}</p>
<h3>What a large infarct leads to</h3>
<p>A big infarct leaves a weak, thinned, scarred ventricle. Early on this means pump failure, shock and electrical instability (VF is the main cause of early death, often before the patient reaches hospital). Later the ventricle remodels and dilates, leading to chronic heart failure. Beta-blockers, ACE inhibitors and mineralocorticoid antagonists limit this remodelling, which is why they matter most when the LVEF is low (see the ${'<a href="#/d/hf-adult">heart failure chapter</a>'}).</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
<p>Bhutan's guidance is written for first-contact care and referral; the international guidelines assume a PCI network. Read the differences as <b>where you are in the system</b>, not as disagreement about the science.${r(1, 2, 3, 4, 5, 6)}</p>
${tbl(["Topic", "Bhutan (STG 2024 / PEN / NEMF)", "India (ICMR STW)", "ESC 2023", "ACC/AHA 2025", "This guide follows"], [
["Aspirin loading", "300 mg stat", "325 mg, then 75 mg", "150–300 mg oral", "162–325 mg", "300 mg chewed (matches Bhutan and sits inside every range)"],
["P2Y12 inhibitor", "Not specified in STG; clopidogrel is the only NEML option", "Clopidogrel 300 mg or prasugrel 60 mg; ticagrelor in NSTEMI", "Prasugrel or ticagrelor preferred; clopidogrel with lysis or high bleeding risk", "Ticagrelor or prasugrel first-line; clopidogrel if neither possible", "Ticagrelor/prasugrel where available; otherwise clopidogrel (600 mg before PCI; 300 mg/75 mg with lysis)"],
["Fibrinolytic and window", "Tenecteplase; NEMF monograph says within 6 h", "Fibrinolysis if PCI not possible within 120 min", "Within 12 h if PCI cannot happen within 120 min; half dose if age ≥75", "Within 12 h if PCI delay over 120 min", "<b>12 h</b> (strongest evidence before 6 h); half dose at ≥75"],
["Angiography after lysis", "Refer", "3–24 h after successful lysis", "2–24 h; rescue PCI if failed", "Within 24 h (routine); rescue if failed", "Transfer every lysed patient to the JDWNRH Heart Centre: urgently if failed, within 24 h if successful"],
["NSTE-ACS timing", "Refer", "Refer high/intermediate risk (GRACE/TIMI) to a PCI centre", "Immediate (<2 h) if very high risk; consider <24 h if high risk (GRACE >140, confirmed NSTEMI, dynamic ST); otherwise during the admission", "Invasive strategy during admission; earlier for high risk", "ESC timing, using GRACE"],
["Statin", "High-dose statin 40–80 mg stat", "Atorvastatin 80 mg or rosuvastatin 20–40 mg", "High-intensity; LDL-C <1.4 mmol/L (55 mg/dL)", "High-intensity; add non-statin if LDL-C ≥70 mg/dL", "Atorvastatin 80 mg; ESC LDL target"],
["Oxygen", "Oxygen for all", "If hypoxic", "Only if SpO₂ <90%", "Only if SpO₂ <90%", "Only if SpO₂ <90% (routine oxygen gives no benefit)"],
["Morphine", "5–10 mg IV if required", "For pain", "May be considered (slows oral P2Y12 absorption)", "Reasonable for refractory pain", "Small titrated IV doses only for pain unrelieved by nitrates"],
["Long-term beta-blocker", "Atenolol 50–100 mg ≥1 year (PEN)", "Metoprolol", "Recommended if LVEF ≤40%", "Recommended if LVEF ≤40%; reconsider at 1 year if EF preserved", "Metoprolol/bisoprolol; essential if LVEF ≤40% (atenolol is no longer on NEML)"]])}
${box("blue", "Why the oxygen advice changed", `<p>Large trials (AVOID, DETO2X) showed that giving oxygen to non-hypoxic patients with suspected MI does not reduce death and may enlarge the infarct through coronary vasoconstriction. Give it when SpO₂ is below 90% or the patient is in heart failure or shock. ${LB.int()}</p>`)}
${box("bt", "Bhutan adaptation: the fibrinolysis window", `<p>The NEMF tenecteplase monograph says 'STEMI within 6 hours'. ESC and ACC/AHA allow up to 12 hours when PCI cannot be done in time, because a patient at 7–12 hours with ongoing pain and ST elevation still has salvageable muscle. The earlier, the better: benefit is greatest in the first 2–3 hours. This guide uses <b>12 hours</b>, and asks you to discuss patients at 6–12 hours with the Heart Centre if possible. ${LB.loc()}</p>`)}
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>The history makes the diagnosis more often than any test. Listen to the patient's own words and do not let a normal first ECG reassure you.</p>
${tbl(["Feature", "Typical", "What it tells you"], [
["Character", "Pressure, tightness, heaviness, squeezing, choking; patients often clench a fist on the chest (Levine's sign)", "Ischaemic pain is visceral and hard to describe. Sharp, stabbing, positional or pinpoint pain is less likely to be cardiac"],
["Site and radiation", "Central or retrosternal; to the jaw, neck, either arm (especially both), back or epigastrium", "Radiation to both arms is among the strongest clues"],
["Duration", "More than 20 minutes at rest suggests MI or unstable angina", "Seconds-long jabs, or pain lasting days, are rarely ischaemic"],
["Triggers", "Exertion or emotion (angina); at rest or waking from sleep (ACS)", "Pain at rest, or new or rapidly worsening angina, means unstable"],
["Associated", "Sweating, nausea, vomiting, breathlessness, light-headedness, a sense of doom", "Sweating with chest pain should be treated as MI until proven otherwise"],
["Atypical", "Breathlessness, fatigue, epigastric pain, syncope or confusion alone", "Common in women, older people, people with diabetes and CKD"]])}
<h3>Examination</h3>
<p>It is often normal, which is why the ECG and troponin matter. Look for:</p>
<ul>
<li><b>Signs of heart failure:</b> basal crackles, a third heart sound, raised JVP. Grade them with the <b>Killip class</b> (below), which strongly predicts death.</li>
<li><b>Shock:</b> SBP below 90, cold clammy skin, confusion, poor urine output.</li>
<li><b>Right ventricular infarction</b> (with inferior STEMI): hypotension with a raised JVP and <b>clear lungs</b>.</li>
<li><b>A new murmur:</b> mitral regurgitation from papillary muscle rupture, or a ventricular septal rupture. This is a surgical emergency.</li>
<li><b>Clues to other diagnoses:</b> unequal arm pulses or BPs (aortic dissection), a pericardial rub, unilateral reduced breath sounds (pneumothorax).</li></ul>
${tbl(["Killip class", "Findings", "Approximate early mortality (historical)"], [
["I", "No heart failure", "About 6%"],
["II", "Crackles in the lower lung fields, S3, or raised JVP", "About 17%"],
["III", "Frank pulmonary oedema", "About 38%"],
["IV", "Cardiogenic shock", "About 80% in the original 1967 series; still 40–50% today"]])}
${box("red", "Red flags: act now and get senior help", `<ul>
<li>ST elevation, new LBBB with symptoms, or ST depression in V1–V3 with tall R waves (posterior MI).</li>
<li>Hypotension, shock, pulmonary oedema (Killip III–IV).</li>
<li>VT, VF, or complete heart block.</li>
<li>Ongoing pain despite treatment.</li>
<li>A new murmur, or sudden deterioration on day 2–7 (rupture).</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis: the chest pains you must not miss", html: `
${tbl(["Diagnosis", "Supports it", "Argues against ACS", "Best test to separate"], [
["<b>Aortic dissection</b>", "Tearing pain radiating to the back, maximal at onset; pulse or BP difference between arms; hypertension; Marfan habitus; new aortic regurgitation", "ECG may be normal or show inferior STEMI if the dissection involves the right coronary artery", "CT aortogram; bedside echo. <b>Never thrombolyse until dissection is reasonably excluded</b>"],
["<b>Pulmonary embolism</b>", "Pleuritic pain, breathlessness, tachycardia, hypoxia, leg swelling, risk factors", "S1Q3T3, right-heart strain, sinus tachycardia; troponin can rise modestly", "CT pulmonary angiography; Wells score with D-dimer"],
["<b>Acute pericarditis</b>", "Sharp pain, worse lying flat and better sitting forward; recent viral illness; rub", "Widespread concave ST elevation with PR depression, no reciprocal changes", "ECG pattern; echo for effusion"],
["<b>Myocarditis</b>", "Young patient, recent viral illness, heart failure or arrhythmia", "Troponin raised but coronaries normal", "Cardiac MRI; angiography to exclude MI"],
["<b>Tension pneumothorax</b>", "Sudden pleuritic pain, absent breath sounds, tracheal shift", "Normal ECG", "Clinical; chest X-ray if stable"],
["<b>Oesophageal rupture / reflux / spasm</b>", "Vomiting before pain (rupture); burning, related to meals (reflux)", "Normal serial ECG and troponin", "Serial troponin; CT if rupture suspected"],
["<b>Takotsubo cardiomyopathy</b>", "Older woman after emotional stress; ST elevation; apical ballooning", "Unobstructed coronaries at angiography", "Angiography + echo"],
["<b>Musculoskeletal pain</b>", "Reproducible tenderness, pain on movement", "Normal ECG, normal troponin", "Diagnosis of exclusion; do not stop at a tender chest wall in a high-risk patient"]])}
<h3>A typical case</h3>
<p>A 52-year-old man who smokes and has diabetes arrives at a district hospital with 90 minutes of crushing central chest pain and sweating. The ECG shows 3 mm ST elevation in II, III and aVF with ST depression in I and aVL. This is an <b>inferior STEMI</b>. Before anything else, record V4R: if there is ST elevation there, the right ventricle is involved and nitrates are dangerous. If primary PCI cannot happen within 120 minutes, he needs tenecteplase now, with aspirin, clopidogrel 300 mg and enoxaparin, then transfer.</p>
` },

{ id: "invest", title: "Investigations: the ECG and troponin", html: `
<h3>The ECG: within 10 minutes, repeated often</h3>
${tbl(["Finding", "Criteria (Fourth Universal Definition / ESC 2023)", "Meaning"], [
["<b>STEMI</b>", "New ST elevation at the J point in 2 contiguous leads: <b>≥1 mm in all leads except V2–V3</b>; in V2–V3 <b>≥2 mm in men 40 or over, ≥2.5 mm in men under 40, ≥1.5 mm in women</b>", "Reperfusion now"],
["<b>Posterior MI</b>", "ST depression in V1–V3 (often with tall R waves); confirm with ST elevation ≥0.5 mm in V7–V9", "A STEMI equivalent; treat as STEMI"],
["<b>Right ventricular MI</b>", "ST elevation ≥1 mm in V4R (with inferior STEMI)", "Give fluids; avoid nitrates and diuretics"],
["<b>LBBB or paced rhythm</b>", "Use Sgarbossa criteria; new LBBB with ongoing ischaemic symptoms is treated as STEMI", "Discuss urgently with the Heart Centre"],
["<b>Left main / multivessel ischaemia</b>", "ST depression ≥1 mm in 8 or more leads with ST elevation in aVR (and/or V1)", "Very high risk; immediate angiography"],
["<b>De Winter T waves; Wellens pattern</b>", "Upsloping ST depression with tall T waves in V1–V6 (proximal LAD occlusion); deep T inversion in V2–V3 after pain (critical LAD stenosis)", "STEMI equivalent (de Winter); urgent angiography, avoid stress testing (Wellens)"],
["<b>NSTE-ACS</b>", "ST depression ≥0.5 mm, T-wave inversion, or a normal ECG", "Serial troponin; risk score"]])}
<p class="qn">Criteria from the Fourth Universal Definition and ESC 2023.${r(7, 4)}</p>
<p>Leads tell you the territory: <b>II, III, aVF</b> inferior (right coronary artery, sometimes circumflex); <b>V1–V4</b> anterior/septal (LAD); <b>I, aVL, V5–V6</b> lateral (circumflex or diagonal). Reciprocal ST depression supports a true STEMI.</p>
${box("amber", "A normal first ECG does not exclude MI", `<p>Repeat the ECG every 15–30 minutes while pain continues, and whenever symptoms change. Record V7–V9 and V4R when the standard leads are unclear.</p>`)}

<h3>Troponin</h3>
<ul>
<li><b>High-sensitivity troponin (hs-cTn) is the test of choice.</b> ESC recommends the <b>0/1-hour</b> algorithm (or 0/2 h) with assay-specific cut-offs, so the local laboratory's values must be used.</li>
<li>A <b>rise and/or fall</b> matters more than a single value. Chronic elevation occurs in CKD, heart failure and old age; a dynamic change points to acute injury.</li>
<li>In primary care, PEN 2011 allows a <b>qualitative troponin T strip</b>: MI is diagnosed by any two of typical symptoms, a positive strip and a diagnostic ECG${r(2)}. A negative strip in the first 3–6 hours does not exclude MI.</li>
<li><b>Never delay reperfusion in STEMI to wait for troponin.</b></li></ul>
${tbl(["Other test", "Why"], [
["Full blood count", "Anaemia (Type 2 MI, bleeding risk); platelets before antithrombotics"],
["Creatinine, electrolytes", "Enoxaparin and contrast dosing; potassium and magnesium (arrhythmias)"],
["Glucose, HbA1c", "Diabetes is common and often undiagnosed; hyperglycaemia worsens outcome"],
["Lipid profile (within 24 h)", "Baseline for statin targets"],
["Chest X-ray", "Pulmonary oedema; wide mediastinum (dissection); other causes"],
["<b>Echocardiography</b>", "LV function (sets long-term therapy), wall-motion abnormality, mechanical complications, pericardial effusion, RV infarction; essential in shock or a new murmur"],
["Coronary angiography", "Defines anatomy and allows PCI; the definitive test"]])}
` },

{ id: "staging", title: "Risk scores: who needs what, and how fast", html: `
<p>In STEMI, no score is needed: the ECG decides. In suspected NSTE-ACS, scores help decide who can go home, who needs admission, and how quickly to arrange angiography. They support the clinician's judgement but never replace it.${r(12, 13, 14, 4)}</p>
<h3>1. Undifferentiated chest pain: HEART score</h3>
<div class="calc" data-calc="heart"></div>
<h3>2. Confirmed NSTE-ACS: GRACE score (preferred by ESC)</h3>
<div class="calc" data-calc="grace"></div>
<h3>3. Unstable angina / NSTEMI: TIMI score</h3>
<div class="calc" data-calc="timi"></div>
<h3>Timing of angiography in NSTE-ACS (ESC 2023)</h3>
${tbl(["Risk group", "Features", "Angiography"], [
["<b>Very high</b>", "Haemodynamic instability or cardiogenic shock; recurrent or refractory pain despite treatment; life-threatening arrhythmia or cardiac arrest; mechanical complication; acute heart failure from ischaemia; recurrent dynamic ST changes, especially intermittent ST elevation", "<b>Immediate: within 2 hours</b> (treat like STEMI; transfer now)"],
["<b>High</b>", "Confirmed NSTEMI by hs-troponin algorithm; dynamic ST/T changes; transient ST elevation; <b>GRACE over 140</b>", "<b>Early: consider within 24 hours</b>"],
["<b>Not high risk</b>", "None of the above, but ACS suspected", "During this admission (inpatient), or selective after non-invasive testing"]])}
${box("bt", "Bhutan: who to transfer, and when", `<p>Outside Thimphu, every confirmed STEMI and every <b>very-high-risk</b> NSTE-ACS should be discussed immediately with the JDWNRH Heart Centre and transferred. High-risk NSTE-ACS (for example GRACE over 140) should be transferred within 24 hours. Lower-risk patients can be stabilised on antithrombotic therapy and referred for planned angiography. Air or road transfer times differ greatly between dzongkhags, so agree the plan by phone before moving the patient. Whether primary PCI is available around the clock was not verified. ${LB.loc()} <span class="lbl l-draft">NOT VERIFIED</span></p>`)}
` },

{ id: "manage", title: "Management", html: `
<h3>A. Immediate care for every suspected ACS</h3>
${box("red", "The first 10 minutes", `<ol>
<li><b>12-lead ECG within 10 minutes</b> of first medical contact; continuous cardiac monitoring with a defibrillator nearby.</li>
<li><b>IV access</b>; bloods (troponin, FBC, creatinine, electrolytes, glucose, lipids).</li>
<li><b>${dr("aspirin_acs", "Aspirin 300 mg")}</b> chewed (unless truly allergic).</li>
<li><b>Oxygen only if SpO₂ is below 90%</b> (target 94–98%; 88–92% in COPD with CO₂ retention).</li>
<li><b>${dr("nitrate_sl", "Sublingual nitrate")}</b> (ISDN 5 mg or GTN 0.4 mg) for pain if SBP is over 90 mmHg and there is <b>no RV infarction</b> and no recent sildenafil.</li>
<li><b>${dr("morphine", "Morphine")}</b> 2.5–5 mg IV, titrated, with ${dr("metoclopramide", "metoclopramide")} 10 mg IV, only for pain not relieved by nitrates.</li>
<li><b>${dr("atorvastatin_hi", "Atorvastatin 80 mg")}</b> as early as possible.</li>
<li>Decide: <b>STEMI or not?</b></li></ol>`)}

<h3>B. STEMI: reperfusion</h3>
${F.chart("Choosing reperfusion in STEMI", [
F.s("ECG: STEMI or STEMI equivalent, symptoms under 12 hours"), F.a,
F.d("Can primary PCI be done within 120 minutes of diagnosis?"), F.a,
F.b([["Yes", F.ok("Transfer now for <b>primary PCI</b> (target wire crossing within 60–90 min). Load aspirin; P2Y12 inhibitor per the PCI team; UFH in the lab")], ["No", F.s("<b>Tenecteplase within 10 minutes</b> of diagnosis (half dose if age ≥75) + aspirin + clopidogrel 300 mg (75 mg if over 75) + enoxaparin"), F.s("Then <b>transfer every patient</b> to the PCI centre"), F.d("ST resolution ≥50% at 60–90 min, pain settled?"), F.b([["No", F.e("<b>Rescue PCI</b> immediately")], ["Yes", F.ok("Angiography within 2–24 h")]])]])])}
<ul>
<li><b>Primary PCI</b> is the preferred reperfusion when it can be done in time. It is also the choice in cardiogenic shock and when fibrinolysis is contraindicated, whatever the delay.</li>
<li><b>Fibrinolysis</b>: ${dr("tenecteplase", "Tenecteplase")} single IV bolus by weight (30–50 mg). Check the contraindications on the drug card first, and exclude aortic dissection. Expect reperfusion arrhythmias.</li>
<li>Patients presenting at <b>12–48 hours</b> with ongoing ischaemia, heart failure, shock or arrhythmia still need primary PCI. Stable patients beyond 48 hours with a completed infarct gain nothing from routine opening of an occluded artery (OAT trial).</li>
<li><b>Anticoagulation with lysis:</b> ${dr("enoxaparin", "enoxaparin")} 30 mg IV then 1 mg/kg SC 12-hourly if under 75; 0.75 mg/kg SC 12-hourly with no bolus if 75 or over. Alternatively ${dr("heparin_ufh", "UFH")} 60 units/kg (max 4,000) then 12 units/kg/h (max 1,000).</li></ul>

<h3>C. NSTEMI and unstable angina</h3>
<ol>
<li>Aspirin 300 mg, then 75 mg daily.</li>
<li><b>Anticoagulant:</b> ${dr("enoxaparin", "enoxaparin")} 1 mg/kg SC 12-hourly (once daily if CrCl under 30), or ${dr("heparin_ufh", "UFH")} if renal failure is severe or urgent angiography is likely. (Fondaparinux 2.5 mg SC daily is an ESC alternative but is not on NEML.)</li>
<li><b>P2Y12 inhibitor:</b> ESC 2023 advises <b>not</b> pre-loading before angiography when it will happen within 24 hours. Where transfer will take longer than that, as in most of Bhutan, give ${dr("clopidogrel", "clopidogrel")} 300 mg loading (ICMR) or ${dr("ticagrelor", "ticagrelor")} 180 mg once the diagnosis is secure and bleeding risk is acceptable.</li>
<li>${dr("metoprolol", "Metoprolol")} orally if there is ongoing ischaemia or tachycardia <b>and no heart failure, hypotension or heart block</b>.</li>
<li>IV nitrate for persistent pain, hypertension or pulmonary oedema.</li>
<li>Risk score (GRACE) → timing of angiography (see the previous section).</li></ol>

<h3>D. Before discharge: secondary prevention, for life</h3>
${tbl(["Treatment", "Dose", "Who", "Evidence"], [
["Aspirin", "75–100 mg daily, lifelong", "Everyone", "Strong (ISIS-2; antiplatelet meta-analyses)"],
["P2Y12 inhibitor", "Ticagrelor 90 mg BD / prasugrel 10 mg / clopidogrel 75 mg daily", "Everyone, 12 months by default (shorter if high bleeding risk)", "PLATO, TRITON; ESC/ACC-AHA Class I"],
["High-intensity statin", "Atorvastatin 80 mg", "Everyone; recheck lipids at 4–6 weeks; add ezetimibe if LDL-C ≥1.4 mmol/L (55 mg/dL)", "PROVE-IT; IMPROVE-IT"],
["Beta-blocker", "Metoprolol succinate up to 200 mg daily, or bisoprolol up to 10 mg", "<b>LVEF ≤40%</b> (Class I); otherwise for angina, arrhythmia or hypertension", "Strong when EF is low; uncertain when EF is preserved (REDUCE-AMI 2024)"],
["ACE inhibitor (or ARB)", "Enalapril 2.5 mg BD → 10–20 mg BD", "LVEF ≤40%, heart failure, diabetes, hypertension or CKD; reasonable in all", "SAVE, HOPE"],
["Mineralocorticoid antagonist", "Spironolactone 25 mg (eplerenone in trials)", "LVEF ≤40% with heart failure or diabetes, if K⁺ and creatinine allow", "EPHESUS"],
["SGLT2 inhibitor", "Dapagliflozin 10 mg", "Diabetes, CKD or heart failure (not routinely after MI alone)", "DAPA-MI / EMPACT-MI showed no mortality benefit after MI alone"],
["PPI", "Pantoprazole 40 mg (omeprazole 20 mg on NEML: avoid with clopidogrel if possible)", "On DAPT with high GI bleeding risk", "ESC Class I"],
["Sublingual nitrate", "ISDN 5 mg PRN", "Everyone, with clear instructions", "Symptom relief"],
["Cardiac rehabilitation", "Supervised exercise, education, smoking cessation", "Everyone", "Reduces death and readmission"]])}
${box("green", "The discharge checklist", `<ul><li>Smoking (and chewing tobacco) stopped, with support.</li><li>All five drug groups considered: antiplatelets, statin, beta-blocker, ACE inhibitor, MRA.</li><li>Echo result known (LVEF decides the beta-blocker, MRA and ICD questions).</li><li>Blood pressure, diabetes and lipids targets agreed.</li><li>Sublingual nitrate prescribed and explained.</li><li>Follow-up booked, with a written plan for the 12-month DAPT end date.</li></ul>`)}
<p class="qn">Sources: ESC 2023, ACC/AHA 2025, ICMR STW; trials ISIS-2, PLATO, STREAM, STREAM-2, CLARITY, PROVE-IT, REDUCE-AMI.${r(4, 5, 6, 8, 9, 10, 11, 18, 19, 15)}</p>
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any medicine for its full card, including kidney, liver, pregnancy and elderly adjustments and the Bhutan listing. Doses were checked against ESC 2023 and ACC/AHA 2025 plus the ICMR STW or Bhutan NEMF.</p>
${tbl(["Drug", "Adult dose in ACS", "Key cautions", "Bhutan (NEML 2025)"], [
[dr("aspirin_acs", "Aspirin"), "300 mg chewed, then 75–100 mg daily", "True allergy; active bleeding", "300 mg effervescent; 75 mg EC (to PHC)"],
[dr("clopidogrel", "Clopidogrel"), "300 mg load (600 mg before PCI; 75 mg if lysed and over 75), then 75 mg daily", "Avoid omeprazole; stop 5 days before CABG", "75 mg (to DH)"],
[dr("ticagrelor", "Ticagrelor"), "180 mg load, then 90 mg BD", "Prior intracranial bleed; breathlessness; not with lysis", "Not listed"],
[dr("prasugrel", "Prasugrel"), "60 mg load, then 10 mg daily (5 mg if <60 kg or ≥75)", "Prior stroke/TIA; only once anatomy known", "Not listed"],
[dr("tenecteplase", "Tenecteplase"), "Single bolus 30–50 mg by weight; half dose if ≥75", "Absolute contraindications; exclude dissection", "50 mg vial (to DH)"],
[dr("enoxaparin", "Enoxaparin"), "1 mg/kg SC 12-hourly (lysis: 30 mg IV bolus first if <75; 0.75 mg/kg if ≥75)", "CrCl <30: once daily", "Pre-filled syringe (NRH/RRH; some DHs)"],
[dr("heparin_ufh", "Unfractionated heparin"), "60 U/kg (max 4,000) then 12 U/kg/h (max 1,000), aPTT 1.5–2×", "HIT; monitor aPTT", "5,000 IU/mL (NRH/RRH)"],
[dr("atorvastatin_hi", "Atorvastatin"), "80 mg daily", "Interactions (clarithromycin, rifampicin)", "10 mg only (8 tablets = 80 mg)"],
[dr("metoprolol", "Metoprolol succinate"), "25–50 mg succinate daily → up to 200 mg", "Not in heart failure, shock, bradycardia or block", "Succinate 25 mg (to DH)"],
[dr("enalapril", "Enalapril"), "2.5 mg BD → 10–20 mg BD", "Hypotension, rising creatinine, K⁺", "5 mg (to DH)"],
[dr("nitrate_sl", "Isosorbide dinitrate SL"), "5 mg SL, up to 3 doses in 15–30 min", "SBP <90; RV infarct; sildenafil", "5 mg SL (to DH)"],
[dr("morphine", "Morphine IV"), "2.5–5 mg IV titrated", "Hypotension; slows P2Y12 absorption", "10 mg/mL (to DH)"],
[dr("metoclopramide", "Metoclopramide"), "10 mg IV slowly", "Dystonia", "To PHC"],
[dr("ranolazine", "Ranolazine"), "500 mg BD → 1 g BD (chronic angina only)", "Not for acute ACS; CYP3A4 interactions", "500 mg (to DH)"]])}
` },

{ id: "populations", title: "Special populations", html: `
<h3>Older adults (75 and over)</h3>
<ul><li>Presentations are often atypical (breathlessness, confusion, falls). Do an ECG in any older person who is unwell without a clear cause.</li><li>Benefit from reperfusion and invasive treatment persists, but bleeding risk is higher: <b>half-dose tenecteplase, clopidogrel 75 mg without a loading dose when lysed, and enoxaparin 0.75 mg/kg without a bolus</b>. Calculate creatinine clearance for every dose.</li><li>Consider frailty and the patient's own wishes when choosing invasive care.</li></ul>
<h3>Diabetes</h3>
<ul><li>Silent or atypical ischaemia is common. Keep glucose in the range 7–10 mmol/L in hospital and avoid hypoglycaemia.</li><li>Metformin is held around contrast if renal function is poor. Diabetes favours an ACE inhibitor and, where available, an SGLT2 inhibitor or GLP-1 receptor agonist with proven cardiovascular benefit (see the ${'<a href="#/d/dm-adult">diabetes chapter</a>'}).</li></ul>
<h3>Chronic kidney disease</h3>
<ul><li>Troponin may be chronically raised, so look for a <b>change</b>. Adjust enoxaparin (once daily if CrCl is under 30) or use UFH. Use the smallest contrast dose and hydrate. Patients with CKD still benefit from invasive treatment.</li></ul>
<h3>Women and pregnancy</h3>
<ul><li>Women are more often under-diagnosed and under-treated; use the same thresholds (sex-specific ST cut-offs in V2–V3; sex-specific troponin limits if the lab provides them).</li><li><b>In pregnancy</b>, MI is rare but often due to <b>spontaneous coronary artery dissection (SCAD)</b>. Primary PCI is preferred over fibrinolysis. Aspirin and heparin are safe, and clopidogrel can be used when needed; statins, ACE inhibitors and ARBs are avoided. Involve obstetrics and cardiology together.</li></ul>
<h3>Young adults and cocaine or amphetamine use</h3>
<ul><li>Think of SCAD, coronary spasm, familial hypercholesterolaemia, and stimulant use. In cocaine-associated chest pain, give benzodiazepines and nitrates and <b>avoid beta-blockers</b> acutely.</li></ul>
<h3>Children</h3>
<p>ACS is very rare in children. When it occurs, think of <b>Kawasaki disease</b> (coronary aneurysms), anomalous coronary arteries, familial hypercholesterolaemia, or cocaine use in adolescents. Management is specialist-led; this guide does not scale adult doses down for children.</p>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>Inferior STEMI with hypotension and clear lungs</b>", "Suspect <b>RV infarction</b>: record V4R. Give IV fluid boluses (250–500 mL saline, repeated while BP and lungs allow); <b>stop nitrates, diuretics and morphine</b>; treat bradycardia and heart block (atropine, pacing); reperfuse urgently"],
["<b>Cardiogenic shock</b>", "Urgent PCI of the culprit artery (not routine multivessel PCI: CULPRIT-SHOCK); noradrenaline for hypotension, dobutamine for low output; echo for mechanical complications; transfer to the Heart Centre; IABP is not routine but may support a mechanical complication. Fibrinolysis only if PCI is unavailable"],
["<b>VF / pulseless VT</b>", "Defibrillate immediately (ALS). After return of circulation, an ECG showing STEMI means immediate angiography"],
["<b>Complete heart block in inferior MI</b>", "Often transient (AV nodal ischaemia); atropine, temporary pacing if unstable. In anterior MI it signals a large infarct and needs pacing"],
["<b>New pansystolic murmur and sudden pulmonary oedema on day 2–7</b>", "Papillary muscle or ventricular septal rupture: urgent echo, afterload reduction, surgical referral"],
["<b>Sudden shock, raised JVP, electromechanical dissociation days after MI</b>", "Free-wall rupture with tamponade: echo, pericardiocentesis as a bridge, emergency surgery"],
["<b>Patient on warfarin or a DOAC with ACS</b>", "Do not give fibrinolysis if INR is over 2.5 or the DOAC dose was recent; aim for PCI. After PCI: short triple therapy (usually up to 1 week), then oral anticoagulant + clopidogrel to 12 months"],
["<b>Aspirin allergy</b>", "Clopidogrel alone, plus anticoagulant; refer for desensitisation if a stent is planned"],
["<b>Suspected ACS but troponin rises with sepsis, anaemia or fast AF</b>", "Probable Type 2 MI: treat the cause, do not lyse; investigate coronary disease once well"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "When", "How to recognise it", "Management"], [
["<b>Ventricular fibrillation / VT</b>", "First hours (most pre-hospital deaths)", "Collapse, pulseless; ECG", "Defibrillation; correct K⁺ and Mg²⁺; beta-blocker; amiodarone if recurrent"],
["<b>Bradycardia and AV block</b>", "Early, especially inferior MI", "Slow pulse, dizziness, hypotension", "Atropine; temporary pacing"],
["<b>Acute heart failure and shock</b>", "Early", "Crackles, hypoxia, hypotension (Killip II–IV)", "Diuretic, nitrate if BP allows, NIV; shock: PCI, inotropes, transfer"],
["<b>Mechanical: papillary muscle rupture, VSD, free-wall rupture</b>", "Day 2–7 (less common after early reperfusion)", "New murmur, sudden pulmonary oedema or shock, tamponade", "Echo; emergency surgery"],
["<b>Recurrent ischaemia / re-infarction</b>", "Any time", "Recurrent pain with ECG change", "Urgent angiography"],
["<b>Bleeding</b>", "During antithrombotic therapy", "GI bleed, puncture site, intracranial (after lysis)", "Stop/reverse anticoagulant; PPI; transfusion threshold Hb <7–8 g/dL; never stop antiplatelets after a recent stent without cardiology advice"],
["<b>Pericarditis</b>", "Day 1–3 (early) or weeks later (Dressler's)", "Positional pleuritic pain, rub", "Aspirin (high dose); avoid other NSAIDs and steroids early"],
["<b>LV thrombus and embolic stroke</b>", "First weeks, large anterior MI", "Echo", "Anticoagulation for 3–6 months"],
["<b>LV aneurysm, chronic heart failure</b>", "Weeks to months", "Persistent ST elevation; echo", "Heart failure therapy (four pillars)"],
["<b>Depression</b>", "Weeks to months", "Low mood, poor adherence", "Screen and treat; it worsens prognosis"]])}
<h3>Prognosis</h3>
<ul>
<li>In-hospital mortality is now about 5–10% for STEMI and 3–5% for NSTEMI in systems with timely reperfusion; it is higher where reperfusion is delayed or unavailable.</li>
<li>The strongest predictors are age, Killip class, LVEF, delay to reperfusion, kidney function and diabetes (captured by the GRACE score).</li>
<li>ESC 2024 chronic coronary syndrome guidance covers long-term care after the acute phase.${r(16)}</li>
<li>About 1 in 5 patients has another cardiovascular event within a few years. That is why secondary prevention and adherence matter as much as the acute treatment.</li></ul>
` },

{ id: "followup", title: "Follow-up, self-care and prevention", html: `
${tbl(["When", "What"], [
["1–2 weeks after discharge", "Symptoms, adherence, BP, heart rate; check K⁺ and creatinine if ACE inhibitor or MRA started; up-titrate beta-blocker and ACE inhibitor; refer to cardiac rehabilitation"],
["4–6 weeks", "Lipids: target LDL-C under 1.4 mmol/L (55 mg/dL) and a 50% fall; add ezetimibe if not at target. ALT if symptoms"],
["6–12 weeks", "Repeat echo if LVEF was ≤40% (ICD decision if it stays ≤35% despite therapy, by specialist)"],
["12 months", "Planned end of dual antiplatelet therapy: continue aspirin alone unless the cardiologist advises otherwise"],
["Every 3–6 months, then yearly", "Risk factors (BP, HbA1c, lipids, weight, smoking), angina, mood, adherence"],
["Yearly", "Influenza vaccination (shown to reduce events after MI)"]])}
${box("green", "What to tell the patient and family", `<ul>
<li>'Take your aspirin, your second blood thinner and your statin every day. They keep the stent and arteries open. Never stop the blood thinners on your own, even for a dental or other procedure, without asking the heart team.'</li>
<li>'If chest pain comes back, sit down and put one tablet under your tongue. If it is not better in 5 minutes, call 112 or come to hospital at once. Do not drive yourself.'</li>
<li>'Stop smoking and chewing tobacco completely; this is the single most powerful thing you can do.'</li>
<li>'Walk a little more each day; you can usually return to light work in 2–4 weeks and resume sex when you can climb two flights of stairs comfortably.'</li>
<li>'Eat less salt and fat; more vegetables, pulses and fruit; limit alcohol.'</li>
<li>'Keep your blood pressure, sugar and cholesterol checks; they are part of the treatment.'</li></ul>`)}
${box("red", "Come back immediately if", `<ul><li>Chest pain at rest, or not relieved by sublingual nitrate within 5 minutes.</li><li>Breathlessness, fainting or palpitations.</li><li>Black stools, vomiting blood, or unusual bleeding.</li><li>Sudden weakness, confusion or difficulty speaking.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<h3>The ECG: reading STEMI</h3>
<div class="pair">
${fig({ title: "Inferior STEMI", src: "images/acs-inferior-stemi.jpg", mod: "12-lead electrocardiogram", ctx: "Acute inferior myocardial infarction", loc: "Leads II, III and aVF", find: "ST-segment elevation in the inferior leads II, III and aVF", signs: "Inferior ST elevation, usually with reciprocal ST depression in I and aVL", interp: "Occlusion of the right coronary artery (or sometimes the circumflex). Record V4R to look for right ventricular involvement before giving nitrates", ddx: "Pericarditis (widespread concave ST elevation, PR depression, no reciprocal change), early repolarisation, aortic dissection involving the right coronary", by: "Glenlarson, via Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:ECG_001.jpg", lic: "CC BY-SA 3.0" })}
${fig({ title: "Anterior STEMI, colour-coded", src: "images/acs-anterior-stemi.jpg", mod: "12-lead electrocardiogram (annotated)", ctx: "Acute anterior myocardial infarction", loc: "Anterior chest leads", find: "ST elevation in the anterior leads (orange) with reciprocal ST depression in the inferior leads (blue); sinus tachycardia; left anterior fascicular block", signs: "Anterior ST elevation with reciprocal change", interp: "Occlusion of the left anterior descending artery, which supplies a large territory. This is a high-risk infarct needing immediate reperfusion", ddx: "LV aneurysm (old infarct), LBBB, Brugada pattern, LVH strain", by: "Displaced, via Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:12_Lead_EKG_ST_Elevation_tracing_color_coded.jpg", lic: "Public domain" })}
</div>
<h3>What happens in the artery</h3>
${fig({ title: "Myocardial infarction: coronary occlusion (schematic)", src: "images/acs-mi-schematic.png", mod: "Medical illustration (schematic, not a patient image)", ctx: "Mechanism of myocardial infarction", loc: "Coronary artery and the heart muscle it supplies", find: "A clot blocks a coronary artery, and the downstream muscle is starved of blood and dies", signs: "Occluded artery; infarcted area", interp: "Shows why reperfusion must be fast: the area of dying muscle grows with every minute the artery stays shut", by: "Blausen Medical Communications, via Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Blausen_0463_HeartAttack.png", lic: "CC BY 3.0" })}
<h3>Link-only references (copyrighted; open on the source site)</h3>
<ul>
<li>ECG library of STEMI patterns, posterior MI, de Winter and Wellens: <a href="https://litfl.com/myocardial-infarction-ecg-library/" target="_blank" rel="noopener">LITFL ECG library</a></li>
<li>Coronary angiography of acute occlusion: <a href="https://radiopaedia.org/articles/acute-myocardial-infarction" target="_blank" rel="noopener">Radiopaedia</a></li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Suspected ACS: the first hour", [
F.s("Chest pain or anginal equivalent"), F.a,
F.s("ECG within 10 minutes · monitor · IV access · troponin · aspirin 300 mg"), F.a,
F.d("ST elevation or STEMI equivalent?"), F.a,
F.b([["Yes", F.e("<b>STEMI pathway</b>: reperfusion decision now (chart 2)")], ["No", F.s("Serial ECG and hs-troponin (0/1 h or 0/3 h)"), F.d("Troponin rise/fall above 99th percentile?"), F.b([["Yes", F.s("<b>NSTEMI</b>: anticoagulant, P2Y12, GRACE (chart 3)")], ["No", F.ok("Unstable angina or non-cardiac: HEART score; observe or investigate")]])]])])}
${F.chart("2 · STEMI: reperfusion", [
F.s("STEMI, symptoms under 12 h"), F.a,
F.d("Primary PCI possible within 120 min?"), F.a,
F.b([["Yes", F.ok("Transfer for primary PCI")], ["No", F.s("Check contraindications; exclude dissection"), F.s("Tenecteplase within 10 min (half dose ≥75 y) + aspirin + clopidogrel + enoxaparin"), F.s("Transfer to PCI centre"), F.d("ST resolution ≥50% at 60–90 min?"), F.b([["No", F.e("Rescue PCI now")], ["Yes", F.ok("Angiography in 2–24 h")]])]])])}
${F.chart("3 · NSTE-ACS: how fast to angiography", [
F.s("Confirmed or likely NSTE-ACS on aspirin + anticoagulant"), F.a,
F.d("Very high risk? (shock, refractory pain, arrhythmia, acute HF, mechanical complication)"), F.a,
F.b([["Yes", F.e("Immediate angiography (<2 h): transfer now")], ["No", F.d("High risk? (NSTEMI confirmed, dynamic ST, GRACE >140)"), F.b([["Yes", F.s("Angiography within 24 h")], ["No", F.ok("Angiography during admission, or non-invasive testing")]])]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Door-to-ECG under 10 minutes</b>, and for lysis door-to-needle under 30 (ideally 10 minutes from diagnosis). Put these numbers on the wall of the emergency room.</li>
<li><b>Inferior STEMI → right-sided leads before nitrates.</b> V4R takes one minute and prevents a dangerous fall in BP.</li>
<li><b>ST depression in V1–V3 may be a posterior STEMI.</b> Turn the patient and record V7–V9.</li>
<li><b>Sweating with chest pain is MI until proven otherwise.</b></li>
<li><b>Do not let a normal troponin at presentation send someone home.</b> Serial testing is what rules MI out.</li>
<li><b>A lysed patient still needs angiography.</b> Fibrinolysis opens the artery but leaves the culprit plaque behind.</li>
<li><b>Echo every MI before discharge.</b> The LVEF changes the drug list.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Waiting for troponin before reperfusing a STEMI", "Muscle dies while you wait", "The ECG decides in STEMI"],
["Giving nitrates in RV infarction or after sildenafil", "Profound hypotension", "V4R first; ask about PDE-5 inhibitors"],
["Thrombolysing an aortic dissection", "Often fatal bleeding", "Check pulses, BP in both arms, mediastinum; CT if any doubt"],
["IV beta-blocker in a patient with heart failure or borderline BP", "Precipitates cardiogenic shock (COMMIT)", "Oral, later, only when stable"],
["Full-dose tenecteplase and enoxaparin bolus in an 80-year-old", "Intracranial haemorrhage", "Half-dose TNK; no bolus, 0.75 mg/kg enoxaparin"],
["Stopping clopidogrel for a minor procedure weeks after a stent", "Stent thrombosis, often fatal", "Ask the cardiologist first"],
["Discharging on atorvastatin 10 mg (one tablet)", "Undertreated LDL; recurrent events", "Prescribe 80 mg as eight 10 mg tablets, explain clearly"],
["Routine oxygen for everyone", "No benefit; possible harm", "Only if SpO₂ under 90%"],
["Using omeprazole with clopidogrel", "Weaker antiplatelet effect", "Pantoprazole where available"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Diagnosis</h3>
${qa("Student", "Define myocardial infarction according to the Fourth Universal Definition.", "A rise and/or fall of cardiac troponin with at least one value above the 99th percentile upper reference limit, plus evidence of acute ischaemia: symptoms, new ischaemic ECG changes, new Q waves, imaging evidence of new loss of viable muscle or regional wall-motion abnormality, or a coronary thrombus at angiography or autopsy.")}
${qa("Intern/MO", "What are the ECG criteria for STEMI?", "New ST elevation at the J point in two contiguous leads: 1 mm or more in all leads except V2–V3; in V2–V3, 2 mm or more in men aged 40 or over, 2.5 mm in men under 40, 1.5 mm in women. New LBBB with ischaemic symptoms and posterior MI are treated as STEMI equivalents.")}
${qa("Intern/MO", "A patient with inferior STEMI becomes hypotensive after sublingual nitrate. What has probably happened and what do you do?", "Right ventricular infarction: the RV depends on preload, which the nitrate removed. Lay flat, give IV saline boluses, stop nitrates and diuretics, record V4R, and reperfuse urgently.")}
${qa("Intern/MO", "What is a Type 2 myocardial infarction?", "Myocardial injury from an oxygen supply–demand mismatch without plaque rupture, for example in sepsis, severe anaemia, fast AF or hypotension. Treat the cause; fibrinolysis is not indicated.")}
</div>
<div class="qgroup"><h3>Reperfusion and antithrombotic therapy</h3>
${qa("Intern/MO", "When is fibrinolysis preferred over primary PCI in STEMI?", "When symptoms began less than 12 hours ago and primary PCI cannot be performed within 120 minutes of diagnosis. Give it within 10 minutes of diagnosis, then transfer to a PCI centre.")}
${qa("Intern/MO", "What is the tenecteplase dose for a 72 kg, 78-year-old man?", "The 70–79 kg band is 40 mg, but he is 75 or over, so give half: 20 mg as a single IV bolus. Add aspirin, clopidogrel 75 mg without a loading dose, and enoxaparin 0.75 mg/kg SC 12-hourly without an IV bolus.")}
${qa("Intern/MO", "How do you know fibrinolysis has failed, and what then?", "Less than 50% resolution of ST elevation at 60–90 minutes, ongoing pain or haemodynamic instability. Arrange immediate rescue PCI.")}
${qa("Specialist", "Why is clopidogrel, not ticagrelor or prasugrel, used with fibrinolysis?", "Clopidogrel with fibrinolysis is supported by CLARITY and COMMIT; ticagrelor and prasugrel were not studied in the acute lytic setting and carry more bleeding risk. Switching to ticagrelor can be considered after 48 hours in selected patients.")}
${qa("Specialist", "What are the very-high-risk features in NSTE-ACS that call for immediate angiography?", "Haemodynamic instability or cardiogenic shock, recurrent or refractory chest pain despite medical therapy, life-threatening arrhythmia or cardiac arrest, mechanical complications, acute heart failure from ischaemia, and recurrent dynamic ST changes (especially intermittent ST elevation).")}
</div>
<div class="qgroup"><h3>Secondary prevention and viva</h3>
${qa("Intern/MO", "List the secondary prevention drugs after MI.", "Aspirin lifelong; a P2Y12 inhibitor for 12 months; a high-intensity statin; a beta-blocker (essential if LVEF ≤40%); an ACE inhibitor or ARB; an MRA if LVEF ≤40% with heart failure or diabetes; a sublingual nitrate as needed; plus smoking cessation and cardiac rehabilitation.")}
${qa("Viva", "Why does aspirin given early in MI reduce mortality?", "It irreversibly blocks platelet COX-1 and thromboxane A₂, limiting growth of the platelet-rich clot on the ruptured plaque. ISIS-2 showed a fall in vascular mortality of about a fifth with aspirin alone, additive to streptokinase.")}
${qa("Viva", "How would you manage a STEMI at a district hospital in Bhutan, four hours from Thimphu?", "ECG, aspirin 300 mg, atorvastatin 80 mg, check fibrinolysis contraindications and exclude dissection; give tenecteplase by weight (half dose if 75 or over) within 10 minutes, with clopidogrel and enoxaparin; monitor for reperfusion; then discuss with and transfer to the JDWNRH Heart Centre: urgently if lysis fails, within 24 hours if it succeeds.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §2.1 Ischaemic heart disease or coronary artery diseases. (Local PDF, Bhutan Medical Library.)</li>
<li id="ref-2">Ministry of Health, Bhutan. PEN Interventions for Hospitals. 2011, ch.13 Acute coronary syndrome; ch.14 Stable angina and past MI.</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines Formulary 2022 and National Essential Medicines List 2025 (tenecteplase, clopidogrel, enoxaparin, heparin, metoprolol, atorvastatin, isosorbide dinitrate, ranolazine monographs and levels).</li>
<li id="ref-4">Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J 2023;44:3720–3826. <a href="https://doi.org/10.1093/eurheartj/ehad191" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehad191</a></li>
<li id="ref-5">Rao SV, O'Donoghue ML, Ruel M, et al. 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. Circulation 2025;151:e771–e862 (also J Am Coll Cardiol 2025;85:2135–2237). <a href="https://doi.org/10.1161/CIR.0000000000001309" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001309</a></li>
<li id="ref-6">Indian Council of Medical Research. Standard Treatment Workflows: ST Elevation Myocardial Infarction; Unstable Angina/NSTEMI. New Delhi, 2025 edition. <a href="https://www.icmr.gov.in/icmrobject/uploads/STWs/1768823342_cardiology_1-5.pdf" target="_blank" rel="noopener">STEMI (PDF)</a> · <a href="https://www.icmr.gov.in/icmrobject/uploads/STWs/1768823342_cardiology_1-4.pdf" target="_blank" rel="noopener">UA/NSTEMI (PDF)</a></li>
<li id="ref-7">Thygesen K, Alpert JS, Jaffe AS, et al. Fourth Universal Definition of Myocardial Infarction (2018). Circulation 2018;138:e618–e651. <a href="https://doi.org/10.1161/CIR.0000000000000617" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000000617</a></li>
<li id="ref-8">ISIS-2 Collaborative Group. Randomised trial of intravenous streptokinase, oral aspirin, both, or neither among 17,187 cases of suspected acute myocardial infarction. Lancet 1988;2:349–360. <a href="https://doi.org/10.1016/S0140-6736(88)92833-4" target="_blank" rel="noopener">doi:10.1016/S0140-6736(88)92833-4</a></li>
<li id="ref-9">Wallentin L, Becker RC, Budaj A, et al. Ticagrelor versus clopidogrel in patients with acute coronary syndromes (PLATO). N Engl J Med 2009;361:1045–1057. <a href="https://doi.org/10.1056/NEJMoa0904327" target="_blank" rel="noopener">doi:10.1056/NEJMoa0904327</a></li>
<li id="ref-10">Armstrong PW, Gershlick AH, Goldstein P, et al. Fibrinolysis or primary PCI in ST-segment elevation myocardial infarction (STREAM). N Engl J Med 2013;368:1379–1387. <a href="https://doi.org/10.1056/NEJMoa1301092" target="_blank" rel="noopener">doi:10.1056/NEJMoa1301092</a></li>
<li id="ref-11">Van de Werf F, Ristić AD, Averkov OV, et al. STREAM-2: half-dose tenecteplase or primary PCI in older patients with STEMI. Circulation 2023;148:753–764. <a href="https://doi.org/10.1161/CIRCULATIONAHA.123.064521" target="_blank" rel="noopener">doi:10.1161/CIRCULATIONAHA.123.064521</a></li>
<li id="ref-12">Granger CB, Goldberg RJ, Dabbous O, et al. Predictors of hospital mortality in the Global Registry of Acute Coronary Events (GRACE). Arch Intern Med 2003;163:2345–2353. <a href="https://doi.org/10.1001/archinte.163.19.2345" target="_blank" rel="noopener">doi:10.1001/archinte.163.19.2345</a></li>
<li id="ref-13">Antman EM, Cohen M, Bernink PJ, et al. The TIMI risk score for unstable angina/non-ST elevation MI. JAMA 2000;284:835–842. <a href="https://doi.org/10.1001/jama.284.7.835" target="_blank" rel="noopener">doi:10.1001/jama.284.7.835</a></li>
<li id="ref-14">Backus BE, Six AJ, Kelder JC, et al. A prospective validation of the HEART score for chest pain patients at the emergency department. Int J Cardiol 2013;168:2153–2158. <a href="https://doi.org/10.1016/j.ijcard.2013.01.255" target="_blank" rel="noopener">doi:10.1016/j.ijcard.2013.01.255</a></li>
<li id="ref-15">Yndigegn T, Lindahl B, Mars K, et al. Beta-blockers after myocardial infarction and preserved ejection fraction (REDUCE-AMI). N Engl J Med 2024;390:1372–1381. <a href="https://doi.org/10.1056/NEJMoa2401479" target="_blank" rel="noopener">doi:10.1056/NEJMoa2401479</a></li>
<li id="ref-16">Vrints C, Andreotti F, Koskinas KC, et al. 2024 ESC Guidelines for the management of chronic coronary syndromes. Eur Heart J 2024;45:3415–3537. <a href="https://doi.org/10.1093/eurheartj/ehae177" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehae177</a></li>
<li id="ref-17">Xavier D, Pais P, Devereaux PJ, et al. Treatment and outcomes of acute coronary syndromes in India (CREATE): a prospective analysis of registry data. Lancet 2008;371:1435–1442. <a href="https://doi.org/10.1016/S0140-6736(08)60623-6" target="_blank" rel="noopener">doi:10.1016/S0140-6736(08)60623-6</a></li>
<li id="ref-18">Cannon CP, Braunwald E, McCabe CH, et al. Intensive versus moderate lipid lowering with statins after acute coronary syndromes (PROVE IT–TIMI 22). N Engl J Med 2004;350:1495–1504. <a href="https://doi.org/10.1056/NEJMoa040583" target="_blank" rel="noopener">doi:10.1056/NEJMoa040583</a></li>
<li id="ref-19">Sabatine MS, Cannon CP, Gibson CM, et al. Addition of clopidogrel to aspirin and fibrinolytic therapy for STEMI (CLARITY–TIMI 28). N Engl J Med 2005;352:1179–1189. <a href="https://doi.org/10.1056/NEJMoa050522" target="_blank" rel="noopener">doi:10.1056/NEJMoa050522</a></li>
<li id="ref-20">Harrison's Principles of Internal Medicine, 21st ed. (ischaemic heart disease and ACS chapters): background pathophysiology, paraphrased.</li>
<li id="ref-21">Bhutan Broadcasting Service. Country's first-ever heart centre opens at JDWNRH in Thimphu. 7 September 2023. <a href="https://www.bbs.bt/191634/" target="_blank" rel="noopener">bbs.bt</a>; and BBS report on angiography, angioplasty and pacemaker services at the Heart Centre. <a href="https://www.bbs.bt/224057" target="_blank" rel="noopener">bbs.bt</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["ACS classification and MI definition", "<span class='pass'>Verified</span>", "Fourth Universal Definition 2018; ESC 2023"],
["STEMI ECG criteria and equivalents", "<span class='pass'>Verified</span>", "ESC 2023; Fourth Universal Definition"],
["Reperfusion timing (120 min; 10 min to lysis; 2–24 h angiography)", "<span class='pass'>Verified</span>", "ESC 2023; ICMR STW STEMI; STREAM/STREAM-2"],
["NSTE-ACS invasive timing, GRACE >140", "<span class='pass'>Verified</span>", "ESC 2023 (now Class IIa for <24 h)"],
["P2Y12 choice and DAPT 12 months", "<span class='pass'>Verified</span>", "ESC 2023; ACC/AHA 2025"],
["Tenecteplase weight bands and half dose ≥75", "<span class='pass'>Verified</span>", "Bhutan NEMF monograph; ESC 2023; STREAM-2"],
["Enoxaparin and UFH regimens", "<span class='pass'>Checked</span>", "Bhutan NEMF; ESC 2023; BNF"],
["GRACE calculator", "<span class='pass'>Checked</span>", "Point table matches the Granger 2003 nomogram as reproduced in the AHA NSTE-ACS guideline"],
["HEART and TIMI calculators", "<span class='pass'>Checked</span>", "Backus 2013; Antman 2000"],
["Bhutan STG, PEN and NEML content", "<span class='pass'>Verified</span>", "STG 2024 §2.1 read directly (some bullet text is missing in the PDF text layer, e.g. the first symptom and sign bullets); NEML 2025 levels"],
["Fibrinolysis window: NEMF 6 h vs international 12 h", "<span class='warn'>Flagged</span>", "Shown in the comparison table; guide follows 12 h"],
["24-hour primary PCI availability in Bhutan", "<span class='warn'>Not verified</span>", "Cath lab at JDWNRH since Sept 2023; on-call model not confirmed"],
["Bhutan ACS incidence and outcome data", "<span class='warn'>Evidence gap</span>", "No national figure found"],
["Images", "<span class='pass'>Done</span>", "Three Commons files; licences checked via the Commons API (CC BY-SA 3.0, public domain, CC BY 3.0)"],
["References", "<span class='pass'>Done</span>", "All with DOI or link where available"]], "qc")}
` }
]
});
