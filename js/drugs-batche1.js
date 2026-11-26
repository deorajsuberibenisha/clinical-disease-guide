/* Batch E-1 drug cards (emergencies: cardiac arrest, choking, major trauma).
   Sources read 26 Nov 2026: AHA 2025 Part 9 (adult ALS algorithm and recommendations), AHA 2025 Part 8 (paediatric cardiac arrest algorithm),
   ERC/RCUK 2025 Adult ALS and Paediatric Life Support, Bhutan NEML 2025 (strengths), Bhutan STG 2024 §1.3.
   Reused, not redefined: adrenaline_im, adrenaline_inf, calcium_gluconate, sodium_bicarbonate, magnesium_sulfate, naloxone, atropine,
   dextrose, tranexamic_acid, ketamine, morphine, ceftriaxone, cefazolin. */
Object.assign(GUIDE.drugs, {
adrenaline_arrest: {
  name: "Adrenaline (epinephrine) IV/IO — cardiac arrest", cls: "Vasopressor (alpha- and beta-agonist)",
  bt: "Listed — adrenaline 1 mg/mL (1 mL) injection, to BHU level (NEML 2025)",
  moa: "<p>Alpha-mediated vasoconstriction raises aortic diastolic and coronary perfusion pressure during CPR. This improves return of circulation and survival to admission. The benefit for good neurological survival is smaller.</p>",
  ind: "<p>Cardiac arrest (any rhythm). In <b>asystole/PEA</b>, give it as soon as possible. In <b>VF/pulseless VT</b>, give it after the 3rd shock (ERC/RCUK 2025), or after the 2nd shock in the AHA 2025 algorithm.</p>",
  adult: "<p><b>1 mg IV/IO</b> (10 mL of 0.1 mg/mL, or 1 mL of 1 mg/mL flushed with 20 mL saline), every 3–5 minutes (about every second 2-minute cycle). High-dose adrenaline is not recommended (AHA 2025, 3: No benefit).</p>",
  child: "<p><b>10 micrograms/kg IV/IO = 0.1 mL/kg of 0.1 mg/mL (1:10,000)</b>, maximum 1 mg per dose, every 3–5 minutes. To make 0.1 mg/mL, dilute 1 mL of 1 mg/mL to 10 mL with saline. Endotracheal dosing is no longer advised.</p>",
  ae: "<p>Tachyarrhythmia and hypertension after ROSC. Never give 1 mg/mL undiluted as a fast IV push to a patient with a pulse; for anaphylaxis use IM dosing.</p>",
  src: "<p>AHA 2025 Part 9 and Part 8 algorithms; ERC 2025 ALS and PLS (Soar et al.; Djakow et al.); Bhutan NEML 2025.</p>"
},
amiodarone_iv: {
  name: "Amiodarone IV — shock-refractory VF/pVT", cls: "Class III antiarrhythmic",
  bt: "Listed — amiodarone 50 mg/mL injection (3 mL = 150 mg) and 200 mg tablet, to DH with a medical specialist (NEML 2025)",
  moa: "<p>Blocks potassium channels (prolonging repolarisation), with sodium-channel, calcium-channel and beta-blocking effects. It raises the threshold for VF.</p>",
  ind: "<p>VF or pulseless VT that persists after 3 shocks. In stable arrhythmia (AF, VT with a pulse) it is given as an infusion — see the AF page.</p>",
  adult: "<p><b>Arrest: 300 mg IV/IO bolus</b> after the 3rd shock, then <b>150 mg</b> after the 5th shock (ERC/RCUK 2025; AHA 2025: first dose 300 mg, second 150 mg). In Bhutan 300 mg = 2 ampoules (6 mL). Dilute in 5% glucose to 20 mL if time allows, or give as a bolus and flush.</p>",
  child: "<p><b>5 mg/kg IV/IO</b> (maximum 300 mg) after the 3rd shock. Repeat <b>5 mg/kg (maximum 150 mg)</b> after the 5th shock (ERC 2025). AHA 2025 allows up to 3 doses (later doses maximum 150 mg). 50 mg/mL = 0.1 mL/kg.</p>",
  ci: "<p>None in cardiac arrest. In other settings: sinus node disease or heart block without a pacemaker, iodine allergy, and thyroid disease (caution).</p>",
  ae: "<p>Hypotension and bradycardia after ROSC; phlebitis (use a large or central vein for infusions); QT prolongation. Long-term use causes thyroid, lung and liver toxicity.</p>",
  src: "<p>ERC 2025 ALS and PLS; AHA 2025 Part 9 and Part 8; Bhutan NEML 2025.</p>"
},
lidocaine_iv: {
  name: "Lidocaine (lignocaine) IV — alternative to amiodarone in VF/pVT", cls: "Class Ib antiarrhythmic",
  bt: "Listed — lignocaine 2% (20 mg/mL) injection (plain) to BHU; 2% preservative-free; 4% preservative-free (NEML 2025). Check the label: use a plain, preservative-free product IV, never the adrenaline-containing mix",
  moa: "<p>Blocks fast sodium channels in ischaemic myocardium.</p>",
  ind: "<p>Shock-refractory VF/pVT when amiodarone is not available or not chosen. AHA 2025 treats amiodarone and lidocaine as equal options (2b, B-R); ERC 2025 lists lidocaine as the alternative.</p>",
  adult: "<p><b>ERC/RCUK 2025: 100 mg IV</b> (5 mL of 2%), then a further <b>50 mg</b> after the 5th shock. <b>AHA 2025: 1–1.5 mg/kg</b>, then 0.5–0.75 mg/kg.</p>",
  child: "<p><b>1 mg/kg IV/IO</b> (ERC 2025 if amiodarone is unavailable; AHA 2025 option). 2% = 20 mg/mL, so 0.05 mL/kg.</p>",
  ci: "<p>Lidocaine with adrenaline (dental or local-anaesthetic cartridges) must never be given IV.</p>",
  ae: "<p>Toxicity (perioral numbness, confusion, seizures, arrhythmia), more likely with high cumulative doses, liver failure or heart failure.</p>",
  src: "<p>ERC/RCUK 2025 Adult ALS; AHA 2025 Part 9 algorithm; ERC 2025 PLS; Bhutan NEML 2025.</p>"
}
});
