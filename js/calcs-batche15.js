/* Batch E-15 calculators (27 Nov 2026).
   cataractref: NICE NG77 (impact-based referral, no visual-acuity restriction) + Merck cataract indications + Merck congenital cataract (urgent).
   eyelump: Bhutan STG §15.10/15.13 + Merck chalazion/hordeolum, pterygium, subconjunctival haemorrhage.
   scalpswell: Merck birth injuries (caput, cephalhaematoma, subgaleal haemorrhage, depressed skull fracture). */
(function () {
  const bind = (el, go) => { el.addEventListener("input", go); el.addEventListener("change", go); go(); };
  const sel = (k, t, o) => `<label>${t}<select data-k="${k}">${o.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select></label>`;
  const ul = a => `<ul style="margin:4px 0 0">${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const yn = [["n", "No"], ["y", "Yes"]];
  window.EXTRA_CALCS = Object.assign(window.EXTRA_CALCS || {}, {

  cataractref(el, U) {
    el.innerHTML = `<h4>Lens opacity: refer?</h4><div class="row">${sel("age", "Patient", [["a", "Adult"], ["c", "Baby or child"]])}${sel("imp", "Vision limits daily life (reading, work, driving, self-care) or disabling glare", yn)}${sel("va", "Best corrected vision worse than 6/12", yn)}${sel("other", "Cataract causing pain/glaucoma, or hiding the fundus in diabetes", yn)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value === "y", out = U.$(".out", el), a = [];
      if (U.$("[data-k=age]", el).value === "c") { out.innerHTML = "<p><b>Urgent ophthalmology referral.</b> Unilateral congenital cataract needs surgery within 4–6 weeks of life; then glasses/contact lens and amblyopia treatment. Also rule out retinoblastoma if the pupil is white.</p>"; return; }
      if (g("other")) a.push("<b>Refer</b> — cataract causing glaucoma or blocking fundus review");
      if (g("imp")) a.push("<b>Refer for surgery</b> — impact on life is the main criterion (NICE: do not restrict by acuity)");
      else if (g("va")) a.push("Vision below 6/12: discuss surgery — refer if the person wants it");
      if (!a.length) a.push("No current indication: update glasses, better lighting; review; no surgery for asymptomatic cataract");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">NICE NG77; Merck Manual; Bhutan STG §15.8.</p>`;
    });
  },

  eyelump(el, U) {
    el.innerHTML = `<h4>Eyelid lump or red patch</h4><div class="row">${sel("t", "What you see", [["sty", "Painful red bump at the lash line"], ["cha", "Painless firm lump inside the lid"], ["pte", "Fleshy triangle growing onto the cornea"], ["sch", "Flat bright-red patch on the white, painless"], ["lac", "Cut through the eyelid"]])}${sel("cel", "Spreading lid redness/swelling, fever", yn)}${sel("orb", "Painful eye movement, proptosis or reduced vision", yn)}${sel("rec", "Recurrent, or on anticoagulants/bleeding elsewhere", yn)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, t = g("t"), out = U.$(".out", el), a = [];
      if (g("orb") === "y") { out.innerHTML = "<p><b>Possible orbital cellulitis or serious eye injury — urgent ophthalmology / admission.</b></p>"; return; }
      if (t === "sty") { a.push("Warm compresses 5–10 min, 2–3 times a day; do not squeeze"); a.push("STG: chloramphenicol ointment once daily 5 days; amoxicillin 500 mg three times daily 5 days if severe"); }
      if (t === "cha") { a.push("Warm compresses and gentle lid massage"); a.push("Persisting several weeks or large: refer for incision/curettage or steroid injection; recurrent in an older adult → biopsy"); }
      if (t === "pte") { a.push("UV sunglasses and hat; avoid wind and dust; artificial tears"); a.push("Refer if growing toward the pupil, affecting vision or very irritated"); }
      if (t === "sch") { a.push("Reassure: clears in 1–3 weeks; no drops needed"); a.push("Paracetamol, not aspirin/ibuprofen; avoid straining and rubbing"); if (g("rec") === "y") a.push("<b>Check BP, platelets and clotting/INR</b>"); }
      if (t === "lac") a.push("<b>Clean, cover, tetanus, refer</b> — lid margin or inner-corner (tear duct) injuries need specialist repair");
      if (g("cel") === "y" && t !== "lac") a.push("<b>Preseptal cellulitis</b>: oral antibiotic (STG amoxicillin; Merck doxycycline or erythromycin); review in 24–48 h");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Bhutan STG §15.10, §15.13; Merck Manual.</p>`;
    });
  },

  scalpswell(el, U) {
    el.innerHTML = `<h4>Newborn scalp swelling</h4><div class="row">${sel("ext", "Extent", [["one", "Limited to one skull bone (stops at sutures)"], ["cross", "Soft, crosses suture lines, over the presenting part"], ["whole", "Fluctuant, over the whole scalp, into temples/neck"], ["step", "Palpable step/dent in the skull"]])}${sel("onset", "Appeared", [["birth", "At birth"], ["hours", "Within hours, growing"], ["days", "Over the first days"]])}${sel("shock", "Pale, fast heart rate, poor perfusion", yn)}</div><div class="out" aria-live="polite"></div>`;
    bind(el, () => {
      const g = k => U.$(`[data-k=${k}]`, el).value, out = U.$(".out", el), a = [];
      const ext = g("ext");
      if (ext === "whole" || g("shock") === "y") { a.push("<b>Subgaleal haemorrhage likely — emergency</b>: monitor HR, BP, perfusion, head circumference, Hb; IV saline and packed red cells; check and correct coagulation; vitamin K; urgent NICU"); }
      else if (ext === "one") a.push("Cephalhaematoma: no treatment; resolves over weeks; watch for jaundice and anaemia");
      else if (ext === "cross") a.push("Caput succedaneum: harmless oedema; resolves in days");
      else if (ext === "step") a.push("<b>Depressed skull fracture</b>: CT; neurosurgery opinion; look for intracranial bleeding");
      a.push("Apnoea, seizures or lethargy → cranial ultrasound/CT for intracranial haemorrhage");
      out.innerHTML = ul(a) + `<p class="qn" style="margin:6px 0 0">Merck Manual: Birth injuries (Feb 2025).</p>`;
    });
  }

  });
})();
