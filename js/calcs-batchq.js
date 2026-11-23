/* Batch Q calculators.
   FTT/SAM: WHO 2013/2023 malnutrition guidelines. Kawasaki: AHA 2017 z-score classes; Kobayashi 2006 score. Infantile spasms: UKISS 2004, ICISS 2017.
   PFO: RoPE score (Kent 2013). PDA: European/ AAP neonatal practice. Glomerular: KDIGO 2021. ARDS: ARDSNet, ATS 2024. PARDS: PALICC-2 2023.
   Congenital TB: WHO 2022 consolidated child TB guidance. Down syndrome: AAP 2022 health supervision. Cleft: ACPA parameters. */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  fttclassify(el, U) {
    el.innerHTML = `<h4>Growth faltering / malnutrition: classify and act (WHO)</h4><div class="row"><label>Age (months)<input type="number" data-k="age" placeholder="e.g. 14"></label><label>MUAC (mm, 6–59 months)<input type="number" data-k="muac" placeholder="e.g. 118"></label>${sel("whz", "Weight-for-length/height z-score", [["n", "−2 or above"], ["m", "−3 to −2"], ["s", "Below −3"], ["u", "Not measured"]])}${sel("haz", "Length/height-for-age z-score", [["n", "−2 or above"], ["l", "Below −2 (stunted)"], ["u", "Not measured"]])}${sel("oed", "Bilateral pitting oedema", [["0", "None"], ["1", "+ / ++"], ["3", "+++ (face/whole body)"]])}${sel("comp", "Medical complication / failed appetite test / under 6 months with poor feeding", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), a = U.num(g("age")), mu = U.num(g("muac")), whz = g("whz").value, haz = g("haz").value, oed = g("oed").value, comp = g("comp").value === "y", out = U.$(".out", el);
      if (!(a >= 0) || g("age").value === "") { out.textContent = "Enter age."; return; }
      const sam = whz === "s" || (a >= 6 && mu > 0 && mu < 115) || oed !== "0";
      const mam = !sam && (whz === "m" || (a >= 6 && mu >= 115 && mu < 125));
      let t;
      if (sam) t = comp || oed === "3" || a < 6 ? "<b>Complicated SAM</b> → inpatient care (SAM chapter: 10 steps, F-75, antibiotics, warmth, glucose, careful fluids)." : "<b>Uncomplicated SAM</b> → outpatient therapeutic feeding (RUTF where available) + amoxicillin, weekly review; admit if appetite fails or complications develop.";
      else if (mam) t = "<b>Moderate acute malnutrition</b> → nutrition counselling, supplementary food, treat infections, follow up every 2 weeks; investigate if no gain.";
      else t = "No acute malnutrition by these measures.";
      const ftt = "<b>Growth-faltering work-up:</b> plot on WHO charts (crossing 2 centile lines down); detailed feeding history (breastfeeding, complementary food, responsive feeding, food insecurity); look for infection (TB, HIV, UTI, worms, diarrhoea), cow's milk/coeliac, heart/kidney disease, thyroid, neglect. Tests: FBC, urine, stool, HIV, TB screen, TSH, creatinine/electrolytes — targeted, not blanket.";
      out.innerHTML = `<p style="margin:0">${t}</p>${haz === "l" ? "<p style='margin:6px 0 0'><b>Stunted</b> (chronic undernutrition): long-term nutrition, WASH, infection control, check for endocrine/genetic causes if severe or disproportionate.</p>" : ""}<p style="margin:6px 0 0">${ftt}</p>`;
    });
  },

  kdzscore(el, U) {
    el.innerHTML = `<h4>Kawasaki: coronary z-score class and IVIG-resistance risk</h4><div class="row"><label>Largest coronary z-score<input type="number" step="any" data-k="z" placeholder="e.g. 3.1"></label><label>Internal diameter (mm, optional)<input type="number" step="any" data-k="mm" placeholder="e.g. 4"></label></div><p style="margin:8px 0 4px"><b>Kobayashi score</b> (Japanese children; use cautiously elsewhere):</p><div class="checks">${chk("na", "Sodium 133 mmol/L or less (2)")}${chk("d", "Treatment on illness day 4 or earlier (2)")}${chk("ast", "AST 100 U/L or more (2)")}${chk("ne", "Neutrophils 80% or more (2)")}${chk("crp", "CRP 10 mg/dL (100 mg/L) or more (1)")}${chk("age", "Age 12 months or less (1)")}${chk("plt", "Platelets 300,000/µL or less (1)")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const z = U.num(U.$("[data-k=z]", el)), mm = U.num(U.$("[data-k=mm]", el)), c = k => U.$(`[data-k=${k}]`, el).checked;
      const kob = (c("na") ? 2 : 0) + (c("d") ? 2 : 0) + (c("ast") ? 2 : 0) + (c("ne") ? 2 : 0) + (c("crp") ? 1 : 0) + (c("age") ? 1 : 0) + (c("plt") ? 1 : 0);
      let cls = "Enter the z-score for coronary classification.";
      if (z > 0 || z === 0 || z < 0) {
        if (!isNaN(z) && U.$("[data-k=z]", el).value !== "") {
          if (z >= 10 || mm >= 8) cls = "<b>Large/giant aneurysm</b>: aspirin + anticoagulation (warfarin INR 2–3 or LMWH) long term, beta-blocker considered; echo at 1–2 weeks, monthly to 3 months, then 3-monthly in year 1; cardiology, stress imaging, lifelong follow-up.";
          else if (z >= 5) cls = "<b>Medium aneurysm</b> (z 5 to under 10, under 8 mm): low-dose aspirin long term ± clopidogrel; echo at 1–2 and 4–6 weeks, then 3-, 6-, 12-monthly; cardiology.";
          else if (z >= 2.5) cls = "<b>Small aneurysm</b> (z 2.5 to under 5): low-dose aspirin until regression; echo at 1–2 and 4–6 weeks, 12 months, then 1–3-yearly.";
          else if (z >= 2) cls = "<b>Dilation only</b> (z 2 to under 2.5): aspirin 4–6 weeks; repeat echo at 1–2 and 4–6 weeks; discharge from cardiology at 12 months if normal.";
          else cls = "<b>No coronary involvement</b> (z under 2): low-dose aspirin 4–6 weeks; echo at 1–2 and 4–6 weeks; discharge at 12 months if normal.";
        }
      }
      U.$(".out", el).innerHTML = `<p style="margin:0">${cls}</p><p style="margin:6px 0 0">Kobayashi score <b>${kob}</b>: ${kob >= 4 ? "<b>high risk of IVIG resistance</b> — consider adding prednisolone 2 mg/kg/day (IV methylprednisolone 0.8 mg/kg 12-hourly initially) with IVIG, tapered over 15 days after CRP normalises (RAISE; AHA 2017)." : "lower risk; standard IVIG + aspirin."}</p>`;
    };
    el.addEventListener("input", go); go();
  },

  infspasm(el, U) {
    el.innerHTML = `<h4>Infantile spasms: first treatment</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 7"></label>${sel("tsc", "Tuberous sclerosis (ash-leaf macules, cardiac rhabdomyoma, MRI tubers)", [["n", "No / unknown"], ["y", "Yes"]])}${sel("vg", "Vigabatrin available", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), tsc = g("tsc").value === "y", vg = g("vg").value === "y", out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      const vgb = `vigabatrin ${Math.round(50 * w)} mg/day in 2 doses, increasing over 3–7 days to <b>${Math.round(100 * w)}–${Math.round(Math.min(150 * w, 3000))} mg/day</b>`;
      const pred = "<b>prednisolone 10 mg four times daily (40 mg/day) for 2 weeks</b>; if spasms persist on day 7, increase to <b>20 mg three times daily (60 mg/day)</b>; then taper over 15 days (UKISS)";
      let t = tsc ? (vg ? `<b>Tuberous sclerosis:</b> ${vgb} first line.` : `<b>Tuberous sclerosis:</b> vigabatrin preferred — obtain urgently via specialist; meanwhile ${pred}.`) : vg ? `Hormonal therapy plus vigabatrin (ICISS — better early spasm cessation): ${pred} + ${vgb}.` : `${pred}.`;
      out.innerHTML = `<p style="margin:0">${t}</p><ul style="margin:6px 0 0;padding-left:18px"><li>Start within days of diagnosis — delay worsens developmental outcome.</li><li>Before steroids: BP, glucose, urine, screen for TB exposure; give PPI/H2 cover; avoid live vaccines during high-dose steroids.</li><li>Response: spasms stop and hypsarrhythmia resolves on EEG at 2 weeks; if not, switch/add (vigabatrin ↔ hormonal), then ketogenic diet, topiramate, valproate (specialist).</li><li>Find the cause: MRI, metabolic screen, genetics, Wood's lamp for TSC; HIE/infection history.</li></ul>`;
    });
  },

  ropescore(el, U) {
    el.innerHTML = `<h4>PFO and cryptogenic stroke: RoPE score</h4><div class="row"><label>Age (years)<input type="number" data-k="age" placeholder="e.g. 38"></label></div><div class="checks" style="margin-top:8px">${chk("htn", "No history of hypertension")}${chk("dm", "No history of diabetes")}${chk("st", "No previous stroke or TIA")}${chk("sm", "Non-smoker")}${chk("cx", "Cortical infarct on imaging")}${chk("hr", "High-risk PFO feature: atrial septal aneurysm or large shunt")}</div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const a = U.num(U.$("[data-k=age]", el)), c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      if (!(a > 0)) { out.textContent = "Enter age."; return; }
      const ap = a < 30 ? 5 : a < 40 ? 4 : a < 50 ? 3 : a < 60 ? 2 : a < 70 ? 1 : 0;
      const s = ap + ["htn", "dm", "st", "sm", "cx"].filter(c).length;
      const pafl = s >= 9 ? "about 88%" : ({ 8: "about 84%", 7: "about 72%", 6: "about 62%", 5: "about 34%", 4: "about 38%" })[s] || "very low (about 0%)";
      const closure = a >= 18 && a <= 60 && (s >= 7 || c("hr"));
      out.innerHTML = `<p style="margin:0">RoPE score <b>${s}</b>/10 — probability the stroke is PFO-related ${pafl}.</p><p style="margin:6px 0 0">${closure ? "<b>PFO closure plus antiplatelet therapy</b> is recommended after a thorough work-up excludes other causes (AAN 2020, SCAI 2022), age 18–60." : a > 60 ? "Over 60: closure benefit unproven — antiplatelet therapy and risk-factor control." : "Lower probability: antiplatelet therapy; closure can be discussed if high-risk anatomy (atrial septal aneurysm, large shunt)."}</p><p class="warn" style="margin:8px 0 0">Exclude AF (prolonged monitoring), large-artery disease, small-vessel disease, cardiac thrombus and thrombophilia before attributing stroke to PFO.</p>`;
    });
  },

  pdatx(el, U) {
    el.innerHTML = `<h4>Preterm PDA: medical closure</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 1.1"></label><label>Postnatal age (days)<input type="number" data-k="d" placeholder="e.g. 5"></label></div><div class="checks" style="margin-top:8px">${chk("hs", "Haemodynamically significant (duct 1.5 mm+, LA:Ao 1.5+, reversed diastolic flow, need for ventilation, poor perfusion)")}${chk("ci", "Contraindication to NSAID: AKI/oliguria, NEC, active bleeding, platelets under 50,000")}</div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), hs = g("hs").checked, ci = g("ci").checked, out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      if (!hs) { out.innerHTML = "<p style='margin:0'>Not haemodynamically significant: <b>conservative management</b> — most close spontaneously; avoid fluid overload (130–150 mL/kg/day), CPAP/PEEP support, repeat echo.</p>"; return; }
      out.innerHTML = `<ul style="margin:0;padding-left:18px"><li><b>Paracetamol ${r1(15 * w)} mg</b> (15 mg/kg) every 6 hours oral/IV for 3–7 days — preferred if NSAID contraindicated; check LFT.</li>${ci ? "" : `<li>Or <b>ibuprofen ${r1(10 * w)} mg</b> (10 mg/kg), then <b>${r1(5 * w)} mg</b> at 24 and 48 h; monitor urine output, creatinine, platelets.</li>`}<li>Echo after the course; second course if still open and significant; surgical ligation/device closure if failed and ventilator-dependent.</li></ul><p class="warn" style="margin:8px 0 0">Term infants/children: no medical closure — device closure (usually after 6–12 months) for symptomatic or audible PDA; silent tiny PDA can be observed.</p>`;
    });
  },

  glomapproach(el, U) {
    el.innerHTML = `<h4>Glomerular disease: nephritic or nephrotic?</h4><div class="row">${sel("pat", "Patient", [["c", "Child"], ["a", "Adult"]])}<label>UPCR (mg/mmol)<input type="number" data-k="upcr" placeholder="e.g. 350"></label><label>Albumin (g/L)<input type="number" data-k="alb" placeholder="e.g. 18"></label></div><div class="checks" style="margin-top:8px">${chk("hae", "Haematuria (dysmorphic RBCs / RBC casts)")}${chk("htn", "Hypertension")}${chk("cr", "Rising creatinine over days–weeks")}${chk("oed", "Generalised oedema")}${chk("sys", "Systemic features (rash, arthritis, haemoptysis, sinusitis)")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, ad = g("pat").value === "a", up = U.num(g("upcr")), alb = U.num(g("alb"));
      const neph = up >= (ad ? 300 : 200) && alb > 0 && alb < (ad ? 30 : 25);
      const nephritic = c("hae") && (c("htn") || c("cr"));
      let t = neph && nephritic ? "<b>Mixed nephritic–nephrotic</b> — biopsy needed (MPGN, lupus, IgA, post-infectious)." : neph ? "<b>Nephrotic syndrome</b>." : nephritic ? "<b>Nephritic syndrome</b>." : c("hae") ? "Isolated haematuria — urine culture, imaging, monitor; IgA nephropathy/thin membrane if persistent." : "Enter findings.";
      if (c("cr") && c("hae")) t += " <b>Rising creatinine with active sediment = possible RPGN — same-day nephrology: ANCA, anti-GBM, ANA/dsDNA, C3/C4; pulse methylprednisolone may be needed.</b>";
      const work = ad ? "Adults: biopsy for most nephrotic/nephritic presentations; HBV, HCV, HIV, syphilis, ANA, C3/C4, ANCA, anti-PLA2R (membranous), SPEP/free light chains (age 50+), glucose/HbA1c." : "Children: typical nephrotic (1–12 y, no haematuria/hypertension/low C3) → steroids without biopsy; nephritic → C3, ASO, urine, BP (PSGN), biopsy if atypical.";
      U.$(".out", el).innerHTML = `<p style="margin:0">${t}</p><p style="margin:6px 0 0">${work}</p><p style="margin:6px 0 0">Supportive: ACE inhibitor/ARB for proteinuria and BP, salt restriction, diuretics for oedema, statin (adult persistent nephrotic), anticoagulation if albumin under 20–25 g/L with membranous or high risk, vaccinations.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  ardsvent(el, U) {
    el.innerHTML = `<h4>ARDS: lung-protective ventilation (ARDSNet / ATS 2024)</h4><div class="row"><label>Height (cm)<input type="number" data-k="ht" placeholder="e.g. 165"></label>${sel("sex", "Sex", [["m", "Male"], ["f", "Female"]])}<label>PaO₂ (mmHg)<input type="number" data-k="pao2" placeholder="e.g. 70"></label><label>FiO₂ (%)<input type="number" data-k="fio2" placeholder="e.g. 60"></label><label>PEEP (cmH₂O)<input type="number" data-k="peep" placeholder="e.g. 10"></label><label>Plateau pressure<input type="number" data-k="pplat" placeholder="optional"></label></div><div class="out" aria-live="polite">Enter height.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), ht = g("ht"), m = U.$("[data-k=sex]", el).value === "m", pao2 = g("pao2"), fio2 = g("fio2"), peep = g("peep"), pp = g("pplat"), out = U.$(".out", el);
      if (!(ht > 0)) { out.textContent = "Enter height."; return; }
      const pbw = (m ? 50 : 45.5) + 0.91 * (ht - 152.4);
      let t = `<p style="margin:0">Predicted body weight <b>${r1(pbw)} kg</b> → tidal volume <b>${Math.round(6 * pbw)} mL</b> (6 mL/kg; range 4–8 = ${Math.round(4 * pbw)}–${Math.round(8 * pbw)} mL).</p>`;
      if (pao2 > 0 && fio2 > 0) { const pf = pao2 / (fio2 / 100); const sev = pf <= 100 ? "severe" : pf <= 200 ? "moderate" : pf <= 300 ? "mild" : "above ARDS threshold"; t += `<p style="margin:6px 0 0">P/F ratio <b>${Math.round(pf)}</b> — ${sev}${peep >= 5 ? "" : " (Berlin requires PEEP/CPAP 5+)"}.${pf < 150 ? " <b>Prone position 12–16 h/day</b>; higher PEEP strategy; consider neuromuscular blockade only for severe dyssynchrony; corticosteroids (ATS 2024 conditional)." : ""}</p>`; }
      if (pp > 0) { const dp = peep > 0 ? pp - peep : null; t += `<p style="margin:6px 0 0">Plateau ${pp} cmH₂O ${pp > 30 ? "<b>— too high: reduce tidal volume toward 4 mL/kg</b>" : "(target 30 or less)"}${dp !== null ? `; driving pressure ${dp} ${dp > 15 ? "<b>— over 15: reduce Vt</b>" : "(target 15 or less)"}` : ""}.</p>`; }
      out.innerHTML = t + `<p class="warn" style="margin:8px 0 0">Targets: SpO₂ 88–95%, pH 7.20+ (permissive hypercapnia), conservative fluids once shock resolved. Without a ventilator: oxygen, high-flow/CPAP/NIV trial, awake proning, early referral.</p>`;
    });
  },

  pardscalc(el, U) {
    el.innerHTML = `<h4>PARDS: oxygenation index and severity (PALICC-2)</h4><div class="row"><label>FiO₂ (%)<input type="number" data-k="fio2" placeholder="e.g. 60"></label><label>Mean airway pressure (cmH₂O)<input type="number" step="any" data-k="map" placeholder="e.g. 14"></label><label>PaO₂ (mmHg)<input type="number" data-k="pao2" placeholder="optional"></label><label>SpO₂ (%, if 97 or less)<input type="number" data-k="spo2" placeholder="e.g. 92"></label><label>Ideal weight (kg)<input type="number" step="any" data-k="wt" placeholder="for Vt"></label></div><div class="out" aria-live="polite">Enter FiO₂, mean airway pressure and PaO₂ or SpO₂.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), f = g("fio2"), map = g("map"), pao2 = g("pao2"), spo2 = g("spo2"), w = g("wt"), out = U.$(".out", el);
      if (!(f > 0) || !(map > 0) || !(pao2 > 0 || spo2 > 0)) { out.textContent = "Enter FiO₂, mean airway pressure and PaO₂ or SpO₂."; return; }
      let t;
      if (pao2 > 0) { const oi = f * map / pao2; t = `Oxygenation index <b>${r1(oi)}</b> — ${oi >= 16 ? "<b>severe PARDS</b>" : "mild/moderate PARDS"} (OI 16+ severe).`; }
      else { const osi = f * map / spo2; t = `Oxygen saturation index <b>${r1(osi)}</b> — ${osi >= 12 ? "<b>severe PARDS</b>" : "mild/moderate PARDS"} (OSI 12+ severe).${spo2 > 97 ? " (OSI valid only when SpO₂ 97% or less.)" : ""}`; }
      out.innerHTML = `<p style="margin:0">${t}</p><ul style="margin:6px 0 0;padding-left:18px">${w > 0 ? `<li>Tidal volume <b>${Math.round(4 * w)}–${Math.round(8 * w)} mL</b> (4–8 mL/kg ideal weight; lower end if poor compliance).</li>` : ""}<li>Plateau 28 cmH₂O or less (29–32 if stiff chest wall); driving pressure 15 or less; PEEP 5–15 titrated to oxygenation and haemodynamics.</li><li>SpO₂ 92–97% (88–92% acceptable in severe PARDS with PEEP 10+); pH 7.20+ permissive hypercapnia.</li><li>Severe: consider prone positioning, neuromuscular blockade for dyssynchrony; no routine steroids or HFOV as first line; ECMO referral if refractory.</li><li>Non-invasive: CPAP/NIV trial with close monitoring if mild and no contraindication; intubate if no improvement.</li></ul>`;
    });
  },

  congtb(el, U) {
    el.innerHTML = `<h4>Newborn of a mother with TB / congenital TB</h4><div class="row"><label>Infant weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 3"></label>${sel("mo", "Mother", [["act", "Active pulmonary TB diagnosed in pregnancy/after birth"], ["tr", "On treatment over 2 months, smear/culture negative"], ["mdr", "Drug-resistant TB"]])}${sel("inf", "Infant", [["well", "Well, examination normal"], ["sick", "Symptomatic (poor feeding, fever, hepatosplenomegaly, respiratory distress, lymphadenopathy) or abnormal CXR/tests"]])}</div><div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), mo = g("mo").value, sick = g("inf").value === "sick", out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      let t;
      if (sick) t = `<b>Treat as congenital/neonatal TB</b> (specialist): isoniazid ${Math.round(10 * w)} mg, rifampicin ${Math.round(15 * w)} mg, pyrazinamide ${Math.round(35 * w)} mg, ethambutol ${Math.round(20 * w)} mg daily (WHO: H 10, R 15, Z 35, E 20 mg/kg) for 2 months, then H + R for 4 months (TB meningitis/disseminated: longer, specialist). Work-up: gastric aspirates ×3 for Xpert/culture, CXR, LP, liver ultrasound, placental histology/maternal endometrial samples.`;
      else if (mo === "mdr") t = "Drug-resistant maternal TB: infant needs specialist review — preventive treatment based on the mother's resistance pattern (e.g. levofloxacin for MDR) and close follow-up.";
      else t = `<b>Exclude TB in the infant</b> (examination, CXR if any doubt), then <b>TB preventive treatment: isoniazid ${Math.round(10 * w)} mg daily for 6 months</b> (or 3 months of rifampicin + isoniazid), with pyridoxine; <b>give BCG after completing</b> TPT if not already given. Continue breastfeeding${mo === "act" ? "; mother wears a mask until non-infectious" : ""}.`;
      out.innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Congenital TB (revised Cantwell): proven TB in the infant plus lesions in the first week, primary hepatic complex/caseating granuloma, or maternal genital/placental TB — mortality is high without early treatment. Test the mother for HIV.</p>`;
    });
  },

  downcheck(el, U) {
    el.innerHTML = `<h4>Down syndrome: health checks by age (AAP 2022)</h4><div class="row"><label>Age (months)<input type="number" data-k="age" placeholder="e.g. 12"></label></div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const a = U.num(U.$("[data-k=age]", el)), out = U.$(".out", el);
      if (!(a >= 0) || U.$("[data-k=age]", el).value === "") { out.textContent = "Enter age."; return; }
      const L = [];
      if (a < 1) L.push("<b>Newborn:</b> echocardiogram (even if no murmur); FBC (transient abnormal myelopoiesis, polycythaemia); TSH (newborn screen); hearing screen; eye check for cataract; feeding assessment (hypotonia), constipation (Hirschsprung); karyotype and genetic counselling.");
      if (a >= 1 && a < 12) L.push("<b>Infancy:</b> TSH at 6 and 12 months; hearing and ear check every 6 months; eye review by 6 months; growth on Down syndrome charts; RSV risk; early intervention (physio, speech, OT); full immunisation.");
      if (a >= 12 && a < 60) L.push("<b>1–5 years:</b> TSH and Hb (iron) yearly; hearing every 6 months until normal then yearly; eyes yearly; sleep study by age 4 (obstructive sleep apnoea); coeliac screen if symptoms; dental care; neck pain/weakness → cervical spine imaging.");
      if (a >= 60 && a < 156) L.push("<b>5–13 years:</b> yearly TSH, Hb, hearing, eyes; BMI; school support; sleep symptoms; coeliac if symptoms; skin.");
      if (a >= 156) L.push("<b>Adolescence/adult:</b> yearly TSH, hearing every 3 years, eyes (keratoconus, cataract), weight, mental health, puberty/menstrual and contraception counselling, transition planning; adults — watch for early dementia, echo if not done (valve disease).");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">At every visit: neurological signs of atlanto-axial instability (neck pain, change in gait, bladder/bowel), cardiac symptoms, and development review.</p>`;
    });
  },

  cleftplan(el, U) {
    el.innerHTML = `<h4>Cleft lip and palate: care timeline</h4><div class="row"><label>Age (months)<input type="number" data-k="age" placeholder="e.g. 2"></label>${sel("t", "Type", [["l", "Cleft lip (± alveolus) only"], ["p", "Cleft palate only"], ["lp", "Cleft lip and palate"]])}</div><div class="out" aria-live="polite">Enter age.</div>`;
    el.addEventListener("input", () => {
      const a = U.num(U.$("[data-k=age]", el)), t = U.$("[data-k=t]", el).value, out = U.$(".out", el);
      if (!(a >= 0) || U.$("[data-k=age]", el).value === "") { out.textContent = "Enter age."; return; }
      const pal = t !== "l", lip = t !== "p";
      const L = [`<b>Now:</b> ${a < 3 ? "feeding is the priority — " + (pal ? "upright feeding with a squeezable/special cleft bottle or cup/spoon with expressed breast milk; breastfeeding usually not effective with palate cleft" : "breastfeeding often possible with lip cleft; support latch") + "; weigh weekly; refer to cleft team." : "continue growth monitoring and team follow-up."}`];
      if (lip) L.push(`<b>Lip repair:</b> around 3–6 months${a > 6 ? " — overdue, refer now" : ""} (rule of 10s: 10 weeks, 10 lb (4.5 kg), Hb 10 g/dL).`);
      if (pal) L.push(`<b>Palate repair:</b> 9–12 months (before speech develops; by 18 months at latest)${a > 18 ? " — overdue, refer now" : ""}.`);
      if (pal) L.push("<b>Ears:</b> hearing test and ENT review — glue ear is very common (grommets); <b>speech therapy</b> from age 2–3; velopharyngeal surgery if nasal speech.");
      if (t === "lp" || t === "l") L.push("<b>Alveolar bone graft</b> at 8–11 years; orthodontics; lip/nose revision in adolescence.");
      L.push("Look for associated syndromes (especially isolated cleft palate — Pierre Robin airway obstruction, 22q11 deletion); genetic counselling; folic acid before the next pregnancy.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    });
  }
  });
})();
