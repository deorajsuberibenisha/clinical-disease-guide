/* Burns and snakebite drug cards. Reused: ringer_lactate, morphine, paracetamol, diclofenac, cloxacillin, furosemide.
   Sources: Bhutan STG 2024 §1.4.17, §1.9; National Guideline for the Management of Snakebites, Bhutan 2024; WHO snakebite guidelines (SEARO 2016); ISBI 2016/2018 burn guidelines; BNF/BNFc. */
Object.assign(GUIDE.drugs, {
asv: {
  name: "Snake antivenom (polyvalent, Indian 'big four')", cls: "Equine immunoglobulin fragments",
  bt: "Listed — polyvalent anti-snake venom (lyophilised, 10 mL vials); stocked at hospitals; covers cobra, common krait, Russell's viper, saw-scaled viper",
  moa: "<p>Neutralises circulating venom. It cannot reverse established paralysis or tissue necrosis, so give it early when indicated. Coverage of Himalayan species (pit vipers, other kraits) is limited.</p>",
  ind: "<p>Systemic envenoming: unclotted 20WBCT or coagulopathy, spontaneous bleeding, neurotoxicity (ptosis, bulbar or respiratory weakness), shock, arrhythmia, AKI, dark urine; or rapidly spreading local swelling (beyond one major joint in 24 hours, more than half the limb in 48 hours) (Bhutan guideline 2024).</p>",
  ci: "<p>No absolute contraindication when indicated; previous reaction raises risk, so prepare adrenaline.</p>",
  adult: "<p><b>10 vials</b> reconstituted, in 100–400 mL saline or 5% dextrose, IV over 60 minutes. <b>Haemotoxic:</b> repeat 20WBCT at 6 hours; if still unclotted give 5 vials over 60 minutes and repeat the cycle until the blood clots (maximum 30 vials). <b>Neurotoxic:</b> repeat 10 vials if paralysis worsens over 2 hours (maximum 20). Premedication: adrenaline 1:1000 0.25 mL SC (Bhutan guideline); no skin test.</p>",
  child: "<p><b>Same dose as adults</b> (venom load does not depend on body size); reduce diluent volume to avoid fluid overload. Adrenaline premedication 0.005 mL/kg SC.</p>",
  preg: "<p>Indicated; treat the mother.</p>",
  ae: "<p>Early anaphylactoid reactions (up to 1 in 5): stop infusion, IM adrenaline, then restart slowly if still needed. Pyrogenic reactions: paracetamol. Serum sickness 1–12 days later: antihistamine, prednisolone.</p>",
  src: "<p>National Guideline for the Management of Snakebites, Bhutan 2024; Bhutan STG 2024 §1.4.17; WHO SEARO snakebite guidelines 2016.</p>"
},
neostigmine: {
  name: "Neostigmine (with atropine)", cls: "Anticholinesterase",
  bt: "Listed — neostigmine injection (hospital use)",
  moa: "<p>Increases acetylcholine at the neuromuscular junction; reverses post-synaptic (cobra) neurotoxicity but not pre-synaptic (krait) toxicity.</p>",
  ind: "<p>Neostigmine trial in neurotoxic snakebite; reversal of non-depolarising neuromuscular block.</p>",
  ci: "<p>Bowel or urinary obstruction.</p>",
  adult: "<p>Snakebite: <b>atropine 0.3–0.6 mg IV</b>, then <b>neostigmine 0.01 mg/kg (max 0.5 mg) IV/IM every 30 minutes</b>; continue if ptosis and strength improve; no response after 3 doses suggests krait (Bhutan guideline 2024).</p>",
  child: "<p>Atropine 0.02 mg/kg (max 0.6 mg), then neostigmine 0.025–0.04 mg/kg (max 0.5 mg).</p>",
  ae: "<p>Bradycardia, salivation, bronchorrhoea, abdominal cramps (prevented by atropine).</p>",
  src: "<p>Bhutan Snakebite Guideline 2024; WHO SEARO 2016.</p>"
},
adrenaline_im: {
  name: "Adrenaline (epinephrine) 1:1000 IM — anaphylaxis", cls: "Sympathomimetic",
  bt: "Listed — 1 mg/mL ampoules (to BHU)",
  moa: "<p>Reverses vasodilatation, bronchospasm and airway swelling within minutes.</p>",
  ind: "<p>Anaphylaxis, including antivenom and drug reactions; snakebite antivenom premedication (SC, Bhutan guideline).</p>",
  adult: "<p><b>0.5 mL of 1:1000 (0.5 mg) IM</b> into the anterolateral thigh; repeat every 5 minutes if needed. Antivenom premedication: 0.25 mL SC.</p>",
  child: "<p>IM 1:1000: <b>under 12 months 0.05 mL; 1 to under 6 years 0.1 mL; 6 to under 12 years 0.2 mL; 12 years and over 0.5 mL</b> (Bhutan snakebite guideline); or 0.01 mL/kg (max 0.5 mL). Premedication 0.005 mL/kg SC.</p>",
  ae: "<p>Tachycardia, tremor, hypertension; IV bolus of 1:1000 is dangerous (arrhythmia).</p>",
  src: "<p>Bhutan Snakebite Guideline 2024; Resuscitation Council UK 2021 anaphylaxis guideline.</p>"
},
silver_sulfadiazine: {
  name: "Silver sulfadiazine 1% cream", cls: "Topical antimicrobial", bt: "Listed — 1% cream (STG burns dressing)",
  moa: "<p>Broad-spectrum topical antibacterial for burn wounds.</p>",
  ind: "<p>Deep partial and full-thickness burns (STG). Superficial burns heal well with simple non-adherent dressings.</p>",
  ci: "<p>Sulphonamide allergy, term pregnancy, newborns under 2 months (kernicterus), G6PD deficiency (caution).</p>",
  adult: "<p>Apply 3–5 mm layer with sterile gloves, cover with gauze; change daily.</p>", child: "<p>As adults (avoid under 2 months).</p>",
  ae: "<p>Transient leucopenia, grey pseudo-eschar that slows assessment of depth.</p>",
  src: "<p>Bhutan STG 2024 §1.9; ISBI 2016 burn care guidelines.</p>"
}
});
