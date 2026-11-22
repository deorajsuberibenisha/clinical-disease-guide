/* Meningitis and encephalitis calculators.
   meningadult: empirical regimen and CT-before-LP check (IDSA 2004, Tunkel; Hasbun NEJM 2001; UK Joint Specialist Societies 2016,
                McGill; ESCMID 2016; Bhutan STG 2024 §7.4; IDSA 2008 encephalitis).
   bms: Bacterial Meningitis Score, Nigrovic LE et al. JAMA 2007;297:52–60 (Pediatric Emergency Medicine Collaborative Research Committee).
   meningchild: weight-based first orders (WHO Pocket Book 2013; NICE NG240 evidence review G4; BNFc; Bhutan STG 2024 §12.1.2). */
window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  meningadult(el, U) {
    const risk = [["old", "Age over 50"], ["imm", "Immunosuppressed (HIV, steroids, chemotherapy, transplant), diabetes, alcohol dependence or pregnancy"], ["enc", "Encephalitis features: behaviour change, focal signs, seizures, or a slow (days) onset with confusion"], ["rash", "Petechial or purpuric rash"]];
    const ct = [["cimm", "Immunocompromised"], ["cns", "Known CNS disease (mass, stroke, shunt)"], ["sz", "New seizure within the last week"], ["pap", "Papilloedema"], ["gcs", "Reduced consciousness (GCS under 13, or falling)"], ["foc", "Focal neurological deficit (not a simple cranial nerve palsy)"], ["shock", "Shock, bleeding disorder or platelets under 100 (unsafe for LP)"]];
    const chk = a => a.map(([k, t]) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`).join("");
    el.innerHTML = `<h4>Adult suspected meningitis — first hour plan</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="for aciclovir"></label></div>
      <p style="margin:10px 0 4px;font:600 12.5px var(--ui);color:var(--muted)">RISK FACTORS AND FEATURES</p><div class="checks">${chk(risk)}</div>
      <p style="margin:10px 0 4px;font:600 12.5px var(--ui);color:var(--muted)">CT BEFORE LUMBAR PUNCTURE? (any one = yes)</p><div class="checks">${chk(ct)}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const on = k => U.$(`[data-k=${k}]`, el).checked, w = U.num(U.$("[data-k=wt]", el));
      const ctNeeded = ["cimm", "cns", "sz", "pap", "gcs", "foc"].some(on), noLP = on("shock");
      const L = [];
      L.push("<b>Blood cultures now</b> (and glucose, lactate, CBC, creatinine, clotting). Do not wait for CT or LP to give the first doses.");
      L.push(`<b>Dexamethasone 10 mg IV</b> with or just before the first antibiotic, then 6-hourly for 4 days.${on("imm") ? " If HIV with possible cryptococcal meningitis, hold steroids until cryptococcal antigen is negative." : ""}`);
      L.push(`<b>Ceftriaxone 2 g IV every 12 hours</b>${on("old") || on("imm") ? " <b>plus ampicillin 2 g IV every 4 hours</b> (Listeria cover: age over 50 or immunosuppression)" : ""}. Bhutan STG alternative where ceftriaxone is not available: ampicillin 2 g IV 4-hourly or benzylpenicillin 4 million units 4-hourly (24 MU/day).`);
      if (on("enc")) L.push(`<b>Aciclovir ${w > 0 ? Math.round(w * 10 / 50) * 50 + " mg" : "10 mg/kg"} IV every 8 hours</b> (10 mg/kg over 1 hour; ideal body weight if obese) for possible HSV encephalitis. Think also of <b>scrub typhus</b> (add doxycycline 100 mg twice daily, IV if available), Japanese encephalitis, cerebral malaria and TB meningitis.`);
      if (on("rash")) L.push("<b>Probable meningococcal disease:</b> treat shock aggressively; droplet precautions for 24 hours; notify the DPHO/CMO; ciprofloxacin 500 mg single dose for household and kissing contacts.");
      L.push(noLP ? "<b>No lumbar puncture now</b> (shock or bleeding risk): treat fully and do the LP when safe, or never if the diagnosis is clear." : ctNeeded ? "<b>CT head before LP</b>: antibiotics and dexamethasone first, then CT; LP only if no mass effect or brain shift." : "<b>LP can proceed without CT</b> (no high-risk features) — ideally within 1 hour of antibiotics so the Gram stain and culture are still useful. Measure the opening pressure.");
      U.$(".out", el).innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Antibiotics within 1 hour of arrival. A normal CT does not exclude raised pressure: reassess the patient before LP.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  bms(el, U) {
    const items = [["gram", "CSF Gram stain positive", 2], ["anc", "CSF neutrophil count 1000 cells/µL or more", 1], ["prot", "CSF protein 80 mg/dL (0.8 g/L) or more", 1], ["pnc", "Blood neutrophil count 10,000/µL (10 × 10⁹/L) or more", 1], ["sz", "Seizure at or before presentation", 1]];
    el.innerHTML = `<h4>Bacterial Meningitis Score (children with CSF pleocytosis)</h4><div class="checks">${items.map(([k, t, p]) => `<label class="chk"><input type="checkbox" data-k="${k}" data-p="${p}">${t} <b style="margin-left:auto">+${p}</b></label>`).join("")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$$("input", el).filter(i => i.checked).reduce((a, i) => a + +i.dataset.p, 0);
      const msg = s === 0 ? "<b>Very low risk of bacterial meningitis</b> (in the derivation and validation cohorts, about 1 in 1000 children with a score of 0 had bacterial meningitis). Where follow-up is reliable, a senior may consider observation without IV antibiotics. In most Bhutanese settings, the safer course is to treat until cultures are negative at 48 hours."
        : s === 1 ? "<b>Not low risk.</b> Treat as bacterial meningitis until cultures return."
        : "<b>High risk.</b> Treat as bacterial meningitis.";
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>Score ${s}/6.</b> ${msg}</p><p class="warn" style="margin:8px 0 0">Use only for children 2 months to 18 years with CSF white cells 10/µL or more, who are not critically ill and have no purpura, no antibiotics in the previous 72 hours, no shunt or recent neurosurgery, and no immunosuppression. Not for neonates.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  meningchild(el, U) {
    el.innerHTML = `<h4>Child with suspected meningitis — first orders by weight</h4><div class="row">
      <label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 10"></label>
      <label>Age<select data-k="age"><option value="o">3 months or older</option><option value="i">1–3 months</option><option value="n">Under 1 month (neonate)</option></select></label>
      <label>Shocked (poor perfusion)<select data-k="sh"><option value="n">No</option><option value="y">Yes</option></select></label></div><div class="out" aria-live="polite">Enter the weight.</div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el);
      const w = U.num(g("wt")), age = g("age").value, sh = g("sh").value === "y";
      if (!(w > 0) || w > 100) { out.textContent = "Enter the weight."; return; }
      const r0 = v => Math.round(v), r5 = v => Math.round(v / 5) * 5, r1 = v => Math.round(v * 10) / 10, cap = Math.min;
      const L = [];
      if (sh) L.push(`<b>Shock:</b> ${r0(10 * w)} mL (10 mL/kg) Ringer's lactate or 0.9% saline over 5–10 minutes, reassess, repeat to 40 mL/kg; inotropes if still shocked (see <a href="#/d/sepsis-child">sepsis</a>).`);
      if (age === "n") {
        L.push(`<b>Ampicillin ${r5(100 * w)} mg IV</b> (100 mg/kg per dose for meningitis; 12-hourly in week 1, 8-hourly in weeks 2–4) <b>plus gentamicin ${r1(5 * w)} mg IV</b> once daily (5 mg/kg). Or <b>cefotaxime ${r5(50 * w)} mg IV</b> (50 mg/kg; 12-hourly in week 1, 6–8-hourly after) with ampicillin. Avoid ceftriaxone in jaundiced or preterm babies.`);
        L.push("No dexamethasone in neonates. Duration: GBS 14 days, gram-negative 21 days (specialist).");
      } else {
        if (age === "i") L.push(`<b>Cefotaxime ${cap(r5(50 * w), 2000)} mg IV every 6 hours</b> (50 mg/kg) <b>plus ampicillin ${cap(r5(50 * w), 2000)} mg IV every 6 hours</b> (Listeria and group B streptococcus), or ceftriaxone ${cap(r5(100 * w), 4000)} mg once daily (if not jaundiced) plus ampicillin.`);
        else L.push(`<b>Ceftriaxone ${cap(r5(100 * w), 4000)} mg IV once daily</b> (100 mg/kg, max 4 g), or ${cap(r5(50 * w), 2000)} mg 12-hourly (WHO). Bhutan STG first-level option: ampicillin ${cap(r5(50 * w), 2000)} mg IV/IM 6-hourly + gentamicin ${cap(r0(7.5 * w), 400)} mg once daily (7.5 mg/kg; good urine output), then refer.`);
        if (age === "o") L.push(`<b>Dexamethasone ${cap(r1(0.15 * w), 10)} mg IV every 6 hours for 4 days</b> (0.15 mg/kg, max 10 mg), with or before the first antibiotic dose (not after 12 hours; not if antibiotics were given in the days before, or in cerebral malaria).`);
        else L.push("Dexamethasone: no clear evidence under 3 months; not routinely given.");
      }
      L.push(`<b>Seizures:</b> diazepam ${cap(r1(0.3 * w), 10)} mg IV slowly (0.3 mg/kg) or ${cap(r1(0.5 * w), 10)} mg rectally (0.5 mg/kg), or midazolam ${cap(r1(0.3 * w), 10)} mg buccal; repeat once after 5–10 minutes, then phenytoin or levetiracetam (see status epilepticus).`);
      const mf = w <= 10 ? w * 100 : w <= 20 ? 1000 + (w - 10) * 50 : 1500 + (w - 20) * 20;
      L.push(`<b>Fluids:</b> full maintenance ${r0(mf)} mL/day ≈ ${r0(cap(mf / 24, 100))} mL/hour (0.9% saline with 5% dextrose) once not shocked; restrict to two-thirds only with low sodium (SIADH) or signs of raised pressure. Check glucose; NG feeds if unconscious (STG).`);
      L.push(`<b>Raised pressure</b> (falling GCS, abnormal pupils, bradycardia with hypertension): head up 30°, mannitol ${r1(0.5 * w)} g IV over 20 minutes (0.5 g/kg = ${r1(2.5 * w)} mL of 20%), urgent senior and ICU help.`);
      L.push(`Paracetamol ${cap(r5(15 * w), 1000)} mg (15 mg/kg) 6-hourly for fever.`);
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul><p class="warn" style="margin:8px 0 0">Blood culture first, but never delay antibiotics for an LP or a CT. Check doses against the chapter and BNFc/NEMF.</p>`;
    };
    el.addEventListener("input", go); go();
  }
});
