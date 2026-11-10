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

    /* English is the definition above; these are the other three. Kept here
       rather than in each page's translation table, because a menu split
       across four files is how it went out of date in the first place. */
    var TEXT = {
        hu: {
            socials: "Közösségi média", pages: "Oldalak", supportBug: "Támogatás és hibajelentés",
            home: "Főoldal", blog: "Blog", archive: "Korábbi verziók", team: "Csapatunk",
            helpCenter: "Súgóközpont", discordSupport: "Discord támogatás",
            githubBug: "GitHub hibajelentés", emailSupport: "Email támogatás"
        },
        it: {
            socials: "Social", pages: "Pagine", supportBug: "Supporto e segnalazioni",
            home: "Home", blog: "Blog", archive: "Versioni precedenti", team: "Il nostro team",
            helpCenter: "Centro assistenza", discordSupport: "Supporto Discord",
            githubBug: "Segnalazione bug su GitHub", emailSupport: "Supporto email"
        },
        de: {
            socials: "Soziale Medien", pages: "Seiten", supportBug: "Support & Fehlerbericht",
            home: "Startseite", blog: "Blog", archive: "Frühere Versionen", team: "Unser Team",
            helpCenter: "Hilfecenter", discordSupport: "Discord Support",
            githubBug: "GitHub Fehlerbericht", emailSupport: "E-Mail Support"
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

    function render() {
        var lang = currentLang();
        var center = document.querySelector(".nav-center");
        var panel = document.getElementById("mobileNav");
        if (center) fillDesktop(center, lang);
        if (panel) fillMobile(panel, lang);
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
