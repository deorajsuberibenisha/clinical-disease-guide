/* Acute pancreatitis calculators.
   BISAP: Wu BU et al., Gut 2008;57:1698–1703. Revised Atlanta 2012: Banks PA et al., Gut 2013;62:102–111 (modified Marshall score).
   Fluids: WATERFALL trial, de-Madaria E et al., N Engl J Med 2022;387:989–1000; ACG 2024 (Tenner S et al., Am J Gastroenterol 2024;119:419–437). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  bisap(el, U) {
    const items = [["bun", "Urea over 25 mg/dL BUN (urea over 8.9 mmol/L)"], ["imp", "Impaired mental status (GCS under 15 or new confusion)"], ["sirs", "SIRS: 2 or more of temperature under 36 or over 38 °C, heart rate over 90, respiratory rate over 20 (or PaCO₂ under 32 mmHg), white cells under 4 or over 12"], ["age", "Age over 60"], ["eff", "Pleural effusion on chest X-ray or imaging"]];
    el.innerHTML = `<h4>BISAP score — acute pancreatitis (first 24 hours)</h4><div class="checks">${items.map(([k, t]) => `<label class="chk"><input type="checkbox" data-k="${k}">${t} <b style="margin-left:auto">+1</b></label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$$("input", el).filter(i => i.checked).length;
      const risk = s <= 2 ? "low (around 1–2% or less)" : "several times higher (scores of 3 or more carry a markedly raised risk of organ failure and death)";
      const act = s >= 3 ? "<b>High risk of severe disease.</b> Monitor in HDU/ICU or a high-dependency bed, hourly observations and urine output; involve seniors and plan referral." : "Lower risk, but reassess at 24 and 48 hours: severity is defined by organ failure, which can appear later.";
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>BISAP ${s}/5.</b> Mortality risk: ${risk}. ${act}</p><p class="warn" style="margin:8px 0 0">BISAP predicts; it does not classify. Use the Revised Atlanta tool for the final severity grade.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  atlanta(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Revised Atlanta severity (modified Marshall organ failure score)</h4><div class="row">
      ${sel("resp", "Breathing (PaO₂/FiO₂)", [[0, "Over 400"], [1, "301–400"], [2, "201–300"], [3, "101–200"], [4, "101 or less"]])}
      ${sel("renal", "Creatinine (µmol/L)", [[0, "Under 134 (1.5 mg/dL)"], [1, "134–169"], [2, "170–310"], [3, "311–439"], [4, "Over 439 (5 mg/dL)"]])}
      ${sel("cvs", "Circulation (systolic BP)", [[0, "Over 90 mmHg"], [1, "Under 90, responds to fluid"], [2, "Under 90, no response to fluid"], [3, "Under 90, pH under 7.3"], [4, "Under 90, pH under 7.2"]])}
      ${sel("dur", "If organ failure: how long?", [["t", "Resolved within 48 hours (transient)"], ["p", "Lasting more than 48 hours (persistent)"]])}
      ${sel("loc", "Local or systemic complications?", [["n", "None"], ["y", "Yes: collections, necrosis, or worsening of a chronic illness"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el).value;
      const sc = { resp: +g("resp"), renal: +g("renal"), cvs: +g("cvs") };
      const failing = Object.entries(sc).filter(([, v]) => v >= 2).map(([k]) => ({ resp: "respiratory", renal: "renal", cvs: "cardiovascular" })[k]);
      const persistent = failing.length && g("dur") === "p", local = g("loc") === "y";
      const [grade, plan] = persistent ? ["SEVERE", "Persistent organ failure: ICU-level care and transfer to a centre with critical care, interventional radiology and pancreatic surgery. Mortality can exceed 30%, especially with infected necrosis."]
        : (failing.length || local) ? ["MODERATELY SEVERE", "Transient organ failure or local complications: HDU care, close monitoring, CT after 72 hours if not improving, nutrition support. Mortality is low but stays are long."]
        : ["MILD", "No organ failure and no complications: ward care, early oral feeding as tolerated, treat the cause, home in a few days."];
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>${grade} acute pancreatitis.</b> ${failing.length ? `Organ failure (score 2 or more): ${failing.join(", ")}.` : "No organ scores 2 or more."}</p><p style="margin:6px 0 0">${plan}</p>
        <p class="warn" style="margin:8px 0 0">Without a blood gas, SpO₂ under 90% on air roughly matches PaO₂/FiO₂ under 300. Reassess daily: grade can change in the first 48–72 hours.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
