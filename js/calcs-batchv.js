/* Batch V calculators.
   neotemp: Bhutan Hospital IMNCI 3rd ed 2024 §6.3 (hypothermia grades and rewarming) and hyperthermia; WHO thermal protection 1997.
   neolocal: Bhutan IMNCI PHC Chart Booklet 2025 p. 37 and 45 (PSBI vs local bacterial infection vs neonatal conjunctivitis) with weight doses.
   idmglucose: Bhutan Hospital IMNCI 2024 Chart 11 (Nepal FB-IMNCI 2019 flowcharts); AAP Adamkin 2011 (Pediatrics 127:575); GIR formula.
   oakland: Oakland K et al. Lancet Gastroenterol Hepatol 2017 (Table as reprinted in JAMA Netw Open 2020, PMC7341175); BSG 2019 cut-off ≤8.
   abi: ABI bands (2024 ACC/AHA PAD guideline); Fontaine/Rutherford; acute limb ischaemia red flags. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  neotemp(el, U) {
    el.innerHTML = `<h4>Newborn temperature — grade and what to do (Bhutan IMNCI 2024)</h4><div class="row">
      <label>Axillary temperature (°C)<input type="number" step="any" data-k="t" placeholder="e.g. 35.2"></label>
      <label>Weight (kg)<input type="number" step="any" data-k="w" placeholder="e.g. 2.1"></label>
      <label>Sick (sepsis signs, breathing difficulty, not feeding)?<select data-k="sick"><option value="n">No</option><option value="y">Yes</option></select></label></div><div class="out" aria-live="polite">Enter the axillary temperature.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), t = U.num(g("t")), w = U.num(g("w")), sick = g("sick").value === "y", out = U.$(".out", el);
      if (!(t > 25 && t < 43)) { out.textContent = "Enter the axillary temperature."; return; }
      const dex = w > 0 ? ` (10% dextrose ${Math.round(2 * w * 10) / 10} mL = 2 mL/kg)` : " (10% dextrose 2 mL/kg)";
      const L = [];
      let grade;
      if (t > 37.5) {
        grade = "HYPERTHERMIA (above 37.5 °C)";
        L.push("Move away from heat (warmer, heater, sun); remove extra clothes; room 25–28 °C; sponge with lukewarm water if over 39 °C.");
        L.push(`Look for infection and dehydration; check glucose and treat if under 45 mg/dL${dex}. <b>No antipyretics under 1 month.</b> Recheck hourly.`);
        L.push("Fever in a young infant may be sepsis: IMNCI classifies 37.5 °C or above as possible serious bacterial infection — first dose of ampicillin + gentamicin and refer if other signs.");
      } else if (t >= 36.5) {
        grade = "NORMAL (36.5–37.5 °C)";
        L.push("Keep warm: skin-to-skin, cap, socks, two or three layers, room at least 25 °C; delay bathing until after 24 hours.");
      } else if (t >= 36.0) {
        grade = "MILD HYPOTHERMIA / COLD STRESS (36.0–36.4 °C)";
        L.push("<b>Skin-to-skin (kangaroo) contact</b> with mother — or father or another adult — covered with a warm blanket; cap and socks; breastfeed more often.");
        L.push("Recheck temperature in 1 hour; look for the cause (wet clothes, early bath, cold room, sepsis).");
      } else if (t >= 32.0) {
        grade = "MODERATE HYPOTHERMIA (32.0–35.9 °C)";
        L.push(`<b>Check blood glucose</b> and treat if under 45 mg/dL${dex}.`);
        L.push(sick ? "Sick baby: rewarm under a pre-warmed <b>radiant warmer</b> (or incubator); keep the room at least 25 °C." : "Rewarm by <b>skin-to-skin contact</b> in a room at least 25 °C; radiant warmer if skin-to-skin is not possible.");
        L.push("Breastfeed frequently or give expressed milk by cup; temperature every 30–60 minutes until normal.");
        if (t < 35.5) L.push("IMNCI: temperature below 35.5 °C is a sign of possible serious bacterial infection — give the first dose of ampicillin + gentamicin and refer if this is a PHC.");
      } else {
        grade = "SEVERE HYPOTHERMIA (below 32 °C)";
        L.push("Warm immediately under a <b>pre-warmed radiant warmer or incubator</b>; remove cold or wet clothes; warm clothes, cap, warm blanket.");
        L.push(`Check and treat hypoglycaemia${dex}; start IV fluids; oxygen if needed; <b>treat for sepsis</b> (ampicillin + gentamicin).`);
        L.push("Monitor temperature every 30 minutes; if not 36.5 °C or more after 2 hours of rewarming, reassess for other problems.");
      }
      out.innerHTML = `<p style="margin:0"><b>${grade}</b></p><ul style="margin:6px 0 0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Measure axillary temperature for 3 minutes. Cold feet with a warm trunk is cold stress; a cold trunk is hypothermia. A baby with abnormal temperature may have sepsis.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  neolocal(el, U) {
    const ck = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Young infant (0–2 months) — local infection or serious illness? (Bhutan IMNCI 2025)</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="w" placeholder="e.g. 3.2"></label>
      <label>Age (days)<input type="number" step="any" data-k="d" placeholder="e.g. 9"></label></div>
      <div class="checks" style="margin-top:10px">
      ${ck("danger", "Any danger sign: not feeding well, convulsions, moves only when stimulated or not at all, breathing 60/min or more, severe chest indrawing, grunting, temperature 37.5 °C or more or below 35.5 °C, cyanosis, SpO₂ under 90%, glucose under 45 mg/dL")}
      ${ck("manyp", "More than 10 skin pustules, or large or bullous lesions")}
      ${ck("spread", "Umbilical redness extending to the skin of the abdomen")}
      ${ck("cord", "Umbilicus red or draining pus (redness limited to the stump)")}
      ${ck("pust", "Skin pustules (10 or fewer)")}
      ${ck("ear", "Ear discharge")}
      ${ck("eye", "Purulent eye discharge (one or both eyes) in the first 28 days")}
      ${ck("thrush", "White patches in the mouth (thrush)")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), on = k => g(k).checked, w = U.num(g("w")), d = U.num(g("d")), out = U.$(".out", el);
      const dose = (mgkg, cap) => w > 0 ? `${Math.min(Math.round(mgkg * w), cap || 1e9)} mg` : `${mgkg} mg/kg`;
      const L = [];
      if (on("danger") || on("manyp") || on("spread")) {
        L.push(`<b>POSSIBLE SERIOUS BACTERIAL INFECTION / VERY SEVERE DISEASE.</b> First dose IM ampicillin ${dose(50)} (50 mg/kg) + gentamicin ${w > 0 ? Math.round(5 * w * 10) / 10 + " mg" : "5 mg/kg"}${d > 0 && d <= 7 ? " (4 mg/kg in hospital protocols for the first week)" : ""}; prevent low blood sugar (breast milk or 10% dextrose); keep warm skin-to-skin on the way; <b>refer urgently</b>. In hospital: add cloxacillin 50 mg/kg (or use it in place of ampicillin) when pustules or omphalitis suggest staphylococci.`);
      } else {
        if (on("cord") || on("pust") || on("ear")) L.push(`<b>LOCAL BACTERIAL INFECTION.</b> Amoxicillin ${dose(25)} (25 mg/kg) twice daily for 5 days (second line co-trimoxazole 4 mg TMP/kg twice daily). Caregiver: wash hands, wash off pus and crusts, dry, apply NFT (nitrofurazone 0.2%) three times daily. Follow up in 2 days.`);
        if (on("eye")) L.push(`<b>NEONATAL CONJUNCTIVITIS.</b> Ceftriaxone ${w > 0 ? Math.min(Math.round(50 * w), 125) + " mg" : "25–50 mg/kg"} IM once (STG maximum 125 mg; avoid if jaundiced or preterm — cefotaxime 100 mg/kg instead) plus azithromycin ${dose(20)} (20 mg/kg) once daily for 3 days. Clean the eyes with saline at least 4 times a day. Treat mother and partner for gonorrhoea and chlamydia. Follow up in 2 days.`);
        if (on("thrush")) L.push("<b>THRUSH.</b> Nystatin paste 6-hourly after feeds for 7 days; check and treat the mother's nipples; cup rather than bottle.");
        if (!L.length) L.push("No severe disease or local bacterial infection: home care — exclusive breastfeeding, warmth, dry cord care, return if any danger sign.");
      }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Re-check at 2 days: worsening redness, fever, poor feeding or spreading infection means referral and IV antibiotics.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  idmglucose(el, U) {
    el.innerHTML = `<h4>At-risk newborn (including infant of a diabetic mother) — glucose plan</h4><div class="row">
      <label>Blood glucose (mg/dL)<input type="number" step="any" data-k="g" placeholder="e.g. 32"></label>
      <label>Age (hours)<input type="number" step="any" data-k="h" placeholder="e.g. 2"></label>
      <label>Weight (kg)<input type="number" step="any" data-k="w" placeholder="e.g. 4.1"></label>
      <label>Symptoms (jittery, lethargic, poor feeding, apnoea, seizures, hypothermia)?<select data-k="s"><option value="n">No</option><option value="y">Yes</option></select></label>
      <label>Current GIR (mg/kg/min), if on IV<input type="number" step="any" data-k="gir" placeholder="blank if not on IV"></label></div><div class="out" aria-live="polite">Enter the glucose.</div>`;
    const go = () => {
      const q = k => U.$(`[data-k=${k}]`, el), gl = U.num(q("g")), h = U.num(q("h")), w = U.num(q("w")), sym = q("s").value === "y", gir0 = U.num(q("gir")), out = U.$(".out", el);
      if (!(gl >= 0) || q("g").value === "") { out.textContent = "Enter the glucose in mg/dL (mmol/L × 18)."; return; }
      const rate = gir => w > 0 ? `${Math.round(gir * w * 60 / 100 * 10) / 10} mL/h of 10% dextrose (GIR ${gir} mg/kg/min ≈ ${Math.round(gir * 1440 / 100)} mL/kg/day)` : `GIR ${gir} mg/kg/min (enter weight for mL/h)`;
      const bolus = w > 0 ? `${Math.round(2 * w * 10) / 10} mL` : "2 mL/kg";
      const L = [];
      if (gl < 25 || (sym && gl < 45)) {
        const next = gir0 >= 10 ? null : gir0 >= 8 ? 10 : gir0 >= 6 ? 8 : 6;
        L.push(`<b>Bhutan Flowchart 2:</b> 10% dextrose bolus <b>${bolus}</b> IV over 2–5 minutes (NG tube if no IV), then ${next ? rate(next) : "<b>GIR already 10 mg/kg/min — refer for level III care</b> (persistent hyperinsulinism needs specialist work-up)"}. Recheck glucose 30 minutes after the bolus.`);
        L.push("Continue breastfeeding if the baby can feed. When glucose is over 45 mg/dL on two checks, wean the infusion by 2 mg/kg/min at a time while increasing feeds; stop IV when oral intake reaches two-thirds of daily needs.");
      } else if (gl < 45) {
        L.push("<b>Bhutan Flowchart 1:</b> 25–45 mg/dL and well — breastfeed now (or expressed breast milk by cup); recheck after 1 hour or before the next feed. If still 25–45, feed more often or more volume; under 25 → Flowchart 2.");
        const aap = h > 0 && h < 4 ? 25 : 35;
        if (h > 0 && h <= 24) L.push(`AAP 2011 for comparison: in an asymptomatic at-risk infant aged ${h < 4 ? "0–4" : "4–24"} hours, IV glucose is advised only if glucose stays below ${aap} mg/dL after a feed; target over 45 mg/dL before feeds.`);
      } else {
        L.push("Glucose over 45 mg/dL: continue breastfeeding on demand (at least every 2–3 hours). Stop monitoring after two consecutive pre-feed values of 45 mg/dL or more" + (h > 0 && h < 48 ? " — but for an infant of a diabetic mother, keep to the schedule below." : "."));
      }
      L.push("<b>Infant of a diabetic mother — Bhutan schedule:</b> glucose at 1, 2, 3, 6, 12, 24, 36 and 48 hours (pre-feed). First feed within 30–60 minutes of birth.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Confirm low meter readings with a laboratory sample if possible, but never delay treatment. Glucose needs over 10–12 mg/kg/min, or hypoglycaemia beyond 48–72 hours, suggest hyperinsulinism or another cause: specialist referral.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  oakland(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Oakland score — lower GI bleeding: safe for outpatient care?</h4><div class="row">
      ${sel("age", "Age", [[0, "39 or under"], [1, "40–69"], [2, "70 or over"]])}
      ${sel("sex", "Sex", [[0, "Female"], [1, "Male"]])}
      ${sel("prev", "Previous admission with LGIB", [[0, "No"], [1, "Yes"]])}
      ${sel("dre", "Digital rectal exam", [[0, "No blood"], [1, "Blood"]])}
      ${sel("hr", "Heart rate", [[0, "69 or under"], [1, "70–89"], [2, "90–109"], [3, "110 or over"]])}
      ${sel("sbp", "Systolic BP (mmHg)", [[5, "50–89"], [4, "90–119"], [3, "120–129"], [2, "130–159"], [0, "160 or over"]])}
      ${sel("hb", "Haemoglobin (g/dL)", [[22, "3.6–6.9"], [17, "7.0–8.9"], [13, "9.0–10.9"], [8, "11.0–12.9"], [4, "13.0–15.9"], [0, "16.0 or over"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$$("select", el).reduce((a, x) => a + +x.value, 0);
      const msg = s <= 8 ? "<b>Low risk (8 or under):</b> may be discharged for urgent outpatient colonoscopy/flexible sigmoidoscopy if haemodynamically stable with no other reason to admit (BSG 2019, ACG 2023)." : "<b>Over 8:</b> admit. Check shock index (heart rate ÷ systolic BP): over 1 = unstable — resuscitate and arrange CT angiography; consider upper GI source (endoscopy) first. Stable: inpatient colonoscopy on the next available list after bowel preparation.";
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>Oakland score ${s}</b> (range 0–35). ${msg}</p><p class="warn" style="margin:8px 0 0">The score supports, never replaces, judgement: anticoagulants, severe comorbidity, frailty or lack of follow-up are reasons to admit at any score.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  abi(el, U) {
    el.innerHTML = `<h4>Ankle–brachial index (ABI) and PAD stage</h4><div class="row">
      <label>Right arm systolic (mmHg)<input type="number" step="any" data-k="ra" placeholder="e.g. 142"></label>
      <label>Left arm systolic (mmHg)<input type="number" step="any" data-k="la" placeholder="e.g. 138"></label>
      <label>Ankle systolic — higher of DP/PT, leg tested (mmHg)<input type="number" step="any" data-k="an" placeholder="e.g. 96"></label>
      <label>Symptoms<select data-k="sym"><option value="0">None (asymptomatic)</option><option value="2">Claudication (calf/thigh/buttock pain on walking, relieved by rest)</option><option value="3">Rest pain</option><option value="4">Ulcer or gangrene</option><option value="5">Sudden pain, pallor, pulselessness, numbness or weakness (acute)</option></select></label></div><div class="out" aria-live="polite">Enter arm and ankle pressures.</div>`;
    const go = () => {
      const n = k => U.num(U.$(`[data-k=${k}]`, el)), out = U.$(".out", el), sym = +U.$("[data-k=sym]", el).value;
      const arm = Math.max(n("ra") || 0, n("la") || 0), an = n("an");
      const L = [];
      if (sym === 5) L.push("<b>ACUTE LIMB ISCHAEMIA — emergency.</b> Heparin 80 units/kg IV bolus (if no contraindication), analgesia, urgent vascular surgery: a threatened limb needs revascularisation within about 6 hours. Do not wait for ABI.");
      if (arm > 0 && an > 0) {
        const abi = Math.round(an / arm * 100) / 100;
        const band = abi > 1.4 ? "over 1.40 — non-compressible (calcified) arteries; ABI unreliable: measure toe–brachial index (0.70 or under = PAD) or Doppler waveforms" : abi >= 1.0 ? "1.00–1.40 — normal" : abi >= 0.91 ? "0.91–0.99 — borderline; consider exercise ABI if symptoms" : abi >= 0.5 ? "0.90 or under — <b>PAD confirmed</b> (0.50–0.90: mild to moderate)" : "under 0.50 — <b>severe PAD</b>";
        L.unshift(`<b>ABI = ${an} ÷ ${arm} = ${abi}</b>: ${band}.`);
      } else if (sym !== 5) { out.textContent = "Enter arm and ankle pressures."; return; }
      const stage = { 0: "Fontaine I / Rutherford 0 — asymptomatic: risk-factor treatment.", 2: "Fontaine II / Rutherford 1–3 — claudication: smoking cessation, statin, antiplatelet, BP and diabetes control, supervised walking 30–45 min 3×/week for 12 weeks; cilostazol if no heart failure; revascularise only if limiting despite this.", 3: "Fontaine III / Rutherford 4 — rest pain: <b>chronic limb-threatening ischaemia</b>; refer urgently for imaging and revascularisation.", 4: "Fontaine IV / Rutherford 5–6 — tissue loss: <b>CLTI</b>; urgent vascular referral, wound and infection care (WIfI staging), foot protection.", 5: "" }[sym];
      if (stage) L.push(stage);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Measure after 5–10 minutes supine with a handheld Doppler; use the higher arm pressure and the higher of the two ankle arteries for each leg. Everyone with PAD needs a high-intensity statin and antiplatelet therapy.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
