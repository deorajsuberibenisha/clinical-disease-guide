/* Diarrhoea calculator: WHO/IMNCI dehydration classification with Plan A/B/C fluid volumes by age and weight.
   Sources: Bhutan Hospital-based IMNCI 3rd ed. 2024 (§3.7, §10.2); WHO Pocket Book 2013 Charts 13–15; MSF cholera guide (adults Plan C);
   ICMR STW Acute diarrhoea 2019. Decision aid only; not for severe acute malnutrition (use the SAM protocol). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {
  dehyd(el, U) {
    const signs = [
      ["leth", "Lethargic or unconscious"], ["rest", "Restless, irritable"], ["eyes", "Sunken eyes"],
      ["nodrink", "Not able to drink, or drinks poorly"], ["thirst", "Drinks eagerly, thirsty"],
      ["vslow", "Skin pinch goes back very slowly (over 2 seconds)"], ["slow", "Skin pinch goes back slowly"]];
    el.innerHTML = `<h4>Dehydration: classify and calculate fluids (WHO Plans A, B, C)</h4><div class="row">
      <label>Age group<select data-k="age"><option value="inf">Under 12 months</option><option value="ch" selected>12 months to under 5 years</option><option value="old">5 years and over, and adults</option></select></label>
      <label>Weight (kg)<input type="number" data-k="wt" placeholder="e.g. 10"></label></div>
      <div class="checks">${signs.map(([k, t]) => `<label class="chk"><input type="checkbox" data-k="${k}"> ${t}</label>`).join("")}
      <label class="chk"><input type="checkbox" data-k="sam"> Severe acute malnutrition</label></div><div class="out" aria-live="polite"></div>`;
    const run = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked, out = U.$(".out", el);
      const age = U.$("[data-k=age]", el).value, wt = U.num(U.$("[data-k=wt]", el));
      const sev = [c("leth"), c("eyes"), c("nodrink"), c("vslow")].filter(Boolean).length;
      const some = [c("rest"), c("eyes"), c("thirst"), c("slow") || c("vslow")].filter(Boolean).length;
      const w = wt > 0 ? wt : 0, ml = x => w ? `<b>${Math.round(x * w / 10) * 10} mL</b>` : "(enter weight)";
      let h;
      if (c("sam")) {
        h = `<p style="margin:0"><b>Severe acute malnutrition:</b> do not use these plans. Dehydration is hard to judge and standard fluids can cause heart failure. Follow the SAM protocol (ReSoMal or the slower IV regimen only for shock) and refer.</p>`;
      } else if (sev >= 2) {
        const first = age === "inf" ? "1 hour" : "30 minutes", then = age === "inf" ? "5 hours" : age === "ch" ? "2½ hours" : "2½–3 hours";
        h = `<p style="margin:0"><b style="color:var(--red,#b42318)">SEVERE DEHYDRATION: Plan C</b> (${sev} of the 4 severe signs)</p>
          <p style="margin:6px 0 0">IV <b>Ringer's lactate</b> (or normal saline) <b>100 mL/kg</b>${w ? ` = ${ml(100)}` : ""}:<br>• first <b>30 mL/kg</b> ${ml(30)} over <b>${first}</b> (repeat once if the radial pulse is still very weak)<br>• then <b>70 mL/kg</b> ${ml(70)} over <b>${then}</b>.</p>
          <p style="margin:6px 0 0">Reassess every 15–30 minutes. Give ORS about 5 mL/kg/hour ${w ? `(${ml(5)}/hour) ` : ""}as soon as the patient can drink. If no IV access: ORS <b>20 mL/kg/hour</b> ${w ? `(${ml(20)}/hour) ` : ""}by NG tube for 6 hours, and refer. Reclassify after ${age === "inf" ? "6" : "3"} hours.${age !== "inf" ? " If cholera is suspected in a child 2 years or older or an adult, give an antibiotic (doxycycline or azithromycin)." : ""}</p>`;
      } else if (some >= 2) {
        h = `<p style="margin:0"><b style="color:var(--amber,#b54708)">SOME DEHYDRATION: Plan B</b></p>
          <p style="margin:6px 0 0">ORS <b>75 mL/kg over 4 hours</b>${w ? ` = ${ml(75)} (about ${ml(75 / 4)} per hour)` : ""}, in the clinic, in small frequent sips. Give more if the patient wants it. Continue breastfeeding.</p>
          <p style="margin:6px 0 0">Reassess after 4 hours and choose Plan A, B or C. ${age === "old" ? "" : "Give zinc for 10–14 days. "}Follow up in 5 days if not improving.</p>`;
      } else {
        const per = age === "old" ? "100–200 mL (children over 2) or 200–400 mL (adults)" : age === "inf" ? "50–100 mL" : "50–100 mL (under 2 years) or 100–200 mL (2 years and over)";
        h = `<p style="margin:0"><b style="color:var(--green,#067647)">NO DEHYDRATION: Plan A</b> (home treatment)</p>
          <p style="margin:6px 0 0">Extra fluid: ORS <b>${per}</b> after each loose stool, plus usual fluids. ${age === "old" ? "" : "Zinc for 10–14 days. "}Continue feeding. Return at once if many watery stools, repeated vomiting, very thirsty, eating or drinking poorly, fever or blood in the stool.</p>`;
      }
      out.innerHTML = h + `<p class="qn" style="margin:8px 0 0">Classification needs two or more signs in a row (IMNCI 2024). Plan C needs two of: lethargy, sunken eyes, not able to drink, very slow skin pinch. Blood in the stool: also treat as dysentery. Diarrhoea 14 days or more: persistent diarrhoea.</p>`;
    };
    el.addEventListener("input", run); el.addEventListener("change", run); run();
  }
});
