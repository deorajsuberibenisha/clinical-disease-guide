/* Intussusception and intestinal obstruction in children (Bhutan STG 12.4.3–12.4.4) */
registerPage({
id: "intuss-child",
title: "Intussusception & Bowel Obstruction in Children",
subtitle: "Green vomit is an emergency; episodic screaming with pallor, a sausage mass and red-currant stool is intussusception — resuscitate, decompress, give antibiotics, and refer for reduction",
age: "Infants & children", specs: ["paeds", "surg", "emerg"],
keywords: ["intussusception", "bilious vomiting", "red currant jelly stool", "sausage mass", "target sign", "air enema reduction", "malrotation volvulus", "intestinal obstruction child", "rotavirus vaccine"],
related: ["acute-abdomen-child", "appendicitis-child", "ge-child", "hsp-child", "worms-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Intussusception is the commonest cause of bowel obstruction from 3 months to 3 years. Early diagnosis allows non-surgical reduction.</p>
<div class="glance">
<div><h4>Classic</h4><p>Episodic screaming + drawing up legs, pallor, vomiting, red-currant stool (late).</p></div>
<div><h4>Bilious vomit</h4><p>Malrotation/volvulus until proven otherwise.</p></div>
<div><h4>Stabilise</h4><p>NPO, NG, fluids, ${dr("ampicillin")} + ${dr("gentamicin")} (STG).</p></div>
<div><h4>Reduce</h4><p>Air/saline enema; surgery if peritonitis or failed.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 12.4.4: ABC, NPO, NG tube, IV maintenance fluids, ampicillin 25 mg/kg 6-hourly + gentamicin 5 mg/kg daily, refer urgently with escort. Enema reduction and paediatric surgery are at JDWNRH. Rotavirus vaccine (in Bhutan EPI) carries a very small extra risk in the 2 weeks after doses. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Causes of obstruction by age", html: `${tbl(["Age", "Causes"], [["Newborn", "Atresia, malrotation/volvulus, Hirschsprung, meconium ileus"], ["3 months–3 years", "Intussusception, incarcerated hernia"], ["Older child", "Adhesions, Ascaris bolus, appendix mass, Meckel's, HSP"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Intussusception", [F.s("Lead point (lymphoid hyperplasia after virus)"), F.a, F.s("Ileum telescopes into colon"), F.e("Venous congestion → ischaemia → perforation")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan STG", "International", "This guide"], [["Antibiotics before reduction", "Ampicillin + gentamicin", "Many centres only if ill/surgery", "STG " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Paroxysmal colic every 15–20 min, pale and lethargic between; vomiting (bilious later); sausage-shaped mass right upper quadrant; blood/mucus on rectal exam.</li><li>Lethargy alone can be the presenting sign in infants.</li></ul><h3>The typical patient</h3><p>A 9-month-old (9 kg) in Tsirang has bouts of screaming with pallor for 18 hours, vomiting, and a stool like red-currant jelly; sausage mass palpable. <b>This is intussusception</b>: NPO, NG, maintenance fluids 38 mL/h, ampicillin 225 mg + gentamicin 45 mg, urgent referral for ultrasound and enema reduction.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Gastroenteritis", "Diarrhoea dominant, no mass"], ["Dysentery", "Fever, frequent bloody stools"], ["HSP", "Purpura (can cause intussusception)"], ["Malrotation", "Bilious vomiting, often neonate"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Ultrasound (target/doughnut sign — sensitivity over 95%), abdominal X-ray (obstruction, free air), electrolytes, Hb.</p>` },
{ id: "staging", title: "Management tool", html: `<div class="calc" data-calc="intussplan"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Resuscitate, NPO, NG, IV fluids, antibiotics.</li><li>Enema reduction (air or saline) if stable without peritonitis; success 80–90%; recurrence about 10%.</li><li>Surgery: peritonitis, perforation, shock, failed reduction.</li><li>Bilious vomiting in a neonate: urgent contrast study/surgery for malrotation.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("ampicillin"), "25 mg/kg 6-hourly", "STG"], [dr("gentamicin"), "5 mg/kg daily", "STG"], [dr("metronidazole"), "7.5 mg/kg 8-hourly", "If perforated"]])}` },
{ id: "populations", title: "Older children", html: `<p>Over 3 years: look for a pathological lead point (Meckel's, polyp, lymphoma).</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Long transfer", "Fluids, NG, antibiotics, analgesia; escort"]])}` },
{ id: "complications", title: "Complications", html: `<p>Bowel ischaemia, perforation, sepsis, shock, recurrence.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Warn about recurrence (most within 72 h).</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Target sign", src: "images/intuss-target-us.png", mod: "Ultrasound", ctx: "Intussusception", loc: "Right abdomen", find: "Concentric rings of bowel wall", signs: "Target sign", interp: "Diagnostic of intussusception", by: "Cerevisae", page: "https://commons.wikimedia.org/wiki/File:Ultrasound_of_target_sign_in_intussusception_of_the_right_bowel.png", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Colic + vomiting in infant", [F.s("NPO, NG, fluids, antibiotics"), F.a, F.s("Ultrasound"), F.a, F.d("Peritonitis/shock?"), F.a, F.b([["Yes", F.e("Surgery")], ["No", F.ok("Enema reduction")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Calling it gastroenteritis", "Late diagnosis", "Ask about colic and pallor"], ["Ignoring green vomit", "Volvulus", "Emergency review"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Ultrasound sign of intussusception?", "Target (doughnut) sign.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, sections 12.4.3–12.4.4.</li><li id="ref-2">World Health Organization. Pocket book of hospital care for children, 2nd ed. 2013 — surgical problems. <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["STG doses", "<span class='pass'>Checked</span>", "Via BCR summary"]], "qc")}` }
]
});
