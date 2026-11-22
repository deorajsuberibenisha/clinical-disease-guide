/* Appendicitis calculators.
   Alvarado A, Ann Emerg Med 1986;15:557 (MANTRELS). Andersson M & Andersson RE, World J Surg 2008;32:1843 (AIR score).
   Samuel M, J Pediatr Surg 2002;37:877 (Paediatric Appendicitis Score). Thresholds as used in WSES Jerusalem 2020.
   Child first orders: WHO AWaRe antibiotic book 2022 (appendicitis), BNFc, Holliday–Segar maintenance fluids. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  alvarado(el, U) {
    const items = [["mig", "Pain migrated to the right iliac fossa", 1], ["ano", "Anorexia", 1], ["nv", "Nausea or vomiting", 1], ["ten", "Tenderness in the right iliac fossa", 2],
      ["reb", "Rebound tenderness", 1], ["tmp", "Temperature 37.3 °C or more", 1], ["wbc", "White cells over 10 × 10⁹/L", 2], ["shf", "Neutrophils over 75% (left shift)", 1]];
    el.innerHTML = `<h4>Alvarado score (MANTRELS)</h4><div class="checks">${items.map(([k, t, p]) => `<label class="chk"><input type="checkbox" data-k="${k}" data-p="${p}">${t} <b style="margin-left:auto">+${p}</b></label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$$("input", el).reduce((n, i) => n + (i.checked ? +i.dataset.p : 0), 0);
      const [g, a] = s <= 4 ? ["Low (0–4)", "Appendicitis unlikely. Consider other causes; discharge with clear return advice if well, or observe and re-examine."]
        : s <= 6 ? ["Equivocal (5–6)", "Observe, repeat examination and blood tests in 6–12 hours, and image (ultrasound first)."]
        : s <= 8 ? ["Probable (7–8)", "Surgical review now. Image if the diagnosis is still in doubt (especially in women of reproductive age)."]
        : ["Very probable (9–10)", "Surgical review now for appendicectomy."];
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>Alvarado ${s}/10 — ${g}.</b> ${a}</p><p class="warn" style="margin:8px 0 0">Alvarado is best at ruling OUT appendicitis (score under 5). It over-calls appendicitis in women; WSES prefers the AIR or Adult Appendicitis Score in adults, and the PAS in children.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  airscore(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>Appendicitis Inflammatory Response (AIR) score — adults</h4><div class="row">
      ${sel("vom", "Vomiting", [[0, "No"], [1, "Yes (+1)"]])}
      ${sel("rif", "Pain in the right iliac fossa", [[0, "No"], [1, "Yes (+1)"]])}
      ${sel("reb", "Rebound tenderness or muscular defence", [[0, "None"], [1, "Light (+1)"], [2, "Medium (+2)"], [3, "Strong (+3)"]])}
      ${sel("tmp", "Temperature", [[0, "Under 38.5 °C"], [1, "38.5 °C or more (+1)"]])}
      ${sel("pmn", "Neutrophils (%)", [[0, "Under 70%"], [1, "70–84% (+1)"], [2, "85% or more (+2)"]])}
      ${sel("wbc", "White cells (× 10⁹/L)", [[0, "Under 10"], [1, "10–14.9 (+1)"], [2, "15 or more (+2)"]])}
      ${sel("crp", "CRP (mg/L)", [[0, "Under 10"], [1, "10–49 (+1)"], [2, "50 or more (+2)"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$$("select", el).reduce((n, x) => n + +x.value, 0);
      const [g, a] = s <= 4 ? ["Low probability (0–4)", "Outpatient follow-up if the patient is well and the history is short; return if worse. Re-examine within 24 hours if symptoms persist."]
        : s <= 8 ? ["Indeterminate (5–8)", "Admit for active observation: repeat examination and bloods, and image (ultrasound; CT if still unclear in adults)."]
        : ["High probability (9–12)", "Surgical review for appendicectomy. Imaging is still advised in women of reproductive age and older adults."];
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>AIR ${s}/12 — ${g}.</b> ${a}</p><p class="warn" style="margin:8px 0 0">Light, medium and strong defence mean tenderness or guarding that is local, spreading, or generalised. If CRP is not available, the score loses accuracy: rely more on repeated examination and ultrasound.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  passcore(el, U) {
    const items = [["hop", "Pain in the right iliac fossa on coughing, hopping or percussion", 2], ["ten", "Tenderness in the right iliac fossa", 2], ["ano", "Anorexia", 1], ["fev", "Temperature 38 °C or more", 1],
      ["nv", "Nausea or vomiting", 1], ["mig", "Pain migrated to the right iliac fossa", 1], ["wbc", "White cells over 10 × 10⁹/L", 1], ["neu", "Neutrophils over 75%", 1]];
    el.innerHTML = `<h4>Paediatric Appendicitis Score (PAS) — children 3–18 years</h4><div class="checks">${items.map(([k, t, p]) => `<label class="chk"><input type="checkbox" data-k="${k}" data-p="${p}">${t} <b style="margin-left:auto">+${p}</b></label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$$("input", el).reduce((n, i) => n + (i.checked ? +i.dataset.p : 0), 0);
      const [g, a] = s <= 3 ? ["Low risk (0–3)", "Appendicitis unlikely. Look for another cause (gastroenteritis, constipation, UTI, pneumonia, mesenteric adenitis). Safety-net and review within 24 hours if pain persists."]
        : s <= 6 ? ["Intermediate (4–6)", "Ultrasound by an experienced operator, observe with repeat examination, and ask for surgical review."]
        : ["High risk (7–10)", "Surgical review now. Ultrasound is still useful to confirm and to look for perforation, but should not delay referral."];
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>PAS ${s}/10 — ${g}.</b> ${a}</p><p class="warn" style="margin:8px 0 0">Under 5 years the score is less reliable and perforation is common: a low threshold for surgical review is safer. Always examine the testes (torsion) and the chest (right lower lobe pneumonia).</p>`;
    };
    el.addEventListener("input", go); go();
  },

  /* Weight-based first orders for a child with suspected appendicitis */
  appxchild(el, U) {
    el.innerHTML = `<h4>Child with suspected appendicitis — first orders by weight</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 22"></label>
      <label>Picture<select data-k="cx"><option value="u">Uncomplicated (localised, well)</option><option value="c">Perforation, abscess or peritonitis suspected</option></select></label>
      <label>Shocked (poor perfusion)<select data-k="sh"><option value="n">No</option><option value="y">Yes</option></select></label></div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const w = U.num(g("wt")), cx = g("cx").value === "c", sh = g("sh").value === "y";
      if (!(w > 0) || w > 120) { out.textContent = "Enter the weight."; return; }
      if (w < 3) { out.innerHTML = `<span class="warn">Neonates need neonatal dosing and specialist care; this tool starts at 3 kg.</span>`; return; }
      const r0 = v => Math.round(v), r5 = v => Math.round(v / 5) * 5;
      const mf = w <= 10 ? w * 100 : w <= 20 ? 1000 + (w - 10) * 50 : 1500 + (w - 20) * 20, mfh = Math.min(mf / 24, 100);
      const cef = Math.min(r5(80 * w), 2000), met = Math.min(r5(7.5 * w), 500), amx = Math.min(r5(30 * w), 1000), gen = Math.min(r0(7.5 * w), 400);
      const par = Math.min(r5((w < 10 ? 10 : 15) * w), 1000), mor = Math.min(Math.round(0.1 * w * 10) / 10, 5), ond = Math.min(Math.round(0.15 * w * 10) / 10, 4);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">
        ${sh ? `<li><b>Fluid bolus:</b> ${r0(10 * w)} mL (10 mL/kg) Ringer's lactate or 0.9% saline over 5–10 minutes; reassess and repeat up to 40–60 mL/kg, and call for senior help.</li>` : ""}
        <li><b>Nil by mouth; maintenance fluid</b> (0.9% saline with 5% dextrose, or Ringer's lactate): ${r0(mf)} mL/day ≈ <b>${r0(mfh)} mL/hour</b> (Holliday–Segar; restrict to about two-thirds if there are concerns about hyponatraemia).</li>
        <li><b>Antibiotics</b> (${cx ? "treatment course" : "start at diagnosis; continue only if complicated at operation"}): ceftriaxone <b>${cef} mg</b> IV once daily (80 mg/kg, max 2 g) + metronidazole <b>${met} mg</b> IV 8-hourly (7.5 mg/kg, max 500 mg).<br>Alternative: co-amoxiclav <b>${amx} mg</b> (amoxicillin component, 30 mg/kg, max 1 g) IV 8-hourly. Bhutan STG pre-referral option: ampicillin ${Math.min(r5(50 * w), 2000)} mg IV 6-hourly + metronidazole ${met} mg 8-hourly${cx ? `, adding gentamicin ${gen} mg IV once daily (7.5 mg/kg) for gram-negative cover` : ""}.</li>
        <li><b>Pain:</b> paracetamol <b>${par} mg</b> (${w < 10 ? "10 mg/kg IV" : "15 mg/kg"}) 6-hourly; morphine <b>${mor} mg</b> IV (0.1 mg/kg, max 5 mg) titrated for severe pain. Early analgesia does not mask appendicitis.</li>
        <li><b>Nausea:</b> ondansetron <b>${ond} mg</b> IV or oral (0.15 mg/kg, max 4 mg).</li></ul>
        <p class="warn" style="margin:8px 0 0">${cx ? "Complicated appendicitis: after the appendix is removed, continue IV antibiotics until the child is eating, afebrile and the white count is falling, then switch to oral co-amoxiclav; total about 5–7 days." : "Uncomplicated appendicitis: one pre-operative dose is enough; no antibiotics are needed after removal of a non-perforated appendix."} Check doses against the chapter and BNFc/NEMF.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
