/* Acute abdomen calculators.
   Boey J et al., Ann Surg 1987;205:22–26 (perforated peptic ulcer risk); WSES perforated and bleeding peptic ulcer guideline 2020.
   Fluids: NICE CG174 (adults, IV fluid therapy; maintenance 25–30 mL/kg/day), NICE NG29 (children; Holliday–Segar; 10 mL/kg bolus),
   Bhutan STG §12.4.5 (pyloric stenosis bolus 20 mL/kg). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  boey(el, U) {
    const items = [["shock", "Shock on admission (systolic BP under 100 mmHg)"], ["ill", "Major medical illness (heart or lung disease, diabetes, cirrhosis, kidney failure, immunosuppression)"], ["late", "Perforation more than 24 hours before arrival"]];
    el.innerHTML = `<h4>Boey score — perforated peptic ulcer</h4><div class="checks">${items.map(([k, t]) => `<label class="chk"><input type="checkbox" data-k="${k}">${t} <b style="margin-left:auto">+1</b></label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$$("input", el).filter(i => i.checked).length;
      const orig = ["0%", "10%", "45%", "100%"][s];
      const act = s === 0 ? "Standard emergency repair (laparoscopic or open omental patch)." : s === 1 ? "Emergency repair; senior surgeon and anaesthetist; HDU care afterwards." : "Very high risk: resuscitate aggressively, consultant-led surgery, plan ICU, and discuss goals of care with the family.";
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>Boey ${s}/3.</b> Death in the original 1987 series: ${orig}. Modern series report lower figures, but the risk still climbs steeply with each point. ${act}</p><p class="warn" style="margin:8px 0 0">The score supports, but never replaces, the decision to operate: almost every perforated ulcer needs surgery. Delay is the factor you can change.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  obsfluids(el, U) {
    el.innerHTML = `<h4>Fluid plan in bowel obstruction or peritonitis (nil by mouth)</h4><div class="row">
      <label>Patient<select data-k="who"><option value="a">Adult</option><option value="c">Child</option></select></label>
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 60"></label>
      <label>Dehydration<select data-k="dh"><option value="0">None obvious</option><option value="5">Some (about 5%)</option><option value="10">Severe (about 10%)</option></select></label>
      <label>Shocked now<select data-k="sh"><option value="n">No</option><option value="y">Yes</option></select></label>
      <label>NG aspirate, last 24 h (mL)<input type="number" data-k="ng" placeholder="optional"></label>
      <label>Potassium (mmol/L)<input type="number" step="any" data-k="k" placeholder="optional"></label></div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const child = g("who").value === "c", w = U.num(g("wt")), dh = +g("dh").value, sh = g("sh").value === "y", ng = U.num(g("ng")) || 0, k = U.num(g("k"));
      if (!(w > 0) || w > 250) { out.textContent = "Enter the weight."; return; }
      const r = v => Math.round(v), r10 = v => Math.round(v / 10) * 10;
      const maint = child ? (w <= 10 ? w * 100 : w <= 20 ? 1000 + (w - 10) * 50 : 1500 + (w - 20) * 20) : Math.min(w, 100) * 27.5;
      const maintCap = child ? Math.min(maint, 2400) : maint;
      const deficit = w * dh * 10, perHour = (maintCap + deficit) / 24;
      const bolus = child ? r(10 * w) : 500;
      const uo = child ? "at least 1 mL/kg/hour (" + r(w) + " mL/hour)" : "at least 0.5 mL/kg/hour (" + r(0.5 * w) + " mL/hour)";
      let kTxt = "";
      if (k > 0) kTxt = k < 3.0 ? `<li class="warn"><b>Potassium ${k} mmol/L (low):</b> add potassium once urine is flowing — ${child ? "20 mmol/L in the maintenance fluid; specialist advice for faster replacement" : "40 mmol in each litre, no faster than 10 mmol/hour through a peripheral vein"}; recheck in 4–6 hours. Low potassium alone can cause ileus.</li>`
        : k < 3.5 ? `<li><b>Potassium ${k} mmol/L:</b> add ${child ? "20 mmol/L" : "20–40 mmol/L"} KCl to maintenance once urine is flowing.</li>`
        : k > 5.5 ? `<li class="warn"><b>Potassium ${k} mmol/L (high):</b> give no potassium; check kidney function and ECG.</li>` : `<li>Potassium ${k} mmol/L: add ${child ? "10–20" : "20"} mmol/L KCl to maintenance once passing urine, to cover ongoing losses.</li>`;
      out.innerHTML = `<ul style="margin:0;padding-left:18px">
        ${sh ? `<li class="warn"><b>Shock first:</b> ${bolus} mL ${child ? "(10 mL/kg) " : ""}Ringer's lactate or 0.9% saline ${child ? "over 5–10" : "in under 15"} minutes; reassess and repeat${child ? " up to 40–60 mL/kg" : " up to about 2 L"}, then senior review and source control.</li>` : ""}
        <li><b>Maintenance:</b> ${r10(maintCap)} mL/day ${child ? "(Holliday–Segar)" : "(25–30 mL/kg/day)"}${child ? ", 0.9% saline with 5% dextrose" : ", e.g. Ringer's lactate or 0.9% saline with 5% dextrose for some of the volume"}.</li>
        ${dh ? `<li><b>Deficit:</b> about ${r10(deficit)} mL (${dh}% of body weight), replaced over 24 hours with Ringer's lactate or 0.9% saline.</li>` : ""}
        <li><b>Starting rate:</b> about <b>${r(perHour)} mL/hour</b> (maintenance${dh ? " + deficit" : ""}), adjusted to pulse, BP, capillary refill and urine output.</li>
        ${ng ? `<li><b>NG losses:</b> replace mL for mL (${r10(ng)} mL/day ≈ ${r(ng / 24)} mL/hour, or 4-hourly in arrears) with 0.9% saline plus 10 mmol KCl per 500 mL once urine is flowing.</li>` : `<li><b>NG losses:</b> measure 4-hourly and replace mL for mL with 0.9% saline plus potassium.</li>`}
        ${kTxt}
        <li><b>Urine output target:</b> ${uo} — catheterise if shocked or very unwell. Check sodium, potassium, creatinine and glucose at least daily.</li></ul>
        <p class="warn" style="margin:8px 0 0">${child ? "Pyloric stenosis: Bhutan STG uses a 20 mL/kg saline bolus if severely dehydrated, then corrects alkalosis and potassium slowly before surgery. Neonates and severe malnutrition need specialist fluid plans." : "Older adults, heart failure and kidney failure: smaller boluses (250 mL) and frequent review."}</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
