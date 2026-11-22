/* Gastroenteritis / diarrhoea drug cards (new ids). Reused: cotrimoxazole, doxycycline, azithromycin, metronidazole, ceftriaxone.
   Sources: Bhutan STG 2024 §8.1.2, 8.2.1, 8.2.2, 8.5.11, 12.4.1; Hospital-based IMNCI 3rd ed. 2024 (Bhutan) Module 3 §10;
   NEMF 2022 / NEML 2025; WHO Pocket Book 2013; WHO Guideline on management of pneumonia and diarrhoea in children up to
   10 years (2024); MSF Management of a cholera epidemic; ICMR STW Acute diarrhoea 2019; IDSA 2017; ACG 2016; BNF/BNFC. */
Object.assign(GUIDE.drugs, {

ors: {
  name: "Oral rehydration salts (ORS, low-osmolarity)", cls: "Oral rehydration solution", brands: "WHO/UNICEF ORS; Electral (India)",
  bt: "Listed: low-osmolarity sachet for 1 litre (Na 75, K 20, Cl 65, citrate 10, glucose 75 mmol/L; 245 mOsm/L), NRH to PHC.",
  moa: "<p>Glucose and sodium are absorbed together by the SGLT1 co-transporter in the small bowel, and water follows. This pathway keeps working even when toxins (cholera, ETEC) make the gut secrete fluid, which is why ORS rehydrates more than 90% of patients without a drip. The low-osmolarity formula (245 mOsm/L) reduces stool output and vomiting compared with the old 311 formula.</p>",
  ind: "<p>Prevention and treatment of dehydration from diarrhoea of any cause, in all ages: Plan A (prevent), Plan B (some dehydration) and alongside IV fluids in Plan C as soon as the patient can drink.</p>",
  ci: "<ul><li>Shock or unable to drink (start IV fluids; ORS by NG tube if IV impossible).</li><li>Paralytic ileus, intractable vomiting.</li><li>Severe acute malnutrition: use ReSoMal or the SAM protocol, not standard ORS at full rate.</li></ul>",
  adult: "<p><b>Plan A (no dehydration):</b> 200–400 mL after each loose stool, plus usual fluids.</p><p><b>Plan B (some dehydration):</b> <b>75 mL/kg over 4 hours</b> (about 4–5 L for a 60 kg adult), then reassess.</p><p><b>Cholera:</b> volumes may be very large; replace ongoing stool losses volume for volume.</p><p>Mix one sachet in 1 litre of boiled, cooled water. Discard after 24 hours.</p>",
  child: "<p><b>Plan A:</b> under 2 years <b>50–100 mL</b>, 2 years and over <b>100–200 mL</b> after each loose stool (WHO).</p><p><b>Plan B:</b> <b>75 mL/kg over 4 hours</b>. By weight if age unknown: under 6 kg 200–400 mL; 6–10 kg 400–700 mL; 10–12 kg 700–900 mL; 12–19 kg 900–1400 mL.</p><p><b>Plan C:</b> once drinking, about <b>5 mL/kg/hour</b> alongside the drip. If no IV access: <b>20 mL/kg/hour for 6 hours by NG tube</b> (120 mL/kg).</p><p>Small sips from a cup or spoon; if the child vomits, wait 10 minutes, then continue more slowly. Keep breastfeeding.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Safe.</p>",
  renal: "<p>Caution in oligo-anuric renal failure (potassium); otherwise safe.</p>", hep: "<p>No change.</p>",
  elderly: "<p>Encourage actively: older people feel less thirst and dehydrate quickly.</p>",
  inter: "<p>None important.</p>",
  ae: "<p>Vomiting if given too fast; periorbital puffiness signals over-hydration (stop and reassess).</p>",
  mon: "<p>Reassess hydration after 4 hours (Plan B); urine output, stool and vomit losses.</p>",
  src: "<p>WHO Pocket Book 2013 Charts 14–15; IMNCI 2024 (Bhutan); NEMF 2022 / NEML 2025; MSF cholera guide.</p>"
},

zinc: {
  name: "Zinc sulphate (dispersible)", cls: "Micronutrient (adjunct in diarrhoea)", brands: "Zinc sulphate 20 mg dispersible; Zinconia, Z&D",
  bt: "Listed: zinc sulphate 20 mg tablet, NRH to PHC. NEMF dose: under 6 months 10 mg, 6 months–5 years 20 mg daily for 10–14 days.",
  moa: "<p>Zinc is lost in diarrhoeal stool. Replacing it helps the gut lining recover and improves immune function, shortening the episode, reducing its severity and lowering diarrhoea in the next 2–3 months.</p>",
  ind: "<p>Every child with acute watery or persistent diarrhoea (and dysentery, per Bhutan IMNCI), alongside ORS. Not routinely recommended for adults.</p>",
  ci: "<ul><li>None important; caution in acute renal failure.</li></ul>",
  adult: "<p>Not routinely used in adult diarrhoea.</p>",
  child: "<p><b>Bhutan (STG, IMNCI 2024, NEMF):</b> under 6 months <b>10 mg</b> (half tablet), 6 months and over <b>20 mg</b> once daily for <b>10–14 days</b>.</p><p><b>WHO 2024 update (children up to 10 years):</b> a lower dose of <b>5 mg daily for 10–14 days</b> was suggested (conditional, low certainty), because it causes less vomiting with no loss of effect. Bhutan has not adopted this yet; follow national guidance and note the change.</p><p>Dissolve in breast milk, ORS or clean water on a spoon; older children can chew it.</p>",
  preg: "<p>Not applicable.</p>", bf: "<p>Not applicable.</p>",
  renal: "<p>May accumulate in acute renal failure.</p>", hep: "<p>No change.</p>",
  elderly: "<p>Not applicable.</p>",
  inter: "<p>Reduces absorption of ciprofloxacin and tetracyclines: separate by 2 hours.</p>",
  ae: "<p>Vomiting (especially at 20 mg, and if given on an empty stomach), nausea, abdominal discomfort.</p>",
  mon: "<p>Complete the full course even after the diarrhoea stops.</p>",
  src: "<p>STG 2024 §12.4.1; IMNCI 2024; NEMF 2022; WHO Pocket Book 2013; WHO pneumonia and diarrhoea guideline 2024.</p>"
},

ondansetron: {
  name: "Ondansetron", cls: "5-HT₃ receptor antagonist (antiemetic)", brands: "Zofran, Emeset, Vomikind",
  bt: "Listed: 2 mg tablet and 2 mg/mL injection, NRH/RRH (injection to DH with an operating theatre). Listed indications are chemotherapy and postoperative vomiting; diarrhoea use is off-label in NEMF.",
  moa: "<p>Blocks serotonin receptors on gut vagal nerves and in the chemoreceptor trigger zone. A single dose in a vomiting child with gastroenteritis reduces vomiting and the need for a drip (Freedman 2006), and Cochrane reviews also found fewer admissions.</p>",
  ind: "<p>Persistent vomiting that prevents oral rehydration in gastroenteritis (children over 6 months and adults), postoperative and chemotherapy nausea.</p>",
  ci: "<ul><li>Congenital long QT syndrome; with apomorphine.</li><li>Caution: electrolyte disturbance, QT-prolonging drugs, bowel obstruction (masks it).</li></ul>",
  adult: "<p><b>Gastroenteritis:</b> 4–8 mg orally or IV, can repeat after 8–12 hours if needed.</p><p><b>Chemotherapy/postoperative:</b> 8 mg; see the formulary.</p>",
  child: "<p><b>Gastroenteritis (over 6 months):</b> single dose <b>0.15 mg/kg</b> orally or IV (max 8 mg). Oral by weight: 8–15 kg 2 mg; 15–30 kg 4 mg; over 30 kg 8 mg. Start ORS 15–30 minutes later.</p>",
  preg: "<p>Use if needed (small possible increase in orofacial clefts with first-trimester use in some studies; discuss).</p>", bf: "<p>Probably compatible.</p>",
  renal: "<p>No change.</p>", hep: "<p>Maximum 8 mg/day in moderate–severe liver impairment.</p>",
  elderly: "<p>Check QT risk.</p>",
  inter: "<p>Other QT-prolonging drugs (azithromycin, fluoroquinolones, antipsychotics); serotonergic drugs (rare serotonin syndrome).</p>",
  ae: "<p>Headache, constipation; may increase the number of diarrhoeal stools slightly; QT prolongation at high IV doses.</p>",
  mon: "<p>Watch for surgical causes of vomiting (bilious vomit, distension, severe pain).</p>",
  src: "<p>Freedman SB et al. N Engl J Med 2006; ICMR STW 2019; NICE CG84; NEMF 2022 / NEML 2025; BNFC.</p>"
},

ciprofloxacin: {
  name: "Ciprofloxacin", cls: "Fluoroquinolone antibacterial", brands: "Ciplox, Cifran",
  bt: "Listed: 500 mg tablet (NRH/RRH/DH) and 2 mg/mL infusion. <b>Not at PHC level</b>: there, co-trimoxazole is the listed oral option for dysentery.",
  moa: "<p>Inhibits bacterial DNA gyrase and topoisomerase IV. Active against Shigella, Salmonella, Campylobacter (resistance now common), E. coli and Vibrio. Fluoroquinolone-resistant Shigella and Campylobacter are widespread in South Asia, so watch for treatment failure at 48 hours.</p>",
  ind: "<p>First choice for <b>dysentery</b> (bloody diarrhoea) in children and adults (WHO, IMNCI, STG); travellers' diarrhoea; enteric fever where susceptible (see that chapter); cholera only if resistant to doxycycline and azithromycin.</p>",
  ci: "<ul><li>History of tendon disorders with quinolones; myasthenia gravis.</li><li>Caution: QT prolongation, seizures, G6PD deficiency, elderly (tendon rupture, aortic aneurysm).</li></ul>",
  adult: "<p><b>Dysentery:</b> Bhutan STG 2024: <b>500 mg twice daily for 7 days</b>. WHO and IDSA use <b>500 mg twice daily for 3 days</b> (5–7 days if immunocompromised).</p><p><b>Cholera (only if resistant to first-line drugs):</b> 1 g single dose.</p>",
  child: "<p><b>Dysentery:</b> <b>15 mg/kg twice daily for 3 days</b> (max 500 mg per dose) (WHO 2024, IMNCI 2024, ICMR). Reassess after 2 days; if no better, change to the second-line antibiotic. The small risk of joint problems in children is outweighed by the benefit in dysentery.</p>",
  preg: "<p>Avoid if alternatives exist (azithromycin preferred).</p>", bf: "<p>Avoid if possible.</p>",
  renal: "<p>CrCl 30–50: 250–500 mg every 12 h; under 30: every 18–24 h.</p>", hep: "<p>Caution.</p>",
  elderly: "<p>Higher risk of tendon rupture, confusion, QT prolongation.</p>",
  inter: "<p><b>Zinc, iron, calcium, antacids, milk:</b> separate by 2 hours. Theophylline and warfarin levels rise; QT-prolonging drugs.</p>",
  ae: "<p>Nausea, diarrhoea, rash, tendinitis, photosensitivity, dizziness; C. difficile.</p>",
  mon: "<p>Clinical response at 48 hours: fewer stools, less blood, less fever. Failure suggests resistance or amoebiasis.</p>",
  src: "<p>STG 2024 §8.1.2; IMNCI 2024; WHO pneumonia and diarrhoea guideline 2024; IDSA 2017; NEMF 2022 / NEML 2025.</p>"
},

ringer_lactate: {
  name: "Ringer's lactate (compound sodium lactate, Hartmann's)", cls: "Balanced crystalloid IV fluid", brands: "Ringer lactate, Hartmann's solution",
  bt: "Listed: compound sodium lactate 500 mL, NRH to PHC. Normal saline 0.9% 500 mL is also listed to PHC.",
  moa: "<p>An isotonic fluid close to plasma (Na 131, K 5, Cl 111, lactate 29 mmol/L). Lactate is metabolised to bicarbonate, helping to correct the acidosis of severe diarrhoea. It is the preferred fluid for Plan C; 5% dextrose alone does not rehydrate and must not be used.</p>",
  ind: "<p>Severe dehydration or shock from diarrhoea (Plan C), resuscitation in general.</p>",
  ci: "<ul><li>Severe acute malnutrition: different, slower regimen (see SAM chapter).</li><li>Caution: heart failure, severe hyperkalaemia, lactic acidosis with liver failure.</li></ul>",
  adult: "<p><b>Plan C (severe dehydration):</b> <b>100 mL/kg</b>: <b>30 mL/kg in 30 minutes</b> (repeat once if pulse still weak), then <b>70 mL/kg over 2½–3 hours</b>. Example 60 kg: 2 L in 30 minutes, then about 4 L over the next 3 hours (WHO, MSF).</p>",
  child: "<p><b>Plan C:</b> 100 mL/kg. <b>Under 12 months:</b> 30 mL/kg in <b>1 hour</b>, then 70 mL/kg in <b>5 hours</b>. <b>12 months–5 years:</b> 30 mL/kg in <b>30 minutes</b>, then 70 mL/kg in <b>2½ hours</b>. Repeat the first portion once if the radial pulse is still very weak. Reassess every 15–30 minutes (IMNCI 2024, WHO).</p>",
  preg: "<p>Safe.</p>", bf: "<p>Safe.</p>",
  renal: "<p>Caution in anuria (potassium).</p>", hep: "<p>Lactate clearance reduced in liver failure.</p>",
  elderly: "<p>Reassess often for overload (crackles, raised JVP).</p>",
  inter: "<p>Do not mix with ceftriaxone in the same line (calcium precipitate), or with blood.</p>",
  ae: "<p>Fluid overload, oedema.</p>",
  mon: "<p>Pulse, BP, capillary refill, consciousness, urine output, breathing (crackles) every 15–30 minutes during Plan C.</p>",
  src: "<p>IMNCI 2024; WHO Pocket Book 2013; MSF cholera guide; NEMF 2022 / NEML 2025.</p>"
},

loperamide: {
  name: "Loperamide", cls: "Opioid antimotility agent", brands: "Imodium, Eldoper",
  bt: "Not found on NEML 2025; sold over the counter in the region.",
  moa: "<p>Acts on opioid receptors in the gut wall to slow transit and increase fluid absorption, without central opioid effects at normal doses.</p>",
  ind: "<p>Symptomatic relief of acute <b>watery</b> diarrhoea in <b>adults</b> without fever or blood (for example travellers' diarrhoea), alongside fluids.</p>",
  ci: "<ul><li><b>Bloody diarrhoea, high fever</b> (risk of toxic megacolon, prolonged Shigella or STEC infection).</li><li>Suspected C. difficile; ulcerative colitis flare.</li><li><b>Children under 12 years</b> (WHO: never in children; deaths from ileus).</li></ul>",
  adult: "<p><b>4 mg</b> initially, then <b>2 mg after each loose stool</b>; maximum <b>16 mg/day</b> (8 mg/day without medical advice), for no more than 48 hours.</p>",
  child: "<p><b>Do not use in children</b> with gastroenteritis.</p>",
  preg: "<p>Avoid in the first trimester if possible.</p>", bf: "<p>Small amounts; short use acceptable.</p>",
  renal: "<p>No change.</p>", hep: "<p>Caution (accumulation).</p>",
  elderly: "<p>Caution: constipation, ileus.</p>",
  inter: "<p>P-gp and CYP3A4 inhibitors raise levels; very high doses cause QT prolongation and arrhythmia.</p>",
  ae: "<p>Constipation, abdominal cramps, ileus.</p>",
  mon: "<p>Stop if abdominal distension, fever or blood appears.</p>",
  src: "<p>IDSA 2017; ACG 2016; WHO; BNF.</p>"
}

});
