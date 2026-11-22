/* Thyroid and pre-eclampsia calculators.
   Burch HB, Wartofsky L. Endocrinol Metab Clin North Am 1993;22:263–277 (thyroid storm score). Levothyroxine dosing: ATA 2014, BNF/BNFc, ESPE 2020.
   MgSO4: Bhutan STG 2024 §11.5 (Pritchard), WHO 2011. Pre-eclampsia classification: ISSHP 2021/2022, ACOG 2020, NICE NG133. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  thyroxdose(el, U) {
    el.innerHTML = `<h4>Levothyroxine starting dose</h4><div class="row">
      <label>Patient<select data-k="who"><option value="a">Adult</option><option value="n">Newborn (congenital hypothyroidism)</option><option value="c">Child 1–12 years</option></select></label>
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label>
      <label>Age 60+ or heart disease<select data-k="old"><option value="n">No</option><option value="y">Yes</option></select></label>
      <label>Pregnant<select data-k="preg"><option value="n">No</option><option value="y">Yes</option></select></label></div><div class="out" aria-live="polite">Enter the weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), w = U.num(g("wt")), who = g("who").value;
      if (!(w > 0)) { out.textContent = "Enter the weight."; return; }
      const tab = mcg => { const r = Math.round(mcg / 12.5) * 12.5; return `${r} microgram (${r % 25 ? "half tablets of 25 microgram" : "using 25 and 50 microgram tablets"})`; };
      let txt;
      if (who === "n") { let n = Math.round(w) * 12.5; n = Math.round(12.5 * w / 12.5) * 12.5; if (n > 15 * w) n -= 12.5; if (n < 10 * w) n += 12.5; n = Math.min(Math.max(n, 12.5), 50); txt = `<b>${n} microgram</b> once daily (10–15 microgram/kg; ${Math.round(10 * w)}–${Math.round(15 * w)} microgram), started within 2 weeks of birth. Crush in a little breast milk or water. Check free T4 and TSH at 2 and 4 weeks, then every 1–3 months in the first year; aim for free T4 in the upper half of normal.`; }
      else if (who === "c") txt = `About <b>${tab(Math.min(Math.max(4 * w, 25), 100))}</b> once daily (roughly 4–5 microgram/kg in young children, 2–3 microgram/kg near puberty). Check TSH after 4–6 weeks.`;
      else if (g("old").value === "y") txt = `<b>25 microgram once daily</b>, increased by 25 microgram every 4–6 weeks according to TSH and symptoms (full dose would be about ${Math.round(1.6 * w / 12.5) * 12.5} microgram).`;
      else txt = `Full replacement about <b>${tab(1.6 * w)}</b> once daily (1.6 microgram/kg). Check TSH after 6–8 weeks and adjust by 12.5–25 microgram.`;
      if (g("preg").value === "y" && who === "a") txt += `<br><b>Pregnant:</b> already on treatment → increase by 25–30% now (about two extra tablets a week); new diagnosis → start ${tab(Math.min(1.6 * w, 125))}. Target TSH under 2.5 mU/L; check every 4 weeks until 20 weeks.`;
      out.innerHTML = `<p style="margin:0">${txt}</p><p class="warn" style="margin:8px 0 0">Take on an empty stomach, separate from iron, calcium and antacids by 4 hours. Suspected adrenal insufficiency or pituitary disease: give hydrocortisone before thyroxine.</p>`;
    });
  },

  bws(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Burch–Wartofsky score — is this thyroid storm?</h4><div class="row">
      ${sel("t", "Temperature (°C)", [[0, "Under 37.2"], [5, "37.2–37.7"], [10, "37.8–38.2"], [15, "38.3–38.8"], [20, "38.9–39.3"], [25, "39.4–39.9"], [30, "40 or more"]])}
      ${sel("cns", "Mental state", [[0, "Normal"], [10, "Agitation"], [20, "Delirium, psychosis, extreme lethargy"], [30, "Seizure or coma"]])}
      ${sel("gi", "Gut and liver", [[0, "Normal"], [10, "Diarrhoea, vomiting, abdominal pain"], [20, "Unexplained jaundice"]])}
      ${sel("hr", "Heart rate", [[0, "Under 90"], [5, "90–109"], [10, "110–119"], [15, "120–129"], [20, "130–139"], [25, "140 or more"]])}
      ${sel("hf", "Heart failure", [[0, "None"], [5, "Ankle oedema"], [10, "Basal crackles"], [15, "Pulmonary oedema"]])}
      ${sel("af", "Atrial fibrillation", [[0, "No"], [10, "Yes"]])}
      ${sel("pr", "Precipitant (infection, surgery, delivery, stopping drugs, iodine)", [[0, "None identified"], [10, "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$$("select", el).reduce((n, x) => n + +x.value, 0);
      const [g, a] = s >= 45 ? ["Thyroid storm highly likely (45 or more)", "Treat now in HDU/ICU: propranolol 60–80 mg orally every 4 hours (or esmolol), carbimazole 20–30 mg every 6 hours (PTU 500–1000 mg then 250 mg every 4 hours if available), hydrocortisone 100 mg IV every 8 hours, iodine 1 hour after the thionamide if available, cooling and paracetamol (not aspirin), fluids, treat the precipitant."]
        : s >= 25 ? ["Impending storm (25–44)", "Treat as storm if the clinical picture fits; admit, start beta-blocker and carbimazole, look for the trigger, senior review."]
        : ["Storm unlikely (under 25)", "Treat thyrotoxicosis (beta-blocker, carbimazole) and reassess."];
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>Score ${s} — ${g}.</b> ${a}</p><p class="warn" style="margin:8px 0 0">The score supports clinical judgement; thyroid storm is a clinical diagnosis with high mortality (10–30%).</p>`;
    };
    el.addEventListener("input", go); go();
  },

  mgso4(el, U) {
    el.innerHTML = `<h4>Magnesium sulphate: regimen and safety check (Bhutan STG / WHO)</h4><div class="row">
      <label>Regimen<select data-k="rg"><option value="im">IM (Pritchard, Bhutan STG)</option><option value="iv">IV infusion (Zuspan)</option></select></label>
      <label>Knee reflexes<select data-k="rf"><option value="y">Present</option><option value="n">Absent</option></select></label>
      <label>Breathing rate (/min)<input type="number" data-k="rr" placeholder="e.g. 18"></label>
      <label>Urine in last 4 hours (mL)<input type="number" data-k="uo" placeholder="e.g. 160"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const im = g("rg").value === "im", rf = g("rf").value === "y", rr = U.num(g("rr")), uo = U.num(g("uo"));
      const load = im ? `<b>Loading:</b> 4 g IV over 5 minutes (draw 8 mL of 50% MgSO₄, add 12 mL sterile water = 20 mL of 20%) <b>and</b> 10 g IM: 10 mL of 50% (5 g) + 1 mL 2% lignocaine, deep IM into each buttock.` : `<b>Loading:</b> 4 g IV over 5–15 minutes (8 mL of 50% + 12 mL water).`;
      const maint = im ? `<b>Maintenance:</b> 5 g (10 mL of 50%) deep IM every 4 hours, alternate buttocks.` : `<b>Maintenance:</b> 1 g/hour by infusion (e.g. 20 mL of 50% = 10 g in 480 mL saline at 50 mL/hour).`;
      let safe = "";
      if (rr > 0 || uo >= 0 && g("uo").value !== "") {
        if (rr > 0 && rr < 12) safe = `<p class="warn" style="margin:6px 0 0"><b>STOP magnesium.</b> Breathing under 12/min: give oxygen, support breathing (bag-mask), and calcium gluconate 10% 10 mL (1 g) IV over 10 minutes.</p>`;
        else if (!rf) safe = `<p class="warn" style="margin:6px 0 0"><b>Withhold the next dose</b>: absent reflexes mean magnesium levels are high. Recheck hourly; restart when reflexes return.</p>`;
        else if (uo >= 0 && g("uo").value !== "" && uo < 100) safe = `<p class="warn" style="margin:6px 0 0"><b>Urine under 100 mL in 4 hours:</b> withhold the next IM dose (or halve the infusion to 0.5 g/hour), assess fluids and kidney function, check reflexes and breathing hourly.</p>`;
        else safe = `<p style="margin:6px 0 0"><b>Safe to give the next dose</b>: reflexes present, breathing 12/min or more, urine 100 mL or more in 4 hours.</p>`;
      }
      out.innerHTML = `<p style="margin:0">${load}</p><p style="margin:6px 0 0">${maint}</p><p style="margin:6px 0 0"><b>Recurrent fit:</b> 2 g IV over 5 minutes (4 mL of 50% + 6 mL water). <b>Duration:</b> 24 hours after delivery or the last fit, whichever is later.</p>${safe}`;
    };
    el.addEventListener("input", go); go();
  },

  pecheck(el, U) {
    const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Hypertension in pregnancy: classify and act</h4><div class="row">
      <label>Gestation (weeks)<input type="number" data-k="ga" placeholder="e.g. 34"></label>
      <label>Systolic BP (mmHg)<input type="number" data-k="sbp" placeholder="e.g. 162"></label>
      <label>Diastolic BP (mmHg)<input type="number" data-k="dbp" placeholder="e.g. 108"></label>
      <label>Hypertension before 20 weeks<select data-k="chr"><option value="n">No</option><option value="y">Yes (chronic)</option></select></label></div>
      <div class="checks" style="margin-top:10px">${chk("prot", "Proteinuria (dipstick 2+ or more, or PCR 30 mg/mmol or more)")}${chk("fit", "Seizure (eclampsia)")}${chk("neuro", "Severe headache, visual disturbance, confusion, clonus")}${chk("epi", "Epigastric or right upper pain, vomiting")}${chk("lab", "Platelets under 100, raised ALT/AST, creatinine over 90 µmol/L, haemolysis (HELLP)")}${chk("lung", "Breathlessness or pulmonary oedema")}${chk("fetal", "Fetal growth restriction, abnormal Doppler, abruption")}</div><div class="out" aria-live="polite">Enter gestation and blood pressure.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, out = U.$(".out", el);
      const ga = U.num(g("ga")), s = U.num(g("sbp")), d = U.num(g("dbp")), chr = g("chr").value === "y";
      if (!(s > 0) || !(d > 0)) { out.textContent = "Enter gestation and blood pressure."; return; }
      const htn = s >= 140 || d >= 90, sev = s >= 160 || d >= 110;
      const organ = ["neuro", "epi", "lab", "lung", "fetal"].some(c);
      let dx;
      if (c("fit")) dx = "ECLAMPSIA";
      else if (!htn) dx = "Blood pressure not in the hypertensive range";
      else if ((ga >= 20 || chr) && (c("prot") || organ)) dx = (chr ? "Chronic hypertension with superimposed pre-eclampsia" : "Pre-eclampsia") + (sev || organ ? " WITH SEVERE FEATURES" : "");
      else if (chr) dx = "Chronic hypertension";
      else dx = ga >= 20 ? "Gestational hypertension" : "Hypertension before 20 weeks (likely chronic)";
      const acts = [];
      if (c("fit") || /SEVERE/.test(dx)) acts.push("<b>Magnesium sulphate now</b> (loading dose; see the MgSO₄ tool), left lateral position, ABC.");
      if (sev) acts.push("<b>Lower BP within 30–60 minutes</b> to 140–150/90–100: labetalol 20 mg IV, then 40, 80, 80 mg every 10–30 minutes (max 220–300 mg), <b>or</b> nifedipine 10–20 mg orally (repeat after 30 minutes), <b>or</b> hydralazine 5–10 mg IV slowly (STG: infusion 40 mg in 500 mL saline titrated by 10 drops/min every 30 minutes).");
      else if (htn) acts.push("Oral antihypertensive to keep BP about 135/85: nifedipine (retard) 20 mg twice daily, labetalol 100–200 mg twice to three times daily, or methyldopa 250 mg twice daily (STG options).");
      if (/pre-eclampsia|ECLAMPSIA/i.test(dx)) acts.push(ga > 0 && ga < 34 ? "Dexamethasone 6 mg IM every 12 hours × 4 for fetal lungs; refer to a hospital with neonatal care; deliver if severe features cannot be controlled." : ga >= 37 ? "<b>Plan delivery</b> (37 weeks or more)." : "34–36 weeks: steroids if under 35 weeks; planned delivery is advised (reduces maternal complications); discuss with obstetrics.");
      if (c("fit") || /SEVERE/.test(dx)) acts.push("<b>Deliver once the mother is stable</b>, whatever the gestation, if eclampsia, HELLP, pulmonary oedema, uncontrollable BP or fetal compromise.");
      acts.push("Bloods: FBC, creatinine, liver tests; urine protein; fetal heart and growth. Refer from PHC/BHU after the first doses.");
      out.innerHTML = `<p style="margin:0"><b>${dx}.</b></p><ul style="margin:6px 0 0;padding-left:18px">${acts.map(a => `<li>${a}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Severe hypertension (160/110 or more) is an emergency on its own: the main killer is stroke. Risk continues for 6 weeks after birth.</p>`;
    });
  }
});
