/* PPH and neonatal jaundice drug cards. Reused: tranexamic_acid, ringer_lactate, ampicillin.
   Sources: Bhutan STG 2024 §11.11; Bhutan PPH Guideline 2016 (2nd ed.); NEMF 2025; WHO PPH recommendations 2023 (and E-MOTIVE); BNF/BNFc; AAP 2022. */
Object.assign(GUIDE.drugs, {
oxytocin: {
  name: "Oxytocin", cls: "Uterotonic (first-line for prevention and treatment of PPH)", brands: "Pitocin, Syntocinon",
  bt: "Listed — oxytocin 10 IU/mL injection (to PHC); keep refrigerated (2–8 °C)",
  moa: "<p>Contracts the uterine muscle within minutes, closing the bleeding vessels of the placental bed.</p>",
  ind: "<p>Active management of the third stage of labour; treatment of PPH from uterine atony; induction and augmentation of labour.</p>",
  ci: "<p>Hypertonic uterus, obstructed labour (before delivery).</p>",
  adult: "<p><b>Prevention (AMTSL):</b> 10 IU IM (or slow IV) after the baby is born. <b>Treatment of PPH:</b> 10 IU IM or slow IV, then infusion — STG: 20 IU in 500 mL normal saline; Bhutan PPH Guideline: 40 IU in 500 mL at 40 drops/min — continued until bleeding stops. Maximum about 60–80 IU in total.</p>",
  preg: "<p>Labour and postpartum use only.</p>",
  ae: "<p>Rapid undiluted IV bolus causes hypotension, arrhythmia and has caused cardiac arrest: give IV doses slowly. Large volumes cause water intoxication (low sodium).</p>",
  other: "<p class='warn'>Oxytocin loses potency in the heat: store in the cold chain. Heat-stable carbetocin is an alternative where available (not on NEML).</p>",
  src: "<p>Bhutan STG 2024 §11.11; Bhutan PPH Guideline 2016; WHO recommendations on uterotonics for PPH (2018, 2023).</p>"
},
methylergometrine: {
  name: "Methylergometrine (methylergonovine)", cls: "Ergot uterotonic", brands: "Methergin",
  bt: "Listed — 0.2 mg/mL injection",
  moa: "<p>Sustained tonic contraction of uterine muscle; also constricts blood vessels.</p>",
  ind: "<p>Second-line uterotonic for PPH from atony when oxytocin alone fails.</p>",
  ci: "<p><b>Hypertension, pre-eclampsia, heart disease</b>, Raynaud's, severe liver or kidney disease; retained placenta.</p>",
  adult: "<p><b>0.2 mg IM</b> (STG), repeat after 15 minutes if needed, then every 2–4 hours; maximum 5 doses (1 mg) in 24 hours. IV only slowly over at least 1 minute (risk of severe hypertension).</p>",
  preg: "<p>Postpartum only.</p>", bf: "<p>Short courses acceptable.</p>",
  ae: "<p>Nausea, vomiting, severe hypertension, stroke, coronary spasm.</p>",
  src: "<p>Bhutan STG 2024 §11.11; NEMF 2025; BNF.</p>"
},
misoprostol: {
  name: "Misoprostol", cls: "Prostaglandin E1 analogue (uterotonic)", brands: "Cytolog, Misoprost",
  bt: "Listed — 200 microgram tablet (restricted use)",
  moa: "<p>Prostaglandin that contracts the uterus; heat-stable and works without injection, so it is useful where oxytocin is unavailable.</p>",
  ind: "<p>Treatment of PPH when injectable uterotonics are unavailable or have failed; prevention of PPH at home births without a skilled attendant.</p>",
  ci: "<p>Before delivery of the baby (for PPH use).</p>",
  adult: "<p><b>Treatment:</b> 800 microgram (4 tablets) once — STG: per rectum; WHO: sublingual (faster). Bhutan PPH Guideline: 800–1000 microgram. <b>Prevention</b> (no oxytocin): 600 microgram orally after birth.</p>",
  preg: "<p>Postpartum use here; teratogenic in early pregnancy.</p>",
  ae: "<p>Shivering and fever (common, self-limiting), diarrhoea, nausea.</p>",
  src: "<p>Bhutan STG 2024 §11.11; Bhutan PPH Guideline 2016; WHO 2012/2023 PPH recommendations.</p>"
},
carboprost: {
  name: "Carboprost (15-methyl PGF2α)", cls: "Prostaglandin uterotonic", brands: "Hemabate, Prostodin",
  bt: "Listed at referral level (Bhutan PPH Guideline; check local stock)",
  moa: "<p>Powerful uterine contraction; used when oxytocin and ergometrine fail.</p>",
  ind: "<p>Refractory PPH from atony.</p>",
  ci: "<p><b>Asthma</b> (bronchospasm), active heart, lung, liver or kidney disease.</p>",
  adult: "<p><b>0.25 mg deep IM</b> (or intramyometrial by a specialist), repeated every 15 minutes, <b>maximum 2 mg (8 doses)</b>.</p>",
  ae: "<p>Diarrhoea, vomiting, fever, bronchospasm, hypertension.</p>",
  src: "<p>Bhutan PPH Guideline 2016; WHO 2012 PPH recommendations; BNF.</p>"
},
ivig: {
  name: "Intravenous immunoglobulin (IVIG)", cls: "Pooled human immunoglobulin",
  bt: "Not on NEML 2025 for neonatal use (special request at the national referral hospital)",
  moa: "<p>Blocks Fc receptors on macrophages, slowing antibody-mediated destruction of the baby's red cells.</p>",
  ind: "<p>Isoimmune haemolytic disease of the newborn (Rh or ABO) when bilirubin keeps rising despite intensive phototherapy or is within 2–3 mg/dL (34–51 µmol/L) of the exchange threshold (AAP 2022).</p>",
  child: "<p><b>Neonate: 0.5–1 g/kg IV over 2 hours</b>; may repeat in 12 hours.</p>",
  ae: "<p>Fluid overload, possible link with necrotising enterocolitis in preterm babies, infusion reactions.</p>",
  src: "<p>AAP 2022 hyperbilirubinaemia guideline; NICE CG98.</p>"
}
});
