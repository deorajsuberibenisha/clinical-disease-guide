/* Hypokalaemia and hyperkalaemia (UK Kidney Association 2023, Bhutan snakebite guideline 2024) */
registerPage({
id: "potassium-adult",
title: "Hypokalaemia & Hyperkalaemia",
subtitle: "Get an ECG: calcium protects the heart, insulin–glucose and salbutamol shift potassium, binders and dialysis remove it; replace low potassium slowly and check magnesium",
age: "Adults & children", specs: ["medicine", "neph", "emerg", "paeds"],
keywords: ["hyperkalaemia", "hypokalaemia", "potassium", "calcium gluconate", "insulin dextrose", "salbutamol", "KCl infusion", "U waves", "peaked T waves", "magnesium", "periodic paralysis"],
related: ["aki-adult", "ckd-adult", "dka-adult", "snakebite-adult", "ge-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Both high and low potassium can stop the heart. The ECG, not the number alone, tells you how urgent it is.</p>
<div class="glance">
<div><h4>High + ECG change</h4><p>${dr("calcium_gluconate", "Calcium gluconate 10%")} 30 mL IV over 10 min.</p></div>
<div><h4>Shift</h4><p>${dr("insulin_soluble", "Insulin")} 10 units + 25 g glucose; ${dr("salbutamol")} 10–20 mg neb.</p></div>
<div><h4>Remove</h4><p>${dr("polystyrene", "Calcium polystyrene")} 15 g QDS; dialysis.</p></div>
<div><h4>Low</h4><p>Oral ${dr("kcl", "KCl")}; IV ≤10 mmol/h peripherally; check Mg.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan snakebite guideline 2024: calcium gluconate 10 mL over 2 min (up to 3 times), insulin–glucose, salbutamol, bicarbonate 40 mL 8.4% if acidotic, acting at K over 7 or with ECG change. KCl 600 mg tablets and 15% injection, calcium gluconate and calcium polystyrene sulfonate are on the NEML. Haemodialysis at JDWNRH, Mongar and Gelephu. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes", html: `${tbl(["Hyperkalaemia", "Hypokalaemia"], [["AKI, CKD", "Diarrhoea, vomiting, NG losses"], ["ACE inhibitors, ARBs, spironolactone, NSAIDs, trimethoprim", "Loop/thiazide diuretics"], ["Rhabdomyolysis, snakebite, haemolysis, tumour lysis", "Insulin, salbutamol, DKA treatment, refeeding"], ["DKA, acidosis, adrenal insufficiency", "Low magnesium, renal tubular acidosis, hyperaldosteronism"], ["Haemolysed sample (pseudo)", "Thyrotoxic periodic paralysis"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Membrane potential", [F.s("98% of potassium is inside cells"), F.a, F.s("Small shifts change resting membrane potential"), F.a, F.e("High: conduction block, VF, asystole; low: arrhythmias, paralysis, ileus")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan snakebite guideline", "UKKA 2023", "This guide"], [["Calcium dose", "10 mL over 2 min, up to 3 times", "30 mL over 10 min", "Either (same total) " + LB.loc()], ["Action threshold", "K over 7 or ECG change", "K 6.5 or more or ECG change", "UKKA"]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Hyperkalaemia: often none; weakness, palpitations, bradycardia. ECG: peaked T, flat P, wide QRS, sine wave.</li><li>Hypokalaemia: weakness, cramps, ileus, palpitations. ECG: flat T, U waves, ST depression, long QU.</li></ul><h3>The typical patient</h3><p>A 58-year-old man with CKD on enalapril and diclofenac in Gelephu feels weak; K 7.2, ECG peaked T waves and wide QRS. <b>This is life-threatening hyperkalaemia</b>: calcium gluconate 30 mL over 10 min, insulin 10 units + 25 g glucose, salbutamol 10 mg neb, stop enalapril and diclofenac, binder, contact dialysis.</p>` },
{ id: "ddx", title: "Mimics", html: `${tbl(["Condition", "Clue"], [["Pseudohyperkalaemia", "Haemolysed or delayed sample, very high WBC/platelets — repeat, but treat if ECG abnormal"], ["Guillain–Barré", "Weakness with normal K"]])}` },
{ id: "invest", title: "Investigations", html: `<p>ECG and monitor; repeat K (venous gas is quick); creatinine, glucose, gas, Mg, CK; drug review.</p>` },
{ id: "staging", title: "Potassium calculator", html: `<div class="calc" data-calc="potassiumcalc"></div>` },
{ id: "manage", title: "Management", html: `<h3>Hyperkalaemia (K 6.5+ or ECG change)</h3><ol><li>Calcium gluconate 10% 30 mL IV over 10 min (child 0.5 mL/kg, max 20 mL); repeat if ECG persists.</li><li>Insulin 10 units + 25 g glucose IV; glucose checks for 6 h.</li><li>Salbutamol 10–20 mg nebulised.</li><li>Bicarbonate only if acidotic.</li><li>Calcium polystyrene sulfonate 15 g QDS; dialysis if refractory/oliguric.</li><li>Repeat K at 1, 2, 4, 6 and 24 h.</li></ol><h3>Hypokalaemia</h3><ul><li>Mild: oral KCl 40–80 mmol/day (child 1–2 mmol/kg/day).</li><li>Severe (under 2.5, ECG change, paralysis): IV KCl by pump ≤10 mmol/h peripherally (child 0.3–0.5 mmol/kg/h with ECG).</li><li>Correct magnesium; treat cause; potassium-sparing diuretic if on loop diuretic.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("calcium_gluconate"), "30 mL 10% IV", "Protects heart"], [dr("insulin_soluble"), "10 units + 25 g glucose", "Shift"], [dr("salbutamol"), "10–20 mg neb", "Shift"], [dr("sodium_bicarbonate"), "8.4% 40–50 mL", "Acidosis only"], [dr("polystyrene"), "15 g QDS", "Remove"], [dr("kcl"), "Oral/IV", "Hypokalaemia"]])}` },
{ id: "populations", title: "Children and neonates", html: `<p>Child doses in the calculator. Neonatal hyperkalaemia is common in extreme prematurity — specialist NICU management.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No lab, ECG shows peaked T in AKI", "Treat as hyperkalaemia"], ["Hypokalaemia not correcting", "Check and replace magnesium"]])}` },
{ id: "complications", title: "Complications", html: `<p>Cardiac arrest, hypoglycaemia after insulin, rebound hyperkalaemia, phlebitis/extravasation of KCl.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Review drugs; low-potassium diet advice in CKD (avoid salt substitutes); recheck K within a week.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Hyperkalaemia ECG", src: "images/hyperkalaemia-ecg.jpg", mod: "12-lead ECG", ctx: "Hyperkalaemia", loc: "Precordial leads", find: "Tall peaked T waves", interp: "Give calcium gluconate now", by: "Dr Michael-Joseph F. Agbayani and Dr Eddieson Gonzales, Manila", page: "https://commons.wikimedia.org/wiki/File:Hyperkalemia_ECG.jpg", lic: "CC BY 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("High potassium", [F.s("ECG + repeat K"), F.a, F.d("K ≥6.5 or ECG change?"), F.a, F.b([["Yes", F.e("Calcium → insulin–glucose + salbutamol → remove")], ["No", F.ok("Stop drugs, treat cause, recheck")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Waiting for repeat K with abnormal ECG", "Arrest", "Treat"], ["No glucose checks after insulin", "Hypoglycaemia", "6 h of checks"], ["KCl IV push", "Cardiac arrest", "Infusion only"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "First drug for hyperkalaemia with wide QRS?", "Calcium gluconate 10% IV.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">UK Kidney Association. Clinical practice guideline: treatment of acute hyperkalaemia in adults, 2023. <a href="https://ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults" target="_blank" rel="noopener">ukkidney.org</a></li><li id="ref-2">Ministry of Health, Bhutan. National guideline for management of snakebite, 2024 (hyperkalaemia).</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["NEML", "<span class='pass'>Checked</span>", "KCl, calcium gluconate, polystyrene"]], "qc")}` }
]
});
