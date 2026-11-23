/* IBD and IBS calculators.
   ibscheck: Rome IV IBS criteria (Lacy BE et al. Gastroenterology 2016) with alarm features (BSG 2021, ACG 2021) and faecal calprotectin bands (NICE DG11).
   asuc: modified Truelove–Witts (BSG 2019 Statement 15) and day-3 Travis criteria (Travis SP et al. Gut 1996; BSG 2019 Table) with ASUC first orders.
   hbi: Harvey–Bradshaw index (Harvey RF, Bradshaw JM. Lancet 1980).
   itbcd: intestinal TB vs Crohn's — exclusive ITB features and the Kedia CT score (Kedia S et al. World J Gastroenterol 2019).
   pucai: Paediatric Ulcerative Colitis Activity Index (Turner D et al. Gastroenterology 2007). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  ibscheck(el, U) {
    const ck = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Is this IBS? Rome IV criteria and red flags</h4>
      <div class="checks">
      ${ck("pain", "Recurrent abdominal pain on at least 1 day a week, on average, in the last 3 months")}
      ${ck("def", "Pain related to defecation (better or worse)")}
      ${ck("freq", "Pain associated with a change in stool frequency")}
      ${ck("form", "Pain associated with a change in stool form (appearance)")}
      ${ck("dur", "Symptoms began at least 6 months ago")}</div>
      <p style="margin:10px 0 4px;font:600 12.5px var(--ui);color:var(--muted)">RED FLAGS (any = investigate, not IBS)</p><div class="checks">
      ${ck("age", "New symptoms after age 50 (or 45 with family history of colorectal cancer)")}
      ${ck("blood", "Rectal bleeding or melaena")}
      ${ck("wt", "Unintentional weight loss, fever or night sweats")}
      ${ck("noct", "Nocturnal diarrhoea or pain waking from sleep")}
      ${ck("anaem", "Anaemia or iron deficiency, raised CRP")}
      ${ck("mass", "Abdominal or rectal mass")}
      ${ck("fh", "Family history of colorectal cancer, IBD or coeliac disease")}</div>
      <div class="row" style="margin-top:10px"><label>Faecal calprotectin (µg/g), if done<input type="number" step="any" data-k="fc" placeholder="optional"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const on = k => U.$(`[data-k=${k}]`, el).checked, fc = U.num(U.$("[data-k=fc]", el)), out = U.$(".out", el);
      const n = ["def", "freq", "form"].filter(on).length, flags = ["age", "blood", "wt", "noct", "anaem", "mass", "fh"].filter(on).length;
      const rome = on("pain") && n >= 2 && on("dur");
      const L = [];
      if (flags) L.push(`<b>${flags} red flag${flags > 1 ? "s" : ""}: investigate before labelling IBS</b> — CBC, CRP, coeliac serology, faecal calprotectin, stool microscopy (giardia, amoeba), and colonoscopy for bleeding, anaemia, weight loss, mass or age over 50.`);
      L.push(rome ? "<b>Meets Rome IV criteria for IBS.</b> Subtype by stool form on days with abnormal stools: IBS-C (hard over 25%, loose under 25%), IBS-D (loose over 25%, hard under 25%), IBS-M (both over 25%)." : `Does not meet Rome IV: ${!on("pain") ? "pain must occur at least weekly; " : ""}${n < 2 ? "needs 2 of the 3 associations; " : ""}${!on("dur") ? "onset at least 6 months ago. " : ""}Consider functional constipation, functional diarrhoea or bloating, or another diagnosis.`);
      if (fc > 0) L.push(fc < 50 ? `Calprotectin ${fc} µg/g (under 50): IBD unlikely; supports IBS when there are no red flags.` : fc <= 200 ? `Calprotectin ${fc} µg/g (50–200): grey zone — repeat in 2–6 weeks off NSAIDs; refer if persistently raised.` : `Calprotectin ${fc} µg/g (over 200): <b>organic inflammation likely</b> (IBD, infection, NSAIDs, neoplasia) — refer for colonoscopy.`);
      if (rome && !flags) L.push("Positive diagnosis: CBC, CRP, coeliac serology (tTG-IgA) and calprotectin (if diarrhoea) are enough in most under 50; explain the gut–brain mechanism, then diet, soluble fibre, exercise, and symptom-directed drugs.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); go();
  },

  asuc(el, U) {
    const ck = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Acute severe ulcerative colitis — admit? and day-3 rescue decision</h4><div class="row">
      <label>Bloody stools per 24 h<input type="number" step="any" data-k="bs" placeholder="e.g. 8"></label>
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 55"></label></div>
      <div class="checks" style="margin-top:10px">
      ${ck("t", "Temperature over 37.8 °C")}${ck("p", "Pulse over 90/min")}${ck("hb", "Haemoglobin under 105 g/L (10.5 g/dL)")}${ck("crp", "CRP over 30 mg/L (or ESR over 30 mm/h)")}</div>
      <p style="margin:10px 0 4px;font:600 12.5px var(--ui);color:var(--muted)">DAY 3 OF IV STEROIDS (fill in on day 3)</p><div class="row">
      <label>Stools per 24 h on day 3<input type="number" step="any" data-k="d3s" placeholder="blank if not yet"></label>
      <label>CRP on day 3 (mg/L)<input type="number" step="any" data-k="d3c" placeholder="blank if not yet"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), on = k => g(k).checked, n = k => U.num(g(k)), out = U.$(".out", el);
      const bs = n("bs"), w = n("wt"), sys = ["t", "p", "hb", "crp"].filter(on).length, d3s = g("d3s").value === "" ? null : n("d3s"), d3c = g("d3c").value === "" ? null : n("d3c");
      const L = [];
      if (bs >= 6 && sys >= 1) {
        L.push(`<b>ACUTE SEVERE UC (modified Truelove–Witts): admit.</b> IV <b>hydrocortisone 100 mg 6-hourly</b> or <b>methylprednisolone 60 mg daily</b>; <b>enoxaparin 40 mg daily</b> (bloody stools are not a contraindication); IV fluids, potassium and magnesium; stool culture and <i>C. difficile</i> toxin; abdominal X-ray (colon ≥5.5 cm = toxic dilatation); flexible sigmoidoscopy with biopsies (CMV); stop NSAIDs, opioids, antidiarrhoeals and anticholinergics; joint medical–surgical care; pre-biologic screening now (TB, HBV, HCV, HIV, VZV).`);
      } else if (bs > 0) {
        L.push(bs >= 4 ? "Moderate activity (4–5 bloody stools, or 6 or more without systemic toxicity): oral prednisolone 40 mg daily tapering over 6–8 weeks plus 5-ASA where available; admit if not improving in 2 weeks or systemically unwell." : "Mild activity: 5-ASA oral ≥2 g/day plus topical where available; see the UC chapter.");
      } else { out.textContent = "Enter bloody stools per 24 hours."; return; }
      if (d3s !== null) {
        const fail = d3s > 8 || (d3s >= 3 && d3c !== null && d3c > 45);
        L.push(fail ? `<b>Day 3: predicted steroid failure (Travis: over 8 stools, or 3–8 with CRP over 45 → about 85% need colectomy).</b> Decide now on rescue: <b>infliximab ${w > 0 ? Math.round(5 * w) + " mg" : "5 mg/kg"}</b> (5 mg/kg IV, after TB/HBV screen) or <b>ciclosporin ${w > 0 ? Math.round(2 * w) + " mg/day" : "2 mg/kg/day"}</b> IV (specialist centre), or colectomy. Reassess rescue response by day 7; do not delay surgery.` : "Day 3: responding (Travis negative). Continue IV steroids to day 5, then oral prednisolone 40 mg tapering; plan maintenance (5-ASA, thiopurine).");
      }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Daily: stool chart, abdominal examination, CRP, albumin, potassium. Peritonism, colonic dilatation or bleeding needing transfusion → urgent colectomy. In Bhutan, transfer ASUC early to JDWNRH (surgery, biologic access).</p>`;
    };
    el.addEventListener("input", go); go();
  },

  hbi(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    const ck = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Harvey–Bradshaw index — Crohn's disease activity (previous day)</h4><div class="row">
      ${sel("wb", "General well-being", [[0, "Very well"], [1, "Slightly below par"], [2, "Poor"], [3, "Very poor"], [4, "Terrible"]])}
      ${sel("ap", "Abdominal pain", [[0, "None"], [1, "Mild"], [2, "Moderate"], [3, "Severe"]])}
      <label>Liquid or soft stools per day<input type="number" step="1" data-k="st" placeholder="e.g. 4"></label>
      ${sel("mass", "Abdominal mass", [[0, "None"], [1, "Dubious"], [2, "Definite"], [3, "Definite and tender"]])}</div>
      <p style="margin:10px 0 4px;font:600 12.5px var(--ui);color:var(--muted)">COMPLICATIONS (1 point each)</p><div class="checks">
      ${ck("c1", "Arthralgia")}${ck("c2", "Uveitis")}${ck("c3", "Erythema nodosum")}${ck("c4", "Aphthous ulcers")}${ck("c5", "Pyoderma gangrenosum")}${ck("c6", "Anal fissure")}${ck("c7", "New fistula")}${ck("c8", "Abscess")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el);
      const st = Math.max(0, Math.round(U.num(g("st")) || 0));
      const s = +g("wb").value + +g("ap").value + st + +g("mass").value + ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"].filter(k => g(k).checked).length;
      const band = s < 5 ? "remission" : s <= 7 ? "mild activity" : s <= 16 ? "moderate activity" : "severe activity";
      const act = s < 5 ? "Continue maintenance; check calprotectin and CRP to confirm objective remission." : s <= 7 ? "Mild: ileocaecal disease — oral budesonide 9 mg daily for 8 weeks where available, or prednisolone; exclude infection and intestinal TB." : s <= 16 ? "Moderate: prednisolone 40 mg tapering over 6–8 weeks; start a steroid-sparing drug (azathioprine or methotrexate); consider biologic in high-risk disease." : "Severe: admit — IV hydrocortisone, exclude abscess (CT/MRI) before steroids, nutrition, surgical review, biologic.";
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>HBI ${s} — ${band}.</b> ${act}</p><p class="warn" style="margin:8px 0 0">Bands: under 5 remission, 5–7 mild, 8–16 moderate, over 16 severe. Symptoms and inflammation do not always match: confirm with CRP, calprotectin, endoscopy or imaging.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  itbcd(el, U) {
    const ck = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Intestinal TB or Crohn's disease?</h4>
      <p style="margin:0 0 4px;font:600 12.5px var(--ui);color:var(--muted)">FEATURES THAT PROVE TB (if any present, treat as TB)</p><div class="checks">
      ${ck("cas", "Caseating granuloma on biopsy")}${ck("afb", "AFB on smear or culture, or GeneXpert positive (biopsy or tissue)")}${ck("nec", "Necrotic lymph nodes on CT")}${ck("ptb", "Active pulmonary TB (chest X-ray/CT, sputum)")}</div>
      <p style="margin:10px 0 4px;font:600 12.5px var(--ui);color:var(--muted)">CT SCORE (Kedia 2015)</p><div class="checks">
      ${ck("long", "Long-segment bowel involvement (3 cm or more)")}${ck("noic", "Ileocaecal region NOT involved")}${ck("nonode", "No lymph node of 1 cm or more")}</div>
      <p style="margin:10px 0 4px;font:600 12.5px var(--ui);color:var(--muted)">OTHER CLUES</p><div class="checks">
      ${ck("cd1", "Longitudinal or aphthous ulcers, skip lesions, cobblestoning, rectosigmoid disease")}${ck("cd2", "Perianal fistula or abscess, extra-intestinal manifestations, bloody diarrhoea")}${ck("tb1", "Transverse ulcers, patulous ileocaecal valve, caecal involvement")}${ck("tb2", "Fever, night sweats, ascites, confluent large granulomas")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const on = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      const proof = ["cas", "afb", "nec", "ptb"].some(on);
      const score = ["long", "noic", "nonode"].filter(on).length;
      const cdc = ["cd1", "cd2"].filter(on).length, tbc = ["tb1", "tb2"].filter(on).length;
      const L = [];
      if (proof) L.push("<b>Intestinal TB is confirmed or highly likely: treat with the national TB regimen</b> (see TB chapter). Do not give steroids or biologics.");
      else {
        L.push(`CT score ${score}/3: ${score >= 2 ? "favours <b>Crohn's disease</b> (specificity about 90%)" : "favours <b>intestinal TB</b>"}. Clinical/endoscopic clues: ${cdc} for Crohn's, ${tbc} for TB.`);
        L.push("<b>If still uncertain: empirical anti-TB therapy (ATT) trial</b> — assess clinical response at 2–3 months; continue to 6 months if responding and repeat colonoscopy: mucosal healing confirms TB. No response or worsening at 2–3 months → repeat endoscopy/imaging; persistent disease suggests Crohn's (consider MDR-TB if TB features are strong).");
      }
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">IGRA and Mantoux cannot decide between TB and Crohn's (both reflect exposure). Get biopsies for histology, AFB culture and GeneXpert before treatment. Never start steroids or anti-TNF when TB has not been excluded.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  pucai(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>PUCAI — Paediatric Ulcerative Colitis Activity Index</h4><div class="row">
      ${sel("ap", "Abdominal pain", [[0, "No pain"], [5, "Pain can be ignored"], [10, "Pain cannot be ignored"]])}
      ${sel("rb", "Rectal bleeding", [[0, "None"], [10, "Small amount, in under 50% of stools"], [20, "Small amount with most stools"], [30, "Large amount (over 50% of stool content)"]])}
      ${sel("sc", "Stool consistency of most stools", [[0, "Formed"], [5, "Partially formed"], [10, "Completely unformed"]])}
      ${sel("sn", "Number of stools per 24 h", [[0, "0–2"], [5, "3–5"], [10, "6–8"], [15, "Over 8"]])}
      ${sel("nc", "Nocturnal stools (waking)", [[0, "No"], [10, "Yes"]])}
      ${sel("al", "Activity level", [[0, "No limitation"], [5, "Occasional limitation"], [10, "Severely restricted"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$$("select", el).reduce((a, x) => a + +x.value, 0);
      const band = s < 10 ? "remission" : s < 35 ? "mild" : s < 65 ? "moderate" : "severe";
      const act = s >= 65 ? "<b>Acute severe UC: admit</b>, IV methylprednisolone 1–1.5 mg/kg/day (maximum 60 mg); on day 3, PUCAI over 45 → prepare rescue; on day 5, over 65 → start rescue (infliximab) or colectomy (ESPGHAN)." : s >= 35 ? "Moderate: oral prednisolone 1 mg/kg (maximum 40 mg) with 5-ASA; escalate if no response in 2 weeks." : s >= 10 ? "Mild: 5-ASA oral (60–80 mg/kg/day) ± rectal." : "Remission: continue maintenance.";
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>PUCAI ${s}/85 — ${band}.</b> ${act}</p><p class="warn" style="margin:8px 0 0">Bands: under 10 remission, 10–34 mild, 35–64 moderate, 65 or more severe. A fall of 20 points or more is a clinically meaningful response.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
