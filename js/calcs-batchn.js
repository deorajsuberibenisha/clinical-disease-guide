/* Batch N calculators.
   Sodium: ESE/ESICM/ERBP 2014 hyponatraemia guideline; Adrogué–Madias formula; paediatric fluids guide. Potassium: UK Kidney Association 2023, Bhutan snakebite guideline 2024.
   Shock: Bhutan EM booklet 2018, SSC 2021, PALS. Measles: WHO vitamin A. Nephrotic: KDIGO 2021, IPNA 2023. Puerperal: Bhutan STG 11.7.
   Labour: WHO partograph / Labour Care Guide 2020. Worms: WHO 2017, Bhutan STG 8.4. Liver abscess: WHO AWaRe 2022. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  sodiumcalc(el, U) {
    el.innerHTML = `<h4>Sodium correction (hypo- and hypernatraemia)</h4><div class="row"><label>Serum Na (mmol/L)<input type="number" data-k="na" placeholder="e.g. 118"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label>${sel("p", "Patient", [["m", "Adult man"], ["f", "Adult woman"], ["em", "Elderly man"], ["ef", "Elderly woman"], ["c", "Child"]])}${sel("sy", "Symptoms", [["sev", "Severe (vomiting, seizure, GCS 8 or less)"], ["mod", "Moderate (nausea, confusion, headache)"], ["none", "None / mild"]])}${sel("hr", "High risk of demyelination (alcohol, malnutrition, low K, liver disease)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter sodium and weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), na = U.num(g("na")), w = U.num(g("wt")), p = g("p").value, sy = g("sy").value, hr = g("hr").value === "y", out = U.$(".out", el);
      if (!(na > 0) || !(w > 0)) { out.textContent = "Enter sodium and weight."; return; }
      const f = { m: 0.6, f: 0.5, em: 0.5, ef: 0.45, c: 0.6 }[p], tbw = f * w;
      const per = inf => (inf - na) / (tbw + 1);
      let t;
      if (na < 135) {
        const lim = hr ? 8 : 10;
        t = `<p style="margin:0">Total body water ≈ ${r1(tbw)} L. 1 L of 3% saline (513 mmol/L) raises Na by ≈ <b>${r1(per(513))} mmol/L</b>; 1 L of 0.9% saline by ≈ ${r1(per(154))}; Ringer's lactate ≈ ${r1(per(130))}.</p>`;
        if (sy === "sev") t += `<p style="margin:6px 0 0"><b>Severe symptoms:</b> ${p === "c" ? `3% saline <b>${Math.min(100, Math.round(2 * w))} mL</b> (2 mL/kg, max 100 mL) over 10 min` : "3% saline <b>150 mL over 20 min</b>"}; recheck Na, repeat up to twice until Na has risen 5 mmol/L or symptoms improve.</p>`;
        else if (sy === "mod") t += `<p style="margin:6px 0 0"><b>Moderate symptoms:</b> single 3% saline ${p === "c" ? Math.min(100, Math.round(2 * w)) + " mL" : "150 mL"} over 20 min, then treat the cause; aim for a 5 mmol/L rise in 24 h.</p>`;
        else t += `<p style="margin:6px 0 0">No 3% saline. Treat by volume status: hypovolaemic — 0.9% saline; SIADH — fluid restriction 800–1000 mL/day; hypervolaemic — restriction ± loop diuretic. Stop thiazides.</p>`;
        t += `<p style="margin:6px 0 0"><b>Limit: no more than ${lim} mmol/L in the first 24 h</b> (target ≤ ${na + lim} mmol/L), then 8 per 24 h. Check Na every 4–6 h (2-hourly during 3% saline). If overcorrected: stop saline, give 5% dextrose ± desmopressin (specialist).</p>`;
      } else if (na > 145) {
        const deficit = tbw * (na / 140 - 1), hrs = na <= 157 ? 24 : na <= 170 ? 48 : 72;
        t = `<p style="margin:0">Free water deficit ≈ <b>${r1(deficit)} L</b> (${Math.round(deficit * 1000)} mL). Replace over <b>${hrs} h</b> (≈ ${Math.round(deficit * 1000 / hrs)} mL/h) plus maintenance and ongoing losses.</p><p style="margin:6px 0 0">Lower Na by <b>no more than 10–12 mmol/L per 24 h</b> (chronic). Shock first with isotonic fluid. Seizures during correction = falling too fast: stop hypotonic fluid, give 3% saline 2–4 mL/kg.</p>`;
      } else t = "<p style='margin:0'>Sodium is in the normal range (135–145 mmol/L).</p>";
      out.innerHTML = t + `<p class="warn" style="margin:8px 0 0">Correct glucose first (pseudohyponatraemia: add 2.4 mmol/L Na per 5.6 mmol/L glucose above 5.6). Formulas are estimates — measure, do not trust the arithmetic.</p>`;
    });
  },

  potassiumcalc(el, U) {
    el.innerHTML = `<h4>Potassium emergency plan</h4><div class="row"><label>Serum K (mmol/L)<input type="number" step="any" data-k="k" placeholder="e.g. 6.8"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label>${sel("ecg", "ECG changes", [["n", "No"], ["y", "Yes"]])}${sel("p", "Patient", [["a", "Adult"], ["c", "Child"]])}${sel("eat", "Can take oral", [["y", "Yes"], ["n", "No"]])}</div><div class="out" aria-live="polite">Enter potassium and weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), k = U.num(g("k")), w = U.num(g("wt")), ecg = g("ecg").value === "y", ch = g("p").value === "c", eat = g("eat").value === "y", out = U.$(".out", el);
      if (!(k > 0) || !(w > 0)) { out.textContent = "Enter potassium and weight."; return; }
      let t;
      if (k >= 6.5 || (k > 5.5 && ecg)) {
        t = `<p style="margin:0"><b>Hyperkalaemia emergency.</b></p><ol style="margin:6px 0 0;padding-left:18px">${ecg ? `<li><b>Calcium gluconate 10% ${ch ? Math.min(20, r1(0.5 * w)) + " mL" : "30 mL"}</b> IV over 10 min${ch ? " (0.5 mL/kg, max 20 mL)" : " (Bhutan: 10 mL over 2 min, repeat up to 3 times)"}; repeat if ECG changes persist.</li>` : ""}<li><b>Insulin–glucose:</b> ${ch ? `soluble insulin ${r1(0.1 * w)} units + glucose ${r1(0.5 * w)} g (${Math.round(5 * w)} mL of 10% dextrose)` : "soluble insulin 10 units + 25 g glucose (50 mL of 50% or 250 mL of 10% dextrose)"} IV over 15 min; glucose at 15, 30, 60 min then hourly for 6 h.</li><li><b>Salbutamol</b> nebulised ${ch ? (w < 25 ? "2.5" : "5") + " mg" : "10–20 mg"}.</li><li>Sodium bicarbonate only if acidotic. Stop ACE inhibitors/ARBs, spironolactone, NSAIDs, K supplements.</li><li>Calcium polystyrene sulfonate ${ch ? r1(0.5 * w) + "–" + r1(1 * w) + " g/day" : "15 g four times daily"}; dialysis if refractory, oliguric or rising.</li></ol>`;
      } else if (k > 5.5) t = "<p style='margin:0'>Moderate hyperkalaemia without ECG change: repeat sample (exclude haemolysis), stop K-raising drugs, low-K diet, treat cause; recheck in 6–12 h. Treat as emergency if rising or AKI.</p>";
      else if (k < 3.5) {
        const sev = k < 2.5 || ecg || !eat;
        t = sev ? `<p style="margin:0"><b>IV potassium:</b> ${ch ? `${r1(0.3 * w)}–${r1(0.5 * w)} mmol/h (0.3–0.5 mmol/kg/h) with continuous ECG, recheck K hourly` : "KCl 40 mmol in 1 L 0.9% saline at up to 10 mmol/h peripherally (20 mmol/h only centrally with monitoring)"}. Never push or give undiluted.</p>` : `<p style="margin:0"><b>Oral KCl:</b> ${ch ? `${r1(w)}–${r1(2 * w)} mmol/day` : "40–80 mmol/day"} in divided doses (600 mg tablet = 8 mmol) with food.</p>`;
        t += "<p style='margin:6px 0 0'>Check and correct <b>magnesium</b> (refractory hypokalaemia). Find the cause: diarrhoea, vomiting, diuretics, insulin, salbutamol.</p>";
      } else t = "<p style='margin:0'>Potassium normal (3.5–5.5 mmol/L).</p>";
      out.innerHTML = t;
    });
  },

  shockcalc(el, U) {
    el.innerHTML = `<h4>Shock: recognition and first fluids</h4><div class="row">${sel("p", "Patient", [["a", "Adult"], ["c", "Child"]])}<label>Age (years, child)<input type="number" step="any" data-k="age" placeholder="e.g. 4"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 16"></label><label>Heart rate<input type="number" data-k="hr" placeholder="e.g. 140"></label><label>Systolic BP<input type="number" data-k="sbp" placeholder="e.g. 80"></label>${sel("t", "Likely type", [["hyp", "Hypovolaemic / dehydration"], ["hae", "Haemorrhagic"], ["sep", "Septic"], ["ana", "Anaphylactic"], ["car", "Cardiogenic"], ["obs", "Obstructive (tension pneumothorax, tamponade)"]])}</div><div class="out" aria-live="polite">Enter weight, heart rate and BP.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), ch = g("p").value === "c", age = U.num(g("age")), w = U.num(g("wt")), hr = U.num(g("hr")), sbp = U.num(g("sbp")), t = g("t").value, out = U.$(".out", el);
      if (!(w > 0) || !(hr > 0) || !(sbp > 0)) { out.textContent = "Enter weight, heart rate and BP."; return; }
      const si = hr / sbp;
      const thr = ch ? (age < 1 ? 70 : age <= 10 ? 70 + 2 * Math.floor(age) : 90) : 90;
      const hypo = sbp < thr;
      const bolus = t === "car" ? Math.round((ch ? 5 : 4) * w) + "–" + Math.round(10 * w) + " mL" : ch ? Math.round(20 * w) + " mL" : Math.round(Math.min(30 * w, 2000)) === 2000 ? "2000 mL" : Math.round(20 * w) + "–" + Math.round(30 * w) + " mL";
      const spec = { hyp: "Repeat boluses; treat cause (ORS once stable).", hae: "Stop the bleeding (pressure, tourniquet, pelvic binder); tranexamic acid 1 g within 3 h (child 15 mg/kg); group O blood early; permissive BP until haemostasis.", sep: "Blood cultures, antibiotics within 1 hour; noradrenaline if MAP under 65 after fluids (child: adrenaline for cold shock, noradrenaline for warm).", ana: `Adrenaline IM ${ch ? Math.min(0.5, r1(0.01 * w * 100) / 100) + " mg" : "0.5 mg"} (1 mg/mL) — see anaphylaxis tool.`, car: "Small boluses only if no lung congestion; dobutamine ± noradrenaline; treat MI/arrhythmia.", obs: "Needle decompression or pericardiocentesis — fluids only buy minutes." }[t];
      out.innerHTML = `<p style="margin:0">Shock index <b>${si.toFixed(2)}</b> ${si > 1 ? "(over 1: significant shock)" : si > 0.7 ? "(raised)" : "(normal 0.5–0.7)"}. ${ch ? `Hypotension threshold for age: SBP under ${thr}. ` : ""}${hypo ? "<b>Hypotensive — decompensated shock.</b>" : ch ? "Normotensive: look for compensated shock (tachycardia, CRT over 3 s, cool peripheries)." : ""}</p><ul style="margin:6px 0 0;padding-left:18px"><li>Oxygen, 2 large IV/IO lines, glucose check${ch ? " (glucose in every child)" : ""}.</li><li>Bolus <b>${bolus}</b> ${t === "car" ? "over 10–20 min" : ch ? "0.9% saline or Ringer's over 5–10 min, repeat up to 60 mL/kg (stop if crackles or liver enlarges)" : "crystalloid rapidly, reassess, repeat"}.</li><li>${spec}</li><li>Targets: MAP 65 or more (adult), normal mental state, urine over 0.5 mL/kg/h (child 1 mL/kg/h), lactate falling.</li></ul>`;
    });
  },

  measlesvita(el, U) {
    el.innerHTML = `<h4>Measles: vitamin A and danger signs (WHO)</h4><div class="row"><label>Age (months)<input type="number" data-k="age" placeholder="e.g. 18"></label>${sel("eye", "Eye signs of vitamin A deficiency (Bitot's spots, corneal clouding/ulcer)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const a = U.num(U.$("[data-k=age]", el)), eye = U.$("[data-k=eye]", el).value === "y", out = U.$(".out", el);
      if (!(a >= 0) || U.$("[data-k=age]", el).value === "") { out.textContent = "Enter age."; return; }
      const d = a < 6 ? "50,000 IU" : a < 12 ? "100,000 IU" : "200,000 IU";
      out.innerHTML = `<p style="margin:0"><b>Vitamin A ${d}</b> orally on day 1 and again on day 2${eye ? ", and a <b>third dose 4–6 weeks later</b> (eye signs)" : ""}. (STG: once; WHO: two doses.)</p><ul style="margin:6px 0 0;padding-left:18px"><li>Admit if: unable to drink, convulsions, lethargy, stridor, chest indrawing, severe malnutrition, corneal clouding, deep mouth ulcers.</li><li>Pneumonia → antibiotics; diarrhoea → ORS + zinc; eyes → tetracycline eye ointment; mouth → gentian violet/clean.</li><li>Isolate until 4 days after rash; notify; vaccinate contacts within 72 h (MR/MMR).</li></ul>`;
    });
  },

  nephroticdose(el, U) {
    el.innerHTML = `<h4>Childhood nephrotic syndrome: prednisolone (KDIGO 2021 / IPNA 2023)</h4><div class="row"><label>Height (cm)<input type="number" data-k="ht" placeholder="e.g. 105"></label><label>Weight (kg, dry if possible)<input type="number" step="any" data-k="wt" placeholder="e.g. 17"></label>${sel("ep", "Episode", [["first", "First episode"], ["rel", "Relapse"]])}</div><div class="out" aria-live="polite">Enter height and weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), ht = U.num(g("ht")), w = U.num(g("wt")), ep = g("ep").value, out = U.$(".out", el);
      if (!(ht > 0) || !(w > 0)) { out.textContent = "Enter height and weight."; return; }
      const bsa = Math.sqrt(ht * w / 3600), d1 = Math.min(60, Math.round(60 * bsa / 5) * 5), d2 = Math.min(40, Math.round(40 * bsa / 5) * 5);
      out.innerHTML = `<p style="margin:0">BSA ${bsa.toFixed(2)} m² (2 mg/kg/day ≈ ${Math.min(60, Math.round(2 * w))} mg if using weight).</p>` + (ep === "first" ? `<p style="margin:6px 0 0"><b>Prednisolone ${d1} mg once daily for 4 weeks</b> (60 mg/m², max 60 mg), then <b>${d2} mg on alternate days for 4 weeks</b> (40 mg/m², max 40 mg), then stop (KDIGO allows 6 + 6 weeks).</p>` : `<p style="margin:6px 0 0"><b>Prednisolone ${d1} mg daily until remission</b> (urine protein negative/trace for 3 days), then <b>${d2} mg alternate days for 4 weeks</b>.</p>`) + `<p style="margin:6px 0 0">Remission: dipstick negative/trace 3 consecutive days. <b>Steroid-resistant</b> if no remission after 4 weeks of daily prednisolone — refer for biopsy. Frequent relapses (2+ in 6 months): refer for steroid-sparing therapy.</p><p class="warn" style="margin:8px 0 0">Check BP, TB screen, and pneumococcal vaccine status. Fever + abdominal pain = peritonitis until proven otherwise (ceftriaxone).</p>`;
    });
  },

  puerperalcalc(el, U) {
    el.innerHTML = `<h4>Puerperal sepsis: antibiotics (Bhutan STG 11.7 / Sepsis Guide)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 55"></label>${sel("s", "Severity", [["mild", "Mild (stable, eating)"], ["sev", "Severe / sepsis (tachycardia, low BP, confusion)"]])}${sel("u", "Urine output", [["ok", "Normal"], ["low", "Low (under 0.5 mL/kg/h) / AKI"]])}${sel("bf", "Breastfeeding", [["y", "Yes"], ["n", "No"]])}</div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), sev = g("s").value === "sev", low = g("u").value === "low", out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      let t = sev ? `<b>Ampicillin 2 g IV 6-hourly + metronidazole 500 mg IV 8-hourly</b>${low ? " — <b>no gentamicin</b> (low urine output); use ceftriaxone 2 g daily instead" : ` + <b>gentamicin ${Math.round(5 * w)} mg IV once daily</b> (5 mg/kg; STG 80 mg 8-hourly)`}. Septic shock: add fluids 30 mL/kg (${Math.round(30 * w)} mL), noradrenaline, refer; consider meropenem/piperacillin–tazobactam.` : "<b>Ampicillin 1 g IV 6-hourly + metronidazole 400 mg orally 8-hourly</b> (BHU); review at 48 h; switch to oral amoxicillin–clavulanate when afebrile 24–48 h.";
      out.innerHTML = `<p style="margin:0">${t}</p><ul style="margin:6px 0 0;padding-left:18px"><li>Ultrasound for retained products → evacuation; pelvic abscess → drainage.</li><li>Look for other sources: breast, urine, wound, chest, calves (DVT), malaria.</li><li>No improvement in 48 h → refer.</li><li>${g("bf").value === "y" ? "All these antibiotics are compatible with breastfeeding — continue." : "Lactation suppression is not needed for antibiotics."}</li></ul>`;
    });
  },

  labourprogress(el, U) {
    el.innerHTML = `<h4>Labour progress check (WHO partograph / Labour Care Guide)</h4><div class="row"><label>Cervix at first exam in active phase (cm)<input type="number" step="any" data-k="c1" placeholder="e.g. 5"></label><label>Cervix now (cm)<input type="number" step="any" data-k="c2" placeholder="e.g. 6"></label><label>Hours between exams<input type="number" step="any" data-k="h" placeholder="e.g. 4"></label>${sel("ob", "Signs of obstruction (Bandl's ring, stretched lower segment, severe moulding, head not descending, haematuria)", [["n", "No"], ["y", "Yes"]])}${sel("par", "Parity", [["n", "Nulliparous"], ["m", "Multiparous"]])}</div><div class="out" aria-live="polite">Enter cervical dilatations and time.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), c1 = U.num(g("c1")), c2 = U.num(g("c2")), h = U.num(g("h")), ob = g("ob").value === "y", out = U.$(".out", el);
      if (!(c2 > 0) || !(h > 0) || !(c1 >= 0)) { out.textContent = "Enter cervical dilatations and time."; return; }
      const rate = (c2 - c1) / h;
      const lcg = c2 <= 5 ? 6 : c2 <= 6 ? 5 : c2 <= 7 ? 3 : c2 <= 8 ? 2.5 : 2;
      let t;
      if (ob) t = "<b>Obstructed labour:</b> no oxytocin. IV Ringer's lactate, catheterise, ampicillin 2 g IV (STG 1 g), urgent caesarean or referral — risk of uterine rupture.";
      else if (c2 >= 10) t = "Fully dilated: second stage — expect birth within 3 h (nulliparous) or 2 h (multiparous); assess descent and pushing.";
      else if (rate >= 1) t = `Progress <b>${r1(rate)} cm/h</b> — at or faster than 1 cm/h. Continue monitoring.`;
      else t = `Progress <b>${r1(rate)} cm/h</b> — slower than 1 cm/h (partograph alert line; WHO 2018 says 1 cm/h alone is too strict). WHO Labour Care Guide: at ${c2} cm, act if no progress for <b>${lcg} h</b>. Reassess the 3 Ps (contractions, position, pelvis), hydrate, empty bladder, amniotomy if membranes intact; oxytocin augmentation only if no obstruction and in a facility able to do caesarean.`;
      out.innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Record on the partograph/LCG; fetal heart every 30 min in active first stage and every 15 min in the second stage for low-risk women (Bhutan midwifery standard; more often if high risk); maternal pulse every 30 min. Never use oxytocin with a previous caesarean scar outside a hospital, or in obstruction.</p>`;
    });
  },

  wormplan(el, U) {
    el.innerHTML = `<h4>Worm infestations: treatment</h4><div class="row"><label>Age (years)<input type="number" step="any" data-k="age" placeholder="e.g. 6"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 20"></label>${sel("w", "Infection", [["round", "Roundworm / whipworm / hookworm / mass deworming"], ["pin", "Pinworm (threadworm)"], ["tape", "Tapeworm (segments in stool)"], ["strong", "Strongyloides"], ["giard", "Giardia"], ["hyd", "Hydatid cyst"]])}${sel("an", "Anaemic", [["n", "No"], ["y", "Yes"]])}${sel("preg", "Pregnant (1st trimester)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), age = U.num(g("age")), w = U.num(g("wt")), inf = g("w").value, an = g("an").value === "y", pr = g("preg").value === "y", out = U.$(".out", el);
      if (!(age >= 0) || g("age").value === "") { out.textContent = "Enter age."; return; }
      const alb = age < 1 ? null : age < 2 ? 200 : 400;
      let t;
      if (pr && ["round", "pin", "hyd"].includes(inf)) t = "First trimester: defer albendazole until the second trimester (WHO allows single-dose albendazole in 2nd/3rd trimester).";
      else if (inf === "round") t = alb ? `<b>Albendazole ${alb} mg single dose</b>${age >= 2 ? "" : " (12–23 months)"}; whipworm may need 400 mg daily for 3 days. Mass deworming every 6–12 months.` : "Under 1 year: not routinely treated — specialist advice.";
      else if (inf === "pin") t = alb ? `<b>Albendazole ${alb} mg</b>, repeat after 2 weeks; treat the whole household; nails short, hand washing, wash bedding.` : "Under 1 year: hygiene measures; specialist advice.";
      else if (inf === "tape") t = `<b>Niclosamide ${age > 6 ? "2 g" : age >= 2 ? "1 g" : "500 mg"}</b> chewed once (or praziquantel 5–10 mg/kg once, not on NEML). If seizures or nodules: think neurocysticercosis — CT and refer.`;
      else if (inf === "strong") t = w > 0 ? `<b>Ivermectin ${r1(0.2 * w)} mg</b> (200 µg/kg) once daily for 2 days (over 15 kg). Treat before steroids in anyone from an endemic area (hyperinfection risk).` : "Enter weight.";
      else if (inf === "giard") t = w > 0 ? `<b>Metronidazole ${age >= 12 ? "400 mg" : Math.min(400, Math.round(7.5 * w)) + " mg"} 8-hourly for 5 days</b> (STG; child 7.5 mg/kg/dose).` : "Enter weight.";
      else t = w > 0 ? `<b>Albendazole ${age >= 12 || w >= 60 ? "400 mg" : Math.min(400, Math.round(7.5 * w)) + " mg"} 12-hourly</b> (15 mg/kg/day, max 800 mg/day) for 1–3 months around surgery/PAIR; check LFT and FBC; refer.` : "Enter weight.";
      out.innerHTML = `<p style="margin:0">${t}</p>${an ? "<p style='margin:6px 0 0'>Anaemia (hookworm): give <b>iron + folic acid</b> for 3 months as well.</p>" : ""}<p class="warn" style="margin:8px 0 0">Prevention: toilets, shoes, hand washing with soap, safe water, cook pork and beef well, wash hands after handling dogs.</p>`;
    });
  },

  liverabsplan(el, U) {
    el.innerHTML = `<h4>Liver abscess: likely type and treatment (WHO AWaRe)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label>${sel("p", "Patient", [["a", "Adult"], ["c", "Child"]])}${sel("ty", "Clues", [["am", "Amoebic (young man, single right-lobe abscess, recent dysentery, alcohol, serology positive)"], ["py", "Pyogenic (older, diabetes, biliary disease, multiple abscesses, gas)"], ["un", "Unsure"]])}<label>Abscess size (cm)<input type="number" step="any" data-k="sz" placeholder="e.g. 6"></label>${sel("s", "Sepsis", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), ch = g("p").value === "c", ty = g("ty").value, sz = U.num(g("sz")), sep = g("s").value === "y", out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      const metA = ch ? Math.min(750, Math.round(10 * w)) + " mg" : "750 mg", cef = ch ? Math.min(2000, Math.round(80 * w)) + " mg" : "2 g", metP = ch ? Math.min(500, Math.round(7.5 * w)) + " mg" : "500 mg";
      const am = `<b>Metronidazole ${metA} 8-hourly for 7–10 days</b>, then a luminal agent (paromomycin or diloxanide — not on NEML; check availability) to prevent relapse.`;
      const py = `<b>Ceftriaxone ${cef} IV daily + metronidazole ${metP} IV/oral 8-hourly</b> (or amoxicillin–clavulanate) for at least 4 weeks guided by imaging; blood cultures first.`;
      let t = ty === "am" ? am : ty === "py" ? py : `Cover both until results: ${py} (metronidazole also covers amoeba).`;
      const drain = (sz >= 5 && ty !== "am") || sep || sz >= 10 || (ty === "am" && sz >= 5);
      t += drain ? `<br><b>Drainage:</b> ${ty === "am" ? "amoebic abscesses rarely need drainage — aspirate if over 5–10 cm, left lobe (pericardial rupture risk), impending rupture, or no response in 3–5 days" : "percutaneous aspiration/catheter drainage (over 5 cm, sepsis, or not improving)"}.` : "<br>Drainage not routinely needed at this size — repeat ultrasound if not improving in 3–5 days.";
      out.innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Rupture into chest, pericardium or peritoneum is an emergency. Look for diabetes, biliary stones and colon cancer (Klebsiella/Streptococcus milleri abscess).</p>`;
    });
  }
  });
})();
