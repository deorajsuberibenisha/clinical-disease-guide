/* New-disease batch N-6 calculators (28 Nov 2026). File: js/calcs-n6.js
   sbpcalc: ascitic neutrophil count, SBP decision, albumin dose (Merck/AASLD) and NICE NG50 primary-prophylaxis check. */
(function () {
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  sbpcalc(el, U) {
    el.innerHTML = `<h4>SBP: ascitic neutrophils, treatment and albumin dose (Merck/AASLD 2021; NICE NG50)</h4><div class="row"><label>Ascitic white cells /mm³<input type="number" data-k="wbc" placeholder="e.g. 800"></label><label>Neutrophils %<input type="number" data-k="pc" placeholder="e.g. 70"></label><label>Weight kg<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label><label>Ascitic protein g/L<input type="number" step="any" data-k="prot" placeholder="if known"></label></div><div class="checks" style="margin-top:8px">${chk("hosp", "Hospital-acquired / recent antibiotics")}${chk("mixed", "Mixed organisms on Gram stain or free air")}${chk("prev", "Previous SBP")}${chk("cp9", "Child–Pugh &gt;9 or MELD &gt;16")}${chk("map", "Mean arterial pressure &lt;65 mmHg")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, wbc = U.num(g("wbc")), pc = U.num(g("pc")), wt = U.num(g("wt")), prot = U.num(g("prot")), out = U.$(".out", el);
      const L = [];
      const pmn = wbc > 0 && pc >= 0 && g("pc").value !== "" ? Math.round(wbc * pc / 100) : null;
      if (pmn === null) L.push("Enter ascitic white cell count and neutrophil %.");
      else if (c("mixed")) L.push(`Neutrophils ${pmn}/mm³ with mixed organisms/free air: <b>suspect secondary peritonitis</b> — urgent surgical review and imaging; broad antibiotics covering anaerobes.`);
      else if (pmn > 250) {
        L.push(`Ascitic neutrophils <b>${pmn}/mm³ (&gt;250) = SBP</b>.`);
        L.push(c("hosp") ? "Hospital-acquired/recent antibiotics: <b>piperacillin–tazobactam or meropenem</b> per local resistance." : "Start <b>IV ceftriaxone</b> (or cefotaxime) for at least 5 days and until neutrophils &lt;250.");
        if (wt > 0) { const d1 = Math.round(wt * 1.5), d3 = Math.round(wt); L.push(`Albumin: <b>${d1} g on day 1</b> (${Math.round(d1 / 20)} × 100 mL bottles of 20%) and <b>${d3} g on day 3</b> (${Math.round(d3 / 20)} bottles).`); }
        else L.push("Albumin 1.5 g/kg day 1 and 1 g/kg day 3 — enter weight for the dose.");
        if (c("map")) L.push("MAP &lt;65: hold the beta-blocker until SBP has cleared.");
        L.push("Afterwards: <b>secondary prophylaxis</b> (ciprofloxacin or norfloxacin) while ascites persists.");
      } else {
        L.push(`Ascitic neutrophils ${pmn}/mm³ (≤250): not SBP — look for other infection; repeat tap if deteriorating.`);
        if (c("prev")) L.push("Previous SBP: continue secondary prophylaxis.");
        else if ((prot > 0 && prot <= 15) || c("cp9")) L.push("High risk (protein ≤15 g/L, Child–Pugh &gt;9 or MELD &gt;16): NICE suggests <b>considering</b> primary prophylaxis until ascites resolves.");
        else L.push("No routine primary prophylaxis (NICE NG50).");
      }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  cpplan(el, U) {
    el.innerHTML = `<h4>Chronic pancreatitis: problems to address and enzyme dose (NICE NG104 / Merck 2026)</h4><div class="row"><label>Age<input type="number" data-k="age" placeholder="e.g. 41"></label><label>Main meals per day<input type="number" data-k="meals" placeholder="3"></label><label>Snacks per day<input type="number" data-k="snacks" placeholder="2"></label><label>Lipase per capsule (IU)<input type="number" data-k="cap" placeholder="e.g. 25000"></label></div><div class="checks" style="margin-top:8px">${chk("alc", "Drinks alcohol")}${chk("smk", "Smokes")}${chk("st", "Greasy/oily stools or weight loss")}${chk("dm", "Diabetes or HbA1c raised")}${chk("pain", "Ongoing pain")}${chk("jaun", "Jaundice, vomiting after meals or new pain pattern")}${chk("fam", "Family history / onset before 30")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, age = U.num(g("age")), meals = U.num(g("meals")) || 3, snacks = g("snacks").value === "" ? 2 : U.num(g("snacks")), cap = U.num(g("cap")), out = U.$(".out", el);
      const L = [];
      if (c("jaun")) L.push("<b>Red flag</b>: jaundice, obstruction or changed pain — CT (pseudocyst, duct/bile stricture, duodenal obstruction, <b>cancer</b>), refer.");
      if (c("alc") || c("smk")) L.push("Stop " + [c("alc") ? "alcohol" : "", c("smk") ? "smoking" : ""].filter(Boolean).join(" and ") + " — the single most important step to slow progression.");
      if (c("st")) {
        let s = "Exocrine insufficiency: <b>enzymes with every meal</b> — start 25,000–50,000 IU lipase per meal and half with snacks";
        if (cap > 0) { const lo = Math.ceil(25000 / cap), hi = Math.ceil(50000 / cap); s += ` (= ${lo}${hi > lo ? "–" + hi : ""} capsule${hi > 1 ? "s" : ""} per meal, ${Math.max(1, Math.round(lo / 2))} with snacks; about ${lo * meals + Math.max(1, Math.round(lo / 2)) * snacks}–${hi * meals + Math.max(1, Math.round(hi / 2)) * snacks} capsules a day)`; }
        L.push(s + "; titrate to stools and weight; add PPI if poor response; dietitian; vitamins A, D, E, K.");
      }
      if (c("dm")) L.push("Type 3c diabetes: HbA1c at least 6-monthly; consider insulin; hypoglycaemia risk (glucagon loss, alcohol) — avoid tight targets.");
      else L.push("Check HbA1c at least every 6 months (lifetime diabetes risk up to 80%).");
      if (c("pain")) L.push("Pain: paracetamol → short weak/strong opioid with caution; amitriptyline or gabapentin for neuropathic pain; refer for endoscopic/surgical options if duct obstruction.");
      if (c("fam") || (age > 0 && age < 30)) L.push("Young onset / family history: consider hereditary or tropical pancreatitis — higher cancer risk; specialist surveillance.");
      L.push("Bone density every 2 years; nutrition review at least yearly.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  mndcheck(el, U) {
    el.innerHTML = `<h4>MND: what needs action at this review? (NICE NG42)</h4><div class="row"><label>Usual weight kg<input type="number" step="any" data-k="w0" placeholder="e.g. 60"></label><label>Weight now kg<input type="number" step="any" data-k="w1" placeholder="e.g. 54"></label></div><div class="checks" style="margin-top:8px">${chk("chk", "Coughing/choking with food or drink")}${chk("slow", "Meals take much longer / tiring to eat")}${chk("orth", "Breathless lying flat")}${chk("mh", "Morning headache or daytime sleepiness")}${chk("cough", "Weak cough / chest infections")}${chk("cramp", "Cramps")}${chk("spas", "Stiffness / spasticity")}${chk("drool", "Drooling")}${chk("cog", "Cognitive or behaviour change")}${chk("acp", "No advance care plan yet")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, w0 = U.num(g("w0")), w1 = U.num(g("w1")), out = U.$(".out", el);
      const L = [];
      const loss = w0 > 0 && w1 > 0 ? (w0 - w1) / w0 * 100 : null;
      if (c("orth") || c("mh")) L.push("<b>Respiratory impairment likely</b> (orthopnoea / nocturnal hypoventilation): treat infection/secretions; refer for <b>non-invasive ventilation</b> — urgent if worsening.");
      if (c("cough")) L.push("Ineffective cough: breath stacking, manual assisted cough; mechanical cough assist if available.");
      if (c("chk") || c("slow") || (loss !== null && loss >= 5)) L.push(`${loss !== null ? `Weight loss ${loss.toFixed(1)}%. ` : ""}Swallow assessment, texture changes, supplements; <b>discuss gastrostomy now</b> — late placement carries higher risk${c("orth") || c("mh") ? " (breathing already declining — do not delay)" : ""}.`);
      else if (loss !== null) L.push(`Weight change ${loss.toFixed(1)}% — keep monitoring weight and swallowing each review.`);
      if (c("cramp")) L.push("Cramps: quinine first; baclofen if not effective or tolerated; then tizanidine, dantrolene or gabapentin.");
      if (c("spas")) L.push("Spasticity: baclofen, tizanidine, dantrolene or gabapentin; physiotherapy; orthoses without delay.");
      if (c("drool")) L.push(`Drooling: posture, suction, oral care; antimuscarinic trial${c("cog") ? " — <b>glycopyrronium</b> preferred with cognitive impairment" : ""}.`);
      if (c("cog")) L.push("Cognitive change: assess capacity before major decisions (gastrostomy, NIV); support carers.");
      if (c("acp")) L.push("Start <b>advance care planning</b>: wishes about NIV, gastrostomy, hospital admission, place of death; palliative care team.");
      if (!L.length) L.push("No new needs ticked — continue multidisciplinary review of weight, swallowing, breathing, mobility, mood.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  msrelapse(el, U) {
    el.innerHTML = `<h4>Is this an MS relapse, and should it be treated? (NICE NG220 §1.7)</h4><div class="row"><label>Symptoms present for (days)<input type="number" step="any" data-k="d" placeholder="e.g. 5"></label><label>Stable before for (months)<input type="number" step="any" data-k="m" placeholder="e.g. 6"></label></div><div class="checks" style="margin-top:8px">${chk("new", "New or worse neurological symptoms lasting &gt;24 h")}${chk("inf", "Fever, urinary or chest infection present")}${chk("func", "Affects usual tasks (work, walking, self-care, vision)")}${chk("adm", "Needs admission / oral steroids failed or not tolerated")}${chk("dm", "Diabetes or mental health condition")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, d = U.num(g("d")), m = U.num(g("m")), out = U.$(".out", el);
      const L = [];
      if (!c("new")) L.push("Relapse needs new or worsening symptoms lasting more than 24 hours.");
      else if (c("inf")) L.push("<b>Infection present</b>: likely pseudo-relapse — treat the infection (UTI, chest) first; no steroids now; reassess.");
      else if (d > 90) L.push("Symptoms &gt;3 months: <b>not a relapse</b> — likely progression; neurology review.");
      else if (g("m").value !== "" && m < 1) L.push("Less than 1 month since the last stable period: may be the same episode — discuss with MS specialist.");
      else {
        L.push("<b>Compatible with an MS relapse.</b> Discuss with an MS specialist (not all relapses need steroids); inform the MS team.");
        if (c("func")) {
          L.push(d > 14 ? "Onset more than 14 days ago: benefit of steroids less certain — specialist decision." : "Treat as early as possible (within 14 days of onset).");
          L.push(c("adm") ? "<b>IV methylprednisolone 1 g daily for 3–5 days</b> (NEML: 500 mg vials × 2 per dose)." : "<b>Oral methylprednisolone 0.5 g daily for 5 days</b>; if not available, IV 1 g daily for 3–5 days (NEML has the 500 mg injection only).");
          L.push("No lower doses; no home supply for future relapses." + (c("dm") ? " Monitor glucose closely / mental health — high-dose steroids worsen both." : " Warn about insomnia, mood change and raised glucose."));
        } else L.push("Not affecting usual tasks: steroids usually not needed — symptomatic care and review.");
      }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
  ,
  cancerflag(el, U) {
    el.innerHTML = `<h4>Does this symptom meet a suspected-cancer trigger? (NICE NG12 — minimum triggers)</h4><div class="row"><label>Age<input type="number" data-k="age" placeholder="e.g. 58"></label>${sel("sex", "Sex", [["m", "Male"], ["f", "Female"]])}</div><div class="checks" style="margin-top:8px">${chk("dys", "Dysphagia")}${chk("wl", "Unexplained weight loss")}${chk("dysp", "Dyspepsia, reflux or upper abdominal pain")}${chk("jau", "Jaundice")}${chk("ndm", "New-onset diabetes")}${chk("hae", "Haemoptysis")}${chk("cough", "Persistent cough / breathlessness / chest pain")}${chk("smk", "Ever smoked")}${chk("pr", "Rectal bleeding")}${chk("bowel", "Change in bowel habit")}${chk("ida", "Iron-deficiency anaemia")}${chk("blump", "Breast lump")}${chk("vh", "Visible haematuria (no UTI)")}${chk("pmb", "Post-menopausal bleeding")}${chk("bloat", "Persistent bloating / early satiety / pelvic pain")}${chk("ulc", "Mouth ulcer &gt;3 weeks")}${chk("neck", "Persistent neck or thyroid lump")}${chk("hoar", "Persistent hoarseness")}${chk("test", "Testicular change")}${chk("luts", "Urinary symptoms / erectile dysfunction")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, age = U.num(g("age")), f = g("sex").value === "f", out = U.$(".out", el);
      const L = [];
      if (c("dys") || (age >= 55 && c("wl") && c("dysp"))) L.push("<b>Oesophageal/stomach</b>: suspected-cancer referral for endoscopy (NG12 1.2.1/1.2.7).");
      else if (c("dysp") && c("wl")) L.push("Dyspepsia + weight loss under 55: not a NICE trigger, but in Bhutan's high-risk setting consider endoscopy.");
      if (age >= 40 && c("jau")) L.push("<b>Pancreas</b>: ≥40 with jaundice — suspected-cancer referral (1.2.4).");
      if (age >= 60 && c("wl") && (c("dysp") || c("bowel") || c("ndm"))) L.push("<b>Pancreas</b>: ≥60 with weight loss + GI symptoms or new diabetes — urgent CT (ultrasound if no CT) (1.2.5).");
      if (age >= 40 && c("hae")) L.push("<b>Lung</b>: ≥40 with unexplained haemoptysis — suspected-cancer referral (1.1.1); also exclude TB.");
      const ls = ["cough", "wl"].filter(c).length;
      if (age >= 40 && !c("hae") && ((ls >= 2) || (c("smk") && ls >= 1))) L.push("<b>Lung</b>: urgent chest X-ray (1.1.2).");
      if (c("bowel") || c("ida") || (age >= 50 && (c("pr") || c("wl") || c("dysp"))) || (age >= 40 && c("wl") && c("dysp")) || (age > 0 && age < 50 && c("pr") && (c("wl") || c("dysp")))) L.push("<b>Colorectal</b>: FIT where available, otherwise refer for colonoscopy (1.3.1).");
      if (c("blump")) L.push(age >= 30 ? "<b>Breast</b>: ≥30 with unexplained lump — suspected-cancer referral (1.4.1)." : "Breast lump under 30: non-urgent assessment; refer if features of concern.");
      if (age >= 45 && c("vh")) L.push("<b>Bladder/kidney</b>: ≥45 with visible haematuria — suspected-cancer referral (1.6.4/1.6.6).");
      if (f && age >= 55 && c("pmb")) L.push("<b>Endometrium</b>: ≥55 post-menopausal bleeding — suspected-cancer referral (1.5.12).");
      else if (f && c("pmb")) L.push("Post-menopausal bleeding under 55: assess (ultrasound/gynaecology).");
      if (f && c("bloat")) L.push(age >= 40 ? "<b>Ovary</b>: persistent symptoms (&gt;12 times/month) — CA125 (age-specific threshold), then urgent ultrasound if raised (1.5.8–1.5.9)." : "<b>Ovary</b>: ≤39 with persistent symptoms — urgent abdominal/pelvic ultrasound; do not rely on CA125 (1.5.6).");
      if (c("ulc")) L.push("<b>Oral</b>: ulcer &gt;3 weeks — suspected-cancer referral (1.8.2).");
      if (c("neck")) L.push("<b>Head and neck / thyroid</b>: persistent neck or thyroid lump — referral (1.8.1–1.8.5); TB lymphadenitis is a mimic — biopsy.");
      if (age >= 45 && c("hoar")) L.push("<b>Larynx</b>: ≥45 with persistent hoarseness — referral (1.8.1).");
      if (!f && c("test")) L.push("<b>Testis</b>: painless change — referral / urgent ultrasound (1.6.7–1.6.8).");
      if (!f && (c("luts") || c("vh"))) L.push("<b>Prostate</b>: consider PSA and digital rectal examination (1.6.2).");
      if (age >= 60 && c("wl") && !L.length) L.push("<b>Non-specific</b>: ≥60 with weight loss &gt;5% in 6 months — urgent investigation for the likely cancer (1.13.2).");
      if (!L.length) L.push("No NG12 trigger met: treat the likely cause, <b>safety-net</b> (return if persists or changes), review.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }

  });
})();
