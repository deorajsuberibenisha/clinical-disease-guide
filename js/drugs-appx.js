/* Appendicitis drug cards. Reused: ampicillin, ceftriaxone, metronidazole, coamoxiclav, gentamicin, cefotaxime, piptazo, morphine, ondansetron, ringer_lactate.
   Sources: BNF / BNFc; WHO Model Formulary; Bhutan NEML 2025; product labels. */
Object.assign(GUIDE.drugs, {
paracetamol: {
  name: "Paracetamol (acetaminophen)", cls: "Simple analgesic and antipyretic", brands: "Crocin, Calpol, Perfalgan (IV)",
  bt: "Listed — tablets 500 mg, syrup 125 mg/5 mL, suppositories, and IV infusion (NEML 2025)",
  moa: "<p>Central inhibition of prostaglandin synthesis; no anti-inflammatory effect at usual doses and no effect on platelets or the stomach lining.</p>",
  ind: "<p>First-line pain relief and fever control, including before a surgical diagnosis is made: early analgesia does not hide appendicitis or delay the decision to operate.</p>",
  ci: "<p>Severe liver impairment; use the lower dose in chronic alcohol use, malnutrition and weight under 50 kg.</p>",
  adult: "<p><b>1 g every 4–6 hours</b> by mouth or IV (IV over 15 minutes), <b>maximum 4 g in 24 hours</b>. Weight under 50 kg, or risk factors for liver toxicity: <b>15 mg/kg per dose, maximum 60 mg/kg/day</b> (3 g/day).</p>",
  child: "<p><b>15 mg/kg per dose every 4–6 hours</b>, maximum 4 doses (60 mg/kg) a day and never more than 1 g per dose. <b>IV under 10 kg: 7.5–10 mg/kg per dose</b> (maximum 30 mg/kg/day). Rectal: same per-dose amount when oral is impossible.</p>",
  neo: "<p>Term neonates: 10–15 mg/kg every 6–8 hours orally (maximum 60 mg/kg/day); IV 7.5 mg/kg every 8 hours (specialist).</p>",
  preg: "<p>Analgesic of choice in pregnancy.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>CrCl under 30 mL/min: give at least 6 hours apart.</p>",
  hep: "<p>Avoid or reduce in significant liver disease.</p>",
  ae: "<p>Rare at therapeutic doses. Overdose causes delayed liver failure: treat early with acetylcysteine.</p>",
  tox: "<p>Count all sources (combination cold and flu products). Prescribe IV doses by weight in small adults; IV dosing errors (mg vs mL) have caused deaths.</p>",
  src: "<p>BNF and BNFc (paracetamol); Bhutan NEML 2025; MHRA IV paracetamol dosing advice.</p>"
}
});
