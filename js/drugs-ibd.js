/* IBD and IBS drug cards. New: mesalazine, sulfasalazine, azathioprine, budesonide_oral, infliximab, ciclosporin, dicyclomine, ispaghula.
   Reused (notes appended): prednisolone, hydrocortisone_iv, methylprednisolone, methotrexate, amitriptyline, loperamide, metronidazole, ciprofloxacin.
   Sources: BSG IBD guideline 2019 (Lamb, Gut 2019;68:s1–s106); ECCO UC 2022 (Raine, JCC 2022;16:2–17); ACG UC 2025 (Rubin) and Crohn's 2025 (Lichtenstein);
   ECCO-ESPGHAN paediatric CD 2020 (van Rheenen) and UC 2018 (Turner); BSG IBS 2021 (Vasant); ACG IBS 2021 (Lacy); ATLANTIS (Ford, Lancet 2023);
   BNF/BNFc; NEML 2025. */
Object.assign(GUIDE.drugs, {
mesalazine: {
  name: "Mesalazine (mesalamine, 5-ASA)", cls: "Aminosalicylate (anti-inflammatory acting on the colonic mucosa)", brands: "Asacol, Pentasa, Mesacol, Octasa",
  bt: "Not listed on NEML 2025 — private supply only. Evidence gap: the main treatment for mild–moderate UC is not in Bhutan's essential list.",
  moa: "<p>Acts topically on the inflamed colonic lining (inhibits prostaglandin and leukotriene production, scavenges free radicals). Oral forms are coated to release in the terminal ileum and colon; rectal forms treat the rectum and left colon directly.</p>",
  ind: "<p><b>Mild to moderate ulcerative colitis</b>: induction and maintenance. Modest or no benefit in Crohn's disease (not recommended for Crohn's by ACG 2025/BSG). Maintenance ≥2 g/day also lowers colorectal cancer risk in extensive UC (BSG).</p>",
  ci: "<p>Salicylate allergy; severe kidney impairment (eGFR under 30).</p>",
  adult: "<p><b>Induction:</b> oral 2.4–4.8 g/day (at least 2 g/day; ECCO 2022) — once daily dosing works as well as divided doses. <b>Proctitis/left-sided:</b> add mesalazine suppository 1 g daily or enema 1–4 g at night (topical ≥1 g/day). <b>Maintenance:</b> oral ≥2 g/day (2–2.4 g once daily); topical 1 g three times a week to daily for distal disease.</p>",
  child: "<p>Induction 60–80 mg/kg/day (maximum 4.8 g/day); maintenance 50 mg/kg/day (maximum 4 g/day) (ESPGHAN 2018). Rectal 25 mg/kg (maximum 1 g).</p>",
  preg: "<p>Safe; continue.</p>", bf: "<p>Compatible (rarely diarrhoea in the baby).</p>",
  renal: "<p>Rare interstitial nephritis: check creatinine before, at 3 months and then yearly.</p>",
  ae: "<p>Headache, nausea, diarrhoea (paradoxical flare in a few), rash; rarely pancreatitis, pericarditis/myocarditis, interstitial nephritis, blood dyscrasias.</p>",
  mon: "<p>Creatinine and eGFR at baseline, 3 months, then annually.</p>",
  src: "<p>ECCO UC 2022; BSG 2019; ESPGHAN UC 2018; BNF/BNFc; NEML 2025.</p>"
},
sulfasalazine: {
  name: "Sulfasalazine", cls: "Aminosalicylate (5-ASA linked to sulfapyridine)", brands: "Salazopyrin",
  bt: "Not listed on NEML 2025.",
  moa: "<p>Split by colonic bacteria into 5-ASA (active in the colon) and sulfapyridine (responsible for most side effects; also helps arthritis).</p>",
  ind: "<p>Mild–moderate UC, especially with IBD-associated peripheral arthritis; cheaper alternative to mesalazine where available.</p>",
  ci: "<p>Sulfonamide or salicylate allergy; G6PD deficiency (haemolysis); porphyria.</p>",
  adult: "<p>Induction: 1 g twice daily, increasing to 1 g four times daily (2–4 g/day); maintenance 1 g twice daily. Take with folic acid 1 mg daily (it impairs folate absorption).</p>",
  child: "<p>40–60 mg/kg/day in divided doses (maximum 4 g/day).</p>",
  preg: "<p>Compatible with folic acid 5 mg/day.</p>", bf: "<p>Caution in jaundiced, premature or G6PD-deficient babies.</p>",
  ae: "<p>Nausea, headache, rash, orange urine, reversible male infertility (oligospermia), agranulocytosis, hepatitis, Stevens–Johnson syndrome.</p>",
  mon: "<p>CBC and LFT every 2 weeks for 3 months, then periodically.</p>",
  src: "<p>BNF; BSG 2019.</p>"
},
azathioprine: {
  name: "Azathioprine", cls: "Thiopurine immunomodulator", brands: "Imuran, Azoran",
  bt: "Not listed on NEML 2025 — evidence gap for steroid-sparing IBD care.",
  moa: "<p>Converted to 6-mercaptopurine and then thioguanine nucleotides, which block lymphocyte proliferation. Takes 8–12 weeks to work, so it maintains rather than induces remission.</p>",
  ind: "<p>Maintenance of remission in steroid-dependent UC and Crohn's disease; with infliximab to reduce antibodies; postoperative Crohn's prevention. Not for induction alone (ECCO 2022).</p>",
  ci: "<p>Absent TPMT activity; pregnancy initiation (continue if established); active serious infection; with allopurinol unless dose reduced to 25% by specialist.</p>",
  adult: "<p><b>2–2.5 mg/kg once daily</b> with normal TPMT (BSG 2019); halve with intermediate TPMT; avoid if TPMT absent. Mercaptopurine alternative 1–1.25 mg/kg daily.</p>",
  child: "<p>2–2.5 mg/kg once daily (specialist); EBV serology before starting in boys (lymphoma risk with primary EBV).</p>",
  preg: "<p>Continue if already established (benefit of remission outweighs risk); do not start de novo in pregnancy without specialist advice.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Reduce dose in severe impairment.</p>", hep: "<p>Hepatotoxicity: monitor LFT.</p>",
  elderly: "<p>Avoid starting over 65 (ECCO: lymphoma and skin cancer risk).</p>",
  inter: "<p><b>Allopurinol and febuxostat</b> (fatal myelosuppression unless dose cut to 25%); warfarin effect reduced; co-trimoxazole increases myelotoxicity.</p>",
  ae: "<p>Nausea and flu-like illness early, leucopenia, hepatitis, pancreatitis (week 2–6), infections, lymphoma and non-melanoma skin cancer with long use.</p>",
  mon: "<p>TPMT before starting; CBC and LFT weekly for 4 weeks, then every 2–4 weeks for 3 months, then every 3 months.</p>",
  src: "<p>BSG 2019; ECCO UC 2022; BNF.</p>"
},
budesonide_oral: {
  name: "Budesonide, oral (controlled-ileal-release or MMX)", cls: "Locally acting corticosteroid", brands: "Entocort, Budenofalk, Cortiment (MMX)",
  bt: "Not listed on NEML 2025 (only inhaled budesonide combinations).",
  moa: "<p>Released in the terminal ileum and right colon (or throughout the colon for MMX) and about 90% removed on first pass through the liver, so systemic steroid effects are much smaller than prednisolone.</p>",
  ind: "<p>Mild–moderate ileocaecal Crohn's disease (induction); MMX formulation for mild–moderate UC; microscopic colitis. Not for maintenance (ACG 2025).</p>",
  ci: "<p>Severe disease (use prednisolone); cirrhosis (loses first-pass protection).</p>",
  adult: "<p><b>9 mg once daily for 8 weeks</b>, then taper (BSG 2019). UC MMX: 9 mg daily for 8 weeks.</p>",
  child: "<p>Over 8 years with ileocaecal Crohn's: 9 mg daily (specialist).</p>",
  preg: "<p>Acceptable.</p>", bf: "<p>Compatible.</p>",
  inter: "<p>Strong CYP3A4 inhibitors (ketoconazole, ritonavir, clarithromycin, grapefruit) raise levels markedly.</p>",
  ae: "<p>Milder steroid effects: acne, moon face, mood change.</p>",
  src: "<p>BSG 2019; ACG Crohn's 2025; BNF.</p>"
},
infliximab: {
  name: "Infliximab", cls: "Anti-TNF monoclonal antibody (biologic)", brands: "Remicade, biosimilars (Inflectra, Remsima)",
  bt: "Not listed on NEML 2025; specialist use where obtainable (biosimilars reduce cost).",
  moa: "<p>Binds tumour necrosis factor-α, a central inflammatory signal in IBD.</p>",
  ind: "<p>Moderate–severe Crohn's disease and UC not controlled by conventional therapy; <b>rescue therapy in steroid-refractory acute severe UC</b>; fistulising perianal Crohn's disease.</p>",
  ci: "<p>Active or latent untreated TB, serious infection, untreated hepatitis B, moderate–severe heart failure, demyelinating disease, recent cancer.</p>",
  adult: "<p><b>5 mg/kg IV at weeks 0, 2 and 6</b>, then every 8 weeks; with azathioprine to reduce immunogenicity. ASUC: accelerated or higher dosing is used for severe inflammation (high CRP, low albumin) by specialists.</p>",
  child: "<p>5 mg/kg at weeks 0, 2, 6 then every 8 weeks (specialist); early use in high-risk paediatric Crohn's.</p>",
  preg: "<p>Continue in pregnancy where needed (stop around week 24–26 in quiescent disease if advised); <b>no live vaccines (BCG, rotavirus) for the baby until 12 months</b> if exposed in the third trimester.</p>", bf: "<p>Compatible.</p>",
  ae: "<p>Infusion reactions, serious infections (<b>TB reactivation</b> — critical in Bhutan), hepatitis B reactivation, lupus-like syndrome, psoriasis, lymphoma (rare).</p>",
  mon: "<p><b>Before starting:</b> TB screen (history, chest X-ray, IGRA/TST; treat latent TB first), HBsAg, anti-HBc, anti-HCV, HIV, VZV serology; update vaccines. Trough levels and antibodies if response is lost.</p>",
  src: "<p>BSG 2019; ECCO UC 2022; ACG 2025; ECCO infections guideline 2021; BNF.</p>"
},
ciclosporin: {
  name: "Ciclosporin, intravenous (cyclosporine)", cls: "Calcineurin inhibitor", brands: "Sandimmun",
  bt: "Check NEML for transplant formulations; IV use for ASUC only in specialist centres.",
  moa: "<p>Blocks T-cell activation via calcineurin; works within days.</p>",
  ind: "<p>Rescue therapy for steroid-refractory acute severe UC (alternative to infliximab), as a bridge to thiopurine maintenance.</p>",
  ci: "<p>Low cholesterol (under 3 mmol/L) or low magnesium (seizure risk), uncontrolled hypertension, renal impairment, active infection.</p>",
  adult: "<p><b>2 mg/kg/day IV</b> by continuous infusion, target trough 150–250 ng/mL; responders switch to oral at twice the IV dose in two divided doses (trough 100–200 ng/mL) for 3–6 months with a thiopurine (BSG 2019). PCP prophylaxis with co-trimoxazole during triple immunosuppression.</p>",
  ae: "<p>Nephrotoxicity, hypertension, seizures, tremor, hypomagnesaemia, infections, hirsutism, gum hypertrophy.</p>",
  mon: "<p>Levels, BP, creatinine, magnesium, cholesterol, LFT.</p>",
  src: "<p>BSG 2019 (§3.12.4); BNF.</p>"
},
dicyclomine: {
  name: "Dicyclomine (dicycloverine)", cls: "Antimuscarinic antispasmodic", brands: "Cyclopam, Spasmonil, Merbentyl",
  bt: "Listed — dicyclomine 10 mg tablet (NRH to PHC) and 10 mg/mL injection (NRH/RRH/DH) (NEML 2025).",
  moa: "<p>Relaxes intestinal smooth muscle by blocking muscarinic receptors.</p>",
  ind: "<p>Abdominal pain and cramps in IBS (BSG 2021: some antispasmodics effective for global symptoms and pain; ACG 2021 did not recommend antispasmodics because evidence is weak).</p>",
  ci: "<p>Glaucoma, urinary retention, myasthenia gravis, paralytic ileus, toxic megacolon, severe UC; infants under 6 months.</p>",
  adult: "<p>10–20 mg three or four times daily before meals, as needed.</p>",
  child: "<p>Over 2 years: 5–10 mg three times daily (specialist); avoid in infants.</p>",
  preg: "<p>Use only if clearly needed.</p>", bf: "<p>Avoid.</p>",
  elderly: "<p>Anticholinergic burden: confusion, constipation, retention.</p>",
  ae: "<p>Dry mouth, blurred vision, constipation, urinary retention, dizziness, tachycardia.</p>",
  src: "<p>BSG IBS 2021; ACG IBS 2021; BNF; NEML 2025.</p>"
},
ispaghula: {
  name: "Ispaghula husk (psyllium)", cls: "Soluble fibre (bulk-forming)", brands: "Isabgol, Fybogel, Metamucil",
  bt: "Not listed on NEML 2025; widely sold as isabgol in South Asian markets.",
  moa: "<p>Soluble, poorly fermented fibre that forms a gel, normalising stool form in both constipation and diarrhoea with little gas.</p>",
  ind: "<p>First-line for IBS (soluble fibre effective for global symptoms: ACG 2021, BSG 2021), especially IBS-C; insoluble bran worsens bloating and is not recommended.</p>",
  ci: "<p>Bowel obstruction, faecal impaction, difficulty swallowing.</p>",
  adult: "<p>Start 3–4 g daily (one sachet or about 1 teaspoon) in at least 150 mL water; increase gradually to 10–20 g/day (up to 25–35 g total dietary fibre) over 3–4 weeks to limit bloating.</p>",
  child: "<p>Older children: half the adult dose with plenty of water.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Safe.</p>",
  ae: "<p>Bloating and gas early (start low); obstruction if taken without enough water.</p>",
  src: "<p>ACG IBS 2021; BSG IBS 2021.</p>"
}
});

(function () {
  const D = GUIDE.drugs, add = (id, f, html) => { if (D[id]) D[id][f] = (D[id][f] || "") + html; };
  add("prednisolone", "adult", "<p><b>Moderate–severe UC or Crohn's flare (BSG 2019):</b> 40 mg once daily, weaning over 6–8 weeks; if no response in 2 weeks, escalate. Avoid repeated or prolonged courses — plan a steroid-sparing drug. Calcium and vitamin D during the course.</p>");
  add("prednisolone", "child", "<p><b>Paediatric IBD:</b> 1–1.5 mg/kg/day (maximum 40–60 mg) for 2–4 weeks, then taper over 8–10 weeks; exclusive enteral nutrition preferred for Crohn's induction.</p>");
  add("hydrocortisone_iv", "adult", "<p><b>Acute severe ulcerative colitis (BSG 2019):</b> 100 mg IV 6-hourly (or methylprednisolone 60 mg daily), with LMWH prophylaxis; assess on day 3 for rescue therapy.</p>");
  add("methylprednisolone", "adult", "<p><b>Acute severe UC:</b> 60 mg IV once daily (BSG 2019) — less hypokalaemia than hydrocortisone. Children: 1–1.5 mg/kg/day (maximum 60 mg).</p>");
  add("methotrexate", "adult", "<p><b>Crohn's disease (specialist):</b> 25 mg once WEEKLY IM/SC for induction, then 15 mg weekly for maintenance, with folic acid 5 mg once weekly on another day. Not effective in UC. Contraindicated in pregnancy (stop 3–6 months before conception).</p>");
  add("amitriptyline", "adult", "<p><b>IBS (ATLANTIS, Lancet 2023; BSG 2021):</b> start 10 mg at night, titrate by 10 mg weekly to 30 mg (maximum 50 mg) as a gut–brain neuromodulator; benefit over 6 months; explain it is not used here as an antidepressant.</p>");
  add("loperamide", "adult", "<p><b>IBS with diarrhoea:</b> 2 mg as needed or before predictable triggers (maximum 16 mg/day); improves stool frequency, not pain. <b>Never in active UC or suspected infective colitis</b> (toxic megacolon).</p>");
  add("metronidazole", "adult", "<p><b>Perianal Crohn's disease:</b> 400 mg three times daily (with or without ciprofloxacin 500 mg twice daily) for symptom control; peripheral neuropathy with prolonged use.</p>");
})();
