/* Seizure calculators.
   statusepi: timed status epilepticus pathway with weight-based doses (NICE NG217; AES 2016, Glauser; ESETT, Kapur NEJM 2019;
              EcLiPSE/ConSEPT Lancet 2019; RAMPART NEJM 2012; WHO neonatal seizures 2011; Bhutan STG 2024 §7.7, §12.1.1; NEML 2025).
   febsz: febrile seizure — simple or complex, and who needs a lumbar puncture (AAP 2011 febrile seizure guideline; NICE CKS; Bhutan STG §12.1.1). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  statusepi(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Convulsive status epilepticus — timed doses by weight</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60 or 14"></label>
      ${sel("age", "Patient", [["a", "Adult (or child 50 kg and over)"], ["c", "Child (1 month and over)"], ["n", "Neonate (under 1 month)"]])}
      ${sel("iv", "IV access", [["y", "Yes"], ["n", "No"]])}
      ${sel("bz", "Benzodiazepine doses already given (including pre-hospital)", [["0", "None"], ["1", "One"], ["2", "Two or more"]])}
      ${sel("preg", "Pregnant 20 weeks or more, or within 6 weeks of delivery", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const w = U.num(g("wt")), age = g("age").value, iv = g("iv").value === "y", bz = +g("bz").value, preg = g("preg").value === "y";
      if (!(w > 0) || w > 200) { out.textContent = "Enter the weight."; return; }
      const r1 = v => Math.round(v * 10) / 10, r0 = Math.round, r50 = v => Math.round(v / 50) * 50, cap = Math.min;
      const L = [];
      L.push(`<b>0–5 min:</b> time it; airway, recovery position, oxygen; <b>check glucose</b> — if under 3 mmol/L give ${age === "a" ? "25 g dextrose (50 mL of 50% or 250 mL of 10%) IV, after thiamine 250–500 mg IV if alcohol or malnutrition" : `10% dextrose ${r0(2 * w)} mL IV (2 mL/kg)`}. Look for fever, rash, head injury, poisoning.`);
      if (preg && age === "a") {
        L.push(`<b>Eclampsia until proven otherwise:</b> magnesium sulfate 4 g IV over 5–10 minutes, then maintenance (WHO Pritchard regimen: 10 g IM, 5 g in each buttock; or Zuspan: 1 g/hour IV infusion) — not benzodiazepines alone. Recurrent seizure: further 2 g IV. Call obstetrics; deliver once stable.`);
      }
      if (age === "n") {
        L.push(`<b>Neonate — first line: phenobarbital ${r1(20 * w)} mg IV</b> (20 mg/kg) over 15–20 minutes; if seizures continue, a further ${r1(10 * w)} mg (10 mg/kg), up to 40 mg/kg in total, with breathing support ready (WHO 2011).`);
        L.push(`Correct glucose, calcium (10% calcium gluconate ${r1(2 * w)} mL IV over 10 minutes if low), magnesium; treat sepsis or meningitis (cultures, ampicillin + gentamicin). Second line: phenytoin ${r1(20 * w)} mg IV over 30 minutes, or midazolam infusion (NICU).`);
      } else if (bz < 2) {
        const dzIV = age === "a" ? cap(r1(0.15 * w), 10) : cap(r1(0.3 * w), 10), dzPR = age === "a" ? cap(r1(0.5 * w), 20) : cap(r1(0.5 * w), 10);
        const mzB = cap(r1(0.3 * w), 10), mzIM = age === "a" ? (w >= 40 ? 10 : 5) : cap(r1(0.2 * w), 10);
        L.push(`<b>At 5 min — benzodiazepine ${bz === 1 ? "(second and last dose)" : "(first dose; may repeat once after 5–10 min)"}:</b> ${iv ? `diazepam <b>${dzIV} mg IV</b> over 2–5 minutes${age === "c" ? " (0.3 mg/kg, Bhutan STG)" : ""}, or midazolam ${cap(r1(0.15 * w), 10)} mg IV` : `midazolam <b>${mzB} mg buccal</b> or <b>${mzIM} mg IM</b>, or diazepam <b>${dzPR} mg rectally</b> (0.5 mg/kg)`}. Not IM diazepam.`);
        L.push(`If the seizure continues 5–10 minutes after the ${bz === 1 ? "second" : "next"} dose, move to second line — no more than two benzodiazepine doses in total.`);
      }
      if (age !== "n") {
        const rr = age === "a" ? r50 : (v => Math.round(v / 10) * 10);
        const lev = age === "a" ? cap(rr(60 * w), 4500) : cap(rr(40 * w), 3000), pht = cap(rr(20 * w), 2000), pb = cap(rr(20 * w), 1000);
        L.push(`<b>At about 20 min (after 2 benzodiazepine doses) — second line, choose one:</b><br>• <b>Levetiracetam ${lev} mg IV</b> (${age === "a" ? "60 mg/kg, max 4.5 g" : "40 mg/kg, max 3 g"}) in 100 mL saline over ${age === "a" ? "10–15" : "5"} minutes — preferred where available (listed to DH).<br>• <b>Phenytoin ${pht} mg IV</b> (20 mg/kg) in 0.9% saline over at least ${r0(cap(Math.max(pht / 50, 20), 60))} minutes (no faster than ${age === "a" ? "50 mg/min" : "1 mg/kg/min"}), with ECG monitoring.<br>• ${age === "a" ? "Valproate 40 mg/kg IV (not available in Bhutan)" : "Phenobarbital " + pb + " mg IV (20 mg/kg) over 20 minutes if the others are unavailable"}.`);
        L.push(`<b>At 40 min — still seizing:</b> try the other second-line drug or phenobarbital ${pb} mg IV (20 mg/kg) while arranging ICU; then anaesthesia (midazolam, propofol or thiopental infusion) with intubation and EEG where possible. Refer to a hospital with an ICU.`);
      }
      L.push("Throughout: look for the cause — missed anti-seizure medicines, alcohol withdrawal, hypoglycaemia, low sodium or calcium, meningitis/encephalitis, cerebral malaria, head injury, eclampsia, isoniazid or other poisoning (pyridoxine for isoniazid).");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Doses are calculated from the weight entered; check them against the chapter and BNF/BNFc before giving. Have a bag-valve-mask ready: respiratory depression is commonest after a third benzodiazepine or after phenobarbital.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  febsz(el, U) {
    const ck = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Seizure with fever — simple febrile seizure, complex, or something else?</h4><div class="row">
      <label>Age (months)<input type="number" step="any" data-k="age" placeholder="e.g. 18"></label></div>
      <div class="checks" style="margin-top:10px">
      ${ck("focal", "Focal features (one side, eyes or head turned, or weakness after — Todd's paresis)")}
      ${ck("long", "Lasted 15 minutes or longer")}
      ${ck("rep", "More than one seizure within 24 hours (or in the same illness)")}
      ${ck("noRec", "Not fully back to normal within 1 hour")}
      ${ck("men", "Neck stiffness, bulging fontanelle, purpura, or very drowsy/irritable")}
      ${ck("abx", "Already on antibiotics (may mask meningitis)")}
      ${ck("vacc", "Not fully vaccinated against Hib and pneumococcus")}
      ${ck("prior", "Previous seizures without fever, or known neurological problem")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const on = k => U.$(`[data-k=${k}]`, el).checked, a = U.num(U.$("[data-k=age]", el));
      const out = U.$(".out", el), L = [];
      if (!(a >= 0)) { out.textContent = "Enter the age in months."; return; }
      if (on("prior")) L.push("<b>Not a febrile seizure by definition:</b> a child with previous afebrile seizures or a neurological disorder has a seizure provoked by fever — assess as epilepsy or the underlying condition.");
      else if (a < 6 || a > 60) L.push(`<b>Age ${a} months is outside 6–60 months:</b> do not label this a febrile seizure. ${a < 6 ? "In a young infant, seizure with fever means a full sepsis work-up including lumbar puncture." : "In an older child, look carefully for CNS infection, epilepsy or another cause."}`);
      else {
        const complex = on("focal") || on("long") || on("rep");
        L.push(complex ? "<b>Complex febrile seizure</b> (focal, prolonged or repeated): admit for observation; examine carefully; investigate the fever source; consider LP and, for focal or prolonged seizures, neuroimaging and EEG by a paediatrician." : "<b>Simple febrile seizure</b> (generalised, under 15 minutes, once in 24 hours, full recovery): no blood tests, EEG or imaging needed for the seizure itself; find and treat the fever source; reassure and teach first aid.");
      }
      const lp = on("men") || on("noRec"), lpConsider = on("abx") || (on("vacc") && a >= 6 && a <= 12);
      if (lp) L.push("<b>Lumbar puncture indicated</b> (meningeal signs or slow recovery) if no contraindication — and give antibiotics without waiting: see the meningitis chapter.");
      else if (lpConsider) L.push("<b>Consider lumbar puncture</b> (AAP 2011): child on antibiotics, or 6–12 months with incomplete Hib/pneumococcal vaccination.");
      L.push("Seizure still going at 5 minutes: diazepam 0.5 mg/kg rectally or 0.3 mg/kg IV (STG), or buccal midazolam. Paracetamol for comfort only — it does not prevent recurrence.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">About 1 in 3 children has another febrile seizure; risk of later epilepsy is about 2–3% after a simple febrile seizure (slightly above the general population).</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
