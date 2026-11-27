/* Round 5 calculators (27 Nov 2026) — neonatal pages. File: js/calcs-round5.js
   neoseizure: Bhutan Hospital IMNCI 2024 (§3.6.2.4) + ILAE 2023 Table 2 (Pressler, Epilepsia 2023) + WHO 2011; volumes from Bhutan NEML 2025 strengths. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10, r2 = v => Math.round(v * 100) / 100;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  neoseizure(el, U) {
    el.innerHTML = `<h4>Neonatal seizures: doses and volumes by weight (Bhutan IMNCI 2024 / ILAE 2023)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 3"></label><label>Glucose (mg/dL)<input type="number" step="any" data-k="glu" placeholder="optional"></label>${sel("u", "Glucose unit", [["mg", "mg/dL"], ["mmol", "mmol/L"]])}</div><div class="out" aria-live="polite">Enter weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), gl = U.num(g("glu")), out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      if (w < 0.4 || w > 6) { out.textContent = "Check weight: this tool is for newborns of 0.4–6 kg."; return; }
      const mg = gl > 0 ? (g("u").value === "mmol" ? gl * 18 : gl) : NaN;
      const low = mg < 45;
      const pb = 20 * w, pbR = [10 * w, 20 * w];
      const L = [];
      L.push(gl > 0 ? (low ? `<li><b>Glucose ${Math.round(mg)} mg/dL — low:</b> 10% dextrose <b>${r1(2 * w)} mL</b> IV (2 mL/kg), then 10% dextrose infusion; recheck in 30 min.</li>` : `<li>Glucose ${Math.round(mg)} mg/dL — not low. Check calcium, magnesium, sodium; culture.</li>`) : `<li><b>Check glucose now.</b> Under 45 mg/dL (2.6 mmol/L): 10% dextrose ${r1(2 * w)} mL (2 mL/kg) IV.</li>`);
      L.push(`<li><b>Phenobarbital ${Math.round(pb)} mg IV</b> (20 mg/kg) = <b>${r2(pb / 200)} mL</b> of 200 mg/mL, diluted in 20 mL 5% dextrose or saline, over 20 min.</li>`);
      L.push(`<li>Still seizing after 15–30 min: further phenobarbital <b>${Math.round(pbR[0])}–${Math.round(pbR[1])} mg</b> (10–20 mg/kg; Bhutan 5–10 mg/kg repeats) up to a <b>total of ${Math.round(40 * w)} mg</b> (40 mg/kg) in the day. Bag-mask ready.</li>`);
      L.push(`<li>Then second line: <b>phenytoin ${Math.round(20 * w)} mg IV</b> (20 mg/kg) = ${r2(20 * w / 50)} mL of 50 mg/mL in saline over 20–30 min with ECG; <b>or levetiracetam ${Math.round(40 * w)} mg IV</b> (40 mg/kg) = ${r2(40 * w / 100)} mL of 100 mg/mL over 15 min, further ${Math.round(20 * w)} mg (20 mg/kg) if needed. Levetiracetam if heart disease.</li>`);
      L.push(`<li>NICU only — midazolam load ${r2(0.05 * w)}–${r2(0.15 * w)} mg (0.05–0.15 mg/kg), then 1–5 µg/kg/min = ${r2(w * 0.06)}–${r2(w * 0.3)} mL/h of 1 mg/mL. Lidocaine only by ILAE protocol, never after phenytoin.</li>`);
      L.push(`<li>Hypocalcaemia: 10% calcium gluconate <b>${r1(2 * w)} mL</b> (2 mL/kg) slow IV infusion with heart-rate monitoring. Hypomagnesaemia: magnesium sulfate ${Math.round(100 * w)} mg = ${r2(0.2 * w)} mL of 50% (100 mg/kg).</li>`);
      L.push(`<li>Maintenance only if seizures recur: phenobarbital ${Math.round(3 * w)}–${Math.round(5 * w)} mg once daily (3–5 mg/kg/day). Stop before discharge once acute seizures have settled (ILAE).</li>`);
      out.innerHTML = `<ol style="margin:0;padding-left:18px">${L.join("")}</ol><p class="warn" style="margin:8px 0 0"><b>No diazepam in the first 4 weeks</b> (Bhutan IMNCI). Treat suspected sepsis/meningitis. Watch breathing for 1 hour after each load.</p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  },

  neoresus(el, U) {
    el.innerHTML = `<h4>Newborn resuscitation: sizes and doses (Bhutan IMNCI 2024 / AHA–AAP 2025)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 3"></label><label>Gestation (weeks)<input type="number" step="any" data-k="ga" placeholder="e.g. 39"></label></div><div class="out" aria-live="polite">Enter the weight (estimate if needed).</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), ga = U.num(g("ga")), out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter the weight (estimate if needed)."; return; }
      if (w < 0.3 || w > 6) { out.textContent = "Check weight: this tool is for newborns of 0.3–6 kg."; return; }
      const ett = w < 1 ? "2.5" : w <= 2 ? "3.0" : "3.5";
      const o2 = !(ga > 0) ? "air (21%) if 35 weeks or more; enter gestation for preterm" : ga >= 35 ? "air (21%)" : ga >= 32 ? "21–30% oxygen" : "30% oxygen or more (AHA 30–100%)";
      const pip = ga > 0 && ga < 37 ? "20–25 cmH₂O (max 30 for preterm)" : "20–25 cmH₂O, raise if the chest does not move";
      const lma = w >= 2 && (!(ga > 0) || ga >= 34) ? "Laryngeal mask (size 1) is an option." : "Laryngeal mask usually only from about 2 kg and 34 weeks.";
      out.innerHTML = `<ul style="margin:0;padding-left:18px"><li>Ventilate by 60 s with <b>${o2}</b> at 40–60 breaths/min (Bhutan; AHA 30–60); start ${pip}.</li><li>ETT <b>${ett} mm</b> (Bhutan IMNCI by weight); depth about <b>${r1(w + 6)} cm</b> at the lip (weight + 6), or nasal–tragus length + 1 cm (Bhutan IMNCI). ${lma}</li><li>Compressions if HR under 60 after 30 s of ventilation that moves the chest: 3:1, 2-thumb, 100% oxygen; recheck after 60 s.</li><li>Adrenaline 1:10,000 (0.1 mg/mL): IV/UVC/IO <b>${r2(0.1 * w)}–${r2(0.3 * w)} mL</b> (0.01–0.03 mg/kg), flush 3 mL saline; via ETT <b>${r2(0.5 * w)}–${r1(1 * w)} mL</b> (0.05–0.1 mg/kg; Bhutan 0.3–1 mL/kg) while access is obtained; repeat every 3–5 min.</li><li>Saline or Ringer's lactate (blood loss, pale, poor pulses): <b>${Math.round(10 * w)} mL</b> over 5–10 min; repeat once if needed.</li><li>After return of circulation: check glucose; 10% dextrose <b>${r1(2 * w)} mL</b> if under 45 mg/dL.</li></ul><p style="margin:8px 0 0">Pre-ductal SpO₂ (right hand): 1 min 60–65%, 2 min 65–70%, 3 min 70–75%, 4 min 75–80%, 5 min 80–85%, 10 min 85–95%.</p><p class="warn" style="margin:8px 0 0">No heart rate after about 20 min of complete resuscitation: senior discusses stopping with team and family. Keep 36.5–37.5 °C after resuscitation — do not cool outside a trial (HELIX).</p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  },

  silverman(el, U) {
    const s3 = (k, t, a, b, c) => sel(k, t, [["0", a + " (0)"], ["1", b + " (1)"], ["2", c + " (2)"]]);
    el.innerHTML = `<h4>Newborn respiratory distress: Silverman–Andersen score</h4><div class="row">${s3("ch", "Chest movement", "Synchronised", "Lag on inspiration", "See-saw")}${s3("ic", "Intercostal retraction", "None", "Just visible", "Marked")}${s3("xi", "Xiphoid retraction", "None", "Just visible", "Marked")}${s3("na", "Nasal flaring", "None", "Minimal", "Marked")}${s3("gr", "Expiratory grunt", "None", "Audible with stethoscope", "Audible without stethoscope")}${sel("pt", "Gestation", [["t", "Term (37 weeks+)"], ["p", "Preterm (under 37 weeks)"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = ["ch", "ic", "xi", "na", "gr"].reduce((n, k) => n + +U.$(`[data-k=${k}]`, el).value, 0), pre = U.$("[data-k=pt]", el).value === "p";
      const tgt = pre ? "SpO₂ 90–94%" : "SpO₂ above 90%";
      const t = s === 0 ? "No distress." : s <= 3 ? `<b>Mild distress</b>: warmth, glucose, oxygen by nasal prongs (0.5–1 L/min) if below ${tgt}; reassess every 1–2 h.${pre ? " Preterm: low threshold for CPAP (WHO 2022)." : ""}` : s <= 6 ? `<b>Moderate distress</b>: bubble CPAP starting 6 cmH₂O, oxygen to ${tgt}, IV fluids, blood culture then ampicillin + gentamicin if infection possible; refer if FiO₂ rises above 0.30–0.40.` : `<b>Severe distress / impending respiratory failure</b>: CPAP or ventilation, surfactant if FiO₂ over 0.30 on CPAP (NICU), transfer with an escort who can ventilate.`;
      U.$(".out", el).innerHTML = `<p style="margin:0">Score <b>${s}</b>/10. ${t}</p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  pretermfeed(el, U) {
    el.innerHTML = `<h4>Preterm / LBW baby: daily fluids, feeds and caffeine (Bhutan IMNCI 2024 / WHO 2022)</h4><div class="row"><label>Birth weight (g)<input type="number" step="any" data-k="wt" placeholder="e.g. 1400"></label><label>Day of life<input type="number" step="1" data-k="d" placeholder="e.g. 3"></label><label>Gestation at birth (weeks)<input type="number" step="any" data-k="ga" placeholder="e.g. 31"></label>${sel("ok", "Can be fed enterally", [["y", "Yes (stable)"], ["n", "No (shock, distension, bilious vomiting, severe distress)"]])}</div><div class="out" aria-live="polite">Enter weight and day.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), wg = U.num(g("wt")), dRaw = U.num(g("d")), ga = U.num(g("ga")), ok = g("ok").value === "y", out = U.$(".out", el);
      if (!(wg > 0)) { out.textContent = "Enter weight and day."; return; }
      if (wg < 400 || wg > 2500) { out.textContent = "This tool is for low-birth-weight babies of 400–2500 g."; return; }
      const d = Math.min(30, Math.max(1, Math.round(dRaw) || 1)), kg = wg / 1000, small = wg < 1500;
      const T = small ? [80, 95, 110, 125, 140, 150] : [60, 80, 100, 120, 140, 150];
      const total = d <= 6 ? T[d - 1] : Math.min(180, 150 + 10 * (d - 6));
      const ent = ok ? (small ? Math.min(total, 20 + 25 * (d - 1)) : total) : 0;
      const n = 12, perFeed = r1(ent * kg / n);
      const method = !(ga > 0) ? "choose by sucking ability" : ga < 32 ? "<b>tube (gavage)</b> — put to the breast before each feed" : ga <= 34 ? "<b>tube for 1–3 days, then cup and spoon</b>" : "<b>direct breastfeeding</b> (cup and spoon if sucking is weak)";
      let t = `<p style="margin:0">Total fluids day ${d}: <b>${total} mL/kg/day = ${Math.round(total * kg)} mL/day</b> (IMNCI table, ${small ? "under" : "1500 g or"} ${small ? "1500 g" : "more"}).</p>`;
      t += ok ? `<p style="margin:6px 0 0">Mother's milk: <b>${ent} mL/kg/day → about ${perFeed} mL every 2 hours</b>, by ${method}.${ent < total ? ` Give the remaining <b>${Math.round((total - ent) * kg)} mL/day (${r1((total - ent) * kg / 24)} mL/h)</b> as IV 10% dextrose, and increase milk by 20–30 mL/kg/day as tolerated (WHO up to 30).` : ""}</p>` : `<p style="margin:6px 0 0">Nil by mouth: <b>IV 10% dextrose ${r1(total * kg / 24)} mL/h</b>${d >= 3 ? " with sodium added (IMNCI: from day 3)" : ""}; restart small milk feeds as soon as stable.</p>`;
      if (ga > 0 && ga < 34) t += `<p style="margin:6px 0 0">Caffeine citrate (under 34 weeks with apnoea, on CPAP or before extubation): <b>load ${r1(20 * kg)} mg</b> (20 mg/kg) = ${r2(20 * kg / 20)} mL of 20 mg/mL, then <b>${r1(5 * kg)}–${r1(10 * kg)} mg once daily</b>.</p>`;
      if (small || (ga > 0 && ga < 32)) t += `<p style="margin:6px 0 0"><b>Under 1500 g or under 32 weeks: refer to a NICU</b> (IMNCI).</p>`;
      out.innerHTML = t + `<p class="warn" style="margin:8px 0 0">Before each tube feed check girth and aspirate: girth up more than 2 cm or aspirate over 25% of the last feed — stop feeds, assess for NEC. KMC from birth; vitamin K 0.5 mg IM; glucose 3-hourly on day 1; weigh daily.</p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go);
  },

  necbell(el, U) {
    el.innerHTML = `<h4>Necrotising enterocolitis: modified Bell stage and treatment (Bhutan IMNCI antibiotics)</h4><div class="row">${sel("s", "Worst finding", [["1", "Stage I (suspected): feed intolerance, aspirates, mild distension, occult blood, apnoea, temperature instability; X-ray normal or mild ileus"], ["2a", "Stage IIA (definite, mild): plus absent bowel sounds ± tenderness; pneumatosis intestinalis"], ["2b", "Stage IIB (moderate): plus mild acidosis, low platelets, abdominal wall oedema; portal venous gas ± ascites"], ["3a", "Stage IIIA (advanced, bowel intact): shock, DIC, peritonitis, severe acidosis"], ["3b", "Stage IIIB: pneumoperitoneum (perforation)"]])}<label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 1.3"></label><label>Postnatal age (days)<input type="number" step="1" data-k="pna" placeholder="e.g. 10"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), s = g("s").value, w = U.num(g("wt")), pna = U.num(g("pna"));
      const dur = { "1": "48–72 h, then stop if cultures negative and the baby is well", "2a": "7–10 days", "2b": "10–14 days", "3a": "10–14 days", "3b": "10–14 days" }[s];
      const npo = { "1": "48–72 h", "2a": "until well, soft abdomen, no portal gas and X-ray improving (often 5–7 days)", "2b": "7–14 days by course", "3a": "7–14 days by course", "3b": "per surgeon; after surgery restart within 7 days if no ongoing disease (ERNICA)" }[s];
      const valid = w >= 0.4 && w <= 5;
      const ampInt = pna > 7 ? "8-hourly" : "12-hourly";
      const ab = valid ? `ampicillin <b>${Math.round(50 * w)} mg</b> IV ${ampInt} + gentamicin <b>${r1(4 * w)} mg</b> IV once daily + metronidazole <b>${r1(15 * w)} mg</b> IV load, then <b>${r1(7.5 * w)} mg</b> 12-hourly from 24 h after the load` : (w > 0 ? "check weight (0.4–5 kg)" : "ampicillin 50 mg/kg + gentamicin 4 mg/kg daily + metronidazole 15 mg/kg then 7.5 mg/kg 12-hourly (enter weight for doses)");
      const surg = s === "3b" ? "<b>Perforation — call the paediatric surgeon now</b> (laparotomy or peritoneal drain; drain as a bridge if surgery is delayed). Shock care, platelets/plasma for DIC, ventilation." : s === "3a" ? "<b>Urgent surgical review</b>; shock and DIC care, ventilation; surgery if deteriorating despite treatment." : s === "2b" || s === "2a" ? "Refer to NICU; inform the surgeon; X-ray and examination every 6–12 h. Surgery if free air or deterioration." : "Repeat X-ray if any worsening; restart mother's milk slowly if well at 48–72 h.";
      U.$(".out", el).innerHTML = `<ul style="margin:0;padding-left:18px"><li><b>Nil by mouth</b>, open NG tube on free drainage, IV 10% dextrose with electrolytes by day-of-life volume plus NG losses. Nil by mouth: ${npo}.</li><li>Antibiotics after blood culture: ${ab}. Course: ${dur}.</li><li>Bloods: FBC, platelets, CRP, gas, glucose, electrolytes, clotting.</li><li>${surg}</li></ul><p class="warn" style="margin:8px 0 0">Bilious vomiting in a term baby: exclude malrotation with volvulus first. Prevention: mother's own milk, feed increases up to 30 mL/kg/day, girth and aspirate before each tube feed.</p>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }

  });
})();
