/* New-disease batch N-7 calculators (28 Nov 2026). File: js/calcs-n7.js
   dilicalc: R value, pattern, Hy's law, Merck significance criteria, anti-TB stop rule (Bhutan TB guideline via TB page). */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  dilicalc(el, U) {
    el.innerHTML = `<h4>DILI: R value, pattern and severity (AASLD 2023 / Merck)</h4><div class="row"><label>ALT U/L<input type="number" data-k="alt" placeholder="e.g. 620"></label><label>ALT upper limit<input type="number" data-k="altu" placeholder="e.g. 40"></label><label>ALP U/L<input type="number" data-k="alp" placeholder="e.g. 140"></label><label>ALP upper limit<input type="number" data-k="alpu" placeholder="e.g. 120"></label><label>Bilirubin mg/dL<input type="number" step="any" data-k="bil" placeholder="e.g. 4.2"></label><label>INR<input type="number" step="any" data-k="inr" placeholder="e.g. 1.3"></label></div><div class="checks" style="margin-top:8px">${chk("tb", "On anti-TB treatment")}${chk("sym", "Symptoms (nausea, vomiting, abdominal pain)")}${chk("conf", "Confusion / drowsiness")}${chk("rash", "Fever, rash, eosinophilia")}${chk("pcm", "Possible paracetamol overdose")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, alt = U.num(g("alt")), altu = U.num(g("altu")), alp = U.num(g("alp")), alpu = U.num(g("alpu")), bil = U.num(g("bil")), inr = U.num(g("inr")), out = U.$(".out", el);
      const L = [];
      if (!(alt > 0 && altu > 0)) { out.innerHTML = "<ul style=\"margin:0;padding-left:18px\"><li>Enter ALT and its upper limit of normal (and ALP for the pattern).</li></ul>"; return; }
      const xa = alt / altu, xp = alp > 0 && alpu > 0 ? alp / alpu : null;
      if (xp) { const R = xa / xp; L.push(`ALT ${xa.toFixed(1)}×ULN, ALP ${xp.toFixed(1)}×ULN → <b>R = ${R.toFixed(1)}</b>: <b>${R > 5 ? "hepatocellular" : R < 2 ? "cholestatic" : "mixed"}</b> pattern.`); }
      else L.push(`ALT ${xa.toFixed(1)}×ULN (enter ALP for the R value).`);
      const sig = xa > 5 || (xp && xp > 2) || ((bil > 2.5 || inr > 1.5) && (xa > 1 || (xp && xp > 1)));
      L.push(sig ? "<b>Clinically significant DILI</b> criteria met (confirm on a repeat test ≥24 h apart for enzyme-only criteria)." : "Below the clinically significant DILI thresholds — monitor; stop the drug if rising or symptomatic.");
      if (xa > 3 && bil > 2.5 && (!xp || xp < 2)) L.push("<b>Hy's law</b> (ALT &gt;3×ULN + bilirubin &gt;2.5 mg/dL): high risk of liver failure/death — admit, monitor INR and mental state.");
      if (inr > 1.5 || c("conf")) L.push("<b>INR &gt;1.5 or confusion = acute liver failure</b> — urgent liver/transplant-capable centre; acetylcysteine (3 days in adults), vitamin K, avoid sedatives.");
      if (c("pcm")) L.push("Paracetamol: give <b>acetylcysteine</b> now (do not wait if overdose is likely) — see Poisoning page.");
      if (c("tb")) {
        const stop = xa >= 5 || (xa >= 3 && (c("sym") || bil > 3));
        L.push(stop ? "Anti-TB treatment: <b>stop all anti-TB drugs</b> (ALT ≥5×ULN, or ≥3×ULN with symptoms/jaundice); reintroduce one at a time when ALT &lt;2×ULN — see TB page." : "Anti-TB treatment: below the stop threshold — continue with close review and repeat tests; stop if symptoms or jaundice appear.");
      }
      if (c("rash")) L.push("Hypersensitivity features (possible DRESS): stop the drug; steroids may be needed — specialist.");
      L.push("Always: viral hepatitis serology (A, B, C, E), ultrasound, full drug/herbal history; do not casually rechallenge.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  alfcheck(el, U) {
    el.innerHTML = `<h4>Liver failure: ALF or ACLF, and first actions (Merck 2025 citing ACG 2023 / EASL 2017)</h4><div class="row"><label>INR<input type="number" step="any" data-k="inr" placeholder="e.g. 2.4"></label>${sel("enc", "Encephalopathy (West Haven — standard)", [["0", "None"], ["1", "Grade 1: mild confusion"], ["2", "Grade 2: drowsy, disoriented"], ["3", "Grade 3: very drowsy, incoherent"], ["4", "Grade 4: coma"]])}<label>Glucose mmol/L<input type="number" step="any" data-k="glu" placeholder="e.g. 2.8"></label><label>Weight kg<input type="number" step="any" data-k="wt" placeholder="e.g. 55"></label></div><div class="checks" style="margin-top:8px">${chk("chronic", "Known cirrhosis / chronic liver disease")}${chk("pcm", "Paracetamol involved")}${chk("preg", "Pregnant")}${chk("inf", "Fever, low BP or other infection sign")}${chk("aki", "Acute kidney injury")}${chk("bleed", "Bleeding or procedure planned")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, inr = U.num(g("inr")), enc = +g("enc").value, glu = U.num(g("glu")), wt = U.num(g("wt")), out = U.$(".out", el);
      const L = [];
      if (c("chronic")) L.push(enc > 0 || inr >= 1.5 ? "<b>Acute-on-chronic liver failure</b> pathway: find and treat the trigger (infection/SBP, GI bleed, alcohol, HBV flare, drugs); albumin for SBP/AKI; lactulose for encephalopathy; ICU." : "Chronic liver disease without encephalopathy/INR rise — decompensation assessment.");
      else if (inr >= 1.5 && enc > 0) L.push(`<b>Acute liver failure</b> (INR ${inr}, encephalopathy grade ${enc}). Contact ICU and a transplant-capable centre; <b>transfer early</b>.`);
      else if (inr >= 1.5) L.push("INR ≥1.5 without encephalopathy: <b>severe acute liver injury</b> — admit, check mental state at least every few hours; act at first confusion.");
      else L.push("Enter INR and encephalopathy grade.");
      if (!c("chronic") && (inr >= 1.5 || c("pcm"))) {
        let n = "<b>Acetylcysteine</b> 150 → 50 → 100 mg/kg over 1, 4 and 16 h";
        if (wt > 0) { const w = Math.min(wt, 110); n += ` = ${Math.round(w * 150)} mg, ${Math.round(w * 50)} mg, ${Math.round(w * 100)} mg (weight capped at 110 kg)`; }
        L.push(n + (c("pcm") ? "." : " — recommended for non-paracetamol ALF in adults too."));
      }
      if (glu > 0 && glu < 4) L.push(`Glucose ${glu} mmol/L: <b>treat now</b> and start a 10% dextrose infusion; check glucose frequently.`);
      else L.push("Glucose checks frequently; 10% dextrose infusion if low (encephalopathy hides hypoglycaemia).");
      if (enc >= 3) L.push("Grade 3–4: head up 30°, <b>early intubation</b>, minimal sedation; mannitol 0.5–1 g/kg for raised ICP" + (c("aki") ? " — <b>not with AKI</b>; renal replacement therapy (also clears ammonia)." : "; CT head if worsening."));
      else if (enc > 0) L.push("Avoid sedatives; lactulose is not helpful in ALF (use only in ACLF/cirrhosis).");
      if (c("inf")) L.push("Infection sign: cultures and <b>antibiotics now</b> (± antifungal); noradrenaline if hypotension persists after fluids.");
      L.push(c("bleed") ? "Bleeding/procedure: FFP (± platelets) is appropriate now." : "No FFP just to correct INR (volume overload; INR is the prognostic marker).");
      if (c("preg")) L.push("Pregnancy: hepatitis E, acute fatty liver of pregnancy, HELLP — urgent obstetric team; delivery treats AFLP/HELLP.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  aihscore(el, U) {
    el.innerHTML = `<h4>Simplified IAIHG score for autoimmune hepatitis (as tabulated in APASL 2021)</h4><div class="row">${sel("ab", "Autoantibodies", [["0", "ANA/SMA &lt;1:40, LKM/SLA negative"], ["1", "ANA or SMA ≥1:40"], ["2", "ANA or SMA ≥1:80, or anti-LKM1 ≥1:40, or anti-SLA positive"]])}${sel("igg", "IgG", [["0", "Normal"], ["1", "&gt; upper limit"], ["2", "&gt; 1.1 × upper limit"]])}${sel("his", "Liver histology", [["0", "Atypical / not done"], ["1", "Compatible with AIH"], ["2", "Typical AIH"]])}${sel("vir", "Viral hepatitis excluded", [["2", "Yes"], ["0", "No / not tested"]])}<label>Weight kg<input type="number" step="any" data-k="wt" placeholder="e.g. 55"></label></div><div class="checks" style="margin-top:8px">${chk("hbv", "HBsAg or anti-HBc positive")}${chk("cirr", "Cirrhosis")}${chk("sev", "Jaundice with INR ≥1.5 or confusion")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, s = ["ab", "igg", "his", "vir"].reduce((a, k) => a + +g(k).value, 0), wt = U.num(g("wt")), out = U.$(".out", el);
      const L = [`Score <b>${s}</b>/8: ${s >= 7 ? "<b>definite AIH</b>" : s >= 6 ? "<b>probable AIH</b>" : "below the probable threshold — consider other causes; atypical/acute AIH can score low"}.`];
      if (g("his").value === "0") L.push("Without biopsy the maximum score is 6 — biopsy before treatment unless contraindicated.");
      if (c("sev")) L.push("<b>Severe/acute liver failure features</b>: urgent liver unit; steroids per specialist; transplant assessment if encephalopathy.");
      if (s >= 6) {
        L.push("Induction: prednisolone (e.g. 30 mg/day tapering to 20 mg over 4 weeks, or 60 → 20 mg over 6 weeks) — specialist choice.");
        if (wt > 0) L.push(`Azathioprine 1–2 mg/kg ≈ <b>${Math.round(wt / 25) * 25}–${Math.round(wt * 2 / 25) * 25} mg/day</b> after TPMT/NUDT15 check (not on NEML); alternative mycophenolate 2 g/day.`);
        L.push("Target: normal ALT/AST <b>and</b> IgG; review at 8 weeks; long-term maintenance.");
        if (c("cirr")) L.push("Cirrhosis: avoid budesonide; HCC and varices surveillance.");
      }
      if (c("hbv")) L.push("<b>Hepatitis B markers positive</b>: steroids can cause HBV flare — antiviral prophylaxis/specialist before immunosuppression.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  malabsorb(el, U) {
    el.innerHTML = `<h4>Malabsorption: who to test for coeliac disease, and what the bloods suggest (NICE NG20 / Merck 2025)</h4><div class="row">${sel("pt", "Patient", [["a", "Adult"], ["c", "Child"]])}${sel("gl", "Eating gluten (wheat/barley) now?", [["y", "Yes, in &gt;1 meal daily for ≥6 weeks"], ["l", "Some, less than that"], ["n", "No / gluten-free already"]])}${sel("b12", "B12", [["", "Not done"], ["n", "Normal"], ["l", "Low"]])}${sel("fol", "Folate", [["", "Not done"], ["n", "Normal"], ["l", "Low"], ["h", "High"]])}</div><div class="checks" style="margin-top:8px">${chk("gi", "Persistent unexplained GI symptoms / chronic diarrhoea")}${chk("wl", "Weight loss or faltering growth")}${chk("ida", "Unexplained iron deficiency")}${chk("ulc", "Severe/persistent mouth ulcers")}${chk("t1", "Type 1 diabetes or autoimmune thyroid disease (new)")}${chk("fdr", "First-degree relative with coeliac")}${chk("ibs", "Labelled IBS (adult)")}${chk("milk", "Symptoms 30–90 min after milk")}${chk("trek", "Recent travel/stream water; greasy stools")}${chk("panc", "Alcohol/chronic pancreatitis history")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, child = g("pt").value === "c", gl = g("gl").value, b12 = g("b12").value, fol = g("fol").value, out = U.$(".out", el);
      const L = [];
      const offer = c("gi") || c("wl") || c("ida") || c("ulc") || c("t1") || c("fdr") || (!child && c("ibs"));
      if (offer) {
        if (gl === "y") L.push("<b>Offer coeliac serology</b>: total IgA + IgA tTG (IgA EMA if weakly positive; IgG-based tests if IgA deficient).");
        else if (gl === "l") L.push("Coeliac testing indicated, but gluten intake is low — eat gluten in more than one meal daily for <b>6 weeks</b> before testing.");
        else L.push("Already gluten-free: tests unreliable — gluten challenge for 6 weeks, or refer to a gastroenterologist.");
        L.push(child ? "If positive: refer to paediatric gastroenterology." : "If positive: refer for <b>duodenal biopsy</b>; do not start a gluten-free diet until confirmed.");
      } else L.push("No NICE coeliac-testing indication ticked.");
      if (c("trek")) L.push("Possible <b>giardiasis</b>: stool microscopy; metronidazole or tinidazole.");
      if (c("milk")) L.push("Possible <b>lactose intolerance</b>: trial of reduced milk; curd/yoghurt often tolerated.");
      if (c("panc")) L.push("Possible <b>pancreatic insufficiency</b>: faecal elastase/imaging; enzymes with meals.");
      if (b12 === "l" && fol === "h") L.push("Low B12 + high folate: suggests <b>small intestinal bacterial overgrowth</b>.");
      else if (fol === "l") L.push("Low folate: proximal mucosal disease — coeliac, tropical sprue.");
      else if (b12 === "l") L.push("Low B12: pernicious anaemia, ileal disease, pancreatitis or SIBO.");
      if (c("wl") || c("gi")) L.push("Also: stool for ova/cysts/parasites, HIV test, think intestinal TB if fever.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  cinvplan(el, U) {
    el.innerHTML = `<h4>Chemotherapy: antiemetic plan and fever check (MASCC 2025 resource-limited / NICE CG151)</h4><div class="row">${sel("risk", "Regimen emetic risk", [["h", "High — cisplatin or anthracycline + cyclophosphamide (AC)"], ["m", "Moderate (e.g. carboplatin, oxaliplatin)"], ["l", "Low / minimal"]])}${sel("nk1", "NK1 antagonist (aprepitant) available?", [["n", "No (Bhutan NEML)"], ["y", "Yes"]])}<label>Temperature °C<input type="number" step="any" data-k="t" placeholder="e.g. 38.4"></label><label>Neutrophils ×10⁹/L<input type="number" step="any" data-k="anc" placeholder="if known"></label></div><div class="checks" style="margin-top:8px">${chk("unwell", "Unwell / sepsis signs (low BP, fast pulse, rigors, confusion)")}${chk("vom", "Vomiting despite prophylaxis")}${chk("diar", "Diarrhoea")}${chk("dm", "Diabetes")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, risk = g("risk").value, nk1 = g("nk1").value === "y", t = U.num(g("t")), anc = U.num(g("anc")), ancKnown = g("anc").value !== "", out = U.$(".out", el);
      const L = [];
      if (t > 38 || c("unwell")) L.push(`<b>Possible neutropenic sepsis — emergency</b>: blood cultures, IV <b>piperacillin–tazobactam immediately</b> (do not wait for the count)${ancKnown ? (anc <= 0.5 ? `; neutrophils ${anc} confirm neutropenic sepsis — risk-stratify` : `; neutrophils ${anc} — not neutropenic, but still treat sepsis`) : ""}.`);
      if (risk === "h") L.push(nk1 ? "HEC with NK1 available: follow the MASCC/ESMO 2023 best regimen (NK1 antagonist + 5-HT3 + dexamethasone ± olanzapine) per oncology protocol." : "HEC without NK1: <b>ondansetron + dexamethasone + olanzapine 10 mg</b> before chemotherapy; <b>olanzapine + dexamethasone on days 2–4</b>.");
      else if (risk === "m") L.push(nk1 ? "MEC: per oncology protocol (MASCC/ESMO 2023)." : "MEC without NK1: no MASCC alternative recommendation is possible — use the oncology unit's protocol (commonly 5-HT3 antagonist + dexamethasone).");
      else L.push("Low/minimal risk: single antiemetic or none, per protocol.");
      if (c("vom")) L.push("Breakthrough vomiting: check calcium, bowel obstruction, brain metastases; add metoclopramide or olanzapine; strengthen next cycle.");
      if (c("diar")) L.push("Diarrhoea: fluids/ORS; stool tests; loperamide only once infection excluded; admit if febrile, severe or dehydrated.");
      if (risk !== "l") L.push("Prophylactic laxative (senna) with ondansetron/opioids; olanzapine causes sedation.");
      if (c("dm")) L.push("Diabetes: dexamethasone raises glucose — check and adjust treatment.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }

  });
})();
