/* New-disease batch N-2 calculators (27 Nov 2026). File: js/calcs-n2.js
   ieplan: 2023 Duke-ISCVID classification (Fowler 2023 via Merck) + organism-directed regimen (AHA 2015 table via Merck, May 2025);
   doses by weight; NEML 2025 vial sizes (ampicillin 500 mg, benzylpenicillin 5 MU, vancomycin 500 mg, ceftriaxone 1 g, gentamicin 80 mg/2 mL). */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  ieplan(el, U) {
    el.innerHTML = `<h4>Infective endocarditis: Duke-ISCVID 2023 and regimen helper (Fowler 2023 / AHA 2015 via Merck)</h4>
      <p class="qn" style="margin:0 0 6px">Major criteria</p><div class="checks">${chk("M1", "Typical organism in ≥ 2 culture sets (or ≥ 3 for atypical); Coxiella/Bartonella positive")}${chk("M2", "Imaging: vegetation, abscess, perforation, fistula, new regurgitation or prosthetic dehiscence")}${chk("M3", "IE seen at surgery")}</div>
      <p class="qn" style="margin:8px 0 6px">Minor criteria</p><div class="checks">${chk("m1", "Predisposition (valve disease, prosthesis, previous IE, CHD, device, drug injection)")}${chk("m2", "Fever ≥ 38.0 °C")}${chk("m3", "Vascular: emboli, septic lung infarct, mycotic aneurysm, Janeway lesions, conjunctival haemorrhage")}${chk("m4", "Immunological: glomerulonephritis, Osler nodes, Roth spots, rheumatoid factor")}${chk("m5", "Microbiology not meeting a major criterion")}</div>
      <div class="row" style="margin-top:8px">${sel("org", "Organism (if known)", [["", "Not yet known"], ["strs", "Streptococcus, penicillin-sensitive"], ["strr", "Streptococcus, less sensitive (MIC > 0.1)"], ["ent", "Enterococcus"], ["mssa", "S. aureus, methicillin-sensitive"], ["mrsa", "S. aureus, MRSA"], ["hacek", "HACEK"]])}${sel("v", "Valve", [["n", "Native"], ["p", "Prosthetic"]])}<label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 55"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, w = U.num(g("wt")), org = g("org").value, pv = g("v").value === "p", out = U.$(".out", el);
      const M = ["M1", "M2", "M3"].filter(c).length, m = ["m1", "m2", "m3", "m4", "m5"].filter(c).length;
      const cls = (M >= 2 || (M >= 1 && m >= 3) || m >= 5) ? "<b>Definite IE</b>" : ((M >= 1 && m >= 1) || m >= 3) ? "<b>Possible IE</b>" : "Criteria not met for possible IE (consider other causes; recheck as results arrive)";
      const ok = w >= 30 && w <= 150;
      const gent = (mg) => ok ? `${Math.round(mg * w / 10) * 10} mg` : `${mg} mg/kg`;
      const vanco = ok ? `${Math.round(15 * w / 250) * 250} mg (15 mg/kg)` : "15 mg/kg";
      const wk = (n, p) => pv ? p : n;
      const R = {
        "": "Organism not known: if stable, wait for cultures. If septic: <b>vancomycin " + vanco + " IV 12-hourly + ceftriaxone 2 g IV daily</b>" + (pv ? " + gentamicin " + gent(1) + " 8-hourly (prosthetic valve)" : "") + " — refer.",
        strs: `<b>Benzylpenicillin ${pv ? "4 MU IV 4-hourly (24 MU/day)" : "2–3 MU IV 4-hourly (12–18 MU/day)"} for ${wk("4", "6")} weeks</b>, or <b>ceftriaxone 2 g IV daily for ${wk("4", "6")} weeks</b>${pv ? "" : "; uncomplicated native valve: either one + gentamicin " + gent(3) + " once daily for 2 weeks"}. Penicillin allergy: vancomycin ${vanco} 12-hourly.`,
        strr: `<b>Benzylpenicillin 4 MU IV 4-hourly (24 MU/day)${pv ? " or ceftriaxone 2 g daily" : ""} for ${wk("4", "6")} weeks + gentamicin ${gent(3)} once daily for 2 weeks</b>. Allergy: vancomycin ${vanco} 12-hourly.`,
        ent: `<b>Ampicillin 2 g IV 4-hourly + ceftriaxone 2 g IV 12-hourly for 6 weeks</b> (ampicillin 24 × 500 mg vials/day). Allergy: vancomycin ${vanco} 12-hourly + gentamicin ${gent(1)} 8-hourly for 6 weeks.`,
        mssa: pv ? `<b>Cloxacillin 2 g IV 4-hourly for 6–8 weeks + gentamicin ${gent(1)} 8-hourly for 2 weeks + rifampicin 300 mg 8-hourly for 6–8 weeks</b> (rifampicin is TB-restricted on the NEML — specialist).` : `<b>Cloxacillin 2 g IV 4-hourly for 6 weeks</b> (or cefazolin 2 g 8-hourly if no anaphylaxis); right-sided MSSA may need only 2–4 weeks with gentamicin (specialist).`,
        mrsa: `<b>Vancomycin ${vanco} IV 12-hourly for ${wk("6", "6–8")} weeks</b>${pv ? " + gentamicin " + gent(1) + " 8-hourly for 2 weeks + rifampicin 300 mg 8-hourly (specialist)" : ""}; check levels if over 2 g/day.`,
        hacek: `<b>Ceftriaxone 2 g IV daily for ${wk("4", "6")} weeks</b> (or ampicillin 2 g 4-hourly; ciprofloxacin if allergic).`
      };
      out.innerHTML = `<p style="margin:0">${cls} — ${M} major, ${m} minor.</p><p style="margin:6px 0 0">${R[org]}</p><ul style="margin:6px 0 0;padding-left:18px"><li>Gentamicin and vancomycin: adjust for kidney function; use ideal weight in obesity.</li><li>Refer for surgery: heart failure, abscess/heart block, resistant or fungal organism, persistent bacteraemia, vegetation &gt; 10 mm with emboli.</li><li>No anticoagulation start if there are cerebral emboli.</li></ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  pericardplan(el, U) {
    el.innerHTML = `<h4>Pericarditis: diagnosis, admission and first treatment (ACC 2025 via Merck / ICAP / IMPI / Bhutan NTP)</h4><div class="checks">${chk("pain", "Typical pleuritic chest pain (better sitting forward)")}${chk("rub", "Pericardial rub")}${chk("ecg", "Diffuse ST elevation or PR depression")}${chk("crp", "Raised CRP or ESR")}${chk("eff", "New or worsening effusion on echo")}</div><p class="qn" style="margin:8px 0 4px">Danger and high-risk features</p><div class="checks">${chk("tam", "Tamponade signs: low BP, raised JVP, pulsus paradoxus")}${chk("big", "Moderate or large effusion")}${chk("fev", "Fever / subacute onset (weeks)")}${chk("imm", "Immunosuppressed / HIV")}${chk("ac", "On an oral anticoagulant or after trauma")}${chk("trop", "Raised troponin (myopericarditis)")}${chk("fail", "No response to NSAID after 1 week")}</div><div class="row" style="margin-top:8px"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 62"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, w = U.num(g("wt")), out = U.$(".out", el);
      const n = ["rub", "ecg", "crp", "eff"].filter(c).length;
      const dx = !c("pain") ? "Typical pain not ticked — criteria apply to patients with pleuritic chest pain; consider other causes." : n >= 2 ? "<b>Definite pericarditis</b> (" + n + " findings)." : n === 1 ? "<b>Possible pericarditis</b> (1 finding) — repeat ECG, CRP and echo." : "Pericarditis unlikely on current findings.";
      const hr = ["big", "fev", "imm", "ac", "trop", "fail"].filter(c);
      const L = [dx];
      if (c("tam")) L.push("<b>TAMPONADE — immediate echo-guided pericardiocentesis</b>; send fluid for Xpert Ultra, ADA, cell count, culture, cytology. No diuretics.");
      if (hr.length || c("tam")) L.push("<b>Admit</b> — high-risk features present. Look for TB (Xpert on fluid/sputum, HIV test), pus, cancer, uraemia, hypothyroidism.");
      else if (c("pain") && n >= 1) L.push("Low risk: outpatient treatment with review in 1 week.");
      if ((c("big") || c("fev")) ) L.push("In Bhutan treat a large or subacute febrile effusion as <b>possible TB pericarditis</b>: 2HRZE/4HR if confirmed or strongly suspected; prednisolone to reduce constriction in HIV-negative adults (specialist; IMPI).");
      const col = w > 0 ? (w > 70 ? "0.5 mg twice daily" : "0.5 mg once daily") : "0.5 mg once daily (≤ 70 kg) or twice daily (> 70 kg)";
      if (c("pain") && n >= 1 && !c("tam")) L.push(`First-line: <b>ibuprofen 600–800 mg every 6–8 h</b> (or aspirin 325–650 mg every 4–6 h${c("trop") ? "; after MI use aspirin" : ""}) with omeprazole, tapered when pain and CRP settle, <b>+ colchicine ${col} for 3 months</b> (not found on NEML 2025 — check supply). Avoid steroids until TB and pus are excluded.`);
      if (c("ac")) L.push("Review the anticoagulant — bleeding into the pericardium risk.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  cmplan(el, U) {
    el.innerHTML = `<h4>Cardiomyopathy: type and key actions (Merck 2026 / ICMR HF STW 2026)</h4><div class="row"><label>LV ejection fraction (%)<input type="number" step="any" data-k="ef" placeholder="e.g. 30"></label><label>Max LV wall thickness (mm)<input type="number" step="any" data-k="wall" placeholder="e.g. 11"></label><label>LV outflow gradient (mmHg, if known)<input type="number" step="any" data-k="grad" placeholder="e.g. 0"></label><label>Months on full heart-failure treatment<input type="number" step="any" data-k="mo" placeholder="e.g. 0"></label></div><div class="checks" style="margin-top:8px">${chk("dil", "LV dilated on echo")}${chk("atria", "Large atria with non-dilated stiff ventricles")}${chk("preg", "Late pregnancy or within months after delivery")}${chk("alc", "Heavy alcohol use")}${chk("af", "Atrial fibrillation / persistent tachycardia")}${chk("sync", "Unexplained or exertional fainting")}${chk("fh", "Family history of cardiomyopathy or sudden death under 50")}${chk("lbbb", "LBBB with QRS over 150 ms")}${chk("htn", "Long-standing hypertension or aortic stenosis")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, ef = U.num(g("ef")), wall = U.num(g("wall")), grad = U.num(g("grad")) || 0, mo = U.num(g("mo")) || 0, out = U.$(".out", el);
      const L = [];
      const hcm = wall >= 15 && !c("htn");
      if (hcm) L.push(`<b>Hypertrophic cardiomyopathy pattern</b> (wall ${wall} mm without another cause)${grad >= 30 ? ` with outflow obstruction (${grad} mmHg)` : ""}: beta-blocker or verapamil/diltiazem${grad >= 100 ? " (no verapamil at this gradient)" : ""}; <b>avoid nitrates, dihydropyridines, high-dose diuretics, dehydration, alcohol and heat</b>.${grad >= 50 ? " Gradient ≥ 50 mmHg with symptoms despite drugs: refer for myosin inhibitor or septal reduction." : ""}`);
      else if (wall >= 15 && c("htn")) L.push("Thick wall with hypertension or aortic stenosis — likely secondary hypertrophy; treat the cause; HCM still possible if out of proportion.");
      if (c("atria") && !(ef < 50)) L.push("<b>Restrictive pattern</b>: look for amyloid, sarcoid, iron overload (ferritin), endomyocardial fibrosis/eosinophilia; gentle diuretics; anticoagulate if AF or clot.");
      if (ef > 0 && ef < 50) {
        L.push(`<b>${c("dil") ? "Dilated cardiomyopathy" : "Reduced ejection fraction"}</b> (EF ${ef}%): decongest, then beta-blocker, ARNI/ACE inhibitor, spironolactone and SGLT2 inhibitor as tolerated (see Heart failure page).`);
        const causes = [];
        if (c("alc")) causes.push("<b>stop alcohol completely</b> and give thiamine — function often improves");
        if (c("af")) causes.push("control the rhythm/rate — tachycardia can itself cause cardiomyopathy");
        causes.push("check TSH, Hb, HIV, iron studies, chemotherapy history");
        L.push("Reversible causes: " + causes.join("; ") + ".");
        if (ef <= 35 && mo >= 3) L.push("<b>EF ≤ 35% after ≥ 3 months of treatment: refer for ICD</b>" + (c("lbbb") ? " and <b>CRT</b> (LBBB, QRS > 150 ms)" : "") + ".");
        else if (ef <= 35) L.push("EF ≤ 35%: optimise treatment for 3 months, then repeat echo for ICD/CRT decision.");
        if (c("preg")) L.push("<b>Possible peripartum cardiomyopathy</b>: in pregnancy avoid ACE inhibitor/ARB/ARNI/MRA/SGLT2i — use beta-blocker, hydralazine + nitrate, diuretic; anticoagulate if EF very low; joint obstetric–cardiology care; counsel about future pregnancy.");
      }
      if (c("sync") || c("fh")) L.push("<b>Sudden-death risk features</b> — Holter, specialist risk assessment for ICD; screen first-degree relatives (ECG + echo).");
      if (!L.length) L.push("Enter echo findings (EF, wall thickness) to classify.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  arrhyplan(el, U) {
    el.innerHTML = `<h4>Arrhythmia: first actions (RCUK 2025 / ICMR STWs / Bhutan EM booklet)</h4><div class="row">${sel("pt", "Patient", [["a", "Adult"], ["c", "Child"]])}<label>Weight (kg, child)<input type="number" step="any" data-k="wt" placeholder="e.g. 18"></label><label>Heart rate<input type="number" data-k="hr" placeholder="e.g. 190"></label>${sel("qrs", "QRS", [["n", "Narrow (< 0.12 s)"], ["b", "Broad (≥ 0.12 s)"]])}${sel("reg", "Rhythm", [["r", "Regular"], ["i", "Irregular"]])}</div><div class="checks" style="margin-top:8px">${chk("unst", "Life-threatening features (shock, syncope + low BP, ischaemia, severe heart failure)")}${chk("pre", "Known WPW / pre-excitation")}${chk("tdp", "Polymorphic, twisting (torsades)")}${chk("asys", "Asystole risk: recent asystole, Mobitz II, broad-QRS complete block, pause > 3 s")}${chk("drug", "On beta-blocker, CCB or digoxin / possible overdose")}${chk("k", "High potassium / peaked T waves / kidney failure")}${chk("asth", "Asthma")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, hr = U.num(g("hr")), child = g("pt").value === "c", w = U.num(g("wt")), broad = g("qrs").value === "b", irr = g("reg").value === "i", out = U.$(".out", el);
      const L = [];
      if (!(hr > 0)) { out.textContent = "Enter the heart rate."; return; }
      const r1 = v => Math.round(v * 10) / 10;
      if (hr < 60) {
        if (c("k")) L.push("<b>Hyperkalaemia possible: calcium gluconate 10% 10 mL IV over 10 min first</b>, then insulin–glucose; check potassium.");
        if (c("drug")) L.push("Stop the slowing drug; beta-blocker/CCB overdose: glucagon (specialist).");
        if (c("unst") || c("asys")) {
          L.push(child ? "Child: oxygenate and ventilate first (hypoxia is the usual cause); then adrenaline per paediatric life support." : "<b>Atropine 500 mcg IV</b> (NEML ampoule 0.6 mg), repeat to max 3 mg.");
          if (c("asys") || c("unst")) L.push("No response or asystole risk: <b>adrenaline 2–10 mcg/min IV</b> or dopamine, <b>transcutaneous pacing</b>; arrange transvenous pacing (JDWNRH).");
        } else L.push("Stable slow rhythm: 12-lead ECG, potassium, TSH, drug review; refer for pacing if complete/advanced block, Mobitz II, or symptomatic pauses > 3 s.");
      } else if (hr >= 100) {
        if (c("unst")) L.push(child ? `<b>Synchronised shock ${w > 0 ? r1(w) + "–" + r1(2 * w) + " J" : "0.5–1 J/kg then 2 J/kg"}</b> with sedation.` : "<b>Synchronised shock up to 3 attempts</b> (sedation); Bhutan booklet narrow regular 50–100 J; then amiodarone 300 mg IV over 10–20 min and repeat.");
        else if (c("tdp")) L.push("<b>Torsades: magnesium 8 mmol (2 g) IV over 10 min</b>; raise rate (isoprenaline/pacing); avoid amiodarone; correct K and stop QT drugs.");
        else if (broad && !irr) L.push(child ? "Broad regular in a child: expert help; synchronised shock if any deterioration." : "<b>Treat as VT: amiodarone 300 mg IV over 10–60 min, then 900 mg over 24 h</b>; synchronised shock if drugs fail.");
        else if (broad && irr) L.push(c("pre") ? "<b>Pre-excited AF: NO adenosine, verapamil, diltiazem or digoxin</b> — procainamide or synchronised cardioversion." : "Irregular broad: likely AF with bundle branch block — rate control; if pre-excitation possible, avoid AV-node blockers.");
        else if (!broad && irr) L.push("Irregular narrow (AF/flutter with variable block): rate control — beta-blocker, diltiazem or digoxin (digoxin/beta-blocker if EF < 40%); anticoagulate if > 24 h (see AF page).");
        else {
          const d1 = child ? (w > 0 ? Math.min(6, r1(0.1 * w)) + " mg" : "0.1 mg/kg (max 6 mg)") : "6 mg", d2 = child ? (w > 0 ? Math.min(12, r1(0.2 * w)) + " mg" : "0.2 mg/kg (max 12 mg)") : "12 mg, then 18 mg";
          L.push(`<b>Narrow regular: vagal manoeuvres</b> (modified Valsalva${child ? "; ice to the face in infants" : ""}), then <b>adenosine ${d1}</b> rapid IV push with a fast flush, then <b>${d2}</b>, recording the ECG.${c("pre") ? " Avoid if pre-excited AF." : ""}${c("asth") ? " Asthma: adenosine may cause bronchospasm — consider diltiazem instead." : ""}`);
          L.push(child ? "If adenosine fails in a child: expert (paediatric cardiology) help; synchronised shock if any deterioration — <b>no verapamil in infants</b>." : "If adenosine fails: verapamil or diltiazem, or a beta-blocker (not together); then synchronised shock.");
          if (!child && hr < 150) L.push("Rate under 150 with gradual onset — think sinus tachycardia and treat the cause; do not use drugs or shocks to slow sinus tachycardia.");
        }
      } else L.push("Rate 60–99: not a tachy- or brady-arrhythmia by rate; review the ECG for block or ectopy.");
      L.push("Always: oxygen if SpO₂ < 94%, IV access, 12-lead ECG during the rhythm, potassium/magnesium.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  pdplan(el, U) {
    el.innerHTML = `<h4>Parkinsonism: probable PD? and levodopa plan (NICE NG71 / Merck 2026 / NEML 250/25 tablet)</h4><div class="checks">${chk("brady", "Bradykinesia (slow, shrinking finger taps or movements)")}${chk("trem", "Rest tremor")}${chk("rig", "Rigidity")}${chk("uni", "Started on one side")}</div><p class="qn" style="margin:8px 0 4px">Other causes / red flags</p><div class="checks">${chk("drug", "Antipsychotic, metoclopramide, prochlorperazine or flunarizine in last 6 months")}${chk("young", "Onset under 40")}${chk("falls", "Falls or dementia in the first year")}${chk("gaze", "Gaze palsy, cerebellar or pyramidal signs, severe early autonomic failure")}${chk("action", "Tremor mainly when holding posture or moving, both hands, head or voice")}</div><div class="row" style="margin-top:8px">${sel("qol", "Symptoms affect daily life?", [["y", "Yes"], ["n", "No"]])}<label>Current levodopa tablets (250/25) per day<input type="number" step="any" data-k="tabs" placeholder="e.g. 0"></label><label>Age<input type="number" data-k="age" placeholder="e.g. 66"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, tabs = U.num(g("tabs")) || 0, age = U.num(g("age")), out = U.$(".out", el);
      const L = [];
      const park = c("brady") && (c("trem") || c("rig"));
      if (c("action") && !c("brady")) L.push("<b>Probably essential tremor</b> (action/postural, no bradykinesia) — not Parkinson's; levodopa will not help.");
      else if (!park) L.push("Parkinsonism needs <b>bradykinesia plus rest tremor and/or rigidity</b> — not met yet; review.");
      else {
        if (c("drug")) L.push("<b>Possible drug-induced parkinsonism</b> — stop or switch the drug and review in weeks; refer if it persists.");
        if (c("young")) L.push("Onset under 40: exclude <b>Wilson's disease</b> (caeruloplasmin, liver tests, slit-lamp) — refer.");
        if (c("falls") || c("gaze")) L.push("<b>Red flags for atypical parkinsonism</b> (PSP, MSA, Lewy body, vascular) — neurologist; response to levodopa may be poor.");
        if (!c("drug")) L.push(`<b>${c("uni") && !c("falls") && !c("gaze") ? "Probable Parkinson's disease" : "Parkinsonism"}</b> — refer to a neurologist (JDWNRH); review the diagnosis every 6–12 months.`);
        if (g("qol").value === "y" && !c("drug")) {
          if (tabs <= 0) L.push("Start <b>levodopa/carbidopa ¼ tablet (62.5 mg levodopa) three times a day</b>, 30–60 min before meals; increase by ¼ tablet per dose every 4–7 days to benefit (most need 400–1200 mg/day = about 1½–5 tablets in 3–5 doses).");
          else L.push(`Current: ${tabs} tablet(s)/day = ${Math.round(tabs * 250)} mg levodopa. If still limited, increase by ¼ tablet per dose every 4–7 days, or split into 4–5 smaller doses for wearing off (specialist).`);
          L.push("Nausea: take with a biscuit; domperidone, <b>not metoclopramide</b>. Warn about sleepiness (no driving) and impulse control problems.");
        } else if (!c("drug")) L.push("Symptoms not affecting life: exercise and therapy; levodopa can wait (NICE allows agonist/MAO-B where available).");
        if (age >= 65 || c("falls")) L.push("Avoid trihexyphenidyl (confusion, retention, falls).");
        L.push("<b>Never stop levodopa suddenly</b>; NG tube if nil by mouth. For hallucinations: low-dose quetiapine — never haloperidol, chlorpromazine or olanzapine.");
      }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  crcplan(el, U) {
    el.innerHTML = `<h4>Colorectal cancer: referral and adjuvant helper (NICE NG12 / ICMR 2014)</h4><div class="row"><label>Age<input type="number" data-k="age" placeholder="e.g. 58"></label><label>FIT result (µg Hb/g, if done)<input type="number" step="any" data-k="fit" placeholder="optional"></label>${sel("st", "Pathological stage (after surgery)", [["", "Not yet staged"], ["1", "Stage I"], ["2", "Stage II"], ["3", "Stage III (node-positive)"], ["4", "Stage IV (metastatic)"]])}</div><div class="checks" style="margin-top:8px">${chk("bleed", "Rectal bleeding")}${chk("bh", "Change in bowel habit")}${chk("ida", "Iron-deficiency anaemia")}${chk("wl", "Unexplained weight loss")}${chk("pain", "Abdominal pain")}${chk("mass", "Abdominal or rectal mass")}${chk("hr", "High-risk stage II feature (< 12 nodes, poor differentiation, LVI/PNI, obstruction/perforation, pT4, positive margin)")}${chk("dmmr", "MMR-deficient tumour")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, age = U.num(g("age")), fit = U.num(g("fit")), st = g("st").value, out = U.$(".out", el);
      const L = [];
      const any = ["bleed", "bh", "ida", "wl", "pain", "mass"].some(c);
      if (!st) {
        if (c("mass")) L.push("<b>Mass — refer directly</b> for colonoscopy/biopsy (rectal mass: suspected cancer pathway).");
        const nice = c("bh") || c("ida") || (age >= 40 && c("wl") && c("pain")) || (age >= 50 && (c("bleed") || c("pain") || c("wl"))) || (age < 50 && c("bleed") && (c("pain") || c("wl")));
        if (nice && !c("mass")) L.push("Meets NICE NG12 criteria for FIT-guided referral." + (fit >= 10 ? " <b>FIT " + fit + " µg/g (≥ 10) — refer urgently for colonoscopy.</b>" : fit > 0 ? " FIT below 10 — safety-net; refer anyway if strong clinical concern." : " In Bhutan, go straight to colonoscopy where available."));
        else if (any && !c("mass")) L.push("Symptoms below NICE thresholds — examine (including rectal exam), CBC; review and refer if they persist.");
        if (age > 0 && age < 50 && any) L.push("Under 50: do not dismiss symptoms; ask about family history (Lynch, FAP).");
        if (!any && !c("mass")) L.push("Tick symptoms, or choose a stage for treatment advice.");
      } else {
        if (st === "1") L.push("Stage I: surgery alone; follow-up with colonoscopy at 1 year, then every 3 years.");
        if (st === "2") L.push(c("dmmr") ? "Stage II, MMR-deficient: <b>no adjuvant 5-FU</b> (no benefit); follow-up." : c("hr") ? "High-risk stage II: discuss <b>capecitabine monotherapy</b> (5-FU + folinic acid if capecitabine unavailable)." : "Stage II, no adverse features: benefit of chemotherapy small (~3.5%) — discuss; follow-up.");
        if (st === "3") L.push("Stage III: <b>adjuvant FOLFOX or CAPEOX</b> (oncologist). NEML has 5-FU and folinic acid but not oxaliplatin or capecitabine — plan supply/referral.");
        if (st === "4") L.push("Stage IV: MDT — resectable liver/lung metastases may be cured with surgery + chemotherapy; otherwise palliative chemotherapy and supportive care.");
        L.push("Follow-up: CEA and clinical review every 3–6 months initially; CT at intervals; colonoscopy 1 year after surgery then every 3 years.");
      }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }

  });
})();
