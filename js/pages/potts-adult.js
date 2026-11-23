/* Spinal tuberculosis (Pott's disease) and bone/joint TB (WHO 2022, Garg 2011) */
registerPage({
id: "potts-adult",
title: "Spinal & Bone/Joint Tuberculosis (Pott's Disease)",
subtitle: "Back pain with constitutional symptoms or a gibbus is spinal TB until proven otherwise in Bhutan: image, get tissue for Xpert, treat for 12 months, and operate for cord compression or instability",
age: "Adults & children", specs: ["id", "ortho", "nsurg"],
keywords: ["Pott's disease", "spinal tuberculosis", "TB spondylitis", "gibbus", "paraplegia", "cold abscess", "psoas abscess", "osteoarticular TB", "TB arthritis", "MRI spine"],
related: ["tb-adult", "tb-child", "lbp-adult", "bonejoint-adult"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Suspect</h4><p>Chronic back pain, night pain, fever, weight loss, gibbus, weakness.</p></div>
<div><h4>Image</h4><p>MRI (best); X-ray: disc space loss, vertebral collapse.</p></div>
<div><h4>Confirm</h4><p>CT/ultrasound-guided biopsy/aspirate for Xpert + histology.</p></div>
<div><h4>Treat</h4><p>2HRZE + 10HR (12 months); surgery for deficit/instability.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Extrapulmonary TB is common in Bhutan; spinal TB is a leading cause of non-traumatic paraplegia. MRI at JDWNRH; spine surgery at JDWNRH. NTP provides drugs free; register as extrapulmonary TB. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Overview", html: `<p>Haematogenous spread to vertebral bodies (thoracolumbar), destroying the disc and adjacent vertebrae; cold abscess (paravertebral, psoas); kyphosis; cord compression. Other sites: hip, knee, wrist, dactylitis in children.${r(1)}</p>` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Pott's disease", [F.s("TB bacilli seed anterior vertebral body"), F.a, F.s("Disc and adjacent bodies destroyed, cold abscess"), F.e("Collapse → gibbus, cord compression → paraplegia")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "WHO", "Many spine surgeons", "This guide"], [["Duration", "6 months possible (insufficient evidence for longer)", "9–12 months", "12 months (bone/joint) " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Insidious back pain, stiffness, night sweats, weight loss; gibbus; neurological deficit; psoas abscess (groin mass, hip flexion).</li></ul><h3>The typical patient</h3><p>A 35-year-old in Samtse has 4 months of thoracic back pain, evening fevers, a small gibbus and new leg weakness. <b>Spinal TB with cord compression</b>: MRI, biopsy for Xpert, start HRZE, urgent spinal surgery referral for decompression.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Pyogenic spondylodiscitis", "Acute, high fever, Staph"], ["Metastases/myeloma", "Disc spared, older"], ["Brucellosis", "Livestock exposure, lumbar"], ["Osteoporotic collapse", "No abscess, elderly"]])}` },
{ id: "invest", title: "Investigations", html: `<p>ESR/CRP, FBC, HIV, CXR, MRI spine, image-guided biopsy (Xpert, culture, histology), sputum if cough.</p>` },
{ id: "staging", title: "Severity", html: `${tbl(["Feature", "Action"], [["Pain, no deficit, stable", "Medical treatment, brace"], ["Neurological deficit", "Urgent decompression + ATT"], ["Kyphosis over 30–40° / instability", "Surgical stabilisation"], ["Large abscess", "Drainage"]])}` },
{ id: "manage", title: "Management", html: `<ul><li>Anti-TB treatment: HRZE 2 months then HR to complete 12 months (osteoarticular).</li><li>Surgery: deficit, instability, deformity, non-response.</li><li>Rest initially, brace, physiotherapy, bladder/pressure care in paraplegia.</li><li>Nutrition; pyridoxine.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("isoniazid"), "5 mg/kg (child 10)", "12 months"], [dr("rifampicin"), "10 mg/kg (child 15)", "12 months"], [dr("pyrazinamide"), "25 mg/kg (child 35)", "2 months"], [dr("ethambutol"), "15 mg/kg (child 20)", "2 months"]])}` },
{ id: "populations", title: "Children", html: `<p>Higher risk of progressive kyphosis during growth; spina ventosa (dactylitis); weight-band FDCs.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Paradoxical worsening on treatment", "Continue ATT; image; steroids/surgery if compression"]])}` },
{ id: "complications", title: "Complications", html: `<p>Paraplegia, kyphosis, abscess, MDR-TB, drug toxicity.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Monthly clinical and LFT if symptoms; MRI at 6 and 12 months if needed; outcome reporting.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Pott's disease (ancient remains)", src: "images/potts-wellcome.jpg", mod: "Historical specimen photograph", ctx: "Spinal tuberculosis", loc: "Spine", find: "Angular kyphosis (gibbus)", interp: "Vertebral collapse from TB", by: "Wellcome Collection", page: "https://commons.wikimedia.org/wiki/File:Pott%27s_disease_in_a_mummy_of_a_priest_of_Ammon,_21st_Dynasty_Wellcome_M0019338.jpg", lic: "CC BY 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Chronic back pain + red flags", [F.s("MRI + biopsy (Xpert)"), F.a, F.d("Neuro deficit/instability?"), F.a, F.b([["Yes", F.e("Surgery + ATT")], ["No", F.ok("ATT 12 months")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Treating as mechanical back pain", "Paraplegia", "Ask about systemic symptoms"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Imaging of choice for spinal TB?", "MRI.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Garg RK, Somvanshi DS. Spinal tuberculosis: a review. J Spinal Cord Med. 2011;34:440-454. <a href="https://doi.org/10.1179/2045772311Y.0000000023" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
