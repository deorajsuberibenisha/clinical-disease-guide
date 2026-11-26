/* Pertussis (whooping cough) — all ages. Batch E-3, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §8.1.6; Bhutan VPD Integrated Surveillance Guideline 2018 ch. 7 (case definition, treatment windows, macrolides);
   EPI Manual 2022 (DTP schedule); NEML 2025 (no oral azithromycin, erythromycin 250 mg tablet only); CDC clinical care (updated Aug 2026) and PEP pages (Dec 2025);
   CDC 2005 MMWR RR-14 dosing; WHO Table 1 Dec 2025 (pertussis footnote). Calculator: pertussisrx (js/calcs-batche3.js). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "pertussis",
title: "Pertussis (Whooping Cough)",
subtitle: "Think of it in any long cough with spasms, whoop or vomiting — and in any young baby with apnoea. Treat early with a macrolide, protect the household, and notify the same day",
age: "All ages — most dangerous under 6 months", specs: ["paeds", "id", "medicine", "ph"],
keywords: ["pertussis", "whooping cough", "Bordetella pertussis", "paroxysmal cough", "whoop", "post-tussive vomiting", "apnoea", "100-day cough", "azithromycin", "erythromycin", "pyloric stenosis", "post-exposure prophylaxis", "Tdap", "DTP"],
related: ["immunisation-schedule", "bronchiolitis-child", "pneumonia-child", "croup-child"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Pertussis kills young babies, not the older children and adults who give it to them. A baby under 6 months may never whoop — the warning signs are pauses in breathing, blue spells and feeding trouble. Older children and adults have a cough that goes on for weeks.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Cough 2 weeks or more with paroxysms, whoop or post-tussive vomiting; <b>any</b> cough with apnoea in an infant ${r(2)}.</p></div>
<div><h4>Treat</h4><p>${D("azithromycin", "Azithromycin")} 5 days (first choice, and the only safe choice under 1 month), or ${D("clarithromycin", "clarithromycin")} 7 days, ${D("erythromycin", "erythromycin")} 14 days, or ${D("sulfamethoxazole", "co-trimoxazole")} 14 days from 2 months ${r(2, 5)}.</p></div>
<div><h4>Admit</h4><p>Every infant under 6 months, and anyone with apnoea, cyanosis, poor feeding or pneumonia.</p></div>
<div><h4>Protect</h4><p>Same antibiotic for household contacts; notify NEWARS immediately; complete the child's DTP vaccines ${r(2, 3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §8.1.6 lists <b>symptomatic treatment only</b>, but Bhutan's own VPD surveillance guideline recommends a macrolide for cases and coughing household members. This guide follows the VPD guideline and CDC. NEML 2025 has <b>no oral azithromycin</b> (only IV) and no erythromycin syrup — see Bhutan reality below. ${LB.bt()}</p>`)}
<div class="calc" data-calc="pertussisrx"></div>
` },
{ id: "overview", title: "The disease in brief", html: `
${tbl(["Feature", "Detail"], [
["Cause", "Bordetella pertussis, spread by droplets; highly infectious; all seasons, more in winter " + r(1)],
["Incubation", "7–14 days " + r(1)],
["Infectious period", "Most infectious in the catarrhal stage and early cough; antibiotics cut infectiousness to about 5 days of treatment " + r(2)],
["Who dies", "Young infants — before their own DTP doses have worked"],
["Who spreads it", "Older children, adolescents and adults with a 'long cough', whose immunity from vaccine or infection has waned " + r(2)],
["Immunity", "Neither infection nor vaccine gives lifelong protection " + r(2)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("Pertussis", [F.s("Bacteria attach to the ciliated airway lining"), F.a, F.s("Toxins paralyse cilia and damage the epithelium"), F.a, F.d("Mucus and debris cannot be cleared → violent coughing fits"), F.a, F.b([["Infant", F.e("Apnoea, hypoxia, seizures; pertussis toxin raises the white count — very high counts mark severe disease")], ["Older child / adult", F.ok("Weeks of paroxysmal cough, then slow recovery")]])])}
<p>The cough continues after the bacteria are gone because the airway lining takes weeks to heal. That is why antibiotics shorten infectiousness but often do little for a cough already in its paroxysmal stage ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "Bhutan VPD guideline 2018", "CDC (2005 doses; page updated 2026)", "This guide"], [
["Antibiotic for cases", "Not mentioned — symptomatic treatment only", "Macrolide: azithromycin 5 d, clarithromycin 7 d, erythromycin 14 d; co-trimoxazole 14 d if macrolide not tolerated (over 2 months)", "Same drugs and durations; azithromycin first choice in young infants", "Treat every case within the window " + LB.loc()],
["Window for treatment", "—", "Within 3 weeks of cough onset over 1 year; within 6 weeks under 1 year", "Same, plus pregnant women near term within 6 weeks", "Same"],
["Contacts", "—", "Coughing household members treated as cases", "PEP for all household contacts and high-risk contacts within 21 days", "Household PEP " + LB.loc()],
["Laboratory test", "Throat swab culture; CBC", "Blood sample to RCDC (serology)", "PCR/culture early; serology later", "Send what RCDC accepts; do not wait for results to treat"],
["Steroids, salbutamol", "—", "Not effective", "—", "Do not use for the cough"]
])}
<p><b>Why the difference?</b> The STG entry is short and predates the VPD guideline's case-management chapter. Treating cases and contacts stops spread to infants, which is the whole point of public health action ${r(2)}.</p>` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Stage", "Duration", "What you see"], [
["Catarrhal", "1–2 weeks", "Runny nose, mild cough, little or no fever — looks like a cold; most infectious"],
["Paroxysmal", "2–6 weeks or more", "Bursts of 5–10 coughs in one breath, often at night; neck veins bulge, eyes bulge, tongue out, blue; then a whoop and/or vomiting; normal between fits " + r(2)],
["Convalescent", "Weeks to months", "Cough slowly fades; may return with later colds"]
])}
<h3>Babies are different</h3>
<p>Under 6 months there may be no whoop at all. Look for apnoea, cyanosis, gagging, bradycardia, poor feeding or a seizure. Bhutan's case definition counts <b>apnoea with any cough in an infant</b> as suspected pertussis ${r(2)}.</p>
<h3>Effects of the pressure of coughing</h3>
<p>Subconjunctival and intracranial haemorrhage, petechiae, rectal prolapse, hernias, pneumothorax and rib fracture ${r(2)}.</p>
<h3>The typical patient</h3>
<p>A 7-week-old in Trashigang had one dose of pentavalent at 6 weeks. Her 12-year-old brother has coughed for 3 weeks and vomits after fits. She now has a runny nose, coughing spells and two blue spells during feeds. <b>This is pertussis until proven otherwise.</b> Admit her and give oxygen and careful feeds. Start azithromycin 10 mg/kg once daily for 5 days. Notify the same day. Treat the brother and every household member with the same course, by age and weight, and check everyone's vaccines.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue that separates it"], [
["Bronchiolitis (RSV)", "Wheeze and crackles, steady tachypnoea, no paroxysms; peaks in younger infants in winter"],
["Viral cough / post-viral cough", "No paroxysms, whoop or vomiting; cough eases over 2–3 weeks"],
["Tuberculosis", "Weight loss, fever, contact history; Bhutan's case definition says exclude TB " + r(2)],
["Asthma", "Recurrent wheeze, responds to bronchodilator"],
["Foreign body", "Sudden onset choking episode; unilateral signs"],
["Croup", "Barking cough with stridor, short illness"],
["Adenovirus, Mycoplasma, Chlamydia (infant)", "Can mimic pertussis; conjunctivitis (chlamydia), fever"]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li><b>Do not wait for any test to start treatment.</b></li>
<li>Full blood count: a high lymphocyte count supports pertussis; a very high white count in an infant warns of severe disease ${LB.exp()}.</li>
<li>Bhutan surveillance: collect blood on first contact and send it to RCDC, using the measles–rubella blood collection method ${r(2)}. The STG also lists a throat swab for culture ${r(1)}.</li>
<li>Chest X-ray if pneumonia is suspected.</li>
<li>Pulse oximetry and apnoea monitoring in every admitted infant.</li>
</ul>` },
{ id: "staging", title: "Who needs admission", html: `${tbl(["Admit", "Can be treated at home"], [
["Any infant under 6 months " + LB.exp(), "Older child or adult, feeding and breathing well between fits"],
["Apnoea, cyanosis, bradycardia", "Family can return immediately if things worsen"],
["Unable to feed, dehydration, weight loss", ""],
["Pneumonia, seizures, encephalopathy", ""],
["Hypoxia (SpO2 below 92%)", ""]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>Antibiotics — same regimens for treatment and prophylaxis</h3>
${tbl(["Drug", "Under 1 month", "1–5 months", "6 months and older", "Adults"], [
[D("azithromycin", "Azithromycin") + " (first choice)", "10 mg/kg once daily × 5 days — preferred", "10 mg/kg once daily × 5 days", "10 mg/kg (max 500 mg) day 1, then 5 mg/kg (max 250 mg) days 2–5", "500 mg day 1, then 250 mg days 2–5"],
[D("clarithromycin", "Clarithromycin"), "Not recommended", "15 mg/kg/day in 2 doses × 7 days (max 1 g/day)", "Same", "500 mg twice daily × 7 days"],
[D("erythromycin", "Erythromycin"), "Not preferred (pyloric stenosis); if no azithromycin: 40–50 mg/kg/day in 4 doses, watch closely", "40–50 mg/kg/day in 4 doses × 14 days (max 2 g/day)", "Same", "500 mg four times daily × 14 days"],
[D("sulfamethoxazole", "Co-trimoxazole") + " (alternative)", "Contraindicated under 2 months", "From 2 months: TMP 8 mg/kg/day + SMX 40 mg/kg/day in 2 doses × 14 days", "Same", "TMP 160 mg + SMX 800 mg twice daily × 14 days; not in pregnancy or breastfeeding"]
])}
<p>Doses: CDC 2005 guideline, still the dosing reference on CDC's current page ${r(5)}. Durations and drug order match Bhutan's VPD guideline ${r(2)}. Use the calculator at the top of the page for the patient's weight.</p>
<h3>Supportive care</h3>
<ul><li>Oxygen for hypoxia; gentle suction of secretions; apnoea monitoring for infants.</li><li>Small, frequent feeds or nasogastric feeds; IV fluids if needed.</li><li>Calm, quiet surroundings — handling triggers paroxysms.</li><li>No cough medicines, steroids or salbutamol: none is effective ${r(2)}.</li><li>Isolate with droplet precautions until 5 days of antibiotics are done. No school or work until then ${r(2)}.</li></ul>
${box("bt", "Bhutan reality", `<p>Oral azithromycin is <b>not on the NEML 2025</b>; only azithromycin 500 mg IV is listed, held to DH level. Erythromycin is listed only as 250 mg tablets, clarithromycin only for H. pylori, and co-trimoxazole as tablets and suspension. For infants under 1 month, ask the hospital pharmacy or VPDP for azithromycin suspension (or IV azithromycin as an inpatient). Avoid erythromycin if possible, and never give co-trimoxazole under 2 months. ${LB.loc()}</p>`)}
` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("azithromycin", "Azithromycin")} — preferred at every age, essential under 1 month. QT prolongation warning in adults with heart disease ${r(4)}.</li>
<li>${D("clarithromycin", "Clarithromycin")} — 7 days; not under 1 month.</li>
<li>${D("erythromycin", "Erythromycin")} — 14 days, four times daily, more stomach upset and poorer adherence; pyloric stenosis risk in young infants ${r(2)}.</li>
<li>${D("sulfamethoxazole", "Co-trimoxazole")} — from 2 months when a macrolide cannot be used; not in pregnancy or breastfeeding ${r(5)}.</li>
<li>Vaccines: ${D("pentavalent-vaccine", "pentavalent")}, ${D("dtp-vaccine", "DTP booster")} — see the ${"<a href=\"#/d/immunisation-schedule\">immunisation schedule</a>"}.</li>
</ul>` },
{ id: "populations", title: "Special groups", html: `
<h3>Newborns and young infants</h3><p>Azithromycin is the only first-choice drug under 1 month. Infants are treated up to 6 weeks after cough onset ${r(2, 4)}.</p>
<h3>Pregnancy</h3><p>A pregnant woman near term with pertussis is treated within 6 weeks of cough onset, so the newborn is not infected at birth ${r(4)}. Use a macrolide; co-trimoxazole is not used ${r(5)}. WHO says programmes may consider Tdap in pregnancy (2nd or 3rd trimester), the most cost-effective way to protect young infants ${r(6)}; it is not part of Bhutan's schedule.</p>
<h3>Adults and adolescents</h3><p>Often mild and missed, but they are the usual source for babies. Treat within 3 weeks of cough onset ${r(2)}.</p>` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["3-week-old, cough and apnoea; mother coughing for 2 weeks", "Admit; azithromycin 10 mg/kg/day × 5 days; treat mother and household; notify"],
["9-year-old, 5 weeks of paroxysmal cough", "Over the 3-week window: antibiotics will not help her or prevent spread; supportive care, check vaccines; still notify"],
["Household of a confirmed case includes a 2-month-old (well)", "Prophylaxis for everyone, same regimen as treatment; azithromycin for the infant"],
["Adult on macrolide with known heart disease", "Consider co-trimoxazole (not if pregnant or breastfeeding) — QT risk with azithromycin " + r(4)],
["Unvaccinated 4-year-old recovering from pertussis", "Complete DTP-containing vaccines during convalescence — infection does not give lasting protection " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Infants: apnoea, hypoxic brain injury, seizures, pneumonia, pulmonary hypertension, death.</li><li>All ages: pneumonia, weight loss, subconjunctival and intracranial haemorrhage, rectal prolapse, hernia, pneumothorax, rib fracture ${r(2)}.</li></ul>` },
{ id: "followup", title: "Public health and follow-up", html: `<ul>
<li><b>Notify immediately</b> through NEWARS (immediate reporting platform); weekly zero reporting when there are no cases ${r(2)}.</li>
<li>Case investigation form and active case search in household, neighbourhood, school and workplace ${r(2)}.</li>
<li>Prophylaxis for household contacts within 21 days of the case's cough onset; also high-risk contacts (infants, pregnant women in the third trimester, people with chronic lung or immune problems) ${r(4)}.</li>
<li>Check and complete DTP-containing vaccines for the patient and contacts ${r(2, 3)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Long cough or infant apnoea", [F.d("Cough 2+ weeks with paroxysms, whoop or vomiting — or apnoea in an infant?"), F.a, F.b([["Yes", F.e("Suspected pertussis: notify, sample, start macrolide (azithromycin under 1 month)")], ["No", F.ok("Look for other causes; reassess")]]), F.a, F.d("Under 6 months or apnoea/cyanosis/poor feeding?"), F.a, F.b([["Yes", F.e("Admit: oxygen, feeds, apnoea monitoring")], ["No", F.ok("Home treatment; 5 days off school or work")]]), F.a, F.s("Prophylaxis for household contacts; complete vaccines")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Waiting for a whoop in a baby", "Young infants often never whoop", "Apnoea + any cough = suspect"],
["Erythromycin in a newborn", "Pyloric stenosis", "Azithromycin"],
["Treating only the patient", "The household source re-infects the baby", "Prophylaxis for all household members"],
["Cough syrups or salbutamol", "No benefit", "Supportive care"],
["Antibiotics after 3 weeks of cough in an older child", "No benefit to patient or contacts", "Supportive care; protect infants in the home"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Azithromycin dose for a 4 kg, 5-week-old with pertussis?", "10 mg/kg = 40 mg once daily for 5 days.")}
${qa("Intern/MO", "Bhutan's case definition of suspected pertussis?", "Cough of at least 2 weeks with paroxysms, whoop or post-tussive vomiting without other cause; OR apnoea with any cough in an infant under 1 year; OR physician suspicion.")}
${qa("Intern/MO", "Why not co-trimoxazole for a 6-week-old?", "Contraindicated under 2 months.")}
${qa("Specialist", "Until when is treatment worthwhile?", "Within 3 weeks of cough onset from 1 year of age; within 6 weeks under 1 year (and in pregnant women near term).")}
${qa("Specialist", "What does WHO say about maternal Tdap?", "Programmes may consider 1 dose of Tdap in the 2nd or 3rd trimester; it is the most cost-effective extra strategy to protect young infants.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §8.1.6 Pertussis or whooping cough.</li>
<li id="ref-2">Vaccine Preventable Disease Programme, Ministry of Health, Bhutan. Integrated Surveillance Guideline for selected Vaccine Preventable Diseases, 1st edition, 2018, chapter 7 (Pertussis).</li>
<li id="ref-3">Vaccine Preventable Disease Program, Ministry of Health, Bhutan. EPI Manual for Health Staff, 6th edition, 2022. <a href="https://moh.gov.bt/wp-content/uploads/2025/01/Revised-EPI-Manual.pdf" target="_blank" rel="noopener">moh.gov.bt</a></li>
<li id="ref-4">Centers for Disease Control and Prevention. Pertussis: clinical care (updated 25 Aug 2026) and postexposure prophylaxis (Dec 2025). <a href="https://www.cdc.gov/pertussis/hcp/clinical-care/index.html" target="_blank" rel="noopener">cdc.gov</a> · <a href="https://www.cdc.gov/pertussis/php/postexposure-prophylaxis/index.html" target="_blank" rel="noopener">cdc.gov</a></li>
<li id="ref-5">Tiwari T, Murphy TV, Moran J. Recommended antimicrobial agents for the treatment and postexposure prophylaxis of pertussis: 2005 CDC guidelines. MMWR Recomm Rep 2005;54(RR-14):1–16. <a href="https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5414a1.htm" target="_blank" rel="noopener">cdc.gov/mmwr</a></li>
<li id="ref-6">World Health Organization. Table 1: Summary of WHO position papers — recommendations for routine immunization, updated December 2025 (pertussis: Weekly Epid Record 2015;90:433–460). <a href="https://www.who.int/publications/m/item/table1-summary-of-who-position-papers-recommendations-for-routine-immunization" target="_blank" rel="noopener">who.int</a></li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Antibiotic doses", "<span class='pass'>Checked</span>", "CDC 2005 MMWR text; durations and drug order match the Bhutan VPD guideline; infant azithromycin dose in both"],
["Treatment windows", "<span class='pass'>Checked</span>", "Bhutan VPD guideline and CDC agree"],
["STG conflict", "<span class='pass'>Shown</span>", "STG symptomatic only vs VPD guideline macrolide"],
["NEML availability", "<span class='pass'>Checked</span>", "No oral azithromycin; erythromycin 250 mg tablet only"],
["Admission criteria", "Expert guidance", "Not set out in Bhutan or CDC texts read"],
["Images", "None", "No openly licensed clinical image chosen yet"]
], "qc")}` }
]
});
})();
