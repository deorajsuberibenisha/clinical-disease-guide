/* Developmental delay and cerebral palsy (Novak 2017, AAP surveillance, WHO) */
registerPage({
id: "devdelay-child",
title: "Developmental Delay & Cerebral Palsy",
subtitle: "Ask about development at every visit, act on red flags and parental concern, check hearing and vision, diagnose cerebral palsy early, and start therapy and family support without waiting",
age: "Infants & children", specs: ["paeds", "neuro", "rehab"],
keywords: ["developmental delay", "global developmental delay", "milestones", "cerebral palsy", "spasticity", "autism", "speech delay", "hearing loss", "early intervention", "GMFCS", "baclofen", "red flags"],
related: ["asphyxia-child", "infspasm-child", "down-child", "ftt-child", "epilepsy-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<div class="glance">
<div><h4>Survey</h4><p>Milestones + parental concern every visit (Mother and Child Health Handbook).</p></div>
<div><h4>Red flags</h4><p>Regression, asymmetry, no words by 18 months, not walking by 18 months.</p></div>
<div><h4>Check</h4><p>Hearing, vision, growth, head size, thyroid.</p></div>
<div><h4>CP</h4><p>Diagnose early (high-risk infants), therapy, ${dr("baclofen")} for spasticity.</p></div>
</div>
${box("bt", "Bhutan note", `<p>Developmental screening uses the MCH handbook milestones; child development and rehabilitation services (physio, speech, OT) are at JDWNRH and regional hospitals, with community-based rehabilitation in districts. Baclofen is on the NEML; botulinum toxin is not. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Definitions", html: `${tbl(["Term", "Meaning"], [["Specific delay", "One domain (e.g. speech)"], ["Global developmental delay", "2+ domains under 5 years"], ["Cerebral palsy", "Permanent non-progressive motor disorder from early brain injury (prenatal to 2 years)"], ["Regression", "Loss of skills — always urgent (metabolic, Rett, epilepsy, autism)"]])}${r(1)}` },
{ id: "patho", title: "Causes", html: `${F.chart("Causes", [F.s("Prenatal: genetic (Down, fragile X), infection (TORCH), alcohol"), F.a, F.s("Perinatal: prematurity, HIE, kernicterus, hypoglycaemia"), F.a, F.s("Postnatal: meningitis, head injury, malnutrition, hypothyroidism, deprivation"), F.e("Delay/CP; hearing/vision loss compound it")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Older practice", "Novak 2017", "This guide"], [["CP diagnosis age", "12–24 months ('wait and see')", "Before 6 months corrected in high-risk infants (MRI, GMA, HINE)", "Early 'high risk of CP' label and therapy " + LB.loc()]])}` },
{ id: "presentation", title: "Assessment", html: `<ul><li>Domains: gross motor, fine motor, speech/language, social, cognition.</li><li>History: pregnancy, birth, neonatal course, family history, regression, seizures.</li><li>Exam: growth, head circumference, dysmorphism, skin (neurocutaneous), tone, reflexes, hearing, vision.</li></ul><h3>The typical patient</h3><p>An 18-month-old born at 30 weeks after neonatal sepsis is not walking, has stiff legs with brisk reflexes and toe-walking with support. <b>Probable spastic diplegic cerebral palsy</b>: physiotherapy, orthoses, hearing and vision tests, nutrition, baclofen if spasticity limits function; family support.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Hearing loss", "Speech delay only"], ["Autism", "Social communication, repetitive behaviours"], ["Hypothyroidism", "TSH"], ["Neuromuscular disease", "Hypotonia, weakness, high CK (boys: Duchenne)"], ["Neglect/deprivation", "Catch-up with stimulation"]])}` },
{ id: "invest", title: "Investigations", html: `<p>Hearing (OAE/BERA) and vision for all; TSH; CK in boys with motor delay; karyotype/microarray for global delay; MRI for CP or abnormal neuro signs; metabolic screen if regression.</p>` },
{ id: "staging", title: "Red flag tool", html: `<div class="calc" data-calc="devscreen"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Early intervention: physiotherapy, OT, speech therapy; parent-delivered home programmes.</li><li>CP: positioning, orthoses, baclofen (5 mg TDS, titrate), hip surveillance, nutrition and swallowing, seizures, constipation, drooling, pain.</li><li>Hearing aids/glasses; inclusive education; disability certification and support.</li><li>Treat cause where possible (thyroxine, nutrition).</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("baclofen"), "Child 2.5–5 mg TDS, titrate (max 40–60 mg/day)", "Spasticity"], [dr("thyroxine"), "By weight", "Hypothyroidism"]])}` },
{ id: "populations", title: "Preterm", html: `<p>Use corrected age until 2 years; high-risk infants (under 32 weeks, HIE, neonatal seizures) need structured follow-up.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Family far from therapy", "Teach home programme, community-based rehabilitation, video follow-up"]])}` },
{ id: "complications", title: "Complications", html: `<p>Contractures, hip dislocation, scoliosis, malnutrition, aspiration, epilepsy, learning difficulty.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Every 3–6 months: growth, hips (X-ray), function (GMFCS), school.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Child with cerebral palsy", src: "images/cp-child.png", mod: "Illustration", ctx: "Cerebral palsy", loc: "Whole child", find: "Posture and tone abnormalities", interp: "Early therapy and family support", by: "UCT MOOCs", page: "https://commons.wikimedia.org/wiki/File:Child_with_Cerebral_Palsy.png", lic: "CC BY 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Concern about development", [F.d("Regression?"), F.a, F.b([["Yes", F.e("Urgent neurology referral")], ["No", F.s("Domains, hearing, vision, TSH")]]), F.a, F.ok("Early intervention + cause work-up")])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["'Wait and see'", "Lost therapy window", "Refer on red flags"], ["No hearing test in speech delay", "Missed deafness", "Test all"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "Most important developmental red flag at any age?", "Loss of previously acquired skills (regression).")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Novak I, Morgan C, Adde L, et al. Early, accurate diagnosis and early intervention in cerebral palsy: advances in diagnosis and treatment. JAMA Pediatr. 2017;171:897-907. <a href="https://doi.org/10.1001/jamapediatrics.2017.1689" target="_blank" rel="noopener">doi</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["DOI", "<span class='pass'>Verified</span>", "Crossref"]], "qc")}` }
]
});
