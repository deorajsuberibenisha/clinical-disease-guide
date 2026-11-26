/* Batch E-1 calculators (26 Nov 2026).
   arrestadult: adult cardiac arrest drug and shock plan — ERC/RCUK 2025 Adult ALS (Soar et al.) and AHA 2025 Part 9 algorithm, read 26 Nov 2026.
   arrestchild: paediatric arrest doses by weight — ERC 2025 Paediatric Life Support (Djakow et al.) and AHA 2025 Part 8 cardiac arrest algorithm.
   Bhutan strengths from NEML 2025: adrenaline 1 mg/mL; amiodarone 50 mg/mL (3 mL); lignocaine 2% (20 mg/mL); dextrose 10%. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10, r2 = v => Math.round(v * 100) / 100;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  arrestadult(el, U) {
    el.innerHTML = `<h4>Adult cardiac arrest: drug and shock plan</h4><div class="row">${sel("rh", "Rhythm", [["vf", "VF / pulseless VT (shockable)"], ["ns", "Asystole / PEA (non-shockable)"]])}${sel("g", "Guideline", [["erc", "ERC / RCUK 2025"], ["aha", "AHA 2025"]])}<label>Weight (kg, for lidocaine)<input type="number" step="any" data-k="wt" placeholder="optional, e.g. 60"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const rh = U.$("[data-k=rh]", el).value, g = U.$("[data-k=g]", el).value, w = U.num(U.$("[data-k=wt]", el)), out = U.$(".out", el);
      const L = ["<b>Every cycle:</b> CPR 2 minutes (30:2 until an advanced airway, then continuous compressions with 10 breaths/min), rate 100–120/min, depth 5–6 cm; pause under 5–10 s for rhythm check; change compressor every 2 min."];
      if (rh === "vf") {
        L.push(g === "erc" ? "<b>Shock:</b> biphasic at least 150 J (pulsed biphasic 130–150 J); escalate for later shocks if possible; if unsure, use the highest setting." : "<b>Shock:</b> biphasic per manufacturer (e.g. 120–200 J; if unknown use maximum); monophasic 360 J; later shocks the same or higher.");
        L.push(g === "erc" ? "<b>Adrenaline 1 mg IV/IO</b> after the <b>3rd shock</b>, then every 3–5 min (every second cycle)." : "<b>Adrenaline 1 mg IV/IO</b> after the <b>2nd shock</b> (AHA algorithm box 6), then every 3–5 min.");
        L.push(g === "erc" ? "<b>Amiodarone 300 mg</b> after the 3rd shock (Bhutan: 2 ampoules of 150 mg/3 mL = 6 mL); <b>150 mg</b> after the 5th shock. Alternative: <b>lidocaine 100 mg</b> (5 mL of 2%), then 50 mg after the 5th shock." : `<b>Amiodarone 300 mg</b> after the 3rd shock, second dose <b>150 mg</b>; or <b>lidocaine 1–1.5 mg/kg</b>${w > 0 ? ` = <b>${Math.round(w)}–${Math.round(1.5 * w)} mg</b> (${r1(w / 20)}–${r1(1.5 * w / 20)} mL of 2%)` : ""}, then 0.5–0.75 mg/kg${w > 0 ? ` = ${Math.round(0.5 * w)}–${Math.round(0.75 * w)} mg` : ""}.`);
        L.push("VF persisting after 3 shocks: check pad position; consider antero-posterior pads (vector change). Double sequential shocks: not routine (unproven in both guidelines).");
      } else {
        L.push("<b>Adrenaline 1 mg IV/IO as soon as possible</b>, then every 3–5 min. No shock. Check rhythm every 2 min; if it becomes VF/pVT, shock.");
        L.push("PEA: think hypovolaemia (bleeding, fluids), tension pneumothorax (decompress), tamponade (ultrasound, pericardiocentesis), hyperkalaemia, PE, hypoxia, toxins.");
      }
      L.push("<b>Do not give routinely:</b> calcium, sodium bicarbonate, magnesium or steroids (both guidelines). Give calcium for hyperkalaemia or calcium-channel-blocker overdose; magnesium 2 g IV for torsades.");
      L.push("<b>Reversible causes:</b> hypoxia, hypovolaemia, hypo/hyperkalaemia and metabolic, hypothermia; thrombosis (coronary, pulmonary), tension pneumothorax, tamponade, toxins.");
      L.push(g === "erc" ? "<b>After ROSC (ERC/ESICM 2025):</b> SpO₂ 94–98%, PaCO₂ 35–45 mmHg, systolic BP > 100 or MAP > 60–65 mmHg, prevent fever (≤ 37.5 °C) for 36–72 h, 12-lead ECG — emergency angiography if ST elevation." : "<b>After ROSC (AHA 2025):</b> 100% O₂ until SpO₂ reliable, then SpO₂ 90–98%; PaCO₂ 35–45 mmHg; MAP ≥ 65 mmHg; temperature control 32–37.5 °C for at least 36 h if not following commands; 12-lead ECG — emergency angiography if ST elevation.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  arrestchild(el, U) {
    el.innerHTML = `<h4>Child cardiac arrest: doses by weight</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="measured or tape, e.g. 14"></label><label>Age (years, for tube size)<input type="number" step="any" data-k="age" placeholder="optional"></label>${sel("g", "Shock energy guideline", [["erc", "ERC 2025 (4 J/kg)"], ["aha", "AHA 2025 (2 then 4 J/kg)"]])}</div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const w = U.num(U.$("[data-k=wt]", el)), a = U.num(U.$("[data-k=age]", el)), g = U.$("[data-k=g]", el).value, out = U.$(".out", el);
      if (!(w > 0) || w > 150) { out.textContent = "Enter the weight (kg)."; return; }
      const adr = Math.min(0.01 * w, 1), amio = Math.min(5 * w, 300), amio2 = Math.min(5 * w, 150), lido = w;
      const j1 = g === "erc" ? Math.min(4 * w, 200) : 2 * w, j2 = g === "erc" ? Math.min(4 * w, 200) : 4 * w, jmax = g === "erc" ? Math.min(8 * w, 360) : Math.min(10 * w, 360);
      const L = [
        `<b>Adrenaline 10 mcg/kg = ${r2(adr)} mg = ${r1(adr * 10)} mL of 0.1 mg/mL</b> (dilute 1 mL of 1 mg/mL to 10 mL)${adr >= 1 ? " — adult maximum 1 mg reached" : ""}. Non-shockable: at once; shockable: ${g === "erc" ? "after the 3rd shock" : "after the 2nd shock"}; then every 3–5 min.`,
        g === "erc" ? `<b>Shock 4 J/kg = ${Math.round(j1)} J</b> (ERC: max 120–200 J for the first shock; refractory VF up to 8 J/kg = ${Math.round(jmax)} J, max 360 J).` : `<b>Shock: first 2 J/kg = ${Math.round(j1)} J, second 4 J/kg = ${Math.round(j2)} J</b>, later at least 4 J/kg up to 10 J/kg or the adult dose (${Math.round(jmax)} J).`,
        `<b>Amiodarone 5 mg/kg = ${Math.round(amio)} mg = ${r1(amio / 50)} mL of 50 mg/mL</b> after the 3rd shock; repeat ${Math.round(amio2)} mg (max 150 mg) after the 5th. Or <b>lidocaine 1 mg/kg = ${Math.round(lido)} mg = ${r2(lido / 20)} mL of 2%</b>.`,
        `<b>Fluid bolus 10 mL/kg = ${Math.round(10 * w)} mL</b> balanced crystalloid or saline if hypovolaemia (repeat and reassess).`,
        `<b>Hypoglycaemia:</b> 10% glucose 2 mL/kg = <b>${Math.round(2 * w)} mL</b> (0.2 g/kg).`,
        `<b>Bradycardia with a pulse, poor perfusion:</b> CPR if heart rate under 60 despite oxygen and ventilation; atropine 0.02 mg/kg = ${r2(Math.min(Math.max(0.02 * w, 0.1), 0.5))} mg (min 0.1, max 0.5 mg) for vagal causes or heart block (AHA 2025).`
      ];
      if (a >= 1 && a <= 12) { const lo = x => Math.floor(x * 2) / 2, hi = x => Math.ceil(x * 2) / 2, c = a / 4 + 3.5, u = a / 4 + 4, rng = x => lo(x) === hi(x) ? lo(x).toFixed(1) : lo(x).toFixed(1) + "–" + hi(x).toFixed(1); L.push(`<b>Tracheal tube (age ${r1(a)} y):</b> cuffed about <b>${rng(c)} mm</b> (age/4 + 3.5) or uncuffed about ${rng(u)} mm (age/4 + 4) internal diameter; have a half size above and below ready.`); }
      L.push("CPR: 15:2 (two trained rescuers; 30:2 if alone), 100–120/min, one third of chest depth (about 4 cm infant, 5 cm child, 5–6 cm adolescent); 5 rescue breaths first (ERC).");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  },

  /* traumableed: bleeding trauma patient — European guideline 6th ed. (Rossaint 2023: SBP 80–90 / MAP ≥ 80 in severe TBI, TXA 1 g + 1 g/8 h within 3 h,
     Hb 70–90 g/L, fibrinogen ≤ 1.5 g/L → 3–4 g, platelets > 50 (> 100 TBI), ionised Ca normal); NICE NG39 (TXA ≤ 3 h; plasma:red cells 1:1 adult and child;
     no crystalloid for active bleeding in hospital); child TXA 15 mg/kg (max 1 g) over 10 min then 2 mg/kg/h (RCPCH 2012 evidence statement).
     Child systolic BP floor 70 + 2 × age (1–10 y), as in shockcalc. Bhutan TXA 100 mg/mL (NEML 2025). */
  traumableed(el, U) {
    el.innerHTML = `<h4>Bleeding trauma patient: TXA, blood and targets</h4><div class="row">${sel("p", "Patient", [["a", "Adult (16 years and over)"], ["c", "Child (under 16)"]])}<label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label><label>Age (years, child)<input type="number" step="any" data-k="age" placeholder="e.g. 6"></label><label>Hours since injury<input type="number" step="any" data-k="h" placeholder="e.g. 1.5"></label>${sel("tbi", "Severe head injury (GCS 8 or less)?", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), ch = g("p").value === "c", w = U.num(g("wt")), age = U.num(g("age")), h = U.num(g("h")), tbi = g("tbi").value === "y", out = U.$(".out", el);
      if (!(w > 0) || w > 250) { out.textContent = "Enter the weight."; return; }
      const L = [];
      const late = h > 3;
      if (late) L.push("<b>Tranexamic acid: more than 3 hours since injury — do not start it</b> unless there is laboratory evidence of hyperfibrinolysis (NICE NG39; CRASH-2 showed harm when started after 3 h).");
      else if (ch) { const load = Math.min(15 * w, 1000), inf = 2 * w; L.push(`<b>Tranexamic acid 15 mg/kg = ${Math.round(load)} mg</b> (max 1 g) IV over 10 min = <b>${r1(load / 100)} mL</b> of 100 mg/mL, then <b>2 mg/kg/h = ${r1(inf)} mg/h</b> for 8 hours or until bleeding stops (${Math.round(inf * 8)} mg over 8 h).`); }
      else L.push("<b>Tranexamic acid 1 g IV over 10 min</b> (10 mL of 100 mg/mL in 100 mL saline), then <b>1 g over 8 hours</b> — as soon as possible and within 3 hours of injury.");
      if (ch) {
        const floor = !(age >= 0) ? null : age < 1 ? 70 : age <= 10 ? 70 + 2 * Math.floor(age) : 90;
        L.push(`<b>Blood:</b> 10 mL/kg boluses = <b>${Math.round(10 * w)} mL</b>, red cells and plasma 1:1 by weight (NICE); reassess after each. Crystalloid 10 mL/kg only if blood is not available.`);
        L.push(`<b>Circulation target:</b> ${floor ? `systolic BP at least <b>${floor} mmHg</b> (lowest normal for age), ` : ""}normal capillary refill and conscious level. Deliberate hypotension is not used in children; move fast to bleeding control.`);
        L.push(`<b>Blood volume</b> is about ${Math.round(80 * w)} mL (about 80 mL/kg): a loss of ${Math.round(0.25 * 80 * w)} mL (25%) can cause shock; tachycardia comes before hypotension.`);
      } else {
        L.push(tbi ? "<b>Blood pressure target: MAP 80 mmHg or more</b> (severe TBI, GCS ≤ 8 — European guideline), to protect the brain." : "<b>Permissive hypotension until bleeding is controlled:</b> systolic <b>80–90 mmHg</b> (MAP 50–60) if no brain injury (European guideline); NICE: titrate to a palpable central (carotid or femoral) pulse.");
        L.push("<b>Blood, not saline:</b> red cells and plasma 1:1 (NICE) or FFP:red cells at least 1:2 (European), platelets early in massive bleeding; no crystalloid for active bleeding in hospital (NICE). Use the massive transfusion protocol.");
        L.push("<b>Targets once transfusing:</b> Hb 70–90 g/L; fibrinogen above 1.5 g/L (give 3–4 g as cryoprecipitate 15–20 units or concentrate if at or below 1.5); platelets above 50 (above 100 with TBI); ionised calcium 1.1–1.3 mmol/L.");
      }
      L.push("<b>Always:</b> direct pressure, tourniquet for limb bleeding not controlled by pressure, pelvic binder for suspected pelvic bleeding, splint long-bone fractures, keep warm, check ionised calcium, early surgery or transfer.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  }
  });
})();
