/* Clinical Disease Guide — Drug monograph database, block M, batch M-2 (26 Nov 2026).
   Mesalazine … midodrine. Same rules as js/fdb-a2.js. Uses FDB_M from js/fdb-a2.js (must load after it).
   Boxed text "@LABEL" is filled from the saved FDA label by _work/tools/fdb-boxed-fill.js (needs X_DM("set id") or setid= in the source URL).
   Labels replaced: methylphenidate (Ritalin tablets, not the Daytrana patch pack). Deferred: methionine (pack picked TrophAmine PN). */
(function () { // M-2 scope
const ISMP_SRC = ["ISMP", "ISMP list of high-alert medications in acute care settings — ISMP/ECRI", "https://home.ecri.org/blogs/guidance-insights-tools/high-alert-medications-in-acute-care-settings"];
const NEML_SRC = ["BT-NEML", "National Essential Medicines List 2025 — Ministry of Health, Bhutan", ""];
const notBT = { neml: "Not on the Bhutan NEML 2025 [BT-NEML].", strengths: "Not available through the Bhutan formulary.", stg: "Not in Bhutan STG 2024 [BT-STG]." };
const NEP = "Not established in primary source. [NEP]";
const LD = "Animal LD50: Not established in primary source. [NEP]";
const M2_DM = id => "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=" + id;
const ADULT = { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: null };
const ALL = { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: null };

FDB_M("mesalazine", {
  inn: "Mesalazine (mesalamine)", atc: "A07EC02", cls: "Aminosalicylate (5-ASA)",
  linked: [],
  forms: ["Delayed-release tablets 1.2 g (Lialda) and other strengths; capsules; suppositories 1 g; enemas 4 g [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Local anti-inflammatory action in the colon [UNVERIFIED-KNOWLEDGE].",
  pk: ["Release differs by product — products are not interchangeable [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Induction and maintenance of remission in mild–moderate ulcerative colitis [FDA]."], paed: ["Mild–moderate UC, 24 kg and over (Lialda) [FDA]."] },
  adult: [["UC induction (Lialda)", "2.4–4.8 g once daily with food [FDA]."], ["UC maintenance", "2.4 g once daily [FDA]."], ["Administration", "Swallow whole; do not split or crush; drink enough fluid [FDA]."], ["Before starting", "Check kidney function, and periodically after [FDA]."]],
  paed: { tiers: ["24–35 kg: 2.4 g daily (weeks 0–8), then 1.2 g [FDA].", "Over 35–50 kg: 3.6 g, then 2.4 g [FDA].", "Over 50 kg: 4.8 g, then 2.4 g [FDA]."], transition: "Adult dosing over 50 kg.", calcNote: "Weight bands — no calculator." },
  adj: { renal: "Kidney injury reported — check function before and during [FDA].", hepatic: "Hepatic failure reported — caution [FDA].", pregnancy: NEP, other: "Can colour urine; may interfere with urinary normetanephrine tests [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Salicylate toxicity: nausea, vomiting, tachypnoea, tinnitus, confusion, seizures [FDA].", animal: LD, manage: "Treat as salicylate poisoning [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to salicylates, aminosalicylates or ingredients [FDA]."],
  ae: { common: ["Headache, flatulence, abdominal pain, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Kidney impairment including failure [FDA]", "Mesalamine-induced acute intolerance syndrome [FDA]", "Myocarditis, pericarditis and other hypersensitivity [FDA]", "Hepatic failure [FDA]", "Severe skin reactions [FDA]", "Kidney stones [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Kidney function at baseline and periodically; blood counts [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Lialda (mesalamine) delayed-release tablets — FDA label (DailyMed)", M2_DM("3098a080-be86-4265-9818-7fc4beab77b7")], NEML_SRC],
  dose: { tagline: "5-ASA for ulcerative colitis — check kidney function.",
    adult: [{ ind: "UC induction", text: "2.4–4.8 g once daily (Lialda)." }, { ind: "UC maintenance", text: "2.4 g once daily." }],
    child: [{ ind: "UC (24 kg+)", text: "2.4–4.8 g daily by weight for 8 weeks, then 1.2–2.4 g." }] }
});

FDB_M("mesna", {
  inn: "Mesna", atc: "V03AF01", cls: "Uroprotective thiol",
  linked: [],
  forms: ["Injection 100 mg/mL (contains benzyl alcohol); tablets 400 mg [FDA]."],
  moa: "Binds acrolein in the bladder, preventing ifosfamide-induced haemorrhagic cystitis [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Prevention of ifosfamide-induced haemorrhagic cystitis [FDA]."], paed: ["Used with ifosfamide protocols; avoid the injection in premature and low-birth-weight neonates [FDA]."] },
  adult: [["IV schedule", "IV bolus equal to 20% of the ifosfamide dose (w/w) at 0, 4 and 8 hours — total 60% [FDA]. Example: ifosfamide 1.2 g/m² → mesna 240 mg/m² × 3 [FDA]."], ["IV + oral schedule", "240 mg/m² IV at 0 h, then 480 mg/m² tablets at 2 and 6 hours [FDA]."], ["Repeat", "On each day ifosfamide is given; keep the ratio if the ifosfamide dose changes [FDA]."]],
  paed: { tiers: ["Same ratio to ifosfamide per protocol [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Same.", calcNote: "mg/m² linked to the ifosfamide dose." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Repeat the oral dose (or give IV) if vomited within 2 hours [FDA] [UNVERIFIED-KNOWLEDGE]. False-positive urine ketones [FDA]." },
  tox: { human: "Nausea, vomiting, diarrhoea, fever (10–66 mg/kg/day) [FDA].", animal: LD, manage: "No antidote; supportive [FDA]." },
  contra: ["Hypersensitivity to mesna or excipients, including benzyl alcohol [FDA]."],
  ae: { common: ["Nausea, vomiting, constipation, fatigue, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Hypersensitivity, including anaphylaxis [FDA]", "Severe skin reactions (DRESS, SJS/TEN) [FDA]", "Benzyl alcohol toxicity in neonates [FDA]"] },
  monitor: ["Urine for haematuria; urine output [FDA]."],
  local: notBT,
  calc: [
    { drug: "mesna", indication_id: "iv240", label: "With ifosfamide 1.2 g/m² — mesna 240 mg/m² IV at 0, 4, 8 h", route: "IV", population: ALL, basis: "mg_per_m2", dose: { value: 240, unit: "mg", per: "dose" }, interval_h: 4, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["Three doses: 0, 4 and 8 h", "Always 20% of the ifosfamide dose (w/w) per dose"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Mesnex (mesna) injection and tablets — FDA label (DailyMed)", M2_DM("1dd69e84-616d-fb77-e063-6394a90af2f4")], NEML_SRC],
  dose: { tagline: "Bladder protection with ifosfamide — 20% of the ifosfamide dose at 0, 4 and 8 h.",
    adult: [{ ind: "With ifosfamide", text: "20% of the ifosfamide dose IV at 0, 4 and 8 hours (e.g. 240 mg/m² × 3).", calc: ["iv240"] }],
    child: [{ ind: "With ifosfamide", text: "Same ratio per protocol.", calc: ["iv240"] }] }
});

FDB_M("mesuximide", {
  inn: "Mesuximide (methsuximide)", atc: "N03AD03", cls: "Succinimide antiseizure medicine",
  linked: [],
  forms: ["Capsule 300 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Reduces T-type calcium currents in thalamic neurons [UNVERIFIED-KNOWLEDGE].",
  pk: ["Active metabolite N-desmethylmethsuximide [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Absence (petit mal) seizures refractory to other drugs [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Absence seizures", "300 mg/day for the first week; increase by 300 mg/day weekly for 3 weeks to 1.2 g/day if needed; use the lowest dose that controls seizures [FDA]."]],
  paed: { tiers: ["Same schedule, individualised [FDA]."], transition: "Same.", calcNote: "Titrated — no calculator." },
  adj: { renal: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Do not stop abruptly — absence status [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, vomiting, CNS depression, coma with respiratory depression; may relapse after waking [FDA].", animal: LD, manage: "Supportive; watch for biphasic course [FDA]." },
  contra: ["Hypersensitivity to succinimides [FDA]."],
  ae: { common: ["Nausea, vomiting, anorexia, drowsiness, dizziness, ataxia, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Blood dyscrasias including pancytopenia [FDA]", "SLE-like syndrome [FDA] [UNVERIFIED-KNOWLEDGE]", "Suicidal ideation [FDA] [UNVERIFIED-KNOWLEDGE]", "Severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood counts; liver tests; urinalysis [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Celontin (methsuximide) — FDA label (DailyMed)", M2_DM("64a6ee88-c6b1-4e13-8208-b6772ef65a74")], NEML_SRC],
  dose: { tagline: "Reserve succinimide for refractory absence seizures.",
    adult: [{ ind: "Absence seizures", text: "300 mg/day, up by 300 mg weekly to 1.2 g/day." }],
    child: [{ ind: "Absence seizures", text: "Same, individualised." }] }
});

FDB_M("metamfetamine", {
  inn: "Metamfetamine (methamphetamine)", atc: "N06BA03", cls: "CNS stimulant (Schedule II)",
  linked: [],
  forms: ["Tablet 5 mg [FDA]."],
  moa: "Releases dopamine and noradrenaline [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Not indicated for adults in the current label [FDA]."], paed: ["ADHD, 6 years and older [FDA]."] },
  adult: [["Adults", "Not in the current label [FDA]."]],
  paed: { tiers: ["6 years and older: start 5 mg once or twice daily; increase by 5 mg weekly; usual 20–25 mg/day once or in 2 doses; avoid late evening [FDA]."], transition: "—", calcNote: "Titrated — no calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Screen for heart disease and family history of sudden death or arrhythmia; tics and Tourette's [FDA]." },
  tox: { human: "Sympathomimetic toxicity: tachyarrhythmia, hypertension, vasospasm, MI, agitation, hyperthermia, seizures, rhabdomyolysis [FDA].", animal: LD, manage: "Supportive; benzodiazepines; cooling [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to amphetamine products [FDA].", "MAOI use within 14 days [FDA]."],
  ae: { common: ["Insomnia, reduced appetite, weight loss, abdominal pain, headache, irritability [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Abuse, misuse and addiction [FDA]", "Sudden death and cardiovascular events in heart disease [FDA]", "Psychosis or mania [FDA]", "Growth suppression in children [FDA]", "Peripheral vasculopathy (Raynaud's) [FDA]", "Serotonin syndrome [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure, heart rate, height and weight, signs of misuse [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Methamphetamine hydrochloride tablets — FDA label (DailyMed)", M2_DM("d0905e2c-a02f-ec4f-59a3-6f7ad0acbbf6")], NEML_SRC],
  dose: { tagline: "Schedule II stimulant for ADHD in children 6+ — high abuse potential.",
    boxedTitle: "Abuse, misuse, and addiction", boxed: "METHAMPHETAMINE has a high potential for abuse and misuse, which can lead to the development of a substance use disorder, including addiction. Misuse and abuse of CNS stimulants, including METHAMPHETAMINE, can result in overdose and death, and this risk is increased with higher doses or unapproved methods of administration, such as snorting or injection. Before prescribing METHAMPHETAMINE, assess each patient's risk for abuse, misuse, and addiction. Educate patients and their families about these risks, proper storage of the drug, and proper disposal of any unused drug. Throughout METHAMPHETAMINE treatment, reassess each patient's risk of abuse, misuse, and addiction and frequently monitor for signs and symptoms of abuse, misuse, and addiction [FDA].",
    adult: [{ ind: "Adults", text: "Not in the current label." }],
    child: [{ ind: "ADHD (6 years+)", text: "5 mg once or twice daily, up by 5 mg weekly; usual 20–25 mg/day." }] }
});

FDB_M("methacholine", {
  inn: "Methacholine", atc: "V04CX03", cls: "Cholinergic agonist (bronchial challenge test)",
  linked: [],
  forms: ["Powder for inhalation solution 100 mg; ready-to-use inhalation kits; 16 mg/mL vials [FDA]."],
  moa: "Muscarinic agonist that causes bronchoconstriction in hyper-reactive airways [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Diagnosis of bronchial hyper-reactivity in people without clinically apparent asthma [FDA]."], paed: ["5 years and older [FDA]."] },
  adult: [["Challenge test", "Increasing strengths by nebuliser (5-breath dosimeter or 1-minute tidal breathing, doubling or quadrupling steps) in a pulmonary function laboratory with trained staff [FDA]."], ["Before", "Measure baseline FEV1 [FDA]."], ["After", "Give an inhaled beta-agonist to reverse bronchoconstriction [FDA]."]],
  paed: { tiers: ["5 years and older: same protocol [FDA]."], transition: "Same.", calcNote: "No calculator." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Have emergency equipment and a bronchodilator ready [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Severe bronchoconstriction, bradycardia, hypotension [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Inhaled beta-agonist; atropine [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to methacholine or other parasympathomimetics [FDA].", "Baseline FEV1 under 60% predicted (any age) or under 1.5 L (adults) [FDA].", "Recent heart attack or stroke, uncontrolled hypertension, aortic aneurysm [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Headache, throat irritation, light-headedness, itching [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe bronchoconstriction [FDA]"] },
  monitor: ["FEV1 after each step [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Provocholine (methacholine) — FDA label (DailyMed)", M2_DM("e8983096-65e6-41f2-8b6f-bbf0a7227307")], NEML_SRC],
  dose: { tagline: "Lung-lab challenge test for airway hyper-reactivity — not in active asthma.",
    boxedTitle: "Severe bronchoconstriction", boxed: "Severe bronchoconstriction can result from Provocholine administration (including the lowest dose). The use of Provocholine is contraindicated in pediatric and adult patients with baseline FEV1 < 60% predicted or adults with FEV1 < 1.5 L. Because of the potential for severe bronchoconstriction, the use of Provocholine in patients with clinically apparent asthma or wheezing is not recommended. Emergency equipment and medication should be immediately available to treat acute respiratory distress. If severe bronchoconstriction occurs, reverse immediately with a rapid-acting inhaled bronchodilator agent (β-agonist). If baseline spirometry is not performed or is measured inaccurately, the initial FEV1 may be underestimated. In this situation, decreases in FEV1 may not be detected after administration of escalating Provocholine doses, which may result in administration of unnecessary higher doses and an increased risk for excessive bronchoconstriction [FDA].",
    adult: [{ ind: "Challenge test", text: "Stepwise nebulised doses per the lab protocol." }],
    child: [{ ind: "5 years and older", text: "Same protocol." }] }
});

FDB_M("methadone", {
  inn: "Methadone", atc: "N07BC02", cls: "Opioid agonist (long-acting)",
  risk: "High-alert — opioids are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Oral concentrate 10 mg/mL (Methadose); tablets 5 and 10 mg; dispersible 40 mg tablets; injection [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Mu-opioid agonist and NMDA antagonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["Long, variable half-life (8–59 hours) — peak respiratory depression comes later than peak pain relief; accumulates over days [FDA] [UNVERIFIED-KNOWLEDGE].", "CYP3A4, 2B6, 2C19 substrate — inducers and inhibitors change levels [FDA]."],
  ind: { adult: ["Detoxification and maintenance treatment of opioid addiction (licensed programmes) [FDA].", "Severe pain needing long-term opioids (other products) [UNVERIFIED-KNOWLEDGE]."], paed: ["Not established [FDA]."] },
  adult: [["Opioid addiction — start", "A single dose of 20–30 mg may suppress withdrawal [FDA]; first-day total usually no more than 40 mg [UNVERIFIED-KNOWLEDGE]."], ["Maintenance", "Clinical stability usually at 80–120 mg/day [FDA]."], ["Stopping", "Do not reduce rapidly or stop abruptly in a dependent patient [FDA]."], ["Naloxone", "Offer naloxone at start and renewal [FDA]."]],
  paed: { tiers: ["Not established under 18 years [FDA]."], transition: "—", calcNote: "Specialist titration — no calculator." },
  adj: { renal: "Caution [UNVERIFIED-KNOWLEDGE].", hepatic: "Caution [UNVERIFIED-KNOWLEDGE].", pregnancy: "Neonatal opioid withdrawal syndrome — maintenance is continued under specialist care [FDA] [UNVERIFIED-KNOWLEDGE].", other: "QT prolongation — ECG; avoid with benzodiazepines and other CNS depressants [FDA]." },
  tox: { human: "Respiratory depression, stupor, coma, flaccidity, miosis, pulmonary oedema, bradycardia, death [FDA].", animal: LD, manage: "Airway and ventilation; naloxone — may need repeated doses or infusion because methadone lasts longer [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Significant respiratory depression [FDA].", "Acute or severe asthma without monitoring and resuscitation equipment [FDA].", "Known or suspected GI obstruction including paralytic ileus [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Constipation, nausea, sweating, sedation, dizziness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Life-threatening respiratory depression [FDA]", "QT prolongation and torsades [FDA]", "Accidental ingestion is fatal, especially in children [FDA]", "Serotonin syndrome [FDA]", "Adrenal insufficiency [FDA]", "Severe hypotension [FDA]"] },
  monitor: ["Sedation and breathing during the first days and dose changes; ECG; signs of misuse [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Methadose (methadone) oral concentrate — FDA label (DailyMed)", M2_DM("808a9d0b-720b-4034-a862-5122ff514608")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Long-acting opioid for opioid-use disorder — slow, careful start; QT risk.",
    boxedTitle: "Life-threatening respiratory depression, QT prolongation, accidental ingestion, abuse, CYP450 interactions and treatment for opioid addiction", boxed: "Life-Threatening Respiratory Depression Respiratory depression, including fatal cases, have been reported during initiation and conversion of patients to methadone, and even when the drug has been used as recommended and not misused or abused. Proper dosing and titration are essential and METHADOSE should only be prescribed by healthcare professionals who are knowledgeable in the use of methadone for detoxification and maintenance treatment of opioid addiction. Monitor for respiratory depression, especially during initiation of METHADOSE or following a dose increase. The peak respiratory depressant effect of methadone occurs later, and persists longer than the peak pharmacologic effect, especially during the initial dosing period. Managing Risks from Concomitant Use with Benzodiazepines or Other CNS Depressants Concomitant use with benzodiazepines or other central nervous system (CNS) depressants, including alcohol, is a risk factor for respiratory depression and death. Reserve concomitant prescribing of benzodiazepines or other CNS depressants in patients in methadone treatment to those for whom alternatives to benzodiazepines or other CNS depressants are inadequate. Follow patients for signs and symptoms of respiratory depression and sedation. If the patient is visibly sedated, evaluate the cause of sedation and consider delaying or omitting daily methadone dosing. Life-Threatening QT Prolongation QT interval prolongation and serious arrhythmia ( torsades de pointes ) have occurred during treatment with methadone [FDA].",
    adult: [{ ind: "Opioid addiction", text: "Start 20–30 mg; maintenance usually 80–120 mg/day." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("methylphenidate", {
  inn: "Methylphenidate", atc: "N06BA04", cls: "CNS stimulant (Schedule II)",
  linked: [],
  forms: ["Tablets 5, 10, 20 mg (Ritalin); extended-release tablets and capsules; transdermal patch (Daytrana) — not interchangeable mg for mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks dopamine and noradrenaline reuptake [UNVERIFIED-KNOWLEDGE].",
  pk: ["Immediate-release effect lasts about 3–4 hours [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["ADHD [FDA].", "Narcolepsy [FDA]."], paed: ["ADHD, 6 years and older [FDA]."] },
  adult: [["Adults (Ritalin)", "Average 20–30 mg/day in 2–3 doses, 30–45 minutes before meals; maximum 60 mg/day [FDA]."]],
  paed: { tiers: ["6 years and older: start 5 mg twice daily before breakfast and lunch; increase by 5–10 mg weekly; above 60 mg/day not recommended [FDA]."], transition: "Adult dosing.", calcNote: "Fixed titration." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Screen for heart disease, family history of sudden death, tics; MAOIs contraindicated [FDA]." },
  tox: { human: "Agitation, tachycardia, hypertension, hyperthermia, seizures, psychosis [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive; benzodiazepines [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity to methylphenidate [FDA].", "MAOI use within 14 days [FDA]."],
  ae: { common: ["Reduced appetite, insomnia, abdominal pain, headache, weight loss, nervousness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Abuse, misuse and addiction [FDA]", "Sudden death and cardiovascular events in heart disease [FDA]", "Psychosis or mania [FDA]", "Priapism [FDA]", "Growth suppression [FDA]", "Peripheral vasculopathy [FDA]"] },
  monitor: ["Blood pressure, heart rate, height and weight; misuse [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Ritalin (methylphenidate) tablets — FDA label (DailyMed)", M2_DM("d6fb2750-cdab-4749-ba0d-7534840a5892")], NEML_SRC],
  dose: { tagline: "First-line ADHD stimulant — titrate weekly, maximum 60 mg/day.",
    boxedTitle: "Abuse, misuse, and addiction", boxed: "Ritalin has a high potential for abuse and misuse, which can lead to the development of a substance use disorder, including addiction. Misuse and abuse of CNS stimulants, including Ritalin, can result in overdose and death, and this risk is increased with higher doses or unapproved methods of administration, such as snorting or injection. Before prescribing Ritalin, assess each patient's risk for abuse, misuse, and addiction. Educate patients and their families about these risks, proper storage of the drug, and proper disposal of any unused drug. Throughout Ritalin treatment, reassess each patient's risk of abuse, misuse, and addiction and frequently monitor for signs and symptoms of abuse, misuse, and addiction [FDA].",
    adult: [{ ind: "ADHD", text: "20–30 mg/day in 2–3 doses before meals; maximum 60 mg/day." }],
    child: [{ ind: "ADHD (6 years+)", text: "5 mg twice daily, up by 5–10 mg weekly; maximum 60 mg/day." }] }
});

FDB_M("methenamine", {
  inn: "Methenamine hippurate", atc: "J01XX05", cls: "Urinary antiseptic (formaldehyde-releasing)",
  linked: [],
  forms: ["Tablet 1 g (hippurate); mandelate salt also exists [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Hydrolyses to formaldehyde in acid urine, which is antibacterial [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Works best when urine pH is acid [FDA]."],
  ind: { adult: ["Prophylaxis or suppression of frequently recurring urinary tract infection, after the infection is cleared [FDA]."], paed: ["6 years and older [FDA]."] },
  adult: [["Recurrent UTI prophylaxis", "1 g twice daily (morning and night) — adults and children over 12 [FDA]."], ["Urine", "Avoid alkalinising foods and drugs; acidify urine if needed; check urine cultures [FDA]."]],
  paed: { tiers: ["6–12 years: 0.5–1 g twice daily [FDA].", "Over 12 years: 1 g twice daily [FDA]."], transition: "Adult dose over 12.", calcNote: "Fixed doses." },
  adj: { renal: "Contraindicated in renal insufficiency [FDA].", hepatic: "Contraindicated in severe hepatic insufficiency [FDA].", pregnancy: NEP, other: "Do not give with sulfonamides (urinary precipitate) [FDA]." },
  tox: { human: NEP, animal: LD, manage: NEP },
  contra: ["Renal insufficiency; severe hepatic insufficiency; severe dehydration [FDA].", "Concurrent sulfonamides [FDA]."],
  ae: { common: ["Nausea, upset stomach, dysuria, rash [FDA]."], serious: ["Raised liver enzymes [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Urine cultures; liver tests periodically [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Methenamine hippurate tablets — FDA label (DailyMed)", M2_DM("3c9e5bea-f61d-48c3-8e05-640eccccf2ba")], NEML_SRC],
  dose: { tagline: "Non-antibiotic prophylaxis for recurrent UTI — needs acid urine.",
    adult: [{ ind: "Recurrent UTI prophylaxis", text: "1 g twice daily." }],
    child: [{ ind: "6–12 years", text: "0.5–1 g twice daily." }] }
});

FDB_M("methocarbamol", {
  inn: "Methocarbamol", atc: "M03BA03", cls: "Centrally acting muscle relaxant",
  linked: [],
  forms: ["Injection 1 g/10 mL (polyethylene glycol vehicle); tablets 500 and 750 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Uncertain; may relate to CNS depression (sedation) — does not relax muscle directly [FDA].",
  pk: [NEP],
  ind: { adult: ["Adjunct for acute painful musculoskeletal conditions [FDA].", "Tetanus (injection) [FDA]."], paed: ["Tetanus only (injection) [FDA]."] },
  adult: [["Injection — moderate symptoms", "1 g IM or IV once; oral therapy usually maintains relief [FDA]."], ["Injection — severe or post-operative", "1 g every 8 hours, maximum 3 g/day for no more than 3 consecutive days (except tetanus); a course may be repeated after 48 hours drug-free [FDA]."], ["IV rate", "Undiluted, no faster than 3 mL per minute; patient lying down [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Oral (tablets)", "1.5 g four times daily for 2–3 days, then about 4 g/day [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Tetanus: at least 15 mg/kg (or 500 mg/m²) IV, may repeat every 6 hours; no more than 1.8 g/m² a day for 3 consecutive days [FDA]."], transition: "Adult doses.", calcNote: "Tetanus mg/kg." },
  adj: { renal: "Injection contraindicated with known or suspected kidney disease (polyethylene glycol) [FDA].", hepatic: NEP, pregnancy: NEP, other: "Extravasation is hypertonic and irritant [FDA] [UNVERIFIED-KNOWLEDGE]. Additive sedation with alcohol [FDA]." },
  tox: { human: "Nausea, drowsiness, blurred vision, hypotension, seizures, coma — often with alcohol or other depressants [FDA].", animal: LD, manage: "Supportive [FDA]." },
  contra: ["Injection: known or suspected kidney disease [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Drowsiness, dizziness, light-headedness, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis and angioedema [FDA]", "Bradycardia, hypotension, syncope with fast IV injection [FDA]", "Seizures with IV use [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure and heart rate during IV injection [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "methocarbamol", indication_id: "tetanus_child", label: "Tetanus, child — at least 15 mg/kg IV, may repeat every 6 h", route: "IV", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 15, unit: "mg", per: "dose" }, interval_h: 6, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 100, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["No more than 1.8 g/m² a day for 3 days", "Avoid in kidney disease (PEG vehicle)"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Robaxin (methocarbamol) injection — FDA label (DailyMed)", M2_DM("090a3d3d-92c3-4c30-a648-436461f81702")], NEML_SRC],
  dose: { tagline: "Sedating muscle relaxant — IV limited to 3 g/day for 3 days.",
    adult: [{ ind: "Acute musculoskeletal pain (IV/IM)", text: "1 g, up to every 8 h; maximum 3 g/day for 3 days." }],
    child: [{ ind: "Tetanus", text: "At least 15 mg/kg IV, may repeat every 6 h.", calc: ["tetanus_child"] }] }
});

FDB_M("methohexital", {
  inn: "Methohexital", atc: "N01AF01", cls: "Ultra-short-acting barbiturate anaesthetic",
  risk: "High-alert — general anaesthetic agents (IV) are on the ISMP list of high-alert medications [ISMP]",
  linked: [],
  forms: ["Powder for injection 500 mg, 2.5 g; 1% (10 mg/mL) for IV and rectal; 5% for IM; 0.2% for infusion [FDA]."],
  moa: "Barbiturate GABA-A agonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["Onset within seconds IV [FDA]."],
  ind: { adult: ["IV induction of anaesthesia; short procedures with other agents; procedural sedation (with other agents) [FDA]."], paed: ["Induction by IM or rectal route, 1 month and older [FDA]."] },
  adult: [["IV induction", "1–1.5 mg/kg of a 1% solution; adults usually 50–120 mg (average about 70 mg) [FDA]."], ["Maintenance", "Intermittent 20–40 mg (2–4 mL of 1%) about every 4–7 minutes, or infusion of 0.2% [FDA]."], ["Diluent", "Bacteriostatic-free diluent only; not lactated Ringer's [FDA]."]],
  paed: { tiers: ["IM induction: 6.6–10 mg/kg of 5% [FDA].", "Rectal induction: 25 mg/kg of 1% [FDA].", "Not established under 1 month [FDA]."], transition: "Adult IV dosing.", calcNote: "mg/kg induction." },
  adj: { renal: NEP, hepatic: "Caution [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "May provoke seizures in people with a seizure history [FDA]." },
  tox: { human: "Rapid respiratory depression, apnoea, hypotension, cardiovascular collapse [FDA].", animal: LD, manage: "Airway, ventilation and circulatory support [FDA]." },
  contra: ["Patients in whom general anaesthesia is contraindicated [FDA].", "Latent or manifest porphyria [FDA].", "Hypersensitivity to barbiturates [FDA]."],
  ae: { common: ["Hiccups, muscle twitching, pain at the injection site [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Respiratory depression and apnoea [FDA]", "Circulatory depression and hypotension [FDA]", "Seizures [FDA]", "Laryngospasm [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Continuous pulse oximetry and cardiac monitoring; airway [FDA]."],
  local: notBT,
  calc: [
    { drug: "methohexital", indication_id: "iv", label: "IV induction — 1–1.5 mg/kg of 1% solution", route: "IV", population: ADULT, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose", value_max: 1.5 }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "1% solution", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["HIGH_ALERT", "Airway equipment and trained staff present"], sources: ["FDA"] },
    { drug: "methohexital", indication_id: "pr_child", label: "Rectal induction, child — 25 mg/kg of 1%", route: "PR", population: { min_age_months: 1, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 25, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "1% solution", strength: 10, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["HIGH_ALERT", "Continuous monitoring"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Brevital Sodium (methohexital) — FDA label (DailyMed)", M2_DM("eccd8340-ead3-4363-8902-0c19d33aa2ac")], ISMP_SRC, NEML_SRC],
  dose: { tagline: "Very short-acting barbiturate for induction — airway skills essential.",
    boxedTitle: "Monitoring and resuscitation equipment required", boxed: "BREVITAL should be used only in hospital or ambulatory care settings that provide for continuous monitoring of respiratory (e.g. pulse oximetry) and cardiac function. Immediate availability of resuscitative drugs and age- and size-appropriate equipment for bag/valve/mask ventilation and intubation and personnel trained in their use and skilled in airway management should be assured. For deeply sedated patients, a designated individual other than the practitioner performing the procedure should be present to continuously monitor the patient [FDA].",
    adult: [{ ind: "IV induction", text: "1–1.5 mg/kg of 1% (about 50–120 mg).", calc: ["iv"] }],
    child: [{ ind: "Rectal induction", text: "25 mg/kg of 1%.", calc: ["pr_child"] }, { ind: "IM induction", text: "6.6–10 mg/kg of 5%." }] }
});

FDB_M("methoxsalen", {
  inn: "Methoxsalen (8-MOP)", atc: "D05BA02", cls: "Psoralen photosensitiser (PUVA)",
  linked: [],
  forms: ["Soft capsule 10 mg (rapid absorption); topical lotion; sterile solution for photopheresis [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Binds DNA after UVA activation, slowing epidermal cell turnover [UNVERIFIED-KNOWLEDGE].",
  pk: ["Soft capsules act sooner and more strongly than older forms [FDA]."],
  ind: { adult: ["Severe, recalcitrant, disabling psoriasis confirmed by biopsy, with controlled UVA (PUVA) [FDA]."], paed: ["Safety not established [FDA]."] },
  adult: [["PUVA (capsules)", "Take 1.5–2 hours before UVA with low-fat food or milk; dose by weight: under 30 kg 10 mg; 30–50 kg 20 mg; 51–65 kg 30 mg; 66–80 kg 40 mg; 81–90 kg 50 mg; 91–115 kg 60 mg; over 115 kg 70 mg [FDA]."], ["Before starting", "Determine the minimum phototoxic dose and peak time [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "—", calcNote: "Weight table." },
  adj: { renal: NEP, hepatic: "Caution in liver disease [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "UVA-blocking wraparound glasses for 24 hours after each dose; avoid sun [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Severe burning and blistering with light exposure [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Induce emesis early; keep in a darkened room for at least 24 hours [FDA]." },
  contra: ["Idiosyncratic reactions to psoralens [FDA].", "Light-sensitive diseases (lupus, porphyria, xeroderma pigmentosum, albinism) [FDA].", "Melanoma or history of melanoma; invasive squamous cell skin cancer; aphakia [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Nausea (about 10%), itching, redness [FDA]."], serious: ["Severe burns [FDA]", "Skin cancer including melanoma with long-term use [FDA]", "Cataracts without eye protection [FDA]", "Premature skin ageing [FDA]"] },
  monitor: ["Eye examination; skin cancer checks [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Methoxsalen capsules — FDA label (DailyMed)", M2_DM("a6ec8292-9189-4ebd-862a-e1725eb29eef")], NEML_SRC],
  dose: { tagline: "PUVA for severe psoriasis — specialist use with strict eye and skin protection.",
    boxedTitle: "Specialist photochemotherapy only; carcinogenicity and ocular damage", boxed: "Methoxsalen with ultraviolet (UV) radiation should be used only by physicians who have special competence in the diagnosis and treatment of psoriasis and who have special training and experience in photochemotherapy. The use of Psoralen and ultraviolet radiation therapy should be under constant supervision of such a physician. For the treatment of patients with psoriasis, photochemotherapy should be restricted to patients with severe, recalcitrant, disabling psoriasis which is not adequately responsive to other forms of therapy, and only when the diagnosis is certain. Because of the possibilities of ocular damage, aging of the skin, and skin cancer (including melanoma), the patient should be fully informed by the physician of the risks inherent in this therapy. CAUTION: Methoxsalen Capsules, USP 10 mg [Soft Gelatin Capsules]. This new dosage form of methoxsalen exhibits significantly greater bioavailability and earlier photosensitization onset time than previous methoxsalen dosage forms. Patient should be treated in accordance with the dosimetry specifically recommended for this product. The minimum phototoxic dose (MPD) and phototoxic peak time after drug administration prior to onset of photochemotherapy with this dosage form should be determined [FDA].",
    adult: [{ ind: "Severe psoriasis (PUVA)", text: "10–70 mg by weight, 1.5–2 hours before UVA." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("methoxy-polyethylene-glycol-epoetin-beta", {
  inn: "Methoxy polyethylene glycol-epoetin beta", atc: "B03XA03", cls: "Erythropoiesis-stimulating agent (long-acting)",
  linked: [["Chronic kidney disease — adults", "Anaemia of CKD [FDA]", "ckd-adult"]],
  forms: ["Prefilled syringes 30–250 mcg; vials [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Continuous erythropoietin receptor activator with a long half-life [UNVERIFIED-KNOWLEDGE].",
  pk: ["Allows dosing every 2 weeks or monthly [FDA]."],
  ind: { adult: ["Anaemia of CKD, on or not on dialysis [FDA]."], paed: ["3 months–17 years with CKD, converting from another ESA once haemoglobin is stable [FDA]."] },
  adult: [["Dialysis — ESA-naive", "0.6 mcg/kg IV or SC every 2 weeks [FDA]."], ["Not on dialysis — ESA-naive", "1.2 mcg/kg SC once monthly, or 0.6 mcg/kg every 2 weeks [FDA]."], ["Converting from another ESA", "Every 2 weeks or monthly by the weekly epoetin or darbepoetin dose (label table) [FDA]."], ["Iron", "Give iron when ferritin is under 100 mcg/L or transferrin saturation under 20% [FDA]."]],
  paed: { tiers: ["Conversion only: every 4 weeks by the previous ESA dose (label table); under 6 years keep the same route [FDA]."], transition: "Adult dosing.", calcNote: "mcg/kg start." },
  adj: { renal: "Indicated in CKD [FDA].", hepatic: NEP, pregnancy: NEP, other: "Use the lowest dose that avoids transfusion; aim not to exceed haemoglobin 11 g/dL [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "High haemoglobin, severe hypertension [FDA].", animal: LD, manage: "Stop or reduce; phlebotomy if needed [FDA]." },
  contra: ["Uncontrolled hypertension [FDA].", "Pure red cell aplasia after any erythropoietin [FDA].", "Serious allergic reactions to Mircera [FDA]."],
  ae: { common: ["Hypertension, diarrhoea, nasopharyngitis, headache [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Death, MI, stroke, VTE, access thrombosis at high haemoglobin targets [FDA]", "Tumour progression in cancer [FDA]", "Seizures [FDA]", "Pure red cell aplasia [FDA]", "Severe skin reactions [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Haemoglobin every 2 weeks until stable, then monthly; blood pressure; iron [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "methoxy-polyethylene-glycol-epoetin-beta", indication_id: "hd", label: "CKD on dialysis, ESA-naive — 0.6 mcg/kg every 2 weeks", route: "IV/SC", population: ADULT, basis: "mg_per_kg", dose: { value: 0.0006, unit: "mg", per: "dose" }, interval_h: 336, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [], rounding: "0.001 mg", renal: [], flags: ["0.0006 mg = 0.6 mcg per kg", "Check iron first"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Mircera (methoxy polyethylene glycol-epoetin beta) — FDA label (DailyMed)", M2_DM("22c56f2a-f73c-60e7-e054-00144ff88e88")], NEML_SRC],
  dose: { tagline: "Long-acting ESA for CKD anaemia — every 2 weeks or monthly.",
    boxedTitle: "ESAs increase the risk of death, myocardial infarction, stroke, venous thromboembolism, thrombosis of vascular access and tumour progression or recurrence", boxed: "Chronic Kidney Disease: • In controlled trials, patients experienced greater risks for death, serious adverse cardiovascular reactions, and stroke when administered erythropoiesis-stimulating agents (ESAs) to target a hemoglobin level of greater than 11 g/dL. • No trial has identified a hemoglobin target level, ESA dose, or dosing strategy that does not increase these risks. • Use the lowest Mircera dose sufficient to reduce the need for red blood cell (RBC) transfusions. Cancer: • Mircera is not indicated and is not recommended for the treatment of anemia due to cancer chemotherapy. A dose-ranging study of Mircera was terminated early because of more deaths among patients receiving Mircera than another ESA. • ESAs have shown shortened overall survival and/or increased the risk of tumor progression or recurrence in clinical studies in patients with breast, non-small cell lung, head and neck, lymphoid, and cervical cancers [FDA].",
    adult: [{ ind: "CKD on dialysis", text: "0.6 mcg/kg every 2 weeks.", calc: ["hd"] }, { ind: "CKD not on dialysis", text: "1.2 mcg/kg SC monthly." }],
    child: [{ ind: "Converting from another ESA", text: "Every 4 weeks by the previous ESA dose." }] }
});

FDB_M("methylnaltrexone", {
  inn: "Methylnaltrexone bromide", atc: "A06AH01", cls: "Peripheral mu-opioid antagonist",
  linked: [],
  forms: ["Tablet 150 mg; SC injection 12 mg/0.6 mL (syringe and vial) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Blocks gut opioid receptors without crossing into the brain [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Opioid-induced constipation in chronic non-cancer pain (tablets, injection) [FDA].", "Opioid-induced constipation in advanced illness or palliative care (injection) [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Chronic non-cancer pain", "450 mg tablets once each morning on an empty stomach, or 12 mg SC once daily; stop maintenance laxatives first [FDA]."], ["Advanced illness (SC, every other day)", "Under 38 kg 0.15 mg/kg; 38 to under 62 kg 8 mg; 62–114 kg 12 mg; over 114 kg 0.15 mg/kg [FDA]."], ["Practical", "Be near a toilet; stop if opioids are stopped [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "—", calcNote: "Weight bands (advanced illness)." },
  adj: { renal: "CrCl under 60: halve the dose (e.g. advanced illness 0.075 mg/kg, 4 mg or 6 mg) [FDA].", hepatic: "Moderate–severe: reduce the tablet dose [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "May cause opioid withdrawal in the fetus [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Disrupted blood–brain barrier may allow opioid withdrawal [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Orthostatic hypotension at high IV doses [FDA] [UNVERIFIED-KNOWLEDGE].", animal: LD, manage: "Supportive [FDA]." },
  contra: ["Known or suspected mechanical GI obstruction or high risk of recurrent obstruction [FDA]."],
  ae: { common: ["Abdominal pain, flatulence, nausea, diarrhoea, hyperhidrosis [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Gastrointestinal perforation [FDA]", "Severe or persistent diarrhoea [FDA]", "Opioid withdrawal [FDA]"] },
  monitor: ["Abdominal pain; bowel response [FDA]."],
  local: notBT,
  calc: [
    { drug: "methylnaltrexone", indication_id: "pall_low", label: "Advanced illness, under 38 kg — 0.15 mg/kg SC every other day", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: null, max_weight_kg: 38 }, basis: "mg_per_kg", dose: { value: 0.15, unit: "mg", per: "dose" }, interval_h: 48, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "reduce_dose", factor: 0.5, interval_h: 48 }], flags: ["Volume = weight × 0.0075 mL, rounded up to 0.1 mL"], sources: ["FDA"] },
    { drug: "methylnaltrexone", indication_id: "pall_38", label: "Advanced illness, 38 to under 62 kg — 8 mg SC every other day", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: 38, max_weight_kg: 62 }, basis: "fixed", dose: { value: 8, unit: "mg", per: "dose" }, interval_h: 48, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "reduce_dose", factor: 0.5, interval_h: 48 }], flags: ["0.4 mL"], sources: ["FDA"] },
    { drug: "methylnaltrexone", indication_id: "pall_62", label: "Advanced illness, 62–114 kg — 12 mg SC every other day", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: 62, max_weight_kg: 114.0001 }, basis: "fixed", dose: { value: 12, unit: "mg", per: "dose" }, interval_h: 48, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "reduce_dose", factor: 0.5, interval_h: 48 }], flags: ["0.6 mL"], sources: ["FDA"] },
    { drug: "methylnaltrexone", indication_id: "pall_high", label: "Advanced illness, over 114 kg — 0.15 mg/kg SC every other day", route: "SC", population: { min_age_months: 216, max_age_months: null, min_weight_kg: 114.0001, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 0.15, unit: "mg", per: "dose" }, interval_h: 48, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 20, unit: "mg/mL" }], rounding: "0.1 mL", renal: [{ crcl_min: 0, crcl_max: 59.999, action: "reduce_dose", factor: 0.5, interval_h: 48 }], flags: ["Volume = weight × 0.0075 mL, rounded up to 0.1 mL"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Relistor (methylnaltrexone bromide) — FDA label (DailyMed)", M2_DM("c488fb7c-0a5b-487c-b452-996809d1cb99")], NEML_SRC],
  dose: { tagline: "Peripheral opioid blocker for opioid-induced constipation.",
    adult: [{ ind: "Advanced illness", text: "SC every other day by weight: 8 mg (38 to under 62 kg), 12 mg (62–114 kg), otherwise 0.15 mg/kg.", calc: ["pall_low", "pall_38", "pall_62", "pall_high"] }, { ind: "Chronic non-cancer pain", text: "450 mg tablets daily or 12 mg SC daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("methylscopolamine", {
  inn: "Methylscopolamine (methscopolamine) bromide", atc: "A03BB03", cls: "Quaternary antimuscarinic",
  linked: [],
  forms: ["Tablets 2.5 and 5 mg [FDA]."],
  moa: "Peripheral muscarinic blockade reducing gastric secretion and motility [UNVERIFIED-KNOWLEDGE].",
  pk: ["Quaternary — little CNS entry [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Adjunct in peptic ulcer (not shown to heal ulcers or prevent complications) [FDA]."], paed: ["Not established [UNVERIFIED-KNOWLEDGE]."] },
  adult: [["Peptic ulcer adjunct", "Average 2.5 mg half an hour before meals and 2.5–5 mg at bedtime; start 12.5 mg/day; for prompt relief 5 mg before meals and at bedtime (20 mg/day); some tolerate 30 mg/day [FDA]."]],
  paed: { tiers: ["Not established. [NEP]"], transition: "—", calcNote: "Fixed." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Heat stroke risk in hot weather (reduced sweating) [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Anticholinergic toxicity progressing to CNS disturbance, circulatory changes, respiratory failure [FDA].", animal: LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Glaucoma; obstructive uropathy; GI obstruction; paralytic ileus; intestinal atony; unstable cardiovascular state in acute bleeding; severe ulcerative colitis; toxic megacolon; myasthenia gravis [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ae: { common: ["Dry mouth, constipation, blurred vision, urinary hesitancy, tachycardia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Urinary retention, ileus [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Anticholinergic effects [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Methscopolamine bromide tablets — FDA label (DailyMed)", M2_DM("4ee28ed4-daff-462c-a38b-4fd8250ed9f4")], NEML_SRC],
  dose: { tagline: "Old antimuscarinic peptic-ulcer adjunct — largely replaced by PPIs.",
    adult: [{ ind: "Peptic ulcer adjunct", text: "2.5 mg before meals and 2.5–5 mg at bedtime." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("methyltestosterone", {
  inn: "Methyltestosterone", atc: "G03BA02", cls: "Oral androgen",
  linked: [],
  forms: ["Tablet 10 mg; capsule 10 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Androgen receptor agonist [UNVERIFIED-KNOWLEDGE].",
  pk: ["17-alpha-alkylated — liver toxicity risk [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Males: primary or hypogonadotropic hypogonadism; delayed puberty [FDA].", "Females: secondary treatment of advanced inoperable metastatic breast cancer [FDA] [UNVERIFIED-KNOWLEDGE]."], paed: ["Delayed puberty (specialist) [FDA]."] },
  adult: [["Hypogonadism (male)", "Usual 10–50 mg daily, individualised; confirm low morning testosterone on 2 separate days first [FDA]."], ["Breast cancer (female)", "50–200 mg daily [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Delayed puberty: specialist dosing for a limited time, with X-ray checks of bone age every 6 months [FDA] [UNVERIFIED-KNOWLEDGE]."], transition: "Adult.", calcNote: "Individualised." },
  adj: { renal: "Fluid retention — caution in kidney disease [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: "Peliosis hepatis and liver tumours with long use [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: "Contraindicated (virilisation of a female fetus) [FDA].", other: "Raises warfarin effect [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Nausea, oedema [FDA].", animal: LD, manage: "Supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Men with breast cancer or known or suspected prostate cancer [FDA].", "Women who are or may become pregnant [FDA]."],
  ae: { common: ["Acne, gynaecomastia, oedema; in women virilisation and menstrual changes [FDA]."], serious: ["Cholestatic hepatitis, peliosis hepatis, liver tumours [FDA] [UNVERIFIED-KNOWLEDGE]", "Hypercalcaemia in breast cancer [FDA] [UNVERIFIED-KNOWLEDGE]", "Premature epiphyseal closure in children [FDA] [UNVERIFIED-KNOWLEDGE]", "Polycythaemia [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests, haemoglobin/haematocrit, lipids; bone age in children [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Methitest (methyltestosterone) tablets — FDA label (DailyMed)", M2_DM("77bb4ef4-c10e-4acc-8225-651d003f4561")], NEML_SRC],
  dose: { tagline: "Oral androgen — liver toxicity; injectable or transdermal testosterone usually preferred.",
    adult: [{ ind: "Male hypogonadism", text: "10–50 mg daily, individualised." }],
    child: [{ ind: "Delayed puberty", text: "Specialist only, with bone-age checks." }] }
});

FDB_M("methylthioninium-chloride", {
  inn: "Methylthioninium chloride (methylene blue)", atc: "V03AB17", cls: "Antidote for methaemoglobinaemia (redox dye)",
  linked: [],
  forms: ["Injection 5 mg/mL (0.5%) and 10 mg/mL (1%) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Reduced to leucomethylene blue, which converts methaemoglobin back to haemoglobin (needs NADPH from G6PD) [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Acquired methaemoglobinaemia [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Methaemoglobinaemia", "1 mg/kg IV over 5–30 minutes; repeat up to 1 mg/kg after 1 hour if methaemoglobin stays above 30% or symptoms persist [FDA]."], ["No response after 2 doses", "Consider other treatment (e.g. exchange transfusion, hyperbaric oxygen) [FDA] [UNVERIFIED-KNOWLEDGE]."], ["Kidney impairment (eGFR 15–59)", "Single dose of 1 mg/kg only [FDA]."]],
  paed: { tiers: ["Same 1 mg/kg dosing [FDA]."], transition: "Same.", calcNote: "1 mg/kg IV." },
  adj: { renal: "eGFR 15–59: single 1 mg/kg dose [FDA].", hepatic: NEP, pregnancy: "Fetal harm reported — use only if life-threatening [FDA] [UNVERIFIED-KNOWLEDGE].", other: "Never SC; ensure a patent IV line [FDA]. Turns urine and skin blue; pulse oximetry reads falsely low [FDA]." },
  tox: { human: "At 3 mg/kg or more: hypotension, wheezing, low oxygenation; at 7 mg/kg or more cumulative: nausea, vomiting, chest pain, fever, haemolysis [FDA].", animal: LD, manage: "Supportive [FDA]." },
  contra: ["Severe hypersensitivity to methylene blue or other thiazine dyes [FDA].", "G6PD deficiency (haemolysis) [FDA]."],
  ae: { common: ["Pain in limbs, blue-green urine, skin discolouration, dizziness, headache, nausea [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Serotonin syndrome with SSRIs, SNRIs, MAOIs and opioids [FDA]", "Anaphylaxis [FDA]", "Haemolytic anaemia [FDA]", "Paradoxical methaemoglobinaemia at high doses [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Methaemoglobin (co-oximetry), not pulse oximetry; haemoglobin [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [
    { drug: "methylthioninium-chloride", indication_id: "metHb", label: "Methaemoglobinaemia — 1 mg/kg IV over 5–30 min", route: "IV", population: ALL, basis: "mg_per_kg", dose: { value: 1, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: {}, weight_basis: "actual", formulations: [{ form: "inj", strength: 5, unit: "mg/mL" }], rounding: "0.1 mL", renal: [], flags: ["May repeat once after 1 hour", "Contraindicated in G6PD deficiency"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Methylene blue injection — FDA label (DailyMed)", M2_DM("691a6872-bc2f-d492-11c6-c3eec25aa3d3")], NEML_SRC],
  dose: { tagline: "Antidote for methaemoglobinaemia — 1 mg/kg IV; not in G6PD deficiency.",
    boxedTitle: "Serotonin syndrome with serotonergic drugs and opioids", boxed: "Methylene blue may cause serious or fatal serotonergic syndrome when used in combination with serotonergic drugs and opioids. Avoid concomitant use of methylene blue with selective serotonin reuptake inhibitors (SSRIs), serotonin norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs) and opioids [FDA].",
    adult: [{ ind: "Methaemoglobinaemia", text: "1 mg/kg IV over 5–30 minutes; repeat once after 1 hour if needed.", calc: ["metHb"] }],
    child: [{ ind: "Methaemoglobinaemia", text: "1 mg/kg IV.", calc: ["metHb"] }] }
});

FDB_M("metirosine", {
  inn: "Metirosine (metyrosine)", atc: "C02KB01", cls: "Tyrosine hydroxylase inhibitor",
  linked: [],
  forms: ["Capsule 250 mg [FDA]."],
  moa: "Blocks catecholamine synthesis [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: ["Renally excreted; crystalluria risk [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Phaeochromocytoma: preoperative preparation, when surgery is contraindicated, or malignant disease [FDA]."], paed: ["12 years and older [FDA]."] },
  adult: [["Phaeochromocytoma", "250 mg four times daily; increase by 250–500 mg each day to a maximum of 4 g/day in divided doses; usually 2–3 g/day [FDA]."], ["Before surgery", "Give the effective dose for at least 5–7 days [FDA]."], ["If not controlled", "Add phenoxybenzamine [FDA]."]],
  paed: { tiers: ["12 years and older: adult dosing [FDA].", "Under 12 years: no dosing schedule available [FDA]."], transition: "Adult from 12.", calcNote: "Titrated — no calculator." },
  adj: { renal: "Drink enough to keep urine output over 2 L/day (crystalluria) [FDA] [UNVERIFIED-KNOWLEDGE].", hepatic: NEP, pregnancy: NEP, other: "Not for essential hypertension [FDA]. Additive sedation with alcohol and depressants [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Sedation, fatigue; at 2–4 g/day anxiety, depression, extrapyramidal signs [FDA].", animal: LD, manage: "Reduce dose; supportive [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Hypersensitivity [FDA]."],
  ae: { common: ["Sedation in almost all patients, diarrhoea [FDA]."], serious: ["Extrapyramidal signs [FDA]", "Crystalluria and urolithiasis [FDA] [UNVERIFIED-KNOWLEDGE]", "Psychic changes on starting or stopping [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Blood pressure; urinary metanephrines; urine output [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Demser (metyrosine) — FDA label (DailyMed)", M2_DM("32fb2f2f-34b5-4cd5-9145-c3ab37c5ca92")], NEML_SRC],
  dose: { tagline: "Blocks catecholamine synthesis in phaeochromocytoma — very sedating.",
    adult: [{ ind: "Phaeochromocytoma", text: "250 mg four times daily, up to 2–3 g/day (maximum 4 g)." }],
    child: [{ ind: "12 years and older", text: "Adult dosing." }] }
});

FDB_M("metolazone", {
  inn: "Metolazone", atc: "C03BA08", cls: "Thiazide-like diuretic",
  linked: [["Heart failure — adults", "Add to a loop diuretic for resistant oedema [UNVERIFIED-KNOWLEDGE]", "hf-adult"]],
  forms: ["Tablets 2.5, 5, 10 mg (Zaroxolyn type); Mykrox 0.5 mg is a different, rapid product — not interchangeable [FDA]."],
  moa: "Inhibits sodium reabsorption in the distal tubule; works even when GFR is low [UNVERIFIED-KNOWLEDGE].",
  pk: ["Diuresis starts within 1 hour and lasts 24 hours or more [FDA]."],
  ind: { adult: ["Oedema of heart failure or kidney disease, including nephrotic syndrome and reduced kidney function [FDA].", "Hypertension [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Oedema (heart failure or kidney disease)", "5–20 mg once daily [FDA]."], ["Hypertension", "2.5–5 mg once daily [FDA]."], ["With a loop diuretic", "Profound diuresis and electrolyte loss — start low and monitor closely [FDA] [UNVERIFIED-KNOWLEDGE]."]],
  paed: { tiers: ["Not established; limited experience [FDA]."], transition: "—", calcNote: "Fixed range." },
  adj: { renal: "Effective in reduced kidney function; contraindicated in anuria [FDA].", hepatic: "Contraindicated in hepatic coma or precoma [FDA].", pregnancy: NEP, other: "Hypokalaemia raises digoxin toxicity [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Orthostatic hypotension, dizziness, drowsiness, syncope, electrolyte disturbance [FDA].", animal: LD, manage: "Fluids and electrolyte replacement [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Anuria [FDA].", "Hepatic coma or precoma [FDA].", "Hypersensitivity to metolazone [FDA]."],
  ae: { common: ["Dizziness, headache, muscle cramps, hypokalaemia [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Severe hypokalaemia, hyponatraemia, hypovolaemia [FDA] [UNVERIFIED-KNOWLEDGE]", "Gout [FDA] [UNVERIFIED-KNOWLEDGE]", "Hyperglycaemia [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Potassium, sodium, creatinine, weight — closely when combined with a loop diuretic [FDA] [UNVERIFIED-KNOWLEDGE]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Metolazone tablets — FDA label (DailyMed)", M2_DM("1e566c10-4498-4f79-8874-4cc8c4216213")], NEML_SRC],
  dose: { tagline: "Thiazide-like diuretic that works at low GFR — powerful with loop diuretics.",
    cautionTitle: "Do not interchange metolazone products", caution: "Mykrox (0.5 mg, rapid) and other metolazone tablets are not bioequivalent — do not swap mg for mg.",
    adult: [{ ind: "Oedema", text: "5–20 mg once daily." }, { ind: "Hypertension", text: "2.5–5 mg once daily." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("metreleptin", {
  inn: "Metreleptin", atc: "A16AA07", cls: "Leptin analogue",
  linked: [],
  forms: ["Powder for injection 11.3 mg vial (5 mg/mL after reconstitution) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Replaces leptin, improving insulin sensitivity and lowering triglycerides [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Complications of leptin deficiency in congenital or acquired generalised lipodystrophy, with diet [FDA]."], paed: ["Same [FDA]."] },
  adult: [["40 kg or less", "Start 0.06 mg/kg/day SC; change by 0.02 mg/kg; maximum 0.13 mg/kg/day [FDA]."], ["Males over 40 kg", "Start 2.5 mg/day; change by 1.25–2.5 mg; maximum 10 mg/day [FDA]."], ["Females over 40 kg", "Start 5 mg/day; change by 1.25–2.5 mg; maximum 10 mg/day [FDA]."]],
  paed: { tiers: ["Same weight- and sex-based dosing [FDA].", "Use preservative-free water for neonates and infants (benzyl alcohol) [FDA]."], transition: "Same.", calcNote: "40 kg or less: mg/kg." },
  adj: { renal: NEP, hepatic: NEP, pregnancy: NEP, other: "Hypoglycaemia with insulin or sulfonylureas — reduce those doses [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Prolonged 10-fold overdose in an infant: severe anorexia with vitamin and zinc deficiency [FDA].", animal: LD, manage: "Supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["General obesity not due to congenital leptin deficiency [FDA].", "Hypersensitivity to metreleptin [FDA]."],
  ae: { common: ["Headache, hypoglycaemia, weight loss, abdominal pain [FDA]."], serious: ["Neutralising anti-metreleptin antibodies with severe infection or worse metabolic control [FDA]", "T-cell lymphoma [FDA]", "Hypoglycaemia [FDA]", "Autoimmune disease progression [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Glucose, HbA1c, triglycerides; antibody testing if infections or loss of effect [FDA]."],
  local: notBT,
  calc: [
    { drug: "metreleptin", indication_id: "le40", label: "Lipodystrophy, 40 kg or less — start 0.06 mg/kg/day SC", route: "SC", population: { min_age_months: null, max_age_months: null, min_weight_kg: null, max_weight_kg: 40.0001 }, basis: "mg_per_kg", dose: { value: 0.06, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: { max_mg_per_kg_dose: 0.13 }, weight_basis: "actual", formulations: [{ form: "reconstituted", strength: 5, unit: "mg/mL" }], rounding: "0.01 mL", renal: [], flags: ["Adjust by 0.02 mg/kg", "Maximum 0.13 mg/kg/day"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Myalept (metreleptin) — FDA label (DailyMed)", M2_DM("d3b50bbd-140b-425c-b5ec-d4682aad62bc")], NEML_SRC],
  dose: { tagline: "Leptin replacement for generalised lipodystrophy — restricted programme.",
    boxedTitle: "Risk of anti-metreleptin antibodies with neutralising activity and risk of lymphoma", boxed: "Anti-metreleptin antibodies with neutralizing activity have been identified in patients treated with MYALEPT. The consequences of these neutralizing antibodies are not well characterized but could include inhibition of endogenous leptin action and/or loss of MYALEPT efficacy. Severe infection and/or worsening metabolic control have been reported. Test for anti-metreleptin antibodies with neutralizing activity in patients who develop severe infections or show signs suspicious for loss of MYALEPT efficacy during treatment. Contact Chiesi Farmaceutici S.p.A. at 1-866-216-1526 for neutralizing antibody testing of clinical samples. T-cell lymphoma has been reported in patients with acquired generalized lipodystrophy, both treated and not treated with MYALEPT. Carefully consider the benefits and risks of treatment with MYALEPT in patients with significant hematologic abnormalities and/or acquired generalized lipodystrophy. Because of these risks associated with the development of anti-metreleptin antibodies that neutralize endogenous leptin and/or MYALEPT and the risk for lymphoma, MYALEPT is available only through a restricted program under a Risk Evaluation and Mitigation Strategy (REMS) called the MYALEPT REMS PROGRAM [FDA].",
    adult: [{ ind: "Generalised lipodystrophy", text: "Over 40 kg: men start 2.5 mg/day, women 5 mg/day; maximum 10 mg/day." }],
    child: [{ ind: "40 kg or less", text: "Start 0.06 mg/kg/day; maximum 0.13 mg/kg/day.", calc: ["le40"] }] }
});

FDB_M("metyrapone", {
  inn: "Metyrapone", atc: "V04CD01", cls: "11-beta-hydroxylase inhibitor (diagnostic)",
  linked: [],
  forms: ["Capsule 250 mg [FDA]."],
  moa: "Blocks the last step of cortisol synthesis; a normal pituitary raises ACTH and 11-deoxycortisol [FDA] [UNVERIFIED-KNOWLEDGE].",
  pk: [NEP],
  ind: { adult: ["Diagnosis of adrenal insufficiency (with other tests) [FDA]."], paed: ["Same [FDA]."] },
  adult: [["Single-dose overnight test", "30 mg/kg (maximum 3 g) at midnight with milk, yoghurt or a snack; take blood for 11-deoxycortisol and/or ACTH at 7:30–8:00 a.m. [FDA]."], ["Before", "Stop drugs affecting pituitary or adrenal function (at least 5 half-lives); confirm adrenal response to ACTH first [FDA]."], ["Safety", "Admit overnight if adrenal insufficiency is suspected; consider a glucocorticoid dose after sampling [FDA]."]],
  paed: { tiers: ["Same 30 mg/kg (maximum 3 g) [FDA]."], transition: "Same.", calcNote: "30 mg/kg, max 3 g." },
  adj: { renal: NEP, hepatic: "Slower response in cirrhosis [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Phenytoin and other enzyme inducers give false results [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "GI symptoms and acute adrenal insufficiency; a child died after two 2 g doses [FDA].", animal: LD, manage: "Hydrocortisone; supportive [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Adrenal cortical insufficiency [FDA].", "Hypersensitivity [FDA]."],
  ae: { common: ["Nausea, vomiting, dizziness, headache, sedation [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Acute adrenal insufficiency [FDA]"] },
  monitor: ["Observe overnight in suspected insufficiency [FDA]."],
  local: notBT,
  calc: [
    { drug: "metyrapone", indication_id: "test", label: "Overnight test — 30 mg/kg at midnight (max 3 g)", route: "PO", population: ALL, basis: "mg_per_kg", dose: { value: 30, unit: "mg", per: "dose" }, interval_h: null, divided_doses: 1, caps: { max_single: 3000, unit: "mg" }, round_to: 250, weight_basis: "actual", formulations: [{ form: "cap", strength: 250, unit: "mg/cap", whole: true }], rounding: "Whole capsules (nearest 250 mg)", renal: [], flags: ["Blood sample 7:30–8:00 a.m.", "Admit if adrenal insufficiency suspected"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Metopirone (metyrapone) — FDA label (DailyMed)", M2_DM("4046b167-7a46-8f4a-e063-6394a90a147f")], NEML_SRC],
  dose: { tagline: "Overnight test of the pituitary–adrenal axis — 30 mg/kg at midnight.",
    adult: [{ ind: "Adrenal insufficiency test", text: "30 mg/kg (maximum 3 g) at midnight with food.", calc: ["test"] }],
    child: [{ ind: "Adrenal insufficiency test", text: "30 mg/kg (maximum 3 g).", calc: ["test"] }] }
});

FDB_M("mexiletine", {
  inn: "Mexiletine", atc: "C01BB02", cls: "Class IB antiarrhythmic",
  linked: [],
  forms: ["Capsules 150, 200, 250 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Sodium-channel blocker shortening the action potential [UNVERIFIED-KNOWLEDGE].",
  pk: ["Hepatic metabolism (CYP2D6, 1A2) [FDA] [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Documented life-threatening ventricular arrhythmias such as sustained VT; start in hospital [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Start", "200 mg every 8 hours with food or antacid when rapid control is not essential [FDA]."], ["Titration", "Change by 50–100 mg at least 2–3 days apart; most respond to 200–300 mg every 8 hours [FDA]."], ["Maximum", "400 mg every 8 hours if tolerated; no more than 1,200 mg/day [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "—", calcNote: "Titrated — no calculator." },
  adj: { renal: "Usual doses in kidney failure [FDA].", hepatic: "Severe liver disease: lower doses, close monitoring [FDA].", pregnancy: NEP, other: "Use only for life-threatening arrhythmias (CAST) [FDA]." },
  tox: { human: "Drowsiness, confusion, nausea, hypotension, bradycardia, seizures, AV block, asystole, ventricular tachyarrhythmia [FDA].", animal: LD, manage: "Supportive; atropine for bradycardia [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Cardiogenic shock [FDA].", "Second- or third-degree AV block without a pacemaker [FDA]."],
  ae: { common: ["Nausea, vomiting, heartburn, tremor, dizziness, ataxia, nervousness [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Proarrhythmia and increased mortality in non-life-threatening arrhythmias [FDA]", "Acute liver injury [FDA]", "DRESS [FDA]", "Seizures [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["ECG and Holter during titration; liver tests [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Mexiletine hydrochloride capsules — FDA label (DailyMed)", M2_DM("1c6024e9-760b-40a4-9ef1-b75b269c582a")], NEML_SRC],
  dose: { tagline: "Class IB antiarrhythmic for life-threatening ventricular arrhythmias only.",
    boxedTitle: "Mortality (CAST)", boxed: "In the National Heart, Lung and Blood Institute's Cardiac Arrhythmia Suppression Trial (CAST), a long-term, multicentered, randomized, double-blind study in patients with asymptomatic non-life-threatening ventricular arrhythmias who had a myocardial infarction more than six days but less than two years previously, an excessive mortality or non-fatal cardiac arrest rate (7.7%) was seen in patients treated with encainide or flecainide compared with that seen in patients assigned to carefully matched placebo-treated groups (3.0%). The average duration of treatment with encainide or flecainide in this study was ten months. The applicability of the CAST results to other populations (e.g., those without recent myocardial infarction) is uncertain. Considering the known proarrhythmic properties of mexiletine and the lack of evidence of improved survival for any antiarrhythmic drug in patients without life-threatening arrhythmias, the use of mexiletine as well as other antiarrhythmic agents should be reserved for patients with life-threatening ventricular arrhythmia [FDA].",
    adult: [{ ind: "Life-threatening ventricular arrhythmia", text: "200 mg every 8 h with food; usual 200–300 mg every 8 h; maximum 1,200 mg/day." }],
    child: [{ ind: "Children", text: "Not established." }] }
});

FDB_M("micafungin", {
  inn: "Micafungin", atc: "J02AX05", cls: "Echinocandin antifungal",
  linked: [],
  forms: ["Powder for injection 50 and 100 mg; premixed bags 50, 100, 150 mg (only for those exact doses) [FDA]."],
  moa: "Inhibits fungal cell wall beta-1,3-D-glucan synthesis [UNVERIFIED-KNOWLEDGE].",
  pk: ["Highly protein bound; not dialysable [FDA]."],
  ind: { adult: ["Candidaemia, disseminated candidiasis, Candida peritonitis and abscesses [FDA].", "Oesophageal candidiasis [FDA].", "Prophylaxis in stem cell transplant recipients [FDA]."], paed: ["Same, from 4 months; candidaemia also under 4 months [FDA]."] },
  adult: [["Candidaemia, invasive candidiasis", "100 mg IV daily [FDA]."], ["Oesophageal candidiasis", "150 mg IV daily [FDA]."], ["HSCT prophylaxis", "50 mg IV daily [FDA]."], ["Infusion", "Over 1 hour [FDA]."]],
  paed: { tiers: ["4 months and older, 30 kg or less: candidaemia 2 mg/kg/day (max 100 mg); oesophageal 3 mg/kg/day; prophylaxis 1 mg/kg/day (max 50 mg) [FDA].", "Over 30 kg: candidaemia 2 mg/kg (max 100 mg); oesophageal 2.5 mg/kg (max 150 mg) [FDA].", "Under 4 months: candidaemia without meningoencephalitis or eye involvement 4 mg/kg/day [FDA]."], transition: "Adult doses.", calcNote: "mg/kg daily." },
  adj: { renal: "No adjustment [UNVERIFIED-KNOWLEDGE].", hepatic: "Monitor liver tests [FDA].", pregnancy: NEP, other: "Premixed bags only for exact 50, 100 or 150 mg doses [FDA]." },
  tox: { human: "Up to 8 mg/kg daily tolerated in adults [FDA].", animal: LD, manage: "Supportive; not dialysable [FDA]." },
  contra: ["Hypersensitivity to micafungin, components or other echinocandins [FDA]."],
  ae: { common: ["Nausea, vomiting, diarrhoea, headache, fever, phlebitis, rash [FDA] [UNVERIFIED-KNOWLEDGE]."], serious: ["Anaphylaxis [FDA]", "Haemolysis and haemolytic anaemia [FDA]", "Hepatic dysfunction [FDA]", "Kidney impairment [FDA] [UNVERIFIED-KNOWLEDGE]"] },
  monitor: ["Liver tests, blood counts, kidney function [FDA]."],
  local: notBT,
  calc: [
    { drug: "micafungin", indication_id: "cand_child", label: "Candidaemia, child 4 months+ — 2 mg/kg/day (max 100 mg)", route: "IV", population: { min_age_months: 4, max_age_months: 216, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 2, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: { max_single: 100, unit: "mg" }, weight_basis: "actual", formulations: [{ form: "vial", strength: 50, unit: "mg/vial" }], rounding: "1 mg", infusion: { duration_h: 1 }, renal: [], flags: ["Over 1 hour"], sources: ["FDA"] },
    { drug: "micafungin", indication_id: "cand_neo", label: "Candidaemia, under 4 months — 4 mg/kg/day", route: "IV", population: { min_age_months: 0, max_age_months: 4, min_weight_kg: null, max_weight_kg: null }, basis: "mg_per_kg", dose: { value: 4, unit: "mg", per: "dose" }, interval_h: 24, divided_doses: null, caps: {}, weight_basis: "actual", formulations: [{ form: "vial", strength: 50, unit: "mg/vial" }], rounding: "0.5 mg", infusion: { duration_h: 1 }, renal: [], flags: ["Without meningoencephalitis or eye involvement"], sources: ["FDA"] }
  ],
  sources: [["FDA", "Micafungin in Sodium Chloride Injection — FDA label (DailyMed)", M2_DM("a95f901e-0ac4-4ec0-9720-9c6a066cd06c")], NEML_SRC],
  dose: { tagline: "Daily IV echinocandin for invasive Candida.",
    adult: [{ ind: "Candidaemia", text: "100 mg IV daily." }, { ind: "Oesophageal candidiasis", text: "150 mg IV daily." }, { ind: "HSCT prophylaxis", text: "50 mg IV daily." }],
    child: [{ ind: "Candidaemia (4 months+)", text: "2 mg/kg/day (maximum 100 mg).", calc: ["cand_child"] }, { ind: "Under 4 months", text: "4 mg/kg/day.", calc: ["cand_neo"] }] }
});

FDB_M("midodrine", {
  inn: "Midodrine", atc: "C01CA17", cls: "Alpha-1 agonist (prodrug)",
  linked: [["Syncope — adults", "Symptomatic orthostatic hypotension [FDA]", "syncope-adult"]],
  forms: ["Tablets 2.5, 5, 10 mg [FDA] [UNVERIFIED-KNOWLEDGE]."],
  moa: "Active metabolite desglymidodrine constricts arterioles and veins [UNVERIFIED-KNOWLEDGE].",
  pk: ["Short acting (about 2–4 hours) [UNVERIFIED-KNOWLEDGE]."],
  ind: { adult: ["Symptomatic orthostatic hypotension when life is considerably impaired despite standard care [FDA]."], paed: ["Not established [FDA]."] },
  adult: [["Orthostatic hypotension", "10 mg three times daily in the daytime — on rising, midday, late afternoon (not after 6 p.m.); doses may be 3 hours apart but not closer [FDA]."], ["Bedtime", "Not after the evening meal or within 4 hours of bed (supine hypertension) [FDA]."], ["Continue", "Only if symptoms improve [FDA]."]],
  paed: { tiers: ["Not established [FDA]."], transition: "—", calcNote: "Fixed dose." },
  adj: { renal: "Start 2.5 mg in kidney impairment [UNVERIFIED-KNOWLEDGE]; contraindicated in acute kidney disease [FDA].", hepatic: "Caution [FDA] [UNVERIFIED-KNOWLEDGE].", pregnancy: NEP, other: "Bradycardia; caution with digoxin, beta-blockers and other pressors [FDA] [UNVERIFIED-KNOWLEDGE]." },
  tox: { human: "Hypertension, goosebumps, coldness, urinary retention [FDA].", animal: LD, manage: "Emesis early; alpha-blocker for hypertension; dialysable [FDA] [UNVERIFIED-KNOWLEDGE]." },
  contra: ["Severe organic heart disease; acute kidney disease; urinary retention; phaeochromocytoma; thyrotoxicosis [FDA].", "Persistent and excessive supine hypertension [FDA]."],
  ae: { common: ["Supine and sitting hypertension, scalp itching and paraesthesia, goosebumps, chills, urinary urgency or retention [FDA]."], serious: ["Severe supine hypertension (over 200 mmHg systolic) [FDA]", "Bradycardia [FDA]"] },
  monitor: ["Supine and standing blood pressure regularly [FDA]."],
  local: notBT,
  calc: [],
  sources: [["FDA", "Midodrine hydrochloride tablets — FDA label (DailyMed)", M2_DM("5a6705af-bb72-4edb-863a-93a351bd6dba")], NEML_SRC],
  dose: { tagline: "Daytime-only pressor for disabling orthostatic hypotension — watch supine BP.",
    boxedTitle: "Supine hypertension; clinical benefit not verified", boxed: "Because midodrine hydrochloride can cause marked elevation of supine blood pressure, it should be used in patients whose lives are considerably impaired despite standard clinical care. The indication for use of midodrine hydrochloride in the treatment of symptomatic orthostatic hypotension is based primarily on a change in a surrogate marker of effectiveness, an increase in systolic blood pressure measured one minute after standing, a surrogate marker considered likely to correspond to a clinical benefit. At present, however, clinical benefits of midodrine hydrochloride, principally improved ability to carry out activities of daily living, have not been verified [FDA].",
    adult: [{ ind: "Orthostatic hypotension", text: "10 mg three times daily, daytime only; last dose before 6 p.m." }],
    child: [{ ind: "Children", text: "Not established." }] }
});
})(); // end M-2 scope

/* Brand names — BATCH M2 (India: PharmEasy; Bangladesh: MedEx; cleaned for product form) */
(function () { const B = {"mesalazine":{"IN":[["Mesalmile","Steris Healthcare","Mesalmile Od Strip Of 10 Tablets"],["Rowasa","Abbott India Ltd","Rowasa 1Gm Sachet Of 1852Mg Pellets"],["Mesacol","Sun Pharma","Mesacol Cr 1G Sachet Of 1 Granules"]],"BD":[["Mesacol","Sun Pharmaceutical (Bangladesh) Ltd","400 mg"],["Mesagut","Aristopharma Ltd","400 mg"],["Canasa","Drug International Ltd","400 mg"]],"src":["https://pharmeasy.in/online-medicine-order/mesalmile-od-strip-of-10-tablets-3803126","https://pharmeasy.in/online-medicine-order/rowasa-1gm-sach-785","https://pharmeasy.in/online-medicine-order/mesacol-cr-1gm-granule-1-s-230917","https://medex.com.bd/brands/103/mesacol-400-mg-dr-tablet","https://medex.com.bd/brands/17237/mesagut-400-mg-dr-tablet","https://medex.com.bd/brands/17238/canasa-400-mg-dr-tablet"]},"mesna":{"IN":[["Meszee","Zee Laboratories Ltd","Meszee 200Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Ifomes","Beacon Pharmaceuticals PLC","400 mg/4 ml"],["Mes-D","Drug International Ltd","400 mg/4 ml"]],"src":["https://pharmeasy.in/online-medicine-order/meszee-200-mg-dry-vial-of-1-powder-for-injection-4827913","https://medex.com.bd/brands/17253/ifomes-400-mg-injection","https://medex.com.bd/brands/22079/mes-d-400-mg-injection"]},"methenamine":{"IN":[["Huena","Cipla Limited","Huena 1Gm Strip Of 10 Tablets"],["Methaclear","Dr Reddy's Laboratories Ltd","Methaclear 1Gm Strip Of 10 Tablets"],["Hipurase","Intas Pharmaceuticals Ltd","Hipurase Strip Of 10 Tablets"]],"BD":[["Hipomax","Nuvista Pharma PLC","1 gm"],["Methebac","Navana Pharmaceuticals Ltd","1 gm"],["Uticure","Incepta Pharmaceuticals Ltd","1 gm"]],"src":["https://pharmeasy.in/online-medicine-order/huena-1gm-strip-of-10-tablets-4487624","https://pharmeasy.in/online-medicine-order/methaclear-1gm-strip-of-10-tablets-4679653","https://pharmeasy.in/online-medicine-order/hipurase-strip-of-10-tablets-4685253","https://medex.com.bd/brands/30462/hipomax-1-gm-tablet","https://medex.com.bd/brands/32485/methebac-1-gm-tablet","https://medex.com.bd/brands/33979/uticure-1-gm-tablet"]},"methocarbamol":{"IN":[],"BD":[["Methomol","Square Pharmaceuticals PLC","500 mg"],["Mecab","Beacon Pharmaceuticals PLC","500 mg"],["Methoflex","DBL Pharmaceuticals Ltd","500 mg"]],"src":["https://medex.com.bd/brands/36410/methomol-500-mg-tablet","https://medex.com.bd/brands/37096/mecab-500-mg-tablet","https://medex.com.bd/brands/37566/methoflex-500-mg-tablet"]},"methoxsalen":{"IN":[["Melanocyl","Franco Indian Pharmaceuticals Pvt Ltd","Melanocyl 10Mg Strip Of 40 Tablets"],["Kuvagold","Kivi Labs Limited","Kuvagold 20 Strip Of 10 Tablets"],["Meladerm","Inga Laboratories Pvt Ltd","Meladerm 10Mg Strip Of 30 Tablets"]],"BD":[["Vitilen","Ziska Pharmaceuticals Ltd","1%"]],"src":["https://pharmeasy.in/online-medicine-order/melanocyl-10mg-tablet-40-s-10872","https://pharmeasy.in/online-medicine-order/kuvagold-20-tab-10-s-223302","https://pharmeasy.in/online-medicine-order/meladerm-10mg-tablet-13463","https://medex.com.bd/brands/16616/vitilen-1-lotion"]},"methoxy-polyethylene-glycol-epoetin-beta":{"IN":[["Mircera","Roche Limited","Mircera 75Mcg Pre Filled Syringe Of 0.3Ml Solution For Injection"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/mircera-75mcg-pre-filled-syringe-injection-0-3ml-23541"]},"methylphenidate":{"IN":[["Inspiral","Ipca Laboratories","Inspiral 10Mg Strip Of 10 Tablets"]],"BD":[["Methyphen","General Pharmaceuticals Ltd","10 mg"],["Alaradate","Incepta Pharmaceuticals Ltd","10 mg"]],"src":["https://pharmeasy.in/online-medicine-order/inspiral-10mg-tab-14865","https://medex.com.bd/brands/29132/methyphen-10-mg-tablet","https://medex.com.bd/brands/37864/alaradate-10-mg-tablet"]},"metolazone":{"IN":[["Zytanix","Zydus Healthcare Limited","Zytanix 2.5Mg Strip Of 15 Tablets"],["Metalonix","Steris Healthcare","Metalonix 5Mg Strip Of 10 Tablets"],["Metoz","Centaur Pharmaceuticals Pvt Ltd","Metoz 2.5Mg Strip Of 10 Tablets"]],"BD":[["Merozolyn","UniMed UniHealth Pharmaceuticals Ltd","5 mg"]],"src":["https://pharmeasy.in/online-medicine-order/zytanix-2-5mg-strip-of-15-tablets-3804272","https://pharmeasy.in/online-medicine-order/metalonix-5mg-strip-of-10-tablets-4505397","https://pharmeasy.in/online-medicine-order/metoz-2-5mg-tablet-5973","https://medex.com.bd/brands/16621/merozolyn-5-mg-tablet"]},"mexiletine":{"IN":[["Mexohar","Cipla Limited","Mexohar 150Mg Bottle Of 30 Capsules"],["Rhymex","Chemo Healthcare Pvt Ltd","Rhymex 150Mg Bottle Of 30 Capsules"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/mexohar-150mg-capsule-30-s-218133","https://pharmeasy.in/online-medicine-order/rhymex-150mg-bottle-of-30-capsules-4865980"]},"micafungin":{"IN":[["Mycamine","Astellas India Pvt Ltd","Mycamine 100Mg Vial Of 1 Powder For Injection"],["Brumica","Brawn Laboratories Ltd","Brumica 100Mg Dry Vial Of 1 Powder For Injection"],["Micawem","Wembrace Biopharma Private Limited","Micawem 50Mg Dry Vial Of 1 Powder For Injection"]],"BD":[["Micagin","Incepta Pharmaceuticals Ltd","50 mg/vial"]],"src":["https://pharmeasy.in/online-medicine-order/mycamine-100-mg-injection-1-no-s-4123114","https://pharmeasy.in/online-medicine-order/brumica-100mg-dry-vial-of-1-powder-for-injection-3824501","https://pharmeasy.in/online-medicine-order/micawem-50mg-dry-vial-of-1-powder-for-injection-4128368","https://medex.com.bd/brands/33556/micagin-50-mg-iv-infusion"]},"midodrine":{"IN":[["Midgeo","Centaur Pharmaceuticals Pvt Ltd","Midgeo 2.5Mg Strip Of 10 Tablets"],["Midoright","Steris Healthcare","Midoright 5Mg Strip Of 10 Tablets"],["Cipmido","Cipla Limited","Cipmido 2.5Mg Strip Of 20 Tablets"]],"BD":[],"src":["https://pharmeasy.in/online-medicine-order/midgeo-2-5mg-strip-of-10-tablets-3499634","https://pharmeasy.in/online-medicine-order/midoright-5mg-strip-of-10-tablets-4489988","https://pharmeasy.in/online-medicine-order/cipmido-2-5mg-strip-of-20-tablets-3594330"]}};
  Object.entries(B).forEach(([id,b]) => { if (window.FDB && window.FDB[id] && !((window.FDB[id].brands||{}).IN||[]).length) window.FDB[id].brands = b; }); })();
