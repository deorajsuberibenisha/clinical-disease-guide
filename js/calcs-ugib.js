/* Upper GI bleeding calculators: Glasgow-Blatchford score and Rockall score (pre-endoscopy and complete).
   Sources: Blatchford O et al. Lancet 2000;356:1318–21; Rockall TA et al. Gut 1996;38:316–21; ACG 2021 (Laine L et al.)
   and ESGE 2021 (Gralnek IM et al.) thresholds for outpatient management (GBS ≤1). Decision aids only. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {
  gbs(el, U) {
    el.innerHTML = `<h4>Glasgow-Blatchford score (before endoscopy)</h4><div class="row">
      <label>Urea<input type="number" step="0.1" data-k="u" placeholder="e.g. 45"></label>
      <label>Urea unit<select data-k="uu"><option value="mgdl">Urea mg/dL</option><option value="mmol">Urea mmol/L</option><option value="bun">BUN mg/dL</option></select></label>
      <label>Haemoglobin (g/dL)<input type="number" step="0.1" data-k="hb" placeholder="e.g. 9.5"></label>
      <label>Sex<select data-k="sex"><option value="m">Male</option><option value="f">Female</option></select></label>
      <label>Systolic BP (mmHg)<input type="number" data-k="sbp" placeholder="e.g. 98"></label>
      <label>Pulse (/min)<input type="number" data-k="hr" placeholder="e.g. 105"></label></div>
      <div class="checks"><label class="chk"><input type="checkbox" data-k="mel"> Melaena</label><label class="chk"><input type="checkbox" data-k="syn"> Syncope</label><label class="chk"><input type="checkbox" data-k="liv"> Liver disease</label><label class="chk"><input type="checkbox" data-k="hf"> Heart failure</label></div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      const uRaw = g("u"), uu = U.$("[data-k=uu]", el).value, hb = g("hb"), sbp = g("sbp"), hr = g("hr"), m = U.$("[data-k=sex]", el).value === "m";
      if (!(uRaw && hb && sbp && hr)) { out.innerHTML = `<p class="qn" style="margin:0">Enter urea, haemoglobin, systolic BP and pulse.</p>`; return; }
      const u = uu === "mmol" ? uRaw : uu === "mgdl" ? uRaw / 6.006 : uRaw * 0.357; // urea mmol/L
      let s = u >= 25 ? 6 : u >= 10 ? 4 : u >= 8 ? 3 : u >= 6.5 ? 2 : 0;
      s += m ? (hb < 10 ? 6 : hb < 12 ? 3 : hb < 13 ? 1 : 0) : (hb < 10 ? 6 : hb < 12 ? 1 : 0);
      s += sbp < 90 ? 3 : sbp < 100 ? 2 : sbp < 110 ? 1 : 0;
      s += (hr >= 100 ? 1 : 0) + (c("mel") ? 1 : 0) + (c("syn") ? 2 : 0) + (c("liv") ? 2 : 0) + (c("hf") ? 2 : 0);
      const msg = s <= 1 ? `<b style="color:var(--green,#067647)">Very low risk</b>: outpatient management with early outpatient endoscopy is reasonable if the patient is reliable and can return (ACG 2021, ESGE 2021).`
        : s < 7 ? `<b style="color:var(--amber,#b54708)">Not low risk</b>: admit, resuscitate, PPI, endoscopy within 24 hours.`
        : `<b style="color:var(--red,#b42318)">High risk</b> of needing transfusion or endoscopic/surgical intervention: resuscitate, transfuse to Hb ≥7 (≥8 with heart disease), endoscopy within 24 h (sooner if unstable after resuscitation); refer if no endoscopy on site.`;
      out.innerHTML = `<p style="margin:0">Glasgow-Blatchford score <b>${s}</b> (urea ${u.toFixed(1)} mmol/L)</p><p style="margin:6px 0 0">${msg}</p><p class="qn" style="margin:8px 0 0">The score predicts need for intervention (transfusion, endoscopic therapy, surgery) or death; it does not tell you the cause. Range 0–23.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  },

  rockall(el, U) {
    const sel = (k, l, o) => `<label>${l}<select data-k="${k}">${o.map(([v, t]) => `<option value="${v}">${t}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Rockall score (mortality risk)</h4><div class="row">
      ${sel("age", "Age", [[0, "Under 60"], [1, "60–79"], [2, "80 or over"]])}
      ${sel("shock", "Shock", [[0, "None (pulse under 100, SBP 100 or more)"], [1, "Tachycardia (pulse 100 or more, SBP 100 or more)"], [2, "Hypotension (SBP under 100)"]])}
      ${sel("co", "Comorbidity", [[0, "None major"], [2, "Heart failure, ischaemic heart disease, any major comorbidity"], [3, "Renal failure, liver failure, disseminated cancer"]])}
      ${sel("dx", "Endoscopic diagnosis (leave if not yet done)", [["", "Endoscopy not done yet"], [0, "Mallory-Weiss tear, or no lesion and no stigmata"], [1, "All other diagnoses (ulcer, erosions, varices, oesophagitis)"], [2, "Upper GI cancer"]])}
      ${sel("srh", "Stigmata of recent haemorrhage", [[0, "None, or dark spot only"], [2, "Blood in upper GI tract, adherent clot, visible or spurting vessel"]])}</div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const v = k => U.$(`[data-k=${k}]`, el).value, out = U.$(".out", el);
      const pre = +v("age") + +v("shock") + +v("co"), done = v("dx") !== "";
      if (!done) { out.innerHTML = `<p style="margin:0">Pre-endoscopy Rockall <b>${pre}</b> ${pre === 0 ? "(very low risk)" : pre >= 3 ? "(raised mortality risk)" : ""}</p><p class="qn" style="margin:8px 0 0">Add the endoscopic findings for the complete score. Pre-endoscopy Rockall is less useful than Glasgow-Blatchford for deciding discharge.</p>`; return; }
      const tot = pre + +v("dx") + +v("srh");
      const risk = tot <= 2 ? "low risk (mortality about 0–2%, rebleeding uncommon): early discharge possible" : tot <= 4 ? "intermediate risk" : tot <= 7 ? "high risk (mortality roughly 10–25%)" : "very high risk (mortality over 40%)";
      out.innerHTML = `<p style="margin:0">Complete Rockall <b>${tot}</b> (pre-endoscopy ${pre}) · ${risk}</p><p class="qn" style="margin:8px 0 0">Mortality bands from the original Rockall cohort (1996); outcomes are better today with modern endoscopic therapy and PPIs. Use with clinical judgement.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  }
});
