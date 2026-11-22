/* Urinary tract infection calculators.
   utiadult: classification and empirical regimen chooser (Bhutan STG 2024 §6.1; WHO AWaRe 2022; NICE NG109/NG111; IDSA 2011; MHRA 2014;
             local resistance: JDWNRH uropathogen studies 2015/2022/2024).
   utichild: weight-based first orders (Bhutan STG 2024 §12.5.3; AAP 2011; NICE NG224; WHO Pocket Book 2013; BNFc). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  utiadult(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    const ck = [["fev", "Fever 38 °C or more, or rigors"], ["flank", "Flank or loin pain / renal-angle tenderness"], ["vom", "Vomiting or cannot take tablets"], ["sep", "Sepsis signs: systolic BP 100 or less, breathing rate 22 or more, or new confusion"], ["cath", "Urinary catheter in place"], ["esbl", "ESBL risk: known ESBL, hospital stay or antibiotics in the last 3 months, recurrent UTI"]];
    el.innerHTML = `<h4>Adult UTI — what type is it, and what to give first?</h4><div class="row">
      ${sel("who", "Patient", [["w", "Woman, not pregnant"], ["p", "Pregnant woman"], ["m", "Man"]])}
      <label>eGFR (mL/min/1.73 m²)<input type="number" step="any" data-k="egfr" placeholder="leave blank if unknown"></label>
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="for gentamicin"></label></div>
      <div class="checks" style="margin-top:10px">${ck.map(([k, t]) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), on = k => g(k).checked;
      const who = g("who").value, eg = U.num(g("egfr")), w = U.num(g("wt"));
      const egKnown = eg > 0, nitroOK = !egKnown || eg >= 45, gentOK = !egKnown || eg >= 30;
      const gent = w > 0 ? `${Math.min(Math.round(w * 5 / 10) * 10, 480)} mg (5 mg/kg)` : "5 mg/kg";
      let type, plan = [], note = [];
      if (on("sep")) {
        type = "UROSEPSIS";
        plan.push("Sepsis bundle now: blood cultures and urine culture, lactate, IV fluid, oxygen — see the <a href=\"#/d/sepsis-adult\">sepsis chapter</a>.");
        plan.push(on("esbl") ? "<b>Meropenem 1 g IV 8-hourly</b> (ESBL risk), within 1 hour." : `<b>Ceftriaxone 2 g IV</b> once daily${gentOK && who !== "p" ? ` <b>plus one dose of gentamicin ${gent} IV</b>` : ""}, within 1 hour. Switch to meropenem if shocked with ESBL risk or not improving at 48 hours.`);
        plan.push("Ultrasound the kidneys today: an obstructed infected kidney (pyonephrosis) needs urgent drainage. Refer to a hospital with HDU and urology.");
      } else if (on("fev") || on("flank") || on("vom") || (who === "m" && on("fev"))) {
        type = "PYELONEPHRITIS (upper UTI)";
        plan.push("Urine culture before the first dose; CBC, creatinine; ultrasound if severe, a stone is suspected, or no better in 48–72 hours.");
        if (who === "p") plan.push("<b>Admit.</b> Ceftriaxone 1–2 g IV once daily; switch to oral cefalexin 500 mg–1 g three times daily (or by culture) when afebrile for 24–48 hours; 10–14 days in total. No fluoroquinolones; avoid gentamicin in pregnancy unless no alternative.");
        else if (on("vom")) plan.push(`<b>Admit for IV treatment:</b> ceftriaxone 1–2 g IV once daily (Bhutan STG: ampicillin 1 g 6-hourly + gentamicin${gentOK ? ` ${gent} once daily` : " — avoid while eGFR under 30"}). Switch to oral by culture once eating and afebrile.`);
        else plan.push(`<b>Outpatient if well:</b> one IV dose of ceftriaxone 1 g${gentOK ? ` (or gentamicin ${gent})` : ""} first, because fluoroquinolone and co-trimoxazole resistance is high (WHO AWaRe), then oral by culture: <b>cefixime 400 mg once daily</b> or cefalexin 500 mg–1 g three times daily (beta-lactams: 10 days in total), or ciprofloxacin 500 mg twice daily for 7 days if sensitive.`);
        if (on("esbl")) note.push("ESBL risk: if culture confirms ESBL, the usual options are meropenem IV, or gentamicin if eGFR allows; nitrofurantoin does not reach the kidney.");
        if (who === "m") note.push("Fever in a man with UTI symptoms may be prostatitis: treat for at least 14 days (ciprofloxacin if sensitive) and examine the prostate gently.");
      } else {
        type = who === "m" ? "LOWER UTI IN A MAN (complicated by definition)" : who === "p" ? "CYSTITIS IN PREGNANCY" : "UNCOMPLICATED CYSTITIS";
        const days = who === "w" ? "5 days (NICE: 3 days)" : "7 days";
        if (nitroOK && !(who === "p")) plan.push(`<b>Nitrofurantoin 100 mg modified-release twice daily for ${days}</b>, with food.`);
        if (who === "p") plan.push("<b>Nitrofurantoin 100 mg MR twice daily for 7 days</b> (avoid from about 36 weeks), or <b>cefalexin 500 mg twice daily for 7 days</b>. Always send a culture first, and repeat it after treatment (test of cure).");
        if (!nitroOK) plan.push(`eGFR ${eg}: <b>nitrofurantoin not suitable</b>. Use cefalexin 500 mg twice daily for ${who === "w" ? "5" : "7"} days, or co-trimoxazole 960 mg twice daily for 3 days only if sensitive.`);
        plan.push("Bhutan STG lists amoxicillin or co-trimoxazole for 3 days; with about 70% amoxicillin resistance in Thimphu, keep these for culture-proven sensitive organisms.");
        if (who !== "w") plan.push("Send a urine culture before starting.");
      }
      if (on("cath")) note.push("Catheter: treat only if symptomatic. Replace the catheter (if in more than 7 days) before taking the sample and starting antibiotics; give 7 days.");
      if (egKnown && !gentOK) note.push(`eGFR ${eg}: avoid gentamicin; dose-adjust renally cleared antibiotics.`);
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>${type}</b></p><ul style="margin:6px 0 0;padding-left:18px">${plan.map(x => `<li>${x}</li>`).join("")}${note.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Do not treat asymptomatic bacteriuria except in pregnancy and before urological surgery. Review culture at 48–72 hours and narrow the antibiotic.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  utichild(el, U) {
    el.innerHTML = `<h4>Child with UTI — first orders by weight</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 12"></label>
      <label>Age<select data-k="age"><option value="o">3 months or older</option><option value="y">1–3 months</option><option value="n">Under 1 month (neonate)</option></select></label>
      <label>Picture<select data-k="pic"><option value="f">Fever (febrile UTI / pyelonephritis), well enough for oral</option><option value="s">Unwell, vomiting or septic</option><option value="c">Cystitis only (older child, no fever)</option></select></label></div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const w = U.num(g("wt")), age = g("age").value, young = age !== "o", neo = age === "n", pic = g("pic").value;
      if (!(w > 0) || w > 100) { out.textContent = "Enter the weight."; return; }
      const r0 = v => Math.round(v), r5 = v => Math.round(v / 5) * 5, cap = (v, m) => Math.min(v, m);
      const par = cap(r5(15 * w), 1000);
      let L = [];
      if (young) {
        L.push("<b>Admit and refer to a paediatrician.</b> Infants under 3 months need IV antibiotics, blood culture, and a check for meningitis if unwell.");
        L.push(`<b>Ampicillin ${cap(r5(50 * w), 2000)} mg IV</b> (50 mg/kg) every 6–8 hours by age <b>plus gentamicin ${r0((neo ? 5 : 7.5) * w)} mg IV</b> once daily (${neo ? "5 mg/kg in the first month; interval by gestational age on neonatal advice" : "7.5 mg/kg after the first month"}). Alternative: cefotaxime ${cap(r5(50 * w), 2000)} mg IV 6–8-hourly. Avoid ceftriaxone in jaundiced or premature babies.`);
        L.push("Total about 10 days (switch to oral by culture after 48–72 hours afebrile, on specialist advice). Ultrasound of kidneys and bladder during the illness or within 6 weeks.");
      } else if (pic === "s") {
        L.push(`<b>Ceftriaxone ${cap(r5(75 * w), 2000)} mg IV/IM</b> once daily (75 mg/kg, max 2 g). Bhutan STG option: ampicillin ${cap(r5(50 * w), 2000)} mg IV 6-hourly + gentamicin ${cap(r0(7.5 * w), 400)} mg IV once daily (7.5 mg/kg; check urine output and creatinine).`);
        L.push(`Septic or shocked: fluid bolus ${r0(10 * w)} mL (10 mL/kg) and follow the <a href="#/d/sepsis-child">sepsis chapter</a>.`);
        L.push(`When afebrile 24–48 hours and drinking: switch to oral cefixime ${cap(r5(8 * w), 400)} mg once daily (or by culture); <b>7–10 days in total</b>.`);
      } else if (pic === "f") {
        L.push(`<b>Cefixime ${cap(r5(8 * w), 400)} mg orally once daily</b> (8 mg/kg/day, max 400 mg) for 7–10 days. Or <b>cefalexin ${cap(r5(25 * w), 1000)} mg three times daily</b> (25 mg/kg per dose).`);
        L.push(`Bhutan STG options, if the organism is sensitive: amoxicillin ${cap(r5(15 * w), 500)} mg three times daily (15 mg/kg) or co-trimoxazole ${cap(r0(4 * w), 160)} mg trimethoprim twice daily (8 mg/kg/day). High local resistance: confirm with culture.`);
        L.push("Review at 48 hours: still febrile → admit, IV ceftriaxone, ultrasound.");
      } else {
        L.push(`<b>Cystitis, 3 days</b> (NICE; STG uses 5 days): cefalexin ${cap(r5(12.5 * w), 500)} mg twice daily (12.5 mg/kg), or co-trimoxazole ${cap(r0(4 * w), 160)} mg trimethoprim twice daily if sensitive${w >= 40 ? ", or nitrofurantoin 100 mg MR twice daily (12 years and over)" : `, or nitrofurantoin ${Math.round(0.75 * w * 10) / 10} mg four times daily (750 micrograms/kg) if a liquid is available`}.`);
      }
      L.push(`Paracetamol ${par} mg (15 mg/kg) up to 6-hourly for fever; plenty of fluids.`);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Collect a clean-catch or catheter urine for culture <b>before</b> the first dose; bag urine is only good for ruling out. Check doses against the chapter and BNFc/NEMF.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
