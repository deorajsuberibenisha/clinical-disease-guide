/* Batch O calculators.
   Preterm labour: WHO 2022 recommendations on interventions to improve preterm birth outcomes; NICE NG25. Chickenpox: Bhutan STG 16.1.3, UKHSA.
   AGN: Bhutan STG 12.5.1, IPNA hypertension doses. HSP: Bhutan STG 12.6, SHARE 2019. Kawasaki: AHA 2017 (McCrindle).
   NEC: modified Bell staging (Walsh & Kliegman 1986). Neonatal seizures: WHO 2023 / ILAE. PID: CDC 2021 STI guidelines, WHO 2021.
   Diabetic foot: IWGDF/IDSA 2023. Syncope: ESC 2018 high-risk features. */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const r1 = v => Math.round(v * 10) / 10;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  pretermlabour(el, U) {
    el.innerHTML = `<h4>Preterm labour / PPROM: what to give (Bhutan Midwifery Standards / WHO 2022 / NICE NG25)</h4><div class="row"><label>Gestation (weeks)<input type="number" step="any" data-k="ga" placeholder="e.g. 30"></label>${sel("t", "Situation", [["pl", "Preterm labour, membranes intact"], ["pp", "PPROM (membranes ruptured, not in labour)"], ["ppl", "PPROM in labour"]])}${sel("inf", "Signs of infection (fever, tachycardia, tender uterus, foul liquor)", [["n", "No"], ["y", "Yes"]])}${sel("bleed", "Bleeding / abruption / fetal distress", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter gestation.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), ga = U.num(g("ga")), t = g("t").value, inf = g("inf").value === "y", bl = g("bleed").value === "y", out = U.$(".out", el);
      if (!(ga > 0)) { out.textContent = "Enter gestation."; return; }
      const L = [];
      if (inf) L.push("<b>Signs of infection:</b> start IV <b>ampicillin 1 g 8-hourly + metronidazole 500 mg 8-hourly</b> until delivery, then oral amoxicillin 500 mg + metronidazole 500 mg three times daily for 5 days (Bhutan Midwifery Standards); refer and <b>expedite delivery</b>; no tocolysis; no steroids if chorioamnionitis (WHO).");
      if (ga >= 24 && ga < 34) L.push("<b>Dexamethasone 6 mg IM 12-hourly × 4 doses</b> (Bhutan Midwifery Standards; WHO 2022: when birth is likely within 7 days, gestation reliable, no maternal infection, and adequate newborn care available). If the cervix is 4 cm or more and transfer is planned, the Bhutan standard uses dexamethasone 12 mg IM × 2, 12 hours apart.");
      else if (ga >= 34 && ga < 37) L.push("34–36 weeks: WHO recommends steroids only up to 34 weeks; NICE says consider at 34+0–35+6 weeks.");
      if (ga >= 24 && ga < 32) L.push("<b>Magnesium sulfate</b> for fetal neuroprotection when birth is expected within 24 h (NICE: offer 24–29+6 weeks, consider 30–33+6): 4 g IV over 15 min then 1 g/h until birth or 24 h; check reflexes, breathing, pulse and BP at least 4-hourly.");
      if (t === "pl" && !inf && !bl && ga >= 24 && ga < 34) L.push("Tocolysis only to complete steroids or allow transfer (not with ruptured membranes): <b>nifedipine 40 mg orally, then 10–20 mg four times daily</b> (Bhutan Midwifery Standards; if cervix 4 cm or more: 40 mg then 20 mg twice daily for 24 h). NICE: nifedipine first choice, no betamimetics (salbutamol, terbutaline).");
      if (t !== "pl" && !inf) L.push(`<b>Erythromycin 250 mg orally 6-hourly for 10 days</b> or until delivery (not co-amoxiclav).${t === "pp" ? (ga < 34 ? " Expectant management with monitoring for infection; deliver at 34–37 weeks or sooner if infection/distress." : " At 34 weeks+: offer induction (WHO/NICE vary — discuss).") : ""}`);
      if (ga < 37) L.push("Ruptured membranes (Bhutan standard): <b>ampicillin 2 g IV, then 1 g 6-hourly</b> until delivery; erythromycin if penicillin-allergic.");
      if (bl) L.push("Bleeding/fetal distress: see APH; no tocolysis; deliver if indicated.");
      L.push(ga < 32 || ga < 34 ? "Transfer the mother <b>before birth</b> to a hospital with a NICU (JDWNRH or regional referral)." : "Plan birth where newborn can receive warmth, KMC and breathing support.");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    });
  },

  chickenpox(el, U) {
    el.innerHTML = `<h4>Chickenpox: who needs aciclovir?</h4><div class="row">${sel("p", "Patient", [["c", "Healthy child under 12"], ["t", "Adolescent 12+ or adult"], ["pr", "Pregnant woman"], ["im", "Immunocompromised / on steroids / newborn"]])}<label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="for IV dose"></label><label>Hours since rash<input type="number" data-k="h" placeholder="e.g. 18"></label>${sel("cx", "Complications (pneumonia, encephalitis, haemorrhagic lesions)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), p = g("p").value, w = U.num(g("wt")), h = U.num(g("h")), cx = g("cx").value === "y";
      let t;
      if (cx || p === "im") t = `<b>IV aciclovir ${w > 0 ? Math.round(10 * w) + " mg" : "10 mg/kg"} 8-hourly</b> (child/neonate 10–20 mg/kg) for 7–10 days; admit, refer.`;
      else if (p === "pr") t = "Oral aciclovir 800 mg five times daily for 7 days if 20 weeks+ and within 24 h of rash (consider earlier too); refer to obstetrics; admit if chest symptoms. Neonatal risk if rash within 7 days of delivery.";
      else if (p === "t") t = h > 0 && h > 24 ? "Over 24 h since rash: aciclovir benefit small — supportive care; aciclovir still reasonable if new lesions forming." : "<b>Aciclovir 800 mg five times daily for 7 days</b> (STG), best within 24 h of rash.";
      else t = "Supportive: paracetamol (not aspirin; avoid ibuprofen — linked to severe skin infection), calamine, antihistamine, short nails, fluids.";
      U.$(".out", el).innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Return for breathing difficulty, drowsiness, spreading redness or very painful lesions (necrotising fasciitis/strep). Off school until all lesions crusted (about 5–7 days). Exposed pregnant women or immunocompromised: check immunity; VZIG or post-exposure aciclovir (days 7–14).</p>`;
    };
    el.addEventListener("input", go); go();
  },

  agnplan(el, U) {
    el.innerHTML = `<h4>Acute glomerulonephritis in a child: first management</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 25"></label><label>Systolic BP<input type="number" data-k="sbp" placeholder="e.g. 140"></label><label>Age (years)<input type="number" step="any" data-k="age" placeholder="e.g. 8"></label>${sel("sx", "Headache, vomiting, seizures, visual change", [["n", "No"], ["y", "Yes (hypertensive encephalopathy)"]])}${sel("ov", "Fluid overload (breathless, crackles, big liver)", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite">Enter weight and BP.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), w = U.num(g("wt")), sbp = U.num(g("sbp")), age = U.num(g("age")), enc = g("sx").value === "y", ov = g("ov").value === "y", out = U.$(".out", el);
      if (!(w > 0) || !(sbp > 0)) { out.textContent = "Enter weight and BP."; return; }
      const high = sbp >= (age >= 13 ? 130 : 120);
      const L = [`Fluid restriction (if oliguric/oedematous): <b>insensible losses (≈ 400 mL/m²/day, ~${Math.round(Math.min(20 * w, 500) / 10) * 10} mL/day) + previous day's urine output</b>; no added salt; weigh daily.`];
      if (ov || high) L.push(`<b>Furosemide ${Math.min(40, r1(1 * w))}–${Math.min(80, r1(2 * w))} mg</b> IV/oral (1–2 mg/kg) — first-line, since hypertension is from salt and water retention.`);
      if (enc) L.push(`<b>Hypertensive emergency:</b> hydralazine ${r1(0.15 * w)} mg IV (0.15 mg/kg, STG) or labetalol infusion; lower BP by no more than 25% in the first 8 h; treat seizures; refer PICU.`);
      else if (high) L.push(`If BP stays high after diuretic: <b>nifedipine ${r1(0.25 * w)} mg</b> orally (0.25 mg/kg, max 10 mg) or amlodipine 0.1 mg/kg daily.`);
      L.push(`<b>Penicillin V ${w < 27 ? "250" : "500"} mg twice daily for 14 days</b> (STG 250 mg) or one dose of benzathine penicillin to clear streptococcus (does not alter the nephritis).`);
      L.push("Refer: rising creatinine/oliguria, severe hypertension, nephrotic-range proteinuria, normal C3, or no improvement in 2 weeks (biopsy).");
      out.innerHTML = `<ul style="margin:0;padding-left:18px">${L.map(x => `<li>${x}</li>`).join("")}</ul>`;
    });
  },

  kawasaki(el, U) {
    el.innerHTML = `<h4>Kawasaki disease: criteria and treatment (AHA 2017)</h4><div class="row"><label>Days of fever<input type="number" data-k="d" placeholder="e.g. 6"></label><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 12"></label></div><div class="checks" style="margin-top:8px">${chk("a", "Bilateral non-purulent conjunctival injection")}${chk("b", "Red cracked lips, strawberry tongue, red mouth")}${chk("c", "Polymorphous rash")}${chk("e", "Red/swollen hands and feet (or peeling later)")}${chk("f", "Cervical node 1.5 cm or more, usually one-sided")}</div><div class="out" aria-live="polite">Enter days of fever.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), d = U.num(g("d")), w = U.num(g("wt")), n = ["a", "b", "c", "e", "f"].filter(k => g(k).checked).length, out = U.$(".out", el);
      if (!(d > 0)) { out.textContent = "Enter days of fever."; return; }
      let t = d >= 5 && n >= 4 ? "<b>Complete (classic) Kawasaki disease.</b>" : d >= 5 && n >= 2 ? "<b>Possible incomplete Kawasaki</b>: check CRP/ESR — if CRP 30 mg/L+ or ESR 40+, look for 3 or more supplementary labs (albumin under 30, anaemia, ALT raised, platelets 450,000+ after day 7, WBC 15,000+, urine WBC 10+/hpf) or a positive echo → treat." : d < 5 && n >= 4 ? "4+ criteria with under 5 days of fever: experienced clinicians may diagnose and treat from day 4." : "Criteria not met — keep reviewing daily; consider other causes (measles, scarlet fever, drug reaction, viral).";
      if ((d >= 5 && n >= 2) || (d >= 4 && n >= 4)) t += w > 0 ? `<br><b>IVIG ${r1(2 * w)} g</b> (2 g/kg) over 10–12 h, ideally within 10 days of fever onset, plus <b>aspirin ${Math.round(30 * w)}–${Math.round(50 * w)} mg/day</b> in 4 doses (30–50 mg/kg/day) until afebrile 48 h, then <b>${Math.round(3 * w)}–${Math.round(5 * w)} mg once daily</b> (3–5 mg/kg) for 6–8 weeks or until echo normal.` : "<br>Enter weight for doses.";
      out.innerHTML = `<p style="margin:0">${t}</p><p class="warn" style="margin:8px 0 0">Echo at diagnosis, 2 weeks and 6 weeks. Fever 36 h+ after IVIG: second IVIG ± steroids (specialist). Delay live vaccines 11 months after IVIG. Influenza vaccine (inactivated) while on aspirin.</p>`;
    });
  },



  pidplan(el, U) {
    el.innerHTML = `<h4>Pelvic inflammatory disease: treatment (CDC 2021 / WHO / Bhutan)</h4><div class="row">${sel("sev", "Severity", [["mild", "Mild–moderate, outpatient"], ["sev", "Severe: fever 38.5+, vomiting, peritonism, tubo-ovarian abscess, pregnancy, no response in 72 h"]])}${sel("iud", "IUD in place", [["n", "No"], ["y", "Yes"]])}${sel("preg", "Pregnancy test", [["neg", "Negative"], ["pos", "Positive"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), sev = g("sev").value === "sev", iud = g("iud").value === "y", pos = g("preg").value === "pos";
      let t = pos ? "<b>Positive pregnancy test: exclude ectopic pregnancy first</b> (ultrasound); PID in pregnancy is rare — admit and treat IV (no doxycycline: ceftriaxone + azithromycin + metronidazole/clindamycin)." : sev ? "<b>Admit:</b> ceftriaxone 1 g IV daily + doxycycline 100 mg orally 12-hourly + metronidazole 500 mg IV/oral 12-hourly; switch to oral 24–48 h after improvement to complete 14 days. Ultrasound for tubo-ovarian abscess (drain if large/not improving)." : "<b>Ceftriaxone 500 mg IM once</b> (WHO/STG 250 mg) + <b>doxycycline 100 mg twice daily for 14 days</b> + <b>metronidazole 500 mg (or 400 mg) twice daily for 14 days</b>. Review in 72 h — admit if not improving.";
      U.$(".out", el).innerHTML = `<p style="margin:0">${t}</p><ul style="margin:6px 0 0;padding-left:18px">${iud ? "<li>IUD can stay in if improving within 72 h; remove if no improvement (offer emergency contraception if recent sex).</li>" : ""}<li>Test for gonorrhoea, chlamydia, HIV, syphilis; treat partners from the last 6 months (gonorrhoea + chlamydia cover); no sex until both complete treatment.</li><li>Low threshold to treat: sexually active woman with pelvic pain and cervical motion, uterine or adnexal tenderness.</li></ul>`;
    };
    el.addEventListener("input", go); go();
  },

  diabfoot(el, U) {
    el.innerHTML = `<h4>Diabetic foot infection: grade and antibiotics (IWGDF/IDSA 2023)</h4><div class="row">${sel("g", "Infection grade", [["0", "Uninfected (no signs of inflammation)"], ["2", "Mild: skin/subcutaneous only, redness under 2 cm around ulcer"], ["3", "Moderate: redness 2 cm+ or deeper (abscess, tendon, bone, joint)"], ["4", "Severe: with SIRS (fever, HR over 90, RR over 20, WBC over 12,000)"]])}${sel("os", "Probe-to-bone positive / osteomyelitis on X-ray", [["n", "No"], ["y", "Yes"]])}${sel("isch", "Foot pulses absent / ischaemia", [["n", "No"], ["y", "Yes"]])}${sel("prev", "Antibiotics in past month / chronic wound", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), gr = g("g").value, os = g("os").value === "y", isch = g("isch").value === "y", prev = g("prev").value === "y";
      const T = {
        "0": "<b>No antibiotics.</b> Debride, off-load, dress, control glucose.",
        "2": prev ? "Oral <b>amoxicillin–clavulanate 625 mg 8-hourly</b> for 1–2 weeks." : "Oral <b>cefalexin 500 mg 6-hourly</b> or <b>cloxacillin 500 mg 6-hourly</b> for 1–2 weeks (strep/staph).",
        "3": "Usually admit: <b>amoxicillin–clavulanate 1.2 g IV 8-hourly</b> or <b>ceftriaxone 2 g IV daily + metronidazole 500 mg 8-hourly</b>; urgent surgical debridement/drainage; 2–3 weeks.",
        "4": "<b>Admit, sepsis bundle:</b> piperacillin–tazobactam 4.5 g IV 8-hourly (or ceftriaxone + metronidazole ± vancomycin if MRSA risk); <b>emergency surgery</b> for abscess, gangrene or necrotising infection."
      };
      U.$(".out", el).innerHTML = `<p style="margin:0">${T[gr]}</p><ul style="margin:6px 0 0;padding-left:18px">${os ? "<li><b>Osteomyelitis:</b> about 6 weeks of antibiotics (3 weeks after resection of infected bone); bone culture guides choice.</li>" : ""}${isch ? "<li><b>Ischaemia:</b> ABPI/Doppler, vascular referral — infection plus ischaemia is limb-threatening.</li>" : ""}<li>Deep tissue culture after debridement (not surface swabs); X-ray; glucose control (insulin often needed).</li><li>Off-load (no walking on the ulcer), daily wound care; tetanus status.</li></ul>`;
    };
    el.addEventListener("input", go); go();
  },

  syncoperisk(el, U) {
    el.innerHTML = `<h4>Syncope: high-risk features (ESC 2018)</h4><div class="checks">${chk("a", "Chest pain, breathlessness, abdominal pain or headache with the event")}${chk("b", "Syncope during exertion or lying down")}${chk("c", "Sudden palpitations just before syncope")}${chk("d", "Known structural heart disease / heart failure / low LVEF / previous MI")}${chk("e", "Family history of sudden death under 40")}${chk("f", "Systolic BP under 90 or HR under 40 (unexplained)")}${chk("g", "Abnormal ECG (ischaemia, block, QTc over 460/480, Brugada, pre-excitation, VT)")}${chk("h", "Undiagnosed systolic murmur")}${chk("i", "GI bleeding / severe anaemia")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const n = ["a", "b", "c", "d", "e", "f", "g", "h", "i"].filter(k => U.$(`[data-k=${k}]`, el).checked).length;
      U.$(".out", el).innerHTML = n ? `<p style="margin:0"><b>${n} high-risk feature${n > 1 ? "s" : ""}: admit or urgent assessment</b> with cardiac monitoring, ECG, echo; look for arrhythmia, aortic stenosis, PE, bleeding, aortic dissection.</p>` : `<p style="margin:0"><b>No high-risk features:</b> if history fits reflex (prodrome, standing, trigger) or orthostatic syncope with a normal ECG, discharge with advice (fluids, salt, counter-pressure manoeuvres, review medicines).</p>`;
    };
    el.addEventListener("input", go); go();
  }
  });
})();
