/* Postpartum haemorrhage */
registerPage({
id: "pph-preg",
title: "Postpartum Haemorrhage — Pregnancy",
subtitle: "Prevent with active management, spot it early with measured blood loss, and treat with the first-response bundle: massage, oxytocin, tranexamic acid, fluids, examine, escalate",
age: "Pregnancy", specs: ["obg", "emerg"],
keywords: ["postpartum haemorrhage", "postpartum hemorrhage", "PPH", "uterine atony", "4 Ts", "oxytocin", "tranexamic acid", "misoprostol", "methylergometrine", "carboprost", "AMTSL", "active management third stage", "retained placenta", "balloon tamponade", "condom tamponade", "bimanual compression", "shock index", "E-MOTIVE", "secondary PPH"],
related: ["preeclampsia-preg", "anaemia-preg", "sepsis-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Postpartum haemorrhage is the leading cause of maternal death worldwide, and a woman can bleed to death within two hours of birth. Almost every death is preventable when the team recognises bleeding early and acts as one.</p>
<div class="glance">
<div><h4>Definition</h4><p>500 mL or more after birth (1000 mL or more after caesarean), or any bleeding causing shock. <b>Primary</b>: within 24 hours; <b>secondary</b>: 24 hours to 12 weeks.</p></div>
<div><h4>The 4 Ts</h4><ul><li><b>Tone</b> (atony, about 70%)</li><li><b>Trauma</b> (tears, rupture)</li><li><b>Tissue</b> (retained placenta)</li><li><b>Thrombin</b> (clotting failure)</li></ul></div>
<div><h4>Prevent</h4><p>${dr("oxytocin")} 10 IU IM for every birth (active management of the third stage).</p></div>
<div><h4>First response (WHO bundle)</h4><p>Uterine massage, ${dr("oxytocin")}, ${dr("tranexamic_acid")} 1 g IV, IV fluids, examine the genital tract, escalate.</p></div>
<div><h4>Next uterotonics</h4><p>${dr("methylergometrine")} 0.2 mg IM (not in hypertension), ${dr("misoprostol")} 800 microgram, ${dr("carboprost")} (not in asthma).</p></div>
<div><h4>If still bleeding</h4><p>Bimanual compression, balloon or condom tamponade, blood, surgery.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §11.11 and the <b>Bhutan PPH Guideline (2nd ed., 2016)</b> set the steps above. Where they differ (tranexamic acid timing, ergometrine form, carboprost doses), the STG 2024 and WHO 2023 are followed. Long distances and weather make <b>prevention and early transfer</b> the main safety tools. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Definitions, causes and risk factors", html: `
${tbl(["Term", "Meaning"], [
["Minor PPH", "500–1000 mL with no shock (Bhutan PPH Guideline)"],
["Major PPH", "Over 1000 mL and continuing, or any shock"],
["Primary PPH", "Within 24 hours of birth"],
["Secondary PPH", "From 24 hours to 12 weeks (usually retained tissue or infection)"]])}
<h3>Risk factors (STG)</h3>
<ul><li>Prolonged labour or failure to progress, induction, instrumental birth, large baby, multiple pregnancy, polyhydramnios</li><li>Placenta praevia or accreta spectrum (previous caesarean), previous PPH</li><li>Pre-eclampsia, anaemia, grand multiparity</li></ul>
<p>Most PPH happens in women <b>without</b> risk factors, so every birth needs active management and a plan.${r(1, 2)}</p>
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Why the uterus bleeds", [
F.s("Placental bed receives about 700 mL of blood a minute at term"), F.a,
F.s("After the placenta separates, contraction of the uterine muscle ('living ligatures') closes the vessels"), F.a,
F.b([["Tone", F.e("Muscle fails to contract: atony")], ["Tissue", F.e("Retained placenta stops full contraction")], ["Trauma", F.e("Tears bleed regardless of tone")], ["Thrombin", F.e("Clotting failure: abruption, sepsis, pre-eclampsia, massive bleeding")]]), F.a,
F.ok("Uterotonics restore tone; tranexamic acid slows clot breakdown; repair and removal treat the rest")])}
` },

{ id: "conflicts", title: "Where guidelines disagree", html: `
${tbl(["Topic", "Bhutan STG 2024", "Bhutan PPH Guideline 2016", "International (WHO 2023)", "This guide"], [
["Tranexamic acid", "First-line, 1 g IV over 10 minutes", "Only if uterotonics fail", "Within 3 hours of birth for all PPH, as part of the first-response bundle", "<b>Give early</b>, as STG and WHO"],
["Oxytocin infusion", "20 IU in 500 mL saline", "10 IU + 40 IU in 500 mL at 40 drops/min", "10 IU IV/IM then infusion", "Either; never a fast undiluted IV bolus"],
["Ergometrine", "Methylergometrine 0.2 mg IM", "Ergometrine 0.5 mg IV", "Ergometrine/methylergometrine as second line", "Methylergometrine 0.2 mg IM (STG)"],
["Carboprost", "Not listed in STG", "2–3 doses (section 5) vs up to 8 doses (section 10)", "0.25 mg every 15 min, max 8 doses", "Max 2 mg (8 doses)"],
["Misoprostol route", "800 microgram rectal", "800–1000 microgram", "800 microgram sublingual", "800 microgram sublingual or rectal"],
["Recognition", "Clinical", "Clinical and visual estimate", "Measured blood loss with a calibrated drape (E-MOTIVE)", "Measure where possible " + LB.loc()]])}
` },

{ id: "presentation", title: "Recognition", html: `
${tbl(["Sign", "Approximate blood loss"], [
["Normal BP, mild tachycardia", "Up to 15% (about 750 mL)"],
["Heart rate over 100, faster breathing, anxiety", "15–30% (750–1500 mL)"],
["Systolic BP under 90, confused, cold and clammy", "30–40% (1500–2000 mL)"],
["Collapse, gasping", "Over 40% (over 2000 mL)"]])}
<p><b>Shock index</b> (heart rate ÷ systolic BP) of 1 or more suggests significant blood loss even when BP still looks normal. Young women compensate well: falling BP is a late sign.</p>
${box("red", "Danger signs", `<ul><li>Bleeding that does not slow after the first-response bundle</li><li>Shock index 1 or more, systolic BP under 90, confusion, poor urine output</li><li>Pain out of proportion (rupture, haematoma); oozing from cannula sites (coagulopathy)</li></ul>`)}
<h3>The typical patient</h3>
<p>A 31-year-old in her fourth pregnancy delivers a 3.9 kg baby after a 20-hour labour at a district hospital in Samdrup Jongkhar. Twenty minutes later she is pale with a soft, boggy uterus well above the umbilicus; blood fills the drape (about 900 mL); pulse 122, BP 98/64 (shock index 1.2). <b>This is primary PPH from uterine atony</b>: multiparity, long labour and a big baby are classic risk factors, and the soft uterus points to tone. She needs a red alert, massage, oxytocin, tranexamic acid, IV fluids, a genital tract examination and blood.</p>
` },

{ id: "ddx", title: "Find the cause (the 4 Ts)", html: `
${tbl(["Cause", "Clues", "Action"], [
["<b>Tone</b>", "Soft, large uterus; bleeding with clots", "Massage, uterotonics, compression"],
["<b>Trauma</b>", "Firm uterus with continued bright bleeding; perineal, vaginal or cervical tear; pain and shock out of proportion (haematoma, rupture)", "Examine in good light, repair, theatre if rupture"],
["<b>Tissue</b>", "Placenta not delivered or incomplete; membranes missing", "Controlled cord traction, manual removal"],
["<b>Thrombin</b>", "Oozing from sites, blood not clotting, abruption, pre-eclampsia, sepsis, massive bleeding", "Blood products, tranexamic acid, treat cause"],
["Uterine inversion", "Shock out of proportion, mass in the vagina, no uterus felt", "Immediate manual replacement"]])}
` },

{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Why", "Notes", "Priority"], [
["Group and cross-match", "Transfusion", "2 units for high risk; 4 units in major PPH (Bhutan guideline)", "Essential"],
["Haemoglobin, platelets", "Baseline and trend", "Early Hb underestimates loss: transfuse on clinical grounds", "Essential"],
["Clotting (PT/INR, fibrinogen)", "Coagulopathy", "Fibrinogen under 2 g/L predicts severe PPH", "Major PPH"],
["Bedside clotting test (20-minute whole blood clotting)", "Where labs are unavailable", "Clot fails to form: coagulopathy", "Useful at BHU/PHC"],
["Creatinine, calcium, lactate", "Massive transfusion, shock", "—", "Major PPH"],
["Ultrasound", "Retained tissue (secondary PPH), intra-abdominal blood", "—", "Selected"]])}
` },

{ id: "staging", title: "Severity and action tool", html: `
<div class="calc" data-calc="pphcheck"></div>
<h3>Refer</h3>
<ul><li>From BHU/PHC: any PPH after the first steps (oxytocin, massage, fluids, compression, tranexamic acid if stocked), with a skilled escort, by the fastest route (road or air).</li><li>From hospitals without surgery or blood: bleeding not controlled by uterotonics, tears beyond repair, retained adherent placenta.</li></ul>
` },

{ id: "manage", title: "Management", html: `
<h3>A. Prevention: every birth</h3>
<ul><li><b>Active management of the third stage:</b> ${dr("oxytocin")} 10 IU IM within a minute of birth, controlled cord traction, uterine tone checks every 15 minutes for 2 hours.</li>
<li>No oxytocin (home birth): ${dr("misoprostol")} 600 microgram orally.</li>
<li>Treat anaemia in pregnancy (see <a href="#/d/anaemia-preg">anaemia in pregnancy</a>); plan birth in a hospital with blood for women with placenta praevia, previous PPH or caesarean.</li></ul>

<h3>B. First response (WHO bundle, start together)</h3>
<ol><li><b>Call for help</b> (red alert); ABC, oxygen, lie flat, keep warm; two 14–16 G cannulae; blood for cross-match; catheter.</li>
<li><b>Uterine massage</b> and expel clots.</li>
<li>${dr("oxytocin")} 10 IU IM or slow IV, then infusion (STG: 20 IU in 500 mL normal saline).</li>
<li>${dr("tranexamic_acid")} <b>1 g IV over 10 minutes</b>, within 3 hours of birth; a second 1 g after 30 minutes if bleeding continues.${r(3)}</li>
<li><b>IV fluids:</b> warmed crystalloid (${dr("ringer_lactate", "Ringer's lactate")} or saline), up to about 3.5 L until blood arrives; transfuse early.</li>
<li><b>Examine</b> the placenta and genital tract for the cause.</li></ol>

<h3>C. If bleeding continues</h3>
<ul><li>${dr("methylergometrine")} 0.2 mg IM (avoid in hypertension or pre-eclampsia); ${dr("misoprostol")} 800 microgram sublingual or rectal; ${dr("carboprost")} 0.25 mg IM every 15 minutes, max 2 mg (avoid in asthma).</li>
<li><b>Bimanual uterine compression</b> or external aortic compression while preparing tamponade.</li>
<li><b>Uterine balloon tamponade</b> (commercial or condom catheter: a condom tied over a Foley catheter, filled with 300–500 mL saline), left 12–24 hours with oxytocin running and antibiotics.</li>
<li><b>Trauma:</b> repair tears; first- and second-degree with 2/0 absorbable suture; pack third- and fourth-degree tears and transfer with catheter and ampicillin.</li>
<li><b>Retained placenta:</b> manual removal under anaesthesia with antibiotic cover; if morbidly adherent and the woman is stable, leave it and transfer.</li>
<li><b>Surgery</b> (referral hospital): compression sutures (B-Lynch), uterine or internal iliac artery ligation, hysterectomy — early rather than late.</li></ul>

<h3>D. Blood and clotting</h3>
<ul><li>Transfuse red cells on clinical grounds; in massive PPH give plasma and platelets with red cells (about 1:1:1) and keep fibrinogen over 2 g/L (cryoprecipitate).</li>
<li>Keep warm; correct calcium.</li></ul>

<h3>E. After the bleeding</h3>
<ul><li>Close monitoring for 24 hours (HDU); iron (IV iron sucrose if Hb under about 8–9 g/dL and not transfused); VTE prophylaxis once bleeding stops; debrief the woman and family.</li>
<li><b>Secondary PPH:</b> usually retained tissue or endometritis: antibiotics (e.g. ampicillin + metronidazole + gentamicin, or co-amoxiclav), uterotonics, ultrasound, evacuation if tissue remains.</li></ul>
` },

{ id: "drugs", title: "Medicines and doses", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("oxytocin"), "10 IU IM/slow IV; infusion 20 IU in 500 mL (STG) or 40 IU in 500 mL at 40 drops/min", "First line; cold chain"],
[dr("tranexamic_acid"), "1 g IV over 10 min; repeat once after 30 min", "Within 3 hours of birth"],
[dr("methylergometrine"), "0.2 mg IM; repeat every 2–4 h, max 1 mg/day", "Not in hypertension, pre-eclampsia, heart disease"],
[dr("misoprostol"), "800 microgram sublingual or rectal (treatment); 600 microgram oral (prevention)", "Shivering, fever"],
[dr("carboprost"), "0.25 mg IM every 15 min, max 2 mg", "Not in asthma"],
[dr("ringer_lactate"), "Warmed, up to about 3.5 L before blood", "Then blood products"],
[dr("ampicillin"), "1 g IV (manual removal, severe tears)", "Prophylaxis"]])}
` },

{ id: "populations", title: "Women with other conditions", html: `
<ul><li><b>Pre-eclampsia:</b> avoid ergometrine; use oxytocin, tranexamic acid, misoprostol; careful fluids (pulmonary oedema).</li>
<li><b>Asthma:</b> avoid carboprost.</li>
<li><b>Anaemia:</b> tolerates blood loss poorly: transfuse earlier.</li>
<li><b>Previous caesarean with low-lying placenta:</b> suspect placenta accreta; deliver at a hospital with surgery and blood.</li>
<li><b>Jehovah's Witnesses or refusal of blood:</b> plan in advance; early surgery; cell salvage where available.</li></ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do", "Why"], [
["Home birth with heavy bleeding", "Oxytocin 10 IU IM or misoprostol, massage, baby to breast, compression, call for transport", "Time to hospital is the danger"],
["Bleeding with a firm uterus", "Look for tears and haematoma", "Uterotonics will not help trauma"],
["Shock out of proportion to visible blood", "Concealed bleeding: haematoma, rupture, inversion", "Visible loss misleads"],
["Bleeding continues during transfer", "Bimanual or aortic compression, balloon tamponade", "Mechanical control buys time"]])}
` },

{ id: "complications", title: "Complications and prognosis", html: `
${tbl(["Complication", "Recognition", "Management"], [
["Hypovolaemic shock, death", "Falling BP, confusion", "Resuscitation, blood, stop the source"],
["DIC", "Oozing, low fibrinogen", "Blood products"],
["AKI", "Low urine output", "Restore volume"],
["Sheehan syndrome", "Failure to lactate, later hypopituitarism", "Endocrine assessment"],
["Hysterectomy, loss of fertility", "After uncontrolled bleeding", "Counselling"],
["Anaemia, fatigue, depression", "Weeks after", "Iron, follow-up"]])}
` },

{ id: "followup", title: "Follow-up and counselling", html: `
<ul><li>Check Hb before discharge and at 6 weeks; iron for 3 months.</li><li>Explain what happened; next pregnancy: deliver in hospital with an active-management plan.</li></ul>
${box("red", "Come back at once if (after going home)", `<ul><li>Heavy bleeding (soaking more than one pad an hour) or large clots</li><li>Fever, smelly discharge or lower abdominal pain (secondary PPH, infection)</li><li>Dizziness or fainting</li></ul>`)}
` },

{ id: "images", title: "Images", html: `
${fig({ title: "Uterine balloon tamponade device", src: "images/uterine-balloon.png", mod: "Diagram of device", ctx: "Treatment of PPH from atony", loc: "Balloon inside the uterine cavity", find: "A balloon inflated inside the uterus presses on the placental bed", interp: "Used when uterotonics fail; a condom tied over a Foley catheter and filled with saline works on the same principle", by: "AnwarSunrise", page: "https://commons.wikimedia.org/wiki/File:Balloon_medical_device_for_Tamponade_Treatment_of_uterine_postpartum_hemorrhage.png", lic: "CC0" })}
` },

{ id: "flows", title: "Clinical flowcharts", html: `
${F.chart("Bleeding after birth", [
F.s("Blood loss 500 mL or more, or shock signs → RED ALERT"), F.a,
F.s("Massage + oxytocin + tranexamic acid 1 g + IV fluids + catheter + cross-match"), F.a,
F.d("Uterus soft or firm? Placenta complete?"), F.a,
F.b([["Soft (tone)", F.s("Methylergometrine / misoprostol / carboprost; bimanual compression; balloon tamponade")], ["Firm (trauma)", F.s("Examine and repair tears")], ["Tissue", F.s("Manual removal")]]), F.a,
F.d("Still bleeding?"), F.a,
F.e("Blood products, surgery, transfer")])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
<ul><li><b>Active management of the third stage for every birth</b> prevents most PPH.</li>
<li>Give tranexamic acid early, within 3 hours.</li>
<li>Measure blood loss: eyes underestimate by a third to a half.</li></ul>
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Waiting for BP to fall", "Late recognition", "Use shock index and measured loss"],
["Ergometrine in pre-eclampsia", "Stroke", "Check BP first"],
["Repeating uterotonics when the uterus is firm", "Missed tear", "Examine for trauma"],
["Delaying surgery or transfer", "Death from exsanguination", "Escalate early"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "What are the 4 Ts of PPH?", "Tone, Trauma, Tissue, Thrombin.")}
${qa("Intern/MO", "What is in the WHO first-response bundle?", "Uterine massage, oxytocin, tranexamic acid, IV fluids, genital tract examination, and escalation.")}
${qa("Intern/MO", "When must methylergometrine be avoided?", "Hypertension, pre-eclampsia and heart disease.")}
${qa("Intern/MO", "What is the maximum dose of carboprost?", "0.25 mg every 15 minutes up to 2 mg (8 doses); avoid in asthma.")}
${qa("Specialist", "How soon should tranexamic acid be given?", "Within 3 hours of birth (WOMAN trial), 1 g IV over 10 minutes, repeated once if needed.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">World Health Organization. WHO recommendations for the prevention and treatment of postpartum haemorrhage. Geneva: WHO; 2012 (updated uterotonic and tranexamic acid recommendations 2017–2023). <a href="https://www.who.int/publications/i/item/9789241548502" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-2">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §11.11 Postpartum haemorrhage; Standard Guideline for Management of PPH, 2nd ed. (2016); National Essential Medicines List 2025.</li>
<li id="ref-3">WOMAN Trial Collaborators. Effect of early tranexamic acid administration on mortality, hysterectomy, and other morbidities in women with post-partum haemorrhage (WOMAN). <i>Lancet</i> 2017;389:2105–2116. <a href="https://doi.org/10.1016/S0140-6736(17)30638-4" target="_blank" rel="noopener">doi:10.1016/S0140-6736(17)30638-4</a></li>
<li id="ref-4">Gallos I, Devall A, Martin J et al. Randomized trial of early detection and treatment of postpartum hemorrhage (E-MOTIVE). <i>N Engl J Med</i> 2023;389:11–21. <a href="https://doi.org/10.1056/NEJMoa2303966" target="_blank" rel="noopener">doi:10.1056/NEJMoa2303966</a></li>
<li id="ref-5">Bhutan Clinical Reference app: Postpartum haemorrhage (topic page, Nov 2026).</li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `
${tbl(["Check", "Result", "Note"], [
["Bhutan STG and PPH Guideline", "<span class='pass'>Verified</span>", "STG §11.11 read; PPH Guideline 2016 via the app's summary"],
["STG definition text", "<span class='flag'>Flagged</span>", "PDF text garbled ('primary PPH between 24 hours and six weeks' describes secondary PPH); standard definitions used"],
["Doses", "<span class='pass'>Checked</span>", "STG, NEMF, WHO"]], "qc")}
` }
]
});
