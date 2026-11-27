/* Round 6 calculators (27 Nov 2026) — neonatal pages. File: js/calcs-round6.js
   apnoeaplan: Bhutan IMNCI 2024 definition; caffeine citrate doses European RDS 2022, indications WHO 2022; NEML 20 mg/mL. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const r1 = v => Math.round(v * 10) / 10, r2 = v => Math.round(v * 100) / 100;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  apnoeaplan(el, U) {
    el.innerHTML = `<h4>Apnoea of prematurity: plan and caffeine (Bhutan IMNCI / WHO 2022 / European 2022)</h4><div class="row"><label>Gestation at birth (weeks)<input type="number" step="any" data-k="ga" placeholder="e.g. 29"></label><label>Corrected age now (weeks)<input type="number" step="any" data-k="pma" placeholder="e.g. 30"></label><label>Current weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 1.2"></label>${sel("sev", "Spells", [["m", "Occasional, self-resolving"], ["f", "Frequent or needing stimulation"], ["b", "Needing bag-mask ventilation"]])}${sel("nw", "New, sudden increase, or baby looks unwell", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter gestation and weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), ga = U.num(g("ga")), pma = U.num(g("pma")), w = U.num(g("wt")), sev = g("sev").value, nw = g("nw").value === "y", out = U.$(".out", el);
      if (!(ga > 0) || !(w > 0)) { out.textContent = "Enter gestation and weight."; return; }
      if (w < 0.4 || w > 5) { out.textContent = "Check weight (0.4–5 kg)."; return; }
      const L = [];
      if (ga >= 37) L.push(`<li><b>Term baby: this is not apnoea of prematurity.</b> Full work-up for sepsis, seizures, hypoglycaemia, asphyxia, drugs, airway and heart causes; refer.</li>`);
      L.push(nw ? `<li><b>Sepsis first:</b> blood culture, CRP (LP if possible), start antibiotics; check glucose, temperature, haemoglobin, abdomen (NEC).</li>` : `<li>Check glucose, temperature and the environment; examine for sepsis, anaemia, seizures and NEC.</li>`);
      if (ga < 37) L.push(`<li><b>Caffeine citrate</b>: load <b>${r1(20 * w)} mg = ${r2(w)} mL</b> of 20 mg/mL (IV over 30 min or oral), then <b>${r1(5 * w)}–${r1(10 * w)} mg = ${r2(0.25 * w)}–${r2(0.5 * w)} mL once daily</b> from 24 h. Hold if heart rate over 180.</li>`);
      L.push(sev === "b" ? `<li><b>Severe spells:</b> bag-mask with air during spells; CPAP 5–6 cmH₂O; blood gas; refer for NIPPV or ventilation if they continue.</li>` : sev === "f" ? `<li>Frequent spells: maintenance up to 10 mg/kg/day; CPAP 5–6 cmH₂O if they continue; check neck position and nasal blockage.</li>` : `<li>Occasional spells: monitor SpO₂ and heart rate with alarms; gentle stimulation when needed.</li>`);
      if (pma > 0) L.push(pma >= 33 ? `<li>Corrected age ${pma} weeks: consider stopping caffeine once spell-free for 5–7 days; then watch 5–7 days off caffeine before discharge.</li>` : `<li>Corrected age ${pma} weeks: continue caffeine until about 33–34 weeks and 5–7 spell-free days.</li>`);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.join("")}</ul><p class="warn" style="margin:8px 0 0">Apnoea = no breathing for more than 20 seconds (Bhutan IMNCI), or shorter with heart rate under 100 or SpO₂ under 80–85%.</p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  },

  cpapcheck(el, U) {
    el.innerHTML = `<h4>Bubble CPAP: settings and failure check (WHO 2022 / European 2022 / Bhutan IMNCI)</h4><div class="row">${sel("p", "Patient", [["pt", "Preterm newborn"], ["tn", "Term newborn"], ["c", "Infant / child"]])}<label>Pressure (cmH₂O)<input type="number" step="any" data-k="peep" placeholder="e.g. 6"></label><label>FiO₂ (%)<input type="number" step="any" data-k="f" placeholder="e.g. 40"></label><label>SpO₂ (%)<input type="number" step="any" data-k="s" placeholder="e.g. 89"></label></div><div class="checks" style="margin-top:8px">${chk("ap", "Recurrent apnoea or bradycardia")}${chk("wob", "Worsening indrawing, grunting or exhaustion")}${chk("co2", "pH under 7.25 with rising CO₂")}${chk("shock", "Shock or reduced consciousness")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), p = g("p").value, nb = p !== "c", peep = U.num(g("peep")), f = U.num(g("f")), s = U.num(g("s")), c = k => g(k).checked;
      const tgt = p === "pt" ? [90, 94] : [90, 98], max = nb ? 8 : 10, start = nb ? "6 (range 5–8)" : "5–7";
      const L = [`<li>Start at <b>${start} cmH₂O</b> (max ${max}); flow ${nb ? "5–8" : "5–10"} L/min with continuous bubbling; FiO₂ to SpO₂ <b>${tgt[0]}–${tgt[1]}%</b>; correct prong size; orogastric tube open.</li>`];
      const hard = c("ap") || c("wob") || c("co2") || c("shock");
      if (!(peep > 0) || !(f > 0)) L.push("<li>Enter pressure and FiO₂ to check for failure.</li>");
      else {
        if (f > 100 || f < 21) L.push("<li>FiO₂ must be 21–100%.</li>");
        const low = s > 0 && s < tgt[0], high = s > tgt[1];
        const surf = p === "pt" && f > 30 && peep >= 6;
        const fail = hard || (nb && f >= 40 && low) || (!nb && f >= 60 && low) || c("shock");
        if (fail) L.push(`<li><b>CPAP failing</b>: check bubbling, leak, blocked or displaced prongs, pneumothorax; ${peep < max ? "increase pressure by 1 cmH₂O while arranging escalation; " : ""}<b>escalate to ventilation / NICU or PICU</b>${c("shock") || c("ap") ? " — this baby needs a secured airway, not more CPAP" : ""}.</li>`);
        else if (surf) L.push(`<li><b>Preterm on FiO₂ over 30% at 6+ cmH₂O</b>: surfactant indicated (European 2022) — call the NICU.</li>`);
        else if (low) L.push(`<li>SpO₂ below target: check the system, raise FiO₂${peep < max ? ", consider +1 cmH₂O" : ""}; reassess in 30–60 min.</li>`);
        else if (high) L.push(`<li>SpO₂ above target: reduce FiO₂ (wean oxygen first).</li>`);
        else L.push(`<li>Not failing. ${f <= 30 && peep <= 5 ? "On 5 cmH₂O with FiO₂ 30% or less: trial off when stable 12–24 h." : f <= 30 ? "FiO₂ is low: now reduce pressure towards 5 cmH₂O." : "Continue; wean FiO₂ first, then pressure."}</li>`);
      }
      L.push("<li>Do not use CPAP for apnoea needing ventilation, shock, untreated pneumothorax, diaphragmatic hernia or choanal atresia.</li>");
      U.$(".out", el).innerHTML = `<ul style="margin:0;padding-left:18px">${L.join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  ropscreen(el, U) {
    el.innerHTML = `<h4>Retinopathy of prematurity: who and when to screen (India national guidelines / AAP 2018)</h4><div class="row"><label>Gestation at birth (weeks)<input type="number" step="any" data-k="ga" placeholder="e.g. 32"></label><label>Birth weight (g)<input type="number" step="any" data-k="bw" placeholder="e.g. 1650"></label><label>Age now (days)<input type="number" step="1" data-k="pna" placeholder="e.g. 14"></label></div><div class="checks" style="margin-top:8px">${chk("sick", "Risk factors: oxygen exposure, sepsis, transfusion, ventilation or unstable course")}</div><div class="out" aria-live="polite">Enter gestation and birth weight.</div>`;
    const go = () => {
      const n = k => U.num(U.$(`[data-k=${k}]`, el)), ga = n("ga"), bw = n("bw"), pna = n("pna"), sick = U.$("[data-k=sick]", el).checked, out = U.$(".out", el);
      if (!(ga > 0) || !(bw > 0)) { out.textContent = "Enter gestation and birth weight."; return; }
      if (ga < 22 || ga > 42 || bw < 300 || bw > 5000) { out.textContent = "Check gestation (22–42 weeks) and weight (300–5000 g)."; return; }
      const core = ga <= 34 || bw <= 2000, risk = ga < 37 && sick, aap = ga <= 30 || bw <= 1500;
      if (!core && !risk) { out.innerHTML = `<p style="margin:0">Not eligible for routine ROP screening (over 34 weeks and over 2000 g${ga < 37 ? ", no risk factors" : ""}). Tick risk factors if the baby needed oxygen or was unstable.</p>`; return; }
      const early = bw < 1200 || ga < 28, win = early ? [14, 21] : [0, 28];
      const due = early ? "at 2–3 weeks (day 14–21)" : "within 4 weeks (by day 28)";
      let when = "";
      if (pna > 0) when = pna > win[1] ? ` <b>The baby is day ${pna} — the examination is overdue: arrange it now.</b>` : early && pna < win[0] ? ` Baby is day ${pna}: book for day ${win[0]}–${win[1]}.` : ` Baby is day ${pna}: book by day ${win[1]}.`;
      out.innerHTML = `<p style="margin:0"><b>Screen for ROP</b> — ${core ? "34 weeks or less / 2000 g or less (India)" : "34–36 weeks with risk factors (India)"}${aap ? "; also meets AAP criteria (30 weeks or less / 1500 g or less)" : ""}.</p><ul style="margin:6px 0 0;padding-left:18px"><li>First examination <b>${due}</b>.${when}</li><li>Repeat every 1–3 weeks by findings until the retina is fully vascularised.</li><li>Type 1 ROP or A-ROP: laser or anti-VEGF <b>within 48–72 h</b> — agree the referral pathway now.</li><li>Oxygen only with blender and oximeter: SpO₂ 90–94%, alarms 89% and 95%.</li><li><b>Never discharge without a booked, written eye appointment.</b></li></ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  },

  neoshock(el, U) {
    el.innerHTML = `<h4>Neonatal shock: bolus and infusions (Bhutan IMNCI / SSC 2026 / rule of 6)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 1.8"></label>${sel("t", "Likely type", [["sep", "Septic"], ["hyp", "Hypovolaemic (blood loss, dehydration)"], ["car", "Cardiogenic (asphyxia, myocarditis, arrhythmia)"], ["duct", "Duct-dependent heart disease (weak femorals, day 2–14)"]])}${sel("pt", "Gestation", [["t", "Term"], ["p", "Preterm"]])}</div><div class="out" aria-live="polite">Enter weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), t = g("t").value, pre = g("pt").value === "p", out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      if (w < 0.4 || w > 6) { out.textContent = "Check weight (0.4–6 kg)."; return; }
      const b = Math.round(10 * w), over = pre ? "20–30 min" : "5–10 min";
      const fluid = t === "car" || t === "duct" ? `Cautious fluid: <b>${Math.round(5 * w)}–${b} mL</b> (5–10 mL/kg) only if under-filled; stop if the liver enlarges.` : `Ringer's lactate or 0.9% saline <b>${b} mL</b> (10 mL/kg) over ${over}; reassess; repeat to ${2 * b} mL (20 mL/kg; IMNCI 10–20 mL/kg)${t === "hyp" ? `; for bleeding give blood <b>${b}–${2 * b} mL</b> (10–20 mL/kg)` : ""}.`;
      const cause = t === "sep" ? `Antibiotics within 1 h after culture: ampicillin <b>${Math.round(50 * w)} mg</b> + gentamicin <b>${r1(4 * w)} mg</b> (Bhutan IMNCI).` : t === "duct" ? "<b>Suspected duct-dependent lesion</b>: avoid high oxygen, urgent JDWNRH paediatric/cardiology call; PGE1 (not on NEML) is the specific treatment." : t === "car" ? `Echo; dobutamine 5–10 µg/kg/min (${r1(6 * w)} mg in 100 mL: 1 mL/h = 1 µg/kg/min); treat arrhythmia.` : "Stop the losses; check haemoglobin; look for subgaleal bleed.";
      out.innerHTML = `<ul style="margin:0;padding-left:18px"><li>${fluid}</li><li><b>Adrenaline</b>: ${r2(0.6 * w)} mg (${r2(0.6 * w)} mL of 1 mg/mL) in 100 mL 5% dextrose → <b>1 mL/h = 0.1 µg/kg/min</b>; run 0.5–3 mL/h (0.05–0.3 µg/kg/min).</li><li><b>Dopamine</b>: ${r1(6 * w)} mg (${r2(6 * w / 40)} mL of 40 mg/mL) in 100 mL → <b>1 mL/h = 1 µg/kg/min</b>; run 5–20 mL/h.</li><li>${cause}</li><li>Glucose (10% dextrose ${r1(2 * w)} mL if under 45 mg/dL), calcium (10% calcium gluconate ${r1(2 * w)} mL slowly with heart monitoring), warmth, oxygen. Peripheral or IO line acceptable to start inotropes (SSC 2026); UVC as soon as possible.</li></ul><p class="warn" style="margin:8px 0 0">Feel femoral pulses and the liver in every shocked baby. Shock not responding to fluid and vasopressors → NICU (IMNCI).</p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  },

  pphnoi(el, U) {
    el.innerHTML = `<h4>PPHN: oxygenation index and ductal shunt</h4><div class="row"><label>FiO₂ (%)<input type="number" step="any" data-k="f" placeholder="e.g. 100"></label><label>Mean airway pressure (cmH₂O)<input type="number" step="any" data-k="map" placeholder="e.g. 14"></label><label>PaO₂ (mmHg)<input type="number" step="any" data-k="pao2" placeholder="e.g. 45"></label><label>Pre-ductal SpO₂ (right hand, %)<input type="number" step="any" data-k="pre" placeholder="e.g. 95"></label><label>Post-ductal SpO₂ (foot, %)<input type="number" step="any" data-k="post" placeholder="e.g. 84"></label></div><div class="out" aria-live="polite">Enter values.</div>`;
    const go = () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), f = g("f"), map = g("map"), pa = g("pao2"), pre = g("pre"), post = g("post"), out = U.$(".out", el);
      const L = [];
      if (f > 0 && map > 0 && pa > 0) {
        if (f < 21 || f > 100) L.push("FiO₂ must be 21–100%.");
        else { const oi = f * map / pa; L.push(`Oxygenation index <b>${r1(oi)}</b> — ${oi >= 40 ? "<b>very severe (40+)</b>: ECMO territory — not available in Bhutan; maximise treatment and discuss early with the family and referral centres" : oi >= 25 ? "<b>severe (25+)</b>: inhaled nitric oxide where available; in Bhutan, sildenafil (special procurement)" : oi >= 15 ? "moderate (15–25): optimise lung volume, BP and sedation; consider sildenafil" : "mild (under 15)"}.`); }
      }
      if (pre > 0 && post > 0) { const d = pre - post; L.push(`Pre-minus-post-ductal SpO₂ <b>${d}%</b> — ${d >= 5 ? "<b>right-to-left ductal shunt</b> (supports PPHN)" : d < 0 ? "<b>post-ductal higher than pre-ductal</b> — think transposition of the great arteries; urgent echo" : "no significant ductal gap (shunt may be at atrial level only) — echo"}.`); }
      if (!L.length) { out.textContent = "Enter values."; return; }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}<li>Targets: pre-ductal SpO₂ about 90–97%, PaO₂ 55–80 mmHg, pH 7.35–7.45, PaCO₂ 40–50 — no hyperventilation. Support BP (adrenaline or noradrenaline), sedate, minimal handling, correct glucose and calcium, treat the cause. Echo to exclude cyanotic heart disease.</li></ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  }

  });
})();
