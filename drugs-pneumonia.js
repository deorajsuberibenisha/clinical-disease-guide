/* Pneumonia drug cards.
   Bhutan sources: Standard Treatment Guidelines, 5th ed. 2024 (§3.1 adults, §12.2.1 children); NEML 2025 / NEMF 2022.
   International: ATS/IDSA 2019 CAP guideline, WHO Pocket Book 2013, WHO AWaRe 2022, BNF/BnFC, product labels. */
Object.assign(GUIDE.drugs, {

amoxicillin: {
  name: "Amoxicillin", cls: "Aminopenicillin (beta-lactam)", brands: "Amoxil, Mox, many generics",
  bt: "Listed — 250 mg / 500 mg capsules and syrup (down to PHC)",
  moa: "<p>Kills dividing bacteria by blocking cell-wall synthesis. It covers <i>Streptococcus pneumoniae</i> (where penicillin-susceptible), many streptococci, and (with clavulanate) <i>Haemophilus influenzae</i> and <i>Moraxella catarrhalis</i>.</p>",
  ind: "<p>First-line oral antibiotic for community-acquired pneumonia in adults and for non-severe pneumonia in children.</p>",
  ci: "<ul><li>Penicillin anaphylaxis (not just a mild rash).</li><li>Infectious mononucleosis (almost always causes a rash).</li></ul>",
  adult: "<p><b>CAP: 500 mg–1 g three times daily</b>. ATS/IDSA 2019 recommends 1 g three times daily for otherwise healthy outpatients; Bhutan STG 2024 uses 500 mg three times daily for 7 days.</p>",
  child: "<p><b>Non-severe pneumonia (WHO high-dose): 40 mg/kg per dose twice daily</b> (80 mg/kg/day), for <b>3 days</b> (low HIV prevalence) or <b>5 days</b> (high HIV prevalence). Bhutan STG 2024 uses 15 mg/kg per dose three times daily. General upper limit 1 g per dose.</p>",
  neo: "<p>Used in neonatal sepsis/infection at 50 mg/kg per dose 12-hourly (specialist care).</p>",
  preg: "<p>Safe in pregnancy.</p>", bf: "<p>Compatible; small amounts in milk.</p>",
  renal: "<p>CrCl 10–30 mL/min: increase the interval to every 12 hours; below 10 mL/min or dialysis: every 24 hours.</p>",
  hep: "<p>No dose change.</p>",
  elderly: "<p>Same dose; adjust for kidney function.</p>",
  inter: "<p>Allopurinol increases rash risk; warfarin effect may be enhanced (check INR).</p>",
  ae: "<p>Nausea, diarrhoea, rash (maculopapular; with mononucleosis almost universal), and rarely anaphylaxis or antibiotic-associated colitis.</p>",
  mon: "<p>Clinical response; watch for rash and diarrhoea.</p>",
  tox: "<p>Large doses rarely cause crystalluria (keep fluids up); otherwise low toxicity.</p>",
  src: "<p>Bhutan STG 2024 §3.1 and §12.2.1; ATS/IDSA CAP 2019; WHO Pocket Book 2013; BNF/BnFC.</p>"
},

coamoxiclav: {
  name: "Amoxicillin–clavulanate (co-amoxiclav)", cls: "Aminopenicillin + beta-lactamase inhibitor", brands: "Augmentin, Clavam",
  bt: "Listed — 625 mg and 1 g tablets; syrup",
  moa: "<p>Clavulanate inactivates many beta-lactamases, extending amoxicillin's cover to <i>H. influenzae</i>, <i>Moraxella</i>, <i>Staphylococcus aureus</i> (non-MRSA) and many anaerobes.</p>",
  ind: "<p>Community-acquired pneumonia in adults with comorbidities; suspected aspiration; and where beta-lactamase-producing organisms are likely.</p>",
  ci: "<ul><li>Penicillin anaphylaxis.</li><li>Previous cholestatic jaundice or liver injury with clavulanate.</li></ul>",
  adult: "<p><b>625 mg (500/125) three times daily</b>, or <b>1 g (875/125) twice daily</b>, for 5–7 days.</p>",
  child: "<p><b>30 mg/kg per dose three times daily of the amoxicillin component</b> (severe infection up to 90 mg/kg/day), or 22.5 mg/kg twice daily of the 875/125 formulation (age 6 or over).</p>",
  preg: "<p>Safe.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>CrCl 10–30: every 12 hours; below 10: every 24 hours.</p>",
  hep: "<p>Use with caution; clavulanate can cause cholestatic hepatitis (more common in older men and with longer courses).</p>",
  ae: "<p>Diarrhoea (common), nausea, rash, and — more than plain amoxicillin — cholestatic jaundice.</p>",
  mon: "<p>Clinical response; liver tests if jaundice or itch.</p>",
  src: "<p>ATS/IDSA CAP 2019; BNF; product labels; Bhutan NEML 2025.</p>"
},

doxycycline: {
  name: "Doxycycline", cls: "Tetracycline", brands: "Doxymed, Vibramycin",
  bt: "Listed — 100 mg capsule/tablet",
  moa: "<p>Inhibits bacterial protein synthesis. It covers the \"atypical\" organisms (<i>Mycoplasma</i>, <i>Chlamydophila</i>, <i>Legionella</i>) as well as many pneumococci and <i>H. influenzae</i>.</p>",
  ind: "<p>Monotherapy for community-acquired pneumonia in otherwise healthy outpatients (ATS/IDSA 2019 alternative to amoxicillin), and an add-on for atypical cover.</p>",
  ci: "<ul><li>Pregnancy and breastfeeding.</li><li>Children under 8 years (tooth staining) — unless no alternative and the course is short.</li><li>Severe liver disease.</li></ul>",
  adult: "<p><b>100 mg twice daily</b> (or 200 mg once daily on day 1 then 100 mg daily for atypical cover), for 5–7 days.</p>",
  child: "<p>Age 8 years or more: <b>2–4 mg/kg/day in 1–2 doses (maximum 200 mg/day)</b>. Not for routine use under 8 years.</p>",
  preg: "<p>Avoid (affects fetal teeth and bone).</p>", bf: "<p>Avoid (or short course only if essential).</p>",
  renal: "<p>No dose change (it is excreted in bile).</p>",
  hep: "<p>Caution in severe liver disease.</p>",
  inter: "<p>Iron, calcium, antacids and dairy reduce absorption — separate by 2 hours; enhances warfarin effect.</p>",
  ae: "<p>GI upset, <b>photosensitivity</b> (warn about sun), oesophageal irritation (take with water, sit upright), vaginal candidiasis.</p>",
  mon: "<p>Clinical response; advise sunscreen and taking with a full glass of water.</p>",
  src: "<p>ATS/IDSA CAP 2019; BNF; product labels.</p>"
},

azithromycin: {
  name: "Azithromycin (and clarithromycin)", cls: "Macrolide", brands: "Zithromax, Azee; clarithromycin: Klacid",
  bt: "NEML 2025 lists only azithromycin 500 mg IV (to DH; added for severe scrub typhus/leptospirosis in pregnancy and children). Oral tablets and syrup are not on NEML 2025: check local stock.",
  moa: "<p>Inhibits bacterial protein synthesis. It is the drug for the \"atypical\" pneumonias (<i>Mycoplasma pneumoniae</i>, <i>Chlamydophila</i>, <i>Legionella</i>) and adds some pneumococcal and <i>H. influenzae</i> cover.</p>",
  ind: "<p>Atypical pneumonia; combined with a beta-lactam for inpatient community-acquired pneumonia; macrolide option where local pneumococcal resistance is low.</p>",
  ci: "<ul><li>Prolonged QT or other QT-prolonging drugs.</li><li>Known macrolide hypersensitivity.</li></ul>",
  adult: "<p><b>Azithromycin:</b> 500 mg once daily for 3 days, or 500 mg day 1 then 250 mg days 2–5. <b>Clarithromycin:</b> 500 mg twice daily for 5–7 days.</p>",
  child: "<p><b>Azithromycin:</b> 10 mg/kg once daily on day 1 (maximum 500 mg), then 5 mg/kg once daily days 2–5 (maximum 250 mg). Used in children for suspected atypical or whooping cough.</p>",
  preg: "<p>Safe (azithromycin is preferred in pregnancy).</p>", bf: "<p>Compatible.</p>",
  renal: "<p>No dose change.</p>", hep: "<p>Caution in severe liver disease.</p>",
  inter: "<p>QT prolongation with other QT drugs; clarithromycin is a strong CYP3A4 inhibitor (raises statins, warfarin, colchicine).</p>",
  ae: "<p>GI upset, QT prolongation, hearing changes with high doses (rare).</p>",
  mon: "<p>ECG if QT risk factors; clinical response.</p>",
  src: "<p>ATS/IDSA CAP 2019; BNF/BnFC; product labels.</p>"
},

ampicillin: {
  name: "Ampicillin", cls: "Aminopenicillin (beta-lactam, IV/IM)", brands: "Penbritin, Ampicine",
  bt: "Listed — 500 mg and 1 g injection",
  moa: "<p>As for amoxicillin; the injectable aminopenicillin used for hospitalised pneumonia.</p>",
  ind: "<p>Severe pneumonia in children (with gentamicin) and hospitalised pneumonia in adults (Bhutan STG).</p>",
  ci: "<p>Penicillin anaphylaxis.</p>",
  adult: "<p><b>1 g IV or IM four times daily</b> (up to 2 g every 4 hours in severe sepsis; maximum 12 g/day). Bhutan STG: ampicillin 1 g QID with gentamicin 80 mg OD for adults with respiratory distress.</p>",
  child: "<p><b>Severe pneumonia: 50 mg/kg per dose IV/IM every 6 hours</b> (WHO), for at least 5 days, then switch to oral amoxicillin when improving.</p>",
  neo: "<p>Sepsis: 50 mg/kg per dose every 8–12 hours (by weight/age) under neonatal guidance.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>CrCl 10–30: every 8 hours; below 10: every 12 hours.</p>",
  hep: "<p>No dose change.</p>",
  ae: "<p>Rash (more than amoxicillin), diarrhoea, rarely anaphylaxis; high doses can cause seizures.</p>",
  mon: "<p>Clinical response; watch for rash.</p>",
  src: "<p>Bhutan STG 2024 §3.1; WHO Pocket Book 2013; BNF/BnFC.</p>"
},

benzylpenicillin: {
  name: "Benzylpenicillin (penicillin G)", cls: "Beta-lactam (IV)", brands: "Crystapen",
  bt: "Listed — injection (600 mg / 3 g vials)",
  moa: "<p>The original beta-lactam; bactericidal against penicillin-susceptible pneumococci and streptococci.</p>",
  ind: "<p>Severe pneumonia where the organism is penicillin-susceptible (alternative to ampicillin in children, WHO).</p>",
  ci: "<p>Penicillin anaphylaxis.</p>",
  adult: "<p><b>1.2–2.4 g IV every 4–6 hours</b> in severe infection.</p>",
  child: "<p><b>Severe pneumonia: 50,000 units/kg (30 mg/kg) IV/IM every 6 hours</b> (WHO alternative to ampicillin).</p>",
  neo: "<p>50,000 units/kg every 12 hours (meningitis/sepsis) under neonatal guidance.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Reduce the dose in advanced kidney failure (and watch for neurotoxicity at very high doses).</p>",
  ae: "<p>Allergy (including anaphylaxis), rash, and at very high doses seizures (neurotoxicity).</p>",
  src: "<p>WHO Pocket Book 2013; BNF/BnFC.</p>"
},

gentamicin: {
  name: "Gentamicin", cls: "Aminoglycoside", brands: "Garamycin, Genticyn",
  bt: "Listed — 80 mg/2 mL injection",
  moa: "<p>Bactericidal against Gram-negative bacilli and adds synergy with beta-lactams against some Gram-positives. It must reach high peak and low trough concentrations: the dose depends on weight and kidney function.</p>",
  ind: "<p>Severe pneumonia in children (with ampicillin/benzylpenicillin) and hospitalised adult pneumonia (with ampicillin, Bhutan STG).</p>",
  ci: "<ul><li>Myasthenia gravis.</li><li>Caution with other nephro- or ototoxic drugs.</li></ul>",
  adult: "<p><b>5–7 mg/kg IV once daily</b> (Bhutan STG uses 80 mg once daily). In severe sepsis, once-daily dosing is standard; measure levels if the course exceeds 48–72 h or kidney function is impaired.</p>",
  child: "<p><b>7.5 mg/kg IV/IM once daily</b> (WHO severe pneumonia), for at least 5 days.</p>",
  neo: "<p>4–5 mg/kg once daily (sepsis) under neonatal guidance, adjusted by gestational and postnatal age.</p>",
  preg: "<p>Use only if clearly needed (risk of fetal ototoxicity); dose and levels carefully.</p>",
  bf: "<p>Compatible (poorly absorbed orally).</p>",
  renal: "<p class='warn'>Renally cleared and nephrotoxic. Increase the dosing interval (or reduce the dose) in kidney failure and monitor trough levels; avoid if possible when CrCl is very low.</p>",
  hep: "<p>No dose change.</p>",
  inter: "<p>Avoid or monitor with other nephro-/ototoxic drugs (furosemide, vancomycin, cisplatin).</p>",
  ae: "<p>Nephrotoxicity, ototoxicity (hearing and vestibular — usually irreversible), neuromuscular blockade (rare).</p>",
  mon: "<p>Creatinine daily; hearing and balance symptoms; drug levels for prolonged courses.</p>",
  tox: "<p>Overdose causes nephro- and ototoxicity; there is no antidote — supportive care and (rarely) dialysis.</p>",
  src: "<p>Bhutan STG 2024 §3.1; WHO Pocket Book 2013; BNF/BnFC.</p>"
},

ceftriaxone: {
  name: "Ceftriaxone", cls: "Third-generation cephalosporin", brands: "Rocephin, Monocef",
  bt: "Listed — 1 g injection",
  moa: "<p>Broad-spectrum beta-lactam covering <i>S. pneumoniae</i> (including penicillin-intermediate strains), <i>H. influenzae</i>, <i>Moraxella</i> and many Gram-negatives. Long half-life allows once-daily dosing.</p>",
  ind: "<p>Severe community-acquired pneumonia, hospital-acquired pneumonia (with a macrolide or other cover), and step-down where oral options fail.</p>",
  ci: "<ul><li>Cephalosporin anaphylaxis (caution in severe penicillin allergy).</li><li><b>Neonates with hyperbilirubinaemia or receiving calcium-containing fluids</b> (fatal precipitation).</li></ul>",
  adult: "<p><b>1–2 g IV/IM once daily</b> (2 g daily in severe CAP).</p>",
  child: "<p><b>50–80 mg/kg once daily (maximum 2 g)</b>; up to 100 mg/kg/day in meningitis, in divided doses.</p>",
  neo: "<p>50 mg/kg once daily; <b>never</b> with calcium-containing infusions in neonates.</p>",
  preg: "<p>Safe (avoid near term if possible because of neonatal bilirubin displacement, but use when indicated).</p>",
  bf: "<p>Compatible.</p>",
  renal: "<p>No dose change (dual hepatic/biliary excretion); in combined hepatic and renal failure, reduce the dose.</p>",
  hep: "<p>Caution in severe liver disease (reduce dose if combined with renal failure).</p>",
  inter: "<p>Calcium-containing IV solutions in neonates; probenecid raises levels.</p>",
  ae: "<p>Diarrhoea (including <i>C. difficile</i>), rash, biliary sludging with high doses, injection-site pain.</p>",
  mon: "<p>Clinical response; watch for rash and diarrhoea.</p>",
  src: "<p>ATS/IDSA CAP 2019; BNF/BnFC; product labels.</p>"
},

cefotaxime: {
  name: "Cefotaxime", cls: "Third-generation cephalosporin", brands: "Claforan, Taxim",
  bt: "Listed — 500 mg / 1 g injection",
  moa: "<p>As for ceftriaxone, but without the biliary route — preferred in neonates and where ceftriaxone's calcium/bilirubin precautions matter.</p>",
  ind: "<p>Severe pneumonia in children and neonates; an alternative to ceftriaxone in adults.</p>",
  ci: "<p>Cephalosporin anaphylaxis.</p>",
  adult: "<p><b>1–2 g IV every 6–8 hours</b> (severe infection up to 12 g/day).</p>",
  child: "<p><b>50 mg/kg per dose IV every 6–8 hours</b> (severe infection up to 200 mg/kg/day).</p>",
  neo: "<p>50 mg/kg per dose every 12 hours (first week of life), then every 8 hours.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>CrCl 10–30: every 8–12 hours; below 10: every 12 hours.</p>",
  ae: "<p>As for ceftriaxone (less biliary effect).</p>",
  src: "<p>WHO Pocket Book 2013; BNF/BnFC.</p>"
},

cefuroxime: {
  name: "Cefuroxime (axetil)", cls: "Second-generation cephalosporin (oral)", brands: "Zinnat, Ceftum",
  bt: "Not on NEML 2025 (no cefuroxime entry found): use where locally available or substitute co-amoxiclav.",
  moa: "<p>A broad oral cephalosporin covering pneumococci, <i>H. influenzae</i> and <i>Moraxella</i>. Named by ATS/IDSA 2019 as one of the oral cephalosporins for outpatient CAP.</p>",
  ind: "<p>Outpatient community-acquired pneumonia (especially with comorbidity), alone or with a macrolide/doxycycline.</p>",
  ci: "<p>Cephalosporin anaphylaxis.</p>",
  adult: "<p><b>500 mg twice daily</b> for 5–7 days.</p>",
  child: "<p><b>15 mg/kg per dose twice daily (maximum 500 mg per dose)</b>; syrup for children over 3 months.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Reduce the dose when CrCl is below 30 mL/min.</p>",
  ae: "<p>Diarrhoea, nausea, rash.</p>",
  src: "<p>ATS/IDSA CAP 2019; BNF/BnFC.</p>"
},

cloxacillin: {
  name: "Cloxacillin / flucloxacillin", cls: "Anti-staphylococcal penicillin (beta-lactam)", brands: "Clox, Floxapen",
  bt: "Listed — 250 mg / 500 mg capsules and injection",
  moa: "<p>A penicillin resistant to staphylococcal beta-lactamase, so it is active against methicillin-susceptible <i>Staphylococcus aureus</i> (MSSA) — the organism to think of in rapidly worsening or post-influenza pneumonia.</p>",
  ind: "<p>Suspected staphylococcal pneumonia (pneumatocoeles, empyema, rapid deterioration, post-influenza), and staphylococcal skin/soft-tissue infection.</p>",
  ci: "<p>Penicillin anaphylaxis.</p>",
  adult: "<p><b>500 mg–1 g IV/oral four times daily</b> (severe infection up to 2 g four times daily).</p>",
  child: "<p><b>50 mg/kg per dose IV/oral every 6 hours</b> (WHO staphylococcal pneumonia), usually with gentamicin, for about 3 weeks.</p>",
  neo: "<p>25–50 mg/kg per dose every 8–12 hours under neonatal guidance.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Compatible.</p>",
  renal: "<p>Reduce the dose in advanced kidney failure.</p>",
  hep: "<p>Flucloxacillin rarely causes cholestatic hepatitis (monitor if jaundice).</p>",
  ae: "<p>GI upset, rash, and (flucloxacillin) rare cholestatic jaundice.</p>",
  mon: "<p>Clinical response; look for effusion/empyema that needs drainage.</p>",
  src: "<p>WHO Pocket Book 2013; BNF/BnFC.</p>"
},

piptazo: {
  name: "Piperacillin–tazobactam", cls: "Ureidopenicillin + beta-lactamase inhibitor", brands: "Tazocin, Pipzo",
  bt: "Listed — 4.5 g injection (referral level)",
  moa: "<p>Broad beta-lactam with anti-pseudomonal cover (piperacillin) plus a beta-lactamase inhibitor (tazobactam). Used for severe or hospital-acquired pneumonia, especially with <i>Pseudomonas</i> risk.</p>",
  ind: "<p>Severe community-acquired or hospital-acquired/ventilator-associated pneumonia where <i>Pseudomonas</i> or other resistant Gram-negatives are possible.</p>",
  ci: "<p>Penicillin/cephalosporin anaphylaxis.</p>",
  adult: "<p><b>4.5 g IV every 6 hours</b> (or every 8 hours in milder disease), infused over 30 minutes.</p>",
  child: "<p><b>90 mg/kg (piperacillin component) IV every 6–8 hours, maximum 4.5 g per dose</b>.</p>",
  neo: "<p>Specialist dosing only.</p>",
  preg: "<p>Safe.</p>", bf: "<p>Compatible.</p>",
  renal: "<p class='warn'>Renally cleared. CrCl 20–40: 4.5 g every 8 hours; below 20: 4.5 g every 12 hours.</p>",
  ae: "<p>Diarrhoea, rash, and (with prolonged use) bone-marrow suppression or bleeding from platelet dysfunction.</p>",
  mon: "<p>Creatinine; full blood count with prolonged courses.</p>",
  src: "<p>ATS/IDSA CAP 2019 (severe CAP/HAP); BNF/BnFC; product labels.</p>"
}
});
