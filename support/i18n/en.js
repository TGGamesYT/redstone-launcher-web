/* English locale - add i18n/hu.js (etc.) and register in app.js */
window.RL_I18N = window.RL_I18N || {};
window.RL_I18N.en = {
  meta: {
    titleHome: "Support · Redstone Launcher",
    titleArticle: "{title} · Support · Redstone Launcher"
  },
  nav: {
    home: "Home",
    socials: "Socials",
    youtube: "YouTube",
    github: "GitHub",
    discord: "Discord",
    indicators: "Indicators",
    blog: "News",
    archive: "Archive versions",
    team: "Our Team",
    supportBug: "Support & Bug Report",
    discordSupport: "Discord Support",
    githubBug: "GitHub Bug Report",
    emailSupport: "Email Support",
    helpCenter: "Help Center"
  },
  search: {
    placeholder: "Search help…",
    hero: "Search install, login, mods, Linux…",
    hint: "Try “login”, “.deb”, “Java”, “sandbox”, or “shortcuts”.",
    empty: "No matching articles. Try another phrase or ask on Discord.",
    kbd: "/"
  },
  common: {
    helpCenter: "Help Center",
    stillStuck: "Still stuck?",
    wasHelpful: "Did this answer it?",
    askDiscord: "Ask on Discord",
    reportBug: "Report a bug",
    emailUs: "Email us",
    copy: "Copy",
    copied: "Copied",
    yes: "Yes",
    no: "No",
    thanksFeedback: "Thanks for the feedback.",
    onThisPage: "On this page",
    popular: "Popular questions",
    contact: "Contact the team",
    allSystems: "All systems operational",
    rights: "© Redstone Launcher. All rights reserved - Created by Muavees and TGGamesYT",
    openMenu: "Open menu",
    openDocs: "Browse topics",
    langNote: "More languages can be added later - the page is wired for i18n.",
    pageNotFound: "Page not found",
    pageNotFoundLede: "That article does not exist. Head back to the Help Center."
  },
  sidebar: {
    start: "Start here",
    install: "Install",
    play: "Play & manage",
    fix: "Fix a problem",
    more: "More"
  },
  home: {
    badge: "Help Center",
    title: "How can we help?",
    lede: "Install guides, login fixes, feature walkthroughs, and a way to reach the team. Redstone Launcher is free, open source, and stays on your machine.",
    topicsTitle: "Browse by topic",
    faqTitle: "People ask this a lot",
    /* ---------- Nav ---------- 
    examplesTitle: "Quick answers",
    examples: [
      { id: "getting-started", title: "New here?", body: "Download from **[www.redstone-launcher.com](https://www.redstone-launcher.com/)**, sign in, make an **instance**, hit Play. Full walkthrough: [Getting started](#getting-started)." },
      { id: "microsoft-login", title: "Microsoft login failed?", body: "Need a **Java Edition** license. Try **QR sign-in**, or on Linux install `gnome-keyring` then log out under **Accounts**. See [Sign in](#microsoft-login)." },
      { id: "install-windows", title: "Windows install", body: "Grab the Windows build on the **[site](https://www.redstone-launcher.com/)**. If SmartScreen blocks it: **More info → Run anyway**. Guide: [Install on Windows](#install-windows)." },
      { id: "install-linux", title: "Linux will not start", body: "Try `redstone-launcher --no-sandbox` on **older distros**. Sharp / libvips errors have a fix on [Install on Linux](#install-linux)." },
      { id: "install-macos", title: "macOS Gatekeeper", body: "Download from the **[site](https://www.redstone-launcher.com/)**, then right-click → **Open**. Steps: [Install on macOS](#install-macos)." },
      { id: "instances", title: "Keep worlds separate", body: "One **instance** per job - vanilla, Fabric, snapshots. Copy folders in the **file manager** if you need a duplicate. [Instances](#instances)." },
      { id: "mods", title: "Add mods", body: "Pick a **loader** (Fabric / Forge / Quilt), then install from **Modrinth** or **CurseForge** in-app. Version must match. [Mods](#mods)." },
      { id: "servers", title: "Host a server", body: "Create a server in the launcher - **Purpur**, **Folia**, EULA prompt, resource packs. [Servers](#servers)." },
      { id: "skins", title: "Skins, capes, QR login", body: "**Skin changer**, **cape changer**, and **QR Microsoft auth** live in the launcher. [Skins & extras](#skins)." },
      { id: "shortcuts", title: "One-click desktop play", body: "Pin an **instance**, **world**, or **server** to the desktop. [Desktop shortcuts](#shortcuts)." },
      { id: "settings-java", title: "Wrong Java?", body: "The launcher **downloads Java automatically**. You can still set a **custom path**. [Settings & Java](#settings-java)." },
      { id: "troubleshoot", title: "Still broken?", body: "Start with [Troubleshooting](#troubleshoot). Then [Discord](https://discord.gg/S9H2Z6SuEA) or a [GitHub issue](https://github.com/TGGamesYT/redstone-launcher/issues)." }
    ]
    */
  },
  topics: [
    { id: "getting-started", title: "Getting started", desc: "Download, sign in, create an instance, hit Play.", icon: "rocket" },
    { id: "install-linux", title: "Linux install", desc: "AppImage, .deb, Snap, older Linux, libvips.", icon: "linux" },
    { id: "microsoft-login", title: "Microsoft login", desc: "Token errors, keyring, and account requirements.", icon: "key" },
    { id: "instances", title: "Instances", desc: "Separate versions, mods, and settings per world.", icon: "layers" },
    { id: "mods", title: "Mods", desc: "Modrinth, CurseForge, loaders, one-click installs.", icon: "puzzle" },
    { id: "troubleshoot", title: "Troubleshooting", desc: "Won’t start, Java, login, and Linux fixes.", icon: "wrench" }
  ],
  channels: [
    { href: "https://discord.gg/S9H2Z6SuEA", title: "Discord", desc: "Fastest place for questions and live help.", ext: true },
    { href: "https://github.com/TGGamesYT/redstone-launcher/issues", title: "GitHub Issues", desc: "Bugs, crashes, and reproducible reports.", ext: true },
    { href: "mailto:contact@redstone-launcher.com", title: "Email", desc: "contact@redstone-launcher.com", ext: true }
  ],
  navItems: [
    { group: "start", items: [
      { id: "home", title: "Help Center" },
      { id: "getting-started", title: "Getting started" },
      { id: "microsoft-login", title: "Sign in" }
    ]},
    { group: "install", items: [
      { id: "install-windows", title: "Windows" },
      { id: "install-linux", title: "Linux" },
      { id: "install-macos", title: "macOS" }
    ]},
    { group: "play", items: [
      { id: "instances", title: "Instances" },
      { id: "mods", title: "Mods" },
      { id: "servers", title: "Servers" },
      { id: "skins", title: "Skins & extras" },
      { id: "shortcuts", title: "Desktop shortcuts" },
      { id: "settings-java", title: "Settings & Java" }
    ]},
    { group: "fix", items: [
      { id: "troubleshoot", title: "Troubleshooting" },
      { id: "faq", title: "FAQ" }
    ]},
    { group: "more", items: [
      { id: "privacy", title: "Privacy" },
      { id: "contact", title: "Contact" }
    ]}
  ],
  articles: {
    "getting-started": {
      category: "Start here",
      title: "Getting started with Redstone Launcher",
      lede: "From download to first world in a few minutes. You need a Microsoft account that owns Minecraft: Java Edition.",
      keywords: "start begin first launch download play setup intro",
      blocks: [
        { type: "p", text: "Redstone Launcher is a third-party Minecraft launcher by Muavees and TGGamesYT. It is **100% free**, **open source**, and **privacy-first** - no tracking or analytics. Everything stays on your device." },
        { type: "h2", text: "What you need" },
        { type: "ul", items: [
          "A PC running **Windows**, **Linux**, or **macOS**.",
          "A **Minecraft: Java Edition** license on a Microsoft account. Bedrock / Game Pass console editions are not enough.",
          "An internet connection for the first download, Microsoft sign-in, and mod catalogs."
        ]},
        { type: "h2", text: "First five minutes" },
        { type: "ol", items: [
          "Download the build for your OS at [www.redstone-launcher.com](https://www.redstone-launcher.com/).",
          "Install it (see the Windows, Linux, or macOS guides in the sidebar).",
          "Open Redstone Launcher.",
          "Sign in with Microsoft. Approve the login in your browser, then return to the app.",
          "Create an **instance** - pick a Minecraft version (and a loader later if you want mods).",
          "Press **Play**. The launcher fetches the game files and Java if needed."
        ]},
        { type: "callout", kind: "warn", title: "Redstone CLI", text: "There is a leftover **CLI** build. It is old, unstable, and Microsoft login is likely broken. Do not use it. If you still want the files, they are on [GitHub Releases](https://github.com/Muaves/redstone-cli/releases). We really appreciate your contributions - pull requests are always open." },
        { type: "h2", text: "Where to go next" },
        { type: "ul", items: [
          "[Install on Linux](#install-linux) if you hit sandbox or libvips errors.",
          "[Instances](#instances) to keep vanilla, modded, and snapshot setups apart.",
          "[Mods](#mods) to add Fabric, Forge, Quilt, and packs from Modrinth or CurseForge.",
          "[Desktop shortcuts](#shortcuts) to launch a world or server from the desktop."
        ]}
      ]
    },
    "microsoft-login": {
      category: "Start here",
      title: "Sign in with Microsoft",
      lede: "Java Edition lives on a Microsoft account. Here is how login works and how to unstick it.",
      keywords: "login microsoft account token undefined keyring gnome oauth sign in",
      blocks: [
        { type: "h2", text: "How to sign in" },
        { type: "ol", items: [
          "Open Redstone Launcher and start Microsoft login. You can use the **browser flow** or the **QR code** option.",
          "A browser window opens on Microsoft’s sign-in page, or you scan the QR code.",
          "Use the account that **owns Java Edition**.",
          "Approve access, then return to the launcher. Your player name and skin should appear."
        ]},
        { type: "callout", kind: "warn", title: "Bedrock-only accounts", text: "If the account only owns Bedrock (or a console copy), login cannot unlock Java. Check ownership on minecraft.net before reporting a launcher bug." },
        { type: "h2", text: "“Token undefined” / login fails" },
        { type: "p", text: "This shows up most often on Linux when the OS secret store is missing, or a stale session is stuck in Settings." },
        { type: "ol", items: [
          "On many Linux distros, install the keyring: `sudo apt install gnome-keyring`",
          "Open the launcher → **Accounts** → **log out** of your Microsoft account.",
          "Quit the app, reopen it, and sign in again."
        ]},
        { type: "callout", kind: "tip", title: "Still failing?", text: "Sign out of Microsoft in the browser, disable strict VPN/ad-block on login.live.com for a minute, and retry. If it still dies, grab the log and post it on Discord or GitHub." }
      ]
    },
    "install-windows": {
      category: "Install",
      title: "Install on Windows",
      lede: "Get the latest Windows build from www.redstone-launcher.com and run it like any other desktop app.",
      keywords: "windows install exe setup smartscreen download",
      blocks: [
        { type: "ol", items: [
          "Open [www.redstone-launcher.com](https://www.redstone-launcher.com/) and download for Windows.",
          "Download the **Windows** asset (installer or portable build listed on that page).",
          "Run the file. If **SmartScreen** says the app is unrecognized, choose **More info** → **Run anyway**. Third-party launchers are often unsigned.",
          "Launch **Redstone Launcher** from the Start menu or the folder you unpacked.",
          "Sign in with Microsoft and create an instance."
        ]},
        { type: "callout", kind: "info", title: "Updates", text: "When a new release drops, click **Update** in the left sidebar - it works on every OS. You can also download it from [www.redstone-launcher.com](https://www.redstone-launcher.com/)." },
        { type: "p", text: "Need Linux or macOS instead? Use the OS pills above." }
      ]
    },
    "install-linux": {
      category: "Install",
      title: "Install on Linux",
      lede: "AppImage, .deb, or Snap. Plus the older-Linux sandbox flag and the sharp / libvips fix from the official README.",
      keywords: "linux debian ubuntu kali appimage deb snap sandbox libvips sharp no-sandbox dpkg",
      blocks: [
        { type: "p", text: "Pick the package that matches your distro. Official links:" },
        { type: "ul", items: [
          "[Redstone-Launcher.AppImage](https://www.redstone-launcher.com/)",
          "[Redstone-Launcher.deb](https://www.redstone-launcher.com/)",
          "[Snap Store](https://snapcraft.io/redstone-launcher) - `sudo snap install redstone-launcher`"
        ]},
        { type: "h2", text: "AppImage" },
        { type: "code", text: "chmod +x Redstone-Launcher.AppImage\n./Redstone-Launcher.AppImage" },
        { type: "h2", text: ".deb (Debian-based distros)" },
        { type: "p", text: "In the folder that contains the file:" },
        { type: "code", text: "sudo dpkg -i redstone-launcher.deb\nsudo apt install -f" },
        { type: "h2", text: "Snap" },
        { type: "code", text: "sudo snap install redstone-launcher" },
        { type: "p", text: "Refresh later with `sudo snap refresh redstone-launcher`." },
        { type: "h2", text: "Older Linux / Electron sandbox" },
        { type: "p", text: "On some older Linux distros the launcher needs the sandbox disabled:" },
        { type: "code", text: "redstone-launcher --no-sandbox" },
        { type: "h2", text: "Sharp / libvips JavaScript error" },
        { type: "p", text: "If the app dies on start with a **sharp** or **libvips** error, install the system library and add the symlink the README expects:" },
        { type: "code", text: "sudo apt update && sudo apt install libvips42 -y\nsudo ln -s /usr/lib/x86_64-linux-gnu/libvips-cpp.so.42 /usr/lib/x86_64-linux-gnu/libvips-cpp.so.8.17.3" },
        { type: "callout", kind: "warn", title: "Login on Linux", text: "If Microsoft login returns an undefined token, install `gnome-keyring`, then log out of your Microsoft account under **Accounts** and sign in again. Details are on the Sign in page." },
        { type: "callout", kind: "info", title: "Older distros", text: "If a new release breaks an older library stack, try the previous download from [www.redstone-launcher.com](https://www.redstone-launcher.com/) or ask on Discord." }
      ]
    },
    "install-macos": {
      category: "Install",
      title: "Install on macOS",
      lede: "macOS builds are produced with the project’s buildMac pipeline. Install from www.redstone-launcher.com and clear Gatekeeper if needed.",
      keywords: "mac macos osx gatekeeper dmg apple silicon",
      blocks: [
        { type: "ol", items: [
          "Open [www.redstone-launcher.com](https://www.redstone-launcher.com/) and download the **macOS** build.",
          "Open the disk image or unpack the archive, then drag Redstone Launcher into **Applications** (or run it in place).",
          "If macOS says the app is from an unidentified developer: **System Settings → Privacy & Security**, or right-click the app → **Open**.",
          "Sign in with Microsoft and create an instance."
        ]},
        { type: "callout", kind: "tip", title: "Building it yourself", text: "Developers can clone the repo, run `npm install`, then `npm run buildMac`. Everyday players should prefer the official release assets." }
      ]
    },
    instances: {
      nav: "Instances",
      category: "Play & manage",
      title: "Instances",
      lede: "An instance is a self-contained Minecraft setup: version, loader, mods, and settings that do not leak into your other installs.",
      keywords: "instance profile clone version vanilla snapshot create",
      blocks: [
        { type: "p", text: "Redstone is built around **total instance freedom**. Create and customize instances with separate mods, profiles, versions, and settings - the same idea as other modern launchers, with Redstone’s own tools on top." },
        { type: "h2", text: "Create one" },
        { type: "ol", items: [
          "Open the **Instances** view.",
          "Create a new instance and name it something you will recognize (“Vanilla 1.21”, “Create Fabric”, …).",
          "Pick a Minecraft version. Enable snapshots only if you want experimental builds.",
          "Optional: choose a loader (Fabric, Forge, Quilt, …) before you start adding mods.",
          "Save, then **Play**. The first launch downloads the version (and Java if the instance needs a newer runtime)."
        ]},
        { type: "h2", text: "Copy an instance" },
        { type: "p", text: "There is no Clone button on the instance list yet. To duplicate one, open the **file manager** and copy the instance folder. Each instance still keeps its own mods and options." },
        { type: "callout", kind: "tip", title: "One instance per job", text: "Vanilla, a Fabric tech pack, and a Paper test server client do not belong in the same folder. Split them - Redstone is designed for that." }
      ]
    },
    mods: {
      nav: "Mods",
      category: "Play & manage",
      title: "Mods, Modrinth, and CurseForge",
      lede: "Install, update, and organize mods from Modrinth or CurseForge without digging through folders.",
      keywords: "mod mods modrinth curseforge fabric forge quilt loader pack update",
      blocks: [
        { type: "p", text: "Redstone includes **Modrinth** and **CurseForge** browsing in the launcher. You can install and update content without leaving the app." },
        { type: "h2", text: "Typical flow" },
        { type: "ol", items: [
          "Create or open an instance on the Minecraft version you want.",
          "Install the matching **loader** (Fabric, Forge, Quilt, or whatever the project lists).",
          "Open the mods view, pick **Modrinth** or **CurseForge**, and search for the project.",
          "Install. Dependencies such as Fabric API are usually pulled with the mod.",
          "Launch once to generate configs, then tweak in the instance file manager if you need to."
        ]},
        { type: "callout", kind: "warn", title: "Version + loader must match", text: "A 1.20.1 Forge mod will not load on 1.21 Fabric. If the instance “goes black” or the game menu never appears, check the instance log - it is almost always a loader or dependency mismatch." },
        { type: "p", text: "You can still drop `.jar` files into the instance mods folder via the built-in file manager when a project is not on Modrinth or CurseForge." }
      ]
    },
    servers: {
      nav: "Servers",
      category: "Play & manage",
      title: "Servers",
      lede: "Host and manage local servers from the same window - types, Java, EULA, files, and resource packs.",
      keywords: "server paper purpur folia fabric eula plugin resource pack relay",
      blocks: [
        { type: "p", text: "The **Servers** section lets you create and edit servers without hand-writing start scripts. Recent builds added extra server types (including **Purpur** and **Folia**), launch arguments, a visible Restart control, and a proper **EULA** prompt on first launch instead of silently accepting it." },
        { type: "h2", text: "Create a server" },
        { type: "ol", items: [
          "Open **Servers** and create a new one.",
          "Pick type + Minecraft version. The launcher resolves the **correct Java major** for that version so Fabric (and others) do not die with `UnsupportedClassVersionError`.",
          "Add launch args if you need extra JVM flags.",
          "Start it. Accept the Mojang EULA when asked.",
          "Use **Edit** later to rename, change type/version, or adjust args."
        ]},
        { type: "h2", text: "Files & resource packs" },
        { type: "p", text: "The file manager can open the folder in your file explorer, create files/folders, and duplicate or delete entries." },
        { type: "p", text: "Server detail includes a **Resource Packs** tab: add packs, reorder them (top wins), enable/disable, delete, and mark a pack as required. Packs can be merged and exposed through Redstone’s relay so players download `http://redstonemc.net:…/pack.zip` - nothing is stored on the relay itself." },
        { type: "callout", kind: "info", title: "Port split", text: "Minecraft traffic stays on the game port (25565 by default). Resource-pack HTTP is served on the control port so pack downloads do not collide with gameplay." }
      ]
    },
    skins: {
      nav: "Skins & extras",
      category: "Play & manage",
      title: "Skins, capes, and extras",
      lede: "Change skins and capes in the launcher. Microsoft sign-in also has a QR-code option.",
      keywords: "skin cape player world editor resource pack optimizer tools",
      blocks: [
        { type: "p", text: "The **Skin** screen lets you preview and change the skin on the signed-in account." },
        { type: "p", text: "There is also a **cape changer** for capes tied to that account." },
        { type: "p", text: "Microsoft sign-in can use a **QR code** as well as the usual browser flow. See [Sign in](#microsoft-login) if login fails." },
        { type: "p", text: "If a tool is missing on your OS, ask on Discord - not every panel ships on day one of a release." }
      ]
    },
    shortcuts: {
      nav: "Desktop shortcuts",
      category: "Play & manage",
      title: "Desktop shortcuts",
      lede: "Play an instance, world, or server from a single desktop click.",
      keywords: "shortcut desktop icon launch world server pin",
      blocks: [
        { type: "p", text: "You can pin an instance, a world, or a server to the desktop and launch it with one click." },
        { type: "h2", text: "What you can pin" },
        { type: "ul", items: [
          "An **instance** - jumps straight into that install.",
          "A **world** - opens that world inside its instance.",
          "A **server** - starts or joins the server entry you picked."
        ]},
        { type: "p", text: "Create the shortcut from the instance / world / server screen. Drop the icon on your desktop or taskbar/dock." },
        { type: "callout", kind: "tip", title: "News", text: "Shortcut tips show up on the [news page](https://redstone-launcher.com/#news)." },
        { type: "p", text: "If a shortcut does nothing on Linux, launch the main app once (with `--no-sandbox` on older distros) so the session and paths initialize, then try the shortcut again." }
      ]
    },
    "settings-java": {
      nav: "Settings & Java",
      category: "Play & manage",
      title: "Settings & Java",
      lede: "The launcher hunts for a valid Java, downloads one automatically if needed, and lets you pin a custom path.",
      keywords: "java jre jdk JAVA_HOME memory ram settings path autodownload",
      blocks: [
        { type: "p", text: "Minecraft versions demand different Java majors (8 / 17 / 21 / newer). Redstone tries, in order: **your custom path**, **JAVA_HOME**, **PATH**, then common system folders - and it **checks the version**, not just “is java installed”." },
        { type: "h2", text: "If the game will not boot" },
        { type: "ul", items: [
          "Open **Settings** and confirm Java detection succeeded.",
          "The launcher **downloads Java automatically** when an instance needs it.",
          "Or set a **custom Java path** to a known-good JDK (the `java` / `javaw` binary, not a random folder).",
          "Give the instance enough RAM in settings, but leave several GB for the OS and the launcher."
        ]},
        { type: "callout", kind: "warn", title: "Servers pick Java too", text: "Server processes use the Java that matches *that server’s* Minecraft version. A system Java 17 will crash a build that needs a newer class file version - let the launcher resolve it." },
        { type: "p", text: "To leave an account, open **Accounts** and **log out** of your Microsoft account (needed after a bad token)." }
      ]
    },
    troubleshoot: {
      category: "Fix a problem",
      title: "Troubleshooting",
      lede: "Start here when the window will not open, login dies, or Minecraft never reaches the menu.",
      keywords: "crash error bug fix wont start emfile too many files log",
      blocks: [
        { type: "h2", text: "The launcher does not start" },
        { type: "ul", items: [
          "**Linux + sharp/libvips:** install `libvips42` and create the symlink on the Linux install page.",
          "**Older Linux distros:** run `redstone-launcher --no-sandbox`.",
          "**Windows SmartScreen:** More info → Run anyway.",
          "**macOS Gatekeeper:** right-click → Open.",
          "Re-download the latest asset - a partial download looks like a “broken app”."
        ]},
        { type: "h2", text: "Microsoft login fails" },
        { type: "p", text: "Install `gnome-keyring` on Linux, then **Accounts** → log out of your Microsoft account → sign in again. Confirm the account owns **Java Edition**. Full steps: [Sign in](#microsoft-login)." },
        { type: "h2", text: "Game crashes or never launches" },
        { type: "ul", items: [
          "Wrong Java for that version - let the launcher download it, or set a custom path.",
          "Mods that do not match the loader/version - disable the last pack you added.",
          "Not enough RAM, or so much RAM the OS starts swapping.",
          "Double-clicking Play repeatedly. Older builds could hit “too many open files” / overlapping launches; update if you are behind, and click Play once."
        ]},
        { type: "h2", text: "How to report it" },
        { type: "ol", items: [
          "Note OS, launcher version{version}, and the exact instance/server version.",
          "Copy the last error from the launcher log / terminal.",
          "Open a [GitHub issue](https://github.com/TGGamesYT/redstone-launcher/issues) or post in [Discord](https://discord.gg/S9H2Z6SuEA)."
        ]},
        { type: "callout", kind: "tip", title: "Reproduce once", text: "A short “I clicked X, then Y, then this error” report beats a screenshot with no version. The team ships often - mention if it worked in the previous build." }
      ]
    },
    faq: {
      category: "Fix a problem",
      title: "Frequently asked questions",
      lede: "Short answers. Each one links deeper if you need the long version.",
      keywords: "faq questions free license bedrock offline update open source",
      blocks: [
        { type: "faq" }
      ]
    },
    privacy: {
      category: "More",
      title: "Privacy",
      lede: "No tracking. No analytics. Game files and settings stay on your device.",
      keywords: "privacy tracking analytics local data telemetry",
      blocks: [
        { type: "p", text: "The homepage promise is literal: **Privacy First** - no tracking, no analytics, everything stays **100% local** on your device." },
        { type: "p", text: "Microsoft sign-in still talks to Microsoft (that is how Java authentication works). Mod browsing talks to Modrinth and CurseForge. Optional relay features for server resource packs expose a download URL; pack bytes are not stored on the relay." },
        { type: "p", text: "The launcher does not need an extra Redstone account. Supporting the project on [Patreon](https://www.patreon.com/tgdoescode/join) is optional and separate from playing." },
        { type: "p", text: "Source is public: [github.com/TGGamesYT/redstone-launcher](https://github.com/TGGamesYT/redstone-launcher)." }
      ]
    },
    contact: {
      category: "More",
      title: "Contact & support channels",
      lede: "Humans, not a ticket bot. Pick the channel that matches the problem.",
      keywords: "contact discord email github support team patreon",
      blocks: [
        { type: "p", text: "Redstone Launcher is built by **Muavees** and **TGGamesYT**, with community testers and supporters (shout-out to early Patreon folks like The Blue Panda)." },
        { type: "h2", text: "Where to write" },
        { type: "ul", items: [
          "**Discord** - [discord.gg/S9H2Z6SuEA](https://discord.gg/S9H2Z6SuEA) - fastest for “is it just me?” questions.",
          "**GitHub Issues** - [report a bug](https://github.com/TGGamesYT/redstone-launcher/issues) - crashes, regressions, feature requests with steps.",
          "**Email** - [contact@redstone-launcher.com](mailto:contact@redstone-launcher.com).",
          "**News** - [redstone-launcher.com/#news](https://redstone-launcher.com/#news)."
        ]},
        { type: "h2", text: "Help the project" },
        { type: "ul", items: [
          "Star the repo on [GitHub](https://github.com/TGGamesYT/redstone-launcher).",
          "Become a supporter on [Patreon](https://www.patreon.com/tgdoescode/join).",
          "Send a clear bug report instead of “it no work”."
        ]}
      ]
    }
  },
  faq: [
    { q: "Is Redstone Launcher free?", a: "Yes. 100% free and open source. Patreon is optional support, not a paywall." },
    { q: "Do I need to buy Minecraft?", a: "You need a Microsoft account that owns **Java Edition**. The launcher does not include the game license." },
    { q: "Does it support Bedrock?", a: "No. This is a Java Edition launcher (vanilla, loaders, servers, Modrinth, CurseForge)." },
    { q: "Windows, Linux, and macOS?", a: "Yes. Linux has AppImage, .deb, and Snap. See the install guides." },
    { q: "Is there a CLI version?", a: "Yes, but it is old and unstable. Microsoft login is likely broken. Use the desktop launcher. Files: [redstone-cli releases](https://github.com/Muaves/redstone-cli/releases). We really appreciate your contributions - pull requests are always open." },
    { q: "Why does login say token undefined?", a: "On Linux install `gnome-keyring`, then log out of your Microsoft account under **Accounts** and sign in again. Details on the Sign in page." },
    { q: "The app will not open on an older Linux distro.", a: "Start it with `redstone-launcher --no-sandbox`. Also apply the libvips fix if you see a sharp error." },
    { q: "Can I play offline?", a: "After versions and assets are downloaded you can launch locally. Online servers still need a valid Microsoft session." },
    { q: "Does it track me?", a: "No analytics or tracking. Auth and mod catalogs still call Microsoft / Modrinth / CurseForge as needed. See Privacy." },
    { q: "How do I update?", a: "In the launcher, click **Update** in the left sidebar - it works on all systems. You can also download the newest file from [www.redstone-launcher.com](https://www.redstone-launcher.com/). Snap users can run `sudo snap refresh redstone-launcher`." },
    { q: "Desktop shortcuts do nothing.", a: "Update, then recreate the shortcut. On older Linux distros, start the main app with `--no-sandbox` once first." },
    { q: "Where do I report a bug?", a: "GitHub Issues for reproducible bugs; Discord if you want someone to look with you. Include OS, version, and the log." }
  ]
};
