/* Burns and snakebite calculators.
   Burns: Wallace rule of nines (adults) and age-adjusted Lund–Browder head/leg percentages (children); Parkland (Baxter) formula as in Bhutan STG 2024 §1.9 (4 mL/kg/%TBSA),
   ATLS 10th ed. starting rates (2 mL adults, 3 mL children); child maintenance (Holliday–Segar). Snakebite: Bhutan Snakebite Guideline 2024 (via the national guideline). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  burnfluid(el, U) {
    const reg = [["head", "Head and neck"], ["chest", "Chest and abdomen (front of trunk)"], ["back", "Back and buttocks"], ["larm", "Left arm"], ["rarm", "Right arm"], ["lleg", "Left leg"], ["rleg", "Right leg"], ["gen", "Perineum"]];
    el.innerHTML = `<h4>Burns: area and first 24-hour fluids</h4><div class="row">
      <label>Age (years)<input type="number" step="any" data-k="age" placeholder="e.g. 30"></label>
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 55"></label>
      <label>Hours since burn<input type="number" step="any" data-k="hrs" placeholder="e.g. 2"></label>
      <label>Formula<select data-k="f"><option value="4">Parkland 4 mL/kg/% (Bhutan STG)</option><option value="2">ATLS 2 mL/kg/% (adult start)</option><option value="3">ATLS 3 mL/kg/% (child start)</option></select></label></div>
      <p style="margin:10px 0 6px">Percentage of each region burned (partial or full thickness only; ignore simple redness):</p>
      <div class="row">${reg.map(([k, t]) => `<label>${t}<select data-k="${k}">${[0, 25, 50, 75, 100].map(v => `<option value="${v}">${v}%</option>`).join("")}</select></label>`).join("")}</div>
      <div class="row"><label>Extra scattered area by palms (patient's palm ≈ 1%)<input type="number" step="any" data-k="palm" placeholder="0"></label></div>
      <div class="out" aria-live="polite">Enter age and weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const age = U.num(g("age")), w = U.num(g("wt")), hrs = U.num(g("hrs")) || 0, f = +g("f").value, palm = U.num(g("palm")) || 0;
      if (!(age >= 0) || !(w > 0)) { out.textContent = "Enter age and weight."; return; }
      // Lund–Browder-style: head shrinks and legs grow with age
      const head = age < 1 ? 19 : age < 5 ? 17 : age < 10 ? 13 : age < 15 ? 11 : 9;
      const leg = age < 1 ? 13.5 : age < 5 ? 14.5 : age < 10 ? 16.5 : age < 15 ? 17.5 : 18;
      const pct = { head, chest: 18, back: 18, larm: 9, rarm: 9, lleg: leg, rleg: leg, gen: 1 };
      let tbsa = Object.keys(pct).reduce((s, k) => s + pct[k] * (+g(k).value) / 100, 0) + palm;
      tbsa = Math.min(100, Math.round(tbsa * 10) / 10);
      const child = age < 15, r10 = v => Math.round(v / 10) * 10;
      const needIV = child ? tbsa >= 10 : tbsa >= 15;
      const total = f * w * tbsa, first8 = total / 2, left8 = Math.max(8 - hrs, 0.5);
      const maint = child ? (w <= 10 ? w * 100 : w <= 20 ? 1000 + (w - 10) * 50 : 1500 + (w - 20) * 20) : 0;
      const refer = child ? tbsa > 10 : tbsa > 15;
      out.innerHTML = `<p style="margin:0"><b>Burned area about ${tbsa}% TBSA.</b> ${refer ? "<b>Refer to a burns-capable hospital</b> (STG: children over 10%, adults over 15%)." : "Below the STG size threshold for referral; refer anyway for face, hands, feet, genitals, joints, circumferential, full-thickness, inhalation or electrical burns."}</p>
        ${needIV ? `<ul style="margin:6px 0 0;padding-left:18px">
          <li><b>Ringer's lactate, first 24 hours from the time of the burn:</b> ${r10(total)} mL (${f} × ${w} kg × ${tbsa}%).</li>
          <li>Half (${r10(first8)} mL) by 8 hours after the burn: ${hrs >= 8 ? "the 8-hour window has passed; give the remaining first-half volume promptly with close review" : `about <b>${r10(first8 / left8)} mL/hour</b> for the next ${left8.toFixed(1)} hours`}; the other half over the following 16 hours (about ${r10(first8 / 16)} mL/hour).</li>
          ${child ? `<li><b>Add maintenance</b> for children: ${r10(maint)} mL/day (≈ ${Math.round(maint / 24)} mL/hour) of 0.9% saline with 5% dextrose; check glucose.</li>` : ""}
          <li><b>Titrate to urine output:</b> ${child ? "1 mL/kg/hour (" + Math.round(w) + " mL/hour)" : "0.5 mL/kg/hour (about " + Math.round(0.5 * w) + " mL/hour, 30–50 mL/hour)"}; increase or decrease the rate by about a third if outside target. Catheterise.</li></ul>`
          : `<p style="margin:6px 0 0">IV fluid resuscitation is usually not needed below ${child ? "10" : "15"}% TBSA: encourage oral fluids and monitor urine.</p>`}
        <p class="warn" style="margin:8px 0 0">Formulas are only a starting point: over-resuscitation ('fluid creep') causes oedema and compartment syndromes. Count only partial- and full-thickness burns.</p>`;
    });
  },

  snakeplan(el, U) {
    const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Snakebite: is antivenom indicated, and how much? (Bhutan 2024)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 50"></label><label>Age<select data-k="age"><option value="a">12 years or older</option><option value="c">Child under 12</option></select></label></div>
      <div class="checks" style="margin-top:10px">${chk("wbct", "20WBCT: blood not clotted at 20 minutes")}${chk("bleed", "Spontaneous bleeding (gums, urine, old wounds)")}${chk("neuro", "Ptosis, double vision, difficulty swallowing or breathing")}${chk("shock", "Hypotension, shock or arrhythmia")}${chk("aki", "Dark urine, low urine output or rising creatinine")}${chk("local", "Swelling beyond one major joint within 24 h, or more than half the limb within 48 h")}</div>
      <div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, out = U.$(".out", el), w = U.num(g("wt")), child = g("age").value === "c";
      const ind = ["wbct", "bleed", "neuro", "shock", "aki", "local"].some(c);
      if (!ind) { out.innerHTML = `<p style="margin:0"><b>No antivenom indication now.</b> Observe for at least 24 hours (krait bites at night can show nothing for hours): 20WBCT and neurological check every 6 hours, swelling marked every 2–4 hours. Immobilise the limb; no tourniquet, cutting or sucking.</p>`; return; }
      const lines = [];
      lines.push(`<b>Give antivenom: 10 vials</b> in 100–400 mL saline or 5% dextrose IV over 60 minutes${child ? " (same dose as adults; use the smaller diluent volume)" : ""}. Premedicate with adrenaline 1:1000 SC ${child && w > 0 ? (0.005 * w).toFixed(2) + " mL (0.005 mL/kg)" : child ? "0.005 mL/kg" : "0.25 mL"}. No skin test. Have IM adrenaline drawn up.`);
      if (c("wbct") || c("bleed") || c("local") || c("aki")) lines.push("<b>Haemotoxic plan:</b> repeat 20WBCT 6 hours after the dose; if still unclotted give <b>5 vials</b> over 60 minutes and repeat every 6 hours until the blood clots (maximum 30 vials). FFP 10–15 mL/kg only for persistent bleeding after antivenom. No heparin or antifibrinolytics.");
      if (c("neuro")) lines.push(`<b>Neurotoxic plan:</b> repeat 10 vials if paralysis worsens over the next 2 hours (maximum 20). Neostigmine trial: atropine ${child && w > 0 ? Math.min(0.02 * w, 0.6).toFixed(2) : "0.3–0.6"} mg IV then neostigmine ${w > 0 ? (child ? Math.min(0.04 * w, 0.5).toFixed(2) : Math.min(0.01 * w, 0.5).toFixed(2)) : (child ? "0.025–0.04 mg/kg" : "0.01 mg/kg")} mg every 30 minutes; no response after 3 doses suggests krait. Watch the airway: intubate and ventilate for bulbar or respiratory paralysis.`);
      if (c("aki")) lines.push(`<b>Kidneys:</b> fluid challenge, then furosemide ${w > 0 ? Math.round(1.5 * w) + " mg (1.5 mg/kg)" : "1–1.5 mg/kg"} once; urine under 200 mL in 2 hours → refer for dialysis.`);
      if (c("shock")) lines.push("<b>Shock:</b> IV fluid boluses while antivenom runs; refer for critical care.");
      lines.push("Anaphylaxis: stop antivenom, IM adrenaline (adult 0.5 mL; 6–12 y 0.2 mL; 1–6 y 0.1 mL; under 1 y 0.05 mL), repeat every 5 minutes up to 3 doses; restart slowly once settled if still needed.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${lines.map(l => `<li>${l}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">PHC/BHU: first aid, IV access, fluids for shock, and urgent referral to a hospital stocking antivenom.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
