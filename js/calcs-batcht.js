/* Batch T calculators.
   Acute febrile illness: Bhutan zoonoses/AUFI guidance, WHO. Obesity: WHO 2004 Asian BMI cut-offs. PPHN: oxygenation index.
   ROP: AAP 2018 / Indian NNF screening criteria. Raised ICP: paediatric GCS, Brain Trauma Foundation 2019. Compartment: McQueen delta pressure.
   Rh: BSH 2014 anti-D guidance. Infertility: NICE CG156, WHO 2025 infertility guideline. */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  afiplan(el, U) {
    el.innerHTML = `<h4>Acute fever without focus: tests and empirical treatment (Bhutan)</h4><div class="row"><label>Days of fever<input type="number" data-k="d" placeholder="e.g. 4"></label>${sel("p", "Patient", [["a", "Adult"], ["c", "Child"], ["pr", "Pregnant"]])}<label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="for doses"></label></div><div class="checks" style="margin-top:8px">${chk("es", "Eschar / lymphadenopathy")}${chk("rash", "Rash, low platelets, leucopenia")}${chk("tr", "Travel to/from malaria-risk area (southern border, India)")}${chk("jr", "Jaundice, conjunctival suffusion, AKI, calf pain (rice fields, floods)")}${chk("gi", "Step-wise fever, abdominal symptoms, relative bradycardia")}${chk("an", "Livestock/raw milk exposure, sweats, joint pain")}${chk("ds", "Danger signs: shock, confusion, bleeding, breathlessness, jaundice")}</div><div class="out" aria-live="polite">Enter days of fever.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, d = U.num(g("d")), p = g("p").value, w = U.num(g("wt")), out = U.$(".out", el);
      if (!(d > 0)) { out.textContent = "Enter days of fever."; return; }
      const L = ["<b>All:</b> FBC (platelets, WBC), malaria RDT/smear (if any risk), dengue NS1 (days 1–5) or IgM (day 5+), urine dipstick; blood culture before antibiotics if over 3 days or toxic."];
      if (c("es") || c("jr")) L.push(`Scrub typhus / leptospirosis suspected: IgM/RDT; <b>${p === "pr" || (p === "c" && w > 0 && w < 15) ? "azithromycin " + (p === "c" ? Math.min(500, Math.round(10 * w)) + " mg" : "500 mg") + " daily × 5 days" : "doxycycline 100 mg twice daily × 7 days" + (p === "c" && w > 0 ? " (child " + r1(Math.min(100, 2.2 * w)) + " mg twice daily)" : "")}</b> — start empirically; severe leptospirosis: ceftriaxone/penicillin.`);
      if (c("rash")) L.push("Dengue likely: no NSAIDs/steroids; warning-sign monitoring and fluid plan (dengue chapter); avoid IM injections.");
      if (c("tr")) L.push("Malaria risk: repeat smear 12–24 hourly ×3 if first negative; treat per species (malaria chapter).");
      if (c("gi") || d >= 5) L.push("Enteric fever: blood culture; azithromycin or cefixime/ceftriaxone per enteric chapter.");
      if (c("an") && d >= 7) L.push("Brucellosis/Q fever: serology; refer (zoonoses programme).");
      if (d >= 14) L.push("<b>Fever 2+ weeks:</b> TB (CXR, sputum Xpert), HIV, abscess (ultrasound), endocarditis (cultures ×3, echo), lymphoma, autoimmune.");
      if (c("ds")) L.push("<b>Danger signs:</b> sepsis bundle — cultures, IV ceftriaxone 2 g (child 75–100 mg/kg) + doxycycline (scrub), IV artesunate if malaria positive or not excluded, fluids by cause (careful in dengue), refer.");
      else L.push("Well, no clues: paracetamol, fluids, review in 24–48 h; avoid empirical antibiotics without a reason.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    });
  },

  obesitycalc(el, U) {
    el.innerHTML = `<h4>BMI and obesity plan (adults)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 82"></label><label>Height (cm)<input type="number" step="any" data-k="ht" placeholder="e.g. 162"></label><label>Waist (cm)<input type="number" data-k="wa" placeholder="optional"></label>${sel("sex", "Sex", [["f", "Female"], ["m", "Male"]])}</div><div class="out" aria-live="polite">Enter weight and height.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), w = g("wt"), h = g("ht") / 100, wa = g("wa"), m = U.$("[data-k=sex]", el).value === "m", out = U.$(".out", el);
      if (!(w > 0) || !(h > 0)) { out.textContent = "Enter weight and height."; return; }
      const b = w / (h * h);
      const who = b < 18.5 ? "underweight" : b < 25 ? "normal" : b < 30 ? "overweight" : b < 35 ? "obesity class I" : b < 40 ? "obesity class II" : "obesity class III";
      const asian = b < 23 ? "normal" : b < 27.5 ? "increased risk (overweight)" : "high risk (obese)";
      const cw = wa > 0 ? (wa >= (m ? 90 : 80) ? ` Waist ${wa} cm — <b>central obesity</b> (South Asian cut-off ${m ? 90 : 80} cm).` : ` Waist ${wa} cm — below South Asian cut-off.`) : "";
      const target = Math.round(w * 0.05) + "–" + Math.round(w * 0.1);
      out.innerHTML = `<p style="margin:0">BMI <b>${r1(b)}</b> — WHO: ${who}; WHO Asian action points: <b>${asian}</b>.${cw}</p>${b >= 23 ? `<ul style="margin:6px 0 0;padding-left:18px"><li>Target: lose <b>${target} kg</b> (5–10%) over 6 months — improves BP, glucose, lipids, knees, fertility.</li><li>Diet: about 500–600 kcal/day deficit — smaller rice portions, fewer fried snacks and sugary drinks/butter tea with sugar; more vegetables, pulses.</li><li>Activity: 150–300 min/week moderate (brisk walking), less sitting.</li><li>Screen: BP, fasting glucose/HbA1c, lipids, sleep apnoea symptoms, fatty liver (ALT), knee pain, mood.</li><li>${b >= 30 || (b >= 27.5 && wa > 0) ? "Medicines (specialist): GLP-1 agonists (not on NEML); metformin if prediabetes; bariatric surgery referral for BMI 40+ (or 35+ with diabetes) — abroad." : "Lifestyle programme with monthly weight checks."}</li></ul>` : ""}`;
    });
  },

  pphnoi(el, U) {
    el.innerHTML = `<h4>PPHN: oxygenation index and ductal shunt</h4><div class="row"><label>FiO₂ (%)<input type="number" data-k="f" placeholder="e.g. 100"></label><label>Mean airway pressure (cmH₂O)<input type="number" step="any" data-k="map" placeholder="e.g. 14"></label><label>Post-ductal PaO₂ (mmHg)<input type="number" data-k="pao2" placeholder="e.g. 45"></label><label>Pre-ductal SpO₂ (right hand)<input type="number" data-k="pre" placeholder="e.g. 95"></label><label>Post-ductal SpO₂ (foot)<input type="number" data-k="post" placeholder="e.g. 84"></label></div><div class="out" aria-live="polite">Enter values.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), f = g("f"), map = g("map"), pa = g("pao2"), pre = g("pre"), post = g("post"), out = U.$(".out", el);
      const L = [];
      if (f > 0 && map > 0 && pa > 0) { const oi = f * map / pa; L.push(`Oxygenation index <b>${r1(oi)}</b> — ${oi >= 40 ? "<b>very severe (40+): ECMO criteria</b> — not available in Bhutan; maximise therapy, discuss with family" : oi >= 25 ? "<b>severe (25+)</b>: inhaled nitric oxide where available; sildenafil if not" : oi >= 15 ? "moderate (15–25)" : "mild (under 15)"}.`); }
      if (pre > 0 && post > 0) L.push(`Pre–post ductal SpO₂ difference <b>${pre - post}%</b> — ${pre - post >= 5 ? "<b>right-to-left ductal shunt</b> (supports PPHN)" : "no significant ductal shunt (shunt may be at atrial level — echo)"}.`);
      if (!L.length) { out.textContent = "Enter values."; return; }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}<li>Targets: pre-ductal SpO₂ 90–97%, PaO₂ 55–80 mmHg; avoid hyperoxia and hyperventilation; normal pH (7.35–7.45); support BP (adrenaline/noradrenaline, milrinone if good BP); minimal handling, sedation, correct glucose/calcium, treat cause (sepsis, MAS, CDH).</li></ul>`;
    });
  },

  ropscreen(el, U) {
    el.innerHTML = `<h4>Retinopathy of prematurity: who and when to screen</h4><div class="row"><label>Gestation at birth (weeks)<input type="number" step="any" data-k="ga" placeholder="e.g. 30"></label><label>Birth weight (g)<input type="number" data-k="bw" placeholder="e.g. 1300"></label><label>Postnatal age now (days)<input type="number" data-k="pna" placeholder="e.g. 10"></label></div><div class="checks" style="margin-top:8px">${chk("sick", "Unstable course (prolonged oxygen, sepsis, transfusions, IVH)")}</div><div class="out" aria-live="polite">Enter gestation and birth weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), ga = g("ga"), bw = g("bw"), pna = g("pna"), sick = U.$("[data-k=sick]", el).checked, out = U.$(".out", el);
      if (!(ga > 0) || !(bw > 0)) { out.textContent = "Enter gestation and birth weight."; return; }
      const elig = ga < 34 || bw < 2000;
      const strict = ga <= 30 || bw <= 1500;
      if (!elig && !sick) { out.innerHTML = "<p style='margin:0'>Not eligible by Indian NNF/regional criteria (under 34 weeks or under 2000 g, or sick). No routine screening.</p>"; return; }
      const firstDay = ga < 28 || bw < 1200 ? "2–3 weeks (day 14–21)" : "by 4 weeks (no later than day 30)";
      out.innerHTML = `<p style="margin:0"><b>Screen for ROP.</b> ${strict ? "Also meets AAP/UK criteria (30 weeks or less / 1500 g or less)." : "Meets regional (Indian NNF) criteria — higher-birthweight babies develop severe ROP in South Asia."}</p><ul style="margin:6px 0 0;padding-left:18px"><li>First exam: <b>${firstDay}</b> of life${pna > 0 ? ` (baby is day ${pna})` : ""}; then every 1–2 weeks by findings until retina mature (about 40–45 weeks PMA).</li><li>Targeted oxygen (SpO₂ 90–95%), avoid fluctuations; treat sepsis; good nutrition.</li><li>Treatment-requiring ROP (type 1): laser or anti-VEGF within 48–72 h — arrange referral pathway before discharge.</li><li>Never discharge an eligible baby without a booked eye examination.</li></ul>`;
    });
  },

  pgcs(el, U) {
    el.innerHTML = `<h4>Coma and raised ICP (child): GCS and first steps</h4><div class="row">${sel("e", "Eyes", [["4", "Spontaneous (4)"], ["3", "To voice (3)"], ["2", "To pain (2)"], ["1", "None (1)"]])}${sel("v", "Verbal (preverbal: coos/cries)", [["5", "Oriented / coos, babbles (5)"], ["4", "Confused / irritable cry (4)"], ["3", "Inappropriate words / cries to pain (3)"], ["2", "Sounds / moans to pain (2)"], ["1", "None (1)"]])}${sel("m", "Motor", [["6", "Obeys / normal movement (6)"], ["5", "Localises / withdraws to touch (5)"], ["4", "Withdraws to pain (4)"], ["3", "Abnormal flexion (3)"], ["2", "Extension (2)"], ["1", "None (1)"]])}<label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 18"></label></div><div class="checks" style="margin-top:8px">${chk("cu", "Cushing triad (hypertension, bradycardia, irregular breathing)")}${chk("pu", "Unequal/fixed dilated pupil, posturing")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const v = k => +U.$(`[data-k=${k}]`, el).value, w = U.num(U.$("[data-k=wt]", el)), c = k => U.$(`[data-k=${k}]`, el).checked;
      const s = v("e") + v("v") + v("m"), hern = c("cu") || c("pu");
      const L = [`GCS <b>${s}</b>/15 ${s <= 8 ? "— <b>secure airway (intubate)</b>" : ""}.`, "ABC, glucose now, temperature, seizure control; head midline, <b>head up 30°</b>; normal PaCO₂ (35–40), SpO₂ 94–98%, normal BP for age, sodium 140–150."];
      if (hern) L.push(`<b>Signs of herniation:</b> <b>3% saline ${w > 0 ? Math.round(3 * w) + "–" + Math.round(5 * w) + " mL" : "3–5 mL/kg"}</b> over 10–15 min (preferred) or <b>mannitol ${w > 0 ? r1(0.5 * w) + "–" + r1(1 * w) + " g" : "0.5–1 g/kg"}</b> (${w > 0 ? Math.round(2.5 * w) + "–" + Math.round(5 * w) + " mL of 20%" : "2.5–5 mL/kg of 20%"}); brief hyperventilation only as a bridge; urgent CT and neurosurgery.`);
      L.push("Look for the cause: hypoglycaemia, meningitis/encephalitis (ceftriaxone + aciclovir), cerebral malaria, trauma (CT), poisoning, DKA, hypertensive encephalopathy, status epilepticus.");
      U.$(".out", el).innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); go();
  },

  compartment(el, U) {
    el.innerHTML = `<h4>Compartment syndrome: perfusion pressure</h4><div class="row"><label>Diastolic BP (mmHg)<input type="number" data-k="dbp" placeholder="e.g. 70"></label><label>Compartment pressure (mmHg)<input type="number" data-k="cp" placeholder="e.g. 48"></label></div><div class="checks" style="margin-top:8px">${chk("pain", "Pain out of proportion / rising analgesia need")}${chk("st", "Pain on passive stretch")}${chk("tense", "Tense, swollen compartment")}${chk("par", "Paraesthesia")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), d = g("dbp"), cp = g("cp"), c = k => U.$(`[data-k=${k}]`, el).checked;
      const clin = ["pain", "st", "tense", "par"].filter(c).length;
      let t = "";
      if (d > 0 && cp >= 0 && U.$("[data-k=cp]", el).value !== "") { const dp = d - cp; t += `<p style="margin:0">ΔP (diastolic − compartment) = <b>${dp} mmHg</b> — ${dp < 30 ? "<b>under 30: supports compartment syndrome → fasciotomy</b>" : "30 or more: pressure alone does not confirm; reassess"}.</p>`; }
      t += `<p style="margin:6px 0 0">${clin >= 2 ? "<b>Clinical compartment syndrome likely</b> — " : ""}Remove/split cast and padding to skin, limb at heart level (not elevated), keep BP normal, oxygen; <b>emergency fasciotomy</b> if not resolving within 30–60 min (ideally within 6 h of onset); check CK, urine (myoglobin), potassium.</p>`;
      U.$(".out", el).innerHTML = t + `<p class="warn" style="margin:8px 0 0">Pulselessness and pallor are late signs — do not wait for them. Regional blocks can mask pain in high-risk limbs.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  antiddose(el, U) {
    el.innerHTML = `<h4>Anti-D immunoglobulin dose (Rh-negative, non-sensitised)</h4><div class="row">${sel("ev", "Event", [["e12", "Miscarriage/termination/ectopic under 12 weeks (surgical or bleeding heavy)"], ["e20", "Sensitising event 12–20 weeks"], ["l20", "Sensitising event after 20 weeks (APH, trauma, ECV, amniocentesis)"], ["rap", "Routine antenatal prophylaxis (RAADP)"], ["del", "Delivery of Rh-positive baby"]])}<label>Kleihauer fetal bleed (mL fetal red cells, if known)<input type="number" step="any" data-k="fmh" placeholder="optional"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const ev = U.$("[data-k=ev]", el).value, fmh = U.num(U.$("[data-k=fmh]", el));
      const T = { e12: "<b>250 IU</b> IM within 72 h (surgical evacuation, ectopic, or heavy/repeated bleeding; not needed for threatened miscarriage with light bleeding under 12 weeks).", e20: "<b>250 IU</b> IM within 72 h.", l20: "<b>500 IU</b> IM within 72 h (UK) — <b>or 1500 IU (300 µg)</b> (WHO/US); Kleihauer test to check if more needed; repeat every 6 weeks for ongoing bleeding.", rap: "<b>1500 IU at 28 weeks</b> (single dose) or <b>500 IU at 28 and 34 weeks</b> — where supply allows.", del: "Cord blood group: if baby Rh-positive, <b>500 IU (UK) / 1500 IU (WHO)</b> IM within 72 h of delivery; Kleihauer test." };
      let t = T[ev];
      if (fmh > 0) { const iu = Math.ceil(fmh / 4) * 500; t += `<br>Kleihauer ${fmh} mL fetal red cells → about <b>${iu} IU</b> needed (500 IU covers 4 mL fetal red cells; 1500 IU covers ~15 mL).`; }
      U.$(".out", el).innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Anti-D is not on NEML 2025 — check blood bank/referral supply in advance for Rh-negative mothers. Give even if more than 72 h have passed (some benefit up to 10 days). Do not give if already sensitised (antibody screen positive).</p>`;
    };
    el.addEventListener("input", go); go();
  },

  infertplan(el, U) {
    el.innerHTML = `<h4>Infertility: when and what to investigate</h4><div class="row"><label>Woman's age<input type="number" data-k="age" placeholder="e.g. 32"></label><label>Months trying<input type="number" data-k="mo" placeholder="e.g. 14"></label></div><div class="checks" style="margin-top:8px">${chk("irr", "Irregular/absent periods")}${chk("pid", "Past PID, STI, pelvic surgery, ectopic, postpartum sepsis")}${chk("endo", "Painful periods/intercourse (endometriosis)")}${chk("male", "Male: past mumps orchitis, undescended testis, varicocele, erectile/ejaculation problems")}${chk("prev", "Previous pregnancy in this couple")}</div><div class="out" aria-live="polite">Enter age and months.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), a = U.num(g("age")), mo = U.num(g("mo")), c = k => g(k).checked, out = U.$(".out", el);
      if (!(a > 0) || !(mo >= 0)) { out.textContent = "Enter age and months."; return; }
      const early = c("irr") || c("pid") || c("endo") || c("male") || a >= 35;
      const due = mo >= 12 || (a >= 35 && mo >= 6) || early;
      out.innerHTML = due ? `<ul style="margin:0;padding-left:18px"><li><b>Investigate both partners now</b>${a >= 35 ? " (age 35+: after 6 months)" : ""}.</li><li><b>Semen analysis first</b> (2–5 days' abstinence; repeat if abnormal).</li><li>Ovulation: cycle history; mid-luteal progesterone (day 21 of 28-day cycle); TSH, prolactin; if irregular — LH/FSH, testosterone (PCOS).</li><li>Tubes: HSG on day 7–9 (or laparoscopy with dye if past PID/endometriosis); chlamydia test before HSG/give prophylaxis.</li><li>Ovarian reserve if 35+: AMH/antral follicle count where available.</li><li>General: rubella immunity, HIV/HBV/syphilis, folic acid 400 µg, BMI 19–30, stop smoking/alcohol, intercourse every 2–3 days.</li><li>Refer: anovulation → ovulation induction (letrozole/clomiphene); tubal → surgery/IVF (abroad); male factor → urology/IUI (JDWNRH, CRRH, ERRH).</li></ul>` : `<p style="margin:0">Under 12 months without risk factors: reassure (85% conceive within a year), lifestyle advice, folic acid; investigate at 12 months.</p>`;
    });
  }
  });
})();
