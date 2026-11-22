/* Pneumonia — children */
registerPage({
id: "pneumonia-child",
title: "Pneumonia — Children",
subtitle: "WHO/IMNCI classification, fast breathing and danger signs, and the right antibiotic for the right severity",
age: "Children", specs: ["paeds", "resp", "id", "ph"],
keywords: ["pneumonia", "child pneumonia", "fast breathing", "chest indrawing", "danger signs", "IMNCI", "IMCI", "severe pneumonia", "amoxicillin", "ampicillin", "gentamicin", "bronchiolitis", "wheeze", "hypoxia", "oxygen", "RSV", "Streptococcus pneumoniae"],
related: ["pneumonia-adult", "tb-child"],
updated: "22 Nov 2026", review: "Nov 2027 (or sooner if WHO IMNCI guidance changes)", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">In a child, pneumonia is diagnosed at the bedside, not on the X-ray: count the breathing rate for a full minute, look for chest indrawing, and check the danger signs. The classification you make decides whether the child stays at home or is admitted — and it saves lives when done well.</p>
<div class="glance">
<div><h4>Diagnose</h4><p>Cough or difficult breathing <b>+</b> fast breathing (≥50/min at 2–11 months; ≥40/min at 1–5 years; ≥60/min under 2 months) or chest indrawing.</p></div>
<div><h4>Severe = danger signs</h4><p>Unable to drink/breastfeed, vomiting everything, convulsions, lethargy, stridor in a calm child — or SpO₂ &lt;90% — means <b>severe pneumonia</b>: admit.</p></div>
<div><h4>Non-severe (home)</h4><p>Oral ${dr("amoxicillin")} <b>40 mg/kg per dose twice daily for 3 days</b> (5 days in high HIV). Review after 3 days.</p></div>
<div><h4>Severe (hospital)</h4><p>${dr("ampicillin")} 50 mg/kg 6-hourly (or benzylpenicillin) <b>+</b> ${dr("gentamicin")} 7.5 mg/kg once daily, for at least 5 days.</p></div>
<div><h4>Oxygen</h4><p>Give when SpO₂ is <b>below 90%</b>; aim to keep it above 90% (ideally ≥92%).</p></div>
<div><h4>Red flags</h4><ul><li>Any danger sign or stridor</li><li>SpO₂ &lt;90%, grunting, cyanosis</li><li>No improvement in 48 h</li></ul></div>
<div><h4>Always</h4><p>Count the rate over a full minute when calm; think TB and HIV if not improving; check the vaccination record.</p></div>
</div>
<div class="calc" data-calc="imncipneumonia"></div>
${box("bt", "Bhutan note", `<p>The STG 2024 treats child pneumonia with <b>amoxicillin 15 mg/kg/dose (20–40 mg/kg/day) 8-hourly</b>, oxygen where needed, paracetamol, and <b>referral if there is respiratory distress</b>. Note this amoxicillin dose is <b>lower</b> than the WHO high-dose (40 mg/kg/dose twice daily) recommended internationally — a discrepancy worth flagging to the programme. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "What childhood pneumonia is and who gets it", html: `
<h3>Definition</h3>
<p>In children, pneumonia is defined <b>clinically</b>: cough or difficult breathing with <b>fast breathing</b> or <b>lower chest wall indrawing</b>. The cause cannot reliably be told from the symptoms or even the chest X-ray, so the WHO classification is built on signs, not the X-ray.${r(2)}</p>

<h3>The organisms, by age</h3>
${tbl(["Age", "Common causes", "Less common but important"], [
["Neonates (&lt;1 month)", "Group B streptococcus, Gram-negative bacilli (E. coli, Klebsiella), Listeria", "Chlamydia trachomatis, S. aureus, congenital infection"],
["1 month–5 years", "<b>Streptococcus pneumoniae</b>, Haemophilus influenzae type b, <b>viruses</b> (RSV, adenovirus, influenza, parainfluenza)", "S. aureus, measles, TB, Pneumocystis (HIV)"],
["5–15 years", "Mycoplasma pneumoniae, S. pneumoniae, viruses", "TB, Chlamydophila pneumoniae"]])}
<p>Viruses cause the majority of pneumonia in young children, and viral infection often opens the door to bacterial superinfection. In Bhutan, as elsewhere in South Asia, <b>tuberculosis and HIV must stay in mind</b> when a child's pneumonia does not respond to standard treatment.${r(2)}</p>

<h3>How common is it, and why children are vulnerable</h3>
<ul>
<li>Pneumonia is the single largest infectious killer of children worldwide: WHO estimates it killed about <b>740,000 children under 5 in 2019</b>, most of them under 2 years.${r(8)}</li>
<li>A precise current Bhutan childhood pneumonia figure was not in the sources reviewed. ${LB.bt("EVIDENCE GAP")}</li></ul>
${tbl(["Risk factor", "Why"], [
["Age under 2 years (especially under 2 months)", "Immature immunity and small airways"],
["Malnutrition", "Weakens every part of the immune response"],
["Not breastfed", "Loss of maternal antibody and nutrition"],
["Indoor smoke (biomass) and crowding", "Airway irritation and more exposure"],
["Incomplete vaccination", "Hib and pneumococcal disease are vaccine-preventable"],
["HIV infection", "High risk of severe, recurrent and unusual pneumonia"],
["Low birth weight / prematurity", "Small, immature lungs and immunity"]])}
` },

{ id: "patho", title: "Pathophysiology and natural history", html: `
${F.chart("Pneumonia in a child", [
F.s("Viruses (RSV and others, especially under 2) or bacteria (<i>S. pneumoniae</i>, Hib, <i>S. aureus</i>)"), F.a,
F.s("Risk ↑: no breastfeeding, malnutrition, indoor smoke, crowding, incomplete vaccination, HIV"), F.a,
F.s("Small airways and alveoli fill with inflammatory exudate"), F.a,
F.b([
["Breathing", F.e("Fast breathing → chest indrawing → hypoxaemia (danger)")],
["Whole child", F.e("Poor feeding, lethargy, convulsions, sepsis")]]), F.a,
F.ok("Early amoxicillin, oxygen when SpO₂ under 90%, and vaccination save lives")])}
<h3>Why a child's pneumonia behaves differently</h3>
<ol class="chain">
<li><b>Infection</b> (usually inhaled) reaches the small airways and alveoli, where viruses or bacteria multiply and provoke inflammation.</li>
<li><b>Alveolar filling</b> — exudate, neutrophils and oedema — reduces gas exchange and causes hypoxaemia, the main threat to the child.</li>
<li><b>Small airways matter:</b> a child's bronchi are narrow and soft, so oedema and secretions cause obstruction and collapse more easily, and respiratory distress appears early.</li>
<li><b>Infants decompensate fast:</b> less respiratory reserve, a compliant chest wall (so indrawing is a reliable sign of increased work), and immature immunity all mean a young infant can deteriorate within hours.</li></ol>
<h3>The signs, explained</h3>
<ul><li><b>Fast breathing</b> is the body's compensation for stiff, partly filled lungs — the earliest and most reliable sign of pneumonia.</li>
<li><b>Chest indrawing</b> (the lower chest wall sucking in) means the child is working hard to breathe.</li>
<li><b>Grunting, nasal flaring and head nodding</b> are late signs of severe respiratory distress.</li>
<li><b>Danger signs</b> (cannot drink, vomiting everything, convulsions, lethargy) signal that the illness is systemic — sepsis, hypoxia or both — and need urgent, hospital-level care.</li></ul>
<h3>Natural history</h3>
<p>With timely, correct antibiotics, most children with non-severe pneumonia improve within 48–72 hours and recover fully. Untreated or late-treated severe pneumonia progresses to hypoxaemic respiratory failure and death, particularly in infants, the malnourished and those with HIV.</p>
` },

{ id: "conflicts", title: "Where the guidelines differ", html: `
${tbl(["Topic", "WHO (Pocket Book / IMNCI)", "Bhutan STG 2024", "India (IMNCI/ICMR)", "This guide"], [
["Non-severe pneumonia antibiotic", "High-dose amoxicillin 40 mg/kg/dose twice daily", "Amoxicillin 15 mg/kg/dose 8-hourly", "Amoxicillin (high-dose per IMNCI)", "Use WHO high-dose amoxicillin; note the Bhutan dose is lower"],
["Duration (non-severe)", "3 days (low HIV) or 5 days (high HIV)", "Not specified", "3–5 days", "3 days (5 in high HIV)"],
["Severe pneumonia", "Ampicillin + gentamicin ≥5 days", "\"Refer if respiratory distress\" (no specific severe regimen)", "Ampicillin + gentamicin", "Ampicillin/benzylpenicillin + gentamicin, admit"],
["Chest indrawing", "Non-severe (home) for 2–59 months (2014 IMNCI)", "Not classified", "Non-severe for 2–59 months", "Treat as non-severe if no danger signs"],
["Severe = ?", "Any danger sign, stridor, SpO₂ &lt;90%, or severe respiratory distress", "Respiratory distress", "Danger signs + stridor + SpO₂ &lt;90%", "Danger signs / stridor / hypoxaemia / severe distress"],
["Young infant (&lt;2 months)", "Any fast breathing (≥60) or danger sign = admit", "Refer if respiratory distress", "Admit all", "Admit: young infants decompensate fast"]])}
` },

{ id: "presentation", title: "Clinical presentation", html: `
<p>Examine the child <b>calm and undressed</b>, count the respiratory rate for a <b>full minute</b>, and look at the lower chest for indrawing. These two observations, plus the danger signs, are the whole diagnosis.</p>
${tbl(["Feature", "What to look for", "Significance"], [
["Fast breathing", "≥50/min at 2–11 months; ≥40/min at 1–5 years; ≥60/min under 2 months", "The key sign of pneumonia"],
["Chest indrawing", "Lower chest wall sucks in during inspiration", "Increased work of breathing; pneumonia if no other cause"],
["Grunting, nasal flaring, head nodding", "Late signs of severe distress", "Severe pneumonia; admit now"],
["Cough", "Any duration", "Present in almost all cases"],
["Fever", "Often present; may be absent in young infants", "Supports infection"],
["Wheeze", "Often viral or reactive airways", "Try a bronchodilator and reassess — wheeze does not exclude pneumonia"],
["Stridor in a calm child", "Upper-airway obstruction", "A severe-pneumonia / danger sign when calm"],
["Danger signs", "Cannot drink/breastfeed, vomiting everything, convulsions, lethargy/unconscious", "Severe pneumonia / very severe disease — emergency"]])}
${box("red", "Red flags — severe pneumonia / very severe disease", `<ul>
<li><b>Any general danger sign</b>: unable to drink or breastfeed, vomiting everything, convulsions, lethargy or unconsciousness.</li>
<li><b>Stridor in a calm child</b>.</li>
<li><b>Oxygen saturation below 90%</b>, central cyanosis, or severe respiratory distress (grunting, very severe chest indrawing).</li>
<li>Any of these means <b>admit, give oxygen, and start IV/IM antibiotics</b> without delay.</li></ul>`)}
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Diagnosis", "Supports", "Argues against", "Best test to separate"], [
["Bronchiolitis (RSV)", "Under 2 years, wheeze and crackles, epidemic season, nasal flaring", "No focal consolidation; viral features", "Clinical course; viral testing where available"],
["Asthma / reactive airways", "Recurrent wheeze, triggers, family history, responds to bronchodilator", "Fever and focal signs", "Response to bronchodilator; no fast breathing between episodes"],
["Foreign body", "Sudden choking, unilateral wheeze or reduced sounds", "No fever; unilateral", "CXR (hyperinflation/atelectasis); bronchoscopy"],
["Tuberculosis", "Persistent cough &gt;2 weeks, weight loss, TB contact, no response to antibiotics", "Acute onset, quick response to antibiotics", "Xpert on sputum/gastric aspirate; CXR; TST"],
["Heart failure", "Large liver, gallop, murmur, sweating feeds", "Fever, focal crackles", "CXR, echo"],
["Whooping cough (pertussis)", "Paroxysmal cough with whoop, post-tussive vomiting", "No fast breathing between paroxysms", "Clinical; PCR where available"],
["Malaria (where endemic)", "Fever, splenomegaly, travel", "Respiratory signs prominent", "Blood film / rapid test"]])}
<h3>The typical patient</h3>
<p>An 18-month-old has coughed for three days with fever and is now breathing at 52 breaths a minute with mild lower-chest indrawing, but drinks well and is alert. This is <b>non-severe pneumonia</b>: fast breathing with indrawing and no danger signs. She can be treated at home with high-dose amoxicillin and reviewed in three days. If she could not drink, was drowsy, or had SpO₂ under 90%, she would have severe pneumonia and need admission.</p>
` },

{ id: "invest", title: "Investigations", html: `
<p>In most children the diagnosis is clinical; investigations are for severity, complications and the non-responding child.</p>
${tbl(["Test", "Why", "What it changes"], [
["<b>Pulse oximetry</b>", "In every child with suspected pneumonia", "SpO₂ &lt;90% = severe; start oxygen and admit"],
["Chest X-ray", "Severe disease, diagnostic doubt, or non-response", "Consolidation, effusion, collapse; not needed for every uncomplicated case"],
["Full blood count", "Severe or hospitalised children", "Leukocytosis supports bacterial cause; not routine"],
["Blood culture", "Severe pneumonia before antibiotics", "Identifies bacteraemia"],
["Xpert / gastric aspirate / sputum", "TB suspected (persistent cough, contact, non-response, HIV)", "TB diagnosis"],
["HIV test", "Severe, recurrent or non-responding pneumonia", "Changes treatment and follow-up"],
["Viral testing / CRP", "Where available, to guide antibiotics", "Supports viral vs bacterial cause"]])}
${box("amber", "Do not over-investigate", `<p>An alert, well child with non-severe pneumonia needs a pulse-oximetry check and a clear treatment plan — not a chest X-ray and blood tests. Reserve investigations for severe disease, diagnostic doubt and non-response, and never delay antibiotics for a test.${r(2)}</p>`)}
` },

{ id: "staging", title: "Classification: severe, non-severe and no pneumonia", html: `
<h3>Children 2 months to 5 years</h3>
${tbl(["Class", "Signs", "Where to treat"], [
["<b>Severe pneumonia / very severe disease</b>", "Cough/difficult breathing + <b>any</b> danger sign (cannot drink/breastfeed, vomiting everything, convulsions, lethargy), or stridor in a calm child, or SpO₂ &lt;90%, or severe respiratory distress", "Admit; oxygen + IV/IM antibiotics"],
["<b>Pneumonia (non-severe)</b>", "Fast breathing (≥50/min 2–11 mo; ≥40/min 1–5 y) or chest indrawing, with no danger signs", "Home; oral amoxicillin"],
["<b>No pneumonia (cough or cold)</b>", "No fast breathing, no chest indrawing", "Home care; no antibiotic"]])}
<h3>Young infants (under 2 months)</h3>
${tbl(["Class", "Signs", "Where to treat"], [
["<b>Severe pneumonia / very severe disease</b>", "Any danger sign, or fast breathing ≥60/min, or severe chest indrawing", "Refer urgently; admit; ampicillin + gentamicin"],
["<b>No pneumonia</b>", "No fast breathing, no danger signs", "Home care with close review"]])}
<p>Young infants are always treated with caution: they deteriorate quickly, and any fast breathing or danger sign means hospital.</p>
` },

{ id: "manage", title: "Management: antibiotics, oxygen and supportive care", html: `
<h3>Treatment by class</h3>
${tbl(["Class", "Antibiotic", "Details"], [
["Non-severe (home)", dr("amoxicillin") + " 40 mg/kg per dose twice daily", "For <b>3 days</b> (5 days in high HIV prevalence). Review after 3 days"],
["Severe (hospital)", dr("ampicillin") + " 50 mg/kg IV/IM 6-hourly (or " + dr("benzylpenicillin") + " 50,000 U/kg) <b>+</b> " + dr("gentamicin") + " 7.5 mg/kg once daily", "For at least 5 days; switch to oral amoxicillin when improving and able to take oral"],
["Suspected staphylococcal", dr("cloxacillin") + " 50 mg/kg 6-hourly + gentamicin", "Think staph with rapid deterioration, pneumatocoeles, empyema or post-influenza; treat about 3 weeks"],
["Atypical (older child, Mycoplasma)", dr("azithromycin") + " (macrolide)", "10 mg/kg day 1 then 5 mg/kg days 2–5"]])}

<h3>Oxygen and supportive care</h3>
${tbl(["Intervention", "How"], [
["Oxygen", "Give when SpO₂ &lt;90%; nasal prongs or catheter, titrate to keep SpO₂ &gt;90% (ideally ≥92%)"],
["Fluids and feeding", "Continue breastfeeding and fluids; small frequent feeds; NG feeds if the child tires; IV fluids only if unable to drink"],
["Fever", "Paracetamol 15 mg/kg per dose 6–8-hourly"],
["Wheeze", "A trial of a bronchodilator (" + dr("salbutamol") + "); reassess — do not give it for every child"],
["Airway care", "Clear the nose gently; avoid cough remedies with codeine, atropine or alcohol"]])}

<h3>Review and escalation</h3>
<ul>
<li>Review the child on oral treatment after <b>3 days</b> — or at once if they worsen.</li>
<li>In hospital, reassess at <b>48 hours</b>: if not improving, think staphylococcus, effusion/empyema, TB, HIV, foreign body or a wrong diagnosis.</li>
<li>Watch for danger signs at every contact, and treat hypoxaemia the moment it appears.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
<p>Tap any medicine for its full card. All child doses are weight-based with a ceiling, never above the adult maximum.</p>
${tbl(["Drug", "Child dose", "Key cautions"], [
[dr("amoxicillin"), "40 mg/kg/dose twice daily (non-severe); 15 mg/kg/dose 8-hourly per Bhutan STG", "Penicillin allergy"],
[dr("ampicillin"), "50 mg/kg/dose IV/IM 6-hourly (severe)", "Rash; penicillin allergy"],
[dr("benzylpenicillin"), "50,000 U/kg IV/IM 6-hourly", "Penicillin allergy"],
[dr("gentamicin"), "7.5 mg/kg IV/IM once daily", "Nephro-/ototoxicity"],
[dr("cloxacillin"), "50 mg/kg/dose 6-hourly (staph)", "Penicillin allergy"],
[dr("ceftriaxone"), "50–80 mg/kg once daily (max 2 g)", "Not with calcium in neonates"],
[dr("cefotaxime"), "50 mg/kg/dose 6–8-hourly", "Neonatal sepsis/pneumonia"],
[dr("azithromycin"), "10 mg/kg day 1, then 5 mg/kg days 2–5", "Atypical pneumonia"],
[dr("salbutamol"), "Nebulised for wheeze", "Only if wheeze; reassess"],
[dr("cotrimoxazole", "Co-trimoxazole"), "5 mg/kg trimethoprim once daily (PCP in HIV)", "From 6 weeks of age"]])}
` },

{ id: "populations", title: "Neonates, HIV and malnutrition", html: `
<h3>Neonates and young infants (under 2 months)</h3>
<ul>
<li>Fast breathing in a young infant is ≥60/min; <b>any</b> fast breathing, danger sign or severe indrawing means admission.</li>
<li>Treat with IV ampicillin + gentamicin (add broader cover for early-onset sepsis if under 7 days).</li>
<li>Also consider <i>Chlamydia trachomatis</i> (afebrile, staccato cough, conjunctivitis) — add a macrolide under specialist care.</li></ul>
<h3>HIV</h3>
<ul>
<li>Pneumonia in an HIV-infected child is often severe and may be <i>Pneumocystis jirovecii</i> (PCP): add high-dose co-trimoxazole and start ART early.</li>
<li>Non-severe pneumonia in high-HIV settings is treated for <b>5 days</b>, not 3.</li>
<li>Test every child with severe or recurrent pneumonia for HIV.</li></ul>
<h3>Malnutrition</h3>
<ul>
<li>Malnutrition raises pneumonia risk and mortality; treat both together with therapeutic feeding.</li>
<li>Classify by the same signs, but have a lower threshold for admission — a malnourished child has less reserve.</li></ul>
` },

{ id: "scenarios", title: "Non-response, staphylococcal disease and complications", html: `
${tbl(["Situation", "What to do"], [
["Not improving at 48 h", "Re-examine; reconsider the diagnosis; think TB, HIV, staph, effusion/empyema, foreign body; check the CXR"],
["Staphylococcal pneumonia", "Rapid deterioration, pneumatocoeles, pneumothorax or empyema, or post-influenza → cloxacillin + gentamicin, about 3 weeks"],
["Pleural effusion / empyema", "Persistent fever, dullness, effusion on CXR → diagnostic tap and chest drainage for pus/large effusion"],
["Pneumothorax", "Sudden worsening, shifted apex, hyper-resonance → urgent decompression and chest drain"],
["Tuberculosis", "Cough &gt;2 weeks, weight loss, contact, no antibiotic response → Xpert on sputum/gastric aspirate and TB treatment"],
["Recurrent pneumonia", "Think aspiration, immune deficiency, congenital heart disease, foreign body, TB — investigate after recovery"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Early / late", "How to recognise it", "Management"], [
["<b>Hypoxaemia and respiratory failure</b>", "Early", "SpO₂ &lt;90%, grunting, cyanosis, exhaustion", "Oxygen; ventilation if needed"],
["<b>Septicaemia / septic shock</b>", "Early", "Lethargy, poor perfusion, hypotension", "IV antibiotics, fluids, inotropes, ICU"],
["<b>Pleural effusion / empyema</b>", "Early–late", "Persistent fever, dullness, effusion", "Drain; antibiotics"],
["<b>Lung abscess / pneumatocoele</b>", "Late", "Fever, cavitation on CXR", "Prolonged antibiotics; drainage if large"],
["<b>Pneumothorax</b>", "Early", "Sudden worsening, shifted trachea", "Urgent decompression + drain"],
["<b>Meningitis (in infants)</b>", "Early", "Bulging fontanelle, seizures, neck stiffness", "Treat for meningitis; lumbar puncture if safe"],
["<b>Chronic lung damage / bronchiectasis</b>", "Late", "Persistent cough, recurrent infection", "Physiotherapy; follow-up"]])}
<h3>Prognosis</h3>
<ul>
<li>Most children with non-severe pneumonia recover fully at home. Severe pneumonia is very treatable when oxygen and IV antibiotics are prompt.</li>
<li>Mortality concentrates in infants under 2 months, severe malnutrition, HIV, and delayed recognition of hypoxaemia — all reasons the classification and early oxygen matter so much.</li></ul>
` },

{ id: "followup", title: "Follow-up, prevention and counselling", html: `
<h3>After treatment</h3>
<ul>
<li>Review the child on oral antibiotics after <b>3 days</b> (or earlier if worse).</li>
<li>Severe pneumonia: follow up after discharge, check weight gain, and complete the antibiotic course.</li>
<li>A child with repeated pneumonia needs investigation (aspiration, immunity, heart disease, TB, foreign body).</li></ul>
<h3>Prevention</h3>
${tbl(["Measure", "Why"], [
["Breastfeeding (exclusive to 6 months)", "Halves pneumonia risk in infants"],
["Vaccination: Hib, pneumococcal (PCV), measles, pertussis, and influenza", "Prevents the commonest bacterial and viral causes"],
["Reduce indoor smoke and crowding", "Lowers exposure and airway irritation"],
["Good nutrition and vitamin A", "Strengthens immune defence"],
["Hand hygiene", "Reduces respiratory-virus spread"]])}
${box("green", "What to tell the family", `<ul><li>"Give every dose of the antibiotic for the full number of days, even when the child seems better."</li><li>"Keep breastfeeding and offering fluids; small, frequent feeds are best."</li><li>"Soothe the throat with warm water; never use cough medicines that contain codeine, atropine or alcohol."</li><li>"Come back after 3 days, or at once if the child breathes fast or with difficulty, cannot drink or breastfeed, vomits everything, becomes very sleepy or has a fit."</li><li>"No smoking in the home, and keep the kitchen smoke away from the child."</li></ul>`)}
${box("red", "Return or seek help immediately if", `<ul><li>Fast or difficult breathing, or the lower chest sucking in.</li><li>Cannot drink or breastfeed, or vomits everything.</li><li>Very sleepy, difficult to wake, or a fit.</li><li>Blue lips, or the child is getting worse despite the medicine.</li></ul>`)}
` },

{ id: "images", title: "Images and what they show", html: `
<h3>Childhood pneumonia on the X-ray</h3>
<div class="pair">
${fig({ title: "Right middle lobe pneumonia in a child", src: "images/pneumonia-child-rml.png", mod: "Chest X-ray", ctx: "Child with community-acquired pneumonia", loc: "Right mid/lower zone", find: "A right middle lobe opacity obscuring the right heart border (silhouette sign)", signs: "Middle-lobe consolidation", interp: "Consolidation next to the heart wipes out its border — the silhouette sign. In children, viral and bacterial pneumonia look alike, so treatment follows the clinical classification, not the X-ray", ddx: "Collapse, effusion, thymus (upper zones)", by: "James Heilman, MD", page: "https://commons.wikimedia.org/wiki/File:RtPneuKidMark.png", lic: "CC BY-SA 4.0" })}
${fig({ title: "Pneumonia with pleural effusion (2.5-year-old)", src: "images/pneumonia-child-effusion.png", mod: "Chest X-ray", ctx: "A 2.5-year-old girl with pneumonia complicated by effusion", loc: "Left lower zone", find: "Left lower lung consolidation with an accompanying pleural effusion", signs: "Consolidation + effusion", interp: "An effusion with pneumonia should be tapped: pus or a large collection means drainage. This is a key cause of persistent fever", ddx: "Empyema, tumour, TB", by: "Diawara Zerouali, Elmdaghri, Abid (BMC Pediatr 2017)", page: "https://commons.wikimedia.org/wiki/File:Pneumonia_and_pleural_effusions_on_the_lower_left_lung_(2.5_y.o._child).png", lic: "CC BY 4.0" })}
</div>
<h3>Link-only images</h3>
<ul><li>Normal paediatric chest X-ray for comparison: see the kidney chapter images or <a href="https://radiopaedia.org/articles/normal-chest-radiograph-paediatric" target="_blank" rel="noopener">Radiopaedia</a>.</li><li>Round pneumonia and viral patterns in children: <a href="https://radiopaedia.org/articles/paediatric-pneumonia" target="_blank" rel="noopener">Radiopaedia</a>.</li></ul>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("1 · Classify a child with cough or difficult breathing", [
F.s("Count respiratory rate for a full minute (calm, undressed) + look for indrawing + danger signs"), F.a,
F.d("Any danger sign, stridor in calm child, or SpO₂ &lt;90%?"), F.a,
F.b([["Yes", F.e("Severe pneumonia / very severe disease: admit, oxygen, IV ampicillin + gentamicin")], ["No", F.s("Fast breathing or chest indrawing?")]]), F.a,
F.d("Fast breathing (≥50/min 2–11 mo, ≥40/min 1–5 y) or indrawing?"), F.a,
F.b([["Yes", F.ok("Pneumonia: home oral amoxicillin 40 mg/kg/dose BD ×3 days")], ["No", F.ok("No pneumonia (cough/cold): home care, no antibiotic")]])])}
${F.chart("2 · Young infant (under 2 months)", [
F.s("Infant under 2 months with cough or difficult breathing"), F.a,
F.d("Danger sign, fast breathing ≥60/min, or severe indrawing?"), F.a,
F.b([["Yes", F.e("Severe pneumonia / very severe disease: refer urgently, IV ampicillin + gentamicin")], ["No", F.ok("No pneumonia: home care, review closely, return if any danger sign")]])])}
${F.chart("3 · Not improving at 48 hours", [
F.s("Child not improving (or worsening) on antibiotics"), F.a,
F.s("Re-examine, check SpO₂, reconsider the classification and CXR"), F.a,
F.d("Pneumatocoeles, effusion, or rapid deterioration?"), F.a,
F.b([["Yes", F.s("Staphylococcus: cloxacillin + gentamicin; drain effusion/empyema")], ["No", F.s("Think TB, HIV, foreign body, or wrong diagnosis")]]), F.a,
F.ok("Investigate and adjust; never ignore a child who is getting worse")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<h3>Pearls</h3><ul>
<li><b>Count the respiratory rate for a full minute while the child is calm.</b> Counting while crying, or for 15 seconds and multiplying, gives a wrong classification.</li>
<li><b>Undress the child to see the chest.</b> Indrawing is invisible through clothes.</li>
<li><b>Check the saturation in every child</b> — hypoxaemia is the complication you can fix immediately.</li>
<li><b>Wheeze is not a reason to skip antibiotics</b>: treat the wheeze and reassess, but a child with fast breathing and fever still needs treatment for pneumonia.</li>
<li><b>In South Asia, a pneumonia that does not settle is TB until proven otherwise</b> — especially with weight loss or a sick contact.</li></ul>
<h3>Mistakes</h3>
${tbl(["Mistake", "Why it is harmful", "Prevention"], [
["Counting fast breathing while the child cries", "Over-diagnosis and unnecessary antibiotics", "Count when calm, over a full minute"],
["Giving antibiotics for a simple cough or cold", "Antibiotic overuse and side effects", "Classify: no fast breathing/indrawing = no antibiotic"],
["Using low-dose amoxicillin when high-dose is recommended", "Treatment failure as pneumococcal resistance rises", "Use 40 mg/kg/dose twice daily (flag the Bhutan STG dose)"],
["Giving cough remedies with codeine, atropine or alcohol", "Respiratory depression and harm", "Safe home remedies only"],
["Delaying oxygen when SpO₂ is below 90%", "Preventable death", "Oxygen the moment hypoxaemia is found"],
["Forgetting TB or HIV when pneumonia does not respond", "Missed diagnosis", "Reconsider at 48 h of non-response"],
["Sending a young infant with fast breathing home", "Rapid deterioration", "Under 2 months: any fast breathing = admit"]])}
` },

{ id: "qbank", title: "Question bank", html: `
<div class="qgroup"><h3>Classification</h3>
${qa("Student", "What are the fast-breathing cut-offs for pneumonia?", "2–11 months: 50 breaths/min or more; 1–5 years: 40/min or more; under 2 months: 60/min or more.")}
${qa("Intern/MO", "What makes a child's pneumonia severe?", "Any general danger sign (cannot drink or breastfeed, vomiting everything, convulsions, lethargy), stridor in a calm child, SpO₂ under 90%, or severe respiratory distress.")}
${qa("Intern/MO", "A 3-year-old has fast breathing but no indrawing and no danger signs. Classify and manage.", "Non-severe pneumonia: oral amoxicillin 40 mg/kg per dose twice daily for 3 days, review after 3 days.")}
</div>
<div class="qgroup"><h3>Treatment</h3>
${qa("Intern/MO", "Antibiotics for severe pneumonia in a child?", "Ampicillin 50 mg/kg IV/IM every 6 hours (or benzylpenicillin 50,000 U/kg) plus gentamicin 7.5 mg/kg once daily, for at least 5 days.")}
${qa("Intern/MO", "When do you give oxygen to a child with pneumonia?", "When SpO₂ is below 90%; aim to keep it above 90% (ideally 92% or more).")}
${qa("Intern/MO", "A child with severe pneumonia has pneumatocoeles and is not better after 48 h. What do you do?", "Suspect staphylococcus: cloxacillin 50 mg/kg every 6 hours plus gentamicin, total about 3 weeks.")}
${qa("Specialist", "Why is the WHO high-dose amoxicillin (40 mg/kg/dose BD) preferred over lower doses?", "Rising pneumococcal resistance means higher amoxicillin exposures are needed to reliably clear non-severe pneumonia.")}
</div>
<div class="qgroup"><h3>Pitfalls</h3>
${qa("Intern/MO", "What are the general danger signs?", "Unable to drink or breastfeed, vomiting everything, convulsions, and lethargy or unconsciousness.")}
${qa("Intern/MO", "A child is not better after 48 h of treatment. What are the possibilities?", "Staphylococcus, effusion/empyema, TB, HIV, foreign body, or a wrong diagnosis.")}
${qa("Viva", "Why is a young infant (under 2 months) treated so differently from an older child?", "Infants decompensate rapidly, have less respiratory reserve, and fast breathing (60/min or more) or any danger sign means severe disease — so all such infants are admitted.")}
</div>
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines, 5th ed. 2024, §12.2.1 Pneumonia (children) and §3.1 Pneumonia (adults).</li>
<li id="ref-2">World Health Organization. Pocket Book of Hospital Care for Children, 2nd ed. Geneva, 2013 (§4.2 Pneumonia). <a href="https://www.who.int/publications/i/item/978-92-4-154837-3" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">World Health Organization. Integrated Management of Childhood Illness (IMCI/IMNCI) chart booklet. Geneva, 2014. <a href="https://www.who.int/publications/i/item/9789241506823" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-4">Metlay JP, Waterer GW, Long AC, et al. Diagnosis and Treatment of Adults with Community-acquired Pneumonia: ATS/IDSA Guideline. Am J Respir Crit Care Med 2019;200(7):e45–e67. <a href="https://doi.org/10.1164/rccm.201908-1581ST" target="_blank" rel="noopener">doi:10.1164/rccm.201908-1581ST</a></li>
<li id="ref-5">World Health Organization. The WHO AWaRe (Access, Watch, Reserve) antibiotic book. Geneva, 2022. <a href="https://www.who.int/publications/i/item/WHO-MHP-HPS-EML-2022.02" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-6">ICMR, Department of Health Research, India. Standard Treatment Workflows: Paediatric Pneumonia and Severe Pneumonia. New Delhi, 2022. <a href="https://stw.icmr.org.in" target="_blank" rel="noopener">stw.icmr.org.in</a></li>
<li id="ref-7">World Health Organization. Pneumonia — fact sheet (2019 estimates). <a href="https://www.who.int/news-room/fact-sheets/detail/pneumonia" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-8">Nelson Textbook of Pediatrics, 21st ed.; WHO Pocket Book 2013 — foundational pathophysiology, paraphrased.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["WHO/IMNCI classification and thresholds", "<span class='pass'>Verified</span>", "Fast breathing 50/40/60; danger signs; SpO₂ &lt;90%"],
["Severe pneumonia antibiotics", "<span class='pass'>Verified</span>", "Ampicillin/benzylpenicillin + gentamicin ≥5 days (WHO)"],
["High-dose amoxicillin", "<span class='pass'>Verified</span>", "40 mg/kg/dose BD (WHO); Bhutan STG uses a lower dose — flagged"],
["Bhutan STG child treatment", "<span class='pass'>Verified</span>", "Read directly from STG 2024 §12.2.1"],
["Amoxicillin dose discrepancy (WHO vs Bhutan)", "<span class='flag'>Flag</span>", "15 mg/kg/dose TID vs 40 mg/kg/dose BD — worth raising with the programme"],
["Bhutan childhood pneumonia figure", "<span class='flag'>Evidence gap</span>", "Not in the sources reviewed"],
["Images", "<span class='pass'>Done</span>", "Two Commons images; licences checked (CC BY-SA 4.0, CC BY 4.0)"],
["References", "<span class='pass'>Done</span>", "All traceable; DOIs/links where available"]], "qc")}
` }
]
});
