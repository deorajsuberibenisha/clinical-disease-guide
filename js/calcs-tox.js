/* Rabies PEP, paracetamol, organophosphate and anaphylaxis calculators.
   Rabies: National Guidelines for Management of Rabies, Bhutan 2023 (rev. 2024); WHO position paper 2018.
   Paracetamol: Bhutan STG 2024 §1.4.6 and NEMF 2022 (NAC three-bag volumes); Rumack–Matthew 150 line (half-life 4 h); UK MHRA 2012 100 line; Chiew AL et al. MJA 2020.
   Organophosphate: Bhutan STG 2024 §1.4.3; Eddleston M et al. Lancet 2008 (doubling atropine, infusion 10–20%/h); WHO/NEMF pralidoxime 30 mg/kg + 8 mg/kg/h.
   Anaphylaxis: Resuscitation Council UK 2021; Bhutan STG 2024 §1.4.18 and Snakebite Guideline 2024 (age doses); WAO 2020. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  rabiespep(el, U) {
    el.innerHTML = `<h4>Animal bite: rabies post-exposure prophylaxis (Bhutan 2024)</h4><div class="row">
      <label>Exposure<select data-k="cat"><option value="1">Category I: lick on intact skin, touching, feeding</option><option value="2">Category II: nibble on bare skin, scratch or abrasion without bleeding</option><option value="3" selected>Category III: bite or scratch through skin, lick on broken skin, saliva on mucosa, bat contact</option></select></label>
      <label>Animal<select data-k="an"><option value="dog">Dog, cat or other mammal</option><option value="rod">Rat, mouse, squirrel or other rodent</option></select></label>
      <label>Previous rabies vaccination<select data-k="prev"><option value="n">None or fewer than 2 doses</option><option value="y">Full PrEP or PEP, or at least 2 doses before</option></select></label>
      <label>Immunocompromised (HIV, chemotherapy, steroids)<select data-k="ic"><option value="n">No</option><option value="y">Yes</option></select></label>
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 25"></label>
      <label>Day 0 (first vaccine)<input type="date" data-k="d0"></label></div>
      <div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), cat = +g("cat").value, prev = g("prev").value === "y", ic = g("ic").value === "y", w = U.num(g("wt"));
      const d0v = g("d0").value, d0 = d0v ? new Date(d0v + "T00:00:00") : null;
      const dt = n => d0 ? new Date(d0.getTime() + n * 864e5).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) : "day " + n;
      if (g("an").value === "rod") { out.innerHTML = `<p style="margin:0"><b>No rabies PEP</b> after rodent bites: transmission has not been documented (Bhutan 2024). Clean the wound, tetanus prophylaxis, and antibiotics only if infected.</p>`; return; }
      if (cat === 1) { out.innerHTML = `<p style="margin:0"><b>Category I: no PEP</b> if the history is reliable. Wash the area with soap and water.</p>`; return; }
      const L = [`<b>Wound care now:</b> wash and flush every wound for 15 minutes with soap and running water, then povidone-iodine. Do not suture if avoidable (if unavoidable, suture loosely a few hours after immunoglobulin). Tetanus: Td if not boosted in the last 5 years for a dirty wound.`];
      if (prev) L.push(`<b>Re-exposure regimen:</b> 0.1 mL ID at 1 site (or 0.5 mL IM) on <b>${dt(0)}</b> and <b>${dt(3)}</b>. <b>No immunoglobulin.</b> If the last full course was under 3 months ago, wound care only.`);
      else {
        L.push(`<b>Vaccine (PVRV), intradermal 2-2-2-0-0:</b> 0.1 mL at 2 sites (both deltoids; thigh under 2 years) on <b>${dt(0)}</b>, <b>${dt(3)}</b> and <b>${dt(7)}</b>. Same dose for every age. IM alternative only if ID is impossible: 0.5 mL on ${dt(0)}, ${dt(3)}, ${dt(7)} and between ${dt(14)} and ${dt(28)}.`);
        if (cat === 3 || ic) {
          if (w > 0) { const iu = Math.min(40 * w, 3000), ml = iu / 300; L.push(`<b>Equine rabies immunoglobulin (ERIG):</b> 40 IU/kg × ${w} kg = <b>${Math.round(iu)} IU = ${ml.toFixed(1)} mL</b> of 300 IU/mL${40 * w > 3000 ? " (NEMF maximum 3000 IU reached)" : ""}. Infiltrate into and around every wound; dilute with saline if the volume is too small for all wounds. Give with the first vaccine dose, or up to ${dt(7)} at the latest; not after day 7. No skin test; have adrenaline ready.`); }
          else L.push("<b>ERIG 40 IU/kg</b> (max 3000 IU) into and around the wounds: enter the weight for the volume.");
          if (cat === 2 && ic) L.push("Immunoglobulin is given here for a category II exposure because the person is immunocompromised.");
        } else L.push("No immunoglobulin for category II exposure in an immunocompetent person.");
      }
      L.push("Antibiotic prophylaxis (co-amoxiclav 3–5 days) for deep, hand, face or genital wounds, cat bites, crush injury, or immunocompromised patients. A healthy dog or cat that stays well for 10 days of observation allows the course to stop (WHO), but never delay starting.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  },

  pcmnac(el, U) {
    el.innerHTML = `<h4>Paracetamol overdose: risk and acetylcysteine (NAC)</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 50"></label>
      <label>Amount swallowed (mg, total)<input type="number" step="any" data-k="mg" placeholder="e.g. 10000"></label>
      <label>Hours since ingestion<input type="number" step="any" data-k="h" placeholder="e.g. 6"></label>
      <label>Paracetamol level (if done)<input type="number" step="any" data-k="lvl" placeholder="e.g. 80"></label>
      <label>Level units<select data-k="u"><option value="mg">mg/L</option><option value="um">micromol/L</option></select></label>
      <label>Treatment line<select data-k="line"><option value="150">150 line (Rumack–Matthew, Australia/NZ)</option><option value="100">100 line (UK)</option></select></label>
      <label>Single ingestion at a known time?<select data-k="type"><option value="s">Yes</option><option value="x">No: staggered, over hours, or time unknown</option></select></label></div>
      <div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), w = U.num(g("wt")), mg = U.num(g("mg")), h = U.num(g("h")), lv0 = U.num(g("lvl")), L4 = +g("line").value, stag = g("type").value === "x";
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      const wc = Math.min(w, 110), lvl = lv0 > 0 ? (g("u").value === "um" ? lv0 / 6.62 : lv0) : NaN;
      const L = []; let treat = null;
      if (mg > 0) { const dk = mg / w; L.push(`Dose taken: <b>${Math.round(dk)} mg/kg</b> ${dk >= 150 ? "— at or above the Bhutan STG toxic dose of 150 mg/kg" : "— below 150 mg/kg (STG toxic dose); still treat if a level is above the line or the history is unreliable"}.`); if (!(lvl > 0)) treat = dk >= 150; }
      if (stag) { L.push("<b>Staggered or unknown-time ingestion: the nomogram cannot be used. Start NAC</b> if more than 150 mg/kg in 24 hours, or if ALT is raised or paracetamol is detectable; stop if after 21 h ALT and INR are normal and paracetamol undetectable."); treat = true; }
      else if (lvl > 0 && h >= 4 && h <= 24) {
        const line = L4 * Math.pow(2, -(h - 4) / 4); treat = lvl >= line;
        L.push(`At ${h} h the ${L4} line is <b>${line.toFixed(1)} mg/L</b> (${Math.round(line * 6.62)} micromol/L); the level is ${lvl.toFixed(1)} mg/L → <b>${treat ? "ABOVE the line: give NAC" : "below the line: NAC not needed"}</b>${treat ? "" : " (if the timing is certain and ALT normal)"}.${h > 15 ? " Beyond 15 hours the nomogram is less reliable: treat if in doubt." : ""}`);
      } else if (lvl > 0 && h < 4) L.push("A level taken before 4 hours cannot be interpreted: repeat it at 4 hours.");
      if (h >= 8 && treat !== false) L.push("<b>Over 8 hours since ingestion:</b> start NAC now if a toxic dose is possible; do not wait for the level.");
      if (h > 0 && h <= 1 && mg / w >= 150) L.push("Within 1 hour: activated charcoal 1 g/kg (max 50 g) if the airway is safe.");
      const vol = w >= 40 ? [200, 500, 500] : w >= 20 ? [100, 250, 500] : [3 * w, 7 * w, 14 * w].map(Math.round);
      const b1 = 150 * wc, b2 = 50 * wc, b3 = 100 * wc, tot = b1 + b2 + b3;
      const nacHtml = `<div style="overflow-x:auto"><table class="mini" style="font-size:.88em"><tr><th>Bag</th><th>NAC</th><th>mL of 200 mg/mL</th><th>In 5% dextrose</th><th>Over</th></tr>
        <tr><td>1</td><td>${Math.round(b1)} mg</td><td>${(b1 / 200).toFixed(1)} mL</td><td>${vol[0]} mL</td><td>1 hour</td></tr>
        <tr><td>2</td><td>${Math.round(b2)} mg</td><td>${(b2 / 200).toFixed(1)} mL</td><td>${vol[1]} mL</td><td>4 hours</td></tr>
        <tr><td>3</td><td>${Math.round(b3)} mg</td><td>${(b3 / 200).toFixed(1)} mL</td><td>${vol[2]} mL</td><td>16 hours</td></tr></table></div>
        <p style="margin:4px 0 0">Total ${(tot / 1000).toFixed(1)} g = <b>${Math.ceil(tot / 400)} vials</b> of 400 mg (2 mL). ${w > 110 ? "Dose capped at 110 kg. " : ""}Volumes per Bhutan STG/NEMF bands.</p>`;
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>${treat === false ? "" : nacHtml}
        <p class="warn" style="margin:8px 0 0">Check ALT, INR, creatinine and glucose at the start and before NAC ends. Continue NAC (6.25 mg/kg/h) if ALT is rising or INR over 1.3. No NAC on site: refer with the first bag running. Reactions to bag 1 are not allergy: pause, antihistamine, restart slower.</p>`;
    });
  },

  opatropine(el, U) {
    el.innerHTML = `<h4>Organophosphate poisoning: atropine and pralidoxime</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label>
      <label>Patient<select data-k="ag"><option value="a">Adult or 12 years and over</option><option value="c">Child under 12</option></select></label>
      <label>Total atropine given to atropinise (mg), if known<input type="number" step="any" data-k="tot" placeholder="e.g. 23"></label></div>
      <div class="out" aria-live="polite">Enter weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), w = U.num(g("wt")), child = g("ag").value === "c", tot = U.num(g("tot"));
      if (!(w > 0)) { out.textContent = "Enter weight."; return; }
      const amp = v => (v / 0.6).toFixed(1);
      let first = child ? Math.max(0.1, 0.02 * w) : 2; first = Math.round(first * 100) / 100;
      const seq = [], cum = []; let d = first, c = 0; for (let i = 0; i < 6; i++) { c += d; seq.push(d); cum.push(c); d *= 2; }
      const stg = child ? (0.05 * w).toFixed(2) + " mg (0.05 mg/kg)" : "2–5 mg";
      const pamB = Math.round(30 * w), pamI = Math.round(8 * w);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">
        <li><b>Atropine loading (doubling, Eddleston 2008):</b> ${seq.map((x, i) => `${Math.round(x * 100) / 100} mg (cumulative ${Math.round(cum[i] * 100) / 100})`).join(" → ")} … every 5 minutes until atropinised. Ampoule 0.6 mg/mL: first dose = ${amp(first)} mL. Bhutan STG: ${stg} IV every 5 minutes until the chest is clear.</li>
        <li><b>Atropinised when:</b> chest clear on auscultation, HR over 80, SBP over 80 mmHg, dry axillae, pupils no longer pinpoint. The chest is the target, not the pupils.</li>
        <li><b>Maintenance infusion:</b> ${tot > 0 ? `10–20% of ${tot} mg per hour = <b>${(0.1 * tot).toFixed(1)}–${(0.2 * tot).toFixed(1)} mg/hour</b> (${amp(0.1 * tot)}–${amp(0.2 * tot)} mL/hour of undiluted 0.6 mg/mL)` : "10–20% of the total loading dose per hour (enter the total above)"}. Review every 15 minutes at first: secretions back → bolus and raise 20%; confusion, fever, absent bowel sounds → stop 30–60 min, restart at 70–80%.</li>
        <li><b>Pralidoxime (adjunct, never instead of atropine):</b> WHO/NEMF ${pamB} mg (30 mg/kg) IV over 20–30 minutes = ${(pamB / 25).toFixed(0)} mL of 25 mg/mL, then <b>${pamI} mg/hour</b> (8 mg/kg/h; max 12 g/day). STG: ${child ? `${Math.round(20 * w)}–${Math.round(50 * w)} mg, then ${Math.round(10 * w)}–${Math.round(20 * w)} mg/hour` : "1–2 g over 15–30 minutes, then 0.5–1 g/hour"}.</li>
        <li>Remove clothes and wash skin (staff in gloves); oxygen; suction; intubate early for weakness or secretions (no suxamethonium). Observe at least 48 hours for intermediate syndrome (neck-flexion weakness).</li></ul>`;
    });
  },

  anaphdose(el, U) {
    el.innerHTML = `<h4>Anaphylaxis: doses by age and weight</h4><div class="row">
      <label>Age<select data-k="age"><option value="a">Adult or over 12 years</option><option value="b">6 to 12 years</option><option value="c">6 months to under 6 years</option><option value="d">Under 6 months</option></select></label>
      <label>Weight (kg, optional)<input type="number" step="any" data-k="wt" placeholder="e.g. 18"></label>
      <label>On a beta-blocker?<select data-k="bb"><option value="n">No</option><option value="y">Yes</option></select></label></div>
      <div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), a = g("age").value, w = U.num(g("wt")), bb = g("bb").value === "y";
      const rc = { a: 500, b: 300, c: 150, d: 100 }[a], bt = { a: "0.5 mg", b: "0.2 mg (Snakebite Guideline 2024)", c: "0.1 mg (1 to under 6 y); 0.05 mg under 1 y", d: "0.05 mg" }[a];
      const wk = w > 0 ? Math.min(10 * w, 500) : null, adult = a === "a";
      const fl = adult ? "500–1000 mL crystalloid (0.9% saline or Ringer's), repeat as needed" : (w > 0 ? `${Math.round(10 * w)} mL (10 mL/kg) crystalloid, repeat as needed` : "10 mL/kg crystalloid");
      const inf = w > 0 ? `${(0.5 * w).toFixed(1)}–${(1 * w).toFixed(1)} mL/hour` : "0.5–1 mL/kg/hour";
      out.innerHTML = `<ul style="margin:0;padding-left:18px">
        <li><b>IM adrenaline 1 mg/mL (1:1000), anterolateral thigh:</b> <b>${rc} microgram = ${(rc / 1000).toFixed(2)} mL</b> (RCUK 2021)${wk ? `; by weight 10 microgram/kg = ${Math.round(wk)} microgram (${(wk / 1000).toFixed(2)} mL)` : ""}. Bhutan STG/Snakebite Guideline: ${bt}. <b>Repeat every 5 minutes</b> if not improving.</li>
        <li><b>Position:</b> lie flat with legs raised; sit up only if breathing is difficult; left side if pregnant. Never stand or sit a hypotensive patient up.</li>
        <li><b>High-flow oxygen</b>; IV access; <b>fluid bolus:</b> ${fl}.</li>
        <li><b>Wheeze:</b> salbutamol ${adult ? "5 mg" : a === "d" ? "2.5 mg" : "2.5–5 mg"} nebulised (after adrenaline).</li>
        <li><b>Refractory</b> (no better after 2 IM doses and a fluid bolus): get expert help; start <b>adrenaline infusion</b> (1 mg in 100 mL 0.9% saline = 10 microgram/mL) at <b>${inf}</b> (RCUK 2021) via a good IV line, titrated to response with monitoring; keep giving IM doses every 5 minutes until it runs.</li>
        ${bb ? `<li><b>Beta-blocker:</b> glucagon ${adult ? "1–2 mg" : w > 0 ? Math.min(0.02 * w, 1).toFixed(2) + " mg (20 microgram/kg)" : "20 microgram/kg (max 1 mg)"} IV/IM, repeat every 5 minutes if needed.</li>` : ""}
        <li><b>After adrenaline only:</b> non-sedating antihistamine for itch (cetirizine); steroids are not routine (RCUK 2021). STG option: promethazine 10 mg IV/IM slowly (not under 2 years) and hydrocortisone 100 mg IV${adult ? "" : " (child 4 mg/kg, max 100 mg)"}.</li>
        <li><b>Observe:</b> 6 hours after resolution if one dose of adrenaline worked; 12 hours if 2 or more doses, severe reaction, asthma, or late presentation (RCUK 2021).</li></ul>`;
    };
    el.addEventListener("input", go); el.addEventListener("change", go); go();
  }
});
