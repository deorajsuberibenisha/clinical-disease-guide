/* Acute coronary syndrome calculators: HEART score, TIMI (UA/NSTEMI), GRACE in-hospital death (Granger 2003 nomogram).
   Sources: Six AJ et al. Neth Heart J 2008 and Backus BE et al. Int J Cardiol 2013 (HEART);
   Antman EM et al. JAMA 2000;284:835–42 (TIMI UA/NSTEMI); Granger CB et al. Arch Intern Med 2003;163:2345–53 (GRACE nomogram).
   These are decision aids. They never replace the ECG, the troponin trend or clinical judgement. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  /* HEART score: History, ECG, Age, Risk factors, Troponin (0–2 each). For undifferentiated chest pain in the emergency department. */
  heart(el, U) {
    const sel = (k, lab, opts) => `<label>${lab}<select data-k="${k}">${opts.map(([v, t]) => `<option value="${v}">${t}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>HEART score: chest pain in the emergency department</h4><div class="row">
      ${sel("h", "History", [[0, "Slightly suspicious (0)"], [1, "Moderately suspicious (1)"], [2, "Highly suspicious (2)"]])}
      ${sel("e", "ECG", [[0, "Normal (0)"], [1, "Non-specific repolarisation change, LBBB, LVH, paced (1)"], [2, "Significant ST depression (2)"]])}
      ${sel("a", "Age", [[0, "Under 45 (0)"], [1, "45–64 (1)"], [2, "65 or over (2)"]])}
      ${sel("r", "Risk factors", [[0, "None known (0)"], [1, "1–2 risk factors (1)"], [2, "3 or more, or known atherosclerotic disease (2)"]])}
      ${sel("t", "Troponin (first)", [[0, "At or below the normal limit (0)"], [1, "1–3 × normal limit (1)"], [2, "More than 3 × normal limit (2)"]])}
      </div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const s = ["h", "e", "a", "r", "t"].reduce((a, k) => a + (+U.$(`[data-k=${k}]`, el).value || 0), 0), out = U.$(".out", el);
      const band = s <= 3 ? ["Low (0–3)", "About 1–2% risk of a major adverse cardiac event (MACE) at 6 weeks. If the troponin stays normal on repeat testing, early discharge with outpatient follow-up is usually safe.", "pass"]
        : s <= 6 ? ["Moderate (4–6)", "About 12–17% MACE risk. Admit for observation, serial troponin and ECG, and further testing (echo, stress test or CT coronary angiography).", "warn"]
        : ["High (7–10)", "About 50–65% MACE risk. Treat as ACS: start antiplatelet therapy and anticoagulation, and arrange early invasive assessment.", "fail"];
      out.innerHTML = `<p style="margin:0"><b>HEART = ${s}/10 · ${band[0]}</b></p><p class="${band[2] === "fail" ? "warn" : ""}" style="margin:6px 0 0">${band[1]}</p>
        <p class="qn" style="margin:8px 0 0">Risk factors: hypertension, high cholesterol, diabetes, obesity (BMI over 30), current or recent smoking (stopped within 3 months), family history of early heart disease. <b>Do not use HEART when the ECG shows STEMI</b>: that patient needs reperfusion now.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  },

  /* TIMI risk score for UA/NSTEMI (Antman 2000): 7 yes/no items, 14-day death/MI/urgent revascularisation. */
  timi(el, U) {
    const items = [["age", "Age 65 or over"], ["rf", "3 or more coronary risk factors (family history, hypertension, high cholesterol, diabetes, current smoker)"], ["cad", "Known coronary stenosis of 50% or more"], ["asa", "Aspirin taken in the last 7 days"], ["ang", "Severe angina: 2 or more episodes in the last 24 hours"], ["st", "ST deviation of 0.5 mm or more on the admission ECG"], ["mark", "Raised cardiac marker (troponin or CK-MB)"]];
    el.innerHTML = `<h4>TIMI risk score: unstable angina / NSTEMI</h4><div class="checks">${items.map(([k, t]) => `<label class="chk"><input type="checkbox" data-k="${k}"> ${t}</label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    const risk = [4.7, 4.7, 8.3, 13.2, 19.9, 26.2, 40.9, 40.9];
    const run = () => {
      const s = items.filter(([k]) => U.$(`[data-k=${k}]`, el).checked).length, out = U.$(".out", el);
      const lvl = s <= 2 ? "Low" : s <= 4 ? "Intermediate" : "High";
      out.innerHTML = `<p style="margin:0"><b>TIMI = ${s}/7 · ${lvl} risk</b>. Risk of death, new or recurrent MI, or urgent revascularisation within 14 days: about <b>${risk[s]}%</b>.</p>
        <p class="qn" style="margin:8px 0 0">${s >= 3 ? "Intermediate or high risk: invasive coronary assessment during this admission. ICMR advises referring high- and intermediate-risk patients to a PCI-capable centre." : "Low risk: non-invasive testing (stress test, stress imaging or CT coronary angiography) before or soon after discharge."} TIMI was derived in 2000, before high-sensitivity troponin. ESC 2023 prefers the GRACE score for deciding how soon to do angiography.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  },

  /* GRACE in-hospital death, Granger 2003 nomogram (8 variables, admission data). */
  grace(el, U) {
    el.innerHTML = `<h4>GRACE score: risk of death in hospital (ACS)</h4><div class="row">
      <label>Age (years)<input type="number" data-k="age" placeholder="e.g. 64"></label>
      <label>Heart rate (/min)<input type="number" data-k="hr" placeholder="e.g. 92"></label>
      <label>Systolic BP (mmHg)<input type="number" data-k="sbp" placeholder="e.g. 128"></label>
      <label>Creatinine<input type="number" step="any" data-k="cr" placeholder="e.g. 1.1"></label>
      <label>Creatinine unit<select data-k="cu"><option value="mg">mg/dL</option><option value="um">µmol/L</option></select></label>
      <label>Killip class<select data-k="kil"><option value="0">I: no heart failure</option><option value="20">II: crackles or raised JVP</option><option value="39">III: pulmonary oedema</option><option value="59">IV: cardiogenic shock</option></select></label>
      <label>Cardiac arrest at admission<select data-k="ca"><option value="0">No</option><option value="39">Yes</option></select></label>
      <label>ST-segment deviation<select data-k="st"><option value="0">No</option><option value="28">Yes</option></select></label>
      <label>Raised troponin / enzymes<select data-k="enz"><option value="0">No</option><option value="14">Yes</option></select></label>
      </div><div class="out" aria-live="polite">Enter age, heart rate, systolic BP and creatinine.</div>`;
    const band = (v, cuts, pts) => { for (let i = 0; i < cuts.length; i++) if (v < cuts[i]) return pts[i]; return pts[pts.length - 1]; };
    const PX = [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250], PY = [0.2, 0.3, 0.4, 0.6, 0.8, 1.1, 1.6, 2.1, 2.9, 3.9, 5.4, 7.3, 9.8, 13, 18, 23, 29, 36, 44, 52];
    const run = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const age = U.num(g("age")), hr = U.num(g("hr")), sbp = U.num(g("sbp"));
      let cr = U.num(g("cr")); if (g("cu").value === "um") cr = cr / 88.4;
      if (!(age > 0) || !(hr > 0) || !(sbp > 0) || !(cr > 0)) { out.textContent = "Enter age, heart rate, systolic BP and creatinine."; return; }
      const pAge = band(age, [30, 40, 50, 60, 70, 80, 90], [0, 8, 25, 41, 58, 75, 91, 100]);
      const pHr = band(hr, [50, 70, 90, 110, 150, 200], [0, 3, 9, 15, 24, 38, 46]);
      const pSbp = band(sbp, [80, 100, 120, 140, 160, 200], [58, 53, 43, 34, 24, 10, 0]);
      const pCr = band(cr, [0.4, 0.8, 1.2, 1.6, 2.0, 4.0], [1, 4, 7, 10, 13, 21, 28]);
      const tot = pAge + pHr + pSbp + pCr + (+g("kil").value) + (+g("ca").value) + (+g("st").value) + (+g("enz").value);
      let pr; if (tot <= 60) pr = "0.2% or less"; else if (tot >= 250) pr = "52% or more"; else { const i = PX.findIndex(x => x > tot), f = (tot - PX[i - 1]) / 10, v = PY[i - 1] + f * (PY[i] - PY[i - 1]); pr = (v < 10 ? v.toFixed(1) : Math.round(v)) + "%"; }
      const cat = tot <= 108 ? ["Low", "under 1%"] : tot <= 140 ? ["Intermediate", "1–3%"] : ["High", "over 3%"];
      out.innerHTML = `<p style="margin:0"><b>GRACE = ${tot}</b> · estimated in-hospital death about <b>${pr}</b> · <b>${cat[0]} risk</b> (NSTE-ACS band: ${cat[1]}).</p>
        <p class="qn" style="margin:8px 0 0">${tot > 140 ? "<b>A score over 140 is a high-risk feature.</b> ESC 2023 advises considering invasive angiography within 24 hours, so refer to a PCI-capable centre urgently." : "Below 141: invasive angiography during this admission (inpatient strategy) if NSTEMI is confirmed, and sooner if there are other high-risk features."} Haemodynamic instability, refractory pain, life-threatening arrhythmia or acute heart failure mean <b>immediate</b> angiography (within 2 hours), whatever the score.</p>
        <p style="margin:6px 0 0;font-size:13px;color:var(--muted)">Points: age ${pAge} · HR ${pHr} · SBP ${pSbp} · creatinine ${pCr} (${Math.round(cr * 100) / 100} mg/dL) · Killip ${g("kil").value} · arrest ${g("ca").value} · ST ${g("st").value} · enzymes ${g("enz").value}. Granger 2003 nomogram.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run);
  }
});
