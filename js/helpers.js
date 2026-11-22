/* Small helpers the disease pages use to stay consistent. */
window.GUIDE = { pages: [], drugs: {} };
function registerPage(p) { GUIDE.pages.push(p); }

/* drug link: opens the drug card */
const dr = (id, label) => `<a href="#" role="button" class="drug" data-drug="${id}" title="Open drug card">${label || (GUIDE.drugs[id] && GUIDE.drugs[id].name) || id}</a>`;

/* origin labels */
const LB = {
  int: t => `<span class="lbl l-int">${t || "INTERNATIONAL"}</span>`,
  bt: t => `<span class="lbl l-bt">${t || "BHUTAN"}</span>`,
  in: t => `<span class="lbl l-in">${t || "INDIA"}</span>`,
  loc: t => `<span class="lbl l-loc">${t || "LOCAL ADAPTATION"}</span>`,
  exp: t => `<span class="lbl l-exp">${t || "EXPERT OPINION"}</span>`,
  draft: t => `<span class="lbl l-draft">${t || "DRAFT GUIDELINE"}</span>`
};

/* citation link to the page's reference list */
const r = (...n) => n.map(x => `<a class="ref" href="#" data-to="ref-${x}">[${x}]</a>`).join("");

/* coloured boxes: red = danger, amber = caution, green = good practice, blue = info, bt = Bhutan note */
const box = (kind, title, html) => `<div class="box ${kind}"><b>${title}</b>${html}</div>`;

/* table */
/* tables with 3+ columns turn into stacked cards on phones (labels come from the header row) */
const tbl = (head, rows, cls = "") => {
  const card = head.length >= 3, lab = head.map(x => String(x).replace(/<[^>]+>/g, "").replace(/"/g, "&quot;"));
  return `<div class="tbl${card ? " cardwrap" : ""}"><table class="${cls}${card ? " cards" : ""}"><thead><tr>${head.map(x => `<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map(rw => `<tr>${rw.map((c, i) => `<td data-label="${lab[i] || ""}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
};

/* collapsible block */
const more = (title, html, open = false) => `<details${open ? " open" : ""}><summary>${title}</summary><div class="in">${html}</div></details>`;

/* question bank item */
const qa = (lv, q, a) => `<details class="qa"><summary><span class="lv">${lv}</span>${q}</summary><div class="in">${a}</div></details>`;

/* flowchart pieces */
const F = {
  chart: (title, parts) => `<div class="flow" role="img" aria-label="${title}"><div class="ft">${title}</div>${parts.join("")}</div>`,
  s: t => `<div class="fs">${t}</div>`,
  ok: t => `<div class="fs ok">${t}</div>`,
  d: t => `<div class="fd">${t}</div>`,
  e: t => `<div class="fe">${t}</div>`,
  a: `<div class="arr"></div>`,
  b: cols => `<div class="fb">${cols.map(([lab, ...items]) => `<div>${lab ? `<span class="yn">${lab}</span>` : ""}${items.join('<div class="arr"></div>')}</div>`).join("")}</div>`
};

/* Images (Wikimedia Commons, open licences).
   Each entry: Commons path + original pixel width. The page loads a sharp copy sized to the screen
   (960 px, 1280 px on high-density screens), and "Enlarge" opens the full original. */
const WM = "https://upload.wikimedia.org/wikipedia/commons/";
const IMGS = {
  "images/normal-adult-kidney.jpg": ["a/a2/Normal_adult_kidney.jpg", 1007],
  "images/hydronephrosis-cortical-thinning.jpg": ["5/52/Ultrasonography_of_hydronephrosis_with_dilated_anechoic_pelvis_and_calyces%2C_along_with_cortical_atrophy.jpg", 1006],
  "images/hydronephrosis-moderate.jpg": ["f/f8/Ultrasound_of_right_kidney_moderate_hydronephrosis.jpg", 3521],
  "images/urine-casts.jpg": ["8/87/RTE_cast%2C_muddy_granular_cast%2C_WBC_cast_and_RBC_cast_in_urine.jpg", 567],
  "images/hyperkalaemia-ecg.jpg": ["6/67/Hyperkalemia_ECG.jpg", 1158],
  "images/hyperkalaemia-ecg-schematic.png": ["b/b8/ECG_in_hyperkalemia.svg", 0, "svg"],
  "images/atn-histology.webp": ["c/c7/Histopathological_features_of_acute_tubular_injury_and_tubulointerstitial_nephritis.webp", 685],
  "images/normal-paediatric-kidney.jpg": ["5/5b/Normal_pediatric_kidney.jpg", 1011],
  "images/eskd-ultrasound.jpg": ["e/e4/Ultrasonography_of_end-stage_chronic_kidney_disease.jpg", 962],
  "images/ckd-glomerulonephritis-us.jpg": ["5/5b/Ultrasonography_of_chronic_renal_disease_caused_by_glomerulonephritis.jpg", 892],
  "images/renal-parenchymal-disease-us.jpg": ["7/74/Ultrasound_of_left_kidney_renal_parenchymal_disease.jpg", 4197],
  "images/rugger-jersey-spine.jpg": ["3/31/X-ray_of_rugger-jersey_spine_of_renal_osteodystrophy.jpg", 146],
  "images/brown-tumours-pelvis.jpg": ["a/aa/X-ray_of_brown_tumors_in_the_pelvis_and_a_hip_fracture_in_renal_osteodystrophy.jpg", 347],
  "images/uraemic-frost.jpg": ["9/92/Uremic_frost_on_forehead_and_scalp_of_young_Afro-Caribbean_male.jpg", 2592],
  /* diabetes */
  "images/dr-proliferative.jpg": ["9/9f/Fundus_Proliferative_retinopathy_EDA01.JPG", 1000],
  "images/dr-background.jpg": ["c/cb/Fundus_retinopathy_EDA03.JPG", 900],
  "images/dr-laser.jpg": ["3/3f/Fundus_photo_showing_scatter_laser_surgery_for_diabetic_retinopathy_EDA09.JPG", 975],
  "images/dfu-heel.jpg": ["c/cd/Neuropathic_heel_ulcer_diabetic.jpg", 750],
  "images/dfu.jpg": ["d/db/Diabetic_Foot_Ulcer.jpg", 800],
  "images/dfu-wagner1.jpg": ["d/d2/Wagner_Grade_1_diabetic_foot_ulcer_before_and_after_debridement_%28Dayya_2022%29.jpg", 788],
  "images/necrobiosis.jpg": ["8/86/Necrobiosis_lipoidica_diabeticorum.jpg", 3024],
  "images/charcot-xray.jpg": ["1/17/Charcot_arthropathy_X-ray.jpg", 750],
  /* tuberculosis */
  "images/tb-cxr-advanced.jpg": ["9/9c/Tuberculosis-x-ray-1.jpg", 590],
  "images/tb-miliary-cxr.jpg": ["6/6c/Chest_radiograph_of_miliary_tuberculosis_1.jpg", 876],
  "images/tb-afb-zneelsen.jpg": ["7/71/Mycobacterium_tuberculosis_Ziehl-Neelsen_stain_02.jpg", 2073],
  "images/tb-caseating-granuloma.jpg": ["e/e8/Tuberculous_lymph_node_with_caseating_granuloma_40X.jpg", 997],
  "images/tb-granuloma-tblb.jpg": ["d/d7/Tuberculous_caseous_granuloma_%281%29_TBLB.jpg", 4080],
  "images/tb-cervical-lymphadenitis.jpg": ["a/ab/Tuberculose_ganglionnaire_se_fistulisant.jpg", 2592],
  "images/tb-child-hilar.jpg": ["7/7a/Chest_x-ray_of_bilateral_hilar_adenopathy_of_primary_pulmonary_tuberculosis.jpg", 263],
  /* pneumonia */
  "images/pneumonia-rul.jpg": ["6/6b/PneumoniaRUL.jpg", 1768],
  "images/pneumonia-rll.jpg": ["7/75/RLLpneumonia.PNG", 878],
  "images/spneumoniae-gram.jpg": ["d/d4/Gram_stain_of_Streptococcus_pneumoniae.jpg", 2980],
  "images/pneumonia-child-rml.png": ["c/c4/RtPneuKidMark.png", 875],
  "images/pneumonia-child-effusion.png": ["0/03/Pneumonia_and_pleural_effusions_on_the_lower_left_lung_%282.5_y.o._child%29.png", 358],
  /* heart failure */
  "images/hf-pulmonary-oedema.jpg": ["8/82/AP_portable_CXR_of_a_patient_in_acute_pulmonary_oedema.jpg", 1600],
  "images/hf-cardiomegaly.jpg": ["d/d5/Cardiomegalia.JPG", 1414],
  "images/hf-pitting-oedema.jpg": ["8/84/Combinpedal.jpg", 4060],
  /* asthma */
  "images/asthma-peak-flow.jpg": ["d/dd/Peak_flow_meter.jpg", 3755],
  "images/asthma-spacer.jpg": ["2/25/Asthma_spacer.JPG", 800],
  "images/asthma-hyperinflation.jpg": ["9/9a/Barrowchest.JPG", 2270],
  /* acute coronary syndromes (verified via Commons API, 22 Nov 2026) */
  "images/acs-inferior-stemi.jpg": ["a/a0/ECG_001.jpg", 1664],
  "images/acs-anterior-stemi.jpg": ["7/76/12_Lead_EKG_ST_Elevation_tracing_color_coded.jpg", 1911],
  "images/acs-mi-schematic.png": ["f/fb/Blausen_0463_HeartAttack.png", 768],
  /* cirrhosis (verified via Commons API, 22 Nov 2026) */
  "images/cirrhosis-ascites.jpg": ["a/a3/Hepaticfailure.jpg", 3112],
  "images/cirrhosis-palmar-erythema.jpg": ["3/3c/Palmar_erythema.jpg", 3862],
  "images/cirrhosis-jaundice-eye.jpg": ["d/de/Jaundice_eye.jpg", 700],
  "images/cirrhosis-us-ascites.png": ["4/4c/CirrhosisWithAscites.png", 906],
  "images/cirrhosis-varices.jpg": ["b/b6/Esophageal_varices_-_wale.jpg", 315],
  /* hypertension (verified via Commons API, 22 Nov 2026) */
  "images/htn-bp-measure.jpg": ["c/c2/Blood_pressure_measurement_using_an_aneroid_sphygmomanometer.jpg", 3024],
  "images/htn-retinopathy.jpg": ["f/ff/Hypertensiveretinopathy.jpg", 2912],
  "images/htn-lvh-ecg.jpg": ["f/ff/Left_ventricular_hypertrophy_with_secondary_repolarization.jpg", 4391],
  "images/htn-dissection-ct.png": ["1/12/DissectionCT.png", 1030],
  "images/htnc-coarctation.png": ["3/30/Coarctation_Of_Aorta.png", 403],
  "images/htnc-pign.jpg": ["4/41/Post-infectious_glomerulonephritis_-_intermed_mag.jpg", 2848],
  /* stroke (verified via Commons API, 22 Nov 2026) */
  "images/stroke-mca-infarct.jpg": ["e/e9/CT_Brain_MCA_Infarct.jpg", 2000],
  "images/stroke-dense-mca.jpg": ["4/4d/Right_dense_MCA_sign_as_seen_on_CT_brain.jpg", 3456],
  "images/stroke-ich.jpg": ["1/1c/Intracerebral_hemorrage_%28CT_scan%29.jpg", 1200],
  "images/stroke-af-ecg.jpg": ["4/43/ECG_Atrial_Fibrillation_90_bpm.jpg", 1286],
  "images/stroke-fast.svg": ["f/fd/Act_FAST.svg", 0, "svg"],
  "images/strokec-moyamoya.jpg": ["c/cb/MRA_Moya-moya-disease.JPG", 1068],
  "images/strokec-cvst.jpg": ["f/f7/SVT%2C_axial_T1w_MR_image_with_highlighting.jpg", 702],
  /* copd (verified via Commons API, 22 Nov 2026) */
  "images/copd-emphysema-ct.jpg": ["b/b2/Emphysema_CT.JPG", 518],
  "images/copd-spirometry.png": ["d/d2/Spirometry.png", 800],
  "images/copd-chula.jpg": ["a/af/Rural_Hearth.jpg", 1152],
  /* gastroenteritis (verified via Commons API, 22 Nov 2026) */
  "images/ge-viruses.jpg": ["7/71/Gastroenteritis_viruses.jpg", 419],
  "images/ge-ors.jpg": ["c/c8/Oral_rehydration_salts_%28ORS%29_-_Packet.jpg", 2583],
  "images/ge-shigella.jpg": ["2/29/Shigella_stool.jpg", 700],
  "images/ge-ricewater.jpg": ["e/ee/Cholera_patient_rice_water_stool.jpg", 2448],
  "images/ge-ors-drink.jpg": ["a/ad/Cholera_rehydration_nurses.jpg", 1781],
  "images/ge-amoeba.jpg": ["c/cf/Trophozoites_of_Entamoeba_histolytica_with_ingested_erythrocytes.JPG", 282],
  "images/ge-giardia.jpg": ["0/08/Giardia_lamblia_SEM_8698_lores.jpg", 626],
  /* upper GI bleeding (verified via Commons API, 22 Nov 2026) */
  "images/ugib-du-vessel.jpg": ["3/3e/Duodenal_ulcer.jpg", 851],
  "images/ugib-gu-bleed.jpg": ["3/33/Bleeding_gastric_ulcer.png", 768],
  "images/ugib-varices-bleed.jpg": ["7/7c/Bleeding_esophageal_varices.png", 720],
  "images/ugib-free-air.jpg": ["e/eb/Chest_X-ray_showing_presence_of_free_air_under_left_diaphragm.png", 1792],
  "images/gastric-ulcer-endo.jpg": ["f/f2/Gastric_ulcer_3.jpg",332],
  "images/hpylori-giemsa.jpg": ["0/04/Helicobacter_pylori%2C_Gastric_Biopsy%2C_Giemsa_Stain_%285517582111%29.jpg",1239],
  "images/gastric-adenoca-gross.jpg": ["9/94/Adenocarcinoma_of_the_stomach.jpg",600],
  "images/appx-us.png": ["3/36/Appendicitis_ultrasound.png",1070],
  "images/appx-lith-ct.png": ["3/33/AppendicolithPlainCT.png",881],
  "images/mcburney.jpg": ["b/b1/McBurney%27s_point.jpg",777],
  "images/appx-histo.jpg": ["7/76/Acute_appendicitis_Low_Power.jpg",2048],
  "images/appx-pinworm.jpg": ["6/6f/Pinworms_%28Enterobiasis%29_in_the_Lumen_of_the_Vermiform_Appendix_%288612815555%29.jpg",1376],
  "images/sbo-upright-xr.jpg": ["d/dc/Upright_X-ray_demonstrating_small_bowel_obstruction.jpg",2285],
  "images/sigmoid-volvulus-xr.jpg": ["9/94/Sigmoidvolvulus.jpg",510],
  "images/intuss-target-us.png": ["5/5d/Ultrasound_of_target_sign_in_intussusception_of_the_right_bowel.png",8649],
  "images/pyloric-stenosis-us.jpg": ["7/72/PyloricStenosisUS.jpg",481],
  "images/double-bubble-xr.jpg": ["3/3d/Radiograph_with_Double_Bubble_Sign.jpg",643],
  "images/ascaris-barium.jpg": ["8/83/Ascaris_infection_in_the_x-ray_image-_ascaris_arranged_tidily_along_the_long_axis_of_the_small_bowel_%28South_Africa%29_%2816424840021%29.jpg",383],
  "images/intuss-diagram.svg": ["9/9e/Intussusception_EN.svg",800,"svg"],
  "images/gallstone-impacted-us.png": ["a/af/Gallstones.PNG",420],
  "images/cholecystitis-us.jpg": ["a/a1/Acute_cholecystitis_as_seen_on_ultrasound_axial_view.jpg",1024],
  "images/mrcp-cbd-stones.jpg": ["7/78/MRCP_Choledocholithiasis.jpg",1094],
  "images/cbd-stone-us.jpg": ["d/de/Ultrasonography_of_common_bile_duct_stone%2C_with_arrow.jpg",516],
  "images/gallstones-photo.jpg": ["1/17/Human_gallstones_2015_G1.jpg",4900],
  "images/ercp-diagram.svg": ["4/43/Detailed_diagram_of_an_endoscopic_retrograde_cholangio_pancreatography_%28ERCP%29_CRUK_001.svg",375,"svg"]
};
function imgSources(key) {
  const e = IMGS[key]; if (!e) return { src: key, srcset: "", full: key, svg: false };
  const [path, w, kind] = e, name = path.split("/").pop(), orig = WM + path;
  if (kind === "svg") return { src: orig, srcset: "", full: orig, svg: true };   // vector: always sharp
  const th = px => WM + "thumb/" + path + "/" + px + "px-" + name;
  if (w <= 960) return { src: orig, srcset: "", full: orig, svg: false };
  return { src: th(960), srcset: th(960) + " 960w, " + (w > 1280 ? th(1280) : orig) + " " + Math.min(w, 1280) + "w", full: orig, svg: false };
}

/* licensed image: key findings visible, full description one tap away, tap picture to enlarge */
function fig(o) {
  const s = imgSources(o.src), esc = t => String(t).replace(/"/g, "&quot;").replace(/<[^>]+>/g, "");
  const extra = [["Modality", o.mod], ["Clinical context", o.ctx], ["Location", o.loc], ["Signs", o.signs], ["Differential", o.ddx]].filter(x => x[1]);
  return `<figure class="img"><div class="pic" data-full="${s.full}" data-cap="${esc(o.title)}" data-page="${o.page}" role="button" tabindex="0" aria-label="Enlarge: ${esc(o.title)}"><img src="${s.src}"${s.srcset ? ` srcset="${s.srcset}" sizes="(max-width: 760px) 92vw, 720px"` : ""} alt="${esc(o.alt || o.title)}" loading="eager" decoding="async" referrerpolicy="no-referrer"${s.svg ? ` style="background:#fff;padding:6px"` : ""}></div><figcaption><b class="t">${o.title}</b>${o.note ? `<p>${o.note}</p>` : ""}${o.find ? `<p class="kf"><b>Findings.</b> ${o.find}</p>` : ""}${o.interp ? `<p class="kf"><b>What it means.</b> ${o.interp}</p>` : ""}${extra.length ? `<details><summary>Full description</summary><div class="in"><dl>${extra.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl></div></details>` : ""}<div class="lic">Source: <a href="${o.page}" target="_blank" rel="noopener">${o.by}</a> · ${o.lic}${o.mod2 ? " · " + o.mod2 : ""}</div></figcaption></figure>`;
}
