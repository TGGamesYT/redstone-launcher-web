function copyText() {
    navigator.clipboard.writeText("sudo snap install redstone-launcher");
}

// Snapshot original English text from the DOM before any translations run
const _originals = {};
document.querySelectorAll('[data-i18n]').forEach(el => {
    _originals[el.dataset.i18n] = el.textContent;
});

const translations = {
    en: {}, // English is the page default — originals are used as fallback

    hu: {
        badge_beta: "…-s Verzió", title: "Redstone Launcher",
        hero_desc: "Modern és erőteljes Minecraft launcher fejlett funkciókkal és kiváló teljesítménnyel.",
        download: "Letöltés az operációs rendszeredhez", other_downloads: "Egyéb letöltések", discord: "Discord",
        free: "Ingyenes és nyílt forráskódú", cross: "Platformfüggetlen", updates: "Rendszeres frissítések",
        features: "Erőteljes funkciók", features_desc: "Minden, ami a tökéletes Minecraft élményhez kell",
        f1_title: "Saját Minecraft-példányok", f1_desc: "Tartsd külön a verziókat, betöltőket, modokat, beállításokat és ikonokat minden összeállításhoz.",
        f2_title: "Hozd magaddal a modpackjeidet", f2_desc: "Importálj profilokat más launcherekből, vagy telepíts modpackeket példányokra és szerverekre.",
        f3_title: "Találd meg a következő kedvenc mododat", f3_desc: "Keress a Modrinth és a CurseForge kínálatában, ellenőrizd a betöltő kompatibilitását, és telepíts magabiztosan.",
        f4_title: "Beépített skinműhely", f4_desc: "Szerkeszd és nézd meg 3D-ben a skineket, kezeld a köpenyeket, és szinkronizáld a skin könyvtáradat.",
        f5_title: "Kapcsolódó világok", f5_desc: "Oszd meg a szerverlistákat a példányok között, és a megfelelő Minecraft-összeállítással csatlakozz.",
        f6_title: "Indíts eseményszervert", f6_desc: "Írd le a szervert egy fájlban, hagyd, hogy a launcher beállítsa, majd hívd meg barátaidat a relén keresztül.",
        f7_title: "Tedd sajátoddá a launchert", f7_desc: "Állítsd be a témákat, háttereket, ikonokat és egyéni CSS-t, majd mentsd és oszd meg a megjelenést.",
        f8_title: "Vidd magaddal a beállításaidat", f8_desc: "Szinkronizáld a játékbeállításokat és a többjátékos szervereket a példányaid és számítógépeid között.",
        f9_title: "Készíts saját resource packet", f9_desc: "Készíts egyedi totemeket, és állíts össze resource packeket a Vanilla Tweaks eszközeivel.",
        gallery: "Funkciógaléria", gallery_desc: "Nézd meg a Redstone Launchert működés közben",
        supported: "Közösség által támogatva", supporters: "Támogatóink", supporters_desc: "Külön köszönet minden támogatónknak.",
        support_cta: "Szeretnéd támogatni a Redstone Launchert?", become: "Válj támogatóvá",
        footer_desc: "Modern Minecraft launcher. A közösségtől, a közösségnek.",
        project: "Projekt", support: "Támogatás", contact: "Kapcsolat", downloads: "Letöltések", source_code: "Forráskód",
        report_bug: "Hiba jelentése", blog: "Blog", patreon: "Patreon", discord_server: "Discord szerver",
        contact_email: "Kapcsolat emailben", chat_discord: "Csevegés a Discordon",
        socials: "Közösségi média", indicators: "Indikátorok", support_bug: "Támogatás és hibajelentés",
        youtube: "YouTube", github: "GitHub", new_features: "Új funkciók", our_team: "Csapatunk",
        discord_support: "Discord támogatás", github_bug: "GitHub hibajelentés", email_support: "Email támogatás",
        word_free: "100% Ingyenes", word_open: "100% Nyílt forráskódú", word_cross: "Platformfüggetlen", word_updates: "Rendszeres frissítések", word_custom: "100% Testreszabható",
        support: "Segitség"
    },
    it: {
        badge_beta: "Versione …", title: "Redstone Launcher",
        hero_desc: "Launcher moderno e potente per Minecraft con funzionalità avanzate.",
        download: "Scarica per il tuo sistema operativo", other_downloads: "Altri download", discord: "Discord",
        free: "Gratuito e Open Source", cross: "Multi-piattaforma", updates: "Aggiornamenti regolari",
        features: "Funzionalità avanzate", features_desc: "Tutto ciò che serve per un'esperienza Minecraft perfetta",
        f1_title: "Istanze Minecraft, a modo tuo", f1_desc: "Tieni versioni, loader, mod, impostazioni e icone separati per ogni configurazione.",
        f2_title: "Porta con te i tuoi modpack", f2_desc: "Importa profili da altri launcher o installa modpack in un'istanza o su un server.",
        f3_title: "Trova il tuo prossimo mod preferito", f3_desc: "Cerca su Modrinth e CurseForge, verifica la compatibilità dei loader e installa senza dubbi.",
        f4_title: "Un editor di skin integrato", f4_desc: "Modifica e visualizza le skin in 3D, gestisci le mantelle e sincronizza la tua raccolta.",
        f5_title: "I tuoi mondi, connessi", f5_desc: "Condividi gli elenchi server tra le istanze e accedi con la configurazione Minecraft giusta.",
        f6_title: "Avvia un server per eventi", f6_desc: "Descrivi un server in un file, lascia che il launcher lo configuri e invita gli amici tramite relay.",
        f7_title: "Personalizza il launcher", f7_desc: "Scegli temi, sfondi, icone e CSS personalizzato, poi salva e condividi il tuo stile.",
        f8_title: "Porta con te le impostazioni", f8_desc: "Sincronizza opzioni di gioco e server multiplayer tra istanze e computer.",
        f9_title: "Crea un resource pack tutto tuo", f9_desc: "Crea totem personalizzati e prepara resource pack con gli strumenti Vanilla Tweaks.",
        gallery: "Galleria", gallery_desc: "Scopri Redstone Launcher in azione",
        supported: "Supportato dalla community", supporters: "I nostri sostenitori", supporters_desc: "Grazie a tutti coloro che supportano il progetto.",
        support_cta: "Vuoi supportare Redstone Launcher?", become: "Diventa un sostenitore",
        footer_desc: "Launcher Minecraft moderno creato dalla community.",
        project: "Progetto", support: "Supporto", contact: "Contatti", downloads: "Download", source_code: "Codice sorgente",
        report_bug: "Segnala un bug", blog: "Blog", patreon: "Patreon", discord_server: "Server Discord",
        contact_email: "Contatta via email", chat_discord: "Chatta su Discord",
        socials: "Social", indicators: "Indicatori", support_bug: "Supporto e segnalazioni",
        youtube: "YouTube", github: "GitHub", new_features: "Nuove funzionalità", our_team: "Il nostro team",
        discord_support: "Supporto Discord", github_bug: "Segnalazione bug su GitHub", email_support: "Supporto email",
        word_free: "100% Gratuito", word_open: "100% Open Source", word_cross: "Multipiattaforma", word_updates: "Aggiornamenti regolari", word_custom: "100% Personalizzabile",
        support: "Supporto"
    },
    de: {
        badge_beta: "Version …", title: "Redstone Launcher",
        hero_desc: "Der moderne und leistungsstarke Minecraft Launcher.",
        download: "Für dein Betriebssystem herunterladen", other_downloads: "Weitere Downloads", discord: "Discord",
        free: "Kostenlos & Open Source", cross: "Plattformübergreifend", updates: "Regelmäßige Updates",
        features: "Leistungsstarke Funktionen", features_desc: "Alles für das ultimative Minecraft-Erlebnis",
        f1_title: "Minecraft-Instanzen nach Wunsch", f1_desc: "Halte Versionen, Loader, Mods, Einstellungen und Symbole für jedes Setup getrennt.",
        f2_title: "Modpacks einfach mitnehmen", f2_desc: "Importiere Profile aus anderen Launchern oder installiere Modpacks in Instanzen und Servern.",
        f3_title: "Finde deinen nächsten Lieblingsmod", f3_desc: "Durchsuche Modrinth und CurseForge, prüfe die Loader-Kompatibilität und installiere gezielt.",
        f4_title: "Integriertes Skin-Studio", f4_desc: "Bearbeite und betrachte Skins in 3D, verwalte Umhänge und synchronisiere deine Skin-Bibliothek.",
        f5_title: "Deine Welten, verbunden", f5_desc: "Teile Serverlisten zwischen Instanzen und tritt mit dem passenden Minecraft-Setup bei.",
        f6_title: "Event-Server starten", f6_desc: "Beschreibe einen Server in einer Datei, lass ihn vom Launcher einrichten und lade Freunde über das Relay ein.",
        f7_title: "Mach den Launcher zu deinem", f7_desc: "Passe Designs, Hintergründe, App-Symbole und eigenes CSS an und teile deinen Look.",
        f8_title: "Einstellungen überall dabei", f8_desc: "Synchronisiere Spieloptionen und Multiplayer-Server zwischen Instanzen und Computern.",
        f9_title: "Eigenes Ressourcenpaket erstellen", f9_desc: "Erstelle Totems und stelle Ressourcenpakete mit den Vanilla-Tweaks-Tools zusammen.",
        gallery: "Funktionsgalerie", gallery_desc: "Sieh Redstone Launcher in Aktion",
        supported: "Von der Community unterstützt", supporters: "Unsere Unterstützer", supporters_desc: "Danke an alle Unterstützer des Projekts.",
        support_cta: "Möchtest du Redstone Launcher unterstützen?", become: "Unterstützer werden",
        footer_desc: "Moderner Minecraft Launcher aus der Community.",
        project: "Projekt", support: "Support", contact: "Kontakt", downloads: "Downloads", source_code: "Quellcode",
        report_bug: "Fehler melden", blog: "Blog", patreon: "Patreon", discord_server: "Discord Server",
        contact_email: "Kontakt per E-Mail", chat_discord: "Chat auf Discord",
        socials: "Soziale Medien", indicators: "Indikatoren", support_bug: "Support & Fehlerbericht",
        youtube: "YouTube", github: "GitHub", new_features: "Neue Funktionen", our_team: "Unser Team",
        discord_support: "Discord Support", github_bug: "GitHub Fehlerbericht", email_support: "E-Mail Support",
        word_free: "100% Kostenlos", word_open: "100% Open Source", word_cross: "Plattformübergreifend", word_updates: "Regelmäßige Updates", word_custom: "100% Anpassbar",
        support: "Support"
    }
};

document.getElementById('year').textContent = new Date().getFullYear();

// Fetch latest release tag from GitHub and update the version badge
(async function fetchLatestVersion() {
    try {
        const res = await fetch('https://api.github.com/repos/TGGamesYT/redstone-launcher/releases/latest');
        if (!res.ok) throw new Error('GitHub API error');
        const data = await res.json();
        const tag = data.tag_name || '';
        const version = tag.replace(/^v/, '');
        if (!version) return;

        const label = `Version ${version}`;
        _originals['badge_beta'] = label;

        const langSuffixes = {
            hu: `${version}-s Verzió`,
            it: `Versione ${version}`,
            de: `Version ${version}`
        };
        Object.entries(langSuffixes).forEach(([lang, text]) => {
            if (translations[lang]) translations[lang].badge_beta = text;
        });

        applyLang(document.documentElement.lang || 'en');
    } catch (e) { /* ignore */ }
})();

const langSwitcher = document.getElementById('langSwitcher');
const savedLang = localStorage.getItem('lang') || 'en';
langSwitcher.value = savedLang;
applyLang(savedLang);
langSwitcher.addEventListener('change', e => {
    applyLang(e.target.value);
    localStorage.setItem('lang', e.target.value);
});

function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translated = translations[lang]?.[key];
        el.textContent = translated || _originals[key] || el.textContent;
    });
    if (typeof refreshWordScroller === 'function') refreshWordScroller();
}

const themeToggle = document.getElementById('themeToggle');
const sunIcon = themeToggle.querySelector('.sun-icon');
const moonIcon = themeToggle.querySelector('.moon-icon');
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);
themeToggle.addEventListener('click', () => {
    const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
});

function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.classList.add('light');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        document.documentElement.classList.remove('light');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

const mobileToggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');
mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
};

function detectOS() {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) return "iOS";
    if (ua.includes("android")) return "Android";
    if (ua.includes("win")) return "Windows";
    if (ua.includes("mac")) return "macOS";
    if (ua.includes("linux")) return "Linux";
    return null;
}

function closeLinuxModal() {
    document.getElementById('linuxModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const os = detectOS();
    const downloadBtn = document.getElementById('downloadBtn');

    const downloads = {
        Windows: "https://github.com/TGGamesYT/redstone-launcher/releases/latest/download/Redstone-Launcher.exe",
        macOS: "https://github.com/TGGamesYT/redstone-launcher/releases/latest/download/Redstone-Launcher.dmg"
    };

    if (os === "Linux") {
        const span = downloadBtn.querySelector('span') || downloadBtn;
        span.textContent = "Download for Linux";

        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('linuxModal').style.display = 'flex';
        });
    } else if (os && downloads[os]) {
        downloadBtn.href = downloads[os];
        const span = downloadBtn.querySelector('span') || downloadBtn;
        span.textContent = `Download for ${os}`;
    }
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

(function () {
    const HOLD_MS = 1800;
    const SLIDE_MS = 420;

    const container = document.getElementById('wordScroller');
    if (!container) return;

    function getWords() {
        return Array.from(container.querySelectorAll('.word'))
            .map(s => s.textContent.trim())
            .filter(Boolean);
    }

    let current = 0;
    let words = getWords();
    let timer = null;

    const display = document.createElement('span');
    display.className = 'word';
    display.style.cssText =
        'display:block;height:100%;padding-left:6px;color:var(--muted);' +
        'transition:none;';
    container.innerHTML = '';
    container.appendChild(display);

    function showWord(idx, instant) {
        const word = words[idx] || '';
        if (instant) {
            display.style.transition = 'none';
            display.style.transform = 'translateY(0)';
            display.style.opacity = '1';
            display.textContent = word;
            return;
        }
        display.style.transition = `transform ${SLIDE_MS}ms cubic-bezier(0.4,0,0.2,1), opacity ${SLIDE_MS}ms`;
        display.style.transform = 'translateY(-110%)';
        display.style.opacity = '0';

        setTimeout(() => {
            display.style.transition = 'none';
            display.style.transform = 'translateY(110%)';
            display.style.opacity = '0';
            display.textContent = word;
            void display.offsetHeight;
            display.style.transition = `transform ${SLIDE_MS}ms cubic-bezier(0.4,0,0.2,1), opacity ${SLIDE_MS}ms`;
            display.style.transform = 'translateY(0)';
            display.style.opacity = '1';
        }, SLIDE_MS);
    }

    function tick() {
        current = (current + 1) % words.length;
        showWord(current, false);
        timer = setTimeout(tick, HOLD_MS + SLIDE_MS * 2);
    }

    showWord(current, true);
    timer = setTimeout(tick, HOLD_MS);

    window.refreshWordScroller = function () {
        const lang = document.documentElement.lang || 'en';
        const keys = ['word_free', 'word_open', 'word_cross', 'word_updates', 'word_custom'];
        words = keys.map(k =>
            translations[lang]?.[k] || _originals[k] || k
        ).filter(Boolean);
        current = 0;
        clearTimeout(timer);
        showWord(current, true);
        timer = setTimeout(tick, HOLD_MS);
    };
})();
const NEWS_API_BASE = "https://redstoneapi.vercel.app";
const NEWS_PREVIEW_COUNT = 3;
let newsItemsCache = [];
let newsSectionsCache = [];

function extractMediaUrlFromText(text) {
    if (!text || typeof text !== 'string') return '';
    const match = text.match(/https?:\/\/(?:[\w\-%.~:/?#[\]@!$&'()*+,;=]+)\.(?:png|jpe?g|gif|webp|mp4|webm|ogg)(?:[\w\-%.~:/?#[\]@!$&'()*+,;=]*)?/i);
    return match ? match[0].trim() : '';
}

function getNewsMediaUrl(item) {
    if (item.hasMedia && item.mediaUrl) return item.mediaUrl;
    return '';
}

function getNewsMediaMarkup(mediaUrl, mediaType, title) {
    if (!mediaUrl) return '';
    const safeUrl = escapeHtml(mediaUrl);
    const safeTitle = escapeHtml(title || 'News image');

    if (mediaType === 'video') {
        return `
                <div class="news-card-image">
                    <video src="${safeUrl}" autoplay muted loop playsinline preload="metadata" onerror="this.closest('.news-card-image').remove()"></video>
                </div>`;
    }

    return `
                <div class="news-card-image">
                    <img src="${safeUrl}" alt="${safeTitle}" onerror="this.closest('.news-card-image').remove()" />
                </div>`;
}

function renderNewsCards(limit = NEWS_PREVIEW_COUNT) {
    const grid = document.getElementById('newsGrid');
    const actionWrap = document.getElementById('newsActions');
    const loadMoreBtn = document.getElementById('newsLoadMoreBtn');
    if (!grid) return;

    const visibleItems = newsItemsCache.slice(0, Math.min(limit, newsItemsCache.length));
    grid.innerHTML = visibleItems.map((item, i) => {
        const mediaMarkup = getNewsMediaMarkup(getNewsMediaUrl(item), item.mediaType, item.title);
        return `
            <div class="news-card glass ios-spring reveal visible" data-index="${i}">
                ${mediaMarkup}
                <div class="news-card-body">
                    <div class="news-card-meta">${newsSectionName(item.sectionId)} · ${new Date(item.createdAt).toLocaleDateString()}</div>
                    <h3 class="news-card-title">${escapeHtml(item.title)}</h3>
                    <p class="news-card-excerpt">${escapeHtml(item.content)}</p>
                </div>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('click', () => openNewsModal(Number(card.dataset.index)));
    });

    if (actionWrap) {
        if (newsItemsCache.length > NEWS_PREVIEW_COUNT) {
            actionWrap.style.display = 'flex';
            if (loadMoreBtn) {
                loadMoreBtn.textContent = 'See more';
                loadMoreBtn.onclick = () => {
                    renderNewsCards(newsItemsCache.length);
                    actionWrap.style.display = 'none';
                };
            }
        } else {
            actionWrap.style.display = 'none';
        }
    }
}

async function loadNewsSection() {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;

    try {
        const [sectionsRes, itemsRes] = await Promise.all([
            fetch(`${NEWS_API_BASE}/api/sections`).then(r => r.json()),
            fetch(`${NEWS_API_BASE}/api/news`).then(r => r.json())
        ]);
        newsSectionsCache = sectionsRes.sections || [];
        newsItemsCache = itemsRes.items || [];

        if (newsItemsCache.length === 0) {
            grid.innerHTML = '<p class="section-desc" style="grid-column:1/-1;text-align:center;">No news yet, check back soon.</p>';
            const actionWrap = document.getElementById('newsActions');
            if (actionWrap) actionWrap.style.display = 'none';
            return;
        }

        renderNewsCards();
    } catch (e) {
        grid.innerHTML = '<p class="section-desc" style="grid-column:1/-1;text-align:center;">Failed to load news.</p>';
        const actionWrap = document.getElementById('newsActions');
        if (actionWrap) actionWrap.style.display = 'none';
    }
}

function newsSectionName(id) {
    return newsSectionsCache.find(s => s.id === id)?.name || 'General';
}

function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function openNewsModal(index) {
    const item = newsItemsCache[index];
    if (!item) return;
    document.getElementById('newsModalMeta').textContent = `${newsSectionName(item.sectionId)} · ${new Date(item.createdAt).toLocaleDateString()}`;
    const imageEl = document.getElementById('newsModalImage');
    const mediaUrl = getNewsMediaUrl(item);
    if (mediaUrl) {
        imageEl.innerHTML = getNewsMediaMarkup(mediaUrl, item.mediaType, item.title).replace('news-card-image', 'news-modal-media');
        imageEl.style.display = 'block';
    } else {
        imageEl.innerHTML = '';
        imageEl.style.display = 'none';
    }
    document.getElementById('newsModalTitle').textContent = item.title;
    document.getElementById('newsModalContent').textContent = item.content;
    const hintEl = document.getElementById('newsModalHint');
    if (item.hint) {
        hintEl.textContent = item.hint;
        hintEl.style.display = 'block';
    } else {
        hintEl.style.display = 'none';
    }
    document.getElementById('newsModal').style.display = 'flex';
}

function closeNewsModal() {
    document.getElementById('newsModal').style.display = 'none';
}
const newsModalImageEl = document.getElementById('newsModalImage');
newsModalImageEl.addEventListener('mousemove', (e) => {
    const media = e.currentTarget.querySelector('.news-modal-media');
    if (!media) return;
    const target = media.querySelector('img, video');
    if (!target) return;
    const rect = media.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.transformOrigin = `${x}% ${y}%`;
});

newsModalImageEl.addEventListener('mouseleave', () => {
    const target = newsModalImageEl.querySelector('img, video');
    if (target) target.style.transformOrigin = 'center';
});
document.getElementById('newsModal').addEventListener('click', (e) => {
    if (e.target.id === 'newsModal') closeNewsModal();
});

document.addEventListener('DOMContentLoaded', loadNewsSection);