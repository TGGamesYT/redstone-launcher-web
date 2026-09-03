(function () {
  const VERSIONS = [
    { v: "1.10.5", href: "https://drive.google.com/file/d/1J24DsFwSUNX6QPTjlkRCdfKxJW1Ni0JB/view?usp=drivesdk" },
    { v: "1.9.3", href: "https://drive.google.com/file/d/1Lz7_wquga6_HZATiY5l3Nj_vSWIbaTJu/view?usp=drivesdk" },
    { v: "1.9.1", href: "https://drive.google.com/file/d/1SnQto3XtKHj1MdLlDnnaI9SGRR0ZKEYZ/view?usp=drivesdk" },
    { v: "1.9.0", href: "https://drive.google.com/file/d/19gCx7R6kQBf3yZHP9TdtBGCTIvFIdi5w/view?usp=drivesdk" },
    { v: "1.8.6", href: "https://drive.google.com/file/d/10szDTq-sua7PXIg04MyOyU6aqraZf1Ti/view?usp=drivesdk" },
    { v: "1.8.3", href: "https://drive.google.com/file/d/1039AuIH9Rqx2dNrgMuW41-OLFh8KpbvZ/view?usp=drivesdk" },
    { v: "1.8.0", href: "https://drive.google.com/file/d/1jGLXJFBYQbZRxVbg6gHklYPNNs240YnP/view?usp=drivesdk" },
    { v: "1.7.6", href: "https://drive.google.com/file/d/1VwIn75VHg7YRsCe3sYPEqaBHgDephOuY/view?usp=drivesdk" },
    { v: "1.7.0", href: "https://drive.google.com/file/d/1NWFCgrONfwX3dp9V5kQjXcYUhQawaDq1/view?usp=drivesdk" },
    { v: "1.6.11", href: "https://drive.google.com/file/d/1YHMByiUAWqilIcOEFh1pIjfzfC2JewEv/view?usp=drivesdk" },
    { v: "1.6.0", href: "https://drive.google.com/file/d/10VYMMzN-7BuF7kNb-Ne1NGe4l-Mdk-bp/view?usp=drivesdk" },
    { v: "1.4.0", href: "https://drive.google.com/file/d/1ZyYptK27Uj7jyX1Rz3YI71NYTnrfIP2y/view?usp=drivesdk" },
    { v: "1.3.0", href: "https://drive.google.com/file/d/1ryu62KTvdK1dHCAjDgp9wv5h3ZfOfm-i/view?usp=drivesdk" },
    { v: "1.1.0", href: "https://drive.google.com/file/d/1-iMFKLUJ2tPoW3_pE2yUDBvmYmCzGTDW/view?usp=drivesdk" }
  ];

  const I18N = {
    en: {
      title: "Archive · Redstone Launcher",
      badge: "Archive",
      h1: "Archive versions",
      lede: "Legacy Windows builds from 1.1.0 through 1.10.5. Hosted on Google Drive from before the GitHub repository existed. Prefer the current launcher for everyday use.",
      crumbsHome: "Redstone Launcher",
      crumbsHere: "Archive",
      overview: "Overview",
      overviewBody: "This page lists previous builds of Redstone Launcher from versions **1.1.0** through **1.10.5**. These builds were compiled for **Windows only** and were originally distributed via Google Drive before the GitHub repository was created.",
      note: "Important note",
      noteDriveTitle: "Google Drive hosts",
      noteDrive: "These are legacy builds hosted on Google Drive. If any link is broken or returns an error, report it via [GitHub Issues](https://github.com/TGGamesYT/redstone-launcher/issues/new) or contact the maintainer at [contact@redstone-launcher.com](mailto:contact@redstone-launcher.com). Always prefer the latest release for stability.",
      noteSecTitle: "Unmaintained",
      noteSec: "These versions are no longer maintained and may contain security vulnerabilities. If you hit issues, update to a current build from [www.redstone-launcher.com](https://www.redstone-launcher.com/), or open an issue on the [GitHub repository](https://github.com/TGGamesYT/redstone-launcher/issues/new).",
      noteGoneTitle: "Missing file",
      noteGone: "If you cannot download a version, it may be Google Drive policy or the file being removed. Report broken links via [GitHub Issues](https://github.com/TGGamesYT/redstone-launcher/issues/new).",
      versions: "Version list",
      versionsIntro: "All versions listed below were built for **Windows** only.",
      search: "Search version…",
      results: "{n} result",
      resultsMany: "{n} results",
      empty: "No versions match your search.",
      download: "Download",
      colVersion: "Version",
      colStatus: "Status",
      colPlatform: "Platform",
      legacy: "legacy",
      windows: "Windows",
      statBuilds: "Builds",
      statRange: "Range",
      statOs: "Platform",
      statHost: "Host",
      statHostVal: "Google Drive",
      current: "Current launcher",
      currentBtn: "Get the current launcher",
      currentBtnVer: "Get {v}",
      help: "Help Center",
      thisPage: "This page",
      builds: "Builds",
      more: "More",
      nav: {
        socials: "Socials",
        github: "GitHub",
        discord: "Discord",
        indicators: "Indicators",
        blog: "News",
        archive: "Archive versions",
        team: "Our Team",
        supportBug: "Support & Bug Report",
        helpCenter: "Help Center",
        discordSupport: "Discord Support",
        githubBug: "GitHub Bug Report",
        emailSupport: "Email Support",
        openMenu: "Open menu",
        rights: "© Redstone Launcher. All rights reserved - Created by Muavees and TGGamesYT",
        allSystems: "Last update: 2026-08-29"
      }
    },
    hu: {
      title: "Archívum · Redstone Launcher",
      badge: "Archívum",
      h1: "Archív verziók",
      lede: "Régi Windows buildek 1.1.0-tól 1.10.5-ig. Google Drive-on, még a GitHub repo előtt. Mindennapra a jelenlegi launchert használd.",
      crumbsHome: "Redstone Launcher",
      crumbsHere: "Archívum",
      overview: "Áttekintés",
      overviewBody: "Ez az oldal a Redstone Launcher korábbi buildjeit listázza **1.1.0**-tól **1.10.5**-ig. Ezek **csak Windowsra** készültek, és eredetileg Google Drive-on terjesztették őket, mielőtt a GitHub repo létrejött.",
      note: "Fontos",
      noteDriveTitle: "Google Drive",
      noteDrive: "Ezek régi buildek, Google Drive-on. Ha egy link törött vagy hibát ad, jelezd [GitHub Issues](https://github.com/TGGamesYT/redstone-launcher/issues/new) oldalon, vagy írj a [contact@redstone-launcher.com](mailto:contact@redstone-launcher.com) címre. Stabil használathoz mindig a legújabb kiadást vedd.",
      noteSecTitle: "Nincs karbantartás",
      noteSec: "Ezek a verziók már nincsenek karbantartva, és biztonsági hibákat tartalmazhatnak. Ha gondod van, frissíts a [www.redstone-launcher.com](https://www.redstone-launcher.com/) aktuális buildjére, vagy nyiss issue-t a [GitHub repóban](https://github.com/TGGamesYT/redstone-launcher/issues/new).",
      noteGoneTitle: "Hiányzó fájl",
      noteGone: "Ha nem tölthető le egy verzió, lehet Drive-szabályzat vagy törölt fájl. Törött linkeket [GitHub Issues](https://github.com/TGGamesYT/redstone-launcher/issues/new) oldalon jelezz.",
      versions: "Verziólista",
      versionsIntro: "Az alábbi verziók **mind Windowsra** készültek.",
      search: "Verzió keresése…",
      results: "{n} találat",
      resultsMany: "{n} találat",
      empty: "Nincs a keresésnek megfelelő verzió.",
      download: "Letöltés",
      colVersion: "Verzió",
      colStatus: "Állapot",
      colPlatform: "Platform",
      legacy: "régi",
      windows: "Windows",
      statBuilds: "Buildek",
      statRange: "Tartomány",
      statOs: "Platform",
      statHost: "Tárhely",
      statHostVal: "Google Drive",
      current: "Jelenlegi launcher",
      currentBtn: "Jelenlegi launcher",
      currentBtnVer: "{v} letöltése",
      help: "Súgóközpont",
      thisPage: "Ezen az oldalon",
      builds: "Buildek",
      more: "Továbbiak",
      nav: {
        socials: "Közösségi média",
        github: "GitHub",
        discord: "Discord",
        indicators: "Indikátorok",
        blog: "Hírek",
        archive: "Archív verziók",
        team: "Csapatunk",
        supportBug: "Támogatás és hibajelentés",
        helpCenter: "Súgóközpont",
        discordSupport: "Discord támogatás",
        githubBug: "GitHub hibajelentés",
        emailSupport: "Email támogatás",
        openMenu: "Menü megnyitása",
        rights: "© Redstone Launcher. Minden jog fenntartva - Készítette: Muavees és TGGamesYT",
        allSystems: "Utolsó frissítés: 2026-08-29"
      }
    },
    it: {
      title: "Archivio · Redstone Launcher",
      badge: "Archivio",
      h1: "Versioni d’archivio",
      lede: "Build Windows legacy da 1.1.0 a 1.10.5. Su Google Drive, prima del repository GitHub. Per l’uso quotidiano prendi il launcher attuale.",
      crumbsHome: "Redstone Launcher",
      crumbsHere: "Archivio",
      overview: "Panoramica",
      overviewBody: "Questa pagina elenca le build precedenti di Redstone Launcher dalla **1.1.0** alla **1.10.5**. Compilate **solo per Windows** e distribuite via Google Drive prima che esistesse il repository GitHub.",
      note: "Nota importante",
      noteDriveTitle: "Host Google Drive",
      noteDrive: "Sono build legacy su Google Drive. Se un link è rotto o dà errore, segnalalo su [GitHub Issues](https://github.com/TGGamesYT/redstone-launcher/issues/new) o scrivi a [contact@redstone-launcher.com](mailto:contact@redstone-launcher.com). Per la stabilità usa sempre l’ultima release.",
      noteSecTitle: "Non mantenute",
      noteSec: "Queste versioni non sono più mantenute e possono contenere falle di sicurezza. Se hai problemi, passa a una build attuale da [www.redstone-launcher.com](https://www.redstone-launcher.com/) oppure apri una issue sul [repository GitHub](https://github.com/TGGamesYT/redstone-launcher/issues/new).",
      noteGoneTitle: "File mancante",
      noteGone: "Se non riesci a scaricare una versione, può dipendere dalle policy di Google Drive o da un file rimosso. Segnala i link rotti su [GitHub Issues](https://github.com/TGGamesYT/redstone-launcher/issues/new).",
      versions: "Elenco versioni",
      versionsIntro: "Tutte le versioni sotto sono **solo Windows**.",
      search: "Cerca versione…",
      results: "{n} risultato",
      resultsMany: "{n} risultati",
      empty: "Nessuna versione corrisponde alla ricerca.",
      download: "Scarica",
      colVersion: "Versione",
      colStatus: "Stato",
      colPlatform: "Piattaforma",
      legacy: "legacy",
      windows: "Windows",
      statBuilds: "Build",
      statRange: "Intervallo",
      statOs: "Piattaforma",
      statHost: "Host",
      statHostVal: "Google Drive",
      current: "Launcher attuale",
      currentBtn: "Prendi il launcher attuale",
      currentBtnVer: "Prendi {v}",
      help: "Centro assistenza",
      thisPage: "In questa pagina",
      builds: "Build",
      more: "Altro",
      nav: {
        socials: "Social",
        github: "GitHub",
        discord: "Discord",
        indicators: "Indicatori",
        blog: "News",
        archive: "Versioni d’archivio",
        team: "Il nostro team",
        supportBug: "Supporto e segnalazioni",
        helpCenter: "Centro assistenza",
        discordSupport: "Supporto Discord",
        githubBug: "Segnalazione bug su GitHub",
        emailSupport: "Supporto email",
        openMenu: "Apri menu",
        rights: "© Redstone Launcher. Tutti i diritti riservati - Creato da Muavees e TGGamesYT",
        allSystems: "Ultimo aggiornamento: 2026-08-29"
      }
    },
    de: {
      title: "Archiv · Redstone Launcher",
      badge: "Archiv",
      h1: "Archivversionen",
      lede: "Alte Windows-Builds von 1.1.0 bis 1.10.5. Auf Google Drive, noch vor dem GitHub-Repo. Für den Alltag den aktuellen Launcher nehmen.",
      crumbsHome: "Redstone Launcher",
      crumbsHere: "Archiv",
      overview: "Überblick",
      overviewBody: "Diese Seite listet ältere Builds von Redstone Launcher von **1.1.0** bis **1.10.5**. Sie wurden **nur für Windows** gebaut und zuerst über Google Drive verteilt, bevor das GitHub-Repo existierte.",
      note: "Wichtiger Hinweis",
      noteDriveTitle: "Google Drive",
      noteDrive: "Das sind Legacy-Builds auf Google Drive. Ist ein Link tot oder gibt er einen Fehler, melde ihn über [GitHub Issues](https://github.com/TGGamesYT/redstone-launcher/issues/new) oder schreib an [contact@redstone-launcher.com](mailto:contact@redstone-launcher.com). Für Stabilität immer die neueste Version nehmen.",
      noteSecTitle: "Nicht gewartet",
      noteSec: "Diese Versionen werden nicht mehr gepflegt und können Sicherheitslücken enthalten. Bei Problemen auf einen aktuellen Build von [www.redstone-launcher.com](https://www.redstone-launcher.com/) wechseln oder ein Issue im [GitHub-Repo](https://github.com/TGGamesYT/redstone-launcher/issues/new) öffnen.",
      noteGoneTitle: "Datei fehlt",
      noteGone: "Lässt sich eine Version nicht laden, kann das an Google-Drive-Regeln oder einer entfernten Datei liegen. Tote Links über [GitHub Issues](https://github.com/TGGamesYT/redstone-launcher/issues/new) melden.",
      versions: "Versionsliste",
      versionsIntro: "Alle unten stehenden Versionen sind **nur Windows**.",
      search: "Version suchen…",
      results: "{n} Treffer",
      resultsMany: "{n} Treffer",
      empty: "Keine Version passt zur Suche.",
      download: "Download",
      colVersion: "Version",
      colStatus: "Status",
      colPlatform: "Plattform",
      legacy: "legacy",
      windows: "Windows",
      statBuilds: "Builds",
      statRange: "Spanne",
      statOs: "Plattform",
      statHost: "Host",
      statHostVal: "Google Drive",
      current: "Aktueller Launcher",
      currentBtn: "Aktuellen Launcher holen",
      currentBtnVer: "{v} holen",
      help: "Hilfezentrum",
      thisPage: "Auf dieser Seite",
      builds: "Builds",
      more: "Mehr",
      nav: {
        socials: "Soziale Medien",
        github: "GitHub",
        discord: "Discord",
        indicators: "Indikatoren",
        blog: "News",
        archive: "Archivversionen",
        team: "Unser Team",
        supportBug: "Support & Fehlerbericht",
        helpCenter: "Hilfezentrum",
        discordSupport: "Discord Support",
        githubBug: "GitHub Fehlerbericht",
        emailSupport: "E-Mail Support",
        openMenu: "Menü öffnen",
        rights: "© Redstone Launcher. Alle Rechte vorbehalten - Erstellt von Muavees und TGGamesYT",
        allSystems: "Letztes Update: 2026-08-29"
      }
    }
  };

  const DEFAULT_LANG = "en";
  let latestVersion = "";

  function storedLang() {
    try { return localStorage.getItem("rl-lang"); } catch { return null; }
  }
  function storedTheme() {
    try { return localStorage.getItem("rl-theme"); } catch { return null; }
  }

  let lang = storedLang() || DEFAULT_LANG;
  if (!I18N[lang]) lang = DEFAULT_LANG;

  function L() {
    return I18N[lang] || I18N.en;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function inline(s) {
    let out = esc(s);
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const safe = esc(href);
      const ext = /^https?:/i.test(href) || href.startsWith("mailto:");
      return `<a href="${safe}"${ext ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
    });
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return out;
  }

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

  function dlIcon() {
    return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></svg>`;
  }

  function boxIcon() {
    return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8H3l2-5h14l2 5z"/><path d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"/><path d="M10 12h4"/></svg>`;
  }

  function searchIcon() {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`;
  }

  function currentCta() {
    const t = L();
    if (latestVersion) return t.currentBtnVer.replace("{v}", latestVersion);
    return t.currentBtn;
  }

  function renderList(query) {
    const t = L();
    const q = (query || "").trim().toLowerCase();
    const hits = VERSIONS.filter((row) => !q || row.v.toLowerCase().includes(q));
    const list = document.getElementById("versionList");
    const empty = document.getElementById("archiveEmpty");
    const status = document.getElementById("searchStatus");
    if (!list) return;

    list.innerHTML = hits.map((row) => `
      <tr id="v-${esc(row.v).replace(/\./g, "-")}" data-v="${esc(row.v)}">
        <td class="version-id">${esc(row.v)}</td>
        <td><span class="pill pill-legacy">${esc(t.legacy)}</span></td>
        <td><span class="pill pill-win">${esc(t.windows)}</span></td>
        <td>
          <a class="btn btn-primary ios-spring" href="${esc(row.href)}" target="_blank" rel="noopener">
            ${dlIcon()} ${esc(t.download)}
          </a>
        </td>
      </tr>
    `).join("");

    const wrap = document.getElementById("versionTableWrap");
    if (wrap) wrap.hidden = hits.length === 0;

    if (empty) empty.classList.toggle("show", hits.length === 0);
    if (status) {
      status.textContent = q
        ? (hits.length === 1 ? t.results : t.resultsMany).replace("{n}", String(hits.length))
        : "";
    }

    document.querySelectorAll(".sidebar-ver").forEach((a) => {
      const v = a.getAttribute("data-v");
      a.style.display = !q || (v && v.toLowerCase().includes(q)) ? "" : "none";
    });
  }

  function buildSidebar() {
    const t = L();
    const nav = document.getElementById("sidebarNav");
    const pageLinks = [
      { href: "#overview", title: t.overview },
      { href: "#note", title: t.note },
      { href: "#versions", title: t.versions }
    ].map((it) => `<a class="sidebar-link" href="${it.href}">${esc(it.title)}</a>`).join("");

    const vers = VERSIONS.map((row) =>
      `<a class="sidebar-link sidebar-ver" data-v="${esc(row.v)}" href="#v-${row.v.replace(/\./g, "-")}">${esc(row.v)}</a>`
    ).join("");

    nav.innerHTML = `
      <div class="sidebar-group">
        <div class="sidebar-label">${esc(t.thisPage)}</div>
        ${pageLinks}
      </div>
      <div class="sidebar-group">
        <div class="sidebar-label">${esc(t.builds)}</div>
        ${vers}
      </div>
      <div class="sidebar-group">
        <div class="sidebar-label">${esc(t.more)}</div>
        <a class="sidebar-link" href="https://www.redstone-launcher.com/">${esc(t.current)}</a>
        <a class="sidebar-link" href="../support/">${esc(t.help)}</a>
      </div>
    `;
  }

  function applyChrome() {
    const t = L();
    document.title = t.title;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const parts = key.split(".");
      let cur = t;
      for (const p of parts) cur = cur && cur[p];
      if (typeof cur === "string") el.textContent = cur;
    });
    const sel = document.getElementById("langSwitcher");
    if (sel) sel.value = lang;
    const search = document.getElementById("versionSearch");
    if (search) search.placeholder = t.search;
    const cta = document.getElementById("currentCta");
    if (cta) cta.textContent = currentCta();
    const empty = document.getElementById("archiveEmpty");
    if (empty) empty.textContent = t.empty;
  }

  function renderCopy() {
    const t = L();
    const mount = document.getElementById("article");
    mount.innerHTML = `
      <div class="crumbs">
        <a href="https://redstone-launcher.com/">${esc(t.crumbsHome)}</a>
        <span>/</span>
        <span>${esc(t.crumbsHere)}</span>
      </div>
      <div class="hero-help animate-fade-up">
        <div class="badge glass">${boxIcon()} ${esc(t.badge)}</div>
        <h1>${esc(t.h1)}</h1>
        <p class="lede">${esc(t.lede)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary ios-spring" id="currentCta" href="https://www.redstone-launcher.com/">${esc(currentCta())}</a>
          <a class="btn btn-glass glass ios-spring" href="../support/">${esc(t.help)}</a>
        </div>
      </div>
      <div class="stat-grid">
        <div class="stat-card glass"><span class="k">${esc(t.statBuilds)}</span><span class="v">${VERSIONS.length}</span></div>
        <div class="stat-card glass"><span class="k">${esc(t.statRange)}</span><span class="v">1.1.0 - 1.10.5</span></div>
        <div class="stat-card glass"><span class="k">${esc(t.statOs)}</span><span class="v">${esc(t.windows)}</span></div>
        <div class="stat-card glass"><span class="k">${esc(t.statHost)}</span><span class="v">${esc(t.statHostVal)}</span></div>
      </div>
      <article class="article-body">
        <h2 id="overview">${esc(t.overview)}</h2>
        <p>${inline(t.overviewBody)}</p>
        <h2 id="note">${esc(t.note)}</h2>
        <div class="callout warn"><strong>${inline(t.noteDriveTitle)}</strong><p>${inline(t.noteDrive)}</p></div>
        <div class="callout info"><strong>${inline(t.noteSecTitle)}</strong><p>${inline(t.noteSec)}</p></div>
        <div class="callout tip"><strong>${inline(t.noteGoneTitle)}</strong><p>${inline(t.noteGone)}</p></div>
        <h2 id="versions">${esc(t.versions)}</h2>
        <p>${inline(t.versionsIntro)}</p>
        <div class="filter-bar">
          <label class="search-field">
            ${searchIcon()}
            <input id="versionSearch" type="search" autocomplete="off" spellcheck="false" placeholder="${esc(t.search)}">
          </label>
          <span class="search-status" id="searchStatus"></span>
        </div>
        <div class="table-wrap glass" id="versionTableWrap">
          <table class="version-table">
            <thead>
              <tr>
                <th>${esc(t.colVersion)}</th>
                <th>${esc(t.colStatus)}</th>
                <th>${esc(t.colPlatform)}</th>
                <th>${esc(t.download)}</th>
              </tr>
            </thead>
            <tbody id="versionList"></tbody>
          </table>
        </div>
        <div class="archive-empty" id="archiveEmpty">${esc(t.empty)}</div>
      </article>
    `;

    const input = document.getElementById("versionSearch");
    input.addEventListener("input", () => renderList(input.value));
    renderList("");
  }

  function setLang(next) {
    if (!I18N[next]) return;
    lang = next;
    try { localStorage.setItem("rl-lang", lang); } catch { /* ignore */ }
    applyChrome();
    buildSidebar();
    renderCopy();
    applyChrome();
  }

  function boot() {
    applyChrome();
    buildSidebar();
    renderCopy();
    applyChrome();

    fetch("https://api.github.com/repos/TGGamesYT/redstone-launcher/releases/latest")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (!data || !data.tag_name) return;
        latestVersion = String(data.tag_name).replace(/^v/i, "");
        const cta = document.getElementById("currentCta");
        if (cta) cta.textContent = currentCta();
      })
      .catch(() => {});

    document.getElementById("themeToggle").addEventListener("click", () => {
      theme = theme === "light" ? "dark" : "light";
      try { localStorage.setItem("rl-theme", theme); } catch { /* ignore */ }
      applyTheme(theme);
    });

    document.getElementById("langSwitcher").addEventListener("change", (e) => {
      const next = e.target.value;
      if (!I18N[next]) {
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

    document.getElementById("openVersionSearch").addEventListener("click", () => {
      const input = document.getElementById("versionSearch");
      if (input) {
        input.scrollIntoView({ behavior: "smooth", block: "center" });
        input.focus();
      }
      document.getElementById("docsSidebar").classList.remove("open");
      document.getElementById("sidebarScrim").classList.remove("open");
    });

    document.getElementById("sidebarToggle").addEventListener("click", () => {
      document.getElementById("docsSidebar").classList.add("open");
      document.getElementById("sidebarScrim").classList.add("open");
    });
    document.getElementById("sidebarScrim").addEventListener("click", () => {
      document.getElementById("docsSidebar").classList.remove("open");
      document.getElementById("sidebarScrim").classList.remove("open");
    });

    document.addEventListener("keydown", (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      if (e.key === "/" && tag !== "input" && tag !== "textarea" && tag !== "select") {
        e.preventDefault();
        const input = document.getElementById("versionSearch");
        if (input) input.focus();
      }
      if (e.key === "Escape") {
        document.getElementById("docsSidebar").classList.remove("open");
        document.getElementById("sidebarScrim").classList.remove("open");
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
