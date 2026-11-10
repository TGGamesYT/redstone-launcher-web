/* The site's menu, written once.
 *
 * Every page used to carry its own hand-typed copy of the nav dropdowns and
 * the hamburger menu, so they drifted: the homepage's hamburger had lost Our
 * Team and the Help Center, and listed the archive under the Blog label,
 * while the archive's copy was the complete one. This file is the single
 * copy. A page supplies the shell -- the brand, the theme toggle, the
 * language picker -- and this fills in the links.
 *
 * It renders into whatever the page has:
 *   .nav-center   the desktop dropdowns
 *   #mobileNav    the hamburger panel
 * A page with neither is left alone. A section inside #mobileNav marked
 * data-page-menu is page-local (the archive's jump links) and is kept, with
 * the shared sections placed after it.
 *
 * Plain script, no build step, no module: the site is static files and is
 * meant to stay readable by opening one.
 */
(function () {
    "use strict";

    /* Root-relative so one definition works from /, /archive/ and /support/. */
    var MENU = [
        {
            id: "socials", label: "Socials", links: [
                { id: "youtube", label: "YouTube", href: "https://youtube.com/@tgdoescode" },
                { id: "github", label: "GitHub", href: "https://github.com/TGGamesYT/redstone-launcher" },
                { id: "discord", label: "Discord", href: "https://discord.gg/S9H2Z6SuEA" }
            ]
        },
        {
            id: "pages", label: "Pages", links: [
                { id: "home", label: "Home", href: "/" },
                { id: "blog", label: "Blog", href: "/blog" },
                { id: "archive", label: "Archive versions", href: "/archive/" },
                { id: "team", label: "Our Team", href: "/team" }
            ]
        },
        {
            id: "supportBug", label: "Support & Bug Report", links: [
                { id: "helpCenter", label: "Help Center", href: "/support/" },
                { id: "discordSupport", label: "Discord Support", href: "https://discord.gg/S9H2Z6SuEA" },
                { id: "githubBug", label: "GitHub Bug Report", href: "https://github.com/TGGamesYT/redstone-launcher/issues" },
                { id: "emailSupport", label: "Email Support", href: "mailto:contact@redstone-launcher.com" }
            ]
        }
    ];

    /* The big footer, for pages that ask for it with <footer data-site-footer>.
       index.html and team.html still carry their own, written by hand; this is
       here so that the pages added since do not become a third and fourth copy
       to keep in step. A link that points at the page being looked at is left
       out, which is how the policy page ends up without a link to itself. */
    var FOOTER = {
        id: "blurb",
        blurb: "The modern launcher for Minecraft. Built by the community, for the community.",
        socials: [
            { id: "youtube", label: "YouTube", href: "https://youtube.com/@tgdoescode", fill: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
            { id: "github", label: "GitHub", href: "https://github.com/TGGamesYT/redstone-launcher", fill: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
            { id: "discord", label: "Discord", href: "https://discord.gg/S9H2Z6SuEA", fill: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" },
            { id: "emailSupport", label: "Email", href: "mailto:contact@redstone-launcher.com", stroke: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" }
        ],
        columns: [
            {
                id: "project", label: "Project", links: [
                    { id: "downloads", label: "Downloads", href: "https://github.com/TGGamesYT/redstone-launcher/releases" },
                    { id: "sourceCode", label: "Source Code", href: "https://github.com/TGGamesYT/redstone-launcher" },
                    { id: "reportBug", label: "Report a Bug", href: "https://github.com/TGGamesYT/redstone-launcher/issues" },
                    { id: "blog", label: "Blog", href: "/blog" },
                    { id: "team", label: "Our Team", href: "/team" },
                    { id: "privacy", label: "Privacy Policy", href: "/privacy" }
                ]
            },
            {
                id: "supportCol", label: "Support", links: [
                    { id: "patreon", label: "Patreon", href: "https://www.patreon.com/tgdoescode/join" },
                    { id: "discordServer", label: "Discord Server", href: "https://discord.gg/S9H2Z6SuEA" },
                    { id: "helpCenter", label: "Help Center", href: "/support/" }
                ]
            },
            {
                id: "contactCol", label: "Contact", links: [
                    { id: "contactEmail", label: "Contact via email", href: "mailto:contact@redstone-launcher.com" },
                    { id: "chatDiscord", label: "Chat on Discord", href: "https://discord.gg/S9H2Z6SuEA" }
                ]
            }
        ]
    };

    /* English is the definition above; these are the other three. Kept here
       rather than in each page's translation table, because a menu split
       across four files is how it went out of date in the first place. */
    var TEXT = {
        hu: {
            socials: "Közösségi média", pages: "Oldalak", supportBug: "Támogatás és hibajelentés",
            home: "Főoldal", blog: "Blog", archive: "Korábbi verziók", team: "Csapatunk",
            helpCenter: "Súgóközpont", discordSupport: "Discord támogatás",
            githubBug: "GitHub hibajelentés", emailSupport: "Email támogatás",
            blurb: "Modern Minecraft launcher. A közösségtől, a közösségnek.",
            project: "Projekt", supportCol: "Támogatás", contactCol: "Kapcsolat",
            downloads: "Letöltések", sourceCode: "Forráskód", reportBug: "Hiba jelentése",
            privacy: "Adatvédelmi irányelvek", patreon: "Patreon", discordServer: "Discord szerver",
            contactEmail: "Kapcsolat emailben", chatDiscord: "Csevegés a Discordon",
            rights: "Minden jog fenntartva — Készítette"
        },
        it: {
            socials: "Social", pages: "Pagine", supportBug: "Supporto e segnalazioni",
            home: "Home", blog: "Blog", archive: "Versioni precedenti", team: "Il nostro team",
            helpCenter: "Centro assistenza", discordSupport: "Supporto Discord",
            githubBug: "Segnalazione bug su GitHub", emailSupport: "Supporto email",
            blurb: "Launcher Minecraft moderno creato dalla community.",
            project: "Progetto", supportCol: "Supporto", contactCol: "Contatti",
            downloads: "Download", sourceCode: "Codice sorgente", reportBug: "Segnala un bug",
            privacy: "Informativa sulla privacy", patreon: "Patreon", discordServer: "Server Discord",
            contactEmail: "Contatta via email", chatDiscord: "Chatta su Discord",
            rights: "Tutti i diritti riservati — Creato da"
        },
        de: {
            socials: "Soziale Medien", pages: "Seiten", supportBug: "Support & Fehlerbericht",
            home: "Startseite", blog: "Blog", archive: "Frühere Versionen", team: "Unser Team",
            helpCenter: "Hilfecenter", discordSupport: "Discord Support",
            githubBug: "GitHub Fehlerbericht", emailSupport: "E-Mail Support",
            blurb: "Moderner Minecraft Launcher aus der Community.",
            project: "Projekt", supportCol: "Support", contactCol: "Kontakt",
            downloads: "Downloads", sourceCode: "Quellcode", reportBug: "Fehler melden",
            privacy: "Datenschutzerklärung", patreon: "Patreon", discordServer: "Discord Server",
            contactEmail: "Kontakt per E-Mail", chatDiscord: "Chat auf Discord",
            rights: "Alle Rechte vorbehalten — Erstellt von"
        }
    };

    /* The main site stores the choice under "lang", the archive and the help
       centre under "rl-lang". Read both so the menu is in the right language
       whichever page it is on. */
    function currentLang() {
        try {
            return localStorage.getItem("rl-lang") || localStorage.getItem("lang") || "en";
        } catch (e) {
            return "en";
        }
    }

    function say(id, english, lang) {
        var table = TEXT[lang];
        return (table && table[id]) || english;
    }

    var SVG = "http://www.w3.org/2000/svg";

    /* The chevron, with its look spelled out inline as well as by class:
       half the pages style .icon in styles.css and half in their own
       <style>, and this has to look the same on all of them. */
    function chevron() {
        var svg = document.createElementNS(SVG, "svg");
        svg.setAttribute("class", "icon");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("style", "width:12px;height:12px;margin-left:4px;display:inline;stroke:currentColor;stroke-width:2;fill:none");
        var path = document.createElementNS(SVG, "path");
        path.setAttribute("d", "M6 9l6 6 6-6");
        svg.appendChild(path);
        return svg;
    }

    function isExternal(href) {
        return /^https?:/i.test(href) && !/(^|\.)redstone-launcher\.com$/i.test(new URL(href, location.href).hostname);
    }

    /* Which link, if any, is the page being looked at. The extension is
       dropped before comparing, so /team matches however it was reached --
       /team, /team.html or /team/. */
    function here(href) {
        if (/^(mailto|https?):/i.test(href) && isExternal(href)) return false;
        var a = new URL(href, location.href);
        if (a.host !== location.host) return false;
        var tidy = function (p) {
            return p.replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "");
        };
        return tidy(location.pathname) === tidy(a.pathname);
    }

    function anchor(link, lang) {
        var a = document.createElement("a");
        a.href = link.href;
        a.textContent = say(link.id, link.label, lang);
        if (isExternal(link.href)) {
            a.target = "_blank";
            a.rel = "noopener";
        }
        if (here(link.href)) a.setAttribute("aria-current", "page");
        return a;
    }

    function fillDesktop(center, lang) {
        center.textContent = "";
        MENU.forEach(function (section) {
            var item = document.createElement("div");
            item.className = "nav-item";

            var label = document.createElement("span");
            label.textContent = say(section.id, section.label, lang);
            item.appendChild(label);
            item.appendChild(chevron());

            var drop = document.createElement("div");
            drop.className = "nav-dropdown glass";
            section.links.forEach(function (link) {
                var a = anchor(link, lang);
                if (a.hasAttribute("aria-current")) item.classList.add("current");
                drop.appendChild(a);
            });
            item.appendChild(drop);
            center.appendChild(item);
        });
    }

    function fillMobile(panel, lang) {
        /* Keep the page's own section (the archive's jump links); replace
           everything this file owns. */
        Array.prototype.slice.call(panel.children).forEach(function (child) {
            if (!child.hasAttribute("data-page-menu")) panel.removeChild(child);
        });
        MENU.forEach(function (section) {
            var box = document.createElement("div");
            box.className = "mobile-nav-section";

            var title = document.createElement("div");
            title.className = "mobile-nav-title";
            title.textContent = say(section.id, section.label, lang);
            box.appendChild(title);

            section.links.forEach(function (link) {
                box.appendChild(anchor(link, lang));
            });
            panel.appendChild(box);
        });
    }

    function socialIcon(social) {
        var a = document.createElement("a");
        a.href = social.href;
        a.className = "social-link glass ios-spring";
        a.setAttribute("aria-label", social.label);
        if (isExternal(social.href)) { a.target = "_blank"; a.rel = "noopener"; }
        var svg = document.createElementNS(SVG, "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("aria-hidden", "true");
        var path = document.createElementNS(SVG, "path");
        if (social.stroke) {
            svg.setAttribute("fill", "none");
            svg.setAttribute("stroke", "currentColor");
            svg.setAttribute("stroke-width", "2");
            path.setAttribute("d", social.stroke);
        } else {
            svg.setAttribute("fill", "currentColor");
            path.setAttribute("d", social.fill);
        }
        svg.appendChild(path);
        a.appendChild(svg);
        return a;
    }

    function fillFooter(foot, lang) {
        foot.textContent = "";
        var content = document.createElement("div");
        content.className = "footer-content";

        var grid = document.createElement("div");
        grid.className = "footer-grid";

        var brand = document.createElement("div");
        brand.className = "footer-brand";
        var name = document.createElement("h3");
        name.className = "glow-text";
        name.textContent = "Redstone Launcher";
        var blurb = document.createElement("p");
        blurb.textContent = say(FOOTER.id, FOOTER.blurb, lang);
        var socials = document.createElement("div");
        socials.className = "social-links";
        FOOTER.socials.forEach(function (s) { socials.appendChild(socialIcon(s)); });
        brand.appendChild(name);
        brand.appendChild(blurb);
        brand.appendChild(socials);
        grid.appendChild(brand);

        FOOTER.columns.forEach(function (column) {
            var links = column.links.filter(function (link) { return !here(link.href); });
            if (!links.length) return;
            var box = document.createElement("div");
            box.className = "footer-section";
            var head = document.createElement("h4");
            head.textContent = say(column.id, column.label, lang);
            var list = document.createElement("ul");
            list.className = "footer-links";
            links.forEach(function (link) {
                var li = document.createElement("li");
                li.appendChild(anchor(link, lang));
                list.appendChild(li);
            });
            box.appendChild(head);
            box.appendChild(list);
            grid.appendChild(box);
        });
        content.appendChild(grid);

        var bottom = document.createElement("div");
        bottom.className = "footer-bottom";
        var line = document.createElement("p");
        line.appendChild(document.createTextNode(
            "© " + new Date().getFullYear() + " Redstone Launcher. "
            + say("rights", "All rights reserved — Created by", lang) + " "));
        [["Muavees", "https://muaves.com"], ["TGGamesYT", "https://tggamesyt.dev"]]
            .forEach(function (who, i) {
                if (i) line.appendChild(document.createTextNode(lang === "hu" ? " és " : lang === "it" ? " e " : lang === "de" ? " und " : " and "));
                var a = document.createElement("a");
                a.href = who[1];
                a.textContent = who[0];
                a.target = "_blank";
                a.rel = "noopener";
                line.appendChild(a);
            });
        bottom.appendChild(line);
        content.appendChild(bottom);
        foot.appendChild(content);
    }

    function render() {
        var lang = currentLang();
        var center = document.querySelector(".nav-center");
        var panel = document.getElementById("mobileNav");
        var foot = document.querySelector("footer[data-site-footer]");
        if (center) fillDesktop(center, lang);
        if (panel) fillMobile(panel, lang);
        if (foot) fillFooter(foot, lang);
    }

    /* Opening and closing the hamburger used to be written out again in
       scripts.js, archive.js and app.js, and only two of the three closed the
       panel after a link was tapped. It lives here now. */
    function wireToggle() {
        var toggle = document.getElementById("mobileToggle");
        var panel = document.getElementById("mobileNav");
        if (!toggle || !panel || toggle.dataset.menuBound) return;
        toggle.dataset.menuBound = "1";

        var shut = function () {
            toggle.classList.remove("active");
            panel.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
        };
        toggle.setAttribute("aria-expanded", "false");
        toggle.addEventListener("click", function () {
            var open = !panel.classList.contains("active");
            toggle.classList.toggle("active", open);
            panel.classList.toggle("active", open);
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
        panel.addEventListener("click", function (e) {
            if (e.target.closest("a")) shut();
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") shut();
        });
    }

    function start() {
        render();
        wireToggle();

        /* Follow the language picker, whichever of the two scripts owns it,
           and a change made in another tab. */
        var picker = document.getElementById("langSwitcher");
        if (picker) picker.addEventListener("change", function () { setTimeout(render, 0); });
        window.addEventListener("storage", function (e) {
            if (e.key === "lang" || e.key === "rl-lang") render();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }

    window.RLMenu = { render: render, sections: MENU };
})();
