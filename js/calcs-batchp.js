/* Batch P calculators.
   Febrile infant: AAP 2021 (Pantell). Intussusception: Bhutan STG 12.4.4. HFMD: WHO WPRO 2011 staging. Rickets: Global consensus 2016 (Munns).
   CHD screening: AAP/AHA pulse oximetry algorithm (Kemper 2011, updated 2020). Thalassaemia: TIF 2021. RDS: Silverman–Andersen 1956. Osteoporosis: NOGG 2022. */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  febinfant(el, U) {
    el.innerHTML = `<h4>Febrile infant 8–60 days (AAP 2021)</h4><div class="row"><label>Age (days)<input type="number" data-k="age" placeholder="e.g. 25"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="for doses"></label>${sel("ill", "Appearance", [["well", "Well-appearing, term"], ["ill", "Ill-appearing / preterm / under 8 days"]])}${sel("ua", "Urinalysis", [["neg", "Negative"], ["pos", "Positive (leucocytes/nitrite)"], ["na", "Not done yet"]])}${sel("im", "Inflammatory markers (PCT over 0.5, CRP over 20, ANC over 4000–5200, temp over 38.5)", [["norm", "All normal"], ["abn", "Any abnormal"], ["na", "Not available"]])}</div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), age = U.num(g("age")), w = U.num(g("wt")), ill = g("ill").value === "ill", ua = g("ua").value, im = g("im").value, out = U.$(".out", el);
      if (!(age > 0)) { out.textContent = "Enter age."; return; }
      const ab = w > 0 ? (age <= 28 ? `ampicillin ${Math.round(50 * w)} mg IV ${age <= 7 ? "12" : "8"}-hourly + gentamicin ${r1(5 * w)} mg daily (or cefotaxime ${Math.round(50 * w)} mg ${age <= 7 ? "12" : "8"}-hourly)` : `ceftriaxone ${Math.round(50 * w)} mg IV daily (100 mg/kg = ${Math.round(100 * w)} mg if meningitis); add ampicillin if Listeria/enterococcus concern`) : "IV antibiotics (enter weight for doses)";
      let t;
      if (ill || age < 8 || age <= 21) t = `<b>Full sepsis work-up</b>: blood culture, urinalysis + culture, <b>lumbar puncture</b>, inflammatory markers; <b>admit and start ${ab}</b>.`;
      else if (age <= 28) t = im === "abn" || im === "na" ? `Urinalysis, blood culture; <b>LP</b> (abnormal or unavailable markers); admit and start ${ab}.` : ua === "pos" ? `UTI likely: blood culture, consider LP (22–28 days); admit, ${ab}.` : "All reassuring: LP optional; may observe in hospital without antibiotics, or home only with reliable 24-h review (difficult in remote Bhutan — admission preferred).";
      else t = im === "abn" || im === "na" ? `Blood culture; consider LP; ${ua === "pos" ? "treat UTI and " : ""}start ${ab} (admit if LP not done).` : ua === "pos" ? "UTI with normal markers: LP not required; oral cefixime 8 mg/kg/day or IV/IM ceftriaxone to start; follow up in 24 h." : "Low risk: no LP, no antibiotics; review in 24–36 h (admit if follow-up uncertain).";
      out.innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Herpes simplex risk (maternal lesions, seizures, vesicles, raised ALT, CSF pleocytosis): add aciclovir 20 mg/kg 8-hourly. Malaria test if in a risk area.</p>`;
    });
  },

  intussplan(el, U) {
    el.innerHTML = `<h4>Suspected intussusception / obstruction in a child</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 9"></label>${sel("sh", "Shock / peritonitis / perforation", [["n", "No"], ["y", "Yes"]])}<label>Hours since onset<input type="number" data-k="h" placeholder="e.g. 18"></label></div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), sh = g("sh").value === "y", h = U.num(g("h")), out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      const maint = w <= 10 ? 100 * w : w <= 20 ? 1000 + 50 * (w - 10) : 1500 + 20 * (w - 20);
      out.innerHTML = `<ul style="margin:0;padding-left:18px"><li>Nil by mouth, <b>NG tube</b> on free drainage.</li><li>${sh ? `<b>Shock:</b> 0.9% saline ${Math.round(20 * w)} mL bolus (20 mL/kg), repeat as needed; ` : ""}maintenance <b>${Math.round(maint / 24)} mL/h</b> (0.9% saline + 5% dextrose) plus NG losses.</li><li><b>Ampicillin ${Math.round(25 * w)} mg IV 6-hourly + gentamicin ${r1(5 * w)} mg IV daily</b> (STG)${sh ? " + metronidazole " + r1(7.5 * w) + " mg 8-hourly if perforation" : ""}.</li><li>Ultrasound (target sign). ${sh || h > 48 ? "<b>Surgery</b> — peritonitis, perforation or shock contraindicate enema reduction." : "If stable without peritonitis: air or saline enema reduction under ultrasound/fluoroscopy where available (JDWNRH), surgeon on standby; otherwise operative reduction."}</li><li>Refer urgently with an escort (STG).</li></ul>`;
    });
  },

  hfmdstage(el, U) {
    el.innerHTML = `<h4>Hand, foot and mouth disease: stage (WHO WPRO)</h4><div class="checks">${chk("a", "Fever 39 °C+ or fever over 3 days")}${chk("b", "Lethargy, recurrent vomiting, irritability")}${chk("c", "Myoclonic jerks, ataxia, wandering eyes, limb weakness")}${chk("d", "Cold sweats, mottled skin, tachycardia, fast breathing, high BP or glucose")}${chk("e", "Shock, pulmonary oedema, coma, respiratory failure")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked;
      const s = c("e") ? 4 : c("d") ? 3 : c("c") || c("b") ? 2 : 1;
      const T = { 1: "<b>Stage 1 — uncomplicated HFMD:</b> home care, paracetamol, fluids, soft cold food; review in 24–48 h if fever high or over 3 days; hand washing, keep home.", 2: "<b>Stage 2 — CNS involvement:</b> admit, close observation (vitals hourly), fluids at maintenance, glucose; IVIG may be considered (specialist); refer.", 3: "<b>Stage 3 — autonomic dysregulation:</b> HDU/PICU — high risk of sudden cardiopulmonary failure; careful fluids, milrinone/inotropes and ventilation by specialists; urgent referral.", 4: "<b>Stage 4 — cardiopulmonary failure:</b> resuscitation, ventilation, inotropes; ICU." };
      U.$(".out", el).innerHTML = `<p style="margin:0">${T[s]}</p><p class="warn" style="margin:8px 0 0">Enterovirus 71 causes the severe stages; children under 3 are at highest risk.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  ricketsdose(el, U) {
    el.innerHTML = `<h4>Nutritional rickets: vitamin D and calcium (Global consensus 2016)</h4><div class="row"><label>Age (months)<input type="number" data-k="age" placeholder="e.g. 20"></label>${sel("m", "Regimen", [["d", "Daily"], ["s", "Single large dose (stoss) — adherence concerns"]])}${sel("t", "Tetany / seizures / very low calcium", [["n", "No"], ["y", "Yes"]])}<label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="for IV calcium"></label></div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), a = U.num(g("age")), m = g("m").value, tet = g("t").value === "y", w = U.num(g("wt")), out = U.$(".out", el);
      if (!(a >= 0) || g("age").value === "") { out.textContent = "Enter age."; return; }
      let d, s;
      if (a < 3) { d = "2000 IU daily"; s = "not recommended under 3 months"; }
      else if (a < 12) { d = "2000 IU daily"; s = "50,000 IU once"; }
      else if (a < 144) { d = "3000–6000 IU daily"; s = "150,000 IU once"; }
      else { d = "6000 IU daily"; s = "300,000 IU once"; }
      out.innerHTML = `<p style="margin:0"><b>Vitamin D3 ${m === "d" || a < 3 ? d + " for at least 12 weeks" : s}</b>, then maintenance 400 IU/day (infants) or 600 IU/day; <b>plus calcium 500 mg/day</b> (diet or supplement).</p>${tet ? `<p style="margin:6px 0 0"><b>Symptomatic hypocalcaemia:</b> 10% calcium gluconate ${w > 0 ? r1(0.5 * w) + " mL" : "0.5 mL/kg"} (max 20 mL) IV over 10 min with ECG, then oral calcium 50–75 mg/kg/day elemental.</p>` : ""}<p style="margin:6px 0 0">Check ALP, calcium, phosphate before and at 12 weeks; X-ray healing at 3 months. No response: think renal, hypophosphataemic or vitamin D-dependent rickets — refer.</p><p class="warn" style="margin:8px 0 0">High-dose cholecalciferol is not on NEML 2025 — check local supply; combination calcium/D3 tablets contain only 250–600 IU.</p>`;
    });
  },

  pulseoxscreen(el, U) {
    el.innerHTML = `<h4>Newborn pulse oximetry screen for critical CHD (after 24 h)</h4><div class="row"><label>Right hand SpO₂ (%)<input type="number" data-k="h" placeholder="e.g. 96"></label><label>Foot SpO₂ (%)<input type="number" data-k="f" placeholder="e.g. 93"></label>${sel("n", "Attempt", [["1", "First"], ["2", "Second (1 h later)"], ["3", "Third"]])}</div><div class="out" aria-live="polite">Enter both readings.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), h = g("h"), f = g("f"), n = U.$("[data-k=n]", el).value, out = U.$(".out", el);
      if (!(h > 0) || !(f > 0)) { out.textContent = "Enter both readings."; return; }
      const diff = Math.abs(h - f);
      let t;
      if (h < 90 || f < 90) t = "<b>FAIL (under 90%)</b>: urgent paediatric review, echo, look for sepsis/lung disease; keep warm; consider prostaglandin (specialist) if duct-dependent lesion suspected.";
      else if (h >= 95 || f >= 95) t = diff <= 3 ? "<b>PASS</b> (95%+ in hand or foot and difference 3% or less). A pass does not exclude all heart disease — examine." : n === "3" ? "<b>FAIL</b> (difference over 3% on third attempt): echo and paediatric review." : "Difference over 3%: <b>repeat in 1 hour</b>.";
      else t = n === "3" ? "<b>FAIL</b> (90–94% on third attempt): echo and paediatric review." : "90–94% in both: <b>repeat in 1 hour</b>.";
      out.innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">At high altitude (Thimphu, Bumthang), baseline newborn SpO₂ is lower and false positives are more common — interpret with clinical findings.</p>`;
    });
  },

  thaltransfusion(el, U) {
    el.innerHTML = `<h4>Thalassaemia: transfusion volume and chelation trigger (TIF 2021)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 20"></label><label>Pre-transfusion Hb (g/dL)<input type="number" step="any" data-k="hb" placeholder="e.g. 8.5"></label><label>Target post Hb (g/dL)<input type="number" step="any" data-k="tg" placeholder="13–14"></label><label>Ferritin (µg/L)<input type="number" data-k="fe" placeholder="optional"></label><label>Transfusions so far<input type="number" data-k="n" placeholder="optional"></label></div><div class="out" aria-live="polite">Enter weight and Hb.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), w = g("wt"), hb = g("hb"), tg = g("tg") || 13.5, fe = g("fe"), n = g("n"), out = U.$(".out", el);
      if (!(w > 0) || !(hb > 0)) { out.textContent = "Enter weight and Hb."; return; }
      const vol = Math.max(0, Math.round((tg - hb) * w * 4)), cap = Math.round(20 * w);
      out.innerHTML = `<p style="margin:0">Packed red cells ≈ <b>${Math.min(vol, cap)} mL</b> ((target − Hb) × weight × 4 mL; Hct ~60%)${vol > cap ? ` — capped at 20 mL/kg (${cap} mL); split over 2 days` : ""}, over 3–4 h. Aim pre-transfusion Hb 9.5–10.5 g/dL, every 2–5 weeks.</p><p style="margin:6px 0 0">${(fe > 1000) || (n >= 10) ? "<b>Start iron chelation</b> (ferritin over 1000 or 10–20 transfusions) — specialist (desferrioxamine/deferasirox not on NEML)." : "Chelation when ferritin exceeds 1000 µg/L or after 10–20 transfusions."}</p><p class="warn" style="margin:8px 0 0">Leucodepleted, matched blood; hepatitis B vaccine; folic acid; watch for heart failure in very anaemic children (give slowly, smaller volumes, furosemide).</p>`;
    });
  },


  osteorisk(el, U) {
    el.innerHTML = `<h4>Osteoporosis: who to treat (NOGG 2022)</h4><div class="checks">${chk("a", "Hip or vertebral fragility fracture")}${chk("b", "Other fragility fracture (wrist, humerus, pelvis) age 50+")}${chk("c", "DXA T-score −2.5 or lower")}${chk("d", "Prednisolone 7.5 mg/day+ for 3 months+ (age 70+ or previous fracture)")}${chk("e", "Postmenopausal woman with multiple risk factors (FRAX high where available)")}</div><div class="row" style="margin-top:8px"><label>eGFR<input type="number" data-k="egfr" placeholder="optional"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked, eg = U.num(U.$("[data-k=egfr]", el));
      const n = ["a", "b", "c", "d", "e"].filter(c).length;
      let t = n ? `<b>Treat:</b> ${eg > 0 && eg < 35 ? "eGFR under 35 — avoid alendronate; specialist (denosumab)" : "<b>alendronate 70 mg once weekly</b> (empty stomach, full glass of water, upright 30 min)"} + calcium/vitamin D (1000–1200 mg calcium, 800 IU D daily) + falls prevention.` : "No treatment threshold met: lifestyle (exercise, calcium-rich diet, sunlight, no smoking, limit alcohol), falls prevention; reassess with FRAX/DXA if risk factors.";
      U.$(".out", el).innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Check calcium, vitamin D, creatinine before bisphosphonates; dental check. Exclude myeloma/metastasis in vertebral fractures with red flags.</p>`;
    };
    el.addEventListener("input", go); go();
  }
  });
})();
