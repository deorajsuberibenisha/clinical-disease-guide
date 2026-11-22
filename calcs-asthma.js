/* Acute asthma severity tools.
   Sources: BTS/SIGN British guideline on the management of asthma 2019 (acute asthma severity tables, adults and children);
   BTS/NICE/SIGN 2024 (unchanged acute severity criteria); GINA 2024 (target SpO2, ICS-formoterol); Bhutan STG 2024 §2 asthma. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  /* Adults (≥12 y): moderate / acute severe / life-threatening / near-fatal */
  asthmaadult(el, U) {
    const cb = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Acute asthma severity — adults (BTS/SIGN)</h4><div class="row">
      <label>PEF now (L/min)<input type="number" data-k="pef" placeholder="e.g. 210"></label>
      <label>Best or predicted PEF (L/min)<input type="number" data-k="best" placeholder="e.g. 480"></label>
      <label>SpO₂ (%)<input type="number" data-k="sat" placeholder="e.g. 93"></label>
      <label>Respiratory rate (/min)<input type="number" data-k="rr" placeholder="e.g. 26"></label>
      <label>Heart rate (/min)<input type="number" data-k="hr" placeholder="e.g. 112"></label>
      <label>PaCO₂ (kPa, if gas done)<input type="number" step="any" data-k="co2" placeholder="optional"></label></div>
      <div class="checks" style="margin-top:10px">${cb("sent", "Cannot complete sentences")}${cb("silent", "Silent chest / poor effort")}${cb("cyan", "Cyanosis")}${cb("exh", "Exhaustion or altered consciousness")}${cb("hypo", "Hypotension or arrhythmia")}</div>
      <div class="out" aria-live="polite">Enter what you have; PEF and SpO₂ matter most.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), c = k => g(k).checked;
      const pef = U.num(g("pef")), best = U.num(g("best")), sat = U.num(g("sat")), rr = U.num(g("rr")), hr = U.num(g("hr")), co2 = U.num(g("co2"));
      const pct = pef > 0 && best > 0 ? Math.round(pef / best * 100) : NaN;
      const why = [];
      const life = [];
      if (pct < 33) life.push(`PEF ${pct}% (under 33%)`);
      if (sat < 92) life.push(`SpO₂ ${sat}% (under 92%)`);
      if (co2 >= 4.6 && co2 <= 6.0) life.push(`'normal' PaCO₂ ${co2} kPa in a breathless patient`);
      if (c("silent")) life.push("silent chest or poor effort"); if (c("cyan")) life.push("cyanosis"); if (c("exh")) life.push("exhaustion or altered consciousness"); if (c("hypo")) life.push("hypotension or arrhythmia");
      const near = co2 > 6.0;
      const sev = [];
      if (pct >= 33 && pct <= 50) sev.push(`PEF ${pct}% (33–50%)`);
      if (rr >= 25) sev.push(`RR ${rr}/min (25 or more)`);
      if (hr >= 110) sev.push(`HR ${hr}/min (110 or more)`);
      if (c("sent")) sev.push("cannot complete sentences");
      if (!(pct > 0) && !(sat > 0) && !sev.length && !life.length) { out.textContent = "Enter what you have; PEF and SpO₂ matter most."; return; }
      let grade, cls, plan;
      if (near) { grade = "NEAR-FATAL asthma"; cls = "warn"; plan = "Raised PaCO₂ means the patient is tiring. Call ICU/anaesthesia now for possible intubation; continue nebulised bronchodilators, IV magnesium, steroids."; why.push(`PaCO₂ ${co2} kPa (above 6.0)`); }
      else if (life.length) { grade = "LIFE-THREATENING asthma"; cls = "warn"; plan = "Senior help and ICU review now. Oxygen to SpO₂ 94–98%, back-to-back O₂-driven salbutamol 5 mg + ipratropium 500 microgram, prednisolone 40–50 mg (or IV hydrocortisone 100 mg), IV magnesium sulfate 1.2–2 g over 20 min. Arterial gas."; why.push(...life); }
      else if (sev.length) { grade = "ACUTE SEVERE asthma"; cls = "warn"; plan = "Oxygen to SpO₂ 94–98%, salbutamol 5 mg nebulised (repeat every 15–30 min) or 10 puffs via spacer, add ipratropium 500 microgram, prednisolone 40–50 mg. No improvement → IV magnesium and senior review. Admit unless PEF rises above 75% after the first hour."; why.push(...sev); }
      else if (pct > 50 && pct <= 75) { grade = "Moderate acute asthma"; cls = ""; plan = "Salbutamol 4–10 puffs via spacer (or 5 mg nebulised), repeat as needed; prednisolone 40–50 mg daily for 5 days. Reassess at 1 hour; discharge only if PEF over 75% and stable, with an action plan and review within 48 h."; why.push(`PEF ${pct}% (50–75%)`); }
      else if (pct > 75) { grade = "Not an acute attack by PEF"; cls = ""; plan = "PEF over 75%. Check technique, adherence and the action plan; step up controller therapy if symptoms are frequent."; why.push(`PEF ${pct}%`); }
      else { grade = "Not enough to grade"; cls = ""; plan = "Add PEF (as % of best or predicted) to grade the attack."; }
      out.innerHTML = `<p style="margin:0"><b class="${cls}">${grade}</b>${why.length ? ` — because of: ${why.join("; ")}.` : ""}</p><p style="margin:6px 0 0">${plan}</p>
        <p class="warn" style="margin:8px 0 0">Any one life-threatening feature is enough. Severity is about the worst feature, not the average. Doses are for adults; check the chapter before giving them.</p>`;
    });
  },

  /* Children 2 years and over (BTS/SIGN acute asthma in children) */
  asthmachild(el, U) {
    const cb = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Acute asthma severity and first doses — children 2 years and over (BTS/SIGN)</h4><div class="row">
      <label>Age (years)<input type="number" step="any" data-k="age" placeholder="2 or more"></label>
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 18"></label>
      <label>SpO₂ (%)<input type="number" data-k="sat" placeholder="e.g. 91"></label>
      <label>Respiratory rate (/min)<input type="number" data-k="rr" placeholder="e.g. 44"></label>
      <label>Heart rate (/min)<input type="number" data-k="hr" placeholder="e.g. 150"></label>
      <label>PEF % best/predicted (5 y+, optional)<input type="number" data-k="pct" placeholder="optional"></label></div>
      <div class="checks" style="margin-top:10px">${cb("talk", "Too breathless to talk or feed")}${cb("silent", "Silent chest / poor effort")}${cb("cyan", "Cyanosis")}${cb("agit", "Agitation or altered consciousness")}${cb("hypo", "Hypotension or exhaustion")}</div>
      <div class="out" aria-live="polite">Enter age, SpO₂, respiratory rate and heart rate.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), c = k => g(k).checked;
      const age = U.num(g("age")), wt = U.num(g("wt")), sat = U.num(g("sat")), rr = U.num(g("rr")), hr = U.num(g("hr")), pct = U.num(g("pct"));
      if (!(age >= 2)) { out.innerHTML = age > 0 ? `<span class="warn">Under 2 years: wheeze is usually viral bronchiolitis or preschool viral wheeze; this tool does not apply.</span>` : "Enter age, SpO₂, respiratory rate and heart rate."; return; }
      const young = age < 5, hrCut = young ? 140 : 125, rrCut = young ? 40 : 30;
      const lifeF = [];
      if (pct > 0 && pct < 33) lifeF.push(`PEF ${pct}%`);
      if (c("silent")) lifeF.push("silent chest or poor effort"); if (c("cyan")) lifeF.push("cyanosis"); if (c("agit")) lifeF.push("agitation or altered consciousness"); if (c("hypo")) lifeF.push("hypotension or exhaustion");
      const sevF = [];
      if (sat < 92) sevF.push(`SpO₂ ${sat}% (under 92%)`);
      if (pct >= 33 && pct <= 50) sevF.push(`PEF ${pct}% (33–50%)`);
      if (hr > hrCut) sevF.push(`HR ${hr} (over ${hrCut} at this age)`);
      if (rr > rrCut) sevF.push(`RR ${rr} (over ${rrCut} at this age)`);
      if (c("talk")) sevF.push("too breathless to talk or feed");
      let grade, plan;
      if (lifeF.length) { grade = "LIFE-THREATENING asthma"; plan = "Senior paediatric and PICU help now. Oxygen; continuous or back-to-back nebulised salbutamol with ipratropium; steroids; IV magnesium or IV salbutamol/aminophylline per senior decision."; }
      else if (sevF.length) { grade = "SEVERE acute asthma"; plan = "Oxygen to SpO₂ 94–98%; salbutamol 10 puffs via spacer (or nebulised) every 20 min for the first hour, add ipratropium; oral prednisolone; reassess every 15–30 min. Poor response → IV magnesium and senior review."; }
      else if (sat >= 92 && (sat > 0)) { grade = "Moderate acute asthma"; plan = "Salbutamol 2–10 puffs via spacer, one puff at a time with 5 tidal breaths, repeat every 20–30 min as needed; oral prednisolone. Discharge when stable on salbutamol every 3–4 hours, with an action plan."; }
      else { out.textContent = "Enter SpO₂ and the observations to grade the attack."; return; }
      const why = lifeF.length ? lifeF : sevF;
      let doses = "";
      if (wt > 0) {
        const pred = Math.min(Math.round(wt * 1), 40), predHi = Math.min(Math.round(wt * 2), 40);
        const neb = young ? "2.5 mg" : "5 mg";
        const mg = Math.min(Math.round(wt * 40), 2000);
        doses = `<ul style="margin:6px 0 0;padding-left:18px">
          <li><b>Prednisolone</b> ${pred === predHi ? pred : `${pred}–${predHi}`} mg once daily for 3 days (1–2 mg/kg, maximum 40 mg; BTS also allows 20 mg for 2–5 years, 30–40 mg over 5 years). If vomiting: IV hydrocortisone 4 mg/kg (maximum 100 mg) or oral/IM dexamethasone per local protocol.</li>
          <li><b>Salbutamol</b> nebulised ${neb} (O₂-driven), or 2–10 puffs of 100 microgram via spacer.</li>
          <li><b>Ipratropium</b> nebulised 250 microgram every 20–30 min for the first 2 hours in severe attacks.</li>
          <li><b>IV magnesium sulfate</b> (severe, poor response): ${mg} mg (40 mg/kg, maximum 2 g) over 20 minutes.</li></ul>`;
      }
      out.innerHTML = `<p style="margin:0"><b class="${grade.startsWith("Moderate") ? "" : "warn"}">${grade}</b>${why.length ? ` — because of: ${why.join("; ")}.` : ""}</p><p style="margin:6px 0 0">${plan}</p>${doses}
        <p class="warn" style="margin:8px 0 0">Cut-offs used for age ${young ? "2–5" : "over 5"} years: heart rate over ${hrCut}, respiratory rate over ${rrCut}. Severity is set by the worst single feature. Check doses against the chapter and local formulary.</p>`;
    });
  }
});
