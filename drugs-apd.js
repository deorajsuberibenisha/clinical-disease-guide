/* Peptic ulcer disease, dyspepsia and H. pylori drug cards.
   Bhutan: STG 2024 §4.1.2–4.1.3, NEML 2025 (famotidine replaced ranitidine because of NDMA; clarithromycin listed for H. pylori only;
   no bismuth or oral tetracycline listed). International: Maastricht VI/Florence 2022, ACG 2024 H. pylori, ACG/CAG 2017 dyspepsia, labels.
   Reused existing cards: amoxicillin, metronidazole, levofloxacin, ppi_iv. */
Object.assign(GUIDE.drugs, {

omeprazole: {
  name: "Omeprazole (oral proton-pump inhibitor)", cls: "Proton-pump inhibitor (PPI)", brands: "Omez, Ocid; pantoprazole and esomeprazole are alternatives",
  bt: "Listed — omeprazole 20 mg capsule (down to DH); 40 mg injection (see the IV PPI card)",
  moa: "<p>Irreversibly blocks the parietal-cell proton pump, cutting acid output by about 90% for a day. It works best taken 30–60 minutes before breakfast (and before the evening meal when given twice daily), because the pumps are switched on by food.</p>",
  ind: "<p>Healing peptic ulcers and erosive oesophagitis; part of every <i>H. pylori</i> eradication regimen; preventing ulcers in people who must take NSAIDs, aspirin or anticoagulants and are at risk; functional dyspepsia (trial).</p>",
  ci: "<p>Hypersensitivity. Use the lowest effective dose for the shortest time; review long-term use at every visit.</p>",
  adult: "<ul><li><b>Duodenal ulcer:</b> 20 mg once daily for 4 weeks (Bhutan STG: 20 mg twice daily for 4–6 weeks). <b>Gastric ulcer:</b> 20–40 mg daily for 8 weeks.</li><li><b><i>H. pylori</i> eradication:</b> 20–40 mg <b>twice daily</b> for 14 days (high-dose PPI improves cure; ACG 2024).</li><li><b>NSAID ulcer prevention:</b> 20 mg once daily for as long as the NSAID continues.</li><li><b>Dyspepsia trial:</b> 20 mg once daily for 4–8 weeks, then stop or step down.</li></ul>",
  child: "<p>About 1 mg/kg/day (usually 10 mg daily for 10–20 kg, 20 mg daily over 20 kg; up to 40 mg daily in older children). Capsules can be opened and the granules mixed with a little yoghurt or juice (not chewed).</p>",
  preg: "<p>Acceptable when needed; large studies have not shown increased malformations.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change. PPIs can cause acute interstitial nephritis — think of it in unexplained AKI.</p>",
  hep: "<p>Maximum 20 mg daily in severe liver impairment.</p>",
  elderly: "<p>Long-term use is linked with <i>C. difficile</i> infection, pneumonia, fractures, low magnesium and B12 deficiency: deprescribe when no longer needed.</p>",
  inter: "<p>Reduces clopidogrel activation (prefer pantoprazole with clopidogrel); reduces absorption of iron, ketoconazole, some HIV drugs; raises methotrexate levels.</p>",
  ae: "<p>Headache, diarrhoea, abdominal pain. Long term: hypomagnesaemia, B12 deficiency, fractures, enteric infections, interstitial nephritis.</p>",
  mon: "<p>Review need every 6–12 months; magnesium if on long-term PPI with diuretics or digoxin.</p>",
  src: "<p>Bhutan STG 2024 §4.1.2–4.1.3; NEML 2025; ACG 2024 <i>H. pylori</i> guideline; ACG/CAG 2017 dyspepsia guideline; product label.</p>"
},

famotidine: {
  name: "Famotidine", cls: "H2-receptor antagonist", brands: "Famocid, Pepcid",
  bt: "Listed — famotidine 20 mg tablet (down to PHC); added in NEML 2025 as a substitute for ranitidine",
  moa: "<p>Blocks histamine H2 receptors on parietal cells, reducing acid by about 60–70%. Weaker than a PPI, with tolerance developing after a few weeks, but useful and cheap.</p>",
  ind: "<p>Mild dyspepsia or reflux; ulcer healing when a PPI is unavailable or not tolerated; night-time symptoms added to a PPI.</p>",
  ci: "<p>Hypersensitivity.</p>",
  adult: "<p><b>20 mg twice daily</b> or <b>40 mg at night</b> for 4–8 weeks (ulcer healing); 20 mg once or twice daily for reflux.</p>",
  child: "<p>About 0.5 mg/kg per dose twice daily (maximum 40 mg/day).</p>",
  preg: "<p>Acceptable.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Halve the dose (or double the interval) if creatinine clearance is under 50 mL/min; confusion can occur in older people with CKD.</p>",
  ae: "<p>Headache, dizziness, constipation; confusion in older adults with kidney impairment.</p>",
  other: "<p class='warn'><b>Ranitidine was withdrawn worldwide in 2020</b> because of contamination with NDMA (a probable carcinogen). The Bhutan STG 2024 still names ranitidine; use famotidine instead.</p>",
  src: "<p>Bhutan NEML 2025 (famotidine added as a substitute for ranitidine due to NDMA); US FDA ranitidine market withdrawal, April 2020; product label.</p>"
},

clarithromycin: {
  name: "Clarithromycin", cls: "Macrolide antibiotic", brands: "Claribid",
  bt: "Listed — 250 mg and 500 mg tablets, <b>for eradication of H. pylori only</b>",
  moa: "<p>Binds the 50S ribosomal subunit and stops bacterial protein synthesis. <i>H. pylori</i> clarithromycin resistance is the main reason triple therapy fails; it is rising worldwide.</p>",
  ind: "<p><i>H. pylori</i> eradication (Bhutan STG triple therapy). International guidelines use clarithromycin-containing regimens only where local clarithromycin resistance is known to be under 15%, or after susceptibility testing.</p>",
  ci: "<ul><li>QT prolongation, hypokalaemia.</li><li>With simvastatin or lovastatin (rhabdomyolysis), colchicine (toxicity), ergotamine.</li><li>Previous macrolide use for any reason makes resistance more likely.</li></ul>",
  adult: "<p><b>500 mg twice daily for 14 days</b> as part of combination therapy.</p>",
  child: "<p><i>H. pylori</i>: <b>only after susceptibility testing</b> (ESPGHAN/NASPGHAN 2024). Weight bands, twice daily: 15–24 kg 250 mg; 25–34 kg 500 mg morning + 250 mg evening; 35 kg and over 500 mg.</p>",
  preg: "<p>Avoid if possible, especially in the first trimester; eradication can usually wait until after pregnancy.</p>", bf: "<p>Probably compatible; prefer to defer eradication.</p>",
  renal: "<p>Halve the dose if creatinine clearance is under 30 mL/min.</p>",
  hep: "<p>Use with caution.</p>",
  inter: "<p>Strong CYP3A4 inhibitor: raises simvastatin, atorvastatin (use low dose), warfarin, colchicine, carbamazepine, tacrolimus, some calcium-channel blockers.</p>",
  ae: "<p>Metallic or bitter taste, nausea, diarrhoea, QT prolongation, hepatitis (rare).</p>",
  src: "<p>Bhutan STG 2024 §4.1.3; NEML 2025; Maastricht VI/Florence consensus 2022; ACG 2024; product label.</p>"
},

bismuth: {
  name: "Bismuth (subcitrate / subsalicylate)", cls: "Mucosal protectant and anti-<i>H. pylori</i> agent", brands: "De-Nol, Pepto-Bismol",
  bt: "Not listed — not on NEML 2025 (private or referral supply only)",
  moa: "<p>Directly toxic to <i>H. pylori</i>, coats the ulcer base, and resistance to it does not occur. It is the backbone of bismuth quadruple therapy, the preferred first-line regimen when clarithromycin resistance is high or unknown.</p>",
  ind: "<p>Bismuth quadruple therapy: PPI twice daily + bismuth + tetracycline + metronidazole for 14 days.</p>",
  ci: "<p>Severe kidney impairment; subsalicylate in children (salicylate, Reye's syndrome) and with aspirin allergy or anticoagulants.</p>",
  adult: "<p><b>Bismuth subcitrate 120 mg four times daily</b> (or tripotassium dicitratobismuthate 240 mg twice daily), or <b>bismuth subsalicylate 262–300 mg four times daily</b>, for 14 days.</p>",
  child: "<p>Specialist use only.</p>",
  preg: "<p>Avoid.</p>",
  ae: "<p><b>Black stools and black tongue</b> (harmless — warn the patient so it is not mistaken for bleeding), nausea.</p>",
  src: "<p>Maastricht VI/Florence 2022; ACG 2024; product labels.</p>"
},

tetracycline: {
  name: "Tetracycline (oral)", cls: "Tetracycline antibiotic",
  bt: "Not listed as oral — only 1% eye ointment on NEML 2025",
  moa: "<p>Blocks the bacterial 30S ribosome. <i>H. pylori</i> resistance to tetracycline is rare, which is why it is part of bismuth quadruple therapy.</p>",
  ind: "<p>Bismuth quadruple therapy for <i>H. pylori</i>.</p>",
  ci: "<p>Children under 8 years (teeth and bone), pregnancy, breastfeeding, severe kidney impairment.</p>",
  adult: "<p><b>500 mg four times daily for 14 days</b>, taken with water, upright, away from milk, antacids and iron (they block absorption).</p>",
  child: "<p>Avoid under 8 years.</p>",
  preg: "<p>Contraindicated.</p>", bf: "<p>Avoid.</p>",
  ae: "<p>Nausea, photosensitivity, oesophageal ulceration if taken lying down.</p>",
  other: "<p>Doxycycline is not an equivalent substitute in quadruple therapy (lower cure rates in most studies).</p>",
  src: "<p>Maastricht VI/Florence 2022; ACG 2024; BNF.</p>"
},

antacid: {
  name: "Antacids (aluminium hydroxide + magnesium hydroxide)", cls: "Acid neutraliser", brands: "Digene, Gelusil, Mucaine",
  bt: "Listed — antacid tablets and suspension (NEML 16.1)",
  moa: "<p>Neutralises acid already in the stomach within minutes; the effect lasts 1–3 hours. Symptom relief only — it does not heal ulcers reliably or treat <i>H. pylori</i>.</p>",
  ind: "<p>Short-term relief of dyspepsia and heartburn (Bhutan STG: 2 tablets three times a day after meals for a short time).</p>",
  ci: "<p>Severe kidney impairment (magnesium and aluminium accumulate).</p>",
  adult: "<p>1–2 tablets or 10–20 mL suspension after meals and at bedtime, as needed, for short periods.</p>",
  child: "<p>Rarely needed; use paediatric dosing from the product.</p>",
  preg: "<p>Acceptable for heartburn of pregnancy.</p>",
  renal: "<p>Avoid regular use in advanced CKD.</p>",
  inter: "<p>Binds many drugs (iron, tetracyclines, quinolones, levothyroxine, digoxin): separate by 2 hours.</p>",
  ae: "<p>Diarrhoea (magnesium) or constipation (aluminium).</p>",
  src: "<p>Bhutan STG 2024 §4.1.2–4.1.3; NEML 2025; BNF.</p>"
}
});
