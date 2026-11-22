/* Acute coronary syndrome drug cards.
   Bhutan sources: Standard Treatment Guidelines, 5th ed. 2024 (§2.1 Ischaemic heart disease); PEN Interventions for Hospitals 2011
   (ch.13 ACS, ch.14 stable angina); National Essential Medicines Formulary 2022 and NEML 2025 (availability levels).
   International: ESC 2023 ACS guideline; ACC/AHA/ACEP/NAEMSP/SCAI 2025 ACS guideline; ICMR STWs (STEMI, UA/NSTEMI); BNF; product labels.
   Doses cross-checked against at least two of: ESC 2023, ACC/AHA 2025, ICMR STW, Bhutan NEMF/NEML, BNF. */
Object.assign(GUIDE.drugs, {

aspirin_acs: {
  name: "Aspirin (loading and maintenance in ACS)", cls: "Antiplatelet — irreversible COX-1 inhibitor", brands: "Disprin, Ecosprin, generics",
  bt: "Listed — aspirin 300 mg effervescent tablet (NRH/RRH/DH) and 75 mg enteric-coated tablet (down to PHC). NEML 2025.",
  moa: "<p>Permanently blocks platelet cyclo-oxygenase-1, so the platelet cannot make thromboxane A₂ for the rest of its 7–10-day life. In a coronary artery where a plaque has just ruptured, this blunts the growth of the clot. Given early in suspected MI it cuts death by about a fifth — one of the cheapest life-saving drugs in medicine (ISIS-2).</p>",
  ind: "<p>All suspected or confirmed acute coronary syndromes (unless truly allergic); long-term secondary prevention after MI, PCI or CABG; stable coronary disease.</p>",
  ci: "<ul><li>True aspirin allergy (urticaria, angioedema, aspirin-exacerbated asthma) — give clopidogrel instead, and seek desensitisation if PCI is planned.</li><li>Active major bleeding or active peptic ulcer bleeding.</li><li>Children under 16 outside specialist indications (Reye's syndrome).</li></ul>",
  adult: "<p><b>Loading:</b> <b>150–300 mg orally, chewed or dispersed</b> (ESC 2023), as soon as ACS is suspected — Bhutan STG gives <b>300 mg stat</b>; ICMR and ACC/AHA use 162–325 mg. Use plain or dispersible aspirin for the loading dose, not enteric-coated (slower).</p><p><b>Maintenance:</b> <b>75–100 mg once daily, lifelong.</b> With ticagrelor keep aspirin at or below 100 mg/day (higher doses blunt ticagrelor's benefit).</p>",
  child: "<p>ACS is rare in children. Antiplatelet aspirin (Kawasaki disease, post-cardiac surgery) is specialist-led: typically <b>3–5 mg/kg once daily</b> (max 75–100 mg).</p>",
  preg: "<p>Low-dose aspirin is safe in pregnancy. If MI occurs in pregnancy, give the full loading dose; benefit far outweighs risk.</p>", bf: "<p>Low dose compatible; avoid regular high (analgesic) doses.</p>",
  renal: "<p>No dose change for antiplatelet doses; bleeding risk is higher in advanced CKD.</p>", hep: "<p>Avoid in severe liver disease with coagulopathy unless benefit is compelling.</p>",
  elderly: "<p>Same dose. Bleeding risk rises with age — add a proton-pump inhibitor when on dual antiplatelet therapy.</p>",
  inter: "<p>Other antiplatelets and anticoagulants (additive bleeding); NSAIDs (ibuprofen can block aspirin's antiplatelet effect and adds GI and cardiovascular harm — avoid); SSRIs (bleeding).</p>",
  ae: "<p>Dyspepsia, GI bleeding, bruising; bronchospasm in aspirin-sensitive asthma.</p>",
  mon: "<p>Haemoglobin and signs of bleeding, especially on dual therapy.</p>",
  tox: "<p>Antiplatelet doses carry no meaningful overdose risk. Salicylate poisoning is a separate issue (doses many times higher).</p>",
  src: "<p>ESC 2023 ACS §6; ACC/AHA 2025 ACS; ICMR STW STEMI and UA/NSTEMI; Bhutan STG 2024 §2.1; ISIS-2 Lancet 1988; NEML 2025.</p>"
},

clopidogrel: {
  name: "Clopidogrel", cls: "P2Y12 receptor inhibitor (thienopyridine, prodrug)", brands: "Plavix, Clopilet, generics",
  bt: "Listed — 75 mg tablet (NRH/RRH/DH). The only P2Y12 inhibitor on NEML 2025.",
  moa: "<p>A prodrug activated by liver CYP2C19; the active metabolite irreversibly blocks the platelet ADP (P2Y12) receptor. Added to aspirin it prevents more re-infarctions and stent thromboses than aspirin alone. Its effect is slower and more variable than ticagrelor or prasugrel, because about a third of South Asians carry a reduced-function CYP2C19 allele.</p>",
  ind: "<p>ACS (with aspirin) when ticagrelor or prasugrel is unavailable, contraindicated or bleeding risk is high; <b>the P2Y12 inhibitor of choice with fibrinolysis</b>; with an oral anticoagulant (triple then dual therapy); aspirin allergy.</p>",
  ci: "<ul><li>Active pathological bleeding.</li><li>Severe liver impairment.</li></ul>",
  adult: "<p><b>ACS managed invasively (PCI):</b> <b>600 mg loading</b>, then <b>75 mg once daily</b>.</p><p><b>ACS managed medically / NSTE-ACS (ICMR, NEMF):</b> <b>300 mg loading</b>, then 75 mg once daily.</p><p><b>With fibrinolysis:</b> <b>300 mg loading if aged 75 or under; 75 mg (no loading) if over 75</b>, then 75 mg daily.</p><p><b>Duration:</b> default 12 months of dual antiplatelet therapy (DAPT) after ACS, then aspirin alone; shorter if bleeding risk is high (specialist decision).</p>",
  child: "<p>Specialist use only (approximately 0.2 mg/kg once daily in infants, 1 mg/kg in older children; not established in ACS).</p>",
  preg: "<p>Limited data; use when clearly indicated (e.g. after stenting). Stop 7 days before neuraxial anaesthesia where possible — plan with cardiology and anaesthesia.</p>", bf: "<p>No data; avoid if possible or weigh benefit.</p>",
  renal: "<p>No dose change; bleeding risk higher in severe CKD.</p>", hep: "<p>Caution in moderate impairment; avoid in severe.</p>",
  elderly: "<p>Over 75 with fibrinolysis: no loading dose (75 mg only).</p>",
  inter: "<p><b>Omeprazole and esomeprazole</b> reduce its activation through CYP2C19 — prefer <b>pantoprazole</b> as the gastroprotective PPI where available. Other strong CYP2C19 inhibitors (fluconazole, fluoxetine) similarly. Anticoagulants and NSAIDs add bleeding.</p>",
  ae: "<p>Bleeding, bruising, dyspepsia, diarrhoea, rash; rarely thrombotic thrombocytopenic purpura.</p>",
  mon: "<p>Signs of bleeding; full blood count if bleeding or unexplained anaemia.</p>",
  other: "<p><b>Before surgery:</b> stop 5 days before elective CABG or major surgery — but never stop within the first months after a stent without cardiology advice (stent thrombosis is often fatal).</p>",
  src: "<p>ESC 2023 ACS; ACC/AHA 2025; ICMR STW STEMI and UA/NSTEMI (300 mg load); CLARITY-TIMI 28 and COMMIT (with fibrinolysis); Bhutan NEMF 2022 / NEML 2025; BNF.</p>"
},

ticagrelor: {
  name: "Ticagrelor", cls: "P2Y12 receptor inhibitor (reversible, direct-acting)", brands: "Brilinta, Brilique, Axcer",
  bt: "<b>Not on NEML 2025.</b> May be available privately or at referral level — check locally.",
  moa: "<p>Directly and reversibly blocks the platelet P2Y12 receptor — no liver activation needed, so its effect is faster and more consistent than clopidogrel. In PLATO it reduced cardiovascular death, MI and stroke compared with clopidogrel after ACS, at the cost of more non-procedural bleeding.</p>",
  ind: "<p>Preferred P2Y12 inhibitor (with aspirin) for ACS treated invasively or medically, in patients who are not at high bleeding risk (ESC 2023, ACC/AHA 2025).</p>",
  ci: "<ul><li>Any history of intracranial haemorrhage; active bleeding.</li><li>Severe liver impairment.</li><li>With strong CYP3A4 inhibitors (clarithromycin, ketoconazole, ritonavir).</li><li>Not with fibrinolysis in the first 24 hours (not studied) — use clopidogrel.</li></ul>",
  adult: "<p><b>180 mg loading</b>, then <b>90 mg twice daily</b> for 12 months (with aspirin 75–100 mg). After 12 months in selected high-risk patients, 60 mg twice daily may be continued (specialist decision).</p>",
  child: "<p>Not used in children for ACS.</p>",
  preg: "<p>Limited data — avoid unless benefit clearly outweighs risk.</p>", bf: "<p>Avoid.</p>",
  renal: "<p>No dose change; not studied on dialysis.</p>", hep: "<p>Avoid in severe impairment.</p>",
  elderly: "<p>Same dose; higher bleeding risk.</p>",
  inter: "<p>Strong CYP3A4 inhibitors and inducers (rifampicin — markedly reduces levels); simvastatin and lovastatin above 40 mg; digoxin (levels rise); aspirin above 100 mg/day (reduced efficacy).</p>",
  ae: "<p>Bleeding; <b>breathlessness</b> (about 1 in 7 — usually mild, often settles, not bronchospasm); ventricular pauses; raised uric acid.</p>",
  mon: "<p>Bleeding; ask about breathlessness and reassure if mild.</p>",
  other: "<p>Stop 3–5 days before elective CABG or major surgery.</p>",
  src: "<p>Wallentin L et al. PLATO, N Engl J Med 2009;361:1045–57; ESC 2023; ACC/AHA 2025; ICMR STW.</p>"
},

prasugrel: {
  name: "Prasugrel", cls: "P2Y12 receptor inhibitor (thienopyridine, prodrug)", brands: "Effient, Prasita",
  bt: "<b>Not on NEML 2025.</b> Check private or referral availability.",
  moa: "<p>A thienopyridine like clopidogrel, but activated more efficiently, giving faster and stronger platelet inhibition. In TRITON-TIMI 38 and ISAR-REACT 5 it reduced ischaemic events after PCI for ACS.</p>",
  ind: "<p>ACS proceeding to PCI, when the coronary anatomy is known (ESC 2023 prefers it over ticagrelor in NSTE-ACS going to PCI, based on ISAR-REACT 5).</p>",
  ci: "<ul><li><b>Previous stroke or TIA</b> (net harm).</li><li>Active bleeding; severe liver impairment.</li></ul>",
  adult: "<p><b>60 mg loading</b>, then <b>10 mg once daily</b>. <b>5 mg once daily if body weight under 60 kg or age 75 or over</b> (use at 75+ only after careful consideration).</p>",
  child: "<p>Not used.</p>",
  preg: "<p>Limited data — avoid unless essential.</p>", bf: "<p>Avoid.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>Avoid in severe impairment.</p>",
  elderly: "<p>Age 75 or over: generally avoid; if used, 5 mg daily.</p>",
  inter: "<p>Anticoagulants, NSAIDs (bleeding).</p>",
  ae: "<p>Bleeding (more than clopidogrel), anaemia, rash.</p>",
  other: "<p>Stop 7 days before elective CABG or major surgery.</p>",
  src: "<p>Wiviott SD et al. TRITON-TIMI 38, N Engl J Med 2007; Schüpke S et al. ISAR-REACT 5, N Engl J Med 2019; ESC 2023; ICMR STW STEMI (60 mg load).</p>"
},

tenecteplase: {
  name: "Tenecteplase (TNK-tPA)", cls: "Fibrinolytic — fibrin-specific plasminogen activator", brands: "Metalyse, TNKase, Elaxim",
  bt: "Listed — 50 mg injection (NRH/RRH/DH). <b>Added in NEML 2025 to replace streptokinase</b> (removed for major bleeding and frequent allergic reactions).",
  moa: "<p>A genetically modified tissue plasminogen activator. It binds fibrin in the fresh clot and converts plasminogen to plasmin, which dissolves the clot and reopens the artery. It is more fibrin-specific and longer-acting than alteplase, so it can be given as a <b>single bolus</b> — ideal in a district hospital or ambulance.</p>",
  ind: "<p><b>STEMI within 12 hours of symptom onset when primary PCI cannot be done within 120 minutes of diagnosis</b> (ESC 2023). Give within 10 minutes of the diagnostic ECG, then transfer to a PCI centre. The Bhutan NEMF monograph states 'within 6 hours'; the earlier it is given, the more muscle is saved, but the international window is 12 hours (see the comparison table). Also acute ischaemic stroke (different dose).</p>",
  ci: "<p><b>Absolute:</b> any previous intracranial haemorrhage or stroke of unknown origin; ischaemic stroke in the last 6 months (NEMF: 3 months); CNS damage, tumour or AV malformation; major trauma, surgery or head injury in the last month; GI bleeding in the last month; known bleeding disorder (not menses); suspected aortic dissection; non-compressible punctures in the last 24 h (e.g. liver biopsy, lumbar puncture).</p><p><b>Relative:</b> TIA in the last 6 months; oral anticoagulant; pregnancy or within 1 week post-partum; refractory hypertension (SBP over 180 or DBP over 110 mmHg); advanced liver disease; infective endocarditis; active peptic ulcer; prolonged or traumatic CPR.</p>",
  adult: "<p><b>Single IV bolus over 5–10 seconds, by body weight:</b></p><table><tr><th>Weight</th><th>Dose</th><th>Volume (5 mg/mL)</th></tr><tr><td>&lt;60 kg</td><td>30 mg</td><td>6 mL</td></tr><tr><td>60–69 kg</td><td>35 mg</td><td>7 mL</td></tr><tr><td>70–79 kg</td><td>40 mg</td><td>8 mL</td></tr><tr><td>80–89 kg</td><td>45 mg</td><td>9 mL</td></tr><tr><td>≥90 kg</td><td>50 mg</td><td>10 mL</td></tr></table><p><b>Age 75 or over: give half the dose</b> (ESC 2023, based on STREAM-1/2 — fewer intracranial bleeds).</p><p><b>Always give with:</b> aspirin + clopidogrel loading, and an anticoagulant (enoxaparin preferred; or unfractionated heparin).</p><p><b>Stroke dose (separate indication):</b> 0.25 mg/kg single bolus, maximum 25 mg — never use the MI table for stroke.</p>",
  child: "<p>Not used for MI in children. Specialist thrombosis use only.</p>",
  preg: "<p>Relative contraindication (bleeding, placental abruption). Primary PCI is preferred in pregnancy; use fibrinolysis only if PCI is impossible and the MI is life-threatening.</p>", bf: "<p>Large molecule, unlikely to reach the infant; benefit outweighs risk.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>Advanced liver disease is a relative contraindication (coagulopathy).</p>",
  elderly: "<p><b>Half dose at 75 years and over.</b> Enoxaparin also changes at this age (no IV bolus, 0.75 mg/kg).</p>",
  inter: "<p>Anticoagulants and antiplatelets increase bleeding (but are required); do not mix in the same line as dextrose — flush with saline.</p>",
  ae: "<p>Bleeding (intracranial haemorrhage about 1%, higher in elderly, women, low weight and severe hypertension); reperfusion arrhythmias (accelerated idioventricular rhythm — usually benign, a sign of reperfusion); hypotension; allergy (rare, unlike streptokinase).</p>",
  mon: "<p>ECG at 60–90 minutes: <b>less than 50% ST-segment resolution, ongoing pain or instability = failed reperfusion → urgent rescue PCI.</b> Neurological checks for 24 hours (any sudden headache, confusion or weakness = stop anticoagulant, urgent CT). Puncture sites, bleeding, BP.</p>",
  tox: "<p>Major bleeding: stop anticoagulant; give protamine if heparin given within 4 hours; cryoprecipitate/fibrinogen and tranexamic acid per local protocol; urgent CT head if neurological change.</p>",
  src: "<p>ESC 2023 ACS (fibrinolysis section); ASSENT-2 Lancet 1999; Armstrong PW et al. STREAM, N Engl J Med 2013; Van de Werf F et al. STREAM-2, Circulation 2023;148:753–64; Bhutan NEMF/NEML 2025 monograph; product label.</p>"
},

enoxaparin: {
  name: "Enoxaparin", cls: "Low-molecular-weight heparin (anti-Xa > anti-IIa)", brands: "Clexane, Lupenox",
  bt: "Listed — 10 mg/0.1 mL pre-filled syringe (0.6 mL = 60 mg) at NRH/RRH; supplied to DHs with a medical specialist, gynaecologist and general surgeon. NEML 2025.",
  moa: "<p>Potentiates antithrombin, mainly against factor Xa, stopping the clot from propagating while the body (or a fibrinolytic) clears it. Predictable dosing by weight; no routine monitoring.</p>",
  ind: "<p>Anticoagulation in NSTE-ACS; with fibrinolysis in STEMI (preferred over unfractionated heparin); VTE prophylaxis and treatment.</p>",
  ci: "<ul><li>Active major bleeding; heparin-induced thrombocytopenia (HIT) history.</li><li>Acute bacterial endocarditis; haemorrhagic stroke.</li></ul>",
  adult: "<p><b>NSTE-ACS:</b> <b>1 mg/kg SC every 12 hours</b> (NEMF: for 2–8 days, or until PCI / discharge).</p><p><b>STEMI with fibrinolysis, age under 75:</b> <b>30 mg IV bolus</b>, then 15 minutes later <b>1 mg/kg SC every 12 hours</b> (max 100 mg for each of the first two SC doses), until revascularisation or up to 8 days.</p><p><b>Age 75 or over:</b> <b>no IV bolus; 0.75 mg/kg SC every 12 hours</b> (max 75 mg for each of the first two doses).</p><p><b>VTE prophylaxis (medical):</b> 40 mg SC once daily.</p>",
  child: "<p>VTE treatment: under 2 months 1.5 mg/kg SC 12-hourly; 2 months and over 1 mg/kg SC 12-hourly (NEMF). Not used for ACS.</p>",
  preg: "<p>The anticoagulant of choice in pregnancy (does not cross the placenta).</p>", bf: "<p>Compatible (NEMF advises caution; poorly absorbed orally by the infant).</p>",
  renal: "<p class='warn'><b>CrCl under 30 mL/min: 1 mg/kg SC once daily</b> (with fibrinolysis, patients under 75 still receive the 30 mg IV bolus first); avoid or switch to unfractionated heparin if CrCl under 15 or on dialysis.</p>",
  hep: "<p>Caution — bleeding risk.</p>",
  elderly: "<p>Use the 75-and-over regimen above; calculate CrCl.</p>",
  inter: "<p>Antiplatelets, fibrinolytics, NSAIDs (bleeding); potassium-sparing drugs (heparins can raise potassium).</p>",
  ae: "<p>Bleeding, injection-site bruising, thrombocytopenia (check platelets if used more than 4–5 days), hyperkalaemia.</p>",
  mon: "<p>Platelets at baseline and after 5 days; creatinine; anti-Xa only in extremes of weight, pregnancy or renal failure.</p>",
  tox: "<p>Protamine partially reverses (1 mg per 1 mg enoxaparin given within 8 hours).</p>",
  src: "<p>ESC 2023; ExTRACT-TIMI 25 (N Engl J Med 2006); ICMR STW; Bhutan NEMF 2022 / NEML 2025; BNF.</p>"
},

heparin_ufh: {
  name: "Unfractionated heparin (UFH)", cls: "Anticoagulant (antithrombin-dependent, anti-IIa and anti-Xa)", brands: "Heparin sodium",
  bt: "Listed — 5,000 IU/mL, 5 mL vial (NRH/RRH). NEML 2025.",
  moa: "<p>Binds antithrombin and accelerates its inactivation of thrombin and factor Xa. Short half-life and fully reversible with protamine — useful during PCI and in kidney failure.</p>",
  ind: "<p>Anticoagulation during PCI; ACS when enoxaparin is unsuitable (severe CKD, high bleeding risk, likely urgent surgery); with fibrinolysis if enoxaparin is unavailable.</p>",
  ci: "<ul><li>Active major bleeding; suspected intracranial haemorrhage; severe thrombocytopenia; HIT.</li><li>Never intramuscularly.</li></ul>",
  adult: "<p><b>With fibrinolysis / NSTE-ACS (infusion):</b> <b>60 units/kg IV bolus (max 4,000 units)</b>, then <b>12 units/kg/hour (max 1,000 units/hour)</b>; check aPTT at 3, 6, 12 and 24 hours and keep at <b>1.5–2.0 × control (about 50–70 s)</b> for 24–48 hours.</p><p><b>During primary PCI:</b> 70–100 units/kg IV bolus (lab-directed).</p>",
  child: "<p>Specialist protocol (weight-based, age-specific).</p>",
  preg: "<p>Safe (does not cross the placenta).</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Preferred over enoxaparin in severe CKD; no adjustment of the regimen, titrate to aPTT.</p>", hep: "<p>Bleeding risk increased; titrate carefully.</p>",
  elderly: "<p>Same weight-based regimen; monitor closely.</p>",
  inter: "<p>Antiplatelets, fibrinolytics (bleeding); IV nitrates may lower effect.</p>",
  ae: "<p>Bleeding, HIT (falling platelets after day 5 with new thrombosis), hyperkalaemia, osteoporosis with long use.</p>",
  mon: "<p>aPTT 6-hourly until stable; platelets daily.</p>",
  tox: "<p>Protamine 1 mg per 100 units heparin given in the last 15 minutes (less if longer), max 50 mg, slow IV (no faster than 5 mg/min).</p>",
  src: "<p>Bhutan NEMF 2022 (UFH monograph — STEMI and UA/NSTEMI regimens); ESC 2023; ACC/AHA 2025.</p>"
},

metoprolol: {
  name: "Metoprolol", cls: "Cardioselective beta-1 blocker", brands: "Betaloc, Metolar, Seloken XL",
  bt: "Listed — metoprolol succinate 25 mg tablet (NRH/RRH/DH). Bisoprolol 5 mg at NRH/RRH. Atenolol (PEN 2011) is not on NEML 2025.",
  moa: "<p>Slows the heart and lowers its contractility and oxygen demand, relieving ischaemic pain and reducing arrhythmias. After MI with a weak ventricle it prevents death and re-infarction.</p>",
  ind: "<p>Ongoing ischaemic pain or tachycardia in ACS once there is no heart failure or shock; long-term after MI, <b>especially if LVEF is 40% or less</b>; angina; hypertension; rate control in AF.</p>",
  ci: "<ul><li><b>Signs of heart failure (Killip II or more), hypotension (SBP under 100–120), cardiogenic shock</b> — beta-blockers can tip a failing heart into shock.</li><li>Heart rate under 60, PR over 0.24 s, second- or third-degree heart block.</li><li>Active asthma; cocaine-associated chest pain.</li></ul>",
  adult: "<p><b>Early in ACS (stable, no contraindication):</b> oral metoprolol tartrate 25–50 mg every 6–12 hours, or <b>metoprolol succinate 25–50 mg once daily</b>, titrating over days to <b>up to 200 mg once daily</b> (succinate) for heart-rate 55–60/min. IV metoprolol (5 mg slowly up to 3 doses) only in haemodynamically stable patients with ongoing pain or hypertension — and not in anyone with heart failure.</p><p><b>Long term:</b> continue at the highest tolerated dose; clear survival benefit when LVEF is 40% or less. With preserved LVEF the benefit after modern revascularisation is uncertain (REDUCE-AMI 2024) — continue if needed for angina, arrhythmia or hypertension.</p>",
  child: "<p>Hypertension (6 years and over): 1 mg/kg once daily (max 50 mg/day to start; NEMF). Not used for ACS.</p>",
  preg: "<p>Usable (prefer metoprolol or labetalol); watch fetal growth and neonatal bradycardia/hypoglycaemia.</p>", bf: "<p>Compatible (low milk levels).</p>",
  renal: "<p>No dose change.</p>", hep: "<p>Reduce dose in severe impairment (liver-metabolised).</p>",
  elderly: "<p>Start low; watch bradycardia and postural hypotension.</p>",
  inter: "<p>Verapamil/diltiazem IV (asystole — never combine IV); digoxin and amiodarone (bradycardia, block); CYP2D6 inhibitors (fluoxetine, paroxetine) raise levels; insulin (masks hypoglycaemia).</p>",
  ae: "<p>Bradycardia, hypotension, fatigue, cold peripheries, bronchospasm, worsened acute heart failure, sleep disturbance.</p>",
  mon: "<p>Heart rate, BP, signs of heart failure; ECG for AV block.</p>",
  other: "<p>Do not stop suddenly in coronary disease — rebound angina and MI. Taper over 1–2 weeks.</p>",
  src: "<p>ESC 2023; ACC/AHA 2025; COMMIT/CCS-2 Lancet 2005 (early IV beta-blocker harm in shock-prone patients); Yndigegn T et al. REDUCE-AMI, N Engl J Med 2024; Bhutan NEMF 2022; ICMR STW NSTEMI.</p>"
},

atorvastatin_hi: {
  name: "Atorvastatin — high-intensity (after ACS)", cls: "HMG-CoA reductase inhibitor (statin)", brands: "Lipitor, Atorva, Storvas",
  bt: "Listed — <b>10 mg tablet only</b> (NRH/RRH/DH). An 80 mg dose means 8 tablets and 40 mg means 4 — explain this clearly to the patient.",
  moa: "<p>Lowers LDL cholesterol by blocking its synthesis in the liver, and stabilises the inflamed plaque. Started early and at high intensity after ACS, it reduces recurrent events within months (PROVE-IT, MIRACL).</p>",
  ind: "<p><b>Every patient with ACS, regardless of baseline cholesterol</b>, as early as possible (Bhutan STG: 'high-dose statin 40–80 mg stat'; ICMR: atorvastatin 80 mg).</p>",
  ci: "<p>Active liver disease or unexplained persistent transaminase rise over 3 × ULN; pregnancy; breastfeeding.</p>",
  adult: "<p><b>Atorvastatin 80 mg once daily</b> (40 mg if intolerant, very elderly, or interacting drugs), started on admission and continued lifelong. Alternative: rosuvastatin 20–40 mg (not on NEML).</p><p><b>Targets:</b> ESC 2023 — LDL-C <b>below 1.4 mmol/L (55 mg/dL)</b> and at least a 50% fall; recheck lipids at 4–6 weeks and add ezetimibe if above target. ACC/AHA 2025 — add a non-statin if LDL-C stays at or above 70 mg/dL (1.8 mmol/L) on maximal statin, and consider it at 55–69 mg/dL.</p>",
  child: "<p>Not relevant to ACS in children (familial hypercholesterolaemia is specialist-led).</p>",
  preg: "<p>Stop in pregnancy (theoretical fetal harm; benefit is long-term).</p>", bf: "<p>Avoid.</p>",
  renal: "<p>No dose change at any eGFR (an advantage over rosuvastatin in advanced CKD).</p>", hep: "<p>Contraindicated in active liver disease; check ALT at baseline and 6–12 weeks.</p>",
  elderly: "<p>Still beneficial; 40 mg is reasonable in the frail.</p>",
  inter: "<p><b>Clarithromycin, erythromycin, azoles, HIV protease inhibitors</b> (myopathy — withhold the statin during a short course); ciclosporin; gemfibrozil; colchicine (rare myopathy); <b>rifampicin lowers levels</b> (relevant in TB co-treatment).</p>",
  ae: "<p>Muscle aches (often not truly statin-caused — re-challenge), myopathy and rhabdomyolysis (rare), raised transaminases, small rise in diabetes risk (far outweighed by benefit).</p>",
  mon: "<p>Lipids and ALT at 4–12 weeks, then yearly; CK only if muscle symptoms.</p>",
  src: "<p>Cannon CP et al. PROVE-IT TIMI 22, N Engl J Med 2004; ESC 2023 ACS; ACC/AHA 2025; ICMR STW STEMI; Bhutan STG 2024 §2.1; NEML 2025.</p>"
},

nitrate_sl: {
  name: "Sublingual nitrates for angina (GTN, isosorbide dinitrate)", cls: "Nitrate — venodilator and coronary vasodilator", brands: "Sorbitrate (ISDN), Angised (GTN)",
  bt: "Listed — <b>isosorbide dinitrate 5 mg sublingual tablet</b> (NRH/RRH/DH). The 10 mg oral ISDN tablet was removed in NEML 2025 (replaced by ranolazine). For IV GTN in acute heart failure see the GTN card.",
  moa: "<p>Releases nitric oxide, dilating veins (reducing the heart's filling and work) and the large coronary arteries (improving flow to ischaemic muscle). Relieves angina within minutes but <b>does not reduce death in MI</b> — it treats the symptom, not the clot.</p>",
  ind: "<p>Relief of ischaemic chest pain in ACS (if BP allows); acute attacks and pre-exertion prophylaxis in stable angina. IV nitrate for persistent pain, hypertension or heart failure in ACS.</p>",
  ci: "<ul><li><b>Systolic BP under 90 mmHg</b>, or a fall of 30 mmHg below baseline.</li><li><b>Right ventricular infarction</b> (inferior STEMI with ST elevation in V4R) — the RV depends on filling; nitrates can cause profound hypotension.</li><li><b>Phosphodiesterase-5 inhibitor</b> in the last 24 h (sildenafil) or 48 h (tadalafil).</li><li>Severe aortic stenosis, hypertrophic obstructive cardiomyopathy.</li></ul>",
  adult: "<p><b>ISDN 5 mg sublingual</b> (NEMF range 2.5–5 mg), repeated every 5–10 minutes, <b>maximum 3 doses in 15–30 minutes</b>. Or GTN 0.4–0.5 mg sublingual / 1–2 sprays, repeated every 5 minutes up to 3 doses.</p><p><b>If pain persists after 3 doses (or lasts more than 5 minutes after the first dose at home), treat as ACS and seek emergency care.</b></p>",
  child: "<p>Not used for angina in children.</p>",
  preg: "<p>Use if needed; watch for maternal hypotension.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>No dose change for sublingual use.</p>",
  elderly: "<p>Sit down before taking — risk of postural hypotension and falls.</p>",
  inter: "<p>PDE-5 inhibitors (contraindicated); antihypertensives and alcohol (additive hypotension).</p>",
  ae: "<p>Headache (common, settles), flushing, dizziness, postural hypotension, reflex tachycardia; tolerance with continuous long-acting use (allow a nitrate-free period).</p>",
  mon: "<p>BP before each dose in hospital.</p>",
  other: "<p><b>Patient advice:</b> sit down, place under the tongue; tablets lose potency once the bottle is opened (replace every 8 weeks for GTN); a tingling or headache means it is working.</p>",
  src: "<p>Bhutan NEMF 2022 (ISDN monograph) and NEML 2025 changes; ESC 2023 ACS; ISIS-4 and GISSI-3 (no mortality benefit); BNF.</p>"
},

morphine: {
  name: "Morphine (IV, for ischaemic pain)", cls: "Opioid analgesic (mu agonist)", brands: "Morphine sulphate",
  bt: "Listed — 10 mg/mL injection (NRH/RRH/DH); 10 mg tablet. NEML 2025.",
  moa: "<p>Relieves severe pain and the anxiety and sympathetic surge that accompany it, lowering heart rate and oxygen demand. It also slows gut absorption of oral P2Y12 inhibitors — a reason to use it only when nitrates have not controlled the pain.</p>",
  ind: "<p>Severe ischaemic chest pain not relieved by nitrates (Bhutan STG: 'if required'; ESC 2023: may be considered, Class IIb).</p>",
  ci: "<ul><li>Respiratory depression, hypotension, reduced consciousness.</li><li>Caution in inferior/RV infarction (hypotension) and COPD.</li></ul>",
  adult: "<p><b>2.5–5 mg IV slowly (1 mg/min), repeated every 5–15 minutes as needed</b>, titrated to pain (Bhutan STG range 5–10 mg IV). Dilute 10 mg in 10 mL saline (1 mg/mL). Give an antiemetic (metoclopramide 10 mg IV).</p>",
  child: "<p>IV over at least 5 minutes: 6 months–12 years 100 micrograms/kg (NEMF); titrate. Not for ACS.</p>",
  preg: "<p>Use if needed; neonatal respiratory depression near delivery.</p>", bf: "<p>Single doses compatible.</p>",
  renal: "<p class='warn'>Active metabolites accumulate in kidney failure — use smaller doses and longer intervals (e.g. 1–2 mg).</p>", hep: "<p>Reduce dose; can precipitate encephalopathy.</p>",
  elderly: "<p>Start with 1–2.5 mg.</p>",
  inter: "<p>Oral P2Y12 inhibitors (delayed onset — consider crushed ticagrelor or IV antiplatelet in the cath lab); other sedatives.</p>",
  ae: "<p>Nausea and vomiting, hypotension, bradycardia, respiratory depression, constipation.</p>",
  mon: "<p>Respiratory rate, sedation, BP, SpO₂.</p>",
  tox: "<p>Naloxone 0.1–0.4 mg IV, repeated, for respiratory depression.</p>",
  src: "<p>Bhutan STG 2024 §2.1; ESC 2023 ACS; Bhutan NEMF 2022; BNF.</p>"
},

metoclopramide: {
  name: "Metoclopramide", cls: "Antiemetic (dopamine D2 antagonist, prokinetic)", brands: "Perinorm, Maxolon",
  bt: "Listed — 10 mg tablet and 5 mg/mL injection (down to PHC). NEML 2025.",
  moa: "<p>Blocks dopamine receptors in the chemoreceptor trigger zone and speeds gastric emptying. Used in ACS to prevent vomiting from pain, vagal stimulation or morphine — vomiting raises sympathetic drive and can make the patient unsafe.</p>",
  ind: "<p>Nausea and vomiting in ACS (Bhutan STG: 10 mg IV if required), especially with opioids.</p>",
  ci: "<ul><li>Bowel obstruction, perforation or GI bleeding; phaeochromocytoma.</li><li>Under 1 year (dystonia).</li></ul>",
  adult: "<p><b>10 mg IV slowly over at least 3 minutes</b>, up to 3 times daily (max 30 mg/day or 0.5 mg/kg/day); maximum 5 days.</p>",
  child: "<p>1–18 years: 0.1–0.15 mg/kg per dose (max 10 mg), up to 3 times daily, second-line only (dystonia risk).</p>",
  preg: "<p>Usable.</p>", bf: "<p>Small amounts in milk; short courses compatible.</p>",
  renal: "<p>eGFR 15–60: reduce the dose by half; eGFR under 15: reduce by three-quarters (BNF).</p>", hep: "<p>Halve the dose in severe impairment.</p>",
  elderly: "<p>Higher risk of tardive dyskinesia and parkinsonism; keep courses short.</p>",
  inter: "<p>Antipsychotics (extrapyramidal effects); levodopa (antagonism).</p>",
  ae: "<p>Acute dystonia (oculogyric crisis — treat with procyclidine or benzatropine), restlessness, drowsiness, QT prolongation (rare).</p>",
  src: "<p>Bhutan STG 2024 §2.1; Bhutan NEMF 2022; BNF.</p>"
},

ranolazine: {
  name: "Ranolazine", cls: "Anti-anginal — late sodium current inhibitor", brands: "Ranexa, Ranozex",
  bt: "Listed — 500 mg tablet (NRH/RRH/DH). <b>New in NEML 2025</b> (replaces oral isosorbide dinitrate 10 mg).",
  moa: "<p>Blocks the late inward sodium current in ischaemic heart muscle, reducing calcium overload and wall tension. It relieves angina without lowering heart rate or BP — useful when beta-blockers or calcium-channel blockers cannot be pushed further.</p>",
  ind: "<p>Add-on for chronic stable angina still symptomatic on first-line therapy (beta-blocker and/or calcium-channel blocker). <b>It is not an emergency drug for ACS.</b></p>",
  ci: "<ul><li>CrCl under 30 mL/min; moderate or severe liver impairment.</li><li>With strong CYP3A4 inhibitors (clarithromycin, ketoconazole) or inducers (<b>rifampicin</b>, carbamazepine, phenytoin).</li><li>QT prolongation.</li></ul>",
  adult: "<p><b>500 mg twice daily</b>, increased after 2–4 weeks to <b>1 g twice daily</b> if needed (max 1 g twice daily). Swallow whole.</p>",
  child: "<p>Not used.</p>",
  preg: "<p>Avoid (no data).</p>", bf: "<p>Avoid.</p>",
  renal: "<p>Avoid if CrCl under 30; monitor creatinine in moderate impairment.</p>", hep: "<p>Contraindicated in moderate or severe impairment.</p>",
  elderly: "<p>Start at 500 mg twice daily; more side effects.</p>",
  inter: "<p>Raises levels of digoxin, simvastatin (limit to 20 mg), metformin (limit 1.7 g/day at 1 g twice daily); diltiazem/verapamil (limit ranolazine to 500 mg twice daily).</p>",
  ae: "<p>Dizziness, headache, constipation, nausea, weakness; modest QT prolongation.</p>",
  mon: "<p>ECG (QTc) at baseline and after dose increase; creatinine.</p>",
  src: "<p>Bhutan NEMF/NEML 2025; ESC 2024 chronic coronary syndromes guideline; product label.</p>"
}
});
