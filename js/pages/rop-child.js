/* Retinopathy of prematurity — full depth (Thin-page Round 6, 27 Nov 2026).
   Sources read directly: Bhutan Hospital IMNCI 2024 (§7 ROP among preterm problems; §3.4 oxygen targets); India — Operational
   Guidelines for ROP (National ROP Task Force / RBSK / PHFI / NPCB) as summarised in Bhende, Indian J Ophthalmol 2020 (PMC7001177)
   and Athikarisamy et al., Lancet Reg Health SE Asia 2023 (PMC10363497): screen ≤34 weeks or ≤2000 g, and 34–36 weeks with risk
   factors; first screen within 4 weeks, at 2–3 weeks if under 1200 g or under 28 weeks; ETROP treatment criteria; AAP 2018 policy
   statement (abstract); ETROP 2003 (abstract); ICROP3 2021 (abstract); RAINBOW 2019 (abstract); European RDS 2022 (SpO₂ 90–94%). */
registerPage({
id: "rop-child",
title: "Retinopathy of Prematurity (ROP)",
subtitle: "Abnormal blood vessel growth in the eyes of preterm babies can cause blindness within weeks, yet it is preventable and treatable. Control oxygen from birth, examine every eligible baby by 4 weeks of age, book the eye examination before discharge, and treat sight-threatening ROP within 2–3 days",
age: "Preterm infants", specs: ["neo", "nicu", "eye"],
keywords: ["retinopathy of prematurity", "ROP", "ROP screening", "ROP criteria", "type 1 ROP", "plus disease", "A-ROP", "aggressive ROP", "ICROP3", "ETROP", "laser photocoagulation", "anti-VEGF", "ranibizumab", "bevacizumab", "RetCam", "tele-ROP", "oxygen targeting", "preterm blindness"],
related: ["preterm-child", "rds-child", "cpap-child", "neosepsis-child", "redeye-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Retinal vessels normally finish growing around term. Preterm birth, too much or swinging oxygen, infection and poor growth disturb that growth. In South Asia, bigger and more mature babies than in Western countries develop blinding ROP, largely because oxygen is not controlled. Every eligible baby needs a timely eye examination; missing it can mean lifelong blindness.</p>
<div class="glance">
<div><h4>Who to screen</h4><p><b>34 weeks or less, or 2000 g or less</b> at birth (Indian national guidelines); also 34–36 weeks with risk factors (oxygen, sepsis, transfusion, unstable course).</p></div>
<div><h4>When</h4><p>First examination <b>within 4 weeks</b> of birth; at <b>2–3 weeks</b> if under 1200 g or under 28 weeks.</p></div>
<div><h4>Prevent</h4><p>Blended oxygen; SpO₂ <b>90–94%</b> with alarms at 89% and 95%; avoid swings; treat sepsis; mother's milk and growth.</p></div>
<div><h4>Treat</h4><p>Type 1 ROP: laser or anti-VEGF injection <b>within 48–72 hours</b>.</p></div>
<div><h4>Before discharge</h4><p><b>Never discharge an eligible baby without a booked eye date</b> — and tell the parents why.</p></div>
<div><h4>Later</h4><p>Eye checks for squint, glasses and lazy eye through childhood.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan IMNCI 2024 lists retinopathy of prematurity among the problems of preterm babies but gives no screening rule; Bhutan has no national ROP protocol that this guide could find. This page uses the Indian national criteria because they are designed for South Asian babies (who develop ROP at higher weights). ROP examinations need an ophthalmologist trained in indirect ophthalmoscopy — available at JDWNRH; treatment (laser or anti-VEGF) may need referral. Plan the referral pathway before the baby is due for screening. ${LB.bt()}</p>`)}
` },

{ id: "overview", title: "Classification (ICROP3)", html: `
${tbl(["Feature", "Meaning"], [
["<b>Zone</b> I, II, III", "How far the vessels have grown: zone I (around the optic disc) is the most immature and dangerous; zone III is the far periphery"],
["<b>Stage</b> 1–5", "1 demarcation line; 2 ridge; 3 extraretinal fibrovascular proliferation; 4 partial retinal detachment; 5 total detachment"],
["<b>Plus disease</b>", "Dilated, twisted vessels at the back of the eye — a sign of active, dangerous disease; 'pre-plus' is in between"],
["<b>A-ROP</b> (aggressive ROP)", "Fast, severe disease, often in zone I or posterior zone II, sometimes in bigger babies in under-resourced units — treat urgently"],
["<b>Regression / reactivation</b>", "ICROP3 adds terms for disease after anti-VEGF treatment, which can come back weeks later"]])}
<p>ICROP3 (2021) is the current international classification.${r(5)}</p>
` },

{ id: "patho", title: "What happens", html: `
${F.chart("Retinopathy of prematurity", [F.s("Preterm birth — retinal vessels incomplete"), F.a, F.s("Phase 1: high oxygen after birth stops vessel growth"), F.a, F.s("Avascular retina becomes hypoxic as it matures"), F.a, F.e("Phase 2 (about 32–34 weeks PMA): VEGF surge → abnormal new vessels"), F.a, F.e("Fibrovascular ridge → traction → retinal detachment"), F.a, F.ok("Laser destroys the avascular retina; anti-VEGF blocks the growth signal")])}
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Point", "India national (RBSK/NTF)", "AAP 2018 (USA)", "This guide"], [
["Who to screen", "≤34 weeks or ≤2000 g; 34–36 weeks with risk factors", "≤30 weeks or ≤1500 g, plus bigger babies with an unstable course", "Indian criteria (South Asian babies get ROP at higher weights)"],
["First examination", "Within 4 weeks; at 2–3 weeks if under 1200 g or under 28 weeks", "By a table of gestational age (about 31 weeks PMA or 4 weeks of age, whichever is later)", "Indian timing"],
["Treatment", "ETROP criteria; laser or anti-VEGF", "ETROP criteria", "Type 1 ROP within 48–72 h"],
["Laser vs anti-VEGF", "Both used", "—", "Ophthalmologist's choice; anti-VEGF needs longer follow-up for reactivation"]])}
<p>The Indian Operational Guidelines were built by the National ROP Task Force with RBSK, PHFI and the national blindness programme.${r(2)}${r(3)} AAP 2018 policy statement.${r(4)} In the RAINBOW trial (very-low-birth-weight babies needing treatment), ranibizumab 0.2 mg gave treatment success in 80% versus 66% with laser (p=0.051), with fewer unfavourable structural outcomes (1 vs 7) and similar adverse events.${r(7)}</p>
` },

{ id: "presentation", title: "Risk factors and the typical patient", html: `
${tbl(["Risk factor", "Why"], [
["Low gestation and birth weight", "Less retina vascularised at birth"],
["<b>Unmonitored or high oxygen</b>, and swings between high and low SpO₂", "The main preventable cause in South Asia"],
["Sepsis, NEC", "Inflammation"],
["Poor weight gain", "Low IGF-1 slows normal vessel growth"],
["Blood transfusions", "Adult haemoglobin releases more oxygen to tissues"],
["Mechanical ventilation, apnoea with desaturations", "Fluctuating oxygen"]])}
<p>ROP itself causes no visible signs in the baby — it is only found by examination.</p>
<h3>The typical patient</h3>
<p>Ugyen was born at 32 weeks weighing 1650 g in an eastern district hospital and needed oxygen by prongs for 5 days without a blender. On day 14 she is feeding well. <b>She meets the Indian screening criteria</b> (under 34 weeks, under 2000 g, oxygen exposure). Her first eye examination is booked at JDWNRH for day 26, the parents are given a written date and told why it matters, and the referral form goes with them. The examination shows stage 2 ROP in zone II without plus; she is re-examined weekly until the retina is fully vascularised.</p>
` },

{ id: "ddx", title: "Other causes of retinal or eye problems in infants", html: `
${tbl(["Condition", "Clue"], [
["Familial exudative vitreoretinopathy", "Term baby, family history, looks like ROP"],
["Retinoblastoma", "White pupil (leukocoria) in an older infant — urgent referral"],
["Congenital cataract", "White pupil from birth; absent red reflex"],
["Persistent fetal vasculature", "One eye, small eye, white pupil"],
["Retinal haemorrhages", "Birth trauma (resolve) or non-accidental injury in older infants"]])}
` },

{ id: "invest", title: "The eye examination", html: `
<ul><li>By an ophthalmologist trained in ROP: dilated indirect ophthalmoscopy with a lid speculum and scleral depressor, or wide-field imaging (RetCam) for tele-ROP.</li><li>Dilating drops 30–60 minutes before (as prescribed by the eye team); watch the baby for apnoea, feed intolerance and blood pressure changes after the drops and examination.</li><li>Give sucrose or breast milk and swaddling for pain relief.</li><li>Record zone, stage, plus disease and the date of the next examination.</li></ul>
${tbl(["Finding", "Usual next examination"], [["Immature retina, no ROP, zone II–III", "2–3 weeks"], ["Stage 1–2 in zone II", "1–2 weeks"], ["Zone I immature or any zone I ROP; pre-plus", "Within 1 week"], ["Type 1 ROP or A-ROP", "Treat within 48–72 h"]])}
<p>Screening stops when the retina is fully vascularised, or ROP has regressed in zone III; after anti-VEGF, examinations continue for months because of late reactivation.</p>
` },

{ id: "staging", title: "Screening eligibility and timing tool", html: `
<p>Enter gestation, birth weight and current age. Uses the Indian national criteria and shows where AAP criteria also apply.</p>
<div class="calc" data-calc="ropscreen"></div>
` },

{ id: "manage", title: "Management", html: `
<h3>1. Prevention — from the first breath</h3>
<ul><li>Air (21%) to start resuscitation in term and late preterm babies; blended oxygen titrated to the SpO₂ table (see resuscitation page).</li><li>In the newborn unit: blender and pulse oximeter for every baby on oxygen. Target SpO₂ 90–94% with alarms at 89% and 95% (European 2022). Never leave a preterm baby on unmonitored oxygen.</li><li>Avoid swings: wean oxygen promptly when SpO₂ is high; avoid repeated desaturations.</li><li>Prevent and treat sepsis; mother's milk; good growth; restrictive transfusion.</li></ul>
<h3>2. Screening</h3>
<ul><li>List every eligible baby on admission; book the first examination by the due date; examine before discharge if the date falls during the stay.</li><li>If discharged before the examination: give a written appointment, the referral letter and the reason; track attendance.</li></ul>
<h3>3. Treatment (ophthalmologist)</h3>
<ul><li><b>Type 1 ROP (ETROP)</b> — treat within 48–72 hours: zone I any stage with plus disease; zone I stage 3 without plus; zone II stage 2 or 3 with plus. A-ROP also needs urgent treatment.</li><li><b>Laser photocoagulation</b> of the avascular retina — permanent; under sedation or anaesthesia; more myopia later.</li><li><b>Intravitreal anti-VEGF</b> (ranibizumab or bevacizumab) — quick, good for zone I and A-ROP; ROP can reactivate weeks later, so follow-up must be reliable.</li><li>Type 2 ROP (zone I stage 1–2 without plus; zone II stage 3 without plus): watch closely, usually weekly.</li><li>Stage 4–5 (detachment): vitreoretinal surgery at a specialist centre — results are poor, which is why screening matters.</li></ul>
<h3>4. After treatment</h3>
<ul><li>Examinations until regression is complete and, after anti-VEGF, until the retina is fully vascularised.</li><li>Long-term follow-up for refractive error, squint and amblyopia.</li></ul>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Medicine", "Use", "Notes"], [
["Mydriatic drops (e.g. low-strength cyclopentolate with phenylephrine)", "Pupil dilation for examination", "As prescribed by the eye team; watch for apnoea, feed intolerance, blood pressure rise"],
["Oral sucrose or breast milk", "Pain relief during examination", "With swaddling"],
["Ranibizumab / bevacizumab (intravitreal)", "Type 1 ROP, A-ROP", "Ophthalmologist only; not on the NEML for ROP"],
["Oxygen", "Prevention by careful targeting", "Blended, SpO₂ 90–94% for preterm babies"]])}
` },

{ id: "populations", title: "Special groups", html: `
${tbl(["Group", "What changes"], [
["<b>Bigger preterm babies (32–34 weeks, 1500–2000 g)</b>", "Can still develop severe ROP when oxygen was uncontrolled — screen by Indian criteria"],
["<b>34–36 weeks with risk factors</b>", "Screen if they had oxygen, sepsis, transfusions or an unstable course"],
["<b>Babies transferred between hospitals</b>", "The screening date must travel with the baby"],
["<b>Babies treated with anti-VEGF</b>", "Weekly to fortnightly examinations for months; reactivation can occur up to about 60–70 weeks PMA"]])}
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["No ophthalmologist trained in ROP nearby", "Refer to JDWNRH by the due date; tele-ROP imaging where available"],
["Family lives far away and cannot travel", "Explain that blindness is preventable only by timely examination; arrange transport support; involve the health assistant to remind them"],
["Baby still in NICU on ventilation at screening date", "Examine in the NICU — illness is not a reason to delay"],
["Type 1 ROP diagnosed, treatment centre far", "Urgent referral within 48–72 h — do not wait for the next routine visit"]])}
` },

{ id: "complications", title: "Complications", html: `
<ul><li>Retinal detachment and blindness.</li><li>Myopia (especially after laser), astigmatism, anisometropia.</li><li>Squint and amblyopia.</li><li>Glaucoma and cataract later in severe cases.</li><li>Late reactivation after anti-VEGF.</li></ul>
` },

{ id: "followup", title: "Follow-up", html: `
<ul><li>Eye review at about 6 and 12 months corrected age, then yearly in early childhood for babies who had ROP (and refraction checks for all very preterm babies).</li><li>Glasses, patching and squint treatment as needed.</li><li>Low-vision services and early intervention for babies with visual impairment.</li></ul>
` },

{ id: "images", title: "Images", html: `
<div class="pair">
${fig({ title: "ROP zones", src: "images/rop-zones.jpg", mod: "Diagram", ctx: "ICROP3 classification", loc: "Retina (both eyes)", find: "Zones I–III centred on the optic disc", interp: "Zone I disease is the most dangerous", by: "Chiang MF, Quinn GE, Fielder AR et al.", page: "https://commons.wikimedia.org/wiki/File:Retinopathy_of_Prematurity_Zones.jpg", lic: "CC BY 4.0" })}
${fig({ title: "Tele-ROP imaging", src: "images/rop-retcam.gif", mod: "Wide-field retinal imaging", ctx: "e-ROP telemedicine study", loc: "Neonatal unit", find: "Retinal camera used on a preterm baby", interp: "Images can be read remotely when no ROP specialist is on site", by: "U.S. National Eye Institute", page: "https://commons.wikimedia.org/wiki/File:The_e-ROP_Study-_Telemedicine_for_rop(scene_of_RetCam)half-size.gif", lic: "Public domain" })}
</div>
` },

{ id: "flows", title: "Clinical flowchart", html: `
${F.chart("Preterm baby admitted", [F.e("Oxygen only with blender and oximeter; SpO₂ 90–94%"), F.a, F.d("34 weeks or less, 2000 g or less, or 34–36 weeks with risk factors?"), F.a, F.b([["No", F.ok("Routine follow-up")], ["Yes", F.s("Book first eye examination")]]), F.a, F.d("Under 1200 g or under 28 weeks?"), F.a, F.b([["Yes", F.s("Examine at 2–3 weeks")], ["No", F.s("Examine within 4 weeks")]]), F.a, F.d("Type 1 ROP or A-ROP?"), F.a, F.b([["Yes", F.e("Laser or anti-VEGF within 48–72 h")], ["No", F.ok("Repeat examinations until the retina is mature")]])])}
` },

{ id: "pearls", title: "Clinical pearls and common mistakes", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Using Western criteria (30 weeks / 1500 g) only", "Bigger South Asian babies with ROP are missed", "Indian criteria"],
["Discharging without a booked eye date", "Missed treatable ROP", "Discharge checklist"],
["Unblended oxygen 'just for a few days'", "Main preventable cause", "Blender + oximeter for every preterm on oxygen"],
["Delaying treatment of type 1 ROP to the next clinic", "Detachment", "Treat within 48–72 h"],
["Stopping follow-up soon after anti-VEGF", "Late reactivation", "Follow until fully vascularised"]])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Student", "Which preterm babies need ROP screening under the Indian national guidelines?", "34 weeks or less, or 2000 g or less at birth; also 34–36 weeks with risk factors.")}
${qa("Student", "What is plus disease?", "Dilated, tortuous vessels at the back of the eye — a sign of active, severe ROP.")}
${qa("Intern/MO", "When is the first examination for a 1100 g baby?", "At 2–3 weeks of life (under 1200 g or under 28 weeks).")}
${qa("Intern/MO", "What oxygen saturation target reduces ROP risk in preterm babies?", "90–94% with alarms at 89% and 95%, using a blender.")}
${qa("Specialist", "Define type 1 ROP.", "Zone I any stage with plus; zone I stage 3 without plus; zone II stage 2 or 3 with plus (ETROP) — treat within 48–72 h.")}
${qa("Specialist", "What did RAINBOW show?", "Ranibizumab 0.2 mg: 80% treatment success vs 66% with laser (p=0.051), with fewer unfavourable structural outcomes.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Integrated Management of Neonatal and Childhood Illness (IMNCI) — Hospital edition, 2024: §3.4, §7.</li>
<li id="ref-2">Bhende PS. Retinopathy of prematurity (editorial, summarising India's Operational Guidelines for ROP). Indian J Ophthalmol 2020;68(Suppl 1):S10–S11. <a href="https://doi.org/10.4103/ijo.IJO_2378_19" target="_blank" rel="noopener">doi:10.4103/ijo.IJO_2378_19</a></li>
<li id="ref-3">Athikarisamy S, Vinekar A, Patole S, et al. Retinopathy of prematurity in India — what can we learn from the polio legacy? Lancet Reg Health Southeast Asia 2023;14:100210. <a href="https://doi.org/10.1016/j.lansea.2023.100210" target="_blank" rel="noopener">doi:10.1016/j.lansea.2023.100210</a></li>
<li id="ref-4">Fierson WM; AAP Section on Ophthalmology, et al. Screening examination of premature infants for retinopathy of prematurity. Pediatrics 2018;142(6):e20183061. <a href="https://doi.org/10.1542/peds.2018-3061" target="_blank" rel="noopener">doi:10.1542/peds.2018-3061</a></li>
<li id="ref-5">Chiang MF, Quinn GE, Fielder AR, et al. International Classification of Retinopathy of Prematurity, third edition. Ophthalmology 2021;128(10):e51–e68. <a href="https://doi.org/10.1016/j.ophtha.2021.05.031" target="_blank" rel="noopener">doi:10.1016/j.ophtha.2021.05.031</a></li>
<li id="ref-6">Early Treatment for Retinopathy of Prematurity Cooperative Group. Revised indications for the treatment of retinopathy of prematurity: results of the ETROP randomized trial. Arch Ophthalmol 2003;121(12):1684–1694. <a href="https://doi.org/10.1001/archopht.121.12.1684" target="_blank" rel="noopener">doi:10.1001/archopht.121.12.1684</a></li>
<li id="ref-7">Stahl A, Lepore D, Fielder A, et al. Ranibizumab versus laser therapy for the treatment of very low birthweight infants with retinopathy of prematurity (RAINBOW). Lancet 2019;394(10208):1551–1559. <a href="https://doi.org/10.1016/S0140-6736(19)31344-3" target="_blank" rel="noopener">doi:10.1016/S0140-6736(19)31344-3</a></li>
<li id="ref-8">Sweet DG, Carnielli VP, Greisen G, et al. European consensus guidelines on the management of respiratory distress syndrome: 2022 update. Neonatology 2023;120(1):3–23. <a href="https://doi.org/10.1159/000528914" target="_blank" rel="noopener">doi:10.1159/000528914</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan IMNCI 2024", "<span class='pass'>Read directly</span>", "ROP listed; no Bhutan screening rule found"],
["Indian national criteria", "<span class='pass'>Checked</span>", "Two Indian reviews read in full (PMC); the Operational Guidelines PDF itself could not be opened (server refused)"],
["AAP 2018, ETROP, ICROP3, RAINBOW", "<span class='pass'>Read directly</span>", "Abstracts (Europe PMC). AAP first-exam table and the ETROP type 1 definition are standard but the full papers were not re-read"],
["Follow-up intervals by finding; anti-VEGF reactivation window", "<span class='unv'>Not read</span>", "Common practice; no guideline text read"],
["DOIs", "<span class='pass'>Verified</span>", "Crossref, 27 Nov 2026"],
["Calculator", "<span class='pass'>Tested</span>", "ropscreen (27 w/900 g; 32 w/1650 g; 35 w/2100 g with and without risk)"]], "qc")}` }
]
});
