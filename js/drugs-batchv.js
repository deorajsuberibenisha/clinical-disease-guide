/* Batch V drug cards. New: nitrofurazone, nystatin, cilostazol, rivaroxaban_vasc, pentoxifylline.
   Sources: Bhutan IMNCI PHC Chart Booklet 2025; Hospital IMNCI 3rd ed 2024; STG 2024 §15.1; NEML 2025; BNF/BNFc;
   2024 ACC/AHA lower-extremity PAD guideline (Gornik); COMPASS (Anand, Lancet 2018); VOYAGER PAD (Bonaca, NEJM 2020); Cochrane reviews. */
Object.assign(GUIDE.drugs, {
nitrofurazone: {
  name: "Nitrofurazone 0.2% (NFT ointment / cream)", cls: "Topical nitrofuran antibacterial", brands: "Furacin",
  bt: "Listed — nitrofurazone 0.2% cream (500 g), NRH to PHC (NEML 2025). This is the “NFT ointment” of the Bhutan IMNCI chart booklet.",
  moa: "<p>Broad-spectrum topical antibacterial that damages bacterial DNA; active against staphylococci and many gram-negative organisms on the skin surface.</p>",
  ind: "<p>Bhutan IMNCI 2025: <b>skin pustules (10 or fewer) and umbilical infection</b> in young infants, alongside oral amoxicillin; superficial wounds and burns.</p>",
  ci: "<p>Known sensitivity. Not for deep or extensive infection, where systemic antibiotics are needed.</p>",
  adult: "<p>Apply a thin layer to the affected area once daily or as directed.</p>",
  child: "<p><b>Young infant (IMNCI):</b> caregiver washes hands, gently washes off pus and crusts with soap and water, dries the area, applies NFT three times daily, washes hands again; review in 2 days.</p>",
  neo: "<p>As above; use only on small areas of intact surrounding skin. Spreading redness of the abdominal wall or more than 10 pustules is serious bacterial infection: refer.</p>",
  ae: "<p>Contact dermatitis and sensitisation with prolonged use; stop if a rash spreads.</p>",
  src: "<p>Bhutan IMNCI PHC Chart Booklet 2025, p. 51; NEML 2025; product information.</p>"
},
nystatin: {
  name: "Nystatin", cls: "Polyene antifungal (topical/oral, not absorbed)", brands: "Mycostatin",
  bt: "Listed — nystatin 500,000 IU tablet, NRH to PHC (NEML 2025). Bhutan IMNCI paste: crush 4 tablets in 10 mL glycerin.",
  moa: "<p>Binds ergosterol in the fungal cell membrane; not absorbed from the gut, so it acts only where it touches.</p>",
  ind: "<p>Oral thrush (oral candidiasis) in infants; candida nappy dermatitis; maternal nipple thrush.</p>",
  ci: "<p>Hypersensitivity.</p>",
  adult: "<p>Oral candidiasis: 100,000 IU four times daily after food, for 7 days and 48 hours after clearance. Nipple thrush in breastfeeding mothers: apply after feeds (with treatment of the baby).</p>",
  child: "<p><b>Bhutan IMNCI:</b> nystatin paste (4 × 500,000 IU tablets crushed in 10 mL glycerin) applied to the mouth 6-hourly after feeds for 7 days; no feeding for 20 minutes after. BNFc oral suspension: 100,000 IU four times daily.</p>",
  neo: "<p>Same; check and treat the mother's nipples; sterilise or replace feeding bottles (cup feeding preferred).</p>",
  preg: "<p>Not absorbed: safe.</p>", bf: "<p>Safe.</p>",
  ae: "<p>Mild nausea or diarrhoea with high oral doses.</p>",
  src: "<p>Bhutan IMNCI PHC Chart Booklet 2025, pp. 23 and 51; BNFc; NEML 2025.</p>"
},
cilostazol: {
  name: "Cilostazol", cls: "Phosphodiesterase-3 inhibitor", brands: "Pletal, Cilodoc",
  bt: "Not listed on NEML 2025 — availability must be checked; private supply only.",
  moa: "<p>Inhibits PDE3, raising cyclic AMP in platelets and vascular smooth muscle: vasodilatation and mild antiplatelet effect. Improves walking distance in claudication by roughly 25–50% in trials.</p>",
  ind: "<p>Lifestyle-limiting intermittent claudication despite supervised exercise, smoking cessation and risk-factor control (2024 ACC/AHA: effective to improve leg symptoms).</p>",
  ci: "<ul><li><b>Heart failure of any severity</b> (boxed warning: other PDE3 inhibitors increased mortality in heart failure)</li><li>Active bleeding, recent stroke or bleeding; severe kidney (CrCl under 25) or moderate–severe liver impairment</li><li>Unstable angina, recent MI or coronary intervention within 6 months; history of serious tachyarrhythmia</li></ul>",
  adult: "<p>100 mg twice daily, 30 minutes before or 2 hours after breakfast and dinner. Halve to 50 mg twice daily with strong CYP3A4 or CYP2C19 inhibitors. Review at 3 months; stop if no benefit.</p>",
  preg: "<p>Avoid.</p>", bf: "<p>Avoid.</p>",
  renal: "<p>Avoid if CrCl under 25 mL/min.</p>", hep: "<p>Avoid in moderate or severe impairment.</p>",
  elderly: "<p>Higher risk of palpitations and falls; check for heart failure first.</p>",
  inter: "<p>Additive bleeding with aspirin, clopidogrel and anticoagulants; levels raised by clarithromycin, fluconazole, diltiazem, omeprazole.</p>",
  ae: "<p>Headache (common), diarrhoea, palpitations, tachycardia, oedema, dizziness.</p>",
  src: "<p>2024 ACC/AHA/multisociety guideline for lower-extremity PAD; BNF; FDA label; Cochrane review (Brown 2021).</p>"
},
rivaroxaban_vasc: {
  name: "Rivaroxaban 2.5 mg (vascular dose)", cls: "Direct factor Xa inhibitor — low dose with aspirin", brands: "Xarelto",
  bt: "Not listed on NEML 2025 — private supply only.",
  moa: "<p>Blocks factor Xa. At the low “vascular” dose of 2.5 mg twice daily combined with aspirin it reduces arterial thrombotic events in atherosclerotic disease, at the cost of more bleeding.</p>",
  ind: "<p>Symptomatic PAD at low bleeding risk (COMPASS), and after lower-limb revascularisation (VOYAGER PAD), to reduce major adverse cardiovascular and limb events — with aspirin 75–100 mg daily.</p>",
  ci: "<p>Active bleeding, high bleeding risk, recent haemorrhagic stroke, severe kidney impairment (CrCl under 15), liver disease with coagulopathy, pregnancy.</p>",
  adult: "<p><b>2.5 mg twice daily plus aspirin 75–100 mg once daily</b>, long term. Do not combine with clopidogrel routinely (triple therapy) without specialist advice. This is NOT the dose for atrial fibrillation or VTE.</p>",
  preg: "<p>Contraindicated.</p>", bf: "<p>Avoid.</p>",
  renal: "<p>Use with caution at CrCl 15–29; avoid under 15.</p>", hep: "<p>Avoid with coagulopathy (Child-Pugh B/C).</p>",
  elderly: "<p>Weigh bleeding risk carefully.</p>",
  inter: "<p>NSAIDs, other antiplatelets and anticoagulants (bleeding); strong CYP3A4/P-gp inhibitors (ketoconazole, ritonavir) and inducers (rifampicin, carbamazepine, phenytoin) — avoid.</p>",
  ae: "<p>Bleeding (GI, nosebleeds, bruising), anaemia.</p>",
  src: "<p>Anand SS et al., Lancet 2018 (COMPASS PAD); Bonaca MP et al., NEJM 2020 (VOYAGER PAD); 2024 ACC/AHA PAD guideline; BNF.</p>"
},
pentoxifylline: {
  name: "Pentoxifylline", cls: "Methylxanthine (haemorheological agent)", brands: "Trental",
  bt: "Listed — pentoxifylline 400 mg tablet, NRH only (NEML 2025).",
  moa: "<p>Said to improve red cell deformability and lower blood viscosity.</p>",
  ind: "<p>Historically used for intermittent claudication. <b>2024 ACC/AHA: not effective for claudication — not recommended</b>; evidence of benefit is weak (Cochrane). Other uses: alcoholic hepatitis (no longer recommended), venous ulcers (adjunct to compression).</p>",
  ci: "<p>Recent cerebral or retinal haemorrhage, acute MI, severe arrhythmia; intolerance to methylxanthines.</p>",
  adult: "<p>Venous leg ulcer (adjunct): 400 mg three times daily with food. Claudication: not recommended.</p>",
  renal: "<p>Reduce to 400 mg twice daily if CrCl under 30.</p>", hep: "<p>Reduce in severe impairment.</p>",
  inter: "<p>Increases bleeding with anticoagulants; raises theophylline levels; ciprofloxacin raises pentoxifylline levels.</p>",
  ae: "<p>Nausea, dyspepsia, dizziness, flushing, palpitations.</p>",
  src: "<p>2024 ACC/AHA PAD guideline; Cochrane review of pentoxifylline for claudication; BNF; NEML 2025.</p>"
}
});

(function () {
  const D = GUIDE.drugs, add = (id, f, html) => { if (D[id]) D[id][f] = (D[id][f] || "") + html; };
  add("amoxicillin", "neo", "<p><b>Local bacterial infection in a young infant (Bhutan IMNCI 2025):</b> 25 mg/kg per dose twice daily for 5 days (syrup 125 mg/5 mL: 2.5 mL birth–1 month or 2–3 kg; 3.5 mL 3–4 kg; 5 mL 4–5 kg). Second line: co-trimoxazole 4 mg TMP/kg twice daily (not in the first month if jaundiced).</p>");
  add("ceftriaxone", "neo", "<p><b>Neonatal conjunctivitis (Bhutan IMNCI 2025):</b> 25–50 mg/kg IM once (STG 2024: maximum 125 mg; CDC 2021: maximum 250 mg), plus azithromycin 20 mg/kg daily for 3 days to cover chlamydia. Avoid in jaundiced or preterm babies: cefotaxime 100 mg/kg IM/IV once instead.</p>");
  add("azithromycin", "child", "<p><b>Neonatal conjunctivitis (Bhutan IMNCI 2025; CDC 2021 chlamydial):</b> 20 mg/kg once daily for 3 days. Oral azithromycin is used in the chart booklet but only the IV form is on NEML 2025.</p>");
  add("tetracycline", "neo", "<p><b>Eye prophylaxis at birth (Bhutan IMNCI 2024):</b> clean each eye with a separate saline swab (inner to outer), then apply 1% tetracycline eye ointment to both eyes within the first hour.</p>");
  add("dextrose", "neo", "<p><b>Neonatal hypoglycaemia (Bhutan IMNCI 2024 / AAP 2011):</b> 2 mL/kg 10% dextrose IV over 2–5 minutes (NG tube if no IV), then continuous 10% dextrose at a glucose infusion rate of 6 mg/kg/min (≈ 86 mL/kg/day), increasing to 8 then 10 mg/kg/min if needed; recheck 30 minutes after each bolus.</p>");
})();
