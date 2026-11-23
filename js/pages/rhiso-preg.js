/* Rh (RhD) isoimmunisation and haemolytic disease of the fetus and newborn (BSH 2014, RCOG GTG 65/22) */
registerPage({
id: "rhiso-preg",
title: "Rh Isoimmunisation & Haemolytic Disease of the Newborn",
subtitle: "Group every pregnant woman, give anti-D to non-sensitised Rh-negative women after sensitising events and at delivery, follow sensitised women with titres and MCA Doppler, and prepare the newborn team",
age: "Pregnant women & newborns", specs: ["obg", "neo", "nicu"],
keywords: ["Rh isoimmunisation", "rhesus disease", "anti-D", "haemolytic disease of the fetus and newborn", "HDFN", "Kleihauer", "MCA Doppler", "hydrops", "exchange transfusion", "intrauterine transfusion", "Rh negative"],
related: ["neojaundice-child", "miscarriage-preg", "aph-preg", "ectopic-preg", "transfusion-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Group</h4><p>ABO/Rh + antibody screen at booking and 28 weeks.</p></div>
<div><h4>Prevent</h4><p>${dr("anti_d", "Anti-D")} within 72 h of events and after delivery of Rh+ baby.</p></div>
<div><h4>Sensitised</h4><p>Titres, MCA Doppler, fetal medicine referral.</p></div>
<div><h4>Newborn</h4><p>Cord Hb, bilirubin, DAT; phototherapy/exchange.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Rh-negative blood group is uncommon in Bhutan (around 1% or less in South Asian populations), but sensitised pregnancies need referral to JDWNRH. Anti-D is not on NEML 2025 — confirm supply with the blood bank early in pregnancy. Intrauterine transfusion is not available in-country (referral abroad). ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Sensitising events", html: `<p>Delivery, miscarriage (surgical or after 12 weeks), ectopic, termination, APH, abdominal trauma, ECV, amniocentesis/CVS, intrauterine death.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("HDFN", [F.s("Rh+ fetal cells enter Rh− mother"), F.a, F.s("Maternal anti-D IgG (next pregnancies)"), F.e("Fetal haemolysis → anaemia, hydrops, neonatal jaundice/kernicterus")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "UK (BSH)", "WHO/US", "This guide"], [["Post-20-week dose", "500 IU + Kleihauer", "1500 IU (300 µg)", "Either " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Sensitised pregnancy: rising titres, MCA peak systolic velocity over 1.5 MoM (fetal anaemia), hydrops on ultrasound.</li><li>Newborn: early jaundice (first 24 h), pallor, hepatosplenomegaly, hydrops.</li></ul><h3>The typical patient</h3><p>An Rh-negative 25-year-old has vaginal bleeding at 30 weeks; antibody screen negative. <b>Sensitising event after 20 weeks</b>: anti-D 500 IU (or 1500 IU) IM within 72 h, Kleihauer test, monitor; routine dose at 28 weeks if not given.</p>` },
{ id: "ddx", title: "Other causes of HDFN", html: `${tbl(["Cause", "Note"], [["ABO incompatibility", "Mother O, baby A/B — usually mild"], ["Anti-c, anti-Kell", "Not prevented by anti-D; Kell causes marrow suppression"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Maternal group and antibody screen; Kleihauer; titres (refer above 4 IU/mL anti-D); partner's group; MCA Doppler; newborn cord blood Hb, bilirubin, DAT, group.</p>` },
{ id: "staging", title: "Anti-D dose tool", html: `<div class="calc" data-calc="antiddose"></div><div class="calc" data-calc="nnjthreshold"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Non-sensitised: anti-D after events and delivery (± routine antenatal prophylaxis).</li><li>Sensitised: fetal medicine; MCA Doppler every 1–2 weeks from 18–20 weeks; intrauterine transfusion if anaemic (referral); plan delivery 34–37 weeks.</li><li>Newborn: early phototherapy, IVIG for rising bilirubin despite phototherapy, exchange transfusion, top-up transfusions for late anaemia.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("anti_d"), "250–1500 IU IM", "Within 72 h"], [dr("ivig"), "0.5–1 g/kg", "Newborn haemolysis (specialist)"]])}` },
{ id: "populations", title: "Next pregnancy", html: `<p>Sensitisation worsens with each pregnancy — early referral.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["No anti-D available after delivery", "Contact blood bank/JDWNRH urgently; give up to 10 days if delayed"]])}` },
{ id: "complications", title: "Complications", html: `<p>Hydrops, stillbirth, kernicterus, late anaemia.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Baby: Hb at 2, 4, 6 weeks (late anaemia), hearing, development.</p>` },
{ id: "images", title: "Images", html: `<p>See neonatal jaundice chapter.</p>` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Rh-negative pregnant woman", [F.d("Antibodies present?"), F.a, F.b([["No", F.ok("Anti-D after events/28 weeks/delivery")], ["Yes", F.e("Fetal medicine: titres, MCA Doppler")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Missing anti-D after miscarriage/APH", "Sensitisation", "Check group at every event"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Time limit for anti-D after a sensitising event?", "Within 72 hours (some benefit up to 10 days).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Qureshi H, Massey E, Kirwan D, et al. BCSH guideline for the use of anti-D immunoglobulin for the prevention of haemolytic disease of the fetus and newborn. Transfus Med. 2014;24:8-20. <a href="https://doi.org/10.1111/tme.12091" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
