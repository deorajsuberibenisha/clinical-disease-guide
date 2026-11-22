/* Thyroid and pre-eclampsia drug cards. Reused: propranolol (note appended), labetalol, hydralazine, hydralazine_iv, nifedipine, methyldopa, aspirin, calcium_gluconate, dexamethasone, hydrocortisone_iv.
   Sources: Bhutan STG 2024 §5.1, §5.2, §11.5; NEML 2025 / NEMF; BNF and BNFc; ATA 2016 and 2017 guidelines; WHO 2011/2018 pre-eclampsia recommendations. */
Object.assign(GUIDE.drugs, {
thyroxine: {
  name: "Levothyroxine (thyroxine)", cls: "Thyroid hormone (T4)", brands: "Thyronorm, Eltroxin",
  bt: "Listed — 50 microgram and 25 microgram tablets (NRH/RRH/DH)",
  moa: "<p>Synthetic T4, converted to active T3 in tissues. Long half-life (about 7 days): steady state takes 6 weeks, so check TSH no sooner than 6–8 weeks after a dose change.</p>",
  ind: "<p>Primary hypothyroidism; congenital hypothyroidism; after thyroidectomy or radioiodine; subclinical hypothyroidism with TSH over 10 mU/L, or in pregnancy.</p>",
  ci: "<p>Untreated thyrotoxicosis; untreated adrenal insufficiency (give steroid first).</p>",
  adult: "<p><b>Under 60 and healthy:</b> full dose about <b>1.6 microgram/kg/day</b> (often 75–125 microgram). <b>60 or over, or heart disease:</b> start <b>25 microgram daily</b>, increase by 25 microgram every 4–6 weeks. Take on an empty stomach, 30–60 minutes before breakfast, away from iron, calcium and antacids (4 hours).</p><p><b>Pregnancy:</b> increase the dose by about 25–30% (e.g. two extra tablets a week) as soon as pregnancy is confirmed; TSH 4-weekly in the first half.</p>",
  child: "<p><b>Congenital hypothyroidism:</b> 10–15 microgram/kg once daily, started within the first 2 weeks of life (crush the tablet in a little milk or water; do not mix with soya formula). <b>Older children:</b> about 100 microgram/m² daily; typical 2–12 years 50–100 microgram, adolescents as adults.</p>",
  preg: "<p>Essential; increase dose (see adult).</p>", bf: "<p>Compatible.</p>",
  elderly: "<p>Start low and go slow: angina and atrial fibrillation can be unmasked.</p>",
  inter: "<p>Iron, calcium, antacids, PPIs reduce absorption; enzyme inducers (rifampicin, carbamazepine, phenytoin) increase needs; increases warfarin effect.</p>",
  ae: "<p>Over-replacement: palpitations, AF, tremor, bone loss. Under-replacement: persistent symptoms.</p>",
  mon: "<p>TSH 6–8 weeks after each change, then yearly once stable. Central hypothyroidism: follow free T4, not TSH.</p>",
  src: "<p>Bhutan STG 2024 §5.2; NEML/NEMF 2025; BNF/BNFc; ATA 2014 hypothyroidism guideline; ESPE 2020 congenital hypothyroidism consensus.</p>"
},
carbimazole: {
  name: "Carbimazole", cls: "Antithyroid drug (thionamide; prodrug of methimazole)", brands: "Neo-Mercazole",
  bt: "Listed — 5 mg tablet (NRH/RRH/DH)",
  moa: "<p>Blocks thyroid peroxidase, stopping new hormone synthesis. Stored hormone takes 4–8 weeks to run down, so a beta-blocker covers symptoms meanwhile.</p>",
  ind: "<p>Graves' disease (first-line, usually 12–18 months), toxic nodular goitre before definitive treatment, thyroid storm (with other measures).</p>",
  ci: "<p>Previous agranulocytosis or severe reaction to a thionamide; <b>first trimester of pregnancy</b> (embryopathy) unless no alternative.</p>",
  adult: "<p><b>20–40 mg daily</b> (STG: 15–60 mg in 2–3 divided doses) until euthyroid (4–8 weeks), then taper to <b>5–15 mg daily</b> for 12–18 months total (titration regimen). Thyroid storm: 20–30 mg every 6 hours (or methimazole 20 mg every 4–6 hours).</p>",
  child: "<p>1 month–11 years: <b>0.75 mg/kg/day</b> (in divided doses, maximum 30 mg/day) until euthyroid, then reduce. 12 years and over: as adults.</p>",
  preg: "<p>Avoid in the first trimester (use propylthiouracil if available — not on NEML); carbimazole is preferred from the second trimester at the lowest dose keeping free T4 at the upper end of normal.</p>", bf: "<p>Compatible at usual doses (up to about 15 mg).</p>",
  hep: "<p>Use with caution; stop if hepatitis develops.</p>",
  ae: "<p><b>Agranulocytosis (about 1 in 300–500, usually in the first 3 months)</b>: anyone with sore throat, mouth ulcers or fever must stop the tablets and have an urgent blood count. Also rash, itch, joint pain, hepatitis (rare).</p>",
  mon: "<p>TFTs every 4–6 weeks while titrating; baseline FBC and liver tests.</p>",
  other: "<p class='warn'>Give every patient written advice about sore throat and fever (MHRA/BNF).</p>",
  src: "<p>Bhutan STG 2024 §5.1; NEML/NEMF 2025; BNF/BNFc; ATA 2016 hyperthyroidism guideline; ETA 2018 Graves' guideline.</p>"
},
ptu: {
  name: "Propylthiouracil (PTU)", cls: "Antithyroid drug (thionamide)",
  bt: "Not listed — not on NEML 2025",
  moa: "<p>Blocks hormone synthesis and also peripheral conversion of T4 to T3, which is why it is preferred in thyroid storm and in the first trimester.</p>",
  ind: "<p>Hyperthyroidism in the first trimester of pregnancy; thyroid storm; intolerance of carbimazole (not agranulocytosis).</p>",
  ci: "<p>Children (risk of severe liver failure), liver disease.</p>",
  adult: "<p>50–150 mg three times daily; thyroid storm 500–1000 mg loading, then 250 mg every 4 hours. First trimester: lowest effective dose, switch to carbimazole from the second trimester.</p>",
  child: "<p>Avoid (liver failure).</p>",
  preg: "<p>Preferred in the first trimester.</p>",
  ae: "<p>Severe hepatotoxicity, agranulocytosis, vasculitis.</p>",
  src: "<p>ATA 2016 and 2017 guidelines; BNF.</p>"
},
mgso4_obs: {
  name: "Magnesium sulphate (pre-eclampsia and eclampsia)", cls: "Anticonvulsant (prevents and treats eclamptic seizures)", brands: "MgSO₄ 50% (2 mL ampoule = 1 g)",
  bt: "Listed — 50% injection, 2 mL ampoule (NRH/RRH/DH); every facility conducting deliveries should stock it",
  moa: "<p>Calcium antagonist at the neuromuscular junction and cerebral vessels; halves the risk of eclampsia in pre-eclampsia (MAGPIE) and is better than diazepam or phenytoin for eclamptic fits.</p>",
  ind: "<p>Eclampsia; pre-eclampsia with severe features; often all pre-eclampsia in labour or before delivery in low-resource settings (WHO).</p>",
  ci: "<p>Myasthenia gravis, heart block; reduce maintenance in oliguria or kidney failure.</p>",
  adult: "<p><b>IM (Pritchard; Bhutan STG):</b> loading 4 g IV over 5 minutes (8 mL of 50% + 12 mL water = 20%) <b>plus</b> 10 g IM (5 g, 10 mL of 50%, deep IM in each buttock, with 1 mL 2% lignocaine); then <b>5 g IM every 4 hours</b> into alternate buttocks. <b>IV (Zuspan):</b> 4 g IV over 5–15 minutes, then 1 g/hour infusion. Recurrent fit: 2 g IV over 5 minutes. Continue for 24 hours after delivery or the last fit, whichever is later.</p>",
  preg: "<p>Indicated.</p>",
  renal: "<p>Urine output under 100 mL in 4 hours: withhold the next IM dose or halve the infusion; check reflexes and breathing hourly.</p>",
  tox: "<p><b>Before each dose check:</b> knee reflexes present, breathing 12 or more per minute, urine 100 mL or more in the last 4 hours (STG). If breathing fails: stop, support ventilation, give <b>calcium gluconate 10%, 10 mL (1 g) IV over 10 minutes</b>.</p>",
  ae: "<p>Flushing, warmth, pain at IM sites; toxicity: loss of reflexes, then respiratory depression, then cardiac arrest.</p>",
  src: "<p>Bhutan STG 2024 §11.5; NEMF 2025; WHO recommendations for prevention and treatment of pre-eclampsia and eclampsia (2011, updated 2018); Magpie Trial (Lancet 2002).</p>"
}
});
if (GUIDE.drugs.propranolol) GUIDE.drugs.propranolol.other = (GUIDE.drugs.propranolol.other || "") + "<p><b>Thyrotoxicosis:</b> 10–40 mg three or four times daily for symptoms while antithyroid drugs take effect (the STG's 40 mg once daily is usually too little to control a fast heart rate); thyroid storm 60–80 mg every 4 hours. Avoid in asthma (use diltiazem). Child: 0.25–0.5 mg/kg three times daily.</p>";
