(function () {
  const DEFAULT_LANG = "en";
  const supported = Object.keys(window.RL_I18N || {});
  const params = new URLSearchParams(location.search);

  function storedLang() {
    try { return localStorage.getItem("rl-lang"); } catch { return null; }
  }
  function storedTheme() {
    try { return localStorage.getItem("rl-theme"); } catch { return null; }
  }

  let lang = params.get("lang") || storedLang() || DEFAULT_LANG;
  if (!window.RL_I18N[lang]) lang = DEFAULT_LANG;

  let latestVersion = "";

  function withVersion(s) {
    const v = latestVersion ? " (" + latestVersion + ")" : "";
    return String(s).replace(/\{version\}/g, v);
  }

  function tRoot() {
    return window.RL_I18N[lang] || window.RL_I18N[DEFAULT_LANG];
  }

  function hasLocale(code) {
    return !!(window.RL_I18N && window.RL_I18N[code]);
  }

  /* ---- theme ---- */
  function applyTheme(mode) {
    const root = document.documentElement;
    if (mode === "light") root.classList.add("light");
    else root.classList.remove("light");
    const sun = document.querySelector(".sun-icon");
    const moon = document.querySelector(".moon-icon");
    if (sun && moon) {
      sun.style.display = mode === "light" ? "none" : "block";
      moon.style.display = mode === "light" ? "block" : "none";
    }
  }

  let theme = storedTheme() || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  applyTheme(theme);

  /* ---- tiny markdown ---- */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function inline(s) {
    let out = esc(withVersion(s));
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const safe = esc(href);
      const ext = /^https?:/i.test(href);
      return `<a href="${safe}"${ext ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
    });
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    return out;
  }

  function icon(name) {
    const paths = {
      rocket: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6.5-3.5z"/>',
      linux: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="m8 9 3 2.5L8 14"/><path d="M13 14h4"/>',
      key: '<circle cx="7" cy="12" r="4"/><path d="M11 12h10"/><path d="M18 12v3"/><path d="M21 12v4"/>',
      layers: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
      puzzle: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/>',
      wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6L15 12l-3-3 2.7-2.7z"/>',
      search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
      plus: '<path d="M12 5v14M5 12h14"/>',
      book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
      sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
      moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
      chev: '<path d="M9 18l6-6-6-6"/>',
      up: '<path d="M7 11v10H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3z"/><path d="M10 21h6.2a2 2 0 0 0 1.9-1.37l2.5-7.1A1.5 1.5 0 0 0 19.2 10H14V5.2A2.2 2.2 0 0 0 11.8 3h-.2a1 1 0 0 0-1 .72L9 11v10z"/>',
      down: '<path d="M17 13V3h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3z"/><path d="M14 3H7.8A2 2 0 0 0 5.9 4.37l-2.5 7.1A1.5 1.5 0 0 0 4.8 14H10v4.8A2.2 2.2 0 0 0 12.2 21h.2a1 1 0 0 0 1-.72L15 13V3z"/>'
    };
    return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.book}</svg>`;
  }

  function renderFaqList() {
    const items = tRoot().faq || [];
    return items.map((item, i) => `
      <button class="faq-item glass" data-faq="${i}" type="button">
        <div class="faq-q">${inline(item.q)}${icon("plus")}</div>
        <div class="faq-a">${inline(item.a)}</div>
      </button>
    `).join("");
  }

  function slugify(text) {
    return String(text)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "section";
  }

  function renderBlocks(blocks) {
    return (blocks || []).map((b) => {
      switch (b.type) {
        case "h2": return `<h2 id="${slugify(b.text)}">${inline(b.text)}</h2>`;
        case "h3": return `<h3>${inline(b.text)}</h3>`;
        case "p": return `<p>${inline(b.text)}</p>`;
        case "ul": return `<ul>${b.items.map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`;
        case "ol": return `<ol>${b.items.map((i) => `<li>${inline(i)}</li>`).join("")}</ol>`;
        case "code":
          return `<div class="cli"><pre><code>${esc(b.text)}</code></pre><button type="button" class="copy-btn">${esc(tRoot().common.copy)}</button></div>`;
        case "callout":
          return `<div class="callout ${esc(b.kind || "info")}"><strong>${inline(b.title)}</strong><p>${inline(b.text)}</p></div>`;
        case "faq":
          return `<div class="faq-list">${renderFaqList()}</div>`;
        default:
          return "";
      }
    }).join("");
  }

  function articleById(id) {
    return tRoot().articles[id] || window.RL_I18N[DEFAULT_LANG].articles[id];
  }

  function currentId() {
    const hash = (location.hash || "#home").replace(/^#\/?/, "");
    return hash.split("?")[0] || "home";
  }

  function renderHome() {
    const L = tRoot();
    const topics = L.topics.map((tpc) => `
      <a class="topic-card glass ios-spring" href="#${tpc.id}">
        <div class="topic-icon">${icon(tpc.icon)}</div>
        <h3>${esc(tpc.title)}</h3>
        <p>${esc(tpc.desc)}</p>
      </a>
    `).join("");

    const popular = (L.faq || []).slice(0, 5).map((item, i) => `
      <button class="faq-item glass" data-faq="home-${i}" type="button">
        <div class="faq-q">${inline(item.q)}${icon("plus")}</div>
        <div class="faq-a">${inline(item.a)}</div>
      </button>
    `).join("");

    const channels = L.channels.map((c) => `
      <a class="channel-card glass ios-spring" href="${esc(c.href)}"${c.ext ? ' target="_blank" rel="noopener"' : ""}>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.desc)}</p>
      </a>
    `).join("");

    return `
      <div class="hero-help animate-fade-up">
        <div class="badge glass">${icon("wrench")} ${esc(L.home.badge)}${latestVersion ? " · " + esc(latestVersion) : ""}</div>
        <h1>${esc(L.home.title)}</h1>
        <p class="lede">${esc(L.home.lede)}</p>
        <button type="button" class="search-hero glass" id="heroSearch">
          ${icon("search")}
          <span>${esc(L.search.hero)}</span>
          <kbd>${esc(L.search.kbd)}</kbd>
        </button>
      </div>
      <div class="example-grid">${(L.home.examples || []).map((ex) => `
        <a class="example-card glass ios-spring" href="#${esc(ex.id)}">
          <h3>${esc(ex.title)}</h3>
          <p>${inline(ex.body)}</p>
        </a>
      `).join("")}</div>
      <h2>${esc(L.home.topicsTitle)}</h2>
      <div class="topic-grid">${topics}</div>
      <h2>${esc(L.home.faqTitle)}</h2>
      <div class="faq-list">${popular}</div>
      <p style="margin:1rem 0 0"><a href="#faq">${esc(L.navItems[3].items[1].title)} →</a></p>
      <h2 style="margin-top:2.2rem">${esc(L.common.contact)}</h2>
      <div class="channel-grid">${channels}</div>
    `;
  }

  function renderArticle(id) {
    const L = tRoot();
    if (id === "home") {
      document.title = L.meta.titleHome;
      return `
        <div class="crumbs"><span>${esc(L.common.helpCenter)}</span></div>
        <article class="article-body">${renderHome()}</article>
        ${feedbackBar("home")}
      `;
    }
    const art = articleById(id);
    if (!art) {
      document.title = L.meta.titleHome;
      return `
        <div class="crumbs"><a href="#home">${esc(L.common.helpCenter)}</a></div>
        <h1>${esc(L.common.pageNotFound)}</h1>
        <p class="lede">${esc(L.common.pageNotFoundLede)} <a href="#home">${esc(L.common.helpCenter)}</a>.</p>
      `;
    }
    document.title = L.meta.titleArticle.replace("{title}", art.title);
    const extra = id.startsWith("install-")
      ? `<div class="os-pills">
          <a class="os-pill${id === "install-windows" ? " active" : ""}" href="#install-windows">Windows</a>
          <a class="os-pill${id === "install-linux" ? " active" : ""}" href="#install-linux">Linux</a>
          <a class="os-pill${id === "install-macos" ? " active" : ""}" href="#install-macos">macOS</a>
        </div>`
      : "";

    return `
      <div class="crumbs">
        <a href="#home">${esc(L.common.helpCenter)}</a>
        <span>/</span>
        <span>${esc(art.category)}</span>
      </div>
      <div class="article-kicker">${esc(art.category)}</div>
      <h1>${esc(art.title)}</h1>
      <p class="lede">${esc(art.lede)}</p>
      ${extra}
      <article class="article-body">${renderBlocks(art.blocks)}</article>
      ${feedbackBar(id)}
    `;
  }

  function feedbackBar(pageId) {
    const L = tRoot();
    let saved = null;
    try { saved = localStorage.getItem("rl-fb-" + pageId); } catch { saved = null; }
    return `
      <div class="article-footer">
        <div class="feedback-wrap">
          <p>${esc(L.common.wasHelpful)}</p>
          <button type="button" class="btn feedback-btn ios-spring${saved === "1" ? " active-yes" : ""}" data-fb="yes">${icon("up")} ${esc(L.common.yes)}</button>
          <button type="button" class="btn feedback-btn ios-spring${saved === "0" ? " active-no" : ""}" data-fb="no">${icon("down")} ${esc(L.common.no)}</button>
          <span class="feedback-thanks" id="fbThanks"${saved ? "" : ' hidden'}>${esc(L.common.thanksFeedback)}</span>
        </div>
        <div class="btn-row">
          <a class="btn btn-primary ios-spring" href="https://discord.gg/S9H2Z6SuEA" target="_blank" rel="noopener">${esc(L.common.askDiscord)}</a>
          <a class="btn btn-glass glass ios-spring" href="https://github.com/TGGamesYT/redstone-launcher/issues" target="_blank" rel="noopener">${esc(L.common.reportBug)}</a>
        </div>
      </div>
    `;
  }

  function bindFeedback(pageId) {
    document.querySelectorAll("[data-fb]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const yes = btn.getAttribute("data-fb") === "yes";
        try { localStorage.setItem("rl-fb-" + pageId, yes ? "1" : "0"); } catch { /* ignore */ }
        document.querySelectorAll("[data-fb]").forEach((b) => {
          const isYes = b.getAttribute("data-fb") === "yes";
          b.classList.toggle("active-yes", isYes && yes);
          b.classList.toggle("active-no", !isYes && !yes);
        });
        const thanks = document.getElementById("fbThanks");
        if (thanks) thanks.hidden = false;
      });
    });
  }

  function highlightSidebar(id) {
    document.querySelectorAll(".sidebar-link").forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + id);
    });
  }

  function bindArticleUi() {
    document.querySelectorAll(".faq-item").forEach((btn) => {
      btn.addEventListener("click", () => btn.classList.toggle("open"));
    });
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const code = btn.parentElement.querySelector("code");
        const text = code ? code.textContent : "";
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
        }
        btn.textContent = tRoot().common.copied;
        setTimeout(() => { btn.textContent = tRoot().common.copy; }, 1400);
      });
    });
    const hero = document.getElementById("heroSearch");
    if (hero) hero.addEventListener("click", openSearch);
  }

  let tocObserver = null;

  function buildToc() {
    const wrap = document.getElementById("article");
    const toc = document.getElementById("tocNav");
    const aside = document.getElementById("tocSidebar");
    const shell = document.querySelector(".docs-shell");
    if (!wrap || !toc || !aside) return;

    if (tocObserver) {
      tocObserver.disconnect();
      tocObserver = null;
    }

    const heads = [...wrap.querySelectorAll("h2")];
    heads.forEach((h, i) => {
      if (!h.id) h.id = "sec-" + slugify(h.textContent) + "-" + i;
    });

    if (heads.length < 2) {
      aside.classList.add("empty");
      if (shell) shell.classList.remove("has-toc");
      toc.innerHTML = "";
      return;
    }

    aside.classList.remove("empty");
    if (shell) shell.classList.add("has-toc");
    toc.innerHTML = heads.map((h) =>
      `<a class="toc-link" href="#${esc(h.id)}" data-sec="${esc(h.id)}">${esc(h.textContent)}</a>`
    ).join("");

    toc.querySelectorAll(".toc-link").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById(a.getAttribute("data-sec"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        toc.querySelectorAll(".toc-link").forEach((x) => x.classList.remove("active"));
        a.classList.add("active");
      });
    });

    const links = [...toc.querySelectorAll(".toc-link")];
    if (links[0]) links[0].classList.add("active");

    tocObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((en) => en.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((l) => l.classList.toggle("active", l.getAttribute("data-sec") === visible.target.id));
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.6, 1] });

    heads.forEach((h) => tocObserver.observe(h));
  }

  function render() {
    const id = currentId();
    const mount = document.getElementById("article");
    mount.innerHTML = renderArticle(id);
    window.scrollTo({ top: 0, behavior: "auto" });
    highlightSidebar(id);
    bindArticleUi();
    bindFeedback(id);
    buildToc();
    closeSidebar();
  }

  /* ---- sidebar ---- */
  function playNavItems() {
    const L = tRoot();
    return (window.RL_FEATURE_REGISTRY || []).map((f) => {
      const art = L.articles[f.id];
      return { id: f.id, title: (art && (art.nav || art.title)) || f.id };
    });
  }

  function buildSidebar() {
    const L = tRoot();
    const labels = L.sidebar;
    const html = L.navItems.map((g) => {
      const items = g.group === "play" ? playNavItems() : g.items;
      const links = items.map((it) =>
        `<a class="sidebar-link" href="#${it.id}">${esc(it.title)}</a>`
      ).join("");
      return `<div class="sidebar-group"><div class="sidebar-label">${esc(labels[g.group] || g.group)}</div>${links}</div>`;
    }).join("");
    document.getElementById("sidebarNav").innerHTML = html;
  }

  function openSidebar() {
    document.getElementById("docsSidebar").classList.add("open");
    document.getElementById("sidebarScrim").classList.add("open");
  }
  function closeSidebar() {
    document.getElementById("docsSidebar").classList.remove("open");
    document.getElementById("sidebarScrim").classList.remove("open");
  }

  /* ---- search ---- */
  function haystack(art, id) {
    const bits = [id, art.title, art.lede, art.category, art.keywords || ""];
    (art.blocks || []).forEach((b) => {
      if (b.text) bits.push(b.text);
      if (b.title) bits.push(b.title);
      if (b.items) bits.push(b.items.join(" "));
    });
    return bits.join(" ").toLowerCase();
  }

  function searchIndex() {
    const L = tRoot();
    const rows = [
      { id: "home", title: L.home.title, snippet: L.home.lede, hay: (L.home.title + " " + L.home.lede).toLowerCase() }
    ];
    const articleIds = new Set([
      ...Object.keys(L.articles),
      ...Object.keys(window.RL_I18N[DEFAULT_LANG].articles)
    ]);
    articleIds.forEach((id) => {
      const art = articleById(id);
      rows.push({
        id,
        title: art.title,
        snippet: art.lede,
        hay: haystack(art, id)
      });
    });
    (L.faq || []).forEach((f) => {
      rows.push({
        id: "faq",
        title: f.q,
        snippet: f.a,
        hay: (f.q + " " + f.a).toLowerCase()
      });
    });
    return rows;
  }

  function highlight(text, q) {
    const safe = esc(text);
    if (!q) return safe;
    const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return safe.replace(re, "<mark>$1</mark>");
  }

  function runSearch(q) {
    const box = document.getElementById("searchResults");
    const query = q.trim().toLowerCase();
    if (!query) {
      box.innerHTML = `<div class="search-hint">${esc(tRoot().search.hint)}</div>`;
      return;
    }
    const hits = searchIndex()
      .map((row) => {
        let score = 0;
        if (row.title.toLowerCase().includes(query)) score += 5;
        if (row.hay.includes(query)) score += 2;
        query.split(/\s+/).forEach((w) => { if (w && row.hay.includes(w)) score += 1; });
        return { ...row, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);

    if (!hits.length) {
      box.innerHTML = `<div class="search-empty">${esc(tRoot().search.empty)}</div>`;
      return;
    }
    box.innerHTML = hits.map((h, i) => `
      <button type="button" class="search-hit${i === 0 ? " active" : ""}" data-go="#${h.id}">
        <strong>${highlight(h.title, query)}</strong>
        <small>${highlight(h.snippet, query)}</small>
      </button>
    `).join("");
    box.querySelectorAll(".search-hit").forEach((btn) => {
      btn.addEventListener("click", () => {
        location.hash = btn.getAttribute("data-go");
        closeSearch();
      });
    });
  }

  function openSearch() {
    const overlay = document.getElementById("searchOverlay");
    overlay.classList.add("open");
    const input = document.getElementById("searchInput");
    input.value = "";
    runSearch("");
    setTimeout(() => input.focus(), 30);
  }
  function closeSearch() {
    document.getElementById("searchOverlay").classList.remove("open");
  }

  /* ---- chrome strings ---- */
  function applyChrome() {
    const L = tRoot();
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const parts = key.split(".");
      let cur = L;
      for (const p of parts) cur = cur && cur[p];
      if (typeof cur === "string") el.textContent = cur;
    });
    const sel = document.getElementById("langSwitcher");
    if (sel) sel.value = lang;
    document.documentElement.lang = lang;
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.placeholder = L.search.hero;
  }

  function setLang(next) {
    if (!window.RL_I18N[next]) return;
    lang = next;
    try { localStorage.setItem("rl-lang", lang); } catch { /* ignore */ }
    applyChrome();
    buildSidebar();
    render();
  }

  /* ---- boot ---- */
  function boot() {
    // Quick test overrides via URL query parameters:
    // ?api=redstoneapi | ?fb=redstoneapi
    // ?feedbackApi=https://example.com | ?env=staging | ?key=TOKEN
    try {
      const qApi = params.get("api") || params.get("fb") || params.get("feedback");
      if (qApi) window.RL_FEEDBACK_PROVIDER = qApi;
      const qApiUrl = params.get("feedbackApi") || params.get("RL_FEEDBACK_API");
      if (qApiUrl) window.RL_FEEDBACK_API = qApiUrl;
      const qEnv = params.get("env") || params.get("RL_ENV");
      if (qEnv) window.RL_API_ENV = qEnv;
      const qKey = params.get("key") || params.get("apiKey");
      if (qKey) window.RL_FEEDBACK_API_KEY = qKey;
    } catch (e) { /* ignore */ }
    applyChrome();
    buildSidebar();
    render();
    fetch("https://api.github.com/repos/TGGamesYT/redstone-launcher/releases/latest")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (!data || !data.tag_name) return;
        latestVersion = String(data.tag_name).replace(/^v/i, "");
        render();
      })
      .catch(() => {});

    window.addEventListener("hashchange", render);

    document.getElementById("themeToggle").addEventListener("click", () => {
      theme = theme === "light" ? "dark" : "light";
      try { localStorage.setItem("rl-theme", theme); } catch { /* ignore */ }
      applyTheme(theme);
    });

    document.getElementById("langSwitcher").addEventListener("change", (e) => {
      const next = e.target.value;
      if (!window.RL_I18N[next]) {
        e.target.value = lang;
        return;
      }
      setLang(next);
    });

    const mobileToggle = document.getElementById("mobileToggle");
    const mobileNav = document.getElementById("mobileNav");
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      mobileNav.classList.toggle("active");
    });
    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileToggle.classList.remove("active");
        mobileNav.classList.remove("active");
      });
    });

    document.getElementById("sidebarToggle").addEventListener("click", openSidebar);
    document.getElementById("sidebarScrim").addEventListener("click", closeSidebar);
    document.getElementById("openSearch").addEventListener("click", openSearch);
    document.getElementById("searchOverlay").addEventListener("click", (e) => {
      if (e.target.id === "searchOverlay") closeSearch();
    });
    document.getElementById("searchInput").addEventListener("input", (e) => runSearch(e.target.value));

    document.addEventListener("keydown", (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      if (e.key === "/" && tag !== "input" && tag !== "textarea" && tag !== "select") {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape") {
        closeSearch();
        closeSidebar();
      }
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        openSearch();
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
