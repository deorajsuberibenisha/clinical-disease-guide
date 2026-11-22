/* Liver calculators: Child-Pugh, MELD-Na (UNOS 2016) with MELD 3.0, FIB-4, Maddrey discriminant function.
   Sources: Pugh RN et al. Br J Surg 1973; Kamath PS et al. Hepatology 2001 and Kim WR et al. N Engl J Med 2008 (MELD, MELD-Na);
   Kim WR et al. Gastroenterology 2021;161:1887–95 (MELD 3.0); Sterling RK et al. Hepatology 2006 and McPherson S et al. Am J Gastroenterol 2017 (FIB-4);
   Maddrey WC et al. Gastroenterology 1978 and Carithers RL et al. Ann Intern Med 1989 (discriminant function). Decision aids only. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  childpugh(el, U) {
    const sel = (k, lab, opts) => `<label>${lab}<select data-k="${k}">${opts.map(([v, t]) => `<option value="${v}">${t}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Child-Pugh score: severity of cirrhosis</h4><div class="row">
      ${sel("bil", "Bilirubin", [[1, "Under 2 mg/dL (under 34 µmol/L)"], [2, "2–3 mg/dL (34–50 µmol/L)"], [3, "Over 3 mg/dL (over 50 µmol/L)"]])}
      ${sel("alb", "Albumin", [[1, "Over 3.5 g/dL (over 35 g/L)"], [2, "2.8–3.5 g/dL (28–35 g/L)"], [3, "Under 2.8 g/dL (under 28 g/L)"]])}
      ${sel("inr", "INR", [[1, "Under 1.7"], [2, "1.7–2.3"], [3, "Over 2.3"]])}
      ${sel("asc", "Ascites", [[1, "None"], [2, "Mild (controlled with diuretics)"], [3, "Moderate to severe (tense or refractory)"]])}
      ${sel("he", "Encephalopathy", [[1, "None"], [2, "Grade 1–2 (or controlled with treatment)"], [3, "Grade 3–4"]])}
      </div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const s = ["bil", "alb", "inr", "asc", "he"].reduce((a, k) => a + (+U.$(`[data-k=${k}]`, el).value), 0), out = U.$(".out", el);
      const c = s <= 6 ? ["A", "well compensated", "about 100% / 85%"] : s <= 9 ? ["B", "significant functional compromise", "about 80% / 60%"] : ["C", "decompensated", "about 45% / 35%"];
      out.innerHTML = `<p style="margin:0"><b>Child-Pugh ${s} points · Class ${c[0]}</b> (${c[1]}). Historical 1-year / 2-year survival: ${c[2]}.</p>
        <p class="qn" style="margin:8px 0 0">${c[0] === "C" ? "<b>Class C:</b> refer for liver transplant assessment where possible; high risk with any surgery; avoid sedatives and NSAIDs." : c[0] === "B" ? "Class B: drug doses often need reducing; surgery carries substantial risk." : "Class A: compensated; focus on the cause, portal-hypertension screening and liver-cancer surveillance."} For prognosis and transplant listing, MELD-Na is more objective. Child-Pugh is still used for drug dosing and surgical risk.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  },

  meldna(el, U) {
    el.innerHTML = `<h4>MELD-Na (and MELD 3.0): 90-day mortality in cirrhosis</h4><div class="row">
      <label>Bilirubin<input type="number" step="any" data-k="bil" placeholder="mg/dL"></label>
      <label>Creatinine<input type="number" step="any" data-k="cr" placeholder="mg/dL"></label>
      <label>Units<select data-k="u"><option value="mg">mg/dL</option><option value="si">µmol/L</option></select></label>
      <label>INR<input type="number" step="any" data-k="inr" placeholder="e.g. 1.6"></label>
      <label>Sodium (mmol/L)<input type="number" step="any" data-k="na" placeholder="e.g. 132"></label>
      <label>Albumin (g/dL), for MELD 3.0<input type="number" step="any" data-k="alb" placeholder="optional"></label>
      <label>Sex (MELD 3.0)<select data-k="sex"><option value="m">Male</option><option value="f">Female</option></select></label>
      <label>Dialysis ≥2× in past week<select data-k="dx"><option value="n">No</option><option value="y">Yes</option></select></label>
      </div><div class="out" aria-live="polite">Enter bilirubin, creatinine, INR and sodium.</div>`;
    const run = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), si = g("u").value === "si";
      let bil = U.num(g("bil")), cr = U.num(g("cr")), inr = U.num(g("inr")), na = U.num(g("na")), alb = U.num(g("alb"));
      if (!(bil > 0) || !(cr > 0) || !(inr > 0) || !(na > 0)) { out.textContent = "Enter bilirubin, creatinine, INR and sodium."; return; }
      if (si) { bil = bil / 17.1; cr = cr / 88.4; }
      const dx = g("dx").value === "y", cl = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
      const B = Math.max(bil, 1), I = Math.max(inr, 1), C = dx ? 4 : cl(cr, 1, 4), N = cl(na, 125, 137);
      let meld = Math.round((0.957 * Math.log(C) + 0.378 * Math.log(B) + 1.12 * Math.log(I) + 0.643) * 10);
      let mna = meld > 11 ? Math.round(meld + 1.32 * (137 - N) - 0.033 * meld * (137 - N)) : meld;
      mna = cl(mna, 6, 40);
      let m3 = "";
      if (alb > 0) {
        const C3 = dx ? 3 : cl(cr, 1, 3), A = cl(alb, 1.5, 3.5), f = g("sex").value === "f" ? 1 : 0;
        const v = 1.33 * f + 4.56 * Math.log(B) + 0.82 * (137 - N) - 0.24 * (137 - N) * Math.log(B) + 9.09 * Math.log(I) + 11.14 * Math.log(C3) + 1.85 * (3.5 - A) - 1.83 * (3.5 - A) * Math.log(C3) + 6;
        m3 = ` · <b>MELD 3.0 = ${cl(Math.round(v), 6, 40)}</b>`;
      }
      const mort = mna < 10 ? "about 2%" : mna < 20 ? "about 6%" : mna < 30 ? "about 20%" : mna < 40 ? "about 50%" : "over 70%";
      out.innerHTML = `<p style="margin:0"><b>MELD-Na = ${mna}</b> (MELD ${Math.min(meld, 40)})${m3}. Approximate 90-day mortality: <b>${mort}</b>.</p>
        <p class="qn" style="margin:8px 0 0">${mna >= 15 ? "<b>MELD-Na 15 or more:</b> transplant benefit outweighs risk, so refer for transplant assessment where possible. " : ""}Above 20 in alcohol-related hepatitis suggests severe disease (see the Maddrey calculator). Bounds used: bilirubin, INR and creatinine at least 1.0; creatinine capped at 4.0 (3.0 for MELD 3.0); sodium 125–137. Mortality bands are approximate (Wiesner 2003).</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run);
  },

  fib4(el, U) {
    el.innerHTML = `<h4>FIB-4: is there advanced liver fibrosis?</h4><div class="row">
      <label>Age (years)<input type="number" data-k="age" placeholder="e.g. 52"></label>
      <label>AST (U/L)<input type="number" step="any" data-k="ast" placeholder="e.g. 48"></label>
      <label>ALT (U/L)<input type="number" step="any" data-k="alt" placeholder="e.g. 40"></label>
      <label>Platelets (×10⁹/L)<input type="number" step="any" data-k="plt" placeholder="e.g. 180"></label>
      </div><div class="out" aria-live="polite">Enter age, AST, ALT and platelets.</div>`;
    const run = () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), out = U.$(".out", el);
      const age = g("age"), ast = g("ast"), alt = g("alt"), plt = g("plt");
      if (!(age > 0) || !(ast > 0) || !(alt > 0) || !(plt > 0)) { out.textContent = "Enter age, AST, ALT and platelets."; return; }
      const f = age * ast / (plt * Math.sqrt(alt)), v = Math.round(f * 100) / 100, low = age >= 65 ? 2.0 : 1.3;
      const band = age < 35 ? ["Not validated under 35 years", "Interpret with caution; use elastography if available."]
        : f < low ? ["Low risk", `Advanced fibrosis very unlikely (negative predictive value about 90%). Manage risk factors and repeat FIB-4 every 1–3 years.`]
        : f <= 2.67 ? ["Indeterminate", "Needs a second test: transient elastography (FibroScan) or ELF if available, or specialist referral."]
        : ["High risk", "Advanced fibrosis or cirrhosis likely. Refer to a physician/hepatologist; start cirrhosis care (variceal and liver-cancer screening) if confirmed."];
      out.innerHTML = `<p style="margin:0"><b>FIB-4 = ${v}</b> · <b>${band[0]}</b></p><p class="qn" style="margin:6px 0 0">${band[1]} Cut-offs: under ${low} low${age >= 65 ? " (age-adjusted for 65 and over)" : ""}, over 2.67 high (EASL/AASLD MASLD pathways). FIB-4 is less accurate in acute hepatitis and heavy current drinking (AST rises).</p>`;
    };
    el.addEventListener("input", run);
  },

  maddrey(el, U) {
    el.innerHTML = `<h4>Maddrey discriminant function: alcohol-related hepatitis</h4><div class="row">
      <label>Patient prothrombin time (s)<input type="number" step="any" data-k="pt" placeholder="e.g. 22"></label>
      <label>Control prothrombin time (s)<input type="number" step="any" data-k="ctl" placeholder="e.g. 12"></label>
      <label>Bilirubin<input type="number" step="any" data-k="bil" placeholder="e.g. 12"></label>
      <label>Units<select data-k="u"><option value="mg">mg/dL</option><option value="si">µmol/L</option></select></label>
      </div><div class="out" aria-live="polite">Enter prothrombin times and bilirubin.</div>`;
    const run = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const pt = U.num(g("pt")), ctl = U.num(g("ctl")); let bil = U.num(g("bil"));
      if (!(pt > 0) || !(ctl > 0) || !(bil > 0)) { out.textContent = "Enter prothrombin times and bilirubin."; return; }
      if (g("u").value === "si") bil = bil / 17.1;
      const df = Math.round((4.6 * (pt - ctl) + bil) * 10) / 10;
      out.innerHTML = `<p style="margin:0"><b>Discriminant function = ${df}</b> · ${df >= 32 ? "<b>Severe alcohol-related hepatitis</b> (untreated 1-month mortality 30–50%)" : "Not severe (below 32)"}</p>
        <p class="qn" style="margin:6px 0 0">${df >= 32 ? "Consider <b>prednisolone 40 mg daily for 28 days</b> if there is no active infection, GI bleeding, AKI or uncontrolled diabetes (STOPAH: reduced 28-day mortality only). Check the <b>Lille score at day 7</b>: 0.45 or more means non-response, so stop steroids. Abstinence, nutrition (35–40 kcal/kg/day, 1.2–1.5 g/kg protein) and screening for infection matter most." : "Supportive care: abstinence, nutrition, thiamine, treat infection. Recalculate if the patient worsens."} MELD above 20 is an alternative severity threshold (AASLD 2019).</p>`;
    };
    el.addEventListener("input", run);
  }
});
