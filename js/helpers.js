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
  "images/ercp-diagram.svg": ["4/43/Detailed_diagram_of_an_endoscopic_retrograde_cholangio_pancreatography_%28ERCP%29_CRUK_001.svg",375,"svg"],
  "images/pancreatitis-ct.jpg": ["e/eb/Akute_exsudative_Pankreatitis_-_CT_axial.jpg",1208],
  "images/pancreatic-pseudocyst-ct.png": ["e/e7/Large_Pancreatic_Pseudocyst.PNG",956],
  "images/cullen-sign.jpg": ["3/3e/Cullen%27s_sign.jpg",561],
  "images/grey-turner-sign.jpg": ["5/5d/Hemorrhagic_pancreatitis_-_Grey_Turner%27s_sign.jpg",602],
  "images/pyelonephritis-ct.jpg": ["b/b4/Akute_Pyelonephritis_links_mit_Minderperfusion_der_linken_Niere_52M_-_CT_-_001.jpg",1830],
  "images/urine-dipstick.jpg": ["c/c3/Comp.Urine.Test.Strip.jpg",1536],
  "images/vur-vcug.jpg": ["0/0a/Vesicoureteral-reflux-004.jpg",443],
  "images/vur-grade3.svg": ["a/ac/Grade_3_Vesico_Ureteric_Reflux.svg",842,"svg"],
  "images/nmen-csf-gram.jpg": ["e/e6/Neisseria_meningitidis_CSF_Gram_1000.jpg",1920],
  "images/kernig-sign.jpg": ["6/65/Kernig%27s_sign_cerebrospinal_meningitis.jpg",838],
  "images/hsv-encephalitis-mri.jpg": ["d/d5/Hsv_encephalitis.jpg",480],
  "images/pneumococcal-meningitis-path.jpg": ["f/fd/Streptococcus_pneumoniae_meningitis%2C_gross_pathology_33_lores.jpg",1220],
  "images/tbm-hydrocephalus-ct.jpg": ["2/23/Tuberculous-meningitis-scan.jpg",455],
  "images/meningococcal-rash.jpg": ["6/62/%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B2%D0%B8%D1%81%D0%B8%D0%BF_%D0%BD%D0%B0_%D0%BA%D0%B8%D1%81%D1%82%D1%96_%D0%BF%D1%80%D0%B8_%D0%BC%D0%B5%D0%BD%D1%96%D0%BD%D0%B3%D0%BE%D0%BA%D0%BE%D0%BA%D1%86%D0%B5%D0%BC%D1%96%D1%97.jpg",1500],
  "images/infant-opisthotonus.jpg": ["2/29/Child_suffering_from_post_basal_meningitis_Wellcome_L0061793.jpg",5248],
  "images/eeg-absence.png": ["7/74/EEG_Absence_seizure.png",889],
  "images/ncc-ct.jpg": ["f/f1/Neurocysticercosis_brain_CT.jpg",576],
  "images/mts-mri.jpg": ["3/3f/Mesial_Temporal_Sclerosis.jpg",296],
  "images/dengue-rash-early.jpg": ["f/f8/Early_Dengue_Fever_Rash_2014.jpg",2394],
  "images/dengue-rash-recovery.jpg": ["a/ad/Dengue_recovery_rash_%28White_islands_in_red_sea%29.jpg",1011],
  "images/tourniquet-test.gif": ["8/83/Positive-tourniquet-test.gif",483],
  "images/aedes-aegypti.jpg": ["9/91/Aedes_aegypti_mosquito.jpg",1024],
  "images/typhoid-rose-spots.jpg": ["1/12/Salmonella_typhi_typhoid_fever_PHIL_2215_lores.jpg",2973],
  "images/typhoid-ileum-ulcer.jpg": ["b/b7/Typhoid_ulceration_of_the_lower_portion_of_the_ileum_Wellcome_L0061611.jpg",6270],
  "images/widal-slide.jpg": ["8/88/Widal_Test_Slide.jpg",1920],
  "images/scrub-eschar.jpg": ["5/52/Scrub_typhus_eschar.jpg",269],
  "images/scrub-rash.webp": ["e/ea/Scrub_typhus_rash.webp",500],
  "images/chigger-mites.jpg": ["c/c9/Leptotrombidium%2C_chigger_mites_%2814854410979%29.jpg",720],
  "images/scrub-rdt.jpg": ["5/59/Scrub_Typhus_IgM_Test-Positive.jpg",4160],
  "images/scleral-icterus.jpg": ["9/9c/Scleral_Icterus.jpg",1600],
  "images/koilonychia.jpg": ["3/32/Koilonychia_iron_deficiency_anemia.jpg",2713],
  "images/ida-smear.jpg": ["2/29/Iron-deficiency_Anemia%2C_Peripheral_Blood_Smear_%284422704616%29.jpg",1711],
  "images/hypersegmented-neutrophil.jpg": ["a/a2/Hyperlobated_Neutrophil_%288612790151%29.jpg",474],
  "images/newborn-jaundice.jpg": ["7/7c/Jaundice_in_newborn.jpg",700],
  "images/goitre-large.jpg": ["4/43/Kone_med_stor_struma.jpg",1939],
  "images/myxedema-face.jpg": ["2/25/Myxedema.jpg",622],
  "images/pitting-oedema.jpg": ["2/21/Pitting_Edema2008.jpg",2304],
  "images/urine-strip-multi.jpg": ["c/c3/Comp.Urine.Test.Strip.jpg",1536],
  "images/phototherapy-infant.png": ["c/ca/Infant_Under_Bili_Lights.png",1024],
  "images/phototherapy-photo.jpg": ["0/09/Phototherapy.jpg",1536],
  "images/uterine-balloon.png": ["7/7d/Balloon_medical_device_for_Tamponade_Treatment_of_uterine_postpartum_hemorrhage.png",1870],
  "images/rsv-em.jpg": ["7/74/Respiratory_syncytial_virus_01.jpg",1804],
  "images/omphalitis.svg": ["f/f8/Omphalitis_by_hariadhi.svg",512,"svg"],
  "images/epidural-ct.jpg": ["f/f9/EpiduralHematoma.jpg",784],
  "images/kwashiorkor.jpg": ["4/4d/Kwashiorkor_6180.jpg",1205],
  "images/kwashiorkor-skin.jpg": ["c/c4/Kwashiorkor_dermatosis.jpg",907],
  "images/muac-uganda.jpg": ["7/73/Uganda_Nutrition_%2826941720597%29.jpg",3216],
  "images/rule-of-nines.svg": ["2/27/Wallace_Rule_of_Nines.svg",1172,"svg"],
  "images/burn-superficial-partial.png": ["d/d6/Superficial-partial-thickness-burn.png",3200],
  "images/burn-deep-partial.png": ["5/5a/Deep-partial-thickness-burn.png",3200],
  "images/russells-viper.jpg": ["9/95/Daboia_russelii_142066935.jpg",2048],
  "images/common-krait.jpg": ["f/ff/Bungarus_caeruleus_160434547.jpg",1536],
  "images/green-pit-viper.jpg": ["f/f3/Trimeresurus_albolabris_89712044.jpg",2000],
  "images/rabid-dog.jpg": ["9/90/Rabid_dog.jpg",2728],
  "images/aconitum-ferox.jpg": ["8/84/Aconitum_ferox_in_Jardin_botanique_de_la_Charme.jpg",6000],
  "images/urticaria-hives.jpg": ["1/19/Rash.jpg",1530],
  "images/angioedema-lips.jpg": ["7/78/AngioedemaFra.JPG",1006],
  "images/altitude-helicopter.jpg": ["6/6a/Helicopter_evac_in_Himalaya_evacuation_of_an_old_man_suffering_altitude_sickness._%2812192425724%29.jpg",2000],
  "images/cellulitis-foot.jpg": ["1/1f/Cellulitis_of_lower_leg_and_foot.jpg",4032],
  "images/impetigo-face.jpg": ["b/b8/Woman%27s_face_infected_with_impetigo_Wellcome_L0074829_%28cropped%29.jpg",3101],
  "images/bullous-impetigo.jpg": ["a/a3/Bullous_impetigo.jpg",2592],
  "images/scabies-hand.jpg": ["8/8d/Scabies_hand_and_fingers_2.jpg",2880],
  "images/sarcoptes-mite.jpg": ["c/c0/Sarcoptes_scabei_2.jpg",925],
  "images/tonsillitis.jpg": ["c/cf/Tonsillitis_Img.jpeg",2288],
  "images/aom-drum.jpg": ["3/36/Otitis_media_entdifferenziert1.jpg",1209],
  "images/otitis-externa.jpg": ["9/94/OtitisExterna10.JPG",2679],
  "images/perforated-drum.jpg": ["b/bb/Otite_moyenne_perfor%C3%A9e.jpg",3024],
  "images/conjunctivitis-swollen.jpg": ["9/90/Swollen_eye_with_conjunctivitis.jpg",1407],
  "images/aacg-eye.jpg": ["0/07/Acute_angle_closure_glaucoma.JPG",2853],
  "images/gout-tophi-ear.jpg": ["3/3d/Ear_of_a_man_with_numerous_gouty_tophi_Wellcome_L0062313.jpg",4244],
  "images/oa-knee-xr.jpg": ["b/b5/Osteoarthritis_on_X-ray.jpg",2133],
  "images/ra-hands.jpg": ["7/70/Rheumatoid_Arthritis.JPG",4320],
  "images/renal-calculi-ct.jpg": ["8/8c/Non-contrast_CT_of_multiple_bilateral_renal_calculi.jpg",1085],
  "images/oral-candidiasis.jpg": ["2/26/CandidiasisFromCDCinJPEG03-18-06.JPG",1763],
  "images/syphilis-chancre-tongue.jpg": ["a/ab/Primary_stage_syphilis_sore_%28chancre%29_on_the_surface_of_a_tongue-CDC.jpg",960],
  "images/pf-rings.jpg": ["c/c3/Plasmodium_falciparum_02.jpg",1159],
  "images/pv-troph.jpg": ["f/f2/Immature_and_mature_trophozoites_of_the_Plasmodium_vivax_parasite_PHIL_2720_lores.jpg",700],
  "images/dvt-leg.jpg": ["2/21/Deep_vein_thrombosis_of_the_right_leg.jpg",1814],
  "images/dvt-us.jpg": ["4/4f/Ultrasonography_of_deep_vein_thrombosis_of_the_femoral_vein_-annotated.jpg",695],
  "images/pe-ctpa.jpg": ["a/ae/CTA_Chest_With_Massive_Pulmonary_Embolism_and_Complete_Occlusion.jpg",512],
  "images/hcc-ct.jpg": ["d/d6/Arterial_and_portal_venous_phase_CT_of_cirrhosis_and_hepatocellular_carcinoma.jpg",791],
  "images/erythema-marginatum.jpg": ["4/41/Erythema_marginatum.jpg",3264],
  "images/cervix-scc-pap.jpg": ["3/32/Squamous_cell_carcinoma_in_the_cervix,_pap_stain.jpg",1350],
  "images/open-fracture-tib.jpg": ["0/01/Tibial_and_fibular_shaft_fracture_(open_fracture).jpg",3456],
  "images/brodie-abscess-xr.jpg": ["2/21/BrodieAbscessRadiograph.jpg",644],
  "images/ectopic-blob.png": ["f/f0/Blob_sign_of_ectopic_pregnancy_(hy).png",1600],
  "images/molar-us.jpg": ["c/c1/Molar_pregnancy.jpg",676],
  "images/kmc.jpg": ["d/d4/MotherKMC.jpg",780],
  "images/croup-steeple.jpg": ["1/12/Croup_steeple_sign.jpg",426],
  "images/placenta-praevia.svg": ["1/12/Placenta_previa-en.svg",744,"svg"],
  "images/hbb-action-plan.jpg": ["f/f7/Helping-babies-breathe-2018-action-plan.jpg",1331],
  "images/koplik.jpg": ["6/6b/Koplik_spots,_measles_6111_lores.jpg",490],
  "images/measles-rash.jpg": ["2/27/RougeoleDP.jpg",652],
  "images/ascaris-worms.png": ["d/dd/Ascaris_lumbricoides_adult_worms.png",1046],
  "images/hookworm-egg.jpg": ["0/0c/Hookworm_egg_1.JPG",1195],
  "images/liver-abscess-us.png": ["6/65/LiverAbscessMark.png",1004],
  "images/chickenpox-adult.jpg": ["7/74/Chickenpox_Adult_back.jpg",2419],
  "images/kawasaki-lips.jpg": ["9/96/Kawasaki_symptoms_B.jpg",464],
  "images/vasculitis-legs.jpg": ["b/b6/Vasculitis_on_legs.jpg",3264],
  "images/nec-xray.jpg": ["6/6a/Pneumatosis_intestinalis_und_hepatis_bei_NEC_0W_-_CR_ap_-_001.jpg",1208],
  "images/hfmd-foot.jpg": ["9/9e/Characteristic_rash_of_hand,_foot,_and_mouth_disease,_on_a_human_foot.jpg",4073],
  "images/rickets-child.jpg": ["0/0b/Child_suffering_from_rickets.jpg",700],
  "images/inguinal-hernia.jpg": ["c/c0/Inguinal_hernia_front_view.jpg",1623],
  "images/bthal-smear.jpg": ["a/a0/B-Thal.jpg",3840],
  "images/hypsarrhythmia.png": ["a/af/Hypsarrhythmia.png",2534],
  "images/asd-diagram.png": ["9/92/Atrial_septal_defect-en.png",730],
  "images/pfo-diagram.png": ["0/0a/Patent-foramen-ovale-en.png",730],
  "images/ards-xray.jpg": ["b/b1/ARDS_X-Ray.jpg",804],
  "images/down-boy.jpg": ["0/03/Boy_with_Down_Syndrome.JPG",1804],
  "images/cleft-lip-child.jpg": ["3/3a/Cleft_lip_child.jpg",2080],
  "images/pda-diagram.svg": ["4/46/Patent_ductus_arteriosus.svg",454,"svg"],
  "images/trousseau.jpg": ["1/13/Trousseau's_Sign_of_Latent_Tetany.jpg",3201],
  "images/beriberi-dry.jpg": ["8/88/Late_stage_of_paralysis_with_atrophy_in_dry_beriberi.jpg",1381],
  "images/cp-child.png": ["1/19/Child_with_Cerebral_Palsy.png",3508],
  "images/blood-bag.jpg": ["d/d0/Blood_bag_2020.jpg",4248],
  "images/copper-iud.jpg": ["6/69/Copper_IUD.jpg",1905],
  "images/supracondylar-xr.jpg": ["5/58/Supracondylar09.JPG",2304],
  "images/nof-fracture.png": ["8/88/Neck_of_Femur_fracture_Right_side_in_a_80_years_old_female_patient.png",534],
  "images/fibroid-diagram.png": ["2/2d/Subserosal_uterine_fibroid.png",500],
  "images/dermoid-ct.png": ["c/c2/DermoidCyst(CT).png",937],
  "images/clubfoot.jpg": ["5/51/813_Clubfoot.jpg",529],
  "images/fasciotomy-leg.jpg": ["d/da/Fasciotomy_leg.jpg",1768],
  "images/rop-zones.jpg": ["0/0e/Retinopathy_of_Prematurity_Zones.jpg",1909],
  "images/potts-wellcome.jpg": ["3/3c/Pott's_disease_in_a_mummy_of_a_priest_of_Ammon,_21st_Dynasty_Wellcome_M0019338.jpg",2556]
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
