/* Acute rheumatic fever and RHD — children. Thin-page upgrade Round 3, 27 Nov 2026 (id, rhdprophylaxis calculator, image and related links kept).
   Sources: Bhutan STG 2024 §2.4 (read from _work/stg-full.txt: Jones major/minor, 2 major or 1 major + 2 minor + strep evidence; investigations incl. echo;
   bed rest, aspirin 60 mg/kg/day divided, benzathine 24 lakh [sic — adult 1.2 MU elsewhere] or penicillin V 250 mg for 10 days, refer; prophylaxis
   benzathine monthly or penicillin V 250 mg 12-hourly; < 30 kg 6 lakh, ≥ 30 kg 12 lakh; carditis: to 25 y or 10 y after last attack; chronic carditis
   to 40 y or lifelong; yearly follow-up with ASO, CBC, ESR. The 'no carditis' duration row is not legible in our copy);
   WHO 2024 RF/RHD guideline (downloaded from iris.who.int to _work/research/r3/dl, text who-rf.txt: treat confirmed or — in moderate/high-risk settings —
   clinically suspected GAS pharyngitis in children; penicillin first line; Jones criteria (Table 1, adapted from AHA 2015); handheld echo; school echo
   screening 5–19 y; prophylaxis for RF, RHD and screen-detected RHD; BPG first line, oral penicillin alternative; oral test dose for mild allergy;
   lidocaine to reduce pain; adherence support; macrolides if allergic; no recommendation on anti-inflammatories; duration — follow national guidance);
   Merck Manual Professional 'Rheumatic fever' (updated Jan 2026: aspirin 15–25 mg/kg 4 × daily, max 4–6 g/day, 2–4 weeks then taper over 4 weeks;
   naproxen 7.5–10 mg/kg twice daily; no response in 24–48 h → rethink diagnosis; prednisone instead of aspirin for moderate–severe carditis,
   IV methylprednisolone 30 mg/kg (max 1 g) × 3 days if not suppressed; steroids 2–4 weeks then taper over 2–3 weeks with aspirin overlap; AHA durations
   5 y/age 21, 10 y/age 21, > 10 y or to 40; BPG every 3–4 weeks, 3 weeks better in high-endemic areas; chorea 10–30%, often months later);
   AHA 2015 Jones (via WHO Table 1 — the WHO table prints fever 38.5 °C in both columns). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "rhd-child",
title: "Acute Rheumatic Fever & RHD — Children",
subtitle: "Treat sore throats, diagnose ARF with the revised Jones criteria, eradicate streptococcus, and keep every child on regular benzathine penicillin for years",
age: "Children 5–15 years", specs: ["paeds", "cardio", "id", "ph"],
keywords: ["acute rheumatic fever", "ARF", "rheumatic heart disease", "RHD", "Jones criteria", "carditis", "Sydenham chorea", "secondary prophylaxis", "benzathine penicillin", "erythema marginatum", "subcutaneous nodules", "ASO", "anti-DNase B", "strep throat", "echocardiography screening", "migratory polyarthritis"],
related: ["rhd-adult", "urti-child", "hf-child", "af-adult", "ssti-child", "anaphylaxis-child"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Rheumatic heart disease is the preventable result of repeated group A streptococcal (GAS) throat infections. The single most powerful step is <b>regular benzathine penicillin after the first attack</b> ${r(2)}.</p>
<div class="glance">
<div><h4>Prevent</h4><p>Treat sore throats suspected to be streptococcal in children with penicillin — Bhutan counts as a moderate/high-risk setting ${r(2)} ${LB.loc()}.</p></div>
<div><h4>Diagnose</h4><p>Evidence of strep + 2 major, or 1 major + 2 minor Jones criteria; chorea alone is enough. Echo every suspected case ${r(1)} ${r(2)}.</p></div>
<div><h4>Treat</h4><p>${dr("benzathine_pen", "Benzathine penicillin")} once (also the first prophylactic dose); ${dr("aspirin")} for arthritis; steroids for moderate–severe carditis ${r(1)} ${r(3)}.</p></div>
<div><h4>Protect</h4><p>Benzathine every 4 weeks (3 weeks if recurrences): 6 lakh units under 30 kg, 12 lakh 30 kg and over; years-long, by carditis ${r(1)} ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG §2.4 covers Jones diagnosis, aspirin 60 mg/kg/day, penicillin eradication, referral and benzathine prophylaxis with weight-based doses ${r(1)}. Benzathine penicillin is on the NEML. Echo is available at JDWNRH and the regional referral hospitals; handheld echo is acceptable where standard echo is not ${r(2)} ${LB.loc()}. Keep a prophylaxis register and card for every child.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `
${tbl(["Feature", "Detail"], [
["Cause", "Autoimmune reaction 2–4 weeks after GAS pharyngitis (skin infection may also contribute) " + r(1) + r(2)],
["Age", "Mostly 5–15 years; recurrences in adolescents and young adults"],
["What harms", "Carditis — each recurrence scars the valves further (mitral first, then aortic) " + r(2)],
["Chorea", "10–30% of children; often months after the throat infection, when other signs have gone " + r(3)],
["Prognosis", "Arthritis and chorea resolve completely; carditis may leave chronic RHD " + r(3)],
["Silent RHD", "School echo screening (5–19 years) finds many children with no history of ARF " + r(2)]
])}
` },
{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Molecular mimicry", [F.s("GAS throat infection"), F.a, F.s("Antibodies and T cells cross-react with heart, joints, brain (basal ganglia), skin"), F.a, F.s("Pancarditis — valvulitis is what matters"), F.a, F.e("Repeated attacks → fused, scarred valves (RHD)")])}
<p>Throat cultures are often negative by the time ARF appears; ASO and anti-DNase B peak 3–6 weeks after the sore throat ${r(3)}.</p>
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "WHO 2024", "AHA / Merck 2026", "This guide"], [
["Anti-inflammatory", "Aspirin 60 mg/kg/day", "No recommendation for or against (no proven effect on RHD)", "Aspirin 15–25 mg/kg 4 × daily (max 4–6 g/day) or naproxen 7.5–10 mg/kg twice daily", "Aspirin for symptoms; naproxen if aspirin not tolerated " + r(1) + r(3)],
["Steroids", "—", "No recommendation", "Prednisone instead of aspirin for moderate–severe carditis", "Specialist decision for moderate–severe carditis " + r(3)],
["Injection interval", "Monthly", "BPG first line; interval not specified", "Every 3–4 weeks; 3 weeks better in high-endemic areas", "Every 4 weeks; 3 weeks after a breakthrough attack " + r(3)],
["No carditis — duration", "Not readable in the available STG text", "Follow national guidance", "5 years or until age 21, whichever is longer", "AHA " + r(3)],
["Carditis — duration", "Until 25 or 10 years after last attack (longer)", "—", "10 years or until 21 (no residual damage); longer with residual disease", "STG " + r(1)],
["Throat infection without a test", "—", "Treat clinically suspected GAS in children where testing is unavailable", "Test first", "Treat " + r(2)]
])}
` },
{ id: "presentation", title: "Jones criteria and clinical features", html: `
<h3>Revised Jones criteria — moderate/high-risk populations (use in Bhutan)</h3>
${tbl(["Major", "Minor"], [
["Carditis — clinical and/or subclinical (echo valvulitis)", "Monoarthralgia"],
["Arthritis — mono- or polyarthritis, or polyarthralgia (after excluding other causes)", "Fever ≥ 38 °C " + LB.exp("AHA 2015; WHO TABLE PRINTS 38.5")],
["Sydenham chorea", "ESR ≥ 30 mm/h and/or CRP ≥ 3.0 mg/dL (peak values)"],
["Erythema marginatum", "Prolonged PR interval for age (unless carditis is counted as major)"],
["Subcutaneous nodules", ""]
])}
<p><b>Initial attack:</b> 2 major, or 1 major + 2 minor. <b>Recurrence:</b> 2 major, 1 major + 2 minor, or 3 minor. All need evidence of preceding GAS infection — except chorea alone, once other causes are excluded. A joint feature counts as major or minor, not both ${r(2)} ${r(3)}.</p>
<p><b>Evidence of GAS:</b> raised or rising ASO or anti-DNase B, positive throat culture or rapid antigen test, or recent scarlet fever ${r(1)} ${r(3)}.</p>
<h3>Features</h3>
<ul>
<li><b>Arthritis:</b> painful, hot, migrating large joints (knees, ankles, elbows, wrists); responds dramatically to aspirin within 24–48 hours — if not, rethink the diagnosis ${r(3)}.</li>
<li><b>Carditis:</b> new murmur (apical pansystolic of MR, early diastolic of AR), tachycardia out of proportion to fever, heart failure, pericardial rub.</li>
<li><b>Chorea:</b> jerky movements, milkmaid's grip, darting tongue, clumsiness, emotional lability; may appear months later ${r(3)}.</li>
<li><b>Skin:</b> erythema marginatum (pink rings on the trunk), painless nodules over extensor surfaces — usually with carditis ${r(3)}.</li>
</ul>
<h3>The typical patient</h3>
<p>A 10-year-old (27 kg) in Mongar has fever and painful swollen knees and ankles moving joint to joint, 3 weeks after a sore throat; new apical pansystolic murmur, ASO raised, ESR 80. <b>ARF with carditis</b>: benzathine penicillin 6 lakh units IM, aspirin, echo, rest, register for 4-weekly prophylaxis until at least 25 years of age ${r(1)}.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue", "Action"], [
["Septic arthritis", "One hot joint, high fever, not migrating", "Aspirate before antibiotics"],
["Juvenile idiopathic arthritis", "Persistent, not migratory; poor aspirin response", "Rheumatology " + r(3)],
["Reactive / viral arthritis", "No carditis, normal ASO", "Observe"],
["Infective endocarditis", "Known RHD, fever, embolic signs", "Blood cultures × 3"],
["Leukaemia", "Bone pain, pallor, bruising, cytopenias", "Blood film before steroids"],
["Sickle cell crisis, SLE, Lyme", "Rare in Bhutan", "Specific tests " + r(3)],
["Chorea from other causes", "Drugs, Wilson's, SLE, hyperthyroidism", "Exclude before diagnosing chorea alone"]
])}
` },
{ id: "invest", title: "Investigations", html: `
<ul>
<li>FBC, ESR, CRP; ASO and, if available, anti-DNase B; throat swab culture ${r(1)}.</li>
<li>ECG (PR interval, heart block) and chest X-ray ${r(1)}.</li>
<li><b>Echocardiography in every suspected case</b> — finds subclinical carditis and changes how long prophylaxis lasts; handheld echo is acceptable ${r(1)} ${r(2)}.</li>
<li>Blood film if steroids are planned (exclude leukaemia).</li>
<li>Follow-up: ESR and CRP to monitor activity; CRP falls faster than ESR ${r(3)}.</li>
</ul>
` },
{ id: "staging", title: "Prophylaxis calculator", html: `<div class="calc" data-calc="rhdprophylaxis"></div>` },
{ id: "manage", title: "Management", html: `
<h3>1. Eradicate streptococcus</h3>
<p>${dr("benzathine_pen", "Benzathine penicillin G")} IM once — 6 lakh units under 30 kg, 12 lakh units 30 kg and over (STG weight bands); this is also the first prophylactic dose. Alternative: phenoxymethylpenicillin 250 mg for 10 days (STG) ${r(1)}.</p>
<h3>2. Control inflammation</h3>
<ul>
<li><b>Arthritis or mild carditis:</b> ${dr("aspirin")} — STG 60 mg/kg/day in divided doses; Merck 15–25 mg/kg 4 times a day (max 4–6 g/day) for 2–4 weeks, then taper over 4 weeks. Stop if tinnitus, headache or fast breathing (salicylism) ${r(1)} ${r(3)}.</li>
<li>Naproxen 7.5–10 mg/kg twice daily if aspirin is not tolerated. Paracetamol does not work for ARF symptoms ${r(3)}.</li>
<li><b>Moderate–severe carditis:</b> oral prednisolone instead of aspirin, 2–4 weeks then tapered over 2–3 weeks, with aspirin started during the taper; IV methylprednisolone 30 mg/kg (max 1 g) daily for 3 days if not controlled or in severe heart failure (specialist) ${r(3)}. Dose 1–2 mg/kg/day ${LB.exp("PREDNISOLONE DOSE")}.</li>
<li>WHO found no proof that anti-inflammatories prevent RHD — they treat symptoms ${r(2)}.</li>
</ul>
<h3>3. Heart failure</h3>
<p>Rest while symptomatic, ${dr("furosemide")}, ACE inhibitor; refer to the paediatric cardiologist. Strict bed rest has no proven value once symptoms settle ${r(3)}. See ${P("hf-child", "Heart failure — children")}.</p>
<h3>4. Chorea</h3>
<p>Calm, safe environment; usually resolves over months. Disabling chorea: carbamazepine or valproate under specialist advice ${LB.exp("STANDARD PRACTICE")}. Chorea still needs full prophylaxis ${r(3)}.</p>
<h3>5. Secondary prophylaxis — the most important step</h3>
${tbl(["Category", "Duration"], [
["ARF without carditis", "5 years after the last attack or until age 21, whichever is longer " + r(3)],
["ARF with carditis (mild or healed)", "Until age 25 or 10 years after the last attack, whichever is longer " + r(1)],
["Chronic carditis / moderate–severe RHD", "At least until age 40; lifelong may be better " + r(1)],
["Screen-detected RHD (echo)", "Prophylaxis recommended in children and adolescents " + r(2)]
])}
<ul>
<li>Benzathine penicillin every 4 weeks; every 3 weeks after a breakthrough recurrence ${r(3)}.</li>
<li>Oral penicillin V 250 mg twice daily if injections are refused — less effective ${r(1)} ${r(2)}.</li>
<li>Pain: lidocaine may be added to the injection ${r(2)}.</li>
<li>Allergy: mild past rash → an oral penicillin test dose before BPG; true allergy → a macrolide (erythromycin) ${r(2)}.</li>
<li>Support adherence: register, reminders, home visits, school links ${r(2)}.</li>
</ul>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("benzathine_pen"), "Under 30 kg: 6 lakh units; 30 kg+: 12 lakh units deep IM " + r(1), "Every 4 weeks (3 if recurrences)"],
["Phenoxymethylpenicillin", "250 mg twice daily (prophylaxis); 250 mg × 10 days (eradication) " + r(1), "Less effective than BPG"],
[dr("aspirin"), "60 mg/kg/day divided (STG) or 15–25 mg/kg 4 × daily, max 4–6 g/day (Merck) " + r(1) + r(3), "Watch for salicylism"],
["Naproxen", "7.5–10 mg/kg twice daily " + r(3), "Liver toxicity reported " + r(2)],
[dr("prednisolone"), "1–2 mg/kg/day " + LB.exp("DOSE") + ", 2–4 weeks then taper " + r(3), "Moderate–severe carditis"],
[dr("furosemide"), "1 mg/kg " + LB.exp("DOSE"), "Heart failure"],
["Erythromycin", "250 mg twice daily " + LB.exp("DOSE"), "True penicillin allergy " + r(2)]
])}
` },
{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>Girls and young women:</b> RHD often first shows in pregnancy; echo in antenatal care where RHD is common; continue benzathine in pregnancy ${r(2)}. See ${P("rhd-adult", "RHD — adults")}.</li>
<li><b>Monastic schools and boarding schools:</b> crowding spreads GAS; screen and treat sore throats promptly ${LB.loc()}.</li>
<li><b>Remote villages:</b> arrange injections at the nearest BHU on a fixed day ${LB.loc()}.</li>
</ul>
` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Painful injections causing defaulting", "Lidocaine-diluted BPG, distraction, warm vial to room temperature, family support " + r(2)],
["Past mild penicillin rash", "Oral penicillin test dose, then BPG " + r(2)],
["Anaphylaxis history", "Erythromycin; never BPG " + r(2)],
["Isolated chorea, normal ASO", "Still ARF once other causes are excluded; full prophylaxis " + r(3)],
["Aspirin gives no relief in 48 h", "Reconsider the diagnosis (JIA, septic arthritis, leukaemia) " + r(3)],
["Missed injections for months", "Restart; echo; increase support"]
])}
` },
{ id: "complications", title: "Complications", html: `<p>Mitral regurgitation and later stenosis, aortic regurgitation, heart failure, AF, stroke, infective endocarditis, pulmonary hypertension; salicylate toxicity; steroid side effects.</p>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Echo yearly (more often if moderate–severe); clinical review with each injection.</li><li>Yearly ASO, CBC and ESR (STG) ${r(1)}.</li><li>Dental care; injection register and prophylaxis card.</li></ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Erythema marginatum", src: "images/erythema-marginatum.jpg", mod: "Clinical photograph", ctx: "Acute rheumatic fever", loc: "Trunk", find: "Pink rings with clear centres, non-itchy, fleeting", signs: "Erythema marginatum", interp: "Major Jones criterion", by: "Adsie / Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Erythema_marginatum.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("Suspected ARF", [F.s("Migratory arthritis, carditis or chorea after a sore throat"), F.a, F.s("ESR/CRP, ASO, ECG, echo"), F.a, F.d("Jones criteria met?"), F.a, F.b([["Yes", F.e("BPG now + aspirin (steroid if moderate–severe carditis); register")], ["No", F.ok("Look for other causes; review in 1–2 weeks")]]), F.a, F.ok("BPG every 4 weeks for years; yearly echo")])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["No echo", "Silent carditis missed; prophylaxis too short", "Echo every case " + r(2)],
["Stopping prophylaxis early", "Recurrence, more valve damage", "Use the duration table"],
["Aspirin before the diagnosis is clear", "Masks migration of arthritis", "Paracetamol briefly while assessing " + LB.exp("STANDARD PRACTICE")],
["Steroids without a blood film", "Masks leukaemia", "Film first"],
["Ignoring chorea", "Missed ARF", "Chorea alone is enough " + r(3)]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Benzathine dose for a 25 kg child?", "6 lakh (600,000) units deep IM every 4 weeks.")}
${qa("Intern/MO", "Minimum criteria for a first ARF attack?", "Evidence of GAS + 2 major, or 1 major + 2 minor Jones criteria; chorea alone is enough.")}
${qa("Registrar", "Prophylaxis duration for a 12-year-old with mild carditis?", "Until age 25 or 10 years after the last attack — here age 25 (STG).")}
${qa("Registrar", "Arthritis has not improved after 48 hours of aspirin — next?", "Reconsider the diagnosis: JIA, septic arthritis, leukaemia.")}
${qa("Specialist", "What does WHO 2024 say about steroids for preventing RHD?", "No recommendation either way — evidence is too weak; steroids may help symptoms.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §2.4 Acute rheumatic fever.</li>
<li id="ref-2">World Health Organization. WHO guideline on the prevention and diagnosis of rheumatic fever and rheumatic heart disease. Geneva: WHO; 2024. <a href="https://www.who.int/publications/i/item/9789240100077" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">Merck Manual Professional Edition. Rheumatic fever (last updated Jan 2026); Gewitz MH, Baltimore RS, Tani LY, et al. Revision of the Jones criteria for the diagnosis of acute rheumatic fever in the era of Doppler echocardiography. Circulation 2015;131:1806–1818. <a href="https://doi.org/10.1161/CIR.0000000000000205" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000000205</a></li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Bhutan STG §2.4", "<span class='pass'>Read</span>", "No-carditis duration not readable"], ["WHO 2024", "<span class='pass'>Read</span>", "Recommendations and Jones table"], ["Merck (Jan 2026)", "<span class='pass'>Read</span>", "Doses and durations"], ["AHA 2015 original", "<span class='unv'>Not read</span>", "Publisher page blocked automated access; read via WHO table"], ["Fever threshold", "<span class='flag'>Conflict</span>", "WHO table 38.5 °C for both; AHA ≥ 38 °C moderate/high-risk"], ["Calculator", "<span class='pass'>Corrected</span>", "No-carditis duration now AHA 5 y / age 21"]], "qc")}` }
]
});
})();
