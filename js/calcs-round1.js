/* Thin-page upgrade round 1 calculators.
   ahdpackage: advanced HIV disease package (Bhutan National Guidelines on Treatment and Management of HIV & AIDS 2024, Tables 33, 34, 36, 37; chapter X). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  ahdpackage(el, U) {
    const ck = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
    el.innerHTML = `<h4>Advanced HIV disease package — what this patient needs (Bhutan 2024)</h4><div class="row">
      <label>CD4 count (cells/mm³)<input type="number" step="1" data-k="cd4" placeholder="blank if not known"></label>
      <label>Setting<select data-k="ip"><option value="o">Outpatient</option><option value="i">Inpatient</option></select></label>
      <label>Serum CrAg<select data-k="crag"><option value="nd">Not done</option><option value="neg">Negative</option><option value="pos">Positive</option></select></label></div>
      <div class="checks" style="margin-top:10px">
      ${ck("stage", "WHO clinical stage 3 or 4 condition")}${ck("tbs", "Any TB symptom: cough, fever, night sweats, weight loss")}${ck("ill", "Seriously ill (RR 30 or more, HR 120 or more, unable to walk unaided, temp 39 °C or more)")}${ck("tb", "Active TB diagnosed")}${ck("men", "Headache, confusion, neck stiffness or seizures")}${ck("onart", "Already on ART")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), on = k => g(k).checked, out = U.$(".out", el);
      const cd4raw = g("cd4").value, cd4 = cd4raw === "" ? null : U.num(g("cd4")), ip = g("ip").value === "i", crag = g("crag").value;
      const ahd = (cd4 !== null && cd4 < 200) || on("stage") || on("ill");
      const L = [];
      L.push(ahd ? "<b>Advanced HIV disease</b> (CD4 under 200 or WHO stage 3–4, or seriously ill): offer the full package below." : cd4 === null ? "CD4 not known: send CD4 (and viral load). Treat as advanced disease if stage 3–4 or seriously ill." : "Not advanced disease by CD4 or stage.");
      if (on("tbs") || on("ill")) {
        const lam = on("ill") || (cd4 !== null && (ip ? cd4 <= 200 : cd4 <= 100));
        L.push(`<b>TB:</b> sputum GeneXpert MTB/RIF as the first test${lam ? "; <b>urine LF-LAM</b> as well (symptomatic and " + (on("ill") ? "seriously ill" : ip ? "inpatient with CD4 200 or less" : "outpatient with CD4 100 or less") + ")" : ""}; chest X-ray. No TB preventive therapy until active TB is excluded.`);
      } else if (!on("tb")) L.push("<b>TB preventive therapy</b> (no symptoms): 3HP weekly for 12 weeks (adults over 30 kg: 3 combined HP tablets weekly), or isoniazid 5 mg/kg (max 300 mg) daily for 6 months, with pyridoxine 25 mg. TST is not needed.");
      if (on("men")) L.push("<b>Possible meningitis:</b> urgent lumbar puncture (opening pressure, CSF CrAg or India ink, GeneXpert); do not start ART until cryptococcal and TB meningitis are excluded.");
      if (cd4 !== null && cd4 < 100) {
        L.push(crag === "pos" ? "<b>Serum CrAg positive:</b> lumbar puncture with CSF CrAg and MRI brain. If meningitis is excluded: <b>fluconazole 800 mg daily for 2 weeks, then 400 mg daily for 8 weeks, then 200 mg daily</b> maintenance (pre-emptive therapy). If CSF positive: treat as cryptococcal meningitis." : crag === "neg" ? "Serum CrAg negative: no fluconazole needed." : "<b>CD4 under 100: screen serum cryptococcal antigen (CrAg)</b> before starting ART.");
      }
      const cpt = (cd4 !== null && cd4 < 350) || on("stage") || on("tb");
      L.push(cpt ? "<b>Co-trimoxazole prophylaxis</b> 960 mg (2 single-strength tablets) once daily — indicated (CD4 under 350, stage 3–4, or active TB). Stop when stable on ART with immune recovery and viral suppression." : "Co-trimoxazole prophylaxis not indicated on current information.");
      if (!on("onart")) {
        const delay = on("men") ? "<b>Defer ART</b> until meningitis is excluded: 4–6 weeks after antifungal treatment starts for cryptococcal meningitis; at least 4 weeks after ATT starts for TB meningitis." : on("tb") ? "<b>ART within 2 weeks of starting TB treatment</b>, with DTG 50 mg twice daily while on rifampicin (and for 2 weeks after)." : "<b>Start ART rapidly</b> (same day or within 7 days when ready): TLD one tablet daily.";
        L.push(delay);
      } else L.push("Already on ART: check viral load and adherence; if over 1,000 copies/mL, enhanced adherence counselling and repeat in 3 months.");
      if (ahd) L.push("<b>Adherence support:</b> tailored counselling, treatment supporter, home visits if feasible; review within 2 weeks for IRIS (most occurs 4–8 weeks after ART starts).");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Source: Bhutan National Guidelines on Treatment and Management of HIV &amp; AIDS 2024 (Tables 33, 34, 36, 37). Pregnant women: TLD is safe; check the PMTCT chapter.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
