/* PPH and neonatal jaundice calculators.
   PPH: Bhutan STG 2024 §11.11, Bhutan PPH Guideline 2016, WHO 2023 (E-MOTIVE: measured blood loss ≥300 mL plus one abnormal sign triggers the bundle), shock index (HR/SBP).
   Jaundice: NICE CG98 (2010, updated 2016) treatment thresholds for babies 38 weeks or more, and the gestation rule for preterm babies
   (final phototherapy threshold = gestation×10 − 100 µmol/L; exchange = gestation×10). AAP 2022 thresholds are higher and risk-adjusted. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  pphcheck(el, U) {
    el.innerHTML = `<h4>Postpartum haemorrhage: severity and next steps</h4><div class="row">
      <label>Estimated or measured blood loss (mL)<input type="number" data-k="ebl" placeholder="e.g. 900"></label>
      <label>Heart rate (/min)<input type="number" data-k="hr" placeholder="e.g. 118"></label>
      <label>Systolic BP (mmHg)<input type="number" data-k="sbp" placeholder="e.g. 92"></label>
      <label>Uterus<select data-k="ut"><option value="soft">Soft, boggy (atony)</option><option value="firm">Firm, well contracted</option></select></label>
      <label>Placenta<select data-k="pl"><option value="out">Delivered, complete</option><option value="in">Not delivered or incomplete</option></select></label>
      <label>Asthma or hypertension<select data-k="ci"><option value="n">Neither</option><option value="htn">Hypertension / pre-eclampsia</option><option value="ast">Asthma</option><option value="both">Both</option></select></label></div><div class="out" aria-live="polite">Enter blood loss, heart rate and blood pressure.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const ebl = U.num(g("ebl")), hr = U.num(g("hr")), sbp = U.num(g("sbp")), ut = g("ut").value, pl = g("pl").value, ci = g("ci").value;
      if (!(hr > 0) || !(sbp > 0)) { out.textContent = "Enter blood loss, heart rate and blood pressure."; return; }
      const si = hr / sbp;
      const major = ebl > 1000 || si >= 1 || sbp < 90;
      const sev = ebl > 1000 || si >= 1 ? (si >= 1.4 || ebl >= 2000 ? "Massive / life-threatening" : "Major PPH") : ebl >= 500 ? "Minor PPH (500–1000 mL, no shock)" : ebl >= 300 ? "Early warning (300 mL or more): start the first response bundle" : "Not PPH by volume yet";
      const steps = [];
      steps.push("<b>Call for help (red alert).</b> Lie flat, oxygen, keep warm, two 14–16 G cannulae, bloods (group and cross-match, Hb, clotting), catheter (urine 30 mL/hour or more).");
      if (ut === "soft") steps.push("<b>Atony:</b> uterine massage; <b>oxytocin</b> 10 IU IM/slow IV then infusion (STG 20 IU in 500 mL saline); <b>tranexamic acid 1 g IV over 10 minutes</b> (within 3 hours of birth; repeat after 30 minutes if bleeding continues).");
      if (ut === "soft") steps.push(ci === "htn" || ci === "both" ? "Next uterotonic: <b>misoprostol 800 microgram</b> (rectal or sublingual). <b>Avoid methylergometrine</b> (hypertension)." : "Next uterotonics: <b>methylergometrine 0.2 mg IM</b> (STG) and/or <b>misoprostol 800 microgram</b> (rectal or sublingual).");
      if (ut === "soft") steps.push(ci === "ast" || ci === "both" ? "Refractory: carboprost is <b>contraindicated in asthma</b>; go to bimanual compression, balloon or condom tamponade and surgery." : "Refractory: <b>carboprost 0.25 mg IM every 15 minutes</b> (max 2 mg) at referral hospitals; bimanual or aortic compression; balloon or condom tamponade.");
      if (ut === "firm") steps.push("<b>Uterus firm: look for trauma</b> (cervical, vaginal, perineal tears) and repair; consider uterine rupture and coagulopathy.");
      if (pl === "in") steps.push("<b>Retained placenta or tissue:</b> controlled cord traction if safe, manual removal under anaesthesia, ampicillin 1 g IV; if morbidly adherent and stable, leave in place and transfer.");
      if (major) steps.push("<b>Major PPH:</b> warmed crystalloid (up to about 3.5 L) while blood is arranged; transfuse early (do not wait for Hb); massive transfusion protocol where available; refer for surgery if bleeding continues.");
      steps.push("At a BHU or PHC: oxytocin 10 IU IM, massage, IV fluids, tranexamic acid if stocked, baby to the breast, compression, then urgent transfer by road or air.");
      out.innerHTML = `<p style="margin:0"><b>${sev}.</b> Shock index ${si.toFixed(1)}${si >= 1 ? " (1.0 or more: significant blood loss, often over 1 litre)" : ""}.</p><ol style="margin:6px 0 0;padding-left:20px">${steps.map(s => `<li>${s}</li>`).join("")}</ol><p class="warn" style="margin:8px 0 0">Visual estimates miss 30–50% of blood loss: weigh pads or use a calibrated drape. Recovery signs: systolic BP 100 or more and pulse under 100.</p>`;
    });
  },

  nnjthreshold(el, U) {
    el.innerHTML = `<h4>Neonatal jaundice: phototherapy and exchange thresholds (NICE)</h4><div class="row">
      <label>Gestation at birth (weeks)<input type="number" data-k="ga" placeholder="e.g. 38"></label>
      <label>Age now (hours)<input type="number" data-k="h" placeholder="e.g. 40"></label>
      <label>Total serum bilirubin<input type="number" step="any" data-k="tsb" placeholder="e.g. 14"></label>
      <label>Unit<select data-k="u"><option value="mg">mg/dL</option><option value="um">µmol/L</option></select></label></div><div class="out" aria-live="polite">Enter gestation, age in hours and bilirubin.</div>`;
    // NICE CG98 table, 38+ weeks: [hours, phototherapy, exchange] in µmol/L
    const T = [[0, 100, 100], [6, 125, 150], [12, 150, 200], [18, 175, 250], [24, 200, 300], [30, 212, 350], [36, 225, 400], [42, 237, 450], [48, 250, 450], [54, 262, 450], [60, 275, 450], [66, 287, 450], [72, 300, 450], [78, 312, 450], [84, 325, 450], [90, 337, 450], [96, 350, 450]];
    const lerp = (h, i) => { if (h >= 96) return T[16][i]; for (let k = 0; k < 16; k++) if (h >= T[k][0] && h <= T[k + 1][0]) return T[k][i] + (T[k + 1][i] - T[k][i]) * (h - T[k][0]) / 6; return T[0][i]; };
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const ga = U.num(g("ga")), h = U.num(g("h")), mg = g("u").value === "mg", raw = U.num(g("tsb"));
      if (!(ga >= 23) || !(h >= 0) || !(raw > 0)) { out.textContent = "Enter gestation, age in hours and bilirubin."; return; }
      const tsb = mg ? raw * 17.1 : raw;
      let photo, exch;
      if (ga >= 38) { photo = lerp(h, 1); exch = lerp(h, 2); }
      else {
        const fp = ga * 10 - 100, fe = ga * 10;
        if (h < 72) {
          out.innerHTML = `<p style="margin:0">For a baby born at ${ga} weeks the NICE thresholds rise over the first 72 hours to a plateau of <b>phototherapy ${fp} µmol/L (${(fp / 17.1).toFixed(1)} mg/dL)</b> and <b>exchange ${fe} µmol/L (${(fe / 17.1).toFixed(1)} mg/dL)</b>. At ${h} hours the thresholds are lower than this: plot the value on the <a href="https://www.nice.org.uk/guidance/cg98/resources" target="_blank" rel="noopener">NICE gestation-specific chart</a>. Bilirubin entered: ${Math.round(tsb)} µmol/L (${(tsb / 17.1).toFixed(1)} mg/dL)${tsb >= fp ? " — already above the plateau for phototherapy: start phototherapy now" : ""}.</p><p class="warn" style="margin:8px 0 0">Preterm babies are more vulnerable to bilirubin toxicity: when in doubt, start phototherapy.</p>`;
          return;
        }
        photo = fp; exch = fe;
      }
      const toMg = v => (v / 17.1).toFixed(1);
      const show = v => `${Math.round(v)} µmol/L (${toMg(v)} mg/dL)`;
      let act;
      if (h < 24 && tsb >= 100) act = "<b>Jaundice in the first 24 hours is never physiological:</b> urgent bilirubin, blood groups and Coombs test, start phototherapy and look for haemolysis or sepsis.";
      if (tsb >= exch) act = "<b>At or above the exchange threshold:</b> intensive (multiple) phototherapy now, IV access, prepare for exchange transfusion, urgent transfer to NICU; IVIG if isoimmune haemolysis.";
      else if (tsb >= exch - 50) act = "<b>Within 50 µmol/L (3 mg/dL) of exchange:</b> intensive phototherapy, recheck bilirubin every 4–6 hours, prepare for exchange, transfer to NICU.";
      else if (tsb >= photo) act = act || "<b>Start phototherapy.</b> Continue breastfeeding (frequent feeds); recheck bilirubin 4–6 hours after starting, then every 6–12 hours; stop when 50 µmol/L below the phototherapy line.";
      else if (tsb >= photo - 50) act = act || "<b>Below phototherapy but within 50 µmol/L:</b> recheck bilirubin in 6–18 hours; support feeding.";
      else act = act || "Below treatment thresholds. Recheck if the jaundice deepens, and check again before discharge in babies under 72 hours.";
      out.innerHTML = `<p style="margin:0">Bilirubin <b>${show(tsb)}</b> at ${h} hours. Phototherapy threshold ${show(photo)}; exchange threshold ${show(exch)}.</p><p style="margin:6px 0 0">${act}</p><p class="warn" style="margin:8px 0 0">Any signs of acute bilirubin encephalopathy (lethargy, high-pitched cry, arching, poor feeding) mean immediate exchange transfusion whatever the number. Lower your threshold for haemolysis, sepsis, acidosis, low albumin or G6PD deficiency (AAP 2022 risk factors).</p>`;
    });
  }
});
