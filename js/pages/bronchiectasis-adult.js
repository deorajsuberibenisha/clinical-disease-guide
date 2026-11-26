/* Bronchiectasis — adults. Batch E-5, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §3.7 Bronchiectasis (deriphyllin SR, amoxicillin or co-trimoxazole 7–10 days for infection, postural drainage,
   refer all new cases); BCR topic page "bronchiect" (salbutamol MDI 2 puffs 8-hourly, from the STG); NEML 2025.
   BTS Guideline for bronchiectasis in adults 2019 (Hill et al., Thorax 74 Suppl 1) — full text on thorax.bmj.com (imaging, aetiology bundle, airway
   clearance, rehabilitation, 14-day exacerbation courses, long-term antibiotics at ≥3 exacerbations/year, P. aeruginosa eradication with ciprofloxacin
   500–750 mg bd for 2 weeks, macrolide safety checks). ERS adult bronchiectasis guideline 2017 (Polverino et al., ERJ 50:1700629) — full text on
   publications.ersnet.org (minimum aetiology bundle, 14 days for exacerbations, long-term antibiotics, macrolide doses used in trials, mucoactives, surgery).
   Not read: the BTS table of first-line exacerbation antibiotics per organism (table page not reachable) — organism-specific choices are marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "bronchiectasis-adult",
title: "Bronchiectasis — adults",
subtitle: "Daily cough with large amounts of sputum for months or years, often after TB or a bad childhood pneumonia: confirm it, find the cause, clear the airways every day, and treat flares early and for long enough",
age: "Adults", specs: ["resp", "medicine", "id"],
keywords: ["bronchiectasis", "non-cystic fibrosis bronchiectasis", "post-TB bronchiectasis", "chronic productive cough", "copious sputum", "haemoptysis", "airway clearance", "postural drainage", "active cycle of breathing", "Pseudomonas aeruginosa", "eradication", "azithromycin long-term", "macrolide prophylaxis", "inhaled colistin", "bronchiectasis exacerbation", "FACED score", "bronchiectasis severity index"],
related: ["tb-adult", "copd-adult", "pneumonia-adult", "lung-abscess-adult", "asthma-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">In Bhutan the patient with bronchiectasis is usually someone who had tuberculosis years ago, has been "cured", and still coughs up a cup of sputum every morning. The disease is permanent, but good daily care — clearing the airways, early and full courses of antibiotics, vaccination, no smoke — keeps most people out of hospital.</p>
<div class="glance">
<div><h4>Suspect it</h4><p>Cough with sputum most days, repeated "chest infections", haemoptysis, coarse crackles — especially after TB, measles or severe pneumonia ${r(1)}.</p></div>
<div><h4>Confirm it</h4><p>Chest X-ray first, then <b>thin-section CT</b> when the patient is stable ${r(2)}. The STG asks that <b>all new cases are referred</b> for diagnosis ${r(1)}.</p></div>
<div><h4>Every day</h4><p>Airway clearance taught by a physiotherapist (or postural drainage twice a day), exercise, stop smoking, vaccines ${r(1, 2, 3)}.</p></div>
<div><h4>Flare</h4><p>Sputum culture first, then antibiotics for <b>14 days</b> (shorter only in mild disease); always 14 days for <i>Pseudomonas</i> ${r(2, 3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§3.7) gives deriphyllin SR 300 mg daily, amoxicillin 500 mg TDS or co-trimoxazole for 7–10 days during infection, postural drainage twice daily, and referral of every new case ${r(1)}. CT is available at the national and regional referral hospitals; sputum culture is available at referral hospitals. Always exclude active TB (sputum AFB / GeneXpert) when symptoms change, because the old TB cavity and the bronchiectatic lung look alike on an X-ray ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Definition", "Abnormal and permanent widening and distortion of one or more airways, usually after earlier infection " + r(1)],
["Common causes in Bhutan", "Previous tuberculosis, bronchopneumonia, chronic bronchitis, measles; more common in malnourished people " + r(1)],
["Other causes to look for", "Immune deficiency (low immunoglobulins), allergic bronchopulmonary aspergillosis (ABPA), cystic fibrosis, primary ciliary dyskinesia, alpha-1 antitrypsin deficiency, rheumatoid arthritis and other connective tissue disease, inflammatory bowel disease, aspiration, non-tuberculous mycobacteria " + r(2, 3)],
["Idiopathic", "Often no cause is found even after testing " + r(2)],
["Overlap with COPD", "In pooled studies about half (54%) of people with COPD who had CT had bronchiectasis; together they mean more sputum, more exacerbations and higher mortality " + r(2)],
["Course", "Chronic, with flares (exacerbations) that drive lung function decline and admissions " + r(2, 3)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("The vicious cycle", [F.s("First insult: TB, severe pneumonia, measles, aspiration, immune defect"), F.a, F.s("Damaged cilia and mucus clearance"), F.a, F.s("Mucus pools in the airways → chronic bacterial infection (Haemophilus, Pseudomonas, Staph)"), F.a, F.s("Neutrophilic inflammation releases enzymes that further damage the airway wall"), F.a, F.d("Wider, floppier airways clear even less → the cycle repeats"), F.a, F.e("Exacerbations, haemoptysis, breathlessness, respiratory failure, cor pulmonale")])}
<p>Every part of treatment attacks one link of this cycle: airway clearance removes the pooled mucus, antibiotics lower the bacterial load, and finding the cause (for example immune deficiency or ABPA) can stop the first insult repeating ${r(2, 3)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "BTS 2019 / ERS 2017", "This guide"], [
["Antibiotic course for a flare", "Amoxicillin 500 mg TDS or co-trimoxazole for 7–10 days", "14 days is standard (ERS: 14 days, conditional, very low-quality evidence); shorter courses may be enough in mild disease (BTS); always 14 days for <i>P. aeruginosa</i>", "14 days for moderate–severe flares and any <i>Pseudomonas</i>; 7–10 days acceptable for a mild flare in mild disease " + LB.int()],
["Theophylline (deriphyllin)", "Deriphyllin SR 300 mg once daily", "Not part of either guideline; long-acting bronchodilators only for significant breathlessness, case by case (ERS)", "Use the STG bronchodilator if already helping; prefer an inhaled bronchodilator for breathlessness and before physiotherapy " + LB.exp()],
["Diagnosis", "Chest X-ray; refer all new cases", "Thin-section CT confirms the diagnosis", "Refer for CT as the STG says " + LB.bt()],
["Aetiology tests", "CBC, ESR, sputum AFB, Gram stain, culture", "Minimum bundle: differential blood count, serum IgG/IgA/IgM, tests for ABPA (total IgE, aspergillus sensitisation); sputum culture incl. mycobacteria", "Do the STG tests locally; add immunoglobulins and IgE/aspergillus at the referral centre " + LB.loc()],
["Prevention of flares", "Not covered", "Long-term antibiotics if 3 or more exacerbations a year (macrolide, or inhaled antibiotic if chronic <i>Pseudomonas</i>)", "Specialist decision; exclude NTM and check hearing first " + LB.int()],
["Postural drainage", "Twice daily for 10 minutes, then slow deep breathing for 10 minutes", "Active cycle of breathing or oscillating PEP device; gravity-assisted positions to enhance it", "Both are fine — the key is that it is done every day " + LB.loc()]
])}
<p>The main difference is length of treatment for flares. The STG's 7–10 days is reasonable for a mild flare in someone with mild disease; for a patient with lots of sputum, <i>Pseudomonas</i> or repeated flares, both international guidelines give 14 days.</p>` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Chronic cough with copious mucopurulent sputum, often worst in the morning ${r(1)}.</li>
<li>Blood-stained sputum or frank haemoptysis ${r(1)}.</li>
<li>Breathlessness, fever during flares, fatigue, weight loss ${r(1)}.</li>
<li>Signs: pallor, cyanosis, clubbing (more in moderate–severe disease), wasting; coarse crackles, rhonchi, scattered wheeze and inspiratory squeaks over the affected area; signs of cor pulmonale in advanced disease ${r(1)}.</li>
</ul>
<h3>What counts as an exacerbation</h3>
<p>A clear worsening for at least 48 hours in three or more of: cough, sputum volume or thickness, sputum purulence, breathlessness or exercise tolerance, fatigue, haemoptysis — and a clinician decides a change in treatment is needed ${LB.exp("EMBARC/ERS CONSENSUS DEFINITION — NOT READ FOR THIS PAGE")}.</p>
<h3>The typical patient</h3>
<p>A 46-year-old farmer from Mongar was treated for pulmonary TB 12 years ago. Since then he has coughed up thick yellow sputum every morning and has had "pneumonia" three times this year. He is thin and clubbed, with coarse crackles at both bases. Sputum AFB and GeneXpert are negative. <b>Refer for CT</b>, which shows bilateral lower-lobe cylindrical bronchiectasis. Teach airway clearance, give a written plan for flares, vaccinate, and send sputum for culture; with three flares a year, the specialist can discuss a long-term macrolide once NTM has been excluded ${r(1, 2, 3)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Active pulmonary TB (or relapse)", "New fever, night sweats, weight loss, cavity; sputum AFB / GeneXpert positive — always check"],
["COPD / chronic bronchitis", "Smoker, airflow obstruction; may coexist — CT if large sputum volumes or Pseudomonas"],
["Lung abscess", "Acute illness, foul sputum, single cavity with fluid level"],
["Lung cancer", "Smoker over 40, new haemoptysis, persistent localised collapse or consolidation"],
["Asthma", "Variable wheeze, little sputum; but severe asthma can coexist"],
["Non-tuberculous mycobacteria", "Slow decline, nodules and cavities; needs mycobacterial culture"]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li><b>Chest X-ray</b> at baseline; may show tram-lines and ring shadows but can be normal ${r(2)}.</li>
<li><b>Thin-section CT</b> to confirm the diagnosis, done when the patient is clinically stable ${r(2)}.</li>
<li><b>Sputum</b>: Gram stain and culture at diagnosis and at each flare (before antibiotics); AFB/GeneXpert in Bhutan; mycobacterial culture in all patients ${r(1, 2)}.</li>
<li><b>Bloods</b>: full blood count with differential; serum IgG, IgA and IgM; total IgE and aspergillus-specific IgE or skin test for ABPA ${r(2, 3)}; ESR ${r(1)}.</li>
<li>Targeted: cystic fibrosis testing (young onset, infertility, malabsorption, pancreatitis); primary ciliary dyskinesia (neonatal distress, symptoms since childhood, recurrent otitis, sinusitis, infertility); HIV serology depending on risk; autoimmune screen if suggested ${r(2)}.</li>
<li>Spirometry to measure severity and follow decline ${LB.exp()}.</li>
</ul>` },
{ id: "staging", title: "Severity", html: `
<p>BTS suggests using a severity score to guide management ${r(2)}. The simplest is <b>FACED</b> ${r(2)}:</p>
${tbl(["Factor", "Points"], [
["FEV<sub>1</sub> % predicted", "≥ 50% = 0; &lt; 50% = 2"],
["Age", "≤ 70 years = 0; &gt; 70 years = 2"],
["Chronic colonisation with <i>P. aeruginosa</i>", "No = 0; Yes = 1"],
["Extent on CT", "1–2 lobes = 0; more than 2 lobes = 1"],
["Dyspnoea (modified MRC)", "Grades 1–2 = 0; III–IV = 1"],
["Total", "0–2 mild; 3–4 moderate; 5–7 severe"]
])}
<p>The fuller Bronchiectasis Severity Index (BSI) also uses BMI, previous admissions, exacerbations and other organisms ${r(2)}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Every patient — stable state</h3>
<ul>
<li><b>Airway clearance</b>: teach every patient. A respiratory physiotherapist should teach the active cycle of breathing technique or an oscillating PEP device, once or twice a day; gravity-assisted positions help where safe ${r(2, 3)}. The STG's simple version: postural drainage twice daily for 10 minutes, cough out the sputum, then breathe slowly and deeply for 10 minutes ${r(1)}.</li>
<li><b>Pulmonary rehabilitation and regular exercise</b> for anyone limited by breathlessness (mMRC ≥ 1) ${r(2, 3)}.</li>
<li><b>Stop smoking</b>, avoid second-hand and kitchen smoke, good nutrition ${r(1)}.</li>
<li><b>Vaccines</b>: annual influenza and pneumococcal vaccination ${r(1, 2)} — see ${D("influenza-vaccine", "influenza vaccine")} and ${D("pcv13-vaccine", "PCV13")}.</li>
<li><b>Bronchodilators</b>: an inhaled short-acting bronchodilator before physiotherapy helps; long-acting ones only for significant breathlessness ${r(3)}. STG: salbutamol MDI 2 puffs 8-hourly and as needed; deriphyllin SR 300 mg once daily ${r(1)}.</li>
<li><b>Mucoactive treatment</b> (for example nebulised hypertonic saline) for ≥ 3 months when sputum is hard to clear and physiotherapy alone has failed; <b>never recombinant DNase</b> in non-CF bronchiectasis ${r(3)}.</li>
<li>Inhaled corticosteroids are not routine — only for coexisting asthma or COPD ${LB.exp()}.</li>
</ul>
<h3>2. Exacerbations</h3>
<ol>
<li>Send sputum for culture <b>before</b> antibiotics ${r(2)}.</li>
<li>Start empirical antibiotics guided by previous cultures; adjust if there is no improvement ${r(2)}.</li>
<li>Duration: <b>14 days</b> is standard; always 14 days for <i>P. aeruginosa</i>; shorter courses may do in mild disease ${r(2, 3)}.</li>
<li>Give IV antibiotics if the patient is very unwell, has resistant organisms, or failed oral treatment ${r(2)}.</li>
<li>Step up airway clearance; admitted patients should see the physiotherapist daily ${r(2)}.</li>
</ol>
${tbl(["Situation", "Usual choice", "Source"], [
["No previous culture, mild–moderate", "Amoxicillin 500 mg three times daily (or co-trimoxazole 960 mg twice daily if allergic)", "STG " + r(1)],
["Previous <i>H. influenzae</i> / <i>S. pneumoniae</i>", "Amoxicillin (or doxycycline if allergic) for 14 days", LB.exp("BTS TABLE 6 NOT READ")],
["Previous <i>P. aeruginosa</i>", "Oral ciprofloxacin 500–750 mg twice daily for 14 days; IV anti-pseudomonal beta-lactam (e.g. ceftazidime, piperacillin–tazobactam) if severe", r(2) + " for the dose (eradication regimen); " + LB.exp("FLARE USE")],
["<i>S. aureus</i> (MSSA)", "Cloxacillin / dicloxacillin", LB.exp("BTS TABLE 6 NOT READ")]
])}
<h3>3. New growth of <i>Pseudomonas aeruginosa</i></h3>
<p>Offer eradication if the patient is deteriorating with a first (or new) growth: <b>ciprofloxacin 500–750 mg twice daily for 2 weeks</b>; second line, 2 weeks of an IV anti-pseudomonal beta-lactam with or without an aminoglycoside, followed by 3 months of nebulised colistin, gentamicin or tobramycin ${r(2)}. ERS suggests eradication only for <i>Pseudomonas</i>, not for other organisms ${r(3)}.</p>
<h3>4. Three or more exacerbations a year</h3>
<p>Consider long-term antibiotics ${r(2, 3)}:</p>
${tbl(["Patient", "BTS 2019 first choice", "Alternatives"], [
["Chronic <i>P. aeruginosa</i>", "Inhaled colistin", "Inhaled gentamicin; azithromycin or erythromycin if inhaled antibiotics are not tolerated, or added on if flares stay frequent " + r(2)],
["No <i>Pseudomonas</i>", "Azithromycin or erythromycin", "Inhaled gentamicin; doxycycline if macrolides fail or are not tolerated " + r(2)]
])}
<p>Doses used in trials and practice: <b>azithromycin 250 mg daily, or 500 mg or 250 mg three times a week; erythromycin 400 mg twice daily</b> ${r(3)}. Before a long-term macrolide: at least one negative sputum culture for non-tuberculous mycobacteria, and caution with significant hearing loss or balance problems; before inhaled aminoglycosides avoid CrCl &lt; 30 mL/min and other nephrotoxic drugs ${r(2)}. Macrolide resistance develops with long-term use ${r(2)}. Stay on one antibiotic rather than rotating monthly ${r(2)}.</p>
<h3>5. Surgery</h3>
<p>Only for localised disease with frequent flares despite everything else ${r(3)}; also bronchial artery embolisation for massive haemoptysis ${LB.exp()}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("amoxicillin", "Amoxicillin")} 500 mg three times daily — NEML (250 mg capsules) ${r(1, 4)}.</li>
<li>${D("sulfamethoxazole", "Co-trimoxazole")} 960 mg twice daily (STG alternative) — NEML ${r(1, 4)}.</li>
<li>${D("doxycycline", "Doxycycline")} — NEML 100 mg capsule; alternative for penicillin allergy ${r(4)}.</li>
<li>${D("ciprofloxacin", "Ciprofloxacin")} 500–750 mg twice daily (Pseudomonas) — NEML 500 mg tablet ${r(2, 4)}.</li>
<li>${D("azithromycin", "Azithromycin")} long-term (specialist) ${r(3)} — <b>oral azithromycin is not on NEML 2025</b> (only the 500 mg IV injection) ${r(4)}; ${D("erythromycin", "erythromycin")} stearate 250 mg tablets are on NEML; trial dose 400 mg twice daily ${r(3)}.</li>
<li>${D("ceftazidime", "Ceftazidime")} and ${D("piperacillin-tazobactam", "piperacillin–tazobactam")} for severe Pseudomonas flares are <b>not on NEML 2025</b> — referral-centre procurement; ${D("gentamicin", "gentamicin")} 40 mg/mL is on NEML ${r(4)}.</li>
<li>${D("colistin", "Colistin")} and ${D("tobramycin", "tobramycin")} by nebuliser — not standard in Bhutan; referral centre only.</li>
<li>${D("salbutamol", "Salbutamol")} MDI 2 puffs 8-hourly and as needed — NEML ${r(1, 4)}.</li>
<li>Deriphyllin (etofylline + theophylline) SR 300 mg once daily — STG ${r(1)}; no monograph in this database; watch for interactions with ciprofloxacin and macrolides (theophylline levels rise) ${LB.exp()}.</li>
<li>Hypertonic saline for nebulisation — NEML 2025 lists sodium chloride 3% only as a 100 mL solution for injection (DH with ophthalmologist), not a nebuliser product; see ${D("sodium-chloride", "sodium chloride")} ${r(4)} ${LB.loc()}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Post-TB lung", "Commonest cause in Bhutan; recheck sputum AFB/GeneXpert at any change — new TB, relapse or NTM can hide in old damage " + r(1) + " " + LB.loc()],
["COPD with frequent flares and Pseudomonas", "Think of coexisting bronchiectasis and get a CT " + r(2)],
["Pregnancy", "Avoid doxycycline and long courses of ciprofloxacin; amoxicillin or a macrolide (erythromycin preferred) " + LB.exp()],
["Young patient or no cause", "Refer for immune, CF and PCD testing " + r(2)],
["Children", "Chronic wet cough over 4 weeks needs evaluation for protracted bacterial bronchitis and bronchiectasis — see a paediatrician " + LB.exp()],
["Massive haemoptysis", "Lie on the bleeding side, oxygen, tranexamic acid, urgent referral for embolisation " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Known bronchiectasis, more and greener sputum for 4 days, SpO₂ 95%", "Sputum culture, then amoxicillin (or last effective antibiotic) for 14 days unless disease is mild; daily airway clearance " + r(2, 3)],
["Sputum grows P. aeruginosa for the first time; patient worse", "Ciprofloxacin 500–750 mg twice daily for 2 weeks (eradication) and repeat culture " + r(2)],
["Four admissions this year despite good physiotherapy", "Refer: long-term macrolide (after a negative NTM culture) or inhaled antibiotic if chronic Pseudomonas " + r(2, 3)],
["Coughing 200 mL of fresh blood", "Emergency: airway, oxygen, IV access, tranexamic acid, refer for bronchial artery embolisation " + LB.exp()],
["Old TB, new fever and weight loss", "Sputum AFB / GeneXpert and culture before calling it a bronchiectasis flare " + LB.loc()]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Recurrent exacerbations and pneumonia; lung abscess and empyema ${r(1)}.</li>
<li>Haemoptysis, occasionally massive ${r(1)}.</li>
<li>Respiratory failure and cor pulmonale ${r(1)}.</li>
<li>Chronic <i>Pseudomonas</i> infection (worse outcomes) and non-tuberculous mycobacterial disease ${r(2)}.</li>
<li>Antibiotic resistance from repeated and long-term courses ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>A written self-management plan; patients with frequent flares can keep a course of antibiotics at home and start it early ${r(2)}.</li>
<li>Sputum culture at review and with each flare ${r(2)}.</li>
<li>Review airway clearance technique — patients drift from it ${r(2)}.</li>
<li>Annual influenza vaccine; pneumococcal vaccine ${r(2)}.</li>
<li>Come back early for fever, more or darker sputum, or blood in the sputum ${LB.exp()}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Severe bronchiectasis on CT", src: "images/bronchiectasis-ct-massive.jpg", mod: "CT chest (axial, lung window)", ctx: "75-year-old man; infective flare", loc: "Both lower lobes", find: "Markedly widened, thick-walled bronchi in both lower lobes; active infection on the right with a large effusion", signs: "Bronchi wider than the accompanying artery; airways visible to the periphery", interp: "Thin-section CT confirms the diagnosis — do it when the patient is stable", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Massive_Bronchiektasen_-_CT_LF_axial_001.jpg", lic: "CC BY-SA 3.0" })}${fig({ title: "Bronchiectasis: chest X-ray and CT", src: "images/bronchiectasis-cxr-ct.jpg", mod: "Chest radiograph (PA) and CT", ctx: "67-year-old woman with recurrent infections", loc: "Both lower lobes", find: "Thick-walled, dilated bronchi in both lower lobes", signs: "Tram-lines and ring shadows on the film; dilated bronchi on CT", interp: "The X-ray can suggest it; CT shows the extent", by: "Hellerhoff", page: "https://commons.wikimedia.org/wiki/File:Bronchiektasen_67W_-_CR_pa_und_CT_-_001.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Adult with chronic productive cough", [F.d("Cough with sputum most days, repeated chest infections?"), F.a, F.s("Sputum AFB / GeneXpert, Gram stain, culture; CBC; chest X-ray"), F.a, F.b([["TB positive", F.e("Treat TB (NTP)")], ["TB negative", F.s("Refer: thin-section CT when stable")]]), F.a, F.d("Bronchiectasis confirmed"), F.a, F.s("Cause bundle: blood count, IgG/IgA/IgM, IgE + aspergillus; targeted CF/PCD/HIV"), F.a, F.ok("Airway clearance daily, rehab, vaccines, no smoke, written flare plan"), F.a, F.d("3 or more flares a year?"), F.a, F.b([["Yes", F.s("Specialist: long-term macrolide or inhaled antibiotic (Pseudomonas)")], ["No", F.ok("Treat each flare 14 days after sputum culture")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Calling every flare in an old-TB patient 'bronchiectasis'", "TB relapse or NTM missed", "Sputum AFB / GeneXpert and mycobacterial culture"],
["5-day antibiotic courses for heavy sputum", "Flares relapse; resistance", "14 days unless disease is mild"],
["Prescribing antibiotics without sending sputum", "Later choices are blind", "Culture first, every flare"],
["Starting long-term azithromycin without an NTM culture", "Macrolide-resistant NTM", "At least one negative NTM culture first"],
["Never teaching airway clearance", "The cheapest, most effective daily treatment", "Teach it, check it at every visit"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "What does the STG ask you to do with every new case of suspected bronchiectasis?", "Refer for diagnosis; give amoxicillin or co-trimoxazole for infection, teach postural drainage, stop smoking, nutrition and immunisation.")}
${qa("Intern/MO", "How long should an exacerbation be treated?", "Usually 14 days (always for Pseudomonas); shorter courses may do in mild disease.")}
${qa("Specialist", "What is the ERS minimum aetiology bundle?", "Differential blood count, serum IgG/IgA/IgM, and tests for ABPA; sputum culture for monitoring.")}
${qa("Specialist", "When do BTS and ERS suggest long-term antibiotics, and what must you check before a macrolide?", "Three or more exacerbations a year; exclude NTM with at least one negative culture and take care with hearing loss or balance problems.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §3.7 Bronchiectasis.</li>
<li id="ref-2">Hill AT, Sullivan AL, Chalmers JD, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax 2019;74(Suppl 1):1–69. <a href="https://doi.org/10.1136/thoraxjnl-2018-212463" target="_blank" rel="noopener">doi:10.1136/thoraxjnl-2018-212463</a></li>
<li id="ref-3">Polverino E, Goeminne PC, McDonnell MJ, et al. European Respiratory Society guidelines for the management of adult bronchiectasis. Eur Respir J 2017;50(3):1700629. <a href="https://doi.org/10.1183/13993003.00629-2017" target="_blank" rel="noopener">doi:10.1183/13993003.00629-2017</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §3.7", "<span class='pass'>Checked</span>", "Read from the STG text"],
["BTS 2019 recommendations", "<span class='pass'>Checked</span>", "Full text on thorax.bmj.com: imaging, aetiology, clearance, 14 days, long-term antibiotics, eradication"],
["ERS 2017 recommendations", "<span class='pass'>Checked</span>", "Full text: aetiology bundle, 14 days, long-term antibiotics, macrolide doses, mucoactives, surgery"],
["Organism-specific flare antibiotics", "<span class='unv'>Partly verified</span>", "BTS table 6 not reachable; marked expert opinion"],
["Exacerbation definition", "<span class='unv'>Not read</span>", "Consensus definition summarised from knowledge; marked"],
["DOIs", "<span class='pass'>Checked</span>", "Crossref"],
["Images", "<span class='pass'>Checked</span>", "2 Commons images, licence checked per file"]
], "qc")}` }
]
});
})();
