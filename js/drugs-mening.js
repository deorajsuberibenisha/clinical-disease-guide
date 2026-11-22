/* Meningitis and encephalitis drug cards. New: aciclovir.
   Reused (not redefined): ceftriaxone, cefotaxime, ampicillin, gentamicin, benzylpenicillin, vancomycin, dexamethasone, mannitol,
   diazepam, rifampicin, ciprofloxacin, doxycycline.
   Sources: BNF/BNFc; IDSA 2004 bacterial meningitis and 2008 encephalitis guidelines; ESCMID 2016; UK Joint Specialist Societies 2016
   (McGill et al.); NICE NG240 (2024); WHO meningitis guidelines 2025; WHO Pocket Book 2013; Bhutan STG 2024, NEMF 2022, NEML 2025. */
Object.assign(GUIDE.drugs, {
aciclovir: {
  name: "Aciclovir (acyclovir), intravenous", cls: "Antiviral (guanosine analogue)", brands: "Zovirax, Acivir",
  bt: "Listed — aciclovir 500 mg powder for injection, NRH/RRH; 400 mg tablets and 3% eye ointment, NRH/RRH/DH (NEML 2025).",
  moa: "<p>Activated by herpes-virus thymidine kinase inside infected cells, then blocks viral DNA polymerase. It works only on replicating herpes simplex and varicella-zoster virus, which is why it is so well tolerated — and why it must start early, before the brain is destroyed.</p>",
  ind: "<p><b>Suspected herpes simplex (HSV) encephalitis</b>: start on suspicion (fever with confusion, behaviour change, seizures or focal signs) without waiting for PCR or imaging. Neonatal HSV; severe varicella or zoster in the immunocompromised.</p>",
  ci: "<p>Hypersensitivity to aciclovir or valaciclovir.</p>",
  adult: "<p><b>HSV encephalitis: 10 mg/kg IV every 8 hours</b>, each dose infused over 1 hour, for <b>14–21 days</b> (21 days if immunocompromised). Use ideal body weight in obesity. Stop only if HSV PCR on CSF taken after 72 hours of symptoms is negative and another diagnosis is made (specialist decision).</p>",
  child: "<p><b>3 months–11 years: 500 mg/m² IV every 8 hours</b> (approximately 10–15 mg/kg every 8 hours) for at least 14–21 days. 12 years and over: as adult.</p>",
  neo: "<p><b>20 mg/kg IV every 8 hours</b>: 14 days for skin–eye–mouth disease, <b>21 days for CNS or disseminated disease</b>; repeat CSF PCR at the end of CNS treatment (specialist care).</p>",
  preg: "<p>Use when indicated: no increase in birth defects in large registries.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Crystal nephropathy risk: keep well hydrated and infuse slowly. Adjust IV dose: CrCl 25–50: every 12 hours; 10–25: every 24 hours; under 10: half dose every 24 hours.</p>",
  hep: "<p>No change.</p>",
  elderly: "<p>Check kidney function; watch for confusion (neurotoxicity) that can mimic the encephalitis.</p>",
  inter: "<p>Other nephrotoxic drugs (gentamicin, NSAIDs, contrast) raise the risk of kidney injury.</p>",
  ae: "<p>Phlebitis (vesicant: use a good vein), crystal nephropathy and AKI (dehydration, fast infusion), nausea, rarely tremor, confusion or seizures at high levels in kidney failure.</p>",
  mon: "<p>Creatinine every 2–3 days; fluid balance.</p>",
  src: "<p>BNF/BNFc; Tunkel AR et al. IDSA encephalitis guideline 2008; Solomon T et al. UK ABN/BIA encephalitis guidelines 2012; Kimberlin DW, neonatal HSV (AAP Red Book); Bhutan NEML 2025.</p>"
}
});

(function () {
  const D = GUIDE.drugs, add = (id, f, html) => { if (D[id]) D[id][f] = (D[id][f] || "") + html; };
  add("ceftriaxone", "adult", "<p><b>Bacterial meningitis: 2 g IV every 12 hours</b> (4 g/day) for 10–14 days by organism (meningococcus 5–7 days). Bhutan STG 2024 adds gentamicin; international guidelines do not.</p>");
  add("ceftriaxone", "child", "<p><b>Meningitis (over 1 month): 80–100 mg/kg once daily</b> (maximum 4 g/day), or 50 mg/kg 12-hourly (WHO Pocket Book). Duration by organism: meningococcus 5–7 days, <i>H. influenzae</i> 10 days, pneumococcus 10–14 days.</p>");
  add("ampicillin", "adult", "<p><b>Meningitis with Listeria risk</b> (over 50–60 years, pregnancy, alcohol dependence, diabetes, immunosuppression): 2 g IV every 4 hours with ceftriaxone, for 21 days if Listeria is confirmed.</p>");
  add("ampicillin", "child", "<p><b>Meningitis (Bhutan STG 2024):</b> 50 mg/kg IV/IM every 6 hours with gentamicin 7.5 mg/kg once daily, while arranging referral; international guidelines prefer ceftriaxone after the neonatal period.</p>");
  add("dexamethasone", "adult", "<p><b>Acute bacterial meningitis:</b> 10 mg IV every 6 hours for 4 days, starting with or just before the first antibiotic dose (up to 12 hours after it, if missed). Continue if pneumococcal or no organism found; stop if another cause is confirmed. Do not give in suspected cryptococcal meningitis (HIV) or once septic shock from meningococcaemia dominates without meningitis.</p>");
  add("dexamethasone", "child", "<p><b>Acute bacterial meningitis (over 3 months):</b> 0.15 mg/kg IV (maximum 10 mg) every 6 hours for 4 days, ideally with or before the first antibiotic dose and not more than 12 hours after it. Not in neonates or partially treated cases (WHO Pocket Book).</p>");
  add("rifampicin", "adult", "<p><b>Meningococcal contact prophylaxis</b> (if ciprofloxacin unsuitable): 600 mg every 12 hours for 2 days. Turns urine and tears orange; reduces contraceptive effect.</p>");
  add("rifampicin", "child", "<p><b>Meningococcal contact prophylaxis:</b> under 1 month 5 mg/kg; 1 month and over 10 mg/kg (maximum 600 mg), every 12 hours for 2 days.</p>");
})();
