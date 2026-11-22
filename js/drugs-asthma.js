/* Asthma drug cards.
   Bhutan sources: Standard Treatment Guidelines, 5th ed. 2024 (§3.8 adults, §12.2.2 children); NEML 2025 / NEMF 2022.
   International: GINA 2026, BTS/SIGN 158 (2019), NICE NG80, BNF/BnFC, product labels. */
Object.assign(GUIDE.drugs, {

salbutamol_reliever: {
  name: "Salbutamol (reliever / short-acting beta-2 agonist)", cls: "SABA — rapid bronchodilator", brands: "Ventolin, Asthalin, many generics",
  bt: "Listed — 100 microgram metered-dose inhaler, respirator solution 5 mg/mL, and nebuliser solution",
  moa: "<p>Stimulates beta-2 receptors in airway smooth muscle, relaxing the bronchi within minutes. It relieves symptoms and bronchospasm but does <b>not</b> treat the underlying airway inflammation — which is why it must never be used alone as the only treatment for asthma.</p>",
  ind: "<p>Quick relief of asthma symptoms; the first-line reliever in acute attacks (repeated doses via spacer). GINA 2026: use as-needed ICS–formoterol in preference to SABA-only whenever possible.</p>",
  ci: "<ul><li>Hypersensitivity (rare).</li><li>Caution in tachyarrhythmia and ischaemic heart disease.</li></ul>",
  adult: "<ul><li><b>Relief:</b> 100–200 micrograms (1–2 puffs) as needed.</li><li><b>Acute attack:</b> 4–10 puffs via spacer every 20 minutes for the first hour, or <b>nebulised 2.5–5 mg</b> (oxygen-driven) repeated as needed.</li></ul>",
  child: "<ul><li><b>Relief:</b> 100 micrograms as needed, always via a spacer (with a mask under about 3–4 years).</li><li><b>Acute attack:</b> 2–10 puffs via spacer every 20 minutes (or <b>nebulised 2.5 mg</b>; Bhutan STG: 2.5 mg of 5 mg/mL, repeat every 15–20 min up to 3 doses in moderate–severe attacks).</li></ul>",
  preg: "<p>Safe and first-line in pregnancy (inadequate control is more harmful than the drug).</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>No dose change.</p>",
  elderly: "<p>Caution with tachyarrhythmias and ischaemic heart disease.</p>",
  inter: "<p>Beta-blockers (including eye drops) blunt its effect and can precipitate bronchospasm; avoid non-selective beta-blockers.</p>",
  ae: "<p>Tremor, tachycardia, palpitations, headache, and (with high or frequent use) hypokalaemia and lactic acidosis. Over-reliance signals poor control — step up preventer therapy.</p>",
  mon: "<p>Inhaler technique and symptom control at every visit; frequency of reliever use is a marker of control.</p>",
  tox: "<p>Overdose causes tremor, tachycardia, hypokalaemia and, rarely, arrhythmia; treat supportively and replace potassium.</p>",
  src: "<p>GINA 2026; Bhutan STG 2024 §3.8/§12.2.2; BTS/SIGN 158; BNF/BnFC.</p>"
},

budesonide_formoterol: {
  name: "Budesonide–formoterol (ICS–formoterol)", cls: "Inhaled corticosteroid + fast-onset long-acting beta-2 agonist", brands: "Symbicort, Foracort",
  bt: "Check local listing — ICS–LABA combinations are available at referral level",
  moa: "<p>Combines an inhaled corticosteroid (treats the airway inflammation) with formoterol (a fast-onset, long-acting bronchodilator). Because formoterol works as quickly as salbutamol, this single inhaler can be used both as a daily preventer <b>and</b> as the reliever — the SMART/AIR approach that reduces severe exacerbations.</p>",
  ind: "<p>GINA 2026 Track 1 (preferred): low-dose ICS–formoterol as-needed (Steps 1–2) or as maintenance-and-reliever (SMART/MART) from Step 3. Also used as a fixed-dose ICS–LABA twice daily.</p>",
  ci: "<ul><li>Not for acute bronchospasm rescue in people on a different reliever unless prescribed as SMART.</li><li>Severe milk-protein allergy (some formulations).</li></ul>",
  adult: "<ul><li><b>As-needed only (AIR):</b> low-dose budesonide–formoterol 100/6 or 200/6 micrograms, 1–2 puffs when needed.</li><li><b>SMART/MART:</b> 1–2 puffs once or twice daily (maintenance) <b>plus</b> 1–2 puffs as needed for symptoms, to a maximum of about 8–12 puffs a day in exacerbations.</li></ul>",
  child: "<p>Approved from 12 years for SMART; in 6–11 years it is used as twice-daily ICS–LABA or under specialist guidance. Always give through a spacer.</p>",
  preg: "<p>ICS–LABA is safe in pregnancy; budesonide is the preferred corticosteroid.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>No dose change.</p>",
  inter: "<p>Strong CYP3A4 inhibitors (clarithromycin, azoles) can raise systemic formoterol and budesonide exposure.</p>",
  ae: "<p>Oral candidiasis and dysphonia (rinse the mouth after use), tremor, palpitations, and — at high dose — the usual ICS local effects.</p>",
  mon: "<p>Inhaler technique, exacerbation frequency, and growth in children on long-term therapy.</p>",
  src: "<p>GINA 2026 (Track 1, SMART/MART); BTS/SIGN 158; product labels.</p>"
},

beclometasone: {
  name: "Beclometasone / budesonide / fluticasone (inhaled corticosteroid, ICS)", cls: "Inhaled corticosteroid — preventer", brands: "Becotide, Pulmicort, Flixotide, Alvesco (ciclesonide)",
  bt: "Listed — beclometasone inhaler; budesonide available at referral level",
  moa: "<p>Suppresses the airway inflammation that underlies asthma — reducing swelling, mucus and hyperresponsiveness. The foundation of all asthma treatment: used regularly it prevents symptoms and attacks, and reduces the risk of severe exacerbations and death.</p>",
  ind: "<p>Preventer therapy at every GINA step (as daily ICS, or within ICS–formoterol combinations).</p>",
  ci: "<p>None significant (rinsing the mouth prevents thrush).</p>",
  adult: "<p>Start at the <b>low dose</b> for the chosen drug and step up or down by control. Daily low/medium/high doses: <b>beclometasone</b> 200–500 / &gt;500–1000 / &gt;1000 micrograms; <b>budesonide</b> 200–400 / &gt;400–800 / &gt;800; <b>fluticasone</b> 100–250 / &gt;250–500 / &gt;500; <b>ciclesonide</b> 80–160 / &gt;160–320 / &gt;320.</p>",
  child: "<p><b>Low dose</b> (children): beclometasone 100–200, budesonide 100–200, or fluticasone 50–100 micrograms/day, via spacer. Titrate by control; check growth at each review.</p>",
  preg: "<p>Safe; budesonide has the most pregnancy data. Inadequately controlled asthma harms the baby more than ICS.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>No dose change.</p>",
  inter: "<p>Few at inhaled doses; high doses with strong CYP3A4 inhibitors can raise systemic exposure.</p>",
  ae: "<p>Oral candidiasis and dysphonia (rinse the mouth), and with long-term high dose possible adrenal suppression, skin thinning and growth slowing in children.</p>",
  mon: "<p>Symptom control, exacerbations, inhaler technique, and (children) growth.</p>",
  src: "<p>GINA 2026 (ICS dose table); BTS/SIGN 158; BNF/BnFC.</p>"
},

ipratropium: {
  name: "Ipratropium bromide", cls: "Short-acting muscarinic antagonist (SAMA)", brands: "Atrovent, Ipravent",
  bt: "Listed — nebuliser solution and metered-dose inhaler (check local availability)",
  moa: "<p>Blocks muscarinic receptors, relaxing airway smooth muscle by a different pathway from salbutamol. In acute severe asthma it adds bronchodilation when combined with a beta-2 agonist.</p>",
  ind: "<p>Add-on bronchodilator in moderate-to-severe acute asthma (first 1–2 hours, in the emergency department).</p>",
  ci: "<p>Hypersensitivity to atropine-like drugs; caution in glaucoma and prostatic obstruction.</p>",
  adult: "<ul><li><b>Inhaler:</b> 4–8 puffs (20 micrograms each) repeated in the first hour of a severe attack.</li><li><b>Nebulised:</b> 0.25–0.5 mg, repeated with salbutamol.</li></ul>",
  child: "<p><b>Nebulised 0.25 mg</b> (or 4–8 puffs via spacer) with salbutamol, in severe attacks, repeated as needed in the first hour.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>No dose change.</p>",
  ae: "<p>Dry mouth, and (rarely) angle-closure glaucoma or urinary retention in the predisposed.</p>",
  mon: "<p>Response to treatment; stop at discharge (no benefit beyond the first 1–2 hours).</p>",
  src: "<p>GINA 2026 (acute asthma); BTS/SIGN 158; BNF/BnFC.</p>"
},

prednisolone: {
  name: "Prednisolone (oral corticosteroid)", cls: "Systemic glucocorticoid", brands: "Wysolone, Omnacortil",
  bt: "Listed — 5 mg / 10 mg tablets",
  moa: "<p>Suppresses the airway inflammation of an asthma flare over hours. In an acute attack it reduces relapse and the need for admission; it does not act in minutes, so give it early.</p>",
  ind: "<p>Acute asthma attacks (moderate, severe and life-threatening); also short courses for uncontrolled flares in primary care.</p>",
  ci: "<p>Uncontrolled systemic infection beyond the indication; use with caution in diabetes (hyperglycaemia) and peptic ulcer.</p>",
  adult: "<p><b>40–50 mg once daily for 5–7 days</b> (no need to taper after a short course). Give within the first hour of the attack.</p>",
  child: "<p><b>1–2 mg/kg once daily (maximum 40 mg) for 3–5 days</b>. Bhutan STG also uses dexamethasone 0.6 mg/kg IM as a single dose where oral is not possible.</p>",
  preg: "<p>Safe in acute asthma (the risk of hypoxia outweighs steroid concerns); monitor glucose.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>No dose change.</p>",
  inter: "<p>NSAIDs (gastric irritation); watch glucose in diabetes.</p>",
  ae: "<p>Short courses: hyperglycaemia, mood change, dyspepsia, insomnia. Long courses add adrenal suppression, osteoporosis and weight gain — hence short courses only.</p>",
  mon: "<p>Peak flow and symptoms; glucose if diabetic.</p>",
  src: "<p>GINA 2026; Bhutan STG 2024 §3.8/§12.2.2; BTS/SIGN 158; BNF/BnFC.</p>"
},

montelukast: {
  name: "Montelukast", cls: "Leukotriene receptor antagonist (LTRA)", brands: "Singulair, Montair",
  bt: "Listed — 4 mg, 5 mg and 10 mg tablets",
  moa: "<p>Blocks leukotriene receptors, reducing bronchoconstriction, mucus and airway inflammation. Useful in allergic and exercise-induced asthma, and an oral alternative for people who cannot manage inhalers.</p>",
  ind: "<p>Add-on preventer when ICS alone is insufficient; an alternative first preventer in children; exercise-induced and aspirin-exacerbated asthma.</p>",
  ci: "<p>Hypersensitivity; caution with neuropsychiatric effects.</p>",
  adult: "<p><b>10 mg once daily</b> in the evening.</p>",
  child: "<p><b>4 mg</b> once daily (2–5 years); <b>5 mg</b> (6–14 years); <b>10 mg</b> (15 years and over).</p>",
  preg: "<p>Usable when clearly indicated (ICS is preferred).</p>", bf: "<p>Compatible (small amounts in milk).</p>",
  renal: "<p>No dose change.</p>", hep: "<p>Caution in severe liver disease.</p>",
  inter: "<p>Few; enzyme inducers (rifampicin) can lower levels.</p>",
  ae: "<p>Headache, abdominal pain, and rare neuropsychiatric effects (sleep disturbance, mood change — advise families to report these).</p>",
  mon: "<p>Symptom control; mood/sleep in children.</p>",
  src: "<p>GINA 2026; BTS/SIGN 158; BNF/BnFC.</p>"
},

magnesium_sulfate: {
  name: "Magnesium sulfate (IV, acute asthma)", cls: "Bronchodilator adjunct", brands: "MgSO₄ 50%",
  bt: "Listed — 50% injection",
  moa: "<p>Relaxes airway smooth muscle (by blocking calcium entry) and adds bronchodilation when inhaled therapy is not enough in a severe or life-threatening attack.</p>",
  ind: "<p>Severe or life-threatening acute asthma not responding to initial inhaled bronchodilators and steroids (GINA 2026: reserve for non-responders with persistent hypoxaemia).</p>",
  ci: "<p>Significant renal impairment (accumulation); myasthenia gravis; heart block.</p>",
  adult: "<p><b>2 g IV over 20 minutes</b> (as a single dose), in severe or life-threatening attacks.</p>",
  child: "<p><b>25–50 mg/kg IV over 20 minutes (maximum 2 g)</b>, under specialist direction.</p>",
  preg: "<p>Safe and used in severe asthma (also used in eclampsia).</p>", bf: "<p>Compatible.</p>",
  renal: "<p class='warn'>Renally cleared — reduce the dose and monitor in kidney impairment; watch for magnesium toxicity.</p>",
  ae: "<p>Flushing, hypotension, and (at high levels) loss of deep-tendon reflexes, respiratory depression and arrhythmia.</p>",
  mon: "<p>BP, heart rate, respiratory rate and reflexes during the infusion.</p>",
  tox: "<p>Toxicity (areflexia, respiratory depression, hypotension) at high serum magnesium; treat with IV calcium gluconate and supportive care.</p>",
  src: "<p>GINA 2026; BTS/SIGN 158; BNF/BnFC.</p>"
}
});
