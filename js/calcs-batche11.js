/* Batch E-11 calculators (27 Nov 2026) — dermatology 2.
   tinearx: Bhutan STG §16.1.1 (Table 16.1 adult griseofulvin; PV; candida) + FDA griseofulvin microsize child dose 10 mg/kg/day (> 2 y) from the app
     drug monograph; Merck for adjuncts.
   herpesrx: STG §16.1.3 aciclovir doses; Merck red flags (ophthalmic/otic, immunocompromised).
   leprosyclass: STG + Merck (WHO 2018) — PB ≤ 5 lesions & smear negative; MB ≥ 6 or smear positive or nerve involvement (STG); adult MDT.
   vitplan: STG §16.4.1 + Merck vitiligo.  smallrash: STG §16.2.5, §16.2.9, §16.3.1. */
(function () {
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const num = (k, t, v, step) => `<label>${t}<input type="number" inputmode="decimal" data-k="${k}" value="${v}" min="0" step="${step || "any"}"></label>`;
  const ul = a => `<ul style="margin:4px 0 0">${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const f = v => (Math.round(v * 10) / 10).toLocaleString("en");
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  tinearx(el, U) {
    el.innerHTML = `<h4>Fungal skin infection: treatment (Bhutan STG)</h4><div class="row">${sel("t", "Type", [["c1", "Tinea corporis/cruris — single lesion, no previous treatment"], ["cx", "Tinea corporis — extensive or steroid-modified"], ["p", "Tinea pedis"], ["n", "Tinea unguium (nails)"], ["cap", "Tinea capitis (scalp)"], ["pv", "Pityriasis versicolor"], ["cd", "Candida intertrigo / skin"]])}${num("age", "Age (years)", 30, 1)}${num("wt", "Weight (kg)", 55, 0.5)}${sel("preg", "Pregnant", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, t = g("t"), age = parseFloat(g("age")), wt = parseFloat(g("wt")), preg = g("preg") === "y", out = U.$(".out", el);
      const a = [], adult = age >= 18;
      const griso = (adultTxt) => {
        if (preg) return "<b>No griseofulvin in pregnancy</b> — topical azole; specialist advice for scalp or nails";
        if (adult) return adultTxt;
        if (age <= 2) return "Under 2 years: griseofulvin dose not established — specialist";
        if (!(wt > 0)) return "Enter weight";
        const d = Math.min(10 * wt, 500), give = Math.max(125, Math.round(d / 125) * 125); return `Griseofulvin (microsize) 10 mg/kg/day = ${f(d)} mg → give <b>${give} mg once daily</b> (${give / 250} × 250 mg tablet, NEML; FDA) with fatty food`;
      };
      if (t === "c1") a.push("Miconazole 2% cream twice daily over and beyond the edge until clear, then 1 more week");
      if (t === "cx") { a.push(griso("Griseofulvin <b>750–1,000 mg daily for 4 weeks</b> (STG) with fatty food")); a.push("Plus miconazole 2% twice daily; stop steroid–antifungal creams"); }
      if (t === "p") { a.push(griso("Griseofulvin <b>750–1,000 mg daily for 4 weeks</b> if topical fails (STG)")); a.push("Miconazole 2% twice daily; dry toe webs, open footwear, change socks daily"); }
      if (t === "n") a.push(griso("Griseofulvin <b>750 mg daily for 3 months</b> (STG); treat mainly if symptomatic or diabetic"));
      if (t === "cap") { a.push(griso("Adults: griseofulvin 750–1,000 mg daily; specialist")); a.push("Duration <b>6–8 weeks</b> (STG); selenium sulfide or ketoconazole shampoo twice weekly; kerion: add a short oral steroid; child may attend school"); }
      if (t === "pv") { a.push("Miconazole 2% twice daily for 6–8 weeks, or selenium sulfide / ketoconazole shampoo as a body wash"); a.push(preg ? "Avoid oral fluconazole in pregnancy" : "Extensive or recurrent: fluconazole 150 mg once daily for 7 days (STG)"); }
      if (t === "cd") { a.push("Remove predisposing factors (moisture, obesity, glucose, antibiotics); keep folds dry"); a.push("Miconazole 2% cream twice daily; mouth: nystatin; extensive: fluconazole (Merck: once weekly 2–4 weeks)"); }
      if (["cx", "p", "n", "cap"].includes(t) && !preg) a.push("Baseline liver function test before griseofulvin; it reduces contraceptive effect");
      a.push("Continue until clear + 1 week; do not share towels, combs, slippers; daily bathing and clean clothes");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Bhutan STG §16.1.1; FDA griseofulvin label. Terbinafine and itraconazole are not on the NEML.</p>`;
    });
  },

  herpesrx(el, U) {
    el.innerHTML = `<h4>Herpes simplex or zoster: aciclovir (Bhutan STG)</h4><div class="row">${sel("t", "Condition", [["z", "Herpes zoster (shingles)"], ["p", "Primary gingivostomatitis or primary genital herpes"], ["rl", "Recurrent cold sore (lip)"], ["rg", "Recurrent genital herpes"]])}${num("d", "Days since rash began", 2, 1)}${sel("eye", "Forehead/eyelid/nose tip or ear with facial weakness", [["n", "No"], ["y", "Yes"]])}${sel("ic", "Immunocompromised (HIV, chemotherapy, steroids)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, t = g("t"), d = parseFloat(g("d")), out = U.$(".out", el), a = [];
      if (t === "z") {
        a.push(d <= 5 ? "<b>Aciclovir 800 mg five times daily for 10–14 days</b> (STG: all patients, within 5 days)" : "Beyond 5 days: antiviral less useful — still treat if new lesions are appearing, eye/ear involvement or immunocompromise");
        a.push("Analgesia; keep lesions dry; no topical antibiotic or aciclovir cream; counsel about postherpetic pain");
      } else if (t === "p") a.push("<b>Aciclovir 400 mg three times daily for 10 days</b>; analgesics, antipyretic, fluids (admit if a child cannot drink)");
      else if (t === "rl") a.push("Aciclovir ointment 4–5 times daily, started early");
      else a.push("<b>Aciclovir 400 mg three times daily for 5 days</b>; counsel on transmission");
      if (g("eye") === "y") a.push("<b>Urgent ophthalmology (eye) or ENT (ear) review</b>");
      if (g("ic") === "y") a.push("<b>Immunocompromised: treat regardless of timing; consider IV aciclovir and specialist care</b>");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Bhutan STG §16.1.3; Merck Manual. NEML: aciclovir 400 mg tablets.</p>`;
    });
  },

  leprosyclass(el, U) {
    el.innerHTML = `<h4>Leprosy: classify and choose MDT (adult)</h4><div class="row">${num("n", "Number of skin lesions", 3, 1)}${sel("nerve", "Nerve involvement (thick nerve, weakness)", [["n", "No"], ["y", "Yes"]])}${sel("sss", "Slit-skin smear", [["u", "Not done / pending"], ["neg", "Negative"], ["pos", "Positive (AFB seen)"]])}${sel("rx", "Reaction signs (swollen lesions, new lesions, nerve pain, fever, painful nodules)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, n = parseFloat(g("n")) || 0, out = U.$(".out", el);
      const mb = n >= 6 || g("sss") === "pos" || g("nerve") === "y";
      const a = [`Classification: <b>${mb ? "Multibacillary (MB)" : "Paucibacillary (PB)"}</b>${g("sss") === "u" ? " — confirm with slit-skin smear at a higher centre" : ""}`];
      a.push(`MDT blister pack for <b>${mb ? "12" : "6"} months</b>: monthly supervised rifampicin 600 mg + clofazimine 300 mg; daily dapsone 100 mg + clofazimine 50 mg (WHO adult)`);
      a.push("Children: national programme child blister pack / weight-adjusted doses");
      if (g("rx") === "y") a.push("<b>Reaction: continue MDT, start steroid and refer</b> (urgent if new weakness or nerve pain)");
      a.push("Trace household contacts; teach daily hand, foot and eye care");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Bhutan STG; WHO 2018 regimens as given in Merck Manual. Follow the National Leprosy Guideline.</p>`;
    });
  },

  vitplan(el, U) {
    el.innerHTML = `<h4>Vitiligo: first steps</h4><div class="row">${sel("sens", "Sensation in the patch", [["n", "Normal"], ["r", "Reduced"]])}${sel("site", "Main site", [["f", "Face, neck, folds, genitals"], ["b", "Trunk or limbs"]])}${sel("ext", "Extent / activity", [["l", "Few patches, stable"], ["e", "Extensive"], ["r", "Rapidly spreading (weeks–months)"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, out = U.$(".out", el);
      if (g("sens") === "r") { out.innerHTML = "<p><b>Reduced sensation is not vitiligo — assess for leprosy</b> (feel nerves, refer for slit-skin smear).</p>"; return; }
      const a = [g("site") === "f" ? "Hydrocortisone 1% twice daily (tacrolimus preferred if available)" : "Triamcinolone 0.1% (potent steroid only under a dermatologist)", "Sun protection of white skin; camouflage make-up if wanted; ask about mood"];
      if (g("ext") !== "l") a.push("<b>Refer to a dermatologist</b> — phototherapy (NB-UVB)" + (g("ext") === "r" ? "; a short low-dose oral steroid may be considered" : ""));
      else a.push("Review every few months; long-term treatment; better response in children and limited disease");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Bhutan STG §16.4.1; Merck Manual.</p>`;
    });
  },

  smallrash(el, U) {
    el.innerHTML = `<h4>Pityriasis rosea, papular urticaria or fixed drug eruption?</h4><div class="row">${sel("p", "Pattern", [["pr", "Herald patch, then oval scaly patches on the trunk"], ["pu", "Recurrent itchy bite-like papules on limbs/waist (child)"], ["fde", "Dusky patch at the same site after a drug"]])}${sel("ad", "Adult or sexually active", [["n", "No"], ["y", "Yes"]])}${sel("pg", "Pregnant", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, p = g("p"), out = U.$(".out", el), a = [];
      if (p === "pr") { a.push("Reassure: clears on its own in about 6–8 weeks"); a.push("Itch: cetirizine once daily; triamcinolone 0.1% twice daily"); if (g("ad") === "y") a.push("<b>Test for syphilis (RPR)</b>"); if (g("pg") === "y") a.push("<b>Pregnancy: refer</b> (linked to preterm birth in the first 15 weeks; aciclovir may be offered)"); }
      if (p === "pu") { a.push("Cetirizine (age dose) and frequent calamine; triamcinolone 0.1% on lesions only"); a.push("Insect control: bedding, pets, dust; each lesion lasts 5–7 days; outgrown by 6–7 years"); }
      if (p === "fde") { a.push("<b>Stop and avoid the drug; record the allergy</b> (sulfonamides, paracetamol, barbiturates, carbamazepine, tetracyclines)"); a.push("Triamcinolone 0.1% twice daily; short oral steroid if severe"); a.push("Widespread blisters or mucosal erosions → think SJS/TEN"); }
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Bhutan STG §16.2.5, §16.2.9, §16.3.1; Merck (PR).</p>`;
    });
  }

  });
})();
