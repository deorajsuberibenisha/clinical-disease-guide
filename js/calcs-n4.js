/* New-disease batch N-4 calculators (28 Nov 2026). File: js/calcs-n4.js
   itpplan: ASH 2019 ITP recommendations + Bhutan blood-use guideline (platelets only for life-threatening bleeding). */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const rnd = (x, s) => Math.round(x / s) * s;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  itpplan(el, U) {
    el.innerHTML = `<h4>ITP: observe, steroids or emergency? (ASH 2019 / Bhutan blood guideline)</h4><p class="qn" style="margin:0 0 4px">Only after the film confirms isolated thrombocytopenia and other causes (dengue, leukaemia, HIV, drugs) are considered.</p><div class="row">${sel("pt", "Patient", [["c", "Child (under 18)"], ["a", "Adult"]])}<label>Platelets ×10⁹/L<input type="number" data-k="plt" placeholder="e.g. 18"></label><label>Weight kg<input type="number" step="any" data-k="wt" placeholder="e.g. 16"></label>${sel("bl", "Bleeding", [["n", "None or skin only (petechiae, bruises)"], ["m", "Mucosal, not life-threatening (gums, nose, menses)"], ["l", "Life-threatening (intracranial, major GI/GU)"]])}${sel("ph", "Phase", [["new", "Newly diagnosed"], ["est", "Established ITP (known)"]])}</div><div class="checks" style="margin-top:8px">${chk("far", "Lives far from care / follow-up uncertain")}${chk("risk", "Age over 60, on antiplatelet/anticoagulant, or procedure due")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), child = g("pt").value === "c", plt = U.num(g("plt")), wt = U.num(g("wt")), bl = g("bl").value, isNew = g("ph").value === "new", far = g("far").checked, risk = g("risk").checked, out = U.$(".out", el);
      const L = [];
      if (bl === "l") {
        L.push("<b>Emergency</b>: IV methylprednisolone or dexamethasone, <b>platelet transfusion now</b> (do not delay, especially intracranial bleeding), tranexamic acid, IVIg if obtainable; urgent haematology ± neurosurgery/surgery.");
        if (wt > 0) L.push(`Platelet concentrate: about 1 unit per 10 kg = <b>${Math.max(1, Math.round(wt / 10))} unit${Math.round(wt / 10) > 1 ? "s" : ""}</b> (Bhutan blood guideline; each unit raises the count by 10–20 ×10⁹/L in non-immune patients — less in ITP).`);
      } else if (!(plt > 0)) {
        L.push("Enter the platelet count.");
      } else if (child) {
        if (bl === "n") L.push("<b>Observe</b> as an outpatient — no steroids, no IVIg (ASH 2019 rec. 10–13), with bleeding advice and review in a few days.");
        else {
          const d = wt > 0 ? Math.min(120, wt * 2) : null, d2 = wt > 0 ? Math.min(120, wt * 4) : null;
          L.push(`Mucosal bleeding: <b>prednisolone 2–4 mg/kg/day</b> (max 120 mg) for <b>5–7 days</b>, then stop${d ? ` — for ${wt} kg: ${rnd(d, 5)}–${rnd(d2, 5)} mg daily (5 mg tablets)` : ""}. Not longer than 7 days (rec. 14–15).`);
        }
        if (far) L.push("Admit: distance, social concerns or uncertain follow-up are reasons to admit (rec. 10 remark).");
      } else {
        if (plt < 30 && isNew) {
          const p1 = wt > 0 ? [rnd(wt * 0.5, 5), rnd(wt * 2, 5)] : null;
          L.push(`Count &lt;30: <b>short corticosteroid course</b> — prednisolone 0.5–2 mg/kg/day${p1 ? ` (${p1[0]}–${p1[1]} mg daily for ${wt} kg)` : ""}, total course incl. taper ≤ 6 weeks, <b>or</b> dexamethasone 40 mg daily × 4 days (faster response).`);
        } else if (plt < 30) L.push("Established ITP with count &lt;30: haematology review for second-line options; short steroid course for bleeding.");
        else L.push(risk ? "Count ≥30 but higher risk (age &gt;60, antithrombotics, procedure): steroids may be appropriate — discuss with haematology." : "Count ≥30 with no or minor bleeding: <b>observe</b> (ASH 2019 strong recommendation against steroids).");
        if (isNew && plt < 20) L.push("Newly diagnosed with &lt;20: admission suggested (rec. 2a).");
        else if (far) L.push("Consider admission because follow-up is uncertain.");
        L.push("Haematology follow-up within 24–72 hours; monitor BP, glucose, mood and stomach on steroids.");
      }
      if (bl !== "l") L.push("No platelet transfusion for the count alone (Bhutan blood guideline). Avoid aspirin, NSAIDs and IM injections.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  neuroplan(el, U) {
    el.innerHTML = `<h4>Neuropathy: pattern, likely causes, tests and pain drug (Merck 2026 / NICE CG173)</h4><div class="row">${sel("pat", "Pattern", [["sym", "Distal symmetric (feet first, glove-and-stocking)"], ["asym", "Asymmetric / patchy / single nerves"], ["acute", "Weakness spreading over days–weeks"], ["motor", "Mainly weakness, little sensory loss"]])}<label>eGFR (mL/min)<input type="number" data-k="egfr" placeholder="if known"></label><label>Age<input type="number" data-k="age" placeholder="e.g. 56"></label></div><div class="checks" style="margin-top:8px">${chk("dm", "Diabetes")}${chk("alc", "Alcohol use")}${chk("inh", "On isoniazid (TB treatment/preventive)")}${chk("met", "On metformin, vegetarian diet or macrocytosis")}${chk("hiv", "HIV")}${chk("lep", "Skin patches or thickened nerves")}${chk("chemo", "Chemotherapy (vincristine etc.)")}${chk("cord", "Back pain, sensory level, bladder/bowel change or brisk reflexes")}${chk("pain", "Burning/shooting pain")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, pat = g("pat").value, egfr = U.num(g("egfr")), age = U.num(g("age")), out = U.$(".out", el);
      const L = [];
      if (c("cord")) L.push("<b>Not a peripheral neuropathy pattern</b> — think spinal cord compression or B12 myelopathy: urgent assessment and MRI.");
      if (pat === "acute") L.push("<b>Acute progressive weakness</b>: treat as possible Guillain–Barré — vital capacity, swallowing, admit and refer.");
      if (pat === "asym" || c("lep")) L.push("Asymmetric or patchy: <b>leprosy</b> (feel ulnar, common peroneal, great auricular nerves; skin smear), vasculitis (ESR, ANA, ANCA), diabetic mononeuropathy.");
      if (pat === "motor") L.push("Mainly motor: immune neuropathy (GBS/CIDP), lead, dapsone, porphyria; consider myasthenia or myopathy if sensation is normal — nerve conduction studies.");
      const cause = [];
      if (c("dm")) cause.push("diabetes (HbA1c, glucose control, foot care)");
      if (c("alc")) cause.push("alcohol (stop; thiamine)");
      if (c("inh")) cause.push("isoniazid (pyridoxine)");
      if (c("met")) cause.push("vitamin B12 deficiency (check B12/folate)");
      if (c("hiv")) cause.push("HIV or ART");
      if (c("chemo")) cause.push("chemotherapy (tell the oncologist)");
      if (cause.length) L.push("Likely contributors: " + cause.join("; ") + ".");
      L.push("Baseline tests: fasting glucose/HbA1c, B12 and folate, FBC, kidney and liver tests, TSH, HIV and syphilis" + (age >= 60 ? ", serum protein electrophoresis (age ≥ 60)" : "") + ".");
      if (c("pain")) {
        let gp = "gabapentin 300 mg, increased stepwise to three times daily";
        if (egfr > 0 && egfr < 30) gp = "gabapentin at a reduced renal dose (eGFR &lt;30 — check the formulary)";
        else if (egfr > 0 && egfr < 60) gp = "gabapentin with a lower maximum dose (eGFR &lt;60)";
        L.push(`Pain (NICE CG173): offer <b>amitriptyline</b> 10 mg at night, increased slowly${age >= 65 ? " (older person — watch falls, confusion, urinary retention)" : ""}, <b>or ${gp}</b>. If not effective or not tolerated, switch to another first-line drug. Tramadol only for short rescue; no morphine.`);
      }
      L.push("Feet: monofilament, daily inspection, footwear; refer high-risk feet.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  mgcheck(el, U) {
    el.innerHTML = `<h4>Myasthenia: is this a crisis, and is this drug safe? (International consensus 2016/2020)</h4><div class="checks">${chk("dys", "Choking, cannot swallow saliva or liquids")}${chk("sob", "Breathless, worse lying flat, weak cough")}${chk("cnt", "Cannot count to 20 in one breath")}${chk("neck", "Weak neck flexion / head drop")}${chk("rapid", "Rapid worsening over days")}${chk("inf", "Current infection, surgery or recent delivery")}${chk("preg", "Pregnant")}</div><div class="row" style="margin-top:8px">${sel("drug", "Drug being considered", [["", "— none —"], ["amg", "Gentamicin / amikacin"], ["fq", "Ciprofloxacin / levofloxacin"], ["mac", "Azithromycin / erythromycin"], ["mg", "Magnesium sulfate"], ["bb", "Beta-blocker"], ["cq", "Chloroquine / quinine"], ["ster", "Starting high-dose prednisolone"], ["ok", "Ceftriaxone / amoxicillin / paracetamol"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, d = g("drug").value, out = U.$(".out", el);
      const L = [], resp = c("sob") || c("cnt"), bulb = c("dys");
      if (resp || bulb) L.push("<b>Impending/manifest myasthenic crisis</b>: admit where ICU/ventilation is available; monitor breathing and swallowing several times a day; nil by mouth if swallowing unsafe; IVIg or plasma exchange via specialist; prepare for early ventilation — do not wait for falling SpO₂ (late sign).");
      else if (c("neck") || c("rapid") || c("inf")) L.push("Higher-risk worsening: admit for observation of breathing and bulbar function; treat the trigger; contact neurology.");
      else L.push("No bulbar or breathing warning signs ticked: outpatient plan with neurology; safety-net for choking or breathlessness.");
      const D = { amg: "<b>Avoid</b> — aminoglycosides can precipitate crisis; choose another antibiotic.", fq: "<b>Avoid if possible</b> — fluoroquinolones can worsen MG.", mac: "<b>Use with caution</b> — macrolides can worsen MG; prefer alternatives.", mg: c("preg") ? "<b>Not recommended for eclampsia in MG</b> (consensus) — use phenytoin or a barbiturate." : "<b>Avoid IV magnesium</b> — neuromuscular blocking effect.", bb: "<b>Caution</b> — beta-blockers can worsen weakness.", cq: "<b>Caution</b> — chloroquine/quinine can worsen MG.", ster: "Corticosteroids may <b>transiently worsen</b> weakness: start in hospital or low and slow in generalized MG; in crisis, IVIg/PLEX first.", ok: "No known neuromuscular effect — usual doses." };
      if (d) L.push(D[d]);
      if (c("preg")) L.push("Pregnancy: oral pyridostigmine and prednisolone preferred; no mycophenolate or methotrexate; no IV cholinesterase inhibitors; examine the newborn for transient myasthenia.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  cordcheck(el, U) {
    el.innerHTML = `<h4>Back pain with possible cord compression: what now? (NICE NG234)</h4><div class="checks">${chk("ca", "Past or current cancer")}${chk("pain", "Red-flag back pain (severe, progressive, night, worse on cough/strain, local tenderness)")}${chk("neuro", "Limb weakness, numbness, gait change or sensory level")}${chk("blad", "Bladder or bowel dysfunction / saddle numbness")}${chk("fev", "Fever, raised CRP, diabetes or recent spinal procedure")}${chk("ac", "On anticoagulant or bleeding disorder")}${chk("unst", "Pain on any movement / suspected unstable spine")}${chk("haem", "Known or suspected lymphoma or myeloma")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, out = U.$(".out", el);
      const L = [], neuro = c("neuro") || c("blad");
      if (!c("pain") && !neuro) { out.innerHTML = "<ul style=\"margin:0;padding-left:18px\"><li>Tick the features present.</li></ul>"; return; }
      if (neuro) L.push("<b>Emergency</b>: MRI whole spine within 24 hours (CT if MRI impossible; plain X-ray does not exclude). Contact oncology/neurosurgery now; arrange same-day transfer if MRI is not local.");
      else if (c("ca")) L.push("Cancer + red-flag pain without neurology: specialist advice within 24 h and MRI within 1 week; teach warning symptoms.");
      else L.push("Red-flag pain, no known cancer: urgent assessment for cancer, infection or fracture (NG12/NG234).");
      if (c("ca") && neuro) L.push("<b>Dexamethasone 16 mg</b> orally (or IV equivalent) now, then 16 mg daily until surgery or radiotherapy; omeprazole; check glucose. Stop if MSCC is excluded." + (c("haem") ? " Lymphoma/myeloma: give it with neurological signs, then discuss with haematology." : ""));
      else if (c("ca") && c("haem")) L.push("Suspected lymphoma/myeloma without neurology: get haematology advice before steroids (biopsy).");
      if (c("fev")) L.push("Possible <b>epidural abscess</b> (or TB spine): blood cultures, IV anti-staphylococcal antibiotics after cultures, urgent neurosurgery if any deficit.");
      if (c("ac") && neuro) L.push("Possible <b>epidural haematoma</b>: stop and reverse anticoagulation; urgent decompression.");
      if (c("blad")) L.push("Bladder: scan/catheter for retention; check saddle sensation and anal tone (cauda equina — emergency decompression).");
      if (neuro || c("unst")) L.push((neuro && c("unst") ? "<b>Immobilise now</b> (including transfer): lie flat or slight elevation, log-roll." : "Consider immobilisation for movement-related pain; early expert advice on stability.") + " Prompt analgesia.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  csdhplan(el, U) {
    el.innerHTML = `<h4>Chronic subdural haematoma: next steps (Dex-CSDH 2020 / Santarius 2009)</h4><div class="row"><label>GCS<input type="number" data-k="gcs" placeholder="e.g. 14"></label>${sel("ct", "CT", [["", "Not yet done"], ["sym", "Chronic SDH with mass effect / midline shift"], ["sm", "Small chronic SDH, no mass effect"], ["none", "No subdural collection"]])}</div><div class="checks" style="margin-top:8px">${chk("sx", "New confusion, headache, weakness, speech or gait change")}${chk("war", "On warfarin")}${chk("doac", "On a DOAC (apixaban, rivaroxaban, dabigatran)")}${chk("ap", "On aspirin / clopidogrel")}${chk("sz", "Seizure")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, gcs = U.num(g("gcs")), ct = g("ct").value, out = U.$(".out", el);
      const L = [];
      if (!ct) L.push(c("sx") ? "<b>Non-contrast CT head</b> now (subacute confusion, falls or focal signs in an older person)." : "Tick symptoms and choose the CT result.");
      if (ct === "none") L.push("No subdural collection: look for other causes (stroke, infection, metabolic, dementia).");
      if (ct === "sym" || (ct === "sm" && c("sx"))) L.push("<b>Urgent neurosurgical referral</b>: burr-hole evacuation with a <b>subdural drain</b> where safe (recurrence 9.3% vs 24%).");
      if (ct === "sm" && !c("sx")) L.push("Small, symptom-free: observe, repeat CT and neurological review on neurosurgical advice.");
      if (gcs > 0 && gcs <= 8) L.push("<b>GCS ≤ 8</b>: protect the airway; emergency neurosurgery.");
      else if (gcs > 0 && gcs < 15 && ct === "sym") L.push("Reduced GCS: neurological observations at least hourly; urgent transfer.");
      if (c("war")) L.push("Warfarin: stop; check INR; reverse with IV vitamin K plus plasma or prothrombin complex as available.");
      if (c("doac")) L.push("DOAC: stop; note last dose and kidney function; specific reversal agents are rarely available — discuss with neurosurgery/haematology.");
      if (c("ap")) L.push("Antiplatelet: stop; restart is a joint decision after treatment.");
      if (c("sz")) L.push("Seizure: treat as usual; anti-seizure drug choice with neurology.");
      if (ct && ct !== "none") L.push("<b>Do not give dexamethasone</b> (worse 6-month outcomes in Dex-CSDH).");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }

  });
})();
