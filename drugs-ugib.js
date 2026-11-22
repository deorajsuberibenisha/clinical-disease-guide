/* Upper GI bleeding drug cards (new ids). Reused: ppi_iv, octreotide, terlipressin, ceftriaxone, carvedilol, propranolol, vitamin_k.
   Sources: Bhutan STG 2024 §4.1.5; NEMF 2022 / NEML 2025; ACG 2021; ESGE 2021; HALT-IT (Lancet 2020); CRASH-2; WOMAN; BNF. */
Object.assign(GUIDE.drugs, {

tranexamic_acid: {
  name: "Tranexamic acid", cls: "Antifibrinolytic", brands: "Cyklokapron, Pause, Trapic",
  bt: "Listed: 100 mg/mL (5 mL) injection to PHC; 250 mg tablet to DH.",
  moa: "<p>Blocks the binding of plasminogen to fibrin, so clots are not broken down. It saves lives in trauma (CRASH-2) and postpartum haemorrhage (WOMAN) when given within 3 hours. In gastrointestinal bleeding, the HALT-IT trial (12,009 patients) found <b>no reduction in death</b> and more venous thrombosis and seizures with high-dose IV tranexamic acid.</p>",
  ind: "<p>Major trauma with bleeding (within 3 hours), postpartum haemorrhage (within 3 hours), heavy menstrual bleeding, dental extraction in bleeding disorders, epistaxis. <b>Not recommended for upper or lower GI bleeding</b> (ACG 2021, ESGE 2021, after HALT-IT).</p>",
  ci: "<ul><li>Active thromboembolism; history of seizures (high doses); subarachnoid haemorrhage; severe renal impairment (accumulates).</li></ul>",
  adult: "<p><b>Trauma:</b> 1 g IV over 10 minutes within 3 hours of injury, then 1 g over 8 hours. <b>Postpartum haemorrhage:</b> 1 g IV over 10 minutes, repeat once after 30 minutes if bleeding continues or restarts within 24 hours. <b>Heavy menstrual bleeding:</b> 1–1.5 g orally 3 times daily for up to 4 days.</p>",
  child: "<p><b>Trauma:</b> 15 mg/kg (max 1 g) IV over 10 minutes, then 2 mg/kg/h for at least 8 hours or until bleeding stops.</p>",
  preg: "<p>Used in PPH; otherwise use only if needed.</p>", bf: "<p>Small amounts in milk; compatible.</p>",
  renal: "<p>Reduce dose in moderate–severe impairment.</p>", hep: "<p>No change.</p>",
  elderly: "<p>Thrombosis risk.</p>",
  inter: "<p>Combined hormonal contraceptives and other prothrombotic drugs (thrombosis).</p>",
  ae: "<p>Nausea, diarrhoea; thrombosis; seizures with high IV doses; hypotension if injected too fast.</p>",
  mon: "<p>Signs of thrombosis.</p>",
  src: "<p>HALT-IT Trial Collaborators, Lancet 2020; CRASH-2, Lancet 2010; WOMAN, Lancet 2017; NEMF 2022 / NEML 2025.</p>"
}

});
