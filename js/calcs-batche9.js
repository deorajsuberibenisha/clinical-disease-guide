/* Batch E-9 calculators (27 Nov 2026) — neonatal surgical anomalies.
   haecscore: Pastor AC et al. 2009 HAEC score items as reproduced in ERNICA Hirschsprung guideline (Kyrklund 2020, Table 8); > 4 suspected HAEC
     (sensitivity 84%, specificity 98%), > 10 (sensitivity 42%, specificity 100%).
   cdhcheck: CDH EURO Consortium 2015 update (Snoek 2016) — readiness-for-surgery criteria and ECMO criteria; OI = mean airway pressure × FiO2 (%) / PaO2 (mmHg).
   armplan: Levitt & Peña, Orphanet J Rare Dis 2007 — newborn decision-making (16–24 h observation; cross-table lateral 1 cm rule).
   neosurgprep: pre-transfer checklist built from Bhutan STG §12.4.3/12.4.6–12.4.8, Merck Manual 2025 pages and CDH EURO; fluid multiplier 1.5–2× (Merck,
     abdominal wall defects) applied to a maintenance figure the user enters from the local neonatal fluid chart. */
(function () {
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  const f = v => (Math.round(v * 10) / 10).toLocaleString("en");
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  haecscore(el, U) {
    const it = [
      ["History", "Diarrhoea with explosive stool", 2], ["History", "Diarrhoea with foul-smelling stool", 2], ["History", "Diarrhoea with bloody stool", 1], ["History", "Previous enterocolitis", 1],
      ["Examination", "Explosive discharge of gas and stool on rectal examination", 2], ["Examination", "Distended abdomen", 2], ["Examination", "Decreased peripheral perfusion", 1], ["Examination", "Lethargy", 1], ["Examination", "Fever", 1],
      ["X-ray", "Multiple air–fluid levels", 1], ["X-ray", "Dilated loops of bowel", 1], ["X-ray", "Sawtooth appearance with irregular mucosal lining", 1], ["X-ray", "Cut-off sign in the rectosigmoid with absent distal air", 1], ["X-ray", "Pneumatosis", 1],
      ["Laboratory", "Leukocytosis", 1], ["Laboratory", "Shift to the left", 1]];
    el.innerHTML = `<h4>Hirschsprung-associated enterocolitis (Pastor score)</h4><div class="row">${it.map(([g, t, p], i) => `<label><input type="checkbox" data-k="h${i}"> ${g}: ${t} (${p})</label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      let s = 0; it.forEach(([, , p], i) => { if (U.$(`[data-k=h${i}]`, el).checked) s += p; });
      const b = s > 10 ? "<b>HAEC very likely</b> (above 10: specificity 100%, sensitivity 42%)." : s > 4 ? "<b>Suspected HAEC</b> (above 4: sensitivity 84%, specificity 98%)." : "Score 4 or less — HAEC less likely, but explosive foul-smelling diarrhoea alone is enough to suspect it.";
      U.$(".out", el).innerHTML = `<p style="margin:0">Score <b>${s}/20</b>. ${b}</p><p class="qn" style="margin:6px 0 0">${s > 4 ? "Admit (lower threshold under 1 year): IV fluids, IV broad-spectrum antibiotics, saline rectal washouts 2–3 times a day, abdominal X-ray, inform the colorectal surgeon. " : ""}Mild cases with normal fluids, electrolytes and inflammatory markers may be treated as outpatients with oral fluids ± oral metronidazole and washouts, with early review (ERNICA 2020). No barium enema during enterocolitis.</p>`;
    });
  },

  cdhcheck(el, U) {
    el.innerHTML = `<h4>CDH: stable for repair, or meeting ECMO criteria? (CDH EURO 2015)</h4><div class="row">${num("pre", "Preductal SpO₂ (%)", 90)}${num("post", "Postductal SpO₂ (%)", 80)}${num("fio", "FiO₂ (%)", 40)}${num("ph", "pH", 7.3, 0.01)}${num("lac", "Lactate (mmol/L)", 2, 0.1)}${num("pip", "Peak inspiratory pressure (cm H₂O)", 24)}${num("map", "Mean airway pressure (cm H₂O)", 12)}${num("pao", "PaO₂ (mmHg; blank if unknown)", "")}${num("uo", "Urine output (mL/kg/h)", 1.5, 0.1)}${sel("bp", "Mean arterial pressure", [["n", "Normal for gestation"], ["l", "Low despite fluids and inotropes"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const v = k => parseFloat(U.$(`[data-k=${k}]`, el).value), g = k => U.$(`[data-k=${k}]`, el).value;
      const pre = v("pre"), post = v("post"), fio = v("fio"), ph = v("ph"), lac = v("lac"), pip = v("pip"), map = v("map"), pao = v("pao"), uo = v("uo"), bp = g("bp");
      const oi = pao > 0 && map > 0 && fio > 0 ? map * fio / pao : NaN;
      const e = [];
      if (pre < 85 || post < 70) e.push("cannot keep preductal SpO₂ above 85% or postductal above 70%");
      if (ph < 7.15) e.push("pH below 7.15 despite ventilator optimisation");
      if (pip > 28 || map > 17) e.push("PIP above 28 or mean airway pressure above 17 cm H₂O needed");
      if (lac >= 5 && ph < 7.15) e.push("lactate 5 mmol/L or more with pH below 7.15");
      if (bp === "l" && uo < 0.5) e.push("refractory hypotension with urine under 0.5 mL/kg/h (if sustained 12–24 h)");
      if (oi >= 40) e.push("oxygenation index 40 or more (if sustained 3 h)");
      const ready = bp === "n" && pre >= 85 && pre <= 95 && fio < 50 && lac < 3 && uo > 1;
      const oiTxt = isNaN(oi) ? "" : ` Oxygenation index <b>${f(oi)}</b>${oi > 20 ? " (above 20 — with a pre–post difference over 10%, an inhaled nitric oxide trial is suggested where available)" : ""}.`;
      let h = e.length ? `<p style="margin:0"><b>Meets ECMO criteria:</b> ${e.join("; ")}. Urgent discussion with a tertiary/ECMO centre; HFOV as rescue; treat pulmonary hypertension.</p>` : `<p style="margin:0">No ECMO criterion met.</p>`;
      h += `<p style="margin:6px 0 0">${ready ? "<b>Meets the criteria for elective repair</b> (normal MAP, preductal SpO₂ 85–95% on FiO₂ under 50%, lactate under 3, urine over 1 mL/kg/h)." : "Not yet stable enough for elective repair — continue gentle ventilation (preductal 80–95%, PaCO₂ 50–70 mmHg)."}${oiTxt}</p><p class="qn" style="margin:6px 0 0">Some criteria need to persist (OI for 3 h; oliguria for 12–24 h). Bhutan: no ECMO service identified — the decision is about early referral abroad.</p>`;
      U.$(".out", el).innerHTML = h;
    });
  },

  armplan(el, U) {
    el.innerHTML = `<h4>Anorectal malformation: anoplasty or colostomy? (Levitt & Peña)</h4><div class="row">${sel("sex", "Sex", [["m", "Boy"], ["f", "Girl"]])}${num("hr", "Hours since birth", 20)}${sel("fm", "Finding (boy)", [["pf", "Meconium on perineum / bucket-handle / anal membrane / black-ribbon raphe"], ["ur", "Meconium or air in the urine"], ["fb", "Flat bottom (no gluteal fold, no anal dimple)"], ["no", "No clinical clue"]])}${sel("ff", "Finding (girl)", [["pf", "Perineal fistula (opening on the perineum)"], ["vf", "Vestibular fistula (3 openings: urethra, vagina, rectum in vestibule)"], ["cl", "Single perineal opening (cloaca)"], ["no", "No fistula seen"]])}${num("cm", "Prone cross-table lateral: rectal gas to skin marker (cm; blank if not done)", "", 0.1)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, sex = g("sex"), hr = parseFloat(g("hr")), cm = parseFloat(g("cm")), out = U.$(".out", el);
      const f0 = sex === "m" ? g("fm") : g("ff");
      let h;
      if (f0 === "pf") h = "<b>Perineal fistula: newborn anoplasty, no colostomy</b> (by a paediatric surgeon).";
      else if (f0 === "ur") h = "<b>Rectourinary fistula: divided descending colostomy</b>; distal colostogram later; PSARP as the definitive repair.";
      else if (f0 === "fb") h = "<b>Flat bottom suggests a high defect: colostomy.</b>";
      else if (f0 === "vf") h = "<b>Rectovestibular fistula: colostomy is the safest option</b> unless an experienced paediatric colorectal surgeon repairs it primarily; the fistula may be dilated meanwhile.";
      else if (f0 === "cl") h = "<b>Cloaca: specialist centre.</b> Colostomy; ultrasound for hydrocolpos (drain if distended) and urinary obstruction (diversion if needed).";
      else if (hr < 16) h = `No clue yet at ${f(hr)} h — <b>keep observing</b> (NG tube, IV fluids, antibiotics); meconium usually appears through a fistula only after 16–24 h.`;
      else if (!(cm >= 0)) h = "No clue after 16–24 h: <b>prone cross-table lateral X-ray</b> with the pelvis raised and a marker on the perineum.";
      else h = cm <= 1 ? "<b>Rectal gas within 1 cm of the skin: treat as a perineal fistula</b> — newborn perineal operation." : "<b>Rectal gas more than 1 cm from the skin: colostomy.</b>";
      const early = (f0 !== "no" && hr < 16) ? `<p class="qn" style="margin:6px 0 0">Only ${f(hr)} h old — signs may still change; re-examine before a final decision.</p>` : "";
      out.innerHTML = `<p style="margin:0">${h}</p>${early}<p class="qn" style="margin:6px 0 0">All babies: renal and pelvic ultrasound, spine/sacrum films, spinal ultrasound, echocardiogram, pass a tube to exclude oesophageal atresia. Never attempt a blind perineal operation outside a paediatric surgical centre.</p>`;
    });
  },

  neosurgprep(el, U) {
    el.innerHTML = `<h4>Newborn surgical anomaly: before and during transfer</h4><div class="row">${sel("a", "Anomaly", [["ea", "Oesophageal atresia / TOF"], ["aw", "Gastroschisis or omphalocele"], ["cdh", "Congenital diaphragmatic hernia"], ["arm", "Anorectal malformation"], ["ob", "Bowel obstruction / suspected Hirschsprung"]])}${num("wt", "Weight (kg)", 3, 0.01)}${num("mn", "Usual maintenance for this day of life (mL/kg/day, from your neonatal fluid chart)", "")}</div><div class="out" aria-live="polite"></div>`;
    if (el.dataset.a) U.$("[data-k=a]", el).value = el.dataset.a;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, a = g("a"), wt = parseFloat(g("wt")), mn = parseFloat(g("mn")), out = U.$(".out", el);
      const base = ["Keep warm (radiant warmer, hat); check temperature and blood glucose often", "IV access; nil by mouth", "Inform the JDWNRH paediatric surgeon and neonatal team before leaving; send notes and X-rays"];
      const sp = {
        ea: ["Tube in the upper pouch with continuous (or very frequent) suction", "Head up; prone with right side down only if monitored", "No contrast study before transfer", "Check anus, limbs and heart (VACTERL)"],
        aw: ["Cover bowel or sac with warm, moist, sterile non-adherent dressing and plastic wrap/bag", "Support the bowel so the mesentery does not kink; check its colour often", "Nasogastric tube on free drainage", "IV antibiotics (commonly ampicillin + gentamicin — doses on the neonatal sepsis page)"],
        cdh: ["Intubate — no bag-and-mask ventilation", "Oro/nasogastric tube on suction", "PIP 25 cm H₂O or less, PEEP 3–5; preductal SpO₂ 80–95% (right hand)", "Saline 10–20 mL/kg (up to twice) for hypotension; transfer intubated with a neonatal team"],
        arm: ["Nasogastric tube; IV fluids and antibiotics", "Look at perineum and urine for meconium for 16–24 hours", "Renal ultrasound and echo if available; pass a tube to exclude oesophageal atresia", "No perineal operation outside a paediatric surgical centre"],
        ob: ["Nasogastric tube on free drainage (bilious vomiting can mean volvulus — urgent)", "IV fluids; correct dehydration", "Suspected Hirschsprung: saline rectal washouts; IV antibiotics if enterocolitis signs", "No barium enema if enterocolitis is suspected"]
      }[a];
      let fl = "";
      if (wt > 0 && mn > 0) {
        if (a === "aw") fl = `<p style="margin:6px 0 0">Fluids: maintenance ${f(mn * wt / 24)} mL/h; with exposed bowel often <b>${f(1.5 * mn * wt / 24)}–${f(2 * mn * wt / 24)} mL/h</b> (1.5–2× maintenance) — adjust to perfusion, urine output and sodium.</p>`;
        else if (a === "cdh") fl = `<p style="margin:6px 0 0">Fluids (CDH EURO): <b>40 mL/kg/day = ${f(40 * wt / 24)} mL/h</b> including drugs for the first 24 hours, then increase.</p>`;
        else fl = `<p style="margin:6px 0 0">Maintenance: <b>${f(mn * wt / 24)} mL/h</b>; replace nasogastric losses as well.</p>`;
      } else if (a === "cdh" && wt > 0) fl = `<p style="margin:6px 0 0">Fluids (CDH EURO): <b>40 mL/kg/day = ${f(40 * wt / 24)} mL/h</b> including drugs for the first 24 hours.</p>`;
      else fl = `<p class="qn" style="margin:6px 0 0">Enter weight and the maintenance figure from your local neonatal fluid chart to get an hourly rate.</p>`;
      out.innerHTML = `<ul style="margin:0">${sp.concat(base).map(x => `<li>${x}</li>`).join("")}</ul>${fl}`;
    });
  }

  });
})();
