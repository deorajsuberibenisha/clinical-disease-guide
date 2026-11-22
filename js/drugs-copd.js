/* COPD drug cards (new ids). Reused: salbutamol_reliever, ipratropium, prednisolone, amoxicillin, doxycycline, azithromycin, coamoxiclav,
   budesonide_formoterol. Sources: Bhutan STG 2024 §3.11, §3.6, §3.9; NEMF 2022 / NEML 2025; GOLD 2025/2026; NICE NG115; BNF. */
Object.assign(GUIDE.drugs, {

tiotropium: {
  name: "Tiotropium (LAMA)", cls: "Long-acting muscarinic antagonist", brands: "Spiriva Respimat, Tiova",
  bt: "Listed: 2.5 microgram per actuation inhaler (120 actuations), NRH/RRH/DH (NEML 2025). This strength is the soft-mist type: <b>2 puffs once daily = 5 micrograms</b>.",
  moa: "<p>Blocks muscarinic (M3) receptors on airway smooth muscle for 24 hours, keeping the airways open. In COPD, airway narrowing is driven largely by vagal (cholinergic) tone, which is why a LAMA works so well. It reduces breathlessness and exacerbations (UPLIFT).</p>",
  ind: "<p>Maintenance treatment of COPD: first-line long-acting bronchodilator (alone in GOLD group A/B with few symptoms, or with a LABA in groups B and E). Add-on in severe asthma (specialist).</p>",
  ci: "<ul><li>Hypersensitivity to atropine derivatives.</li><li>Caution: narrow-angle glaucoma (keep mist away from the eyes), urinary retention/prostatic enlargement, recent MI or unstable arrhythmia.</li></ul>",
  adult: "<p><b>2 puffs (2 × 2.5 µg = 5 µg) once daily</b> at the same time each day (NEMF: 2 puffs once daily). Do not use for acute relief. Dry-powder (HandiHaler) form is 18 µg once daily where available.</p>",
  child: "<p>Not used in COPD in children; severe asthma age 6 and over: specialist only.</p>",
  preg: "<p>Limited data; use if benefit outweighs risk.</p>", bf: "<p>Probably compatible (minimal absorption).</p>",
  renal: "<p>Monitor if CrCl under 50 (renally excreted); no routine dose change.</p>", hep: "<p>No change.</p>",
  elderly: "<p>Check inhaler technique and coordination; watch urinary retention.</p>",
  inter: "<p>Other anticholinergics (ipratropium regular use: stop it when starting tiotropium).</p>",
  ae: "<p>Dry mouth (common), constipation, urinary retention, blurred vision or glaucoma if mist enters the eye.</p>",
  mon: "<p>Symptoms, exacerbations, inhaler technique at every visit.</p>",
  src: "<p>GOLD 2025/2026; Tashkin DP et al. UPLIFT, N Engl J Med 2008; NEMF 2022 / NEML 2025.</p>"
},

fluticasone_salmeterol: {
  name: "Fluticasone–salmeterol (ICS–LABA)", cls: "Inhaled corticosteroid + long-acting beta-2 agonist", brands: "Seretide, Seroflo",
  bt: "Listed: fluticasone 125 µg + salmeterol 25 µg metered-dose inhaler (NRH/RRH/DH), NEML 2025.",
  moa: "<p>Salmeterol relaxes airway smooth muscle for 12 hours; fluticasone reduces airway inflammation. In COPD the steroid component reduces exacerbations mainly in people with <b>raised blood eosinophils</b> (≥100–300 cells/µL) or coexisting asthma; it increases pneumonia risk.</p>",
  ind: "<p>COPD with frequent exacerbations and blood eosinophils ≥300/µL (or ≥100/µL with exacerbations despite dual bronchodilators, as part of triple therapy with tiotropium); asthma–COPD overlap; asthma maintenance.</p>",
  ci: "<ul><li>Untreated pulmonary TB or active systemic infection (relative).</li><li>Not as a reliever (salmeterol is slow in onset).</li></ul>",
  adult: "<p><b>2 puffs twice daily</b> of the 125/25 inhaler (= fluticasone 250 µg + salmeterol 50 µg twice daily, the usual COPD dose); NEMF allows up to 2–3 inhalations twice daily in severe cases. Use with a spacer; rinse the mouth after use.</p><p><b>Triple therapy</b> in group E with eosinophils ≥100/µL despite LABA+LAMA: tiotropium once daily + fluticasone–salmeterol twice daily.</p>",
  child: "<p>Asthma (over 5 years, NEMF): 1 puff of a low-strength product twice daily, specialist-guided. Not for COPD.</p>",
  preg: "<p>Compatible when needed (asthma control in pregnancy matters more).</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No change.</p>", hep: "<p>Fluticasone levels rise in severe liver disease; caution.</p>",
  elderly: "<p>Higher pneumonia risk; review the need for ICS if eosinophils are under 100/µL and no exacerbations.</p>",
  inter: "<p><b>Ritonavir, cobicistat, ketoconazole</b> (fluticasone Cushing's); non-selective beta-blockers.</p>",
  ae: "<p>Oral candidiasis, hoarseness, <b>pneumonia</b>, bruising, tremor, palpitations; small TB risk (consider in Bhutan).</p>",
  mon: "<p>Exacerbations, pneumonia, blood eosinophils; inhaler technique.</p>",
  src: "<p>GOLD 2025/2026; Calverley PMA et al. TORCH, N Engl J Med 2007; NEMF 2022 / NEML 2025.</p>"
}
});
