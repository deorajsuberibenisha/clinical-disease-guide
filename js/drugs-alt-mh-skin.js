/* Batch J drug cards: altitude, alcohol, depression, skin and ENT.
   New: acetazolamide, fluoxetine, amitriptyline, disulfiram, permethrin, sulphur_oint, ivermectin, mupirocin, chloramphenicol_ear, td_vaccine.
   Reused (not redefined): dexamethasone, nifedipine, diazepam, thiamine, cefalexin, cloxacillin, amoxicillin, coamoxiclav, cotrimoxazole, azithromycin, doxycycline, cetirizine, paracetamol.
   Sources: Bhutan STG 2024 §1.8, §10.2.2, §10.2.4, ch.14, ch.16; Luks AM et al. WMS 2024; NICE CG100/CG115, NG222; WHO mhGAP 2023;
   WHO AWaRe Antibiotic Book 2022; IDSA 2014; WHO 2023 scabies; Bhutan NEMF 2022, NEML 2025; BNF/BNFc. */
Object.assign(GUIDE.drugs, {
acetazolamide: {
  name: "Acetazolamide", cls: "Carbonic anhydrase inhibitor",
  bt: "Listed — acetazolamide 250 mg tablet, NRH/RRH/DH (NEML 2025). Not at PHC: travellers to Gasa, Lunana, Laya or Merak should carry it.",
  moa: "<p>Causes a mild metabolic acidosis that drives breathing, speeding acclimatisation.</p>",
  ind: "<p>Prevention of acute mountain sickness (AMS) in moderate- or high-risk ascents; treatment of AMS; also glaucoma.</p>",
  ci: "<p>Sulfonamide anaphylaxis (ordinary 'sulfa' rash is not a contraindication, WMS 2024); severe liver or kidney disease; hypokalaemia.</p>",
  adult: "<p><b>Prevention (WMS 2024):</b> 125 mg twice daily, starting the day before ascent, until 2–3 days at the highest altitude or descent begins. <b>Treatment of AMS:</b> 250 mg twice daily (Bhutan STG).</p>",
  child: "<p>Prevention 1.25 mg/kg twice daily (max 125 mg); treatment 2.5 mg/kg twice daily (max 250 mg).</p>",
  preg: "<p>Avoid in the first trimester if possible; prefer slow ascent.</p>",
  ae: "<p>Tingling of fingers and lips, frequent urination, flat taste of fizzy drinks; rarely Stevens–Johnson syndrome.</p>",
  src: "<p>Bhutan STG 2024 §1.8; Luks AM et al. Wilderness Environ Med 2024; NEMF 2022.</p>"
},
fluoxetine: {
  name: "Fluoxetine", cls: "SSRI antidepressant",
  bt: "Listed — fluoxetine 20 mg capsule, NRH/RRH/DH (NEML 2025). The only SSRI on the NEML.",
  moa: "<p>Selective serotonin reuptake inhibitor; long half-life (so missed doses and stopping are gentle).</p>",
  ind: "<p>Moderate to severe depression; first choice in adolescents (with psychological therapy); anxiety disorders, OCD, bulimia.</p>",
  ci: "<p>Mania; use with MAOIs. Caution in epilepsy and bleeding risk (with aspirin, NSAIDs, anticoagulants).</p>",
  adult: "<p>20 mg each morning; review at 2–4 weeks; increase by 20 mg if needed (usual 20–40 mg, max 60 mg; elderly max 40 mg). Treat for at least 6 months after remission (STG: at least as long as the illness, minimum 6 months; NICE NG222 6 months; 2 years if recurrent).</p>",
  child: "<p>8–18 years, specialist-guided: 10 mg daily, increase to 20 mg after 1–2 weeks. Warn about early agitation and suicidal thoughts; review weekly at first.</p>",
  preg: "<p>Can be continued when needed; small risk of neonatal adaptation syndrome.</p>", bf: "<p>Sertraline preferred, but fluoxetine acceptable if already established; watch the baby for irritability.</p>",
  hep: "<p>Use lower or alternate-day dosing in cirrhosis.</p>",
  inter: "<p>Tramadol, triptans (serotonin syndrome); warfarin, NSAIDs (bleeding); inhibits CYP2D6 (raises TCA and some beta-blocker levels).</p>",
  ae: "<p>Nausea, headache, insomnia, jitteriness in the first 2 weeks; sexual dysfunction; hyponatraemia in older adults; activation of mania.</p>",
  src: "<p>Bhutan STG 2024 §10.2.4; NEMF 2022; NICE NG222 (2022); WHO mhGAP 2023.</p>"
},
amitriptyline: {
  name: "Amitriptyline", cls: "Tricyclic antidepressant",
  bt: "Listed — amitriptyline 25 mg tablet, NRH/RRH/DH (NEML 2025).",
  moa: "<p>Blocks serotonin and noradrenaline reuptake; strongly sedating and anticholinergic.</p>",
  ind: "<p>Depression with marked insomnia (Bhutan STG), when an SSRI is unsuitable; neuropathic pain; migraine prevention.</p>",
  ci: "<p>Recent MI, arrhythmia, heart block; mania; severe liver disease. <b>Dangerous in overdose</b> (a week's adult antidepressant dose can kill): avoid in people at suicide risk, or supply small quantities.</p>",
  adult: "<p>Depression: 25 mg at night (STG range 12.5–100 mg), increasing by 25 mg weekly to 75–100 mg. Neuropathic pain 10–25 mg at night.</p>",
  child: "<p>Not for depression in children or adolescents.</p>",
  elderly: "<p>Avoid if possible: falls, confusion, urinary retention, postural hypotension.</p>",
  tox: "<p>Overdose: QRS widening, arrhythmia, seizures, coma. Give sodium bicarbonate 1–2 mmol/kg IV if QRS over 100 ms.</p>",
  ae: "<p>Dry mouth, constipation, blurred vision, sedation, weight gain, postural hypotension.</p>",
  src: "<p>Bhutan STG 2024 §10.2.4; NEMF 2022; BNF.</p>"
},
disulfiram: {
  name: "Disulfiram", cls: "Aldehyde dehydrogenase inhibitor (alcohol deterrent)",
  bt: "Listed — disulfiram 250 mg tablet, NRH/RRH (NEML 2025). Naltrexone and acamprosate are not listed.",
  moa: "<p>Blocks breakdown of acetaldehyde, so drinking causes flushing, vomiting, palpitations and hypotension.</p>",
  ind: "<p>Relapse prevention in motivated, abstinent patients with supervised dosing (NICE CG115: second-line after acamprosate or naltrexone).</p>",
  ci: "<p>Heart disease, uncontrolled hypertension, psychosis, suicide risk, pregnancy, severe liver disease; must be at least 24 hours alcohol-free.</p>",
  adult: "<p>STG/NEMF: 500 mg once daily for 1–2 weeks, then 250 mg daily (NICE: 200 mg daily usual maintenance). Family-supervised.</p>",
  hep: "<p>Check LFT at baseline and every 2 weeks for 2 months (rare hepatitis).</p>",
  inter: "<p>Hidden alcohol (syrups, mouthwash, some vinegars); metronidazole; warfarin, phenytoin levels rise.</p>",
  ae: "<p>Drowsiness, metallic taste, neuropathy, hepatitis. The reaction with alcohol can be severe.</p>",
  src: "<p>NEMF 2022; NICE CG115 (2011).</p>"
},
permethrin: {
  name: "Permethrin 5% cream", cls: "Topical scabicide (pyrethroid)",
  bt: "Listed — permethrin 5% cream, 60 g tube, to PHC (NEML 2025).",
  moa: "<p>Paralyses and kills mites and eggs.</p>",
  ind: "<p>Scabies (first line, WHO 2023, Bhutan STG); also head lice (1% lotion).</p>",
  ci: "<p>Infants under 2 months (use sulphur ointment).</p>",
  adult: "<p>Apply to cool, dry skin over the <b>whole body from the neck down</b> (include finger webs, under nails, genitals, soles); in the elderly and immunocompromised include scalp, face and ears. Leave 8–12 hours (overnight), then wash off. <b>Repeat after 7 days.</b> Re-apply to hands if washed. Adult: about 30 g per application (up to 60 g).</p>",
  child: "<p>Over 2 months: include scalp, face and ears (not around eyes or mouth). Roughly 2 months–1 year 3.75 g, 1–5 y 7.5 g, 6–12 y 15 g per application.</p>",
  preg: "<p>Safe in pregnancy and breastfeeding (wash off the nipples before feeds).</p>",
  ae: "<p>Burning and stinging; itch may persist 2–4 weeks after cure (not treatment failure).</p>",
  src: "<p>Bhutan STG 2024 §16.1.4.1; NEMF 2022; WHO 2023; BNF.</p>"
},
sulphur_oint: {
  name: "Sulphur ointment (precipitated sulphur 5–10% in petrolatum)", cls: "Topical scabicide",
  bt: "Sulphur sublime powder listed for compounding, to PHC (NEML 2025).",
  moa: "<p>Kills mites; cheap and safe.</p>",
  ind: "<p>Scabies in infants under 2 months, or when permethrin is unavailable (Bhutan STG).</p>",
  adult: "<p>10% applied to the whole body daily for 3 nights, washed off 24 hours after the last application; repeat after 1 week.</p>",
  child: "<p>Infants: 5–6% (STG 6%), same schedule.</p>",
  preg: "<p>Safe.</p>",
  ae: "<p>Smell, staining, irritation.</p>",
  src: "<p>Bhutan STG 2024 §16.1.4.1; NEMF 2022.</p>"
},
ivermectin: {
  name: "Ivermectin (oral)", cls: "Anthelminthic / scabicide",
  bt: "<b>Not on NEML 2025</b>. NEMF mentions it only for crusted scabies alongside permethrin. Obtain through the specialist or programme.",
  moa: "<p>Paralyses mites by glutamate-gated chloride channels; does not kill eggs, so 2 doses 7 days apart are needed.</p>",
  ind: "<p>Crusted scabies (with permethrin); outbreaks in institutions (monasteries, hostels, prisons); mass drug administration where prevalence is 10% or more (WHO 2023).</p>",
  ci: "<p>Children under 15 kg; pregnancy; breastfeeding in the first week.</p>",
  adult: "<p>200 microgram/kg orally with food, repeated after 7 days. Crusted scabies: days 1, 2, 8, 9 and 15 (plus 22 and 29 if severe).</p>",
  child: "<p>15 kg and over: 200 microgram/kg, repeated after 7 days.</p>",
  preg: "<p>Avoid.</p>",
  ae: "<p>Usually well tolerated; itch flare. Risk of encephalopathy in people with high Loa loa loads (not present in Bhutan).</p>",
  src: "<p>WHO 2023 scabies guidance; Romani L et al. NEJM 2015; NEMF 2022.</p>"
},
mupirocin: {
  name: "Mupirocin 2%", cls: "Topical antibiotic",
  bt: "Listed — mupirocin 2% cream 15 g, NRH/RRH/DH (NEML 2025). Fusidic acid (mentioned in the STG) is not listed.",
  moa: "<p>Inhibits bacterial isoleucyl-tRNA synthetase; active against staphylococci and streptococci.</p>",
  ind: "<p>Localised impetigo (few lesions); nasal decolonisation for recurrent boils.</p>",
  adult: "<p>Apply 3 times daily for 5 days (max 10 days). Decolonisation: nostrils twice daily for 5 days.</p>",
  child: "<p>As adults.</p>",
  ae: "<p>Local irritation. Resistance rises with long or repeated use: keep courses short.</p>",
  src: "<p>NEMF 2022; Bhutan STG 2024 §16.1.2; NICE NG153 (2020).</p>"
},
chloramphenicol_ear: {
  name: "Chloramphenicol (topical, for the ear canal)", cls: "Topical antibiotic",
  bt: "Listed — chloramphenicol 1% eye ointment and 0.4% eye drops, to PHC (NEML 2025). The STG uses the ointment for otitis externa; no dedicated ear drop is listed.",
  moa: "<p>Broad-spectrum bacteriostatic antibiotic; weak against <i>Pseudomonas</i>.</p>",
  ind: "<p>Acute otitis externa after ear cleaning (Bhutan STG); eye infections.</p>",
  ci: "<p>Do not put drops or ointment into a middle ear through a perforation unless the product is safe there (quinolone drops are preferred internationally when the drum is perforated).</p>",
  adult: "<p>After cleaning, apply ointment to the canal (on a wick if swollen) 2–3 times daily for 7 days; review in 1–2 days.</p>",
  child: "<p>As adults.</p>",
  ae: "<p>Local sensitivity.</p>",
  src: "<p>Bhutan STG 2024 §14.1; NEMF 2022; AAO-HNS 2014.</p>"
},
benzathine_pen: {
  name: "Benzathine benzylpenicillin (benzathine penicillin G)", cls: "Long-acting penicillin",
  bt: "Listed — benzathine benzylpenicillin injection (NEML 2025).",
  moa: "<p>Slow release from the injection site gives low penicillin levels for 2–4 weeks: enough for streptococci and syphilis.</p>",
  ind: "<p>Group A streptococcal pharyngitis when adherence to 10 days of oral treatment is doubtful (single dose); secondary prophylaxis of rheumatic fever; syphilis.</p>",
  ci: "<p>Penicillin anaphylaxis. Never give intravenously.</p>",
  adult: "<p>Strep throat: 1.2 million units deep IM once. Rheumatic fever prophylaxis: 1.2 million units every 3–4 weeks.</p>",
  child: "<p>Under 27 kg (or under 6 years): 600,000 units deep IM once; 27 kg and over: 1.2 million units.</p>",
  preg: "<p>Safe.</p>",
  ae: "<p>Painful injection (dilute with lidocaine where the product allows); anaphylaxis is rare but observe for 30 minutes.</p>",
  src: "<p>WHO AWaRe Antibiotic Book 2022; IDSA 2012; WHO 2024 rheumatic heart disease guideline; NEML 2025.</p>"
},
td_vaccine: {
  name: "Tetanus–diphtheria vaccine (Td)", cls: "Toxoid vaccine",
  bt: "Listed — Td vaccine 5 mL multi-dose vial, to PHC (NEML 2025). Tetanus immunoglobulin also listed.",
  moa: "<p>Induces antitoxin; booster response within days in primed people.</p>",
  ind: "<p>Tetanus-prone wounds (animal bites, burns, dirty or puncture wounds) when not fully immunised or last dose over 5–10 years ago.</p>",
  adult: "<p>0.5 mL IM. Unknown or incomplete history: start/complete a 3-dose course, and give tetanus immunoglobulin for high-risk wounds.</p>",
  child: "<p>Under 7 years use DTP-containing vaccines per the national schedule.</p>",
  preg: "<p>Safe and recommended.</p>",
  ae: "<p>Sore arm, mild fever.</p>",
  src: "<p>NEMF 2022; WHO tetanus position paper 2017.</p>"
}
});

(function () {
  const D = GUIDE.drugs, add = (id, f, html) => { if (D[id]) D[id][f] = (D[id][f] || "") + html; };
  add("dexamethasone", "adult", "<p><b>High-altitude illness (Bhutan STG, WMS 2024):</b> HACE 8 mg PO/IV/IM, then 4 mg every 6 hours; severe AMS 4 mg every 6 hours. Descend; it treats symptoms but does not aid acclimatisation.</p>");
  add("dexamethasone", "child", "<p><b>HACE or severe AMS:</b> 0.15 mg/kg every 6 hours (max 4 mg).</p>");
  add("nifedipine", "adult", "<p><b>HAPE (Bhutan STG):</b> 20 mg three times daily (WMS 2024: 30 mg modified-release twice daily), with oxygen and descent. Watch for hypotension.</p>");
  add("diazepam", "adult", "<p><b>Alcohol withdrawal (Bhutan STG):</b> 15 mg TDS for 2 days, 10 mg TDS for 2 days, 5 mg TDS for 2 days, 5 mg at night for 2 days; extra 5–10 mg IV slowly (max 40 mg/day extra) for severe agitation or DTs. Symptom-triggered dosing by CIWA-Ar is an alternative. Use lorazepam or oxazepam if liver failure.</p>");
  add("thiamine", "adult", "<p><b>Alcohol use disorder (Bhutan STG):</b> 100 mg IV stat, then 75 mg orally 2–3 times daily for up to 3 months. Wernicke's suspected: 500 mg IV 8-hourly for 3–5 days (Pabrinex-equivalent; RCP/NICE). Always before glucose.</p>");
  add("cefalexin", "adult", "<p><b>Cellulitis and impetigo (WHO AWaRe 2022):</b> 500 mg 8-hourly (1 g if obese or severe) for 5 days.</p>");
  add("cefalexin", "child", "<p><b>Skin infections (AWaRe):</b> 25 mg/kg 12-hourly (max 500 mg per dose) for 5 days.</p>");
  add("cloxacillin", "adult", "<p><b>Cellulitis, boils with cellulitis (AWaRe, STG):</b> 500 mg 6-hourly on an empty stomach for 5 days; severe: 2 g IV 6-hourly.</p>");
  add("cloxacillin", "child", "<p><b>Skin infections:</b> 15 mg/kg 6-hourly orally (max 500 mg); severe: 25–50 mg/kg IV 6-hourly.</p>");
  add("amoxicillin", "adult", "<p><b>Sore throat (Bhutan STG):</b> 500 mg TDS for 7–10 days (WHO AWaRe: 500 mg TDS or 1 g BD for 10 days for proven or likely streptococcal pharyngitis). <b>Otitis media and sinusitis (AWaRe):</b> 500 mg TDS or 1 g BD for 5 days.</p>");
  add("amoxicillin", "child", "<p><b>Otitis media and sinusitis (AAP 2013, AWaRe):</b> 80–90 mg/kg/day in 2 doses (max 1 g per dose) for 5 days (10 days under 2 years or severe). STG uses 15 mg/kg TDS for 7–10 days. <b>Streptococcal pharyngitis:</b> 50 mg/kg once daily (max 1 g) or 25 mg/kg BD for 10 days (IDSA 2012).</p>");
})();
