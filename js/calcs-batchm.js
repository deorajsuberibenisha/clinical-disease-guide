/* Batch M calculators.
   Open fractures: Gustilo–Anderson; EAST 2011 / BOAST 2017 antibiotics. Septic hip: Kocher 1999 criteria.
   Ectopic: NICE NG126. Miscarriage: WHO 2018 medical management, FIGO 2023. APH: WHO MCPC 2017.
   Preterm: WHO 2022 preterm/LBW recommendations, WHO 2011 LBW feeding. Newborn resuscitation: ILCOR/NRP 2020–2025, Bhutan EM booklet 2018.
   Croup: Westley score. Agitation: NICE NG10, Bhutan STG 10.3. */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  openfx(el, U) {
    el.innerHTML = `<h4>Open fracture: grade and antibiotics</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label>${sel("w", "Wound", [["1", "Under 1 cm, clean"], ["2", "1–10 cm, moderate soft-tissue damage"], ["3", "Over 10 cm, or heavy contamination / farm / high energy / crush"]])}${sel("v", "Vascular injury needing repair", [["n", "No"], ["y", "Yes"]])}${sel("pa", "Penicillin allergy (anaphylaxis)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter the weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), gr = g("w").value, vas = g("v").value === "y", pa = g("pa").value === "y", out = U.$(".out", el);
      if (!(w > 0)) { out.textContent = "Enter the weight."; return; }
      const grade = vas ? "IIIC" : gr === "3" ? "III (A/B decided in theatre)" : gr === "2" ? "II" : "I";
      const child = w < 40;
      const cef = child ? `${Math.min(2000, Math.round(30 * w))} mg` : w > 120 ? "3 g" : "2 g";
      let ab = pa ? `<b>Clindamycin</b> ${child ? Math.min(900, Math.round(10 * w)) + " mg" : "600–900 mg"} IV 8-hourly (not on NEML; vancomycin alternative)` : `<b>Cefazolin ${cef} IV 8-hourly</b> (or ceftriaxone if cefazolin unavailable)`;
      if (gr === "3" || vas) ab += ` <b>+ gentamicin ${Math.round(5 * w)} mg IV once daily</b> (5 mg/kg)` + (gr === "3" ? "; farm/soil contamination: add benzylpenicillin or metronidazole for clostridia" : "");
      out.innerHTML = `<p style="margin:0">Gustilo grade <b>${grade}</b>.</p><ul style="margin:6px 0 0;padding-left:18px"><li>${ab} — first dose <b>within 1 hour</b>; continue 24 h after wound closure (up to 72 h for grade III).</li><li>Tetanus: toxoid if not boosted in 5 years; add tetanus immunoglobulin for dirty wounds in the unimmunised.</li><li>Photograph, remove gross contamination, saline-soaked dressing, splint, check pulses and sensation before and after; theatre debridement within 12–24 h (immediately if heavily contaminated or vascular injury).</li></ul><p class="warn" style="margin:8px 0 0">Shock: 20 mL/kg fluid (STG) and look for pelvic or femoral bleeding. Pain out of proportion or on passive stretch: compartment syndrome.</p>`;
    });
  },

  kocher(el, U) {
    el.innerHTML = `<h4>Septic hip in a limping child (Kocher criteria)</h4><div class="checks">${chk("a", "Cannot bear weight")}${chk("b", "Fever over 38.5 °C")}${chk("c", "ESR over 40 mm/h")}${chk("d", "WBC over 12,000/µL")}</div><div class="row" style="margin-top:8px"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="for doses"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const n = ["a", "b", "c", "d"].filter(k => U.$(`[data-k=${k}]`, el).checked).length, w = U.num(U.$("[data-k=wt]", el));
      const P = ["very low (under 1%)", "low (about 3%)", "moderate (about 40%)", "high (about 93%)", "very high (over 99%)"];
      let t = `<p style="margin:0">${n} of 4 criteria: probability of septic arthritis <b>${P[n]}</b> in the original study; later studies found lower figures, so use clinical judgement and CRP over 20 mg/L as a fifth marker.</p>`;
      t += n >= 2 ? "<p style='margin:6px 0 0'><b>Urgent ultrasound and aspiration/orthopaedic drainage</b>; blood culture; start antibiotics after aspiration (do not delay if septic).</p>" : "<p style='margin:6px 0 0'>Transient synovitis more likely: rest, NSAID, review in 24–48 h; return if fever or worse.</p>";
      if (w > 0) t += `<p style="margin:6px 0 0">Doses: <b>cloxacillin ${Math.min(2000, Math.round(50 * w))} mg IV 6-hourly</b> (50 mg/kg, max 2 g) or <b>cefazolin ${Math.min(2000, Math.round(50 * w))} mg IV 8-hourly</b>; under 5 years add Kingella/Hib cover with <b>ceftriaxone ${Math.min(2000, Math.round(50 * w))} mg IV daily</b> (or use ceftriaxone ${Math.min(4000, Math.round(100 * w))} mg/day alone). Switch to oral when afebrile and CRP falling.</p>`;
      U.$(".out", el).innerHTML = t;
    };
    el.addEventListener("input", go); go();
  },

  ectopicmtx(el, U) {
    el.innerHTML = `<h4>Ectopic pregnancy: is methotrexate suitable? (NICE NG126)</h4><div class="row"><label>hCG (IU/L)<input type="number" data-k="hcg" placeholder="e.g. 1200"></label><label>Mass size (mm)<input type="number" data-k="mm" placeholder="e.g. 25"></label><label>Height (cm)<input type="number" data-k="ht" placeholder="for dose"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="for dose"></label></div><div class="checks" style="margin-top:8px">${chk("pain", "Significant pain")}${chk("fh", "Fetal heartbeat seen")}${chk("rup", "Signs of rupture / haemoperitoneum / unstable")}${chk("iup", "Coexisting intrauterine pregnancy")}${chk("fu", "Cannot return for follow-up")}${chk("ci", "Liver/kidney disease, anaemia, breastfeeding")}</div><div class="out" aria-live="polite">Enter hCG and mass size.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, h = U.num(g("hcg")), mm = U.num(g("mm")), ht = U.num(g("ht")), w = U.num(g("wt")), out = U.$(".out", el);
      if (!(h > 0)) { out.textContent = "Enter hCG and mass size."; return; }
      let t;
      if (c("rup")) t = "<b>Surgery now</b> (laparoscopic salpingectomy, or laparotomy if unstable). Resuscitate: 20 mL/kg fluid then blood (STG).";
      else if (c("fh") || h >= 5000 || mm >= 35 || c("iup") || c("fu") || c("ci")) t = "<b>Surgery recommended</b> (methotrexate not suitable: heartbeat, hCG 5000 or more, mass 35 mm or more, intrauterine pregnancy, no follow-up, or contraindication).";
      else if (!c("pain") && h < 1500) t = "<b>Methotrexate first-line</b> (no significant pain, no heartbeat, hCG under 1500, mass under 35 mm). Expectant management is also an option if hCG under 1000 and falling.";
      else t = "<b>Methotrexate or surgery</b> — offer a choice (hCG 1500–5000 without significant pain), explaining the 1 in 4 chance of needing a second dose or surgery.";
      if (ht > 0 && w > 0 && !c("rup")) { const bsa = Math.sqrt(ht * w / 3600); t += `<br>Dose if used: BSA ${bsa.toFixed(2)} m² → <b>methotrexate ${Math.round(50 * bsa)} mg IM</b> once (50 mg/m²). hCG on days 4 and 7: needs a 15% fall from day 4 to day 7.`; }
      out.innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Rh-negative: anti-D after surgery (and consider after medical treatment). Any pain, dizziness or shoulder-tip pain during follow-up: return immediately.</p>`;
    });
  },

  misoplan(el, U) {
    el.innerHTML = `<h4>Miscarriage: management options (WHO 2018 / FIGO 2023)</h4><div class="row">${sel("t", "Type", [["thr", "Threatened (os closed, pregnancy viable)"], ["inc", "Incomplete (os open / retained tissue)"], ["mis", "Missed (non-viable, closed os)"], ["com", "Complete (empty uterus, bleeding settling)"], ["sep", "Septic (fever, foul discharge)"], ["mol", "Suspected molar (high hCG, snowstorm USG)"]])}<label>Weeks since LMP<input type="number" data-k="ga" placeholder="e.g. 9"></label>${sel("sh", "Shock or heavy bleeding", [["n", "No"], ["y", "Yes"]])}${sel("rh", "Rh negative", [["n", "No / unknown"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), t = g("t").value, ga = U.num(g("ga")), sh = g("sh").value === "y", rh = g("rh").value === "y";
      const T = {
        thr: "Reassure; no proven benefit from bed rest; progesterone (micronised 400 mg vaginal twice daily) may help women with previous miscarriage (PRISM). Folic acid. Return if pain or heavy bleeding.",
        inc: ga >= 14 ? "Over 14 weeks: misoprostol 400 µg every 3 hours until expulsion, then evacuation if needed (refer)." : "<b>Misoprostol 600 µg oral or 400 µg sublingual once</b>, or manual vacuum aspiration (MVA); expectant management also acceptable if stable.",
        mis: ga >= 14 ? "Over 14 weeks (fetal death): mifepristone 200 mg then misoprostol 400 µg every 4–6 h (refer)." : "<b>Mifepristone 200 mg</b> (not on NEML) then <b>misoprostol 800 µg vaginal/sublingual</b> 1–2 days later; without mifepristone, <b>misoprostol 800 µg every 3 hours (max 3 doses)</b>; or MVA.",
        com: "No evacuation needed; confirm by symptoms ± ultrasound; urine pregnancy test at 3 weeks.",
        sep: "<b>Antibiotics now</b> (STG: ampicillin + metronidazole; add gentamicin if severe — or ceftriaxone + metronidazole), fluids, then <b>evacuation as soon as possible</b>. Treat as sepsis.",
        mol: "<b>Suction evacuation</b> (not medical) at a referral hospital; baseline hCG, chest X-ray; weekly hCG until 3 normal, then monthly (STG); avoid pregnancy until follow-up complete."
      };
      let s = T[t];
      if (sh) s = "<b>Resuscitate first:</b> 2 large IV lines, 20 mL/kg fluid, crossmatch; remove products from the os with sponge forceps (relieves cervical shock); oxytocin 10 units IM or misoprostol; urgent evacuation. Then: " + s;
      if (rh && t !== "thr") s += "<br><b>Anti-D 250 IU IM</b> within 72 h if surgical evacuation or over 12 weeks (RCOG); many protocols give it to all Rh-negative women.";
      U.$(".out", el).innerHTML = `<p style="margin:0">${s}</p><p class="warn" style="margin:8px 0 0">Always exclude ectopic pregnancy when the uterus is empty and the pregnancy test is positive. Offer contraception and counselling.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  aphtriage(el, U) {
    el.innerHTML = `<h4>Antepartum haemorrhage triage (WHO MCPC)</h4><div class="row">${sel("p", "Pain / uterus", [["n", "Painless, soft uterus"], ["y", "Painful, tense/tender uterus"], ["r", "Severe pain, shock, abnormal shape, fetal parts easy to feel"]])}${sel("b", "Bleeding", [["l", "Light / stopped"], ["h", "Heavy or continuing"]])}<label>Gestation (weeks)<input type="number" data-k="ga" placeholder="e.g. 33"></label>${sel("f", "Fetal heart", [["ok", "Normal (110–160)"], ["ab", "Abnormal (under 100 / over 180)"], ["no", "Absent"]])}${sel("rh", "Rh negative", [["n", "No / unknown"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), p = g("p").value, b = g("b").value, ga = U.num(g("ga")), f = g("f").value, rh = g("rh").value === "y";
      let dx, plan;
      if (p === "r") { dx = "Ruptured uterus likely"; plan = "Resuscitate, blood, <b>immediate laparotomy</b>."; }
      else if (p === "y") { dx = "Placental abruption likely (bleeding may be hidden)"; plan = b === "h" || f !== "ok" ? "Resuscitate; check clotting (bedside clot test); <b>deliver urgently</b> — vaginal if fetus dead or fully dilated, otherwise caesarean if fetus alive and distressed." : "Admit, monitor fetus and clotting; deliver if worsening or at term."; }
      else { dx = "Placenta praevia likely — <b>no vaginal examination</b> until ultrasound or in theatre"; plan = b === "h" ? "Resuscitate; <b>caesarean section</b> regardless of gestation." : ga > 0 && ga < 37 ? "Light bleeding, preterm: admit, ultrasound, iron, keep blood available, plan caesarean at 36–37 weeks." : "Term: plan caesarean (or vaginal if placenta well clear of the os on scan)."; }
      let extra = ga >= 24 && ga < 34 ? `<li>Under 34 weeks and delivery likely within 7 days: <b>dexamethasone 6 mg IM 12-hourly × 4</b> (WHO ACS criteria).</li>` : "";
      if (ga >= 24 && ga < 32) extra += `<li>Under 32 weeks and imminent delivery: <b>magnesium sulfate</b> for fetal neuroprotection.</li>`;
      if (rh) extra += `<li>Rh negative: <b>anti-D 500 IU</b> (UK) or 1500 IU (WHO) within 72 h; Kleihauer if available.</li>`;
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>${dx}.</b></p><ul style="margin:6px 0 0;padding-left:18px"><li>${plan}</li><li>Two large IV lines, Hb, group and crossmatch 2–4 units, clotting; left lateral tilt.</li>${extra}<li>Prepare for postpartum haemorrhage after delivery.</li></ul>`;
    };
    el.addEventListener("input", go); go();
  },



  westley(el, U) {
    el.innerHTML = `<h4>Croup severity (Westley score)</h4><div class="row">${sel("loc", "Consciousness", [["0", "Normal (0)"], ["5", "Disoriented (5)"]])}${sel("cy", "Cyanosis", [["0", "None (0)"], ["4", "With agitation (4)"], ["5", "At rest (5)"]])}${sel("st", "Stridor", [["0", "None (0)"], ["1", "When agitated (1)"], ["2", "At rest (2)"]])}${sel("ae", "Air entry", [["0", "Normal (0)"], ["1", "Decreased (1)"], ["2", "Markedly decreased (2)"]])}${sel("re", "Retractions", [["0", "None (0)"], ["1", "Mild (1)"], ["2", "Moderate (2)"], ["3", "Severe (3)"]])}<label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="for doses"></label></div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const v = k => +U.$(`[data-k=${k}]`, el).value, w = U.num(U.$("[data-k=wt]", el));
      const s = v("loc") + v("cy") + v("st") + v("ae") + v("re");
      const band = s <= 2 ? "Mild" : s <= 5 ? "Moderate" : s <= 11 ? "Severe" : "Impending respiratory failure";
      const dx = w > 0 ? r1(0.15 * w) : null, dxh = w > 0 ? Math.min(12, r1(0.6 * w)) : null, adr = w > 0 ? Math.min(5, r1(0.5 * w)) : null;
      let t = s <= 2 ? `Dexamethasone ${dx ? dx + " mg" : "0.15 mg/kg"} orally once; home with advice.` : s <= 5 ? `Dexamethasone ${dxh ? dx + "–" + dxh + " mg" : "0.15–0.6 mg/kg"} orally; observe; nebulised adrenaline if stridor at rest persists.` : `<b>Nebulised adrenaline 1:1000 ${adr ? adr + " mL" : "0.5 mL/kg (max 5 mL)"}</b> + dexamethasone ${dxh ? dxh + " mg" : "0.6 mg/kg"} (oral/IM/IV); oxygen; observe at least 3 hours; admit.` + (s >= 12 ? " <b>Call anaesthetist; prepare intubation with a tube 0.5–1 size smaller.</b>" : "");
      U.$(".out", el).innerHTML = `<p style="margin:0">Score <b>${s}</b> — ${band}.</p><p style="margin:6px 0 0">${t}</p><p class="warn" style="margin:8px 0 0">Keep the child calm on the parent's lap; do not examine the throat. Drooling, toxic look, no cough: think epiglottitis or tracheitis.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  agitation(el, U) {
    el.innerHTML = `<h4>Acute agitation: stepwise plan (NICE NG10 / Bhutan STG)</h4><div class="row">${sel("c", "Most likely cause", [["psy", "Known psychosis or mania"], ["del", "Delirium (confused, fluctuating, medical illness)"], ["alc", "Alcohol withdrawal"], ["unk", "Unknown / intoxication"]])}${sel("age", "Patient", [["a", "Adult under 65"], ["e", "Elderly or frail"]])}${sel("st", "Accepts oral medicine", [["y", "Yes"], ["n", "No — imminent risk"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, c = g("c"), e = g("age") === "e", oral = g("st") === "y";
      let t;
      if (c === "del") t = (oral ? `Treat the cause (infection, hypoxia, glucose, urine retention, drugs); calm environment, family. If distressed or dangerous: <b>haloperidol ${e ? "0.5" : "0.5–1"} mg orally</b>` : `<b>Haloperidol ${e ? "0.5–1" : "1–2.5"} mg IM</b>`) + "; avoid benzodiazepines (except alcohol/benzo withdrawal); avoid haloperidol in Parkinson's/Lewy body (use low-dose lorazepam).";
      else if (c === "alc") t = oral ? "<b>Diazepam 10–20 mg orally</b>, repeat hourly by CIWA; thiamine 100 mg before glucose." : "<b>Diazepam 10 mg IV</b> slowly (or lorazepam 1–2 mg IM/IV), repeat every 5–10 min until calm; thiamine IV; see alcohol chapter.";
      else if (c === "psy") t = oral ? `<b>Lorazepam 1–2 mg</b> or <b>olanzapine 5–10 mg</b> or <b>risperidone 1–2 mg</b> orally${e ? " (halve doses)" : ""}.` : `<b>Haloperidol ${e ? "2.5" : "5"} mg IM + promethazine ${e ? "25" : "25–50"} mg IM</b> (STG: haloperidol 5–10 mg IM or chlorpromazine 100 mg IM); or <b>lorazepam 1–2 mg IM</b>. Repeat after 30–60 min if needed; haloperidol max 20 mg/24 h.`;
      else t = oral ? `<b>Lorazepam 1–2 mg orally</b> (or diazepam 5–10 mg)${e ? " — lower doses" : ""}.` : `<b>Lorazepam 1–2 mg IM</b> (or midazolam 5 mg IM); avoid antipsychotics until cardiac/drug cause is clear (QT, stimulants, anticholinergics).`;
      U.$(".out", el).innerHTML = `<ol style="margin:0;padding-left:18px"><li>Safety: keep an arm's length and an exit; remove dangerous objects; enough staff; verbal de-escalation.</li><li>Check glucose, oxygen, temperature, head injury, intoxication.</li><li>${t}</li><li>After IM medicine: pulse, BP, breathing, temperature and consciousness every 15 min for 1 h; ECG if antipsychotic given. Acute dystonia: promethazine or trihexyphenidyl.</li></ol>`;
    };
    el.addEventListener("input", go); go();
  }
  });
})();
