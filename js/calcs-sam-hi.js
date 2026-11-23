/* SAM and head injury calculators.
   SAM: WHO Pocket Book 2013 ch.7; WHO 2013 SAM update. GCS: Teasdale & Jennett 1974 (paediatric verbal scale for pre-verbal children).
   Canadian CT Head Rule: Stiell IG et al., Lancet 2001;357:1391–1396. PECARN: Kuppermann N et al., Lancet 2009;374:1160–1170. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  samplan(el, U) {
    el.innerHTML = `<h4>Severe acute malnutrition: feeds, fluids and drugs</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 6.5"></label>
      <label>Age (months)<input type="number" data-k="age" placeholder="e.g. 14"></label>
      <label>Oedema<select data-k="oed"><option value="0">None</option><option value="1">+ / ++ (feet, legs)</option><option value="3">+++ (whole body)</option></select></label>
      <label>Complications (not eating, danger signs, shock, hypothermia, hypoglycaemia)<select data-k="cx"><option value="n">No</option><option value="y">Yes</option></select></label>
      <label>Shock<select data-k="sh"><option value="n">No</option><option value="y">Yes (lethargic, cold hands, weak fast pulse, CRT over 3 s)</option></select></label>
      <label>Eye signs or measles<select data-k="eye"><option value="n">No</option><option value="y">Yes</option></select></label></div><div class="out" aria-live="polite">Enter weight and age.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const w = U.num(g("wt")), age = U.num(g("age")), oed = +g("oed").value, cx = g("cx").value === "y", sh = g("sh").value === "y", eye = g("eye").value === "y";
      if (!(w > 0) || !(age >= 0)) { out.textContent = "Enter weight and age."; return; }
      const r = v => Math.round(v), r5 = v => Math.round(v / 5) * 5;
      const f75day = (oed === 3 ? 100 : 130) * w;
      const vitA = age < 6 ? "50,000" : age < 12 ? "100,000" : "200,000";
      const inpatient = cx || sh || oed === 3 || age < 6;
      const lines = [];
      lines.push(`<b>Where:</b> ${inpatient ? "<b>inpatient</b> (complications, severe oedema, shock or under 6 months)" : "outpatient therapeutic care with RUTF if the appetite test is passed (eats at least one-third of a 92 g sachet in 30 minutes)"}.`);
      if (sh) lines.push(`<b>Shock:</b> ${r(15 * w)} mL (15 mL/kg) IV over 1 hour of Ringer's lactate with 5% dextrose (or half-strength Darrow's with 5% dextrose); recheck pulse and breathing every 5–10 minutes; if better, repeat 15 mL/kg then switch to ReSoMal; if not better, blood 10 mL/kg over 3 hours. <b>Stop if breathing or liver size increases.</b>`);
      else lines.push(`<b>Dehydration (no shock):</b> ReSoMal ${r(5 * w)} mL (5 mL/kg) every 30 minutes for 2 hours, then ${r(5 * w)}–${r(10 * w)} mL/hour for up to 10 hours, alternating with F-75. Never use IV fluids unless in shock.`);
      lines.push(`<b>Hypoglycaemia</b> (under 3 mmol/L): 50 mL of 10% glucose or sucrose orally/NG (or 5 mL/kg 10% dextrose IV if unconscious), then feed every 2 hours, day and night.`);
      lines.push(`<b>F-75 (stabilisation):</b> ${r5(f75day)} mL/day — <b>${r5(f75day / 12)} mL every 2 hours</b> at first, then ${r5(f75day / 8)} mL every 3 hours; NG if taking under 80%. ${oed === 3 ? "Severe oedema: 100 mL/kg/day." : ""}`);
      lines.push(`<b>Rehabilitation:</b> F-100 at the same volume for 2 days, then increase by 10 mL per feed to about ${r5(150 * w)}–${r5(220 * w)} mL/day; or RUTF about ${(w * 175 / 500).toFixed(1)} sachets (500 kcal) a day.`);
      lines.push(cx ? `<b>Antibiotics (complicated):</b> ampicillin ${r(50 * w)} mg IV/IM 6-hourly for 2 days, then amoxicillin ${r(15 * w)} mg orally 8-hourly for 5 days, <b>plus</b> gentamicin ${(7.5 * w).toFixed(1)} mg IV/IM once daily for 7 days. No improvement in 48 hours: ceftriaxone ${r(80 * w)} mg daily.` : `<b>Antibiotics (uncomplicated):</b> amoxicillin ${r(40 * w)} mg orally 12-hourly for 5 days.`);
      lines.push(`<b>Micronutrients:</b> folic acid 5 mg on day 1, then 1 mg daily; zinc, copper and potassium (in F-75/mineral mix); <b>vitamin A ${vitA} IU</b> ${eye ? "on days 1, 2 and 14 (eye signs or measles)" : "only if not given in the past month"}. <b>No iron until the child is gaining weight.</b>`);
      lines.push(`Keep warm (skin-to-skin, blankets); treat infection; measles vaccine if over 6 months and not vaccinated. Target weight gain over 10 g/kg/day in rehabilitation (${r(10 * w)} g/day).`);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${lines.map(l => `<li>${l}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Children with SAM may not show usual signs of dehydration or infection. Fluid overload kills: reassess often.</p>`;
    });
  },

  gcs(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Glasgow Coma Scale (adult and paediatric)</h4><div class="row">
      ${sel("ped", "Version", [["a", "Adult / verbal child"], ["c", "Pre-verbal child (under about 2 years)"]])}
      ${sel("e", "Eyes", [[4, "4 Open spontaneously"], [3, "3 To voice"], [2, "2 To pain"], [1, "1 None"]])}
      ${sel("v", "Verbal", [[5, "5 Oriented / coos, babbles"], [4, "4 Confused / irritable cry"], [3, "3 Words / cries to pain"], [2, "2 Sounds / moans to pain"], [1, "1 None"]])}
      ${sel("m", "Motor", [[6, "6 Obeys / normal spontaneous movement"], [5, "5 Localises / withdraws to touch"], [4, "4 Withdraws to pain"], [3, "3 Abnormal flexion"], [2, "2 Extension"], [1, "1 None"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => +U.$(`[data-k=${k}]`, el).value, s = g("e") + g("v") + g("m");
      const sev = s >= 13 ? "Mild (13–15)" : s >= 9 ? "Moderate (9–12)" : "Severe (8 or less)";
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>GCS ${s}/15 (E${g("e")} V${g("v")} M${g("m")}) — ${sev}.</b> ${s <= 8 ? "Protect the airway (intubation by a skilled person), oxygen, keep SBP over 100–110, urgent CT and neurosurgical referral." : s <= 12 ? "CT and referral to a hospital with neurosurgery (STG)." : "Observe; CT if any rule-based criterion is present."}</p><p class="warn" style="margin:8px 0 0">Record the components, not just the total, with pupils, every 30 minutes until GCS is 15, and act on any fall of 2 points or more.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  cthead(el, U) {
    const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Who needs a CT head? (Canadian CT Head Rule, adults with minor head injury)</h4>
      <p style="margin:0 0 6px">Applies to GCS 13–15 with witnessed loss of consciousness, amnesia or disorientation. Not for anticoagulated patients, seizures, or age under 16.</p>
      <p style="margin:0 0 6px"><b>High risk (neurosurgical intervention)</b></p><div class="checks">${chk("h1", "GCS under 15 at 2 hours after injury")}${chk("h2", "Suspected open or depressed skull fracture")}${chk("h3", "Signs of basal skull fracture (panda eyes, Battle's sign, CSF leak, haemotympanum)")}${chk("h4", "Vomiting 2 or more times")}${chk("h5", "Age 65 or older")}</div>
      <p style="margin:10px 0 6px"><b>Medium risk (brain injury on CT)</b></p><div class="checks">${chk("m1", "Amnesia for events more than 30 minutes before the injury")}${chk("m2", "Dangerous mechanism: pedestrian struck, ejected from vehicle, fall from over 1 m (3 ft) or 5 stairs")}</div>
      <div class="checks" style="margin-top:10px">${chk("ac", "Taking an anticoagulant (warfarin, DOAC) — outside the rule")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked;
      const hi = ["h1", "h2", "h3", "h4", "h5"].some(c), mid = ["m1", "m2"].some(c);
      let txt = hi ? "<b>CT head needed</b> (high risk), within 1 hour (NICE)." : mid ? "<b>CT head needed</b> (medium risk)." : "<b>No CT needed</b> by the rule: discharge with a responsible adult and written head-injury advice.";
      if (c("ac")) txt += " <b>Anticoagulated:</b> NICE advises CT within 8 hours for everyone on anticoagulants (not aspirin alone), even without other features.";
      U.$(".out", el).innerHTML = `<p style="margin:0">${txt}</p><p class="warn" style="margin:8px 0 0">Where CT is not available locally, high- and medium-risk patients need referral; observe GCS and pupils during transfer.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  pecarn(el, U) {
    const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>PECARN: CT after head injury in children (GCS 14–15, within 24 hours)</h4><div class="row"><label>Age<select data-k="age"><option value="u2">Under 2 years</option><option value="o2">2 years or older</option></select></label></div>
      <div class="checks" style="margin-top:10px">${chk("ams", "GCS 14 or other signs of altered mental status (agitation, sleepy, slow to respond, repetitive questions)")}${chk("frac", "Palpable skull fracture (under 2) / signs of basal skull fracture (2 or older)")}${chk("hem", "Under 2: non-frontal scalp haematoma (occipital, parietal, temporal)")}${chk("loc", "Loss of consciousness (under 2: 5 seconds or more)")}${chk("mech", "Severe mechanism (vehicle ejection, rollover, death of another passenger; pedestrian or unhelmeted cyclist hit by vehicle; fall over 0.9 m if under 2 or over 1.5 m if 2+; head hit by high-impact object)")}${chk("act", "Under 2: not acting normally per parent")}${chk("vom", "2 or older: vomiting")}${chk("ha", "2 or older: severe headache")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked, u2 = U.$("[data-k=age]", el).value === "u2";
      const high = c("ams") || c("frac");
      const mid = u2 ? (c("hem") || c("loc") || c("mech") || c("act")) : (c("loc") || c("mech") || c("vom") || c("ha"));
      const [g, a] = high ? ["High risk (about 4% clinically important brain injury)", "<b>CT recommended.</b>"]
        : mid ? ["Intermediate risk (about 0.9%)", "<b>Observation for 4–6 hours or CT</b>, guided by experience, number of findings, worsening symptoms, age under 3 months, and parental preference."]
        : ["Very low risk (under 0.05%)", "<b>CT not recommended.</b> Discharge with advice."];
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>${g}.</b> ${a}</p><p class="warn" style="margin:8px 0 0">Always consider abusive head trauma in infants: injuries that do not fit the story, delayed presentation, or other bruises.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
