/* Dengue calculators.
   denguegroup: management group A / B1 / B2 / C (National Guideline on Clinical Management of Dengue in Bhutan, VDCP 2020; WHO 2009/2012).
   denguefluid: IV fluid rates in mL/hour by step, using ideal body weight for overweight adults (Bhutan guideline §7, Table 4–5, Figures 5 and 7;
                child compensated-shock ladder from WHO 2009 because Figure 6 is missing from the Bhutan PDF). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  denguegroup(el, U) {
    const ws = [["abd", "Abdominal pain or tenderness"], ["vom", "Persistent vomiting"], ["fluid", "Clinical fluid accumulation (ascites, pleural effusion)"], ["mucosal", "Mucosal bleeding (gums, nose, vagina, GI)"], ["leth", "Lethargy or restlessness"], ["post", "Postural drop (systolic fall 20 mmHg or more)"], ["liver", "Liver enlarged more than 2 cm"], ["hct", "Haematocrit rising over 20% above baseline with platelets falling fast towards 100,000"]];
    const sev = [["shock", "Shock: fast pulse with pulse pressure 20 mmHg or less, cold peripheries, capillary refill over 2 s, or low BP"], ["resp", "Fluid accumulation with breathing difficulty"], ["bleed", "Severe bleeding (haematemesis, melaena, heavy menstrual or vaginal bleeding)"], ["organ", "Organ impairment: AST or ALT 1000 or more, impaired consciousness, heart or kidney failure"]];
    const sp = [["sp", "Special population: pregnancy, infant, age over 65, diabetes, hypertension, heart, lung or kidney disease, bleeding disorder, on antiplatelets/anticoagulants/immunosuppressants, alcohol misuse, previous dengue, obesity"], ["soc", "Lives alone or far from a health facility; cannot return daily"], ["oral", "Not drinking enough, or not passing urine at least every 6 hours"]];
    const ck = a => a.map(([k, t]) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`).join("");
    const head = t => `<p style="margin:10px 0 4px;font:600 12.5px var(--ui);color:var(--muted)">${t}</p>`;
    el.innerHTML = `<h4>Dengue — which management group?</h4>${head("SEVERE DENGUE (GROUP C)")}<div class="checks">${ck(sev)}</div>${head("WARNING SIGNS (GROUP B2)")}<div class="checks">${ck(ws)}</div>${head("OTHER FACTORS (GROUP B1)")}<div class="checks">${ck(sp)}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const on = k => U.$(`[data-k=${k}]`, el).checked;
      const C = sev.some(([k]) => on(k)), B2 = ws.some(([k]) => on(k)), B1 = sp.some(([k]) => on(k));
      let msg;
      if (C) msg = `<b>GROUP C — severe dengue.</b> Emergency treatment and urgent transfer to a hospital with blood transfusion. ${on("shock") ? "Shock: start the shock fluid regimen now (use the fluid tool below); haematocrit before and after each step; group and cross-match." : ""} ${on("bleed") ? "Severe bleeding: packed cells 5 mL/kg or whole blood 10 mL/kg." : ""} Monitor vital signs every 15–60 minutes, urine output hourly.`;
      else if (B2) msg = "<b>GROUP B2 — dengue with warning signs.</b> Admit. Baseline haematocrit and weight, then IV 0.9% saline or Ringer's lactate 5–7 mL/kg/hour for 1–2 hours, 3–5 for 2–4 hours, then 2–3 for 2–4 hours, guided by haematocrit and vital signs (fluid tool below). Aim for urine output about 0.5 mL/kg/hour. Vital signs 1–4-hourly; haematocrit before and after fluid changes, then 8-hourly.";
      else if (B1) msg = "<b>GROUP B1 — special population or social reason, no warning signs.</b> Admit. Encourage oral fluids; if not tolerated, IV 0.9% saline or Ringer's lactate at maintenance rate. Vital signs 4-hourly; daily CBC and haematocrit; watch for warning signs, especially as the fever settles.";
      else msg = "<b>GROUP A — can be managed at home.</b> Paracetamol (max 4 g/day; no NSAIDs, aspirin or IM injections), ORS and plenty of fluids, rest. Review every day with a CBC until out of the critical phase (usually days 3–7). Return at once with any warning sign or no urine for 6 hours.";
      U.$(".out", el).innerHTML = `<p style="margin:0">${msg}</p><p class="warn" style="margin:8px 0 0">The danger time is when the fever falls. Notify every suspected case through NEWARS.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  denguefluid(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Dengue IV fluid rates (mL/hour)</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 62"></label>
      <label>Height (cm, adults)<input type="number" step="any" data-k="ht" placeholder="for ideal weight"></label>
      ${sel("sex", "Sex", [["m", "Male"], ["f", "Female"]])}
      ${sel("age", "Age group", [["a", "Adult"], ["c", "Child or infant"]])}
      ${sel("st", "Situation", [["b1", "Special population, not drinking (no warning signs)"], ["b2", "Warning signs (Group B2)"], ["cs", "Compensated shock"], ["hs", "Hypotensive shock"]])}</div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const w = U.num(g("wt")), ht = U.num(g("ht")), sex = g("sex").value, age = g("age").value, st = g("st").value;
      if (!(w > 0) || w > 250) { out.textContent = "Enter the weight."; return; }
      let wt = w, note = "";
      if (age === "a" && ht > 120) {
        const ibw = (sex === "f" ? 45.5 : 50) + 0.91 * (ht - 152.4);
        if (w > ibw) { wt = Math.round(ibw * 10) / 10; note = `Using ideal body weight ${wt} kg (actual ${w} kg), as the Bhutan guideline advises for overweight patients.`; }
        else note = `Actual weight ${w} kg is at or below ideal weight (${Math.round(ibw)} kg); using actual weight.`;
      } else if (age === "a") note = "Enter height to check ideal body weight in overweight adults.";
      const mh = wt <= 10 ? 4 * wt : wt <= 20 ? 40 + 2 * (wt - 10) : 60 + (wt - 20);
      const R = (lo, hi) => hi ? `<b>${Math.round(lo * wt)}–${Math.round(hi * wt)} mL/h</b> (${lo}–${hi} mL/kg/h)` : `<b>${Math.round(lo * wt)} mL/h</b> (${lo} mL/kg/h)`;
      const V = (lo, hi) => hi ? `<b>${Math.round(lo * wt)}–${Math.round(hi * wt)} mL</b> (${lo}–${hi} mL/kg)` : `<b>${Math.round(lo * wt)} mL</b> (${lo} mL/kg)`;
      const ladder = `${R(5, 7)} for 1–2 h → ${R(3, 5)} for 2–4 h → ${R(2, 3)} for 2–4 h, then reduce further as the patient improves; stop by 48 hours of the critical phase.`;
      const L = [];
      if (st === "b1") L.push(`<b>Maintenance:</b> ${Math.round(mh)} mL/h (4-2-1 rule on ${wt} kg) of 0.9% saline or Ringer's lactate, only while oral intake is poor.`);
      if (st === "b2") { L.push(`<b>Start:</b> ${ladder}`); L.push(`<b>If haematocrit rises fast or vital signs worsen:</b> ${R(5, 10)} for 1–2 h, then reassess. If haematocrit is stable or rising only slightly: continue ${R(2, 3)} for another 2–4 h.`); }
      if (st === "cs") {
        if (age === "a") {
          L.push(`<b>Start:</b> isotonic crystalloid ${R(5, 10)} for 1 hour (Bhutan Figure 5).`);
          L.push(`<b>Improving:</b> reduce stepwise — ${ladder}`);
          L.push(`<b>Not improving — check haematocrit:</b> rising → second bolus of crystalloid or colloid ${V(10, 20)} over 1 hour, then if better ${R(7, 10)} for 1–2 h and back down the ladder; falling → look for bleeding: severe overt bleed → urgent transfusion (packed cells ${V(5)} or whole blood ${V(10)}); no overt bleed → colloid ${V(10, 20)} and consider transfusion if no improvement.`);
        } else {
          L.push(`<b>Start:</b> isotonic crystalloid ${V(10, 20)} over 1 hour (WHO 2009 — Bhutan Figure 6 is missing from the guideline PDF).`);
          L.push(`<b>Improving:</b> ${R(10)} for 1–2 h → ${R(7)} for 2 h → ${R(5)} for 4 h → ${R(3)}, then stop by 24–48 hours.`);
          L.push(`<b>Not improving — check haematocrit:</b> rising → second bolus ${V(10, 20)} over 1 hour (colloid if already had crystalloid boluses); falling → transfuse (packed cells ${V(5, 10)} or whole blood ${V(10, 20)}, WHO 2009) if bleeding is likely.`);
        }
      }
      if (st === "hs") {
        L.push(`<b>Bolus:</b> crystalloid or colloid ${V(20)} over 30 minutes (Bhutan Figure 7, all ages). Take haematocrit before the bolus if you can do so without delay.`);
        L.push(`<b>Improving:</b> ${R(10)} for 1 hour, then ${ladder}`);
        L.push(`<b>Not improving — check haematocrit:</b> rising → second bolus ${V(10)} over 30–60 minutes (colloid preferred after crystalloid boluses), then if better ${R(7, 10)} for 1–2 h; falling → severe bleed: urgent transfusion (packed cells ${V(5)}, whole blood ${V(10)}); no overt bleed: colloid ${V(10, 20)} and consider transfusion.`);
      }
      L.push(`Bhutan Table 5 regimens for ${wt} kg: R1 ${Math.round(3 * wt)}, R2 ${Math.round(6 * wt)}, R3 ${Math.round(10 * wt)}, R4 ${Math.round(20 * wt)} mL/h — step up or down one regimen at a time; never jump from R2 to R4.`);
      out.innerHTML = `${note ? `<p style="margin:0 0 6px">${note}</p>` : ""}<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Reassess pulse, BP, pulse pressure, capillary refill, urine output and haematocrit after every step. Too much fluid, or fluid continued into the recovery phase, causes pulmonary oedema.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
