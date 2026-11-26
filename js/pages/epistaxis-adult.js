/* Epistaxis in adults — full depth (Batch E-2, 26 Nov 2026).
   Sources read directly: Bhutan STG 2024 §14.5 and the Bhutan Clinical Reference topic "Epistaxis"; AAO-HNS Clinical Practice Guideline:
   Nosebleed (Epistaxis), Tunkel et al. 2020 (key action statements 1–14, read on the journal site); NoPAC trial (Reuben 2021); Bhutan NEML 2025. */
registerPage({
id: "epistaxis-adult",
title: "Epistaxis (Nosebleed) — Adults",
subtitle: "Most nosebleeds stop with the patient sitting forward and the soft part of the nose squeezed hard. Know when it is serious, how to find and treat the bleeding point, how to pack, what to do with blood thinners and high blood pressure, and when to call ENT",
age: "Adults", specs: ["ent", "emerg"],
keywords: ["epistaxis", "nosebleed", "nose bleed", "Little's area", "Kiesselbach plexus", "anterior epistaxis", "posterior epistaxis", "nasal packing", "nasal cautery", "silver nitrate", "oxymetazoline", "anticoagulant nosebleed", "warfarin", "hypertension nosebleed", "HHT", "hereditary haemorrhagic telangiectasia", "sphenopalatine artery"],
related: ["epistaxis-child", "htn-adult", "bleeding-adult", "cirrhosis-adult", "dengue-adult", "transfusion-adult", "urti-adult"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">About 90% of nosebleeds come from the front of the septum (Little's area) and stop with simple first aid. The dangerous ones are heavy or posterior bleeds in older people, especially those on blood thinners, with high blood pressure, liver disease or a bleeding disorder.</p>
<div class="glance">
<div><h4>First aid</h4><p>Sit up, lean <b>forward</b>, spit out blood, and pinch the <b>soft lower part</b> of the nose firmly for <b>10 minutes</b> (STG; at least 5 minutes, AAO-HNS).</p></div>
<div><h4>Assess</h4><p>Pulse, BP, blood loss, blood thinners, liver disease, bleeding elsewhere; anterior or posterior?</p></div>
<div><h4>Find the bleeding point</h4><p>Clear clots, look with a good light; ${dr("oxymetazoline", "oxymetazoline")} or adrenaline-soaked cotton; cauterise a visible vessel.</p></div>
<div><h4>Pack</h4><p>Still bleeding: anterior pack (Vaseline gauze, STG); resorbable pack if on blood thinners or a bleeding disorder.</p></div>
<div><h4>Refer</h4><p>Posterior bleed, failed pack, recurrent one-sided bleeding: ENT for endoscopy, cautery, ligation or embolisation.</p></div>
<div><h4>Prevent</h4><p>Petroleum jelly in dry, cold weather; treat BP; no picking or nose-blowing for a few days.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §14.5: calm the patient, sit them upright with the head slightly bent forward and measure the BP; no nose-blowing; decide anterior or posterior; pinch the soft nose for 10 minutes; if bleeding continues, pack with Vaseline gauze and put a dry cotton ball at the nostril; refer if still bleeding; give antibiotics while a pack is in and remove it within 2–3 days. Nosebleeds are commoner in Bhutan's dry, cold winters and at altitude. Oxymetazoline 0.05% nasal drops, lignocaine 4%, white soft paraffin and mupirocin 2% are on the NEML 2025; silver nitrate sticks and commercial nasal tampons are not listed. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Anterior and posterior bleeding", html: `
${tbl(["Feature", "Anterior (most)", "Posterior (about 1 in 10)"], [
["Site", "Little's area (Kiesselbach plexus) on the anterior septum", "Back of the nose — sphenopalatine artery branches"],
["Who", "Children and young adults; dry air, picking, colds", "Older adults, hypertension, atherosclerosis, anticoagulants"],
["Blood", "Mostly from the front of the nostril", "Mostly down the throat, often both sides, heavy"],
["Control", "Pressure, cautery, anterior pack", "Often needs a posterior pack or balloon, endoscopic cautery, ligation or embolisation"]])}
` },

{ id: "patho", title: "Why the nose bleeds", html: `
${F.chart("Causes", [F.s("Rich blood supply: branches of internal and external carotid arteries meet in Little's area"), F.a, F.b([["Local", F.e("Picking, dry air, colds and rhinitis, trauma, septal deviation, nasal sprays, cocaine, tumours")], ["Systemic", F.e("Anticoagulants and antiplatelets, liver disease, kidney disease, bleeding disorders, dengue, leukaemia, HHT, alcohol")]]), F.a, F.s("High blood pressure makes bleeding harder to stop, though it is rarely the sole cause"), F.a, F.ok("No cause found in many patients (idiopathic)")])}
<p>The mucosa over the septum is thin and fixed. In dry, cold air it cracks and crusts; picking the crust starts the bleed again.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Bhutan STG 2024", "AAO-HNS 2020 / trials", "This guide"], [
["Compression time", "10 minutes", "At least 5 minutes, firm, sustained, lower third of the nose", "10 minutes by the clock"],
["Antibiotics with a pack", "Give antibiotics while the pack is in", "Evidence for routine antibiotics with anterior packs is weak; individualise", "Follow the STG for non-resorbable packs left more than 24 h; not needed for resorbable packs"],
["Blood thinners", "Not detailed", "Start first-line treatment before stopping, reversing or transfusing, unless bleeding is life-threatening (statement 11)", "AAO-HNS"],
["Topical tranexamic acid", "Not mentioned", "NoPAC (2021): topical TXA no better than placebo in reducing packing in the ED", "Not routine"],
["Packing type", "Vaseline gauze", "Resorbable packing if bleeding risk (statement 3b)", "Vaseline gauze generally; resorbable where available for anticoagulated patients"]])}
` },

{ id: "presentation", title: "Assessment", html: `
${tbl(["Ask or check", "Why"], [
["How long, how much, which side, previous bleeds", "Severity; recurrent one-sided bleeds need endoscopy"],
["Pulse, BP, postural drop, pallor", "Shock needs resuscitation first"],
["Anticoagulants (warfarin, DOACs), aspirin, clopidogrel, NSAIDs, alcohol", "Risk factors to document (AAO-HNS statement 5)"],
["Liver disease, kidney disease, bleeding elsewhere, family history of bleeding", "Coagulopathy, HHT"],
["Fever, rash, dengue season", "Dengue thrombocytopenia"],
["Trauma; clear fluid from the nose", "Nasal or base-of-skull fracture; septal haematoma"],
["Nasal blockage, facial pain, weight loss, neck lumps", "Tumour"]])}
<h3>A typical patient</h3>
<p>A 68-year-old man on warfarin for atrial fibrillation has been bleeding from the right nostril for 40 minutes, with blood in his throat. BP 178/96, heart rate 96. <b>Action</b>: sit him forward, pinch the soft nose for 10 minutes by the clock, give him a bowl and tissues. Check Hb, INR and group. Still bleeding: suction, oxymetazoline on cotton, look with a headlight. No anterior point seen and blood keeps running down the throat, so this is a likely posterior bleed. Anterior pack (resorbable if available), then call ENT. Keep warfarin unless bleeding is life-threatening or the INR is far above range (AAO-HNS). Treat the BP once the bleeding settles and pain and anxiety are relieved.</p>
` },

{ id: "ddx", title: "What else could it be", html: `
${tbl(["Condition", "Clue"], [
["Haemoptysis", "Blood coughed up, frothy, with chest symptoms"],
["Haematemesis", "Vomited blood, often with dyspepsia or liver disease; swallowed nasal blood can be vomited too"],
["Nasopharyngeal or sinonasal tumour", "Unilateral blockage, recurrent one-sided bleeding, facial swelling, neck nodes"],
["CSF leak after trauma", "Clear fluid mixing with blood (halo sign)"]])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>None</b> for a single minor anterior bleed in a healthy adult.</li>
<li><b>Full blood count, group and save</b> for heavy or recurrent bleeds.</li>
<li><b>INR</b> if on warfarin; <b>PT/APTT, platelets</b> if a bleeding disorder, liver disease or dengue is possible.</li>
<li><b>Nasal endoscopy</b> (ENT) for recurrent bleeding despite treatment, recurrent one-sided bleeding, or suspected hidden disease (AAO-HNS statements 7a–7b).</li>
<li><b>CT or angiography</b> only for planned embolisation or suspected tumour.</li>
</ul>
` },

{ id: "staging", title: "Stepwise plan", html: `
<div class="calc" data-calc="epistaxisplan"></div>
` },

{ id: "manage", title: "Management", html: `
<ol>
<li><b>Resuscitate if needed</b>: heavy bleeding or shock → IV access, bloods, fluids or blood, urgent ENT (AAO-HNS statement 1).</li>
<li><b>First aid</b>: sit up, lean forward, spit out blood; <b>firm, continuous pressure on the soft lower third of the nose</b> for 10 minutes (STG), not on the bony bridge. An ice pack on the neck or in the mouth may help comfort. No nose-blowing.</li>
<li><b>Look</b>: remove clots (blowing gently or suction), then anterior rhinoscopy with a headlight and speculum (statement 6).</li>
<li><b>Vasoconstrict and anaesthetise</b>: cotton soaked in ${dr("oxymetazoline", "oxymetazoline 0.05%")} (or 1:10,000 adrenaline) with ${dr("lidocaine_iv", "lignocaine 4%")} for 5–10 minutes.</li>
<li><b>Cauterise a visible bleeding point</b> (statements 8–9): silver nitrate applied only to the bleeding spot for a few seconds, one side of the septum at a time to avoid perforation. Silver nitrate is not on the NEML, so check local stock; electrocautery is done by ENT.</li>
<li><b>Pack if no site is seen or bleeding continues</b> (statement 3a): Vaseline-impregnated ribbon gauze layered from the floor upwards (STG), or a nasal tampon; use resorbable packing for patients with a bleeding disorder or on anticoagulants or antiplatelets (statement 3b).</li>
<li><b>Posterior bleeding</b>: a posterior pack or balloon catheter (Foley catheter in an emergency) under ENT guidance; admit, monitor oxygen and heart rhythm.</li>
<li><b>Persistent bleeding</b>: ENT for endoscopic cautery, sphenopalatine artery ligation or embolisation (statement 10).</li>
<li><b>Pack care</b>: explain the type and removal plan (statement 4); remove non-resorbable packs within 2–3 days (STG); antibiotics while the pack is in (STG).</li>
<li><b>Blood pressure</b>: treat pain and anxiety first; persistently high BP is treated and followed up (STG).</li>
</ol>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine", "Use", "Bhutan NEML 2025"], [
[dr("oxymetazoline", "Oxymetazoline 0.05% nasal drops"), "On cotton pledgets to shrink the mucosa and slow bleeding", "Listed"],
["Lignocaine 4% topical", "Anaesthesia before cautery or packing", "Listed (4% preservative-free)"],
["Silver nitrate stick", "Chemical cautery of a visible vessel", "Not listed"],
["White soft paraffin (petroleum jelly)", "Moisturise the septum; pack lubrication", "Listed"],
["Mupirocin 2% / antiseptic cream", "Crusting and recurrent anterior bleeds", "Mupirocin listed"],
[dr("tranexamic_acid", "Tranexamic acid"), "Topical use not routine (NoPAC); systemic use only in specific bleeding disorders or severe bleeding per specialist", "Listed (injection)"],
["Antibiotic with a non-resorbable pack", "Per STG", "e.g. amoxicillin or co-amoxiclav by local practice"]])}
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>On anticoagulants or antiplatelets</b>", "Treat locally first; reverse or stop only for life-threatening bleeding (AAO-HNS 11); check INR; resorbable packing"],
["<b>Liver disease, alcohol</b>", "Coagulopathy and low platelets; check INR and platelets"],
["<b>Dengue</b>", "Mucosal bleeding is a warning sign; manage within the dengue protocol"],
["<b>Recurrent bilateral bleeds with telangiectasias</b>", "Hereditary haemorrhagic telangiectasia: refer; screen family (AAO-HNS 12)"],
["<b>Pregnancy</b>", "Nasal congestion makes nosebleeds more frequent; usual first aid; avoid systemic vasoconstrictors in hypertensive women"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Bleeding down the throat despite a good anterior pack", "Posterior bleed: posterior pack or balloon, admit, ENT", "Anterior packs cannot reach it"],
["INR 6 on warfarin with ongoing bleeding", "Pack, give vitamin K and discuss reversal with a physician", "Life-threatening or uncontrolled bleeding"],
["No silver nitrate, visible bleeding point", "Pressure with vasoconstrictor-soaked cotton, then pack if needed", "Cautery is not the only option"],
["Elderly patient faints in the chair", "Lie flat, legs up, then continue pressure on the side", "Vasovagal or hypovolaemic"]])}
` },

{ id: "complications", title: "Complications", html: `
<p>Anaemia and shock in heavy bleeds; aspiration; septal perforation from bilateral or repeated cautery; pack complications (dislodgement into the airway, sinusitis, pressure necrosis of the nasal alar rim, toxic shock syndrome, low oxygen with posterior packs); myocardial ischaemia in older patients.</p>
` },

{ id: "followup", title: "Advice and follow-up", html: `
${box("green", "Advice to give (AAO-HNS 13)", `<ul><li>For a nosebleed: sit up, lean forward, pinch the soft nose for 10 minutes without letting go.</li><li>Do not pick or blow the nose, lift heavy weights, or have hot drinks for a few days.</li><li>Moisturise inside the nostrils with petroleum jelly in dry, cold weather.</li><li>Come back if bleeding lasts more than 20 minutes, is heavy, comes from both sides, or you feel faint.</li><li>Have your blood pressure checked.</li></ul>`)}
<p>Document the outcome within 30 days for patients treated with non-resorbable packing, surgery or embolisation (AAO-HNS 14).</p>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Arteries supplying Little's area (Kiesselbach plexus)", src: "images/kiesselbach-plexus.jpg", mod: "Drawing", ctx: "Anterior epistaxis", loc: "Anterior nasal septum", find: "Branches of the anterior ethmoidal, sphenopalatine, greater palatine and superior labial arteries meeting on the anterior septum", interp: "Where about 90% of nosebleeds start; reached by pressure on the soft lower nose", by: "Mbuchko3", page: "https://commons.wikimedia.org/wiki/File:Kiesselbach%27s_Plexus.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Adult nosebleed", [F.d("Shock or heavy bleeding?"), F.a, F.b([["Yes", F.e("ABC, IV, bloods, urgent ENT")], ["No", F.e("Sit forward, pinch soft nose 10 min")]]), F.a, F.d("Still bleeding?"), F.a, F.e("Clear clots, look, oxymetazoline + lignocaine, cauterise a visible point"), F.a, F.d("Still bleeding or no site seen?"), F.a, F.e("Anterior pack (resorbable if on blood thinners)"), F.a, F.d("Blood down the throat or pack fails?"), F.a, F.e("Posterior pack/balloon, admit, ENT: endoscopic cautery, ligation or embolisation")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Tilting the head back", "Blood is swallowed or aspirated; bleeding hidden", "Lean forward"],
["Pinching the bony bridge", "Does not compress Little's area", "Pinch the soft lower nose"],
["Letting go to check every minute", "Clot never forms", "10 minutes by the clock"],
["Cauterising both sides of the septum at once", "Septal perforation", "One side at a time"],
["Stopping warfarin for a minor bleed", "Stroke risk", "Local treatment first"],
["Missing a posterior bleed", "Continued heavy loss", "Look in the throat; refer"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Where do most nosebleeds arise?", "Little's area (Kiesselbach plexus) on the anterior septum.")}
${qa("Intern/MO", "What is the correct first-aid position and technique?", "Sit up, lean forward, and pinch the soft lower part of the nose firmly for 10 minutes (at least 5, AAO-HNS) without releasing.")}
${qa("Intern/MO", "A patient on clopidogrel has a nosebleed. Should you stop the clopidogrel?", "Not routinely: give first-line treatment (pressure, vasoconstrictor, cautery, packing — resorbable if possible) before stopping or reversing antiplatelets, unless bleeding is life-threatening (AAO-HNS 11).")}
${qa("Specialist", "What did the NoPAC trial show?", "Topical tranexamic acid on a dental roll in the ED was no better than placebo at reducing the need for anterior nasal packing (Reuben 2021).")}
${qa("Specialist", "When should nasal endoscopy be done?", "Recurrent bleeding despite packing or cautery, recurrent unilateral bleeding, or difficult bleeding or suspected hidden pathology (AAO-HNS 7a–7b).")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Tunkel DE, Anne S, Payne SC, et al. Clinical Practice Guideline: Nosebleed (Epistaxis). Otolaryngol Head Neck Surg 2020;162(1 Suppl):S1. <a href="https://doi.org/10.1177/0194599819890327" target="_blank" rel="noopener">doi:10.1177/0194599819890327</a></li>
<li id="ref-2">Reuben A, Appelboam A, Stevens KN, et al. The use of tranexamic acid to reduce the need for nasal packing in epistaxis (NoPAC): randomized controlled trial. Ann Emerg Med 2021;77(6):631–640. <a href="https://doi.org/10.1016/j.annemergmed.2020.12.013" target="_blank" rel="noopener">doi:10.1016/j.annemergmed.2020.12.013</a></li>
<li id="ref-3">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §14.5 Epistaxis; National Essential Medicines List 2025; Bhutan Clinical Reference topic "Epistaxis (nosebleed)".</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §14.5", "<span class='pass'>Read directly</span>", "First aid, packing, antibiotics, removal in 2–3 days"],
["AAO-HNS 2020 guideline", "<span class='pass'>Read directly</span>", "Key action statements 1–14"],
["NoPAC trial", "<span class='pass'>Results confirmed</span>", "Primary outcome 43.7% vs 41.3% packing"],
["Silver nitrate and nasal tampons", "<span class='flag'>Not on NEML 2025</span>", "Alternatives given"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 26 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "epistaxisplan"]], "qc")}` }
]
});
