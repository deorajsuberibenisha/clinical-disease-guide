/* Clinical Disease Guide — app shell: routing, search, contents, drug cards, calculators, PDF */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const view = $("#view");
  const PAGES = GUIDE.pages, BY = Object.fromEntries(PAGES.map(p => [p.id, p]));
  const SPEC_BY = Object.fromEntries(SPECS.map(s => [s[0], s]));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const tile = (id, ic) => `<span class="ic-tile" style="--h:${SPEC_HUE[id] ?? 200}">${IC2[ic] || ""}</span>`;
  const strip = h => h.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();

  const root = document.documentElement;

  /* ---------- search index: pages, sections, drugs ---------- */
  const INDEX = [];
  PAGES.forEach(p => {
    INDEX.push({ kind: "Disease", title: p.title, sub: p.subtitle, text: (p.keywords || []).join(" ") + " " + p.title, href: `#/d/${p.id}`, w: 3 });
    p.sections.forEach(s => {
      INDEX.push({ kind: "Section", title: `${s.title}`, sub: p.title, text: strip(s.html), href: `#/d/${p.id}/${s.id}`, w: 1 });
    });
  });
  (window.FORMULARY || []).forEach(d => INDEX.push({ kind: "Formulary", title: d.n.charAt(0) + d.n.slice(1).toLowerCase(), sub: d.g, text: d.n + " " + d.g + " " + (d.f25 || []).map(x => x.i).join(" "), href: `#/drug/${encodeURIComponent(d.k)}`, w: 1.5 }));
  Object.entries(GUIDE.drugs).forEach(([id, d]) => INDEX.push({ kind: "Drug", title: d.name, sub: d.cls, text: strip(Object.values(d).join(" ")), href: `drug:${id}`, w: 2 }));

  const qEl = $("#q"), resEl = $("#results");
  let active = -1;
  function search(q) {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    const out = [];
    INDEX.forEach(it => {
      const t = it.title.toLowerCase(), body = it.text.toLowerCase();
      let score = 0;
      for (const w of words) {
        if (t.includes(w)) score += 10 * it.w;
        else if (body.includes(w)) score += 1 * it.w;
        else return;
      }
      let snip = "";
      const i = body.indexOf(words[0]);
      if (i > -1 && it.kind === "Section") snip = it.text.slice(Math.max(0, i - 50), i + 90);
      out.push({ ...it, score, snip });
    });
    return out.sort((a, b) => b.score - a.score).slice(0, 25);
  }
  const hi = (s, q) => { let h = esc(s); q.split(/\s+/).filter(w => w.length > 1).forEach(w => { h = h.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>"); }); return h; };
  function showResults() {
    const q = qEl.value.trim();
    if (!q) { resEl.hidden = true; return; }
    const res = search(q);
    active = -1;
    resEl.innerHTML = res.length ? res.map((x, i) => `<a class="res" data-i="${i}" href="${x.href.startsWith("drug:") ? "#" : x.href}" ${x.href.startsWith("drug:") ? `data-drugopen="${x.href.slice(5)}"` : ""}><span class="kind">${x.kind}</span><b>${hi(x.title, q)}</b><small>${esc(x.sub || "")}${x.snip ? " — …" + hi(x.snip, q) + "…" : ""}</small></a>`).join("")
      : `<div class="res-empty">Nothing found for “${esc(q)}”. Only AKI and CKD are written so far.</div>`;
    resEl.hidden = false;
  }
  qEl.addEventListener("input", showResults);
  qEl.addEventListener("focus", showResults);
  qEl.addEventListener("keydown", e => {
    const items = $$(".res", resEl);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault(); active = (active + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
      items.forEach((x, i) => x.classList.toggle("on", i === active)); items[active]?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") { (items[active] || items[0])?.click(); }
    else if (e.key === "Escape") { resEl.hidden = true; qEl.blur(); }
  });
  resEl.addEventListener("click", e => {
    const a = e.target.closest(".res"); if (!a) return;
    if (a.dataset.drugopen) { e.preventDefault(); openDrug(a.dataset.drugopen); }
    resEl.hidden = true; qEl.blur();
  });
  document.addEventListener("click", e => { if (!e.target.closest(".top-search")) resEl.hidden = true; });

  /* ---------- drug sheet ---------- */
  const wrap = $("#sheetWrap"), body = $("#sheetBody");
  function openDrug(id) {
    const d = GUIDE.drugs[id];
    if (!d) return;
    const row = (k, v) => v ? `<h3>${k}</h3>${v}` : "";
    body.innerHTML = `<h2 id="sheetTitle">${d.name}</h2><div class="cls">${d.cls}${d.brands ? ` · <i>Brands seen in Bhutan/India: ${d.brands}</i>` : ""}</div>
      <span class="avail ${d.bt && d.bt.startsWith("Not") ? "no" : ""}">Bhutan NEML 2025: ${d.bt || "not checked"}</span>
      ${row("How it works", d.moa)}${row("Indications", d.ind)}${row("Do not use / caution", d.ci)}
      ${row("Adult dose", d.adult)}${row("Child dose", d.child)}${row("Neonatal dose", d.neo)}
      ${row("Pregnancy", d.preg)}${row("Breastfeeding", d.bf)}${row("Kidney impairment / dialysis", d.renal)}${row("Liver impairment", d.hep)}
      ${row("Older adults", d.elderly)}${row("Immunocompromised & other situations", d.other)}
      ${row("Important interactions", d.inter)}${row("Adverse effects", d.ae)}${row("Monitoring", d.mon)}
      ${row("Overdose and toxicity", d.tox)}${row("Sources checked", d.src)}
      ${(() => { const m = formFor(d.name); return m ? `<p><a class="btn" href="#/drug/${encodeURIComponent(m.k)}" data-close>Bhutan formulary monograph →</a></p>` : ""; })()}
      <p class="foot">Check every dose against your current local formulary before prescribing.</p>`;
    wrap.hidden = false; document.body.style.overflow = "hidden";
    $(".sheet", wrap).scrollTop = 0; $(".sheet-x", wrap).focus();
  }
  const closeDrug = () => { wrap.hidden = true; document.body.style.overflow = ""; };
  wrap.addEventListener("click", e => { if (e.target.hasAttribute("data-close")) closeDrug(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !wrap.hidden) closeDrug(); });
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-drug]"); if (b) { e.preventDefault(); openDrug(b.dataset.drug); return; }
    const j = e.target.closest("[data-to]"); if (j) { e.preventDefault(); const t = document.getElementById(j.dataset.to); if (t) { t.scrollIntoView({ behavior: "smooth", block: "start" }); if (t.tagName === "DETAILS") t.open = true; } }
  });

  /* ---------- floating contents button ---------- */
  const dock = $("#tocDock"), fab = $("#tocFab"), pop = $("#tocPop"), list = $("#tocList"), fabN = $("#tocFabN");
  let openedAt = 0;
  function openToc() {
    pop.hidden = false; fab.setAttribute("aria-expanded", "true"); fab.setAttribute("aria-label", "Close contents");
    openedAt = scrollY;
    const on = $("button.on", list);   // bring the current section into view inside the list only (never move the page)
    if (on) list.scrollTop = on.offsetTop - list.offsetTop - list.clientHeight / 2 + on.offsetHeight / 2;
  }
  function closeToc() {
    if (pop.hidden) return;
    pop.hidden = true; fab.setAttribute("aria-expanded", "false"); fab.setAttribute("aria-label", "Open contents");
  }
  let lastToggle = 0;   // ignore a duplicate tap (touch + mouse) arriving within 350 ms
  fab.addEventListener("click", e => {
    e.stopPropagation();
    const now = Date.now(); if (now - lastToggle < 350) return; lastToggle = now;
    pop.hidden ? openToc() : closeToc();
  });
  list.addEventListener("click", e => {
    const b = e.target.closest("button[data-sec]"); if (!b) return;
    closeToc();
    const t = document.getElementById(b.dataset.sec);
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#tocTop").addEventListener("click", () => { closeToc(); scrollTo({ top: 0, behavior: "smooth" }); });
  document.addEventListener("click", e => { if (!e.target.closest("#tocDock")) closeToc(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeToc(); });
  addEventListener("scroll", () => { if (!pop.hidden && Math.abs(scrollY - openedAt) > 40) closeToc(); }, { passive: true });
  function setupToc(p) {
    list.innerHTML = p.sections.map((s, i) => `<li><button type="button" data-sec="${s.id}">${s.title}</button></li>`).join("");
    fabN.textContent = "1"; dock.hidden = false; closeToc();
  }
  function markToc(id) {
    $$("button", list).forEach((b, i) => { const on = b.dataset.sec === id; b.classList.toggle("on", on); if (on) fabN.textContent = i + 1; });
  }

  /* ---------- views ---------- */
  const countFor = id => PAGES.filter(p => p.specs.includes(id)).length;
  const dcard = p => `<a class="dcard" href="#/d/${p.id}">${tile(p.specs[0], SPEC_BY[p.specs[0]][2])}<div><b>${p.title}</b><small>${p.subtitle}</small><span class="tag ${p.age === "Adults" ? "" : "child"}">${p.age}</span></div></a>`;

  /* ---------- Home & departments ----------
     A disease can have several pages (adults / children / pregnancy).
     Children's and newborn pages live ONLY under Paediatrics (and its NICU/PICU/neonatal areas). */
  const baseId = id => id.replace(/-(adult|child|pregnancy)$/, "");
  const variant = p => /-child$/.test(p.id) ? "Children" : /-pregnancy$/.test(p.id) ? "Pregnancy" : "Adults";
  const isChild = p => variant(p) === "Children";
  const vOrder = { Adults: 0, Children: 1, Pregnancy: 2 };
  const PAED = new Set(["paeds", "neo", "nicu", "picu"]);
  const chaptersIn = id => PAGES.filter(p => p.specs.includes(id) || (id === "paeds" && isChild(p))).filter(p => PAED.has(id) ? isChild(p) : !isChild(p));
  function groupsFor(list) {
    const g = new Map();
    list.forEach(p => { const k = baseId(p.id); if (!g.has(k)) g.set(k, []); g.get(k).push(p); });
    return [...g.entries()].map(([k, ps]) => {
      ps.sort((x, y) => vOrder[variant(x)] - vOrder[variant(y)]);
      const all = PAGES.filter(p => baseId(p.id) === k), lead = all.find(p => variant(p) === "Adults") || all[0];
      return { k, name: lead.title.split(" — ")[0].replace(/ in Pregnancy$/, ""), sub: ps[0].subtitle, pages: ps };
    });
  }
  const DEPTS = [
    ["medicine", "Adult internal medicine"], ["surg", "General & emergency surgery"], ["obg", "Pregnancy, birth & women's health"],
    ["paeds", "Newborns, children & adolescents"], ["psych", "Mental health"], ["ortho", "Bones, joints & trauma"],
    ["eye", "Eyes & vision"], ["ent", "Ear, nose & throat"], ["derm", "Skin & sexual health"], ["dental", "Teeth & mouth"]];
  const GROUPS = [
    ["Medical sub-specialties", "Adult pages, filed by organ system", ["cardio", "resp", "neph", "gi", "neuro", "endo", "rheum", "id", "onc"]],
    ["Paediatric areas", "Newborn and intensive care", ["neo", "nicu", "picu"]],
    ["Surgical sub-specialties", "", ["nsurg", "uro"]],
    ["Other services", "", ["emerg", "ph", "rehab", "pall"]]];
  const SYS = { neph: "Kidney", uro: "Kidney & urinary tract", cardio: "Heart & circulation", resp: "Lungs & breathing", endo: "Diabetes & endocrine", id: "Infections", gi: "Gut & liver", neuro: "Brain & nerves", onc: "Cancer & blood", rheum: "Joints & autoimmune" };
  const sq = (id, ic, cls = "") => `<span class="sq ${cls}" style="--h:${SPEC_HUE[id] ?? 200}">${IC2[ic] || ""}</span>`;
  const nDis = id => groupsFor(chaptersIn(id)).length;
  const names = id => groupsFor(chaptersIn(id)).map(x => x.name);

  const short = s => s[1].split(" · ")[0];
  const QUICK = [["#/drugs", "drugs", 355, "Drug library", () => (window.FORMULARY || []).length + " medicines · Bhutan levels"],
    ["#/calcs", "calc", 150, "Calculators", () => calcIndex().length + " scores and dose tools"],
    ["#/az", "guide", 215, "Diseases A–Z", () => groupsFor(PAGES).length + " diseases · " + PAGES.length + " pages"],
    ["#/spec/emerg", "ambul", 8, "Emergency", () => "Resuscitation and acute care"]];
  function home() {
    document.title = "Clinical Disease Guide";
    const tileOf = s => { const n = nDis(s[0]); return `<a class="st${n ? "" : " empty"}" href="#/spec/${s[0]}" style="--h:${SPEC_HUE[s[0]] ?? 200}" title="${esc(s[1])}">
      <span class="st-ic">${IC2[s[2]] || ""}</span><b>${esc(short(s))}</b>${n ? `<em>${n}</em>` : `<i>Soon</i>`}</a>`; };
    view.innerHTML = `<div class="wrap home2">
      <section class="hero2">
        <div class="hero2-t"><h1>Clinical Disease Guide</h1>
        <p>Referenced disease chapters for clinicians and students in Bhutan and South Asia: Bhutan's STG and NEML read side by side with Indian and international guidelines, with separate adult, child and pregnancy pages where care differs.</p></div>
      </section>
      <div class="quick">${QUICK.map(([h, ic, hue, t, sub]) => `<a class="qk" href="${h}" style="--h:${hue}"><span class="qk-ic">${IC2[ic]}</span><span><b>${t}</b><small>${sub()}</small></span></a>`).join("")}</div>
      <div class="sec-h"><h2>Clinical specialties</h2><small>Numbers show diseases written so far</small></div>
      <div class="spec-grid">${SPECS.map(tileOf).join("")}</div>
      <p class="foot">For qualified health professionals and students. This guide supports clinical judgement; it does not replace it. Check doses against your current local formulary.</p></div>`;
  }

  /* every calculator used in any chapter, found by scanning the chapter HTML */
  let CIDX;
  function calcIndex() {
    if (CIDX) return CIDX;
    const m = new Map();
    PAGES.forEach(p => p.sections.forEach(s => { for (const x of s.html.matchAll(/data-calc="([\w-]+)"/g)) { if (!m.has(x[1])) m.set(x[1], []); if (!m.get(x[1]).some(u => u[0] === p)) m.get(x[1]).push([p, s]); } }));
    CIDX = [...m.entries()].map(([k, uses]) => {
      const el = document.createElement("div");
      try { (CALCS[k] || (window.EXTRA_CALCS || {})[k])?.(el, CALC_UTIL); } catch (e) {}
      const title = (el.querySelector("h4")?.textContent || k).trim();
      return { k, title, uses, spec: uses[0][0].specs.find(x => SYS[x]) || uses[0][0].specs[0] };
    }).sort((a, b) => a.title.localeCompare(b.title));
    return CIDX;
  }
  function calcsPage() {
    document.title = "Calculators · Clinical Disease Guide";
    const by = new Map();
    calcIndex().forEach(c => { const g = SYS[c.spec] || SPEC_BY[c.spec]?.[1] || "Other"; if (!by.has(g)) by.set(g, { id: c.spec, list: [] }); by.get(g).list.push(c); });
    const nm = p => p.title.split(" — ")[0] + (p.age === "Adults" ? "" : " · " + p.age);
    view.innerHTML = `<div class="wrap"><div class="crumb"><a href="#/">Home</a> › Calculators</div>
      <div class="spec-head" style="--h:150"><span class="sq xl" style="--h:150">${IC2.calc}</span><div><h1>Calculators and scores</h1><small>${calcIndex().length} working tools. Each opens here and links to the chapter that explains how to use the result.</small></div></div>
      ${[...by.entries()].map(([g, o]) => `<section class="sys"><h2 class="sys-h">${SPEC_BY[o.id] ? sq(o.id, SPEC_BY[o.id][2]) : ""}<span>${esc(g)}</span></h2>
        ${o.list.map(c => `<details class="cx"><summary><b>${esc(c.title)}</b><small>${c.uses.map(([p]) => esc(nm(p))).join(" · ")}</small></summary>
          <div class="calc" data-calc="${c.k}"></div><p class="cx-links">${c.uses.map(([p, s]) => `<a href="#/d/${p.id}/${s.id}">Read it in ${esc(nm(p))} →</a>`).join("")}</p></details>`).join("")}</section>`).join("")}</div>`;
    initCalcs();
  }
  function az() {
    document.title = "Diseases A–Z · Clinical Disease Guide";
    const gs = groupsFor(PAGES).sort((a, b) => a.name.localeCompare(b.name));
    let L = "";
    view.innerHTML = `<div class="wrap"><div class="crumb"><a href="#/">Home</a> › Diseases A–Z</div>
      <div class="spec-head" style="--h:215"><span class="sq xl" style="--h:215">${IC2.guide}</span><div><h1>Diseases A–Z</h1><small>${gs.length} diseases · ${PAGES.length} pages</small></div></div>
      <div class="az">${gs.map(g => { const l = g.name[0].toUpperCase(), h = l !== L ? `<h2 class="az-l">${l}</h2>` : ""; L = l;
        const all = PAGES.filter(p => baseId(p.id) === g.k).sort((x, y) => vOrder[variant(x)] - vOrder[variant(y)]);
        return h + `<div class="az-row"><b>${esc(g.name)}</b><span>${all.map(p => `<a class="chip-l ${variant(p).toLowerCase()}" href="#/d/${p.id}">${variant(p)}</a>`).join("")}</span></div>`; }).join("")}</div></div>`;
  }

  function spec(id) {
    const s = SPEC_BY[id]; if (!s) return home();
    const list = chaptersIn(id), groups = groupsFor(list);
    document.title = s[1] + " · Clinical Disease Guide";
    const nm = p => variant(p) === "Pregnancy" ? p.title : p.title.split(" — ")[0];
    const card = p => `<a class="dz" href="#/d/${p.id}"><div class="dz-t"><h3>${esc(nm(p))}</h3><p>${p.subtitle}</p></div><span class="dz-go" aria-hidden="true">›</span></a>`;
    let body;
    if (!list.length) body = `<div class="note">No chapters in ${esc(s[1])} yet. New diseases are added in order of how common they are in Bhutan; next come acute coronary syndromes, liver cirrhosis, stroke and COPD.</div>`;
    else if (id === "medicine" || id === "paeds") {
      const bySys = new Map();
      list.forEach(p => { const k = p.specs.find(x => SYS[x]) || "other"; if (!bySys.has(k)) bySys.set(k, []); bySys.get(k).push(p); });
      body = [...bySys.entries()].map(([k, ps]) => `<section class="sys"><h2 class="sys-h">${SPEC_BY[k] ? sq(k, SPEC_BY[k][2]) : ""}<span>${SYS[k] || "Other"}</span></h2><div class="dz-list">${ps.map(card).join("")}</div></section>`).join("");
    } else body = `<div class="dz-list">${list.map(card).join("")}</div>`;
    view.innerHTML = `<div class="wrap"><div class="crumb"><a href="#/">Home</a> › ${esc(s[1])}</div>
      <div class="spec-head" style="--h:${SPEC_HUE[id] ?? 200}">${sq(id, s[2], "xl")}<div><h1>${esc(s[1])}</h1><small>${list.length ? `${list.length} chapter${list.length === 1 ? "" : "s"}` : "Chapters in preparation"}</small></div></div>
      ${body}</div>`;
  }

  let spy;
  function page(id, anchor) {
    const p = BY[id]; if (!p) return home();
    document.title = p.title + " · Clinical Disease Guide";
    const secs = p.sections, leads = (window.LEADS && LEADS[p.id]) || {};
    const tocList = secs.map(s => `<li><a href="#/d/${p.id}/${s.id}" data-sec="${s.id}">${s.title}</a></li>`).join("");
    const rel = (p.related || []).filter(x => BY[x]).map(x => `<a href="#/d/${x}">${BY[x].title}</a>`).join("");
    const specLinks = p.specs.map(x => `<a href="#/spec/${x}">${esc(SPEC_BY[x][1])}</a>`).join(" · ");
    const nav = i => {
      const prev = secs[i - 1], next = secs[i + 1];
      return `<nav class="sec-nav" aria-label="Section navigation">${prev ? `<a href="#/d/${p.id}/${prev.id}"><small>← Previous</small>${prev.title}</a>` : ""}${next ? `<a class="next" href="#/d/${p.id}/${next.id}"><small>Next →</small>${next.title}</a>` : ""}</nav>`;
    };
    const mins = Math.max(5, Math.round(secs.reduce((n, s) => n + strip(s.html).split(" ").length, 0) / 230));
    view.innerHTML = `<div class="page">
      <nav class="toc" aria-label="Contents"><div class="toc-head"><h4>In this chapter</h4><button type="button" class="toc-x" id="tocHide" title="Hide contents" aria-label="Hide contents"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg></button></div><ol>${tocList}</ol><p class="toc-progress" id="tocProg"></p></nav>
      <button type="button" class="toc-tab" id="tocShow" title="Show contents" aria-label="Show contents"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg><span id="tocTabN">1/${secs.length}</span></button>
      <article>
        <div class="crumb no-print"><a href="#/">Home</a> › ${specLinks}</div>
        <header class="art-head">
          <div class="eyebrow">${esc(p.age)} · Disease chapter</div>
          <h1>${p.title}</h1>
          <p class="sub">${p.subtitle}</p>
          <div class="meta"><span class="chip ok">Reviewed ${p.updated}</span><span class="chip">Evidence to ${p.evidenceTo}</span><span class="chip">Next review ${p.review}</span><span class="chip no-print">≈ ${mins} min read</span></div>
          <div class="art-actions">
            <button class="btn primary" id="pdfBtn" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14"/></svg>Save as PDF</button>
            <button class="btn" id="openAll" type="button">Expand all</button>
            <button class="btn" id="closeAll" type="button">Collapse all</button>
          </div>
          ${rel ? `<div class="related">Related chapters ${rel}</div>` : ""}
        </header>
        <section class="mobile-toc" aria-label="Contents"><h2>Contents</h2><ol>${tocList}</ol></section>
        ${secs.map((s, i) => `<section id="${s.id}" data-title="${esc(s.title)}"><h2><span class="n">${i + 1}</span>${s.title}</h2>${leads[s.id] ? `<p class="sec-lead">${leads[s.id]}</p>` : ""}${s.html}${nav(i)}</section>`).join("")}
        <p class="foot">${p.title} · Clinical Disease Guide · Reviewed ${p.updated}. For qualified health professionals. Verify doses against your current local formulary before prescribing.</p>
      </article></div>`;
    $("#tocHide").onclick = () => { prefs.toc = "closed"; applyPrefs(); };
    $("#tocShow").onclick = () => { prefs.toc = "open"; applyPrefs(); };
    $("#pdfBtn").onclick = () => openPdf(p);
    $("#openAll").onclick = () => $$("article details").forEach(d => d.open = true);
    $("#closeAll").onclick = () => $$("article details").forEach(d => d.open = false);
    initCalcs();
    setupToc(p);
    if (/[?&]pdf=1/.test(location.search)) $$("article details").forEach(d => d.open = true);   // used for automated PDF checks
    spy?.disconnect();
    const links = $$(".toc a"), prog = $("#tocProg");
    spy = new IntersectionObserver(es => {
      es.forEach(e => {
        if (!e.isIntersecting) return;
        links.forEach(a => a.classList.toggle("on", a.dataset.sec === e.target.id));
        markToc(e.target.id);
        const i = secs.findIndex(s => s.id === e.target.id);
        $("#brandSub").textContent = `${i + 1} / ${secs.length} · ${secs[i].title}`;
        if (prog) prog.textContent = `Section ${i + 1} of ${secs.length}`;
        const tn = $("#tocTabN"); if (tn) tn.textContent = `${i + 1}/${secs.length}`;
        const on = $(".toc a.on"), ol = $(".toc ol"); if (on && ol && (on.offsetTop < ol.scrollTop || on.offsetTop > ol.scrollTop + ol.clientHeight - 30)) ol.scrollTop = on.offsetTop - ol.clientHeight / 2;
      });
    }, { rootMargin: "-90px 0px -65% 0px" });
    $$("article section[id]").forEach(s => spy.observe(s));
    if (anchor) setTimeout(() => { const t = document.getElementById(anchor); if (t) { t.scrollIntoView({ block: "start" }); if (t.tagName === "DETAILS") t.open = true; } }, 30);
    else scrollTo(0, 0);
  }

  /* ---------- reading progress + focus-mode top bar ---------- */
  const bar = $("#topbar"), progEl = $("#progress");
  let lastY = 0;
  addEventListener("scroll", () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    progEl.style.width = location.hash.startsWith("#/d/") && h > 0 ? (y / h * 100).toFixed(1) + "%" : "0";
    if (root.dataset.style === "focus" && location.hash.startsWith("#/d/")) bar.classList.toggle("away", y > lastY && y > 200);
    else bar.classList.remove("away");
    lastY = y;
  }, { passive: true });

  /* ---------- reading settings ---------- */
  const DEF = { style: "classic", tint: "auto", font: "textbook", size: 100, width: "medium", spacing: "comfortable", hideBhutan: false, hideImages: false, toc: "open" };
  let prefs = { ...DEF }; try { prefs = { ...DEF, ...JSON.parse(localStorage.getItem("cdg-prefs") || "{}") }; } catch (e) {}
  function applyPrefs() {
    const dark = matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.tint = prefs.tint === "auto" ? (dark ? "sepia" : "paper") : prefs.tint;
    root.dataset.style = prefs.style; root.dataset.font = prefs.font; root.dataset.width = prefs.width; root.dataset.spacing = prefs.spacing;
    root.style.setProperty("--scale", prefs.size / 100); root.dataset.toc = prefs.toc;
    prefs.hideBhutan ? root.dataset.hideBhutan = "1" : delete root.dataset.hideBhutan;
    prefs.hideImages ? root.dataset.hideImages = "1" : delete root.dataset.hideImages;
    try { localStorage.setItem("cdg-prefs", JSON.stringify(prefs)); } catch (e) {}
  }
  const STYLES = [["classic", "Classic", "Paper cards, serif headings, floating contents"], ["minimal", "Minimal", "Flat and quiet, modern type, no boxes"], ["focus", "Focus", "One calm column, larger text, bar hides as you read"], ["compact", "Compact", "Dense tables and small type for the bedside"]];
  const TINTS = [["auto", "Auto", "linear-gradient(90deg,#F8F6F1 50%,#28231E 50%)"], ["paper", "Paper", "#F8F6F1"], ["white", "White", "#FFFFFF"], ["sage", "Sage", "#EDF2EC"], ["sepia", "Night", "#28231E"]];
  const seg = (key, opts) => `<div class="seg">${opts.map(([v, l]) => `<button type="button" data-k="${key}" data-v="${v}" aria-pressed="${prefs[key] === v}">${l}</button>`).join("")}</div>`;
  function renderPrefs() {
    $("#prefsBody").innerHTML = `
      <div class="opt"><b>Reading style</b><div class="styles">${STYLES.map(([v, l, d]) => `<button type="button" data-k="style" data-v="${v}" aria-pressed="${prefs.style === v}"><b>${l}</b><small>${d}</small></button>`).join("")}</div></div>
      <div class="opt"><b>Page tint</b><div class="swatches" style="grid-template-columns:repeat(5,1fr)">${TINTS.map(([v, l, c]) => `<button type="button" data-k="tint" data-v="${v}" aria-pressed="${prefs.tint === v}" style="background:var(--panel);color:var(--ink)"><i style="background:${c}"></i>${l}</button>`).join("")}</div></div>
      <div class="opt"><b>Text size</b><div class="range"><span style="font-size:13px">A</span><input type="range" min="85" max="135" step="5" value="${prefs.size}" data-k="size" aria-label="Text size"><span style="font-size:20px">A</span><output>${prefs.size}%</output></div></div>
      <div class="opt"><b>Typeface</b>${seg("font", [["textbook", "Textbook"], ["serif", "All serif"], ["sans", "Modern sans"]])}</div>
      <div class="opt"><b>Contents panel</b>${seg("toc", [["open", "Show"], ["closed", "Hide"]])}</div>
      <div class="opt"><b>Line width</b>${seg("width", [["narrow", "Narrow"], ["medium", "Medium"], ["wide", "Wide"]])}</div>
      <div class="opt"><b>Spacing</b>${seg("spacing", [["compact", "Tight"], ["comfortable", "Comfortable"], ["airy", "Airy"]])}</div>
      <div class="opt"><b>Show</b>
        <label class="toggle">Bhutan notes and labels<input type="checkbox" data-k="hideBhutan" ${prefs.hideBhutan ? "" : "checked"}></label>
        <label class="toggle">Images<input type="checkbox" data-k="hideImages" ${prefs.hideImages ? "" : "checked"}></label></div>
      <div class="preview"><b>Preview.</b> Oliguria is urine output under 0.5 mL/kg/h for 6 hours. Check the bladder first: retention is the easiest AKI to cure.</div>
      <button type="button" class="btn reset" data-reset>Reset to default</button>`;
  }
  const prefsWrap = $("#prefsWrap"), aa = $("#aaBtn");
  function openPrefs() { renderPrefs(); prefsWrap.hidden = false; aa.setAttribute("aria-expanded", "true"); }
  function closePrefs() { prefsWrap.hidden = true; aa.setAttribute("aria-expanded", "false"); }
  aa.addEventListener("click", () => prefsWrap.hidden ? openPrefs() : closePrefs());
  prefsWrap.addEventListener("click", e => {
    if (e.target.closest("[data-close-prefs]")) return closePrefs();
    if (e.target.closest("[data-reset]")) { prefs = { ...DEF }; applyPrefs(); return renderPrefs(); }
    const b = e.target.closest("button[data-k]"); if (!b) return;
    prefs[b.dataset.k] = b.dataset.v; applyPrefs(); renderPrefs();
  });
  prefsWrap.addEventListener("input", e => {
    const t = e.target; if (!t.dataset.k) return;
    if (t.type === "range") { prefs.size = +t.value; t.parentElement.querySelector("output").textContent = t.value + "%"; }
    if (t.type === "checkbox") prefs[t.dataset.k] = !t.checked;
    applyPrefs();
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => prefs.tint === "auto" && applyPrefs());
  applyPrefs();

  /* ---------- PDF options ---------- */
  const pdfWrap = $("#pdfWrap");
  const PDFOPT = [["images", "Images", "noImages"], ["flows", "Flowcharts", "noFlows"], ["qbank", "Question bank", "noQ"], ["refs", "References", "noRefs"], ["qc", "Quality-check table", "noQc"]];
  function openPdf(p) {
    $("#pdfBody").innerHTML = `<p style="margin-top:12px">Choose what to include. Everything collapsed will be opened, and the layout switches to a compact A4 print style.</p>
      ${PDFOPT.map(([id, l]) => `<label class="toggle">${l}<input type="checkbox" data-pdf="${id}" ${id === "qc" ? "" : "checked"}></label>`).join("")}
      <div class="tips"><b>In the print window</b><ol><li>Destination: <b>Save as PDF</b></li><li>More settings → <b>untick “Headers and footers”</b></li><li><b>Tick “Background graphics”</b> so coloured boxes keep their tint</li></ol></div>
      <button type="button" class="btn primary reset" data-go-pdf>Open print window</button>`;
    pdfWrap.hidden = false;
  }
  pdfWrap.addEventListener("click", e => {
    if (e.target.closest("[data-close-pdf]")) { pdfWrap.hidden = true; return; }
    if (!e.target.closest("[data-go-pdf]")) return;
    const map = { images: "printNoImages", flows: "printNoFlows", qbank: "printNoQ", refs: "printNoRefs", qc: "printNoQc" };
    $$("[data-pdf]", pdfWrap).forEach(c => { c.checked ? delete root.dataset[map[c.dataset.pdf]] : root.dataset[map[c.dataset.pdf]] = "1"; });
    pdfWrap.hidden = true;
    wasOpen = $$("article details").map(d => d.open);
    $$("article details").forEach(d => d.open = true);   // open everything first, in every browser
    setTimeout(() => window.print(), 150);
  });
  addEventListener("afterprint", () => Object.keys(root.dataset).filter(k => k.startsWith("print")).forEach(k => delete root.dataset[k]));

  /* ---------- image viewer ---------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  function openLb(pic) {
    lbImg.src = pic.dataset.full; lbImg.alt = pic.dataset.cap;
    lbCap.innerHTML = `${esc(pic.dataset.cap)} · <a href="${pic.dataset.page}" target="_blank" rel="noopener">Original and licence</a>`;
    lb.hidden = false; document.body.style.overflow = "hidden";
  }
  const closeLb = () => { lb.hidden = true; lbImg.removeAttribute("src"); document.body.style.overflow = ""; };
  document.addEventListener("click", e => { const pic = e.target.closest("figure.img .pic"); if (pic) openLb(pic); });
  document.addEventListener("keydown", e => { const pic = e.target.closest?.("figure.img .pic"); if (pic && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openLb(pic); } });
  lb.addEventListener("click", e => { if (e.target === lb || e.target.closest("[data-close-lb]") || e.target === lbImg) closeLb(); });

  /* ---------- keyboard: / search · [ ] previous / next section · Esc closes ---------- */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closePrefs(); pdfWrap.hidden = true; if (!lb.hidden) closeLb(); }
    if (/input|select|textarea/i.test(e.target.tagName) || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "/") { e.preventDefault(); qEl.focus(); }
    if ((e.key === "]" || e.key === "[") && location.hash.startsWith("#/d/")) {
      const on = $(".toc a.on") || $(".toc a"); if (!on) return;
      const li = on.parentElement[e.key === "]" ? "nextElementSibling" : "previousElementSibling"];
      li?.querySelector("a")?.click();
    }
  });

  /* expand everything for the PDF, then restore */
  let wasOpen = [];
  addEventListener("beforeprint", () => { if (!$$("article details").every(d => d.open)) wasOpen = $$("article details").map(d => d.open); $$("article details").forEach(d => d.open = true); });
  addEventListener("afterprint", () => { $$("article details").forEach((d, i) => d.open = wasOpen[i] ?? false); });

  /* ---------- Drug library (Bhutan formulary + NEML 2025) ---------- */
  const FORM = window.FORMULARY || [], FORM_BY = Object.fromEntries(FORM.map(d => [d.k, d]));
  const LEVELS = ["NRH", "RRH", "DH", "PHC"];
  const normName = s => String(s || "").toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z ]/g, " ").trim().split(/\s+/)[0];
  function formFor(cardName) {   // match a chapter drug card to its formulary monograph
    const n = normName(cardName); if (!n || n.length < 4) return null;
    return FORM.find(d => normName(d.n) === n) || FORM.find(d => d.n.toLowerCase().startsWith(n)) || null;
  }
  const title = s => String(s).toLowerCase().replace(/(^|[\s\-(/])([a-z])/g, (m, a, b) => a + b.toUpperCase());
  let libState = { q: "", lv: "" };
  function drugList() {
    document.title = "Drug library · Clinical Disease Guide";
    const q = libState.q.toLowerCase(), lv = libState.lv;
    const hits = FORM.filter(d => (!q || (d.n + " " + d.g + " " + d.sub + " " + (d.f25 || []).map(x => x.i).join(" ")).toLowerCase().includes(q)) && (!lv || (d.lv || []).includes(lv)));
    const groups = {}; hits.forEach(d => (groups[d.sec || "Other"] = groups[d.sec || "Other"] || []).push(d));
    const secs = Object.keys(groups).sort((a, b) => (parseInt(a) || 99) - (parseInt(b) || 99));
    view.innerHTML = `<div class="wrap lib">
      <div class="crumb"><a href="#/">Home</a> › Drug library</div>
      <div class="hero lib-hero"><h1>Drug library</h1><p>${FORM.length} medicines from Bhutan's National Essential Medicines Formulary, with the facility levels from the NEML 2025. Tap a medicine for its full monograph.</p>
        <div class="lib-tools"><input id="libQ" type="search" placeholder="Search a medicine, class or use…" value="${esc(libState.q)}" aria-label="Search the drug library">
        <div class="seg lib-lv">${["", ...LEVELS].map(l => `<button type="button" data-lv="${l}" aria-pressed="${lv === l}">${l || "All levels"}</button>`).join("")}</div></div></div>
      <p class="lib-count">${hits.length} medicine${hits.length === 1 ? "" : "s"}</p>
      ${secs.map(s => `<section class="lib-sec"><h2>${esc(title(s.replace(/^\d+\.\s*/, "")))}</h2><div class="lib-grid">${groups[s].sort((a, b) => a.n.localeCompare(b.n)).map(d => `<a class="lib-item" href="#/drug/${encodeURIComponent(d.k)}"><b>${esc(title(d.n))}</b><small>${esc((d.g || "").replace(/\.$/, ""))}</small><span class="lvs">${LEVELS.map(l => `<i class="${(d.lv || []).includes(l) ? "on" : ""}">${l}</i>`).join("")}</span></a>`).join("")}</div></section>`).join("") || `<div class="note">No medicine matches “${esc(libState.q)}”.</div>`}
      <p class="foot">Source: Bhutan National Essential Medicines Formulary 2022 and National Essential Medicines List 2025, as held in the Bhutan Clinical Reference app. Always check the current formulary.</p></div>`;
    const qi = $("#libQ");
    qi.addEventListener("input", () => { libState.q = qi.value; const pos = qi.selectionStart; drugList(); const n = $("#libQ"); n.focus(); n.setSelectionRange(pos, pos); });
    $$(".lib-lv button").forEach(b => b.onclick = () => { libState.lv = b.dataset.lv; drugList(); });
  }
  function drugPage(k) {
    const d = FORM_BY[decodeURIComponent(k)]; if (!d) return drugList();
    document.title = title(d.n) + " · Drug library";
    const card = Object.entries(GUIDE.drugs).find(([, c]) => formFor(c.name) === d);
    const chapters = card ? PAGES.filter(p => p.sections.some(s => s.html.includes(`data-drug="${card[0]}"`))) : [];
    view.innerHTML = `<div class="wrap lib"><div class="crumb"><a href="#/">Home</a> › <a href="#/drugs">Drug library</a> › ${esc(title(d.n))}</div>
      <article class="mono">
        <header class="art-head"><div class="eyebrow">${esc(title((d.sub || d.sec || "").replace(/^[\d.]+\s*/, "")))}</div><h1>${esc(title(d.n))}</h1><p class="sub">${esc(d.g || "")}</p>
          <div class="meta">${LEVELS.map(l => `<span class="chip ${(d.lv || []).includes(l) ? "ok" : ""}">${l}${(d.lv || []).includes(l) ? " ✓" : " —"}</span>`).join("")}</div>
          ${card || chapters.length ? `<div class="art-actions">${card ? `<a class="btn primary" href="#" data-drug="${card[0]}">Open the clinical drug card</a>` : ""}${chapters.map(p => `<a class="btn" href="#/d/${p.id}">${esc(p.title)}</a>`).join("")}</div>` : ""}
        </header>
        ${d.moa ? `<section><h2>How it works</h2><p>${esc(d.moa)}</p></section>` : ""}
        ${(d.f25 || []).length ? `<section><h2>Products on the NEML 2025</h2>${tbl(["Product", "Class", "Supplied to"], d.f25.map(x => [esc(x.i), ({ V: "Vital", E: "Essential", N: "Non-essential" })[x.v] || esc(x.v || ""), esc(x.l || "") + (x.r ? `<br><small>${esc(x.r)}</small>` : "")]))}</section>` : ""}
        <section><h2>Formulary monograph</h2>${(d.f || []).map(([h, b]) => `<h3>${esc(h)}</h3><p>${esc(b)}</p>`).join("")}</section>
        ${(d.ch || []).length ? `<section><h2>NEML changes</h2>${d.ch.map(([h, b]) => `<p><b>${esc(h)}.</b> ${esc(b)}</p>`).join("")}</section>` : ""}
        <p class="foot">Bhutan National Essential Medicines Formulary 2022 and NEML 2025. Formulary pregnancy letters (A–X) are older FDA categories; read the chapter drug cards for current pregnancy advice.</p>
      </article></div>`;
  }

  /* ---------- router ---------- */
  let current = "";
  function route() {
    closeToc(); dock.hidden = !location.hash.startsWith("#/d/");
    if (!location.hash.startsWith("#/d/")) { $("#brandSub").textContent = "Evidence-based · Bhutan & South Asia"; $("#progress").style.width = "0"; }
    const h = location.hash.replace(/^#\/?/, "");
    const [a, b, c] = h.split("/");
    if (a === "d" && b) {
      if (current === b && c) { const t = document.getElementById(c); if (t) { t.scrollIntoView({ behavior: "smooth", block: "start" }); return; } }
      current = b; page(b, c);
      view.classList.remove("fade-in"); void view.offsetWidth; view.classList.add("fade-in");
    } else if (a === "drugs") { current = ""; drugList(); scrollTo(0, 0); }
    else if (a === "drug" && b) { current = ""; drugPage(b); scrollTo(0, 0); }
    else if (a === "spec" && b) { current = ""; spec(b); scrollTo(0, 0); }
    else if (a === "calcs") { current = ""; calcsPage(); scrollTo(0, 0); }
    else if (a === "az") { current = ""; az(); scrollTo(0, 0); }
    else { current = ""; home(); scrollTo(0, 0); }
  }
  addEventListener("hashchange", () => { resEl.hidden = true; qEl.blur(); route(); });

  const tt = $("#toTop");
  addEventListener("scroll", () => { tt.hidden = scrollY < 600; }, { passive: true });
  tt.onclick = () => scrollTo({ top: 0, behavior: "smooth" });

  /* ---------- calculators (rendered by pages as <div class="calc" data-calc="…">) ---------- */
  const num = el => parseFloat(el?.value);
  const toMg = (v, u) => u === "umol" ? v / 88.4 : v;
  const CALCS = {
    ckdepi(el) {
      el.innerHTML = `<h4>eGFR — CKD-EPI 2021 (adults, race-free)</h4><div class="row">
        <label>Creatinine<input type="number" step="any" data-k="cr" placeholder="e.g. 110"></label>
        <label>Unit<select data-k="u"><option value="umol">µmol/L</option><option value="mg">mg/dL</option></select></label>
        <label>Age (years)<input type="number" data-k="age" placeholder="18+"></label>
        <label>Sex<select data-k="sex"><option value="m">Male</option><option value="f">Female</option></select></label></div><div class="out" aria-live="polite">Enter values.</div>`;
      const go = () => {
        const g = k => $(`[data-k=${k}]`, el), out = $(".out", el);
        const cr = toMg(num(g("cr")), g("u").value), age = num(g("age")), f = g("sex").value === "f";
        if (!(cr > 0) || !(age >= 18)) { out.innerHTML = age < 18 ? `<span class="warn">Under 18: use the paediatric bedside Schwartz equation instead.</span>` : "Enter creatinine and age (18 or older)."; return; }
        const k = f ? 0.7 : 0.9, a = f ? -0.241 : -0.302;
        const e = 142 * Math.pow(Math.min(cr / k, 1), a) * Math.pow(Math.max(cr / k, 1), -1.2) * Math.pow(0.9938, age) * (f ? 1.012 : 1);
        const G = e >= 90 ? "G1" : e >= 60 ? "G2" : e >= 45 ? "G3a" : e >= 30 ? "G3b" : e >= 15 ? "G4" : "G5";
        out.innerHTML = `eGFR <b>${Math.round(e)} mL/min/1.73 m²</b> → GFR category <b>${G}</b>. Only valid when creatinine is stable — not during AKI.`;
      };
      el.addEventListener("input", go);
    },
    schwartz(el) {
      el.innerHTML = `<h4>eGFR — bedside Schwartz (children 1–18 years, enzymatic creatinine)</h4><div class="row">
        <label>Height (cm)<input type="number" step="any" data-k="h"></label>
        <label>Creatinine<input type="number" step="any" data-k="cr"></label>
        <label>Unit<select data-k="u"><option value="umol">µmol/L</option><option value="mg">mg/dL</option></select></label></div><div class="out" aria-live="polite">Enter height and creatinine.</div>`;
      el.addEventListener("input", () => {
        const g = k => $(`[data-k=${k}]`, el), out = $(".out", el);
        const h = num(g("h")), cr = toMg(num(g("cr")), g("u").value);
        if (!(h > 0 && cr > 0)) { out.textContent = "Enter height and creatinine."; return; }
        const e = 0.413 * h / cr;
        out.innerHTML = `eGFR <b>${Math.round(e)} mL/min/1.73 m²</b> (= 36.5 × height ÷ creatinine in µmol/L). ${e < 90 ? "Below 90 is flagged as low in children over 2 years (KDIGO 2024)." : ""} Not valid in infants under 1 year or during AKI.`;
      });
    },
    akistage(el) {
      el.innerHTML = `<h4>KDIGO AKI stage from creatinine</h4><div class="row">
        <label>Baseline creatinine<input type="number" step="any" data-k="b"></label>
        <label>Current creatinine<input type="number" step="any" data-k="c"></label>
        <label>Unit<select data-k="u"><option value="umol">µmol/L</option><option value="mg">mg/dL</option></select></label>
        <label>Rise of ≥26.5 µmol/L in 48 h?<select data-k="r"><option value="n">No / unknown</option><option value="y">Yes</option></select></label>
        <label>On dialysis now?<select data-k="d"><option value="n">No</option><option value="y">Yes</option></select></label></div><div class="out" aria-live="polite">Enter values.</div>`;
      el.addEventListener("input", () => {
        const g = k => $(`[data-k=${k}]`, el), out = $(".out", el), u = g("u").value;
        const b = toMg(num(g("b")), u), c = toMg(num(g("c")), u);
        if (g("d").value === "y") { out.innerHTML = "Stage <b>3</b> (kidney replacement therapy started)."; return; }
        if (!(b > 0 && c > 0)) { out.textContent = "Enter baseline and current creatinine."; return; }
        const x = c / b; let s = 0;
        if (x >= 3 || c >= 4.0) s = 3; else if (x >= 2) s = 2; else if (x >= 1.5 || g("r").value === "y") s = 1;
        out.innerHTML = s ? `Ratio ${x.toFixed(2)}× baseline → KDIGO stage <b>${s}</b>. Urine output criteria may give a higher stage — use whichever is worse.` : `Ratio ${x.toFixed(2)}× baseline. Creatinine criteria for AKI are <b>not</b> met. Check urine output criteria.`;
      });
    },
    hyperkpaed(el) {
      el.innerHTML = `<h4>Emergency hyperkalaemia doses by weight (child) — RCH Melbourne, Aug 2024</h4><div class="row">
        <label>Weight (kg)<input type="number" step="any" data-k="w" placeholder="e.g. 14"></label></div><div class="out" aria-live="polite">Enter weight.</div>`;
      el.addEventListener("input", () => {
        const w = num($("[data-k=w]", el)), out = $(".out", el);
        if (!(w > 0 && w < 150)) { out.textContent = "Enter weight in kg."; return; }
        const f = (v, d = 1) => (Math.round(v * 10 ** d) / 10 ** d).toString();
        const ca = Math.min(0.68 * w, 30), ins = Math.min(0.1 * w, 10), glu = 5 * w, bic = [1 * w, 3 * w], res = [Math.min(0.5 * w, 30), Math.min(1 * w, 30)];
        out.innerHTML = `<ul style="margin:0;padding-left:18px">
          <li>Calcium gluconate 10%: <b>${f(ca)} mL</b> IV over 2–5 min if unstable (0.68 mL/kg, max 30 mL).</li>
          <li>Salbutamol nebulised: <b>${w <= 25 ? "2.5 mg" : "5 mg"}</b>, repeat 1–2-hourly.</li>
          <li>Glucose 10%: <b>${f(glu, 0)} mL</b> IV bolus, then soluble insulin <b>${f(ins)} units</b> IV (0.1 unit/kg, max 10), then glucose–insulin infusion.</li>
          <li>Sodium bicarbonate (only with metabolic acidosis), 1–3 mmol/kg = <b>${f(bic[0])}–${f(bic[1])} mmol</b>: 8.4% → ${f(bic[0])}–${f(bic[1])} mL; <b>Bhutan 7.5% → ${f(bic[0] * 1.12)}–${f(bic[1] * 1.12)} mL</b>. Separate line from calcium.</li>
          <li>Calcium polystyrene sulfonate: <b>${f(res[0])}–${f(res[1])} g</b> 6-hourly oral/rectal (0.5–1 g/kg, max 30 g).</li></ul>
          <p class="warn" style="margin:8px 0 0">Bhutan insulin is 40 units/mL. Dilute first: 0.25 mL (10 units) + 9.75 mL 0.9% saline = 1 unit/mL, then give <b>${f(ins)} mL</b> of the dilution.</p>`;
      });
    }
  };
  // topic files add calculators to window.EXTRA_CALCS; each gets (element, helpers)
  const CALC_UTIL = { $, $$, num, esc, toMg, round: (v, d = 1) => (Math.round(v * 10 ** d) / 10 ** d).toString() };
  function initCalcs() { $$("[data-calc]").forEach(el => (CALCS[el.dataset.calc] || (window.EXTRA_CALCS || {})[el.dataset.calc])?.(el, CALC_UTIL)); }

  route(); // first render, after everything above is defined
})();
