/* Batch E-2 drug cards (tetanus, epistaxis, SJS/TEN). Sources read 26 Nov 2026: MSF Clinical Guidelines "Tetanus" (Aug 2022);
   CDC Clinical Guidance for Wound Management to Prevent Tetanus (Sept 2026); Bhutan NEML 2025; others per page.
   Reused, not redefined: metronidazole, diazepam, midazolam, magnesium_sulfate, baclofen, td_vaccine, tranexamic_acid, adrenaline_im,
   hydrocortisone_iv, ciclosporin. */
Object.assign(GUIDE.drugs, {
tetanus_ig: {
  name: "Tetanus immunoglobulin (human) — TIG", cls: "Hyperimmune immunoglobulin (passive immunisation)",
  bt: "Listed — anti-tetanus immunoglobulin (human) 500 IU injection vial (NEML 2025)",
  moa: "<p>Antibodies bind and neutralise tetanus toxin that is still circulating. TIG cannot reverse toxin already bound to nerve endings, so give it early.</p>",
  ind: "<p><b>Prophylaxis:</b> dirty or major wounds (puncture, soil, faeces, saliva, bites, burns, compound fractures, crush, necrotic tissue) in people with an unknown, absent or incomplete tetanus vaccination history, and in people with HIV or severe immunodeficiency whatever their history (CDC 2026). Never for clean minor wounds. <b>Treatment:</b> every case of clinical tetanus.</p>",
  adult: "<p><b>Prophylaxis: 250 IU IM</b> (CDC; MSF); MSF gives <b>500 IU</b> for wounds more than 24 hours old. <b>Treatment of tetanus: 500 IU IM single dose</b>, split into 2 separate sites (MSF 2022; CDC treatment dose 500 IU). Always give tetanus vaccine at the same time in a different limb with a different syringe.</p>",
  child: "<p>The same doses at every age, including neonates: prophylaxis 250 IU IM (500 IU if the wound is over 24 h old); treatment 500 IU IM in 2 sites (MSF 2022). Give a DTP-containing vaccine or Td as appropriate for age, at a different site.</p>",
  ci: "<p>Previous severe reaction to human immunoglobulin. IM product: never give IV.</p>",
  ae: "<p>Pain and tenderness at the injection site; rarely fever or allergic reactions.</p>",
  src: "<p>MSF Clinical Guidelines 2022; CDC wound management guidance 2026; Bhutan NEML 2025.</p>"
},
oxymetazoline: {
  name: "Oxymetazoline 0.05% nasal drops", cls: "Topical alpha-adrenergic vasoconstrictor (nasal decongestant)",
  bt: "Listed — oxymetazoline 0.05% nasal drop 5 mL and 10 mL (NEML 2025)",
  moa: "<p>Constricts nasal mucosal vessels, slowing bleeding and shrinking swollen mucosa so the bleeding point can be seen.</p>",
  ind: "<p>Epistaxis: on cotton pledgets before inspection, cautery or packing (AAO-HNS 2020 topical vasoconstrictors). Short-term relief of nasal congestion.</p>",
  adult: "<p><b>Epistaxis:</b> soak cotton wool or a pledget in 0.05% drops (with lignocaine 4% for anaesthesia), place in the bleeding nostril for 5–10 minutes. <b>Congestion:</b> 2–3 drops per nostril up to twice daily for no more than 3–5 days.</p>",
  child: "<p>Epistaxis in children: a soaked pledget can be used with care. For congestion, use the paediatric strength and age limits on the product label; avoid in infants.</p>",
  ci: "<p>Use with caution in severe hypertension, ischaemic heart disease, and with MAO inhibitors.</p>",
  ae: "<p>Stinging; rebound congestion (rhinitis medicamentosa) with use beyond a few days; rarely raised blood pressure.</p>",
  src: "<p>AAO-HNS Clinical Practice Guideline: Nosebleed 2020; Bhutan NEML 2025.</p>"
}
});
if (GUIDE.drugs.ciclosporin) GUIDE.drugs.ciclosporin.other = (GUIDE.drugs.ciclosporin.other || "") + "<p><b>SJS/TEN (specialist use):</b> 3 mg/kg/day for 10 days, then tapered over a month, was used in the open trial reported by Kumar & Das 2018; a 2025 meta-analysis found ciclosporin associated with lower mortality than IVIG, but no systemic therapy has clearly beaten supportive care. Check kidney function and blood pressure.</p>";
if (GUIDE.drugs.metronidazole) GUIDE.drugs.metronidazole.other = (GUIDE.drugs.metronidazole.other || "") + "<p><b>Tetanus (MSF 2022):</b> IV infusion for 7 days — adults 500 mg every 8 h; children 1 month and over 10 mg/kg every 8 h (max 1500 mg a day); neonates 0–7 days 15 mg/kg on day 1 then, after 24 h, 7.5 mg/kg every 12 h (same for 8 days–1 month under 2 kg); 8 days–1 month 2 kg or more: 15 mg/kg every 12 h. Infuse over 30 min (60 min in neonates). NEML: 5 mg/mL IV solution.</p>";
if (GUIDE.drugs.diazepam) GUIDE.drugs.diazepam.other = (GUIDE.drugs.diazepam.other || "") + "<p><b>Tetanus spasms (MSF 2022):</b> 0.1–0.3 mg/kg slow IV (3–5 min) every 1–4 h by response; if spasms persist despite hourly doses, continuous infusion 0.1–0.5 mg/kg/h (up to 0.8 mg/kg/h), starting at 0.1 and increasing by 0.1 mg/kg/h — only while respiratory rate stays at or above: 30 (under 1 year), 25 (1–4 y), 20 (5–12 y), 14 (over 12 y), 12 (adults). Dedicated vein; never stop abruptly; wean slowly via NG tube.</p>";
