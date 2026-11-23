/* Hepatocellular carcinoma — adults (EASL 2018, Bhutan hepatitis programme) */
registerPage({
id: "hcc-adult",
title: "Liver Cancer (Hepatocellular Carcinoma) — Adults",
subtitle: "Survey every patient with cirrhosis or chronic hepatitis B with ultrasound every 6 months, treat hepatitis B, and stage with BCLC to choose treatment",
age: "Adults", specs: ["onc", "gi", "medicine"],
keywords: ["hepatocellular carcinoma", "HCC", "liver cancer", "surveillance", "AFP", "cirrhosis", "hepatitis B", "BCLC", "TACE", "ablation", "sorafenib"],
related: ["cirrhosis-adult", "hepatitis-adult", "alcohol-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Liver cancer is among Bhutan's commonest cancers, driven by hepatitis B and alcohol-related cirrhosis. Found early by surveillance, it can be cured; found by symptoms, it rarely can.</p>
<div class="glance">
<div><h4>Who to survey</h4><p>Cirrhosis of any cause; HBV with high-risk features (age, family history, high viral load).</p></div>
<div><h4>How</h4><p>Ultrasound ± AFP every 6 months.</p></div>
<div><h4>Prevent</h4><p>Hepatitis B vaccine; ${dr("tenofovir_hbv", "tenofovir")} for eligible HBV; alcohol reduction.</p></div>
<div><h4>Treat</h4><p>By BCLC stage: resection/ablation, TACE, systemic therapy, palliative.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Hepatitis B vaccine has been in the birth schedule since the 1990s. Tenofovir is on the NEML; HCC treatment beyond surgery is by referral. Alcohol-related liver disease is a leading cause of death. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>About 90% of HCC arises in cirrhosis; HBV can cause HCC without cirrhosis.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Carcinogenesis", [F.s("Chronic injury (HBV, HCV, alcohol, fatty liver, aflatoxin)"), F.a, F.s("Cirrhosis, regenerative nodules, dysplasia"), F.a, F.e("HCC")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "EASL", "AASLD/APASL", "This guide"], [["AFP in surveillance", "Optional", "Ultrasound ± AFP", "Ultrasound + AFP " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Early: none.</li><li>Late: right upper quadrant pain, weight loss, mass, decompensation of known cirrhosis (ascites, jaundice, encephalopathy, variceal bleed), haemoperitoneum.</li></ul><h3>The typical patient</h3><p>A 52-year-old man with alcohol-related cirrhosis in Tsirang suddenly develops worsening ascites and weight loss; ultrasound shows a 6 cm liver mass, AFP 2,400 ng/mL. <b>This is probable HCC</b>: triple-phase CT, Child–Pugh and performance status, refer to oncology/hepatology.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Liver metastases", "Multiple, known primary, normal liver"], ["Hepatic abscess", "Fever, ultrasound"], ["Hydatid cyst", "Cyst with daughter cysts"], ["Haemangioma", "Typical imaging, normal AFP"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Triple-phase CT or MRI (arterial enhancement, washout: diagnostic in cirrhosis without biopsy); AFP; LFT, INR, albumin (Child–Pugh); HBV/HCV tests; biopsy if imaging atypical or no cirrhosis.</p>` },
{ id: "staging", title: "BCLC staging (simplified)", html: `${tbl(["Stage", "Features", "Treatment"], [["0–A (early)", "Single or up to 3 nodules ≤3 cm, preserved liver function, PS 0", "Resection, ablation, transplant"], ["B (intermediate)", "Multinodular, no invasion", "TACE"], ["C (advanced)", "Portal invasion or spread, PS 1–2", "Systemic (atezolizumab–bevacizumab, sorafenib, lenvatinib)"], ["D (terminal)", "Poor liver function or PS 3–4", "Palliative care"]])}` },
{ id: "manage", title: "Management", html: `<ul><li>Refer all to a multidisciplinary team.</li><li>Treat HBV with tenofovir (reduces recurrence).</li><li>Manage cirrhosis complications; avoid NSAIDs.</li><li>Palliative: analgesia (paracetamol up to 2–3 g/day, opioids with care in cirrhosis), ascites care, nutrition.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Use"], [[dr("tenofovir_hbv"), "Hepatitis B"], [dr("spironolactone_asc"), "Ascites"], [dr("lactulose"), "Encephalopathy"]])}` },
{ id: "populations", title: "HBV carriers", html: `<p>Asian men over 40 and women over 50 with HBV, and anyone with a family history of HCC, should be under surveillance even without cirrhosis.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Sudden abdominal pain and shock with known HCC", "Tumour rupture: resuscitate, refer for embolisation"]])}` },
{ id: "complications", title: "Complications", html: `<p>Rupture, portal vein thrombosis, liver failure, metastases (lung, bone).</p>` },
{ id: "followup", title: "Follow-up", html: `<p>After curative treatment: imaging every 3–6 months for 2 years.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "HCC in a cirrhotic liver", src: "images/hcc-ct.jpg", mod: "CT, arterial and portal venous phases", ctx: "Cirrhosis with HCC", loc: "Liver", find: "Arterially enhancing lesion with washout in the portal phase", signs: "Typical HCC enhancement", interp: "Diagnostic of HCC in cirrhosis without biopsy", by: "Guite K, Hinshaw L, Lee F", page: "https://commons.wikimedia.org/wiki/File:Arterial_and_portal_venous_phase_CT_of_cirrhosis_and_hepatocellular_carcinoma.jpg", lic: "CC BY 3.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Surveillance", [F.s("Cirrhosis/high-risk HBV: US ± AFP 6-monthly"), F.a, F.d("Nodule ≥1 cm or rising AFP?"), F.a, F.b([["Yes", F.e("Triple-phase CT/MRI → refer")], ["No", F.ok("Continue 6-monthly")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["No surveillance in cirrhosis", "Late diagnosis", "6-monthly ultrasound"], ["Ignoring sudden decompensation", "Hidden HCC", "Image the liver"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Surveillance for HCC in cirrhosis?", "Ultrasound (± AFP) every 6 months.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Management of hepatocellular carcinoma. J Hepatol. 2018;69:182-236. <a href="https://doi.org/10.1016/j.jhep.2018.03.019" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
