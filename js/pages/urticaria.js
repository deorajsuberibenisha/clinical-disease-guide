/* Urticaria and angioedema — all ages. Batch E-10, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §16.2.6 Urticaria (acute < 6 weeks, chronic > 6 weeks; wheals 30 min–24 h; history items; CBC/ESR/CRP in
   chronic; cetirizine daily od → bd; prednisolone 10 mg tds 5–7 days for severe exacerbation; calamine; refer if not responding) — filtered text;
   Merck Manual Professional 'Urticaria' (classification, causes, stepwise CSU treatment incl. up to 4-fold antihistamine, short prednisone
   30–40 mg, omalizumab/remibrutinib, angioedema, older adults); NICE CG57 (antihistamine use in eczema); NEML 2025 text. Not read: EAACI/GA²LEN/
   EuroGuiDerm/APAAACI 2022 guideline (Wiley site bot check — not bypassed), UAS7 instrument — marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "urticaria",
title: "Urticaria (hives) and angioedema — all ages",
subtitle: "Itchy wheals that each fade within 24 hours: check airway, breathing and circulation for anaphylaxis, look for a trigger, and give a non-sedating antihistamine every day — up-dosing for chronic urticaria",
age: "All ages", specs: ["derm", "emerg", "medicine", "paeds"],
keywords: ["urticaria", "hives", "wheals", "nettle rash", "angioedema", "acute urticaria", "chronic urticaria", "chronic spontaneous urticaria", "chronic inducible urticaria", "physical urticaria", "dermographism", "cold urticaria", "cholinergic urticaria", "cetirizine", "antihistamine up-dosing", "ACE inhibitor angioedema", "omalizumab"],
related: ["anaphylaxis-adult", "anaphylaxis-child", "rash-approach", "eczema", "thyroid-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Urticaria is the sudden appearance of itchy wheals (hives), angioedema (deeper swelling of lips, eyelids, tongue, hands, genitals) or both, from mast-cell histamine release. <b>Acute</b> urticaria lasts under 6 weeks; <b>chronic</b> more than 6 weeks ${r(1)} ${r(2)}. Acute is commoner (about 70%); fewer than 8% of acute cases become chronic ${r(2)}.</p>
<div class="glance">
<div><h4>First</h4><p>Breathing difficulty, wheeze, stridor, low blood pressure, vomiting, tongue or throat swelling = <b>anaphylaxis</b>: IM adrenaline ${r(2)} — ${P("anaphylaxis-adult", "adult")} / ${P("anaphylaxis-child", "child")}.</p></div>
<div><h4>Look for</h4><p>Drugs (NSAIDs, antibiotics, opioids, ACE inhibitors), foods, stings, infections (URTI, dental caries, H. pylori), contact, physical triggers ${r(1)} ${r(2)}.</p></div>
<div><h4>Treat</h4><p>Cetirizine 10 mg once daily, <b>taken every day</b> until no longer needed; twice daily if not controlled ${r(1)}. Chronic: up to 4 times the standard dose ${r(2)}.</p></div>
<div><h4>Not useful</h4><p>Topical steroids and topical antihistamines ${r(2)}. Oral steroid only short courses for severe flares ${r(1)} ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG: acute urticaria usually needs no blood test; in chronic urticaria check CBC, ESR and CRP; cetirizine once daily, increased to twice daily if not controlled, taken daily; prednisolone 10 mg three times daily for 5–7 days for a severe exacerbation; calamine lotion for soothing; refer if not responding ${r(1)}. NEML: cetirizine 10 mg, prednisolone 5 and 20 mg, calamine powder, adrenaline injection; fexofenadine and loratadine are not listed ${r(3)}.</p>`)}
` },
{ id: "overview", title: "Classification", html: `${tbl(["Type", "Features"], [
["Acute urticaria", "Under 6 weeks; usually type I hypersensitivity to drugs, foods, stings, infections " + r(2)],
["Chronic spontaneous urticaria", "Over 6 weeks without a consistent trigger; about 1% of people; often autoimmune or idiopathic; lasts months to years, usually resolves " + r(2)],
["Chronic inducible urticaria", "Known physical or non-physical trigger: pressure, cold, heat, sun, water (aquagenic), exercise and heat (cholinergic), contact " + r(1) + r(2)],
["Angioedema with wheals", "Histamine-mediated — treat like urticaria " + r(2)],
["Angioedema without wheals", "Often bradykinin-mediated (ACE inhibitors, hereditary) — antihistamines do not work; airway risk " + r(2)]
])}` },
{ id: "patho", title: "How it develops", html: `${F.chart("Mechanism", [F.s("Trigger (allergen, drug, infection, physical, autoimmune)"), F.a, F.s("Mast cell activation → histamine and mediators"), F.a, F.s("Superficial dermal oedema = wheal (< 24 h)"), F.a, F.d("Deeper dermis / subcutis?"), F.a, F.e("Angioedema (lips, tongue, larynx, gut)")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG", "Merck", "This guide"], [
["Antihistamine dose ceiling", "Once daily → twice daily", "Up to 4 times standard dose for chronic spontaneous urticaria (EAACI approach)", "Step up to 2× in primary care; specialist up to 4× " + r(1) + r(2) + " " + LB.int()],
["Oral steroid for severe flares", "Prednisolone 10 mg three times daily for 5–7 days", "Prednisone 30–40 mg once daily, short course, not long-term", "Short course only; either regimen " + r(1) + r(2)],
["Topical calamine", "Soothing", "Topical antihistamines/steroids not beneficial", "Calamine for comfort only " + r(1) + r(2)],
["EAACI 2022 guideline", "—", "Basis of Merck stepwise plan", LB.exp("NOT READ DIRECTLY")]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Feature", "Detail"], [
["Wheals", "Itchy, raised, red (less visibly red on dark skin) plaques; each lasts 30 minutes to 24 hours; move around " + r(1) + r(2)],
["Angioedema", "Swelling of lips, eyelids, tongue, hands, genitals; painful rather than itchy; slower to resolve; gut angioedema causes colicky pain " + r(1) + r(2)],
["History", "Onset, duration, recurrence, infections (URTI, dental caries, H. pylori), allergies, foods, drugs, contacts " + r(1)],
["Red flags", "Breathing or swallowing difficulty, hypotension, wheals lasting > 24 h with bruising (urticarial vasculitis), fever, joint pain " + r(2) + " " + LB.exp("VASCULITIS POINT NOT IN TEXT READ")]
])}
<div class="calc" data-calc="urtstep"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Anaphylaxis", "Wheals + airway, breathing, circulation or gut involvement"],
["Insect bites / papular urticaria", "Grouped persistent papules on exposed skin " + LB.exp()],
["Urticarial vasculitis", "Lesions > 24 h, burning, leave bruising " + LB.exp()],
["Erythema multiforme", "Fixed target lesions " + P("rash-approach", "rash approach")],
["Bradykinin angioedema", "No wheals, ACE inhibitor, family history " + r(2)]
])}` },
{ id: "invest", title: "Investigations", html: `${tbl(["Situation", "Tests"], [
["Acute urticaria", "Usually none " + r(1)],
["Chronic urticaria", "CBC (eosinophils), ESR, CRP " + r(1) + "; further tests guided by history (thyroid, H. pylori, stool for parasites) " + LB.exp()],
["Suspected drug or food allergy", "Specialist allergy assessment " + r(2)]
])}` },
{ id: "staging", title: "Severity and duration", html: `<p>Classify by duration (acute vs chronic) and by trigger (spontaneous vs inducible) ${r(2)}. A formal activity score (UAS7) is used in specialist care ${LB.exp("UAS7 NOT READ")}.</p>` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Emergency</h3>
<p>Angioedema of the mouth, throat or airway: adrenaline and admit; supply an auto-injector on discharge ${r(2)}.</p>
<h3>2. Acute urticaria</h3>
<ul><li>Find and remove the trigger (stop the drug) ${r(1)} ${r(2)}.</li><li>Cetirizine 10 mg once daily (twice daily if not controlled), taken daily until settled ${r(1)}.</li><li>Severe: short oral steroid course ${r(1)} ${r(2)}.</li><li>Cool baths, loose clothing, avoid hot water and scratching ${r(2)}; calamine for comfort ${r(1)}.</li></ul>
<h3>3. Chronic spontaneous urticaria (stepwise)</h3>
${tbl(["Step", "Treatment"], [
["1", "Standard-dose second-generation antihistamine every day (cetirizine 10 mg) " + r(2)],
["2", "Increase up to 4 times the standard dose, or switch antihistamine " + r(2)],
["3", "Specialist: omalizumab, ciclosporin, remibrutinib; H2 blockers and montelukast have limited evidence " + r(2)]
])}
<p>Avoid long-term systemic steroids ${r(2)}; avoid first-generation sedating antihistamines in daytime, especially in older adults ${r(2)}. Counsel that chronic urticaria lasts months and treatment must continue ${r(1)}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("cetirizine", "Cetirizine")} 10 mg — NEML ${r(3)}.</li>
<li>${D("fexofenadine", "Fexofenadine")} 180 mg, ${D("loratadine", "loratadine")} — alternatives, not on NEML ${r(2)} ${r(3)}.</li>
<li>${D("prednisolone", "Prednisolone")} — NEML; short courses only ${r(1)}.</li>
<li>${D("epinephrine", "Adrenaline")} — airway angioedema / anaphylaxis ${r(2)}.</li>
<li>${D("calamine", "Calamine")} — NEML powder (lotion compounded) ${r(3)}.</li>
<li>${D("omalizumab", "Omalizumab")} — specialist, refractory chronic urticaria ${r(2)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Older adults", "Avoid hydroxyzine/diphenhydramine (confusion, retention, delirium); use second-generation antihistamines " + r(2)],
["Children", "Viral infections are common triggers; weight-appropriate antihistamine dose " + LB.exp()],
["People on ACE inhibitors", "Angioedema without wheals — stop the drug " + r(2)],
["Women 30–50", "Most common group for chronic spontaneous urticaria " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Child with hives 1 day after a cold, playing normally", "Acute urticaria: cetirizine daily for some days; reassure " + r(1) + r(2)],
["Hives + lip swelling + wheeze after eating prawns", "Anaphylaxis — IM adrenaline " + P("anaphylaxis-adult", "anaphylaxis")],
["Daily hives for 3 months despite cetirizine 10 mg", "Chronic spontaneous: CBC/ESR/CRP; step up dose; refer if uncontrolled " + r(1) + r(2)],
["Swollen tongue, no hives, on enalapril", "ACE-inhibitor angioedema: airway, stop drug, admit " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul><li>Airway obstruction from laryngeal or tongue angioedema ${r(2)}.</li><li>Sleep loss, poor quality of life in chronic urticaria ${LB.exp()}.</li><li>Steroid side effects with repeated courses ${r(2)}.</li></ul>` },
{ id: "followup", title: "Follow-up", html: `<p>Refer to a higher centre if not responding ${r(1)}. Chronic urticaria: review regularly; step down antihistamine when controlled ${LB.exp()}.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Urticaria (wheals)", src: "images/urticaria-hives.jpg", mod: "Clinical photograph", ctx: "Urticaria", find: "Raised red wheals of different sizes", interp: "Each wheal fades within 24 hours", by: "Enochlau", page: "https://commons.wikimedia.org/wiki/File:Rash.jpg", lic: "CC BY-SA 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Wheals / swelling", [F.d("Airway, breathing, BP or gut involved?"), F.a, F.b([["Yes", F.e("Anaphylaxis: IM adrenaline")], ["No", F.d("Duration?")]]), F.a, F.b([["< 6 weeks", F.ok("Remove trigger; daily cetirizine")], ["> 6 weeks", F.s("CBC/ESR/CRP; daily antihistamine, step up; refer")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Antihistamine 'as needed'", "Wheals keep returning", "Take every day " + r(1) + r(2)],
["Repeated steroid courses", "Side effects without cure", "Antihistamine up-dosing; refer " + r(2)],
["Antihistamine for ACE-inhibitor angioedema", "Does not work (bradykinin)", "Stop the drug; airway " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Cut-off between acute and chronic urticaria?", "6 weeks.")}
${qa("Intern/MO", "How long does a single wheal last?", "30 minutes to 24 hours.")}
${qa("Specialist", "Second step in chronic spontaneous urticaria?", "Increase the second-generation antihistamine up to 4 times the standard dose (or switch).")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §16.2.6 Urticaria.</li>
<li id="ref-2">Merck Manual Professional Edition. Urticaria; accessed Nov 2026 (cites the EAACI/GA²LEN/EuroGuiDerm/APAAACI guideline, Allergy 2022, doi:10.1111/all.15090).</li>
<li id="ref-3">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §16.2.6", "<span class='pass'>Checked</span>", "Partly scrambled; readable parts used"],
["Merck urticaria", "<span class='pass'>Checked</span>", "Read"],
["EAACI 2022 guideline, UAS7", "<span class='unv'>Not read</span>", "Website bot check; marked"],
["Calculator", "<span class='pass'>Checked</span>", "STG + Merck steps"],
["Images", "<span class='pass'>Checked</span>", "Licensed Commons image"]
], "qc")}` }
]
});
})();
