/* Anaemia and viral hepatitis drug cards. New: folic_acid, vitamin_b12, hbig.
   Reused (not redefined; notes appended): ferrous, iron_sucrose, tenofovir_hbv, hepb_vaccine, albendazole.
   Sources: BNF/BNFc; WHO guideline on haemoglobin cutoffs 2024; WHO antenatal care 2016; WHO daily iron supplementation in infants and children 2016;
   BSG guidelines for iron deficiency anaemia in adults 2021 (Snook et al., Gut); BSH UK guideline on iron deficiency in pregnancy 2020 (Pavord et al.);
   Stoffel NU et al. Lancet Haematol 2017 (alternate-day iron); WHO hepatitis B guidelines 2024; Bhutan NSP IV 2023–2028; STG 2024 §4.3, §11.1; NEMF 2022; NEML 2025. */
Object.assign(GUIDE.drugs, {
folic_acid: {
  name: "Folic acid", cls: "Vitamin (folate)", brands: "Folvite, Folet",
  bt: "Listed — folic acid 5 mg tablet (NRH to PHC); ferrous sulphate 200 mg + folic acid 0.4 mg tablet for pregnancy (NEML 2025).",
  moa: "<p>Needed for DNA synthesis; deficiency causes macrocytic (megaloblastic) anaemia and, around conception, neural tube defects.</p>",
  ind: "<p>Folate-deficiency anaemia; prevention of neural tube defects (all women before conception and in early pregnancy; higher dose for women on anti-seizure medicines, with diabetes, obesity or a previous affected pregnancy); haemolytic anaemias (sickle cell, thalassaemia); methotrexate users.</p>",
  ci: "<p>Never give folic acid alone for undiagnosed megaloblastic anaemia: it can correct the blood count while B12-deficiency nerve damage (subacute combined degeneration) progresses. Check or treat B12 first.</p>",
  adult: "<p><b>Folate deficiency:</b> 5 mg once daily for 4 months (longer if the cause persists). <b>Pre-conception and first 12 weeks:</b> 0.4 mg daily; 5 mg daily if high risk. <b>Haemolytic anaemia:</b> 5 mg daily (or weekly by specialist).</p>",
  child: "<p><b>Folate deficiency:</b> 1 month–11 years: 500 micrograms/kg once daily (maximum 5 mg) for up to 4 months; 12 years and over: 5 mg daily. Haemolytic anaemia: 2.5–5 mg daily.</p>",
  preg: "<p>Essential: 0.4 mg daily with iron (Bhutan IFA tablet) throughout pregnancy; 5 mg in high-risk women.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No change.</p>", hep: "<p>No change.</p>",
  inter: "<p>Can lower phenytoin and phenobarbital levels; methotrexate and trimethoprim are folate antagonists.</p>",
  ae: "<p>Rare: nausea, allergy.</p>",
  src: "<p>BNF/BNFc; WHO antenatal care 2016; Bhutan NEML 2025.</p>"
},
vitamin_b12: {
  name: "Vitamin B12 (hydroxocobalamin or cyanocobalamin)", cls: "Vitamin", brands: "Neurobion (B complex), Methylcobal (mecobalamin)",
  bt: "Not listed on NEML 2025 as a single injection (mecobalamin appears in NEMF without a NEML listing): availability must be checked locally — evidence gap.",
  moa: "<p>Needed for DNA synthesis and myelin. Deficiency causes megaloblastic anaemia and nerve damage (numbness, ataxia, memory loss) that can be permanent if treatment is delayed.</p>",
  ind: "<p>B12 deficiency: pernicious anaemia, strict vegetarian or vegan diet, gastrectomy, long-term metformin or PPI, malabsorption, fish tapeworm.</p>",
  ci: "<p>Known hypersensitivity (rare).</p>",
  adult: "<p><b>Hydroxocobalamin 1 mg IM three times a week for 2 weeks</b>, then 1 mg every 3 months for life (pernicious anaemia) — with neurological signs, 1 mg on alternate days until no further improvement, then every 2 months (BNF). <b>Dietary deficiency:</b> oral cyanocobalamin 50–150 micrograms daily (or 1 mg daily orally, which works even in pernicious anaemia through passive absorption).</p>",
  child: "<p>Hydroxocobalamin 250 micrograms–1 mg IM by age and severity (specialist; BNFc), then maintenance. Infants of B12-deficient vegan mothers can present with developmental regression: treat urgently.</p>",
  preg: "<p>Safe; treat deficiency.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No change.</p>", hep: "<p>No change.</p>",
  inter: "<p>Metformin, PPIs and H2 blockers reduce absorption over years.</p>",
  ae: "<p>Injection pain; <b>hypokalaemia</b> in the first days of treating severe megaloblastic anaemia (check potassium); rarely anaphylaxis.</p>",
  src: "<p>BNF/BNFc; BSH guideline on cobalamin and folate disorders 2014; NEML 2025.</p>"
},
hbig: {
  name: "Hepatitis B immunoglobulin (HBIG)", cls: "Passive immunisation", brands: "Hepabig, HepaGam B",
  bt: "Bhutan policy (NSP IV 2023–2028): all newborns of HBsAg-positive mothers receive HBIG. Not found on NEML 2025 — supplied through the programme; check stock at the delivery facility.",
  moa: "<p>Ready-made antibodies against hepatitis B surface antigen give immediate, short-term protection while the vaccine induces the baby's own immunity.</p>",
  ind: "<p>Newborns of HBsAg-positive mothers (with the birth-dose vaccine); unvaccinated people after needlestick or sexual exposure to HBsAg-positive blood or fluid.</p>",
  ci: "<p>Severe reaction to human immunoglobulin.</p>",
  adult: "<p><b>Post-exposure (non-immune):</b> 500 IU IM (or per product, often 0.06 mL/kg) as soon as possible, ideally within 24 hours (no later than 7 days), plus a hepatitis B vaccine course started at the same time at a different site.</p>",
  child: "<p><b>Newborn of HBsAg-positive mother:</b> 200 IU (or 100–200 IU per product; 0.5 mL) IM <b>within 12–24 hours of birth</b>, in the opposite thigh to the birth-dose vaccine. Then the routine pentavalent doses; test HBsAg and anti-HBs at 9–12 months.</p>",
  preg: "<p>May be used after exposure in pregnancy.</p>", bf: "<p>Compatible; breastfeeding is encouraged after HBIG and vaccine.</p>",
  ae: "<p>Injection-site pain; rare allergy.</p>",
  src: "<p>Bhutan NSP IV HIV/AIDS, Viral Hepatitis and STIs 2023–2028; WHO hepatitis B guidelines 2024; product information; BNF.</p>"
}
});

(function () {
  const D = GUIDE.drugs, add = (id, f, html) => { if (D[id]) D[id][f] = (D[id][f] || "") + html; };
  add("ferrous", "adult", "<p><b>Iron-deficiency anaemia:</b> one tablet (ferrous sulphate 200 mg = 65 mg elemental iron) once daily or on alternate days, on an empty stomach or with orange juice, not with tea, milk or antacids (BSG 2021; Stoffel 2017). Expect Hb to rise about 20 g/L in 3–4 weeks; continue for 3 months after Hb is normal to refill stores. Bhutan's tablet also contains folic acid 0.4 mg.</p>");
  add("ferrous", "child", "<p><b>Iron-deficiency anaemia:</b> 3 mg/kg/day elemental iron (up to 6 mg/kg/day in severe deficiency, maximum 200 mg/day) once daily, for 3 months after Hb normalises. <b>Prevention (WHO 2016, where anaemia is common):</b> 10–12.5 mg elemental iron daily for 3 months a year in children 6–23 months.</p>");
  add("ferrous", "preg", "<p><b>Prevention:</b> one IFA tablet daily throughout pregnancy and for 3 months after delivery (WHO 30–60 mg elemental iron + 0.4 mg folic acid). <b>Treatment of anaemia:</b> 1 tablet once or twice daily (about 100–200 mg elemental iron), recheck Hb in 2–4 weeks; IV iron if no response, intolerance, or Hb under 100 g/L after 34 weeks (BSH 2020).</p>");
  add("iron_sucrose", "adult", "<p><b>Iron-deficiency anaemia (intolerance, malabsorption, poor response, or rapid repletion needed):</b> total dose from the Ganzoni formula (calculator in the anaemia chapter), given as 200 mg IV over 30 minutes (or slow injection over 10 minutes) up to 3 times a week; maximum 200 mg per dose and 600 mg per week. Have resuscitation equipment; observe 30 minutes.</p>");
  add("iron_sucrose", "preg", "<p><b>Pregnancy:</b> avoid in the first trimester; in the second and third trimesters for women who cannot take or do not respond to oral iron, or who present late with significant anaemia (BSH 2020, FIGO).</p>");
  add("tenofovir_hbv", "preg", "<p><b>Preventing mother-to-child transmission (Bhutan NSP IV, WHO 2024):</b> HBsAg-positive pregnant women with HBV DNA over 200,000 IU/mL (or HBeAg positive where DNA is unavailable) take tenofovir 300 mg daily from 28 weeks until at least 4 weeks after delivery (or continue if they meet treatment criteria). Breastfeeding is compatible.</p>");
  add("hepb_vaccine", "child", "<p><b>Birth dose (monovalent) within 24 hours of birth</b> for every baby (Bhutan coverage 94% of institutional births), then hepatitis B in the pentavalent vaccine. Babies of HBsAg-positive mothers also receive HBIG.</p>");
  add("albendazole", "preg", "<p><b>Antenatal deworming (Bhutan):</b> 400 mg single dose after the first trimester (STG §11.1 suggests at 20 weeks). The STG 2024 text prints “100 mg”; NEMF gives 400 mg — this guide uses 400 mg.</p>");
})();
