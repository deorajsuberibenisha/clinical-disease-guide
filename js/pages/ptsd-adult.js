/* Trauma- and stress-related disorders — acute stress reaction, PTSD, complex PTSD, adjustment and grief (adults). Batch E-7, 27 Nov 2026.
   Sources read directly: Bhutan STG 2024 §10.2.6 Trauma and stress related disorders (diazepam 5 mg PRN few days; amitriptyline 12.5–50 mg HS 2–4 weeks;
   psychological first aid, psychoeducation, relaxation, social support, connect to agencies; review 2 weeks; refer suicidal/psychotic/comorbid) and §10.3;
   NEML 2025 §22. NICE NG116 Post-traumatic stress disorder (Dec 2018) — recognition, principles, management of adults (1.1–1.8) read in the browser
   27 Nov 2026. Prins 2016 PC-PTSD-5 (DOI verified). Not read: ICD-11 CDDR text, WHO 2013 stress guidelines / mhGAP 2023, prazosin evidence (marked). */
(function () {
const D = (id, t) => `<a href="#/fdb/${id}">${t}</a>`;
registerPage({
id: "ptsd-adult",
title: "Trauma, stress and PTSD — adults",
subtitle: "After accidents, assault, disasters, sudden deaths and abuse: support everyone, watch who does not recover after a month, screen with PC-PTSD-5, and offer trauma-focused therapy — not debriefing, and not long courses of sedatives",
age: "Adults", specs: ["psych", "medicine", "emerg"],
keywords: ["PTSD", "post-traumatic stress disorder", "complex PTSD", "acute stress reaction", "acute stress disorder", "adjustment disorder", "trauma", "flashbacks", "nightmares", "hypervigilance", "dissociation", "disaster mental health", "psychological first aid", "debriefing", "trauma-focused CBT", "EMDR", "PC-PTSD-5", "domestic violence", "sexual assault", "grief"],
related: ["anxiety-adult", "depression-adult", "substance-use-adult", "alcohol-adult", "trauma-adult", "headinjury-adult"],
updated: "27 Nov 2026", review: "Nov 2027", evidenceTo: "Nov 2026",
sections: [
{ id: "glance", title: "At a glance", html: `
<p class="lead">Most people recover on their own after a frightening event. A minority go on to relive it in nightmares and flashbacks, avoid reminders, stay on guard, and feel numb or ashamed — post-traumatic stress disorder. PTSD is treatable, but people rarely name it: they come with headaches, poor sleep, anger, drinking or body pains.</p>
<div class="glance">
<div><h4>First days</h4><p>Practical help, safety, psychological first aid and social support ${r(1)}. <b>No</b> psychological debriefing ${r(2)}; <b>no</b> drugs to prevent PTSD ${r(2)}.</p></div>
<div><h4>First month</h4><p>Active monitoring for those with symptoms, with contact again within a month ${r(2)}.</p></div>
<div><h4>After a month</h4><p>Symptoms with impairment → trauma-focused CBT (8–12 sessions), or EMDR after 3 months ${r(2)}.</p></div>
<div><h4>Medicines</h4><p>Only if the person prefers: an SSRI or venlafaxine ${r(2)}. STG: diazepam for a few days in acute distress; amitriptyline at night if symptoms persist ${r(1)}.</p></div>
</div>
${box("bt", "Bhutan note", `<p>The STG (§10.2.6) covers reactions to trauma (accidents, assault, disasters, severe illness) <b>and</b> to stressful events such as divorce or the death of a family member. It advises psychological first aid, psychoeducation, relaxation, securing social support and connecting the person to relevant agencies, with diazepam 5 mg as needed for a few days in acute distress and amitriptyline 12.5–50 mg at night when symptoms have lasted a week or more ${r(1)}. Sertraline is not on the NEML 2025; fluoxetine and venlafaxine XR are ${r(4)}. Floods, landslides, road accidents and domestic violence are the commonest traumas seen in practice ${LB.exp()}. Helpline: The PEMA 1098 ${r(5)}.</p>`)}
` },
{ id: "overview", title: "The disease in brief", html: `${tbl(["Condition", "What it is", "Timing"], [
["Acute stress reaction", "Normal, transient distress, numbness, poor sleep, startle after an extreme event", "Hours to days; settles within about a month " + LB.exp()],
["Acute stress disorder", "Clinically important PTSD-like symptoms in the first month", "Within 1 month — NICE: consider trauma-focused CBT " + r(2)],
["PTSD", "Re-experiencing, avoidance, hyperarousal, negative changes in mood and thinking, with impairment", "Beyond 1 month; may start months or years later " + r(2)],
["Complex PTSD", "PTSD plus emotional dysregulation, negative self-perception and relationship difficulties, often after repeated or prolonged trauma (abuse, torture)", r(2)],
["Adjustment disorder / prolonged grief", "Distress after a stressful (not necessarily life-threatening) event, out of proportion and affecting function", LB.exp("ICD-11 — NOT READ")]
])}` },
{ id: "patho", title: "How it makes people ill", html: `
${F.chart("Why the memory stays 'live'", [F.s("Extreme threat: memory stored as fragments of sights, sounds, body feelings"), F.a, F.s("Reminders trigger the fragments as if happening now (flashbacks)"), F.a, F.s("Avoidance and numbing give short relief"), F.a, F.s("Memory is never processed; beliefs of danger, shame, blame persist"), F.a, F.ok("Trauma-focused therapy: process the memory, change the meanings, reduce avoidance")])}
<p>This is why treatments that make people retell the event once, immediately, in a group (debriefing) do not prevent PTSD, and why trauma-focused CBT and EMDR — structured processing of the memory over several sessions — work ${r(2)}.</p>` },
{ id: "conflicts", title: "Where guidance differs", html: `
${tbl(["Topic", "Bhutan STG 2024", "NICE NG116 (2018)", "This guide"], [
["Early medicines", "Diazepam 5 mg PRN for a few days if in acute distress", "Do not offer drugs, including benzodiazepines, to prevent PTSD", "Diazepam only for a night or two of severe distress, not as prevention " + LB.int()],
["Drug for persistent symptoms", "Amitriptyline 12.5–50 mg at night for 2–4 weeks", "Venlafaxine or an SSRI (e.g. sertraline) if the person prefers drugs", "Fluoxetine (NEML SSRI) for PTSD; amitriptyline if sleep is the main problem " + LB.int()],
["Psychological care", "First aid, psychoeducation, relaxation, social support", "Trauma-focused CBT or EMDR delivered by trained therapists", "Everyone gets the STG steps; refer for trauma-focused therapy where available " + LB.int()],
["Who", "Trauma and other major stressors (divorce, bereavement)", "Traumatic events only", "Both are covered here " + LB.int()]
])}` },
{ id: "presentation", title: "Clinical features", html: `
${tbl(["Cluster", "Examples"], [
["Re-experiencing", "Nightmares, flashbacks, intrusive images, distress at reminders " + r(2)],
["Avoidance", "Avoiding places, people, talk or thoughts linked to the event " + r(2)],
["Hyperarousal", "On guard, easily startled, irritability and anger, poor sleep and concentration " + r(1, 2)],
["Mood and thinking", "Numbness, guilt, shame, blame, feeling worthless or defeated " + r(2)],
["Dissociation", "Feeling unreal, detached, 'spacing out', memory gaps " + r(2)],
["Body", "Headaches, aches, palpitations, low mood — STG lists anxiety, low mood, irritability, sleep disturbance, headaches, startle, poor attention " + r(1)]
])}
<p>Ask people with unexplained physical symptoms who keep attending whether they have experienced a traumatic event — give examples, because people may not link it themselves ${r(2)}.</p>
<h3>The typical patient</h3>
<p>A 38-year-old driver survived a bus accident on a mountain road in which two passengers died. Four months later his wife brings him because he shouts at the children, drinks most nights and will not drive. He has nightmares, jumps at horns and feels to blame. PC-PTSD-5 is 5/5. Explain PTSD, check suicide risk and alcohol use, involve his wife, and refer for trauma-focused therapy; offer fluoxetine if he prefers a medicine, and do not withhold treatment because of a pending insurance or court case ${r(2)}.</p>` },
{ id: "ddx", title: "Differential diagnosis", html: `${tbl(["Condition", "Clue"], [
["Depression", "Low mood and loss of pleasure dominate; may coexist " + r(2)],
["Anxiety disorder", "Worry or panic not tied to a specific trauma " + LB.int()],
["Head injury / post-concussion", "Trauma with head impact: headache, poor memory, irritability — examine and image if indicated " + LB.exp()],
["Alcohol or drug use", "Self-medication of nightmares and anger " + r(2)],
["Psychosis", "Hallucinations and delusions not linked to trauma memories — STG: refer " + r(1)],
["Dissociative (conversion) disorder", "Non-epileptic seizures, weakness after stress " + LB.exp()],
["Normal grief", "Sadness and yearning that ease over months " + LB.exp()]
])}` },
{ id: "invest", title: "Assessment", html: `<ul>
<li>Comprehensive: physical, psychological and social needs plus a <b>risk assessment</b> (suicide, harm to others, ongoing danger such as domestic violence) ${r(2)}.</li>
<li>Ask specifically about re-experiencing, avoidance, hyperarousal, dissociation, mood and function ${r(2)}.</li>
<li>Screen with PC-PTSD-5 (below) ${r(3)}; PHQ-9 for depression; AUDIT for alcohol ${LB.int()}.</li>
<li>Look for injuries, head injury and pain that need treatment ${LB.exp()}.</li>
<li>Domestic or sexual violence: safety, documentation, legal and social support ${LB.loc()}.</li>
</ul>
<div class="calc" data-calc="pcptsd5"></div>` },
{ id: "staging", title: "What to offer, by time since the event", html: `${tbl(["Time", "Symptoms", "Offer"], [
["First days", "Distress (normal)", "Safety, practical help, psychological first aid, social support " + r(1) + "; no debriefing " + r(2)],
["Within 1 month", "Subthreshold symptoms", "Active monitoring; follow-up within 1 month " + r(2)],
["Within 1 month", "Acute stress disorder or clinically important symptoms", "Individual trauma-focused CBT " + r(2)],
["1–3 months", "PTSD", "Trauma-focused CBT; EMDR if preferred (non-combat trauma) " + r(2)],
["Over 3 months", "PTSD", "Trauma-focused CBT or EMDR; supported computerised CBT if not severe and no risk " + r(2)],
["Any time", "Disabling symptoms not responding", "Specialist: consider an antipsychotic (risperidone) added to therapy " + r(2)]
])}` },
{ id: "manage", title: "Treatment", html: `
<h3>1. Psychological first aid and support (everyone)</h3>
<ul>
<li>Look, listen, link: ensure safety and basic needs, listen without forcing the story, connect to family, community and agencies ${r(1)} ${LB.exp("WHO PFA 2011 — NOT READ")}.</li>
<li>Psychoeducation: these reactions are common and usually ease; sleep, routine, avoid alcohol ${r(1)}.</li>
<li>Relaxation and slow breathing; secure social support ${r(1)}.</li>
<li>Avoid noisy, restrictive settings and restraint where possible — they can re-trigger trauma ${r(2)}.</li>
</ul>
<h3>2. Trauma-focused psychological therapy (main treatment)</h3>
<ul>
<li><b>Trauma-focused CBT</b> (cognitive processing therapy, cognitive therapy for PTSD, narrative exposure therapy, prolonged exposure): usually 8–12 sessions, more after multiple traumas ${r(2)}.</li>
<li><b>EMDR</b>: offer for non-combat trauma presenting after 3 months; 8–12 sessions ${r(2)}.</li>
<li>CBT for sleep or anger if the person cannot engage in trauma-focused work ${r(2)}.</li>
</ul>
<h3>3. Medicines</h3>
${tbl(["Drug", "Use", "Notes"], [
["Diazepam 5 mg (NEML)", "As needed for a few days in acute distress " + r(1), "Not to prevent PTSD " + r(2) + "; not long term"],
["Amitriptyline 25 mg (NEML)", "12.5–50 mg at night for 2–4 weeks if symptoms persist a week or more " + r(1), "Small supplies — overdose risk"],
["Fluoxetine 20 mg (NEML)", "SSRI if the person prefers drug treatment " + r(2), "Review regularly; under 30: weekly suicide checks for a month " + LB.int()],
["Venlafaxine XR 75 mg (NEML)", "Alternative " + r(2, 4), "Specialist"],
["Risperidone 2 mg (NEML)", "Add-on for disabling hyperarousal or psychotic symptoms, specialist only " + r(2), "Monitor weight, glucose, movement disorders"],
["Prazosin", "Sometimes used for nightmares " + LB.exp("NOT READ — NOT ON NEML"), "Not recommended by NICE NG116"]
])}
<h3>4. Comorbidity</h3>
<ul>
<li>PTSD with depression: usually treat PTSD first; treat depression first if it is severe or there is risk ${r(2)}.</li>
<li>Do not exclude people because of alcohol or drug use — address it alongside ${r(2)}.</li>
<li>Complex PTSD: more time to build trust, attend to safety and housing, plan longer support ${r(2)}.</li>
</ul>` },
{ id: "drugs", title: "Medicines", html: `<ul>
<li>${D("fluoxetine", "Fluoxetine")} 20 mg — NEML ${r(4)}.</li>
<li>${D("amitriptyline", "Amitriptyline")} 25 mg — NEML ${r(4)}.</li>
<li>${D("venlafaxine", "Venlafaxine")} XR 75 mg — NEML ${r(4)}.</li>
<li>${D("diazepam", "Diazepam")} 5 mg — NEML ${r(4)}.</li>
<li>${D("risperidone", "Risperidone")} 2 mg — NEML ${r(4)}.</li>
<li>${D("sertraline", "Sertraline")}, ${D("paroxetine", "paroxetine")}, prazosin — not on NEML ${r(4)}.</li>
</ul>` },
{ id: "populations", title: "Special situations", html: `${tbl(["Group", "What changes"], [
["Disasters (floods, landslides, fires)", "Coordinated psychosocial response: practical help, community support, access to screening around 1 month for high-risk people " + r(2)],
["Children in the emergency room after trauma", "Tell parents the normal reactions and to return if symptoms last beyond a month — see child services " + r(2)],
["Families", "More than one member may have PTSD; support carers " + r(2)],
["Survivors of domestic or sexual violence", "Safety planning and referral to protection services; choice of therapist gender " + r(2) + " " + LB.loc()],
["Court or compensation cases", "Do not delay treatment solely because of legal proceedings " + r(2)],
["Health workers", "Repeated work-related trauma, including remote exposure, counts " + r(2)]
])}` },
{ id: "scenarios", title: "Clinical scenarios", html: `${tbl(["Scenario", "What to do"], [
["Village hit by a landslide yesterday; team asks to run group 'debriefing'", "No debriefing; psychological first aid, practical help, list people to follow up at 1 month " + r(2)],
["Woman, 2 weeks after rape, nightmares and panic", "Safety, medical and legal care; trauma-focused CBT within the month is an option; avoid routine benzodiazepines " + r(2)],
["Monk with headaches and poor sleep for a year; lost family in a fire 3 years ago", "Ask about the trauma and PTSD symptoms; PC-PTSD-5; refer for therapy " + r(2)],
["PTSD with active suicidal plan", "Emergency — psychiatric emergency pathway; safety plan; refer " + r(1)],
["Man with PTSD drinking heavily", "Treat both; do not refuse PTSD care because of drinking " + r(2)]
])}` },
{ id: "complications", title: "Complications", html: `<ul>
<li>Depression and suicide ${r(1, 2)}.</li>
<li>Alcohol and drug misuse ${r(2)}.</li>
<li>Relationship breakdown, violence, job loss ${r(2)}.</li>
<li>Chronic pain and repeated attendance with physical symptoms ${r(2)}.</li>
</ul>` },
{ id: "followup", title: "Follow-up and advice", html: `<ul>
<li>STG: review after 2 weeks; increase medicine as needed; review again after 1–2 weeks; follow up until symptom-free ${r(1)}.</li>
<li>Follow up people who miss appointments — avoidance is part of the illness ${r(2)}.</li>
<li><b>Refer:</b> suicidal ideas or psychotic symptoms; other coexisting mental illness (STG) ${r(1)}; trauma-focused therapy ${r(2)}.</li>
<li>Booster sessions around anniversaries of the event ${r(2)}.</li>
</ul>` },
{ id: "images", title: "Images", html: `` },
{ id: "flows", title: "Flowchart", html: `${F.chart("After a traumatic event", [F.s("Safety, practical help, psychological first aid (no debriefing)"), F.a, F.d("Symptoms at follow-up (within 1 month)?"), F.a, F.b([["None / mild", F.ok("Reassure; open door")], ["Subthreshold", F.s("Active monitoring; see again within 1 month")], ["Clinically important", F.s("Trauma-focused CBT")]]), F.a, F.d("PTSD beyond 1 month?"), F.a, F.b([["Yes", F.s("Trauma-focused CBT or EMDR; SSRI if preferred")], ["Risk / psychosis", F.e("Refer urgently")]])])}` },
{ id: "pearls", title: "Pearls and pitfalls", html: `${tbl(["Mistake", "Why it matters", "Better"], [
["Group debriefing after disasters", "Does not prevent PTSD and may harm", "Psychological first aid and follow-up " + r(2)],
["Benzodiazepines to 'prevent' PTSD", "No benefit; dependence", "Not offered " + r(2)],
["Not asking about trauma", "Patients do not volunteer it", "Ask with examples " + r(2)],
["Forcing the story at first contact", "Re-traumatising", "Listen; let the person lead"],
["Refusing care while drinking", "Excludes those most at risk", "Treat both " + r(2)]
])}` },
{ id: "qbank", title: "Question bank", html: `
${qa("Intern/MO", "Name the five PC-PTSD-5 symptoms.", "Nightmares or unwanted thoughts; avoidance; constantly on guard or easily startled; numb or detached; guilt or blame.")}
${qa("Intern/MO", "Should psychological debriefing be offered after a disaster?", "No — NICE advises against it for prevention or treatment of PTSD.")}
${qa("Specialist", "When does NICE offer EMDR?", "Adults with PTSD presenting more than 3 months after a non-combat trauma (consider at 1–3 months if preferred).")}
${qa("Specialist", "PTSD with depression: which first?", "Usually PTSD; depression first if severe enough to block therapy or if there is risk of harm.")}
` },
{ id: "refs", title: "References", html: `<ol>
<li id="ref-1">Ministry of Health, Bhutan. Standard Treatment Guidelines 2024, §10.2.6 Trauma and stress related disorders; §10.3 Psychiatric emergency.</li>
<li id="ref-2">National Institute for Health and Care Excellence. Post-traumatic stress disorder. NICE guideline NG116, December 2018. <a href="https://www.nice.org.uk/guidance/ng116" target="_blank" rel="noopener">nice.org.uk/guidance/ng116</a></li>
<li id="ref-3">Prins A, Bovin MJ, Smolenski DJ, et al. The Primary Care PTSD Screen for DSM-5 (PC-PTSD-5): development and evaluation within a veteran primary care sample. J Gen Intern Med 2016;31:1206–11. <a href="https://doi.org/10.1007/s11606-016-3703-5" target="_blank" rel="noopener">doi:10.1007/s11606-016-3703-5</a></li>
<li id="ref-4">Ministry of Health, Bhutan. National Essential Medicines List 2025, §22.</li>
<li id="ref-5">Dema C. Free treatment at JDWNRH (OST and The PEMA helpline 1098). The Bhutanese, 9 May 2026. <a href="https://thebhutanese.bt/?p=44266" target="_blank" rel="noopener">thebhutanese.bt</a></li>
</ol>` },
{ id: "qc", title: "Quality check", html: `${tbl(["Check", "Result", "Note"], [
["STG §10.2.6", "<span class='pass'>Checked</span>", "Read from the STG text"],
["NICE NG116 adult recommendations", "<span class='pass'>Checked</span>", "Read in the browser"],
["PC-PTSD-5 items and cut-points", "<span class='pass'>Checked</span>", "Prins 2016"],
["ICD-11 adjustment/grief, WHO PFA, prazosin", "<span class='unv'>Not read</span>", "Marked"],
["Images", "<span class='pass'>None</span>", "Not needed"]
], "qc")}` }
]
});
})();
