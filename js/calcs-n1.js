/* New-disease batch N-1 calculators (27 Nov 2026). File: js/calcs-n1.js
   pleuralfluid: Light 1972 criteria; BTS 2023 pleural infection rules (pH ≤7.2 drain; 7.2–7.4 + LDH over 900 consider; glucose
   under 3.3 mmol/L if no pH); Bhutan NTP ADA over 40 U/L. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const r1 = v => Math.round(v * 10) / 10, r2 = v => Math.round(v * 100) / 100;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  pleuralfluid(el, U) {
    el.innerHTML = `<h4>Pleural fluid: Light's criteria and infection rules (Light 1972 / BTS 2023 / Bhutan NTP)</h4><div class="row"><label>Fluid protein (g/L)<input type="number" step="any" data-k="fp" placeholder="e.g. 52"></label><label>Serum protein (g/L)<input type="number" step="any" data-k="sp" placeholder="e.g. 70"></label><label>Fluid LDH (IU/L)<input type="number" step="any" data-k="fl" placeholder="e.g. 420"></label><label>Serum LDH (IU/L)<input type="number" step="any" data-k="sl" placeholder="e.g. 210"></label><label>Upper normal serum LDH (IU/L)<input type="number" step="any" data-k="ul" placeholder="e.g. 250"></label><label>Fluid pH<input type="number" step="any" data-k="ph" placeholder="optional"></label><label>Fluid glucose (mmol/L)<input type="number" step="any" data-k="glu" placeholder="optional"></label><label>ADA (U/L)<input type="number" step="any" data-k="ada" placeholder="optional"></label></div><div class="checks" style="margin-top:8px">${chk("pus", "Frank pus on aspiration")}${chk("lym", "Lymphocytes predominate")}</div><div class="out" aria-live="polite">Enter protein and LDH values.</div>`;
    const go = () => {
      const n = k => U.num(U.$(`[data-k=${k}]`, el)), c = k => U.$(`[data-k=${k}]`, el).checked;
      const fp = n("fp"), sp = n("sp"), fl = n("fl"), sl = n("sl"), ul = n("ul"), ph = n("ph"), glu = n("glu"), ada = n("ada"), out = U.$(".out", el);
      const L = [];
      const crit = [];
      if (fp > 0 && sp > 0) crit.push(["protein ratio", fp / sp, fp / sp > 0.5]);
      if (fl > 0 && sl > 0) crit.push(["LDH ratio", fl / sl, fl / sl > 0.6]);
      if (fl > 0 && ul > 0) crit.push(["fluid LDH vs 2/3 upper normal", fl / ul, fl > (2 / 3) * ul]);
      if (crit.length) {
        const ex = crit.some(x => x[2]);
        L.push(`<b>${ex ? "EXUDATE" : crit.length === 3 ? "TRANSUDATE" : "Transudate so far — enter all three values"}</b> by Light's criteria (${crit.map(x => `${x[0]} ${r2(x[1])}${x[2] ? " ✔" : ""}`).join("; ")}).${ex ? "" : crit.length === 3 ? " Treat the cause (heart failure, cirrhosis, nephrotic syndrome); avoid repeated taps." : ""}`);
      }
      if (c("pus")) L.push("<b>Frank pus = empyema</b>: small-bore chest drain (14 F or smaller) under ultrasound + antibiotics (ceftriaxone + metronidazole, or amoxicillin–clavulanate).");
      else if (ph > 0) {
        if (ph < 6.5 || ph > 8) L.push("Check pH value (expected 6.5–8.0).");
        else if (ph <= 7.2) L.push(`<b>pH ${ph} — high risk of complicated parapneumonic effusion / infection: insert a chest drain</b> if a safe pocket on ultrasound (BTS 2023).`);
        else if (ph < 7.4) L.push(`pH ${ph} — intermediate risk: ${fl > 900 ? "<b>LDH over 900 IU/L — consider a chest drain</b>, especially with fever, large volume, low glucose or septations" : "measure LDH; drain if over 900 IU/L with other features; otherwise re-tap if not improving"}.`);
        else L.push(`pH ${ph} — low risk of pleural infection; no immediate drain needed.`);
      } else if (glu > 0) L.push(glu < 3.3 ? `<b>Glucose ${glu} mmol/L (under 3.3) — high probability of complicated effusion/infection</b> when pH is unavailable: drain (BTS 2023).` : `Glucose ${glu} mmol/L — not in the infection range (measure pH where possible).`);
      if (ada > 0) L.push(ada > 40 ? `<b>ADA ${ada} U/L (over 40)</b>${c("lym") ? " with a lymphocytic exudate" : ""}: supports <b>tuberculous pleural effusion</b> (Bhutan NTP) — send Xpert Ultra on fluid and sputum; treat 2HRZE/4HR. (Lymphoma and empyema can also raise ADA.)` : `ADA ${ada} U/L — TB less likely; consider cytology, CT and pleural biopsy if the cause is unclear.`);
      if (!L.length) { out.textContent = "Enter protein and LDH values."; return; }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}<li>Always send: cell count, Gram stain and culture (blood-culture bottles), AFB/Xpert, cytology 25–50 mL.</li></ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  },

  anginastep(el, U) {
    el.innerHTML = `<h4>Stable angina: CCS class and next drug step (NICE CG126 / Bhutan NEML)</h4><div class="row">${sel("ccs", "Symptoms (CCS class)", [["1", "I — only with strenuous or prolonged exertion"], ["2", "II — slight limitation: walking fast, uphill, stairs, after meals, cold"], ["3", "III — marked limitation: walking 1–2 blocks on the level"], ["4", "IV — with any activity or at rest"]])}${sel("now", "Current anti-anginal treatment", [["0", "None yet"], ["bb", "Beta-blocker alone"], ["ccb", "Amlodipine alone"], ["both", "Beta-blocker + amlodipine"], ["three", "Beta-blocker + amlodipine + ranolazine/nitrate"]])}<label>Resting heart rate<input type="number" step="any" data-k="hr" placeholder="e.g. 76"></label><label>Systolic BP<input type="number" step="any" data-k="sbp" placeholder="e.g. 138"></label></div><div class="checks" style="margin-top:8px">${chk("asth", "Asthma or severe COPD")}${chk("brady", "Heart block or HR under 50")}${chk("new", "New, rest or rapidly worsening pain")}${chk("pde", "Takes sildenafil or tadalafil")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, ccs = +g("ccs").value, now = g("now").value, hr = U.num(g("hr")), sbp = U.num(g("sbp")), out = U.$(".out", el);
      if (c("new") || ccs === 4) { out.innerHTML = `<p style="margin:0"><b>Possible acute coronary syndrome / unstable angina</b>: aspirin 300 mg chewed, ECG within 10 minutes, follow the ACS page and refer urgently.</p>`; return; }
      const bbBad = c("asth") || c("brady") || (hr > 0 && hr < 55);
      const L = [];
      if (now === "0") L.push(bbBad ? "Start <b>amlodipine 5 mg</b> once daily (beta-blocker unsuitable)." : "Start <b>bisoprolol 2.5 mg</b> once daily, titrate to 5–10 mg (target resting HR about 55–60); or amlodipine 5 mg if preferred.");
      else if (now === "bb") L.push(hr > 60 && !c("brady") ? "Increase bisoprolol towards 10 mg if tolerated; if still limited, <b>add amlodipine 5 mg</b>." : "<b>Add amlodipine 5 mg</b> (dihydropyridine CCB safe with a beta-blocker).");
      else if (now === "ccb") L.push(bbBad ? "Increase amlodipine to 10 mg; if still limited, <b>add ranolazine 375–500 mg twice daily</b>." : "Increase amlodipine to 10 mg or <b>add bisoprolol 2.5 mg</b>.");
      else if (now === "both") L.push("<b>Add ranolazine 375–500 mg twice daily</b> (NEML) or a long-acting nitrate; <b>refer to cardiology</b> for angiography.");
      else L.push("<b>Refer for angiography / revascularisation</b> — symptoms despite three drugs.");
      if (sbp > 0 && sbp < 100) L.push("Systolic BP under 100: avoid further BP-lowering steps; review.");
      L.push(c("pde") ? "<b>No nitrates</b> with sildenafil (24 h) or tadalafil (48 h)." : "Sublingual isosorbide dinitrate 5 mg for attacks; repeat after 5 min; emergency help if pain not gone 5 min after the second dose.");
      L.push("All patients: aspirin 75 mg, atorvastatin 40–80 mg, ACE inhibitor if diabetes/CKD/HT, stop tobacco, BP and sugar control.");
      out.innerHTML = `<p style="margin:0">CCS class <b>${["", "I", "II", "III", "IV"][ccs]}</b>.</p><ul style="margin:6px 0 0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>${ccs === 3 ? "<p class='warn' style='margin:8px 0 0'>Class III: refer for cardiology assessment.</p>" : ""}`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  nccplan(el, U) {
    el.innerHTML = `<h4>Neurocysticercosis: treatment planner (IDSA 2017 / WHO 2021 / Bhutan NEML)</h4><div class="row">${sel("f", "Form on imaging", [["v", "Viable parenchymal cyst(s)"], ["sel", "Single enhancing lesion (under 2 cm)"], ["calc", "Calcified lesions only"], ["enc", "Cysticercal encephalitis (diffuse oedema)"], ["extra", "Intraventricular / subarachnoid / spinal"], ["eye", "Ocular cyst"]])}<label>Number of viable cysts<input type="number" step="1" data-k="n" placeholder="e.g. 1"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 50"></label></div><div class="checks" style="margin-top:8px">${chk("icp", "Raised ICP: headache with vomiting, papilloedema, hydrocephalus")}${chk("sz", "Has had seizures")}${chk("preg", "Pregnant")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, f = g("f").value, n = U.num(g("n")), w = U.num(g("wt")), out = U.$(".out", el);
      const L = [];
      if (c("sz")) L.push("Start an antiseizure medicine (carbamazepine, valproate, phenytoin or levetiracetam).");
      if (c("icp") || f === "enc") L.push("<b>Raised ICP / encephalitis: NO antiparasitic drug.</b> Dexamethasone (adult 8–16 mg/day) or mannitol; urgent CT and neurosurgical referral (JDWNRH) for hydrocephalus.");
      else if (f === "calc") L.push("<b>Calcified only: no antiparasitic drug</b>; no routine steroid; antiseizure medicine for at least 2 years (WHO).");
      else if (f === "eye") L.push("<b>Ocular cyst: refer to ophthalmology for surgery before any antiparasitic drug.</b>");
      else if (f === "extra") L.push("<b>Extraparenchymal disease: specialist neurosurgical care</b> — endoscopic removal of ventricular cysts, shunt for hydrocephalus; prolonged albendazole with steroids for subarachnoid disease.");
      else {
        const valid = w >= 5 && w <= 150;
        const max = f === "sel" ? 800 : 1200;
        const dose = valid ? Math.min(max, Math.round(15 * w)) : null;
        const tot = dose ? Math.max(100, Math.round(dose / 100) * 100) : 0, am = Math.ceil(tot / 200) * 100, pm = tot - am, q = x => (x / 400).toString().replace("0.25", "¼").replace("0.5", "½").replace("0.75", "¾").replace(".25", "¼").replace(".5", "½").replace(".75", "¾");
        const tab = dose ? `${dose} mg/day in 2 doses with fatty food — in practice <b>${am} mg morning + ${pm} mg evening</b> (${q(am)} + ${q(pm)} of the NEML 400 mg chewable tablet; total ${tot} mg/day)` : "15 mg/kg/day in 2 doses (enter weight)";
        if (c("preg")) L.push("Pregnancy: control seizures; delay albendazole until after the first trimester or after delivery unless severe.");
        L.push(`Albendazole <b>${tab}</b>, max ${max} mg/day, for ${f === "sel" ? "7–14 days" : "10–14 days"}.`);
        if (f === "v" && n > 2) L.push("<b>More than 2 viable cysts</b>: add praziquantel 50 mg/kg/day in 3 doses (IDSA) — specialist; not on NEML.");
        L.push(`Corticosteroid <b>started 1–2 days before</b> and through treatment: prednisolone ${valid ? Math.round(w) + " mg" : "1 mg/kg"}/day (max about 60 mg) or dexamethasone ${valid ? r1(0.1 * w) + " mg" : "0.1 mg/kg"}/day, then taper.`);
        L.push("Before starting: fundoscopy; liver tests and blood count; screen for TB/strongyloides if steroids will be long. Repeat imaging every 6 months until resolved.");
      }
      L.push("Household: stool for tapeworm eggs; treat carriers with niclosamide 2 g once (adult); toilets, hand washing, well-cooked pork.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  breastlump(el, U) {
    el.innerHTML = `<h4>Breast symptom triage (Bhutan screening guideline 2021 / ICMR STW 2020 / ICMR consensus 2016)</h4><div class="row"><label>Age (years)<input type="number" data-k="age" placeholder="e.g. 46"></label>${sel("sym", "Main problem", [["lump", "Lump in breast or axilla"], ["dis", "Nipple discharge, no lump"], ["infl", "Red, painful breast (lactating or recently)"], ["pain", "Breast pain only, no lump"]])}${sel("dc", "Discharge colour (if discharge)", [["na", "Not applicable"], ["w", "Milky / white"], ["g", "Green / grumous"], ["b", "Clear, yellow or blood-stained"]])}</div><div class="checks" style="margin-top:8px">${chk("skin", "Skin dimpling, puckering, oedema, ulcer or nodules")}${chk("nip", "New nipple retraction or nipple eczema")}${chk("node", "Hard or fixed axillary / supraclavicular node")}${chk("fix", "Lump fixed to skin or chest wall")}${chk("met", "Bone pain, breathlessness, jaundice or headache")}${chk("fh", "Strong family history (breast/ovary) or BRCA")}${chk("preg", "Pregnant or breastfeeding")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, age = U.num(g("age")), s = g("sym").value, dc = g("dc").value, out = U.$(".out", el);
      const susp = c("skin") || c("nip") || c("node") || c("fix") || c("met");
      const L = [];
      const img = !(age > 0) ? "Imaging by age (enter age): ultrasound under 30; mammography with ultrasound at 30 and over." : age < 30 && !susp ? "<b>Ultrasound</b> of breast and axilla (under 30 and clinically benign)." : "<b>Bilateral mammography with ultrasound</b> of breast and axilla (Bhutan: always correlate with sonomammography).";
      if (s === "lump") {
        L.push(susp ? "<b>Suspicious features — refer urgently to the onco-surgeon (JDWNRH)</b> for triple assessment." : (age >= 30 ? "<b>Unexplained lump at 30 or over — refer for triple assessment</b> (NICE NG12 uses 30 as the urgent-referral threshold)." : "Under 30 with a smooth mobile lump: still needs imaging; refer if solid or suspicious."));
        L.push(img);
        L.push("Then <b>core needle biopsy</b> of any solid or suspicious lesion (ER, PR, HER2, Ki-67); FNAC only if core biopsy is not possible. Cyst on ultrasound: aspirate; cytology if bloody, complex, refills or a lump remains.");
        L.push("<b>Do not</b> excise the lump for diagnosis, and do not biopsy before imaging (ICMR).");
      } else if (s === "dis") {
        if (dc === "w") L.push("Milky discharge, not pregnant or breastfeeding: <b>serum prolactin and thyroid function</b>, review medicines; reassess.");
        else if (dc === "g") L.push("Green/grumous, not blood-stained: <b>a course of antibiotics</b> if inflamed, then reassess.");
        else L.push("Clear, yellow or blood-stained discharge: <b>mammography and/or ultrasound</b>; single-duct spontaneous bloody discharge → refer for duct excision (microdochectomy).");
        if (age >= 50) L.push("Age 50 or over with discharge or retraction from one nipple: refer urgently (NICE NG12).");
      } else if (s === "infl") {
        L.push("Probable mastitis or abscess: treat (see Mastitis page), ultrasound if a fluctuant swelling; <b>review in 1–2 weeks</b>.");
        L.push("If it does not settle, or there is skin oedema without fever: <b>imaging and biopsy</b> — inflammatory breast cancer can look like mastitis.");
      } else {
        L.push("Breast pain alone is rarely cancer: examine both breasts; supportive bra, paracetamol; review if a lump appears. " + img.replace("<b>", "").replace("</b>", "") + " only if there is a focal finding.");
      }
      if (c("met")) L.push("Symptoms of spread: staging (chest X-ray, abdominal ultrasound, bone scan, or CT) once cancer is confirmed.");
      if (c("fh")) L.push("Strong family history: specialist review; earlier screening and MRI may be advised.");
      if (c("preg")) L.push("Pregnancy/breastfeeding does not explain away a persistent lump — ultrasound and biopsy if it does not resolve.");
      L.push("Register and report screening results in DHIS-2 (Bhutan).");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  masldcheck(el, U) {
    el.innerHTML = `<h4>Steatotic liver disease: MASLD, MetALD or alcohol-related? (multisociety consensus 2023 / AASLD 2023)</h4><div class="row">${sel("sex", "Sex", [["f", "Woman"], ["m", "Man"]])}<label>Alcohol (grams per week; 1 standard drink ≈ 10 g)<input type="number" step="any" data-k="alc" placeholder="e.g. 60"></label></div><div class="checks" style="margin-top:8px">${chk("st", "Fatty liver on imaging (or biopsy)")}${chk("bmi", "BMI ≥ 23 (Asian) or large waist")}${chk("glu", "Prediabetes, diabetes or on treatment")}${chk("bp", "BP ≥ 130/85 or on treatment")}${chk("tg", "Triglycerides ≥ 150 mg/dL or on treatment")}${chk("hdl", "Low HDL (≤ 40 men, ≤ 50 women) or on treatment")}${chk("oth", "Another cause present (hepatitis B/C, steatosis-causing drug, Wilson's, etc.)")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, a = U.num(g("alc")) || 0, m = g("sex").value === "m", out = U.$(".out", el);
      const n = ["bmi", "glu", "bp", "tg", "hdl"].filter(c).length;
      const lo = m ? 210 : 140, hi = m ? 420 : 350;
      let t;
      if (!c("st")) t = "Steatosis not documented. If metabolic risk factors are present, FIB-4 can still be used for risk assessment (AASLD).";
      else if (c("oth")) t = "<b>Steatosis with another specific cause</b> — treat that cause; MASLD can coexist (dual pathology).";
      else if (a > hi) t = `<b>Alcohol-related liver disease (ALD)</b> — alcohol over about ${hi} g/week. Stop alcohol completely; see the alcohol page.`;
      else if (n === 0) t = "<b>Cryptogenic steatotic liver disease</b> (no cardiometabolic criterion) — look for other causes; reassess periodically.";
      else if (a >= lo) t = `<b>MetALD</b> — MASLD (${n} cardiometabolic criteri${n > 1 ? "a" : "on"}) plus ${Math.round(a)} g alcohol/week (${lo}–${hi} g band). Cut down; stop if fibrosis.`;
      else t = `<b>MASLD</b> — steatosis with ${n} cardiometabolic criteri${n > 1 ? "a" : "on"}.`;
      out.innerHTML = `<p style="margin:0">${t}</p><ul style="margin:6px 0 0;padding-left:18px"><li>Next: <b>FIB-4</b> (calculator below) — under 1.3 low risk; 1.3 or more needs elastography or referral; over 2.67 refer.</li><li>Screen for diabetes; treat BP and lipids (statins are safe).</li><li>Weight loss: 3–5% improves fat; more than 10% for inflammation and fibrosis.</li></ul><p class="qn" style="margin:6px 0 0">Alcohol bands transcribed from the consensus figure (women 140–350, men 210–420 g/week).</p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }

  });
})();
