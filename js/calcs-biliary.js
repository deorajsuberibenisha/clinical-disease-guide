/* Biliary calculators.
   Tokyo Guidelines 2018: Yokoe M et al., J Hepatobiliary Pancreat Sci 2018;25:41–54 (cholecystitis criteria and grading);
   Kiriyama S et al., 2018;25:17–30 (cholangitis criteria and grading); Okamoto K et al. 2018;25:55–72; Miura F et al. 2018;25:31–40 (flowcharts).
   ASGE 2019 choledocholithiasis guideline: Buxbaum JL et al., Gastrointest Endosc 2019;89:1075–1105. */
(function () {
  const organ = [["cv", "Hypotension needing vasopressors"], ["neuro", "Reduced consciousness"], ["resp", "PaO₂/FiO₂ under 300 (without a blood gas, SpO₂ under 92% on air is a practical proxy, not a TG18 criterion)"], ["renal", "Oliguria, or creatinine over 2.0 mg/dL (177 µmol/L)"], ["liver", "INR over 1.5"], ["haem", "Platelets under 100 × 10⁹/L"]];
  const chk = (k, t, cls = "") => `<label class="chk ${cls}"><input type="checkbox" data-k="${k}">${t}</label>`;
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

    tg18cholecystitis(el, U) {
      el.innerHTML = `<h4>Acute cholecystitis — Tokyo 2018 diagnosis and severity</h4>
        <p style="margin:0 0 6px"><b>A. Local signs</b></p><div class="checks">${chk("a1", "Murphy's sign")}${chk("a2", "Right upper quadrant mass, pain or tenderness")}</div>
        <p style="margin:10px 0 6px"><b>B. Systemic signs</b></p><div class="checks">${chk("b1", "Fever")}${chk("b2", "Raised CRP")}${chk("b3", "Raised white cell count")}</div>
        <p style="margin:10px 0 6px"><b>C. Imaging</b></p><div class="checks">${chk("c1", "Ultrasound (or CT) typical of acute cholecystitis: thick wall, distended gallbladder, impacted stone, sonographic Murphy's sign, pericholecystic fluid")}</div>
        <p style="margin:10px 0 6px"><b>Grade II features (moderate)</b></p><div class="checks">${chk("g1", "White cells over 18 × 10⁹/L")}${chk("g2", "Palpable tender mass in the right upper quadrant")}${chk("g3", "Symptoms for more than 72 hours")}${chk("g4", "Marked local inflammation: gangrene, abscess (pericholecystic or liver), biliary peritonitis, emphysematous cholecystitis")}</div>
        <p style="margin:10px 0 6px"><b>Grade III: organ dysfunction (severe)</b></p><div class="checks">${organ.map(([k, t]) => chk("o_" + k, t)).join("")}</div>
        <div class="out" aria-live="polite"></div>`;
      const go = () => {
        const c = k => U.$(`[data-k=${k}]`, el).checked;
        const A = c("a1") || c("a2"), B = c("b1") || c("b2") || c("b3"), C = c("c1");
        const dx = A && B && C ? "<b>Definite acute cholecystitis</b> (A + B + C)." : A && B ? "<b>Suspected acute cholecystitis</b> (A + B): confirm with ultrasound." : "Criteria not met yet: needs at least one local sign (A) and one systemic sign (B), then imaging (C).";
        const g3 = organ.some(([k]) => c("o_" + k)), g2 = ["g1", "g2", "g3", "g4"].some(c);
        const grade = g3 ? 3 : g2 ? 2 : 1;
        const plan = grade === 3 ? "Resuscitate and support organs (ICU). Antibiotics now. Early laparoscopic cholecystectomy only at an advanced centre if the organ failure is reversible and the patient is otherwise fit; otherwise urgent gallbladder drainage (percutaneous cholecystostomy) and later surgery."
          : grade === 2 ? "Antibiotics and supportive care. Early laparoscopic cholecystectomy by an experienced surgeon if the patient is fit; otherwise antibiotics, with gallbladder drainage if not improving, and delayed surgery."
          : "Early laparoscopic cholecystectomy (ideally within 72 hours, acceptable up to about 7 days from admission) if fit; antibiotics until surgery.";
        U.$(".out", el).innerHTML = `<p style="margin:0">${dx}</p>${A && B ? `<p style="margin:6px 0 0"><b>Grade ${["", "I (mild)", "II (moderate)", "III (severe)"][grade]}.</b> ${plan}</p>` : ""}<p class="warn" style="margin:8px 0 0">Fever with jaundice suggests cholangitis instead (use the cholangitis tool). In Bhutan, refer from facilities without a surgeon after fluids, analgesia and antibiotics.</p>`;
      };
      el.addEventListener("input", go); go();
    },

    tg18cholangitis(el, U) {
      el.innerHTML = `<h4>Acute cholangitis — Tokyo 2018 diagnosis and severity</h4>
        <p style="margin:0 0 6px"><b>A. Systemic inflammation</b></p><div class="checks">${chk("a1", "Fever over 38 °C or shaking chills")}${chk("a2", "White cells under 4 or over 10 × 10⁹/L, or CRP 10 mg/L or more")}</div>
        <p style="margin:10px 0 6px"><b>B. Cholestasis</b></p><div class="checks">${chk("b1", "Jaundice (bilirubin 2 mg/dL / 34 µmol/L or more)")}${chk("b2", "Liver tests over 1.5 times normal (ALP, GGT, AST, ALT)")}</div>
        <p style="margin:10px 0 6px"><b>C. Imaging</b></p><div class="checks">${chk("c1", "Dilated bile duct")}${chk("c2", "Cause seen on imaging (stone, stricture, stent, worm)")}</div>
        <p style="margin:10px 0 6px"><b>Grade II features (any two)</b></p><div class="checks">${chk("g1", "White cells over 12 or under 4 × 10⁹/L")}${chk("g2", "Temperature 39 °C or more")}${chk("g3", "Age 75 or more")}${chk("g4", "Bilirubin 5 mg/dL (85 µmol/L) or more")}${chk("g5", "Low albumin (under 0.7 × lower limit of normal, about 2.5 g/dL)")}</div>
        <p style="margin:10px 0 6px"><b>Grade III: organ dysfunction</b></p><div class="checks">${organ.map(([k, t]) => chk("o_" + k, t)).join("")}</div>
        <div class="out" aria-live="polite"></div>`;
      const go = () => {
        const c = k => U.$(`[data-k=${k}]`, el).checked;
        const A = c("a1") || c("a2"), B = c("b1") || c("b2"), C = c("c1") || c("c2");
        const dx = A && B && C ? "<b>Definite acute cholangitis</b> (A + B + C)." : A && (B || C) ? "<b>Suspected acute cholangitis</b>: confirm with ultrasound and liver tests." : "Criteria not met yet: needs systemic inflammation (A) plus cholestasis (B) or imaging (C).";
        const g3 = organ.some(([k]) => c("o_" + k)), n2 = ["g1", "g2", "g3", "g4", "g5"].filter(c).length;
        const grade = g3 ? 3 : n2 >= 2 ? 2 : 1;
        const plan = grade === 3 ? "<b>Septic emergency.</b> Resuscitate, antibiotics within the hour, organ support, and <b>urgent biliary drainage</b> (ERCP, or percutaneous) as soon as the patient is stable enough: refer to a centre with ERCP now."
          : grade === 2 ? "Antibiotics and <b>early biliary drainage</b> (ERCP within about 24–48 hours). Refer to a centre with ERCP."
          : "Antibiotics; drainage if no response within 24 hours or if a stone needs removal. Plan cholecystectomy after recovery.";
        U.$(".out", el).innerHTML = `<p style="margin:0">${dx}</p>${A && (B || C) ? `<p style="margin:6px 0 0"><b>Grade ${["", "I (mild)", "II (moderate)", "III (severe)"][grade]}.</b> ${plan}</p>` : ""}<p class="warn" style="margin:8px 0 0">Antibiotics alone do not cure an obstructed, infected duct: drainage is the treatment. Continue antibiotics for 4–7 days after the duct is drained.</p>`;
      };
      el.addEventListener("input", go); go();
    },

    cbdrisk(el, U) {
      el.innerHTML = `<h4>Is there a stone in the common bile duct? (ASGE 2019)</h4>
        <p style="margin:0 0 6px"><b>High-risk findings</b></p><div class="checks">${chk("h1", "Stone seen in the common bile duct on ultrasound, CT or MRI")}${chk("h2", "Bilirubin over 4 mg/dL (68 µmol/L) AND a dilated bile duct (over 6 mm with gallbladder present)")}${chk("h3", "Acute cholangitis")}</div>
        <p style="margin:10px 0 6px"><b>Intermediate-risk findings</b></p><div class="checks">${chk("i1", "Abnormal liver tests")}${chk("i2", "Age over 55")}${chk("i3", "Dilated bile duct on ultrasound")}</div>
        <div class="out" aria-live="polite"></div>`;
      const go = () => {
        const c = k => U.$(`[data-k=${k}]`, el).checked;
        const hi = ["h1", "h2", "h3"].some(c), mid = ["i1", "i2", "i3"].some(c);
        const [g, a] = hi ? ["High (over about 50%)", "Go straight to ERCP to clear the duct (before or around cholecystectomy)."]
          : mid ? ["Intermediate (about 10–50%)", "Confirm first with MRCP or endoscopic ultrasound, or intraoperative cholangiography during laparoscopic cholecystectomy."]
          : ["Low (under about 10%)", "Cholecystectomy without further duct imaging."];
        U.$(".out", el).innerHTML = `<p style="margin:0"><b>Risk of a duct stone: ${g}.</b> ${a}</p><p class="warn" style="margin:8px 0 0">Where ERCP, MRCP and endoscopic ultrasound are only at the national referral hospital, refer high- and intermediate-risk patients there rather than operating locally.</p>`;
      };
      el.addEventListener("input", go); go();
    }
  });
})();
