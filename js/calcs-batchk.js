/* Batch K calculators.
   Red eye: Community Eye Health / Bhutan STG ch.15. IPSS: AUA symptom index (Barry 1992). Stones: EAU 2024 (spontaneous passage by size, MET 5–10 mm distal).
   Gout: ACR 2020. DAS28-ESR: Prevoo 1995. Low back pain red flags: NICE NG59. HIV: Bhutan 2024 / WHO 2023 paediatric dosing. STI: Bhutan STG ch.9, WHO 2021/2024. */
(function () {
  const chk = (k, t) => `<label class="chk"><input type="checkbox" data-k="${k}">${t}</label>`;
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  redeye(el, U) {
    el.innerHTML = `<h4>Red eye: refer today or treat here?</h4><div class="checks">${chk("vis", "Reduced vision")}${chk("pain", "Moderate or severe pain (not just grittiness)")}${chk("photo", "Photophobia")}${chk("cornea", "Corneal opacity, white spot or fluorescein-staining ulcer")}${chk("pupil", "Fixed mid-dilated or irregular pupil")}${chk("hard", "Hard eye, haloes, headache, vomiting")}${chk("trauma", "Injury, foreign body, chemical")}${chk("lens", "Contact lens wearer")}${chk("neo", "Baby under 1 month with discharge")}${chk("pus", "Sticky or purulent discharge, both eyes")}${chk("watery", "Watery discharge, recent cold, tender preauricular node")}${chk("itch", "Itching, both eyes, allergy history")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked;
      let txt;
      if (c("neo")) txt = "<b>Ophthalmia neonatorum: urgent.</b> Swab, irrigate, ceftriaxone 25–50 mg/kg IM once (max 125 mg) for gonococcus (STG), treat chlamydia, treat both parents; refer if not better in 48 hours.";
      else if (c("hard") || (c("pupil") && c("pain"))) txt = "<b>Possible acute angle-closure glaucoma: emergency.</b> Acetazolamide 500 mg (IV or oral), timolol 0.5% 1 drop, pilocarpine 2% once pressure falls, analgesia and antiemetic, lie flat, refer immediately for laser.";
      else if (c("trauma")) txt = "<b>Injury:</b> chemical → irrigate for 30 minutes before anything else; penetrating injury → shield, no pressure, refer urgently; superficial foreign body → remove, chloramphenicol ointment.";
      else if (c("cornea") || (c("lens") && (c("pain") || c("photo")))) txt = "<b>Possible corneal ulcer (keratitis): refer same day.</b> Start chloramphenicol or ciprofloxacin drops hourly; no steroids; contact lens wearers risk Pseudomonas and Acanthamoeba.";
      else if (c("vis") || c("pain") || c("photo") || c("pupil")) txt = "<b>Red flags present: refer to an eye unit today</b> (iritis, keratitis or glaucoma until proven otherwise).";
      else if (c("pus")) txt = "<b>Bacterial conjunctivitis:</b> clean lids; chloramphenicol drops 2–3-hourly then 4 times daily, ointment at night for 5–7 days (STG). Hand hygiene.";
      else if (c("watery")) txt = "<b>Viral conjunctivitis:</b> self-limiting over 1–3 weeks, very contagious; cool compresses, artificial tears, hygiene; antibiotic only if secondary infection (STG). Refer if vision falls or membrane forms.";
      else if (c("itch")) txt = "<b>Allergic conjunctivitis:</b> cold compresses, avoid triggers, oral antihistamine or antihistamine drops.";
      else txt = "Tick the features present.";
      U.$(".out", el).innerHTML = `<p style="margin:0">${txt}</p><p class="warn" style="margin:8px 0 0">Never give steroid eye drops without slit-lamp examination: they worsen herpes and fungal ulcers.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  ipss(el, U) {
    const q = ["Incomplete emptying", "Frequency (again within 2 hours)", "Intermittency (stopping and starting)", "Urgency", "Weak stream", "Straining", "Nocturia (times per night, 0–5)"];
    const opt = [[0, "Not at all"], [1, "Less than 1 in 5"], [2, "Less than half"], [3, "About half"], [4, "More than half"], [5, "Almost always"]];
    el.innerHTML = `<h4>IPSS: prostate symptom score</h4><div class="row">${q.map((t, i) => sel("q" + i, t, i === 6 ? [[0, "None"], [1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5 or more"]] : opt)).join("")}${sel("qol", "If you had to live with this for life, you would feel", [[0, "Delighted"], [1, "Pleased"], [2, "Mostly satisfied"], [3, "Mixed"], [4, "Mostly dissatisfied"], [5, "Unhappy"], [6, "Terrible"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = q.reduce((n, _, i) => n + +U.$(`[data-k=q${i}]`, el).value, 0), ql = +U.$("[data-k=qol]", el).value;
      const [g, a] = s <= 7 ? ["Mild (0–7)", "Watchful waiting with lifestyle advice (less evening fluid, reduce caffeine and alcohol, bladder training)."] : s <= 19 ? ["Moderate (8–19)", "Tamsulosin 0.4 mg daily if bothersome; add finasteride if the prostate is large (over about 40 mL) or PSA over 1.5."] : ["Severe (20–35)", "Tamsulosin ± finasteride; urology referral, especially with high residual volume, recurrent retention, stones, infection or kidney impairment."];
      U.$(".out", el).innerHTML = `<p style="margin:0"><b>IPSS ${s}/35 — ${g}</b>; quality of life ${ql}/6. ${a}</p><p class="warn" style="margin:8px 0 0">Always check urine, creatinine and post-void residual (STG: refer if over 250 mL); DRE for nodules; haematuria needs investigation.</p>`;
    };
    el.addEventListener("input", go); go();
  },

  stoneplan(el, U) {
    el.innerHTML = `<h4>Ureteric stone: pass, help or refer?</h4><div class="row">${sel("size", "Stone size", [[3, "Under 5 mm"], [7, "5–10 mm"], [12, "Over 10 mm"]])}${sel("loc", "Position", [["d", "Distal ureter"], ["p", "Proximal or mid ureter"], ["k", "Kidney"]])}</div><div class="checks" style="margin-top:10px">${chk("fev", "Fever, rigors or urinary infection")}${chk("aki", "Raised creatinine or single kidney")}${chk("pain", "Pain not controlled with NSAID")}${chk("preg", "Pregnant")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, s = +g("size").value, loc = g("loc").value;
      if (c("fev") || c("aki")) { U.$(".out", el).innerHTML = `<p style="margin:0"><b>Emergency: infected or obstructed kidney.</b> Blood and urine cultures, IV antibiotics (e.g. ceftriaxone 2 g), fluids, and <b>urgent drainage</b> (stent or nephrostomy) — refer now. Antibiotics alone are not enough.</p>`; return; }
      const passTxt = s < 5 ? "about 70–90% pass spontaneously within 4 weeks" : s <= 10 ? "about 25–50% pass; tamsulosin improves passage for distal stones 5–10 mm" : "unlikely to pass";
      const plan = s > 10 || c("pain") ? "<b>Refer to urology</b> for ureteroscopy or shock-wave lithotripsy." : s <= 10 && s >= 5 && loc === "d" ? "<b>Medical expulsive therapy:</b> tamsulosin 0.4 mg daily up to 4 weeks (STG: after surgical advice), analgesia, review; refer if not passed." : "<b>Watchful waiting</b> with analgesia and fluids; imaging at 2–4 weeks; refer if not passed.";
      U.$(".out", el).innerHTML = `<p style="margin:0">Stone ${s < 5 ? "under 5" : s <= 10 ? "5–10" : "over 10"} mm: ${passTxt}. ${plan}</p><p style="margin:6px 0 0"><b>Pain:</b> NSAID first (diclofenac 75 mg IM or ibuprofen), paracetamol; opioid if needed.${c("preg") ? " Pregnancy: paracetamol and opioid, no NSAIDs; ultrasound, obstetric and urology input." : ""}</p>`;
    };
    el.addEventListener("input", go); go();
  },

  goutplan(el, U) {
    el.innerHTML = `<h4>Gout: flare treatment and allopurinol plan (ACR 2020)</h4><div class="row"><label>eGFR (mL/min)<input type="number" data-k="egfr" placeholder="e.g. 70"></label><label>Serum urate (mg/dL)<input type="number" step="any" data-k="ua" placeholder="e.g. 8.5"></label><label>Current allopurinol (mg/day)<input type="number" data-k="allo" placeholder="0"></label><label>Flares per year<input type="number" data-k="fl" placeholder="e.g. 2"></label></div><div class="checks" style="margin-top:10px">${chk("toph", "Tophi or erosions on X-ray")}${chk("pud", "Peptic ulcer, anticoagulant or heart failure (avoid NSAID)")}${chk("dm", "Uncontrolled diabetes (care with steroid)")}</div><div class="out" aria-live="polite"></div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), c = k => g(k).checked, out = U.$(".out", el);
      const e = U.num(g("egfr")), ua = U.num(g("ua")), a = U.num(g("allo")) || 0, fl = U.num(g("fl")) || 0;
      if (!(e > 0)) { out.textContent = "Enter eGFR."; return; }
      const nsaidOk = !c("pud") && e >= 30;
      const flare = nsaidOk ? "ibuprofen 400–800 mg three times daily for 3–5 days (with a PPI if over 65)" : `prednisolone 30–40 mg daily for 5 days${c("dm") ? " (monitor glucose)" : ""}, or intra-articular steroid for one joint`;
      const indicate = c("toph") || fl >= 2;
      let ult = "";
      if (indicate || a > 0) {
        if (a === 0) ult = `<b>Start allopurinol ${e < 30 ? 50 : 100} mg daily</b> (can start during a flare), increase by ${e < 30 ? 50 : 100} mg every 2–4 weeks until urate is under 6 mg/dL.`;
        else if (ua >= 6) ult = `Urate ${ua} mg/dL is above target: <b>increase allopurinol to ${a + (e < 30 ? 50 : 100)} mg daily</b> (max 900 mg), recheck in 2–4 weeks.`;
        else if (ua > 0) ult = `Urate ${ua} mg/dL is at target (<6): continue ${a} mg daily lifelong; check urate every 6–12 months.`;
        else ult = `Continue ${a} mg daily; check urate.`;
        ult += ` <b>Flare prophylaxis</b> for 3–6 months: colchicine is not on the NEML, so low-dose ${nsaidOk ? "NSAID (e.g. ibuprofen 400 mg twice daily)" : "prednisolone 5–10 mg daily"}.`;
      } else ult = "Urate-lowering therapy is not yet indicated (fewer than 2 flares a year, no tophi): lifestyle, review triggers, treat flares.";
      out.innerHTML = `<p style="margin:0"><b>Flare now:</b> ${flare}; rest, ice, elevate. Do not stop allopurinol during a flare.</p><p style="margin:6px 0 0">${ult}</p><p class="warn" style="margin:8px 0 0">Stop allopurinol and seek care at once for any rash. Review thiazides (switch BP drug to losartan or amlodipine if possible).</p>`;
    });
  },

  das28(el, U) {
    el.innerHTML = `<h4>DAS28-ESR: rheumatoid arthritis activity</h4><div class="row"><label>Tender joints (0–28)<input type="number" data-k="t" placeholder="e.g. 6"></label><label>Swollen joints (0–28)<input type="number" data-k="s" placeholder="e.g. 4"></label><label>ESR (mm/h)<input type="number" data-k="esr" placeholder="e.g. 40"></label><label>Patient global health (0–100 mm)<input type="number" data-k="gh" placeholder="e.g. 60"></label></div><div class="out" aria-live="polite">Enter the four values.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.num(U.$(`[data-k=${k}]`, el)), t = g("t"), s = g("s"), esr = g("esr"), gh = g("gh"), out = U.$(".out", el);
      if ([t, s, esr, gh].some(v => !(v >= 0)) || esr <= 0 || t > 28 || s > 28) { out.textContent = "Enter the four values (joints 0–28)."; return; }
      const d = 0.56 * Math.sqrt(t) + 0.28 * Math.sqrt(s) + 0.70 * Math.log(esr) + 0.014 * gh;
      const [g2, a] = d < 2.6 ? ["Remission (under 2.6)", "Continue; consider careful tapering if sustained over 6–12 months."] : d <= 3.2 ? ["Low activity (2.6–3.2)", "Acceptable target if remission is not achievable."] : d <= 5.1 ? ["Moderate activity (3.2–5.1)", "Escalate: optimise methotrexate dose, add hydroxychloroquine (or other DMARD), short steroid bridge."] : ["High activity (over 5.1)", "Escalate promptly; refer to rheumatology/medicine specialist for combination or biologic therapy."];
      out.innerHTML = `<p style="margin:0"><b>DAS28-ESR ${d.toFixed(2)} — ${g2}.</b> ${a}</p><p class="warn" style="margin:8px 0 0">Treat to target (EULAR): review every 1–3 months while active; aim for remission or low activity by 6 months.</p>`;
    });
  },

  lbpflags(el, U) {
    el.innerHTML = `<h4>Back pain: red flags and plan</h4><div class="checks">${chk("ces", "Saddle numbness, new bladder or bowel dysfunction, bilateral sciatica")}${chk("neuro", "Progressive leg weakness or foot drop")}${chk("ca", "History of cancer, weight loss, age over 50 with new pain, night pain")}${chk("inf", "Fever, IV drug use, immunosuppression, TB contact (spinal TB)")}${chk("frac", "Significant trauma, osteoporosis, long-term steroids")}${chk("infl", "Under 40, morning stiffness over 30 min, better with exercise (inflammatory)")}${chk("sci", "Leg pain below the knee worse than back pain (sciatica)")}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const c = k => U.$(`[data-k=${k}]`, el).checked;
      let txt;
      if (c("ces")) txt = "<b>Suspected cauda equina syndrome: emergency.</b> Urgent MRI and spinal surgery; check post-void residual and perianal sensation.";
      else if (c("neuro")) txt = "<b>Progressive neurological deficit: urgent referral</b> for imaging and surgical opinion.";
      else if (c("ca") || c("inf") || c("frac")) txt = "<b>Red flag present:</b> investigate (FBC, ESR/CRP, X-ray; MRI where available; consider spinal TB in Bhutan) and refer.";
      else if (c("infl")) txt = "<b>Possible axial spondyloarthritis:</b> ESR/CRP, X-ray of sacroiliac joints, refer; NSAIDs and exercise.";
      else if (c("sci")) txt = "<b>Sciatica:</b> stay active, NSAID short course, physiotherapy; most settle in 6–12 weeks; refer if severe after 6 weeks or any red flag.";
      else txt = "<b>Non-specific low back pain:</b> reassure, stay active, NSAID (ibuprofen 400 mg three times daily) briefly, heat, exercise programme; no imaging. Avoid long-term opioids, gabapentinoids and bed rest.";
      U.$(".out", el).innerHTML = `<p style="margin:0">${txt}</p>`;
    };
    el.addEventListener("input", go); go();
  },

  hivdose(el, U) {
    el.innerHTML = `<h4>HIV: first-line ART by weight (Bhutan 2024 / WHO)</h4><div class="row"><label>Weight (kg)<input type="number" step="any" data-k="wt" placeholder="e.g. 16"></label><label>Age<select data-k="age"><option value="c">Child (over 4 weeks)</option><option value="a">Adolescent or adult</option></select></label><label>On rifampicin for TB<select data-k="rif"><option value="n">No</option><option value="y">Yes</option></select></label><label>CrCl under 50<select data-k="ren"><option value="n">No</option><option value="y">Yes</option></select></label></div><div class="out" aria-live="polite">Enter the weight.</div>`;
    el.addEventListener("input", () => {
      const g = k => U.$(`[data-k=${k}]`, el), out = U.$(".out", el), w = U.num(g("wt")), rif = g("rif").value === "y", ren = g("ren").value === "y";
      if (!(w > 0)) { out.textContent = "Enter the weight."; return; }
      let reg, dtgExtra = "";
      if (w < 6) reg = "Under 6 kg: separate dispersible formulations (DTG 10 mg dispersible 5 mg, ABC/3TC 120/60 dispersible 1 tablet once daily, or per national paediatric table) — discuss with the ART centre.";
      else if (w < 25) { const n = w < 10 ? 3 : w < 14 ? 4 : w < 20 ? 5 : 6; reg = `<b>pALD (ABC 60/3TC 30/DTG 5 mg) ${n} dispersible tablets once daily</b>.`; dtgExtra = rif ? ` With rifampicin: give an extra dose of DTG (the same DTG amount, ${n * 5} mg) 12 hours later.` : ""; }
      else if (w < 30 || ren) reg = `<b>ABC 600 mg/3TC 300 mg + DTG 50 mg once daily</b>${ren ? " (TDF avoided: CrCl under 50)" : ""}.`;
      else reg = "<b>TLD (TDF 300/3TC 300/DTG 50 mg) one tablet once daily</b>.";
      if (w >= 25 && rif) dtgExtra = " With rifampicin: add DTG 50 mg 12 hours later (twice-daily DTG) until 2 weeks after rifampicin stops.";
      const ctx = w < 5 ? "co-trimoxazole 2.5 mL syrup (100/20 mg) once daily" : w < 15 ? "co-trimoxazole 5 mL syrup (200/40 mg) once daily" : w < 30 ? "co-trimoxazole 1 single-strength tablet (sulfamethoxazole 400/trimethoprim 80 mg) once daily" : "co-trimoxazole 960 mg (1 double-strength or 2 single-strength tablets) once daily";
      out.innerHTML = `<p style="margin:0">${reg}${dtgExtra}</p><p style="margin:6px 0 0"><b>Prophylaxis:</b> ${ctx} if indicated (Bhutan 2024: adults and adolescents with CD4 under 350 or WHO stage 3–4, and everyone with active TB; HIV-exposed and infected infants per the paediatric chapter); TB preventive therapy once active TB is excluded.</p><p class="warn" style="margin:8px 0 0">Start ART as soon as possible (same day if ready), except delay 4–6 weeks in cryptococcal and at least 4 weeks in TB meningitis. Separate DTG from iron, calcium and antacids.</p>`;
    });
  },

  stisyndrome(el, U) {
    el.innerHTML = `<h4>STI syndromic treatment (Bhutan STG 2024 / WHO 2024)</h4><div class="row">${sel("syn", "Syndrome", [["ud", "Urethral discharge (men)"], ["vd", "Vaginal discharge"], ["gu", "Genital ulcer"], ["pid", "Lower abdominal pain in a woman (PID)"], ["sw", "Scrotal swelling (epididymo-orchitis)"]])}${sel("preg", "Pregnant", [["n", "No"], ["y", "Yes"]])}</div><div class="out" aria-live="polite"></div>`;
    const go = () => {
      const s = U.$("[data-k=syn]", el).value, p = U.$("[data-k=preg]", el).value === "y";
      const chl = p ? "azithromycin 1 g once" : "doxycycline 100 mg twice daily for 7 days";
      const T = {
        ud: `Gonorrhoea + chlamydia: <b>ceftriaxone 1 g IM once (WHO 2024, alone) + ${chl}</b>. Bhutan STG 2024 prints ceftriaxone 250 mg + azithromycin 1 g; WHO raised the dose because of rising resistance. Persisting after treatment: consider trichomonas (metronidazole) and M. genitalium; refer.`,
        vd: `Speculum if possible. Cervicitis risk or signs → <b>ceftriaxone 1 g IM (WHO 2024; STG 250 mg) + ${chl}</b>; plus <b>metronidazole 400–500 mg twice daily for 7 days</b> (trichomonas/BV; 2 g once only if adherence is a problem${p ? "; STG: ideally avoid in the first trimester" : ""}); curdy discharge/itch → <b>clotrimazole 200 mg pessary for 3 nights</b>${p ? "" : " or fluconazole 150 mg once"}.`,
        gu: `Syphilis + herpes on the same day: <b>benzathine penicillin 2.4 MU IM once</b> (late/unknown duration: weekly × 3) + <b>aciclovir 400 mg three times daily for 7–10 days</b>${p ? " (penicillin is the only adequate treatment in pregnancy; desensitise if allergic)" : "; penicillin allergy: doxycycline 100 mg twice daily 14 days"}. Chancroid where common: ceftriaxone 250 mg IM or azithromycin 1 g.`,
        pid: `<b>Ceftriaxone 1 g IM once + doxycycline 100 mg twice daily + metronidazole 400 mg twice daily for 14 days</b>${p ? " — pregnant: admit, exclude ectopic, avoid doxycycline" : ""}; admit if severe, pregnant, abscess or no improvement in 72 h; remove nothing routinely (IUD can stay).`,
        sw: `Under 35/sexual risk: <b>ceftriaxone 500 mg–1 g IM once + doxycycline 100 mg twice daily for 10–14 days</b>. <b>Exclude torsion first</b> (sudden severe pain, high testis → urgent surgery).`
      };
      U.$(".out", el).innerHTML = `<p style="margin:0">${T[s]}</p><p class="warn" style="margin:8px 0 0">Every STI patient: HIV and syphilis tests, condoms, partner notification and treatment, follow-up. Report per national surveillance.</p>`;
    };
    el.addEventListener("input", go); go();
  }
  });
})();
