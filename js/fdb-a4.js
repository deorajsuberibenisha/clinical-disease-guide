/* Clinical Disease Guide — Drug monograph database, block A, batch 4 (24 Nov 2026).
   Same rules as js/fdb-a2.js (Build Prompt v2 + owner amendments in _work/fdb/CONTROL.md). Uses FDB_M from js/fdb-a2.js (must load after it).
   Research packs: _work/fdb/packs/<drug>.txt; extra product labels in _work/research/labels/. */

/* ================= Batch A-4 (fdb-a4.js) ================= */
FDB_M("atenolol", {
  inn: "Atenolol", atc: "C07AB03", cls: "Cardioselective (beta-1) beta-blocker",
  linked: [["Hypertension — adults", "Alternative antihypertensive [FDA]", "htn-adult"], ["Acute coronary syndrome — adults", "Beta-blocker after MI [FDA]", "acs-adult"]],
  forms: ["Tablets 25, 50, 100 mg [FDA]."],
  moa: "Selective beta-1 receptor blockade lowers heart rate, contractility and renin release; selectivity is lost at higher doses [UNVERIFIED-KNOWLEDGE].",
  pk: ["Elimination half-life about 6–7 h; effect lasts at least 24 h after 50–100 mg [FDA].", "Cleared by the kidneys; accumulates when CrCl falls below 35 mL/min/1.73 m²; removed by haemodialysis [FDA]."],
  ind: { adult: ["Hypertension [FDA].", "Long-term management of angina due to coronary atherosclerosis [FDA].", "Haemodynamically stable patients with definite or suspected acute MI, to reduce cardiovascular death [FDA]."], paed: ["Safety and effectiveness in children have not been established [FDA]."] },
  adult: [["Hypertension", "50 mg once daily, alone or with a diuretic; full effect in 1–2 weeks. May increase to 100 mg once daily; higher doses add little [FDA]."], ["Angina", "50 mg once daily; increase to 100 mg after 1 week if needed; some need 200 mg once daily [FDA]."], ["Kidney impairment", "CrCl 15–35 mL/min/1.73 m²: maximum 50 mg daily. Below 15: maximum 25 mg daily. Haemodialysis: 25–50 mg after each dialysis, in hospital [FDA]."]],
  paed: { tiers: ["Not established in the FDA label [FDA]."], transition: "Adult dosing in adults only.", calcNote: "No paediatric calculator: no label dose." },
  adj: { renal: "CrCl 15–35: max 50 mg/day; under 15: max 25 mg/day; haemodialysis 25–50 mg after each session [FDA].", hepatic: "No adjustment stated in the label [NEP].", pregnancy: "Can cause fetal harm; use from the second trimester has been linked with small-for-gestational-age babies [FDA].", other: "Older patients: start at the low end; some need 25 mg once daily [FDA]." },
  tox: { human: "Survival after acute doses up to 5 g; one death after about 10 g. Lethargy, poor respiratory drive, wheeze, sinus pause and bradycardia; also hypotension, heart failure, bronchospasm and hypoglycaemia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Removable by haemodialysis. Bradycardia: IV atropine, then isoproterenol cautiously; pacing if refractory [FDA]." },
  contra: ["Sinus bradycardia, heart block greater than first degree, cardiogenic shock, overt cardiac failure [FDA].", "Hypersensitivity to atenolol or any component [FDA]."],
  ae: { common: ["Tiredness, dizziness, cold extremities, nausea, depression (controlled trials) [FDA]."], serious: ["Worsening heart failure; bronchospasm; masked signs of hypoglycaemia and thyrotoxicosis [FDA]", "Severe angina, MI or ventricular arrhythmia after abrupt withdrawal [FDA]"] },
  monitor: ["Heart rate and blood pressure; trough blood pressure before the next dose when using 25 mg [FDA].", "Kidney function [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not named in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "atenolol", indication_id: "htn", label: "Hypertension — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 50, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, max_daily: 100, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 25, unit: "mg/tab" }, { form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Whole tablets",
      renal: [{ crcl_min: 0, crcl_max: 14.99, action: "reduce_dose", factor: 0.5, note: "CrCl below 15: maximum 25 mg daily [FDA]" }, { crcl_min: 15, crcl_max: 35, action: "reduce_dose", factor: 1, note: "CrCl 15–35: maximum 50 mg daily [FDA]" }], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "TENORMIN (atenolol) tablets — Upsher-Smith, label effective 2025-09-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6e850b1e-28a4-4ff8-8ed7-bb0b29faa28a"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Once-daily cardioselective beta-blocker for blood pressure, angina and after MI.",
    cautionTitle: "Do not stop suddenly",
    caution: "Patients with coronary artery disease should not stop atenolol abruptly. Severe worsening of angina, myocardial infarction and ventricular arrhythmias have been reported after abrupt withdrawal of beta-blockers. Taper over about 2 weeks and watch closely [FDA].",
    adult: [{ ind: "Hypertension", text: "50 mg once daily; up to 100 mg once daily. CrCl 15–35: maximum 50 mg; below 15: maximum 25 mg.", calc: ["htn"] }, { ind: "Angina", text: "50 mg once daily; up to 100 mg, some need 200 mg once daily." }],
    child: [{ ind: "All uses", text: "Not established in the FDA label." }] }
});

FDB_M("atorvastatin", {
  inn: "Atorvastatin", atc: "C10AA05", cls: "HMG-CoA reductase inhibitor (statin)",
  linked: [["Lipid disorders — adults", "Primary and secondary prevention [FDA]", "lipids-adult"], ["Acute coronary syndrome — adults", "High-dose statin at presentation [BT-STG]", "acs-adult"]],
  forms: ["Tablets 10, 20, 40, 80 mg [FDA].", "Bhutan: 10 mg tablet [BT-NEML]."],
  moa: "Selective, competitive inhibitor of HMG-CoA reductase, the rate-limiting step in cholesterol synthesis [FDA].",
  pk: ["Peak 1–2 h; absolute bioavailability about 14% [FDA].", "Mean plasma half-life about 14 h; HMG-CoA reductase inhibition lasts 20–30 h due to active metabolites [FDA].", "CYP3A4 substrate: clarithromycin or itraconazole — do not exceed 20 mg; nelfinavir — do not exceed 40 mg; several HIV/HCV protease inhibitors and letermovir — do not exceed 20 mg [FDA]."],
  ind: { adult: ["To reduce the risk of MI, stroke, revascularisation and angina in adults with multiple CHD risk factors, type 2 diabetes with risk factors, or established CHD [FDA].", "Adjunct to diet to lower LDL-C in primary hyperlipidaemia, and other lipid disorders [FDA]."], paed: ["Heterozygous familial hypercholesterolaemia (HeFH) from 10 years [FDA].", "Homozygous FH from 10 years [FDA]."] },
  adult: [["Hyperlipidaemia / risk reduction", "Start 10–20 mg once daily, any time of day; range 10–80 mg. Need for LDL-C reduction over 45%: may start 40 mg. Check LDL-C from 4 weeks [FDA]."], ["Acute coronary syndrome", "High-dose statin 40–80 mg at presentation (Bhutan STG) [BT-STG]."]],
  paed: { tiers: ["10 years and older, HeFH: 10 mg once daily; range 10–20 mg [FDA].", "10 years and older, HoFH: 10–20 mg once daily; range 10–80 mg [FDA]."], transition: "Adult dosing in adults.", calcNote: "Fixed dose; no weight-based dosing." },
  adj: { renal: "No adjustment in the label; kidney impairment is a risk factor for myopathy [FDA].", hepatic: "Contraindicated in acute liver failure or decompensated cirrhosis [FDA].", pregnancy: "May cause fetal harm; stop when pregnancy is recognised (or weigh ongoing need). Breastfeeding not recommended [FDA]." },
  tox: { human: "No specific antidote; haemodialysis not expected to help (highly protein bound) [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [FDA]." },
  contra: ["Acute liver failure or decompensated cirrhosis [FDA].", "Hypersensitivity to atorvastatin or excipients (anaphylaxis, angioedema, SJS/TEN reported) [FDA]."],
  ae: { common: ["Nasopharyngitis, arthralgia, diarrhoea, pain in extremity, urinary tract infection (5% or more) [FDA]."], serious: ["Myopathy and rhabdomyolysis [FDA]", "Immune-mediated necrotising myopathy [FDA]", "Liver dysfunction; rises in HbA1c and fasting glucose [FDA]"] },
  monitor: ["LDL-C from 4 weeks after starting or changing dose [FDA].", "Liver enzymes before starting and when clinically indicated [FDA].", "CK if muscle symptoms [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: atorvastatin 10 mg tablet [BT-NEML].", strengths: "10 mg.", stg: "Bhutan STG 2024: high-dose statin 40–80 mg stat in acute coronary syndrome [BT-STG]." },
  verify: [["Adult dose", "10–20 mg once daily, range 10–80 mg", "Same [FDA]", "✅ Match", "Keep"], ["ACS", "High-dose statin 40–80 mg stat", "Label range up to 80 mg [FDA]", "✅ Match", "Keep"]],
  calc: [
    { drug: "atorvastatin", indication_id: "lipid", label: "Lipids / CV risk — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 10, value_max: 20, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 80, max_daily: 80, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "atorvastatin", indication_id: "acs", label: "Acute coronary syndrome — adult", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 40, value_max: 80, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 80, max_daily: 80, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["BT-STG", "FDA"] },
    { drug: "atorvastatin", indication_id: "hefh", label: "Familial hypercholesterolaemia — 10–17 years", route: "PO", population: { min_age_months: 120, max_age_months: 216, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 20, max_daily: 20, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "tab", strength: 10, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "LIPITOR (atorvastatin calcium) tablets — Viatris, label effective 2024-04-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a60cc18b-0631-4cf0-b021-9f52224ece65"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Once-daily statin to lower LDL cholesterol and cardiovascular risk.",
    adult: [{ ind: "Lipids / risk reduction", text: "10–20 mg once daily; range 10–80 mg. With clarithromycin or itraconazole: maximum 20 mg.", calc: ["lipid"], bt: "Bhutan NEML: 10 mg tablets." }, { ind: "Acute coronary syndrome", text: "40–80 mg at presentation (Bhutan STG).", calc: ["acs"] }],
    child: [{ ind: "Familial hypercholesterolaemia, 10 years and older", text: "HeFH: 10 mg once daily, up to 20 mg. HoFH: 10–20 mg, up to 80 mg.", calc: ["hefh"] }] }
});

FDB_M("atropine", {
  inn: "Atropine", atc: "A03BA01", cls: "Antimuscarinic (anticholinergic)",
  linked: [["Poisoning — adults", "Organophosphate and carbamate poisoning [FDA] [BT-STG]", "poisoning-adult"], ["Poisoning — children", "Organophosphate poisoning [FDA]", "poisoning-child"]],
  forms: ["Injection 0.4 mg/mL (20 mL multi-dose vial) and 1 mg/mL; other strengths exist [FDA].", "Bhutan: 0.6 mg/mL injection [BT-NEML]."],
  moa: "Competitive antagonist at muscarinic acetylcholine receptors [FDA].",
  pk: ["Half-life more than doubled in children under 2 years [FDA]."],
  ind: { adult: ["Temporary blockade of severe or life-threatening muscarinic effects: antisialagogue, antivagal, organophosphorus, carbamate or muscarinic mushroom poisoning, symptomatic bradycardia [FDA]."], paed: ["Same uses [FDA]."] },
  adult: [["Antisialagogue / antivagal (anaesthesia)", "0.5–1 mg IV, IM or SC 30–60 min before surgery; repeat every 4–6 h as needed; maximum total 3 mg [FDA]."], ["Symptomatic bradycardia", "0.5 mg IV or IM every 3–5 min as needed; maximum total 3 mg. Endotracheal: 1–2 mg diluted in no more than 10 mL water or saline [FDA]."], ["Organophosphorus or carbamate poisoning", "1–6 mg IV, IM or ET by severity; repeat every 3–5 min, doubling each dose until secretions dry, bronchospasm eases and oxygenation improves. Then infuse 10–20% of the total loading dose per hour and titrate. No maximum total dose [FDA]."], ["Coronary artery disease", "Limit the total dose to 2–3 mg (0.03–0.04 mg/kg) [FDA]."]],
  paed: { tiers: ["Antisialagogue / antivagal: 0.02 mg/kg IV, IM or SC; maximum single dose 0.5 mg under 12 years (1 mg from 12); maximum total 1 mg under 12 (2 mg from 12) [FDA].", "Symptomatic bradycardia (vagal or primary AV block, not hypoxic): 0.02 mg/kg IV/IO every 5 min, or 0.04–0.06 mg/kg ET; maximum single 0.5 mg under 12 years, 1 mg from 12 [FDA].", "Organophosphorus or carbamate poisoning: 0.02–0.06 mg/kg IV, IM, IO or ET every 5 min, doubling until response; then 10–20% of the loading total per hour; no maximum total [FDA]."], transition: "Adult doses from 12 years for single-dose caps (label).", calcNote: "Weight-based; single-dose cap by age." },
  adj: { renal: "No adjustment stated in the label [NEP].", pregnancy: "Untreated severe muscarinic poisoning or bradycardia endangers mother and fetus; data are insufficient to assess drug risk [FDA].", other: "Do not rely on atropine for type II second-degree or third-degree block with wide QRS; no effect after heart transplant [FDA]." },
  tox: { human: "Palpitation, dilated pupils, difficulty swallowing, hot dry skin, thirst, restlessness, tremor, ataxia; toxic doses cause hallucinations, delirium and coma [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; physostigmine may be considered for severe anticholinergic delirium [UNVERIFIED-KNOWLEDGE]." },
  contra: ["None in the label [FDA]."],
  ae: { common: ["Dry mouth, blurred vision, photophobia, tachycardia, urinary hesitancy, constipation (antimuscarinic) [FDA]."], serious: ["Tachycardia increasing myocardial oxygen demand in coronary disease [FDA]", "Acute angle-closure glaucoma; complete urinary retention in prostatic hypertrophy; viscid bronchial plugs [FDA]"] },
  monitor: ["Heart rate, PR interval, blood pressure and symptoms; titrate to effect [FDA].", "In poisoning: chest secretions, bronchospasm, oxygenation [FDA]."],
  local: { neml: "On the Bhutan NEML 2025: atropine sulphate 0.6 mg/mL injection [BT-NEML].", strengths: "0.6 mg/mL.", stg: "Bhutan STG 2024 lists atropine (with glycopyrrolate as an option) [BT-STG]." },
  verify: [["Child antivagal dose", "0.02 mg/kg, max 0.5 mg (<12 y)", "Same [FDA]", "✅ Match", "Keep"]],
  calc: [
    { drug: "atropine", indication_id: "brady_child", label: "Bradycardia / antivagal — under 12 years", route: "IV", population: { min_age_months: 0, max_age_months: 144, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 0.02, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 0.5, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 0.6, unit: "mg/mL" }, { form: "inj", strength: 0.4, unit: "mg/mL" }], rounding: "0.01 mL", renal: [], flags: ["Repeat every 5 min as needed; maximum total 1 mg (antivagal)"], sources: ["FDA"] },
    { drug: "atropine", indication_id: "brady_teen", label: "Bradycardia / antivagal — 12–17 years", route: "IV", population: { min_age_months: 144, max_age_months: 216, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 0.02, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1, unit: "mg" }, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 0.6, unit: "mg/mL" }, { form: "inj", strength: 0.4, unit: "mg/mL" }], rounding: "0.01 mL", renal: [], flags: ["Maximum total 2 mg (antivagal)"], sources: ["FDA"] },
    { drug: "atropine", indication_id: "brady_adult", label: "Symptomatic bradycardia — adult", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null },
      basis: "fixed", dose: { value: 0.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 0.5, unit: "mg" }, weight_basis: "NEP",
      formulations: [{ form: "inj", strength: 0.6, unit: "mg/mL" }, { form: "inj", strength: 0.4, unit: "mg/mL" }], rounding: "0.01 mL", renal: [], flags: ["Every 3–5 min; maximum total 3 mg"], sources: ["FDA"] },
    { drug: "atropine", indication_id: "op_child", label: "Organophosphate poisoning — child (first dose)", route: "IV", population: { min_age_months: 0, max_age_months: 216, min_weight_kg: null, max_weight_kg: null },
      basis: "mg_per_kg", dose: { value: 0.02, value_max: 0.06, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual",
      formulations: [{ form: "inj", strength: 0.6, unit: "mg/mL" }, { form: "inj", strength: 0.4, unit: "mg/mL" }], rounding: "0.01 mL", renal: [], flags: ["Repeat every 5 min, doubling until secretions dry; no maximum total"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Atropine Sulfate Injection — ProPharma Distribution (NDA209260), label effective 2025-12-18", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=38404931-980b-0019-e063-6394a90a933f"], ["FDA", "Atropine Sulfate Injection 0.4 and 1 mg/mL — HealthFirst, label effective 2024-01-28", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0060b971-19bd-2849-e063-6294a90afca8"], ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""], ["BT-STG", "Standard Treatment Guidelines 2024 — Ministry of Health, Bhutan", ""]],
  dose: { tagline: "Antimuscarinic for bradycardia, anaesthesia and organophosphate poisoning.",
    cautionTitle: "Organophosphate poisoning needs large doses",
    caution: "In organophosphorus or carbamate poisoning, double each dose every 3–5 minutes until bronchial secretions dry and oxygenation improves; there is no maximum total dose. Then infuse 10–20% of the loading total per hour [FDA].",
    adult: [{ ind: "Symptomatic bradycardia", text: "0.5 mg IV every 3–5 min; maximum total 3 mg.", calc: ["brady_adult"], bt: "Bhutan NEML: 0.6 mg/mL injection." }, { ind: "Organophosphate poisoning", text: "1–6 mg IV, then double every 3–5 min until secretions dry; then 10–20% of the loading total per hour." }, { ind: "Anaesthesia (antisialagogue)", text: "0.5–1 mg IV/IM/SC 30–60 min before; maximum total 3 mg." }],
    child: [{ ind: "Bradycardia / antivagal", text: "0.02 mg/kg IV; maximum single 0.5 mg under 12 years, 1 mg from 12.", calc: ["brady_child", "brady_teen"] }, { ind: "Organophosphate poisoning", text: "0.02–0.06 mg/kg IV every 5 min, doubling until secretions dry.", calc: ["op_child"] }] }
});

/* ---------- AZITHROMYCIN (FDA ZITHROMAX oral, Pfizer, eff. 2025-09-03; ZITHROMAX IV eff. 2026-07-24) ---------- */
FDB_M("azithromycin", {
  inn: "Azithromycin", atc: "J01FA10", cls: "Macrolide antibacterial",
  linked: [["Community-acquired pneumonia", "Atypical cover; oral or IV then oral [FDA]", "pneumonia-adult"], ["Sexually transmitted infections (chlamydia, gonorrhoea with ceftriaxone, chancroid)", "Single-dose treatment [FDA][BT-STG]", "sti-adult"], ["Scrub typhus / leptospirosis (severe)", "IV option in Bhutan NEML 2025 [BT-NEML]", ""]],
  forms: ["Tablets 250 mg, 500 mg; oral suspension 100 mg/5 mL and 200 mg/5 mL; with or without food [FDA].", "IV 500 mg vial: add 4.8 mL water → 100 mg/mL; dilute to 1 mg/mL over 3 h or 2 mg/mL over 1 h; never bolus or IM [FDA]."],
  moa: "Binds the 50S ribosomal subunit → blocks bacterial protein synthesis [FDA].",
  pk: ["Long terminal half-life from tissue uptake and slow release; mainly biliary excretion, about 6% unchanged in urine over a week [FDA].", "QT-prolonging drugs: additive risk of torsades [FDA]."],
  ind: { adult: ["Community-acquired pneumonia; pharyngitis (second line); uncomplicated skin infection; COPD exacerbation; acute sinusitis [FDA].", "Chancroid; non-gonococcal urethritis and cervicitis; gonococcal urethritis and cervicitis [FDA].", "IV: community-acquired pneumonia; pelvic inflammatory disease [FDA]."], paed: ["Acute otitis media and sinusitis (6 months and over); community-acquired pneumonia (6 months and over); pharyngitis (2 years and over) [FDA]."] },
  adult: [["Pneumonia, pharyngitis, skin infection", "500 mg on day 1, then 250 mg once daily on days 2–5 [FDA]."], ["COPD exacerbation", "500 mg once daily for 3 days, or the 5-day course above [FDA]."], ["Acute sinusitis", "500 mg once daily for 3 days [FDA]."], ["Chancroid; non-gonococcal urethritis/cervicitis", "1 g single dose [FDA]."], ["Gonococcal urethritis/cervicitis", "2 g single dose [FDA]. ⚠ DISCREPANCY: Bhutan STG 2024 uses ceftriaxone 250 mg IM plus azithromycin 1 g [BT-STG]."], ["IV — pneumonia", "500 mg IV once daily for at least 2 days, then 500 mg orally daily to complete 7–10 days [FDA]."], ["IV — pelvic inflammatory disease", "500 mg IV once daily for 1–2 days, then 250 mg orally daily to complete 7 days [FDA]."]],
  paed: { tiers: ["Otitis media (6 months+): 30 mg/kg once (max 1,500 mg); or 10 mg/kg daily for 3 days (max 500 mg); or 10 mg/kg day 1 then 5 mg/kg days 2–5 (max 500/250 mg) [FDA].", "Sinusitis (6 months+): 10 mg/kg daily for 3 days [FDA].", "Pneumonia (6 months+): 10 mg/kg day 1, then 5 mg/kg days 2–5 [FDA].", "Pharyngitis (2 years+): 12 mg/kg daily for 5 days (max 500 mg) [FDA]."], transition: "50 kg and over: the adult doses (label tables stop at 50 kg) [FDA].", calcNote: "Caps follow the label's 50 kg row: 1,500 / 500 / 250 mg." },
  adj: { renal: "GFR under 10 mL/min: exposure rises — use with caution [FDA].", hepatic: "Pharmacokinetics not established in hepatic impairment; hepatotoxicity reported — stop if hepatitis develops [FDA].", preg: "Bhutan STG uses azithromycin for chlamydia in pregnancy [BT-STG]. Label pregnancy text not extracted this run [NEP].", other: "QT prolongation and torsades: caution with known long QT, proarrhythmic conditions, low potassium or magnesium, and other QT drugs [FDA]. Infants under 6 weeks: infantile hypertrophic pyloric stenosis reported [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Hypersensitivity to azithromycin, erythromycin or any macrolide or ketolide [FDA].", "History of cholestatic jaundice or hepatic dysfunction with previous azithromycin [FDA]."],
  ae: { common: ["Diarrhoea, nausea, abdominal pain, vomiting [FDA]."], serious: ["QT prolongation, torsades de pointes [FDA]", "Hepatotoxicity, hepatic necrosis [FDA]", "Severe allergic and skin reactions [FDA]", "C. difficile diarrhoea [FDA]", "Pyloric stenosis in young infants [FDA]"] },
  monitor: ["ECG/electrolytes in patients at risk of QT prolongation [FDA].", "Liver symptoms; stop if hepatitis [FDA]."],
  local: { neml: "NEML 2025: azithromycin 500 mg IV injection (E), till DH — for severe leptospirosis/scrub typhus [BT-NEML]. Oral azithromycin is not on NEML 2025 [BT-NEML].", strengths: "500 mg IV vial only [BT-NEML].", stg: "STG 2024: chlamydia 1 g orally single dose (noted as not available — doxycycline 100 mg twice daily for 7 days instead; azithromycin in pregnancy); gonorrhoea ceftriaxone 250 mg IM + azithromycin 1 g [BT-STG]." },
  calc: [
    { drug: "azithromycin", indication_id: "cap_adult", label: "Pneumonia / pharyngitis / skin — adult, day 1 (then 250 mg days 2–5)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }, { form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "azithromycin", indication_id: "sti_1g", label: "Chancroid / non-gonococcal urethritis — single 1 g dose", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 500, unit: "mg/tab" }, { form: "tab", strength: 250, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA", "BT-STG"] },
    { drug: "azithromycin", indication_id: "iv_cap", label: "IV — pneumonia, adult", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 500, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 500, unit: "mg" }, weight_basis: "NEP", infusion: { conc_max: 2, unit: "mg/mL", duration_h: 1 }, formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "One 500 mg vial", renal: [], flags: [], sources: ["FDA"] },
    { drug: "azithromycin", indication_id: "aom_single", label: "Otitis media — single dose 30 mg/kg (6 months+)", route: "PO", population: { min_age_months: 6, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 1500, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 200, unit: "mg/5mL" }, { form: "susp", strength: 100, unit: "mg/5mL" }], rounding: "To 0.25 mL [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "azithromycin", indication_id: "child_10", label: "Otitis / sinusitis / pneumonia day 1 — 10 mg/kg (6 months+)", route: "PO", population: { min_age_months: 6, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 500, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 200, unit: "mg/5mL" }, { form: "susp", strength: 100, unit: "mg/5mL" }], rounding: "To 0.25 mL [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "azithromycin", indication_id: "child_5", label: "Otitis / pneumonia days 2–5 — 5 mg/kg (6 months+)", route: "PO", population: { min_age_months: 6, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 250, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 200, unit: "mg/5mL" }, { form: "susp", strength: 100, unit: "mg/5mL" }], rounding: "To 0.25 mL [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "azithromycin", indication_id: "pharyngitis_child", label: "Pharyngitis — 12 mg/kg daily for 5 days (2 years+)", route: "PO", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 12, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 500, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "susp", strength: 200, unit: "mg/5mL" }], rounding: "To 0.25 mL [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "ZITHROMAX (azithromycin) tablets and oral suspension — Pfizer, label effective 2025-09-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3ddecd25-dc32-a2af-e063-6294a90a526d"], ["FDA", "ZITHROMAX (azithromycin) for injection — Pfizer, label effective 2026-07-24", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b631aa1-2d46-40bc-a614-d698301ea4f9"], ["BT-STG", "Bhutan Standard Treatment Guidelines 2024 — sexually transmitted infections", ""], ["BT-NEML", "Bhutan National Essential Medicines List 2025", ""]],
  dose: { tagline: "Macrolide antibiotic for chest, throat, ear and sexually transmitted infections.",
    cautionTitle: "QT prolongation and liver injury",
    caution: "Azithromycin can prolong the QT interval and cause torsades de pointes, which can be fatal — take care with known QT prolongation, low potassium or magnesium, slow heart rate, or other QT-prolonging drugs. Hepatotoxicity, including hepatic necrosis, has been reported; stop if hepatitis develops [FDA].",
    adult: [
      { ind: "Pneumonia, pharyngitis, skin infection", text: "500 mg on day 1, then 250 mg once daily on days 2–5.", calc: ["cap_adult"] },
      { ind: "COPD exacerbation", text: "500 mg once daily for 3 days, or the 5-day course." },
      { ind: "Acute sinusitis", text: "500 mg once daily for 3 days." },
      { ind: "Chancroid · non-gonococcal urethritis or cervicitis", text: "1 g as a single dose.", calc: ["sti_1g"], bt: "Bhutan STG 2024: chlamydia 1 g single dose (oral azithromycin may not be available — doxycycline 100 mg twice daily for 7 days instead; azithromycin in pregnancy)." },
      { ind: "Gonococcal urethritis or cervicitis", text: "2 g as a single dose.", bt: "Bhutan STG 2024: ceftriaxone 250 mg IM plus azithromycin 1 g orally, single doses." },
      { ind: "IV — community-acquired pneumonia", text: "500 mg IV once daily for at least 2 days, then 500 mg orally daily to complete 7–10 days. Infuse 2 mg/mL over 1 h (or 1 mg/mL over 3 h).", calc: ["iv_cap"] },
      { ind: "IV — pelvic inflammatory disease", text: "500 mg IV once daily for 1–2 days, then 250 mg orally daily to complete 7 days." }
    ],
    child: [
      { ind: "Acute otitis media (6 months and over)", text: "Single dose 30 mg/kg (max 1,500 mg) · or 10 mg/kg once daily for 3 days (max 500 mg) · or 10 mg/kg on day 1 then 5 mg/kg on days 2–5 (max 500 mg, then 250 mg).", calc: ["aom_single", "child_10", "child_5"] },
      { ind: "Acute sinusitis (6 months and over)", text: "10 mg/kg once daily for 3 days (max 500 mg).", calc: ["child_10"] },
      { ind: "Community-acquired pneumonia (6 months and over)", text: "10 mg/kg on day 1 (max 500 mg), then 5 mg/kg once daily on days 2–5 (max 250 mg).", calc: ["child_10", "child_5"] },
      { ind: "Pharyngitis/tonsillitis (2 years and over)", text: "12 mg/kg once daily for 5 days (max 500 mg).", calc: ["pharyngitis_child"] }
    ] }
});

/* ---------- AZATHIOPRINE (FDA IMURAN label, NDA016324, eff. 2026-03-19) ---------- */
FDB_M("azathioprine", {
  inn: "Azathioprine", atc: "L04AX01", cls: "Immunosuppressant — purine antimetabolite (6-mercaptopurine prodrug)",
  linked: [["Kidney transplant — prevention of rejection", "Adjunct immunosuppression [FDA]", ""], ["Rheumatoid arthritis", "Disease-modifying drug [FDA]", ""], ["Inflammatory bowel disease (off-label in the FDA label)", "Steroid-sparing maintenance — see chapter", "uc-adult"]],
  forms: ["Tablets 50 mg (scored) [FDA].", "Once daily, or twice daily to reduce stomach upset [FDA]."],
  moa: "Converted to 6-mercaptopurine and thioguanine nucleotides → inhibits purine synthesis → reduces lymphocyte proliferation [FDA].",
  pk: ["Radioactivity half-life about 5 h (not the half-life of azathioprine itself) [FDA].", "Allopurinol: reduce azathioprine to about 1/3–1/4 of the usual dose — why: xanthine oxidase inactivates it; febuxostat: not recommended [FDA].", "About 45% removed by 8-hour haemodialysis [FDA]."],
  ind: { adult: ["Prevention of kidney-transplant rejection [FDA].", "Active rheumatoid arthritis [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Kidney transplant", "Start 3–5 mg/kg once daily from the day of transplant; maintenance 1–3 mg/kg daily. Do not raise to toxic doses for threatened rejection [FDA]."], ["Rheumatoid arthritis", "Start about 1 mg/kg daily (50–100 mg) once or twice daily; after 6–8 weeks raise by 0.5 mg/kg daily every 4 weeks to a maximum of 2.5 mg/kg daily; judge response after at least 12 weeks; reduce gradually to the lowest effective dose [FDA]."], ["With allopurinol", "About 1/3–1/4 of the usual dose [FDA]."], ["TPMT or NUDT15 deficiency", "Homozygous: consider another drug. Heterozygous: reduce the dose [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Not applicable.", calcNote: "Adult mg/kg dosing." },
  adj: { renal: "Oliguric patients (e.g. tubular necrosis after transplant) clear it more slowly and may need lower doses; label gives no CrCl bands [FDA].", hepatic: "Hepatotoxicity reported — monitor liver tests [FDA].", preg: "Can cause fetal harm; contraindicated for rheumatoid arthritis in pregnancy [FDA].", immuno: "Serious infections from immunosuppression; progressive multifocal leukoencephalopathy reported [FDA].", other: "TPMT/NUDT15 deficiency: severe marrow toxicity — test if severe cytopenia occurs [FDA]." },
  tox: { human: "A single 7,500 mg overdose (transplant patient): vomiting, diarrhoea, mild leucopenia and liver changes, normal by 6 days. Very large doses cause marrow hypoplasia, bleeding, infection and death [FDA].", animal: "LD50 oral: mouse 2,500 mg/kg, rat 400 mg/kg [FDA]. ⚠ DISCREPANCY: PubChem lists rat oral 535 mg/kg, mouse oral 1,389 mg/kg, rat intraperitoneal 300 mg/kg [NLM].", manage: "Supportive care; about 45% is removed by 8-hour haemodialysis [FDA]." },
  contra: ["Hypersensitivity [FDA].", "Rheumatoid arthritis in pregnancy [FDA].", "Rheumatoid arthritis previously treated with alkylating agents (cyclophosphamide, chlorambucil, melphalan) — why: prohibitive cancer risk [FDA].", "BOXED WARNING: chronic immunosuppression increases malignancy, including post-transplant lymphoma and hepatosplenic T-cell lymphoma in inflammatory bowel disease [FDA]."],
  ae: { common: ["Nausea, vomiting, leucopenia, infections [FDA]."], serious: ["Malignancy — lymphoma, skin cancer [FDA]", "Severe bone-marrow suppression [FDA]", "Serious infections [FDA]", "Hepatotoxicity [FDA]", "Pancreatitis [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Full blood count weekly for the first month, twice monthly for the next 2 months, then monthly or more often with dose changes [UNVERIFIED-KNOWLEDGE].", "Liver tests [FDA].", "Skin checks; limit sun exposure [FDA]."],
  local: { neml: "Not found in Bhutan NEML 2025 text [BT-NEML].", strengths: "—", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "azathioprine", indication_id: "tx_initial", label: "Kidney transplant — initial 3–5 mg/kg/day", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 3, value_max: 5, unit: "mg", per: "day" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Nearest half tablet (25 mg) [NEP]", renal: [], renal_note: "Oliguric patients may need lower doses; no CrCl bands in label [FDA]", flags: [], sources: ["FDA"] },
    { drug: "azathioprine", indication_id: "tx_maint", label: "Kidney transplant — maintenance 1–3 mg/kg/day", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1, value_max: 3, unit: "mg", per: "day" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Nearest half tablet (25 mg) [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "azathioprine", indication_id: "ra", label: "Rheumatoid arthritis — 1 mg/kg/day start, max 2.5 mg/kg/day", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 1, value_max: 2.5, unit: "mg", per: "day" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "tab", strength: 50, unit: "mg/tab" }], rounding: "Nearest half tablet (25 mg) [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "IMURAN (azathioprine) tablets — Legacy Pharma, label effective 2026-03-19", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4d62b6e4-a9d4-4818-e063-6394a90aa208"], ["NLM", "PubChem CID 2265 — Non-human toxicity values", "https://pubchem.ncbi.nlm.nih.gov/compound/2265"]],
  dose: { tagline: "Immunosuppressant tablet for transplant, rheumatoid arthritis and (off-label) IBD.",
    boxedTitle: "Malignancy risk with long-term use",
    boxed: "Chronic immunosuppression with azathioprine increases the risk of malignancy, including post-transplant lymphoma and hepatosplenic T-cell lymphoma in inflammatory bowel disease. Prescribers should know this risk, its mutagenic potential in men and women, and its blood toxicity, and should tell patients [FDA].",
    cautionTitle: "Allopurinol, TPMT/NUDT15 deficiency and marrow toxicity",
    caution: "With allopurinol, give only about one-third to one-quarter of the usual dose; febuxostat is not recommended. Patients with TPMT or NUDT15 deficiency develop severe marrow suppression — consider another drug if homozygous and reduce the dose if heterozygous [FDA].",
    adult: [
      { ind: "Kidney transplant", text: "Start 3–5 mg/kg once daily from transplant; maintenance 1–3 mg/kg daily.", calc: ["tx_initial", "tx_maint"] },
      { ind: "Rheumatoid arthritis", text: "Start about 1 mg/kg daily (50–100 mg) once or twice daily. After 6–8 weeks, raise by 0.5 mg/kg daily every 4 weeks to a maximum of 2.5 mg/kg daily.", calc: ["ra"] },
      { ind: "With allopurinol", text: "About 1/3 to 1/4 of the usual dose." }
    ],
    child: [{ ind: "Children", text: "Not established in the FDA label." }] }
});

/* ---------- ATRACURIUM (FDA atracurium besylate injection, Meitheal, eff. 2024-12-04) ---------- */
FDB_M("atracurium", {
  inn: "Atracurium", atc: "M03AC04", cls: "Non-depolarising neuromuscular blocker (benzylisoquinolinium)", risk: "High-alert — neuromuscular blocking agents are on the ISMP high-alert list; Sedation-ICU",
  linked: [["Anaesthesia — tracheal intubation and surgical muscle relaxation", "Neuromuscular blocker [FDA]", ""], ["Mechanical ventilation in ICU", "Neuromuscular blocker by infusion [FDA]", ""]],
  forms: ["Injection 10 mg/mL [FDA].", "IV only, never IM; only after the patient is unconscious [FDA].", "Do not mix with alkaline solutions such as barbiturates [FDA].", "Use a peripheral nerve stimulator to guide dosing [FDA]."],
  moa: "Competes with acetylcholine at nicotinic receptors of the motor end-plate → muscle paralysis; broken down by Hofmann elimination and ester hydrolysis, so not dependent on kidney or liver [FDA].",
  pk: ["Elimination half-life about 20 min [FDA].", "Potentiated by isoflurane and enflurane — reduce the initial dose by about one-third under steady-state inhalational anaesthesia [FDA]."],
  ind: { adult: ["Adjunct to general anaesthesia for intubation and skeletal-muscle relaxation during surgery or mechanical ventilation [FDA]."], paed: ["From 1 month of age [FDA]."] },
  adult: [["Intubation (adults and children 2 years and over)", "0.4–0.5 mg/kg IV bolus; intubating conditions in 2–2.5 min; block lasts 20–35 min [FDA]."], ["Under steady-state isoflurane or enflurane", "0.25–0.35 mg/kg [FDA]."], ["Maintenance", "0.08–0.1 mg/kg, first usually 20–45 min after the initial dose, then as needed [FDA]."], ["Cardiovascular disease or high histamine-release risk (asthma, previous severe reactions)", "0.3–0.4 mg/kg given slowly or in divided doses over 1 min [FDA]."]],
  paed: { tiers: ["2 years and over: adult mg/kg doses [FDA].", "1 month to 2 years: 0.3–0.4 mg/kg initial dose under halothane [FDA]."], transition: "2 years and over: adult mg/kg dosing [FDA].", calcNote: "Bolus doses by weight; infusion is titrated to nerve stimulation." },
  adj: { icu: "Only with full airway control and sedation/analgesia; patients are awake but paralysed if sedation is inadequate [FDA].", renal: "No adjustment needed — elimination is independent of the kidneys [FDA].", hepatic: "No adjustment needed [FDA].", preg: "Not established in primary source. [NEP]", other: "Myasthenia gravis, Eaton–Lambert syndrome and other neuromuscular diseases: much greater sensitivity — smaller doses with monitoring [FDA]." },
  tox: { human: "Excess doses prolong paralysis and may cause histamine-related effects [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Keep ventilating until spontaneous recovery; reverse with an anticholinesterase (e.g. neostigmine) given with an anticholinergic, once some recovery is seen on the nerve stimulator [FDA]." },
  contra: ["Hypersensitivity to atracurium [FDA].", "Multiple-dose vials with benzyl alcohol: in patients with benzyl alcohol allergy, and in neonates [FDA]."],
  ae: { common: ["Flushing, hypotension, tachycardia from histamine release [FDA]."], serious: ["Anaphylaxis [FDA]", "Bronchospasm [FDA]", "Prolonged paralysis [FDA]"] },
  monitor: ["Peripheral nerve stimulator (train-of-four) [FDA].", "Ventilation, blood pressure and heart rate [FDA]."],
  local: { neml: "NEML 2025: atracurium besylate 10 mg/mL injection (V) — NRH, RRH; DH with an operating theatre [BT-NEML].", strengths: "10 mg/mL [BT-NEML].", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "atracurium", indication_id: "intubation", label: "Intubation — adults and children 2 years+ (0.4–0.5 mg/kg)", route: "IV", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.4, value_max: 0.5, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "To 0.1 mL", renal: [], flags: ["HIGH_ALERT"], sources: ["FDA"] },
    { drug: "atracurium", indication_id: "maintenance", label: "Maintenance — 0.08–0.1 mg/kg", route: "IV", population: { min_age_months: 24, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.08, value_max: 0.1, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "To 0.01 mL", renal: [], flags: ["HIGH_ALERT"], sources: ["FDA"] },
    { drug: "atracurium", indication_id: "infant", label: "Infant 1 month–2 years — 0.3–0.4 mg/kg", route: "IV", population: { min_age_months: 1, max_age_months: 24, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.3, value_max: 0.4, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 10, unit: "mg/mL" }], rounding: "To 0.01 mL", renal: [], flags: ["HIGH_ALERT"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Atracurium besylate injection — Meitheal Pharmaceuticals, label effective 2024-12-04", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=efe90ee2-fe9e-421f-9e54-2961085d3b12"], ["ISMP", "ISMP List of High-Alert Medications in Acute Care Settings (neuromuscular blocking agents)", "https://home.ecri.org/blogs/ismp-resources/high-alert-medications-in-acute-care-settings"]],
  dose: { tagline: "Muscle relaxant for intubation and surgery under general anaesthesia.",
    cautionTitle: "Paralyses breathing — airway control required",
    caution: "Give only after loss of consciousness, by staff able to manage the airway and ventilation, with a nerve stimulator. It has no sedative or analgesic effect [FDA].",
    adult: [
      { ind: "Intubation", text: "0.4–0.5 mg/kg IV bolus. Under steady-state isoflurane/enflurane: 0.25–0.35 mg/kg.", calc: ["intubation"] },
      { ind: "Maintenance", text: "0.08–0.1 mg/kg, first usually 20–45 min after the initial dose, then as guided by the nerve stimulator.", calc: ["maintenance"] },
      { ind: "Heart disease or high histamine risk (asthma, past severe reactions)", text: "0.3–0.4 mg/kg, slowly or in divided doses over 1 min." }
    ],
    child: [
      { ind: "Children 2 years and over", text: "Same mg/kg as adults; maintenance doses may be needed a little more often.", calc: ["intubation", "maintenance"] },
      { ind: "Infants 1 month–2 years", text: "0.3–0.4 mg/kg initial dose (under halothane).", calc: ["infant"] }
    ] }
});

/* ---------- AZTREONAM (FDA AZACTAM, Squibb, NDA050580, eff. 2025-12-15) ---------- */
FDB_M("aztreonam", {
  inn: "Aztreonam", atc: "J01DF01", cls: "Monobactam beta-lactam antibacterial (Gram-negative only)",
  linked: [["Gram-negative infections incl. Pseudomonas (urinary, lower respiratory, septicaemia, intra-abdominal, gynaecological, skin)", "Alternative beta-lactam [FDA]", ""]],
  forms: ["Powder for injection 1 g and 2 g vials; IV (preferred for doses over 1 g or severe infection) or IM [FDA]."],
  moa: "Binds penicillin-binding protein 3 of Gram-negative bacteria → blocks cell-wall synthesis; no Gram-positive or anaerobic activity [FDA].",
  pk: ["Half-life about 1.7 h with normal kidneys; prolonged in kidney impairment and in the elderly [FDA].", "Removed by haemodialysis and peritoneal dialysis [FDA].", "Rarely cross-reacts with penicillins or cephalosporins, but use with care if there is a history of beta-lactam allergy [FDA]."],
  ind: { adult: ["Urinary tract, lower respiratory tract, septicaemia, skin, intra-abdominal and gynaecological infections due to susceptible Gram-negative bacteria [FDA]."], paed: ["Children 9 months to 16 years, IV [FDA]."] },
  adult: [["Urinary tract infection", "500 mg or 1 g every 8–12 h [FDA]."], ["Moderately severe systemic infection", "1 g or 2 g every 8–12 h [FDA]."], ["Severe or life-threatening infection; Pseudomonas", "2 g every 6–8 h [FDA]."], ["Maximum", "8 g per day [FDA]."], ["Kidney impairment", "CrCl 10–30: after a 1–2 g loading dose, give half the usual dose. CrCl under 10 / haemodialysis: usual first dose, then one-quarter of it at the usual interval, plus one-eighth after each dialysis session in serious infections [FDA]."]],
  paed: { tiers: ["9 months and over, IV: mild–moderate 30 mg/kg every 8 h; moderate–severe 30 mg/kg every 6–8 h; maximum 120 mg/kg/day [FDA]."], transition: "Adult doses when the weight-based dose reaches the adult dose (2 g, 8 g/day) [NEP].", calcNote: "Daily maximum 120 mg/kg/day and never above the adult 8 g/day." },
  adj: { renal: "CrCl 10–30 mL/min/1.73 m²: half dose after loading. Under 10: one-quarter maintenance; one-eighth extra after each haemodialysis [FDA]. No paediatric renal data [FDA].", hepatic: "Half-life only slightly prolonged — liver is a minor route [FDA].", preg: "Not established in primary source. [NEP]", other: "Elderly: clearance falls with age — base the dose on CrCl [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Haemodialysis or peritoneal dialysis can remove aztreonam if needed [FDA]." },
  contra: ["Hypersensitivity to aztreonam or any component [FDA]."],
  ae: { common: ["Injection-site reactions, rash, diarrhoea, nausea [FDA]."], serious: ["Anaphylaxis [FDA]", "C. difficile diarrhoea [FDA]", "Toxic epidermal necrolysis (rare) [FDA]"] },
  monitor: ["Kidney function for dosing [FDA].", "Allergy history [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "aztreonam", indication_id: "severe_adult", label: "Severe infection / Pseudomonas — adult 2 g every 8 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 2000, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 2000, max_daily: 8000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 1000, unit: "mg/vial" }],
      rounding: "Whole grams", renal: [{ crcl_min: 10, crcl_max: 30, action: "reduce_dose", factor: 0.5, interval_h: 8 }, { crcl_min: 0, crcl_max: 9.999, action: "reduce_dose", factor: 0.25, interval_h: 8 }], flags: [], sources: ["FDA"] },
    { drug: "aztreonam", indication_id: "uti_adult", label: "Urinary tract infection — adult 1 g every 8 h", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1000, unit: "mg", per: "dose" }, interval_h: 8, divided_doses: 3, caps: { max_single: 2000, max_daily: 8000, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 1000, unit: "mg/vial" }],
      rounding: "Whole grams", renal: [{ crcl_min: 10, crcl_max: 30, action: "reduce_dose", factor: 0.5, interval_h: 8 }, { crcl_min: 0, crcl_max: 9.999, action: "reduce_dose", factor: 0.25, interval_h: 8 }], flags: [], sources: ["FDA"] },
    { drug: "aztreonam", indication_id: "child", label: "Child 9 months+ — 30 mg/kg every 6–8 h (max 120 mg/kg/day)", route: "IV", population: { min_age_months: 9, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: 4, caps: { max_single: 2000, max_daily: 8000, adult_ceiling_single: 2000, adult_ceiling_daily: 8000, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 1000, unit: "mg/vial" }], rounding: "To 10 mg [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "AZACTAM (aztreonam for injection) — E.R. Squibb & Sons, label effective 2025-12-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9a105eaf-ee77-4016-beeb-d425a5565db2"]],
  dose: { tagline: "Injectable antibiotic for Gram-negative infections, including Pseudomonas.",
    adult: [
      { ind: "Urinary tract infection", text: "500 mg or 1 g IV or IM every 8–12 h.", calc: ["uti_adult"] },
      { ind: "Moderately severe infection", text: "1 g or 2 g every 8–12 h." },
      { ind: "Severe infection or Pseudomonas", text: "2 g IV every 6–8 h. Maximum 8 g per day.", calc: ["severe_adult"] },
      { ind: "Kidney impairment", text: "CrCl 10–30: give a 1–2 g loading dose, then half the usual dose. CrCl under 10 or on haemodialysis: usual first dose, then one-quarter of it at the usual interval, plus one-eighth after each dialysis in serious infections." }
    ],
    child: [{ ind: "Children 9 months and over (IV)", text: "30 mg/kg every 8 h (mild–moderate) or every 6–8 h (moderate–severe). Maximum 120 mg/kg per day.", calc: ["child"] }] }
});

/* ---------- ATOVAQUONE (FDA MEPRON oral suspension, NDA020500) ---------- */
FDB_M("atovaquone", {
  inn: "Atovaquone", atc: "P01AX06", cls: "Antiprotozoal (hydroxynaphthoquinone)",
  linked: [["Pneumocystis jirovecii pneumonia (PCP) — prevention and mild–moderate treatment", "Alternative when co-trimoxazole cannot be used [FDA]", ""]],
  forms: ["Oral suspension 750 mg/5 mL [FDA]."],
  moa: "Inhibits the mitochondrial electron-transport chain of the parasite → blocks nucleic-acid and ATP synthesis [FDA].",
  pk: ["Absorption is poor and depends on food — always give with a meal; fatty food raises levels [FDA].", "Long half-life (about 2–3 days) from enterohepatic recycling; excreted almost entirely unchanged in faeces [FDA].", "Rifampicin or rifabutin markedly lower atovaquone levels — combination not recommended. Tetracycline and metoclopramide also lower levels [FDA]."],
  ind: { adult: ["Prevention of PCP in adults and adolescents 13 years and over who cannot tolerate co-trimoxazole [FDA].", "Oral treatment of mild-to-moderate PCP in people who cannot tolerate co-trimoxazole [FDA]."], paed: ["Safety and effectiveness not established at 12 years and younger [FDA]."] },
  adult: [["PCP prevention", "1,500 mg (10 mL) once daily with food [FDA]."], ["Mild–moderate PCP treatment", "750 mg (5 mL) twice daily with food for 21 days [FDA]."]],
  paed: { tiers: ["13 years and over: adult doses [FDA].", "12 years and younger: not established [FDA]."], transition: "Adult doses from 13 years [FDA].", calcNote: "Fixed adult doses from 13 years." },
  adj: { renal: "No dose adjustment information in the label. [NEP]", hepatic: "Hepatitis and fatal liver failure reported — monitor in liver disease [FDA].", preg: "Not established in primary source. [NEP]", other: "Poor absorption with diarrhoea or other GI disorders — consider another drug [FDA]." },
  tox: { human: "Overdoses up to 31,500 mg reported; one patient also taking dapsone developed methaemoglobinaemia [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "No antidote; supportive care [FDA]." },
  contra: ["History of hypersensitivity to atovaquone or any component [FDA]."],
  ae: { common: ["Diarrhoea, rash, headache, nausea, vomiting, fever [FDA]."], serious: ["Hepatotoxicity, including fatal liver failure [FDA]", "Severe cutaneous reactions (Stevens–Johnson syndrome, erythema multiforme) [FDA]"] },
  monitor: ["Clinical response — failure is more likely if not taken with food [FDA].", "Liver tests if symptoms of liver injury [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "atovaquone", indication_id: "pcp_prev", label: "PCP prevention — 1,500 mg once daily with food", route: "PO", population: { min_age_months: 156, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1500, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 1500, max_daily: 1500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "susp", strength: 750, unit: "mg/5mL" }], rounding: "Whole mL", renal: [], flags: [], sources: ["FDA"] },
    { drug: "atovaquone", indication_id: "pcp_treat", label: "PCP treatment — 750 mg twice daily with food × 21 days", route: "PO", population: { min_age_months: 156, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 750, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 750, max_daily: 1500, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "susp", strength: 750, unit: "mg/5mL" }], rounding: "Whole mL", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "MEPRON (atovaquone) oral suspension — GlaxoSmithKline, current DailyMed label", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b426b6bf-f07e-4580-97ae-dfca1ddf5b8f"]],
  dose: { tagline: "Oral suspension to prevent or treat Pneumocystis pneumonia when co-trimoxazole can't be used.",
    cautionTitle: "Give with food",
    caution: "Failure to administer MEPRON oral suspension with food may result in lower plasma atovaquone concentrations and may limit response to therapy. (FDA label, Warnings 5.1)",
    adult: [
      { ind: "PCP prevention (13 years and over)", text: "1,500 mg (10 mL) once daily with food.", calc: ["pcp_prev"] },
      { ind: "Mild–moderate PCP treatment (13 years and over)", text: "750 mg (5 mL) twice daily with food for 21 days.", calc: ["pcp_treat"] }
    ],
    child: [{ ind: "12 years and younger", text: "Safety and effectiveness not established." }] }
});

/* ---------- ATOMOXETINE (FDA STRATTERA, Lilly, NDA021411) ---------- */
FDB_M("atomoxetine", {
  inn: "Atomoxetine", atc: "N06BA09", cls: "Selective noradrenaline reuptake inhibitor (non-stimulant ADHD drug)",
  linked: [["Attention-deficit/hyperactivity disorder (ADHD)", "Non-stimulant treatment [FDA]", ""]],
  forms: ["Capsules 10, 18, 25, 40, 60, 80 and 100 mg [FDA]."],
  moa: "Selectively blocks the presynaptic noradrenaline transporter [FDA].",
  pk: ["Metabolised mainly by CYP2D6; poor metabolisers have much higher levels [FDA].", "Levels are several-fold higher in CYP2D6 poor metabolisers [FDA].", "MAOI within 14 days: contraindicated. Strong CYP2D6 inhibitors (fluoxetine, paroxetine, quinidine) raise levels [FDA]."],
  ind: { adult: ["ADHD in adults [FDA]."], paed: ["ADHD in children 6 years and over [FDA]."] },
  adult: [["ADHD (and children 70 kg or more)", "Start 40 mg/day; after at least 3 days increase to a target of 80 mg/day, once in the morning or divided morning and late afternoon. After 2–4 more weeks may increase to a maximum of 100 mg/day [FDA]."]],
  paed: { tiers: ["6 years and over, under 70 kg: start 0.5 mg/kg/day; after at least 3 days increase to target 1.2 mg/kg/day; maximum 1.4 mg/kg/day or 100 mg/day, whichever is less [FDA].", "70 kg or more: adult dosing [FDA].", "Under 6 years: not established [FDA]."], transition: "Adult (fixed) dosing at 70 kg [FDA].", calcNote: "Total daily dose, given once daily or split into two doses." },
  adj: { renal: "No adjustment needed [FDA].", hepatic: "Moderate (Child-Pugh B): 50% of the usual starting and target dose. Severe (Child-Pugh C): 25%. Mild: usual dose [FDA].", preg: "Not established in primary source. [NEP]", other: "Strong CYP2D6 inhibitor or CYP2D6 poor metaboliser: same starting, target and maximum doses, but titrate more slowly (4-week interval) if symptoms do not improve and the starting dose is tolerated [FDA]." },
  tox: { human: "No deaths from atomoxetine alone, including intentional overdoses up to 1,400 mg. Common symptoms: GI upset, somnolence, dizziness, tremor, abnormal behaviour, hyperactivity, agitation [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; monitor heart rhythm and vital signs [FDA]." },
  contra: ["Hypersensitivity to atomoxetine [FDA].", "MAOI use now or within 14 days [FDA].", "Narrow-angle glaucoma [FDA].", "Phaeochromocytoma or a history of it [FDA].", "Severe heart or vascular disorders that would worsen with a rise in blood pressure or heart rate [FDA]."],
  ae: { common: ["Children: nausea, vomiting, fatigue, decreased appetite, abdominal pain, somnolence [FDA].", "Adults: constipation, dry mouth, nausea, decreased appetite, dizziness, erectile dysfunction, urinary hesitation [FDA]."], serious: ["Suicidal thoughts and behaviour in children (boxed) [FDA]", "Severe liver injury [FDA]", "Raised blood pressure and heart rate; serious cardiovascular events [FDA]", "Emergent psychosis or mania [FDA]"] },
  monitor: ["Suicidal thoughts and behaviour, especially in the first months and after dose changes [FDA].", "Blood pressure and pulse at baseline, after dose increases and periodically [FDA].", "Growth in children [FDA].", "Screen for bipolar disorder before starting [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "atomoxetine", indication_id: "child_start", label: "Child under 70 kg — start 0.5 mg/kg/day", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: 70 }, basis: "mg_per_kg", dose: { value: 0.5, unit: "mg", per: "day" }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, max_daily: 100, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 10, unit: "mg/cap" }], rounding: "Nearest capsule strength (capsules not to be opened)", renal: [], flags: [], sources: ["FDA"] },
    { drug: "atomoxetine", indication_id: "child_target", label: "Child under 70 kg — target 1.2 mg/kg/day (max 1.4 mg/kg/day or 100 mg)", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: 70 }, basis: "mg_per_kg", dose: { value: 1.2, unit: "mg", per: "day", value_max: 1.4 }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, max_daily: 100, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 10, unit: "mg/cap" }], rounding: "Nearest capsule strength (capsules not to be opened)", renal: [], flags: [], sources: ["FDA"] },
    { drug: "atomoxetine", indication_id: "adult", label: "Adult or 70 kg+ — 40 mg/day, target 80 mg/day (max 100 mg)", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: 70, max_weight_kg: null }, basis: "fixed", dose: { value: 40, unit: "mg", per: "day", value_max: 80 }, interval_h: 24, divided_doses: 1, caps: { max_single: 100, max_daily: 100, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 40, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "STRATTERA (atomoxetine) capsules — Eli Lilly, current DailyMed label", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=309de576-c318-404a-bc15-660c2b1876fb"]],
  dose: { tagline: "Non-stimulant capsule for ADHD in children 6 years and over and adults.",
    boxedTitle: "Suicidal thoughts and behaviours in children 6 years and over",
    boxed: "All STRATTERA-treated pediatric patients 6 years of age or older should be monitored and observed closely for suicidal thoughts and behavior, clinical worsening, or unusual changes in behavior, especially during the initial months of therapy or at times of dosage changes. Families and caregivers should be advised of the need for close observation and communication with the health care provider. Consider stopping STRATTERA in patients who experience emergent suicidal thoughts and behavior.",
    adult: [
      { ind: "ADHD — adults and children 70 kg or more", text: "Start 40 mg a day. After at least 3 days raise to 80 mg a day, once in the morning or split morning and late afternoon. After 2–4 more weeks may raise to a maximum of 100 mg a day.", calc: ["adult"] },
      { ind: "Liver impairment", text: "Moderate (Child-Pugh B): 50% of the usual dose. Severe (Child-Pugh C): 25%." }
    ],
    child: [
      { ind: "ADHD — 6 years and over, under 70 kg", text: "Start 0.5 mg/kg a day. After at least 3 days raise to 1.2 mg/kg a day, once daily or in two doses. Maximum 1.4 mg/kg a day or 100 mg, whichever is less.", calc: ["child_start", "child_target"] },
      { ind: "Under 6 years", text: "Not established." }
    ] }
});

/* ---------- AZELASTINE nasal (FDA OTC ANDA216421; original brand Astelin/Astepro) ---------- */
FDB_M("azelastine", {
  inn: "Azelastine", atc: "R01AC03", cls: "Antihistamine (H1), nasal spray",
  linked: [["Allergic rhinitis (hay fever, perennial)", "Topical nasal antihistamine [FDA]", ""]],
  forms: ["Nasal spray 0.15% (OTC) [FDA]; 0.1% also marketed [NEP].", "Eye drops 0.05% (separate product) [NEP]."],
  moa: "Blocks histamine H1 receptors in the nasal lining [FDA].",
  pk: ["Acts locally; some is absorbed and can cause drowsiness [FDA].", "Alcohol and other CNS depressants may add to drowsiness [FDA]."],
  ind: { adult: ["Temporary relief of hay fever or other upper respiratory allergy symptoms: runny nose, sneezing, itchy nose [FDA]."], paed: ["6 years and over [FDA]."] },
  adult: [["Allergic rhinitis, 12 years and over", "2 sprays in each nostril once daily, or 1–2 sprays in each nostril every 12 h. Maximum 4 sprays per nostril in 24 h [FDA]."]],
  paed: { tiers: ["6–11 years: 1 spray in each nostril every 12 h; maximum 2 sprays per nostril in 24 h [FDA].", "Under 6 years: do not use [FDA]."], transition: "Adult dose from 12 years [FDA].", calcNote: "Sprays — no weight calculation." },
  adj: { renal: "No adjustment information in the label. [NEP]", hepatic: "No adjustment information in the label. [NEP]", preg: "Ask a health professional before use if pregnant or breastfeeding [FDA].", other: "Avoid alcohol and sedatives; may cause drowsiness — take care when driving [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care. [NEP]" },
  contra: ["Hypersensitivity to azelastine. [NEP]"],
  ae: { common: ["Bitter taste, drowsiness [FDA]."], serious: ["Not established in primary source. [NEP]"] },
  monitor: ["Symptom relief; drowsiness [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "Azelastine HCl nasal spray 0.15% (OTC, ANDA216421) — Drug Facts label, DailyMed", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=22d516d0-da22-4e3b-a4a5-135b009bc968"]],
  dose: { tagline: "Antihistamine nasal spray for hay fever and nasal allergy.",
    adult: [{ ind: "Allergic rhinitis — 12 years and over", text: "2 sprays in each nostril once daily, or 1–2 sprays in each nostril every 12 hours. No more than 4 sprays per nostril in 24 hours." }],
    child: [
      { ind: "6–11 years", text: "1 spray in each nostril every 12 hours. No more than 2 sprays per nostril in 24 hours." },
      { ind: "Under 6 years", text: "Do not use." }
    ] }
});

/* ---------- AZELAIC ACID (FDA AZELEX 20% cream, NDA020428) ---------- */
FDB_M("azelaic-acid", {
  inn: "Azelaic acid", atc: "D10AX03", cls: "Topical dicarboxylic acid (anti-acne)",
  linked: [["Acne vulgaris (mild–moderate inflammatory)", "Topical treatment [FDA]", ""], ["Rosacea (papulopustular)", "15% gel (Finacea) [FDA]", ""]],
  forms: ["Cream 20% (AZELEX) [FDA].", "Gel or foam 15% (Finacea, for rosacea) [FDA]."],
  moa: "Exact mechanism not known; antibacterial and anti-keratinising activity are proposed. [NEP]",
  pk: ["Less than 4% of a topical dose is absorbed through the skin; the rest is metabolised and excreted like dietary azelaic acid [FDA]."],
  ind: { adult: ["Mild-to-moderate inflammatory acne vulgaris [FDA]."], paed: ["Safety and effectiveness under 12 years not established [FDA]."] },
  adult: [["Acne", "After washing and drying the skin, massage a thin film gently into the affected areas twice daily, morning and evening. Improvement usually within 4 weeks [FDA]."]],
  paed: { tiers: ["12 years and over: as adults [FDA].", "Under 12 years: not established [FDA]."], transition: "Adult use from 12 years [FDA].", calcNote: "Topical — no weight calculation." },
  adj: { renal: "Not applicable (topical). [NEP]", hepatic: "Not applicable (topical). [NEP]", preg: "Not established in primary source. [NEP]", other: "Darker skin: watch for lightening (hypopigmentation) [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Wash off; supportive care [NEP]." },
  contra: ["Hypersensitivity to any component [FDA]."],
  ae: { common: ["Itching, burning, stinging, tingling at the application site [FDA]."], serious: ["Hypopigmentation [FDA]", "Worsening of asthma reported [FDA]"] },
  monitor: ["Skin response at 4 weeks; skin colour in darker-skinned patients [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "AZELEX (azelaic acid) cream 20% — Allergan, current DailyMed label", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ebdfcaf7-b5d6-47e1-be87-ccaba4b97e75"]],
  dose: { tagline: "Cream for mild-to-moderate inflammatory acne.",
    adult: [{ ind: "Acne (12 years and over)", text: "Wash and dry the skin, then gently massage a thin film into the affected areas twice a day, morning and evening. Improvement usually within 4 weeks." }],
    child: [{ ind: "Under 12 years", text: "Not established." }] }
});

/* ---------- ATAZANAVIR (FDA REYATAZ, Squibb, NDA021567/206352, eff. 2024-12-05) ---------- */
FDB_M("atazanavir", {
  inn: "Atazanavir", atc: "J05AE08", cls: "HIV-1 protease inhibitor",
  linked: [["HIV-1 infection", "Protease inhibitor, usually boosted with ritonavir, in combination ART [FDA]", ""]],
  forms: ["Capsules 200 mg and 300 mg [FDA].", "Oral powder 50 mg per packet (must be given with ritonavir) [FDA]."],
  moa: "Inhibits HIV-1 protease, preventing cleavage of viral polyproteins → immature, non-infectious virions [FDA].",
  pk: ["Must be taken with food [FDA].", "Inhibits CYP3A and UGT1A1 — many serious interactions; contraindicated with drugs highly dependent on these for clearance [FDA].", "Acid reducers (PPIs, H2 blockers) lower absorption — dose separation or avoidance needed [FDA].", "Mean half-life about 12 h in people with liver impairment [FDA]."],
  ind: { adult: ["HIV-1 infection, in combination with other antiretrovirals [FDA]."], paed: ["Children 3 months and over weighing at least 5 kg [FDA].", "Not for infants under 3 months — risk of kernicterus [FDA]."] },
  adult: [["Treatment-naive", "300 mg with ritonavir 100 mg once daily with food, or 400 mg once daily with food (no ritonavir) [FDA]."], ["Treatment-experienced", "300 mg with ritonavir 100 mg once daily with food [FDA]."], ["With efavirenz (naive)", "400 mg with ritonavir 100 mg once daily [FDA]."], ["Pregnancy", "300 mg with ritonavir 100 mg once daily [FDA]."]],
  paed: { tiers: ["Capsules, 6 to under 18 years: 15 to under 35 kg — 200 mg + ritonavir 100 mg once daily; 35 kg and over — 300 mg + ritonavir 100 mg; under 15 kg — capsules not recommended [FDA].", "Oral powder, 3 months+ and 5 kg+: 5 to under 15 kg — 200 mg (4 packets) + ritonavir 80 mg; 15 to under 25 kg — 250 mg (5 packets) + ritonavir 80 mg [FDA].", "Treatment-naive, 13 years+, 40 kg+, cannot tolerate ritonavir: 400 mg once daily [FDA]."], transition: "Adult dose at 35 kg (capsules) [FDA].", calcNote: "Weight bands; ritonavir is a separate prescription." },
  adj: { renal: "No adjustment. Haemodialysis: treatment-naive 300 mg + ritonavir 100 mg; not recommended if treatment-experienced on haemodialysis [FDA].", hepatic: "Treatment-naive: mild (Child-Pugh A) 400 mg; moderate (B) 300 mg; severe (C) not recommended. Ritonavir-boosted atazanavir not recommended in any liver impairment [FDA].", preg: "Human and animal data suggest no increase in major birth defects; must be boosted with ritonavir in pregnancy [FDA].", other: "Raised indirect bilirubin is common and reversible — do not reduce the dose for it [FDA]." },
  tox: { human: "Single doses up to 1,200 mg without symptoms. A 29.2 g overdose caused asymptomatic bifascicular block and PR prolongation that resolved [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive; ECG monitoring. Dialysis unlikely to help (protein-bound, liver-cleared) [FDA]." },
  contra: ["Previous clinically significant hypersensitivity (e.g. Stevens–Johnson syndrome, erythema multiforme, toxic skin eruptions) [FDA].", "Co-administration with drugs highly dependent on CYP3A or UGT1A1 where high levels are dangerous, or with strong CYP3A inducers [FDA]."],
  ae: { common: ["Nausea, jaundice/scleral icterus, rash [FDA]."], serious: ["PR prolongation / AV block [FDA]", "Severe skin reactions [FDA]", "Chronic kidney disease, kidney and gallstones [FDA]", "Hepatotoxicity, especially with hepatitis B or C [FDA]", "Hyperglycaemia, immune reconstitution syndrome [FDA]"] },
  monitor: ["Serum creatinine, CrCl and urinalysis before and during treatment [FDA].", "Liver tests in hepatitis B/C or liver disease [FDA].", "ECG if conduction disease or PR-prolonging drugs [FDA].", "Viral load and CD4 [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Bhutan HIV guideline 2024 mentions atazanavir only in an interaction table [BT-STG]." },
  calc: [
    { drug: "atazanavir", indication_id: "adult_boosted", label: "Adult — 300 mg + ritonavir 100 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 400, max_daily: 400, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 300, unit: "mg/cap" }], rounding: "Whole capsules — do not open", renal: [], flags: [], sources: ["FDA"] },
    { drug: "atazanavir", indication_id: "child_caps", label: "Child 6–17 years, capsules (with ritonavir 100 mg)", route: "PO", population: { min_age_months: 72, max_age_months: 216, min_weight_kg: 15, max_weight_kg: null }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1,
      bands: [{ min_weight_kg: 15, max_weight_kg: 35, text: "200 mg once daily + ritonavir 100 mg, with food", daily: 200 }, { min_weight_kg: 35, max_weight_kg: null, text: "300 mg once daily + ritonavir 100 mg, with food", daily: 300 }],
      caps: { max_single: 300, max_daily: 300, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "cap", strength: 200, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] },
    { drug: "atazanavir", indication_id: "child_powder", label: "Child 3 months+, oral powder (with ritonavir 80 mg)", route: "PO", population: { min_age_months: 3, max_age_months: null, min_weight_kg: 5, max_weight_kg: 25 }, basis: "band", dose: { value: null, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1,
      bands: [{ min_weight_kg: 5, max_weight_kg: 15, text: "200 mg (4 packets) once daily + ritonavir 80 mg, with food", daily: 200 }, { min_weight_kg: 15, max_weight_kg: 25, text: "250 mg (5 packets) once daily + ritonavir 80 mg, with food", daily: 250 }],
      caps: { max_single: 250, max_daily: 250, unit: "mg" }, weight_basis: "actual", formulations: [], rounding: "Whole 50 mg packets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "REYATAZ (atazanavir) capsules and oral powder — E.R. Squibb & Sons, label effective 2024-12-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=165cff62-b284-4a27-a65d-9ec8a5bfcdd8"]],
  dose: { tagline: "HIV protease inhibitor, usually boosted with ritonavir, taken once daily with food.",
    adult: [
      { ind: "HIV — treatment-naive", text: "300 mg with ritonavir 100 mg once daily with food, or 400 mg once daily with food if ritonavir can't be used.", calc: ["adult_boosted"] },
      { ind: "HIV — treatment-experienced or pregnant", text: "300 mg with ritonavir 100 mg once daily with food." },
      { ind: "Liver impairment (treatment-naive, unboosted)", text: "Mild: 400 mg. Moderate: 300 mg. Severe: not recommended. Don't use ritonavir-boosted atazanavir with any liver impairment." }
    ],
    child: [
      { ind: "Capsules, 6 to under 18 years", text: "15 to under 35 kg: 200 mg + ritonavir 100 mg once daily. 35 kg and over: 300 mg + ritonavir 100 mg. Under 15 kg: use the powder.", calc: ["child_caps"] },
      { ind: "Oral powder, 3 months and over (5 kg+)", text: "5 to under 15 kg: 200 mg (4 packets) + ritonavir 80 mg. 15 to under 25 kg: 250 mg (5 packets) + ritonavir 80 mg. Mix with food or drink.", calc: ["child_powder"] },
      { ind: "Under 3 months", text: "Not recommended — risk of kernicterus." }
    ] }
});

/* ---------- ATOGEPANT (FDA QULIPTA, AbbVie, NDA215206, eff. 2025-09-30) ---------- */
FDB_M("atogepant", {
  inn: "Atogepant", atc: "N02CD07", cls: "CGRP receptor antagonist (gepant), oral",
  linked: [["Migraine prevention (episodic and chronic)", "Preventive treatment [FDA]", ""]],
  forms: ["Tablets 10, 30 and 60 mg [FDA]."],
  moa: "Blocks the calcitonin gene-related peptide (CGRP) receptor [FDA].",
  pk: ["Half-life about 11 h [FDA].", "CYP3A4 substrate: strong inhibitors → 10 mg; inducers lower levels (chronic migraine: not recommended with strong/moderate inducers); OATP inhibitors → lower dose [FDA]."],
  ind: { adult: ["Preventive treatment of migraine in adults [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Episodic migraine", "10 mg, 30 mg or 60 mg once daily, with or without food [FDA]."], ["Chronic migraine", "60 mg once daily [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed adult dose." },
  adj: { renal: "CrCl under 30 mL/min or end-stage kidney disease: episodic migraine 10 mg once daily; chronic migraine not recommended [FDA].", hepatic: "Avoid in severe liver impairment [FDA].", preg: "Animal data suggest possible fetal harm [FDA].", other: "Strong CYP3A4 inhibitors: 10 mg once daily. OATP inhibitors: episodic 10 or 30 mg, chronic 30 mg. Strong or moderate CYP3A4 inducers: episodic 60 mg; chronic not recommended [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["History of hypersensitivity to atogepant or any component (reactions have included anaphylaxis and dyspnoea) [FDA]."],
  ae: { common: ["Nausea, constipation, fatigue/somnolence [FDA]."], serious: ["Hypersensitivity, possibly days after dosing [FDA]", "New or worse hypertension [FDA]", "New or worse Raynaud's phenomenon [FDA]"] },
  monitor: ["Blood pressure [FDA].", "Migraine frequency [NEP]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "atogepant", indication_id: "chronic", label: "Chronic migraine — 60 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 60, max_daily: 60, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 60, unit: "mg/tab" }], rounding: "Whole tablets", renal: [{ crcl_min: 0, crcl_max: 29.999, action: "avoid", text: "CrCl under 30: chronic migraine — not recommended (episodic: 10 mg once daily)." }], flags: [], sources: ["FDA"] },
    { drug: "atogepant", indication_id: "episodic", label: "Episodic migraine — 60 mg once daily (10 or 30 mg also approved)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 60, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 60, max_daily: 60, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 60, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "CrCl under 30 or end-stage kidney disease: episodic migraine 10 mg once daily.", flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "QULIPTA (atogepant) tablets — AbbVie, label effective 2025-09-30", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8c8ab8f4-32bd-497a-befa-70c8a51d8d52"]],
  dose: { tagline: "Daily tablet to prevent migraine in adults.",
    adult: [
      { ind: "Episodic migraine", text: "10 mg, 30 mg or 60 mg once daily, with or without food.", calc: ["episodic"] },
      { ind: "Chronic migraine", text: "60 mg once daily.", calc: ["chronic"] },
      { ind: "Kidney impairment (CrCl under 30) or dialysis", text: "Episodic: 10 mg once daily. Chronic: not recommended." },
      { ind: "With strong CYP3A4 inhibitors", text: "10 mg once daily." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- AVANAFIL (FDA label, ANDA209266; original brand STENDRA) ---------- */
FDB_M("avanafil", {
  inn: "Avanafil", atc: "G04BE10", cls: "Phosphodiesterase-5 (PDE5) inhibitor",
  linked: [["Erectile dysfunction", "On-demand oral treatment [FDA]", ""]],
  forms: ["Tablets 50, 100 and 200 mg [FDA]."],
  moa: "Inhibits PDE5 → more cGMP in the corpus cavernosum during sexual stimulation → smooth-muscle relaxation and erection [FDA].",
  pk: ["Works from about 15 minutes; with or without food [FDA].", "CYP3A4 substrate: strong inhibitors — do not use; moderate inhibitors — maximum 50 mg in 24 h [FDA].", "Adds to the blood-pressure-lowering effect of nitrates, alpha-blockers, other antihypertensives and alcohol [FDA]."],
  ind: { adult: ["Erectile dysfunction in adult men [FDA]."], paed: ["Not indicated [FDA]."] },
  adult: [["Erectile dysfunction", "Start 100 mg about 15 min before sexual activity, as needed. May increase to 200 mg (15 min before) or decrease to 50 mg (about 30 min before). No more than once a day [FDA]."], ["On a stable alpha-blocker", "Start 50 mg [FDA]."], ["With a moderate CYP3A4 inhibitor", "Maximum 50 mg once in 24 h [FDA]."]],
  paed: { tiers: ["Not indicated [FDA]."], transition: "Adult men only [FDA].", calcNote: "Fixed adult dose." },
  adj: { renal: "Do not use in severe kidney impairment [FDA].", hepatic: "Do not use in severe liver impairment [FDA].", preg: "Not indicated for females [FDA].", other: "Nitrates: if needed in an emergency, at least 12 h must pass after the last avanafil dose [FDA]." },
  tox: { human: "Single doses up to 800 mg in healthy people and repeated doses up to 300 mg have been given [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Standard supportive care. Dialysis not expected to help (highly protein-bound) [FDA]." },
  contra: ["Any form of organic nitrate, regular or intermittent [FDA].", "Hypersensitivity to any component [FDA].", "Guanylate cyclase stimulators such as riociguat and vericiguat [FDA]."],
  ae: { common: ["Headache, flushing, nasal congestion, nasopharyngitis, back pain [FDA]."], serious: ["Hypotension with nitrates, alpha-blockers or alcohol [FDA]", "Priapism — erection over 4 hours needs emergency care [FDA]", "Sudden vision loss (NAION) [FDA]", "Sudden hearing loss [FDA]"] },
  monitor: ["Cardiovascular fitness for sexual activity before prescribing [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "avanafil", indication_id: "ed", label: "Erectile dysfunction — 100 mg as needed (max once a day)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 100, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 200, max_daily: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 100, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], renal_note: "Severe kidney impairment: do not use.", flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Avanafil tablets — Camber Pharmaceuticals (ANDA209266; same dosing as STENDRA), label effective 2025-12-17", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1d04e17d-7399-430a-a8bb-fa1912b155e9"]],
  dose: { tagline: "Fast-acting tablet for erectile dysfunction, taken as needed.",
    adult: [
      { ind: "Erectile dysfunction", text: "100 mg about 15 minutes before sexual activity, as needed. May raise to 200 mg or lower to 50 mg (take 50 mg about 30 minutes before). No more than once a day.", calc: ["ed"] },
      { ind: "On a stable alpha-blocker", text: "Start with 50 mg." },
      { ind: "With a moderate CYP3A4 inhibitor (e.g. erythromycin, diltiazem, fluconazole, verapamil)", text: "No more than 50 mg in 24 hours. Do not use with strong CYP3A4 inhibitors." }
    ],
    child: [{ ind: "Children", text: "Not indicated." }] }
});

/* ---------- AVAPRITINIB (FDA AYVAKIT, Blueprint, NDA212608, eff. 2026-10-20) ---------- */
FDB_M("avapritinib", {
  inn: "Avapritinib", atc: "L01EX18", cls: "Kinase inhibitor (KIT / PDGFRA)",
  linked: [["Gastrointestinal stromal tumour (GIST) with PDGFRA exon 18 mutation", "Targeted therapy [FDA]", ""], ["Systemic mastocytosis (advanced and indolent)", "Targeted therapy [FDA]", ""]],
  forms: ["Tablets 25, 50, 100, 200 and 300 mg [FDA]."],
  moa: "Tyrosine kinase inhibitor of KIT D816V, PDGFRA and PDGFRA D842 mutants and several KIT mutants [FDA].",
  pk: ["Take on an empty stomach, at least 1 h before or 2 h after a meal [FDA].", "Half-life 32–57 h (GIST), 20–39 h (AdvSM) [FDA].", "Avoid strong and moderate CYP3A inhibitors and inducers [FDA]."],
  ind: { adult: ["Unresectable or metastatic GIST with a PDGFRA exon 18 mutation (including D842V) [FDA].", "Advanced systemic mastocytosis (ASM, SM-AHN, mast cell leukaemia) [FDA].", "Indolent systemic mastocytosis [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["GIST (PDGFRA exon 18)", "300 mg once daily [FDA]."], ["Advanced systemic mastocytosis", "200 mg once daily. Not recommended if platelets under 50 × 10⁹/L [FDA]."], ["Indolent systemic mastocytosis", "25 mg once daily; after at least 6 months may increase to 50 mg once daily [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed adult dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Severe (Child-Pugh C): starting dose GIST 200 mg daily; AdvSM 100 mg daily; ISM 25 mg every other day [FDA].", preg: "Can cause fetal harm; effective contraception for females and males; do not breastfeed [FDA].", other: "Dose reductions for side effects: GIST 300 → 200 → 100 mg (stop if 100 mg not tolerated); AdvSM 200 → 100 → 50 → 25 mg [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["GIST: oedema, nausea, fatigue, cognitive impairment, vomiting, decreased appetite, diarrhoea, watery eyes, abdominal pain, constipation [FDA]."], serious: ["Intracranial haemorrhage — stop permanently for any grade [FDA]", "Cognitive effects [FDA]", "Photosensitivity [FDA]"] },
  monitor: ["Signs of intracranial bleeding; platelets in AdvSM [FDA].", "Cognitive symptoms [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "avapritinib", indication_id: "gist", label: "GIST — 300 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 300, max_daily: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 300, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "avapritinib", indication_id: "advsm", label: "Advanced systemic mastocytosis — 200 mg once daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 200, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 200, max_daily: 200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 200, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "AYVAKIT (avapritinib) tablets — Blueprint Medicines, label effective 2026-10-20", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=645c887c-8cd4-4623-8da9-ac223d71a8b9"]],
  dose: { tagline: "Targeted cancer tablet for PDGFRA-mutant GIST and systemic mastocytosis.",
    adult: [
      { ind: "GIST with PDGFRA exon 18 mutation", text: "300 mg once daily on an empty stomach.", calc: ["gist"] },
      { ind: "Advanced systemic mastocytosis", text: "200 mg once daily. Not for platelet counts under 50 × 10⁹/L.", calc: ["advsm"] },
      { ind: "Indolent systemic mastocytosis", text: "25 mg once daily; after at least 6 months may raise to 50 mg once daily." },
      { ind: "Severe liver impairment (Child-Pugh C)", text: "Start GIST 200 mg daily, AdvSM 100 mg daily, ISM 25 mg every other day." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- AVATROMBOPAG (FDA DOPTELET / DOPTELET SPRINKLE, AkaRx, NDA210238/219696, eff. 2025-08-13) ---------- */
FDB_M("avatrombopag", {
  inn: "Avatrombopag", atc: "B02BX08", cls: "Thrombopoietin receptor agonist",
  linked: [["Thrombocytopenia in chronic liver disease before a procedure", "Short pre-procedure course [FDA]", ""], ["Chronic immune thrombocytopenia (ITP)", "Second-line [FDA]", ""]],
  forms: ["Tablets 20 mg (DOPTELET) [FDA].", "Sprinkle capsules 10 mg oral granules (DOPTELET SPRINKLE) — open and mix with soft food or liquid [FDA]."],
  moa: "Oral small-molecule TPO receptor agonist → more megakaryocytes and platelets; additive to TPO [FDA].",
  pk: ["Take with food [FDA].", "Half-life about 19 h; only about 6% excreted in urine [FDA].", "Tablets and sprinkle granules are NOT interchangeable mg-for-mg; granules are more bioavailable [FDA].", "Dual CYP2C9/CYP3A4 inhibitors or inducers change exposure — adjust dose in ITP [FDA]."],
  ind: { adult: ["Thrombocytopenia in chronic liver disease, before a scheduled procedure [FDA].", "Chronic ITP after insufficient response to previous treatment [FDA]."], paed: ["Persistent or chronic ITP, 1 year and over, after insufficient response to previous treatment [FDA]."] },
  adult: [["Chronic liver disease, before a procedure", "Start 10–13 days before the procedure, once daily with food for 5 days: platelets under 40 × 10⁹/L — 60 mg (3 tablets); 40 to under 50 × 10⁹/L — 40 mg (2 tablets). Procedure 5–8 days after the last dose [FDA]."], ["Chronic ITP", "Start 20 mg once daily with food; adjust dose or frequency to keep platelets ≥50 × 10⁹/L. Maximum 40 mg per day [FDA]."]],
  paed: { tiers: ["ITP, 6 years and over: tablets as adults — start 20 mg once daily, maximum 40 mg/day [FDA].", "ITP, 1 to under 6 years: sprinkle 10 mg (1 capsule) once daily, maximum 20 mg/day [FDA]."], transition: "Tablets from 6 years [FDA].", calcNote: "Fixed doses by age and product; titrate to platelet count." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "May cause fetal harm; do not breastfeed [FDA].", other: "Moderate or strong dual CYP2C9/CYP3A4 inhibitors: lower starting dose in ITP [FDA]." },
  tox: { human: "Overdose may raise platelets excessively → thrombosis [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor platelets; treat thrombosis per standard care; no antidote; haemodialysis not expected to help [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Chronic liver disease: fever, abdominal pain, nausea, headache, fatigue, peripheral oedema [FDA].", "ITP: headache [FDA]."], serious: ["Thrombotic and thromboembolic events, including portal vein thrombosis [FDA]"] },
  monitor: ["Platelet count — weekly when titrating or switching product, then monthly [FDA].", "Signs of thrombosis [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "avatrombopag", indication_id: "itp", label: "ITP, 6 years and over — start 20 mg once daily (max 40 mg/day)", route: "PO", population: { min_age_months: 72, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 40, max_daily: 40, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 20, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] },
    { drug: "avatrombopag", indication_id: "itp_small", label: "ITP, 1 to under 6 years — sprinkle 10 mg once daily (max 20 mg/day)", route: "PO", population: { min_age_months: 12, max_age_months: 72, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 10, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 20, max_daily: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 10, unit: "mg/cap" }], rounding: "Whole capsule contents", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "DOPTELET (avatrombopag) tablets and DOPTELET SPRINKLE — AkaRx (Sobi), label effective 2025-08-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e2d5960d-6c18-46cc-86bd-089222b09852"]],
  dose: { tagline: "Oral platelet booster for ITP and before procedures in chronic liver disease.",
    cautionTitle: "Tablets and sprinkle are not interchangeable",
    caution: "DOPTELET tablets and DOPTELET SPRINKLE are not substitutable on a mg-to-mg basis. If the formulation is switched, monitor platelet counts weekly until stable platelet counts are obtained. (FDA label, 2.1)",
    adult: [
      { ind: "Chronic liver disease, before a procedure", text: "Once daily with food for 5 days, starting 10–13 days before: platelets under 40 — 60 mg (3 tablets); 40 to under 50 — 40 mg (2 tablets)." },
      { ind: "Chronic ITP", text: "Start 20 mg once daily with food. Adjust to keep platelets at or above 50 × 10⁹/L. Maximum 40 mg a day.", calc: ["itp"] }
    ],
    child: [
      { ind: "ITP, 6 years and over (tablets)", text: "Start 20 mg once daily with food. Maximum 40 mg a day.", calc: ["itp"] },
      { ind: "ITP, 1 to under 6 years (sprinkle)", text: "10 mg (1 capsule's granules) once daily mixed with soft food or liquid. Maximum 20 mg a day.", calc: ["itp_small"] }
    ] }
});

/* ---------- AVACOPAN (FDA TAVNEOS, ChemoCentryx, NDA214487, eff. 2026-06-02) ---------- */
FDB_M("avacopan", {
  inn: "Avacopan", atc: "L04AJ05", cls: "Complement 5a receptor (C5aR) antagonist",
  linked: [["ANCA-associated vasculitis (GPA, MPA), severe active", "Add-on to standard therapy including glucocorticoids [FDA]", ""]],
  forms: ["Capsules 10 mg [FDA]."],
  moa: "Blocks the C5a receptor → less neutrophil activation and migration [FDA].",
  pk: ["Take with food; swallow capsules whole [FDA].", "CYP3A4 substrate: avoid strong and moderate inducers; strong inhibitors → 30 mg once daily [FDA]."],
  ind: { adult: ["Adjunctive treatment of severe active ANCA-associated vasculitis (GPA and MPA) with standard therapy including glucocorticoids [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["ANCA vasculitis", "30 mg (three 10 mg capsules) twice daily with food [FDA]."], ["With a strong CYP3A4 inhibitor", "30 mg once daily [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed adult dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not recommended in cirrhosis, especially severe (Child-Pugh C) [FDA].", preg: "No adequate human data; abortions increased in rabbits [FDA].", other: "Screen for hepatitis B before starting [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["Serious hypersensitivity to avacopan or any excipient [FDA]."],
  ae: { common: ["Nausea, headache, hypertension, diarrhoea, vomiting, rash, fatigue, upper abdominal pain [FDA]."], serious: ["Hepatotoxicity, including vanishing bile duct syndrome (some fatal) [FDA]", "Angioedema [FDA]", "Hepatitis B reactivation [FDA]", "Serious infections [FDA]"] },
  monitor: ["Liver tests (ALT, AST, ALP, bilirubin) before starting and as indicated [FDA].", "HBsAg and anti-HBc before starting [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "avacopan", indication_id: "aav", label: "ANCA vasculitis — 30 mg twice daily with food", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 30, max_daily: 60, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 10, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "TAVNEOS (avacopan) capsules — ChemoCentryx (Amgen), label effective 2026-06-02", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c93cbc0b-29a3-46a5-9c85-41815ea5cf4a"]],
  dose: { tagline: "Add-on capsule for severe ANCA-associated vasculitis, with standard therapy.",
    adult: [
      { ind: "Severe active ANCA vasculitis (GPA, MPA)", text: "30 mg (three 10 mg capsules) twice daily with food, alongside standard therapy including glucocorticoids.", calc: ["aav"] },
      { ind: "With a strong CYP3A4 inhibitor", text: "30 mg once daily." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- AZILSARTAN MEDOXOMIL (FDA label, ANDA214489; original brand EDARBI) ---------- */
FDB_M("azilsartan-medoxomil", {
  inn: "Azilsartan medoxomil", atc: "C09CA09", cls: "Angiotensin II receptor blocker (ARB)",
  linked: [["Hypertension", "First-line class option [FDA]", ""]],
  forms: ["Tablets 40 mg and 80 mg [FDA]."],
  moa: "Prodrug; azilsartan blocks angiotensin II at the AT1 receptor → vasodilation and less aldosterone [FDA].",
  pk: ["Half-life about 11 h [FDA].", "With or without food [FDA].", "Not removed by dialysis [FDA].", "NSAIDs, other RAS blockers and lithium interact (kidney injury, high potassium, lithium toxicity) [FDA]."],
  ind: { adult: ["Hypertension in adults [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Hypertension", "80 mg once daily. Consider 40 mg to start in people on high-dose diuretics [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed adult dose." },
  adj: { renal: "No set dose change; monitor kidney function in kidney impairment [FDA].", hepatic: "Not established in primary source. [NEP]", preg: "Boxed warning: stop as soon as pregnancy is detected — fetal toxicity. Breastfeeding not recommended [FDA].", other: "Correct volume or salt depletion first, or start at 40 mg [FDA]. Age 75+: raised creatinine more often [FDA]." },
  tox: { human: "Doses up to 320 mg daily for 7 days were well tolerated in healthy people [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care; azilsartan is not dialysable [FDA]." },
  contra: ["Co-administration with aliskiren in patients with diabetes [FDA]."],
  ae: { common: ["Diarrhoea (2%) [FDA]."], serious: ["Fetal toxicity [FDA]", "Hypotension in volume-depleted patients [FDA]", "Worsening kidney function [FDA]", "Hyperkalaemia [FDA]"] },
  monitor: ["Blood pressure [FDA].", "Kidney function and potassium [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "azilsartan-medoxomil", indication_id: "htn", label: "Hypertension — 80 mg once daily (40 mg if on high-dose diuretics)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 80, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 80, max_daily: 80, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 80, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Azilsartan medoxomil tablets — Lupin (ANDA214489; same dosing as EDARBI), label effective 2026-05-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b1c8de43-3b26-408f-8c7e-6c7d76348199"]],
  dose: { tagline: "Once-daily ARB tablet for high blood pressure.",
    boxedTitle: "Fetal toxicity",
    boxed: "When pregnancy is detected, discontinue azilsartan medoxomil tablets as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus.",
    adult: [{ ind: "Hypertension", text: "80 mg once daily, with or without food. Consider 40 mg to start in people on high-dose diuretics.", calc: ["htn"] }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- AZACITIDINE (FDA VIDAZA, Celgene, NDA050794, eff. 2024-01-29; oral ONUREG NDA214120) ---------- */
FDB_M("azacitidine", {
  inn: "Azacitidine", atc: "L01BC07", cls: "Hypomethylating agent (pyrimidine nucleoside analogue)",
  linked: [["Myelodysplastic syndromes (MDS)", "Injection (VIDAZA) [FDA]", ""], ["Juvenile myelomonocytic leukaemia (JMML)", "Injection, children [FDA]", ""], ["Acute myeloid leukaemia in first remission — maintenance", "Oral tablets (ONUREG) [FDA]", ""]],
  forms: ["Powder for injection 100 mg vial, SC or IV (VIDAZA) [FDA].", "Tablets 200 mg and 300 mg (ONUREG, oral) [FDA]."],
  moa: "Incorporates into RNA and DNA; causes DNA hypomethylation and direct toxicity to abnormal bone-marrow cells [FDA].",
  pk: ["Injection and oral tablets have very different exposure — never substitute one for the other [FDA]."],
  ind: { adult: ["MDS, FAB subtypes RA or RARS (with cytopenias or transfusion need), RAEB, RAEB-T and CMMoL — injection [FDA].", "AML in first complete remission after intensive induction, unable to complete intensive curative therapy — oral ONUREG [FDA]."], paed: ["Newly diagnosed JMML, 1 month and over — IV injection [FDA]."] },
  adult: [["MDS (injection)", "Cycle 1: 75 mg/m² SC or IV once daily for 7 days. Repeat every 4 weeks; may increase to 100 mg/m² if no benefit after 2 cycles and no toxicity other than nausea and vomiting. At least 4–6 cycles. Premedicate for nausea and vomiting [FDA]."], ["AML maintenance (ONUREG tablets)", "300 mg once daily on days 1–14 of each 28-day cycle; antiemetic 30 min before each dose for the first 2 cycles. Do not start a cycle if ANC under 0.5 × 10⁹/L [FDA]."]],
  paed: { tiers: ["JMML, IV daily for 7 days every 28 days (at least 3, at most 6 cycles): 1 month to under 1 year OR under 10 kg — 2.5 mg/kg; 1 year and over AND 10 kg or more — 75 mg/m² [FDA]."], transition: "Adult regimens for MDS [FDA].", calcNote: "mg/m² needs height; mg/kg for infants or under 10 kg." },
  adj: { renal: "Unexplained fall in serum bicarbonate below 20 mEq/L: reduce the next course by 50%. Unexplained rise in BUN or creatinine: delay the next cycle until normal or baseline, then reduce by 50% [FDA].", hepatic: "Contraindicated in advanced malignant liver tumours; care in liver disease [FDA].", preg: "Can cause fetal harm; effective contraception [FDA].", other: "Count-based dose changes for later cycles — see label [FDA]." },
  tox: { human: "One overdose of about 290 mg/m² IV caused diarrhoea, nausea and vomiting, which resolved [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor blood counts; supportive care; no specific antidote [FDA]." },
  contra: ["Advanced malignant hepatic tumours (injection) [FDA].", "Hypersensitivity to azacitidine or mannitol (injection) [FDA].", "Severe hypersensitivity to azacitidine (oral) [FDA]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, constipation, fatigue, fever, injection-site reactions, low blood counts [FDA]."], serious: ["Myelosuppression, febrile neutropenia [FDA]", "Kidney toxicity [FDA]", "Liver toxicity in severe pre-existing liver impairment [FDA]"] },
  monitor: ["Full blood count before each cycle (oral: every other week for the first 2 cycles) [FDA].", "Liver tests and serum creatinine before starting [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "azacitidine", indication_id: "mds", label: "MDS — 75 mg/m² SC/IV once daily × 7 days, every 4 weeks", route: "SC/IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [{ form: "inj", strength: 100, unit: "mg/vial" }], rounding: "To 5 mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "azacitidine", indication_id: "jmml_m2", label: "JMML, 1 year+ and 10 kg+ — 75 mg/m² IV daily × 7 days", route: "IV", population: { min_age_months: 12, max_age_months: 216, min_weight_kg: 10, max_weight_kg: null }, basis: "mg_per_m2", dose: { value: 75, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", bsa_formula: "mosteller", formulations: [{ form: "inj", strength: 100, unit: "mg/vial" }], rounding: "To 1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "azacitidine", indication_id: "jmml_kg", label: "JMML, under 1 year or under 10 kg — 2.5 mg/kg IV daily × 7 days", route: "IV", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2.5, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 100, unit: "mg/vial" }], rounding: "To 0.1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "azacitidine", indication_id: "aml_oral", label: "AML maintenance (ONUREG) — 300 mg once daily, days 1–14 of 28", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 300, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: 1, caps: { max_single: 300, max_daily: 300, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 300, unit: "mg/tab", whole: true }], rounding: "Whole tablets — do not cut or crush", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "VIDAZA (azacitidine for injection) — Celgene (BMS), label effective 2024-01-29", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3495a71a-cc04-4776-851f-f185956f32af"], ["FDA", "ONUREG (azacitidine) tablets — Celgene (BMS), label effective 2026-06-12", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0e95e33f-8aba-4f19-b332-2416580d358b"]],
  dose: { tagline: "Hypomethylating chemotherapy for MDS (injection) and AML maintenance (tablets).",
    cautionTitle: "Injection and tablets are not interchangeable",
    caution: "Do not substitute ONUREG for intravenous or subcutaneous azacitidine. Treatment of patients using intravenous or subcutaneous azacitidine at the recommended dosage of ONUREG may result in a fatal adverse reaction. Treatment of patients using ONUREG at the doses recommended for intravenous or subcutaneous azacitidine may not be effective. (FDA ONUREG label, 5.1)",
    adult: [
      { ind: "MDS — injection (VIDAZA)", text: "75 mg/m² SC or IV once daily for 7 days, every 4 weeks. May raise to 100 mg/m² after 2 cycles if no benefit and only nausea/vomiting as toxicity. Give at least 4–6 cycles.", calc: ["mds"] },
      { ind: "AML maintenance — tablets (ONUREG)", text: "300 mg once daily on days 1–14 of each 28-day cycle, with an antiemetic 30 minutes before each dose for the first 2 cycles.", calc: ["aml_oral"] }
    ],
    child: [{ ind: "JMML — IV, daily for 7 days every 28 days", text: "1 month to under 1 year, or under 10 kg: 2.5 mg/kg. 1 year and over and 10 kg or more: 75 mg/m². At least 3, at most 6 cycles.", calc: ["jmml_kg", "jmml_m2"] }] }
});

/* ---------- AVELUMAB (FDA BAVENCIO, EMD Serono, BLA761049, eff. 2026-09-22) ---------- */
FDB_M("avelumab", {
  inn: "Avelumab", atc: "L01FF04", cls: "PD-L1 blocking monoclonal antibody (immune checkpoint inhibitor)",
  linked: [["Merkel cell carcinoma, metastatic", "Immunotherapy [FDA]", ""], ["Urothelial carcinoma, advanced", "Maintenance or second-line [FDA]", ""], ["Renal cell carcinoma, advanced", "With axitinib [FDA]", ""]],
  forms: ["Injection 200 mg/10 mL (20 mg/mL) single-dose vial [FDA]."],
  moa: "Binds PD-L1 and blocks its interaction with PD-1 and B7.1 → restores anti-tumour T-cell responses [FDA].",
  pk: ["Terminal half-life about 6 days [FDA]."],
  ind: { adult: ["Metastatic Merkel cell carcinoma [FDA].", "Locally advanced or metastatic urothelial carcinoma: maintenance after first-line platinum, or after progression on platinum [FDA].", "Advanced renal cell carcinoma, first-line, with axitinib [FDA]."], paed: ["Metastatic Merkel cell carcinoma, 12 years and over [FDA]."] },
  adult: [["All indications", "800 mg IV over 60 min every 2 weeks until progression or unacceptable toxicity (RCC: with axitinib 5 mg twice daily) [FDA]."], ["Premedication", "Antihistamine and paracetamol before the first 4 infusions, then as needed [FDA]."]],
  paed: { tiers: ["Merkel cell carcinoma, 12 years and over: 800 mg every 2 weeks [FDA]."], transition: "Same fixed dose from 12 years [FDA].", calcNote: "Fixed dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm [FDA].", other: "No dose reduction; withhold or stop for immune-mediated reactions per severity [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Fatigue, musculoskeletal pain, infusion-related reactions [FDA]."], serious: ["Immune-mediated pneumonitis, colitis, hepatitis, endocrinopathies, nephritis, skin reactions — may be fatal [FDA]", "Infusion-related reactions [FDA]", "Complications of allogeneic stem-cell transplant [FDA]", "Major cardiovascular events with axitinib [FDA]"] },
  monitor: ["Liver enzymes, creatinine and thyroid function at baseline and periodically [FDA].", "Signs of immune-mediated reactions and infusion reactions [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "avelumab", indication_id: "std", label: "800 mg IV over 60 min every 2 weeks", route: "IV", population: { min_age_months: 144, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 800, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 800, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 20, unit: "mg/mL" }], infusion: { duration_h: 1 }, rounding: "Exact (whole vials)", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "BAVENCIO (avelumab) injection — EMD Serono, label effective 2026-09-22", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5cd725a1-2fa4-408a-a651-57a7b84b2118"]],
  dose: { tagline: "PD-L1 immunotherapy infusion for Merkel cell, urothelial and kidney cancers.",
    adult: [{ ind: "Merkel cell, urothelial or renal cell carcinoma", text: "800 mg IV over 60 minutes every 2 weeks (renal cell: with axitinib 5 mg twice daily). Premedicate with an antihistamine and paracetamol for the first 4 infusions.", calc: ["std"] }],
    child: [{ ind: "Merkel cell carcinoma, 12 years and over", text: "800 mg IV over 60 minutes every 2 weeks.", calc: ["std"] }] }
});

/* ---------- AVACINCAPTAD PEGOL (FDA IZERVAY, Astellas, NDA217225, eff. 2026-09-03) ---------- */
FDB_M("avacincaptad-pegol", {
  inn: "Avacincaptad pegol", atc: "S01XA32", cls: "Complement C5 inhibitor (pegylated aptamer), intravitreal",
  linked: [["Geographic atrophy from age-related macular degeneration", "Intravitreal treatment [FDA]", ""]],
  forms: ["Intravitreal solution 20 mg/mL single-dose vial [FDA]."],
  moa: "Pegylated RNA aptamer that inhibits complement C5 [FDA].",
  pk: ["Apparent systemic half-life about 8 days [FDA]."],
  ind: { adult: ["Geographic atrophy secondary to age-related macular degeneration [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Geographic atrophy", "2 mg (0.1 mL of 20 mg/mL) by intravitreal injection into each affected eye once monthly (about every 28 ± 7 days), by a qualified physician [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed dose per eye." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "One vial per eye [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Monitor intraocular pressure [NEP]." },
  contra: ["Ocular or periocular infection [FDA].", "Active intraocular inflammation [FDA]."],
  ae: { common: ["Conjunctival haemorrhage, raised intraocular pressure, blurred vision [FDA]."], serious: ["Endophthalmitis and retinal detachment [FDA]", "Neovascular (wet) AMD [FDA]", "Transient rise in intraocular pressure [FDA]"] },
  monitor: ["Intraocular pressure and optic nerve perfusion after injection [FDA].", "Signs of wet AMD [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "IZERVAY (avacincaptad pegol intravitreal solution) — Astellas, label effective 2026-09-03", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1642fe6a-dc26-4d20-ae6e-654af744e3bd"]],
  dose: { tagline: "Monthly eye injection to slow geographic atrophy in macular degeneration.",
    adult: [{ ind: "Geographic atrophy (AMD)", text: "2 mg (0.1 mL) intravitreal injection into each affected eye once a month (every 28 ± 7 days)." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- ATEZOLIZUMAB (FDA TECENTRIQ IV, Genentech, BLA761034, eff. 2026-10-13) ---------- */
FDB_M("atezolizumab", {
  inn: "Atezolizumab", atc: "L01FF05", cls: "PD-L1 blocking monoclonal antibody (immune checkpoint inhibitor)",
  linked: [["Non-small cell lung cancer (adjuvant and metastatic)", "Immunotherapy [FDA]", ""], ["Small cell lung cancer, extensive stage", "With chemotherapy [FDA]", ""], ["Hepatocellular carcinoma", "With bevacizumab [FDA]", ""], ["Melanoma (BRAF V600)", "With cobimetinib and vemurafenib [FDA]", ""], ["Alveolar soft part sarcoma", "Adults and children 2 years and over [FDA]", ""], ["Muscle-invasive bladder cancer (adjuvant) and colon cancer", "Immunotherapy [FDA]", ""]],
  forms: ["Injection 840 mg/14 mL and 1,200 mg/20 mL (60 mg/mL) single-dose vials, IV [FDA]."],
  moa: "Binds PD-L1 and blocks its interaction with PD-1 and B7.1 → releases inhibition of anti-tumour T-cell responses [FDA].",
  pk: ["Terminal half-life about 27 days [FDA]."],
  ind: { adult: ["NSCLC: adjuvant (stage II–IIIA, PD-L1 ≥1%) and first-line metastatic (high PD-L1) and other settings [FDA].", "Extensive-stage SCLC, hepatocellular carcinoma, BRAF V600 melanoma, alveolar soft part sarcoma, muscle-invasive bladder cancer and colon cancer, as labelled [FDA]."], paed: ["Alveolar soft part sarcoma, 2 years and over [FDA].", "Colon cancer (paediatric dosing given in the label) [FDA]."] },
  adult: [["All adult indications", "840 mg every 2 weeks, 1,200 mg every 3 weeks, or 1,680 mg every 4 weeks, IV. First infusion over 60 min; later ones over 30 min if tolerated [FDA]."], ["Adjuvant NSCLC or bladder cancer", "Same doses, for up to 1 year [FDA]."], ["Combinations", "Give atezolizumab before chemotherapy or bevacizumab on the same day [FDA]."]],
  paed: { tiers: ["Alveolar soft part sarcoma, 2 years and over: 15 mg/kg (maximum 1,200 mg) every 3 weeks [FDA].", "Colon cancer: 10 mg/kg (maximum 840 mg) every 2 weeks, or 15 mg/kg (maximum 1,200 mg) every 3 weeks [FDA]."], transition: "Fixed adult doses once the mg/kg dose reaches the cap [FDA].", calcNote: "mg/kg with a fixed cap." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Can cause fetal harm; effective contraception [FDA].", other: "No dose reduction; withhold or stop for immune-mediated reactions per severity [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Single agent: fatigue/asthenia, decreased appetite, nausea, cough, dyspnoea [FDA]."], serious: ["Immune-mediated pneumonitis, colitis, hepatitis, endocrinopathies, skin reactions, nephritis — may be fatal [FDA]", "Infusion-related reactions [FDA]", "Complications of allogeneic stem-cell transplant [FDA]"] },
  monitor: ["Liver enzymes, creatinine and thyroid function at baseline and periodically [FDA].", "Signs of immune-mediated reactions [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "atezolizumab", indication_id: "adult_q3w", label: "Adult — 1,200 mg IV every 3 weeks", route: "IV", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 1200, unit: "mg", per: "dose" }, interval_h: 504, divided_doses: 1, caps: { max_single: 1200, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "inj", strength: 60, unit: "mg/mL" }], infusion: { duration_h: 1 }, rounding: "Exact", renal: [], flags: [], sources: ["FDA"] },
    { drug: "atezolizumab", indication_id: "child_q3w", label: "Child 2 years+ — 15 mg/kg (max 1,200 mg) every 3 weeks", route: "IV", population: { min_age_months: 24, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 504, divided_doses: 1, caps: { max_single: 1200, adult_ceiling_single: 1200, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "inj", strength: 60, unit: "mg/mL" }], infusion: { duration_h: 1 }, rounding: "To 1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "TECENTRIQ (atezolizumab) injection for IV use — Genentech, label effective 2026-10-13", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6fa682c9-a312-4932-9831-f286908660ee"]],
  dose: { tagline: "PD-L1 immunotherapy infusion for lung, liver, bladder, colon and other cancers.",
    adult: [
      { ind: "All adult indications", text: "840 mg every 2 weeks, 1,200 mg every 3 weeks, or 1,680 mg every 4 weeks IV. First infusion over 60 minutes, then over 30 minutes if tolerated. Adjuvant use: up to 1 year.", calc: ["adult_q3w"] }
    ],
    child: [
      { ind: "Alveolar soft part sarcoma, 2 years and over", text: "15 mg/kg (maximum 1,200 mg) every 3 weeks.", calc: ["child_q3w"] },
      { ind: "Colon cancer", text: "10 mg/kg (maximum 840 mg) every 2 weeks, or 15 mg/kg (maximum 1,200 mg) every 3 weeks." }
    ] }
});

/* ---------- AVALGLUCOSIDASE ALFA (FDA NEXVIAZYME, Genzyme, BLA761194, eff. 2025-06-05) ---------- */
FDB_M("avalglucosidase-alfa", {
  inn: "Avalglucosidase alfa", atc: "A16AB22", cls: "Enzyme replacement therapy (recombinant acid α-glucosidase)",
  linked: [["Late-onset Pompe disease (acid α-glucosidase deficiency)", "Enzyme replacement [FDA]", ""]],
  forms: ["Powder for injection 100 mg single-dose vial; reconstitute and dilute for IV infusion [FDA]."],
  moa: "Supplies acid α-glucosidase, taken up into lysosomes where it breaks down accumulated glycogen [FDA].",
  pk: ["Given every 2 weeks by IV infusion [FDA]."],
  ind: { adult: ["Late-onset Pompe disease [FDA]."], paed: ["Late-onset Pompe disease, 1 year and over [FDA]."] },
  adult: [["Late-onset Pompe disease, 30 kg or more", "20 mg/kg (actual body weight) IV every 2 weeks. Start at 1 mg/kg/h and increase the rate every 30 min if no infusion reactions [FDA]."]],
  paed: { tiers: ["1 year and over, under 30 kg: 40 mg/kg (actual body weight) every 2 weeks [FDA].", "30 kg or more: 20 mg/kg every 2 weeks [FDA]."], transition: "20 mg/kg from 30 kg [FDA].", calcNote: "Actual body weight." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Consider premedication with antihistamines, antipyretics and/or corticosteroids; have resuscitation equipment ready [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Stop the infusion for severe reactions; supportive care [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["Headache, fatigue, diarrhoea, nausea, arthralgia, dizziness, myalgia, pruritus, vomiting, dyspnoea, erythema, paraesthesia, urticaria [FDA]."], serious: ["Anaphylaxis and severe hypersensitivity [FDA]", "Infusion-associated reactions [FDA]", "Acute cardiorespiratory failure in fluid-overload-prone patients [FDA]"] },
  monitor: ["Vital signs and reactions during and after infusion [FDA].", "Fluid status in cardiac or respiratory compromise [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [
    { drug: "avalglucosidase-alfa", indication_id: "ge30", label: "30 kg or more — 20 mg/kg IV every 2 weeks", route: "IV", population: { min_age_months: 12, max_age_months: null, min_weight_kg: 30, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 20, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 100, unit: "mg/vial" }], rounding: "To 1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] },
    { drug: "avalglucosidase-alfa", indication_id: "lt30", label: "1 year+, under 30 kg — 40 mg/kg IV every 2 weeks", route: "IV", population: { min_age_months: 12, max_age_months: null, min_weight_kg: null, max_weight_kg: 30 }, basis: "mg_per_kg", dose: { value: 40, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 100, unit: "mg/vial" }], rounding: "To 1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] }
  ],
  sources: [["FDA", "NEXVIAZYME (avalglucosidase alfa-ngpt) for injection — Genzyme (Sanofi), label effective 2025-06-05", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=80eb3c9c-01d3-44fe-90ef-81df101b954d"]],
  dose: { tagline: "Every-2-weeks enzyme infusion for late-onset Pompe disease.",
    boxedTitle: "Severe hypersensitivity, infusion reactions, and acute cardiorespiratory failure",
    boxed: "Hypersensitivity Reactions Including Anaphylaxis: Appropriate medical monitoring and support measures, including cardiopulmonary resuscitation equipment, should be readily available. If a severe hypersensitivity reaction occurs, discontinue NEXVIAZYME immediately and initiate appropriate medical treatment. Infusion-Associated Reactions (IARs): If severe IARs occur, consider immediate discontinuation and initiation of appropriate medical treatment. Risk of Acute Cardiorespiratory Failure in Susceptible Patients: Patients susceptible to fluid volume overload, or those with acute underlying respiratory illness or compromised cardiac or respiratory function, may be at risk of serious exacerbation of their cardiac or respiratory status during NEXVIAZYME infusion.",
    adult: [{ ind: "Late-onset Pompe disease (30 kg or more)", text: "20 mg/kg of actual body weight IV every 2 weeks. Start at 1 mg/kg/h; increase every 30 minutes if no reactions.", calc: ["ge30"] }],
    child: [{ ind: "Late-onset Pompe disease, 1 year and over", text: "Under 30 kg: 40 mg/kg every 2 weeks. 30 kg or more: 20 mg/kg every 2 weeks.", calc: ["lt30", "ge30"] }] }
});

/* ---------- AURANOFIN (FDA RIDAURA, Sebela, NDA018689, eff. 2025-11-08) ---------- */
FDB_M("auranofin", {
  inn: "Auranofin", atc: "M01CB03", cls: "Oral gold compound (disease-modifying antirheumatic drug)",
  linked: [["Rheumatoid arthritis, active", "Second-line DMARD in selected patients [FDA]", ""]],
  forms: ["Capsules 3 mg [FDA]."],
  moa: "Gold compound; the way it works in rheumatoid arthritis is not known [FDA].",
  pk: ["Gold half-life in plasma about 26 days at steady state; whole-body half-life about 80 days [FDA].", "Slow onset: benefit after 3–4 months, sometimes 6 months [FDA]."],
  ind: { adult: ["Active classical or definite rheumatoid arthritis in adults with insufficient response to, or intolerance of, full-dose NSAIDs [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Rheumatoid arthritis", "6 mg daily, as 3 mg twice daily or 6 mg once daily. Do not start above 6 mg/day (more diarrhoea). If response is inadequate after 6 months, may increase to 9 mg/day (3 mg three times daily); stop if still inadequate after 3 months at 9 mg [FDA]."], ["Switching from injectable gold", "Stop the injection and start 6 mg daily [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed adult dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Safety above 9 mg/day not studied [FDA]." },
  tox: { human: "27 mg daily for 10 days caused encephalopathy and peripheral neuropathy, with recovery after stopping [FDA].", animal: "Oral LD50 310 mg/kg (mouse), 265 mg/kg (rat); minimum lethal dose in rats 30 mg/kg [FDA].", manage: "Supportive care; no experience with chelating agents in auranofin overdose [FDA]." },
  contra: ["History of gold-induced anaphylaxis, necrotising enterocolitis, pulmonary fibrosis, exfoliative dermatitis, bone-marrow aplasia or other severe blood disorders [FDA]."],
  ae: { common: ["Diarrhoea/loose stools (about 50%), rash, itching, stomatitis [FDA]."], serious: ["Thrombocytopenia (1–3%), sometimes with bleeding [FDA]", "Leucopenia, granulocytopenia [FDA]", "Proteinuria, haematuria [FDA]"] },
  monitor: ["Full blood count with platelets and urinalysis before each prescription — platelets at least monthly [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "auranofin", indication_id: "ra", label: "Rheumatoid arthritis — 6 mg per day (3 mg twice daily)", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 6, unit: "mg", per: "day" }, interval_h: 12, divided_doses: 2, caps: { max_single: 6, max_daily: 9, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "cap", strength: 3, unit: "mg/cap" }], rounding: "Whole capsules", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "RIDAURA (auranofin) capsules — Sebela Pharmaceuticals, label effective 2025-11-08", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=43ba3de1-ab2e-06f6-e054-00144ff8d46c"]],
  dose: { tagline: "Oral gold for active rheumatoid arthritis in selected patients.",
    boxedTitle: "Gold toxicity — review blood and urine tests before every prescription",
    boxed: "RIDAURA (auranofin) contains gold and, like other gold-containing drugs, can cause gold toxicity, signs of which include: fall in hemoglobin, leukopenia below 4,000 WBC/cu mm, granulocytes below 1,500/cu mm, decrease in platelets below 150,000/cu mm, proteinuria, hematuria, pruritus, rash, stomatitis or persistent diarrhea. Therefore, the results of recommended laboratory work should be reviewed before writing each RIDAURA prescription. Like other gold preparations, RIDAURA is only indicated for use in selected patients with active rheumatoid arthritis. Physicians planning to use RIDAURA should be experienced with chrysotherapy and should thoroughly familiarize themselves with the toxicity and benefits of RIDAURA. In addition, the following precautions should be routinely employed: The possibility of adverse reactions should be explained to patients before starting therapy. Patients should be advised to report promptly any symptoms suggesting toxicity.",
    adult: [
      { ind: "Rheumatoid arthritis", text: "6 mg a day — 3 mg twice daily or 6 mg once daily. If not enough after 6 months, may raise to 3 mg three times daily (9 mg/day); stop if still not enough after 3 months.", calc: ["ra"] },
      { ind: "Switching from injectable gold", text: "Stop the injection; start 6 mg daily." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- AXITINIB (FDA label NDA202324 = INLYTA, Pfizer; eff. 2026-11-15) ---------- */
FDB_M("axitinib", {
  inn: "Axitinib", atc: "L01EK01", cls: "Kinase inhibitor (VEGFR 1–3)",
  linked: [["Advanced renal cell carcinoma", "First-line with avelumab or pembrolizumab; or alone after one prior therapy [FDA]", ""]],
  forms: ["Tablets 1 mg and 5 mg [FDA]."],
  moa: "Inhibits VEGF receptors 1, 2 and 3 → blocks tumour angiogenesis [FDA].",
  pk: ["Take about 12 h apart, with or without food; swallow whole with water [FDA].", "Steady state within 2–3 days [FDA].", "Strong CYP3A4/5 inhibitors: halve the dose [FDA]."],
  ind: { adult: ["Advanced RCC, first-line with avelumab or with pembrolizumab [FDA].", "Advanced RCC after failure of one prior systemic therapy, as a single agent [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["All indications", "Start 5 mg twice daily (12 h apart) [FDA]."], ["Increase (single agent)", "If tolerated for at least 2 weeks with no adverse reaction above grade 2, normal blood pressure and no antihypertensives: 7 mg, then 10 mg twice daily [FDA]."], ["Reduce for side effects", "3 mg, then 2 mg twice daily [FDA]."], ["With avelumab or pembrolizumab", "Dose increases may be considered at intervals of 2 weeks or longer [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Fixed adult dose." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Moderate liver impairment: halve the starting dose [FDA].", preg: "Not established in primary source. [NEP]", other: "Strong CYP3A4/5 inhibitor needed: halve the dose [FDA]." },
  tox: { human: "20 mg twice daily for 4 days caused grade 1 dizziness. Starting doses of 10–20 mg twice daily caused hypertension, hypertensive seizures and fatal haemoptysis [FDA].", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Withhold axitinib; supportive care; no specific treatment [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["With avelumab: diarrhoea, fatigue, hypertension, musculoskeletal pain, nausea, mucositis, hand–foot syndrome, dysphonia, decreased appetite, hypothyroidism [FDA]."], serious: ["Hypertension and hypertensive crisis [FDA]", "Arterial and venous thromboembolism, sometimes fatal [FDA]", "Haemorrhage, sometimes fatal [FDA]", "Cardiac failure [FDA]", "GI perforation and fistula [FDA]"] },
  monitor: ["Blood pressure — control before starting [FDA].", "Signs of heart failure, bleeding and thrombosis [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "axitinib", indication_id: "rcc", label: "Renal cell carcinoma — start 5 mg twice daily", route: "PO", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null }, basis: "fixed", dose: { value: 5, unit: "mg", per: "dose" }, interval_h: 12, divided_doses: 2, caps: { max_single: 10, max_daily: 20, unit: "mg" }, weight_basis: "NEP", formulations: [{ form: "tab", strength: 5, unit: "mg/tab" }], rounding: "Whole tablets", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "Axitinib tablets (NDA202324, INLYTA) — label effective 2026-11-15", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d949a09c-de98-458d-a250-fb4024c04ee5"]],
  dose: { tagline: "Targeted tablet for advanced kidney cancer, alone or with immunotherapy.",
    adult: [
      { ind: "Advanced renal cell carcinoma", text: "Start 5 mg twice daily, 12 hours apart, with or without food (with avelumab 800 mg every 2 weeks or pembrolizumab, or alone).", calc: ["rcc"] },
      { ind: "Dose steps", text: "Up: 7 mg, then 10 mg twice daily if tolerated for 2 weeks (no reaction above grade 2, normal blood pressure, no antihypertensives). Down: 3 mg, then 2 mg twice daily." },
      { ind: "Moderate liver impairment or strong CYP3A4/5 inhibitor", text: "Halve the dose." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* ---------- AXATILIMAB (FDA NIKTIMVO, Incyte, BLA761411, eff. 2026-09-25) ---------- */
FDB_M("axatilimab", {
  inn: "Axatilimab", atc: "L04AG19", cls: "CSF-1 receptor blocking monoclonal antibody",
  linked: [["Chronic graft-versus-host disease", "After at least two prior lines of systemic therapy [FDA]", ""]],
  forms: ["Injection 9 mg and 22 mg single-dose vials (several concentrations) [FDA]."],
  moa: "Blocks the colony-stimulating factor-1 receptor on monocytes and macrophages [FDA].",
  pk: ["Given every 2 weeks as a 30-minute IV infusion [FDA]."],
  ind: { adult: ["Chronic GVHD after failure of at least two prior lines of systemic therapy, weight at least 40 kg [FDA]."], paed: ["Same indication, children weighing at least 40 kg [FDA]."] },
  adult: [["Chronic GVHD", "0.3 mg/kg (maximum 35 mg) IV over 30 min every 2 weeks [FDA]."]],
  paed: { tiers: ["40 kg and over: 0.3 mg/kg (maximum 35 mg) every 2 weeks [FDA].", "Under 40 kg: not established [FDA]."], transition: "Same mg/kg dose at all ages from 40 kg [FDA].", calcNote: "0.3 mg/kg, capped at 35 mg." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "May cause fetal harm; effective contraception [FDA].", other: "Monitor AST, ALT, ALP, CPK, amylase and lipase; dose changes for abnormalities per label Table 1 [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "Supportive care [NEP]." },
  contra: ["None [FDA]."],
  ae: { common: ["Raised AST/ALT/GGT/ALP/CPK/lipase/amylase, infections, low phosphate, low haemoglobin, musculoskeletal pain, fatigue [FDA]."], serious: ["Infusion-related reactions (18%) [FDA]"] },
  monitor: ["AST, ALT, ALP, CPK, amylase and lipase before starting, every 2 weeks for the first month, then every 1–2 months [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not supplied in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [{ drug: "axatilimab", indication_id: "cgvhd", label: "Chronic GVHD, 40 kg+ — 0.3 mg/kg (max 35 mg) every 2 weeks", route: "IV", population: { min_age_months: null, max_age_months: null, min_weight_kg: 40, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.3, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: 1, caps: { max_single: 35, unit: "mg" }, weight_basis: "actual", formulations: [], infusion: { duration_h: 0.5 }, rounding: "To 0.1 mg [NEP]", renal: [], flags: [], sources: ["FDA"] }],
  sources: [["FDA", "NIKTIMVO (axatilimab-csfr) injection — Incyte, label effective 2026-09-25", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bb6dba23-e7a6-4765-a1e6-b9e277ce0381"]],
  dose: { tagline: "Every-2-weeks antibody infusion for chronic graft-versus-host disease.",
    adult: [{ ind: "Chronic GVHD (after 2+ prior lines)", text: "0.3 mg/kg, maximum 35 mg, IV over 30 minutes every 2 weeks.", calc: ["cgvhd"] }],
    child: [
      { ind: "Children 40 kg and over", text: "0.3 mg/kg, maximum 35 mg, every 2 weeks.", calc: ["cgvhd"] },
      { ind: "Under 40 kg", text: "Not established." }
    ] }
});

/* ---------- AXICABTAGENE CILOLEUCEL (FDA YESCARTA, Kite, BLA125643, eff. 2026-08-06) ---------- */
FDB_M("axicabtagene-ciloleucel", {
  inn: "Axicabtagene ciloleucel", atc: "L01XL03", cls: "CD19-directed autologous CAR T-cell therapy",
  linked: [["Large B-cell lymphoma, relapsed or refractory", "CAR T-cell therapy [FDA]", ""], ["Follicular lymphoma, relapsed or refractory", "After two or more lines [FDA]", ""]],
  forms: ["Cell suspension for IV infusion, about 68 mL per patient-specific bag [FDA]."],
  moa: "Patient's own T cells engineered to express a CD19-targeting chimeric antigen receptor; they kill CD19-positive B cells [FDA].",
  pk: ["Single infusion; cells expand in the body after infusion [FDA]."],
  ind: { adult: ["Large B-cell lymphoma refractory to, or relapsing within 12 months of, first-line chemoimmunotherapy [FDA].", "Relapsed or refractory large B-cell lymphoma after two or more lines [FDA].", "Relapsed or refractory follicular lymphoma after two or more lines [FDA]."], paed: ["Not established in primary source. [NEP]"] },
  adult: [["Single dose", "Target 2 × 10⁶ CAR-positive viable T cells per kg, maximum 2 × 10⁸ cells, as one IV infusion; no leukodepleting filter [FDA]."], ["Before infusion", "Lymphodepletion: cyclophosphamide 500 mg/m² and fludarabine 30 mg/m² IV on days 5, 4 and 3 before. Premedicate with paracetamol 650 mg and diphenhydramine 12.5 mg about 1 h before. Confirm tocilizumab is available [FDA]."]],
  paed: { tiers: ["Not established in primary source. [NEP]"], transition: "Adults only [FDA].", calcNote: "Cell dose — not calculated here." },
  adj: { renal: "Not established in primary source. [NEP]", hepatic: "Not established in primary source. [NEP]", preg: "Not established in primary source. [NEP]", other: "Do not give with active infection or inflammatory disorders [FDA]. Verify patient identity against the bag before infusion [FDA]." },
  tox: { human: "Not established in primary source. [NEP]", animal: "Animal LD50: Not established in primary source. [NEP]", manage: "CRS: tocilizumab ± corticosteroids; neurological toxicity: supportive care and/or corticosteroids [FDA]." },
  contra: ["None [FDA]."],
  ae: { common: ["CRS, fever, hypotension, encephalopathy, fatigue, tachycardia, headache, nausea, febrile neutropenia, diarrhoea [FDA]."], serious: ["Cytokine release syndrome (about 90%) [FDA]", "Neurological toxicity [FDA]", "Secondary T-cell malignancies [FDA]", "Prolonged cytopenias, hypogammaglobulinaemia, serious infections [FDA]"] },
  monitor: ["CRS and neurological toxicity after infusion [FDA].", "Full blood count; immunoglobulins [FDA]."],
  local: { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available in Bhutan.", stg: "Not mentioned in Bhutan STG 2024 [BT-STG]." },
  calc: [],
  sources: [["FDA", "YESCARTA (axicabtagene ciloleucel) suspension for IV infusion — Kite Pharma, label effective 2026-08-06", "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b70606e-b99c-4272-a0f1-b5523cce0c59"]],
  dose: { tagline: "One-time CAR T-cell infusion for relapsed or refractory B-cell lymphoma.",
    boxedTitle: "Cytokine release syndrome, neurologic toxicities and secondary blood cancers",
    boxed: "Cytokine Release Syndrome (CRS), including fatal or life-threatening reactions, occurred in patients receiving YESCARTA. Do not administer YESCARTA to patients with active infection or inflammatory disorders. Treat severe or life-threatening CRS with tocilizumab or tocilizumab and corticosteroids. Neurologic toxicities, including fatal or life-threatening reactions, occurred in patients receiving YESCARTA, including concurrently with CRS or after CRS resolution. Monitor for neurologic toxicities after treatment with YESCARTA. Provide supportive care and/or corticosteroids as needed. T cell malignancies have occurred following treatment of hematologic malignancies with BCMA- and CD19-directed genetically modified autologous T cell immunotherapies, including YESCARTA.",
    adult: [
      { ind: "Large B-cell or follicular lymphoma", text: "One infusion: target 2 × 10⁶ CAR-positive viable T cells per kg, maximum 2 × 10⁸ cells. No leukodepleting filter." },
      { ind: "Before the infusion", text: "Cyclophosphamide 500 mg/m² + fludarabine 30 mg/m² IV on days 5, 4 and 3 before. Paracetamol 650 mg + diphenhydramine 12.5 mg about 1 hour before. Have tocilizumab available." }
    ],
    child: [{ ind: "Children", text: "Not established." }] }
});

/* Brands for batch A-4 — India (PharmEasy) and Bangladesh (MedEx), built 24 Nov 2026 with the fixed _work/tools/fdb-brands.js. */
(function () {
  const B = {"atenolol":{"BT":"Bhutan supplies by generic name.","IN":[["Hipres","Cipla Gx","Hipres 50Mg Strip Of 14 Tablets"],["Atenopress","Biochem Pharmaceutical Industries","Atenopress 25Mg Strip Of 14 Tablets"]],"BD":[["Tenoren","Advanced Chemical Industries PLC","50 mg"],["Tenoloc","ACME Laboratories Ltd","100 mg"],["Atenol","Pharmadesh Laboratories Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/hipres-50mg-tablet-50302","https://pharmeasy.in/online-medicine-order/atenopress-25mg-tablet-4697","https://medex.com.bd/brands/1100/tenoren-50-mg-tablet","https://medex.com.bd/brands/2471/tenoloc-100-mg-tablet","https://medex.com.bd/brands/17957/atenolol-100-mg-tablet"]},"atorvastatin":{"BT":"Bhutan supplies by generic name.","IN":[["Atr","Knoll Healthcare Pvt Ltd","Atr 10Mg Strip Of 10 Tablets"],["Lipvas","Cipla Gx","Lipvas 40Mg Strip Of 10 Tablets"],["Biovas","Biochem Pharmaceutical Industries","Biovas 20Mg Strip Of 10 Tablets"]],"BD":[["Atostin","Credence Pharmaceuticals Ltd","10 mg"],["Lipiva","Leon Pharmaceuticals Ltd","20 mg"],["Onvas","One Pharma Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/atr-10mg-tablet-15947","https://pharmeasy.in/online-medicine-order/lipvas-40mg-tablet-6161","https://pharmeasy.in/online-medicine-order/biovas-20mg-tablet-4632","https://medex.com.bd/brands/27780/atostin-10-mg-tablet","https://medex.com.bd/brands/25558/lipiva-20-mg-tablet","https://medex.com.bd/brands/25564/onvas-10-mg-tablet"]},"atropine":{"BT":"Bhutan supplies by generic name.","IN":[["Kidtro","Sun Pharma","Kidtro 0.05% Bottle Of 5Ml Eye Drops"],["Myatro","Entod Pharmaceuticals Pvt Ltd","Myatro Xl Bottle Of 5Ml Eye Drops"],["Bysipin","Neomedix Healthcare India Private Limited","Bysipin Bottle Of 5Ml Eye Drops"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/kidtro-0-05-bottle-of-5ml-eye-drops-4693501","https://pharmeasy.in/online-medicine-order/myatro-xl-bottle-of-5ml-eye-drops-4507555","https://pharmeasy.in/online-medicine-order/bysipin-eye-drop-5-ml-4117245"]},"azithromycin":{"BT":"Bhutan supplies by generic name.","IN":[["Azincure","Avighna Medicare Pvt Ltd","Azincure 500Mg Strip Of 3 Tablets"],["Azicip","Cipla Gx","Azicip 500Mg Strip Of 3 Tablets"],["Aziford","Leeford Healthcare Ltd","Aziford 500Mg Strip Of 5 Tablets"]],"BD":[["Azithromycin","Premier Pharmaceuticals Ltd","200 mg/5 ml"],["Azithrocin","Beximco Pharmaceuticals PLC","250 mg"],["Arizith","Centeon Pharma Ltd","500 mg"]],"src":["https://pharmeasy.in/online-medicine-order/azincure-500mg-strip-of-3-tablets-3024042","https://pharmeasy.in/online-medicine-order/azicip-500mg-tablet-36287","https://pharmeasy.in/online-medicine-order/aziford-500mg-strip-of-5-tablets-3127444","https://medex.com.bd/brands/27435/azithromycin-200-mg-powder-for-suspension","https://medex.com.bd/brands/25596/azithrocin-250-mg-tablet","https://medex.com.bd/brands/25599/arizith-500-mg-tablet"]},"azathioprine":{"BT":"Bhutan supplies by generic name.","IN":[["Azathiol","Knoll Healthcare Pvt Ltd","Azathiol 50Mg Strip Of 10 Tablets"],["Azoran","Rpg Life Sciences Ltd","Azoran 25Mg Strip Of 25 Tablets"],["Azr","Ipca Laboratories","Azr Strip Of 10 Tablets"]],"BD":[["Imruza","Beacon Pharmaceuticals PLC","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/azathiol-50mg-strip-of-10-tablets-2935831","https://pharmeasy.in/online-medicine-order/azoran-25mg-strip-of-25-tablets-36423","https://pharmeasy.in/online-medicine-order/azr-strip-of-10-tablets-170400","https://medex.com.bd/brands/34248/imruza-50-mg-tablet"]},"atracurium":{"BT":"Bhutan supplies by generic name.","IN":[["Atrawem","Wembrace Biopharma Private Limited","Atrawem 10Mg Ampoule Of 2.5Ml Injection"],["Atrarelief","Acurela Pharms Limited","Atrarelief 25Mg Ampoule Of 2.5Ml Injection"],["Acris","Gland Pharma Limited","Acris 2 Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Relaxton","Techno Drugs Ltd","25 mg/2.5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/atrawem-10mg-ampoule-of-2-5ml-injection-3999033","https://pharmeasy.in/online-medicine-order/atrarelief-25mg-ampoule-of-2-5ml-injection-4718128","https://pharmeasy.in/online-medicine-order/acris-25-mg-injection-1-no-s-3730374","https://medex.com.bd/brands/1262/relaxton-25-mg-injection"]},"aztreonam":{"BT":"Bhutan supplies by generic name.","IN":[["Azenam","Aristo Pharmaceuticals Pvt Ltd","Azenam 1Gm Dry Vial Of 1 Powder For Injection"]],"BD":[["Azonam","Incepta Pharmaceuticals Ltd","1 gm/5 ml"],["Azactum","Drug International Ltd","1 gm/5 ml"]],"src":["https://pharmeasy.in/online-medicine-order/azenam-1gm-inj-36266","https://medex.com.bd/brands/8274/azonam-1-gm-imiv-injection","https://medex.com.bd/brands/33417/azactum-1-gm-imiv-injection"]},"atomoxetine":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Attentin","UniMed UniHealth Pharmaceuticals Ltd","10 mg"],["Oriham","Incepta Pharmaceuticals Ltd","10 mg"],["Suev","Square Pharmaceuticals PLC","10 mg"]],"src":["https://medex.com.bd/brands/1111/attentin-10-mg-capsule","https://medex.com.bd/brands/35448/oriham-10-mg-capsule","https://medex.com.bd/brands/37895/suev-10-mg-capsule"]},"azelastine":{"BT":"Bhutan supplies by generic name.","IN":[["Arzep","Zydus Healthcare Limited","Arzep 0.1% Bottle Of 10Ml Nasal Spray"]],"BD":[["Zelanex","Opsonin Pharma Ltd","137 mcg/spray"],["Azelast","Incepta Pharmaceuticals Ltd","137 mcg/spray"]],"src":["https://pharmeasy.in/online-medicine-order/arzep-0-1-nasal-spray-11322","https://medex.com.bd/brands/16248/zelanex-137-mcg-nasal-spray","https://medex.com.bd/brands/30403/azelast-137-mcg-nasal-spray"]},"azelaic-acid":{"BT":"Bhutan supplies by generic name.","IN":[["Aziderm","Micro Labs","Aziderm 10% Tube Of 15Gm Cream"],["Ezanic","Intas Pharmaceuticals Ltd","Ezanic 20% Tube Of 15Gm Cream"],["Picspot","Glenmark Pharmaceuticals","Picspot Tube Of 15Gm Gel"]],"BD":[["Azelec","ACME Laboratories Ltd","20%"]],"src":["https://pharmeasy.in/online-medicine-order/aziderm-10-cream-36295","https://pharmeasy.in/online-medicine-order/ezanic-20-cream-14235","https://pharmeasy.in/online-medicine-order/picspot-tube-of-15gm-gel-940655","https://medex.com.bd/brands/12771/azelec-20-cream"]},"avanafil":{"BT":"Bhutan supplies by generic name.","IN":[["Avanair","Cipla Limited","Avanair 100Mg Strip Of 4 Tablets"],["Avanext","Zydus Healthcare Limited","Avanext 100Mg Strip Of 4 Tablets"],["Avana","Sunrise Remedies Pvt Ltd","Avana 50Mg Strip Of 4 Tablets"]],"BD":[["Aventy","Eskayef Pharmaceuticals Ltd","50 mg"]],"src":["https://pharmeasy.in/online-medicine-order/avanair-100mg-strip-of-4-tablets-3705519","https://pharmeasy.in/online-medicine-order/avanext-100mg-strip-of-4-tablets-3136250","https://pharmeasy.in/online-medicine-order/avana-50mg-tab-4-s-151832","https://medex.com.bd/brands/34281/aventy-50-mg-tablet"]},"avatrombopag":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Avalet","Drug International Ltd","20 mg"],["Avatrom","Jenphar Bangladesh Ltd","20 mg"],["Avapag","Everest Pharmaceuticals Ltd","20 mg"]],"src":["https://medex.com.bd/brands/34727/avalet-20-mg-tablet","https://medex.com.bd/brands/37938/avatrom-20-mg-tablet","https://medex.com.bd/brands/38208/avapag-20-mg-tablet"]},"azilsartan-medoxomil":{"BT":"Bhutan supplies by generic name.","IN":[["Asar","Glenmark Pharmaceuticals","Asar 40Mg Strip Of 10 Tablets"],["Azilsmart","Healing Pharma India Pvt Ltd","Azilsmart 40Mg Strip Of 10 Tablets"],["Azildac","Zydus Healthcare Limited","Azildac 40Mg Strip Of 10 Tablets"]],"BD":[["Adarbi","NIPRO JMI Pharma Ltd","40 mg"],["Azisan","Renata PLC","40 mg"],["Zilsart","ACME Laboratories Ltd","40 mg"]],"src":["https://pharmeasy.in/online-medicine-order/asar-40mg-strip-of-10-tablets-170511","https://pharmeasy.in/online-medicine-order/azilsmart-40mg-tab-10-s-218163","https://pharmeasy.in/online-medicine-order/azildac-40mg-strip-of-10-tablets-30342","https://medex.com.bd/brands/16321/adarbi-40-mg-tablet","https://medex.com.bd/brands/16322/azisan-40-mg-tablet","https://medex.com.bd/brands/18021/zilsart-40-mg-tablet"]},"azacitidine":{"BT":"Bhutan supplies by generic name.","IN":[["Azacitidine","Dr Reddy's Laboratories Ltd","Azacitidine 100Mg Vial Of 1 Injection"],["Azadine","Intas Pharmaceuticals Ltd","Azadine 150 Mg Injection 1 No's"],["Azatend","Cadila Healthcare Limited","Azatend 100Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Azacitid","Beacon Pharmaceuticals PLC","100 mg/vial"],["Azarest","Everest Pharmaceuticals Ltd","300 mg"]],"src":["https://pharmeasy.in/online-medicine-order/azacitidine-100mg-vial-of-1-injection-4798241","https://pharmeasy.in/online-medicine-order/azadine-150-mg-injection-1-no-s-4114888","https://pharmeasy.in/online-medicine-order/azatend-100mg-dry-vial-of-1-powder-for-injection-3899797","https://medex.com.bd/brands/33992/azacitidine-100-mg-injection","https://medex.com.bd/brands/38110/azarest-300-mg-tablet"]},"atezolizumab":{"BT":"Bhutan supplies by generic name.","IN":[],"BD":[["Tecentriq","Roche Bangladesh Ltd","1200 mg/20 ml"]],"src":["https://medex.com.bd/brands/27605/tecentriq-1200-mg-iv-infusion"]},"axitinib":{"BT":"Bhutan supplies by generic name.","IN":[["Bexinib","Adley Labs","Bexinib 5Mg Strip Of 14 Tablets"],["Inlyta","Pfizer Product India Private Limited","Inlyta 5Mg Strip Of 14 Tablets"]],"BD":[["Axita","Beacon Pharmaceuticals PLC","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/bexinib-5-mg-tablet-14-no-s-4117860","https://pharmeasy.in/online-medicine-order/inlyta-5mg-strip-of-14-tablets-3005070","https://medex.com.bd/brands/26000/axita-5-mg-tablet"]}};
  Object.entries(B).forEach(([id, b]) => { if (window.FDB[id]) window.FDB[id].brands = b; });
})();
