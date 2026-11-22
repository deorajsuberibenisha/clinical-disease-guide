/* Hypertension: average-BP classifier with the Bhutan Hypertension Protocol v3.5 (15 Jan 2025) action.
   Categories: ISH 2020 (and ESC 2024) and AHA/ACC 2025. Bhutan thresholds: treat ≥140/90, or ≥130/80 with stroke, diabetes, CKD, CAD or age ≥65;
   crisis ≥180/110 or warning signs; early review within 1 week if ≥160/100. Decision aid only. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {
  bpclass(el, U) {
    el.innerHTML = `<h4>Blood pressure: classify and decide (Bhutan protocol v3.5)</h4><div class="row">
      <label>Reading 1: systolic<input type="number" data-k="s1" placeholder="e.g. 152"></label>
      <label>Reading 1: diastolic<input type="number" data-k="d1" placeholder="e.g. 96"></label>
      <label>Reading 2: systolic<input type="number" data-k="s2" placeholder="optional"></label>
      <label>Reading 2: diastolic<input type="number" data-k="d2" placeholder="optional"></label>
      <label>Age (years)<input type="number" data-k="age" placeholder="e.g. 58"></label></div>
      <div class="checks" style="margin-top:8px">
      <label class="chk"><input type="checkbox" data-k="hr"> Stroke, diabetes, chronic kidney disease or coronary artery disease</label>
      <label class="chk"><input type="checkbox" data-k="warn"> Warning sign: seizure, confusion, new severe headache, breathlessness, chest pain, limb weakness, oedema, or pregnancy</label></div>
      <div class="out" aria-live="polite">Enter at least one reading.</div>`;
    const run = () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      const s1 = g("s1"), d1 = g("d1"), s2 = g("s2"), d2 = g("d2"), age = g("age");
      if (!(s1 > 0) || !(d1 > 0)) { out.textContent = "Enter at least one reading."; return; }
      const two = s2 > 0 && d2 > 0, S = Math.round(two ? (s1 + s2) / 2 : s1), D = Math.round(two ? (d1 + d2) / 2 : d1);
      const ish = S >= 160 || D >= 100 ? "Grade 2 hypertension" : S >= 140 || D >= 90 ? "Grade 1 hypertension" : S >= 130 || D >= 85 ? "High-normal BP" : "Normal BP";
      const aha = S >= 140 || D >= 90 ? "Stage 2 hypertension" : S >= 130 || D >= 80 ? "Stage 1 hypertension" : S >= 120 ? "Elevated BP" : "Normal";
      const high = c("hr") || age >= 65;
      let act, cls = "";
      if (S >= 180 || D >= 110 || c("warn")) { act = "<b>Possible hypertensive crisis: urgent referral</b> (Bhutan protocol). Look for acute organ damage: neurological signs, chest pain, breathlessness, fundal haemorrhages or papilloedema, AKI. With organ damage this is a <b>hypertensive emergency</b> needing IV treatment and controlled lowering. Without it, recheck after 30 minutes of rest, start or adjust oral treatment, and review within days. Never drop BP quickly with sublingual nifedipine."; cls = "warn"; }
      else if (S >= 140 || D >= 90 || (high && (S >= 130 || D >= 80))) act = `<b>Start treatment</b> (with lifestyle measures): <b>hydrochlorothiazide 25 mg once daily</b> first line; if not at target after 1 month, add <b>losartan 25 mg once daily</b>. Check FBG/PPBG, lipids, RFT, LFT, ECG, urine and fundoscopy within 1 month.${S >= 160 || D >= 100 ? " <b>Initial BP ≥160/100: review within 1 week.</b>" : ""}`;
      else if (S >= 130 || D >= 80) act = "<b>Lifestyle measures</b>, cardiovascular risk assessment, and repeat BP every 6 months (no high-risk condition).";
      else act = "BP under 130/80: repeat at routine visits; reinforce a healthy lifestyle.";
      out.innerHTML = `<p style="margin:0"><b>Average BP ${S}/${D} mmHg</b>${two ? " (mean of 2 readings)" : " (single reading: confirm on a second visit, at least a week apart)"}.</p>
        <p style="margin:6px 0 0">ISH 2020: <b>${ish}</b> · AHA/ACC 2025: <b>${aha}</b>${high ? " · <b>high-risk patient</b>" : ""}</p>
        <p class="${cls}" style="margin:8px 0 0">${act}</p>
        <p class="qn" style="margin:8px 0 0">Bhutan target: 120–130/70–80 mmHg (individualise in the frail elderly), lowering by at least 20/10 mmHg per month and reaching target within 3 months. Diagnosis needs at least two readings a week apart (one visit is enough if 160/100 or more, per ICMR).</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run);
  }
});

/* Children: AAP 2017 simplified screening table (Flynn JT et al., Pediatrics 2017;140:e20171904, Table 6).
   Values at or above these need full percentile assessment using height-based tables; they are NOT diagnostic on their own.
   ≥13 years: adult-style categories (elevated 120–129/<80; stage 1 130–139/80–89; stage 2 ≥140/90). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {
  bpchild(el, U) {
    const T = { b: [[98, 52], [100, 55], [101, 58], [102, 60], [103, 63], [105, 66], [106, 68], [107, 69], [107, 70], [108, 72], [110, 74], [113, 75]],
                g: [[98, 54], [101, 58], [102, 60], [103, 62], [104, 64], [105, 67], [106, 68], [107, 69], [108, 71], [109, 72], [111, 74], [114, 75]] };
    el.innerHTML = `<h4>Child BP screen (AAP 2017 simplified table)</h4><div class="row">
      <label>Age (completed years)<input type="number" data-k="age" placeholder="1–17"></label>
      <label>Sex<select data-k="sex"><option value="b">Boy</option><option value="g">Girl</option></select></label>
      <label>Systolic (mmHg)<input type="number" data-k="s" placeholder="e.g. 112"></label>
      <label>Diastolic (mmHg)<input type="number" data-k="d" placeholder="e.g. 70"></label></div>
      <div class="out" aria-live="polite">Enter age, sex and BP.</div>`;
    const run = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), age = Math.floor(U.num(g("age"))), s = U.num(g("s")), d = U.num(g("d"));
      if (!(age >= 1 && age <= 17) || !(s > 0) || !(d > 0)) { out.textContent = "Enter age (1–17 years), sex and BP."; return; }
      if (age >= 13) {
        const cat = s >= 140 || d >= 90 ? "Stage 2 hypertension range" : s >= 130 || d >= 80 ? "Stage 1 hypertension range" : s >= 120 ? "Elevated BP range" : "Normal";
        out.innerHTML = `<p style="margin:0"><b>${cat}</b> (age 13 and over uses fixed thresholds: elevated 120–129/&lt;80; stage 1 130–139/80–89; stage 2 ≥140/90).</p>
          <p class="qn" style="margin:6px 0 0">${cat === "Normal" ? "Recheck yearly." : "Confirm by auscultation, repeat on 3 separate occasions (stage 2 symptomatic or ≥30 mmHg above the stage 2 threshold: same-day assessment). Ambulatory BP monitoring is recommended to confirm persistent elevated readings."}</p>`;
        return;
      }
      const [ts, td] = T[g("sex").value][age - 1], hi = s >= ts || d >= td;
      out.innerHTML = `<p style="margin:0">Screening values for a ${age}-year-old ${g("sex").value === "b" ? "boy" : "girl"}: <b>${ts}/${td} mmHg</b>. This BP is <b>${hi ? "at or above" : "below"}</b> the screening value.</p>
        <p class="qn" style="margin:6px 0 0">${hi ? "<b>Needs further evaluation:</b> repeat by auscultation (average of 2), then plot against the full AAP 2017 height-percentile tables to classify: elevated (90th–&lt;95th percentile), stage 1 (≥95th to &lt;95th + 12 mmHg) or stage 2 (≥95th + 12 mmHg). Symptoms, or BP more than 30 mmHg above the 95th percentile, need same-day assessment." : "Below the screening value: the BP is under the 90th percentile for all heights. Recheck at the next annual visit (every visit if obese, kidney disease, diabetes, aortic arch disease or on BP-raising drugs)."} This table is for screening only; it cannot diagnose hypertension.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run);
  }
});
