/* HIV — infants and children */
registerPage({
id: "hiv-child",
title: "HIV in Infants & Children",
subtitle: "Prevent transmission from mother to baby, test exposed infants early with PCR, start paediatric ABC/3TC/DTG by weight, and support families to keep children well",
age: "Infants & children", specs: ["paeds", "id"],
keywords: ["paediatric HIV", "PMTCT", "HIV-exposed infant", "infant prophylaxis", "early infant diagnosis", "pALD", "abacavir lamivudine dolutegravir paediatric", "nevirapine prophylaxis"],
related: ["hiv-adult", "tb-child", "sam-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Almost all childhood HIV comes from the mother and is preventable. Infected infants who do not start treatment have a high death rate in the first two years.</p>
<div class="glance">
<div><h4>Prevent</h4><p>Mother on ART with suppressed viral load; infant prophylaxis; safe feeding.</p></div>
<div><h4>Test</h4><p>HIV PCR at birth/6 weeks per national schedule; antibody tests unreliable under 18 months.</p></div>
<div><h4>Treat</h4><p>${dr("pald", "pALD")} dispersible by weight from 4 weeks and 6 kg.</p></div>
<div><h4>Prophylaxis</h4><p>Co-trimoxazole for HIV-exposed infants from 6 weeks.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan 2024: children over 4 weeks and 6 kg start ABC + 3TC + DTG paediatric FDC by weight; PMTCT chapter covers maternal ART and infant prophylaxis. pALD is on the NEML (NRH/RRH/DH). ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Transmission", html: `<p>In pregnancy, delivery and breastfeeding; risk rises with high maternal viral load. With maternal ART and infant prophylaxis, transmission falls below 2%.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Infant HIV", [F.s("Immature immunity → rapid progression"), F.a, F.e("Pneumonia, PCP, failure to thrive, TB, encephalopathy"), F.a, F.ok("Early ART changes survival")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Bhutan 2024", "WHO", "This guide"], [["First line", "pALD by weight", "DTG-based (pALD)", "Same " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Failure to thrive, recurrent pneumonia, persistent diarrhoea, oral thrush, lymphadenopathy, parotid swelling, developmental delay.</li></ul><h3>The typical patient</h3><p>An 8-month-old, 7 kg, born to a mother diagnosed late, has thrush and poor weight gain; PCR positive. <b>This is infant HIV</b>: start pALD 3 tablets daily, co-trimoxazole, TB screening, nutrition support, and treat the mother.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["SAM", "Nutritional history; test for HIV in all SAM"], ["TB", "Contact, chronic cough"], ["Primary immunodeficiency", "Rare; HIV test negative"]])}` },
{ id: "invest", title: "Investigations", html: `<p>HIV DNA/RNA PCR under 18 months; antibody test after 18 months and after weaning; CD4 %, Hb, TB screen.</p>` },
{ id: "staging", title: "ART dose tool", html: `<div class="calc" data-calc="hivdose"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>${dr("pald", "pALD")} once daily by weight: 6–9.9 kg 3 tablets; 10–13.9 kg 4; 14–19.9 kg 5; 20–24.9 kg 6; 25 kg+ adult regimen.</li><li>${dr("cotrimoxazole")} prophylaxis by weight.</li><li>HIV-exposed infants: prophylaxis per national PMTCT protocol (e.g. nevirapine ± zidovudine) and PCR testing; continue breastfeeding with maternal ART.</li><li>Growth, development, immunisation, nutrition.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("pald"), "3–6 tablets by weight", "Dispersible"], [dr("cotrimoxazole"), "By weight band", "Prophylaxis"]])}` },
{ id: "populations", title: "Adolescents", html: `<p>Disclosure, adherence, transition to adult care; TLD from 30 kg.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Mother diagnosed in labour", "Start maternal ART, enhanced infant prophylaxis, PCR at birth"]])}` },
{ id: "complications", title: "Complications", html: `<p>Opportunistic infections, growth failure, encephalopathy, TB.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Weight-adjusted doses at every visit; viral load per schedule.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Oral thrush", src: "images/oral-candidiasis.jpg", mod: "Clinical photograph", ctx: "Immunosuppression", loc: "Mouth", find: "White plaques", interp: "Persistent thrush beyond infancy: test for HIV", by: "CDC / Sol Silverman Jr", page: "https://commons.wikimedia.org/wiki/File:CandidiasisFromCDCinJPEG03-18-06.JPG", lic: "Public domain" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("HIV-exposed infant", [F.s("Prophylaxis + PCR per schedule"), F.a, F.d("PCR positive?"), F.a, F.b([["Yes", F.e("Start pALD now")], ["No", F.ok("Continue testing until after weaning")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Antibody test under 18 months", "Maternal antibodies mislead", "Use PCR"], ["Not adjusting dose as child grows", "Underdosing, resistance", "Weigh every visit"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "pALD dose for a 12 kg child?", "4 dispersible tablets once daily.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Ministry of Health, Bhutan. National guidelines on treatment and management of HIV/AIDS, 2024 (ART and PMTCT chapters).</li><li id="ref-2">World Health Organization. Consolidated guidelines on HIV, 2021, and WHO paediatric ARV dosing updates. <a href="https://www.who.int/publications/i/item/9789240031593" target="_blank" rel="noopener">who.int</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["pALD weight bands", "<span class='pass'>Checked</span>", "WHO 2023 dosing"]], "qc")}` }
]
});
