/* Contraception and emergency contraception (WHO MEC 5th ed, WHO FP Handbook 2022) */
registerPage({
id: "contraception-adult",
title: "Contraception & Emergency Contraception",
subtitle: "Offer the full range of methods, check medical eligibility with WHO MEC, start today when reasonably sure the woman is not pregnant, and never miss a chance to give emergency contraception",
age: "Women & couples", specs: ["obg", "ph"],
keywords: ["contraception", "family planning", "WHO MEC", "combined pill", "DMPA", "Depo-Provera", "implant", "copper IUD", "LNG-IUS", "emergency contraception", "levonorgestrel", "postpartum contraception", "LAM", "sterilisation", "vasectomy"],
related: ["aub-adult", "hiv-adult", "epilepsy-adult", "miscarriage-preg", "sti-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Most effective</h4><p>Implant, IUD, sterilisation (under 1% per year).</p></div>
<div><h4>Injectable</h4><p>${dr("dmpa", "DMPA")} 150 mg IM every 12 weeks (±4 weeks grace).</p></div>
<div><h4>Pill</h4><p>${dr("coc", "COC")} — check MEC (smoking 35+, migraine aura, BP, postpartum).</p></div>
<div><h4>Emergency</h4><p>Copper IUD (5 days) or ${dr("levonorgestrel_ec", "levonorgestrel 1.5 mg")}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Bhutan's family planning programme provides condoms, COC, POP, DMPA, implants (where available), copper IUDs, emergency contraception and sterilisation free at health facilities. Devices (IUDs, implants) are supplied through the programme rather than the medicines list. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Methods", html: `${tbl(["Method", "Typical-use failure/year", "Notes"], [["Implant", "0.1%", "3–5 years; irregular bleeding"], ["LNG-IUS / copper IUD", "0.2–0.8%", "5–10+ years; copper also EC"], ["Sterilisation", "0.15–0.5%", "Permanent; vasectomy simpler"], ["DMPA injection", "4%", "Every 12 weeks; delayed fertility return"], ["COC / POP", "7%", "Daily"], ["Condoms", "13%", "Also prevent STIs"], ["LAM", "2% (if criteria met)", "Exclusive breastfeeding, amenorrhoea, under 6 months"]])}${r(1)}` },
{ id: "patho", title: "How they work", html: `${F.chart("Mechanisms", [F.s("Hormonal: suppress ovulation, thicken cervical mucus"), F.a, F.s("Copper IUD: toxic to sperm and ovum"), F.e("Barrier: block sperm")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "WHO 2022", "This guide"], [["DMPA reinjection window", "2 weeks late", "Up to 4 weeks late", "WHO " + LB.loc()], ["Pelvic exam before pill", "Required", "Not needed", "Not needed"]])}` },
{ id: "presentation", title: "Counselling", html: `<ul><li>Reasonably sure not pregnant: no sex since last period/birth, correct contraception use, within 7 days of period, within 4 weeks postpartum (not breastfeeding), within 7 days of abortion, or fully breastfeeding and amenorrhoeic under 6 months.</li><li>Discuss effectiveness, side effects (bleeding changes), STI protection, return to fertility.</li></ul><h3>The typical patient</h3><p>A 24-year-old who delivered 6 weeks ago, breastfeeding, smokes, wants a reliable method. <b>Options</b>: implant, IUD, DMPA or POP (all MEC 1–2); avoid combined pill until 6 months if breastfeeding (MEC 3 at 6 weeks–6 months).</p>` },
{ id: "ddx", title: "Drug interactions", html: `${tbl(["Drug", "Effect", "Choose"], [["Rifampicin, carbamazepine, phenytoin, efavirenz", "Reduce COC/POP/implant efficacy", "DMPA, IUD"], ["Dolutegravir (TLD)", "No interaction", "Any"], ["Lamotrigine", "COC lowers lamotrigine levels", "Non-oestrogen method"]])}` },
{ id: "invest", title: "Investigations", html: `<p>BP before combined methods; pregnancy test if not reasonably certain; STI screen before IUD if high risk.</p>` },
{ id: "staging", title: "Quick eligibility tool", html: `<div class="calc" data-calc="contrachoice"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Start today (quick start) with backup condoms for 7 days (2 days for POP) if not within the first 5 days of the cycle.</li><li>Postpartum: IUD within 48 h or after 4 weeks; implant/POP/DMPA any time; COC from 6 weeks (not breastfeeding) / 6 months (breastfeeding).</li><li>Post-abortion: any method immediately.</li><li>Emergency: copper IUD within 5 days; LNG 1.5 mg (3 mg if BMI over 30 or enzyme inducers); then start ongoing method.</li><li>Missed pills: 1 missed — take ASAP; 2+ missed — take, 7 days backup, EC if in first week.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("coc"), "1 daily", "MEC check"], [dr("dmpa"), "150 mg IM every 12 weeks", "Grace 4 weeks"], [dr("levonorgestrel_ec"), "1.5 mg once", "EC"]])}` },
{ id: "populations", title: "Special groups", html: `<ul><li>Adolescents: all methods suitable, including LARCs; confidential services.</li><li>HIV: all methods; consider interactions with ART.</li><li>Women over 40: continue until menopause (age 55 or 1–2 years amenorrhoea).</li></ul>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["DMPA 5 weeks late", "Pregnancy test, EC if recent sex, reinject, backup 7 days"]])}` },
{ id: "complications", title: "Complications", html: `<p>VTE (combined), irregular bleeding (progestogen), IUD expulsion/perforation (rare), ectopic if failure.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Yearly BP on combined methods; DMPA every 12 weeks; IUD check at 6 weeks.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Copper IUD", src: "images/copper-iud.jpg", mod: "Photograph", ctx: "Long-acting contraception", loc: "Device", find: "T-shaped copper intrauterine device", interp: "Most effective emergency contraception; 10+ years' protection", by: "Mikael Häggström", page: "https://commons.wikimedia.org/wiki/File:Copper_IUD.jpg", lic: "CC0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Woman wanting contraception", [F.s("Reasonably sure not pregnant? EC needed?"), F.a, F.s("Preferences + WHO MEC"), F.a, F.ok("Start today; backup if needed; follow-up")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Waiting for next period to start", "Unintended pregnancy", "Quick start"], ["COC with rifampicin", "Failure", "DMPA/IUD"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Most effective emergency contraception?", "Copper IUD inserted within 5 days.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">World Health Organization. Medical eligibility criteria for contraceptive use, 5th ed. Geneva: WHO; 2015 (and 2025 update). <a href="https://www.who.int/publications/i/item/9789241549158" target="_blank" rel="noopener">who.int</a></li><li id="ref-2">World Health Organization & Johns Hopkins CCP. Family planning: a global handbook for providers, 2022 update.</li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["MEC categories", "<span class='pass'>Checked</span>", "WHO 5th ed"]], "qc")}` }
]
});
