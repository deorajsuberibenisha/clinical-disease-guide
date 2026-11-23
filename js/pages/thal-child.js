/* Thalassaemia and haemoglobinopathies (TIF 2021) */
registerPage({
id: "thal-child",
title: "Thalassaemia & Haemoglobinopathies",
subtitle: "Microcytic anaemia not responding to iron, with family history: confirm by Hb electrophoresis, transfuse regularly in thalassaemia major, chelate iron, and offer carrier screening",
age: "Children & adults", specs: ["paeds", "onc", "medicine"],
keywords: ["thalassaemia", "beta thalassaemia major", "thalassaemia trait", "HbE", "Hb electrophoresis", "transfusion", "iron overload", "chelation", "Mentzer index", "carrier screening", "sickle cell"],
related: ["anaemia-child", "anaemia-adult", "anaemia-preg", "neojaundice-child"],
updated: "23 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Thalassaemia trait is often mistaken for iron deficiency. Thalassaemia major needs lifelong transfusion and chelation; prevention is through carrier screening.</p>
<div class="glance">
<div><h4>Suspect</h4><p>Low MCV with normal ferritin; Mentzer index (MCV/RBC) under 13.</p></div>
<div><h4>Confirm</h4><p>Hb electrophoresis/HPLC.</p></div>
<div><h4>Major</h4><p>Transfuse to pre-Hb 9.5–10.5 every 2–5 weeks.</p></div>
<div><h4>Chelate</h4><p>Ferritin over 1000 — ${dr("desferrioxamine", "chelation")} (specialist).</p></div>
</div>
${box("bt", "Bhutan note", `<p>Hb electrophoresis/HPLC is available at JDWNRH. Iron chelators are not on the NEML — patients are managed through JDWNRH with special supply. Do not give repeated iron to children with microcytosis and normal ferritin. ${LB.bt()}</p>`)}
` },
{ id: "overview", title: "Types", html: `${tbl(["Type", "Features"], [["Beta-thal trait", "Mild/no anaemia, low MCV, HbA2 over 3.5%"], ["Beta-thal major", "Severe anaemia from 6–24 months, transfusion-dependent"], ["Thal intermedia / HbE-beta", "Variable, may need intermittent transfusion"], ["Alpha-thal", "Trait silent; HbH disease moderate anaemia"]])}${r(1)}` },
{ id: "patho", title: "Pathophysiology", html: `${F.chart("Beta-thalassaemia", [F.s("Reduced beta-globin"), F.a, F.s("Ineffective erythropoiesis, haemolysis"), F.e("Anaemia, marrow expansion, iron overload")])}` },
{ id: "conflicts", title: "Where guidance differs", html: `${tbl(["Topic", "Common practice", "TIF 2021", "This guide"], [["Pre-transfusion Hb", "Transfuse when symptomatic", "Keep 9.5–10.5 g/dL", "TIF " + LB.loc()]])}` },
{ id: "presentation", title: "Clinical features", html: `<ul><li>Major: pallor, jaundice, hepatosplenomegaly, poor growth, thalassaemic facies.</li><li>Trait: none; found on blood count.</li></ul><h3>The typical patient</h3><p>A 14-month-old (9 kg) in Samtse is pale, with a large spleen; Hb 5.8, MCV 58, ferritin normal; HPLC shows HbF 90%. <b>Beta-thalassaemia major</b>: transfuse 15–20 mL/kg packed cells, start regular transfusion programme, folic acid, hepatitis B vaccine, family screening.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [["Iron deficiency", "Low ferritin, high RDW, Mentzer over 13"], ["Anaemia of chronic disease", "Normal/high ferritin, inflammation"], ["Lead poisoning", "Basophilic stippling"]])}` },
{ id: "invest", title: "Investigations", html: `<p>FBC, film, ferritin, Hb HPLC/electrophoresis, reticulocytes, bilirubin; before first transfusion: extended red cell phenotype; ongoing: ferritin 3-monthly, LFT, viral serology.</p>` },
{ id: "staging", title: "Transfusion tool", html: `<div class="calc" data-calc="thaltransfusion"></div>` },
{ id: "manage", title: "Management", html: `<ul><li>Regular transfusion (pre-Hb 9.5–10.5, post 13–14).</li><li>Iron chelation from ferritin over 1000 µg/L.</li><li>Folic acid 5 mg daily (not on iron).</li><li>Splenectomy for hypersplenism (vaccinate first, penicillin prophylaxis).</li><li>Stem cell transplant is curative (abroad).</li><li>Genetic counselling; carrier testing of family and partners.</li></ul>` },
{ id: "drugs", title: "Medicines", html: `${tbl(["Drug", "Dose", "Notes"], [[dr("folic_acid"), "5 mg daily", "All"], [dr("desferrioxamine"), "Specialist", "Iron overload"], [dr("hepb_vaccine"), "Standard", "Transfusion"]])}` },
{ id: "populations", title: "Pregnancy", html: `<p>Thal trait: avoid unnecessary iron; partner testing; prenatal diagnosis if both carriers.</p>` },
{ id: "scenarios", title: "Hard situations", html: `${tbl(["Situation", "What to do"], [["Hb 4 with heart failure", "Small aliquots 5 mL/kg slowly with furosemide"]])}` },
{ id: "complications", title: "Complications", html: `<p>Iron overload (heart, liver, endocrine), transfusion infections, alloimmunisation, osteoporosis, growth delay.</p>` },
{ id: "followup", title: "Follow-up", html: `<p>Growth and puberty, ferritin, cardiac and endocrine checks yearly.</p>` },
{ id: "images", title: "Images", html: `${fig({ title: "Beta-thalassaemia blood film", src: "images/bthal-smear.jpg", mod: "Peripheral blood film", ctx: "Beta-thalassaemia", loc: "Blood", find: "Microcytic hypochromic cells, target cells, poikilocytes", interp: "Confirm with Hb HPLC", by: "Dr Graham Beards", page: "https://commons.wikimedia.org/wiki/File:B-Thal.jpg", lic: "CC BY-SA 4.0" })}` },
{ id: "flows", title: "Flowchart", html: `${F.chart("Microcytic anaemia", [F.s("Ferritin"), F.a, F.d("Low?"), F.a, F.b([["Yes", F.ok("Iron deficiency — treat")], ["No", F.e("Hb HPLC for thalassaemia")]])])}` },
{ id: "pearls", title: "Pearls", html: `${tbl(["Mistake", "Why harmful", "Prevention"], [["Repeated iron for trait", "Iron overload", "Check ferritin/HPLC"]])}` },
{ id: "qbank", title: "Question bank", html: `${qa("Intern/MO", "When to start chelation?", "Ferritin over 1000 µg/L or after 10–20 transfusions.")}` },
{ id: "refs", title: "References", html: `<ol><li id="ref-1">Thalassaemia International Federation. Guidelines for the management of transfusion dependent thalassaemia, 4th ed. 2021. <a href="https://thalassaemia.org.cy/publications/tif-publications/guidelines-for-the-management-of-transfusion-dependent-thalassaemia-4th-edition-2021/" target="_blank" rel="noopener">thalassaemia.org.cy</a></li></ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [["NEML chelators", "<span class='flag'>Not listed</span>", "Noted"]], "qc")}` }
]
});
