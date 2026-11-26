/* Pneumothorax — adults. Batch E-3 part 2, 26 Nov 2026.
   Sources read directly: Bhutan STG 2024 §3.4 Pneumothorax (oxygen, analgesia, refer for chest tube) and the trauma chapter (immediate needle
   decompression of tension pneumothorax, three-sided dressing for sucking wounds, transfer all chest injuries); NEML 2025.
   BTS Guideline for pleural disease 2023 (Roberts et al., Thorax 78 Suppl 3) — full text on thorax.bmj.com and online appendix A1 (evidence
   statements, recommendations, meta-analysis figures); high-risk characteristics from Shorthose et al., Breathe 2023 (figure 1, BTS pathway);
   Brown NEJM 2020; Hallifax Lancet 2020; Eamer Chest 2023; BTS air travel clinical statement 2022.
   Needle-decompression site: ATLS 10th edition as summarised in secondary sources — the ATLS manual itself was not read (marked on the page). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "pneumothorax-adult",
title: "Pneumothorax — adults",
subtitle: "Sudden one-sided chest pain and breathlessness with a quiet, hyper-resonant chest: decompress tension at once, drain the high-risk patient, and let symptoms — not the size on the film — guide everyone else",
age: "Adults", specs: ["resp", "emerg", "surg", "medicine"],
keywords: ["pneumothorax", "collapsed lung", "spontaneous pneumothorax", "primary spontaneous pneumothorax", "PSP", "secondary spontaneous pneumothorax", "SSP", "tension pneumothorax", "needle decompression", "needle aspiration", "chest drain", "intercostal drain", "ambulatory device", "pleurodesis", "VATS", "air travel after pneumothorax"],
related: ["pneumothorax-child", "trauma-adult", "copd-adult", "asthma-adult", "tb-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Most pneumothoraces in young, otherwise healthy adults settle with little or no intervention. The few that kill do so through tension or through a lung that had no reserve to begin with. The art is to spot those few quickly and leave the rest alone as much as is safe.</p>
<div class="glance">
<div><h4>Tension? Act now</h4><p>Distress, low blood pressure, falling saturation, deviated trachea: <b>decompress without waiting for an X-ray</b>, then insert a chest drain ${r(1, 8)}.</p></div>
<div><h4>High-risk → drain</h4><p>Haemodynamic compromise, significant hypoxia, bilateral, underlying lung disease, age ≥ 50 with a smoking history, or haemopneumothorax ${r(2, 4)}.</p></div>
<div><h4>Few symptoms → watch</h4><p>Primary spontaneous pneumothorax with no significant pain or breathlessness can be managed <b>conservatively whatever its size</b> ${r(2, 3)}.</p></div>
<div><h4>Symptomatic, not high-risk</h4><p>Needle aspiration, an ambulatory device or a small drain — choose with the patient ${r(2, 3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§3.4) asks for oxygen, pain relief and referral for a chest tube; the trauma chapter adds immediate needle decompression of tension pneumothorax ${r(1)}. Ambulatory one-way-valve devices are not generally stocked, but needle aspiration needs only a large cannula, a three-way tap and a 50 mL syringe, and can be done at any district hospital with a doctor who has been taught it. ${LB.loc()}</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Feature", "Detail"], [
["Definition", "Air in the pleural space " + r(1) + "; 'spontaneous' when there is no trauma or medical procedure to explain it " + r(2)],
["Primary spontaneous (PSP)", "No known lung disease — typically a tall, thin young adult, often a smoker " + r(2)],
["Secondary spontaneous (SSP)", "Underlying lung disease (COPD, TB, cystic lung disease, HIV-related infection…), <b>or age over 50 with a smoking history</b> — managed as SSP because these patients respond differently to aspiration " + r(2)],
["Traumatic / iatrogenic", "After chest injury, central line, pleural or lung biopsy, ventilation " + r(1)],
["Tension", "Can develop from any type: air enters with each breath and cannot leave " + r(1)],
["How common", "UK admissions rose from 9.1 to 14.1 per 100,000 population over 50 years " + r(2)],
["Recurrence", "About 1 in 5 after a first episode; pooled 1-year figures: 111 per 1,000 after conservative care vs 179 per 1,000 after a chest drain " + r(3)]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("From leak to collapse", [F.s("Small subpleural blebs or diseased lung rupture"), F.a, F.s("Air enters the pleural space; the lung recoils"), F.a, F.b([["Leak seals", F.ok("Air is slowly absorbed (roughly over weeks); lung re-expands")], ["Leak acts as a valve", F.e("Pressure builds → mediastinum shifts → venous return falls → shock and arrest (tension)")]]), F.a, F.d("Poor reserve (COPD, TB) → even a small pneumothorax causes hypoxia")])}
<p>Size matters less than the patient's reserve. A young adult can walk in with a lung half collapsed and be quite comfortable, while a person with COPD can be in respiratory failure from a thin rim of air. That is why BTS 2023 moved from size-based to <b>symptom- and risk-based</b> decisions ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "BTS 2010 (old UK practice)", "BTS 2023", "This guide"], [
["Who needs a procedure", "Refer for chest tube (all)", "Size-based: PSP over 2 cm at the hilum or breathless → aspirate", "Symptoms and high-risk features decide; size only tells you whether a procedure is <b>safe</b>", "BTS 2023 " + LB.int() + "; drain the high-risk patient as the STG says"],
["First procedure in symptomatic PSP", "Chest tube", "Needle aspiration first", "Needle aspiration, ambulatory device or drain — shared decision", "Needle aspiration where a trained doctor is available " + LB.loc()],
["Minimally symptomatic PSP", "Chest tube", "Observe if small", "Conservative care whatever the size (Brown 2020)", "Observe if the patient can return quickly; admit if they live far away " + LB.loc()],
["Oxygen", "Oxygen for all", "High-flow oxygen to speed absorption", "Not re-examined in the 2023 questions", "Oxygen for hypoxaemia; high-flow oxygen for faster absorption is optional " + LB.exp()],
["Decompression site", "Not stated", "2nd intercostal space, mid-clavicular line", "Refers to BTS pleural procedures statement", "4th–5th space just in front of the mid-axillary line (ATLS 10) or 2nd space mid-clavicular; use a long enough cannula " + LB.exp("NOT VERIFIED FROM ATLS TEXT")]
])}
<p>The STG is short and written for referral; nothing in it conflicts with BTS 2023 for the high-risk patient. The main change is that a well young adult with few symptoms no longer needs a tube.</p>` },
{ id: "presentation", title: "Clinical features", html: `
<ul>
<li>Sudden breathlessness and sharp, one-sided pleuritic chest pain, worse on deep breathing ${r(1)}.</li>
<li>On the affected side: reduced chest movement, hyper-resonant percussion, reduced or absent breath sounds and vocal fremitus ${r(1)}.</li>
<li>Large or tension pneumothorax: trachea and apex beat pushed to the other side, cyanosis, tachycardia, hypotension, raised neck veins ${r(1)}.</li>
<li>Small pneumothorax may have no signs at all — the X-ray finds it.</li>
</ul>
<h3>The typical patient</h3>
<p>A 22-year-old tall, thin student from Thimphu who smokes felt a sudden stab of pain in the right chest while studying, then became short of breath on the stairs. His saturation is 97% on air, pulse 96, blood pressure normal. Breath sounds are quiet on the right. The X-ray shows a right pneumothorax with a 3 cm rim at the hilum. He has no high-risk features and only mild breathlessness. <b>Discuss the options.</b> He wants to avoid a tube and can return within an hour, so conservative care with a check film is reasonable; had he been distressed, needle aspiration would come first ${r(2, 3, 5)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Pulmonary embolism", "Breath sounds normal; risk factors; tachycardia out of proportion"],
["Acute coronary syndrome, pericarditis", "ECG changes; pain not clearly pleuritic"],
["Large bulla (COPD)", "Lung markings cross the lucency; a curved inner wall — CT if unsure; a drain into a bulla is dangerous"],
["Pneumonia with pleurisy", "Fever, crackles, consolidation"],
["Oesophageal rupture", "After vomiting; mediastinal air; very unwell"],
["Rib fracture", "Trauma, point tenderness — may coexist with pneumothorax"]
])}` },
{ id: "invest", title: "Investigations", html: `<ul>
<li><b>Tension pneumothorax is a clinical diagnosis</b> — no X-ray first ${r(1, 8)}.</li>
<li>Erect posteroanterior chest X-ray: the visceral pleural line with no lung markings beyond it ${r(1)}.</li>
<li>Size: the old BTS rule measured the interpleural distance at the hilum (2 cm ≈ a large pneumothorax). BTS 2023 uses size only to judge whether a needle or drain can be placed safely ${r(2, 4)}.</li>
<li>CT chest when the film is unclear, when bullae could mimic air, or before surgery ${r(2)}.</li>
<li>Bedside ultrasound (absent lung sliding) helps in trained hands, especially supine trauma patients ${LB.exp()}.</li>
<li>Blood gas in SSP or when saturation is low; look for TB and HIV when the lung is diseased ${LB.loc()}.</li>
</ul>` },
{ id: "staging", title: "Risk groups (BTS 2023 pathway)", html: `
${tbl(["Group", "What defines it", "Usual first step"], [
["Tension", "Haemodynamic compromise with signs of a pneumothorax", "Immediate decompression, then chest drain " + r(1)],
["High-risk", "Any of: haemodynamic compromise; significant hypoxia; bilateral pneumothorax; underlying lung disease; age ≥ 50 with significant smoking history; haemopneumothorax " + r(4), "Chest drain (8–14 Fr Seldinger is usually enough) and admission " + r(4)],
["PSP with minimal symptoms", "No significant pain or breathlessness, no physiological compromise", "Conservative care, regardless of size " + r(2, 3)],
["PSP with symptoms, not high-risk", "Pain or breathlessness that troubles the patient", "Needle aspiration, ambulatory device or drain, by the patient's priorities " + r(2, 3)],
["SSP (not unstable)", "Underlying lung disease or ≥ 50 and smoker", "Chest drain if safe; aspiration or observation only case by case, in hospital " + r(4)]
])}
<div class="calc" data-calc="ptxplan"></div>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Tension pneumothorax</h3>
<ol>
<li>High-flow oxygen; call for help.</li>
<li>Needle decompression on the affected side: in adults, the 4th–5th intercostal space just in front of the mid-axillary line (ATLS 10) or the 2nd intercostal space in the mid-clavicular line. The chest wall is often thicker than a short cannula at the 2nd space ${r(8)} ${LB.exp("NOT VERIFIED FROM ATLS TEXT")}.</li>
<li>In a ventilated patient, a finger (open) thoracostomy is more reliable than a needle ${LB.exp()}.</li>
<li>Follow with a chest drain; transfer chest injuries to a higher centre ${r(1)}.</li>
</ol>
<h3>2. High-risk patient</h3>
<p>Insert a chest drain (small-bore Seldinger is fine for most), give oxygen to target saturation, admit, and treat the underlying lung disease ${r(2, 4)}. Discuss with a thoracic surgeon early for SSP with marked physiological compromise ${r(2)}.</p>
<h3>3. Primary spontaneous pneumothorax, not high-risk</h3>
${tbl(["Option", "When", "Evidence"], [
["Conservative (observe)", "Minimal symptoms; patient can return at once if worse", "Brown 2020: 94% re-expanded by 8 weeks; 12-month recurrence 8.8% vs 16.8% with a drain " + r(4, 5)],
["Needle aspiration", "Symptomatic; patient prefers quick relief", "Hospital stay 2.55 days shorter than drain; more repeat procedures (626 vs 240 per 1,000); less pain " + r(3)],
["Ambulatory device", "Good support at home and follow-up available", "Stay 3.47 days shorter; same recurrence " + r(3, 6)],
["Chest drain", "Aspiration failed or not suitable", "Standard care; more surgical emphysema, bleeding and infection than aspiration " + r(3)]
])}
<h3>4. Secondary spontaneous pneumothorax</h3>
<p>Chest drain if it is safe to place one; observation or aspiration only in selected patients who stay in hospital. Chemical pleurodesis can be considered to prevent recurrence, even after a first episode, in someone (e.g. severe COPD) who decompensated badly ${r(2, 4)}.</p>
<h3>5. Drain care and air leak</h3>
<ul>
<li>Suction has no proven benefit for persistent air leak ${r(2)}.</li>
<li>Never clamp a drain that is still bubbling ${LB.exp()}.</li>
<li>Air leak beyond 5–7 days or a lung that will not re-expand: seek surgical advice; if surgery is not possible, autologous blood patch or endobronchial valves ${r(2)}.</li>
</ul>
<h3>6. Preventing recurrence</h3>
<p>Elective surgery (VATS bullectomy and/or pleurodesis) should be considered after a second same-side or first opposite-side pneumothorax, and may be offered after a first episode when recurrence would be dangerous (tension at first episode, pilots, divers, military) ${r(2)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("oxygen", "Oxygen")} — NEML; all hypoxaemic patients.</li>
<li>${D("paracetamol", "Paracetamol")} 1 g every 6 hours (max 4 g/day) and/or ${D("ibuprofen", "ibuprofen")} 400 mg every 8 hours with food — both NEML ${r(9)}.</li>
<li>${D("morphine", "Morphine")} for severe pain, titrated IV — NEML 10 mg/mL injection; care in SSP with hypercapnia.</li>
<li>${D("lidocaine", "Lidocaine")} 1–2% plain for local anaesthesia before aspiration or drain — stay within the maximum dose on the monograph; NEML 2% injection.</li>
<li>Pleurodesis agents (talc) and ambulatory devices are not on NEML 2025 — referral centres only.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Pregnancy", "Observe if small (under 2 cm), mother not breathless, no fetal distress; otherwise aspiration or drain. Plan delivery with obstetrics, respiratory and thoracic teams — labour raises oxygen use by about half and Valsalva can enlarge it " + r(2)],
["COPD, TB, cystic lung disease", "Treat as SSP: lower threshold for a drain; look for TB (sputum, GeneXpert) in Bhutan " + LB.loc()],
["HIV", "Think of Pneumocystis infection when the lung is diseased " + LB.exp()],
["Trauma", "Treat as part of the primary survey; open (sucking) wound — three-sided dressing; transfer " + r(1)],
["Ventilated or about to be", "Any pneumothorax can become tension under positive pressure — drain it " + LB.exp()],
["Catamenial (around menstruation)", "Recurrent right-sided episodes at period time — refer for surgical and gynaecological assessment " + LB.exp()]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Collapse in a BHU after chest trauma; trachea deviated, BP 70/40", "Decompress now, oxygen, three-sided dressing if open wound, refer with escort " + r(1)],
["68-year-old with COPD, SpO₂ 86%, small apical pneumothorax", "High-risk (SSP, hypoxia): chest drain if safe, admit, controlled oxygen 88–92% " + r(4)],
["Aspiration worked; patient wants to fly to Bangkok next week", "Not until 7 days after an X-ray shows full re-expansion " + r(7)],
["Second right pneumothorax in a 25-year-old", "Refer for elective surgery (VATS) " + r(2)],
["Drain still bubbling on day 6", "Surgical advice; do not add suction just to speed things " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Tension pneumothorax and cardiac arrest ${r(1)}.</li>
<li>Drain complications (per 1,000 patients, drain vs aspiration): surgical emphysema 92 vs 9, bleeding 51 vs 14, wound infection 51 vs 9 ${r(3)}.</li>
<li>Re-expansion pulmonary oedema after rapid drainage of a long-standing collapse ${LB.exp()}.</li>
<li>Persistent air leak, empyema, haemothorax ${r(3)}.</li>
<li>Recurrence ${r(3, 5)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>Written advice to return at once if breathlessness or pain recurs ${r(2)}.</li>
<li>After observation or aspiration: chest X-ray in 2–4 weeks to confirm resolution; follow up with a respiratory physician ${r(2)}.</li>
<li><b>Flying:</b> not with an unresolved pneumothorax; fly 7 days after an X-ray confirms full resolution ${r(2, 7)}.</li>
<li><b>Diving:</b> scuba diving should be given up for good unless a definitive operation such as pleurectomy has been done ${r(2)}.</li>
<li><b>Smoking</b> raises the recurrence risk — help the patient stop ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Left pneumothorax on chest X-ray", src: "images/ptx-signs.jpg", mod: "Chest radiograph (PA)", ctx: "Spontaneous pneumothorax", loc: "Left hemithorax", find: "Visible visceral pleural line with no lung markings beyond it; collapsed left lung; labelled signs", signs: "Pleural line, absent peripheral markings", interp: "Measure the rim at the hilum only to judge safety of a procedure", by: "Karthik Easvur", page: "https://commons.wikimedia.org/wiki/File:X-ray_of_pneumothorax_signs.jpg", lic: "CC BY-SA 3.0" })}${fig({ title: "Tension pneumothorax (schematic)", src: "images/tension-ptx-schematic.png", mod: "Schematic", ctx: "Tension physiology", find: "Air trapped in one hemithorax pushes the mediastinum and heart to the other side", interp: "Venous return falls — a clinical emergency treated before any X-ray", by: "Baedr-9439", page: "https://commons.wikimedia.org/wiki/File:Tension-pneumothorax.png", lic: "CC0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Spontaneous pneumothorax (adults)", [F.d("Haemodynamic compromise / signs of tension?"), F.a, F.b([["Yes", F.e("Decompress → chest drain")], ["No", F.d("High-risk features? (hypoxia, bilateral, lung disease, ≥ 50 + smoker, haemothorax)")]]), F.a, F.b([["Yes", F.e("Chest drain if safe, admit")], ["No", F.d("Significant symptoms?")]]), F.a, F.b([["No", F.ok("Conservative care, review, CXR 2–4 weeks")], ["Yes", F.s("Needle aspiration / ambulatory device / drain — patient's priorities")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Waiting for an X-ray in a shocked patient", "Tension kills in minutes", "Decompress on clinical signs"],
["Draining every pneumothorax over 2 cm", "More complications and recurrence than needed", "Symptoms and risk features decide"],
["Treating a 55-year-old smoker as PSP", "Aspiration fails more often", "Manage as SSP"],
["Draining a large bulla", "Bronchopleural fistula", "CT first when unsure"],
["Letting the patient fly or dive too soon", "Recurrence at altitude or depth", "Give written advice"]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "List the BTS high-risk characteristics.", "Haemodynamic compromise, significant hypoxia, bilateral pneumothorax, underlying lung disease, age ≥ 50 with significant smoking history, haemopneumothorax.")}
${qa("Intern/MO", "A 20-year-old has a 4 cm PSP but almost no symptoms. Must you drain it?", "No. BTS 2023 allows conservative care for minimally symptomatic PSP regardless of size.")}
${qa("Specialist", "When should elective surgery be considered?", "Second ipsilateral or first contralateral pneumothorax; consider after a first episode when recurrence would be dangerous (tension, pilots, divers).")}
${qa("Specialist", "When may a patient fly?", "Seven days after a chest X-ray shows full resolution.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §3.4 Pneumothorax and the trauma chapter (breathing, chest injuries).</li>
<li id="ref-2">Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society Guideline for pleural disease. Thorax 2023;78(Suppl 3):s1–s42. <a href="https://doi.org/10.1136/thorax-2022-219784" target="_blank" rel="noopener">doi:10.1136/thorax-2022-219784</a></li>
<li id="ref-3">British Thoracic Society. Guideline for pleural disease — online appendix A1 (pneumothorax: best acute management; evidence review and meta-analyses), 2023. <a href="https://brit-thoracic.org.uk/document-library/guidelines/pleural-disease/online-appendix-a1-pleural-disease-pneumothorax-best-acute-management" target="_blank" rel="noopener">brit-thoracic.org.uk</a></li>
<li id="ref-4">Shorthose M, Barton E, Walker S. The contemporary management of spontaneous pneumothorax in adults. Breathe 2023;19:230135. <a href="https://doi.org/10.1183/20734735.0135-2023" target="_blank" rel="noopener">doi:10.1183/20734735.0135-2023</a></li>
<li id="ref-5">Brown SGA, Ball EL, Perrin K, et al. Conservative versus interventional treatment for spontaneous pneumothorax. N Engl J Med 2020;382:405–415. <a href="https://doi.org/10.1056/NEJMoa1910775" target="_blank" rel="noopener">doi:10.1056/NEJMoa1910775</a></li>
<li id="ref-6">Hallifax RJ, McKeown E, Sivakumar P, et al. Ambulatory management of primary spontaneous pneumothorax: an open-label, randomised controlled trial. Lancet 2020;396:39–49. <a href="https://doi.org/10.1016/S0140-6736(20)31043-6" target="_blank" rel="noopener">doi:10.1016/S0140-6736(20)31043-6</a></li>
<li id="ref-7">Coker RK, Armstrong A, Church AC, et al. BTS Clinical Statement on air travel for passengers with respiratory disease. Thorax 2022;77:329–350. <a href="https://doi.org/10.1136/thoraxjnl-2021-218110" target="_blank" rel="noopener">doi:10.1136/thoraxjnl-2021-218110</a></li>
<li id="ref-8">American College of Surgeons Committee on Trauma. Advanced Trauma Life Support, 10th edition (2018) — needle decompression site as summarised in secondary sources; manual not read for this page. <a href="https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/" target="_blank" rel="noopener">facs.org</a></li>
<li id="ref-9">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-10">Eamer G, Povolo CA, Petropoulos JA, et al. Observation, aspiration, or tube thoracostomy for primary spontaneous pneumothorax: systematic review, meta-analysis, and cost-utility analysis. Chest 2023;164:1007–1018. <a href="https://doi.org/10.1016/j.chest.2023.05.017" target="_blank" rel="noopener">doi:10.1016/j.chest.2023.05.017</a></li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["BTS 2023 recommendations", "<span class='pass'>Checked</span>", "Read from the full guideline and appendix A1"],
["High-risk characteristics", "<span class='pass'>Checked</span>", "BTS pathway as reproduced in Shorthose 2023, figure 1"],
["Trial numbers", "<span class='pass'>Checked</span>", "Appendix A1 meta-analyses; Brown 2020 via Shorthose 2023"],
["Needle decompression site", "<span class='unv'>Not verified</span>", "ATLS manual not read; secondary sources only — marked on the page"],
["Oxygen to speed absorption", "<span class='unv'>Expert opinion</span>", "Not addressed in the 2023 questions read"],
["Analgesic doses", "<span class='pass'>Checked</span>", "Drug monographs (FDA label) and Bhutan STG"],
["Images", "<span class='pass'>Checked</span>", "2 Commons images, licence checked per file"]
], "qc")}<p>Observation is also the most cost-effective first choice for PSP in a 2023 meta-analysis ${r(10)}.</p>` }
]
});
})();
