/* Cardiomyopathies — adults (dilated, hypertrophic, restrictive, peripartum, alcohol/tachycardia/nutritional). NEW disease (batch N-2, 27 Nov 2026).
   Sources read directly: Merck Manual Professional — Overview of cardiomyopathies, Dilated, Hypertrophic and Restrictive cardiomyopathy (all last
   updated Sept 2026; read in browser): DCM familial in 30–40% (TTN, LMNA); acquired — viral, alcohol, chemotherapy, tachycardia-mediated, thyroid,
   thiamine deficiency, autoimmune, peripartum; treat reversible causes; HFrEF GDMT (beta-blocker, ARNI/ACEi/ARB, MRA, SGLT2i, diuretics);
   anticoagulate with LV thrombus or AF; ICD for symptomatic LVEF ≤ 35% despite GDMT, CRT if LVEF ≤ 35% with wide QRS/LBBB; teratogenic HF drugs
   (ACEi, ARB, ARNI, MRA, SGLT2i) in pregnancy; HCM — symptoms 30s–50s, exertional dyspnoea, angina, palpitations, syncope (SCD marker); avoid volume
   depletion and vasodilators (heat, alcohol, big meals, high-dose diuretics); beta-blocker or verapamil/diltiazem first line (no verapamil with
   severe rest dyspnoea, hypotension, gradient ≥ 100 mmHg or in children); myosin inhibitors, disopyramide, septal reduction for gradient ≥ 50 mmHg
   despite drugs; SCD risk stratification, ICD; AF poorly tolerated; family screening (history, examination, ECG, echo; genetic testing);
   RCM — infiltrative (amyloid, sarcoid), storage (Fabry, haemochromatosis), endomyocardial fibrosis/hypereosinophilia; cautious diuretics
   (preload-dependent), anticoagulation for AF/thrombus, SGLT2i ± MRA, treat cause);
   ICMR/DHR STW Heart failure (January 2026; library PDF read: symptoms/signs; aetiology list incl. ischaemic, hypertensive/diabetic, RHD,
   post-viral within 3 months, peripartum (last trimester or after delivery), idiopathic, post-chemotherapy; PHC furosemide and referral criteria
   (SBP < 90 or > 200, HR < 50 or > 120, RR > 30, oliguria, confusion, low SpO2); district: furosemide, ARNI, spironolactone, NIV; tertiary: echo
   HFrEF EF < 35%, beta-blockers after decongestion, ivabradine, vericiguat, digoxin; ICD; CRT for NYHA II–III, EF < 35%, QRS > 150 ms LBBB after
   3 months; vaccines). ESC 2018 pregnancy guideline DOI verified earlier (rhd-adult) — PPCM bromocriptine details not read, marked. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "cardiomyopathy-adult",
title: "Cardiomyopathy — Adults",
subtitle: "Heart muscle disease: find the type on echo (dilated, hypertrophic or restrictive), look for reversible causes such as alcohol, fast heart rhythm, thyroid disease, thiamine deficiency and pregnancy, give heart-failure treatment, and screen the family",
age: "Adults", specs: ["cardio", "medicine", "obg"],
keywords: ["cardiomyopathy", "dilated cardiomyopathy", "DCM", "hypertrophic cardiomyopathy", "HCM", "HOCM", "restrictive cardiomyopathy", "peripartum cardiomyopathy", "PPCM", "alcoholic cardiomyopathy", "tachycardia-induced cardiomyopathy", "beriberi heart", "endomyocardial fibrosis", "amyloid heart", "sudden cardiac death young", "LVOT obstruction", "family screening heart"],
related: ["hf-adult", "af-adult", "rhd-adult", "alcohol-adult", "arrest-adult", "thyroid-adult", "pericarditis-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Cardiomyopathy means the heart muscle itself is abnormal. Patients present with heart failure, palpitations, fainting, stroke or sudden death. The echo tells you the type; the history often tells you the cause ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Dilated</h4><p>Big, weak left ventricle — alcohol, previous viral illness, fast AF, thyroid, thiamine deficiency, pregnancy, chemotherapy, genes ${r(1)}.</p></div>
<div><h4>Hypertrophic</h4><p>Thick wall (often septum), young adults, exertional breathlessness or fainting, family history of sudden death ${r(1)}.</p></div>
<div><h4>Restrictive</h4><p>Stiff ventricle, big atria — amyloid, sarcoid, iron overload, endomyocardial fibrosis ${r(1)}.</p></div>
<div><h4>Treat</h4><p>Remove the cause; heart-failure treatment for reduced EF; in HCM avoid dehydration and vasodilators; screen first-degree relatives ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Echo is available at JDWNRH and the regional referral hospitals; devices (ICD, CRT) and genetic testing need referral abroad ${LB.loc()}. Alcohol-related dilated cardiomyopathy is an important preventable cause ${LB.loc()}. Peripartum cardiomyopathy should be considered in any woman breathless in late pregnancy or the months after delivery ${r(2)}. See ${P("hf-adult", "Heart failure")} for full drug treatment and NEML availability.</p>`)}
` },

{ id: "overview", title: "Types and causes", html: `
${tbl(["Type", "Echo picture", "Main causes"], [
["Dilated (DCM)", "Dilated LV with reduced EF", "Familial in 30–40% (TTN, LMNA genes); viral myocarditis; alcohol; chemotherapy (anthracyclines); persistent tachycardia (AF, frequent ectopics); thyroid disease; thiamine deficiency; autoimmune disease; peripartum " + r(1)],
["Hypertrophic (HCM)", "Unexplained LV wall thickening, often asymmetric septal; ± LV outflow obstruction", "Genetic (sarcomere genes); exclude hypertension and athletic heart " + r(1)],
["Restrictive (RCM)", "Non-dilated stiff ventricles, large atria", "Amyloidosis, sarcoidosis, Fabry disease, haemochromatosis, endomyocardial fibrosis, hypereosinophilia, carcinoid, radiation " + r(1)],
["Peripartum (PPCM)", "Reduced EF towards the end of pregnancy or after delivery, no other cause", "Pregnancy-related; risk with hypertensive disorders, twins, older age " + r(2) + " " + LB.exp("RISK LIST STANDARD")],
["Other", "Takotsubo (stress), arrhythmogenic RV cardiomyopathy", "Usually reversible (Takotsubo) " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Cardiomyopathy", [F.s("Genetic variant or injury (alcohol, virus, toxin, tachycardia, pregnancy)"), F.a, F.d("Phenotype"), F.a, F.b([["Dilated", F.e("Systolic failure, mitral regurgitation, arrhythmia, LV clot")], ["Hypertrophic", F.e("Diastolic failure, outflow obstruction, AF, sudden death")], ["Restrictive", F.e("Diastolic failure, AF, clots")]])])}
<p>In obstructive HCM the outflow gradient rises with anything that reduces filling or vascular tone — dehydration, diuretics, vasodilators, heat, alcohol, large meals ${r(1)}.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ICMR HF STW 2026", "Merck 2026 (US/ESC-based)", "This guide"], [
["Reduced EF cut-off", "HFrEF EF < 35%; HFpEF 35–50%", "HFrEF EF ≤ 40% (GDMT), ICD/CRT at ≤ 35%", "Use the hf-adult page definitions; device criteria at ≤ 35% " + r(1) + r(2)],
["First drugs", "Furosemide, ARNI and spironolactone; beta-blocker after decongestion; SGLT2i", "Four pillars: beta-blocker, ARNI/ACEi/ARB, MRA, SGLT2i", "Four pillars as tolerated; diuretic for congestion " + r(1) + r(2)],
["CRT", "NYHA II–III, EF < 35%, QRS > 150 ms with LBBB after 3 months", "LVEF ≤ 35% with QRS prolongation, especially LBBB", "Refer if criteria met " + r(1) + r(2)]
])}
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li><b>Heart failure</b>: breathlessness, orthopnoea, PND, oedema, tiredness, raised JVP, crackles, S3 ${r(2)}.</li>
<li><b>Arrhythmia</b>: palpitations, AF, syncope, sudden death ${r(1)}.</li>
<li><b>Embolism</b>: stroke or limb ischaemia from LV or atrial clot ${r(1)}.</li>
<li><b>HCM</b>: exertional breathlessness, angina-like pain with normal coronaries, fainting on exertion (a sudden-death warning), ejection systolic murmur that gets louder on standing or Valsalva ${r(1)} ${LB.exp("MURMUR MANOEUVRES STANDARD")}.</li>
<li><b>Restrictive</b>: right-sided failure — raised JVP, ascites, oedema, with a normal-sized heart ${r(1)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 45-year-old man from Paro who drinks about a bottle of ara a day has 2 months of breathlessness and leg swelling; pulse 110 irregular, JVP raised, basal crackles; echo shows a dilated LV with EF 25%. <b>Dilated cardiomyopathy, probably alcohol-related, with AF</b>: stop alcohol completely (thiamine), diuretic, start heart-failure drugs, rate control and anticoagulation, repeat echo after 3–6 months — function often improves with abstinence ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Ischaemic heart disease", "Previous MI, regional wall motion defects " + P("acs-adult", "ACS")],
["Valve disease (RHD)", "Murmur, stenosed or regurgitant valve on echo " + P("rhd-adult", "RHD")],
["Hypertensive heart disease", "Long-standing high BP, concentric hypertrophy"],
["Athlete's heart", "Trained, normal diastolic function, regresses with rest"],
["Constrictive pericarditis", "Thick pericardium, TB history " + P("pericarditis-adult", "Pericarditis")],
["Thyroid disease, anaemia", "TSH, Hb — high-output or reversible failure"]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Echocardiography</b>: LV size and EF, wall thickness, outflow gradient, valves, atria, clot ${r(1)} ${r(2)}.</li>
<li>ECG: AF, LBBB (CRT), Q waves, LVH with deep T inversion (HCM), low voltage (amyloid) ${r(2)}.</li>
<li>Chest X-ray, FBC, creatinine and electrolytes, TSH, glucose/HbA1c, lipids, liver tests, BNP/NT-proBNP where available ${r(2)}.</li>
<li>Look for causes: alcohol history, thiamine, iron studies (haemochromatosis), HIV, recent pregnancy, chemotherapy history, autoimmune screen ${r(1)}.</li>
<li>Holter monitoring for palpitations or syncope; coronary assessment if ischaemia is possible ${r(2)}.</li>
<li>Cardiac MRI and genetic testing at specialist centres ${r(1)}.</li>
</ul>
` },

{ id: "staging", title: "Cardiomyopathy helper", html: `<div class="calc" data-calc="cmplan"></div><div class="calc" data-calc="ntprobnp"></div>` },

{ id: "manage", title: "Management", html: `
<h3>All types</h3>
<ul>
<li>Treat reversible causes: <b>stop alcohol</b>, control fast rhythms, correct thyroid disease and thiamine deficiency, stop cardiotoxic drugs ${r(1)}.</li>
<li>Salt restriction, smoking cessation, vaccines (influenza, pneumococcal) ${r(2)}.</li>
<li>Anticoagulate if AF or LV/atrial thrombus ${r(1)}. See ${P("af-adult", "AF")}.</li>
</ul>
<h3>Dilated cardiomyopathy (reduced EF)</h3>
<ul>
<li>Decongest with ${dr("furosemide")}; then heart-failure drugs — beta-blocker, ARNI (or ACE inhibitor/ARB), mineralocorticoid antagonist (${dr("spironolactone")}), SGLT2 inhibitor (${dr("dapagliflozin")}) ${r(1)} ${r(2)}. Doses and titration: ${P("hf-adult", "Heart failure")}.</li>
<li>Refer for ICD if EF stays ≤ 35% with symptoms despite at least 3 months of treatment; CRT if also wide QRS with LBBB ${r(1)} ${r(2)}.</li>
<li>Immunosuppression only for specific inflammatory causes (giant-cell or eosinophilic myocarditis, sarcoid) ${r(1)}.</li>
</ul>
<h3>Hypertrophic cardiomyopathy</h3>
<ul>
<li><b>Avoid</b> dehydration, high-dose diuretics, vasodilators (nitrates, dihydropyridines), heavy meals, alcohol and heat — they worsen obstruction ${r(1)}.</li>
<li>Symptoms: beta-blocker (e.g. ${dr("metoprolol")} or ${dr("bisoprolol")}) or verapamil/diltiazem; avoid verapamil with severe rest breathlessness, low BP, gradient ≥ 100 mmHg, or in children ${r(1)}.</li>
<li>Gradient ≥ 50 mmHg with symptoms despite drugs: specialist — myosin inhibitors, disopyramide, or septal myectomy/alcohol septal ablation ${r(1)}.</li>
<li>Sudden-death risk assessment (fainting, family history of sudden death, very thick wall, ventricular tachycardia) → ICD referral ${r(1)}.</li>
<li>AF is poorly tolerated — restore or control rhythm and anticoagulate ${r(1)}.</li>
<li><b>Family</b>: offer first-degree relatives history, examination, ECG and echo (and genetic testing if a variant is known) ${r(1)}.</li>
</ul>
<h3>Restrictive cardiomyopathy</h3>
<p>Treat the cause (e.g. sarcoid, iron overload); careful diuretics — these patients depend on filling pressure; SGLT2 inhibitor ± MRA; anticoagulate for AF or clot ${r(1)}.</p>
<h3>Peripartum cardiomyopathy</h3>
<ul>
<li>Consider in any breathless woman in the last month of pregnancy or months after delivery; echo ${r(2)}.</li>
<li>During pregnancy: avoid ACE inhibitors, ARB, ARNI, MRA and SGLT2 inhibitors (teratogenic); beta-blocker, hydralazine with nitrate, and diuretic for congestion; deliver with the obstetric–cardiology team ${r(1)}. After delivery: full heart-failure treatment (enalapril is compatible with breastfeeding) ${LB.exp("BREASTFEEDING SAFETY")}.</li>
<li>Severe LV dysfunction: anticoagulation (clot risk) ${r(1)}. Bromocriptine is used by specialists (ESC) ${LB.exp("ESC 2018 — DOSE NOT VERIFIED")}.</li>
<li>Future pregnancy is risky, especially if EF has not recovered — counsel and offer contraception ${LB.exp("STANDARD ADVICE")}. See ${P("rhd-adult", "RHD (pregnancy section)")}.</li>
</ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Use", "Note"], [
[dr("furosemide"), "Congestion " + r(2), "Use carefully in HCM and RCM " + r(1)],
[dr("bisoprolol") + " / " + dr("metoprolol"), "DCM (prognosis); HCM (symptoms) " + r(1), "Start after decongestion " + r(2)],
[dr("sacubitril", "ARNI (sacubitril–valsartan)") + " / " + dr("enalapril"), "Reduced EF " + r(1) + r(2), "Not in pregnancy"],
[dr("spironolactone"), "Reduced EF " + r(1) + r(2), "Check potassium; not in pregnancy"],
[dr("dapagliflozin"), "Reduced and preserved EF " + r(1), "Not in pregnancy"],
["Verapamil / diltiazem", "HCM symptoms " + r(1), "Not in reduced EF; see cautions"]
])}
<p class="small">See the ${P("hf-adult", "Heart failure")} page for doses, titration and NEML listing.</p>
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Young people with fainting on exercise:</b> ECG and echo before return to sport (HCM) ${r(1)}.</li><li><b>Pregnancy:</b> PPCM, and pregnancy can unmask existing cardiomyopathy ${r(1)}.</li><li><b>Cancer survivors:</b> anthracycline cardiotoxicity — baseline and follow-up echo ${r(1)} ${r(2)}.</li><li><b>Heavy drinkers:</b> abstinence can reverse alcohol cardiomyopathy ${r(1)}.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["HCM patient given nitrates for 'angina' collapses", "Lie flat, raise legs, IV fluid; stop vasodilators; phenylephrine if available (specialist) " + r(1) + " " + LB.exp("VASOPRESSOR CHOICE")],
["Breathless woman 2 months after delivery", "Echo for PPCM; check BP and proteinuria; refer " + r(2)],
["Sibling of a young sudden-death victim", "ECG and echo for HCM; refer for family assessment " + r(1)],
["EF 30% after 3 months of full treatment", "Refer for ICD/CRT assessment " + r(1) + r(2)],
["AF with fast rate and new DCM", "Rate control — tachycardia itself may be the cause; reassess EF after control " + r(1)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Progressive heart failure, AF and ventricular arrhythmias, sudden death, stroke and systemic emboli, functional mitral regurgitation, cardiogenic shock ${r(1)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Clinic review with weight, BP, pulse, potassium and creatinine while titrating drugs ${r(2)}.</li><li>Repeat echo after 3–6 months of treatment (device decisions) ${r(1)}.</li><li>HCM: periodic risk reassessment; family surveillance ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>No licensed image is used. Echo is the key test — see the investigations section.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Suspected cardiomyopathy", [F.s("ECG, chest X-ray, bloods (TSH, Hb, creatinine), echo"), F.a, F.d("Echo phenotype"), F.a, F.b([["Dilated, low EF", F.e("Find cause; HF drugs; ICD/CRT if EF ≤ 35% at 3 months")], ["Thick wall", F.e("HCM: no vasodilators; beta-blocker; SCD risk; family screening")], ["Stiff, big atria", F.e("RCM: treat cause; careful diuretics")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Nitrates or high-dose diuretics in obstructive HCM", "Collapse", "Echo before treating 'angina' in the young " + r(1)],
["Missing alcohol as the cause", "Lost chance of recovery", "Ask about ara and beer " + r(1)],
["ACE inhibitor in pregnancy", "Fetal harm", "Hydralazine/nitrate, beta-blocker " + r(1)],
["Not screening relatives in HCM", "Missed sudden-death risk", "Family ECG and echo " + r(1)],
["Big diuretic doses in amyloid/restrictive disease", "Low output", "Gentle decongestion " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Three reversible causes of dilated cardiomyopathy?", "Alcohol, persistent tachycardia (e.g. fast AF), thyroid disease (also thiamine deficiency, some drugs).")}
${qa("Intern/MO", "Drugs to avoid in obstructive HCM?", "Vasodilators (nitrates, dihydropyridines) and high-dose diuretics; avoid dehydration.")}
${qa("Registrar", "When to refer for ICD in DCM?", "Symptomatic with EF ≤ 35% despite at least 3 months of optimal treatment.")}
${qa("Registrar", "Which heart-failure drugs are unsafe in pregnancy?", "ACE inhibitors, ARB, ARNI, MRA and SGLT2 inhibitors.")}
${qa("Specialist", "Who needs family screening?", "First-degree relatives of HCM (and familial DCM) patients — history, examination, ECG, echo, genetic testing if a variant is known.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Merck Manual Professional Edition. Overview of cardiomyopathies; Dilated cardiomyopathy; Hypertrophic cardiomyopathy; Restrictive cardiomyopathy (all last updated Sept 2026).</li>
<li id="ref-2">Indian Council of Medical Research / Department of Health Research. Standard Treatment Workflow: Heart failure — a breathless patient. January 2026.</li>
<li id="ref-3">Regitz-Zagrosek V, Roos-Hesselink JW, Bauersachs J, et al. 2018 ESC Guidelines for the management of cardiovascular diseases during pregnancy. Eur Heart J 2018;39:3165–3241. <a href="https://doi.org/10.1093/eurheartj/ehy340" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehy340</a> (cited; full text not read).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Merck cardiomyopathy pages (Sept 2026)", "<span class='pass'>Read</span>", "27 Nov 2026"], ["ICMR HF STW Jan 2026", "<span class='pass'>Read</span>", "Library PDF"], ["ESC 2023 cardiomyopathy / PPCM statement", "<span class='unv'>Not read</span>", "Not open access"], ["PPCM bromocriptine", "<span class='unv'>Not verified</span>", "Marked"], ["Bhutan STG", "<span class='unv'>No section</span>", "HF section covered on hf-adult"], ["Calculators", "<span class='pass'>New + reused</span>", "cmplan, ntprobnp"]], "qc")}` }
]
});
})();
