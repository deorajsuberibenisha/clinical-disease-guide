/* Batch R calculators.
   Calcium: corrected calcium; Society for Endocrinology emergency guidance. Acid–base: Winter's formula, anion gap, delta ratio. Transfusion: BSH/Bhutan PPH MTP.
   Thiamine: WHO 1999, NEMF. Constipation: NICE CG99, STG. Development: WHO/CDC milestones red flags. AUB: ACOG/FIGO. Contraception: WHO MEC. Hyperemesis: RCOG GTG 69 (PUQE). */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  calciumcalc(el, U) {
    el.innerHTML = `<h4>Calcium: correct for albumin and treat</h4><div class="row"><label>Total calcium (mmol/L)<input type="number" step="any" data-k="ca" placeholder="e.g. 1.85"></label><label>Albumin (g/L)<input type="number" data-k="alb" placeholder="e.g. 28"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label>${sel("p", "Patient", [["a", "Adult"], ["c", "Child"]])}${sel("sx", "Symptoms (tetany, seizures, arrhythmia / confusion, vomiting)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter calcium and albumin.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), ca = U.num(g("ca")), alb = U.num(g("alb")), w = U.num(g("wt")), ch = g("p").value === "c", sx = g("sx").value === "y", out = U.$(".out", el);
      if (!(ca > 0) || !(alb > 0)) { out.textContent = "Enter calcium and albumin."; return; }
      const cc = ca + 0.02 * (40 - alb);
      let t = `<p style="margin:0">Corrected calcium <b>${cc.toFixed(2)} mmol/L</b> (${(cc * 4).toFixed(1)} mg/dL). Ionised calcium is more reliable if available.</p>`;
      if (cc < 2.1) t += sx || cc < 1.9 ? `<p style="margin:6px 0 0"><b>Symptomatic/severe hypocalcaemia:</b> ${ch ? `10% calcium gluconate <b>${w > 0 ? Math.min(10, r1(0.5 * w)) + " mL" : "0.5 mL/kg"}</b> (0.5 mL/kg, max 10 mL; STG fluids guide up to 1 mL/kg max 10 mL) diluted, IV over 10 min with ECG` : "10% calcium gluconate <b>10–20 mL</b> in 50–100 mL 5% dextrose IV over 10 min with ECG, then infusion 50–100 mL of 10% in 1 L over 24 h"}; check and correct magnesium (MgSO₄); then oral calcium + vitamin D (calcitriol if hypoparathyroid).</p>` : "<p style='margin:6px 0 0'>Mild: oral calcium 1–2 g elemental/day (child 50 mg/kg/day) + vitamin D; check Mg, PO₄, PTH, vitamin D, creatinine.</p>";
      else if (cc > 2.6) t += cc >= 3.5 || sx ? `<p style="margin:6px 0 0"><b>Severe/symptomatic hypercalcaemia:</b> IV 0.9% saline ${ch ? (w > 0 ? Math.round(10 * w) + "–" + Math.round(20 * w) + " mL" : "10–20 mL/kg") + " over 1 h, then 2–3 × maintenance" : "3–4 L in 24 h (watch overload)"}; furosemide only after rehydration if overloaded; IV bisphosphonate (zoledronate/pamidronate — not on NEML) or calcitonin via specialist; stop calcium/vitamin D/thiazides; find the cause (PTH, malignancy, myeloma, vitamin D toxicity, TB).</p>` : "<p style='margin:6px 0 0'>Mild hypercalcaemia: oral fluids, stop thiazides/calcium/vitamin D, check PTH, vitamin D, myeloma screen, chest X-ray.</p>";
      else t += "<p style='margin:6px 0 0'>Corrected calcium is normal (2.1–2.6 mmol/L).</p>";
      out.innerHTML = t + `<p class="warn" style="margin:8px 0 0">IV calcium: never with bicarbonate in the same line; extravasation causes necrosis; caution with digoxin.</p>`;
    });
  },

  abgcalc(el, U) {
    el.innerHTML = `<h4>Blood gas interpreter (5 steps)</h4><div class="row"><label>pH<input type="number" step="any" data-k="ph" placeholder="7.22"></label><label>PaCO₂ (mmHg)<input type="number" step="any" data-k="co2" placeholder="25"></label><label>HCO₃⁻ (mmol/L)<input type="number" step="any" data-k="hco3" placeholder="10"></label><label>Na⁺<input type="number" step="any" data-k="na" placeholder="138"></label><label>Cl⁻<input type="number" step="any" data-k="cl" placeholder="100"></label><label>Albumin (g/L)<input type="number" data-k="alb" placeholder="40"></label></div><div class="out" aria-live="polite">Enter pH, PaCO₂ and HCO₃.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), ph = g("ph"), co2 = g("co2"), h = g("hco3"), na = g("na"), cl = g("cl"), alb = g("alb") || 40, out = U.$(".out", el);
      if (!(ph > 0) || !(co2 > 0) || !(h > 0)) { out.textContent = "Enter pH, PaCO₂ and HCO₃."; return; }
      const L = [];
      let prim;
      if (ph < 7.35) prim = h < 22 && co2 > 45 ? "mixed-acid" : h < 22 ? "met-acid" : co2 > 45 ? "resp-acid" : "met-acid";
      else if (ph > 7.45) prim = h > 26 && co2 < 35 ? "mixed-alk" : h > 26 ? "met-alk" : co2 < 35 ? "resp-alk" : "met-alk";
      else prim = (h < 22 && co2 < 35) ? "comp" : (h > 26 && co2 > 45) ? "comp2" : "normal";
      const names = { "met-acid": "Metabolic acidosis", "resp-acid": "Respiratory acidosis", "met-alk": "Metabolic alkalosis", "resp-alk": "Respiratory alkalosis", "mixed-acid": "Mixed metabolic and respiratory acidosis", "mixed-alk": "Mixed metabolic and respiratory alkalosis",comp: "Normal pH with low HCO₃ and low CO₂ — compensated or mixed disorder", comp2: "Normal pH with high HCO₃ and high CO₂ — compensated or mixed disorder", normal: "No primary acid–base disorder" };
      L.push(`<b>${names[prim]}</b> (pH ${ph}).`);
      if (prim === "met-acid" || prim === "mixed-acid") { const exp = 1.5 * h + 8; L.push(`Winter's expected PaCO₂ = <b>${r1(exp - 2)}–${r1(exp + 2)}</b>; measured ${co2} → ${co2 > exp + 2 ? "<b>additional respiratory acidosis</b>" : co2 < exp - 2 ? "<b>additional respiratory alkalosis</b>" : "appropriate compensation"}.`); }
      if (prim === "met-alk") { const exp = 0.7 * h + 21; L.push(`Expected PaCO₂ ≈ ${r1(exp)} (± 2) → ${co2 > exp + 2 ? "additional respiratory acidosis" : co2 < exp - 2 ? "additional respiratory alkalosis" : "appropriate"}.`); }
      if (prim === "resp-acid") L.push(`Acute: HCO₃ rises 1 per 10 mmHg CO₂ (expected ${r1(24 + (co2 - 40) / 10)}); chronic: 3.5 per 10 (expected ${r1(24 + 3.5 * (co2 - 40) / 10)}).`);
      if (prim === "resp-alk") L.push(`Acute: HCO₃ falls 2 per 10 mmHg (expected ${r1(24 - 2 * (40 - co2) / 10)}); chronic: 5 per 10 (expected ${r1(24 - 5 * (40 - co2) / 10)}).`);
      if (na > 0 && cl > 0) { const ag = na - cl - h, agc = ag + 0.25 * (40 - alb); L.push(`Anion gap <b>${r1(ag)}</b> (albumin-corrected ${r1(agc)}; normal 8–12) → ${agc > 12 ? "<b>high anion gap</b> (ketones, lactate, renal failure, toxins: methanol, salicylate, iron, isoniazid)" : "normal anion gap (diarrhoea, RTA, saline, ureteric diversion)"}.`); if (agc > 12 && h < 24) { const dr = (agc - 12) / (24 - h); L.push(`Delta ratio <b>${r1(dr)}</b> → ${dr < 1 ? "additional normal-AG acidosis" : dr > 2 ? "additional metabolic alkalosis" : "pure high-AG acidosis"}.`); } }
      if (ph < 7.1 && (prim === "met-acid") && h > 0) L.push("pH under 7.1: bicarbonate only for selected causes (hyperkalaemia, TCA overdose, normal-AG losses) — not routinely in DKA or lactic acidosis; ensure ventilation.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    });
  },

  mtpcalc(el, U) {
    el.innerHTML = `<h4>Transfusion: volume and massive transfusion</h4><div class="row">${sel("p", "Patient", [["a", "Adult"], ["c", "Child"]])}<label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label><label>Hb now (g/dL)<input type="number" step="any" data-k="hb" placeholder="e.g. 6"></label><label>Target Hb (g/dL)<input type="number" step="any" data-k="tg" placeholder="e.g. 9"></label>${sel("m", "Massive bleeding (4+ units in 4 h, ongoing shock, or over 2500 mL PPH)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), ch = g("p").value === "c", w = U.num(g("wt")), hb = U.num(g("hb")), tg = U.num(g("tg")), m = g("m").value === "y", out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      let t = "";
      if (hb > 0 && tg > hb) t += ch ? `<p style="margin:0">Packed red cells ≈ <b>${Math.min(Math.round((tg - hb) * w * 4), Math.round(20 * w))} mL</b> ((target − Hb) × weight × 4; max 20 mL/kg) over 3–4 h; whole blood 20 mL/kg (${Math.round(20 * w)} mL). Severe anaemia with heart failure: 5–10 mL/kg slowly + furosemide 1 mg/kg.</p>` : `<p style="margin:0">About <b>${Math.ceil(tg - hb)} unit(s)</b> of red cells (1 unit raises Hb ~1 g/dL in a 70 kg adult). Restrictive threshold: transfuse at Hb under 7 (under 8 with cardiac disease) unless bleeding/symptomatic.</p>`;
      if (m) t += `<p style="margin:6px 0 0"><b>Massive transfusion protocol</b> (Bhutan PPH guideline): cycle 1 = <b>6 red cells + 4 FFP + 5 platelet units</b>${ch ? ` (child: red cells 20 mL/kg = ${Math.round(20 * w)} mL, FFP ${Math.round(15 * w)} mL, platelets ${Math.round(10 * w)} mL)` : ""}; cryoprecipitate if fibrinogen under 1.5 g/L; <b>tranexamic acid ${ch ? Math.round(15 * w) + " mg" : "1 g"}</b> within 3 h; calcium gluconate if ionised Ca under 1.1; keep warm; group O blood until group-specific available; repeat Hb, platelets, PT/aPTT, fibrinogen after each cycle.</p>`;
      out.innerHTML = (t || "<p style='margin:0'>Enter Hb and target, or select massive bleeding.</p>") + `<p class="warn" style="margin:8px 0 0">Bedside identity check; start within 30 min of leaving the fridge; observe at 15 min. Reaction: stop, keep line with saline, check identity, treat (anaphylaxis: adrenaline), send bag and samples to the blood bank.</p>`;
    });
  },

  thiaminecalc(el, U) {
    el.innerHTML = `<h4>Thiamine deficiency: treatment</h4><div class="row">${sel("t", "Presentation", [["wer", "Wernicke encephalopathy (confusion, ataxia, eye signs) / alcohol withdrawal at risk"], ["wet", "Wet beriberi (high-output heart failure)"], ["dry", "Dry beriberi (neuropathy)"], ["inf", "Infantile beriberi (breastfed infant 2–6 months: hoarse cry, vomiting, heart failure)"], ["pro", "Prophylaxis (alcohol, malnutrition, hyperemesis, refeeding)"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const t = U.$("[data-k=t]", el).value;
      const T = { wer: "<b>Thiamine 200–500 mg IV three times daily for 3–5 days</b> (Pabrinex-style high dose; NEMF minimum 100 mg IV), then 100 mg daily IV/IM while eating poorly, then oral 100 mg daily. Give <b>before glucose</b>.", wet: "<b>Thiamine 100–200 mg IV</b> immediately (slow), then 100 mg IV/IM daily until improved (heart failure often improves within hours–days), then 10–50 mg orally daily for weeks; diuretics cautiously; treat other household members/institution.", dry: "Thiamine 50–100 mg orally (or IM) daily until recovery; neuropathy improves over months; diet change.", inf: "<b>Infant: thiamine 25–50 mg IV/IM slowly</b> (WHO), then 10 mg IM/oral daily for a week, then 3–5 mg daily oral for 6 weeks; <b>treat the mother</b> (50 mg/day oral or more) and continue breastfeeding.", pro: "Thiamine 100 mg orally/IM daily (alcohol, hyperemesis, refeeding) — 100 mg IV before any glucose in at-risk patients." };
      U.$(".out", el).innerHTML = `<p style="margin:0">${T[t]}</p><p class="warn" style="margin:8px 0 0">Outbreaks (monastic schools, institutions with polished-rice diets): treat everyone symptomatic, supplement all residents, and change the diet (parboiled/red rice, pulses, meat, eggs, vegetables).</p>`;
    };
    el.addEventListener("input", go); go();
  },

  constipationc(el, U) {
    el.innerHTML = `<h4>Childhood constipation: red flags and laxative doses</h4><div class="row"><label>Age (years)<input type="number" step="any" data-k="age" placeholder="e.g. 4"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 16"></label>${sel("imp", "Faecal impaction (hard mass, overflow soiling)", [["n", "No"], ["y", "Yes"]])}</div><div class="checks" style="margin-top:8px">${chk("rf1", "Onset from birth / delayed meconium over 48 h")}${chk("rf2", "Ribbon stools, abdominal distension with vomiting")}${chk("rf3", "Leg weakness, abnormal back/sacrum, abnormal reflexes")}${chk("rf4", "Faltering growth")}${chk("rf5", "Anal abnormality / concern about abuse")}</div><div class="out" aria-live="polite">Enter age and weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), a = U.num(g("age")), w = U.num(g("wt")), imp = g("imp").value === "y", rf = ["rf1", "rf2", "rf3", "rf4", "rf5"].some(k => g(k).checked), out = U.$(".out", el);
      if (!(w > 0) || !(a >= 0)) { out.textContent = "Enter age and weight."; return; }
      const lac = `${r1(1 * w)}–${r1(Math.min(3 * w, 40))} mL/day`;
      out.innerHTML = (rf ? "<p style='margin:0'><b>Red flag present:</b> consider Hirschsprung disease, spinal cord problem, hypothyroidism, anorectal malformation or safeguarding — refer for specialist assessment (TSH, coeliac screen, imaging/biopsy as indicated).</p>" : "<p style='margin:0'>Likely functional constipation.</p>") + `<ul style="margin:6px 0 0;padding-left:18px">${imp ? `<li><b>Disimpaction:</b> ${a < 1 ? "glycerin suppository (1 g)" : "glycerin suppository at night for 2–3 nights (STG)"} + lactulose at higher dose; macrogol (if available) escalating doses is preferred internationally.</li>` : ""}<li><b>Lactulose ${lac}</b> (1–3 mL/kg/day, STG) in 1–2 doses; add <b>senna</b> ${a >= 2 ? (a < 6 ? "3.75–15 mg" : "7.5–30 mg") + " at night" : "(not under 2 years without advice)"} if needed.</li><li><b>Continue maintenance for several weeks after regular soft stools</b>, then wean slowly over months.</li><li>Toilet routine after meals 5–10 min, footstool, praise (no punishment), fluids, fruit/vegetables; infants — check formula preparation.</li></ul>`;
    });
  },

  devscreen(el, U) {
    el.innerHTML = `<h4>Developmental red flags by age</h4><div class="row"><label>Age (months, corrected if preterm)<input type="number" data-k="age" placeholder="e.g. 18"></label></div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const a = U.num(U.$("[data-k=age]", el)), out = U.$(".out", el);
      if (!(a >= 0) || U.$("[data-k=age]", el).value === "") { out.textContent = "Enter age."; return; }
      const R = [[2, "No social smile by 8 weeks; not fixing/following"], [4, "No head control; hands always fisted; no response to sounds"], [6, "Not reaching for objects; persistent primitive reflexes; no babbling"], [9, "Not sitting without support; not babbling consonants; no response to name"], [12, "Not standing with support; no pincer grasp; no pointing or gestures; no single words-like sounds"], [18, "Not walking; fewer than 6 words; not pointing to show interest; no pretend play"], [24, "No 2-word phrases; not running; does not follow simple commands; loss of skills"], [36, "Unclear speech to strangers; no 3-word sentences; not playing with others"], [48, "Cannot hop/draw a circle; not telling stories; poor interaction"]];
      const due = R.filter(([m]) => m <= a);
      out.innerHTML = `<p style="margin:0">Check that the child has achieved these (red flag if not):</p><ul style="margin:6px 0 0;padding-left:18px">${due.map(([m, t]) => `<li><b>By ${m} months:</b> ${t}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0"><b>Any age:</b> loss of previously acquired skills (regression), asymmetry of movement, persistent hypotonia/hypertonia, hand preference before 12 months, parental concern, or no response to sound — refer promptly (hearing test, neurological and developmental assessment). Check vision, hearing, growth, head circumference, thyroid.</p>`;
    });
  },

  aubplan(el, U) {
    el.innerHTML = `<h4>Abnormal uterine bleeding: first steps</h4><div class="row"><label>Age (years)<input type="number" data-k="age" placeholder="e.g. 38"></label><label>Hb (g/dL)<input type="number" step="any" data-k="hb" placeholder="e.g. 9"></label>${sel("st", "Haemodynamics", [["s", "Stable"], ["u", "Unstable / very heavy acute bleeding"]])}${sel("pm", "Postmenopausal (12 months without periods)", [["n", "No"], ["y", "Yes"]])}${sel("ec", "Can take oestrogen (no VTE/migraine with aura/smoker 35+/uncontrolled BP)", [["y", "Yes"], ["n", "No"]])}</div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), a = U.num(g("age")), hb = U.num(g("hb")), un = g("st").value === "u", pm = g("pm").value === "y", ec = g("ec").value === "y", out = U.$(".out", el);
      if (!(a > 0)) { out.textContent = "Enter age."; return; }
      const L = ["<b>Pregnancy test first</b> (miscarriage, ectopic, molar pregnancy)."];
      if (pm) L.push("<b>Postmenopausal bleeding: refer for transvaginal ultrasound and endometrial sampling</b> (endometrial cancer until proven otherwise).");
      else {
        if (un) L.push("<b>Acute heavy bleeding:</b> resuscitate, crossmatch; tranexamic acid 1 g IV or 1–1.3 g orally 8-hourly; " + (ec ? "combined pill (30–35 µg) 1 tablet three times daily for 7 days, or " : "") + "<b>medroxyprogesterone 10–20 mg three times daily for 7 days</b>; examination under anaesthesia/curettage if not settling.");
        else L.push("<b>Heavy menstrual bleeding:</b> tranexamic acid 1 g three times daily during menses + mefenamic acid/ibuprofen; " + (ec ? "or combined pill (STG)" : "or cyclical/continuous progestogen") + "; LNG-IUS where available (most effective).");
        if (a >= 45) L.push("Age 45+ (or obesity, PCOS, persistent intermenstrual bleeding, failed treatment): <b>endometrial sampling</b> (hyperplasia/cancer).");
        L.push("Ultrasound for structural causes (polyp, fibroid, adenomyosis); speculum (cervical lesion); TSH and coagulation screen (von Willebrand) if heavy since menarche.");
      }
      if (hb > 0 && hb < 11) L.push(`Anaemia (Hb ${hb}): oral iron 60–120 mg elemental daily${hb < 7 ? "; consider IV iron or transfusion if symptomatic" : ""}.`);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    });
  },

  contrachoice(el, U) {
    el.innerHTML = `<h4>Contraception quick check (WHO MEC)</h4><div class="checks">${chk("bf6", "Breastfeeding, under 6 weeks postpartum")}${chk("pp21", "Postpartum under 21 days, not breastfeeding")}${chk("smk", "Smoker aged 35+")}${chk("bp", "BP 160/100+ or vascular disease")}${chk("mig", "Migraine with aura")}${chk("vte", "Past VTE / known thrombophilia")}${chk("ind", "Enzyme-inducing drugs (rifampicin, carbamazepine, phenytoin, efavirenz)")}${chk("bc", "Current breast cancer")}${chk("ec", "Unprotected sex in the last 5 days")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked;
      const cocNo = ["bf6", "pp21", "smk", "bp", "mig", "vte", "bc"].some(c);
      const L = [];
      if (c("ec")) L.push("<b>Emergency contraception now:</b> copper IUD within 5 days (most effective) or levonorgestrel 1.5 mg as soon as possible (3 mg if BMI over 30 or enzyme inducers); then start ongoing method.");
      L.push(cocNo ? "<b>Combined pill: not suitable (MEC 3–4).</b>" : "Combined pill: suitable" + (c("ind") ? " but <b>less effective with enzyme inducers</b> — prefer DMPA/IUD" : "") + ".");
      L.push(c("bc") ? "Progestogen methods: not suitable with current breast cancer — copper IUD." : "Progestogen-only options (DMPA 150 mg IM every 12 weeks, implant, POP) suitable" + (c("vte") ? " (MEC 2 with past VTE)" : "") + (c("ind") ? "; implant/POP less effective with enzyme inducers — DMPA or IUD preferred" : "") + ".");
      L.push("Copper IUD: suitable for most (insert within 48 h or after 4 weeks postpartum); LNG-IUS where available.");
      L.push("Condoms for STI/HIV protection with any method.");
      U.$(".out", el).innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); go();
  },

  puqe(el, U) {
    const s5 = (k, t, o) => sel(k, t, o.map((l, i) => [String(i + 1), `${l} (${i + 1})`]));
    el.innerHTML = `<h4>Nausea and vomiting of pregnancy: PUQE-24 score</h4><div class="row">${s5("n", "Hours of nausea in 24 h", ["None", "1 or less", "2–3", "4–6", "Over 6"])}${s5("v", "Vomiting episodes in 24 h", ["None", "1–2", "3–4", "5–6", "7+"])}${s5("r", "Retching episodes in 24 h", ["None", "1–2", "3–4", "5–6", "7+"])}${sel("k", "Ketonuria 2+, weight loss over 5%, unable to keep fluids, or electrolyte disturbance", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const v = k => +U.$(`[data-k=${k}]`, el).value, k = U.$("[data-k=k]", el).value === "y";
      const s = v("n") + v("v") + v("r");
      const band = s <= 6 ? "Mild" : s <= 12 ? "Moderate" : "Severe";
      const hg = k || s >= 13;
      U.$(".out", el).innerHTML = `<p style="margin:0">PUQE score <b>${s}</b> — ${band}.${hg ? " <b>Hyperemesis gravidarum likely</b> (admit/ambulatory IV care)." : ""}</p><ul style="margin:6px 0 0;padding-left:18px"><li>First line: <b>promethazine 25 mg</b> 8-hourly, or chlorpromazine/prochlorperazine; doxylamine–pyridoxine where available.</li><li>Second line: <b>ondansetron 4–8 mg</b> 8-hourly (small orofacial cleft signal in first trimester — counsel) or <b>metoclopramide 10 mg</b> 8-hourly (max 5 days, dystonia).</li>${hg ? "<li><b>IV 0.9% saline (or Hartmann's) with KCl</b> guided by electrolytes — <b>not dextrose alone</b>; <b>thiamine 100 mg</b> daily (Wernicke risk); enoxaparin VTE prophylaxis while admitted; PPI if reflux.</li><li>Refractory: hydrocortisone 100 mg IV twice daily then prednisolone taper (specialist).</li>" : "<li>Small frequent dry meals, ginger, fluids; review if worse.</li>"}<li>Exclude other causes: UTI, molar pregnancy/twins (scan), thyrotoxicosis, hepatitis, gastroenteritis.</li></ul>`;
    };
    el.addEventListener("input", go); go();
  }
  });
})();
