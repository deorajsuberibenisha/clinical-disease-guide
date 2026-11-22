/* Epilepsy and status epilepticus drug cards. New: levetiracetam, valproate, carbamazepine, lamotrigine, phenytoin, phenobarbital, midazolam.
   Reused (not redefined): diazepam, magnesium_sulfate, dextrose, thiamine, paracetamol.
   Sources: BNF/BNFc; NICE NG217 (2022, updated 2025); ILAE; ESETT (Kapur, NEJM 2019); EcLiPSE (Lyttle, Lancet 2019) and ConSEPT (Dalziel, Lancet 2019);
   RAMPART (Silbergleit, NEJM 2012); AES 2016 (Glauser); WHO mhGAP 2023; WHO neonatal seizures 2011; MHRA valproate safety measures 2018–2024;
   FDA/CPIC HLA-B*15:02 and carbamazepine; Bhutan STG 2024 §7.7, §12.1.1; NEMF 2022; NEML 2025. */
Object.assign(GUIDE.drugs, {
levetiracetam: {
  name: "Levetiracetam", cls: "Anti-seizure medicine (SV2A ligand)", brands: "Keppra, Levroxa, Levera",
  bt: "Listed — 500 mg tablet and 100 mg/mL injection (5 mL), NRH/RRH/DH (NEML 2025).",
  moa: "<p>Binds synaptic vesicle protein SV2A and reduces release of excitatory neurotransmitter. No liver enzyme induction and almost no drug interactions, which is why it suits older people, pregnancy and patients on many medicines.</p>",
  ind: "<p><b>Second-line drug for status epilepticus</b> (as effective as phenytoin and valproate in ESETT and EcLiPSE, with fewer cardiac and tissue risks). Focal and generalised epilepsy; first choice for women who may become pregnant (with lamotrigine).</p>",
  ci: "<p>Hypersensitivity. Caution in depression or psychosis history.</p>",
  adult: "<p><b>Status epilepticus: 60 mg/kg IV (maximum 4500 mg) over 10–15 minutes</b> (ESETT; NICE allows 40–60 mg/kg). Dilute in 100 mL saline.</p><p><b>Epilepsy:</b> 250 mg twice daily for 1–2 weeks, then 500 mg twice daily; increase by 250–500 mg twice daily every 2 weeks as needed; maximum 1.5 g twice daily.</p>",
  child: "<p><b>Status epilepticus: 40 mg/kg IV (maximum 3 g) over 5 minutes</b> (EcLiPSE, ConSEPT; APLS).</p><p><b>Epilepsy (1 month and over, under 50 kg):</b> 10 mg/kg once daily or 5 mg/kg twice daily to start (7 mg/kg once daily under 6 months); increase every 2 weeks to 20–30 mg/kg twice daily (maximum 30 mg/kg twice daily). 50 kg and over: adult dose. Tablets can be crushed into water.</p>",
  neo: "<p>Second-line for neonatal seizures after phenobarbital in some units (specialist): 40–60 mg/kg loading.</p>",
  preg: "<p><b>One of the safest anti-seizure medicines in pregnancy</b> (no clear increase in malformations in registries). Levels fall in pregnancy; review dose. Folic acid 5 mg daily before conception.</p>", bf: "<p>Compatible; watch the baby for sleepiness.</p>",
  renal: "<p>Reduce: CrCl 50–79: max 1 g twice daily; 30–49: max 750 mg twice daily; under 30: max 500 mg twice daily; dialysis: 500 mg–1 g daily plus a dose after dialysis.</p>",
  hep: "<p>No change unless severe with kidney impairment.</p>",
  elderly: "<p>Adjust for kidney function; good choice for late-onset epilepsy.</p>",
  inter: "<p>Very few clinically important interactions.</p>",
  ae: "<p>Sleepiness, dizziness, <b>irritability, low mood, aggression</b> (ask families; about 1 in 10), rarely psychosis or suicidal thoughts.</p>",
  mon: "<p>Mood and behaviour; no routine blood levels.</p>",
  src: "<p>BNF/BNFc; NICE NG217; Kapur J et al. NEJM 2019 (ESETT); Lyttle MD et al. and Dalziel SR et al. Lancet 2019; Bhutan NEML 2025.</p>"
},
valproate: {
  name: "Sodium valproate", cls: "Broad-spectrum anti-seizure medicine", brands: "Epilim, Valparin, Encorate",
  bt: "Listed — sodium valproate 200 mg tablet, NRH/RRH/DH (NEML 2025). No IV form or liquid listed.",
  moa: "<p>Several actions: blocks sodium and T-type calcium channels and raises brain GABA. Works for almost all seizure types, which is its strength; its harm in pregnancy is its great weakness.</p>",
  ind: "<p><b>Generalised epilepsies</b> (tonic-clonic, absence, myoclonic, juvenile myoclonic epilepsy) in males and in women who cannot become pregnant; focal epilepsy (second line); IV form for status epilepticus (not available in Bhutan). Bipolar disorder; migraine prevention.</p>",
  ci: "<ul><li><b>Girls and women who could become pregnant</b>, unless other drugs have failed and a pregnancy prevention programme is in place (MHRA/EMA)</li><li>Pregnancy (for epilepsy, only if nothing else works)</li><li>Active liver disease; family history of severe liver dysfunction; mitochondrial disease (POLG); urea cycle disorders</li></ul>",
  adult: "<p><b>Epilepsy:</b> 300 mg twice daily (or 500 mg once daily), increase by 200 mg every 3 days to usual 1–2 g/day in 1–2 doses; maximum 2.5 g/day. <b>Status epilepticus (where IV exists):</b> 40 mg/kg IV (maximum 3 g) over 10 minutes (ESETT).</p>",
  child: "<p><b>Epilepsy:</b> 10–15 mg/kg/day in 1–2 doses, increased by 5–10 mg/kg/day weekly to usual 25–30 mg/kg/day; maximum 60 mg/kg/day (BNFc). Avoid under 2 years if possible (liver failure risk, especially with other anti-seizure drugs or metabolic disease).</p>",
  preg: "<p><b>Highest risk of all anti-seizure drugs:</b> about 1 in 10 babies has a major malformation (neural tube, heart, cleft, limbs) and up to 4 in 10 have learning or developmental problems. Never start in a woman who could become pregnant without specialist advice; never stop suddenly in a pregnant woman already taking it — get specialist advice the same day.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No major change; free levels rise in kidney failure.</p>",
  hep: "<p>Avoid in liver disease. Rare fatal liver failure, mostly in the first 6 months and in young children.</p>",
  elderly: "<p>Tremor, falls, confusion; check sodium and platelets.</p>",
  inter: "<p>Doubles lamotrigine levels (halve lamotrigine dose); carbapenems (meropenem) cut valproate levels sharply — seizures may return; aspirin raises free levels.</p>",
  ae: "<p>Weight gain, tremor, hair thinning, nausea, raised ammonia (confusion), low platelets, pancreatitis, liver failure, polycystic ovaries.</p>",
  mon: "<p>LFT and CBC before starting and in the first 6 months; ammonia if confused; pregnancy test and contraception counselling in women.</p>",
  src: "<p>BNF/BNFc; NICE NG217; MHRA Drug Safety Updates 2018–2024 (valproate pregnancy prevention programme); Kapur J et al. NEJM 2019; Bhutan NEML 2025.</p>"
},
carbamazepine: {
  name: "Carbamazepine", cls: "Anti-seizure medicine (sodium-channel blocker)", brands: "Tegretol, Mazetol, Zeptol",
  bt: "Listed — carbamazepine 200 mg tablet, NRH/RRH/DH (NEML 2025).",
  moa: "<p>Blocks voltage-gated sodium channels, stopping repetitive firing. Strong liver enzyme inducer: it speeds the breakdown of many drugs, including itself in the first weeks (autoinduction).</p>",
  ind: "<p><b>Focal epilepsy</b> (with or without secondary generalisation); trigeminal neuralgia; bipolar disorder. WHO mhGAP lists it as a first-line drug in low-resource settings.</p><p><b>Can worsen</b> absence and myoclonic seizures (generalised epilepsies): avoid there.</p>",
  ci: "<ul><li>AV block, bone marrow depression, acute porphyria</li><li><b>HLA-B*15:02 positive</b> (high risk of Stevens–Johnson syndrome/TEN; carriers are common in South and South-East Asian populations — Bhutanese frequency not known, test where possible)</li></ul>",
  adult: "<p><b>Epilepsy:</b> 100–200 mg once or twice daily, increase by 100–200 mg every 1–2 weeks to usual 400–600 mg twice daily; maximum 1.6–2 g/day. Start low: autoinduction lowers levels after 2–4 weeks.</p>",
  child: "<p><b>Epilepsy:</b> 5 mg/kg at night, increase by 2.5–5 mg/kg every 3–7 days; usual 5 mg/kg two or three times daily (maximum 20 mg/kg/day, BNFc).</p>",
  preg: "<p>Malformation risk about 3–5% (neural tube, cleft); lower than valproate, higher than lamotrigine/levetiracetam. Folic acid 5 mg; vitamin K for the baby. Reduces hormonal contraceptive effect — use a copper IUD or depot.</p>", bf: "<p>Compatible; watch the baby for poor feeding or jaundice.</p>",
  renal: "<p>No change; caution in severe impairment.</p>",
  hep: "<p>Avoid in severe liver disease; can cause hepatitis.</p>",
  elderly: "<p>Hyponatraemia, dizziness, falls, interactions: often avoided.</p>",
  inter: "<p><b>Many:</b> lowers levels of contraceptives, warfarin, DOACs, rifampicin-sensitive drugs, ARVs, steroids; isoniazid, erythromycin, clarithromycin, fluconazole raise carbamazepine to toxic levels.</p>",
  ae: "<p>Dizziness, double vision, ataxia, nausea; rash (stop if severe — SJS/TEN, DRESS), low sodium, low white cells, liver injury.</p>",
  mon: "<p>Sodium, CBC and LFT at baseline and in the first months; levels (4–12 mg/L) if toxicity or poor control.</p>",
  src: "<p>BNF/BNFc; NICE NG217; WHO mhGAP 2023; CPIC/FDA HLA-B*15:02 guidance; Bhutan NEML 2025.</p>"
},
lamotrigine: {
  name: "Lamotrigine", cls: "Anti-seizure medicine (sodium-channel blocker)", brands: "Lamictal, Lametec, Lamitor",
  bt: "Listed — lamotrigine 50 mg tablet, NRH/RRH (NEML 2025).",
  moa: "<p>Blocks sodium channels and reduces glutamate release. Well tolerated and mood-stabilising, but must be started slowly to avoid serious rash.</p>",
  ind: "<p><b>First choice for focal epilepsy</b> (NICE, SANAD II) and for generalised epilepsy in women who could become pregnant; bipolar depression. May worsen myoclonic seizures.</p>",
  ci: "<p>Previous lamotrigine rash.</p>",
  adult: "<p><b>Monotherapy:</b> 25 mg once daily for 2 weeks, then 50 mg once daily for 2 weeks, then increase by 50–100 mg every 1–2 weeks to usual 100–200 mg/day in 1–2 doses (maximum 500 mg/day). <b>With valproate: halve the starting doses and the steps</b> (25 mg on alternate days). With enzyme inducers (carbamazepine, phenytoin, phenobarbital): double them.</p>",
  child: "<p>2–11 years: weight-based slow titration by a specialist (for example 0.3 mg/kg/day for 2 weeks, then 0.6 mg/kg/day, then increase every 1–2 weeks to 1–15 mg/kg/day; much lower with valproate). 12 years and over: adult schedule.</p>",
  preg: "<p>Among the safest (malformation risk about 2–3%, close to background). Levels fall markedly in pregnancy and rise after delivery: monitor and adjust.</p>", bf: "<p>Compatible; watch for rash or poor feeding.</p>",
  renal: "<p>Reduce maintenance dose in significant impairment.</p>",
  hep: "<p>Reduce by 50% in moderate and 75% in severe impairment.</p>",
  elderly: "<p>Well tolerated; good choice.</p>",
  inter: "<p>Valproate doubles levels; carbamazepine, phenytoin, phenobarbital, rifampicin and oestrogen-containing contraceptives lower them.</p>",
  ae: "<p><b>Rash in up to 1 in 10</b>; serious (SJS/TEN) in about 1 in 1000 adults and more in children — highest with fast titration or valproate. Stop at once if rash with fever, mouth ulcers or blisters. Dizziness, double vision, insomnia.</p>",
  src: "<p>BNF/BNFc; NICE NG217; Marson A et al. Lancet 2021 (SANAD II); Bhutan NEML 2025.</p>"
},
phenytoin: {
  name: "Phenytoin", cls: "Anti-seizure medicine (sodium-channel blocker)", brands: "Eptoin, Dilantin, Epsolin",
  bt: "Listed — phenytoin 100 mg tablet (NRH to PHC) and 50 mg/mL injection, 2 mL ampoule (NRH/RRH/DH) (NEML 2025).",
  moa: "<p>Blocks sodium channels. Saturable (zero-order) metabolism: a small dose increase near the top of the range can cause a large rise in level and toxicity.</p>",
  ind: "<p><b>Second-line drug for status epilepticus</b> (Bhutan STG and NICE); focal and tonic-clonic epilepsy where cheaper drugs are needed. Not for absence or myoclonic seizures.</p>",
  ci: "<p>Sinus bradycardia, heart block, Adams–Stokes; acute porphyria. Do not use for seizures from alcohol withdrawal or poisoning where it is ineffective.</p>",
  adult: "<p><b>Status epilepticus: 20 mg/kg IV</b> (maximum about 2 g), diluted in 0.9% saline only (precipitates in dextrose), through a large vein with an in-line filter, at <b>no more than 50 mg/minute</b> (25 mg/minute in elderly or cardiac patients), with ECG and BP monitoring.</p><p><b>Epilepsy (oral):</b> 3–4 mg/kg/day (150–300 mg) once daily or in two doses, adjusted by levels to usual 200–500 mg/day. The STG table prints “100–1000 mg per day”; this guide takes it as a typographical error and uses the BNF range.</p>",
  child: "<p><b>Status epilepticus: 20 mg/kg IV</b> over at least 20 minutes (no faster than 1 mg/kg/minute; maximum 50 mg/minute), with ECG monitoring.</p><p><b>Epilepsy:</b> 1.5–2.5 mg/kg twice daily, adjusted to 2.5–5 mg/kg twice daily (maximum 7.5 mg/kg twice daily or 300 mg/day), by levels.</p>",
  neo: "<p>Loading 20 mg/kg IV over 30 minutes for seizures not controlled by phenobarbital (specialist); levels needed.</p>",
  preg: "<p>Malformation risk (fetal hydantoin syndrome) about 5%; levels fall in pregnancy. Vitamin K for the baby.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Low albumin raises the free fraction: interpret levels carefully.</p>",
  hep: "<p>Reduce dose; monitor levels.</p>",
  elderly: "<p>Falls, confusion, osteoporosis with long use.</p>",
  inter: "<p>Strong enzyme inducer (lowers contraceptives, warfarin, many ARVs, steroids); isoniazid, fluconazole, valproate and others raise phenytoin levels.</p>",
  ae: "<p>IV: hypotension, arrhythmia, <b>purple glove syndrome</b> and tissue necrosis if it leaks. Oral: ataxia, nystagmus, gum overgrowth, coarse face, hirsutism, rash (SJS), anaemia (folate), osteomalacia.</p>",
  tox: "<p>Nystagmus, then ataxia and slurred speech, then drowsiness. Target total level 10–20 mg/L.</p>",
  mon: "<p>ECG and BP during IV loading; trough level 10–20 mg/L after 1–2 weeks on oral therapy.</p>",
  src: "<p>BNF/BNFc; NICE NG217; Bhutan STG 2024 §7.7 and NEMF 2022; NEML 2025.</p>"
},
phenobarbital: {
  name: "Phenobarbital (phenobarbitone)", cls: "Barbiturate anti-seizure medicine", brands: "Gardenal, Luminal",
  bt: "Listed — 30 mg tablet (NRH to PHC) and 200 mg/mL injection, 1 mL ampoule (NRH/RRH/DH) (NEML 2025).",
  moa: "<p>Enhances GABA-A receptor activity, prolonging chloride channel opening. Cheap, long-acting (once daily) and effective; sedation and cognitive slowing are its costs.</p>",
  ind: "<p><b>First-line for neonatal seizures</b> (WHO 2011). Third-line (or second-line where nothing else is available) for status epilepticus. Long-term epilepsy treatment in low-resource settings (WHO mhGAP; Bhutan STG).</p>",
  ci: "<p>Acute porphyria; severe respiratory depression.</p>",
  adult: "<p><b>Status epilepticus: 15–20 mg/kg IV</b> (maximum about 1 g) at no more than 50–100 mg/minute — be ready to support breathing, especially after benzodiazepines.</p><p><b>Epilepsy (STG):</b> 60–180 mg once daily at night.</p>",
  child: "<p><b>Status epilepticus: 20 mg/kg IV</b> over at least 20 minutes (maximum 1 g). <b>Epilepsy:</b> 1–1.5 mg/kg twice daily, increased to 2.5–4 mg/kg once or twice daily (maximum 250 mg/day). Long-term use can affect behaviour and learning.</p>",
  neo: "<p><b>Neonatal seizures: 20 mg/kg IV</b> over 15–20 minutes; further 10 mg/kg doses up to 40 mg/kg total if seizures continue (watch breathing); maintenance 2.5–5 mg/kg once daily (WHO 2011, BNFc).</p>",
  preg: "<p>Malformation risk about 5–6%; neonatal withdrawal and vitamin K deficiency. Vitamin K for the baby.</p>", bf: "<p>Baby can become drowsy: monitor.</p>",
  renal: "<p>Reduce in severe impairment.</p>",
  hep: "<p>Reduce; avoid in hepatic encephalopathy.</p>",
  elderly: "<p>Confusion, falls: avoid for new treatment if alternatives exist.</p>",
  inter: "<p>Strong enzyme inducer (contraceptives, warfarin, ARVs, steroids); alcohol and other sedatives add to respiratory depression; valproate raises its level.</p>",
  ae: "<p>Sedation, respiratory depression (IV), hyperactivity in children, cognitive slowing, dependence; withdrawal seizures if stopped abruptly.</p>",
  src: "<p>BNF/BNFc; WHO Guidelines on neonatal seizures 2011; WHO mhGAP 2023; Bhutan STG 2024 §7.7; NEML 2025.</p>"
},
midazolam: {
  name: "Midazolam", cls: "Short-acting benzodiazepine", brands: "Mezolam, Fulsed, Buccolam",
  bt: "Listed — midazolam 1 mg/mL injection (10 mL vial), NRH/RRH and DH with an operating theatre and ICU (NEML 2025). No buccal or 5 mg/mL product listed.",
  moa: "<p>Enhances GABA-A receptor activity. Water-soluble, so it is absorbed well from muscle, cheek and nose — useful when no IV line can be placed.</p>",
  ind: "<p><b>First-line rescue for seizures over 5 minutes</b> by the buccal, intranasal or IM route (RAMPART: IM midazolam as good as IV lorazepam); infusion for refractory status epilepticus (ICU); procedural sedation.</p>",
  ci: "<p>Severe respiratory depression without airway support; acute narrow-angle glaucoma.</p>",
  adult: "<p><b>Seizure over 5 minutes:</b> 10 mg buccal or intranasal, or <b>10 mg IM</b> (over 40 kg; 5 mg if 13–40 kg); repeat once after 10 minutes if needed. <b>Refractory status (ICU):</b> 0.2 mg/kg IV bolus, then 0.05–2 mg/kg/hour with ventilation.</p><p><b>Practical point (Bhutan):</b> with the 1 mg/mL vial, 10 mg is 10 mL — too much for the cheek or nose (use at most 1 mL per nostril) or one IM site. Give IV if a line exists; otherwise split IM doses or use rectal diazepam.</p>",
  child: "<p><b>Seizure over 5 minutes:</b> buccal 0.3 mg/kg (maximum 10 mg) — by age: 3–11 months 2.5 mg, 1–4 years 5 mg, 5–9 years 7.5 mg, 10 years and over 10 mg; or IM 0.2 mg/kg (maximum 10 mg); or IV 0.1–0.15 mg/kg. Repeat once after 10 minutes if needed. Use the 1 mg/mL vial with care because of volume.</p>",
  neo: "<p>Second-line for neonatal seizures in NICU (specialist infusion).</p>",
  preg: "<p>Use for seizures when needed; in pregnancy over 20 weeks treat eclampsia with magnesium sulfate.</p>", bf: "<p>Short single doses are compatible.</p>",
  renal: "<p>Accumulates with infusions in kidney failure.</p>",
  hep: "<p>Reduce infusions in liver failure.</p>",
  elderly: "<p>More sensitive: smaller doses.</p>",
  inter: "<p>Opioids, alcohol and other sedatives add respiratory depression; clarithromycin, fluconazole, some ARVs raise levels.</p>",
  ae: "<p>Respiratory depression (bag-valve-mask ready), hypotension, sedation; paradoxical agitation.</p>",
  tox: "<p>Flumazenil reverses sedation but can provoke seizures in epilepsy — avoid in status epilepticus.</p>",
  src: "<p>BNF/BNFc; NICE NG217; Silbergleit R et al. NEJM 2012 (RAMPART); Bhutan NEML 2025.</p>"
}
});

(function () {
  const D = GUIDE.drugs, add = (id, f, html) => { if (D[id]) D[id][f] = (D[id][f] || "") + html; };
  add("diazepam", "adult", "<p><b>Seizure over 5 minutes:</b> 10 mg IV over 2–5 minutes (0.15–0.2 mg/kg, maximum 10 mg per dose), repeat once after 5–10 minutes; or 10–20 mg rectally. IM diazepam is absorbed erratically: do not use it for seizures.</p>");
  add("diazepam", "child", "<p><b>Seizure over 5 minutes (Bhutan STG):</b> 0.3 mg/kg IV very slowly or 0.5 mg/kg rectally (maximum 10 mg IV, 10–20 mg rectal), repeat once after 5–10 minutes. Not more than two benzodiazepine doses in total, including any given before arrival.</p>");
})();
