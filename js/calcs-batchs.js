/* Batch S calculators.
   Lymphadenopathy: AAFP red flags. Weight loss: NICE suspected cancer NG12. PCOS: Rotterdam 2003, International guideline 2023.
   Ovarian: RMI (Jacobs 1990; RMI I). Menopause: NICE NG23. EPDS: Cox 1987. Hip fracture: Nottingham Hip Fracture Score (Maxwell 2008).
   Club foot: Pirani score. Supracondylar: Gartland classification. */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  nodecheck(el, U) {
    el.innerHTML = `<h4>Lymphadenopathy: red flags</h4><div class="checks">${chk("sz", "Node over 2 cm (over 1.5 cm in children)")}${chk("hd", "Hard, rubbery, fixed or matted")}${chk("sc", "Supraclavicular, or generalised (2+ regions)")}${chk("dur", "Persisting over 4–6 weeks or enlarging")}${chk("b", "Fever, night sweats, weight loss over 10%")}${chk("hs", "Hepatosplenomegaly or cytopenias")}${chk("age", "Age over 40")}${chk("tb", "TB contact, chronic cough, HIV")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked;
      const n = ["sz", "hd", "sc", "dur", "b", "hs", "age"].filter(c).length;
      let t = n === 0 ? "<b>Low risk:</b> likely reactive. Look for a local cause (throat, teeth, skin, scalp, ears); treat infection; review in 2–4 weeks; no repeated antibiotic courses." : n <= 2 && !c("sc") && !c("hs") ? "<b>Intermediate:</b> FBC/film, ESR/CRP, HIV test, chest X-ray; review in 2 weeks; <b>FNAC/biopsy if persisting</b>." : "<b>High risk:</b> urgent FBC/film, LDH, chest X-ray, HIV, ultrasound; <b>FNAC with GeneXpert/cytology or excision biopsy</b> (preferred for lymphoma); refer.";
      if (c("tb")) t += " TB lymphadenitis is the commonest cause of persistent cervical nodes in Bhutan — send aspirate for Xpert MTB/RIF.";
      if (c("sc")) t += " Supraclavicular node: always investigate (left — abdominal cancer; right — lung/oesophagus).";
      U.$(".out", el).innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Avoid steroids before a tissue diagnosis — they can mask lymphoma.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  weightloss(el, U) {
    el.innerHTML = `<h4>Unintentional weight loss</h4><div class="row"><label>Usual weight (kg)<input type="number" step="any" data-k="w0" placeholder="e.g. 62"></label><label>Current weight (kg)<input type="number" step="any" data-k="w1" placeholder="e.g. 55"></label><label>Over how many months<input type="number" data-k="m" placeholder="e.g. 6"></label><label>Age<input type="number" data-k="age" placeholder="e.g. 58"></label></div><div class="out" aria-live="polite">Enter weights.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), w0 = g("w0"), w1 = g("w1"), m = g("m"), age = g("age"), out = U.$(".out", el);
      if (!(w0 > 0) || !(w1 > 0)) { out.textContent = "Enter weights."; return; }
      const pct = (w0 - w1) / w0 * 100;
      const sig = pct >= 5 && (!(m > 0) || m <= 12);
      out.innerHTML = `<p style="margin:0">Weight loss <b>${r1(pct)}%</b>${m > 0 ? " over " + m + " months" : ""} — ${sig ? "<b>clinically significant</b> (5% or more in 6–12 months)" : "below the 5% threshold — monitor"}.</p>${sig ? `<ul style="margin:6px 0 0;padding-left:18px"><li>History: appetite, dysphagia, GI symptoms, cough, fever/night sweats, polyuria, mood, alcohol, medicines, food insecurity.</li><li>First tests: FBC, ESR/CRP, glucose/HbA1c, creatinine, electrolytes, LFT, calcium, TSH, HIV, urine, stool occult blood, chest X-ray, sputum for TB if cough.</li><li>${age >= 40 ? "Age 40+: upper GI endoscopy if dyspepsia/anaemia (gastric cancer is common in Bhutan); abdominal ultrasound; consider colonoscopy." : "Under 40: TB, HIV, diabetes, thyroid, coeliac/IBD, eating disorder, depression."}</li><li>If all normal: watchful waiting with review in 1–3 months (about a quarter have no cause found).</li></ul>` : ""}`;
    });
  },

  pcoscheck(el, U) {
    el.innerHTML = `<h4>PCOS: Rotterdam criteria and screening</h4><div class="checks">${chk("o", "Oligo-/anovulation (cycles over 35 days or under 8 per year)")}${chk("h", "Clinical or biochemical hyperandrogenism (hirsutism, acne, raised testosterone)")}${chk("u", "Polycystic ovaries on ultrasound (20+ follicles per ovary or volume 10 mL+) — not used within 8 years of menarche")}${chk("ex", "Other causes excluded (TSH, prolactin, 17-OH progesterone, pregnancy)")}${chk("ttc", "Wants to conceive now")}</div><div class="row" style="margin-top:8px"><label>BMI<input type="number" step="any" data-k="bmi" placeholder="e.g. 29"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked, bmi = U.num(U.$("[data-k=bmi]", el));
      const n = ["o", "h", "u"].filter(c).length;
      let t = n >= 2 ? (c("ex") ? "<b>PCOS confirmed</b> (2 of 3 Rotterdam criteria, other causes excluded)." : "2 of 3 criteria met — <b>exclude other causes</b> (TSH, prolactin, 17-OHP, pregnancy) before confirming.") : "Rotterdam criteria not met.";
      if (n >= 2) t += `<ul style="margin:6px 0 0;padding-left:18px"><li>Screen: OGTT or HbA1c, lipids, BP; depression/anxiety; sleep apnoea if obese.</li><li>Lifestyle: ${bmi >= 25 ? "5–10% weight loss restores ovulation in many" : "healthy diet and activity"}.</li><li>${c("ttc") ? "<b>Fertility:</b> semen analysis + tubal assessment, then <b>letrozole</b> 2.5–7.5 mg days 3–7 (first line, not on NEML) or clomiphene 50–150 mg days 2–6 (Bhutan infertility clinics); metformin 500 mg BD adjunct; folic acid." : "<b>Not trying to conceive:</b> combined pill for cycle control/hirsutism and endometrial protection (or cyclical progestogen if 3+ months without bleed); metformin for metabolic features."}</li></ul>`;
      U.$(".out", el).innerHTML = `<p style="margin:0">${t}</p>`;
    };
    el.addEventListener("input", go); go();
  },

  rmi(el, U) {
    el.innerHTML = `<h4>Ovarian mass: Risk of Malignancy Index (RMI I)</h4><div class="checks">${chk("a", "Multilocular cyst")}${chk("b", "Solid areas")}${chk("c", "Bilateral lesions")}${chk("d", "Ascites")}${chk("e", "Intra-abdominal metastases")}</div><div class="row" style="margin-top:8px">${sel("m", "Menopausal status", [["1", "Premenopausal (1)"], ["3", "Postmenopausal (3)"]])}<label>CA-125 (U/mL)<input type="number" data-k="ca" placeholder="e.g. 45"></label></div><div class="out" aria-live="polite">Enter CA-125.</div>`;
    el.addEventListener("input", () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked, n = ["a", "b", "c", "d", "e"].filter(c).length, u = n === 0 ? 0 : n === 1 ? 1 : 3, m = +U.$("[data-k=m]", el).value, ca = U.num(U.$("[data-k=ca]", el)), out = U.$(".out", el);
      if (!(ca >= 0) || U.$("[data-k=ca]", el).value === "") { out.textContent = "Enter CA-125."; return; }
      const r = u * m * ca;
      out.innerHTML = `<p style="margin:0">U = ${u}, M = ${m} → <b>RMI ${Math.round(r)}</b>. ${r >= 200 ? "<b>High risk (200+): refer to gynaecological oncology</b> (CT staging)." : r >= 25 ? "Moderate risk (25–199): MRI/repeat assessment; gynaecology review." : "Low risk (under 25): manage locally; simple cysts in premenopausal women often resolve — repeat ultrasound in 6–12 weeks."}</p><p class="warn" style="margin:8px 0 0">CA-125 is raised by endometriosis, PID, pregnancy, TB peritonitis and menstruation in premenopausal women — interpret with ultrasound (IOTA rules/O-RADS).</p>`;
    });
  },

  menohrt(el, U) {
    el.innerHTML = `<h4>Menopause: is HRT suitable and which?</h4><div class="row"><label>Age<input type="number" data-k="age" placeholder="e.g. 51"></label></div><div class="checks" style="margin-top:8px">${chk("ut", "Has a uterus")}${chk("lmp", "Last period under 12 months ago (perimenopausal)")}${chk("bc", "Breast cancer (current or past)")}${chk("vte", "Past VTE or high VTE risk / BMI over 30")}${chk("bl", "Undiagnosed vaginal bleeding")}${chk("cvd", "Recent stroke/MI, uncontrolled hypertension, active liver disease")}${chk("vag", "Only vaginal dryness/urinary symptoms")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked, a = U.num(U.$("[data-k=age]", el));
      let t;
      if (c("bl")) t = "<b>Investigate the bleeding first</b> (ultrasound ± endometrial biopsy) before any HRT.";
      else if (c("bc") || c("cvd")) t = "<b>Systemic HRT not recommended.</b> Non-hormonal options for hot flushes: venlafaxine 37.5–75 mg, gabapentin 300 mg up to TDS, (fluoxetine/paroxetine — avoid with tamoxifen), CBT; vaginal moisturisers (vaginal oestrogen only with oncology advice if breast cancer).";
      else if (c("vag")) t = "<b>Vaginal oestrogen</b> (low dose) — safe long term, no progestogen needed; moisturisers/lubricants.";
      else {
        t = `<b>HRT is suitable</b>${a > 0 && a < 45 ? " — and <b>recommended until at least age 51</b> for premature menopause/POI (bone and heart protection)" : a >= 60 ? " — but starting over 60 carries more risk; use lowest dose, transdermal if possible" : ""}. ${c("vte") ? "<b>Transdermal oestrogen</b> (gel/patch) preferred — no VTE increase. " : "Oral (conjugated oestrogen 0.625 mg — NEML) or transdermal oestrogen. "}${c("ut") ? (c("lmp") ? "<b>Add cyclical progestogen</b> (medroxyprogesterone 10 mg for 12–14 days/month) — monthly bleed." : "<b>Add continuous progestogen</b> (medroxyprogesterone 2.5–5 mg daily or LNG-IUS) — no bleed.") : "No uterus: oestrogen alone."}`;
      }
      U.$(".out", el).innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Contraception until 55 (or 1 year after last period if over 50, 2 years if under 50). Review yearly; no arbitrary time limit (NICE 2024).</p>`;
    };
    el.addEventListener("input", go); go();
  },

  epds(el, U) {
    const items = ["Able to laugh and see the funny side", "Looked forward with enjoyment", "Blamed myself unnecessarily when things went wrong", "Anxious or worried for no good reason", "Scared or panicky for no good reason", "Things have been getting on top of me", "So unhappy I have had difficulty sleeping", "Felt sad or miserable", "So unhappy I have been crying", "The thought of harming myself has occurred to me"];
    el.innerHTML = `<h4>Edinburgh Postnatal Depression Scale (past 7 days)</h4><p style="margin:4px 0 8px">Score each item 0 (not at all / as usual) to 3 (most of the time / not at all for positive items) as answered by the mother.</p><div class="row">${items.map((t, i) => sel("q" + i, (i + 1) + ". " + t, [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"]])).join("")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = items.reduce((n, _, i) => n + +U.$(`[data-k=q${i}]`, el).value, 0), q10 = +U.$("[data-k=q9]", el).value;
      let t = s >= 13 ? "<b>Probable depression (13+)</b>: clinical assessment; psychological therapy; antidepressant if moderate–severe (sertraline or fluoxetine — compatible with breastfeeding; sertraline preferred where available)." : s >= 10 ? "<b>Possible depression (10–12)</b>: reassess in 2 weeks; support, counselling." : "Score under 10 — depression unlikely; repeat if concerns.";
      if (q10 > 0) t += " <b>Item 10 positive: assess suicide risk today</b>; do not leave alone if active plans; urgent psychiatry.";
      U.$(".out", el).innerHTML = `<p style="margin:0">EPDS <b>${s}</b>/30. ${t}</p><p class="warn" style="margin:8px 0 0">Confusion, hallucinations, delusions, severe agitation within weeks of birth = postpartum psychosis — emergency admission.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  nhfs(el, U) {
    el.innerHTML = `<h4>Hip fracture: Nottingham Hip Fracture Score</h4><div class="row"><label>Age<input type="number" data-k="age" placeholder="e.g. 82"></label></div><div class="checks" style="margin-top:8px">${chk("m", "Male (1)")}${chk("hb", "Admission Hb 10 g/dL or less (1)")}${chk("amt", "Abbreviated mental test 6/10 or less (1)")}${chk("inst", "Living in an institution (1)")}${chk("co", "More than one comorbidity (1)")}${chk("ca", "Malignancy in the last 20 years (1)")}</div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const a = U.num(U.$("[data-k=age]", el)), c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      if (!(a > 0)) { out.textContent = "Enter age."; return; }
      const s = (a >= 86 ? 4 : a >= 66 ? 3 : 0) + ["m", "hb", "amt", "inst", "co", "ca"].filter(c).length;
      out.innerHTML = `<p style="margin:0">NHFS <b>${s}</b>/10 — higher scores predict higher 30-day and 1-year mortality (score 5+ marks a high-risk patient); use it to guide orthogeriatric input and discussions with family, not to deny surgery.</p><ul style="margin:6px 0 0;padding-left:18px"><li>Analgesia now: paracetamol + fascia iliaca block (bupivacaine 0.25% up to 2 mg/kg); cautious opioids.</li><li>Surgery within 36 h; correct only what delays safely (anticoagulation, severe anaemia, uncontrolled heart failure).</li><li>Delirium prevention, pressure care, VTE prophylaxis, mobilise the day after surgery, bone protection and falls assessment.</li></ul>`;
    });
  },

  pirani(el, U) {
    const h = (k, t) => sel(k, t, [["0", "Normal (0)"], ["0.5", "Mildly abnormal (0.5)"], ["1", "Severely abnormal (1)"]]);
    el.innerHTML = `<h4>Club foot: Pirani score</h4><p style="margin:4px 0 8px"><b>Midfoot</b></p><div class="row">${h("a", "Curved lateral border")}${h("b", "Medial crease")}${h("c", "Lateral head of talus coverage")}</div><p style="margin:8px 0 4px"><b>Hindfoot</b></p><div class="row">${h("d", "Posterior crease")}${h("e", "Empty heel")}${h("f", "Rigid equinus")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const v = k => +U.$(`[data-k=${k}]`, el).value, mid = v("a") + v("b") + v("c"), hind = v("d") + v("e") + v("f"), t = mid + hind;
      U.$(".out", el).innerHTML = `<p style="margin:0">Pirani <b>${t}</b>/6 (midfoot ${mid}, hindfoot ${hind}).</p><ul style="margin:6px 0 0;padding-left:18px"><li><b>Ponseti casting</b> weekly from the first weeks of life (usually 5–7 casts; more with higher scores).</li><li>${hind >= 1 ? "Hindfoot score 1+ after midfoot corrected: <b>percutaneous Achilles tenotomy</b> likely (85–90% of feet), then a final cast for 3 weeks." : "Hindfoot corrected — tenotomy may not be needed."}</li><li><b>Foot abduction brace</b> (boots and bar) 23 h/day for 3 months, then nights and naps until age 4 — non-adherence is the main cause of relapse.</li></ul>`;
    };
    el.addEventListener("input", go); go();
  },

  gartland(el, U) {
    el.innerHTML = `<h4>Supracondylar humerus fracture: Gartland grade and plan</h4><div class="row">${sel("g", "X-ray (lateral view)", [["1", "Type I: undisplaced (posterior fat pad only)"], ["2", "Type II: displaced, posterior cortex intact (anterior humeral line misses capitellum)"], ["3", "Type III: completely displaced"], ["4", "Type IV: multidirectional instability (found in theatre)"]])}${sel("p", "Hand perfusion", [["ok", "Pink, radial pulse present"], ["pp", "Pink, pulseless"], ["wp", "White/cold, pulseless"]])}${sel("n", "Nerve injury (AIN: cannot make 'OK' sign; radial; ulnar)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, gr = g("g"), p = g("p"), n = g("n") === "y";
      let t = gr === "1" ? "Above-elbow backslab/cast at 90° for 3 weeks; review at 1 week." : gr === "2" ? "Closed reduction under anaesthesia; pinning (2–3 lateral K-wires) if unstable or rotated (IIB); cast 3–4 weeks." : "<b>Urgent closed reduction and percutaneous pinning</b> (same day); open reduction if irreducible.";
      if (p === "wp") t = "<b>White pulseless hand: emergency</b> — immediate gentle traction/reduction and pinning; vascular exploration if perfusion not restored. " + t;
      else if (p === "pp") t += " Pink pulseless hand: reduce and pin urgently, then observe perfusion closely (exploration if it becomes white or compartment signs).";
      U.$(".out", el).innerHTML = `<p style="margin:0">${t}</p><ul style="margin:6px 0 0;padding-left:18px">${n ? "<li>Document the nerve deficit before reduction; most neurapraxias recover in 2–3 months.</li>" : ""}<li>Check pulse, capillary refill, sensation and AIN/radial/ulnar function before and after any intervention.</li><li>Elevate; watch for <b>compartment syndrome</b> (pain on passive finger extension, increasing analgesia need) — split cast, urgent review.</li></ul>`;
    };
    el.addEventListener("input", go); go();
  }
  });
})();
