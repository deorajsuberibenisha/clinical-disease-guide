/* Biliary drug cards. Reused: ceftriaxone, metronidazole, coamoxiclav, ampicillin, piptazo, paracetamol, morphine, ondansetron.
   Sources: BNF/BNFc; NICE CG188 (NSAID first for biliary colic); WHO Model Formulary; Bhutan NEML 2025. */
Object.assign(GUIDE.drugs, {
diclofenac: {
  name: "Diclofenac", cls: "Non-steroidal anti-inflammatory drug (NSAID)", brands: "Voveran, Voltaren",
  bt: "Listed — diclofenac sodium tablets and injection (NEML 2025)",
  moa: "<p>Blocks COX-1 and COX-2, reducing prostaglandins. In biliary colic it relieves pain and may reduce progression to cholecystitis by lowering gallbladder prostaglandin-driven inflammation.</p>",
  ind: "<p><b>First-line analgesic for biliary colic and renal colic</b> (NICE CG188); musculoskeletal pain.</p>",
  ci: "<ul><li>Active peptic ulcer or GI bleeding, previous NSAID ulcer without protection</li><li>eGFR under 30, AKI, dehydration</li><li>Heart failure, ischaemic heart disease, stroke</li><li>Third trimester of pregnancy</li><li>Aspirin-sensitive asthma</li></ul>",
  adult: "<p><b>Biliary or renal colic: 75 mg IM once</b> (deep gluteal), repeated once after 30 minutes if needed in severe pain (maximum 150 mg in 24 hours), or 50 mg orally or rectally 8-hourly. Shortest possible course.</p>",
  child: "<p>Over 6 months: 0.3–1 mg/kg orally 8-hourly (maximum 50 mg per dose, 150 mg/day). Rarely needed for biliary pain in children.</p>",
  preg: "<p>Avoid, especially from 20 weeks (fetal kidney and ductus arteriosus effects).</p>", bf: "<p>Compatible for short courses.</p>",
  renal: "<p>Avoid if eGFR under 30 or in AKI; caution if 30–60.</p>",
  hep: "<p>Avoid in severe liver disease.</p>",
  elderly: "<p>Higher risk of GI bleeding and kidney injury: use the lowest dose with a PPI if more than a day or two.</p>",
  inter: "<p>Anticoagulants and antiplatelets (bleeding), ACE inhibitors/ARBs and diuretics (kidney injury), lithium and methotrexate (toxicity).</p>",
  ae: "<p>Dyspepsia, GI bleeding, AKI, fluid retention, raised blood pressure, injection-site pain.</p>",
  src: "<p>BNF/BNFc; NICE CG188 Gallstone disease (2014); Bhutan NEML 2025.</p>"
},
albendazole: {
  name: "Albendazole", cls: "Benzimidazole anthelmintic", brands: "Zentel, Bandy",
  bt: "Listed — albendazole 400 mg tablet and suspension (NEML 2025); used in school deworming",
  moa: "<p>Binds worm beta-tubulin, stopping glucose uptake so the worms die slowly over days.</p>",
  ind: "<p>Roundworm (<i>Ascaris</i>), hookworm, whipworm, pinworm; hydatid disease and neurocysticercosis (specialist courses). Biliary ascariasis, once the acute episode is controlled.</p>",
  ci: "<p>First trimester of pregnancy. Neurocysticercosis: specialist care with steroids (inflammation as cysts die).</p>",
  adult: "<p><b>Intestinal worms: 400 mg once</b>; repeat after 2–3 weeks for heavy infection or pinworm. <b>Worm obstruction or biliary ascariasis:</b> give only after the obstruction has settled or the worm has left the duct.</p>",
  child: "<p><b>12–24 months: 200 mg once. 2 years and over: 400 mg once</b> (tablet chewed or crushed). Pinworm: repeat after 2 weeks and treat the household.</p>",
  preg: "<p>Avoid in the first trimester; WHO allows single-dose deworming in the second and third trimesters where worms are common.</p>", bf: "<p>Compatible.</p>",
  hep: "<p>Prolonged courses can raise liver enzymes: monitor in long specialist treatment.</p>",
  ae: "<p>Single dose: mild abdominal pain, nausea, headache. Long courses: liver enzyme rise, low white cells, hair loss.</p>",
  src: "<p>WHO Model Formulary; BNFc; WHO deworming guidance; Bhutan NEML 2025.</p>"
}
});
