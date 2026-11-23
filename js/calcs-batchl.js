/* Batch L calculators.
   Malaria: Bhutan Malaria Guideline 2024 / WHO 2024. Wells scores: Wells PS et al. 2000 (PE) and 2003 (DVT). DKA adult: JBDS 2023 / ADA 2024 consensus.
   Hypoglycaemia: JBDS 2023, ISPAD 2022, Bhutan STG 5.5. RHD prophylaxis: Bhutan STG 2.4, WHO 2024 RHD guideline. Statins: Bhutan NCD screening guideline 2024, ESC 2021. Cervical screening: WHO 2021. */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  malariadose(el, U) {
    el.innerHTML = `<h4>Malaria treatment by weight (Bhutan 2024)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 50"></label>${sel("sp", "Species", [["v", "P. vivax / ovale"], ["f", "P. falciparum or mixed"]])}${sel("sev", "Severe malaria", [["n", "No"], ["y", "Yes"]])}${sel("preg", "Pregnant or breastfeeding infant under 6 months", [["n", "No"], ["y", "Yes"]])}${sel("g6", "G6PD", [["n", "Normal / not deficient"], ["d", "Deficient"], ["u", "Unknown"]])}<label>Age (months)<input type="number" data-k="age" placeholder="e.g. 240"></label></div><div class="out" aria-live="polite">Enter the weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), w = U.num(g("wt")), age = U.num(g("age"));
      if (!(w > 0)) { out.textContent = "Enter the weight."; return; }
      const preg = g("preg").value === "y", g6 = g("g6").value, sp = g("sp").value, under6m = age >= 0 && age < 6;
      const pqOk = !preg && !under6m;
      const r1 = v => Math.round(v * 10) / 10;
      if (g("sev").value === "y") { const d = w < 20 ? 3.0 : 2.4; out.innerHTML = `<p style="margin:0"><b>Severe malaria:</b> artesunate <b>${r1(d * w)} mg</b> IV/IM (${d} mg/kg) at 0, 12 and 24 h, then daily until oral treatment is possible (at least 24 h), then a full 3-day course of artemether–lumefantrine. Check glucose 4-hourly; treat seizures, anaemia, shock; refer to a hospital with HDU.</p>`; return; }
      let txt;
      if (sp === "v") {
        const cq = mg => Math.round(mg / 75) * 0.5;
        txt = `<b>Chloroquine</b> (150 mg base tablets): day 1 ${Math.round(10 * w)} mg (~${cq(10 * w)} tabs), day 2 ${Math.round(10 * w)} mg (~${cq(10 * w)} tabs), day 3 ${Math.round(5 * w)} mg (~${cq(5 * w)} tabs).<br>`;
        txt += !pqOk ? "<b>Primaquine: do not give now</b> (pregnant, breastfeeding an infant under 6 months, or infant under 6 months); weekly chloroquine prophylaxis until delivery/6 months, then radical cure." : g6 === "d" ? `<b>Primaquine ${r1(0.75 * w)} mg once weekly for 8 weeks</b> (0.75 mg/kg; 7.5 mg tablets), with haemolysis warning.` : g6 === "u" ? `Test G6PD if possible. If normal: primaquine ${r1(0.25 * w)} mg daily for 14 days; if unknown and untestable, weekly regimen under supervision.` : `<b>Primaquine ${r1(0.25 * w)} mg daily for 14 days</b> (0.25 mg/kg) with food.`;
      } else {
        const t = w < 15 ? 1 : w < 25 ? 2 : w < 35 ? 3 : 4;
        txt = `<b>Artemether–lumefantrine ${t} tablet${t > 1 ? "s" : ""} per dose</b> at 0, 8, 24, 36, 48 and 60 hours with fatty food or milk.<br>`;
        txt += pqOk ? `<b>Single primaquine ${r1(0.25 * w)} mg</b> (0.25 mg/kg) on day 1 to block transmission (no G6PD test needed).` : "No single-dose primaquine (pregnant, breastfeeding infant under 6 months, or infant under 6 months).";
      }
      out.innerHTML = `<p style="margin:0">${txt}</p><p class="warn" style="margin:8px 0 0">Observe the first dose; repeat if vomited within 30 minutes. Any danger sign (confusion, convulsion, unable to drink, jaundice, dark urine, breathing difficulty, bleeding): treat as severe.</p>`;
    });
  },

  wells(el, U) {
    el.innerHTML = `<h4>Wells scores: DVT and PE</h4>${sel("t", "Which", [["dvt", "DVT (leg)"], ["pe", "Pulmonary embolism"]])}<div class="checks" style="margin-top:10px" data-g="dvt">${chk("d1", "Active cancer (+1)")}${chk("d2", "Paralysis or recent leg cast (+1)")}${chk("d3", "Bedridden 3+ days or surgery in 12 weeks (+1)")}${chk("d4", "Tenderness along deep veins (+1)")}${chk("d5", "Whole leg swollen (+1)")}${chk("d6", "Calf over 3 cm larger than other side (+1)")}${chk("d7", "Pitting oedema in the symptomatic leg (+1)")}${chk("d8", "Collateral superficial veins (+1)")}${chk("d9", "Previous DVT (+1)")}${chk("d10", "Alternative diagnosis at least as likely (−2)")}</div><div class="checks" style="margin-top:10px" data-g="pe">${chk("p1", "Clinical signs of DVT (+3)")}${chk("p2", "PE the most likely diagnosis (+3)")}${chk("p3", "Heart rate over 100 (+1.5)")}${chk("p4", "Immobilised 3+ days or surgery in 4 weeks (+1.5)")}${chk("p5", "Previous DVT or PE (+1.5)")}${chk("p6", "Haemoptysis (+1)")}${chk("p7", "Cancer (+1)")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const t = U.$("[data-k=t]", el).value, c = k => U.$(`[data-k=${k}]`, el).checked;
      U.$('[data-g="dvt"]', el).style.display = t === "dvt" ? "" : "none"; U.$('[data-g="pe"]', el).style.display = t === "pe" ? "" : "none";
      let s, txt;
      if (t === "dvt") { s = ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9"].filter(c).length - (c("d10") ? 2 : 0); txt = s >= 2 ? "<b>DVT likely (2 or more):</b> compression ultrasound; if not available within 4 hours, start anticoagulation meanwhile." : "<b>DVT unlikely (1 or less):</b> D-dimer; if raised, ultrasound; if normal, DVT excluded."; }
      else { const p = { p1: 3, p2: 3, p3: 1.5, p4: 1.5, p5: 1.5, p6: 1, p7: 1 }; s = Object.keys(p).reduce((n, k) => n + (c(k) ? p[k] : 0), 0); txt = s > 4 ? "<b>PE likely (over 4):</b> CT pulmonary angiography (or echo/leg ultrasound where CT is unavailable); start anticoagulation now unless bleeding risk is high." : "<b>PE unlikely (4 or less):</b> D-dimer (age-adjusted over 50: age × 10 µg/L); normal excludes PE."; }
      U.$(".out", el).innerHTML = `<p style="margin:0">Score ${s}. ${txt}</p><p class="warn" style="margin:8px 0 0">Shock or hypotension with suspected PE: high-risk PE — heparin and thrombolysis (alteplase 100 mg over 2 h) unless contraindicated.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  dkaadult(el, U) {
    el.innerHTML = `<h4>Adult DKA: first hours (JBDS / ADA)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label><label>Systolic BP (mmHg)<input type="number" data-k="sbp" placeholder="e.g. 105"></label><label>Potassium (mmol/L)<input type="number" step="any" data-k="k" placeholder="e.g. 4.8"></label><label>Glucose (mmol/L)<input type="number" step="any" data-k="glu" placeholder="e.g. 28"></label></div><div class="out" aria-live="polite">Enter weight, BP and potassium.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), w = g("wt"), sbp = g("sbp"), k = g("k"), glu = g("glu"), out = U.$(".out", el);
      if (!(w > 0) || !(sbp > 0)) { out.textContent = "Enter weight, BP and potassium."; return; }
      const ins = Math.round(0.1 * w * 10) / 10;
      const fluids = sbp < 90 ? "<b>Shock:</b> 500 mL 0.9% saline over 10–15 min, repeat until SBP 90 or more; then 1 L over 1 h, 1 L over 2 h, 1 L over 2 h, 1 L over 4 h, 1 L over 4 h, 1 L over 6 h" : "0.9% saline 1 L over 1 h, then 1 L over 2 h, 1 L over 2 h, 1 L over 4 h, 1 L over 4 h, 1 L over 6 h (slower if elderly, heart or kidney failure)";
      const kTxt = !(k > 0) ? "Check potassium before insulin." : k < 3.5 ? "<b>Potassium under 3.5: give potassium first (senior/HDU) and delay insulin</b> until above 3.5." : k <= 5.5 ? "Add 40 mmol KCl to each litre (after the first litre if urine is flowing)." : "Potassium over 5.5: no potassium in fluids; recheck in 1–2 hours.";
      out.innerHTML = `<ul style="margin:0;padding-left:18px"><li><b>Fluids:</b> ${fluids}.</li><li><b>Insulin:</b> fixed rate <b>${ins} units/hour</b> IV (0.1 unit/kg/h), no bolus${k > 0 && k < 3.5 ? " — once potassium is over 3.5" : ""}; continue usual long-acting insulin.</li><li><b>Potassium:</b> ${kTxt}</li><li><b>Glucose:</b> ${glu > 0 && glu < 14 ? "under 14 mmol/L now: add 10% dextrose 125 mL/h alongside saline; keep insulin running." : "when under 14 mmol/L, add 10% dextrose 125 mL/h; keep insulin running."}</li><li><b>Targets each hour:</b> ketones fall 0.5 mmol/L or more, bicarbonate rises 3 or more, glucose falls about 3 mmol/L; if not, increase insulin by 1 unit/h and look for the cause.</li><li><b>Resolved</b> (ketones under 0.6, pH 7.3 or more): subcutaneous insulin with a meal, stop IV 30–60 min later.</li></ul><p class="warn" style="margin:8px 0 0">No routine bicarbonate. Find the trigger (infection, missed insulin, MI). Bhutan STG at PHC: 20 mL/kg saline and refer.</p>`;
    });
  },

  hypotreat(el, U) {
    el.innerHTML = `<h4>Hypoglycaemia: treatment by age and state</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 20"></label>${sel("who", "Patient", [["a", "Adult"], ["c", "Child"], ["n", "Newborn"]])}${sel("st", "State", [["c", "Conscious, can swallow"], ["u", "Drowsy/unconscious or cannot swallow"]])}${sel("iv", "IV access", [["y", "Yes"], ["n", "No"]])}</div><div class="out" aria-live="polite">Enter the weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), who = g("who").value, st = g("st").value, iv = g("iv").value === "y", out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter the weight."; return; }
      const r = v => Math.round(v);
      let txt;
      if (who === "n") txt = iv ? `<b>10% dextrose ${r(2 * w)} mL IV</b> (2 mL/kg) over 5 minutes, then infusion 60–90 mL/kg/day (glucose infusion 4–6 mg/kg/min); recheck in 30 minutes. Keep breastfeeding.` : `Breastfeed or give expressed milk/formula ${r(10 * w)} mL by cup or NG; buccal glucose gel 0.5 mL/kg (200 mg/kg); arrange IV access.`;
      else if (st === "c") txt = who === "a" ? "<b>15–20 g fast sugar</b>: 150–200 mL juice or sugary drink, or 4–5 sugar lumps or 3–4 teaspoons sugar in water; recheck in 10–15 minutes, repeat up to 3 times, then a starchy snack." : `<b>${Math.round(0.3 * w)} g fast sugar</b> (0.3 g/kg: e.g. ${Math.round(0.3 * w * 10)} mL juice); recheck in 15 minutes, then a snack.`;
      else if (iv) txt = who === "a" ? "<b>10% dextrose 150–200 mL IV over 15 minutes</b> (or 20% 75–100 mL; STG: 25% dextrose); recheck in 10 minutes; thiamine first if alcohol or malnutrition." : `<b>10% dextrose ${r(2 * w)}–${r(5 * w)} mL IV</b> (2–5 mL/kg; Bhutan EM booklet up to 5–10 mL/kg), then glucose-containing maintenance; recheck in 15 minutes.`;
      else txt = `No IV: glucagon ${who === "c" && w < 25 ? "0.5" : "1"} mg IM (not on NEML; ineffective in starvation or alcohol), or sugar solution by NG tube (20 g sugar in 200 mL water)${who === "c" ? `, ${r(5 * w)} mL` : ""}; sugar paste under the tongue; get IV access.`;
      out.innerHTML = `<p style="margin:0">${txt}</p><p class="warn" style="margin:8px 0 0">Hypoglycaemia: under 4 mmol/L in diabetes, under 3 mmol/L in children without diabetes (2.6 mmol/L in newborns, often used locally). Sulfonylurea or long-acting insulin: admit for observation and dextrose infusion.</p>`;
    });
  },

  rhdprophylaxis(el, U) {
    el.innerHTML = `<h4>Rheumatic fever: secondary prophylaxis (Bhutan STG / WHO)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 28"></label><label>Age (years)<input type="number" data-k="age" placeholder="e.g. 12"></label><label>Years since last attack<input type="number" data-k="yrs" placeholder="e.g. 1"></label>${sel("car", "Heart involvement", [["n", "No carditis"], ["c", "Carditis, healed / mild"], ["v", "Chronic valve disease (moderate–severe)"], ["p", "Prosthetic valve"]])}</div><div class="out" aria-live="polite">Enter weight and age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), age = U.num(g("age")), yrs = U.num(g("yrs")) || 0, car = g("car").value, out = U.$(".out", el);
      if (!(w > 0) || !(age >= 0)) { out.textContent = "Enter weight and age."; return; }
      const dose = w < 30 ? "600,000 units (6 lakh)" : "1.2 million units (12 lakh)";
      const until = car === "n" ? Math.max(18, age - yrs + 5) : car === "c" ? Math.max(25, age - yrs + 10) : car === "v" ? 40 : null;
      const dur = car === "p" ? "lifelong" : car === "v" ? "at least until age 40, often lifelong" : `until age ${until} (STG: ${car === "n" ? "18 years and at least 5 years after the last attack" : "25 years or 10 years after the last attack, whichever is longer"})`;
      out.innerHTML = `<p style="margin:0"><b>Benzathine penicillin G ${dose} deep IM every 4 weeks</b> (every 3 weeks if high risk or breakthrough attacks); ${dur}.</p><p style="margin:6px 0 0">Penicillin allergy: erythromycin 250 mg twice daily. Oral penicillin V 250 mg twice daily is less effective (STG alternative).</p><p class="warn" style="margin:8px 0 0">Missed injections are the main cause of recurrence: keep a register and trace defaulters. Yearly echo for carditis.</p>`;
    });
  },

  statinplan(el, U) {
    el.innerHTML = `<h4>Statin decision (Bhutan NCD screening 2024 / ESC)</h4><div class="row">${sel("cat", "Patient", [["sec", "Previous MI, stroke, angina or PAD"], ["dm", "Diabetes age 40+"], ["r30", "10-year CVD risk over 30% (WHO chart)"], ["r20", "Risk 20–30%"], ["r10", "Risk 10–20%"], ["low", "Risk under 10%"], ["fh", "LDL over 4.9 mmol/L (190 mg/dL)"]])}<label>eGFR<input type="number" data-k="egfr" placeholder="optional"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = U.$("[data-k=cat]", el).value;
      const T = { sec: "<b>Atorvastatin 80 mg daily</b> (high intensity; 40 mg if intolerance concerns). Target LDL under 1.4 mmol/L (55 mg/dL) and 50% reduction (ESC).", dm: "<b>Atorvastatin 20–40 mg daily</b>; 40–80 mg if target organ damage or other risk factors.", r30: "<b>Atorvastatin 40 mg daily</b> (Bhutan: risk over 30%, started by a doctor).", r20: "<b>Atorvastatin 10–20 mg daily</b> (Bhutan: risk 20–30%) with lifestyle.", r10: "Lifestyle; consider atorvastatin 10–20 mg if other risk factors (family history, CKD, smoking).", low: "Lifestyle only; reassess risk in 5 years.", fh: "<b>Atorvastatin 40–80 mg daily</b>; check family members (familial hypercholesterolaemia)." };
      U.$(".out", el).innerHTML = `<p style="margin:0">${T[c]}</p><p class="warn" style="margin:8px 0 0">Check lipids and ALT 4–12 weeks after starting; ask about muscle pain (check CK if severe). Statins are contraindicated in pregnancy.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  cervscreen(el, U) {
    el.innerHTML = `<h4>Cervical screening interval (WHO 2021 / Bhutan)</h4><div class="row"><label>Age<input type="number" data-k="age" placeholder="e.g. 34"></label>${sel("hiv", "Living with HIV", [["n", "No"], ["y", "Yes"]])}${sel("last", "Last result", [["none", "Never screened"], ["neg", "Negative"], ["pos", "HPV positive / VIA positive"]])}</div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), age = U.num(g("age")), hiv = g("hiv").value === "y", last = g("last").value, out = U.$(".out", el);
      if (!(age > 0)) { out.textContent = "Enter age."; return; }
      const start = hiv ? 25 : 30;
      let txt;
      if (age < start) txt = `Screening starts at ${start}${hiv ? " for women living with HIV" : ""}; HPV vaccination for girls 9–14 years.`;
      else if (age > 65 && last === "neg") txt = "Can stop after age 65 with recent negative results.";
      else if (last === "pos") txt = "<b>Positive:</b> triage (VIA/colposcopy) and treat pre-cancer (thermal ablation or LEEP) promptly; refer suspected cancer to gynaecology. Retest HPV 12 months after treatment.";
      else txt = `<b>HPV-DNA test ${last === "none" ? "now" : "every " + (hiv ? "3–5" : "5–10") + " years"}</b> (self-sampling acceptable); VIA where HPV testing is unavailable (every 3 years).`;
      out.innerHTML = `<p style="margin:0">${txt}</p>`;
    });
  }
  });
})();
