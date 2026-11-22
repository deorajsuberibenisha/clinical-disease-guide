/* H. pylori eradication regimen chooser for adults in Bhutan.
   Sources: Bhutan STG 2024 §4.1.3; NEML 2025; Vilaichone 2020 IJID (Bhutan resistance: clarithromycin 2%, ~10% Thimphu,
   metronidazole 81%, levofloxacin 8%, amoxicillin 0%); Maastricht VI/Florence 2022; ACG 2024; ISG Bhubaneswar 2021. */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {
  hpyloriplan(el, U) {
    const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
    el.innerHTML = `<h4>H. pylori — which regimen for this adult? (Bhutan)</h4><div class="row">
      ${sel("tries", "Previous eradication courses", [["0", "None"], ["1c", "1 — clarithromycin triple"], ["1o", "1 — other regimen"], ["2", "2 or more"]])}
      ${sel("pen", "Penicillin allergy", [["n", "No"], ["y", "Yes (true allergy)"]])}
      ${sel("mac", "Macrolide (azithro-, clarithro-, erythromycin) ever", [["n", "No / not known"], ["y", "Yes"]])}
      ${sel("preg", "Pregnant or breastfeeding", [["n", "No"], ["y", "Yes"]])}
      ${sel("tb", "Cough over 2 weeks or TB contact", [["n", "No"], ["y", "Yes"]])}</div>
      <div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, out = U.$(".out", el);
      const tries = g("tries"), pen = g("pen") === "y", mac = g("mac") === "y", preg = g("preg") === "y", tb = g("tb") === "y";
      const T = "omeprazole 20–40 mg twice daily + amoxicillin 1 g twice daily + clarithromycin 500 mg twice daily";
      const DUAL = "omeprazole 40 mg twice daily (or 20 mg four times daily) + amoxicillin 1 g three times daily";
      const BQ = "omeprazole twice daily + bismuth subcitrate 120 mg four times daily + tetracycline 500 mg four times daily + metronidazole 400–500 mg three or four times daily";
      const LEVO = "omeprazole twice daily + amoxicillin 1 g twice daily + levofloxacin 500 mg once daily";
      let pick, why, alt = "";
      if (preg) { pick = "Defer eradication"; why = "Treat symptoms with antacids, then famotidine or omeprazole. Eradicate after pregnancy and breastfeeding (clarithromycin and tetracycline are best avoided)."; }
      else if (tries === "2") { pick = "Refer for endoscopy with culture and susceptibility testing"; why = "After two failures, empirical guessing has poor results. Choose the third regimen from susceptibility results."; }
      else if (tries === "0" && !pen && !mac) { pick = "Bhutan STG clarithromycin triple therapy, 14 days"; why = `${T}. Local clarithromycin resistance is about 2% (higher, about 10%, in Thimphu), below the 15% threshold at which guidelines advise against this regimen.`; alt = "If bismuth and oral tetracycline can be obtained, bismuth quadruple therapy is an equally good choice."; }
      else if (tries === "1o" && !pen && !mac) { pick = "Bhutan STG clarithromycin triple therapy, 14 days"; why = T + ". The first course did not contain clarithromycin, and local clarithromycin resistance is low."; alt = "Check adherence to the first course before blaming resistance."; }
      else if (tries === "0" && !pen && mac) { pick = "High-dose dual therapy, 14 days"; why = `${DUAL}. Previous macrolide use makes clarithromycin resistance likely; Bhutanese isolates showed no amoxicillin resistance.`; alt = `Alternative: bismuth quadruple therapy if obtainable (${BQ}).`; }
      else if (pen && tries !== "1c" && !mac) { pick = "Bismuth quadruple if it can be sourced; otherwise PPI + clarithromycin + metronidazole, 14 days"; why = `${BQ}. Without bismuth: omeprazole 20–40 mg + clarithromycin 500 mg + metronidazole 400–500 mg, all twice daily, but expect lower cure because about 81% of Bhutanese strains resist metronidazole.`; alt = "Confirm the allergy is real (many 'penicillin allergies' are not); always test for cure."; }
      else if (pen) { pick = "Specialist advice: bismuth quadruple therapy"; why = `${BQ}. With penicillin allergy and previous clarithromycin or macrolide exposure, the NEML has no reliable regimen; source bismuth and tetracycline, or refer for susceptibility testing.`; }
      else { pick = "Second line: high-dose dual therapy, 14 days"; why = `${DUAL}. Do not repeat clarithromycin.`; alt = tb ? "Levofloxacin is unsuitable until TB is excluded (sputum testing), because it is a key MDR-TB drug." : `Alternatives: bismuth quadruple if obtainable, or levofloxacin triple (${LEVO}) with specialist agreement — levofloxacin resistance is about 8% and rising.`; }
      out.innerHTML = `<p style="margin:0"><b>${pick}</b></p><p style="margin:6px 0 0">${why}</p>${alt ? `<p style="margin:6px 0 0">${alt}</p>` : ""}
        <p class="warn" style="margin:8px 0 0">Every regimen runs for 14 days. Test for cure with stool antigen at least 4 weeks after finishing and 2 weeks off omeprazole. Check interactions (clarithromycin with statins, colchicine, warfarin).</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
