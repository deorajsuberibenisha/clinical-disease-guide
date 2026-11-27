/* Abdominal wall defects (gastroschisis, omphalocele, umbilical hernia) — neonates and children. Batch E-9, 27 Nov 2026.
   Sources read: Bhutan STG 2024 §12.4.7 Abdominal wall problem (text after 'cover with plastic bag to prevent' is unreadable in the PDF text layer);
   ERNICA evidence-based guideline on gastroschisis (Mesas Burgos 2024, full text via Europe PMC PMC10860293); Merck Manual Professional
   'Gastroschisis' and 'Omphalocele' (Aug 2025); NEML 2025 text. Not read: StatPearls (NCBI blocks automated access), APSA 2024 systematic review
   (cited via Merck), any umbilical hernia guideline — umbilical hernia points marked. */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "abdominal-wall-child",
title: "Abdominal wall defects — gastroschisis, omphalocele and umbilical hernia",
subtitle: "Bowel outside the abdomen at birth: cover it at once with warm sterile wet dressing and cling film, lay the baby on the right side, pass a gastric tube, give IV fluids and antibiotics, and keep warm during transfer",
age: "Neonates and children", specs: ["neo", "nicu", "paeds", "surg", "obg"],
keywords: ["gastroschisis", "omphalocele", "exomphalos", "abdominal wall defect", "umbilical hernia", "silo", "staged reduction", "Bianchi", "sutureless closure", "complex gastroschisis", "intestinal atresia", "Beckwith-Wiedemann", "trisomy 18", "pentalogy of Cantrell", "bowel bag", "cling film", "alpha-fetoprotein", "abdominal compartment syndrome", "parenteral nutrition", "giant omphalocele"],
related: ["oesophageal-atresia-child", "anorectal-child", "cdh-child", "neotherm-child", "neosepsis-child", "neoshock-child", "chd-child", "hernia-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Two different birth defects let bowel lie outside the abdomen. In <b>gastroschisis</b> uncovered, swollen bowel comes through a hole beside a normal cord (usually on the right). In <b>omphalocele</b> (exomphalos) organs sit in a thin sac at the base of the cord ${r(1)} ${r(3)}. Gastroschisis babies are usually otherwise well (survival above 90%) ${r(2)}; omphalocele babies often have other serious anomalies (about two-thirds) ${r(4)}. <b>Umbilical hernia</b> is a skin-covered bulge at the navel and is a different, usually harmless condition ${LB.exp()}.</p>
<div class="glance">
<div><h4>First minutes</h4><p>Cover the bowel or sac with a sterile, moist, non-adherent dressing and plastic wrap (or a bowel bag) to stop drying, heat loss and infection ${r(1)} ${r(3)}.</p></div>
<div><h4>Then</h4><p>Gastric tube to decompress; IV fluids — often 1.5 to 2 times normal maintenance because of losses from exposed bowel; IV antibiotics (commonly ampicillin + gentamicin) ${r(3)} ${r(4)}.</p></div>
<div><h4>Position</h4><p>Support the bowel so the mesentery does not kink; lying the baby on the side is common practice ${LB.exp("POSITIONING NOT IN SOURCES READ")}.</p></div>
<div><h4>Plan ahead</h4><p>Most gastroschisis is seen on antenatal scan (more than 90%): plan vaginal birth at 37–39 weeks at a centre with neonatal surgery ${r(2)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG tells staff to apply a warm sterile dressing, cover it with a plastic bag and refer to the nearest higher centre ${r(1)} (part of that STG section is unreadable in the electronic text). Repair needs a paediatric surgeon, neonatal anaesthesia, NICU and parenteral nutrition, which in Bhutan means JDWNRH ${LB.loc()}. If an antenatal scan shows gastroschisis or omphalocele, plan delivery at JDWNRH rather than transferring a newborn over mountain roads ${LB.int()}. Ampicillin, gentamicin and cefotaxime are on the NEML ${r(5)}.</p>`)}
` },
{ id: "overview", title: "The conditions in brief", html: `${tbl(["Feature", "Gastroschisis", "Omphalocele"], [
["Where", "Full-thickness defect beside the cord, usually to the right; cord normal " + r(1) + r(3), "Midline defect at the base of the umbilicus; cord inserts into the sac " + r(1) + r(4)],
["Covering", "None — bowel thick, red, matted with fibrin (amniotic fluid peritonitis) " + r(3), "Thin membrane (sac); may hold only bowel or also stomach and liver " + r(4)],
["Frequency", "About 3 per 10,000 (ERNICA) to 1 in 2,500 (Merck); commoner than omphalocele " + r(2) + r(3), "2–3 per 10,000 " + r(4)],
["Other anomalies", "Low (10–15%) apart from bowel problems — malrotation and atresia in about 25% " + r(3), "About two-thirds: bowel atresia, trisomy 18, 13, 21, heart and kidney anomalies, Beckwith-Wiedemann syndrome " + r(4)],
["Prenatal clues", "Raised maternal serum AFP; ultrasound " + r(3), "Routine ultrasound " + r(4)],
["Outcome", "Survival more than 90% liveborn; intrauterine death 7.5 times commoner than normal " + r(2), "Depends on size of defect and associated anomalies " + r(4)]
])}` },
{ id: "patho", title: "Why these babies get ill", html: `
${F.chart("Exposed bowel", [F.s("Large wet surface outside the body"), F.a, F.s("Water and heat lost fast — dehydration and hypothermia"), F.a, F.s("Infection of the peritoneum; bowel swelling"), F.a, F.d("Bowel twisted, kinked or squeezed at a small defect?"), F.a, F.e("Ischaemia, necrosis, perforation — complex gastroschisis")])}
<p>Gastroschisis is called <b>complex</b> when complicated by intestinal atresia, necrosis, perforation or volvulus ${r(2)}. Gut function often takes weeks to recover, so many babies need parenteral nutrition, sometimes for months ${r(3)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "ERNICA 2024", "Other sources", "This guide"], [
["Mode and timing of birth (uncomplicated gastroschisis)", "Suggests vaginal birth at 37+0 to 39+0 weeks; caesarean gives no advantage; preterm delivery not recommended", "Some centres choose caesarean or earlier birth " + LB.exp(), "Obstetric indications only for caesarean " + r(2)],
["Closure", "Bianchi cot-side reduction an option in simple cases; sutureless closure if no general anaesthesia; sutured closure if under anaesthesia", "Merck: primary closure when feasible, silo if not; sutureless repair needs more research " + r(3), "Surgeon's choice " + r(2)],
["Antibiotics", "—", "Merck: broad-spectrum (ampicillin + gentamicin), though skin-flora cover may be enough " + r(3), "Ampicillin + gentamicin " + LB.int()],
["Feeds after repair", "Start within 14 days; before day 7 if aspirates low; use a feeding protocol", "Older practice waited for full bowel function " + LB.exp(), "Protocol-based early feeds " + r(2)]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Condition", "What you see"], [
["Gastroschisis", "Loops of bowel (sometimes stomach, bladder) outside, uncovered, to the right of a normal cord " + r(1) + r(3)],
["Omphalocele", "Sac at the cord base containing bowel ± liver; look for big tongue, large baby and low glucose (Beckwith-Wiedemann), heart murmur, dysmorphism " + r(4) + " " + LB.exp("CLINICAL SIGNS OF BWS NOT IN SOURCE")],
["Ruptured omphalocele", "Sac torn — treat like gastroschisis but expect associated anomalies " + LB.exp()],
["Umbilical hernia", "Soft, skin-covered swelling at the navel that grows with crying and reduces easily " + LB.exp()]
])}
<h3>The typical patient</h3>
<p>A teenage first-time mother delivers at a district hospital with no antenatal scan. The baby has red, swollen loops of bowel outside the abdomen to the right of the cord. Put on sterile gloves, wrap the bowel in warm saline-moistened sterile gauze and cling film (or place the lower body in a sterile bag), keep the baby under a radiant warmer, pass a nasogastric tube on free drainage, start IV fluids and ampicillin + gentamicin, check glucose and temperature often, and phone JDWNRH for transfer ${r(1)} ${r(3)} ${LB.int()}.</p>
<div class="calc" data-calc="neosurgprep" data-a="aw"></div>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Gastroschisis vs ruptured omphalocele", "Cord position: beside the defect in gastroschisis; arising from the defect in omphalocele " + r(3) + r(4)],
["Hernia of the umbilical cord", "Small sac within the cord — do not clamp across it " + LB.exp()],
["Bladder or cloacal exstrophy", "Lower defect with open bladder " + LB.exp()],
["Umbilical granuloma, patent urachus", "No bowel; discharge from the navel " + LB.exp()]
])}` },
{ id: "invest", title: "Investigations", html: `
${tbl(["Test", "Notes"], [
["Antenatal ultrasound", "Gastroschisis: watch intra- and extra-abdominal bowel dilatation (predict complex gastroschisis), bowel wall thickness, stomach dilatation, polyhydramnios, fetal growth and movement " + r(2)],
["Maternal serum AFP", "High in gastroschisis " + r(3)],
["Blood glucose, temperature, electrolytes, FBC, blood culture", "Low glucose in Beckwith-Wiedemann; fluid losses " + LB.exp()],
["Echocardiogram, karyotype, renal ultrasound", "Omphalocele — screen for associated anomalies before repair " + r(4)],
["Abdominal X-ray / contrast", "Atresia or obstruction later " + LB.exp()]
])}` },
{ id: "staging", title: "Simple or complex?", html: `
${tbl(["Category", "Definition / implication"], [
["Simple gastroschisis", "No atresia, necrosis, perforation or volvulus — may suit cot-side (Bianchi) reduction or silo " + r(2)],
["Complex gastroschisis", "Atresia, necrosis, perforation or volvulus — individual plan; primary intestinal repair for atresia if baby and bowel allow " + r(2)],
["Small omphalocele", "Primary closure usually feasible " + r(4)],
["Large / giant omphalocele", "Abdomen too small — silo with staged reduction; outcome tied to defect size " + r(4) + " (escharotic 'paint and wait' treatment " + LB.exp("NOT READ") + ")"]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>1. At birth (any facility)</h3>
<ul>
<li>Cover exposed viscera immediately with a sterile, moist, non-adherent dressing (e.g. petrolatum gauze) covered with plastic wrap ${r(3)}; STG: warm sterile dressing then a plastic bag ${r(1)}.</li>
<li>Prevent hypothermia: radiant warmer, warm room, hat ${r(1)} ${LB.int()}.</li>
<li>Nasogastric tube; IV fluids — losses are often 1.5–2 times normal maintenance; watch perfusion and urine ${r(3)}.</li>
<li>IV antibiotics, e.g. ampicillin + gentamicin ${r(3)} ${r(4)}.</li>
<li>Look at the bowel colour often; a dusky segment may need the defect enlarged by the surgeon ${LB.exp()}.</li>
<li>Refer: delivery or transfer to a centre with NICU and paediatric surgery ${r(3)} ${r(4)}.</li>
</ul>
<h3>2. Surgery</h3>
${tbl(["Option", "When"], [
["Primary closure", "When the bowel fits without high pressure " + r(3) + r(4)],
["Bianchi cot-side reduction without general anaesthesia", "Selected simple gastroschisis with good bowel " + r(2)],
["Silo with staged reduction over days", "Bowel will not fit; can be done without ventilation in stable simple cases, with objective pain/comfort monitoring " + r(2) + r(3)],
["Sutureless (cord or dressing) closure", "Suggested when repair is without general anaesthesia — fewer wound infections and shorter ventilation " + r(2)],
["Mesh (synthetic or biological)", "When the fascia cannot be closed after silo " + r(2)]
])}
<h3>3. Feeding and lines</h3>
<ul>
<li>Start enteral feeds within 14 days of repair (before day 7 if aspirates are low), using a written protocol ${r(2)}.</li>
<li>PICC in an arm vein first, especially with a silo ${r(2)}.</li>
<li>Parenteral nutrition until feeds are established ${r(3)}.</li>
</ul>
<h3>4. Umbilical hernia</h3>
<p>Reassure; most close by themselves in early childhood. Refer if it persists beyond about 4–5 years, is large, or ever becomes tender, firm and irreducible (incarceration — surgical emergency) ${LB.exp("UMBILICAL HERNIA NATURAL HISTORY NOT READ")}. Strapping coins or binders is not useful ${LB.exp()}.</p>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("ampicillin", "Ampicillin")} 500 mg injection — NEML ${r(5)}.</li>
<li>${D("gentamicin", "Gentamicin")} 40 mg/mL — NEML ${r(5)}.</li>
<li>${D("cefotaxime", "Cefotaxime")} 1 g — NEML; alternative ${r(5)} ${LB.loc()}.</li>
<li>${D("sodium-chloride", "Sodium chloride 0.9%")} and ${D("dextrose", "dextrose")} — fluids and dressing moistening ${LB.loc()}.</li>
<li>${D("morphine", "Morphine")} / ${D("paracetamol", "paracetamol")} — analgesia during staged reduction ${r(2)} ${LB.loc()}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Young mothers", "Gastroschisis is commoner with young maternal age " + LB.exp("NOT IN SOURCES READ")],
["Omphalocele with chromosomal anomaly or heart disease", "Counsel parents; outcome depends on the associated condition " + r(4)],
["Beckwith-Wiedemann", "Check glucose often " + LB.exp()],
["Prenatal diagnosis", "Joint fetal-medicine and surgical counselling; psychological support for parents " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Baby with exposed bowel; transfer will take 6 hours", "Cover, warm, NG tube, IV fluids at 1.5–2 times maintenance, ampicillin + gentamicin, check glucose and temperature, keep bowel supported " + r(3) + " " + LB.int()],
["Bowel turns dark during transfer", "Re-position and loosen dressing; call the surgeon — the defect may be strangling the bowel " + LB.exp()],
["Omphalocele with a heart murmur", "Echo before surgery; karyotype " + r(4)],
["Six-month-old with a soft umbilical bulge", "Reassure; review later " + LB.exp()],
["Antenatal scan at 20 weeks shows gastroschisis", "Plan vaginal birth at 37–39 weeks at a centre with neonatal surgery; serial scans " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Hypothermia, dehydration, sepsis ${r(4)}.</li>
<li>Bowel ischaemia, necrosis, atresia, short bowel and intestinal failure ${r(2)} ${r(3)}.</li>
<li>Abdominal compartment syndrome after tight closure ${LB.exp()}.</li>
<li>Long-term dysmotility; feeding problems; ventral hernia after sutureless closure ${r(2)} ${r(3)}.</li>
<li>Line infections with long parenteral nutrition ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up", html: `<ul>
<li>Multidisciplinary follow-up: surgeon, neonatologist, gastroenterologist, dietitian, social worker or psychologist ${r(2)}.</li>
<li>Growth, feeding and development; quality of life (PedsQL) ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Baby born with bowel outside the abdomen", [F.s("Gloves; cover with warm moist sterile dressing + plastic wrap/bag"), F.a, F.s("Warmer; NG tube; IV fluids 1.5–2× maintenance; ampicillin + gentamicin"), F.a, F.d("Sac present?"), F.a, F.b([["No sac", F.s("Gastroschisis — check bowel colour, support it")], ["Sac", F.s("Omphalocele — look for other anomalies; check glucose")]]), F.a, F.e("Transfer to JDWNRH NICU and paediatric surgery")])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Dry gauze on the bowel", "Sticks and damages bowel; heat and water loss", "Moist non-adherent dressing + plastic wrap " + r(3)],
["Normal maintenance fluids", "Large losses from exposed bowel", "Often 1.5–2× maintenance; watch urine " + r(3)],
["Trying to push the bowel back", "Ischaemia, breathing compromise", "Leave reduction to the surgeon " + LB.exp()],
["Treating omphalocele as an isolated problem", "Two-thirds have other anomalies", "Echo, karyotype, glucose " + r(4)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "How do you tell gastroschisis from omphalocele?", "Gastroschisis: no sac, defect beside a normal cord (usually right). Omphalocele: sac at the cord base, cord inserts into the sac.")}
${qa("Intern/MO", "First steps at birth?", "Cover with moist sterile non-adherent dressing and plastic wrap, keep warm, NG tube, IV fluids (often 1.5–2× maintenance), IV antibiotics, refer.")}
${qa("Specialist", "Define complex gastroschisis.", "Gastroschisis with intestinal atresia, necrosis, perforation or volvulus.")}
${qa("Specialist", "ERNICA advice on birth?", "Vaginal birth at 37+0 to 39+0 weeks for uncomplicated gastroschisis.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §12.4.7 Abdominal wall problem.</li>
<li id="ref-2">Mesas Burgos C, Irvine W, Vivanti A et al. European reference network for rare inherited congenital anomalies (ERNICA) evidence based guideline on the management of gastroschisis. Orphanet J Rare Dis. 2024;19:60. doi:10.1186/s13023-024-03062-8.</li>
<li id="ref-3">Belkind-Gerson J. Gastroschisis. Merck Manual Professional Edition; reviewed Aug 2025.</li>
<li id="ref-4">Belkind-Gerson J. Omphalocele. Merck Manual Professional Edition; reviewed Aug 2025.</li>
<li id="ref-5">Ministry of Health, Bhutan. National Essential Medicines List 2025.</li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["Bhutan STG §12.4.7", "<span class='pass'>Checked</span>", "Partly unreadable in the PDF text"],
["ERNICA gastroschisis 2024", "<span class='pass'>Checked</span>", "Full text read"],
["Merck Manual 2025 (both pages)", "<span class='pass'>Checked</span>", "Read"],
["Umbilical hernia, giant omphalocele, positioning", "<span class='unv'>Not read</span>", "Marked"],
["Calculator", "<span class='pass'>Checked</span>", "Transfer checklist"],
["Images", "<span class='pass'>None</span>", "No suitable licensed image"]
], "qc")}` }
]
});
})();
