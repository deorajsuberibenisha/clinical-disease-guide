/* Epistaxis in children — full depth (Batch E-2, 26 Nov 2026).
   Sources read directly: Bhutan STG 2024 §14.5 ("concerning if recurrent, massive or occurring in children"); AAO-HNS Clinical Practice Guideline:
   Nosebleed (Tunkel 2020); Paranjothy et al., Arch Dis Child 2009 (epistaxis in infants: population study); Cochrane review Qureishi 2012
   (recurrent idiopathic epistaxis in children); NICE CKS-based UK guidance (Naseptin four times daily for 10 days; mupirocin if allergy) via a
   regional NHS guideline; Bhutan NEML 2025. */
registerPage({
id: "epistaxis-child",
title: "Epistaxis (Nosebleed) — Children",
subtitle: "Nosebleeds are very common in school-age children and almost always come from the front of the nose. First aid works, recurrent bleeds respond to creams and sometimes cautery, and a few children need more thought: babies under 2, heavy or one-sided bleeds, and children who bruise easily",
age: "Children & adolescents", specs: ["ent", "paeds", "emerg"],
keywords: ["epistaxis child", "nosebleed child", "recurrent nosebleeds", "Little's area", "Naseptin", "antiseptic cream nose", "silver nitrate cautery child", "epistaxis infant", "bleeding disorder", "von Willebrand disease", "juvenile nasopharyngeal angiofibroma", "JNA", "nasal foreign body", "ITP", "leukaemia", "dengue nosebleed"],
related: ["epistaxis-adult", "urti-child", "dengue-child", "anaemia-child", "htn-child", "trauma-child"],
updated: "26 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Most children with nosebleeds are well, bleed from Little's area after picking, colds or dry air, and stop with 10 minutes of pressure. Recurrent bleeds are a nuisance rather than a danger, and usually settle with nasal cream. Stop and think when the child is under 2, bleeds heavily or from one side with blockage, or has bruises, gum bleeding or a family history of bleeding.</p>
<div class="glance">
<div><h4>First aid</h4><p>Sit the child up and <b>forward</b>, pinch the <b>soft</b> part of the nose for <b>10 minutes</b> by the clock; spit out blood.</p></div>
<div><h4>Look</h4><p>Front of the septum: crusts, prominent vessels, a foreign body, or a mass.</p></div>
<div><h4>Recurrent bleeds</h4><p>Antiseptic cream and petroleum jelly to the front of the nose; ${dr("mupirocin", "mupirocin")} if peanut, soya or neomycin allergy; cautery for a visible vessel.</p></div>
<div><h4>Under 2 years</h4><p>Uncommon. Check for a <b>bleeding disorder</b>, and look for signs of <b>injury or abuse</b>.</p></div>
<div><h4>Red flags</h4><p>Heavy bleeding, pallor, bruising, petechiae, fever with rash (dengue), one-sided blockage in an adolescent boy.</p></div>
<div><h4>Refer</h4><p>ENT if bleeding will not stop, recurs despite treatment, or comes with blockage or a mass.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 §14.5 flags nosebleeds in children as a reason for concern when recurrent or massive. The same first aid applies: sit up, lean forward, pinch the soft nose for 10 minutes, then Vaseline gauze packing and referral if it does not stop. Dry winter air and high altitude make nosebleeds more common. On the NEML 2025: oxymetazoline 0.05%, mupirocin 2%, white soft paraffin and lignocaine 4%; Naseptin (chlorhexidine–neomycin) and silver nitrate are not listed. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Who bleeds and why", html: `
${tbl(["Group", "Common causes", "Think also of"], [
["<b>Infants under 2</b>", "Colds and rhinitis (the commonest cause in a Welsh population study)", "Trauma, bleeding disorder, congenital anomaly, abuse (smothering) — epistaxis is uncommon at this age"],
["<b>School-age children</b>", "Nose picking, colds, allergic rhinitis, dry air, minor knocks", "Nasal foreign body (one-sided smelly discharge with blood), bleeding disorder"],
["<b>Adolescents</b>", "As above; nasal sprays; sports injuries", "Boys with one-sided blockage and heavy bleeds: juvenile nasopharyngeal angiofibroma"],
["<b>Any age</b>", "", "Dengue, ITP, leukaemia, liver disease, von Willebrand disease, haemophilia, HHT"]])}
${r(2)}
` },

{ id: "patho", title: "Why children's noses bleed", html: `
<p>The vessels of Little's area lie just under thin mucosa at the front of the septum, within reach of a finger. Colds and allergies make the mucosa swollen and fragile; dry air dries and cracks it; a crust forms and is picked off, and the bleed restarts. This cycle explains why moisturising and antiseptic creams work for many children.</p>
${F.chart("The recurrent nosebleed cycle", [F.s("Dry or inflamed mucosa"), F.a, F.s("Crust forms; itch; picking"), F.a, F.e("Bleed from Little's area"), F.a, F.s("New crust"), F.a, F.ok("Break it: moisturise, antiseptic cream, nail care, cautery if a vessel is seen")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "Options", "Evidence", "This guide"], [
["Recurrent idiopathic nosebleeds", "Antiseptic cream; cautery; both; observation", "Cochrane 2012: optimal management unknown; antiseptic cream is reasonable first line", "Cream (and petroleum jelly) first; cautery for a visible vessel if the child cooperates"],
["Which cream", "Naseptin (chlorhexidine–neomycin) four times daily for 10 days (UK); mupirocin if allergy", "Naseptin contains peanut (arachis) oil and is not on the NEML", "Mupirocin 2% or petroleum jelly where Naseptin is unavailable"],
["Compression time", "STG 10 minutes; AAO-HNS at least 5 minutes", "", "10 minutes by the clock"],
["Investigations", "Routine clotting tests vs selective", "Selective unless red flags, family history or under 2 years", "Selective"]])}
` },

{ id: "presentation", title: "Assessment", html: `
${tbl(["Ask or look for", "Why"], [
["How often, how long, how much, which side", "Recurrent one-sided bleeds with blockage need endoscopy"],
["Bruising, petechiae, gum bleeding, heavy periods, bleeding after teeth or surgery", "Bleeding disorder (von Willebrand disease is common)"],
["Family history of bleeding or nosebleeds", "Inherited bleeding disorder, HHT"],
["Fever, rash, abdominal pain in dengue season", "Dengue warning sign"],
["Pallor, tiredness, bone pain", "Anaemia, leukaemia"],
["One-sided smelly discharge in a toddler", "Nasal foreign body"],
["Story that does not fit, injuries elsewhere, age under 2", "Non-accidental injury"]])}
<h3>A typical patient</h3>
<p>An 8-year-old boy in Thimphu has had five nosebleeds this winter, each from the left nostril, each stopping within 10 minutes. He picks his nose and has a cold. Examination shows crusting and a prominent vessel on the left anterior septum; no bruises, normal growth, no family history. <b>Action</b>: teach first aid; trim his nails; mupirocin 2% (or antiseptic cream where available) to the front of the nose for about 10 days; petroleum jelly at night through the winter. If bleeds continue, silver nitrate cautery of the vessel by ENT under topical anaesthesia.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Nasal foreign body", "One-sided foul discharge, sometimes bloody, in a young child"],
["Juvenile nasopharyngeal angiofibroma", "Adolescent boy, one-sided blockage, heavy recurrent bleeds — do not biopsy outside a specialist centre"],
["ITP or leukaemia", "Petechiae, bruising, pallor, lymph nodes, abnormal blood count"],
["Dengue", "Fever, rash, low platelets in season"],
["Haemoptysis or haematemesis", "Blood from the chest or stomach rather than the nose"]])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>None</b> for a well child with occasional anterior bleeds and no red flags.</li>
<li><b>Full blood count and blood film, PT, APTT</b> (and von Willebrand screen where available) if: heavy or prolonged bleeds, bleeding elsewhere, family history, age under 2, or anaemia.</li>
<li><b>Dengue tests</b> in season with fever.</li>
<li><b>Nasal endoscopy</b> (ENT) for one-sided blockage, suspected mass, or bleeds recurring despite treatment.</li>
</ul>
${box("red", "Infants under 2 years", `<p>In a population study of infants in Wales, the commonest cause was a cold, but trauma, coagulation disorders and one case of abusive smothering were also found, and some unexplained cases had no clotting tests. Always consider a bleeding disorder, and if there is any other evidence of physical abuse, it must be excluded.${r(2)}</p>`)}
` },

{ id: "staging", title: "Stepwise plan", html: `
<div class="calc" data-calc="epistaxisplan"></div>
` },

{ id: "manage", title: "Management", html: `
<ol>
<li><b>First aid</b>: calm the child (and parent); sit up and forward; pinch the soft nose for 10 minutes without letting go; a cold drink or ice to suck can help.</li>
<li><b>If it continues</b>: remove clots, look with a light; ${dr("oxymetazoline", "oxymetazoline")}-soaked cotton for a few minutes; repeat pressure.</li>
<li><b>Visible bleeding vessel and a cooperative child</b>: topical anaesthetic then silver nitrate cautery to that spot only, one side at a time (ENT or trained doctor).</li>
<li><b>Still bleeding</b>: anterior pack (Vaseline gauze, STG) or a resorbable pack, and refer to ENT. Children rarely need posterior packs; a child who does needs admission and investigation.</li>
<li><b>Recurrent bleeds</b>: antiseptic cream to the anterior nose (UK practice: Naseptin four times daily for 10 days; mupirocin for peanut, soya or neomycin allergy, or where Naseptin is unavailable), petroleum jelly at night, nail trimming, treat allergic rhinitis.</li>
<li><b>Red flags</b>: blood tests and paediatric or haematology review; treat dengue within its protocol; refer suspected tumours.</li>
</ol>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine", "Use", "Bhutan NEML 2025"], [
[dr("oxymetazoline", "Oxymetazoline 0.05%"), "Pledget to slow bleeding before inspection or cautery", "Listed"],
[dr("mupirocin", "Mupirocin 2% cream"), "Recurrent anterior bleeds when antiseptic cream is unavailable or the child is allergic", "Listed"],
["Naseptin (chlorhexidine–neomycin) cream", "UK first-line cream for recurrent bleeds", "Not listed; contains peanut oil"],
["White soft paraffin", "Moisturise the septum in dry weather", "Listed"],
["Silver nitrate", "Cautery of a visible vessel", "Not listed"]])}
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Known bleeding disorder</b> (haemophilia, von Willebrand disease)", "Early haematology advice; factor replacement or desmopressin per specialist; resorbable packing"],
["<b>Children on anticoagulants</b> (cardiac conditions)", "Local measures first; discuss with the treating team before stopping"],
["<b>Children with nephrotic syndrome or liver disease</b>", "Check clotting and platelets"],
["<b>Children at altitude or in dry winters</b>", "Regular petroleum jelly; humidify rooms where possible"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Toddler with a nosebleed and a bruise on the ear", "Full examination, clotting screen, safeguarding assessment", "Bruising on protected sites suggests abuse"],
["Teenage boy with heavy recurrent one-sided bleeds and blockage", "ENT referral for endoscopy and imaging; no biopsy outside a specialist centre", "Possible angiofibroma, which bleeds dangerously"],
["Bleeding nose with fever and rash in July", "Dengue tests; platelet count; dengue warning-sign management", "Mucosal bleeding is a warning sign"],
["Parents want cautery but the child is frightened", "Cream first; cautery later under better conditions", "Cooperation improves success and safety"]])}
` },

{ id: "complications", title: "Complications", html: `
<p>Most childhood nosebleeds cause no harm. Rarely: anaemia from frequent bleeds, aspiration in a heavy bleed, septal perforation from repeated bilateral cautery, and pack complications. The main danger is missing an underlying cause: bleeding disorder, leukaemia, dengue, angiofibroma or abuse.</p>
` },

{ id: "followup", title: "Advice for families", html: `
${box("green", "What to do at home", `<ul><li>Sit your child up and lean forward; pinch the soft part of the nose for 10 minutes by the clock; spit out blood.</li><li>Do not tip the head back or put tissue high into the nose.</li><li>Use petroleum jelly inside the nostrils at night in cold, dry weather; keep nails short.</li><li>Come back if bleeding lasts more than 20 minutes, is very heavy, comes with bruises or a rash, or happens in a baby.</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "Arteries supplying Little's area", src: "images/kiesselbach-plexus.jpg", mod: "Drawing", ctx: "Anterior nosebleeds in children", loc: "Anterior nasal septum", find: "Converging arteries on the anterior septum", interp: "The source of almost all childhood nosebleeds; within reach of a finger, so pressure and creams work", by: "Mbuchko3", page: "https://commons.wikimedia.org/wiki/File:Kiesselbach%27s_Plexus.jpg", lic: "CC BY-SA 4.0" })}
</div>
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with a nosebleed", [F.e("Sit forward; pinch soft nose 10 min"), F.a, F.d("Stopped?"), F.a, F.b([["No", F.e("Look, oxymetazoline, cautery if vessel seen, pack, ENT")], ["Yes", F.s("Any red flag? Under 2, heavy, bruising, family history, one-sided blockage, fever and rash")]]), F.a, F.b([["Red flag", F.e("FBC, film, clotting; dengue test; ENT or haematology; safeguarding if indicated")], ["None", F.ok("Advice; cream and petroleum jelly for recurrent bleeds")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Head tilted back", "Blood swallowed, vomited or aspirated", "Lean forward"],
["Ignoring a nosebleed in a baby", "Bleeding disorder or abuse missed", "Investigate under 2 years"],
["Biopsying a nasal mass in an adolescent boy", "Catastrophic bleeding from an angiofibroma", "Refer for imaging first"],
["Cauterising both sides", "Septal perforation", "One side at a time"],
["Prescribing Naseptin to a child with peanut allergy", "Allergic reaction", "Use mupirocin"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Where do almost all childhood nosebleeds arise?", "Little's area (Kiesselbach plexus) on the anterior nasal septum.")}
${qa("Intern/MO", "What would you do for a well 8-year-old with recurrent anterior nosebleeds?", "First-aid teaching, antiseptic cream (or mupirocin) to the anterior nose for about 10 days, petroleum jelly, nail care; cautery for a visible vessel if bleeds persist.")}
${qa("Intern/MO", "Why are nosebleeds in children under 2 different?", "They are uncommon; a bleeding disorder should always be considered and, if there is other evidence of physical abuse, it must be excluded (Paranjothy 2009).")}
${qa("Specialist", "Which nosebleed in an adolescent needs imaging before any biopsy?", "Recurrent heavy one-sided bleeds with nasal blockage in a boy — suspect juvenile nasopharyngeal angiofibroma.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Tunkel DE, Anne S, Payne SC, et al. Clinical Practice Guideline: Nosebleed (Epistaxis). Otolaryngol Head Neck Surg 2020;162(1 Suppl):S1. <a href="https://doi.org/10.1177/0194599819890327" target="_blank" rel="noopener">doi:10.1177/0194599819890327</a></li>
<li id="ref-2">Paranjothy S, Fone D, Mann M, et al. The incidence and aetiology of epistaxis in infants: a population-based study. Arch Dis Child 2009;94:421–424. <a href="https://doi.org/10.1136/adc.2008.144881" target="_blank" rel="noopener">doi:10.1136/adc.2008.144881</a></li>
<li id="ref-3">Qureishi A, Burton MJ. Interventions for recurrent idiopathic epistaxis (nosebleeds) in children. Cochrane Database Syst Rev 2012. <a href="https://doi.org/10.1002/14651858.CD004461.pub3" target="_blank" rel="noopener">doi:10.1002/14651858.CD004461.pub3</a></li>
<li id="ref-4">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §14.5 Epistaxis; National Essential Medicines List 2025.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG 2024 §14.5", "<span class='pass'>Read directly</span>", ""],
["AAO-HNS 2020", "<span class='pass'>Read directly</span>", "Key action statements"],
["Infant epistaxis study", "<span class='pass'>Confirmed</span>", "Paranjothy 2009 conclusions"],
["Naseptin regimen", "<span class='flag'>Secondary source</span>", "UK regional guideline citing NICE CKS; the CKS page itself was not read"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 26 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "epistaxisplan (child and infant paths)"]], "qc")}` }
]
});
