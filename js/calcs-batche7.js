/* Batch E-7 calculators (27 Nov 2026).
   gad7: Spitzer RL et al. Arch Intern Med 2006;166:1092–7 — 7 items scored 0–3; 5, 10, 15 = mild, moderate, severe; ≥ 10 cut-point.
   pcptsd5: Prins A et al. J Gen Intern Med 2016;31:1206–11 — trauma question then 5 yes/no items; 3 optimally sensitive, 4 optimally efficient.
   cows: Wesson DR, Ling W. J Psychoactive Drugs 2003;35:253–9 — 11 items; 5–12 mild, 13–24 moderate, 25–36 moderately severe, > 36 severe. */
(function () {
  const sel = (k, o) => `<select data-k="${k}">${o.map(([l, v]) => `<option value="${v}">${l}</option>`).join("")}</select>`;
  const lab = (t, h) => `<label>${t}${h}</label>`;
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  gad7(el, U) {
    const o = [["Not at all (0)", 0], ["Several days (1)", 1], ["More than half the days (2)", 2], ["Nearly every day (3)", 3]];
    const q = ["Feeling nervous, anxious or on edge", "Not being able to stop or control worrying", "Worrying too much about different things", "Trouble relaxing", "Being so restless that it is hard to sit still", "Becoming easily annoyed or irritable", "Feeling afraid, as if something awful might happen"];
    el.innerHTML = `<h4>GAD-7: anxiety severity (last 2 weeks)</h4><div class="row">${q.map((t, i) => lab(`${i + 1}. ${t}`, sel("g" + i, o))).join("")}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      let s = 0; for (let i = 0; i < 7; i++) s += +U.$(`[data-k=g${i}]`, el).value;
      const g2 = +U.$("[data-k=g0]", el).value + +U.$("[data-k=g1]", el).value;
      const b = s >= 15 ? ["severe", "Offer CBT/applied relaxation or fluoxetine (Bhutan STG); assess suicide risk; refer if no response after a dose increase."] : s >= 10 ? ["moderate", "Probable anxiety disorder: explain, self-help or CBT, or an SSRI (fluoxetine 20 mg) if function is impaired; review in 2–4 weeks."] : s >= 5 ? ["mild", "Education, relaxation, reduce caffeine and alcohol, active monitoring."] : ["minimal", "Unlikely to be an anxiety disorder; reassess if concern continues."];
      U.$(".out", el).innerHTML = `<p style="margin:0">GAD-7 <b>${s}/21</b>: <b>${b[0]}</b>. ${b[1]}</p><p class="qn" style="margin:6px 0 0">GAD-2 (first two items) = ${g2}/6${g2 >= 3 ? " — positive screen" : ""}. A score of 10 or more is the usual cut-point (Spitzer 2006). A screening score is not a diagnosis: exclude physical causes and ask about depression and substances.</p>`;
    });
  },

  pcptsd5(el, U) {
    const yn = [["No", 0], ["Yes", 1]];
    const q = ["Had nightmares about the event(s) or thought about it when you did not want to", "Tried hard not to think about it, or went out of your way to avoid situations that reminded you of it", "Been constantly on guard, watchful or easily startled", "Felt numb or detached from people, activities or your surroundings", "Felt guilty or unable to stop blaming yourself or others for the event(s) or any problems it may have caused"];
    el.innerHTML = `<h4>PC-PTSD-5: primary care PTSD screen</h4><div class="row">${lab("Have you ever had an experience so frightening, horrible or upsetting that…", sel("t", yn))}${q.map((t, i) => lab(`In the past month, have you ${i + 1}. ${t.charAt(0).toLowerCase() + t.slice(1)}?`, sel("p" + i, yn))).join("")}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const out = U.$(".out", el);
      if (+U.$("[data-k=t]", el).value === 0) { out.innerHTML = "<p>No traumatic event reported: screen is negative (score 0). If symptoms suggest it, ask again with examples — accidents, assault, abuse, disasters, sudden deaths.</p>"; return; }
      let s = 0; for (let i = 0; i < 5; i++) s += +U.$(`[data-k=p${i}]`, el).value;
      out.innerHTML = `<p style="margin:0">Score <b>${s}/5</b>: <b>${s >= 4 ? "positive (high likelihood)" : s === 3 ? "positive (sensitive cut-point)" : "negative"}</b>. ${s >= 3 ? "Assess for PTSD: symptoms, function, suicide risk, alcohol and drugs; offer trauma-focused therapy." : "Active monitoring if the trauma was recent; re-screen if symptoms persist."}</p><p class="qn" style="margin:6px 0 0">Prins 2016: a cut-point of 3 is optimally sensitive, 4 optimally efficient (validated in US veterans).</p>`;
    });
  },

  cows(el, U) {
    const it = [
      ["Resting pulse (after sitting 1 minute)", [["80 or below (0)", 0], ["81–100 (1)", 1], ["101–120 (2)", 2], ["Over 120 (4)", 4]]],
      ["Sweating (past half hour, not from room temperature or activity)", [["None (0)", 0], ["Barely perceptible, palms moist (1)", 1], ["Flushed or moist face (2)", 2], ["Beads of sweat on brow or face (3)", 3], ["Sweat streaming off face (4)", 4]]],
      ["Restlessness during assessment", [["Able to sit still (0)", 0], ["Reports difficulty sitting still, but able to (1)", 1], ["Frequent shifting or extra movements of legs or arms (3)", 3], ["Unable to sit still for more than a few seconds (5)", 5]]],
      ["Pupil size", [["Pinned or normal for room light (0)", 0], ["Possibly larger than normal (1)", 1], ["Moderately dilated (2)", 2], ["So dilated only the rim of the iris is visible (5)", 5]]],
      ["Bone or joint aches (new, from withdrawal)", [["None (0)", 0], ["Mild diffuse discomfort (1)", 1], ["Severe diffuse aching of joints or muscles (2)", 2], ["Rubbing joints or muscles, unable to sit still (4)", 4]]],
      ["Runny nose or tearing (not from a cold or allergy)", [["None (0)", 0], ["Nasal stuffiness or unusually moist eyes (1)", 1], ["Nose running or tearing (2)", 2], ["Nose constantly running or tears streaming (4)", 4]]],
      ["Gut upset (past half hour)", [["None (0)", 0], ["Stomach cramps (1)", 1], ["Nausea or loose stool (2)", 2], ["Vomiting or diarrhoea (3)", 3], ["Multiple episodes of diarrhoea or vomiting (5)", 5]]],
      ["Tremor (outstretched hands)", [["None (0)", 0], ["Felt but not seen (1)", 1], ["Slight tremor seen (2)", 2], ["Gross tremor or muscle twitching (4)", 4]]],
      ["Yawning during assessment", [["None (0)", 0], ["Once or twice (1)", 1], ["Three or more times (2)", 2], ["Several times a minute (4)", 4]]],
      ["Anxiety or irritability", [["None (0)", 0], ["Reports increasing irritability or anxiousness (1)", 1], ["Obviously irritable or anxious (2)", 2], ["So irritable or anxious that taking part is difficult (4)", 4]]],
      ["Gooseflesh", [["Skin smooth (0)", 0], ["Piloerection can be felt, or hairs standing up on arms (3)", 3], ["Prominent piloerection (5)", 5]]]
    ];
    el.innerHTML = `<h4>COWS: Clinical Opiate Withdrawal Scale</h4><div class="row">${it.map(([t, o], i) => lab(`${i + 1}. ${t}`, sel("c" + i, o))).join("")}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      let s = 0; for (let i = 0; i < it.length; i++) s += +U.$(`[data-k=c${i}]`, el).value;
      const b = s > 36 ? "severe" : s >= 25 ? "moderately severe" : s >= 13 ? "moderate" : s >= 5 ? "mild" : "no significant withdrawal";
      U.$(".out", el).innerHTML = `<p style="margin:0">COWS <b>${s}/48</b>: <b>${b}</b>.</p><p style="margin:6px 0 0">${s >= 5 ? "Symptomatic care (Bhutan STG): ibuprofen 400 mg, dicyclomine 10 mg, metoclopramide 10 mg as needed up to three times daily for 3–5 days; ORS; amitriptyline at night for sleep. " : ""}${s >= 13 ? "Withdrawal is clearly present — if the patient is enrolled with the OST team or psychiatrist, this is when a buprenorphine first dose can be considered (at least 4 h after the last short-acting opioid)." : s >= 5 ? "Buprenorphine started now may precipitate withdrawal; reassess in a few hours." : ""}</p><p class="qn" style="margin:6px 0 0">Bands: 5–12 mild, 13–24 moderate, 25–36 moderately severe, over 36 severe (Wesson & Ling 2003).</p>`;
    });
  }

  });
})();
