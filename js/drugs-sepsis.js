/* Sepsis drug cards (new ids). Reused: noradrenaline, ceftriaxone, piptazo, ampicillin, gentamicin, cloxacillin, metronidazole,
   azithromycin, doxycycline, ringer_lactate. Sources: Bhutan Quick Guide to Sepsis Management, 1st ed. 2025 (MoH);
   National Antibiotic Guideline 2018; Hospital-based IMNCI 2024; NEMF 2022 / NEML 2025; SSC adult and children 2026; BNF/BNFC. */
Object.assign(GUIDE.drugs, {

meropenem: {
  name: "Meropenem", cls: "Carbapenem (beta-lactam)", brands: "Meronem, Merotrol",
  bt: "<b>Not found on NEML 2025.</b> The Bhutan Sepsis Quick Guide 2025 lists it for hospital-acquired and unknown-source sepsis at referral hospitals; supply depends on local procurement. Reserve (WHO AWaRe 'Watch/Reserve' stewardship).",
  moa: "<p>Binds penicillin-binding proteins and is stable to most beta-lactamases, including ESBLs, so it covers Gram-negative bacilli (E. coli, Klebsiella, Pseudomonas), streptococci, MSSA and anaerobes. It does not cover MRSA, Enterococcus faecium or atypicals. Overuse drives carbapenem-resistant Enterobacterales, now a WHO critical priority pathogen.</p>",
  ind: "<p>Septic shock or sepsis with risk of resistant Gram-negatives (hospital-acquired, recent broad antibiotics, known ESBL colonisation), meningitis with resistant organisms, neutropenic sepsis. De-escalate as soon as culture results allow.</p>",
  ci: "<ul><li>Anaphylaxis to beta-lactams (cross-reaction with penicillins is under 1%, but avoid after penicillin anaphylaxis unless specialist advice).</li><li>Caution: seizures (lower risk than imipenem); <b>valproate</b> (levels fall sharply).</li></ul>",
  adult: "<p><b>Sepsis (Bhutan Quick Guide 2025):</b> <b>2 g IV loading dose over 30 minutes, then 1 g every 8 hours as an extended infusion over 3 hours</b>. <b>CNS infection:</b> 2 g every 8 hours. Give the full dose in the first 24 hours whatever the kidney function.</p>",
  child: "<p>20 mg/kg (max 1 g) every 8 hours; meningitis 40 mg/kg (max 2 g) every 8 hours.</p>",
  preg: "<p>Use if needed.</p>", bf: "<p>Probably compatible.</p>",
  renal: "<p>CrCl 25–49: 1 g every 12 h; 10–24: 500 mg every 12 h; under 10: 500 mg every 24 h (double in CNS infection).</p>", hep: "<p>No change.</p>",
  elderly: "<p>Adjust for renal function after the first day.</p>",
  inter: "<p><b>Sodium valproate</b>: levels fall within 24 hours, with breakthrough seizures; avoid the combination or use another antiepileptic.</p>",
  ae: "<p>Diarrhoea, C. difficile, rash, raised liver enzymes, seizures (rare).</p>",
  mon: "<p>Review at 48–72 hours with cultures; stop or narrow.</p>",
  src: "<p>Bhutan Quick Guide to Sepsis Management 2025; SSC 2026; BNF.</p>"
},

vancomycin: {
  name: "Vancomycin (IV)", cls: "Glycopeptide antibacterial", brands: "Vancocin",
  bt: "Listed: 500 mg vial (NRH/RRH).",
  moa: "<p>Blocks cell-wall synthesis in Gram-positive bacteria, including <b>MRSA</b>, coagulase-negative staphylococci and penicillin-resistant pneumococci. Slowly bactericidal; no Gram-negative activity.</p>",
  ind: "<p>Suspected MRSA (line infection, severe skin and soft-tissue infection, necrotising fasciitis, post-operative), penicillin-resistant pneumococcal meningitis. Oral vancomycin (not absorbed) for C. difficile.</p>",
  ci: "<ul><li>Caution: kidney injury (especially with aminoglycosides or piperacillin–tazobactam), hearing loss.</li></ul>",
  adult: "<p><b>Loading dose 25–30 mg/kg</b> (actual body weight) infused over 2 hours, then <b>15 mg/kg every 12 hours</b> (every 8–12 h in necrotising infection), each 1 g over at least 1 hour. Adjust to trough level (15–20 mg/L in severe infection) or AUC where available.</p>",
  child: "<p>15 mg/kg every 6 hours (max 2 g/day initially), infused over at least 1 hour; adjust to levels.</p>",
  preg: "<p>Use if needed.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Loading dose unchanged; then extend the interval and dose by levels.</p>", hep: "<p>No change.</p>",
  elderly: "<p>Higher nephrotoxicity; check levels.</p>",
  inter: "<p>Aminoglycosides, piperacillin–tazobactam, loop diuretics, contrast: more kidney injury.</p>",
  ae: "<p>Infusion reaction ('red man' flushing) if infused fast: slow the infusion; nephrotoxicity; ototoxicity; neutropenia.</p>",
  mon: "<p>Creatinine every 1–2 days; trough before the 4th dose.</p>",
  src: "<p>Bhutan Quick Guide to Sepsis Management 2025; ASHP/IDSA vancomycin consensus 2020; BNF.</p>"
},

hydrocortisone_iv: {
  name: "Hydrocortisone (IV, sodium succinate)", cls: "Corticosteroid", brands: "Solu-Cortef, Efcorlin",
  bt: "Listed: 100 mg/mL (2 mL) vial, NRH/RRH/DH.",
  moa: "<p>In septic shock, relative adrenal insufficiency and down-regulated receptors blunt the response to catecholamines. Hydrocortisone restores vascular responsiveness and shortens the time on vasopressors (ADRENAL, APROCCHSS). Mortality benefit is uncertain.</p>",
  ind: "<p>Adult septic shock needing noradrenaline (or adrenaline) <b>≥0.25 µg/kg/min for at least 4 hours</b> (Bhutan Quick Guide, SSC 2021; SSC 2026 suggests corticosteroids in septic shock). Children: only for suspected or proven adrenal insufficiency, or catecholamine-resistant shock (SSC children 2026 suggests against in stable shock). Also anaphylaxis (adjunct), adrenal crisis, acute asthma.</p>",
  ci: "<ul><li>No absolute contraindication in shock.</li></ul>",
  adult: "<p><b>Septic shock:</b> <b>50 mg IV every 6 hours</b> (or 200 mg/24 h infusion), continued while on vasopressors and tapered or stopped once off them. Some regimens add fludrocortisone 50 µg orally daily (APROCCHSS), not listed in Bhutan.</p>",
  child: "<p><b>Catecholamine-resistant shock or adrenal insufficiency:</b> 2 mg/kg (max 100 mg) IV, then 1 mg/kg (max 50 mg) every 6 hours, specialist guidance.</p>",
  preg: "<p>Use when indicated.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No change.</p>", hep: "<p>No change.</p>",
  elderly: "<p>Hyperglycaemia, delirium.</p>",
  inter: "<p>Raises glucose (insulin needs rise); NSAIDs (GI bleeding).</p>",
  ae: "<p>Hyperglycaemia, hypernatraemia, muscle weakness, GI bleeding, secondary infection.</p>",
  mon: "<p>Glucose 4–6-hourly (insulin if ≥180 mg/dL), sodium.</p>",
  src: "<p>Bhutan Quick Guide to Sepsis Management 2025; SSC 2021 and 2026; Venkatesh B et al. ADRENAL, N Engl J Med 2018; Annane D et al. APROCCHSS, N Engl J Med 2018; NEMF 2022.</p>"
},

adrenaline_inf: {
  name: "Adrenaline (epinephrine) infusion", cls: "Catecholamine (α and β agonist)", brands: "Adrenaline 1 mg/mL",
  bt: "Listed: 1 mg/mL (1 mL) ampoule, NRH to PHC.",
  moa: "<p>β1 effects raise heart rate and contractility; α1 effects constrict vessels at higher doses. In children with septic shock it is a first-line vasoactive (with noradrenaline), especially 'cold' shock with poor perfusion. In adults it is added when MAP is inadequate on noradrenaline (± vasopressin), or used when there is cardiac dysfunction.</p>",
  ind: "<p>Fluid-refractory septic shock (children: first line with noradrenaline; adults: second or third line), cardiogenic shock, anaphylaxis (IM 0.5 mg first), cardiac arrest (1 mg IV).</p>",
  ci: "<ul><li>None in shock; correct hypovolaemia; caution with tachyarrhythmias.</li></ul>",
  adult: "<p><b>Infusion:</b> 0.05–0.3 µg/kg/min (up to 0.5–1) titrated to MAP 65 mmHg. Example: 4 mg in 50 mL (80 µg/mL): for 60 kg at 0.1 µg/kg/min = 6 µg/min = <b>4.5 mL/h</b>.</p>",
  child: "<p><b>Infusion:</b> <b>0.05–0.3 µg/kg/min</b>, titrated to perfusion and BP; can start through a peripheral line (or intraosseous) while central access is sought (SSC children 2026). Simple make-up: 0.3 mg/kg in 50 mL: 1 mL/h = 0.1 µg/kg/min.</p>",
  preg: "<p>Use when needed.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No change.</p>", hep: "<p>No change.</p>",
  elderly: "<p>Arrhythmia, myocardial ischaemia.</p>",
  inter: "<p>Non-selective beta-blockers (unopposed α effect); tricyclics.</p>",
  ae: "<p>Tachycardia, arrhythmia, <b>raised lactate and glucose</b> (β2 effect: do not mistake for worsening shock), peripheral ischaemia, extravasation injury.</p>",
  mon: "<p>Continuous ECG, BP every 5–15 minutes, perfusion, lactate, glucose; watch the cannula site.</p>",
  src: "<p>SSC children 2026; SSC adult 2026; Bhutan Quick Guide 2025; NEMF 2022.</p>"
},

vasopressin: {
  name: "Vasopressin (arginine vasopressin)", cls: "Non-catecholamine vasopressor (V1 agonist)", brands: "Pitressin, Vasostrict",
  bt: "Listed: 20 IU/mL (1 mL) ampoule, NRH/RRH/DH; NEMF lists septic shock 0.01–0.04 units/min.",
  moa: "<p>Septic shock causes relative vasopressin deficiency. Adding it constricts vessels through V1 receptors (not adrenergic), lowering the noradrenaline dose and its side effects (VASST, VANISH).</p>",
  ind: "<p>Adult septic shock when noradrenaline doses are escalating (SSC 2026 suggests adding vasopressin rather than only increasing noradrenaline; usually at 0.25–0.5 µg/kg/min).</p>",
  ci: "<ul><li>Caution: coronary or mesenteric ischaemia, peripheral vascular disease, hyponatraemia.</li></ul>",
  adult: "<p><b>Septic shock:</b> fixed dose <b>0.03 units/min</b> (range 0.01–0.04); do not titrate above 0.04. Example: 20 units in 50 mL (0.4 units/mL) at <b>4.5 mL/h</b> = 0.03 units/min.</p>",
  child: "<p>Specialist use only in catecholamine-resistant shock (0.0002–0.002 units/kg/min).</p>",
  preg: "<p>Use with caution (uterine contraction).</p>", bf: "<p>Not expected to be harmful.</p>",
  renal: "<p>No change.</p>", hep: "<p>No change.</p>",
  elderly: "<p>Ischaemia risk.</p>",
  inter: "<p>Carbamazepine and tricyclics enhance antidiuretic effect.</p>",
  ae: "<p>Digital, mesenteric and myocardial ischaemia, hyponatraemia, skin necrosis.</p>",
  mon: "<p>Peripheries, ECG, sodium, lactate.</p>",
  src: "<p>Russell JA et al. VASST, N Engl J Med 2008; Gordon AC et al. VANISH, JAMA 2016; SSC 2026; Bhutan Quick Guide 2025; NEMF 2022.</p>"
}

});
