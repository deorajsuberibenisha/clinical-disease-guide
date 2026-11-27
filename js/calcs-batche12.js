/* Batch E-12 calculators (27 Nov 2026) — dental.
   toothrx: Merck toothache red flags and antibiotic indications + Bhutan STG §17.1.
   avulsion: STG §17.9.2 + Merck fractured and avulsed teeth (primary not replanted; rinse ≤ 10 s; storage; 30–60 min).
   oralca: NICE NG12 1.8.2–1.8.4 + Merck oral growths red flags + STG risk factors.
   postext: STG §17.3 + Merck post-extraction problems. */
(function () {
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const ul = a => `<ul style="margin:4px 0 0">${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const yn = [["n", "No"], ["y", "Yes"]];
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  toothrx(el, U) {
    el.innerHTML = `<h4>Toothache: emergency, antibiotic or analgesia only?</h4><div class="row">${sel("fom", "Swelling under the tongue / floor of mouth, drooling, voice change or breathing difficulty", yn)}${sel("eye", "Headache with eye swelling, double vision or cranial nerve signs", yn)}${sel("fev", "Fever or spreading facial swelling", yn)}${sel("sw", "Localised swelling / abscess at the tooth", yn)}${sel("tri", "Trismus around a partly erupted lower wisdom tooth (pericoronitis)", yn)}${sel("dent", "Dentist can treat the source today", yn)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value === "y", out = U.$(".out", el), a = [];
      if (g("fom") || g("eye")) { out.innerHTML = `<p><b>Emergency</b>: ${g("fom") ? "possible Ludwig angina — airway first" : "possible cavernous sinus thrombosis"}; admit, IV antibiotics, urgent surgical drainage/extraction.</p>`; return; }
      if (g("fev")) a.push("<b>Spreading infection</b>: amoxicillin (STG 8-hourly, 5 days; penicillin allergy: azithromycin, clarithromycin or clindamycin) and same-day dental/surgical drainage");
      else if (g("sw")) a.push(g("dent") ? "Dentist drains or extracts today — antibiotic can be deferred" : "Abscess: amoxicillin 8-hourly 5 days + drainage + dental referral");
      else if (g("tri")) a.push("Pericoronitis: hot salt-water mouth baths 3–4 times daily (or chlorhexidine); antibiotic if systemic signs; dentist");
      else a.push("<b>No antibiotic</b> — pain alone (caries/pulpitis) needs a dentist, not antibiotics");
      a.push("Analgesia: paracetamol ± ibuprofen; cold compress for swelling; warm salt-water rinses");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Merck Manual; Bhutan STG §17.1.</p>`;
    });
  },

  avulsion(el, U) {
    el.innerHTML = `<h4>Knocked-out tooth: what now?</h4><div class="row">${sel("t", "Tooth", [["p", "Permanent (adult) tooth"], ["b", "Baby (primary) tooth"], ["u", "Not sure"]])}${num("min", "Minutes since the injury", 15, 1)}${sel("found", "Tooth found", [["y", "Yes"], ["n", "No"]])}${sel("con", "Conscious and cooperative", [["y", "Yes"], ["n", "No"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, m = parseFloat(g("min")), out = U.$(".out", el), a = [];
      if (g("found") === "n") { out.innerHTML = "<p>Tooth missing: look in the mouth, lips and wound; <b>chest X-ray if it may have been inhaled</b> (a swallowed tooth is harmless). Dentist review.</p>"; return; }
      if (g("t") === "b") { out.innerHTML = "<p><b>Do not replant a baby tooth.</b> Control bleeding with gauze, analgesia, dental review.</p>"; return; }
      if (g("t") === "u") a.push("If unsure whether it is a baby tooth, ask a dentist urgently; young children have only baby teeth");
      if (g("con") === "y") a.push("Hold by the crown only; rinse in cold water or saline for up to 10 seconds if dirty (no scrubbing); <b>replant now</b> and bite on gauze");
      a.push(`Cannot replant: store in <b>milk or saline</b> (or saliva${g("con") === "y" ? " in the cheek" : " — not in the mouth of an unconscious patient"}); do not let it dry`);
      a.push(m <= 60 ? `<b>${Math.max(0, Math.round(60 - m))} minutes</b> left of the best window (30–60 min) — urgent dentist for splinting` : "More than 60 minutes: retention less likely — still see a dentist");
      a.push("Ibuprofen 400 mg 8-hourly (STG), soft diet, tetanus check if soil contact; antibiotic per STG/dentist");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Bhutan STG §17.9.2; Merck Manual (Aug 2026).</p>`;
    });
  },

  oralca(el, U) {
    el.innerHTML = `<h4>Mouth lesion: refer for suspected oral cancer?</h4><div class="row">${sel("ulc", "Unexplained ulcer lasting more than 3 weeks", yn)}${sel("neck", "Persistent unexplained neck lump", yn)}${sel("lump", "Lump on the lip or in the mouth", yn)}${sel("patch", "Red, or red-and-white, patch", yn)}${sel("white", "White patch that does not wipe off (> few weeks)", yn)}${sel("rf", "Weight loss, difficulty swallowing, persistent sore throat", yn)}${sel("habit", "Doma/areca nut or tobacco use", yn)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value === "y", out = U.$(".out", el), a = [];
      if (g("ulc") || g("neck")) a.push("<b>Suspected cancer referral</b> (NICE NG12: ulcer > 3 weeks or neck lump) — biopsy");
      if (g("lump") || g("patch")) a.push("<b>Urgent dental/oral surgery assessment</b> (lump or erythroplakia/erythroleukoplakia) — biopsy");
      if (g("white")) a.push("Persistent leukoplakia: refer for biopsy");
      if (g("rf")) a.push("Red flags present — expedite referral");
      if (!a.length) a.push("No referral criterion now: treat likely cause (aphthous, thrush, trauma) and <b>review in 2–3 weeks</b>; refer if not healed");
      if (g("habit")) a.push("Advise stopping doma/areca nut and tobacco; regular mouth self-examination and dental screening");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">NICE NG12 1.8.2–1.8.4; Merck oral growths; Bhutan STG §17.6, §17.8.</p>`;
    });
  },

  postext(el, U) {
    el.innerHTML = `<h4>Bleeding after a tooth extraction</h4><div class="row">${num("r", "Rounds of 1-hour gauze pressure already done", 0, 1)}${sel("ac", "On anticoagulant or antiplatelet", yn)}${sel("sys", "Pale, dizzy, fast pulse, or vomiting blood", yn)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, r = parseFloat(g("r")) || 0, out = U.$(".out", el), a = [];
      if (g("sys") === "y") { out.innerHTML = "<p><b>Significant blood loss</b>: ABC, IV access, FBC and clotting, urgent dental/surgical team; check anticoagulants.</p>"; return; }
      if (r < 3) a.push(`Round ${r + 1}: remove loose clot, fold clean gauze (or damp tea bag) over the socket, <b>bite firmly for 1 hour without checking</b>`);
      else a.push("<b>Still bleeding after 3 rounds → dental team</b>: local anaesthetic, curettage, sutures, haemostatic agent; FBC and clotting");
      a.push("Ice pack outside (wrapped), head raised; no spitting, rinsing, smoking or alcohol for 24 h; avoid heavy lifting and bending");
      if (g("ac") === "y") a.push("On anticoagulant: do not stop it yourself — contact the prescriber/dentist; check INR if on warfarin");
      a.push("A little blood in a mouthful of saliva looks like a lot");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Bhutan STG §17.3; Merck post-extraction problems.</p>`;
    });
  }

  });
})();
