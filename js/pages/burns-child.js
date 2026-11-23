/* Burns — children */
registerPage({
id: "burns-child",
title: "Burns — Children",
subtitle: "Scalds and bukhari burns are common in young children: cool, size with an age-adjusted chart, start fluids from 10% TBSA with maintenance added, control pain well, and think about safety at home",
age: "Children & adolescents", specs: ["paeds", "surg", "emerg"],
keywords: ["burns child", "paediatric burns", "scald", "Lund and Browder", "Parkland child", "maintenance fluids burns", "child protection burns", "bukhari"],
related: ["burns-adult", "sepsis-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Young children pull hot tea, soup and water onto themselves and fall against stoves. Their skin is thin, their head is a larger share of the body, and they need fluids from a smaller burn than adults.</p>
<div class="glance">
<div><h4>First aid</h4><p>Cool running water 20 minutes; keep the child warm; cling film.</p></div>
<div><h4>Size</h4><p>Age-adjusted chart (Lund–Browder): the head is 19% in infants, legs smaller.</p></div>
<div><h4>Fluids from 10% TBSA</h4><p>Parkland (STG) or 3 mL/kg/% (ATLS) <b>plus maintenance</b>; urine 1 mL/kg/hour; watch glucose.</p></div>
<div><h4>Pain</h4><p>${dr("paracetamol")} 15 mg/kg; ${dr("morphine")} 0.1 mg/kg.</p></div>
<div><h4>Refer</h4><p>Over 10% TBSA, full thickness, face, hands, feet, genitals, joints, circumferential, inhalation, electrical (STG); suspected abuse.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §1.9 applies to children with a 10% referral threshold. Many childhood burns in Bhutan come from bukharis and hot liquids at floor level: prevention advice is part of treatment. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Causes and depth", html: `
<ul><li>Scalds (most common under 5), contact burns from stoves and irons, flame, electrical (mouth burns from chewing cables), chemical.</li>
<li>Depth assessment as in adults; children's burns often look superficial at first and deepen over 48 hours.</li></ul>
${tbl(["Age", "Head", "Each leg"], [["Under 1 year", "19%", "13.5%"], ["1–4 years", "17%", "14.5%"], ["5–9 years", "13%", "16.5%"], ["10–14 years", "11%", "17.5%"], ["Adult", "9% (rule of nines)", "18%"]])}
<p>Values from the Lund–Browder chart (rounded); arms 9% each and trunk 18% front and back at all ages.${r(1)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Children with burns", [
F.s("Higher surface area to weight ratio → more fluid lost per kg"), F.a,
F.s("Small glycogen stores → hypoglycaemia when not fed"), F.a,
F.ok("Resuscitation fluid + maintenance with glucose, early feeding")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "International", "This guide"], [["Fluid start", "Parkland 4 mL", "ATLS 3 mL/kg/% plus maintenance", "Either, plus maintenance " + LB.loc()], ["Antibiotics", "By availability", "No routine prophylaxis", "Treat infection only; watch for toxic shock syndrome"]])}
` },

{ id: "presentation", title: "Assessment", html: `
<ul><li>ABCDE; weigh the child; TBSA by age chart; depth.</li>
<li>Does the story fit? Glove or stocking scalds, cigarette burns, clear edges without splash marks, delay in presentation suggest abuse.</li></ul>
${box("red", "Danger signs", `<ul><li>Inhalation injury, facial burns</li><li>Fever, rash, diarrhoea, low BP within days: <b>toxic shock syndrome</b> even with small burns</li><li>Pattern suggesting abuse</li></ul>`)}
<h3>The typical patient</h3>
<p>A 2-year-old girl, 12 kg, pulled a cup of hot butter tea over her chest and right arm 1 hour ago. Blistered area: front of trunk about half (9%) plus most of the right arm (about 7%). <b>This is a 16% TBSA scald</b> needing IV fluids: Parkland 768 mL in 24 hours (384 mL by 8 hours) plus maintenance 1100 mL/day, morphine, and referral to a burns-capable hospital.</p>
` },

{ id: "ddx", title: "Pitfalls", html: `${tbl(["Consider", "Why"], [["Non-accidental injury", "Pattern and story"], ["Toxic shock syndrome", "Small burns, rapid illness"], ["Hypoglycaemia", "Fasting child"]])}` },

{ id: "invest", title: "Investigations", html: `<p>Small burns: none. Major: FBC, electrolytes, glucose, creatinine, group and save; blood gas if smoke exposure; swabs if infection suspected.</p>` },

{ id: "staging", title: "Area and fluid tool", html: `<div class="calc" data-calc="burnfluid"></div>` },

{ id: "manage", title: "Management", html: `
<ol><li>Cool, cover, keep warm.</li>
<li>Fluids from 10% TBSA: ${dr("ringer_lactate", "Ringer's lactate")} by formula from the time of the burn, plus maintenance (0.9% saline with 5% dextrose); urine 1 mL/kg/hour; glucose monitoring.</li>
<li>Analgesia: intranasal or IV opioid early (${dr("morphine")} 0.1 mg/kg), ${dr("paracetamol")} 15 mg/kg; distraction; analgesia before dressings.</li>
<li>Dressings by depth; ${dr("silver_sulfadiazine")} for deep burns (not under 2 months).</li>
<li>Feeding: early oral or NG.</li>
<li>Tetanus status; safeguarding where indicated.</li>
<li>Refer per STG criteria.</li></ol>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Child dose", "Notes"], [[dr("ringer_lactate"), "Formula + maintenance", "Urine 1 mL/kg/h"], [dr("morphine"), "0.1 mg/kg IV", "Titrate"], [dr("paracetamol"), "15 mg/kg", "Regular"], [dr("silver_sulfadiazine"), "1% cream", "Avoid under 2 months"]])}
` },

{ id: "populations", title: "Infants", html: `<p>Infants have the largest head proportion, thinnest skin and highest risk of hypothermia and hypoglycaemia; refer early.</p>` },

{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do", "Why"], [["Small scald, child unwell 2 days later with rash and fever", "Treat as toxic shock: fluids, antibiotics (clindamycin + anti-staph)", "Life-threatening"], ["Story does not fit", "Admit, document, safeguarding", "Protect the child"]])}` },

{ id: "complications", title: "Complications and prognosis", html: `<p>Infection, toxic shock syndrome, contractures across joints, scarring, psychological effects. Splinting, pressure garments and play-based physiotherapy reduce disability.</p>` },

{ id: "followup", title: "Follow-up and counselling", html: `
${box("green", "What to tell parents", `<ul><li>Keep hot drinks and pots out of reach; guard bukharis; test bath water.</li><li>Give pain medicine before dressing changes.</li></ul>`)}
${box("red", "Come back at once if", `<ul><li>Fever, rash, vomiting, diarrhoea or drowsiness</li><li>Wound smells or oozes pus</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Superficial partial-thickness burn", src: "images/burn-superficial-partial.png", mod: "Clinical photograph", ctx: "Burn depth", loc: "Skin", find: "Red, moist, blistered, blanching skin", signs: "Superficial partial thickness", interp: "Usually heals within 2–3 weeks with simple dressings", by: "Baedr-9439", page: "https://commons.wikimedia.org/wiki/File:Superficial-partial-thickness-burn.png", lic: "CC0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Child with a burn", [F.s("Cool, ABCDE, weigh, age chart TBSA"), F.a, F.b([["Under 10%", F.ok("Analgesia, dressings, review")], ["10% or more", F.s("Fluids + maintenance, catheter, glucose")]]), F.a, F.e("Referral criteria or abuse concern → refer")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [["Using adult rule of nines", "Wrong TBSA", "Age chart"], ["Forgetting maintenance fluid", "Hypoglycaemia, under-resuscitation", "Add maintenance"], ["Under-treating pain", "Distress, poor cooperation", "Opioids early"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "From what TBSA do children need IV fluids?", "10% (STG referral threshold for children).")}
${qa("Intern/MO", "Urine output target in children?", "1 mL/kg/hour.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">ISBI Practice Guidelines Committee. ISBI practice guidelines for burn care. <i>Burns</i> 2016;42:953–1021. <a href="https://doi.org/10.1016/j.burns.2016.05.013" target="_blank" rel="noopener">doi:10.1016/j.burns.2016.05.013</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §1.9 Burns.</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Lund–Browder values", "<span class='pass'>Checked</span>", "Rounded age bands"], ["Fluids", "<span class='pass'>Checked</span>", "STG, ATLS"]], "qc")}` }
]
});
