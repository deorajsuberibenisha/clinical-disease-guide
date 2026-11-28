/* New-disease batch N-5 calculators (28 Nov 2026). File: js/calcs-n5.js
   myelomacheck: CRAB screen (IMWG 2014 thresholds — marked on page) + NICE NG35/NG12 actions. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  myelomacheck(el, U) {
    el.innerHTML = `<h4>Myeloma: CRAB features and first actions (NICE NG35 / IMWG thresholds — not read directly)</h4><div class="row"><label>Age<input type="number" data-k="age" placeholder="e.g. 67"></label><label>Hb g/L<input type="number" data-k="hb" placeholder="e.g. 86"></label><label>Calcium mmol/L (corrected)<input type="number" step="any" data-k="ca" placeholder="e.g. 3.0"></label><label>Creatinine µmol/L<input type="number" data-k="cr" placeholder="e.g. 210"></label></div><div class="checks" style="margin-top:8px">${chk("bone", "Lytic lesion or pathological fracture")}${chk("pain", "Persistent bone/back pain")}${chk("para", "Paraprotein or abnormal free light-chain ratio found")}${chk("neuro", "Leg weakness, numbness or bladder change")}${chk("inf", "Fever / infection")}${chk("visc", "Blurred vision, bleeding, headache or confusion with very high protein")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, age = U.num(g("age")), hb = U.num(g("hb")), ca = U.num(g("ca")), cr = U.num(g("cr")), out = U.$(".out", el);
      const crab = [];
      if (ca > 2.75) crab.push("C (calcium &gt;2.75)");
      if (cr > 177) crab.push("R (creatinine &gt;177)");
      if (hb > 0 && hb < 100) crab.push("A (Hb &lt;100)");
      if (c("bone")) crab.push("B (bone lesion)");
      const L = [];
      if (c("neuro")) L.push("<b>Possible cord compression</b>: dexamethasone 16 mg now, keep flat if unstable, MRI spine within 24 h.");
      if (ca > 2.75) L.push(`Calcium ${ca} mmol/L: <b>IV 0.9% saline</b>, stop calcium/vitamin D/thiazides, monitor; bisphosphonate via specialist${ca >= 3.5 ? " — <b>severe</b>: urgent senior/haematology care" : ""}.`);
      if (cr > 177) L.push("Kidney injury: fluids, stop NSAIDs and nephrotoxins, avoid contrast; urgent haematology (bortezomib + dexamethasone; no plasma exchange).");
      if (c("inf")) L.push("Infection: blood cultures and early IV antibiotics.");
      if (c("visc")) L.push("Possible hyperviscosity: urgent haematology (plasmapheresis is used for hyperviscosity, not for kidney injury).");
      if (crab.length) L.push(`CRAB features: <b>${crab.join(", ")}</b>${c("para") ? " with a paraprotein — <b>active myeloma likely</b>: urgent haematology referral" : " — check SPEP + serum free light chains (and urine Bence-Jones) now"}.`);
      else if (c("para")) L.push("Paraprotein without CRAB features: MGUS or smouldering myeloma — haematology for marrow/imaging; monitor (smouldering: 3-monthly).");
      else if (c("pain") && age >= 60) L.push("Age ≥ 60 with persistent bone pain (NICE NG12): FBC, calcium, ESR, SPEP and serum free light chains (or urine Bence-Jones).");
      else L.push("Enter results or tick features.");
      if (crab.length || c("para")) L.push("Avoid NSAIDs; hepatitis B, C and HIV tests before treatment; influenza and pneumococcal vaccines.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  pancyto(el, U) {
    el.innerHTML = `<h4>Pancytopenia: clues, severity and safety (ASH 2026 / Bhutan blood guideline; Camitta criteria — standard)</h4><div class="row"><label>Hb g/L<input type="number" data-k="hb" placeholder="e.g. 62"></label><label>Neutrophils ×10⁹/L<input type="number" step="any" data-k="anc" placeholder="e.g. 0.3"></label><label>Platelets ×10⁹/L<input type="number" data-k="plt" placeholder="e.g. 8"></label><label>MCV fL<input type="number" data-k="mcv" placeholder="e.g. 92"></label></div><div class="checks" style="margin-top:8px">${chk("fev", "Fever")}${chk("bl", "Active bleeding")}${chk("spl", "Enlarged spleen")}${chk("blast", "Blasts on film")}${chk("lowret", "Reticulocytes very low")}${chk("hypo", "Marrow biopsy: hypocellular")}${chk("drug", "Recent chemotherapy or marrow-toxic drug")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, hb = U.num(g("hb")), anc = U.num(g("anc")), plt = U.num(g("plt")), mcv = U.num(g("mcv")), out = U.$(".out", el);
      const L = [];
      const ancKnown = g("anc").value !== "";
      if (c("fev") && ancKnown && anc < 0.5) L.push("<b>Febrile neutropenia</b>: blood cultures, broad-spectrum IV antibiotics within 1 hour.");
      if (plt > 0 || g("plt").value === "0") {
        const trig = c("bl") ? 50 : c("fev") ? 20 : 10;
        L.push(plt < trig ? `Platelets ${plt} — <b>below the ${trig} trigger</b> (${c("bl") ? "bleeding" : c("fev") ? "fever/sepsis" : "prophylactic"}): platelet transfusion (Bhutan blood guideline).` : `Platelets ${plt} — above the ${trig} trigger: no routine transfusion; avoid IM injections, aspirin, NSAIDs.`);
      }
      if (c("blast")) L.push("Blasts on film: <b>acute leukaemia</b> — urgent haematology.");
      if (c("spl")) L.push("Big spleen points away from aplastic anaemia: kala-azar, malaria, TB, hypersplenism (cirrhosis), leukaemia/lymphoma.");
      if (mcv > 100) L.push("High MCV: check <b>B12 and folate</b> (megaloblastic) and liver disease; also MDS.");
      if (c("drug")) L.push("Drug/chemotherapy effect likely: stop the offending drug; specialist advice.");
      if (c("hypo") || (c("lowret") && !c("spl") && !c("blast"))) {
        const crit = [ancKnown && anc < 0.5, plt > 0 && plt < 20, c("lowret")].filter(Boolean).length;
        const vsev = ancKnown && anc < 0.2;
        if (c("hypo") && crit >= 2) L.push(`Hypocellular marrow with ${crit} of 3 blood criteria: <b>${vsev ? "very severe" : "severe"} aplastic anaemia</b> (Camitta) — haematology: HLA-type siblings; under 40 with matched sibling → transplant; otherwise ATG + cyclosporine + eltrombopag.`);
        else if (c("hypo")) L.push("Hypocellular marrow without severe counts: non-severe aplastic anaemia possible — haematology follow-up; exclude PNH and hypoplastic MDS.");
        else L.push("Low reticulocytes without spleen or blasts: marrow failure possible — <b>bone marrow aspirate and biopsy</b>.");
      }
      if (ancKnown && anc < 0.5 && c("hypo")) L.push("Neutrophils &lt;0.5 in severe AA: antibiotic and mould-active antifungal prophylaxis (ASH 2026 recs 32–33).");
      if (!L.length) L.push("Enter counts and tick findings.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  dicscore(el, U) {
    el.innerHTML = `<h4>ISTH overt DIC score (Taylor 2001 — not read directly) + what to give</h4><p class="qn" style="margin:0 0 4px">Use only when a condition known to cause DIC is present.</p><div class="row">${sel("plt", "Platelets ×10⁹/L", [["0", "&gt;100"], ["1", "50–100"], ["2", "&lt;50"]])}${sel("dd", "D-dimer / FDP", [["0", "Not raised"], ["2", "Moderately raised"], ["3", "Strongly raised"]])}${sel("pt", "PT prolonged by", [["0", "&lt;3 s"], ["1", "3–6 s"], ["2", "&gt;6 s"]])}${sel("fib", "Fibrinogen", [["0", "&gt;1.0 g/L"], ["1", "&lt;1.0 g/L"]])}<label>Weight kg<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label></div><div class="checks" style="margin-top:8px">${chk("bl", "Bleeding now (or procedure needed)")}${chk("ob", "Obstetric or trauma haemorrhage")}${chk("thr", "Thrombosis is the main problem")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, n = k => +g(k).value, wt = U.num(g("wt")), out = U.$(".out", el);
      const s = n("plt") + n("dd") + n("pt") + n("fib");
      const L = [s >= 5 ? `Score <b>${s}</b> (≥5): compatible with <b>overt DIC</b> — repeat daily.` : `Score <b>${s}</b> (&lt;5): suggestive but not affirmative of overt DIC — repeat in 1–2 days and follow trends.`];
      L.push("<b>Treat the cause first</b> (sepsis source control, deliver/evacuate uterus, antivenom, damage control).");
      if (c("bl")) {
        if (n("plt") === 2) L.push("Platelets &lt;50 with bleeding: <b>platelet transfusion</b>.");
        if (n("pt") >= 1) L.push(`Prolonged PT with bleeding: <b>FFP about 15 mL/kg</b>${wt > 0 ? ` ≈ ${Math.round(wt * 15 / 50) * 50} mL` : ""}.`);
        if (n("fib") === 1 || c("ob")) L.push(c("ob") ? "Obstetric/trauma bleeding: keep fibrinogen up (cryoprecipitate if &lt;1.5 g/L or falling); tranexamic acid." : "Fibrinogen &lt;1.0 g/L with bleeding: <b>cryoprecipitate</b>.");
      } else L.push("Not bleeding: <b>no routine FFP, platelets or cryo</b> for abnormal tests alone (Bhutan blood guideline).");
      if (c("thr") && !c("bl")) L.push("Thrombosis-predominant (slow) DIC: heparin may be indicated — specialist.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  abscessplan(el, U) {
    el.innerHTML = `<h4>Brain abscess: empirical antibiotics and timing (ESCMID 2024; doses standard)</h4><div class="row">${sel("pt", "Patient", [["a", "Adult"], ["c", "Child"]])}<label>Weight kg<input type="number" step="any" data-k="wt" placeholder="e.g. 40"></label>${sel("set", "Setting", [["ca", "Community-acquired"], ["ns", "After neurosurgery / penetrating trauma"]])}</div><div class="checks" style="margin-top:8px">${chk("imm", "Severely immunocompromised (advanced HIV, transplant, chemotherapy)")}${chk("sev", "Severe: reduced GCS, herniation signs, sepsis")}${chk("ns24", "Neurosurgical aspiration possible within ~24 h")}${chk("oed", "Severe oedema / midline shift on scan")}${chk("sz", "Seizure")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, child = g("pt").value === "c", wt = U.num(g("wt")), ns = g("set").value === "ns", out = U.$(".out", el);
      const L = [];
      if (!c("sev") && c("ns24")) L.push("Not severe and aspiration within ~24 h: antibiotics <b>may be withheld until aspiration</b> to improve culture yield (ESCMID, conditional). Take blood cultures now.");
      else L.push("<b>Start antibiotics now</b> after blood cultures (severe disease or surgery not within ~24 h).");
      if (ns) L.push("Post-neurosurgical: <b>meropenem + vancomycin</b> (or linezolid) — doses per formulary/specialist.");
      else {
        if (child) {
          const cf = wt > 0 ? Math.min(2000, Math.round(wt * 50 / 50) * 50) : null, mz = wt > 0 ? Math.round(wt * 7.5 / 25) * 25 : null;
          L.push(`<b>Ceftriaxone</b> 50 mg/kg every 12 h (max 2 g)${cf ? ` = <b>${cf} mg</b> 12-hourly` : ""} + <b>metronidazole</b> 7.5 mg/kg every 8 h${mz ? ` = <b>${Math.min(500, mz)} mg</b> 8-hourly` : ""}.`);
        } else L.push("<b>Ceftriaxone 2 g IV every 12 h + metronidazole 500 mg IV every 8 h</b>.");
        if (c("imm")) L.push("Severe immunocompromise: add <b>cotrimoxazole</b> (Nocardia, Toxoplasma) and <b>voriconazole</b> (fungi); in HIV with low CD4 consider toxoplasmosis treatment and TB.");
      }
      L.push("Duration <b>6–8 weeks</b>; aspiration or excision whenever feasible; treat the source (ear, sinus, teeth, heart).");
      if (c("oed") || c("sev")) L.push("Severe oedema or herniation risk: <b>dexamethasone</b> (ESCMID strong recommendation for this indication only).");
      L.push(c("sz") ? "Seizure: treat (levetiracetam or phenytoin)." : "No routine anti-seizure prophylaxis.");
      L.push("No lumbar puncture before imaging.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  braintumour(el, U) {
    el.innerHTML = `<h4>Could this be a brain tumour? Urgency and first steps (NICE NG12 §1.9 / NG99; red flags standard)</h4><div class="row">${sel("pt", "Patient", [["a", "Adult"], ["c", "Child / young person"]])}</div><div class="checks" style="margin-top:8px">${chk("prog", "Neurological function getting worse over days–weeks (weakness, speech, vision, cognition)")}${chk("sz", "First seizure (adult)")}${chk("icp", "Headache worse lying/morning/cough with vomiting")}${chk("pap", "Papilloedema or drowsiness")}${chk("cer", "New unsteadiness, clumsiness, head tilt or squint (child)")}${chk("ca", "Known cancer")}${chk("fev", "Fever or infection source (ear, sinus, teeth)")}${chk("hiv", "HIV / immunosuppressed")}${chk("herni", "Falling GCS, unequal pupils, slow pulse with high BP")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, child = g("pt").value === "c", out = U.$(".out", el);
      const L = [];
      if (c("herni")) L.push("<b>Herniation signs</b>: emergency — airway, head up 30°, mannitol, emergency CT and neurosurgery.");
      if (child && (c("cer") || c("prog") || c("icp") || c("pap"))) L.push("<b>Very urgent referral (within 48 h)</b> for suspected brain/CNS tumour (NG12 §1.9.2)" + (c("pap") || c("icp") ? " — with raised-pressure signs, same day." : "."));
      if (!child && c("prog")) L.push("<b>Urgent MRI brain</b> (CT if MRI not possible) for progressive sub-acute loss of central neurological function (NG12 §1.9.1).");
      if (!child && c("sz")) L.push("First adult seizure: imaging (CT/MRI) before labelling epilepsy; treat recurrent seizures.");
      if (c("pap") || c("icp")) L.push("Raised-pressure features: <b>same-day imaging</b>; no lumbar puncture before the scan.");
      if (c("fev")) L.push("Fever or infection source: consider <b>brain abscess</b> — blood cultures, ceftriaxone + metronidazole after imaging decision.");
      if (c("ca")) L.push("Known cancer: brain metastasis likely — contrast imaging, extracranial staging; dexamethasone if symptomatic oedema.");
      if (c("hiv")) L.push("Immunosuppressed: lymphoma vs toxoplasmosis vs TB — avoid steroids before biopsy if lymphoma possible; specialist.");
      if (L.length) L.push("If a mass is found: dexamethasone only for symptomatic oedema (with PPI and glucose checks), seizure control (levetiracetam), neurosurgery/neuro-oncology referral at first scan.");
      else L.push("No red flags ticked: likely primary headache — treat, safety-net, review if new features appear.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }

  });
})();
