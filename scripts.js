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
        f1_title: "Két kiadás: Fancy & Fast", f1_desc: "A Fancy Edition modern felületet kínál Electron alapon, míg a Fast Edition maximális teljesítményre van optimalizálva.",
        f2_title: "Teljes szabadság az instance-ek felett", f2_desc: "Minecraft instance-ek létrehozása, klónozása és testreszabása külön modokkal és profilokkal.",
        f3_title: "Adatvédelem mindenekelőtt", f3_desc: "Nincs követés, nincs analitika. Minden adat 100%-ban a te eszközödön marad.",
        f4_title: "Moduláris eszközök", f4_desc: "Beépített világ szerkesztők és resource pack optimalizálók teszik egyszerűbbé a játékot.",
        f5_title: "Zökkenőmentes mod- és profilkezelés", f5_desc: "Modok és teljes profilok kezelése, frissítése egyetlen kattintással.",
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
        word_free: "100% Ingyenes", word_open: "100% Nyílt forráskódú", word_cross: "Platformfüggetlen", word_updates: "Rendszeres frissítések", word_custom: "100% Testreszabható"
    },
    it: {
        badge_beta: "Versione …", title: "Redstone Launcher",
        hero_desc: "Launcher moderno e potente per Minecraft con funzionalità avanzate.",
        download: "Scarica per il tuo sistema operativo", other_downloads: "Altri download", discord: "Discord",
        free: "Gratuito e Open Source", cross: "Multi-piattaforma", updates: "Aggiornamenti regolari",
        features: "Funzionalità avanzate", features_desc: "Tutto ciò che serve per un'esperienza Minecraft perfetta",
        f1_title: "Due Edizioni: Fancy & Fast", f1_desc: "Fancy Edition offre un'interfaccia moderna, Fast Edition massima velocità e prestazioni.",
        f2_title: "Libertà totale delle istanze", f2_desc: "Crea e personalizza istanze Minecraft con mod e profili separati.",
        f3_title: "Privacy prima di tutto", f3_desc: "Nessun tracciamento. Tutto rimane locale sul tuo dispositivo.",
        f4_title: "Strumenti modulari", f4_desc: "Strumenti integrati per semplificare ogni aspetto del gioco.",
        f5_title: "Gestione mod e profili fluida", f5_desc: "Installa e organizza mod e profili con un solo clic.",
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
        word_free: "100% Gratuito", word_open: "100% Open Source", word_cross: "Multipiattaforma", word_updates: "Aggiornamenti regolari", word_custom: "100% Personalizzabile"
    },
    de: {
        badge_beta: "Version …", title: "Redstone Launcher",
        hero_desc: "Der moderne und leistungsstarke Minecraft Launcher.",
        download: "Für dein Betriebssystem herunterladen", other_downloads: "Weitere Downloads", discord: "Discord",
        free: "Kostenlos & Open Source", cross: "Plattformübergreifend", updates: "Regelmäßige Updates",
        features: "Leistungsstarke Funktionen", features_desc: "Alles für das ultimative Minecraft-Erlebnis",
        f1_title: "Zwei Editionen: Fancy & Fast", f1_desc: "Fancy Edition mit modernem UI, Fast Edition für maximale Leistung.",
        f2_title: "Volle Instanzfreiheit", f2_desc: "Verwalte Minecraft-Instanzen komplett getrennt und flexibel.",
        f3_title: "Datenschutz zuerst", f3_desc: "Keine Datenverfolgung. Alles bleibt lokal.",
        f4_title: "Modulare Werkzeuge", f4_desc: "Integrierte Tools machen Minecraft einfacher.",
        f5_title: "Nahtloses Mod- & Profilmanagement", f5_desc: "Mods und Profile mit nur einem Klick verwalten.",
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
        word_free: "100% Kostenlos", word_open: "100% Open Source", word_cross: "Plattformübergreifend", word_updates: "Regelmäßige Updates", word_custom: "100% Anpassbar"
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
    } catch (e) {
        console.warn('Could not fetch latest release version:', e);
    }
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
let newsItemsCache = [];
let newsSectionsCache = [];

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
            return;
        }

        grid.innerHTML = newsItemsCache.map((item, i) => `
            <div class="news-card glass ios-spring reveal visible" data-index="${i}">
                <div class="news-card-meta">${newsSectionName(item.sectionId)} · ${new Date(item.createdAt).toLocaleDateString()}</div>
                <h3 class="news-card-title">${escapeHtml(item.title)}</h3>
                <p class="news-card-excerpt">${escapeHtml(item.content)}</p>
            </div>
        `).join('');

        grid.querySelectorAll('.news-card').forEach(card => {
            card.addEventListener('click', () => openNewsModal(Number(card.dataset.index)));
        });
    } catch (e) {
        grid.innerHTML = '<p class="section-desc" style="grid-column:1/-1;text-align:center;">Failed to load news.</p>';
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

document.getElementById('newsModal').addEventListener('click', (e) => {
    if (e.target.id === 'newsModal') closeNewsModal();
});

document.addEventListener('DOMContentLoaded', loadNewsSection);