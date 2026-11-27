/* Batch U calculators.
   Oedema: clinical approach. Nutrition: NICE CG32 refeeding criteria, ESPEN. Apnoea: WHO 2022 caffeine. Neonatal shock: rule-of-6 infusions.
   CPAP: WHO/neonatal bubble CPAP practice. Post-ROSC: AHA 2020/2025 paediatric post-arrest care. Ottawa ankle/knee rules (Stiell). Canadian C-spine rule (Stiell 2001). */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  oedemaapp(el, U) {
    el.innerHTML = `<h4>Oedema: where to look</h4><div class="row">${sel("s", "Distribution", [["b", "Both legs / generalised"], ["u", "One leg / one limb"], ["f", "Face/lips/tongue (sudden)"]])}</div><div class="checks" style="margin-top:8px">${chk("jvp", "Raised JVP, crackles, orthopnoea")}${chk("pro", "Urine protein 3+ / frothy urine")}${chk("liv", "Jaundice, ascites, spider naevi, alcohol")}${chk("drug", "Amlodipine/nifedipine, NSAIDs, steroids, pioglitazone")}${chk("thy", "Fatigue, cold intolerance, dry skin (myxoedema)")}${chk("mal", "Poor diet, malnutrition, chronic diarrhoea")}${chk("preg", "Pregnant (over 20 weeks)")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$("[data-k=s]", el).value, c = k => U.$(`[data-k=${k}]`, el).checked, L = [];
      if (s === "u") L.push("<b>One leg:</b> DVT (Wells score, ultrasound), cellulitis, ruptured Baker's cyst, venous insufficiency, lymphatic obstruction (filariasis, tumour, after surgery), compartment syndrome after trauma.");
      else if (s === "f") L.push("<b>Facial/lip swelling:</b> angioedema — stridor/hypotension → adrenaline IM; ACE inhibitor angioedema (stop drug); nephrotic syndrome in children (periorbital, gradual).");
      else {
        if (c("jvp")) L.push("<b>Heart failure</b> (or fluid overload/renal failure): echo, BNP, ECG, creatinine; loop diuretic.");
        if (c("pro")) L.push("<b>Nephrotic syndrome</b>: UPCR, albumin, lipids (glomerular chapter).");
        if (c("liv")) L.push("<b>Cirrhosis</b>: LFT, albumin, INR, ultrasound; spironolactone ± furosemide, salt restriction.");
        if (c("drug")) L.push("<b>Drug-induced</b>: calcium-channel blocker oedema does not respond to diuretics — reduce/switch.");
        if (c("thy")) L.push("<b>Hypothyroidism</b>: TSH.");
        if (c("mal")) L.push("<b>Low albumin from malnutrition/protein-losing enteropathy</b> (kwashiorkor in children).");
        if (c("preg")) L.push("<b>Pregnancy</b>: check BP and urine protein — pre-eclampsia.");
        if (L.length === 0) L.push("Bilateral leg oedema without clues: venous insufficiency, obesity, prolonged sitting, idiopathic — still dip urine, check creatinine, albumin, LFT, TSH.");
      }
      L.push("<b>Always:</b> dipstick urine, BP, weight; creatinine, albumin, LFT; ECG.");
      U.$(".out", el).innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); go();
  },

  nutricalc(el, U) {
    el.innerHTML = `<h4>Nutrition support: requirements and refeeding risk (adults)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 45"></label><label>Height (cm)<input type="number" data-k="ht" placeholder="e.g. 160"></label>${sel("gut", "Gut function", [["y", "Working (can swallow or tube feed)"], ["n", "Not usable (obstruction, ileus, fistula, short bowel)"]])}</div><div class="checks" style="margin-top:8px">${chk("w15", "Weight loss over 15% in 3–6 months")}${chk("nil10", "Little or no intake over 10 days")}${chk("lowel", "Low K, PO₄ or Mg before feeding")}${chk("alc", "Alcohol misuse, insulin, chemotherapy, antacids, diuretics")}</div><div class="out" aria-live="polite">Enter weight and height.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), h = U.num(g("ht")) / 100, c = k => g(k).checked, out = U.$(".out", el);
      if (!(w > 0) || !(h > 0)) { out.textContent = "Enter weight and height."; return; }
      const bmi = w / (h * h);
      const major = (bmi < 16) + c("w15") + c("nil10") + c("lowel");
      const minor = (bmi < 18.5) + c("alc");
      const high = major >= 1 || minor >= 2, extreme = bmi < 14 || (c("nil10") && bmi < 16);
      const start = extreme ? 5 : high ? 10 : 20;
      out.innerHTML = `<p style="margin:0">BMI ${r1(bmi)}. Target energy <b>${Math.round(25 * w)}–${Math.round(30 * w)} kcal/day</b> (25–30 kcal/kg), protein <b>${r1(1.2 * w)}–${r1(1.5 * w)} g/day</b>, fluid ~${Math.round(30 * w)} mL/day.</p><p style="margin:6px 0 0">${high ? `<b>High refeeding risk${extreme ? " (extreme)" : ""}:</b> start at <b>${start} kcal/kg/day (${Math.round(start * w)} kcal)</b>, increase over 4–7 days; <b>thiamine 200–300 mg/day</b> + B-complex before and for 10 days; check and replace K, PO₄, Mg daily for the first week.` : "Low refeeding risk: start at about 50% of target, reach target in 2–3 days; thiamine if any doubt."}</p><p style="margin:6px 0 0">Route: ${g("gut").value === "y" ? "<b>enteral</b> — oral supplements or NG feeding (bolus or continuous); PEG if long term." : "<b>parenteral</b> — central line (or peripheral PN short term), amino acids 10% + dextrose + lipid 20% with electrolytes, vitamins, trace elements; strict asepsis; switch to enteral as soon as possible."}</p>`;
    });
  },




  postrosc(el, U) {
    el.innerHTML = `<h4>Child after cardiac arrest (ROSC): targets</h4><div class="row"><label>Age (years)<input type="number" step="any" data-k="age" placeholder="e.g. 3"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 14"></label></div><div class="out" aria-live="polite">Enter age and weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), a = g("age"), w = g("wt"), out = U.$(".out", el);
      if (!(a >= 0) || !(w > 0) || U.$("[data-k=age]", el).value === "") { out.textContent = "Enter age and weight."; return; }
      const sbp = a < 1 ? 70 : a <= 10 ? 70 + 2 * Math.floor(a) : 90;
      const maint = w <= 10 ? 4 * w : w <= 20 ? 40 + 2 * (w - 10) : 60 + (w - 20);
      out.innerHTML = `<ul style="margin:0;padding-left:18px"><li><b>Oxygen:</b> SpO₂ 94–98% (ERC 2025; avoid hyperoxia and hypoxia).</li><li><b>Ventilation:</b> normal PaCO₂ 35–45 (avoid hyperventilation).</li><li><b>BP:</b> systolic above <b>${sbp} mmHg</b> (5th centile) — fluids 10–20 mL/kg (${Math.round(10 * w)}–${Math.round(20 * w)} mL) and adrenaline/noradrenaline infusion as needed; echo.</li><li><b>Temperature:</b> prevent fever (keep under 37.5 °C) for at least 72 h; avoid shivering; consider 32–34 °C only in PICU.</li><li><b>Glucose</b> 4–10 mmol/L; electrolytes, calcium; <b>seizures</b> — treat (EEG if available).</li><li><b>Fluids</b>: about ${Math.round(maint * 0.7)}–${Math.round(maint)} mL/h (restricted to 70–100% maintenance once perfused).</li><li>Find the cause (4 Hs, 4 Ts), 12-lead ECG, chest X-ray, gas, lactate; PICU transfer; don't prognosticate early (wait 72 h).</li></ul>`;
    });
  },

  ottawa(el, U) {
    el.innerHTML = `<h4>Ottawa ankle and foot rules</h4><p style="margin:4px 0 8px">X-ray needed if pain in the malleolar or midfoot zone <b>and</b> any of:</p><div class="checks">${chk("lm", "Bone tenderness at posterior edge/tip of lateral malleolus (distal 6 cm)")}${chk("mm", "Bone tenderness at posterior edge/tip of medial malleolus (distal 6 cm)")}${chk("b5", "Bone tenderness at base of 5th metatarsal")}${chk("nav", "Bone tenderness at the navicular")}${chk("wb", "Unable to bear weight for 4 steps both immediately and in the department")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked;
      const ank = c("lm") || c("mm") || c("wb"), ft = c("b5") || c("nav") || c("wb");
      U.$(".out", el).innerHTML = `<p style="margin:0">${ank || ft ? `<b>X-ray ${[ank ? "ankle" : "", ft ? "foot" : ""].filter(Boolean).join(" and ")}</b>.` : "<b>No X-ray needed</b> (rules ~98% sensitive for fracture): treat as a sprain — PRICE/POLICE, analgesia, early mobilisation, review if not improving in 5–7 days."}</p>`;
    };
    el.addEventListener("input", go); go();
  },

  cspine(el, U) {
    el.innerHTML = `<h4>Neck injury: Canadian C-spine rule (alert, stable adults)</h4><p style="margin:4px 0 4px"><b>1. Any high-risk factor → image</b></p><div class="checks">${chk("age", "Age 65 or over")}${chk("mech", "Dangerous mechanism (fall from 1 m/5 stairs, axial load, high-speed/rollover/ejection crash, motorised recreational vehicle, bicycle collision)")}${chk("par", "Paraesthesia in the limbs")}</div><p style="margin:8px 0 4px"><b>2. Any low-risk factor allowing range-of-motion test?</b></p><div class="checks">${chk("rear", "Simple rear-end crash")}${chk("sit", "Sitting position in the department")}${chk("amb", "Ambulatory at any time")}${chk("del", "Delayed onset of neck pain")}${chk("mid", "No midline cervical tenderness")}</div><p style="margin:8px 0 4px"><b>3.</b></p><div class="checks">${chk("rot", "Able to actively rotate neck 45° left and right")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked;
      let t;
      if (c("age") || c("mech") || c("par")) t = "<b>Imaging required</b> (CT cervical spine preferred; X-ray 3 views if CT unavailable). Keep spinal precautions.";
      else if (!["rear", "sit", "amb", "del", "mid"].some(c)) t = "<b>No low-risk factor — imaging required.</b>";
      else if (!c("rot")) t = "<b>Cannot rotate 45° — imaging required.</b>";
      else t = "<b>No imaging needed</b> — clear the cervical spine clinically; analgesia, early movement.";
      U.$(".out", el).innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Not valid in GCS under 15, unstable vital signs, age under 16, known spine disease, or neurological deficit — image all of these.</p>`;
    };
    el.addEventListener("input", go); go();
  }
  });
})();
