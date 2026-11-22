/* Enteric fever and scrub typhus: indication notes appended to existing cards (no new ids).
   Sources: WHO AWaRe Antibiotic Book 2022; Bhutan STG 2024 §8.1.1, §8.1.3; National Guidelines for the Management of Priority Zoonotic
   Diseases 2025 (Bhutan), ch.4 Scrub typhus; Varghese GM et al. NEJM 2023 (INTREST); AAP Red Book 2024 (doxycycline in young children);
   ICMR rickettsial guideline 2015; ICMR Treatment Guidelines for Antimicrobial Use 2019; BNF/BNFc; NEML 2025. */
(function () {
  const D = GUIDE.drugs, add = (id, f, html) => { if (D[id]) D[id][f] = (D[id][f] || "") + html; };
  add("azithromycin", "adult", "<p><b>Enteric fever (uncomplicated, fluoroquinolone resistance likely):</b> 1 g on day 1, then 500 mg once daily to complete 7 days (WHO AWaRe), or 500 mg–1 g daily for 7 days. <b>Scrub typhus:</b> 500 mg once daily for 7 days (Bhutan zoonoses guideline); severe disease: IV 500 mg daily with IV doxycycline (INTREST). Oral azithromycin is not on NEML 2025: check local stock.</p>");
  add("azithromycin", "child", "<p><b>Enteric fever:</b> 20 mg/kg once daily (maximum 1 g) for 7 days (WHO AWaRe). <b>Scrub typhus:</b> 10 mg/kg once daily (maximum 500 mg) for 5–7 days, or 7–10 days with doxycycline in severe disease (Bhutan zoonoses guideline).</p>");
  add("azithromycin", "preg", "<p><b>Scrub typhus in pregnancy:</b> azithromycin 500 mg once daily for 7 days is the treatment of choice (Bhutan zoonoses guideline).</p>");
  add("doxycycline", "adult", "<p><b>Scrub typhus (drug of choice):</b> 100 mg twice daily for 7–10 days, continued at least 3 days after the fever settles (Bhutan STG 7 days; zoonoses guideline 7–10 days). <b>Severe:</b> IV 200 mg twice daily on day 1, then 100–200 mg twice daily, with azithromycin (INTREST: combination reduced the composite poor outcome). <b>Chemoprophylaxis</b> for short high-risk exposure: 200 mg once weekly, adults only.</p>");
  add("doxycycline", "child", "<p><b>Scrub typhus — any age (Bhutan zoonoses guideline, AAP):</b> 2.2 mg/kg twice daily (100 mg twice daily if over 45 kg) for 5–7 days (7–10 days if severe). Short courses (21 days or less) do not stain teeth, so the usual under-8 restriction does not apply to rickettsial infections.</p>");
  add("ciprofloxacin", "adult", "<p><b>Enteric fever (Bhutan STG):</b> 500 mg twice daily for 7–14 days. Use only where the isolate is sensitive: most South Asian <i>S.</i> Typhi are now fluoroquinolone non-susceptible (87–98% in Nepal, Bangladesh, Pakistan) and Bhutan has no published rates.</p>");
  add("ciprofloxacin", "child", "<p><b>Enteric fever (WHO AWaRe, low-resistance settings only):</b> 15 mg/kg twice daily (maximum 500 mg per dose) for 7 days; prefer azithromycin or a cephalosporin in South Asia.</p>");
  add("ceftriaxone", "adult", "<p><b>Severe enteric fever:</b> 2 g IV once daily (WHO AWaRe), switching to oral azithromycin or cefixime when afebrile and eating; total 10–14 days.</p>");
  add("ceftriaxone", "child", "<p><b>Severe enteric fever:</b> 80 mg/kg once daily (WHO AWaRe; maximum 2 g; some Indian guidance uses up to 100 mg/kg/day, maximum 4 g) for 10–14 days in total.</p>");
  add("cefixime", "adult", "<p><b>Enteric fever (oral step-down or uncomplicated, Indian practice):</b> 200–400 mg twice daily (about 20 mg/kg/day) for 14 days. Higher failure and relapse rates than azithromycin in some trials.</p>");
  add("cefixime", "child", "<p><b>Enteric fever:</b> 20 mg/kg/day in 2 divided doses (maximum 400 mg per dose) for 14 days (IAP/ICMR practice); as step-down after ceftriaxone.</p>");
})();
