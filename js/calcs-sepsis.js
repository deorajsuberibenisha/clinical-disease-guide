/* Sepsis calculators: NEWS2 (adult screening and escalation), Phoenix Sepsis Score (children), vasoactive infusion rate.
   Sources: Royal College of Physicians NEWS2 (2017); Bhutan Quick Guide to Sepsis Management 2025 (NEWS ≥5 activates the 1-hour
   bundle; noradrenaline 4 mg/50 mL = 80 µg/mL); Schlapbach LJ et al. JAMA 2024 (Phoenix criteria). Decision aids only. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {
  news2(el, U) {
    el.innerHTML = `<h4>NEWS2: early warning score (adults)</h4><div class="row">
      <label>Respiratory rate (/min)<input type="number" data-k="rr" placeholder="e.g. 24"></label>
      <label>SpO₂ (%)<input type="number" data-k="spo2" placeholder="e.g. 93"></label>
      <label>Systolic BP (mmHg)<input type="number" data-k="sbp" placeholder="e.g. 98"></label>
      <label>Pulse (/min)<input type="number" data-k="hr" placeholder="e.g. 115"></label>
      <label>Temperature (°C)<input type="number" step="0.1" data-k="t" placeholder="e.g. 38.6"></label>
      <label>Consciousness<select data-k="avpu"><option value="0">Alert</option><option value="3">New confusion, or responds to Voice, Pain, or Unresponsive</option></select></label></div>
      <div class="checks"><label class="chk"><input type="checkbox" data-k="o2"> On supplemental oxygen</label>
      <label class="chk"><input type="checkbox" data-k="s2"> Known hypercapnic respiratory failure (use SpO₂ scale 2, target 88–92%)</label></div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      const rr = g("rr"), sp = g("spo2"), sbp = g("sbp"), hr = g("hr"), t = g("t"), av = +U.$("[data-k=avpu]", el).value, o2 = c("o2"), s2 = c("s2");
      if (!(rr && sp && sbp && hr && t)) { out.innerHTML = `<p class="qn" style="margin:0">Enter all five observations.</p>`; return; }
      const p = [];
      p.push(rr <= 8 ? 3 : rr <= 11 ? 1 : rr <= 20 ? 0 : rr <= 24 ? 2 : 3);
      if (!s2) p.push(sp <= 91 ? 3 : sp <= 93 ? 2 : sp <= 95 ? 1 : 0);
      else p.push(sp <= 83 ? 3 : sp <= 85 ? 2 : sp <= 87 ? 1 : (sp <= 92 || !o2) ? 0 : sp <= 94 ? 1 : sp <= 96 ? 2 : 3);
      p.push(o2 ? 2 : 0);
      p.push(sbp <= 90 ? 3 : sbp <= 100 ? 2 : sbp <= 110 ? 1 : sbp <= 219 ? 0 : 3);
      p.push(hr <= 40 ? 3 : hr <= 50 ? 1 : hr <= 90 ? 0 : hr <= 110 ? 1 : hr <= 130 ? 2 : 3);
      p.push(av);
      p.push(t <= 35 ? 3 : t <= 36 ? 1 : t <= 38 ? 0 : t <= 39 ? 1 : 2);
      const s = p.reduce((a, b) => a + b, 0), red = p.some(x => x === 3);
      let band, act, col;
      if (s >= 7) { band = "HIGH"; col = "var(--red,#b42318)"; act = "Emergency response: doctor at the bedside now, continuous monitoring, consider ICU or urgent referral. If infection is possible, start the <b>1-hour sepsis bundle</b>."; }
      else if (s >= 5) { band = "MEDIUM"; col = "var(--amber,#b54708)"; act = "Urgent review by a doctor; observations at least hourly. <b>Bhutan Quick Guide: NEWS ≥5 with suspected infection activates the 1-hour bundle</b> (cultures, antibiotics, fluids, lactate)."; }
      else if (red) { band = "LOW–MEDIUM (a single parameter scores 3)"; col = "var(--amber,#b54708)"; act = "Urgent ward-based review of the abnormal parameter; observations at least hourly."; }
      else if (s >= 1) { band = "LOW"; col = "var(--green,#067647)"; act = "Nurse assessment; observations at least 4–6-hourly; escalate if rising."; }
      else { band = "LOW"; col = "var(--green,#067647)"; act = "Routine observations (at least 12-hourly)."; }
      out.innerHTML = `<p style="margin:0">NEWS2 <b>${s}</b> · <b style="color:${col}">${band}</b></p><p style="margin:6px 0 0">${act}</p><p class="qn" style="margin:8px 0 0">SSC 2026 recommends NEWS/NEWS2, MEWS or SIRS rather than qSOFA alone to screen ward patients. A low score does not exclude sepsis: clinical concern overrides the number.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  },

  phoenix(el, U) {
    const sel = (k, l, o) => `<label>${l}<select data-k="${k}">${o.map(([v, t]) => `<option value="${v}">${t}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Phoenix Sepsis Score (children with suspected infection)</h4><div class="row">
      ${sel("age", "Age", [[0, "Under 1 month"], [1, "1–11 months"], [2, "1 to under 2 years"], [3, "2 to under 5 years"], [4, "5 to under 12 years"], [5, "12–17 years"]])}
      <label>Mean arterial pressure (mmHg)<input type="number" data-k="map" placeholder="e.g. 45"></label>
      <label>Lactate (mmol/L, if known)<input type="number" step="0.1" data-k="lac" placeholder="optional"></label>
      ${sel("vaso", "Vasoactive infusions running", [[0, "None"], [1, "One"], [2, "Two or more"]])}
      ${sel("resp", "Respiratory", [[0, "SpO₂:FiO₂ ≥292 (or PaO₂:FiO₂ ≥400), or no support"], [1, "SpO₂:FiO₂ under 292 (or P:F under 400) on any respiratory support"], [2, "SpO₂:FiO₂ 148–220 (P:F 100–200) and invasive ventilation"], [3, "SpO₂:FiO₂ under 148 (P:F under 100) and invasive ventilation"]])}
      ${sel("neuro", "Neurological", [[0, "GCS over 10"], [1, "GCS 10 or less"], [2, "Both pupils fixed"]])}</div>
      <div class="checks"><label class="chk"><input type="checkbox" data-k="plt"> Platelets under 100 ×10⁹/L</label><label class="chk"><input type="checkbox" data-k="inr"> INR over 1.3</label><label class="chk"><input type="checkbox" data-k="dd"> D-dimer over 2 mg/L FEU</label><label class="chk"><input type="checkbox" data-k="fib"> Fibrinogen under 100 mg/dL</label></div><div class="out" aria-live="polite"></div>`;
    const T = [[30, 17], [38, 25], [43, 31], [44, 32], [48, 36], [51, 38]]; // MAP ≤ first = 1 point, < second = 2 points
    const run = () => {
      const v = k => +U.$(`[data-k=${k}]`, el).value, c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      const map = U.num(U.$("[data-k=map]", el)), lac = U.num(U.$("[data-k=lac]", el)), [hi, lo] = T[v("age")];
      const mapP = map > 0 ? (map < lo ? 2 : map <= hi ? 1 : 0) : 0, lacP = lac >= 11 ? 2 : lac >= 5 ? 1 : 0;
      const cv = v("vaso") + lacP + mapP, coag = Math.min(2, ["plt", "inr", "dd", "fib"].filter(c).length), resp = v("resp"), neuro = v("neuro");
      const tot = cv + coag + resp + neuro;
      const verdict = tot >= 2 ? (cv >= 1 ? `<b style="color:var(--red,#b42318)">SEPTIC SHOCK</b> (sepsis with cardiovascular dysfunction)` : `<b style="color:var(--amber,#b54708)">SEPSIS</b> (infection with life-threatening organ dysfunction)`) : `<b>Does not meet Phoenix sepsis criteria</b> (score under 2)`;
      out.innerHTML = `<p style="margin:0">Phoenix score <b>${tot}</b> (respiratory ${resp}, cardiovascular ${cv}, coagulation ${coag}, neurological ${neuro}) · ${verdict}</p>
        <p class="qn" style="margin:8px 0 0">Phoenix (JAMA 2024) defines sepsis as suspected infection with a score of 2 or more, and septic shock as sepsis with at least 1 cardiovascular point. It is a diagnostic definition, not a screening tool: do not wait for a score to treat a child who looks sick. Not validated in newborns before discharge or under 37 weeks' corrected age. Missing tests score 0.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  },

  vasoinf(el, U) {
    el.innerHTML = `<h4>Vasoactive infusion rate (noradrenaline or adrenaline)</h4><div class="row">
      <label>Weight (kg)<input type="number" data-k="wt" placeholder="e.g. 60"></label>
      <label>Dose (µg/kg/min)<input type="number" step="0.01" data-k="dose" placeholder="e.g. 0.1"></label>
      <label>Drug in syringe (mg)<input type="number" data-k="mg" value="4"></label>
      <label>Total volume (mL)<input type="number" data-k="ml" value="50"></label></div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), out = U.$(".out", el);
      const wt = g("wt"), d = g("dose"), mg = g("mg"), ml = g("ml");
      if (!(wt && d && mg && ml)) { out.innerHTML = `<p class="qn" style="margin:0">Enter weight, dose and the syringe make-up. Bhutan Quick Guide single strength: 4 mg in 50 mL (80 µg/mL); double strength: 8 mg in 50 mL (160 µg/mL).</p>`; return; }
      const conc = mg * 1000 / ml, rate = d * wt * 60 / conc;
      out.innerHTML = `<p style="margin:0">Concentration <b>${conc.toFixed(0)} µg/mL</b> · run at <b>${rate.toFixed(1)} mL/h</b> (${(d * wt).toFixed(1)} µg/min)</p><p class="qn" style="margin:8px 0 0">Adult noradrenaline: usually start 0.05–0.1 µg/kg/min and titrate to MAP 65 mmHg (60–65 if 65 years or older). Single strength through a large peripheral vein above the antecubital fossa is acceptable at first (Bhutan Quick Guide, SSC 2026); check the site hourly. Above 0.25 µg/kg/min for 4 hours: add hydrocortisone; escalating: add vasopressin. Always double-check calculations with a second person.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  }
});
