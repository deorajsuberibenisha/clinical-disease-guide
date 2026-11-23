/* SAM and head injury drug/feed cards. Reused: amoxicillin, ampicillin, gentamicin, dextrose, levetiracetam, phenytoin, mannitol, tranexamic_acid, folic_acid, zinc.
   Sources: WHO Pocket Book 2013 ch.7; WHO guideline: updates on the management of SAM (2013); BNF/BNFc; Brain Trauma Foundation 4th ed. (2016). */
Object.assign(GUIDE.drugs, {
vitamin_a: {
  name: "Vitamin A (retinol)", cls: "Vitamin", bt: "Listed — vitamin A capsules 100,000 IU and 200,000 IU (national supplementation programme)",
  moa: "<p>Essential for vision, epithelial integrity and immunity; deficiency causes night blindness, xerophthalmia and blindness, and worsens measles and diarrhoea.</p>",
  ind: "<p>SAM with eye signs or recent measles, or not given in the past month; measles; xerophthalmia; routine supplementation 6–59 months.</p>",
  child: "<p><b>Under 6 months: 50,000 IU; 6–12 months: 100,000 IU; over 12 months: 200,000 IU</b> orally. In SAM give on day 1 only if eye signs, measles, or no dose in the past month (WHO 2013). Eye signs: repeat on day 2 and day 14.</p>",
  adult: "<p>Xerophthalmia: 200,000 IU on days 1, 2 and 14. Avoid high doses in pregnancy (use 10,000 IU daily or 25,000 IU weekly if needed).</p>",
  ae: "<p>Bulging fontanelle, headache, vomiting with excess doses.</p>",
  src: "<p>WHO Pocket Book 2013; WHO SAM update 2013; WHO vitamin A guidelines.</p>"
},
resomal: {
  name: "ReSoMal (rehydration solution for malnutrition)", cls: "Oral rehydration solution, low sodium, high potassium",
  bt: "Supplied as sachets where available; can be made from WHO low-osmolarity ORS with extra water, sugar and electrolyte/mineral mix",
  moa: "<p>Lower sodium and higher potassium than standard ORS, because malnourished children retain sodium and are potassium-depleted; standard ORS can cause heart failure.</p>",
  ind: "<p>Dehydration in a child with SAM who is not in shock.</p>",
  child: "<p><b>5 mL/kg every 30 minutes for 2 hours</b> (oral or NG), then <b>5–10 mL/kg/hour for up to 10 hours</b>, alternating with F-75; stop when signs of dehydration resolve. Watch pulse, breathing and liver size every 30 minutes for overload.</p>",
  src: "<p>WHO Pocket Book 2013, section 7.4.</p>"
},
f75: {
  name: "F-75 and F-100 therapeutic milks", cls: "Therapeutic feeds for SAM",
  bt: "Hospital supply for SAM units",
  moa: "<p>F-75 (75 kcal/100 mL, low protein, low sodium) stabilises metabolism without overloading the heart, liver and kidneys; F-100 (100 kcal/100 mL) is the catch-up feed.</p>",
  ind: "<p>F-75 in the stabilisation phase; F-100 or RUTF in rehabilitation.</p>",
  child: "<p><b>F-75:</b> 130 mL/kg/day (100 mL/kg/day if severe oedema) in 12 feeds (2-hourly) at first, then 8 feeds (3-hourly); NG if the child takes under 80%. <b>Transition:</b> replace with F-100 at the same volume for 2 days, then increase by 10 mL per feed until some is left (about 150–220 mL/kg/day). <b>RUTF:</b> about 150–200 kcal/kg/day.</p>",
  src: "<p>WHO Pocket Book 2013, section 7.5.</p>"
},
hypertonic_saline: {
  name: "Hypertonic saline (3%)", cls: "Osmotic therapy",
  bt: "Prepared from 0.9% saline and concentrated sodium chloride where 3% is not stocked; specialist use",
  moa: "<p>Draws water out of the brain into the blood, lowering intracranial pressure; also expands circulating volume (unlike mannitol, it does not cause diuresis and hypotension).</p>",
  ind: "<p>Raised intracranial pressure or signs of herniation in traumatic brain injury; preferred over mannitol in hypotension.</p>",
  adult: "<p>3%: 250 mL (about 3–5 mL/kg) IV over 10–20 minutes; check sodium (keep under about 155 mmol/L).</p>",
  child: "<p>3%: 3–5 mL/kg IV over 10–20 minutes; infusion 0.1–1 mL/kg/hour in PICU.</p>",
  ae: "<p>Hypernatraemia, phlebitis (use a large vein), fluid overload.</p>",
  src: "<p>Brain Trauma Foundation 4th ed. (2016); paediatric TBI guidelines (Kochanek 2019).</p>"
}
});
