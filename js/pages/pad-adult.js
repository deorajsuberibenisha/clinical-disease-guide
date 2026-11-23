/* Peripheral arterial disease of the legs — adults */
registerPage({
id: "pad-adult",
title: "Peripheral Arterial Disease — Adults",
subtitle: "Leg pain on walking, a foot that will not heal, or a cold white leg: diagnosing PAD with a Doppler and the ABI, the medicines that save hearts as well as legs, walking as treatment, saving the limb in chronic and acute ischaemia, and Buerger's disease in young smokers",
age: "Adults", specs: ["cardio", "surg", "medicine", "endo"],
keywords: ["peripheral arterial disease", "peripheral artery disease", "PAD", "intermittent claudication", "ankle brachial index", "ABI", "critical limb ischaemia", "chronic limb-threatening ischaemia", "CLTI", "acute limb ischaemia", "gangrene", "Buerger's disease", "thromboangiitis obliterans", "cilostazol", "rivaroxaban 2.5 mg", "supervised exercise", "revascularisation", "Fontaine", "Rutherford", "WIfI"],
related: ["diabeticfoot-adult", "lipids-adult", "stroke-adult", "acs-adult", "dm-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">PAD is atherosclerosis of the leg arteries. The leg symptoms are what patients notice, but the real danger is the same disease in the heart and brain: most people with PAD die of heart attack or stroke, not of their legs. So treatment always has two aims — protect the whole body with medicines and smoking cessation, and protect the limb with walking, foot care and, when needed, revascularisation.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Calf, thigh or buttock pain on walking, relieved by rest; weak foot pulses; non-healing foot wound; rest pain at night.</p></div>
<div><h4>Diagnose</h4><p>Ankle–brachial index (ABI) with a handheld Doppler: <b>0.90 or less = PAD</b>; over 1.40 = stiff arteries (diabetes, CKD): use toe pressure.</p></div>
<div><h4>Everyone</h4><p>Stop all tobacco; ${dr("atorvastatin_hi")} high-intensity statin; ${dr("aspirin")} or ${dr("clopidogrel")}; BP and diabetes control; foot care.</p></div>
<div><h4>Claudication</h4><p>Supervised or structured walking 30–45 min, 3 times a week for 12 weeks; ${dr("cilostazol")} if no heart failure.</p></div>
<div><h4>Limb threat</h4><p>Rest pain, ulcer or gangrene = chronic limb-threatening ischaemia: urgent vascular referral.</p></div>
<div><h4>Emergency</h4><p>Sudden cold, white, painful, pulseless leg = acute limb ischaemia: heparin and a vascular surgeon within hours.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan STG has no section on PAD; related care appears in diabetes and diabetic-foot guidance (see <a href="#/d/diabeticfoot-adult">diabetic foot</a>). Rising diabetes, hypertension and tobacco use make PAD increasingly common, and Buerger's disease (thromboangiitis obliterans) is seen in young South Asian men who smoke or chew tobacco. NEML 2025 lists aspirin, clopidogrel, atorvastatin and pentoxifylline (NRH); cilostazol and low-dose rivaroxaban are not listed.${r(8)} Vascular surgery and angiography are concentrated at the national referral hospital, so early recognition and referral of threatened limbs matters. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, causes and who is at risk", html: `
<p>PAD is narrowing or blockage of the arteries supplying the legs, almost always from atherosclerosis. It ranges from no symptoms (most people) to claudication, chronic limb-threatening ischaemia (CLTI) and acute limb ischaemia.${r(1, 2)}</p>
${tbl(["Risk factor", "Notes"], [
["<b>Smoking and other tobacco</b>", "Strongest risk; Buerger's disease is almost exclusive to tobacco users"],
["<b>Diabetes</b>", "Distal (below-knee) disease, calcified arteries, neuropathy hides symptoms; leading cause of amputation"],
["Hypertension, high cholesterol, CKD", "—"],
["Age over 50–65, family history of atherosclerosis", "—"],
["Other atherosclerosis (coronary, carotid)", "PAD often coexists"]])}
${tbl(["Other causes of limb ischaemia", "Clue"], [
["Thromboangiitis obliterans (Buerger's)", "Young male tobacco user, fingers and toes, migratory phlebitis, Raynaud"],
["Embolism (AF, mural thrombus after MI)", "Sudden onset, irregular pulse"],
["Popliteal entrapment or aneurysm", "Young athlete; pulsatile popliteal mass"],
["Vasculitis, trauma, ergotamine", "—"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("From plaque to limb loss", [
F.s("Atherosclerotic plaque narrows iliac, femoral or tibial arteries"), F.a,
F.s("Walking increases muscle demand beyond supply → claudication; rest relieves it"), F.a,
F.d("Progression?"), F.a,
F.b([["Most (collaterals develop)", F.ok("Stable claudication for years")], ["About 1 in 5 over 5 years", F.e("Rest pain, ulcers, gangrene (CLTI)")]]), F.a,
F.e("Acute thrombosis or embolism → acute limb ischaemia"), F.a,
F.e("Meanwhile: heart attack and stroke risk 3–6 times higher")])}
<p>Only a minority with claudication ever need amputation, but about a fifth have a heart attack, stroke or vascular death within 5 years. That is why statins, antiplatelets and stopping tobacco matter more than any operation for most patients.${r(1, 3)}</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ACC/AHA 2024", "ESC 2024", "This guide and why"], [
["Antithrombotic", "Single antiplatelet (aspirin or clopidogrel); rivaroxaban 2.5 mg twice daily + aspirin for symptomatic PAD at low bleeding risk", "Same, rivaroxaban + aspirin to be considered; clopidogrel may be preferred over aspirin", "Clopidogrel or aspirin (NEML); rivaroxaban + aspirin where affordable " + LB.loc()],
["Claudication drugs", "Cilostazol effective; pentoxifylline not effective", "Cilostazol may be considered", "Cilostazol if no heart failure; avoid pentoxifylline for claudication"],
["Exercise", "Supervised exercise as first-line", "Supervised exercise for claudication", "Walk–rest–walk programme at home if no supervised service"],
["Asymptomatic PAD", "Statin and risk-factor care; screening ABI in high-risk people", "Same", "Measure ABI in diabetics over 50, smokers, foot ulcers"],
["Bhutan", "No STG section", "—", "International guidance"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
${tbl(["Stage (Fontaine / Rutherford)", "Features", "Action"], [
["I / 0 — asymptomatic", "Low ABI, absent pulses, no symptoms (often limited walking for other reasons)", "Risk-factor treatment"],
["II / 1–3 — claudication", "Reproducible cramp in calf (femoral-popliteal), thigh or buttock (aorto-iliac) after a fixed distance; relieved within minutes by standing still", "Exercise, medicines"],
["III / 4 — rest pain", "Burning forefoot pain at night, relieved by hanging the leg down", "CLTI: urgent referral"],
["IV / 5–6 — tissue loss", "Non-healing ulcer, gangrene (often after minor trauma)", "CLTI: urgent referral, WIfI staging"],
["Acute limb ischaemia", "6 Ps: pain, pallor, pulselessness, perishing cold, paraesthesia, paralysis", "Emergency"]])}
${box("red", "Acute limb ischaemia — emergency", `<ul><li>Sudden pain with a cold, pale or mottled limb and absent pulses</li><li>Numbness or weakness = threatened limb: revascularise within about 6 hours</li><li>Fixed mottling, rigid muscles = irreversible</li></ul>`)}
<h3>Examination</h3>
<ul><li>Pulses: femoral, popliteal, dorsalis pedis, posterior tibial; femoral bruit.</li><li>Skin: hair loss, shiny skin, thick nails, pallor on elevation, dependent rubor (Buerger's test), cool feet, ulcers between toes and on heels.</li><li>Capillary refill; neuropathy (monofilament) in diabetics.</li></ul>
<h3>The typical patient</h3>
<p>A 61-year-old man from Thimphu with diabetes, who has smoked for 40 years, gets pain in his right calf after walking about 200 m uphill, easing after 2 minutes' rest. Foot pulses are absent on the right. Arm systolic 146 mmHg, right ankle 98 mmHg: <b>ABI 0.67 — PAD with claudication (Fontaine II).</b> He needs to stop smoking, atorvastatin 40–80 mg, clopidogrel 75 mg, BP and glucose control, a daily walking programme, foot care teaching, and an ECG for coexisting coronary disease. Revascularisation only if symptoms still limit his life after 3–6 months.</p>
` },

{ id: "ddx", title: "Differential diagnosis of leg pain on walking", html: `
${tbl(["Condition", "Clue", "Test"], [
["Spinal stenosis (neurogenic claudication)", "Pain and numbness relieved by sitting or bending forward; normal pulses", "Normal ABI; MRI spine"],
["Osteoarthritis of hip or knee", "Joint pain at start of walking, variable", "Examination, X-ray"],
["Venous claudication", "Bursting pain, swollen leg, previous DVT", "Duplex"],
["Chronic compartment syndrome", "Young athlete", "Compartment pressures"],
["Diabetic neuropathic pain", "Burning at rest, both feet, normal pulses", "ABI, monofilament"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["<b>Ankle–brachial index</b> (handheld Doppler)", "Diagnosis and severity", "0.90 or less = PAD; 0.91–0.99 borderline; over 1.40 non-compressible", "Essential"],
["Toe–brachial index", "When ABI over 1.40 (diabetes, CKD)", "0.70 or less = PAD", "Selected"],
["Exercise ABI", "Symptoms with normal resting ABI", "Fall in ankle pressure after walking", "Selected"],
["Lipids, HbA1c/glucose, creatinine, CBC, ECG", "Risk factors, coronary disease", "—", "Essential"],
["Arterial duplex ultrasound", "Site and length of disease", "Before revascularisation", "Referral"],
["CT angiography / catheter angiography", "Planning revascularisation", "Contrast; kidney function", "Specialist"],
["ECG; echo if AF or embolism", "Source of embolism in acute ischaemia", "—", "Acute"]])}
` },

{ id: "staging", title: "ABI calculator and stage", html: `
<p>Enter arm and ankle pressures (use the higher arm pressure and, for each leg, the higher of the dorsalis pedis and posterior tibial).${r(1, 4)}</p>
<div class="calc" data-calc="abi"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Everyone with PAD (protect heart, brain and limb)</h3>
<ul><li><b>Stop all tobacco</b> (cigarettes, khaini, chewing tobacco): the single most effective treatment; offer counselling and nicotine replacement where available.</li>
<li>${dr("atorvastatin_hi")} high-intensity statin (atorvastatin 40–80 mg) regardless of cholesterol; LDL target under 55 mg/dL (1.4 mmol/L) in ESC 2024.</li>
<li>Antiplatelet: ${dr("clopidogrel")} 75 mg daily (CAPRIE: slightly better than aspirin in PAD) or ${dr("aspirin")} 75–100 mg daily. Symptomatic PAD with low bleeding risk: ${dr("rivaroxaban_vasc")} 2.5 mg twice daily plus aspirin (COMPASS) where available.${r(5)}</li>
<li>BP under 130/80 (ACE inhibitor or ARB preferred); diabetes control (SGLT2 inhibitors and GLP-1 agonists have cardiovascular benefit); foot care education and annual foot checks.</li>
<li>Vaccinations; healthy diet; weight control.</li></ul>
<h3>B. Claudication</h3>
<ul><li><b>Structured exercise:</b> walk until moderate pain, rest until it settles, repeat — 30–45 minutes, at least 3 times a week, for at least 12 weeks; improves walking distance more than any drug.${r(6)}</li>
<li>${dr("cilostazol")} 100 mg twice daily if no heart failure (not on NEML); review at 3 months. Pentoxifylline is not effective for claudication.</li>
<li>Revascularisation (angioplasty/stent or bypass) only when symptoms remain lifestyle-limiting after exercise and medicines, and anatomy is suitable.</li></ul>
<h3>C. Chronic limb-threatening ischaemia</h3>
<ul><li>Urgent referral to vascular surgery: imaging and revascularisation to save the limb.</li>
<li>Meanwhile: analgesia (allow leg dependency at night), wound care, treat infection (see <a href="#/d/diabeticfoot-adult">diabetic foot</a>), offload pressure, avoid compression bandages, protect heels.</li>
<li>Stage with WIfI (wound, ischaemia, foot infection); primary amputation when the limb is unsalvageable or the patient non-ambulatory with severe disease.${r(3)}</li></ul>
<h3>D. Acute limb ischaemia</h3>
<ul><li>${dr("heparin_ufh")} 80 units/kg IV bolus then infusion (unless contraindicated), analgesia, oxygen, IV fluids.</li>
<li>Emergency vascular surgery: embolectomy, thrombolysis or bypass; threatened limbs (sensory or motor loss) within about 6 hours. Watch for reperfusion injury and compartment syndrome (see <a href="#/d/compartment-adult">compartment syndrome</a>).</li>
<li>Look for the source: ECG for AF (anticoagulate long-term).${r(7)}</li></ul>
<h3>E. Buerger's disease</h3>
<ul><li>Complete and permanent abstinence from all tobacco is the only treatment that halts it; wound care; analgesia; amputation risk is high with continued use.</li></ul>
<h3>F. Working in Bhutan</h3>
${tbl(["Setting", "What to do"], [
["BHU or PHC", "Check foot pulses in diabetics; tobacco cessation; refer non-healing ulcers and cold painful legs immediately"],
["District hospital", "Handheld Doppler ABI; statin, antiplatelet, risk factors; wound care; heparin and urgent transfer for acute ischaemia"],
["National referral hospital", "Duplex, CT angiography, angioplasty, bypass, amputation"]])}
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("atorvastatin_hi"), "40–80 mg daily", "All patients"],
[dr("clopidogrel"), "75 mg daily", "Preferred single antiplatelet"],
[dr("aspirin"), "75–100 mg daily", "Alternative; with rivaroxaban 2.5 mg BD"],
[dr("rivaroxaban_vasc"), "2.5 mg twice daily + aspirin", "Low bleeding risk; not on NEML"],
[dr("cilostazol"), "100 mg twice daily", "Claudication; no heart failure; not on NEML"],
[dr("pentoxifylline"), "Not recommended for claudication", "NEML (NRH)"],
[dr("heparin_ufh"), "80 units/kg IV bolus, then 18 units/kg/h (aPTT)", "Acute limb ischaemia"],
[dr("enalapril"), "By BP", "ACE inhibitor for BP"]])}
` },

{ id: "populations", title: "Diabetes, older adults and women", html: `
<ul><li><b>Diabetes:</b> below-knee disease; neuropathy masks claudication — check ABI or toe pressure routinely; ulcers often neuro-ischaemic.</li>
<li><b>Older adults:</b> often asymptomatic because of limited walking; high cardiovascular risk.</li>
<li><b>Women:</b> atypical symptoms and under-diagnosis are common.</li></ul>
` },

{ id: "scenarios", title: "Situations", html: `
${tbl(["Situation", "What changes", "Why"], [
["Atrial fibrillation", "Anticoagulant (warfarin/DOAC) replaces antiplatelet in most", "Embolism prevention; avoid triple therapy"],
["Heart failure", "No cilostazol", "PDE3 inhibitor"],
["CKD", "Toe pressures; contrast caution", "Calcified arteries"],
["Beta-blockers", "Safe in PAD", "Not a cause of worse claudication"],
["Recent stent or bypass", "Dual antiplatelet for a period, or rivaroxaban 2.5 mg + aspirin (VOYAGER PAD)", "Graft and stent patency"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Myocardial infarction, stroke", "—", "Statin, antiplatelet, tobacco cessation"],
["CLTI, amputation", "Rest pain, tissue loss", "Revascularisation"],
["Acute limb ischaemia", "6 Ps", "Emergency surgery"],
["Infection, osteomyelitis", "Diabetic foot", "Antibiotics, debridement"],
["Reperfusion injury", "Swelling, hyperkalaemia after revascularisation", "Fasciotomy, monitoring"]])}
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<ul><li>Review every 6–12 months: symptoms, foot examination, ABI if symptoms change, adherence, tobacco status, lipids, HbA1c.</li></ul>
${box("green", "What to tell the patient", `<ul><li>"The narrowing in your leg arteries is also in your heart and brain. The tablets protect all three."</li><li>Stopping tobacco — smoking or chewing — is the most important treatment.</li><li>Walk every day: walk until it hurts, rest, then walk again. It builds new small vessels.</li><li>Check your feet daily; wear well-fitting shoes; never walk barefoot; no hot water bottles on numb feet.</li></ul>`)}
${box("red", "Come at once if", `<ul><li>Sudden pain with a cold, white or numb leg</li><li>A sore, blister or black area on the foot; pain at night in the foot</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Measuring the ankle–brachial index", src: "images/abi-test.jpg", mod: "Illustration", ctx: "Diagnosis of PAD", loc: "Arm and ankle", find: "BP cuffs on the arm and ankle with a Doppler probe", signs: "ABI = ankle systolic ÷ arm systolic", interp: "0.90 or less confirms PAD", by: "National Heart, Lung, and Blood Institute", page: "https://commons.wikimedia.org/wiki/File:Pad_abi.jpg", lic: "Public domain" })}
${fig({ title: "Gangrene of the toes", src: "images/gangrene-foot.jpg", mod: "Clinical photograph", ctx: "Person with diabetes", loc: "Right foot", find: "Black, dry gangrene of the first to fourth toes", signs: "Tissue loss (Fontaine IV)", interp: "Chronic limb-threatening ischaemia: urgent vascular assessment", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:GangreneFoot.JPG", lic: "CC BY-SA 3.0" })}
</div>
<div class="pair">
${fig({ title: "Buerger's disease on CT angiography", src: "images/buerger-cta.jpg", mod: "CT angiography", ctx: "Young smoker with limb ischaemia", loc: "Leg arteries", find: "Segmental occlusions of distal arteries with corkscrew collaterals", signs: "Thromboangiitis obliterans", interp: "Complete tobacco cessation is essential", by: "Milorad Dimic, MD", page: "https://commons.wikimedia.org/wiki/File:Morbus_Buerger-2.JPG", lic: "CC BY-SA 3.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Leg pain or foot wound — could it be PAD?", [
F.s("Pulses, foot inspection, ABI"), F.a,
F.d("Sudden cold, pale, pulseless leg?"), F.a,
F.b([["Yes", F.e("Heparin, emergency vascular surgery")], ["No", F.d("ABI 0.90 or less (or TBI 0.70 or less)?")]]), F.a,
F.b([["No", F.ok("Look for other causes")], ["Yes", F.s("Statin, antiplatelet, stop tobacco, BP/diabetes control")]]), F.a,
F.b([["Claudication", F.s("Exercise ± cilostazol; revascularise if still limiting")], ["Rest pain/ulcer/gangrene", F.e("CLTI: urgent vascular referral")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Feel the foot pulses in every diabetic.</b></li>
<li>An ABI over 1.40 is not normal — the arteries are stiff.</li>
<li>Most claudicants need tablets and walking, not an operation.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Treating only the leg", "Heart attacks and strokes", "Statin, antiplatelet, tobacco cessation"],
["Compression bandage on an ischaemic leg ulcer", "Gangrene", "Check ABI first"],
["Waiting with acute limb ischaemia", "Amputation", "Heparin and surgeon within hours"],
["Cilostazol in heart failure", "Increased mortality", "Check for heart failure"],
["Accepting a normal ABI in diabetes", "Calcified arteries", "Toe pressure, waveforms"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What ABI defines PAD?", "0.90 or less.")}
${qa("Student", "List the 6 Ps of acute limb ischaemia.", "Pain, pallor, pulselessness, perishing cold, paraesthesia, paralysis.")}
${qa("Intern/MO", "What is the first-line treatment for claudication?", "Supervised or structured walking exercise, with statin, antiplatelet and tobacco cessation.")}
${qa("Intern/MO", "Why is cilostazol avoided in heart failure?", "PDE3 inhibitors increased mortality in heart failure (boxed warning).")}
${qa("Specialist", "What did COMPASS show in PAD?", "Rivaroxaban 2.5 mg twice daily plus aspirin reduced major cardiovascular and limb events compared with aspirin alone, with more bleeding.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Gornik HL, Aronow HD, Goodney PP et al. 2024 ACC/AHA/AACVPR/APMA/ABC/SCAI/SVM/SVN/SVS/SIR/VESS guideline for the management of lower extremity peripheral artery disease. <i>Circulation</i> 2024;149:e1313–e1410. <a href="https://doi.org/10.1161/CIR.0000000000001251" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000001251</a></li>
<li id="ref-2">Mazzolai L, Teixido-Tura G, Lanzi S et al. 2024 ESC Guidelines for the management of peripheral arterial and aortic diseases. <i>Eur Heart J</i> 2024;45:3538–3700. <a href="https://doi.org/10.1093/eurheartj/ehae179" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehae179</a></li>
<li id="ref-3">Conte MS, Bradbury AW, Kolh P et al. Global vascular guidelines on the management of chronic limb-threatening ischemia. <i>J Vasc Surg</i> 2019;69(6S):3S–125S. <a href="https://doi.org/10.1016/j.jvs.2019.02.016" target="_blank" rel="noopener">doi:10.1016/j.jvs.2019.02.016</a></li>
<li id="ref-4">Ankle–brachial index interpretation as summarised in the 2024 ACC/AHA guideline (normal 1.00–1.40; borderline 0.91–0.99; abnormal 0.90 or less; non-compressible over 1.40; TBI 0.70 or less abnormal).</li>
<li id="ref-5">Anand SS, Caron F, Eikelboom JW et al. Major adverse limb events and mortality in patients with peripheral artery disease: the COMPASS trial. <i>J Am Coll Cardiol</i> 2018;71:2306–2315. <a href="https://doi.org/10.1016/j.jacc.2018.03.008" target="_blank" rel="noopener">doi:10.1016/j.jacc.2018.03.008</a></li>
<li id="ref-6">Hageman D, Fokkenrood HJ, Gommans LN, van den Houten MM, Teijink JA. Supervised exercise therapy versus home-based exercise therapy versus walking advice for intermittent claudication. <i>Cochrane Database Syst Rev</i> 2018;(4):CD005263. <a href="https://doi.org/10.1002/14651858.CD005263.pub4" target="_blank" rel="noopener">doi:10.1002/14651858.CD005263.pub4</a></li>
<li id="ref-7">Björck M, Earnshaw JJ, Acosta S et al. European Society for Vascular Surgery (ESVS) 2020 clinical practice guidelines on the management of acute limb ischaemia. <i>Eur J Vasc Endovasc Surg</i> 2020;59:173–218. <a href="https://doi.org/10.1016/j.ejvs.2019.09.006" target="_blank" rel="noopener">doi:10.1016/j.ejvs.2019.09.006</a></li>
<li id="ref-8">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG", "<span class='pass'>Checked</span>", "No PAD section"],
["ABI bands, cilostazol, rivaroxaban dose", "<span class='pass'>Checked</span>", "ACC/AHA 2024 summaries and drug labels"],
["Cilostazol and rivaroxaban on NEML", "<span class='flag'>Gap</span>", "Not listed"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref"],
["Images", "<span class='pass'>Done</span>", "Public domain / CC BY-SA 3.0"]], "qc")}
` }
]
});
