/* Stroke calculators: NIHSS, ABCD², CHA₂DS₂-VASc / CHA₂DS₂-VA, HAS-BLED.
   Sources: NIH Stroke Scale (Brott 1989; NINDS form); Johnston SC et al. Lancet 2007 (ABCD²); Lip GYH et al. Chest 2010 (CHA₂DS₂-VASc);
   Van Gelder IC et al. ESC 2024 AF guideline (CHA₂DS₂-VA); Pisters R et al. Chest 2010 (HAS-BLED). Decision aids only. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  nihss(el, U) {
    const I = [
      ["1a", "1a. Level of consciousness", ["0 Alert", "1 Drowsy, rousable to minor stimulation", "2 Needs repeated or painful stimulation", "3 Coma / unresponsive"]],
      ["1b", "1b. Questions (month, age)", ["0 Both correct", "1 One correct", "2 Neither correct"]],
      ["1c", "1c. Commands (open/close eyes, grip)", ["0 Both correct", "1 One correct", "2 Neither"]],
      ["2", "2. Best gaze", ["0 Normal", "1 Partial gaze palsy", "2 Forced deviation"]],
      ["3", "3. Visual fields", ["0 No loss", "1 Partial hemianopia", "2 Complete hemianopia", "3 Bilateral / blind"]],
      ["4", "4. Facial palsy", ["0 Normal", "1 Minor (flattened fold)", "2 Partial (lower face)", "3 Complete (upper + lower)"]],
      ["5a", "5a. Left arm (hold 10 s)", ["0 No drift", "1 Drift", "2 Some effort against gravity", "3 No effort against gravity", "4 No movement"]],
      ["5b", "5b. Right arm (hold 10 s)", ["0 No drift", "1 Drift", "2 Some effort against gravity", "3 No effort against gravity", "4 No movement"]],
      ["6a", "6a. Left leg (hold 5 s)", ["0 No drift", "1 Drift", "2 Some effort against gravity", "3 No effort against gravity", "4 No movement"]],
      ["6b", "6b. Right leg (hold 5 s)", ["0 No drift", "1 Drift", "2 Some effort against gravity", "3 No effort against gravity", "4 No movement"]],
      ["7", "7. Limb ataxia", ["0 Absent", "1 One limb", "2 Two limbs"]],
      ["8", "8. Sensory", ["0 Normal", "1 Mild–moderate loss", "2 Severe / total loss"]],
      ["9", "9. Best language", ["0 Normal", "1 Mild–moderate aphasia", "2 Severe aphasia", "3 Mute / global aphasia"]],
      ["10", "10. Dysarthria", ["0 Normal", "1 Mild–moderate", "2 Severe / unintelligible"]],
      ["11", "11. Extinction / inattention", ["0 None", "1 One modality", "2 Profound / more than one modality"]]];
    el.innerHTML = `<h4>NIH Stroke Scale (NIHSS)</h4><div class="row">${I.map(([k, l, o]) => `<label>${l}<select data-k="n${k}">${o.map((t, i) => `<option value="${i}">${t}</option>`).join("")}</select></label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const s = I.reduce((a, [k]) => a + (+U.$(`[data-k=n${k}]`, el).value), 0), out = U.$(".out", el);
      const b = s === 0 ? "No measurable deficit" : s <= 4 ? "Minor stroke" : s <= 15 ? "Moderate stroke" : s <= 20 ? "Moderate to severe stroke" : "Severe stroke";
      out.innerHTML = `<p style="margin:0"><b>NIHSS = ${s}/42</b> · ${b}</p><p class="qn" style="margin:6px 0 0">${s >= 6 ? "A score of 6 or more with a cortical sign (gaze deviation, aphasia, neglect) suggests a large-vessel occlusion: thrombolysis if eligible, and discuss thrombectomy." : s >= 1 ? "Even a low score can be disabling (e.g. isolated aphasia or hemianopia): judge disability, not just the number, when deciding on thrombolysis." : ""} Score what the patient does, not what you think they could do. Repeat after thrombolysis and with any change.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  },

  abcd2(el, U) {
    const sel = (k, l, o) => `<label>${l}<select data-k="${k}">${o.map(([v, t]) => `<option value="${v}">${t}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>ABCD² score: early stroke risk after TIA</h4><div class="row">
      ${sel("a", "Age", [[0, "Under 60"], [1, "60 or over"]])}
      ${sel("b", "BP at first assessment", [[0, "Under 140/90"], [1, "SBP ≥140 or DBP ≥90"]])}
      ${sel("c", "Clinical features", [[0, "Other"], [1, "Speech disturbance without weakness"], [2, "Unilateral weakness"]])}
      ${sel("d", "Duration", [[0, "Under 10 min"], [1, "10–59 min"], [2, "60 min or more"]])}
      ${sel("e", "Diabetes", [[0, "No"], [1, "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const s = ["a", "b", "c", "d", "e"].reduce((x, k) => x + (+U.$(`[data-k=${k}]`, el).value), 0), out = U.$(".out", el);
      const r = s <= 3 ? ["Low", "about 1%"] : s <= 5 ? ["Moderate", "about 4%"] : ["High", "about 8%"];
      out.innerHTML = `<p style="margin:0"><b>ABCD² = ${s}/7</b> · ${r[0]} risk (2-day stroke risk ${r[1]} in the derivation cohorts).</p><p class="qn" style="margin:6px 0 0"><b>Do not use the score to delay care.</b> NICE and ESO now advise that every suspected TIA be assessed by a specialist within 24 hours and start aspirin (or dual antiplatelets) immediately, because ABCD² misses many patients with AF or carotid stenosis.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  },

  chadsvasc(el, U) {
    const it = [["chf", "Congestive heart failure / LV dysfunction", 1], ["htn", "Hypertension", 1], ["a75", "Age 75 or over", 2], ["dm", "Diabetes", 1], ["st", "Previous stroke, TIA or thromboembolism", 2], ["vas", "Vascular disease (MI, PAD, aortic plaque)", 1], ["a65", "Age 65–74", 1], ["f", "Female sex (CHA₂DS₂-VASc only)", 1]];
    el.innerHTML = `<h4>CHA₂DS₂-VASc / CHA₂DS₂-VA: stroke risk in atrial fibrillation</h4><div class="checks">${it.map(([k, t, p]) => `<label class="chk"><input type="checkbox" data-k="${k}"> ${t} <small>(+${p})</small></label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      if (c("a75") && c("a65")) U.$(`[data-k=a65]`, el).checked = false;
      const va = it.filter(([k]) => k !== "f" && c(k)).reduce((a, x) => a + x[2], 0), vasc = va + (c("f") ? 1 : 0);
      const rec = va >= 2 ? "<b>Oral anticoagulation recommended</b> (a DOAC such as apixaban in preference to warfarin, unless mechanical valve or moderate–severe mitral stenosis)." : va === 1 ? "Oral anticoagulation <b>should be considered</b>, weighing bleeding risk and patient preference." : "No anticoagulation needed for stroke prevention; reassess yearly. Aspirin is not recommended for AF stroke prevention.";
      out.innerHTML = `<p style="margin:0"><b>CHA₂DS₂-VA = ${va}</b> (ESC 2024) · CHA₂DS₂-VASc = ${vasc}</p><p class="qn" style="margin:6px 0 0">${rec} ESC 2024 removed female sex from the score; AHA/ACC still use CHA₂DS₂-VASc (anticoagulate at ≥2 in men, ≥3 in women). Valvular AF (rheumatic mitral stenosis, mechanical valve) needs warfarin regardless of score.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  },

  hasbled(el, U) {
    const it = [["h", "Uncontrolled hypertension (SBP >160)"], ["r", "Abnormal renal function (dialysis, transplant, creatinine >2.26 mg/dL)"], ["l", "Abnormal liver function (cirrhosis, bilirubin >2× / AST-ALT >3× ULN)"], ["s", "Previous stroke"], ["b", "Bleeding history or predisposition (anaemia)"], ["i", "Labile INR (if on warfarin)"], ["e", "Elderly (over 65)"], ["d", "Drugs: antiplatelet or NSAID"], ["a", "Alcohol (≥8 drinks/week)"]];
    el.innerHTML = `<h4>HAS-BLED: bleeding risk on anticoagulation</h4><div class="checks">${it.map(([k, t]) => `<label class="chk"><input type="checkbox" data-k="${k}"> ${t}</label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const s = it.filter(([k]) => U.$(`[data-k=${k}]`, el).checked).length, out = U.$(".out", el);
      out.innerHTML = `<p style="margin:0"><b>HAS-BLED = ${s}/9</b> · ${s >= 3 ? "<b>High bleeding risk</b>" : "Lower bleeding risk"}</p><p class="qn" style="margin:6px 0 0">A high score is a reason to <b>fix modifiable risks</b> (BP, alcohol, NSAIDs, unnecessary aspirin, labile INR) and review more often, <b>not</b> a reason to withhold anticoagulation from a patient at high stroke risk.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  }
});
