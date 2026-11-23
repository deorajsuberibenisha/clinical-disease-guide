/* Batch J drug cards: rabies, poisoning, anaphylaxis.
   New: rabies_vaccine, erig, atropine, pralidoxime, acetylcysteine, activated_charcoal, promethazine, cetirizine.
   Reused (not redefined): adrenaline_im, adrenaline_inf, salbutamol, hydrocortisone_iv, glucagon, diazepam, coamoxiclav, paracetamol.
   Sources: Bhutan STG 2024 §1.4, §1.4.18, §8.5.9; National Guidelines for Management of Rabies, Bhutan 2023 (rev. 2024);
   WHO rabies position paper 2018; Eddleston, Lancet 2008; Chiew, MJA 2020; Bateman (SNAP), Lancet 2014; RCUK 2021; WAO 2020;
   Bhutan NEMF 2022 and NEML 2025; BNF/BNFc. */
Object.assign(GUIDE.drugs, {
rabies_vaccine: {
  name: "Rabies vaccine (purified Vero-cell, PVRV)", cls: "Inactivated cell-culture vaccine",
  bt: "Listed — PVRV 0.5 mL vial, NRH/RRH/DH/PHC (NEML 2025: 'for intradermal use'). Free under the national rabies programme.",
  moa: "<p>Induces neutralising antibody within 7–14 days. Until then, wound-infiltrated immunoglobulin provides protection in category III exposures.</p>",
  ind: "<p>Post-exposure prophylaxis (PEP) for WHO category II and III exposures; pre-exposure prophylaxis (PrEP) for high-risk workers.</p>",
  ci: "<p><b>None for PEP</b>: rabies is fatal, so pregnancy, infancy, illness or a previous mild reaction never justify withholding it.</p>",
  adult: "<p><b>PEP, intradermal (Bhutan, WHO 2018 IPC 1-week regimen):</b> 0.1 mL at <b>2 sites</b> (both deltoids) on <b>days 0, 3 and 7</b>.</p><p><b>IM (only if ID technique is impossible):</b> 0.5 mL (one vial) on days 0, 3, 7 and between day 14 and 28.</p><p><b>Previously vaccinated</b> (full PrEP or PEP, or at least 2 doses): 0.1 mL ID at 1 site (or 0.5 mL IM) on days 0 and 3; no immunoglobulin.</p><p><b>PrEP:</b> 0.1 mL ID at 2 sites on days 0 and 7.</p>",
  child: "<p><b>Same dose as adults</b> regardless of age or weight. Deltoid; anterolateral thigh under 2 years. Never the buttock.</p>",
  preg: "<p>Safe; give whenever indicated.</p>", bf: "<p>Safe.</p>",
  other: "<p>A raised bleb (peau d'orange) shows a good ID injection; if the dose leaks or goes subcutaneous, repeat that site. A delayed dose: resume the schedule, do not restart.</p>",
  ae: "<p>Local pain and redness, mild fever; anaphylaxis is rare (observe 15–20 minutes).</p>",
  src: "<p>National Guidelines for Management of Rabies, Bhutan 2023 (rev. 2024) §5; WHO rabies position paper, Wkly Epidemiol Rec 2018;93:201–220; NEMF 2022.</p>"
},
erig: {
  name: "Rabies immunoglobulin (equine, ERIG)", cls: "Passive immunisation",
  bt: "Listed — ERIG 300 IU/mL, 5 mL vial, NRH/RRH/DH (NEML 2025). Human RIG (HRIG) is not listed.",
  moa: "<p>Neutralises virus in the wound before vaccine-induced antibody appears.</p>",
  ind: "<p>All <b>category III</b> exposures; category II exposures in immunocompromised people. Not needed in previously vaccinated people.</p>",
  ci: "<p>No absolute contraindication; no skin test is needed (WHO 2018, Bhutan 2024).</p>",
  adult: "<p><b>40 IU/kg</b> (HRIG 20 IU/kg); NEMF maximum 3000 IU. Infiltrate as much as anatomically possible <b>into and around every wound</b>; WHO 2018 no longer advises injecting the rest IM far away (NEMF still allows it). Dilute with saline if wounds are many and the volume is small.</p><p>Give once, with the first vaccine dose, or up to day 7 after it; not after day 7.</p>",
  child: "<p>Same 40 IU/kg; dilution often needed for multiple bites in small children.</p>",
  preg: "<p>Safe; give when indicated.</p>",
  other: "<p>Example: 30 kg child × 40 IU/kg = 1200 IU = <b>4 mL</b> of 300 IU/mL.</p>",
  ae: "<p>Anaphylaxis (rare, under 1 in 40,000 with modern purified products), serum sickness after 7–10 days. Have adrenaline ready.</p>",
  src: "<p>Bhutan Rabies Guideline 2024 §5.3; WHO 2018; NEMF 2022.</p>"
},
atropine: {
  name: "Atropine sulphate", cls: "Antimuscarinic",
  bt: "Listed — atropine 0.6 mg/mL, 1 mL ampoule, NRH/RRH/DH/PHC (NEML 2025).",
  moa: "<p>Blocks muscarinic receptors: dries secretions, reverses bronchorrhoea, bronchospasm and bradycardia. It does not reverse nicotinic weakness.</p>",
  ind: "<p>Organophosphate and carbamate poisoning (cholinergic toxidrome); symptomatic bradycardia; premedication before neostigmine.</p>",
  ci: "<p>None in life-threatening cholinergic poisoning.</p>",
  adult: "<p><b>Organophosphate:</b> Bhutan STG: 2–5 mg IV, repeat every 5 minutes until the chest is clear. Eddleston 2008: 1–3 mg IV, <b>double the dose every 5 minutes</b> until atropinised (clear chest, HR over 80, SBP over 80 mmHg, dry axillae, pupils no longer pinpoint); then infuse 10–20% of the total loading dose per hour.</p><p><b>Bradycardia:</b> 0.5 mg (600 microgram ampoule acceptable) IV, repeat to 3 mg.</p>",
  child: "<p><b>Organophosphate:</b> Bhutan STG 0.05 mg/kg IV every 5 minutes until secretions clear; BNFc and Eddleston 0.02 mg/kg (minimum 0.1 mg), doubling if needed. This guide starts at 0.02–0.05 mg/kg and titrates to the chest. <b>Bradycardia:</b> 0.02 mg/kg (max 0.5 mg).</p>",
  preg: "<p>Use when indicated.</p>",
  ae: "<p>Toxicity (over-atropinisation): confusion, agitation, hyperthermia, absent bowel sounds, urinary retention. Pause the infusion, restart at 70–80% of the rate when settled.</p>",
  src: "<p>Bhutan STG 2024 §1.4.3; Eddleston M et al. Lancet 2008;371:597–607; NEMF 2022; BNFc.</p>"
},
pralidoxime: {
  name: "Pralidoxime (2-PAM)", cls: "Cholinesterase reactivator (oxime)",
  bt: "Listed — pralidoxime 25 mg/mL, 20 mL ampoule (500 mg), NRH/RRH/DH (NEML 2025).",
  moa: "<p>Reactivates acetylcholinesterase before 'ageing'; may help nicotinic weakness. Trials (Eddleston 2009) have not shown a mortality benefit, so it is an adjunct, never a substitute for atropine.</p>",
  ind: "<p>Moderate to severe organophosphate poisoning (not carbamates, where benefit is doubtful).</p>",
  ci: "<p>Not a reason to delay atropine.</p>",
  adult: "<p><b>WHO / NEMF 2022:</b> 30 mg/kg IV over 20–30 minutes, then <b>8 mg/kg/hour</b> (max 12 g/day). <b>Bhutan STG:</b> 1–2 g IV over 15–30 minutes, then 0.5–1 g/hour. For a 60 kg adult these are similar (1.8 g then 0.48 g/h).</p>",
  child: "<p>WHO/NEMF: 30 mg/kg, then 8 mg/kg/hour. STG: 20–50 mg/kg bolus, then 10–20 mg/kg/hour.</p>",
  renal: "<p>Accumulates; reduce infusion in renal failure.</p>",
  ae: "<p>Rapid injection: tachycardia, laryngospasm, muscle rigidity, transient neuromuscular block. Give slowly.</p>",
  src: "<p>Bhutan STG 2024 §1.4.3; NEMF 2022; Eddleston 2008.</p>"
},
acetylcysteine: {
  name: "Acetylcysteine (N-acetylcysteine, NAC)", cls: "Antidote (glutathione precursor)",
  bt: "Listed — acetylcysteine 200 mg/mL, 2 mL vial (400 mg), NRH/RRH/DH (NEML 2025). A 70 kg adult needs about 21 g (53 vials) for a full course: check stock.",
  moa: "<p>Replenishes glutathione, which detoxifies NAPQI, the toxic paracetamol metabolite. Almost fully protective if started within 8 hours; still useful later and in liver failure.</p>",
  ind: "<p>Paracetamol poisoning: level above the treatment line; staggered or unknown-time overdose; ingestion of 150 mg/kg or more (Bhutan STG) when a level is unavailable; any sign of liver injury.</p>",
  ci: "<p>None in paracetamol poisoning; previous reactions are not a contraindication.</p>",
  adult: "<p><b>Three-bag regimen (Bhutan STG, NEMF):</b> 150 mg/kg in 200 mL 5% dextrose over 1 hour, then 50 mg/kg in 500 mL over 4 hours, then 100 mg/kg in 500 mL (NEMF 1 L) over 16 hours (total 300 mg/kg in 21 h). Cap weight at 110 kg.</p><p><b>Two-bag / SNAP-style alternatives</b> (UK, Australia 2020): 200 mg/kg over 4 h then 100 mg/kg over 16 h, or 100 mg/kg over 2 h then 200 mg/kg over 10 h; fewer reactions, same efficacy.</p><p>Continue beyond 21 h at 6.25 mg/kg/h if ALT is rising or INR over 1.3.</p>",
  child: "<p>Same mg/kg doses; NEMF volumes: 20–39 kg: 100, 250, 500 mL; under 20 kg: 3, 7 and 14 mL/kg of 5% dextrose.</p>",
  preg: "<p>Treat exactly as in non-pregnant patients; protects the fetus too.</p>",
  ae: "<p>Non-allergic anaphylactoid reactions (flushing, urticaria, wheeze, hypotension) in up to 1 in 10 during the first bag: pause, give an antihistamine (and salbutamol), restart at a slower rate. Not true allergy.</p>",
  src: "<p>Bhutan STG 2024 §1.4.6; NEMF 2022; Chiew AL et al. MJA 2020;212:175–183; Bateman DN et al. Lancet 2014;383:697–704.</p>"
},
activated_charcoal: {
  name: "Activated charcoal", cls: "Adsorbent",
  bt: "Listed — activated charcoal powder 450 g packet, NRH/RRH/DH/PHC (NEML 2025).",
  moa: "<p>Binds many drugs in the gut. Most useful within 1 hour of ingestion.</p>",
  ind: "<p>Recent (within 1 hour, longer for slow-release drugs) ingestion of a potentially toxic amount of an adsorbable poison, in a patient with a <b>protected airway</b>. Multiple doses for carbamazepine, phenobarbital, dapsone, quinine, theophylline.</p>",
  ci: "<ul><li>Unprotected airway, drowsy or fitting patient (aspiration)</li><li>Does NOT bind: iron, lithium, alcohols (methanol, ethanol), acids, alkalis, kerosene and other hydrocarbons</li><li>Bowel obstruction or perforation</li></ul>",
  adult: "<p>50 g orally or via NG tube, mixed with water. Multiple dose: 50 g every 4 hours (or 25 g every 2 hours).</p>",
  child: "<p>1 g/kg (max 50 g).</p>",
  ae: "<p>Vomiting, aspiration pneumonitis, constipation; black stools.</p>",
  src: "<p>Bhutan STG 2024 §1.4; NEMF 2022; AACT/EAPCCT position statements.</p>"
},
promethazine: {
  name: "Promethazine", cls: "Sedating H1 antihistamine",
  bt: "Listed — promethazine 10 mg tablet and 25 mg/mL (2 mL) injection, to PHC (NEML 2025).",
  moa: "<p>Blocks H1 receptors; also anticholinergic and sedating.</p>",
  ind: "<p>Skin symptoms (itch, urticaria) after anaphylaxis has been treated with adrenaline (Bhutan STG); allergic reactions; nausea.</p>",
  ci: "<p><b>Children under 2 years</b> (fatal respiratory depression); avoid IV bolus in hypotension (worsens it).</p>",
  adult: "<p>Bhutan STG anaphylaxis: 10 mg IV/IM slowly. Allergy: 10–20 mg orally 8–12-hourly; 25–50 mg deep IM.</p>",
  child: "<p>Over 2 years only: 2–4 y 5 mg 12-hourly; 5–9 y 5–10 mg; 10–17 y 10–20 mg. A non-sedating antihistamine (cetirizine) is preferred.</p>",
  elderly: "<p>Confusion, falls, urinary retention.</p>",
  ae: "<p>Drowsiness, hypotension, tissue injury if extravasated.</p>",
  src: "<p>Bhutan STG 2024 §1.4.18; NEMF 2022; RCUK 2021.</p>"
},
naloxone: {
  name: "Naloxone", cls: "Opioid antagonist",
  bt: "Listed — naloxone injection, NRH/RRH/DH (NEML 2025). Not at PHC.",
  moa: "<p>Competitively reverses opioid effects; acts for 30–90 minutes, shorter than most opioids, so sedation can return.</p>",
  ind: "<p>Opioid toxicity with respiratory depression (slow breathing, pinpoint pupils, coma): morphine, tramadol, codeine, heroin.</p>",
  adult: "<p>0.4 mg IV (or IM), repeat every 2–3 minutes to a total of 2 mg (up to 10 mg) until breathing is adequate; in dependent users titrate 0.1–0.2 mg to avoid acute withdrawal. Infusion: two-thirds of the effective dose per hour.</p>",
  child: "<p>Respiratory arrest or depression: 0.1 mg/kg (max 2 mg) IV/IM, repeat every 2–3 minutes; partial reversal (iatrogenic): 1–4 microgram/kg titrated.</p>",
  ae: "<p>Acute withdrawal (agitation, vomiting), pulmonary oedema rarely. Observe at least 6 hours after the last dose.</p>",
  src: "<p>NEMF 2022; BNF/BNFc; Bhutan STG 2024 §1.4.4.</p>"
},
cetirizine: {
  name: "Cetirizine", cls: "Non-sedating H1 antihistamine",
  bt: "Listed — cetirizine 10 mg tablet, to PHC (NEML 2025). No syrup is listed.",
  moa: "<p>Peripheral H1 blockade with little sedation.</p>",
  ind: "<p>Urticaria and itch after anaphylaxis (RCUK 2021 prefers non-sedating antihistamines); allergic rhinitis; itch in scabies.</p>",
  adult: "<p>10 mg once daily.</p>",
  child: "<p>2–5 y 2.5 mg twice daily; 6–11 y 5 mg twice daily; 12 y and over 10 mg once daily.</p>",
  renal: "<p>Halve the dose if eGFR under 30.</p>",
  ae: "<p>Mild drowsiness, headache.</p>",
  src: "<p>NEMF 2022; RCUK 2021.</p>"
}
});

(function () {
  const D = GUIDE.drugs, add = (id, f, html) => { if (D[id]) D[id][f] = (D[id][f] || "") + html; };
  add("coamoxiclav", "adult", "<p><b>Animal bites (WHO AWaRe 2022, IDSA 2014):</b> 625 mg (500/125) three times daily for 3–5 days as prophylaxis for deep, hand, face or genital bites, crush injuries or immunocompromised patients; 5–7 days for infected bites.</p>");
  add("coamoxiclav", "child", "<p><b>Animal bites:</b> 15 mg/kg (amoxicillin component) three times daily (max 500 mg) for 3–5 days.</p>");
})();
