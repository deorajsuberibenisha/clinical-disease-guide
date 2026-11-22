/* Stroke drug cards (new ids). Reused: tenecteplase (stroke dose on its card), aspirin_acs, clopidogrel, atorvastatin_hi, labetalol,
   heparin_ufh, enoxaparin. Sources: Bhutan Stroke Management Protocol v2.0 (2023); STG 2024 §7.6; NEMF 2022 / NEML 2025;
   AHA/ASA 2026 acute ischaemic stroke; AHA/ASA 2022 ICH; AHA/ASA 2021 secondary prevention; ESO 2021/2023; ESC 2024 AF; BNF. */
Object.assign(GUIDE.drugs, {

alteplase: {
  name: "Alteplase (rt-PA)", cls: "Fibrinolytic (tissue plasminogen activator)", brands: "Actilyse",
  bt: "Listed: 50 mg vial (NRH/RRH). Tenecteplase 50 mg (to DH) is now an equal first-line choice for stroke (AHA/ASA 2026) and simpler to give.",
  moa: "<p>Converts plasminogen bound to fibrin into plasmin, dissolving the clot that blocks a brain artery. Brain cells in the 'penumbra' around the core can be saved if flow returns within hours: about 1.9 million neurons die each minute of an untreated large-vessel stroke.</p>",
  ind: "<p>Acute ischaemic stroke with a disabling deficit, <b>within 4.5 hours</b> of onset or last known well, once CT has excluded haemorrhage. Beyond 4.5 hours or on waking only with advanced imaging (specialist). Also STEMI and massive pulmonary embolism (different regimens).</p>",
  ci: "<ul><li><b>Any haemorrhage on CT</b>; extensive early infarction (hypodensity over a third of the MCA territory).</li><li>Ischaemic stroke, serious head trauma or intracranial/spinal surgery in the past 3 months; history of intracranial haemorrhage; intracranial tumour, AVM or aneurysm with high bleeding risk; infective endocarditis; aortic dissection.</li><li>GI bleeding in the past 21 days; major surgery in 14 days (relative); platelets under 100,000/mm³; INR over 1.7; therapeutic LMWH in 24 h; DOAC in 48 h (unless levels normal); glucose under 50 mg/dL (correct, then reassess).</li><li><b>BP over 185/110 that cannot be lowered</b> before treatment.</li></ul>",
  adult: "<p><b>0.9 mg/kg (maximum 90 mg)</b>: give <b>10% as an IV bolus over 1 minute</b>, then the remaining 90% by infusion over 60 minutes.</p><p><i>Example (60 kg):</i> total 54 mg; 5.4 mg bolus, then 48.6 mg over 60 minutes.</p><p><b>Before and for 24 hours after:</b> keep BP <b>under 180/105</b> (labetalol IV); no antiplatelet or anticoagulant for 24 hours; repeat CT at 24 hours before starting aspirin.</p>",
  child: "<p>AHA/ASA 2026: may be considered within 4.5 hours in children 28 days–18 years with disabling ischaemic stroke, at 0.9 mg/kg (max 90 mg), in a specialist centre only.</p>",
  preg: "<p>Not absolutely contraindicated; consider for disabling stroke after specialist discussion (bleeding and abruption risk).</p>", bf: "<p>Probably compatible (short half-life).</p>",
  renal: "<p>No dose change.</p>", hep: "<p>Severe liver disease with coagulopathy increases bleeding risk.</p>",
  elderly: "<p>No upper age limit within 4.5 hours; benefit persists over 80 years.</p>",
  inter: "<p>Anticoagulants and antiplatelets (bleeding); ACE inhibitors (angioedema, especially with insular infarcts).</p>",
  ae: "<p><b>Symptomatic intracranial haemorrhage (about 2–6%)</b>, systemic bleeding, orolingual angioedema.</p>",
  mon: "<p>Neurological checks (NIHSS) and BP every 15 min for 2 h, every 30 min for 6 h, then hourly to 24 h. Any new headache, vomiting, worse deficit or rising BP: stop the infusion, urgent CT, check fibrinogen; give cryoprecipitate and tranexamic acid per protocol.</p>",
  src: "<p>AHA/ASA 2026 AIS guideline; ESO 2021 IVT guideline; NINDS 1995; ECASS III 2008; NEMF 2022 / NEML 2025.</p>"
},

apixaban: {
  name: "Apixaban", cls: "Direct oral anticoagulant (factor Xa inhibitor)", brands: "Eliquis",
  bt: "Listed: <b>2.5 mg tablet only</b> (NRH/RRH). A 5 mg dose is two tablets. Dabigatran and warfarin are the other listed options.",
  moa: "<p>Directly blocks factor Xa, preventing thrombin generation and clot formation in the fibrillating left atrium. Compared with warfarin it prevents more strokes, causes about half the intracranial bleeds, and needs no INR monitoring (ARISTOTLE).</p>",
  ind: "<p>Stroke prevention in <b>non-valvular atrial fibrillation</b> with CHA₂DS₂-VA(Sc) score ≥2 (consider at 1); treatment and prevention of DVT/PE. <b>Not</b> for mechanical heart valves or moderate–severe mitral stenosis (use warfarin).</p>",
  ci: "<ul><li>Active major bleeding; mechanical valve; moderate/severe rheumatic mitral stenosis.</li><li>CrCl under 15 mL/min (not recommended); severe liver disease with coagulopathy.</li><li>Pregnancy and breastfeeding.</li></ul>",
  adult: "<p><b>AF:</b> <b>5 mg twice daily</b> (two 2.5 mg tablets). <b>Reduce to 2.5 mg twice daily</b> if at least <b>2 of</b>: age ≥80 years, weight ≤60 kg, creatinine ≥1.5 mg/dL (≥133 µmol/L) (NEMF; label).</p><p><b>After stroke with AF:</b> start once the infarct size allows. A pragmatic rule is minor stroke within about 48 h, moderate at days 3–5, severe at days 6–14, after a repeat scan excludes haemorrhagic transformation (ELAN 2023 supports early start).</p><p><b>DVT/PE:</b> 10 mg twice daily for 7 days, then 5 mg twice daily.</p>",
  child: "<p>Not routinely used; specialist only.</p>",
  preg: "<p>Avoid; use LMWH.</p>", bf: "<p>Avoid.</p>",
  renal: "<p>CrCl 15–29: 2.5 mg twice daily (AF); avoid under 15.</p>", hep: "<p>Avoid in Child-Pugh C; caution in B.</p>",
  elderly: "<p>Check the dose-reduction criteria; do not under-dose without them (more strokes).</p>",
  inter: "<p>Strong CYP3A4 and P-gp inducers (<b>rifampicin</b>, carbamazepine, phenytoin) markedly lower levels: avoid; strong inhibitors (ketoconazole, ritonavir) raise them. Antiplatelets and NSAIDs add bleeding.</p>",
  ae: "<p>Bleeding (GI, gum, nose), anaemia, bruising.</p>",
  mon: "<p>Creatinine and Hb at least yearly (every 6 months if over 75 or CrCl under 60); adherence (short half-life: missed doses quickly lose protection).</p>",
  tox: "<p>Major bleeding: stop, local measures, transfusion; andexanet alfa or prothrombin complex concentrate where available.</p>",
  src: "<p>Granger CB et al. ARISTOTLE, N Engl J Med 2011; ESC 2024 AF guideline; AHA/ASA 2021 secondary prevention; Fischer U et al. ELAN, N Engl J Med 2023; NEMF 2022 / NEML 2025.</p>"
},

warfarin: {
  name: "Warfarin", cls: "Vitamin K antagonist (oral anticoagulant)", brands: "Coumadin, Warf",
  bt: "Listed: 1, 3 and 5 mg tablets (NRH/RRH; DH only where INR testing exists). NEMF advises different tablet colours for each strength.",
  moa: "<p>Blocks vitamin K recycling, so the liver makes inactive clotting factors II, VII, IX and X. Full effect takes 5–7 days; the dose needed varies widely between people and with diet and drugs, so INR monitoring is essential.</p>",
  ind: "<p><b>Mechanical heart valves</b> and <b>AF with moderate–severe rheumatic mitral stenosis</b> (where DOACs are not used); AF when a DOAC is unsuitable or unaffordable; DVT/PE.</p>",
  ci: "<ul><li>Active bleeding, recent haemorrhagic stroke, severe uncontrolled hypertension.</li><li>Pregnancy (embryopathy in weeks 6–12), unless a mechanical valve makes it necessary (specialist).</li><li>Inability to monitor the INR or unreliable adherence.</li></ul>",
  adult: "<p><b>Start 5 mg daily</b> (NEMF induction 10 mg daily for 2 days in younger patients; use 2–5 mg in the elderly, low weight, liver disease or interacting drugs), then adjust to INR: usual maintenance 3–9 mg/day.</p><p><b>Target INR:</b> <b>2.0–3.0</b> for AF and DVT/PE; <b>2.5–3.5</b> for mechanical mitral valves (and higher-risk valves).</p><p>Check INR daily or alternate days until stable for two readings, then weekly, then up to every 4–12 weeks.</p>",
  child: "<p>Specialist (e.g. 0.2 mg/kg on day 1, max 10 mg, then INR-guided).</p>",
  preg: "<p>Avoid (teratogenic; fetal bleeding); LMWH instead except for mechanical valves (specialist).</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change; higher bleeding risk.</p>", hep: "<p>Increased sensitivity; avoid in severe disease.</p>",
  elderly: "<p>Lower doses; falls are not by themselves a reason to withhold anticoagulation.</p>",
  inter: "<p><b>Very many.</b> INR rises with metronidazole, co-trimoxazole, fluconazole, ciprofloxacin, amiodarone, paracetamol (regular), alcohol binges; INR falls with <b>rifampicin</b>, carbamazepine, phenytoin, vitamin K-rich foods. Check INR within a week of any new drug.</p>",
  ae: "<p>Bleeding; skin necrosis (rare, early); purple toe syndrome.</p>",
  mon: "<p>INR as above; Hb if bleeding.</p>",
  tox: "<p>INR 5–8 without bleeding: hold 1–2 doses, vitamin K 1–2.5 mg orally if high risk; INR over 8: vitamin K 1–5 mg orally; major bleeding: stop, vitamin K 5–10 mg IV and prothrombin complex concentrate or FFP (NEMF: vitamin K 5 mg slow IV).</p>",
  src: "<p>NEMF 2022 / NEML 2025; ESC 2024 AF guideline; ESC/EACTS 2021 valvular heart disease guideline; BNF.</p>"
},

mannitol: {
  name: "Mannitol 20%", cls: "Osmotic diuretic", brands: "Mannitol",
  bt: "Listed: 20% solution, 350 mL bottle (NRH/RRH).",
  moa: "<p>Draws water out of the brain into the blood by raising plasma osmolality, lowering intracranial pressure within 15–30 minutes. It is a temporary bridge, not a treatment of the cause.</p>",
  ind: "<p>Raised intracranial pressure with signs of herniation (large haemorrhage or malignant MCA infarction with falling consciousness, unequal pupils), as a bridge to decompression; head injury with herniation.</p>",
  ci: "<p>Anuria, severe dehydration, pulmonary oedema, active intracranial bleeding (relative; used in practice as a bridge), serum osmolality over 320 mOsm/kg.</p>",
  adult: "<p><b>0.25–1 g/kg IV over 20–30 minutes</b> (20% solution = 0.2 g/mL: a 60 kg adult at 0.5 g/kg = 30 g = 150 mL), repeated every 4–8 hours if needed (NEMF 0.25–2 g/kg). Insert a urinary catheter.</p>",
  child: "<p>0.25–1 g/kg IV over 20–30 min (specialist); NEMF lists paediatric dosing.</p>",
  preg: "<p>Use only if clearly needed.</p>", bf: "<p>Probably compatible.</p>",
  renal: "<p class='warn'>Can cause AKI; stop if osmolar gap over 20 or osmolality over 320 mOsm/kg.</p>", hep: "<p>No change.</p>",
  ae: "<p>Dehydration, hypotension, electrolyte disturbance (high or low sodium, low potassium), AKI, rebound oedema, fluid overload (initially).</p>",
  mon: "<p>Urine output, sodium, osmolality (keep under 320), creatinine, BP, GCS and pupils.</p>",
  other: "<p>Routine mannitol in stroke without herniation is not recommended. Hypertonic saline (3%) is an alternative. Steroids do not help cerebral oedema from stroke or ICH.</p>",
  src: "<p>NEMF 2022; AHA/ASA 2022 ICH guideline; AHA/ASA 2026 AIS guideline; ESO 2021 space-occupying infarction guideline.</p>"
}
});
