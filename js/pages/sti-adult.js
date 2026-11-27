/* Sexually transmitted infections — adults. Thin-page upgrade Round 3, 27 Nov 2026 (id, stisyndrome calculator, image and related links kept).
   Sources: Bhutan STG 2024 ch. 9 (read from _work/stg-full.txt: §9.1 vaginal discharge — causes, signs, treat gonorrhoea + chlamydia + trichomonas on
   the same visit; Table 9.1 BV metronidazole 400 BD × 7 (avoid early pregnancy) or 2 g; candidiasis clotrimazole 200 mg × 3 nights or fluconazole 150
   (not in pregnancy); gonorrhoea ceftriaxone 250 mg IM + azithromycin 1 g (doxycycline if unavailable; azithromycin in pregnancy); chlamydia doxycycline
   100 BD × 7, azithromycin 1 g or erythromycin 500 6-hourly × 7; §9.2 urethral discharge — persistent: M. genitalium / trichomonas, refer; §9.3 genital
   ulcer — HSV commonest; treat herpes + syphilis same day; aciclovir TDS 10 d primary, 5 d recurrent; BPG 2.4 MU once (early) or weekly × 3 (late/unknown),
   procaine 1.2 MU × 20 d, doxycycline 14/30 d; chancroid ceftriaxone 250 mg or azithromycin 1 g; RPR at 6 months; §9.4 buboes);
   WHO 2024 STI guideline changes (WHO AWaRe comparison PDF in Bhutan Medical Library: gonorrhoea ceftriaxone 1 g IM monotherapy, cefixime 800 mg if no
   ceftriaxone, gentamicin 240 mg or spectinomycin 2 g + azithromycin 2 g if no cephalosporin; chlamydia doxycycline first, azithromycin in pregnancy or
   adherence concern, amoxicillin 500 mg 8-hourly × 7 or erythromycin in pregnancy if no azithromycin; syphilis BPG 2.4 MU, procaine 1.2 MU × 10 d,
   ceftriaxone 1 g × 10–14 d, erythromycin with caution; trichomonas metronidazole 400–500 mg BD × 7 d, 2 g only if adherence concern);
   CDC STI Treatment Guidelines 2021 (MMWR 70(4), library PDF, raw text read: ceftriaxone 500 mg (1 g if ≥ 150 kg); chlamydia doxycycline 7 d,
   azithromycin in pregnancy; HSV first episode aciclovir 400 mg TDS 7–10 d, recurrent 800 mg BD 5 d, suppression 400 mg BD; BV metronidazole 500 mg BD
   × 7 d; trichomonas women 500 mg BD × 7 d, men 2 g; NGU doxycycline; LGV doxycycline 21 d; chancroid; PID ceftriaxone + doxycycline + metronidazole;
   early latent BPG once, late latent 3 weekly doses; pregnancy: penicillin by stage); NACO India 2014 RTI/STI guideline (cefixime 400 + azithromycin 1 g
   for discharge; secnidazole 2 g; BPG 2.4 MU + azithromycin 1 g for non-herpetic ulcer; aciclovir 400 mg TDS × 7 d). */
(function () {
const P = (id, t) => `<a href="#/d/${id}">${t}</a>`;
registerPage({
id: "sti-adult",
title: "Sexually Transmitted Infections — Adults",
subtitle: "Treat by syndrome on the same day when tests are unavailable, cover the likely organisms, test for HIV and syphilis, and treat partners",
age: "Adults & adolescents", specs: ["id", "derm", "obg"],
keywords: ["STI", "sexually transmitted infection", "urethral discharge", "vaginal discharge", "genital ulcer", "gonorrhoea", "chlamydia", "syphilis", "trichomonas", "bacterial vaginosis", "candidiasis", "herpes", "chancroid", "LGV", "inguinal bubo", "PID", "syndromic management", "partner notification", "RPR", "TPHA", "Mycoplasma genitalium"],
related: ["hiv-adult", "pid-adult", "uti-adult", "redeye-child", "rash-approach", "viral-skin"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">STIs are common, often silent, and raise the risk of HIV, infertility, ectopic pregnancy and congenital syphilis. Same-day treatment by syndrome, HIV and syphilis testing, and partner treatment break the chain ${r(1)} ${r(2)}.</p>
<div class="glance">
<div><h4>Discharge</h4><p>Treat gonorrhoea + chlamydia (and trichomonas in women) on the same visit: ${dr("ceftriaxone")} + ${dr("doxycycline")} (azithromycin in pregnancy) ± ${dr("metronidazole")} ${r(1)} ${r(2)}.</p></div>
<div><h4>Ulcer</h4><p>Treat syphilis + herpes the same day: ${dr("benzathine_pen", "benzathine penicillin")} 2.4 MU IM + ${dr("aciclovir")} ${r(1)}.</p></div>
<div><h4>Gonorrhoea dose</h4><p>WHO 2024: <b>ceftriaxone 1 g IM alone</b>; STG 2024 prints 250 mg + azithromycin 1 g ${r(1)} ${r(2)}.</p></div>
<div><h4>Every patient</h4><p>HIV and syphilis tests, condoms, partner notification and treatment, follow-up ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>STG 2024 chapter 9 uses the WHO 2021 syndromic flowcharts for PHC and hospitals ${r(1)}. Ceftriaxone, doxycycline, azithromycin, metronidazole, clotrimazole, fluconazole, aciclovir and benzathine penicillin are on the NEML ${LB.loc()}. Syphilis RDT/RPR and HIV testing are free at all levels; STI cases are reported through the national STI/HIV recording system ${LB.loc()}.</p>`)}
` },
{ id: "overview", title: "Syndromes and organisms", html: `
${tbl(["Syndrome", "Usual organisms", "Key point"], [
["Urethral discharge (men)", "N. gonorrhoeae, C. trachomatis; also M. genitalium, T. vaginalis", "Treat both gonorrhoea and chlamydia " + r(1)],
["Vaginal discharge", "Trichomonas, candida, bacterial vaginosis (vaginitis); gonorrhoea and chlamydia (cervicitis, often silent)", "Half of gonococcal infections in women are asymptomatic " + r(1)],
["Genital ulcer", "Herpes simplex (commonest), syphilis; chancroid, LGV, donovanosis less often", "Painful grouped vesicles = herpes; painless clean ulcer = syphilis " + r(1)],
["Inguinal bubo", "LGV, chancroid", "Doxycycline 21 days for LGV " + r(3)],
["Lower abdominal pain (women)", "Gonorrhoea, chlamydia, anaerobes (PID)", "See " + P("pid-adult", "PID")],
["Scrotal swelling", "Gonorrhoea, chlamydia (under 35); enteric organisms (older)", "Exclude testicular torsion first"]
])}
` },
{ id: "patho", title: "Why it matters", html: `
${F.chart("Untreated STI", [F.s("Silent cervical or urethral infection"), F.a, F.s("Ascends: PID, epididymitis; ulcers raise HIV transmission"), F.a, F.e("Infertility, ectopic pregnancy, chronic pain, congenital syphilis, neonatal conjunctivitis")])}
<p>Syphilis passes the placenta; treating the mother with penicillin treats the fetus ${r(2)} ${r(3)}.</p>
` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Infection", "Bhutan STG 2024", "WHO 2024", "CDC 2021", "India NACO 2014", "This guide"], [
["Gonorrhoea", "Ceftriaxone 250 mg IM + azithromycin 1 g", "Ceftriaxone 1 g IM alone", "Ceftriaxone 500 mg IM (1 g if ≥ 150 kg)", "Cefixime 400 mg + azithromycin 1 g " + r(4), "Ceftriaxone 1 g IM (WHO) " + r(2)],
["Chlamydia", "Doxycycline 7 d; azithromycin alternative", "Doxycycline first; azithromycin if pregnant or adherence concern", "Doxycycline 7 d", "Azithromycin 1 g", "Doxycycline; azithromycin in pregnancy " + r(2) + r(3)],
["Trichomonas", "Metronidazole 2 g or 400 mg BD × 7 d", "400–500 mg BD × 7 d; 2 g only if adherence concern", "Women 500 mg BD × 7 d; men 2 g", "Secnidazole 2 g", "7-day course for women " + r(2) + r(3)],
["Herpes first episode", "Aciclovir TDS × 10 d", "—", "Aciclovir 400 mg TDS × 7–10 d", "400 mg TDS × 7 d", "400 mg TDS × 7–10 d " + r(1) + r(3)],
["Syphilis alternative if no BPG", "Procaine 20 d; doxycycline", "Procaine 1.2 MU × 10 d (early), ceftriaxone 1 g × 10–14 d", "—", "—", "WHO " + r(2)]
])}
<p class="small">WHO increased the ceftriaxone dose and dropped routine azithromycin co-treatment because of rising gonococcal resistance ${r(2)}.</p>
` },
{ id: "presentation", title: "Assessment", html: `
<ul>
<li><b>History:</b> symptoms, last sexual contact, partners (number, sex), condom use, previous STIs, pregnancy and contraception, HIV status, drug allergy ${r(1)}.</li>
<li><b>Examination:</b> genitals and anus, inguinal nodes; speculum where possible — frothy yellow-green discharge (trichomonas), thick curdy white (candida), thin grey with fishy odour (BV), mucopurulent discharge and inflamed easily-bleeding cervix (gonorrhoea/chlamydia) ${r(1)}.</li>
<li>Men: milk the urethra if no discharge is seen ${r(1)}.</li>
<li>Look at the mouth, palms and soles, and skin for secondary syphilis.</li>
</ul>
<h3>The typical patient</h3>
<p>A 24-year-old man in Phuentsholing has 3 days of dysuria and urethral pus after unprotected sex. <b>Urethral discharge syndrome</b>: ceftriaxone 1 g IM + doxycycline 100 mg twice daily for 7 days, HIV and syphilis tests, condoms, and a partner slip; return if not better in 7 days ${r(1)} ${r(2)}.</p>
` },
{ id: "ddx", title: "Differential diagnosis", html: `
${tbl(["Condition", "Clue"], [
["Urinary tract infection", "Frequency, no discharge, urine dipstick positive"],
["Physiological discharge", "No itch, odour or pain; changes with the cycle"],
["Fixed drug eruption, Behçet's", "Recurrent non-infective ulcers " + P("pr-papular-fde", "FDE")],
["Scabies nodules, trauma", "Itch, burrows; history"],
["Genital warts", "Painless papules (HPV) " + P("viral-skin", "Viral skin")],
["Testicular torsion", "Sudden severe pain, high-riding testis — surgery now"]
])}
` },
{ id: "invest", title: "Investigations", html: `
<ul>
<li><b>Every STI patient:</b> HIV test and syphilis test (RDT or RPR with TPHA) ${r(1)}.</li>
<li>Urethral discharge: Gram stain and culture where available ${r(1)}.</li>
<li>Vaginal discharge: wet mount (trichomonas, clue cells), KOH (candida), pH; NAAT for gonorrhoea/chlamydia where available ${r(3)}.</li>
<li>Genital ulcer: syphilis serology (may be negative early); Tzanck smear or HSV PCR if available ${r(1)}.</li>
<li>Pregnancy test in women; hepatitis B where indicated.</li>
<li>Follow-up: RPR titre at 6 months after syphilis treatment — expect a fall ${r(1)}.</li>
</ul>
` },
{ id: "staging", title: "Syndromic tool", html: `<div class="calc" data-calc="stisyndrome"></div>` },
{ id: "manage", title: "Management", html: `
<h3>Treatment by infection</h3>
${tbl(["Infection", "First line", "Alternative / pregnancy"], [
["Gonorrhoea", "Ceftriaxone 1 g IM once (WHO 2024) " + r(2) + "; STG: 250 mg + azithromycin 1 g " + r(1), "No ceftriaxone: cefixime 800 mg once (with test of cure); no cephalosporin: gentamicin 240 mg IM or spectinomycin 2 g IM + azithromycin 2 g " + r(2)],
["Chlamydia / NGU", "Doxycycline 100 mg twice daily × 7 days " + r(1) + r(2), "Pregnancy: azithromycin 1 g once; then amoxicillin 500 mg 8-hourly × 7 d or erythromycin 500 mg 6-hourly × 7 d " + r(2)],
["Trichomonas", "Metronidazole 400–500 mg twice daily × 7 days " + r(2), "2 g once only if adherence is a concern; tinidazole 2 g (not pregnancy) " + r(2)],
["Bacterial vaginosis", "Metronidazole 400 mg twice daily × 7 days " + r(1), "STG: ideally avoid in early pregnancy; 2 g once or tinidazole 2 g " + r(1)],
["Candidiasis", "Clotrimazole 200 mg pessary × 3 nights " + r(1), "Fluconazole 150 mg once — not in pregnancy " + r(1)],
["Herpes, first episode", "Aciclovir 400 mg three times daily × 7–10 days " + r(1) + r(3), "Same in pregnancy " + r(1)],
["Herpes, recurrent", "Aciclovir 400 mg TDS × 5 days (STG) or 800 mg twice daily × 5 days (CDC) " + r(1) + r(3), "Frequent recurrences: suppressive aciclovir 400 mg twice daily (refer) " + r(3)],
["Syphilis — primary, secondary, early latent (< 1 year)", "Benzathine penicillin 2.4 MU IM once (split between buttocks) " + r(1), "No BPG: procaine penicillin 1.2 MU daily × 10 days or ceftriaxone 1 g daily × 10–14 days; doxycycline 100 mg BD × 14 days (not pregnancy) " + r(1) + r(2)],
["Syphilis — late latent or unknown", "Benzathine penicillin 2.4 MU IM weekly × 3 " + r(1), "Procaine 1.2 MU daily × 20 days; doxycycline × 30 days (not pregnancy) " + r(1) + r(2)],
["Chancroid", "Ceftriaxone 250 mg IM once or azithromycin 1 g once " + r(1), "Ciprofloxacin 500 mg BD × 3 days (not pregnancy) " + r(3)],
["LGV / bubo", "Doxycycline 100 mg twice daily × 21 days " + r(3), "Pregnancy: azithromycin 1 g weekly × 3 " + r(3)]
])}
<h3>Syndromic steps</h3>
<ul>
<li><b>Urethral discharge:</b> treat gonorrhoea + chlamydia the same day. Persistent after good adherence and partner treatment: think M. genitalium or trichomonas; refer for testing ${r(1)}.</li>
<li><b>Vaginal discharge:</b> treat gonorrhoea, chlamydia and trichomonas on the same visit; add candida or BV treatment by the speculum findings (follow the WHO pathway the facility can use) ${r(1)}.</li>
<li><b>Genital ulcer:</b> treat syphilis and herpes the same day if tests are not available; recurrent ulcers → treat as herpes ${r(1)}.</li>
<li>Penicillin allergy with syphilis in pregnancy: refer — penicillin remains the treatment of choice ${r(1)} ${r(3)}.</li>
</ul>
<h3>Partners and prevention</h3>
<ul><li>Notify and treat partners; no sex until 7 days after both are treated and symptoms have gone ${LB.exp("STANDARD ADVICE")}.</li><li>Condoms; HIV PrEP where offered; hepatitis B and HPV vaccination by national schedule.</li></ul>
` },
{ id: "drugs", title: "Medicines", html: `
${tbl(["Drug", "Dose", "Notes"], [
[dr("ceftriaxone"), "1 g IM once (gonorrhoea, WHO 2024); 250 mg (chancroid) " + r(2) + r(1), "Dissolve in lidocaine 1% for IM use " + LB.exp("PRACTICE")],
[dr("doxycycline"), "100 mg twice daily × 7 days (21 days LGV) " + r(1) + r(3), "Not in pregnancy"],
[dr("azithromycin"), "1 g once " + r(1), "Pregnancy chlamydia; chancroid"],
[dr("metronidazole"), "400–500 mg twice daily × 7 days " + r(2), "Avoid alcohol"],
[dr("clotrimazole"), "200 mg pessary × 3 nights " + r(1), "Candida"],
[dr("fluconazole"), "150 mg once " + r(1), "Not in pregnancy"],
[dr("benzathine_pen"), "2.4 MU IM once, or weekly × 3 " + r(1), "Have adrenaline ready"],
[dr("aciclovir"), "400 mg three times daily " + r(1), "7–10 days first episode"]
])}
` },
{ id: "populations", title: "Pregnancy, adolescents, HIV", html: `
<ul>
<li><b>Pregnancy:</b> screen for syphilis and HIV at booking; no doxycycline, fluconazole or tinidazole; chlamydia → azithromycin; syphilis → penicillin for the stage; treat the newborn as needed ${r(1)} ${r(2)} ${r(3)}.</li>
<li>Late pregnancy with genital herpes: refer — risk to the baby at delivery ${r(3)}.</li>
<li><b>Adolescents:</b> confidential, non-judgemental care; consider safeguarding where there is abuse.</li>
<li><b>HIV:</b> same regimens; herpes episodes may need longer courses (aciclovir 400 mg TDS 5–10 days) ${r(3)}. See ${P("hiv-adult", "HIV")}.</li>
</ul>
` },
{ id: "scenarios", title: "Hard situations", html: `
${tbl(["Situation", "What to do"], [
["Discharge persists after treatment", "Check adherence and partner treatment; reinfection? Consider M. genitalium, trichomonas, resistant gonorrhoea; culture and refer " + r(1) + r(2)],
["No ceftriaxone in stock", "Cefixime 800 mg once with test of cure " + r(2)],
["Partner refuses to attend", "Partner slip; offer treatment through the patient where policy allows " + r(3)],
["Child with an STI", "Child protection — sexual abuse until proved otherwise"],
["Pregnant woman, syphilis, penicillin allergy", "Refer for desensitisation; erythromycin does not treat the fetus reliably " + r(2)]
])}
` },
{ id: "complications", title: "Complications", html: `<p>PID, infertility, ectopic pregnancy, chronic pelvic pain; epididymo-orchitis; disseminated gonococcal infection; neurosyphilis, cardiovascular syphilis; congenital syphilis and stillbirth; neonatal conjunctivitis; increased HIV transmission ${r(3)}.</p>` },
{ id: "followup", title: "Follow-up", html: `<ul><li>Return if symptoms persist after 7 days ${r(1)}.</li><li>Syphilis: RPR at 6 months (and 12 months) ${r(1)} ${r(3)}.</li><li>Repeat HIV test after the window period if exposure was recent.</li></ul>` },
{ id: "images", title: "Images", html: `${fig({ title: "Primary syphilis chancre", src: "images/syphilis-chancre-tongue.jpg", mod: "Clinical photograph", ctx: "Primary syphilis", loc: "Tongue", find: "Painless indurated ulcer", signs: "Chancre", interp: "Chancres can occur outside the genitals; test and treat with benzathine penicillin", by: "CDC", page: "https://commons.wikimedia.org/wiki/File:Primary_stage_syphilis_sore_(chancre)_on_the_surface_of_a_tongue-CDC.jpg", lic: "Public domain" })}<p>For secondary syphilis and other rashes see the ${P("rash-approach", "Rash approach")} atlas.</p>` },
{ id: "flows", title: "Flowchart", html: `
${F.chart("STI syndrome", [F.s("History, examination (speculum if possible)"), F.a, F.d("Which syndrome?"), F.a, F.b([["Discharge", F.e("Ceftriaxone 1 g + doxycycline (± metronidazole in women)")], ["Ulcer", F.e("BPG 2.4 MU + aciclovir")], ["Pain (woman)", F.e("PID regimen")]]), F.a, F.ok("HIV + syphilis tests, condoms, partner treatment, review in 7 days")])}
` },
{ id: "pearls", title: "Pearls and pitfalls", html: `
${tbl(["Mistake", "Why harmful", "Prevention"], [
["Old low ceftriaxone dose", "Treatment failure as resistance rises", "1 g IM (WHO 2024) " + r(2)],
["Treating only the patient", "Reinfection", "Partner treatment"],
["Single-dose metronidazole for trichomonas in women", "Less effective", "7-day course " + r(2)],
["No syphilis test", "Missed latent and congenital syphilis", "Test every STI patient " + r(1)],
["Doxycycline in pregnancy", "Fetal harm", "Azithromycin " + r(2)]
])}
` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Urethral discharge in a man, no lab — treatment?", "Ceftriaxone 1 g IM once + doxycycline 100 mg twice daily for 7 days; HIV and syphilis tests; treat partner.")}
${qa("Intern/MO", "Painless clean genital ulcer — treatment?", "Benzathine penicillin 2.4 MU IM once (and aciclovir if herpes cannot be excluded); syphilis serology.")}
${qa("Registrar", "Chlamydia in pregnancy?", "Azithromycin 1 g once; amoxicillin 500 mg 8-hourly × 7 days if azithromycin is unavailable.")}
${qa("Registrar", "Latent syphilis of unknown duration?", "Benzathine penicillin 2.4 MU IM weekly for 3 weeks.")}
${qa("Specialist", "Why did WHO change gonorrhoea treatment in 2024?", "Rising ceftriaxone MICs — dose raised to 1 g as monotherapy; azithromycin co-treatment dropped.")}
` },
{ id: "refs", title: "References", html: `
<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, chapter 9 (§9.1–9.4, Tables 9.1 and 9.2).</li>
<li id="ref-2">World Health Organization. Updated recommendations for the treatment of Neisseria gonorrhoeae, Chlamydia trachomatis and Treponema pallidum (syphilis) and new recommendations on syphilis testing and partner services; Recommendations for the treatment of Trichomonas vaginalis, Mycoplasma genitalium, Candida albicans, bacterial vaginosis and human papillomavirus. Geneva: WHO; July 2024 (summary of differences from the AWaRe antibiotic book). <a href="https://www.who.int/publications/i/item/9789240090767" target="_blank" rel="noopener">who.int</a></li>
<li id="ref-3">Workowski KA, Bachmann LH, Chan PA, et al. Sexually transmitted infections treatment guidelines, 2021. MMWR Recomm Rep 2021;70(4):1–187. <a href="https://doi.org/10.15585/mmwr.rr7004a1" target="_blank" rel="noopener">doi:10.15585/mmwr.rr7004a1</a></li>
<li id="ref-4">National AIDS Control Organisation, Government of India. National guidelines on prevention, management and control of reproductive tract infections and sexually transmitted infections. July 2014.</li>
</ol>
` },
{ id: "qc", title: "Quality check and review status", html: `${tbl(["Check", "Result", "Note"], [["STG ch. 9", "<span class='pass'>Read</span>", "27 Nov 2026"], ["WHO 2024 changes", "<span class='pass'>Read</span>", "Comparison table"], ["CDC 2021", "<span class='pass'>Read</span>", "Library PDF"], ["Gonorrhoea dose", "<span class='flag'>Conflict</span>", "STG 250 mg vs WHO 1 g — WHO followed"], ["Calculator", "<span class='pass'>Updated</span>", "stisyndrome now gives WHO 2024 doses with STG note"]], "qc")}` }
]
});
})();
