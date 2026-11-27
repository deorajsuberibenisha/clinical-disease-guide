/* Stable angina and chronic coronary disease — adults. NEW disease (batch N-1, 27 Nov 2026).
   Sources read directly: Bhutan STG 2024 §2.1 Ischaemic heart disease (definition, risk factors, symptoms, acute management:
   aspirin 300 mg, high-dose statin, refer); NICE CG126 Stable angina (recommendations 1.3–1.5, read in browser); ISCHEMIA trial
   (Maron NEJM 2020, abstract); Bhutan NEML 2025 (aspirin 75 mg, clopidogrel 75 mg, atorvastatin 10 mg, bisoprolol 5 mg,
   metoprolol succinate 25 mg, amlodipine 5 mg, isosorbide dinitrate 5 mg sublingual, ranolazine 500 mg, nitroglycerin injection;
   ISDN 10 mg oral tablets substituted by ranolazine). ESC 2024 chronic coronary syndromes cited; full text behind a bot check — not read. */
registerPage({
id: "angina-adult",
title: "Stable Angina & Chronic Coronary Disease — Adults",
subtitle: "Chest tightness on effort that settles with rest is angina until proven otherwise. Give sublingual nitrate for attacks, a beta-blocker or calcium-channel blocker to prevent them, aspirin and a statin to prevent heart attacks, control every risk factor — and know the warning signs that turn stable angina into an emergency",
age: "Adults", specs: ["cardio", "medicine"],
keywords: ["stable angina", "angina pectoris", "chronic coronary syndrome", "chronic coronary disease", "ischaemic heart disease", "IHD", "coronary artery disease", "CAD", "exertional chest pain", "GTN", "isosorbide dinitrate", "nitrate", "beta blocker", "bisoprolol", "metoprolol", "amlodipine", "ranolazine", "aspirin", "atorvastatin", "secondary prevention", "ISCHEMIA trial", "PCI", "CABG", "unstable angina"],
related: ["acs-adult", "htn-adult", "lipids-adult", "dm-adult", "hf-adult", "af-adult", "arrest-adult", "anaemia-adult", "thyroid-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Angina is chest discomfort caused by the heart muscle not getting enough blood, usually from narrowed coronary arteries. Stable angina comes on predictably with effort or emotion and settles within minutes of rest or nitrate. Pain at rest, new pain, or pain that is getting worse quickly is <b>unstable angina — an acute coronary syndrome</b>.</p>
<div class="glance">
<div><h4>Typical angina</h4><p>Tight, squeezing or choking chest pain, may spread to jaw, neck or arm; <b>brought on by effort or emotion</b>; <b>relieved by rest or nitrate within 5 minutes</b>.</p></div>
<div><h4>For attacks</h4><p>${dr("gtn", "Sublingual nitrate")}: repeat after 5 minutes; <b>call for emergency care if pain is not gone 5 minutes after the second dose</b> (NICE).</p></div>
<div><h4>Prevent attacks</h4><p>First line: a <b>beta-blocker</b> (${dr("bisoprolol")}, ${dr("metoprolol")}) <b>or</b> a <b>calcium-channel blocker</b> (${dr("amlodipine")}); combine if needed.</p></div>
<div><h4>Prevent heart attacks</h4><p>${dr("aspirin", "Aspirin 75 mg")} daily + ${dr("atorvastatin", "atorvastatin")} high dose; ACE inhibitor if diabetes; BP, sugar, smoking.</p></div>
<div><h4>Investigate</h4><p>ECG, Hb, glucose/HbA1c, lipids, kidney function, thyroid; stress test or CT coronary angiography by availability.</p></div>
<div><h4>Refer</h4><p>Symptoms despite two drugs, high-risk test, or heart failure → cardiology for angiography.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan STG 2024 §2.1 names smoking, hypertension, high cholesterol, diabetes and obesity as the common risk factors and gives acute management (aspirin 300 mg, high-dose statin, morphine, referral). NEML 2025 has aspirin 75 mg, clopidogrel 75 mg, atorvastatin 10 mg, bisoprolol 5 mg, metoprolol succinate 25 mg, amlodipine 5 mg, <b>isosorbide dinitrate 5 mg sublingual</b> and ranolazine 500 mg; oral isosorbide dinitrate 10 mg was replaced by ranolazine in the 2025 list. Coronary angiography and PCI are done at JDWNRH. Doma (betel) chewing with tobacco and smoking add to risk. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Who gets it", html: `
${tbl(["Risk factor", "Notes"], [
["Age, male sex, family history of early heart disease", "Cannot change — but raise the priority of the others"],
["Smoking and chewing tobacco", "Stopping halves future risk within a few years"],
["High blood pressure", "Common and often untreated in Bhutan"],
["Diabetes", "Often silent ischaemia — breathlessness rather than pain"],
["High LDL cholesterol", "Statin lowers events whatever the starting level"],
["Obesity, inactivity, alcohol", "Lifestyle targets"],
["Chronic kidney disease", "High coronary risk"]])}
<p>Angina can also come from conditions that raise demand or reduce oxygen supply even with mild coronary disease: <b>anaemia</b>, thyrotoxicosis, fast arrhythmias, aortic stenosis, hypertrophic cardiomyopathy.${r(1)}</p>
` },

{ id: "patho", title: "What happens", html: `
${F.chart("Stable angina", [F.s("Atherosclerotic plaque narrows a coronary artery"), F.a, F.s("At rest, flow is enough"), F.a, F.e("Exertion raises oxygen demand (heart rate, BP) → supply cannot match → ischaemia → pain"), F.a, F.ok("Rest or nitrate lowers demand → pain settles"), F.a, F.e("Plaque rupture + clot → unstable angina or myocardial infarction (ACS)")])}
<p>Beta-blockers and rate-limiting drugs lower demand by slowing the heart; nitrates and calcium-channel blockers dilate vessels; aspirin and statins stabilise plaque and prevent clots.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan STG 2024", "NICE CG126", "This guide"], [
["Focus", "Acute chest pain: aspirin 300 mg, high-dose statin, refer", "Long-term stable angina", "Both — acute pathway on the ACS page"],
["First-line anti-anginal", "—", "Beta-blocker or CCB (by comorbidity and preference)", "Bisoprolol or metoprolol; amlodipine if beta-blocker unsuitable"],
["Second step", "—", "Switch or combine (dihydropyridine CCB with a beta-blocker)", "Bisoprolol + amlodipine"],
["Third options", "—", "Long-acting nitrate, ivabradine, nicorandil or ranolazine", "Ranolazine (NEML) or long-acting nitrate where available"],
["Aspirin", "300 mg stat in acute pain", "Consider 75 mg daily", "75 mg daily for all with confirmed CAD unless bleeding risk"],
["Revascularisation", "Refer", "If symptoms not controlled on optimal medical therapy", "Same — ISCHEMIA: no fewer deaths or heart attacks with routine early invasive strategy"]])}
<p>ISCHEMIA (5179 patients with moderate or severe ischaemia): an initial invasive strategy did not reduce cardiovascular death, MI or hospitalisation over 3.2 years compared with medical therapy first (5-year event rates 16.4% vs 18.2%); deaths were similar.${r(3)} NICE CG126.${r(2)} Bhutan STG.${r(1)}</p>
` },

{ id: "presentation", title: "Clinical features", html: `
${tbl(["Feature of the pain", "Angina", "Points away from angina"], [
["Character", "Tight, heavy, squeezing, choking, 'pressure'", "Sharp, stabbing, pricking, or pain you can point to with one finger"],
["Site", "Central chest, may spread to jaw, neck, arm, back", "Left nipple area only, moving around"],
["Trigger", "Exertion, emotion, cold, heavy meals", "Breathing, movement, pressing on the chest"],
["Relief", "Rest or nitrate within 5 minutes", "Lasts hours or seconds; antacids"],
["Associated", "Breathlessness, sweating", "—"]])}
<p>NICE calls pain with all three features (constricting; brought on by exertion; relieved by rest or nitrate within 5 minutes) <b>typical angina</b>; two features is atypical; one or none is non-anginal chest pain. Women, older people and people with diabetes often present with breathlessness or fatigue instead.</p>
${box("red", "Danger signs — this is an acute coronary syndrome", `<ul><li>Pain at rest, or lasting more than 15–20 minutes</li><li>New angina, or angina that is quickly getting worse</li><li>Pain with sweating, vomiting, breathlessness, fainting</li><li>Pain not relieved 5 minutes after the second nitrate</li></ul><p>Give aspirin 300 mg chewed, ECG within 10 minutes, follow the ACS page.</p>`)}
<h3>The typical patient</h3>
<p>Dorji, 58, a retired civil servant in Thimphu with hypertension and diabetes, gets a heavy feeling in his chest when walking uphill to the market. It goes after he stands still for 3 minutes. Resting ECG is normal; Hb 13.8 g/dL; HbA1c 8.4%; LDL 3.6 mmol/L. <b>Stable angina</b>: sublingual isosorbide dinitrate 5 mg for attacks, bisoprolol 2.5 mg rising to 5 mg, aspirin 75 mg, atorvastatin 40 mg, enalapril for his diabetes and BP, diabetes treatment intensified, and a treadmill test booked at JDWNRH.</p>
` },

{ id: "ddx", title: "Other causes of chest pain", html: `
${tbl(["Condition", "Clue"], [
["<b>Acute coronary syndrome</b>", "Pain at rest, prolonged, new or crescendo — emergency"],
["Gastro-oesophageal reflux, oesophageal spasm", "Burning, after meals or lying down; nitrate can relieve spasm too"],
["Musculoskeletal (costochondritis)", "Tender on pressing, pain with movement"],
["Pericarditis", "Sharp, worse lying flat, better sitting forward; rub; widespread ST elevation"],
["Pulmonary embolism", "Sudden breathlessness, pleuritic pain, risk factors"],
["Aortic dissection", "Tearing pain to the back, BP difference between arms — emergency"],
["Anxiety / panic", "With tingling, fear; diagnosis after excluding heart disease"],
["Aortic stenosis, hypertrophic cardiomyopathy", "Ejection systolic murmur; exertional syncope"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why"], [
["Resting 12-lead ECG", "Previous MI (Q waves), LVH, arrhythmia; normal ECG does not exclude angina"],
["Haemoglobin", "Anaemia worsens angina"],
["Fasting glucose / HbA1c, lipid profile", "Risk factors and targets"],
["Creatinine, potassium; thyroid function", "Drug choice; thyrotoxicosis"],
["Echocardiography", "Heart function, valve disease (aortic stenosis), wall-motion abnormality"],
["Exercise ECG (treadmill)", "Widely available; useful when resting ECG is normal and patient can exercise"],
["CT coronary angiography or functional imaging", "Where available (referral centres); first-line test in many guidelines"],
["Invasive coronary angiography", "Symptoms despite medical therapy, high-risk test, or to plan revascularisation"]])}
` },

{ id: "staging", title: "Severity and treatment step tool", html: `
<p>Grade symptoms with the Canadian Cardiovascular Society (CCS) classes and choose the next drug step from heart rate, blood pressure and contraindications.</p>
<div class="calc" data-calc="anginastep"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>1. Explain and plan</h3>
<ul><li>What angina is, how to use the nitrate, and when to call for help. Written plan for chest pain.</li></ul>
<h3>2. Relief of attacks</h3>
<ul><li>${dr("gtn", "Isosorbide dinitrate 5 mg sublingual")} (NEML) or GTN spray/tablet: sit down, take one dose; repeat after 5 minutes; if pain is not gone 5 minutes after the second dose, call for emergency care (NICE). Use before exertion that usually causes pain.</li><li>Side effects: headache, flushing, dizziness — sit when taking it. <b>Never with sildenafil or tadalafil</b> (severe hypotension).</li></ul>
<h3>3. Preventing attacks (NICE)</h3>
<ol><li>${dr("bisoprolol")} 2.5–10 mg once daily or ${dr("metoprolol")} succinate 25–200 mg once daily; target resting heart rate about 55–60. <b>Or</b> ${dr("amlodipine")} 5–10 mg once daily if a beta-blocker is unsuitable (asthma, severe COPD, bradycardia).</li><li>Not controlled: switch, or combine a beta-blocker with amlodipine (a dihydropyridine CCB). Do not combine a beta-blocker with verapamil or diltiazem in primary care.</li><li>Still not controlled, or first two not tolerated: add ${dr("ranolazine")} 375–500 mg twice daily (NEML) or a long-acting nitrate where available (nitrate-free interval overnight). Consider a third drug only while waiting for or not suitable for revascularisation.</li></ol>
<h3>4. Preventing heart attacks and death</h3>
<ul><li>${dr("aspirin")} 75 mg daily (${dr("clopidogrel")} 75 mg if aspirin intolerance).</li><li>${dr("atorvastatin")} 40–80 mg daily (NEML 10 mg tablets: 4 tablets = 40 mg); aim LDL below 1.8 mmol/L (or a fall of 50% or more).</li><li>ACE inhibitor (${dr("enalapril")}) if diabetes, hypertension, CKD or heart failure.</li><li>BP under 130/80 if tolerated; diabetes control; stop smoking and doma-tobacco chewing; walk daily within symptom limits; healthy weight; limit alcohol.</li><li>Influenza vaccine yearly.</li></ul>
<h3>5. Referral for angiography and revascularisation</h3>
<ul><li>Symptoms not controlled on optimal medical therapy; high-risk non-invasive test; reduced heart function; survived cardiac arrest or serious ventricular arrhythmia.</li><li>PCI or CABG at JDWNRH or abroad relieves angina; in stable disease it does not by itself reduce deaths (ISCHEMIA).</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine (NEML strength)", "Dose", "Notes"], [
[dr("gtn", "Isosorbide dinitrate 5 mg SL"), "5 mg under the tongue; repeat after 5 min", "Headache, low BP. Not with PDE-5 inhibitors"],
[dr("bisoprolol", "Bisoprolol 5 mg"), "2.5–10 mg once daily", "Avoid in asthma, heart block, HR under 50"],
[dr("metoprolol", "Metoprolol succinate 25 mg"), "25–200 mg once daily", "Alternative beta-blocker"],
[dr("amlodipine", "Amlodipine 5 mg"), "5–10 mg once daily", "Ankle swelling; safe with beta-blockers"],
[dr("ranolazine", "Ranolazine 500 mg"), "375–500 mg twice daily (max 750 mg twice daily)", "Add-on; QT prolongation; drug interactions (strong CYP3A inhibitors)"],
[dr("aspirin", "Aspirin 75 mg"), "75 mg once daily", "Bleeding; take with food"],
[dr("clopidogrel", "Clopidogrel 75 mg"), "75 mg once daily", "If aspirin not tolerated; dual therapy after stents as advised"],
[dr("atorvastatin", "Atorvastatin 10 mg"), "40–80 mg once daily", "Muscle aches; check ALT at baseline"],
[dr("enalapril"), "2.5–20 mg twice daily", "With diabetes, hypertension, CKD; check creatinine and potassium"]])}
<p>Drug steps from NICE CG126;${r(2)} strengths from NEML 2025.${r(5)}</p>
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>People with diabetes</b>", "Silent ischaemia — breathlessness or fatigue on effort; ACE inhibitor; tight risk-factor control"],
["<b>Women</b>", "Atypical symptoms more common; under-diagnosed — investigate the same"],
["<b>Older adults</b>", "Lower doses; postural hypotension with nitrates; falls"],
["<b>Asthma or severe COPD</b>", "Avoid non-selective beta-blockers; bisoprolol cautiously or amlodipine"],
["<b>Pregnancy</b>", "Rare; avoid statins and ACE inhibitors; specialist care"],
["<b>Anaemia</b>", "Correct iron deficiency — angina may resolve"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Angina at a BHU with no ECG", "Aspirin 300 mg chewed if pain is ongoing, sublingual nitrate if BP is adequate, refer urgently to a hospital with ECG"],
["Patient uses nitrate many times a day", "Angina is not controlled or unstable — review urgently, step up treatment, refer"],
["Heart rate 48 on bisoprolol", "Reduce the dose; check for heart block; switch to amlodipine if symptomatic"],
["Patient taking sildenafil", "No nitrates within 24 h (48 h for tadalafil); warn the patient"],
["Cannot afford or reach angiography", "Optimal medical therapy is safe and effective for most stable patients (ISCHEMIA)"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li>Acute coronary syndrome (unstable angina, MI) and sudden cardiac death.</li><li>Heart failure from repeated ischaemia or infarction.</li><li>Arrhythmias, including atrial fibrillation.</li><li>Reduced quality of life and work capacity; depression.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Review 2–4 weeks after starting or changing drugs, then every 3–6 months.</li><li>Ask: frequency of attacks, nitrate use, exercise tolerance, side effects.</li><li>Check BP, heart rate, weight; lipids 6–12 weeks after starting a statin, then yearly; HbA1c in diabetes; creatinine and potassium on ACE inhibitors.</li><li>Smoking and tobacco status every visit.</li></ul>
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Coronary artery disease", src: "images/coronary-atherosclerosis.png", mod: "Illustration", ctx: "Atherosclerotic plaque", loc: "Coronary artery", find: "Plaque narrowing the artery lumen and reducing blood flow", interp: "Fixed narrowing causes exertional angina; plaque rupture causes ACS", by: "BruceBlaus", page: "https://commons.wikimedia.org/wiki/File:Blausen_0257_CoronaryArtery_Plaque.png", lic: "CC BY 3.0" })}
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Exertional chest pain", [F.d("Pain at rest, prolonged, new or worsening fast?"), F.a, F.b([["Yes", F.e("ACS pathway: aspirin 300 mg, ECG in 10 min, refer")], ["No", F.s("Stable angina likely: ECG, Hb, glucose, lipids")]]), F.a, F.e("Nitrate for attacks + beta-blocker or amlodipine + aspirin 75 + statin"), F.a, F.d("Controlled?"), F.a, F.b([["No", F.e("Combine beta-blocker + amlodipine → add ranolazine → refer for angiography")], ["Yes", F.ok("Risk-factor control; review 3–6 monthly")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Calling new or rest pain 'stable angina'", "Missed ACS", "New, rest or worsening pain = ACS"],
["Normal ECG so 'not cardiac'", "Most angina patients have a normal resting ECG", "Decide on the history; test further"],
["Nitrate without warning about sildenafil", "Severe hypotension", "Ask and warn"],
["Forgetting the statin and aspirin", "Treats symptoms, not the risk of MI", "Every confirmed patient"],
["Ignoring anaemia or thyrotoxicosis", "Angina persists", "Check Hb and thyroid"],
["Routine stenting in stable patients 'to be safe'", "No fewer deaths or MIs (ISCHEMIA)", "Medical therapy first; revascularise for symptoms or high risk"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What three features make chest pain typical angina?", "Constricting discomfort in the chest, neck, jaw or arm; brought on by exertion; relieved by rest or nitrate within about 5 minutes (NICE).")}
${qa("Student", "Why does a normal ECG not exclude angina?", "The resting ECG is usually normal between attacks; ischaemia appears only with exertion.")}
${qa("Intern/MO", "How should a patient use sublingual nitrate?", "Sit, take one dose, repeat after 5 minutes if pain persists; call for emergency help if not gone 5 minutes after the second dose.")}
${qa("Intern/MO", "First-line drugs to prevent angina attacks?", "A beta-blocker or a calcium-channel blocker; combine a beta-blocker with a dihydropyridine CCB such as amlodipine if needed (NICE).")}
${qa("Specialist", "What did ISCHEMIA show?", "In stable patients with moderate or severe ischaemia, an initial invasive strategy did not reduce cardiovascular death, MI or hospitalisation over 3.2 years compared with medical therapy first.")}
${qa("Specialist", "Which anti-anginal on the Bhutan NEML replaced oral ISDN?", "Ranolazine 500 mg.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §2.1 Ischaemic heart disease or coronary artery diseases.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Stable angina: management. Clinical guideline CG126 (2011, updated 2016). <a href="https://www.nice.org.uk/guidance/cg126" target="_blank" rel="noopener">nice.org.uk</a></li>
<li id="ref-3">Maron DJ, Hochman JS, Reynolds HR, et al. Initial invasive or conservative strategy for stable coronary disease (ISCHEMIA). N Engl J Med 2020;382(15):1395–1407. <a href="https://doi.org/10.1056/NEJMoa1915922" target="_blank" rel="noopener">doi:10.1056/NEJMoa1915922</a></li>
<li id="ref-4">Vrints C, Andreotti F, Koskinas KC, et al. 2024 ESC guidelines for the management of chronic coronary syndromes. Eur Heart J 2024;45(36):3415–3537. <a href="https://doi.org/10.1093/eurheartj/ehae177" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehae177</a></li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §2.1", "<span class='pass'>Read directly</span>", "Risk factors, symptoms, acute management"],
["NICE CG126", "<span class='pass'>Read directly</span>", "Drug steps, GTN advice, secondary prevention, revascularisation"],
["ISCHEMIA", "<span class='pass'>Read directly</span>", "Abstract"],
["ESC 2024", "<span class='unv'>Not read</span>", "Full text behind a bot check — not bypassed; cited only"],
["Dose ranges", "<span class='pass'>Checked</span>", "NEML strengths + existing drug cards; ranolazine and statin intensity standard labelling"],
["LDL target and BP target", "<span class='unv'>Not read</span>", "From the lipid and hypertension pages, not re-read here"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "anginastep"]], "qc")}` }
]
});
