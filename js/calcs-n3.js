/* New-disease batch N-3 calculators (28 Nov 2026). File: js/calcs-n3.js
   oesoplan: NICE NG12 §1.2 referral + ICMR 2017 oesophageal cancer treatment by site/stage. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  oesoplan(el, U) {
    el.innerHTML = `<h4>Oesophageal cancer: referral and treatment pathway (NICE NG12 / ICMR 2017)</h4><div class="row"><label>Age<input type="number" data-k="age" placeholder="e.g. 62"></label>${sel("site", "Tumour site (if biopsy-proven)", [["", "Not yet diagnosed"], ["up", "Within 5 cm of the cricopharynx (upper)"], ["ml", "Middle / lower third or GEJ"]])}${sel("st", "Stage", [["", "—"], ["t1a", "T1a N0 (mucosa only)"], ["e", "T1–T2 N0"], ["la", "T3/T4a or node-positive"], ["m", "Metastatic"]])}${sel("ps", "Performance status", [["0", "ECOG 0–1, fit"], ["2", "ECOG 2 or poor heart/lung reserve"]])}</div><div class="checks" style="margin-top:8px">${chk("dys", "Dysphagia")}${chk("wl", "Weight loss")}${chk("ud", "Upper abdominal pain, reflux or dyspepsia")}${chk("hae", "Haematemesis")}${chk("cough", "Cough or choking when drinking")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, age = U.num(g("age")), site = g("site").value, st = g("st").value, fit = g("ps").value === "0", out = U.$(".out", el);
      const L = [];
      if (!site) {
        if (c("dys") || (age >= 55 && c("wl") && c("ud"))) L.push("<b>Refer on a suspected cancer pathway</b> for upper GI endoscopy with at least 6 biopsies (NICE NG12).");
        else if (c("hae")) L.push("Haematemesis: consider endoscopy (urgent if bleeding is significant — see UGIB).");
        else L.push("Does not meet NG12 thresholds — review; endoscopy if symptoms persist or progress.");
        if (c("cough")) L.push("Cough on drinking: possible tracheo-oesophageal fistula — urgent assessment.");
        if (c("wl")) L.push("Start nutritional support now (high-calorie liquids; dietitian).");
      } else {
        if (st === "m") L.push("<b>Metastatic</b>: palliation — stent or radiotherapy for dysphagia, palliative chemotherapy if fit, nutrition, pain control.");
        else if (site === "up") L.push("<b>Upper oesophagus: definitive concurrent chemoradiation</b> (5-FU + cisplatin or taxane + platinum, about 50 Gy).");
        else if (!fit) L.push("Not fit for surgery: <b>definitive chemoradiation</b> if able; otherwise palliation.");
        else if (st === "t1a") L.push("<b>T1a N0: endoscopic mucosal resection</b> (expert centre).");
        else if (st === "e") L.push("<b>T1–T2 N0: oesophagectomy</b> (5 cm margins, 2-field lymphadenectomy, ≥ 15 nodes).");
        else if (st === "la") L.push("<b>Locally advanced: neoadjuvant chemotherapy or chemoradiation, then surgery</b> (CROSS: median survival 49.4 vs 24 months).");
        else L.push("Choose the stage.");
        L.push("Before radical treatment: CECT (± PET, EUS), bronchoscopy if at/above the carina, echo and lung function, nutrition and oral hygiene; MDT decision.");
      }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  egris(el, U) {
    el.innerHTML = `<h4>Erasmus GBS Respiratory Insufficiency Score (EGRIS) — risk of ventilation within 1 week (Leonhard 2019)</h4><div class="row">${sel("d", "Days from onset of weakness to admission", [["0", "More than 7 days"], ["1", "4–7 days"], ["2", "3 days or less"]])}${sel("f", "Facial and/or bulbar weakness at admission", [["0", "Absent"], ["1", "Present"]])}${sel("m", "MRC sum score at admission (0–60)", [["0", "60–51"], ["1", "50–41"], ["2", "40–31"], ["3", "30–21"], ["4", "20 or less"]])}<label>Weight (kg, for IVIg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label></div><div class="checks" style="margin-top:8px">${chk("imm", "Breathless at rest/talking, cannot count to 15, accessory muscles, or VC < 15–20 mL/kg")}${chk("walk", "Cannot walk 10 m independently")}</div><p class="qn" style="margin:6px 0 0">MRC sum score = power (0–5) of shoulder abduction, elbow flexion, wrist extension, hip flexion, knee extension and ankle dorsiflexion on both sides.</p><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), out = U.$(".out", el);
      const s = +g("d").value + +g("f").value + +g("m").value;
      const band = s >= 5 ? ["High risk", "about 65%"] : s >= 3 ? ["Intermediate risk", "about 24%"] : ["Low risk", "about 4%"];
      const L = [`<b>EGRIS ${s}/7 — ${band[0]}</b>: ${band[1]} chance of needing mechanical ventilation within 1 week.`];
      if (g("imm").checked) L.push("<b>Imminent respiratory insufficiency — ICU now; prepare to intubate.</b>");
      else if (s >= 5) L.push("Admit to an ICU-capable hospital; vital capacity every few hours.");
      else L.push("Monitor vital capacity, swallowing and BP/heart rate regularly.");
      if (g("walk").checked) L.push(`Start <b>IVIg 0.4 g/kg daily for 5 days</b>${w > 0 ? ` = <b>${Math.round(0.4 * w * 10) / 10} g/day</b> (total ${Math.round(2 * w)} g)` : ""} within 2 weeks of onset, or plasma exchange (200–250 mL/kg in 5 sessions) within 4 weeks. No steroids.`);
      L.push("Validated in a Dutch population aged over 6 years — use with judgement elsewhere.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  cogscreen(el, U) {
    el.innerHTML = `<h4>Memory complaint: screen and next steps (Bhutan older-people screen / NICE NG97)</h4><div class="row">${sel("rec", "3-word recall after 3 minutes", [["", "Not done"], ["3", "3 of 3"], ["2", "2 of 3"], ["1", "1 of 3"], ["0", "0 of 3"]])}<label>Age<input type="number" data-k="age" placeholder="e.g. 74"></label></div><div class="checks" style="margin-top:8px">${chk("sud", "Sudden onset or fluctuating attention/drowsiness (days)")}${chk("func", "Family reports decline affecting daily life")}${chk("dep", "Low mood or loss of interest (2 weeks)")}${chk("sens", "Poor hearing or vision")}${chk("anti", "Anticholinergic or sedative drugs (e.g. trihexyphenidyl, chlorpheniramine, amitriptyline, benzodiazepines)")}${chk("fast", "Rapid decline over weeks–months")}${chk("focal", "Falls with headache, focal signs or new gait problem")}${chk("lewy", "Visual hallucinations, parkinsonism or fluctuating alertness")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, rec = g("rec").value, out = U.$(".out", el);
      const L = [];
      if (c("sud")) L.push("<b>Possible delirium — treat first</b>: infection (urine, chest), dehydration, glucose, urinary retention, constipation, pain, new drugs, alcohol withdrawal.");
      if (rec !== "") L.push(+rec < 2 ? `<b>Recall ${rec}/3 — risk of dementia</b> (Bhutan screen): full assessment.` : `Recall ${rec}/3 — screen negative; ${c("func") ? "but family-reported decline still needs assessment (a normal score does not exclude dementia)." : "reassure and review if concerns continue."}`);
      if (c("dep")) L.push("Depression screen positive — assess and treat; can mimic or accompany dementia.");
      if (c("sens")) L.push("Check hearing and vision — sensory loss can look like confusion.");
      if (c("anti")) L.push("Review and reduce anticholinergic/sedative drugs, then reassess.");
      if (c("fast")) L.push("<b>Rapidly progressive</b> — urgent neurology referral (CJD and other causes).");
      if (c("focal")) L.push("<b>CT head</b> — chronic subdural haematoma, tumour, normal-pressure hydrocephalus, stroke.");
      if (c("lewy")) L.push("Possible <b>Lewy body / Parkinson's dementia</b> — avoid haloperidol and other typical antipsychotics.");
      if (!c("sud") && (+rec < 2 && rec !== "" || c("func"))) L.push("Bloods and urine (CBC, glucose, electrolytes, calcium, kidney, liver, thyroid, B12/folate); imaging if unclear; refer to psychiatry/neurology for diagnosis and type; carer support and home safety.");
      if (!L.length) L.push("Enter the recall result and tick any features.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  sahcheck(el, U) {
    el.innerHTML = `<h4>Sudden headache: Ottawa SAH Rule, WFNS grade and nimodipine (Perry 2013 / NICE NG228)</h4><p class="qn" style="margin:0 0 4px">Ottawa rule applies to alert adults (GCS 15) with headache peaking within 1 hour and no new neurological deficit.</p><div class="checks">${chk("o1", "Age 40 or over")}${chk("o2", "Neck pain or stiffness")}${chk("o3", "Witnessed loss of consciousness")}${chk("o4", "Onset during exertion")}${chk("o5", "Thunderclap — instantly peaking pain")}${chk("o6", "Limited neck flexion on examination")}</div><div class="row" style="margin-top:8px"><label>GCS<input type="number" data-k="gcs" placeholder="e.g. 15"></label>${sel("def", "Motor deficit", [["n", "Absent"], ["y", "Present"]])}<label>Hours since onset<input type="number" step="any" data-k="h" placeholder="e.g. 4"></label>${sel("ct", "CT result", [["", "Not yet done"], ["neg", "No blood"], ["pos", "Subarachnoid blood"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, gcs = U.num(g("gcs")), h = U.num(g("h")), ct = g("ct").value, out = U.$(".out", el);
      const n = ["o1", "o2", "o3", "o4", "o5", "o6"].filter(c).length;
      const L = [];
      if (gcs > 0 && gcs < 15) L.push("Not alert — Ottawa rule does not apply; <b>urgent CT</b>.");
      else if (n === 0 && gcs !== 15) L.push("Tick any Ottawa items present and enter the GCS (the rule needs GCS 15) — no result yet.");
      else L.push(n > 0 ? `<b>Ottawa rule positive</b> (${n} item${n > 1 ? "s" : ""}) — investigate for SAH (urgent non-contrast CT).` : "Ottawa rule negative — SAH very unlikely (100% sensitive in validation); consider other causes.");
      if (ct === "neg") L.push(h > 0 && h <= 6 ? "CT within 6 h with no blood (radiologist-reported): <b>no routine LP</b> — consider other diagnoses." : `CT after 6 h with no blood: <b>consider LP${h > 0 && h < 12 ? " — wait until at least 12 h after onset" : ""}</b>; xanthochromia on spectrophotometry confirms SAH.`);
      if (ct === "pos") {
        const wf = !(gcs > 0) ? null : gcs === 15 ? "I" : gcs >= 13 ? (g("def").value === "y" ? "III" : "II") : gcs >= 7 ? "IV" : "V";
        L.push(`<b>SAH confirmed${wf ? ` — WFNS grade ${wf}` : ""}</b>: CT angiography now; urgent neurosurgical referral (all grades); analgesia incl. opioid; <b>nimodipine 60 mg (2 × 30 mg) every 4 h for 21 days</b> by mouth/NG; euvolaemia; cautious BP control; secure the aneurysm early (rebleeding risk highest in 24 h).`);
      }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  haemrefer(el, U) {
    el.innerHTML = `<h4>Possible leukaemia, lymphoma or myeloma: what to do (NICE NG12 §1.10)</h4><div class="row">${sel("pt", "Patient", [["c", "Child or young person"], ["a", "Adult"]])}<label>Age<input type="number" data-k="age" placeholder="e.g. 5"></label></div><div class="checks" style="margin-top:8px">${chk("pal", "Pallor / persistent fatigue")}${chk("fev", "Unexplained fever or repeated infections")}${chk("bru", "Unexplained bruising or bleeding")}${chk("pet", "Unexplained petechiae")}${chk("hsm", "Liver and/or spleen enlarged")}${chk("ln", "Generalised or persistent unexplained lymph nodes")}${chk("bone", "Persistent bone pain (child) / back pain or unexplained fracture (adult)")}${chk("bs", "Night sweats, weight loss, itching or breathlessness")}${chk("neut", "Fever in a patient on chemotherapy or with low neutrophils")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, child = g("pt").value === "c", age = U.num(g("age")), out = U.$(".out", el);
      const L = [];
      if (c("neut")) L.push("<b>Neutropenic fever — emergency</b>: blood cultures, broad-spectrum IV antibiotics within 1 hour (e.g. piperacillin–tazobactam), sepsis care.");
      if (child && (c("pet") || c("hsm"))) L.push("<b>Immediate specialist assessment for leukaemia</b> (same day) — paediatrician/oncology at JDWNRH.");
      const leuk = ["pal", "fev", "bru", "pet", "hsm", "ln"].some(c) || (child && c("bone"));
      if (leuk) L.push("<b>Very urgent FBC with blood film</b> (same day if possible) — look for blasts and cytopenias.");
      if (c("ln") || (c("hsm") && !child)) L.push(child ? "Unexplained nodes or spleen: very urgent specialist referral (within 48 h) for lymphoma." : "Unexplained nodes or spleen (especially with night sweats, weight loss, itching, breathlessness): suspected-cancer referral for lymphoma; excision biopsy — do not start empirical TB treatment without tissue.");
      if (!child && c("bone") && age >= 60) L.push("Age ≥ 60 with bone/back pain or fracture: FBC, calcium, ESR, serum protein electrophoresis and free light chains (or urine Bence-Jones) for <b>myeloma</b>.");
      if (L.length) L.push("Avoid steroids until a diagnosis is made; check kidney function, potassium, uric acid and clotting if counts are abnormal.");
      else L.push("Tick the features present.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }

  });
})();
