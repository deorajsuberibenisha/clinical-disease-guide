/* High-altitude, alcohol and depression calculators.
   Lake Louise AMS score 2018: Roach RC et al. High Alt Med Biol 2018;19:4–6. Treatment: Bhutan STG 2024 §1.8; Luks AM et al. WMS 2024.
   AUDIT: Saunders JB et al. Addiction 1993; WHO AUDIT manual 2001 (risk zones). CIWA-Ar: Sullivan JT et al. Br J Addict 1989.
   PHQ-9: Kroenke K et al. J Gen Intern Med 2001. Withdrawal doses: Bhutan STG 2024 §10.2.2. */
(function () {
  const sel = (k, opts) => `<select data-k="${k}">${opts.map((o, i) => `<option value="${Array.isArray(o) ? o[1] : i}">${Array.isArray(o) ? o[0] : o}</option>`).join("")}</select>`;
  const lab = (t, inner) => `<label>${t}${inner}</label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  lakelouise(el, U) {
    const q = [["hd", "Headache", ["None", "Mild", "Moderate", "Severe, incapacitating"]], ["gi", "Gastrointestinal", ["Good appetite", "Poor appetite or nausea", "Moderate nausea or vomiting", "Severe nausea and vomiting, incapacitating"]], ["ft", "Fatigue or weakness", ["Not tired", "Mild", "Moderate", "Severe, incapacitating"]], ["dz", "Dizziness or light-headedness", ["None", "Mild", "Moderate", "Severe, incapacitating"]]];
    el.innerHTML = `<h4>High-altitude illness: Lake Louise score (2018) and treatment</h4><div class="row">${q.map(([k, t, o]) => lab(t, sel(k, o))).join("")}
      ${lab("Effect on activities", sel("fn", ["None", "Mild reduction", "Moderate reduction", "Severe (bed-bound)"]))}
      ${lab("Weight (kg, for children)", `<input type="number" step="any" data-k="wt" placeholder="adult: leave blank">`)}</div>
      <div class="checks" style="margin-top:10px"><label class="chk"><input type="checkbox" data-k="ata">Ataxia (fails heel-to-toe walking) or confusion, drowsiness</label><label class="chk"><input type="checkbox" data-k="hape">Breathless at rest, cough, falling SpO₂, crackles</label><label class="chk"><input type="checkbox" data-k="asc">Ascended within the last 4 days</label></div>
      <div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), v = k => +g(k).value, w = U.num(g("wt"));
      const s = v("hd") + v("gi") + v("ft") + v("dz"), hace = g("ata").checked, hape = g("hape").checked, asc = g("asc").checked;
      const kid = w > 0 && w < 40, dex = kid ? `${Math.min(0.15 * w, 4).toFixed(1)} mg (0.15 mg/kg)` : "4 mg", acz = kid ? `${Math.min(2.5 * w, 250).toFixed(0)} mg (2.5 mg/kg)` : "250 mg";
      const ams = v("hd") >= 1 && s >= 3, sev = s >= 10 ? "severe" : s >= 6 ? "moderate" : "mild";
      const L = [`Lake Louise score <b>${s}/12</b>; functional score ${v("fn")}/3.`];
      if (hace) L.push(`<b class="warn">Possible HACE — emergency.</b> Descend immediately (at least 300–1000 m) or use a portable hyperbaric bag; oxygen to SpO₂ over 90%; <b>dexamethasone ${kid ? Math.min(0.15 * w, 8).toFixed(1) + " mg" : "8 mg"}</b> PO/IV/IM, then ${dex} every 6 hours (Bhutan STG).`);
      if (hape) L.push(`<b class="warn">Possible HAPE — emergency.</b> Descend, oxygen (target SpO₂ over 90%), keep warm, minimise exertion; nifedipine ${kid ? "0.5 mg/kg (max 20 mg) 8-hourly" : "20 mg 8-hourly (STG) or 30 mg MR 12-hourly (WMS)"} if descent or oxygen is delayed.`);
      if (!hace && !hape) {
        if (!asc) L.push("Lake Louise criteria need a recent ascent: consider other causes.");
        if (!ams) L.push("<b>No AMS by Lake Louise criteria</b> (needs headache plus a total of 3 or more). Rest, fluids, no further ascent until well.");
        else if (sev === "mild") L.push(`<b>Mild AMS.</b> Stop ascending, rest, paracetamol or ibuprofen for headache. Acetazolamide ${acz} twice daily speeds recovery. Ascend only when symptoms resolve.`);
        else L.push(`<b>${sev === "severe" ? "Severe" : "Moderate"} AMS.</b> Stop ascent; ${sev === "severe" ? "<b>descend</b>" : "descend if not improving within 24 hours or worsening"}; acetazolamide ${acz} twice daily${sev === "severe" ? `; dexamethasone ${dex} every 6 hours (STG)` : ""}; oxygen if available.`);
      }
      L.push("Prevention for the next ascent: above 3000 m, raise sleeping altitude by no more than 500 m a day with a rest day every 3–4 days; acetazolamide 125 mg twice daily (child 1.25 mg/kg) for moderate- or high-risk itineraries.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  audit(el, U) {
    const f4 = ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"];
    const q = [
      ["How often do you have a drink containing alcohol (ara, beer, wine, spirits)?", ["Never", "Monthly or less", "2–4 times a month", "2–3 times a week", "4 or more times a week"]],
      ["How many standard drinks on a typical drinking day?", ["1 or 2", "3 or 4", "5 or 6", "7 to 9", "10 or more"]],
      ["How often 6 or more drinks on one occasion?", f4],
      ["In the last year, how often could you not stop once you started?", f4],
      ["How often did drinking stop you doing what was expected of you?", f4],
      ["How often did you need a drink in the morning to get going?", f4],
      ["How often did you feel guilt or remorse after drinking?", f4],
      ["How often could you not remember the night before because of drinking?", f4],
      ["Have you or someone else been injured because of your drinking?", [["No", 0], ["Yes, but not in the last year", 2], ["Yes, during the last year", 4]]],
      ["Has a relative, friend or health worker been concerned or suggested you cut down?", [["No", 0], ["Yes, but not in the last year", 2], ["Yes, during the last year", 4]]]];
    el.innerHTML = `<h4>AUDIT: alcohol use screening (WHO)</h4><p class="qn">One standard drink ≈ 10 g alcohol: a small bottle (330 mL) of beer, a 100 mL glass of wine, or 30 mL of spirits or ara.</p><div class="row">${q.map(([t, o], i) => lab(`${i + 1}. ${t}`, sel("q" + i, o))).join("")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const out = U.$(".out", el); let s = 0; for (let i = 0; i < 10; i++) s += +U.$(`[data-k=q${i}]`, el).value;
      const z = s >= 20 ? ["Zone IV: possible dependence", "Refer for diagnostic evaluation and treatment (STG: brief intervention, family support, detoxification plan, PEMA / rehabilitation links). Ask about withdrawal, seizures and DTs; check liver."] : s >= 16 ? ["Zone III: harmful use", "Brief counselling (5As/5Rs) and continued monitoring; consider referral; look for harm (liver, injury, depression)."] : s >= 8 ? ["Zone II: hazardous use", "Simple advice: explain the risks, set a goal to cut down; review at the next visit."] : ["Zone I: low risk", "Alcohol education; praise and reinforce. No alcohol at all in pregnancy."];
      out.innerHTML = `<p style="margin:0">AUDIT score <b>${s}/40</b>: <b>${z[0]}</b>. ${z[1]}</p><p class="qn" style="margin:6px 0 0">Questions 4–6 scoring 1 or more suggest dependence; 7–10 suggest harm already occurring. Women and older adults: consider a lower threshold (7).</p>`;
    };
    el.addEventListener("change", go); go();
  },

  ciwa(el, U) {
    const r7 = (a, b, c, d) => [["0 " + a, 0], ["1", 1], ["2", 2], ["3", 3], ["4 " + b, 4], ["5", 5], ["6", 6], ["7 " + c, 7]];
    const q = [["Nausea and vomiting", r7("none", "intermittent nausea, dry heaves", "constant nausea, frequent vomiting")], ["Tremor (arms extended)", r7("none", "moderate, arms extended", "severe, even at rest")], ["Paroxysmal sweats", r7("none", "beads of sweat on forehead", "drenching sweats")], ["Anxiety", r7("at ease", "moderately anxious, guarded", "acute panic")], ["Agitation", r7("normal activity", "moderately fidgety, restless", "paces or thrashes about")], ["Tactile disturbances (itch, pins and needles, crawling)", r7("none", "moderate", "continuous hallucinations")], ["Auditory disturbances", r7("none", "moderate", "continuous hallucinations")], ["Visual disturbances", r7("none", "moderate", "continuous hallucinations")], ["Headache, fullness in head", r7("none", "moderately severe", "extremely severe")], ["Orientation and clouding of sensorium", [["0 oriented, can do serial additions", 0], ["1 cannot do serial additions", 1], ["2 date wrong by up to 2 days", 2], ["3 date wrong by more than 2 days", 3], ["4 disoriented for place or person", 4]]]];
    el.innerHTML = `<h4>Alcohol withdrawal: CIWA-Ar and diazepam</h4><div class="row">${q.map(([t, o], i) => lab(t, sel("c" + i, o))).join("")}</div>
      <div class="checks" style="margin-top:10px"><label class="chk"><input type="checkbox" data-k="cx">Seizure, delirium (DTs), or previous withdrawal seizures or DTs</label><label class="chk"><input type="checkbox" data-k="liv">Liver failure, jaundice, very old or frail, or respiratory disease</label></div>
      <div class="out" aria-live="polite"></div>`;
    const go = () => {
      const out = U.$(".out", el); let s = 0; for (let i = 0; i < 10; i++) s += +U.$(`[data-k=c${i}]`, el).value;
      const cx = U.$("[data-k=cx]", el).checked, liv = U.$("[data-k=liv]", el).checked;
      const band = s >= 16 ? "severe" : s >= 10 ? "moderate" : "mild or minimal";
      const L = [`CIWA-Ar <b>${s}/67</b>: <b>${band} withdrawal</b>.`];
      if (cx) L.push(`<b class="warn">Complicated withdrawal: admit and refer (STG).</b> DTs or severe agitation: diazepam 5–10 mg IV slowly, repeat every 30 minutes (STG: max 40 mg/day extra; specialist units titrate higher with monitoring) until calm but rousable. Look for hypoglycaemia, head injury, infection, GI bleeding, hepatic encephalopathy.`);
      if (s < 10 && !cx) L.push("Symptom-triggered approach: no benzodiazepine needed now; reassess every 4–8 hours (withdrawal peaks at 24–72 hours). A patient already on the STG fixed schedule continues it unless drowsy.");
      else if (!cx) L.push(`${liv ? "<b>Liver disease or frailty:</b> use lorazepam 1–2 mg (or oxazepam) instead of diazepam and lower doses. " : ""}<b>Fixed schedule (Bhutan STG):</b> diazepam 15 mg TDS × 2 days → 10 mg TDS × 2 → 5 mg TDS × 2 → 5 mg at night × 2. <b>Or symptom-triggered:</b> diazepam 10–20 mg orally when CIWA-Ar is 10 or more, reassess hourly; hold if drowsy.`);
      L.push("<b>Thiamine before any glucose:</b> 100 mg IV stat (STG), then 75 mg orally 2–3 times daily; confusion, ataxia or eye signs = Wernicke's: 500 mg IV 8-hourly for 3–5 days. Family member to stay with the patient.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("change", go); go();
  },

  phq9(el, U) {
    const o = [["Not at all (0)", 0], ["Several days (1)", 1], ["More than half the days (2)", 2], ["Nearly every day (3)", 3]];
    const q = ["Little interest or pleasure in doing things", "Feeling down, depressed or hopeless", "Trouble falling or staying asleep, or sleeping too much", "Feeling tired or having little energy", "Poor appetite or overeating", "Feeling bad about yourself, or that you are a failure or have let yourself or your family down", "Trouble concentrating on things, such as reading or watching TV", "Moving or speaking so slowly that others notice, or being so fidgety or restless that you move around more than usual", "Thoughts that you would be better off dead, or of hurting yourself in some way"];
    el.innerHTML = `<h4>PHQ-9: depression severity (last 2 weeks)</h4><div class="row">${q.map((t, i) => lab(`${i + 1}. ${t}`, sel("p" + i, o))).join("")}${lab("How difficult have these problems made work, home or getting along with people?", sel("fx", ["Not difficult", "Somewhat difficult", "Very difficult", "Extremely difficult"]))}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const out = U.$(".out", el); let s = 0; for (let i = 0; i < 9; i++) s += +U.$(`[data-k=p${i}]`, el).value;
      const i9 = +U.$("[data-k=p8]", el).value, core = +U.$("[data-k=p0]", el).value >= 2 || +U.$("[data-k=p1]", el).value >= 2;
      const b = s >= 20 ? ["severe", "Antidepressant (fluoxetine 20 mg) plus psychological support; refer to psychiatry, especially with psychosis or suicide risk."] : s >= 15 ? ["moderately severe", "Start an antidepressant (fluoxetine 20 mg each morning, or amitriptyline at night if insomnia is marked and overdose risk is low) plus psychoeducation and problem-solving; review in 2 weeks."] : s >= 10 ? ["moderate", "Psychological support (behavioural activation, problem-solving) and consider an antidepressant, especially if it lasted over 2 months or has recurred; review in 2–4 weeks."] : s >= 5 ? ["mild", "Watchful waiting with psychoeducation, sleep, activity and social support; repeat PHQ-9 in 2–4 weeks."] : ["minimal", "No depression treatment needed now."];
      out.innerHTML = `<p style="margin:0">PHQ-9 <b>${s}/27</b>: <b>${b[0]}</b>${s >= 10 && !core ? " (but neither core item scores 2 or more: confirm the diagnosis clinically)" : ""}. ${b[1]}</p>${i9 > 0 ? `<p class="warn" style="margin:8px 0 0">Item 9 is positive: ask directly today about suicidal thoughts, plans, means and past attempts (see the suicide-risk section). Do not leave the person alone if they have a plan; remove means (pesticides, medicines); involve family; call 112 or refer urgently.</p>` : ""}<p class="qn" style="margin:6px 0 0">A score of 10 or more has about 88% sensitivity and specificity for major depression (Kroenke 2001). Rule out hypothyroidism, anaemia, alcohol use and bipolar disorder (ask about past highs before starting an antidepressant).</p>`;
    };
    el.addEventListener("change", go); go();
  }
  });
})();
