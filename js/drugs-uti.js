/* Urinary tract infection drug cards. New: nitrofurantoin, cefalexin, cefixime.
   Reused (not redefined): amoxicillin, cotrimoxazole, ciprofloxacin, ampicillin, gentamicin, ceftriaxone, coamoxiclav, meropenem.
   Sources: BNF/BNFc; NICE NG109 (2018), NG111 (2018), NG224 (2022); IDSA 2011 cystitis/pyelonephritis; AAP 2011 febrile UTI;
   WHO AWaRe Antibiotic Book 2022; MHRA 2014 (nitrofurantoin and eGFR); Bhutan NEMF 2022 and NEML 2025. */
Object.assign(GUIDE.drugs, {
nitrofurantoin: {
  name: "Nitrofurantoin", cls: "Nitrofuran urinary antiseptic (WHO Access)", brands: "Macrobid, Furadantin, Niftran",
  bt: "Listed — nitrofurantoin 100 mg modified-release capsule (monohydrate/macrocrystal), NRH/RRH/DH (NEML 2025). No liquid form is listed.",
  moa: "<p>Reduced by bacterial enzymes into reactive compounds that damage bacterial DNA and ribosomes. It reaches high levels in urine but almost none in blood or kidney tissue, which is why it treats bladder infection well and kidney infection not at all.</p>",
  ind: "<p><b>First-choice oral drug for cystitis (lower UTI)</b> in Bhutan: local studies at JDWNRH show the lowest resistance of any oral antibiotic (about 3–10%). Prophylaxis of recurrent UTI.</p><p><b>Not for pyelonephritis, urosepsis or prostatitis</b> (no tissue levels).</p>",
  ci: "<ul><li>eGFR under 45 mL/min (MHRA/BNF; see renal)</li><li>Infants under 3 months (haemolysis)</li><li>Pregnancy at term and during labour (neonatal haemolysis)</li><li>G6PD deficiency (haemolysis)</li><li>Pyelonephritis or fever with flank pain</li></ul>",
  adult: "<p><b>Cystitis: 100 mg modified-release twice daily</b> with food.</p><ul><li>Women: <b>5 days</b> (WHO AWaRe, IDSA); NICE uses 3 days.</li><li>Men, pregnancy, diabetes or catheter: 7 days.</li></ul><p><b>Prophylaxis:</b> 50–100 mg at night (immediate-release) or after intercourse; review at 6 months.</p>",
  child: "<p><b>3 months and older:</b> 750 micrograms/kg four times daily (= 3 mg/kg/day) for 3–5 days in cystitis. <b>12 years and over:</b> 100 mg modified-release twice daily.</p><p><b>Prophylaxis:</b> 1 mg/kg once at night.</p><p class='warn'>Safety check: NEMF 2022 prints the child dose as “3 mg/kg Q6H”. The BNFc and AAP dose is 3 mg/kg <b>per day</b> divided 6-hourly (5–7 mg/kg/day maximum, AAP). Never give 3 mg/kg per dose.</p><p>Only the 100 mg capsule is on NEML, so small children usually need another drug (cefalexin, cefixime or co-trimoxazole by sensitivity).</p>",
  preg: "<p>Useful in the first and second trimesters and early third trimester (NICE first choice in pregnancy, 7 days). Avoid from about 36 weeks, at term and in labour.</p>",
  bf: "<p>Compatible, but avoid if the baby is under 1 month, preterm, jaundiced or G6PD deficient.</p>",
  renal: "<p><b>Avoid if eGFR under 45.</b> A 3–7 day course may be used at eGFR 30–44 only for a resistant organism when the benefit outweighs the risk (MHRA 2014). NEMF 2022 still says avoid if CrCl under 60: the stricter figure is safe to follow; the guide uses eGFR 45 in line with current BNF.</p>",
  hep: "<p>Caution: rare cholestatic jaundice and chronic hepatitis, mostly with long-term use.</p>",
  elderly: "<p>Check eGFR first. Long-term prophylaxis in older people: watch for lung reactions and neuropathy.</p>",
  inter: "<p>Magnesium antacids reduce absorption. Do not combine with nalidixic acid (antagonism).</p>",
  ae: "<p>Nausea (take with food), brown urine (harmless), rash. <b>Rare but serious:</b> acute lung reaction (fever, breathlessness, often within days), chronic pulmonary fibrosis and hepatitis with long-term use, peripheral neuropathy (worse in kidney impairment), haemolysis in G6PD deficiency.</p>",
  mon: "<p>Long-term prophylaxis: liver tests and a chest review every few months; stop at once with new breathlessness or numbness.</p>",
  src: "<p>BNF/BNFc; NICE NG109 (2018) and NG112; IDSA 2011 (Gupta et al.); WHO AWaRe Antibiotic Book 2022; MHRA Drug Safety Update Sept 2014; Bhutan NEMF 2022, NEML 2025; JDWNRH uropathogen studies (BMC Res Notes 2015; Medicina Balear 2022; Bhutan Health Journal 2024).</p>"
},
cefalexin: {
  name: "Cefalexin (cephalexin)", cls: "First-generation oral cephalosporin (WHO Access)", brands: "Keflex, Sporidex, Phexin",
  bt: "Listed — cefalexin 250 mg capsule, NRH/RRH (and DH with a paediatrician, orthopaedic surgeon or physician) (NEML 2025). No suspension listed.",
  moa: "<p>Blocks bacterial cell-wall synthesis by binding penicillin-binding proteins. Active against most community <i>E. coli</i>, <i>Klebsiella</i> and <i>Proteus</i>, staphylococci and streptococci; inactive against enterococci, <i>Pseudomonas</i> and ESBL producers.</p>",
  ind: "<p>Cystitis in pregnancy and in children; oral treatment or step-down for <b>pyelonephritis</b> when the organism is sensitive (NICE NG111 first-line oral choice); skin and soft-tissue infection.</p>",
  ci: "<p>Previous anaphylaxis to a cephalosporin. Caution with a history of severe penicillin allergy (cross-reaction is uncommon, under about 2%).</p>",
  adult: "<ul><li><b>Cystitis</b> (pregnancy or when nitrofurantoin is unsuitable): 500 mg twice daily for 7 days (NICE).</li><li><b>Pyelonephritis:</b> 500 mg two or three times daily (up to 1–1.5 g three or four times daily in severe infection) for 7–10 days (NICE NG111).</li></ul>",
  child: "<p><b>Febrile UTI or pyelonephritis (3 months and older):</b> 50–100 mg/kg/day orally in 3–4 divided doses (maximum 4 g/day) for 7–10 days (AAP 2011). Lower UTI: 25–50 mg/kg/day in 2–3 doses for 3 days. Capsules can be opened and mixed with a little food or drink.</p>",
  neo: "<p>Not used for neonatal UTI: neonates need IV treatment.</p>",
  preg: "<p>Safe in all trimesters (NICE choice for UTI in pregnancy).</p>", bf: "<p>Compatible.</p>",
  renal: "<p>CrCl 10–50: give every 8–12 hours; under 10: 250–500 mg every 12–24 hours.</p>",
  hep: "<p>No change.</p>",
  elderly: "<p>Adjust for kidney function.</p>",
  inter: "<p>Probenecid raises levels; may cause false-positive urine glucose by reducing tests.</p>",
  ae: "<p>Diarrhoea, nausea, rash; rarely <i>C. difficile</i> colitis or anaphylaxis.</p>",
  src: "<p>BNF/BNFc; NICE NG109, NG111 (2018); AAP Clinical Practice Guideline 2011 (reaffirmed 2016); Bhutan NEMF 2022, NEML 2025.</p>"
},
cefixime: {
  name: "Cefixime", cls: "Third-generation oral cephalosporin (WHO Watch)", brands: "Taxim-O, Suprax, Zifi",
  bt: "Listed — cefixime 200 mg tablet, NRH/RRH (NEML 2025). WHO Watch group: use only when an Access drug will not do.",
  moa: "<p>Blocks cell-wall synthesis; strong gram-negative activity (<i>E. coli</i>, <i>Klebsiella</i>, <i>Proteus</i>, <i>Salmonella</i>), weak against staphylococci, no activity against enterococci or <i>Pseudomonas</i>. Destroyed by ESBL enzymes.</p>",
  ind: "<p><b>Oral step-down for pyelonephritis</b> in adults and children after IV ceftriaxone, when the organism is sensitive or culture is unavailable and the patient is improving; febrile UTI in children over 3 months who can take oral medicine (AAP). Also enteric fever and gonorrhoea (other chapters).</p>",
  ci: "<p>Previous severe reaction to a cephalosporin.</p>",
  adult: "<p><b>Pyelonephritis (step-down):</b> 400 mg once daily, or 200 mg twice daily, to complete 7–10 days in total (oral beta-lactams need the longer course: IDSA 2011).</p>",
  child: "<p><b>Febrile UTI, 3 months and older:</b> 8 mg/kg/day orally once daily or in 2 divided doses (maximum 400 mg/day) for 7–10 days (AAP 2011; NEMF). Tablets can be crushed and dispersed in water.</p>",
  neo: "<p>Not recommended under 3 months for UTI (IV treatment instead).</p>",
  preg: "<p>No known harm; used when needed.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>CrCl 21–60: about 75% of the dose, 300 mg/day (NEMF prints 260 mg); CrCl 20 or less: 200 mg/day.</p>",
  hep: "<p>No change in mild disease; reduce in severe liver disease (NEMF).</p>",
  elderly: "<p>Adjust for kidney function.</p>",
  inter: "<p>Few: may raise carbamazepine levels; warfarin effect may rise.</p>",
  ae: "<p>Diarrhoea (common), abdominal pain, rash; <i>C. difficile</i> colitis. Overuse drives ESBL resistance: about 16% of urinary <i>E. coli</i> at JDWNRH already resist third-generation cephalosporins.</p>",
  src: "<p>BNFc; AAP 2011; IDSA 2011; WHO AWaRe Antibiotic Book 2022; Bhutan NEMF 2022, NEML 2025; JDWNRH uropathogen study 2015.</p>"
}
});

/* Indication notes appended to shared cards (kept short; the original chapters' text stays unchanged). */
(function () {
  const D = GUIDE.drugs, add = (id, f, html) => { if (D[id]) D[id][f] = (D[id][f] || "") + html; };
  add("cotrimoxazole", "adult", "<p><b>Cystitis (Bhutan STG 2024):</b> 960 mg (800/160 mg) twice daily for 3 days. Use only if the organism is known to be sensitive or local resistance is under 20%: urinary <i>E. coli</i> resistance in Thimphu is much higher, so it is not this guide's empirical first choice.</p>");
  add("cotrimoxazole", "child", "<p><b>UTI (Bhutan STG 2024):</b> 8 mg trimethoprim/kg/day in 2 divided doses (maximum 160 mg trimethoprim per dose) for 5 days. Not under 6 weeks of age.</p>");
  add("amoxicillin", "adult", "<p><b>Cystitis (Bhutan STG 2024):</b> 500 mg three times daily for 3 days. About 70% of urinary <i>E. coli</i> in Thimphu resist amoxicillin, so use it only when culture shows sensitivity (WHO, NICE, IDSA).</p>");
  add("amoxicillin", "child", "<p><b>UTI (Bhutan STG 2024):</b> 15 mg/kg per dose three times daily for 5 days; use when the organism is known to be sensitive (high local resistance).</p>");
  add("ciprofloxacin", "adult", "<p><b>Pyelonephritis (oral, if sensitive):</b> 500 mg twice daily for 7 days (NICE NG111, WHO AWaRe). Not for simple cystitis (MHRA restriction; save it). <b>Meningococcal contact prophylaxis:</b> 500 mg once.</p>");
  add("ciprofloxacin", "child", "<p><b>Meningococcal contact prophylaxis</b> (single dose, UKHSA): 1 month–4 years 125 mg; 5–11 years 250 mg; 12 years and over 500 mg.</p>");
})();
