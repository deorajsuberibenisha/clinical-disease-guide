/* Batch L calculators.
   Malaria: Bhutan Malaria Guideline 2024 / WHO 2024. Wells scores: Wells PS et al. 2000 (PE) and 2003 (DVT). DKA adult: JBDS 2023 / ADA 2024 consensus.
   Hypoglycaemia: JBDS 2023, ISPAD 2022, Bhutan STG 5.5. RHD prophylaxis: Bhutan STG 2.4, WHO 2024 RHD guideline. Statins: Bhutan NCD screening guideline 2024, ESC 2021. Cervical screening: WHO 2021. */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  malariadose(el, U) {
    el.innerHTML = `<h4>Malaria treatment by weight (Bhutan National Guideline 2024, 6th edition)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 50"></label>${sel("sp", "Species", [["v", "P. vivax"], ["f", "P. falciparum"], ["m", "Mixed (Pf + Pv)"]])}${sel("sev", "Severe malaria", [["n", "No"], ["y", "Yes"]])}${sel("preg", "Pregnant, or breastfeeding an infant under 6 months", [["n", "No"], ["y", "Yes"]])}${sel("g6", "G6PD", [["n", "Normal"], ["d", "Deficient"], ["u", "Not tested"]])}<label>Age (months)<input type="number" data-k="age" placeholder="e.g. 240"></label></div><div class="out" aria-live="polite">Enter the weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), w = U.num(g("wt")), age = U.num(g("age"));
      if (!(w > 0)) { out.textContent = "Enter the weight."; return; }
      const preg = g("preg").value === "y", g6 = g("g6").value, sp = g("sp").value, under6m = age >= 0 && age < 6;
      const pqOk = !preg && !under6m;
      const r1 = v => Math.round(v * 10) / 10, pqTabs = mg => Math.round(mg / 7.5 * 4) / 4;
      if (g("sev").value === "y") {
        const d = w < 20 ? 3.0 : 2.4, mg = r1(d * w), vials = Math.ceil(mg / 60);
        out.innerHTML = `<p style="margin:0"><b>Severe malaria (Protocol E):</b> artesunate <b>${mg} mg</b> IV or IM (${d} mg/kg${w < 20 ? ", child under 20 kg" : ""}; ${vials} × 60 mg vial${vials > 1 ? "s" : ""}) at 0, 12 and 24 hours, then every 24 hours until able to take oral medicine — at least 24 hours of injections — then a full 3-day course of artemether–lumefantrine${sp !== "f" && pqOk ? " plus primaquine as for the species" : ""}.</p><p style="margin:6px 0 0">If artesunate is unavailable: artemether 3.2 mg/kg IM (${r1(3.2 * w)} mg) then 1.6 mg/kg (${r1(1.6 * w)} mg) daily; or quinine dihydrochloride 20 mg/kg (${Math.round(20 * w)} mg) over 4 hours in 5% dextrose, then 10 mg/kg (${Math.round(10 * w)} mg) 8-hourly (no loading dose if quinine was given in the past 12 hours). <b>PHC pre-referral:</b> one dose of IM artesunate, then refer.</p><p class="warn" style="margin:8px 0 0">Glucose 4-hourly (hypoglycaemia: under 54 mg/dL in under-5s, under 40 mg/dL in older children and adults); transfuse if Hb under 7 g/dL; treat seizures; blood culture and antibiotics if shocked.</p>`;
        return;
      }
      let txt = "";
      const t = w < 15 ? 1 : w < 25 ? 2 : w < 35 ? 3 : 4;
      const al = `<b>Artemether–lumefantrine (20/120 mg) ${t} tablet${t > 1 ? "s" : ""} per dose</b> at 0, 8, 24, 36, 48 and 60 hours, with fatty food or milk.`;
      const pq7 = `<b>Primaquine ${r1(0.5 * w)} mg daily for 7 days</b> (0.5 mg/kg; about ${pqTabs(0.5 * w)} × 7.5 mg tablets), with food, by DOT`;
      const pqWk = `<b>Primaquine ${r1(0.75 * w)} mg once weekly for 8 weeks</b> (0.75 mg/kg; about ${pqTabs(0.75 * w)} × 7.5 mg tablets) — G6PD deficient`;
      const radical = !pqOk ? "<b>No primaquine now</b> (pregnant, breastfeeding an infant under 6 months, or infant under 6 months). Give chloroquine 2 tablets (300 mg base) weekly until the baby is 6 months old (Bhutan Protocol D), then radical cure." : g6 === "d" ? pqWk + "." : g6 === "u" ? `Test G6PD before primaquine where possible. If no test is available, decide on individual risk and benefit: ${pq7} under close supervision, stopping at once for dark urine, pallor, breathlessness or jaundice.` : pq7 + ".";
      if (sp === "v") {
        const cq = mg => Math.round(mg / 75) * 0.5;
        txt = `<b>Chloroquine</b> (250 mg tablet = 150 mg base): day 0 ${Math.round(10 * w)} mg base (about ${cq(10 * w)} tablets), day 1 ${Math.round(10 * w)} mg (${cq(10 * w)} tablets), day 2 ${Math.round(5 * w)} mg (${cq(5 * w)} tablets)${w >= 60 ? " — adult table: 4, 4 and 2 tablets" : ""}.<br>${radical}`;
      } else if (sp === "f") {
        txt = al + "<br>" + (pqOk ? `<b>Single primaquine ${r1(0.5 * w)} mg</b> on day 0 (Bhutan: 0.5 mg/kg; WHO single low dose is 0.25 mg/kg = ${r1(0.25 * w)} mg) to block transmission. G6PD test not required.` : "No single-dose primaquine (pregnant, breastfeeding an infant under 6 months, or infant under 6 months).");
      } else {
        txt = al + "<br>" + radical;
      }
      out.innerHTML = `<p style="margin:0">${txt}</p><p class="warn" style="margin:8px 0 0">Admit every confirmed case for 3 days of supervised treatment (Bhutan). Repeat a dose vomited within 1 hour. Follow-up smears: Pf day 0, 1, 2, 28; Pv day 0, 1, 2, 7, 28, 3 months and up to 1 year. Any danger sign: treat as severe.</p>`;
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
    el.innerHTML = `<h4>Adult DKA: first hours (2024 ADA/EASD/JBDS consensus; ICMR STW)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label><label>Systolic BP (mmHg)<input type="number" data-k="sbp" placeholder="e.g. 105"></label><label>Potassium (mmol/L)<input type="number" step="any" data-k="k" placeholder="e.g. 4.8"></label><label>Glucose (mg/dL)<input type="number" step="any" data-k="glu" placeholder="e.g. 480"></label><label>Venous pH<input type="number" step="0.01" data-k="ph" placeholder="optional"></label><label>Heart or kidney failure, frail or elderly?<select data-k="frail"><option value="n">No</option><option value="y">Yes</option></select></label></div><div class="out" aria-live="polite">Enter weight, BP and potassium.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), w = g("wt"), sbp = g("sbp"), k = g("k"), glu = g("glu"), ph = g("ph"), frail = U.$("[data-k=frail]", el).value === "y", out = U.$(".out", el);
      if (!(w > 0) || !(sbp > 0)) { out.textContent = "Enter weight, BP and potassium."; return; }
      const ins = U.round(0.1 * w, 1), insLow = U.round(0.05 * w, 1);
      const fluids = sbp < 90 ? "<b>Shock (SBP under 90):</b> 0.9% saline or Ringer lactate 500 mL over 10–15 min, repeat until SBP is 90 or more (senior review if two boluses fail); then 500–1000 mL/hour for the first 2–4 hours" : frail ? "0.9% saline or Ringer lactate in <b>250 mL boluses</b>, reassessing after each (heart failure, CKD, frail or elderly)" : "0.9% saline or Ringer lactate (balanced fluid preferred) <b>500–1000 mL/hour for the first 2–4 hours</b>, then guided by hydration, urine output and sodium (Bhutan PHC: 1 L over 2 hours and refer)";
      const kTxt = !(k > 0) ? "Check potassium before insulin (ECG if the result will be delayed)." : k < 3.5 ? "<b>Potassium under 3.5: give KCl 10 mmol/hour first and delay insulin</b> until potassium is above 3.5 (cardiac monitor, HDU)." : k < 5 ? "Add <b>20–30 mmol KCl to each litre</b> once urine is flowing, aiming for potassium 4–5." : "Potassium 5.0 or more: no potassium yet; recheck 2 hours after insulin starts.";
      const gluTxt = glu > 0 && glu < 250 ? `<b>Glucose under 250 mg/dL now:</b> add 5–10% dextrose alongside saline and reduce insulin to <b>${insLow} units/hour</b> (0.05 unit/kg/h); keep glucose around 200 mg/dL. Never stop insulin until the ketoacidosis has resolved.` : `When glucose falls below 250 mg/dL, add 5–10% dextrose and reduce insulin to ${insLow} units/hour (0.05 unit/kg/h); keep glucose around 200 mg/dL.`;
      const phTxt = ph > 0 && ph < 7.0 ? "<li><b>pH under 7.0:</b> consider bicarbonate: 100 mmol sodium bicarbonate (8.4%) in 400 mL sterile water over 2 hours, repeated until pH is above 7.0, with extra potassium (consensus 2024).</li>" : "";
      out.innerHTML = `<ul style="margin:0;padding-left:18px"><li><b>Fluids:</b> ${fluids}.</li><li><b>Insulin:</b> fixed-rate soluble insulin <b>${ins} units/hour</b> IV (0.1 unit/kg/h; 50 units in 50 mL saline = 1 unit/mL)${k > 0 && k < 3.5 ? " — only once potassium is over 3.5" : ""}. Give a 0.1 unit/kg bolus (IV or IM) only if IV access will be delayed. Continue the usual long-acting insulin.</li><li><b>Potassium:</b> ${kTxt}</li><li><b>Glucose:</b> ${gluTxt}</li>${phTxt}<li><b>Check:</b> glucose hourly; potassium 2 hours after insulin starts, then 4-hourly; ketones and venous gas 2–4-hourly. If ketones fall by less than 0.5 mmol/L/h or bicarbonate rises by less than 3 mmol/L/h, check the infusion and the trigger, and increase insulin.</li><li><b>Resolved</b> when ketones are under 0.6 mmol/L and pH is 7.3 or more (or bicarbonate 18 or more): start basal-bolus insulin (total about 0.5–0.6 unit/kg/day if new to insulin, 0.3 if frail or CKD), giving basal insulin 1–2 hours before stopping the drip.</li></ul><p class="warn" style="margin:8px 0 0">Mild or uncomplicated moderate DKA (alert, pH 7.0 or more) may be treated with subcutaneous rapid-acting insulin every 1–2 hours where IV pumps are scarce. Find the trigger: missed insulin, infection, MI, SGLT2 inhibitor, pregnancy.</p>`;
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
      const until = car === "n" ? Math.max(21, age - yrs + 5) : car === "c" ? Math.max(25, age - yrs + 10) : car === "v" ? 40 : null;
      const dur = car === "p" ? "lifelong" : car === "v" ? "at least until age 40, often lifelong" : `until age ${until} (${car === "n" ? "5 years after the last attack or until age 21, whichever is longer — AHA; the STG duration for no carditis could not be read in the available STG text" : "STG: 25 years or 10 years after the last attack, whichever is longer"})`;
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
