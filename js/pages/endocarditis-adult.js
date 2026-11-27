/* Infective endocarditis — adults (children noted). NEW disease (batch N-2, 27 Nov 2026).
   Sources read directly: Merck Manual Professional 'Infective endocarditis' (last updated May 2025; read in browser incl. the regimen table adapted
   from AHA 2015 — streptococci (penicillin MIC ≤ 0.1): NVE penicillin G 12–18 MU/day × 4 wk or + gentamicin 3 mg/kg/day × 2 wk; PVE 24 MU/day × 6 wk;
   ceftriaxone 2 g daily 4 wk NVE / 6 wk PVE; vancomycin 15 mg/kg 12-hourly; MIC > 0.1: penicillin 24 MU/day 4 wk + gentamicin 2 wk; enterococci:
   ampicillin 2 g 4-hourly + ceftriaxone 2 g 12-hourly × 6 wk, or vancomycin + gentamicin; MSSA NVE: oxacillin/nafcillin 2 g 4-hourly × 6 wk, cefazolin
   2 g 8-hourly; PVE add gentamicin 2 wk + rifampin 6–8 wk; MRSA vancomycin; HACEK ceftriaxone 2 g × 4 wk; blood cultures ≥ 2, ideally 3 sets before
   antibiotics; empirical vancomycin + ceftriaxone in sick patients; surgery for heart failure, uncontrolled infection, embolic risk/vegetation > 10 mm;
   withhold anticoagulation with cerebral emboli; POET oral step-down after ≥ 10 days IV; AHA prophylaxis high-risk groups and procedures; 2023
   Duke-ISCVID criteria table — definite: 2 major, 1 major + 3 minor, or 5 minor; possible: 1 major + 1 minor or 3 minor);
   ESC 2023 endocarditis guideline via the BCR topic summary (TTE first, TOE if negative with high suspicion or prosthetic valve, repeat 5–7 days;
   native 2–6 weeks, prosthetic ≥ 6 weeks; first 2 weeks in hospital; emergency surgery for shock/refractory oedema) — full ESC text behind OUP
   access, marked; Bhutan priority zoonoses guideline 2025 via BCR (brucella endocarditis 1–2% but up to 80% of brucellosis deaths; Salmonella
   endovascular infection: ceftriaxone or ciprofloxacin 4–6 weeks); NEML 2025 (benzylpenicillin 5 MU, ampicillin 500 mg, cloxacillin 250 mg inj,
   cefazolin 500 mg at DH with surgeon, ceftriaxone 1 g, gentamicin 40 mg/mL, vancomycin 500 mg; rifampicin only for TB/LTBI; linezolid MDR-TB only).
   DOIs verified on Crossref: Baddour 2015, Fowler 2023, Delgado 2023, Iversen 2019. */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "endocarditis-adult",
title: "Infective Endocarditis",
subtitle: "Fever with a murmur is endocarditis until proved otherwise: take three blood cultures before any antibiotic, get an echo, give weeks of IV antibiotics chosen by the organism, and involve cardiac surgery early when the heart is failing or emboli threaten",
age: "Adults (children noted)", specs: ["cardio", "id", "medicine"],
keywords: ["infective endocarditis", "bacterial endocarditis", "IE", "SBE", "vegetation", "Duke criteria", "Duke-ISCVID 2023", "blood culture", "fever and murmur", "rheumatic heart disease endocarditis", "prosthetic valve endocarditis", "Staphylococcus aureus bacteraemia", "viridans streptococci", "enterococcus", "Osler nodes", "Janeway lesions", "splinter haemorrhages", "Roth spots", "endocarditis prophylaxis", "brucella endocarditis"],
related: ["rhd-adult", "rhd-child", "fever-approach", "brucellosis", "stroke-adult", "hf-adult", "aki-adult", "sepsis-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [

{ id: "glance", title: "At a glance", html: `
<p class="lead">Infective endocarditis (IE) is infection of a heart valve or the heart lining. In Bhutan the main background is <b>rheumatic valve disease</b>; prosthetic valves, injecting drug use and long-term lines add risk. Untreated it is fatal; even treated, mortality is high ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Fever with no clear source, especially with a murmur, known valve disease, a prosthetic valve, or embolic events (stroke, cold limb, haematuria) ${r(1)}.</p></div>
<div><h4>Cultures first</h4><p><b>At least 2, ideally 3 sets</b> of blood cultures from separate sites before antibiotics ${r(1)}.</p></div>
<div><h4>Echo</h4><p>Transthoracic first; transoesophageal if negative but suspicion is high, or prosthetic valve ${r(2)} ${r(3)}.</p></div>
<div><h4>Treat</h4><p>Weeks of IV antibiotics by organism (native 4–6, prosthetic ≥ 6); refer for surgery if heart failure, uncontrolled infection or large vegetation ${r(1)} ${r(3)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>There is no STG section on endocarditis. Echo is at JDWNRH and the regional referral hospitals; cardiac surgery needs referral abroad ${LB.loc()}. NEML 2025 lists benzylpenicillin, ampicillin, cloxacillin injection, cefazolin (district hospitals with a surgeon), ceftriaxone, gentamicin and vancomycin — enough for most regimens; rifampicin and linezolid are restricted to TB programmes ${r(5)}. Think of <b>brucella</b> endocarditis in livestock workers (1–2% of brucellosis, but up to 80% of brucellosis deaths) ${r(4)}. See ${P("brucellosis", "Brucellosis")}.</p>`)}
` },

{ id: "overview", title: "The disease in brief", html: `
${tbl(["Feature", "Detail"], [
["Who", "Rheumatic or other valve disease, prosthetic valve or repair, previous IE, congenital heart disease, injecting drug use, haemodialysis and long lines, devices; men about twice as often; risk rises with age " + r(1)],
["Organisms", "Viridans streptococci (dental), Staphylococcus aureus (skin, lines, drugs — fast and destructive), enterococci, HACEK, gram-negatives, fungi; brucella and Coxiella in livestock areas " + r(1) + r(4)],
["Acute vs subacute", "Acute (often S. aureus): days, sepsis, valve destruction. Subacute (streptococci): weeks of fever, weight loss, anaemia"],
["Native vs prosthetic", "Prosthetic valve IE needs longer treatment and more often surgery " + r(1)],
["Right-sided", "Tricuspid IE in injecting drug users — septic lung emboli " + r(1)]
])}
` },

{ id: "patho", title: "Pathophysiology", html: `
${F.chart("Infective endocarditis", [F.s("Damaged endothelium (scarred valve, jet lesion, prosthesis)"), F.a, F.s("Platelet–fibrin clot"), F.a, F.s("Bacteraemia (teeth, skin, lines) seeds the clot → vegetation"), F.a, F.e("Valve destruction → heart failure; emboli → stroke, spleen, kidney; immune complexes → glomerulonephritis")])}
<p>Bacteria inside biofilms on lines and devices respond poorly to antibiotics — infected devices usually must be removed ${r(1)}.</p>
` },

{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "AHA 2015 (Merck table)", "ESC 2023", "This guide"], [
["Duration, native valve streptococcal", "4 weeks (2 with gentamicin if fully sensitive)", "2–6 weeks by organism", "4 weeks; 2-week gentamicin regimen only for uncomplicated sensitive streptococcal NVE " + r(1) + r(2)],
["Oral step-down", "Not in the 2015 table; POET trial 2019 supports switch after ≥ 10 days IV in stable left-sided IE", "Allows partial oral therapy in selected stable patients", "Specialist decision after ≥ 10 days IV and stable " + r(1) + r(6)],
["Enterococcus", "Ampicillin + ceftriaxone preferred", "Similar", "Ampicillin + ceftriaxone (avoids gentamicin kidney damage) " + r(1)],
["Imaging", "Echo; PET-CT in Duke-ISCVID 2023", "Echo, CT, PET-CT", "TTE then TOE; CT for abscess/emboli where available " + r(3) + " " + LB.loc()]
])}
<p class="small">ESC 2023 points are from a published summary; the full guideline was not accessible ${r(2)}.</p>
` },

{ id: "presentation", title: "Clinical features", html: `
<ul>
<li><b>Fever</b> (≥ 38.0 °C) — often with sweats, weight loss, tiredness, anaemia ${r(3)}.</li>
<li><b>Murmur</b> — new regurgitation, or a change in a known rheumatic murmur.</li>
<li><b>Embolic signs</b>: stroke, cold limb, splenic or renal infarcts, septic lung infarcts (right-sided), mycotic aneurysm, conjunctival haemorrhages, Janeway lesions ${r(3)}.</li>
<li><b>Immunological signs</b>: Osler nodes (tender finger pads), Roth spots, glomerulonephritis (blood in urine) ${r(3)}.</li>
<li>Splinter haemorrhages, finger clubbing (long-standing), splenomegaly.</li>
<li>Heart failure from valve destruction; heart block (aortic root abscess).</li>
</ul>
<h3>The typical patient</h3>
<p>A 32-year-old farmer from Zhemgang with known rheumatic mitral regurgitation has had 5 weeks of evening fever, weight loss and joint aches; pansystolic murmur, splinter haemorrhages, splenomegaly, microscopic haematuria. <b>Probable subacute endocarditis</b>: three blood culture sets over an hour, then refer to JDWNRH for echo; if stable, wait for cultures before antibiotics ${r(1)}.</p>
` },

{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Acute rheumatic fever", "Young, migratory arthritis, ASO raised " + P("rhd-child", "ARF")],
["Tuberculosis", "Cough, lymph nodes, pleural or abdominal disease"],
["Brucellosis / enteric fever", "Livestock or raw milk; typhoid exposure " + P("brucellosis", "Brucellosis")],
["Lymphoma, SLE", "Nodes, rash, cytopenias, autoantibodies"],
["Atrial myxoma", "Emboli, no infection; echo mass"],
["Other causes of prolonged fever", "See " + P("fever-approach", "Fever approach")]
])}
` },

{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Blood cultures</b>: at least 2 (ideally 3) sets, each aerobic + anaerobic, 8–10 mL per bottle, from separate venepunctures with strict asepsis; in acute illness take them within 1–2 hours, then start antibiotics ${r(1)}.</li>
<li>Culture-negative: recent antibiotics, or fastidious organisms — brucella, Coxiella (Q fever), Bartonella serology/PCR ${r(1)} ${r(3)}.</li>
<li><b>Echocardiography</b>: TTE first; TOE if TTE is negative and suspicion is high, with a prosthetic valve, or to look for abscess; repeat in 5–7 days if suspicion remains ${r(2)}.</li>
<li>FBC (normocytic anaemia, raised WBC), ESR/CRP, creatinine, urine (haematuria, casts), ECG (new heart block = possible abscess) ${r(1)}.</li>
<li>CT brain if neurological signs; CT abdomen for splenic infarcts or abscess where available.</li>
</ul>
<h3>2023 Duke-ISCVID criteria (summary)</h3>
${tbl(["Major", "Minor"], [
["Microbiology: typical organism in ≥ 2 separate blood culture sets (≥ 3 for less typical organisms); Coxiella, Bartonella or T. whipplei by PCR or serology", "Predisposition: previous IE, prosthetic valve or repair, congenital heart disease, more than mild valve regurgitation or stenosis, device, HOCM, injecting drug use"],
["Imaging: vegetation, perforation, abscess, pseudoaneurysm or fistula on echo/CT; significant new regurgitation; new prosthetic dehiscence; abnormal valve uptake on PET-CT", "Fever ≥ 38.0 °C"],
["Surgical: IE seen at surgery", "Vascular: emboli, septic lung infarct, brain or spleen abscess, mycotic aneurysm, intracranial or conjunctival haemorrhage, Janeway lesions, purulent purpura"],
["", "Immunological: glomerulonephritis, Osler nodes, Roth spots, rheumatoid factor"],
["", "Microbiology not meeting major criteria"]
])}
<p><b>Definite</b>: 2 major, 1 major + 3 minor, or 5 minor. <b>Possible</b>: 1 major + 1 minor, or 3 minor ${r(3)}.</p>
` },

{ id: "staging", title: "Duke calculator and regimen helper", html: `<div class="calc" data-calc="ieplan"></div>` },

{ id: "manage", title: "Management", html: `
<h3>First steps</h3>
<ul>
<li>Stable patient: <b>take cultures and wait</b> for the organism where possible ${r(1)}.</li>
<li>Seriously ill: after cultures, start empirical treatment covering staphylococci and streptococci — e.g. ${dr("vancomycin")} + ${dr("ceftriaxone")} (add gentamicin for a recent prosthetic valve or healthcare-acquired infection) ${r(1)}.</li>
<li>Refer to a centre with cardiology and an endocarditis team; arrange cardiac surgical opinion early ${r(2)}.</li>
<li>Remove or change infected lines; drain abscesses; dental assessment and treatment ${r(1)}.</li>
</ul>
<h3>Organism-directed regimens (adults; AHA 2015 via Merck)</h3>
${tbl(["Organism", "Native valve", "Prosthetic valve", "Penicillin allergy"], [
["Streptococci, penicillin-sensitive (MIC ≤ 0.1)", dr("benzylpenicillin", "Benzylpenicillin") + " 12–18 MU/day IV (2–3 MU 4-hourly) × 4 weeks; or + gentamicin 3 mg/kg once daily × 2 weeks; or ceftriaxone 2 g daily × 4 weeks", "Benzylpenicillin 24 MU/day (4 MU 4-hourly) × 6 weeks; or ceftriaxone 2 g daily × 6 weeks", "Vancomycin 15 mg/kg 12-hourly × 4 (NVE) / 6 (PVE) weeks"],
["Streptococci, less sensitive (MIC > 0.1)", "Benzylpenicillin 24 MU/day × 4 weeks + gentamicin 3 mg/kg daily × 2 weeks", "Penicillin 24 MU/day or ceftriaxone 2 g daily × 6 weeks + gentamicin × 2 weeks", "Vancomycin as above"],
["Enterococci", dr("ampicillin") + " 2 g IV 4-hourly + ceftriaxone 2 g IV 12-hourly × 6 weeks", "Same", "Vancomycin 15 mg/kg 12-hourly + gentamicin × 6 weeks"],
["S. aureus, methicillin-sensitive", dr("cloxacillin", "Cloxacillin (oxacillin class)") + " 2 g IV 4-hourly × 6 weeks; or " + dr("cefazolin") + " 2 g 8-hourly", "Cloxacillin 2 g 4-hourly × 6–8 weeks + gentamicin 1 mg/kg 8-hourly × 2 weeks + rifampicin 300 mg 8-hourly × 6–8 weeks", "Vancomycin; cefazolin if no anaphylaxis"],
["S. aureus, methicillin-resistant (MRSA)", dr("vancomycin") + " 15 mg/kg 12-hourly × 6 weeks", "Vancomycin 6–8 weeks + gentamicin 2 weeks + rifampicin 6–8 weeks", "—"],
["HACEK", dr("ceftriaxone") + " 2 g daily × 4 weeks", "6 weeks", "Ciprofloxacin 400 mg IV 12-hourly or 1000 mg orally daily"]
])}
<p class="small">${r(1)}. Adjust gentamicin and vancomycin for kidney function; monitor vancomycin levels if over 2 g/day; dose by ideal weight in obesity ${r(1)}. Right-sided MSSA IE may need only 2–4 weeks with gentamicin; uncomplicated left-sided IE may switch to oral therapy after at least 10 days IV (POET) — specialist decision ${r(1)} ${r(6)}.</p>
<h3>Surgery — refer urgently when</h3>
<ul>
<li><b>Heart failure</b> (pulmonary oedema, cardiogenic shock — emergency) ${r(1)} ${r(2)}.</li>
<li><b>Uncontrolled infection</b>: persistent bacteraemia, fungal or resistant organisms, abscess, fistula, new heart block, enlarging vegetation, recurrent prosthetic IE ${r(1)}.</li>
<li><b>Emboli risk</b>: vegetation over 10 mm with an embolic event, or recurrent emboli ${r(1)}.</li>
<li>Infected pacemaker or defibrillator: remove the whole system ${r(1)}.</li>
<li>After a major stroke or brain haemorrhage, surgery is usually delayed about a month ${r(1)}.</li>
</ul>
<h3>Anticoagulation</h3>
<p>Withhold anticoagulation if there are cerebral emboli (risk of bleeding into the infarct); otherwise weigh stroke versus bleeding risk — for mechanical valves get specialist advice ${r(1)}.</p>
` },

{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Typical adult dose", "NEML 2025"], [
[dr("benzylpenicillin"), "2–4 MU IV 4-hourly (12–24 MU/day) " + r(1), "3 g (5 MU) vial " + r(5)],
[dr("ceftriaxone"), "2 g IV daily (enterococci: 2 g 12-hourly with ampicillin) " + r(1), "1 g vial " + r(5)],
[dr("ampicillin"), "2 g IV 4-hourly " + r(1), "500 mg vial " + r(5)],
[dr("cloxacillin"), "2 g IV 4-hourly " + r(1) + " " + LB.exp("OXACILLIN-CLASS EQUIVALENT"), "250 mg vial " + r(5)],
[dr("cefazolin"), "2 g IV 8-hourly " + r(1), "500 mg (DH with surgeon) " + r(5)],
[dr("vancomycin"), "15 mg/kg IV 12-hourly; levels if > 2 g/day " + r(1), "500 mg vial " + r(5)],
[dr("gentamicin"), "3 mg/kg once daily (streptococci) or 1 mg/kg 8-hourly (staph PVE, enterococci) " + r(1), "40 mg/mL " + r(5)],
[dr("rifampicin"), "300 mg 8-hourly (prosthetic staph IE) " + r(1), "TB/LTBI use only " + r(5)]
])}
<p class="small">Many vials are needed: e.g. ampicillin 2 g 4-hourly = 24 × 500 mg vials a day. Plan supply with the pharmacy ${LB.loc()}.</p>
` },

{ id: "populations", title: "Special groups", html: `
<ul>
<li><b>Rheumatic heart disease:</b> the commonest background in South Asia; keep benzathine prophylaxis going; dental care ${P("rhd-adult", "RHD")}.</li>
<li><b>Prosthetic valves:</b> longer therapy, more surgery, anticoagulation problems ${r(1)}.</li>
<li><b>Injecting drug use:</b> right-sided S. aureus; septic lung emboli; harm reduction ${r(1)}.</li>
<li><b>Pregnancy:</b> penicillins and cephalosporins are safe; avoid prolonged gentamicin where possible ${LB.exp("STANDARD PRACTICE")}.</li>
<li><b>Children:</b> mostly congenital heart disease; doses by weight — paediatric cardiology and ID advice.</li>
</ul>
` },

{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Antibiotics already started at a BHU", "Still take 3 culture sets now; ask about the drugs given; consider brucella/Q fever serology " + r(1)],
["Cultures negative, TTE shows vegetation", "Culture-negative IE: serology for brucella, Coxiella, Bartonella; empirical regimen with specialist " + r(3)],
["New heart block during treatment", "Aortic root abscess — urgent echo and surgical referral " + r(1)],
["Stroke on presentation", "No anticoagulation; CT; delay surgery about a month after major stroke " + r(1)],
["Fever persists after a week of correct antibiotics", "Look for abscess, emboli, line infection, drug fever, phlebitis " + r(1)]
])}
` },

{ id: "complications", title: "Complications", html: `<p>Heart failure, valve perforation, aortic root abscess and heart block, emboli (stroke, spleen, kidney, limbs), mycotic aneurysm, glomerulonephritis and AKI, antibiotic toxicity (gentamicin kidney and ear damage, vancomycin), relapse within 4 weeks, late sterile emboli and valve rupture up to a year later ${r(1)}.</p>` },

{ id: "followup", title: "Follow-up", html: `<ul><li>Fever usually settles in 3–7 days with streptococcal IE; staphylococcal IE responds more slowly ${r(1)}.</li><li>Echo at the end of therapy as a new baseline ${r(1)}.</li><li>Lifelong dental and skin hygiene; tell every dentist about the valve problem ${r(1)}.</li><li>Take blood cultures before any future antibiotic course for fever ${r(1)}.</li></ul>` },

{ id: "images", title: "Images", html: `<p>Osler nodes, Janeway lesions, splinter haemorrhages and Roth spots are shown in the Merck Manual image set (not reproduced) ${r(1)}.</p>` },

{ id: "flows", title: "Flowchart", html: `
${F.chart("Fever + murmur or valve disease", [F.s("3 blood culture sets (separate sites) before antibiotics"), F.a, F.d("Septic or unstable?"), F.a, F.b([["Yes", F.e("Empirical vancomycin + ceftriaxone; refer now")], ["No", F.s("Wait for cultures; echo (TTE → TOE)")]]), F.a, F.d("Duke-ISCVID definite / possible?"), F.a, F.b([["Yes", F.e("Organism-directed IV regimen 4–6+ weeks; surgical review")], ["No", F.ok("Look for other causes of fever")]])])}
` },

{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Antibiotics before cultures in a stable patient", "Culture-negative IE, wrong treatment", "Cultures first " + r(1)],
["Treating RHD fever as 'just rheumatic'", "Missed IE", "Cultures and echo"],
["Short oral courses for 'fever'", "Partial treatment, relapse", "Investigate prolonged fever " + P("fever-approach", "Fever")],
["Anticoagulating after a cerebral embolus", "Brain haemorrhage", "Withhold " + r(1)],
["Late surgical referral", "Irreversible heart failure", "Refer early when criteria met " + r(1)]
])}
` },

{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "How many blood culture sets before treating suspected IE?", "At least 2, ideally 3, from separate venepunctures.")}
${qa("Intern/MO", "Duke-ISCVID definite IE?", "2 major, 1 major + 3 minor, or 5 minor criteria.")}
${qa("Registrar", "Regimen for penicillin-sensitive streptococcal native-valve IE?", "Benzylpenicillin 12–18 MU/day or ceftriaxone 2 g daily for 4 weeks (2 weeks with gentamicin in uncomplicated cases).")}
${qa("Registrar", "Enterococcal IE regimen?", "Ampicillin 2 g 4-hourly + ceftriaxone 2 g 12-hourly for 6 weeks.")}
${qa("Specialist", "Indications for early surgery?", "Heart failure, uncontrolled infection (abscess, resistant organism, persistent bacteraemia), and vegetation > 10 mm with embolism.")}
` },

{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Merck Manual Professional Edition. Infective endocarditis (last updated May 2025), incl. table adapted from Baddour LM, Wilson WR, Bayer AS, et al. Infective endocarditis in adults: diagnosis, antimicrobial therapy, and management of complications. Circulation 2015;132:1435–1486. <a href="https://doi.org/10.1161/CIR.0000000000000296" target="_blank" rel="noopener">doi:10.1161/CIR.0000000000000296</a></li>
<li id="ref-2">Delgado V, Ajmone Marsan N, de Waha S, et al. 2023 ESC Guidelines for the management of endocarditis. Eur Heart J 2023;44:3948–4042. <a href="https://doi.org/10.1093/eurheartj/ehad193" target="_blank" rel="noopener">doi:10.1093/eurheartj/ehad193</a> (read via a published summary).</li>
<li id="ref-3">Fowler VG, Durack DT, Selton-Suty C, et al. The 2023 Duke-International Society for Cardiovascular Infectious Diseases criteria for infective endocarditis. Clin Infect Dis 2023;77:518–526. <a href="https://doi.org/10.1093/cid/ciad271" target="_blank" rel="noopener">doi:10.1093/cid/ciad271</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National guideline for the management of priority zoonoses, 2025 (brucellosis; Salmonella endovascular infection).</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
<li id="ref-6">Iversen K, Ihlemann N, Gill SU, et al. Partial oral versus intravenous antibiotic treatment of endocarditis (POET). N Engl J Med 2019;380:415–424. <a href="https://doi.org/10.1056/NEJMoa1808312" target="_blank" rel="noopener">doi:10.1056/NEJMoa1808312</a></li>
</ol>
` },

{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["Merck IE (May 2025) + AHA regimen table", "<span class='pass'>Read</span>", "27 Nov 2026"], ["Duke-ISCVID 2023", "<span class='pass'>Read</span>", "Via Merck table"], ["ESC 2023", "<span class='unv'>Summary only</span>", "Full text not accessible"], ["DOIs", "<span class='pass'>Verified</span>", "Crossref"], ["NEML 2025", "<span class='pass'>Checked</span>", "Rifampicin/linezolid TB-restricted"], ["Bhutan STG", "<span class='unv'>No section</span>", ""], ["Calculator", "<span class='pass'>New</span>", "ieplan"]], "qc")}` }
]
});
})();
