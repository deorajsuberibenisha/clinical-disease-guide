/* Poisoning in adults: approach, organophosphates, aconite (Tshendu), paracetamol and other common poisons */
registerPage({
id: "poisoning-adult",
title: "Poisoning — Adults: Approach, Organophosphates, Aconite and Paracetamol",
subtitle: "A calm ABCDEFG approach, toxidromes that let you treat before you know the poison, and detailed plans for organophosphate pesticides, Tshendu (aconite), paracetamol, mushrooms, methanol, tricyclics and carbon monoxide",
age: "Adults", specs: ["emerg", "medicine", "psych"],
keywords: ["poisoning", "overdose", "self-harm", "toxidrome", "organophosphate", "pesticide", "carbamate", "atropine", "pralidoxime", "aconite", "Tshendu", "monkshood", "paracetamol overdose", "acetaminophen", "N-acetylcysteine", "NAC", "Rumack-Matthew", "activated charcoal", "mushroom poisoning", "methanol", "tricyclic", "amitriptyline overdose", "carbon monoxide", "bukhari"],
related: ["poisoning-child", "depression-adult", "alcohol-adult", "snakebite-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most poisoned patients survive with good supportive care. Treat the patient, not the bottle: secure the airway, read the toxidrome, give the few antidotes that matter, and never forget that an intentional overdose is a cry for help that needs a kind conversation before discharge.</p>
<div class="glance">
<div><h4>ABCDEFG</h4><p>Airway, Breathing, Circulation, Disability (+ glucose) and Decontamination, Exposure and Enhanced elimination, Focused antidotes, Get help (Bhutan STG).</p></div>
<div><h4>Organophosphate</h4><p>Wet, pinpoint, slow, wheezy: ${dr("atropine")} until the <b>chest is clear</b>; then infuse.</p></div>
<div><h4>Tshendu (aconite)</h4><p>Tingling mouth, vomiting, then arrhythmias and shock: ECG monitor, charcoal under 1 hour, treat rhythm.</p></div>
<div><h4>Paracetamol</h4><p>150 mg/kg or more, or level above the line: ${dr("acetylcysteine")} 150 → 50 → 100 mg/kg.</p></div>
<div><h4>Charcoal</h4><p>${dr("activated_charcoal")} 50 g within 1 hour, only with a safe airway; useless for acids, alkalis, iron, alcohols, kerosene.</p></div>
<div><h4>Before discharge</h4><p>Suicide risk assessment for every intentional poisoning.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan STG 2024 §1.4 covers toxidromes and twelve specific poisons. Atropine and charcoal reach PHC; pralidoxime and acetylcysteine are stocked at district hospitals and above. Common local causes: agricultural pesticides, traditional preparations containing aconite (<i>Tshendu</i>), wild mushrooms in the monsoon, paracetamol and amitriptyline overdoses, home-brewed alcohol, and carbon monoxide from charcoal or wood heaters (bukhari) in closed rooms. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Toxidromes", html: `
${tbl(["Toxidrome (STG §1.4.1–1.4.5)", "Features", "Examples", "Key treatment"], [
["Cholinergic", "Salivation, lacrimation, sweating, vomiting, diarrhoea, urination; pinpoint pupils; bradycardia; wheeze; fasciculation", "Organophosphates, carbamates, some mushrooms", "Atropine, decontamination"],
["Anticholinergic", "Hot, dry, flushed, dilated pupils, tachycardia, urinary retention, delirium", "Antihistamines, amitriptyline, datura", "Benzodiazepines, cooling; ECG"],
["Sympathomimetic", "Agitation, sweating, dilated pupils, tachycardia, hypertension, hyperthermia", "Amphetamines, cocaine, cannabis (high dose)", "Benzodiazepines, cooling"],
["Opioid", "Coma, slow breathing, pinpoint pupils", "Morphine, tramadol, heroin", "Naloxone 0.4 mg IV, repeat"],
["Sedative-hypnotic", "Drowsiness, slurred speech, ataxia, normal pupils", "Benzodiazepines, alcohol, phenobarbital", "Supportive; airway"]])}
` },

{ id: "patho", title: "Why poisons kill", html: `
${F.chart("Common pathways to death", [
F.b([["Airway and breathing", F.e("Coma, aspiration, bronchorrhoea, respiratory muscle weakness")], ["Heart", F.e("Arrhythmia (aconite, tricyclics), shock")], ["Organs", F.e("Liver failure (paracetamol, mushrooms), kidney failure, acidosis (methanol)")]]), F.a,
F.ok("Most deaths are preventable with airway care, the right antidote and time")])}
<p><b>Organophosphates</b> irreversibly block acetylcholinesterase, flooding muscarinic and nicotinic receptors. <b>Aconitine</b> holds sodium channels open in heart and nerves, causing tingling and lethal ventricular arrhythmias. <b>Paracetamol</b> overwhelms liver glutathione; the toxic metabolite NAPQI kills liver cells 2–4 days later.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024 / NEMF", "International", "This guide"], [
["Atropine start (adult)", "2–5 mg IV, repeat every 5 minutes", "1–3 mg, then <b>double</b> every 5 minutes (Eddleston 2008)" + r(2), "Start 2 mg and double; target a clear chest " + LB.int()],
["Pralidoxime", "STG 1–2 g then 0.5–1 g/h; NEMF 30 mg/kg then 8 mg/kg/h", "WHO 30 mg/kg then 8 mg/kg/h; no proven mortality benefit", "WHO dose as an adjunct only"],
["Paracetamol threshold", "Treat if 150 mg/kg or more", "Nomogram level (UK 100 line; Rumack/ANZ 150 line); ANZ 200 mg/kg or 10 g" + r(4), "Level and nomogram when available; 150 mg/kg if not"],
["NAC regimen", "Three bags over 21 hours", "Two-bag or SNAP 12-hour regimens: fewer reactions" + r(5), "STG regimen; alternatives acceptable " + LB.loc()],
["Gastric lavage", "May be considered for non-charcoal toxins", "Rarely indicated; aspiration risk (AACT)", "Only within 1 hour, life-threatening dose, protected airway"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li><b>What, how much, when, and why?</b> Bring the container. Ask about all medicines in the house, traditional and herbal remedies, alcohol, and pesticides stored at home.</li>
<li><b>Examine:</b> GCS, pupils, skin (sweaty or dry), smell (garlic or kerosene smell of some pesticides; alcohol), secretions, chest, heart rate and rhythm, BP, temperature, glucose, bowel sounds, injuries.</li>
<li><b>Intent:</b> ask gently and directly about self-harm and suicide once the patient can talk.</li></ul>
${box("red", "Danger signs", `<ul><li>GCS 8 or less, seizures, failing breathing or copious secretions</li><li>Broad-complex or ventricular arrhythmias; QRS over 100 ms; hypotension</li><li>Acidosis (deep breathing), visual loss (methanol)</li><li>Jaundice, bleeding, confusion 2–4 days after paracetamol or mushrooms</li></ul>`)}
<h3>The typical patient</h3>
<p>A 24-year-old farmer from Tsirang is brought 1 hour after drinking pesticide following a family quarrel. He is drooling, sweating, has pinpoint pupils, a pulse of 50 and wheeze everywhere. <b>This is the cholinergic toxidrome of organophosphate poisoning</b>: wet, pinpoint, slow and wheezy. He needs suction and oxygen, removal of contaminated clothes, atropine 2 mg IV doubled every 5 minutes until his chest is clear, then an infusion, and later a careful conversation about what led him here.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Hypoglycaemia", "Check glucose in every unconscious patient"], ["Head injury", "Bruises, focal signs; alcohol often coexists"], ["Meningitis or encephalitis", "Fever, neck stiffness"], ["Snake or insect envenoming", "Bite marks, ptosis, 20WBCT"], ["Stroke", "Focal deficit"], ["Alcohol withdrawal", "Tremor, timing after last drink"]])}` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "When"], [["Glucose", "Hypoglycaemia mimics and complicates poisoning", "Every patient"], ["ECG", "QRS and QT widening (tricyclics), aconite arrhythmias, bradycardia (OP)", "Every intentional overdose"], ["Paracetamol level at 4 hours or later", "Nomogram decision", "Any possible paracetamol ingestion (often hidden in combinations)"], ["ALT, INR, creatinine", "Liver and kidney injury", "Paracetamol, mushrooms, sick patients"], ["Blood gas, electrolytes", "Acidosis (methanol, salicylate), potassium", "If available"], ["Cholinesterase", "Confirms OP; not needed to treat", "If available"], ["Pregnancy test", "Changes management", "Women of child-bearing age"]])}
` },

{ id: "staging", title: "Antidote tools", html: `
<h3>Paracetamol</h3><div class="calc" data-calc="pcmnac"></div>
<h3>Organophosphate</h3><div class="calc" data-calc="opatropine"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Everyone</h3>
<ul><li>ABC; recovery position; oxygen; IV access; glucose; treat seizures with ${dr("diazepam")} 10 mg IV.</li>
<li><b>Decontaminate:</b> remove soaked clothes and wash skin for pesticides (staff wear gloves); ${dr("activated_charcoal")} 50 g if within 1 hour and the airway is safe. No induced vomiting.</li>
<li>Observe at least 6 hours for apparently minor ingestions; 24–48 hours for OP, aconite and tricyclics.</li></ul>
<h3>B. Organophosphates and carbamates</h3>
<ul><li>${dr("atropine")} 2 mg IV, doubling every 5 minutes until atropinised: <b>clear chest</b>, HR over 80, SBP over 80, dry axillae, pupils not pinpoint. Then infuse 10–20% of the loading total per hour. Tachycardia is not a reason to stop if the chest is still wet.</li>
<li>${dr("pralidoxime")} 30 mg/kg over 30 minutes then 8 mg/kg/h for organophosphates, where available.</li>
<li>Intubate early for weakness or secretions; avoid suxamethonium. Watch 24–96 hours for the <b>intermediate syndrome</b>: weak neck flexion, cranial nerve palsies, respiratory failure.</li></ul>
<h3>C. Aconite (Tshendu)</h3>
<ul><li>Continuous ECG; IV access; charcoal within 1 hour; IV fluids for hypotension; ${dr("atropine")} 0.6 mg for bradycardia.</li>
<li>Ventricular tachycardia: synchronised cardioversion if unstable (often recurs); amiodarone 300 mg IV over 20–60 minutes; magnesium 2 g IV; lidocaine or flecainide are alternatives in specialist hands. Prolonged CPR is justified: toxicity wears off within 24–48 hours.</li>
<li>Refer any arrhythmia to a monitored bed (STG).</li></ul>
<h3>D. Paracetamol</h3>
<ul><li>Use the tool above. NAC: 150 mg/kg in 200 mL 5% dextrose over 1 hour, then 50 mg/kg in 500 mL over 4 hours, then 100 mg/kg in 500 mL over 16 hours (STG).</li>
<li>Over 8 hours since ingestion, or staggered: start NAC immediately, then decide with the level and ALT.</li>
<li>Refer for liver failure: INR over 3, encephalopathy, creatinine rising, pH under 7.3.</li></ul>
<h3>E. Other common poisons (STG)</h3>
${tbl(["Poison", "Key steps"], [
["Wild mushrooms", "Symptoms within 2 hours: usually benign; after 6 hours: suspect amatoxin (liver failure). Charcoal, fluids, atropine for muscarinic signs, NAC; refer severe"],
["Methanol", "Visual blurring, acidosis 12–24 h after drink: fomepizole or oral ethanol; haemodialysis; refer"],
["Tricyclics (amitriptyline)", "ECG: QRS over 100 ms or R in aVR → sodium bicarbonate 1–2 mmol/kg IV bolus then 0.5–1 mmol/kg/h; diazepam for fits"],
["Carbon monoxide", "Headache, vomiting, confusion in a closed heated room: 100% oxygen until symptom-free (at least 6 hours)"],
["Acids and alkalis", "No charcoal or lavage, no neutralising; airway check; refer for endoscopy"],
["Rodenticides", "Anticoagulant: INR, vitamin K, FFP if bleeding. Zinc or aluminium phosphide: shock, refer urgently"],
["Salicylates", "Over 150 mg/kg: charcoal, urinary alkalinisation, dialysis if severe"]])}
<h3>F. Before discharge</h3>
<p>Every intentional poisoning: assess suicide risk (see <a href="#/d/depression-adult">Depression and suicide risk</a>), involve family, remove access to pesticides and medicines at home, and arrange follow-up.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("atropine"), "2 mg IV, double every 5 min; infusion 10–20% of total/h", "0.6 mg/mL ampoules: large numbers may be needed"],
[dr("pralidoxime"), "30 mg/kg over 30 min, then 8 mg/kg/h (max 12 g/day)", "Organophosphates only"],
[dr("acetylcysteine"), "150 → 50 → 100 mg/kg over 1, 4, 16 h", "Cap at 110 kg"],
[dr("activated_charcoal"), "50 g once", "Within 1 hour; safe airway"],
[dr("diazepam"), "10 mg IV for seizures or agitation", "Repeat once"],
[dr("sodium_bicarbonate"), "1–2 mmol/kg IV", "Tricyclic cardiotoxicity, salicylate"]])}
` },

{ id: "populations", title: "Special groups", html: `<ul><li><b>Pregnancy:</b> treat the mother fully; NAC and atropine are safe; carbon monoxide harms the fetus more, so oxygen longer.</li><li><b>Older adults:</b> accidental double-dosing; chronic paracetamol toxicity at lower doses if malnourished or drinking.</li><li><b>Heavy drinkers and the malnourished:</b> treat paracetamol overdose at the same threshold; give thiamine.</li><li><b>Children:</b> see <a href="#/d/poisoning-child">Poisoning in children</a>.</li></ul>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Atropine runs out", "Use every ampoule in the region; glycopyrrolate if available; ventilate", "Atropine is life-saving and needed in tens to hundreds of mg"], ["Pesticide unknown", "Treat the toxidrome", "Cholinergic signs need atropine whatever the brand"], ["Paracetamol taken over 2 days", "Start NAC; check ALT and level", "Nomogram not valid"], ["Patient wants to leave after an overdose", "Assess capacity and risk; involve family; do not let a high-risk person go alone", "Repeat attempts are common"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Aspiration pneumonia, intermediate syndrome and delayed neuropathy (organophosphates), ventricular fibrillation (aconite, tricyclics), liver failure (paracetamol, amatoxin), blindness (methanol), late neurological damage after CO, oesophageal strictures (corrosives), and repeat self-harm. Organophosphate case fatality in South Asia is around 10–20%, depending on the compound and the quantity.</p>` },

{ id: "followup", title: "Follow-up and prevention", html: `
${box("green", "Advice to give", `<ul><li>Keep pesticides locked, in their original containers, away from the house and children; buy only what you need.</li><li>Use traditional medicines only from qualified practitioners; never eat unknown roots or mushrooms.</li><li>Never sleep with a charcoal or wood fire in a closed room.</li><li>After an intentional poisoning: counselling and follow-up are part of treatment.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>New weakness, breathing difficulty or difficulty lifting the head in the next 4 days (organophosphates)</li><li>Yellow eyes, vomiting, confusion or bleeding (paracetamol, mushrooms)</li><li>Thoughts of self-harm return</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Aconitum ferox (Indian aconite, a source of Tshendu)", src: "images/aconitum-ferox.jpg", mod: "Photograph", ctx: "Himalayan aconite in flower", loc: "—", find: "Hooded violet-blue flowers on an upright stem; the poisonous alkaloids are concentrated in the tuberous root", interp: "Root preparations used in traditional medicine can cause perioral tingling, vomiting and fatal arrhythmias if improperly processed or overdosed", by: "Krzysztof Golik", page: "https://commons.wikimedia.org/wiki/File:Aconitum_ferox_in_Jardin_botanique_de_la_Charme.jpg", lic: "CC BY-SA 4.0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Poisoned patient", [F.s("ABC, glucose, ECG; remove contaminated clothes"), F.a, F.d("Toxidrome?"), F.a, F.b([["Cholinergic", F.e("Atropine doubling to clear chest; pralidoxime")], ["Arrhythmia / wide QRS", F.e("Aconite: amiodarone, Mg, cardioversion. TCA: bicarbonate")], ["None obvious", F.s("Paracetamol level at 4 h; charcoal if within 1 h")]]), F.a, F.ok("Observe; suicide risk assessment before discharge")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Stopping atropine because the pulse is 120", "Chest still wet: hypoxia", "Target the chest"], ["Using pupils as the endpoint", "Pupils lag", "Clear chest, BP, HR"], ["Charcoal in a drowsy patient", "Aspiration", "Protect the airway first"], ["Waiting for symptoms before NAC", "Liver damage is silent at first", "Treat by dose, time and level"], ["Discharging an intentional overdose without a risk assessment", "Repeat attempt", "Ask about suicide every time"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What are the signs of atropinisation?", "Clear chest on auscultation, heart rate over 80, systolic BP over 80 mmHg, dry axillae and pupils no longer pinpoint.")}
${qa("Intern/MO", "A 50 kg woman took 20 paracetamol 500 mg tablets 6 hours ago. Treat?", "That is 10 g = 200 mg/kg, above 150 mg/kg: start NAC now; check level and ALT.")}
${qa("Intern/MO", "Early sign suggesting aconite poisoning?", "Tingling and numbness around the mouth and tongue, then vomiting, followed by arrhythmias.")}
${qa("Specialist", "What is the intermediate syndrome?", "Proximal and neck-flexor weakness, cranial nerve palsies and respiratory failure 24–96 hours after organophosphate poisoning, after the cholinergic crisis; needs ventilation.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.4 Poisoning and overdose (toxidromes, paracetamol, aconite, mushrooms, toxic alcohols, rodenticides); National Essential Medicines Formulary 2022; NEML 2025; via Bhutan Clinical Reference app (Nov 2026).</li>
<li id="ref-2">Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet 2008;371:597–607. <a href="https://doi.org/10.1016/S0140-6736(07)61202-1" target="_blank" rel="noopener">doi:10.1016/S0140-6736(07)61202-1</a></li>
<li id="ref-3">World Health Organization. Clinical management of acute pesticide intoxication: prevention of suicidal behaviours. Geneva: WHO; 2008.</li>
<li id="ref-4">Chiew AL, Reith D, Pomerleau A, et al. Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand. Med J Aust 2020;212:175–183. <a href="https://doi.org/10.5694/mja2.50428" target="_blank" rel="noopener">doi:10.5694/mja2.50428</a></li>
<li id="ref-5">Bateman DN, Dear JW, Thanacoody HKR, et al. Reduction of adverse effects from intravenous acetylcysteine treatment for paracetamol poisoning (SNAP): a randomised controlled trial. Lancet 2014;383:697–704. <a href="https://doi.org/10.1016/S0140-6736(13)62062-0" target="_blank" rel="noopener">doi:10.1016/S0140-6736(13)62062-0</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §1.4", "<span class='pass'>Used</span>", "All specific poisons sections read"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref, Nov 2026"], ["Bhutan poisoning statistics", "<span class='flag'>Not stated</span>", "No national breakdown found"], ["Aconite antiarrhythmic choice", "<span class='flag'>Case-series evidence</span>", "No trials; amiodarone and flecainide most reported"]], "qc")}` }
]
});
