/* Anaemia and hepatitis calculators.
   hbcutoff: WHO Guideline on haemoglobin cutoffs to define anaemia in individuals and populations (2024), Tables 2–5 (cutoffs, severity,
             elevation and smoking adjustments) — read from the WHO PDF.
   irondeficit: Ganzoni AM. Schweiz Med Wochenschr 1970 (total iron deficit); iron sucrose dosing per product information/BNF.
   hbvtreat: WHO Guidelines for the prevention, diagnosis, care and treatment of people with chronic hepatitis B infection (2024);
             APRI = (AST/ULN AST × 100) / platelets (10⁹/L), Wai CT et al. Hepatology 2003. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  hbcutoff(el, U) {
    const groups = [["c623", "Child 6–23 months", 105, [95, 70]], ["c2459", "Child 24–59 months", 110, [100, 70]], ["c511", "Child 5–11 years", 115, [110, 80]], ["c1214", "Child 12–14 years", 120, [110, 80]], ["w", "Non-pregnant woman 15–65 years", 120, [110, 80]], ["m", "Man 15–65 years", 130, [110, 80]], ["p1", "Pregnant, first trimester", 110, [100, 70]], ["p2", "Pregnant, second trimester", 105, [95, 70]], ["p3", "Pregnant, third trimester", 110, [100, 70]]];
    const places = [["0", "Enter elevation below", 0], ["2350", "Thimphu (about 2300–2400 m)", 2350], ["2250", "Paro (about 2200–2300 m)", 2250], ["1250", "Punakha / Wangdue (about 1200–1350 m)", 1250], ["2600", "Bumthang (about 2600 m)", 2600], ["1600", "Mongar (about 1600 m)", 1600], ["1100", "Trashigang (about 1100 m)", 1100], ["300", "Phuentsholing / Gelephu / Samdrup Jongkhar (about 200–350 m)", 300]];
    el.innerHTML = `<h4>Is this anaemia? WHO 2024 haemoglobin cutoff with altitude and smoking</h4><div class="row">
      <label>Measured Hb (g/dL)<input type="number" step="any" data-k="hb" placeholder="e.g. 11.2"></label>
      <label>Group<select data-k="g">${groups.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>
      <label>Place of residence<select data-k="pl">${places.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>
      <label>Elevation (m), if known<input type="number" step="any" data-k="el" placeholder="overrides place"></label>
      <label>Smoking<select data-k="sm"><option value="0">Non-smoker</option><option value="3">Smoker, under 10/day or unknown</option><option value="5">10–19/day</option><option value="6">20 or more/day</option></select></label></div><div class="out" aria-live="polite">Enter the haemoglobin.</div>`;
    const adj = e => e < 500 ? 0 : e < 1000 ? 4 : e < 1500 ? 8 : e < 2000 ? 11 : e < 2500 ? 14 : e < 3000 ? 18 : e < 3500 ? 21 : e < 4000 ? 25 : e < 4500 ? 29 : 33;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const hb = U.num(g("hb")), grp = groups.find(x => x[0] === g("g").value), elev = U.num(g("el")) >= 0 && g("el").value !== "" ? U.num(g("el")) : +g("pl").value, sm = +g("sm").value;
      if (!(hb > 0) || hb > 25) { out.textContent = "Enter the haemoglobin in g/dL."; return; }
      const a = adj(elev) + sm, hbAdj = hb * 10 - a, cut = grp[2], [mildLo, sevCut] = grp[3];
      const sev = hbAdj >= cut ? "No anaemia" : hbAdj >= mildLo ? "Mild anaemia" : hbAdj >= sevCut ? "Moderate anaemia" : "Severe anaemia";
      out.innerHTML = `<p style="margin:0"><b>${sev}.</b> Measured Hb ${hb} g/dL (${Math.round(hb * 10)} g/L) − adjustment ${a} g/L (elevation ${Math.round(elev)} m: ${adj(elev)}; smoking: ${sm}) = <b>${Math.round(hbAdj)} g/L adjusted</b>, compared with the sea-level cutoff of ${cut} g/L for ${grp[1].toLowerCase()}. Equivalently, anaemia here means Hb below <b>${((cut + a) / 10).toFixed(1)} g/dL</b>.</p>
        <p class="warn" style="margin:8px 0 0">Adjust for where the person lives, not where they are tested. ${sev !== "No anaemia" ? "Now find the cause: MCV, film, ferritin, reticulocytes, and a history of blood loss, diet and worms." : ""} ${/Severe/.test(sev) ? "Severe anaemia: assess for heart failure and the need for transfusion." : ""}</p>`;
    };
    el.addEventListener("input", go); go();
  },

  irondeficit(el, U) {
    el.innerHTML = `<h4>Total iron deficit (Ganzoni) and iron sucrose schedule</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 52"></label>
      <label>Current Hb (g/dL)<input type="number" step="any" data-k="hb" placeholder="e.g. 8.2"></label>
      <label>Target Hb (g/dL)<input type="number" step="any" data-k="tg" value="13"></label></div><div class="out" aria-live="polite">Enter weight and Hb.</div>`;
    const go = () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), out = U.$(".out", el);
      const w = g("wt"), hb = g("hb"), tg = g("tg");
      if (!(w > 0) || !(hb > 0) || !(tg > hb)) { out.textContent = "Enter weight, current Hb, and a target Hb above it."; return; }
      const stores = w >= 35 ? 500 : 15 * w, def = Math.round(w * (tg - hb) * 2.4 + stores), dose = w >= 35 ? 200 : Math.min(Math.round(7 * w / 10) * 10, 200);
      const n = Math.ceil(def / dose);
      out.innerHTML = `<p style="margin:0"><b>Total iron deficit ≈ ${def} mg</b> = ${w} kg × (${tg} − ${hb}) × 2.4 + stores ${Math.round(stores)} mg.</p>
        <p style="margin:6px 0 0">Iron sucrose (20 mg/mL): <b>${dose} mg per dose</b> (${dose / 20} mL) diluted in up to 100 mL (adults: 200 mL) 0.9% saline over at least 30 minutes, up to 3 times a week (maximum 600 mg/week) — about <b>${n} dose${n > 1 ? "s" : ""}</b>.${w < 35 ? " Children: maximum 7 mg/kg per dose (specialist)." : ""}</p>
        <p class="warn" style="margin:8px 0 0">Recheck Hb at 2–4 weeks and ferritin no sooner than 4 weeks after the last dose. Avoid IV iron in the first trimester and during active infection; observe for 30 minutes after each dose.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  hbvtreat(el, U) {
    const ck = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Chronic hepatitis B — who needs tenofovir? (WHO 2024)</h4><div class="row">
      <label>AST (U/L)<input type="number" step="any" data-k="ast" placeholder="e.g. 52"></label>
      <label>AST upper limit (U/L)<input type="number" step="any" data-k="uln" value="40"></label>
      <label>Platelets (×10⁹/L)<input type="number" step="any" data-k="plt" placeholder="e.g. 160"></label>
      <label>ALT (U/L)<input type="number" step="any" data-k="alt" placeholder="e.g. 45"></label>
      <label>Sex<select data-k="sex"><option value="m">Male (ALT ULN 30)</option><option value="f">Female (ALT ULN 19)</option></select></label>
      <label>HBV DNA (IU/mL)<input type="number" step="any" data-k="dna" placeholder="blank if not done"></label></div>
      <div class="checks" style="margin-top:10px">
      ${ck("cirr", "Clinical cirrhosis (ascites, varices, encephalopathy, nodular liver) or FibroScan over 12.5 kPa")}
      ${ck("co", "Co-infection: HIV, hepatitis D or hepatitis C")}
      ${ck("fh", "Family history of liver cancer or cirrhosis")}
      ${ck("imm", "Immunosuppression (chemotherapy, long-term steroids, biologics) or comorbidities (diabetes, fatty liver)")}
      ${ck("preg", "Pregnant (for mother-to-child prevention, see note)")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), n = k => U.num(g(k)), on = k => g(k).checked, out = U.$(".out", el);
      const ast = n("ast"), uln = n("uln") || 40, plt = n("plt"), alt = n("alt"), dna = g("dna").value === "" ? null : n("dna");
      const apri = ast > 0 && plt > 0 ? Math.round((ast / uln) * 100 / plt * 100) / 100 : null;
      const altUln = g("sex").value === "f" ? 19 : 30, altHigh = alt > altUln;
      const reasons = [];
      if (on("cirr") || (apri !== null && apri > 2)) reasons.push("cirrhosis (clinical, or APRI over 2)");
      if (apri !== null && apri > 0.5) reasons.push(`significant fibrosis (APRI ${apri} over 0.5)`);
      if (dna !== null && dna > 2000 && altHigh) reasons.push("HBV DNA over 2000 IU/mL with raised ALT");
      if (dna === null && altHigh) reasons.push("persistently raised ALT where HBV DNA testing is unavailable (confirm on 2 occasions over 6–12 months)");
      if (on("co")) reasons.push("co-infection (HIV, HDV or HCV)");
      if (on("fh")) reasons.push("family history of liver cancer or cirrhosis");
      if (on("imm")) reasons.push("immunosuppression or comorbidity");
      const msg = reasons.length ? `<b>Treat: tenofovir 300 mg once daily, long term.</b> Criteria met: ${reasons.join("; ")}.` : "<b>No treatment criterion met now.</b> Monitor ALT, HBV DNA (where available) and APRI at least every 12 months; recheck sooner if ALT rises.";
      out.innerHTML = `${apri !== null ? `<p style="margin:0 0 6px">APRI = (${ast}/${uln} × 100) / ${plt} = <b>${apri}</b> (over 0.5 = significant fibrosis; over 2 = cirrhosis, WHO 2024).</p>` : ""}<p style="margin:0">${msg}</p>
        ${on("preg") ? `<p style="margin:6px 0 0"><b>Pregnancy:</b> tenofovir from 28 weeks to at least 4 weeks after delivery if HBV DNA is over 200,000 IU/mL (or HBeAg positive) — Bhutan NSP IV and WHO 2024; baby gets HBIG and birth-dose vaccine within 24 hours.</p>` : ""}
        <p class="warn" style="margin:8px 0 0">Tenofovir is listed at NRH/RRH for hepatitis B. Check creatinine before and yearly. Never stop treatment in cirrhosis. Liver cancer surveillance (ultrasound ± AFP every 6 months) in cirrhosis or family history.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
