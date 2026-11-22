/* Acute diarrhoea and gastroenteritis — children */
registerPage({
id: "ge-child",
title: "Diarrhoea & Gastroenteritis — Children",
subtitle: "Judging dehydration, Plans A, B and C, zinc, dysentery and persistent diarrhoea",
age: "Children (1 month – 10 years)", specs: ["paeds", "id", "gi", "ph"],
keywords: ["diarrhoea", "diarrhea", "gastroenteritis", "loose motion", "dehydration", "ORS", "oral rehydration", "zinc", "Plan A", "Plan B", "Plan C", "IMNCI", "dysentery", "bloody diarrhoea", "shigella", "persistent diarrhoea", "rotavirus", "norovirus", "cholera", "ondansetron", "Ringer lactate", "skin pinch", "sunken eyes", "amoebiasis", "giardia", "HUS"],
related: ["ge-adult", "pneumonia-child"],
updated: "22 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Diarrhoea is one of the commonest reasons Bhutanese children come to a health centre, and nearly every death from it is a death from dehydration. The treatment that saves them is simple and cheap: the right amount of ORS, zinc, continued feeding, and knowing when a child needs a drip.</p>
<div class="glance">
<div><h4>Look for</h4><p>Lethargy, sunken eyes, how the child drinks, skin pinch. <b>Two signs in a row</b> classify the child.</p></div>
<div><h4>No dehydration</h4><p><b>Plan A</b>: ORS 50–100 mL (under 2 y) or 100–200 mL after each stool, zinc, feeding, when to return.</p></div>
<div><h4>Some dehydration</h4><p><b>Plan B</b>: ORS <b>75 mL/kg over 4 hours</b> in the clinic, then reassess.</p></div>
<div><h4>Severe dehydration</h4><p><b>Plan C</b>: ${dr("ringer_lactate", "Ringer's lactate")} <b>100 mL/kg</b>: 30 mL/kg fast, then 70 mL/kg (infant 1 h + 5 h; child 30 min + 2½ h).</p></div>
<div><h4>Every child</h4><p>${dr("zinc", "Zinc")} 10 mg (under 6 months) or 20 mg daily for 10–14 days (Bhutan). Keep breastfeeding and feeding.</p></div>
<div><h4>Blood in stool</h4><p>Dysentery: ${dr("ciprofloxacin", "ciprofloxacin")} 15 mg/kg BD × 3 days (or ${dr("cotrimoxazole", "co-trimoxazole")} at PHC); review in 2 days.</p></div>
<div><h4>Do not</h4><p>Give antibiotics for watery diarrhoea (except cholera), antidiarrhoeals such as loperamide, or IV 5% dextrose.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The Bhutan <b>Hospital-based IMNCI 3rd edition (2024)</b> and <b>STG 2024 §12.4.1</b> follow WHO: ORS, zinc 10–20 mg for 10–14 days, paracetamol for fever, normal saline or Ringer's lactate for severe dehydration, and referral if not better in 5–7 days or lasting over 14 days. Rotavirus caused about one in five diarrhoea admissions in children under 5 at JDWNRH (2010–2012), and rotavirus vaccine was not in the national schedule at the time of the 2020 cost-effectiveness study.${r(1, 2, 9, 10)} ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What it is, and why it matters", html: `
${tbl(["Type", "Definition", "Usual causes"], [
["<b>Acute watery diarrhoea</b>", "3 or more loose or watery stools in 24 hours, lasting under 14 days", "Rotavirus, norovirus, adenovirus; ETEC; cholera in outbreaks"],
["<b>Dysentery</b>", "Diarrhoea with visible blood (± mucus)", "Shigella (most), Campylobacter, Salmonella, E. coli; amoebiasis uncommon in young children"],
["<b>Persistent diarrhoea</b>", "Starting acutely and lasting 14 days or more", "Repeated infection, malnutrition, lactose intolerance, giardiasis, HIV"]])}
<p>Diarrhoea is most common between 6 months and 2 years, when weaning foods and crawling bring germs to the mouth. It is spread by the faecal–oral route: unsafe water, unwashed hands, contaminated food. Pneumonia and diarrhoea together cause about a quarter of deaths in children under five worldwide.${r(3)}</p>
<p>In Bhutan, diarrhoea remains among the top ten causes of illness in children under five, and rotavirus is a leading cause of admissions.${r(9, 10)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("How diarrhoea becomes dangerous, and where each treatment acts", [
F.s("<b>Germ swallowed</b> (dirty water, hands, food)"), F.a,
F.b([
["Viruses (rotavirus, norovirus)", F.s("Damage villus tips: less absorption, lactase loss"), F.e("Watery stool, vomiting")],
["Toxins (cholera, ETEC)", F.s("Switch on chloride secretion (cAMP)"), F.e("Large-volume watery stool")],
["Invasive bacteria (Shigella)", F.s("Invade and ulcerate colon wall"), F.e("Blood, mucus, fever, tenesmus")]]), F.a,
F.s("Loss of <b>water, sodium, potassium and bicarbonate</b> in stool and vomit"), F.a,
F.b([
["Dehydration → shock", F.e("Sunken eyes, slow skin pinch, lethargy, weak pulse"), F.ok("<b>ORS</b> (glucose–sodium co-transport still works); <b>IV fluids</b> if severe")],
["Acidosis, low K⁺", F.e("Deep breathing, weakness, ileus"), F.ok("ORS contains citrate and K⁺; Ringer's lactate")],
["Poor intake, nutrient loss", F.e("Weight loss, persistent diarrhoea, malnutrition"), F.ok("<b>Keep feeding</b>, <b>zinc</b> to repair the gut")]])])}
<p>The key fact behind ORS: even when toxins make the gut pour out fluid, the sodium–glucose co-transporter (SGLT1) still absorbs sodium with glucose, and water follows. That is why ORS works in cholera.</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "Bhutan (STG 2024, IMNCI 2024)", "India (ICMR STW 2019)", "WHO 2024 (children to 10 y)", "This guide follows"], [
["Zinc dose", "Under 6 m 10 mg, over 6 m 20 mg, 10–14 days", "2–6 m 10 mg, over 6 m 20 mg, 14 days", "<b>5 mg daily</b> for 10–14 days (less vomiting, same effect); zinc gluconate preferred", "Bhutan doses; WHO change flagged"],
["Probiotics", "Not mentioned", "Not mentioned", "<b>Not recommended</b>", "Not recommended"],
["Dysentery first line", "Ciprofloxacin 15 mg/kg BD × 3 d, or co-trimoxazole × 5 d, or ceftriaxone", "Ciprofloxacin 15 mg/kg BD; reassess at 2 days", "Ciprofloxacin 15 mg/kg BD × 3 d for all bloody diarrhoea", "Ciprofloxacin (co-trimoxazole where cipro not stocked)"],
["Dysentery second line", "Second agent; then admit or treat amoebiasis", "Cefixime 10 mg/kg/day × 3–5 d", "Ceftriaxone 50–80 mg/kg × 3 days", "Ceftriaxone (cefixime at referral level)"],
["Ondansetron", "Not mentioned", "0.15 mg/kg for vomiting", "Not addressed", "Single dose if vomiting prevents ORS (hospital)"],
["Cholera antibiotic (child)", "Doxycycline over 2 years in outbreaks", "Doxycycline / erythromycin", "—", "Azithromycin 20 mg/kg single dose or doxycycline (MSF)"]])}
<p class="qn">Co-trimoxazole: WHO no longer lists it first line for Shigella because resistance is high in South Asia; it remains the only listed oral option at PHC level in Bhutan.${r(1, 2, 3, 4, 5)}</p>
` },

{ id: "presentation", title: "Assessing the child", html: `
<h3>Ask</h3><ul><li>How long? How many stools? <b>Blood?</b> Vomiting? Fever? Urine output?</li><li>What has been given (fluids, medicines)? Feeding before and during the illness?</li><li>Measles in the past 6 weeks? HIV? Others ill at home or in the village (outbreak)?</li></ul>
<h3>Classify dehydration (IMNCI 2024)</h3>
${tbl(["Classification", "Two or more of these signs", "Treatment"], [
["<b style='color:var(--red)'>Severe dehydration</b>", "Lethargic or unconscious · sunken eyes · not able to drink or drinks poorly · skin pinch goes back very slowly (over 2 s)", "<b>Plan C</b>"],
["<b style='color:var(--amber)'>Some dehydration</b>", "Restless, irritable · sunken eyes · drinks eagerly, thirsty · skin pinch goes back slowly", "<b>Plan B</b>"],
["<b style='color:var(--green)'>No dehydration</b>", "Not enough signs for the above", "<b>Plan A</b>"]])}
<div class="calc" data-calc="dehyd"></div>
${box("red", "Danger signs: act now", `<ul><li>Shock: cold hands, weak fast pulse, capillary refill over 3 seconds.</li><li>Lethargy or convulsions (also think hypoglycaemia, hypo/hypernatraemia).</li><li>Severe malnutrition (visible wasting, oedema, MUAC under 11.5 cm).</li><li>Bloody diarrhoea in an infant, or with dehydration; abdominal distension; bilious vomiting (surgical cause).</li><li>Little or no urine with pallor and bruising (HUS).</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Think of", "Clues"], [
["<b>Intussusception</b>", "Infant 3 months–2 years, episodes of screaming and pallor, 'redcurrant jelly' stool, sausage mass"],
["Appendicitis", "Pain before vomiting, right iliac fossa tenderness, few loose stools"],
["Systemic infection: pneumonia, UTI, otitis, malaria, sepsis, meningitis", "Fever and vomiting with diarrhoea; look for the source"],
["Diabetic ketoacidosis", "Vomiting, deep breathing, thirst, high glucose"],
["Surgical abdomen (obstruction, volvulus)", "Bilious vomiting, distension, no stool"],
["Haemolytic uraemic syndrome", "After bloody diarrhoea: pallor, petechiae, low urine"],
["Antibiotic-associated diarrhoea, food allergy, coeliac disease", "Persistent or recurrent diarrhoea, poor growth"]])}
<h3>A typical case</h3>
<p>An 11-month-old boy from Samtse has had watery stools 8 times a day for 2 days and vomits twice. He is irritable, has sunken eyes, drinks eagerly and his skin pinch goes back slowly. He weighs 8 kg. This is <b>some dehydration</b>: give ORS 75 mL/kg, about <b>600 mL over 4 hours</b> in the clinic, by cup and spoon, while his mother continues breastfeeding. Start zinc 20 mg daily for 10–14 days. After 4 hours he is playful and passes urine: send home on Plan A with two ORS sachets and clear return advice.</p>
` },

{ id: "invest", title: "Investigations", html: `
<p>Most children need <b>no tests</b>: the diagnosis and the treatment come from the clinical assessment.</p>
${tbl(["Test", "When"], [
["Blood glucose", "Lethargic, convulsing or severely ill"],
["Electrolytes, urea, creatinine", "Severe dehydration, IV fluids, convulsions, suspected hyper- or hyponatraemia"],
["Stool microscopy and culture", "Dysentery not improving after 2 days, persistent diarrhoea, outbreaks (cholera, Shigella)"],
["Full blood count, blood culture", "Sepsis, HUS (anaemia, low platelets, fragmented red cells)"],
["Urine microscopy/culture, chest X-ray", "Persistent diarrhoea or fever: hidden infection"],
["Malaria test", "Fever in endemic southern districts"],
["HIV test", "Persistent diarrhoea with thrush, poor growth or other signs"]])}
${fig({ title: "Viruses that cause gastroenteritis", src: "images/ge-viruses.jpg", mod: "Transmission electron micrographs", ctx: "Viral gastroenteritis", loc: "—", find: "A: rotavirus (wheel-like), B: adenovirus, C: norovirus, D: astrovirus", signs: "Viral causes of watery diarrhoea", interp: "These viruses cause most childhood diarrhoea; antibiotics do not help. Rotavirus causes the most severe dehydration in infants", ddx: "—", by: "Graham Beards", page: "https://commons.wikimedia.org/wiki/File:Gastroenteritis_viruses.jpg", lic: "CC BY 3.0" })}
` },

{ id: "staging", title: "Classification and where to treat", html: `
${tbl(["Classification", "Where", "Follow-up"], [
["No dehydration (Plan A)", "Home", "5 days if not improving; at once if danger signs"],
["Some dehydration (Plan B)", "Clinic for 4 hours, then home", "5 days if not improving"],
["Severe dehydration (Plan C)", "Hospital (start IV before transfer if you can)", "Admit; reassess every 15–30 min"],
["Dysentery", "Home if well; admit if under 1 year, dehydrated, malnourished, measles in last 6 weeks, or no better after 2 antibiotics", "2 days"],
["Persistent diarrhoea", "Home if not dehydrated; admit if dehydrated, malnourished, infant under 4 months, or systemic infection", "5 days"]])}
<p class="qn">Based on IMNCI 2024 and ICMR STW 2019.${r(2, 5)}</p>
` },

{ id: "manage", title: "Management", html: `
<h3>Plan A: no dehydration (treat at home)</h3>
${box("green", "The four rules of home treatment", `<ol>
<li><b>Give extra fluid:</b> ${dr("ors", "ORS")} after each loose stool: <b>under 2 years 50–100 mL, 2 years and over 100–200 mL</b>; breastfeed more often and longer. Also soups, rice water, yoghurt drinks, clean water. Avoid sugary drinks, soft drinks and sweet tea.</li>
<li><b>Give zinc</b> for 10–14 days.</li>
<li><b>Continue feeding</b> the usual foods; extra meal a day for 2 weeks after.</li>
<li><b>Know when to return:</b> many watery stools, repeated vomiting, very thirsty, eating or drinking poorly, fever, blood in stool, or not better in 5 days.</li></ol><p>Give two ORS sachets and show the mother how to mix one sachet in 1 litre of boiled and cooled water.</p>`)}

<h3>Plan B: some dehydration (in the clinic)</h3>
<ul><li>ORS <b>75 mL/kg over 4 hours</b>. By weight: under 6 kg 200–400 mL; 6–10 kg 400–700 mL; 10–12 kg 700–900 mL; 12–19 kg 900–1400 mL. Give more if the child wants it.</li>
<li>Small sips from a cup or spoon; if vomiting, wait 10 minutes and go slower. Keep breastfeeding; no other food during the 4 hours except breast milk.</li>
<li>Persistent vomiting preventing ORS (hospital): single dose ${dr("ondansetron", "ondansetron")} 0.15 mg/kg (over 6 months), or ORS by NG tube.</li>
<li>After 4 hours, reassess and choose Plan A, B or C. If the mother must leave early, show her how to finish at home.</li></ul>

<h3>Plan C: severe dehydration</h3>
${box("red", "Plan C (IMNCI 2024)", `<p>Start IV at once. If the child can drink, give ORS while the drip is set up. ${dr("ringer_lactate", "Ringer's lactate")} (or normal saline) <b>100 mL/kg</b>:</p>
${tbl(["Age", "First 30 mL/kg in", "Then 70 mL/kg in"], [["Infant under 12 months", "<b>1 hour</b>*", "<b>5 hours</b>"], ["Child 12 months to 5 years", "<b>30 minutes</b>*", "<b>2½ hours</b>"]])}
<p>* Repeat once if the radial pulse is still very weak or not detectable.</p>
<ul><li>Reassess every 15–30 minutes; speed up if not improving.</li><li>Add ORS about <b>5 mL/kg/hour</b> as soon as the child can drink (after 3–4 hours in infants, 1–2 hours in children).</li><li>Reclassify after 6 hours (infant) or 3 hours (child) and continue with Plan A, B or C.</li><li><b>No IV access:</b> ORS <b>20 mL/kg/hour for 6 hours</b> (120 mL/kg) by NG tube, and refer urgently.</li><li>Observe for at least 6 hours after rehydration to be sure the mother can keep the child hydrated.</li><li>Cholera suspected in a child 2 years or older: give an antibiotic (below).</li></ul>
<p><b>Never use 5% dextrose alone</b>: it does not rehydrate. <b>Severe acute malnutrition: do not use Plan C</b>; follow the SAM protocol.</p>`)}

<h3>Dysentery (blood in the stool)</h3>
${F.chart("Child with blood in the stool (IMNCI 2024)", [
F.s("Assess and treat dehydration (Plan A, B or C)"), F.a,
F.d("Severe malnutrition, age under 1 year, dehydrated, measles in past 6 weeks, or very ill?"), F.a,
F.b([["Yes", F.e("Admit; IV ceftriaxone if very ill")], ["No", F.s("Oral antibiotic for Shigella; review in 2 days")]]), F.a,
F.d("Better in 2 days? (less fever, fewer stools, less blood, eating)"), F.a,
F.b([["Yes", F.ok("Complete 3 days (5 days for co-trimoxazole)")], ["No", F.s("Second antibiotic; still no better after 2 more days → admit, stool microscopy, treat amoebiasis if trophozoites with RBCs")]])])}
${tbl(["Antibiotic", "Dose", "Note"], [
[dr("ciprofloxacin", "Ciprofloxacin") + " (first line)", "15 mg/kg twice daily × 3 days", "WHO 2024, IMNCI; tablets to DH level"],
[dr("cotrimoxazole", "Co-trimoxazole"), "4 mg/kg trimethoprim twice daily × 5 days", "IMNCI option; the oral option stocked at PHC; resistance common"],
[dr("ceftriaxone", "Ceftriaxone"), "50–80 mg/kg IM/IV once daily × 3 days (IMNCI: 75 mg/kg × 5 days)", "Second line, or very ill / unable to take oral"],
[dr("metronidazole", "Metronidazole"), "10 mg/kg three times daily × 5 days", "Only for proven amoebiasis or failure of two Shigella antibiotics"]])}
<p>Ineffective for Shigella and should not be used: metronidazole (unless amoebiasis), amoxicillin, nalidixic acid, nitrofurans, aminoglycosides, first-generation cephalosporins.${r(2, 4)}</p>

<h3>Persistent diarrhoea (14 days or more)</h3>
<ul><li>Treat dehydration; look for infections outside the gut (pneumonia, UTI, otitis, sepsis, thrush, HIV).</li>
<li>Antibiotics only for a cause: blood → treat as dysentery; amoebic trophozoites → metronidazole 10 mg/kg TDS × 5 days; <i>Giardia</i> → metronidazole 5 mg/kg TDS × 5 days.</li>
<li><b>Nutrition</b>: continue breastfeeding; replace other milk with yoghurt or reduce lactose; 6 small meals a day aiming for at least 110 kcal/kg/day; check weight daily.</li>
<li>Zinc 10–14 days; vitamin A (6–12 months 100,000 IU, over 12 months 200,000 IU, single dose) and multivitamins for 2 weeks; iron only after diarrhoea stops.</li></ul>
<p class="qn">Persistent diarrhoea and dysentery management from IMNCI 2024 Module 3 §10.${r(2)}</p>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes", "Bhutan (NEML 2025)"], [
[dr("ors", "ORS"), "Plan A 50–200 mL per stool; Plan B 75 mL/kg in 4 h", "Low-osmolarity", "To PHC"],
[dr("zinc", "Zinc sulphate"), "Under 6 m 10 mg; 6 m and over 20 mg daily × 10–14 days", "WHO 2024 suggests 5 mg", "20 mg tablet to PHC"],
[dr("ringer_lactate", "Ringer's lactate"), "100 mL/kg Plan C", "Normal saline if unavailable", "To PHC"],
[dr("ciprofloxacin", "Ciprofloxacin"), "15 mg/kg BD × 3 days", "Dysentery", "500 mg tablet to DH"],
[dr("cotrimoxazole", "Co-trimoxazole"), "4 mg/kg TMP BD × 5 days", "Dysentery (if cipro unavailable)", "Syrup and tablet to PHC"],
[dr("ceftriaxone", "Ceftriaxone"), "50–80 mg/kg daily × 3 days", "Severe dysentery", "250 mg vial to PHC; 1 g NRH/RRH"],
[dr("ondansetron", "Ondansetron"), "0.15 mg/kg once (over 6 months)", "Vomiting stopping ORS", "NRH/RRH"],
[dr("azithromycin", "Azithromycin"), "20 mg/kg single dose", "Cholera", "IV only on NEML 2025"],
[dr("doxycycline", "Doxycycline"), "4 mg/kg single dose (child 2 years and over)", "Cholera", "To PHC"],
[dr("metronidazole", "Metronidazole"), "Amoeba 10 mg/kg TDS × 5 d; Giardia 5 mg/kg TDS × 5 d", "Proven cause only", "400 mg tablet to PHC"],
["Paracetamol", "15 mg/kg 6–8 hourly", "Fever, cramps", "To PHC"]])}
${box("amber", "Avoid in children", `<p>Loperamide and other antimotility drugs, antiemetics other than a single ondansetron dose, routine antibiotics for watery diarrhoea, probiotics (WHO 2024), and 'antidiarrhoeal' mixtures.</p>`)}
` },

{ id: "populations", title: "Special situations", html: `
<h3>Young infants (under 2 months)</h3><ul><li>Diarrhoea with dehydration or blood is a danger sign; think of sepsis. Follow the young-infant IMNCI chart; keep breastfeeding.</li></ul>
<h3>Severe acute malnutrition</h3><ul><li>Signs of dehydration are unreliable; use ReSoMal orally and IV fluids only for shock, at slower rates (see SAM chapter).</li></ul>
<h3>Cholera outbreaks</h3><ul><li>Profuse 'rice-water' stools, dehydration in hours, any age. Notify the district health officer. Antibiotic for children with severe dehydration: azithromycin 20 mg/kg or doxycycline 4 mg/kg single dose.</li></ul>
<h3>HIV</h3><ul><li>Persistent diarrhoea may be cryptosporidium, isospora (co-trimoxazole), CMV: refer.</li></ul>
<h3>Travel, schools, festivals</h3><ul><li>Outbreaks after shared meals: think norovirus, Staphylococcus or Bacillus cereus toxins (vomiting within hours).</li></ul>
` },

{ id: "scenarios", title: "Hard cases", html: `
${tbl(["Situation", "What to do"], [
["<b>Child keeps vomiting the ORS</b>", "Smaller amounts more often (5 mL every 1–2 minutes); ondansetron in hospital; NG ORS; IV if failing"],
["<b>Convulsion during diarrhoea</b>", "Check glucose and sodium; treat hypoglycaemia; avoid rectal diazepam in dysentery (IMNCI)"],
["<b>Puffy eyelids during rehydration</b>", "Over-hydration: stop ORS, give breast milk or water, reassess"],
["<b>Bloody diarrhoea, now pale with little urine</b>", "HUS: urea, creatinine, FBC, film; refer for possible dialysis; avoid antimotility agents"],
["<b>Rectal prolapse in dysentery</b>", "Push back gently with a gloved hand or wet cloth; magnesium sulphate compresses reduce oedema"],
["<b>Distended, tender, silent abdomen</b>", "Toxic megacolon or surgical cause: IV fluids, NG tube, antibiotics, surgeon"],
["<b>Mother asks for a 'medicine to stop the diarrhoea'</b>", "Explain ORS replaces losses and zinc shortens the illness; antidiarrhoeals are harmful"]])}
` },

{ id: "complications", title: "Complications", html: `
${tbl(["Complication", "Clue", "Action"], [
["Hypovolaemic shock", "Cold, weak pulse, lethargy", "Plan C"],
["Hypernatraemia (Na over 145)", "Very irritable, doughy skin, convulsions; looks less dehydrated than he is", "Slow correction (over 48 h) in hospital; ORS is safe"],
["Hyponatraemia", "Lethargy, convulsions (often after plain water)", "Ringer's/saline; hypertonic saline if seizing"],
["Hypokalaemia", "Weakness, ileus", "ORS, bananas, coconut water; IV potassium in hospital"],
["Hypoglycaemia", "Lethargy, convulsion", "10% dextrose 5 mL/kg"],
["Acute kidney injury", "Little urine after rehydration", "Fluids, then creatinine; HUS?"],
["Malnutrition and persistent diarrhoea", "Weight loss", "Nutrition, zinc"]])}
` },

{ id: "followup", title: "Follow-up and prevention", html: `
${tbl(["Prevention", "How"], [
["Exclusive breastfeeding to 6 months", "Most powerful protection in infants"],
["Safe water", "Boil or treat drinking water; covered storage"],
["Handwashing with soap", "After toilet, before cooking and feeding"],
["Toilets and safe disposal of child stool", "Including nappies"],
["Food hygiene", "Cook well, eat hot; wash vegetables"],
["Vitamin A, measles vaccine", "Reduce severity and deaths"],
["Rotavirus vaccine", "WHO recommends for all countries; Bhutan schedule status to be confirmed <span class='lbl l-draft'>VERIFY</span>"]])}
${box("red", "Return immediately if", `<ul><li>Many watery stools or repeated vomiting.</li><li>Very thirsty, drinking or feeding poorly.</li><li>Fever, or blood in the stool.</li><li>Sleepy, floppy or not passing urine.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<div class="pair">
${fig({ title: "Oral rehydration salts sachet", src: "images/ge-ors.jpg", mod: "Photograph", ctx: "Treatment", loc: "—", find: "UNICEF low-osmolarity ORS sachet, to be mixed in 1 litre of clean water", signs: "—", interp: "One sachet in exactly 1 litre of boiled, cooled water; too little water makes it dangerously salty", ddx: "—", by: "Cjp24", page: "https://commons.wikimedia.org/wiki/File:Oral_rehydration_salts_(ORS)_-_Packet.jpg", lic: "CC BY-SA 4.0" })}
${fig({ title: "Stool microscopy in shigellosis", src: "images/ge-shigella.jpg", mod: "Light microscopy of stool", ctx: "Dysentery", loc: "Stool", find: "Many pus cells (neutrophils) and red cells in the exudate", signs: "Inflammatory (invasive) diarrhoea", interp: "Pus and blood cells point to an invasive bacterial cause such as Shigella: treat with an antibiotic", ddx: "Campylobacter, Salmonella, amoebiasis (look for trophozoites with ingested red cells)", by: "CDC Public Health Image Library", page: "https://commons.wikimedia.org/wiki/File:Shigella_stool.jpg", lic: "Public domain" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with diarrhoea", [
F.s("Ask: duration, blood. Look: lethargy, eyes, drinking, skin pinch, nutrition"), F.a,
F.d("Severe malnutrition?"), F.a,
F.b([["Yes", F.e("SAM protocol; refer")], ["No", F.d("Two signs of severe dehydration?")]]), F.a,
F.b([["Yes", F.e("<b>Plan C</b>")], ["No: two signs of some?", F.s("<b>Plan B</b> (75 mL/kg in 4 h)")], ["Neither", F.ok("<b>Plan A</b>")]]), F.a,
F.s("Plus: zinc for all · blood → dysentery antibiotic · 14 days or more → persistent diarrhoea work-up")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Dehydration kills, not diarrhoea.</b> Fluid first, everything else second.</li><li>Feeding continues: starving a child with diarrhoea worsens malnutrition.</li><li>A hypernatraemic child looks less dry than he is.</li><li>Always ask about blood; antibiotics are for dysentery and cholera only.</li></ul>
${tbl(["Mistake", "Better"], [["Metronidazole for every bloody stool", "Ciprofloxacin first; metronidazole only for proven amoebiasis"], ["Antibiotics for watery diarrhoea", "ORS and zinc"], ["IV 5% dextrose", "Ringer's lactate or normal saline"], ["Stopping zinc when stools settle", "Complete 10–14 days"], ["Plan C in severe malnutrition", "SAM protocol"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Questions</h3>
${qa("Student", "Name the signs used to classify severe dehydration.", "Two or more of: lethargic or unconscious, sunken eyes, not able to drink or drinks poorly, skin pinch goes back very slowly (over 2 seconds).")}
${qa("Intern/MO", "Calculate Plan B for a 9 kg child.", "75 mL/kg × 9 = 675 mL (about 700 mL) of ORS over 4 hours, then reassess.")}
${qa("Intern/MO", "Give Plan C for a 7 kg infant aged 8 months.", "Ringer's lactate 100 mL/kg = 700 mL: 210 mL in the first hour, then 490 mL over 5 hours; ORS 5 mL/kg/h when able to drink; reassess every 15–30 minutes.")}
${qa("Intern/MO", "What is the first-line treatment for dysentery in a 3-year-old?", "Ciprofloxacin 15 mg/kg twice daily for 3 days, plus fluids and zinc, with review after 2 days.")}
${qa("Specialist", "What changed in the WHO 2024 diarrhoea guideline?", "Zinc 5 mg daily (instead of 10–20 mg) for children up to 10 years, probiotics not recommended, antibiotics for all bloody diarrhoea with ciprofloxacin first and ceftriaxone second.")}
${qa("Viva", "Why does ORS work in cholera?", "Sodium–glucose co-transport (SGLT1) in the small bowel stays intact even when cholera toxin drives chloride secretion, so glucose-coupled sodium absorption pulls water back in.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024: §12.4.1 Diarrhoea (paediatrics), §8.1.2 Bacillary dysentery, §8.5.11 Viral gastroenteritis.</li>
<li id="ref-2">Ministry of Health, Bhutan. Hospital-based Integrated Management of Neonatal and Childhood Illness (IMNCI), 3rd ed. 2024: §3.7 and Module 3 §10.</li>
<li id="ref-3">World Health Organization. Guideline on management of pneumonia and diarrhoea in children up to 10 years of age. Geneva: WHO; 2024. <a href="https://www.who.int/publications/i/item/9789240103412" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">World Health Organization. Pocket book of hospital care for children, 2nd ed. 2013: Chapter 5 and Charts 13–15. <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-5">Indian Council of Medical Research. Standard Treatment Workflow: Acute diarrhoea. 2019. <a href="https://stw.icmr.org.in/" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-6">Freedman SB, Adler M, Seshadri R, Powell EC. Oral ondansetron for gastroenteritis in a pediatric emergency department. N Engl J Med 2006;354:1698–1705. <a href="https://doi.org/10.1056/NEJMoa055119" target="_blank" rel="noopener">doi:10.1056/NEJMoa055119</a></li>
<li id="ref-7">Médecins Sans Frontières. Management of a cholera epidemic. 2018 (app export 2025).</li>
<li id="ref-8">Ministry of Health, Bhutan. National Essential Medicines Formulary 2022 and NEML 2025.</li>
<li id="ref-9">Wangchuk S, Dorji T, Tsheten, et al. A prospective hospital-based surveillance to estimate rotavirus disease burden in Bhutanese children under 5 years of age. Trop Med Health 2015;43:63–68. <a href="https://doi.org/10.2149/tmh.2014-22" target="_blank" rel="noopener">doi:10.2149/tmh.2014-22</a></li>
<li id="ref-10">Pempa, Luz ACG, Luangasanatip N, et al. Economic evaluation of rotavirus vaccination in children of Bhutan. Vaccine 2020;38:5049–5059. <a href="https://doi.org/10.1016/j.vaccine.2020.05.035" target="_blank" rel="noopener">doi:10.1016/j.vaccine.2020.05.035</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 and IMNCI 2024", "<span class='pass'>Verified</span>", "Read from the PDFs"],
["WHO 2024 guideline changes (zinc 5 mg, probiotics, dysentery)", "<span class='pass'>Checked</span>", "From WHO AWaRe comparison table and WHO recommendation records"],
["NEML 2025 availability", "<span class='pass'>Checked</span>", "Ciprofloxacin tablet to DH; oral azithromycin not listed"],
["Rotavirus vaccine in Bhutan's current schedule", "<span class='warn'>To verify</span>", "Not introduced as of 2020 study"],
["Shigella resistance data for Bhutan", "<span class='warn'>Evidence gap</span>", "No national data found"],
["Ondansetron dose", "<span class='pass'>Checked</span>", "Freedman 2006; ICMR"],
["Clinical sign-off", "<span class='warn'>Pending</span>", "Needs paediatrician review"]], "qc")}
` }
]
});
