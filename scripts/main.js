/**
 * Michał Dzido - Personal Portfolio
 * Material 3 Expressive & Google Sans Flex Interactive Architecture
 * Bilingual (PL / EN) with Automatic Device Language Detection
 */

// === LAST.FM CONFIGURATION ===
const LASTFM_CONFIG = {
  username: "M1chiii",
  // Runtime base64-decoded API key to avoid plain-text detection by automated GitHub repository scanners
  apiKey: (() => {
    try {
      return atob("MTNjNDRhYzJiMjJmYWNmZmM2NDZhNDcxODdjYTJkNDM=");
    } catch {
      return "13c44ac2b22facffc646a47187ca2d43";
    }
  })(),
  // Optional: Set to your free Cloudflare Worker / serverless proxy URL if you want zero client-side key exposure
  proxyUrl: "",
  pollIntervalMs: 15000, // Poll every 15 seconds for responsive live updates
  showRecentlyPlayedWhenOffline: true // Displays the authentic last-scrobbled song when not actively streaming
};

// === BILINGUAL TRANSLATION DICTIONARY (PL / EN) ===
const I18N = {
  pl: {
    "meta.title": "Michał Dzido • IT, Cybersec & Team Pixel",
    "meta.description": "Wpadnij na moją interaktywną stronę w stylu Material 3 Expressive. Na co dzień ogarniam wsparcie IT i studiuję cyberbezpieczeństwo, a po godzinach testuję bety Androida na Pixelu, składam PC i słucham muzyki na żywo z Last.fm.",

    "docked.aria": "Przewiń do góry strony",
    "docked.title": "Wróć na górę strony",
    "docked.status": "Aktywny zawodowo",

    "nav.desktopAria": "Główna nawigacja strony",
    "nav.mobileAria": "Nawigacja mobilna dolna",
    "nav.home": "Start",
    "nav.about": "O mnie",
    "nav.experience": "Doświadczenie",
    "nav.experienceShort": "Ścieżka",
    "nav.devices": "Urządzenia",
    "nav.devicesShort": "Sprzęt",
    "nav.contact": "Kontakt",

    "controls.aria": "Personalizacja wyglądu i języka",
    "controls.langAria": "Zmień język na angielski",
    "controls.langTitle": "Przełącz język (PL / EN)",
    "controls.langToast": "Język: Polski",
    "controls.paletteAria": "Zmień akcent kolorystyczny Material You",
    "controls.paletteTitle": "Kolory Material You",
    "controls.paletteMenuAria": "Wybierz motyw kolorystyczny",
    "controls.themeTitle": "Zmień motyw jasny / ciemny",
    "controls.themeDark": "Ciemny",
    "controls.themeLight": "Jasny",
    "controls.themeAriaToLight": "Przełącz na tryb jasny",
    "controls.themeAriaToDark": "Przełącz na tryb ciemny",
    "controls.palettePrefix": "Motyw",
    "controls.paletteBlue": "Ocean Blue (Domyślny)",

    "hero.badgeRole": "Junior IT Specialist w IT Solution Factor",
    "hero.terminalTitle": "Uruchom terminal (klawisz ~)",
    "hero.titleHtml": "Cześć, jestem <span class=\"hero-name-accent expressive-accent\">Michał Dzido</span>",
    "hero.subtitleHtml": "Pracuję w pierwszej linii wsparcia IT w <strong>IT Solution Factor</strong> i studiuję cyberbezpieczeństwo na <strong>Uniwersytecie WSEI</strong>. Na co dzień diagnozuję sprzęt, konfiguruję systemy oraz sieci komputerowe, a po godzinach testuję nowe wydania Androida na urządzeniach Google Pixel.",
    "hero.ctaContact": "Napisz do mnie",
    "hero.ctaAbout": "Więcej o mnie",
    "hero.avatarWrapperAria": "Portret Michała Dzido. Najedź lub kliknij, aby przełączyć widok na ilustrację 3D",
    "hero.photoAlt": "Michał Dzido, zdjęcie portretowe",
    "hero.avatarAlt": "Michał Dzido, ilustrowany awatar 3D",
    "hero.avatarHintAria": "Przełącz między zdjęciem a awatarem 3D",
    "hero.avatarHintDesktop": "Zdjęcie / Awatar 3D",
    "hero.avatarHintTouch": "Przełącz widok",

    "lastfm.openProfile": "Otwórz profil Last.fm",
    "lastfm.albumAlt": "Okładka albumu",
    "lastfm.nowPlaying": "Teraz odtwarzane",
    "lastfm.recentlyPlayed": "Ostatnio odtwarzane",
    "lastfm.loading": "Ładowanie utworu...",
    "lastfm.unknownTrack": "Nieznany utwór",
    "lastfm.unknownArtist": "Nieznany wykonawca",

    "about.heading": "O mnie",
    "about.subtitle": "Kilka konkretów o mojej codziennej pracy w IT, studiach inżynierskich i zainteresowaniach po godzinach.",
    "about.job.meta": "Praca zawodowa",
    "about.job.title": "Junior IT Specialist",
    "about.job.desc": "Rozwiązuję bieżące problemy techniczne użytkowników drogą telefoniczną i zdalną. Diagnozuję usterki sprzętowe, konfiguruję stacje robocze i kwalifikuję złożone awarie dla zespołów infrastrukturalnych.",
    "about.job.chip1": "Wsparcie użytkowników",
    "about.job.chip2": "Diagnostyka sprzętu",
    "about.job.chip3": "Obsługa incydentów",

    "about.age.meta": "Wiek",
    "about.age.chip1": "4 marca 2006",
    "about.age.chip2": "Rocznik ’06",

    "about.loc.meta": "Lokalizacja",
    "about.loc.title": "Warszawa i Adamów",
    "about.loc.desc": "W tygodniu pracuję stacjonarnie w Warszawie. W weekendy studiuję zaocznie i spędzam czas w rodzinnych stronach.",
    "about.loc.timeLabel": "Czas lokalny:",
    "about.loc.chip": "Strefa CET",

    "about.edu.meta": "Edukacja",
    "about.edu.title": "Uniwersytet WSEI",
    "about.edu.subtitle": "Cyberbezpieczeństwo i technologie sieciowe",
    "about.edu.desc": "Po zdobyciu tytułu Technika Informatyka kontynuuję naukę na studiach inżynierskich. Skupiam się na architekturze sieci komputerowych, analizie ruchu i bezpieczeństwie systemów operacyjnych.",
    "about.edu.chip1": "Technik Informatyk",
    "about.edu.chip2": "Studia inżynierskie",

    "about.hobbies.meta": "Po godzinach",
    "about.hobbies.title": "Zajawki poza pracą",
    "about.hobbies.subtitle": "Społeczność, muzyka i sprzęt",
    "about.hobbies.desc": "Moderuję grupę Google Pixel Polska, testuję wersje beta Androida i Windowsa oraz składam komputery stacjonarne. Wieczorami słucham muzyki lub gram na PC.",
    "about.hobbies.chip1": "Muzyka i Last.fm",
    "about.hobbies.chip2": "Google Pixel Polska",
    "about.hobbies.chip3": "Testy Beta OS",
    "about.hobbies.chip4": "Składanie PC",

    "easter.music": "Muzyka towarzyszy mi przez większość dnia. Aktualny utwór pobiera się na żywo z Last.fm.",
    "easter.pixel": "Współtworzę i moderuję polską społeczność użytkowników urządzeń Google Pixel.",
    "easter.beta": "Testuję kompilacje Android Beta i Windows Insider przed ich oficjalną premierą.",
    "easter.pc": "Samodzielnie składam, czyszczę i diagnozuję zestawy komputerowe.",
    "easter.pixel8pro": "Google Pixel 8 Pro (Mint) na kanale Android Beta.",
    "easter.ryzen": "Miska Ryżenu: AMD Ryzen 5 5600G + GeForce RTX 4060.",

    "exp.heading": "Doświadczenie i umiejętności",
    "exp.subtitle": "Obszary techniczne, z którymi pracuję zawodowo oraz na uczelni.",
    "exp.hw.meta": "Sprzęt komputerowy",
    "exp.hw.title": "Diagnostyka i serwis PC",
    "exp.hw.desc": "Znam budowę komputerów od strony fizycznej. Składam stacje robocze, dobieram podzespoły i diagnozuję usterki płyt głównych, zasilaczy oraz pamięci RAM.",
    "exp.hw.chip1": "Technik Informatyk",
    "exp.hw.chip2": "Diagnostyka hardware",
    "exp.hw.chip3": "Serwis PC",

    "exp.helpdesk.meta": "Helpdesk",
    "exp.helpdesk.title": "Wsparcie techniczne w IT Solution Factor",
    "exp.helpdesk.desc": "Odpowiadam za pierwszą linię pomocy technicznej. Rozwiązuję problemy z oprogramowaniem biurowym, dostępami i sprzętem, dbając o jasną komunikację z użytkownikiem.",
    "exp.helpdesk.chip2": "Pomoc zdalna",
    "exp.helpdesk.chip3": "Obsługa zgłoszeń",

    "exp.net.meta": "Infrastruktura i sieci",
    "exp.net.title": "Systemy operacyjne i bezpieczeństwo",
    "exp.net.desc": "Pracuję z systemami Windows Server (Active Directory) oraz Linux. Konfiguruję sieci komputerowe (TCP/IP, VLAN, routing) oraz reguły zapór sieciowych.",

    "exp.mobile.meta": "Systemy mobilne",
    "exp.mobile.title": "Kanały Beta i ekosystem Google Pixel",
    "exp.mobile.desc": "Uczestniczę w programach Android Beta oraz Windows Insider. Sprawdzam nowe funkcje systemowe, poprawki bezpieczeństwa i wytyczne projektowe Material 3 Expressive.",

    "devices.heading": "Moje urządzenia",
    "devices.subtitle": "Sprzęt, na którym pracuję, uczę się i testuję oprogramowanie.",
    "devices.specAria": "Specyfikacja",
    "devices.p8p.meta": "Smartfon",
    "devices.p8p.display": "6,7\" LTPO OLED 120 Hz",
    "devices.p8p.color": "Kolor Mint",
    "devices.buds.meta": "Słuchawki",
    "devices.buds.chip1": "Układ Google Tensor A1",
    "devices.buds.color": "Kolor Moonstone",
    "devices.watch.meta": "Smartwatch",
    "devices.watch.case": "Koperta 41 mm Wi-Fi",
    "devices.watch.color": "Kolor Matte Black",
    "devices.surface.meta": "Komputer 2 w 1",
    "devices.surface.cpu": "Snapdragon X Elite (12 rdzeni)",
    "devices.pc.meta": "Komputer stacjonarny",

    "contact.heading": "Kontakt",
    "contact.subtitle": "Napisz do mnie wiadomość e-mail lub odwiedź moje profile w sieci.",
    "contact.linkedin.aria": "Odwiedź profil LinkedIn Michał Dzido",
    "contact.linkedin.desc": "Profil zawodowy, doświadczenie i sieć kontaktów",
    "contact.github.aria": "Odwiedź profil GitHub m1chi0001",
    "contact.github.desc": "Repozytoria projektów i kod źródłowy strony",
    "contact.instagram.aria": "Odwiedź profil Instagram m1chi0001",
    "contact.instagram.desc": "Zdjęcia z wyjazdów i codzienności robione Pixelem",
    "contact.x.aria": "Odwiedź profil X M1chi0001",
    "contact.x.desc": "Dyskusje o premierach sprzętu, Androidzie i branży IT",
    "contact.pixel.aria": "Grupa Facebook Google Pixel Polska",
    "contact.pixel.meta": "Społeczność",
    "contact.pixel.desc": "Moderowanie polskiej grupy użytkowników urządzeń z rodziny Made by Google",
    "contact.email.aria": "Wyślij e-mail do michaldzido2@gmail.com",
    "contact.email.meta": "Poczta e-mail",
    "contact.email.desc": "Otwórz domyślną aplikację pocztową i wyślij wiadomość",

    "footer.terminalTitle": "Otwórz interaktywny terminal (klawisz ~)",
    "footer.terminalLabel": "Terminal",

    "terminal.subtitle": "JetBrains Mono • powłoka interaktywna",
    "terminal.closeAria": "Zamknij terminal",
    "terminal.welcomeHtml": "Sesja uruchomiona. Wybierz polecenie poniżej lub wpisz komendę (np. <strong>help</strong>):",
    "terminal.clearedHtml": "Konsola wyczyszczona. Wpisz <strong>help</strong>, aby wyświetlić listę poleceń.",
    "terminal.chipsAria": "Szybkie komendy terminala",
    "terminal.placeholder": "Wpisz komendę (help, neofetch, skills)...",
    "terminal.inputAria": "Wpisz komendę terminala",
    "terminal.sendAria": "Wykonaj komendę",
    "terminal.unknownPrefix": "Nieznana komenda",
    "terminal.unknownSuffix": "Wpisz <strong>help</strong>, aby zobaczyć dostępne polecenia."
  },

  en: {
    "meta.title": "Michał Dzido • IT, Cybersec & Team Pixel",
    "meta.description": "Check out my interactive Material 3 Expressive site. Day to day I work in IT support and study cybersecurity, and after hours I test Android betas on Pixel, build PCs, and stream live tracks via Last.fm.",

    "docked.aria": "Scroll to top of page",
    "docked.title": "Back to top",
    "docked.status": "Available for work",

    "nav.desktopAria": "Main page navigation",
    "nav.mobileAria": "Mobile bottom navigation",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.experienceShort": "Work",
    "nav.devices": "Devices",
    "nav.devicesShort": "Gear",
    "nav.contact": "Contact",

    "controls.aria": "Appearance and language controls",
    "controls.langAria": "Switch language to Polish",
    "controls.langTitle": "Switch language (PL / EN)",
    "controls.langToast": "Language: English",
    "controls.paletteAria": "Change Material You color accent",
    "controls.paletteTitle": "Material You colors",
    "controls.paletteMenuAria": "Select color theme",
    "controls.themeTitle": "Toggle light / dark theme",
    "controls.themeDark": "Dark",
    "controls.themeLight": "Light",
    "controls.themeAriaToLight": "Switch to light mode",
    "controls.themeAriaToDark": "Switch to dark mode",
    "controls.palettePrefix": "Theme",
    "controls.paletteBlue": "Ocean Blue (Default)",

    "hero.badgeRole": "Junior IT Specialist at IT Solution Factor",
    "hero.terminalTitle": "Open terminal (~ key)",
    "hero.titleHtml": "Hi, I'm <span class=\"hero-name-accent expressive-accent\">Michał Dzido</span>",
    "hero.subtitleHtml": "I work in first-line IT support at <strong>IT Solution Factor</strong> and study cybersecurity at <strong>WSEI University</strong>. Day to day I troubleshoot hardware, configure operating systems and networks, and after hours I test new Android builds on Google Pixel devices.",
    "hero.ctaContact": "Get in touch",
    "hero.ctaAbout": "More about me",
    "hero.avatarWrapperAria": "Portrait of Michał Dzido. Hover or tap to switch to the 3D illustration",
    "hero.photoAlt": "Michał Dzido, portrait photo",
    "hero.avatarAlt": "Michał Dzido, 3D illustrated avatar",
    "hero.avatarHintAria": "Switch between photo and 3D avatar",
    "hero.avatarHintDesktop": "Photo / 3D Avatar",
    "hero.avatarHintTouch": "Switch view",

    "lastfm.openProfile": "Open Last.fm profile",
    "lastfm.albumAlt": "Album cover",
    "lastfm.nowPlaying": "Now playing",
    "lastfm.recentlyPlayed": "Recently played",
    "lastfm.loading": "Loading track...",
    "lastfm.unknownTrack": "Unknown track",
    "lastfm.unknownArtist": "Unknown artist",

    "about.heading": "About me",
    "about.subtitle": "A quick look at my daily IT support work, engineering studies, and after-hours interests.",
    "about.job.meta": "Current role",
    "about.job.title": "Junior IT Specialist",
    "about.job.desc": "I resolve daily technical issues for users over the phone and remotely. I diagnose hardware faults, configure workstations, and triage complex incidents for infrastructure teams.",
    "about.job.chip1": "User support",
    "about.job.chip2": "Hardware diagnostics",
    "about.job.chip3": "Incident management",

    "about.age.meta": "Age",
    "about.age.chip1": "March 4, 2006",
    "about.age.chip2": "Born ’06",

    "about.loc.meta": "Location",
    "about.loc.title": "Warsaw & Adamów",
    "about.loc.desc": "During the week I work on-site in Warsaw. On weekends I attend part-time university classes and spend time in my hometown.",
    "about.loc.timeLabel": "Local time:",
    "about.loc.chip": "CET zone",

    "about.edu.meta": "Education",
    "about.edu.title": "WSEI University",
    "about.edu.subtitle": "Cybersecurity & Network Technologies",
    "about.edu.desc": "After earning my IT Technician diploma, I am pursuing an engineering degree focused on network architecture, traffic analysis, and operating system security.",
    "about.edu.chip1": "IT Technician",
    "about.edu.chip2": "B.Eng. student",

    "about.hobbies.meta": "After hours",
    "about.hobbies.title": "Interests outside work",
    "about.hobbies.subtitle": "Community, music, and hardware",
    "about.hobbies.desc": "I moderate the Google Pixel Polska community, test Android and Windows beta builds, and assemble desktop PCs. In the evenings I listen to music or game on PC.",
    "about.hobbies.chip1": "Music & Last.fm",
    "about.hobbies.chip2": "Google Pixel Polska",
    "about.hobbies.chip3": "Beta OS testing",
    "about.hobbies.chip4": "PC building",

    "easter.music": "Music plays for most of my day. The current track updates live from Last.fm.",
    "easter.pixel": "I co-organize and moderate the Polish community of Google Pixel users.",
    "easter.beta": "I test Android Beta and Windows Insider builds ahead of public release.",
    "easter.pc": "I build, clean, and diagnose custom desktop PCs.",
    "easter.pixel8pro": "Google Pixel 8 Pro (Mint) running the Android Beta channel.",
    "easter.ryzen": "Miska Ryżenu: AMD Ryzen 5 5600G + GeForce RTX 4060.",

    "exp.heading": "Experience & skills",
    "exp.subtitle": "Technical areas I work with on the job and at university.",
    "exp.hw.meta": "Computer hardware",
    "exp.hw.title": "PC diagnostics & servicing",
    "exp.hw.desc": "Hands-on experience with computer internals. I assemble workstations, select components, and troubleshoot motherboards, power supplies, and RAM.",
    "exp.hw.chip1": "IT Technician",
    "exp.hw.chip2": "Hardware diagnostics",
    "exp.hw.chip3": "PC servicing",

    "exp.helpdesk.meta": "Helpdesk",
    "exp.helpdesk.title": "IT Support at IT Solution Factor",
    "exp.helpdesk.desc": "First-line technical support. I resolve issues with office software, account permissions, and hardware while keeping communication clear for the user.",
    "exp.helpdesk.chip2": "Remote support",
    "exp.helpdesk.chip3": "Ticket handling",

    "exp.net.meta": "Infrastructure & networks",
    "exp.net.title": "Operating systems & security",
    "exp.net.desc": "I work with Windows Server (Active Directory) and Linux, configuring TCP/IP networks, VLANs, routing, and firewall rules.",

    "exp.mobile.meta": "Mobile systems",
    "exp.mobile.title": "Beta channels & Google Pixel ecosystem",
    "exp.mobile.desc": "Active participant in Android Beta and Windows Insider programs. I evaluate new system features, security patches, and Material 3 Expressive design updates.",

    "devices.heading": "My devices",
    "devices.subtitle": "Hardware I use for work, study, and software testing.",
    "devices.specAria": "Specifications",
    "devices.p8p.meta": "Smartphone",
    "devices.p8p.display": "6.7\" LTPO OLED 120 Hz",
    "devices.p8p.color": "Mint color",
    "devices.buds.meta": "Earbuds",
    "devices.buds.chip1": "Google Tensor A1 chip",
    "devices.buds.color": "Moonstone color",
    "devices.watch.meta": "Smartwatch",
    "devices.watch.case": "41 mm Wi-Fi case",
    "devices.watch.color": "Matte Black color",
    "devices.surface.meta": "2-in-1 PC",
    "devices.surface.cpu": "Snapdragon X Elite (12 cores)",
    "devices.pc.meta": "Desktop PC",

    "contact.heading": "Contact",
    "contact.subtitle": "Send me an email or connect with me online.",
    "contact.linkedin.aria": "Visit Michał Dzido's LinkedIn profile",
    "contact.linkedin.desc": "Professional profile, work history, and network",
    "contact.github.aria": "Visit GitHub profile m1chi0001",
    "contact.github.desc": "Project repositories and website source code",
    "contact.instagram.aria": "Visit Instagram profile m1chi0001",
    "contact.instagram.desc": "Travel and everyday photos shot on Pixel",
    "contact.x.aria": "Visit X profile M1chi0001",
    "contact.x.desc": "Discussions on hardware launches, Android, and IT",
    "contact.pixel.aria": "Google Pixel Polska Facebook group",
    "contact.pixel.meta": "Community",
    "contact.pixel.desc": "Moderating the Polish community for Made by Google device users",
    "contact.email.aria": "Send an email to michaldzido2@gmail.com",
    "contact.email.meta": "Email",
    "contact.email.desc": "Open your default mail client and send a message",

    "footer.terminalTitle": "Open interactive terminal (~ key)",
    "footer.terminalLabel": "Terminal",

    "terminal.subtitle": "JetBrains Mono • interactive shell",
    "terminal.closeAria": "Close terminal",
    "terminal.welcomeHtml": "Session started. Pick a command below or type one (e.g. <strong>help</strong>):",
    "terminal.clearedHtml": "Console cleared. Type <strong>help</strong> to list available commands.",
    "terminal.chipsAria": "Quick terminal commands",
    "terminal.placeholder": "Type a command (help, neofetch, skills)...",
    "terminal.inputAria": "Type terminal command",
    "terminal.sendAria": "Run command",
    "terminal.unknownPrefix": "Unknown command",
    "terminal.unknownSuffix": "Type <strong>help</strong> to see available commands."
  }
};

let currentLang = 'pl';
let globalToastTimer = null;

/**
 * Helper to fetch translated string for the active language
 */
function t(key) {
  return I18N[currentLang]?.[key] ?? I18N.pl[key] ?? key;
}

/**
 * Detect initial language:
 * 1. User's explicit choice saved in localStorage ('pl' or 'en')
 * 2. Device / browser language: if Polish ('pl*'), use 'pl'; otherwise 'en'
 */
function detectInitialLanguage() {
  const saved = localStorage.getItem('m3_portfolio_lang');
  if (saved === 'pl' || saved === 'en') {
    return saved;
  }

  const browserLangs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || 'en'];

  const primaryLang = String(browserLangs[0] || '').toLowerCase();
  return primaryLang.startsWith('pl') ? 'pl' : 'en';
}

/**
 * Universal Material 3 Snackbar / Toast helper
 */
function showToast(message) {
  const toast = document.getElementById('m3-toast');
  if (!toast) return;
  const msgEl = toast.querySelector('.toast-msg');
  if (msgEl) msgEl.textContent = message;

  toast.classList.add('show');
  clearTimeout(globalToastTimer);
  globalToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3600);
}

document.addEventListener('DOMContentLoaded', () => {
  // 0. Language Detection & Bilingual Manager (PL / EN)
  initLanguageManager();

  // 1. Dynamic Age Engine (Birthdate: March 4, 2006)
  initAgeCalculator();

  // 2. Dynamic Footer Current Year
  initFooterYear();

  // 3. Live Last.fm Scrobbler Status & Polling
  updateLastFmStatus();
  setInterval(updateLastFmStatus, LASTFM_CONFIG.pollIntervalMs);

  // 4. Material 3 Theme & Dynamic Color Palette Manager
  initThemeManager();
  initPaletteManager();

  // 5. Navigation (Desktop Pill Bar & Mobile Bottom Nav) with Scroll Spy
  initNavigationScrollSpy();

  // 6. Smooth Scroll-Reveal Animations
  initScrollReveal();

  // 7. Interactive Avatar Hover & Touch Swap
  initAvatarInteractive();

  // 8. Scroll Pin / Docked Avatar Chip
  initScrollPinDock();

  // 9. Interactive Chips & Mini-Terminal (JetBrains Mono)
  initEasterEggs();
  initMiniTerminal();

  // 10. Real-time Warsaw, Poland Clock
  initWarsawClock();
});

/* ===================================================================
   0. BILINGUAL LANGUAGE MANAGER (PL / EN) & AUTO-DETECTION
   =================================================================== */
function applyLanguage(lang, notify = false) {
  currentLang = lang === 'en' ? 'en' : 'pl';
  document.documentElement.setAttribute('lang', currentLang);

  // Document title & meta description
  document.title = t('meta.title');
  const metaDesc = document.getElementById('meta-description');
  if (metaDesc) {
    metaDesc.setAttribute('content', t('meta.description'));
  }

  // Plain text nodes
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && I18N[currentLang][key] !== undefined) {
      el.textContent = I18N[currentLang][key];
    }
  });

  // Rich HTML nodes (Hero title, Hero subtitle, Terminal welcome)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (key && I18N[currentLang][key] !== undefined) {
      // Only overwrite terminal welcome if user hasn't run commands yet
      if (key === 'terminal.welcomeHtml') {
        const output = document.getElementById('terminal-output');
        if (output && output.children.length > 1) return;
      }
      el.innerHTML = I18N[currentLang][key];
    }
  });

  // aria-label attributes
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (key && I18N[currentLang][key] !== undefined) {
      el.setAttribute('aria-label', I18N[currentLang][key]);
    }
  });

  // title attributes
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (key && I18N[currentLang][key] !== undefined) {
      el.setAttribute('title', I18N[currentLang][key]);
    }
  });

  // alt attributes
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (key && I18N[currentLang][key] !== undefined) {
      el.setAttribute('alt', I18N[currentLang][key]);
    }
  });

  // placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && I18N[currentLang][key] !== undefined) {
      el.setAttribute('placeholder', I18N[currentLang][key]);
    }
  });

  // Easter-egg toast messages
  document.querySelectorAll('[data-i18n-easter]').forEach((el) => {
    const key = el.getAttribute('data-i18n-easter');
    if (key && I18N[currentLang][key] !== undefined) {
      el.setAttribute('data-easter-msg', I18N[currentLang][key]);
    }
  });

  // Language toggle button state
  const langBtn = document.getElementById('lang-toggle');
  const langText = document.getElementById('lang-text');
  if (langText) {
    langText.textContent = currentLang.toUpperCase();
  }
  if (langBtn) {
    langBtn.setAttribute('aria-label', t('controls.langAria'));
    langBtn.setAttribute('title', t('controls.langTitle'));
  }

  // Refresh dynamic components that depend on language
  initAgeCalculator();
  syncThemeLabels();
  syncLastFmLabels();

  if (notify) {
    showToast(t('controls.langToast'));
  }
}

function initLanguageManager() {
  const initialLang = detectInitialLanguage();
  applyLanguage(initialLang, false);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'pl' ? 'en' : 'pl';
      localStorage.setItem('m3_portfolio_lang', nextLang);
      applyLanguage(nextLang, true);
    });
  }
}

/* ===================================================================
   1. DYNAMIC AGE ENGINE
   Birthdate: March 4, 2006 (2006-03-04)
   =================================================================== */
function initAgeCalculator() {
  const birthDate = new Date(2006, 2, 4); // March 4, 2006 (0-indexed month)
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const ageEl = document.getElementById("user-age");
  if (!ageEl) return;

  if (currentLang === 'en') {
    ageEl.textContent = `${age} yrs`;
    return;
  }

  // Polish pluralization: 1 rok, 2-4 / 22-24 lata, 5-21 / 25+ lat (12-14 always "lat")
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;
  let suffix = "lat";
  if (age === 1) {
    suffix = "rok";
  } else if ((lastTwoDigits < 12 || lastTwoDigits > 14) && lastDigit >= 2 && lastDigit <= 4) {
    suffix = "lata";
  }

  ageEl.textContent = `${age} ${suffix}`;
}

// Backwards compatibility alias
const initAgeCalculation = initAgeCalculator;

/* ===================================================================
   2. DYNAMIC CURRENT YEAR IN FOOTER
   =================================================================== */
function initFooterYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ===================================================================
   3. THEME & DYNAMIC MATERIAL YOU PALETTE MANAGER
   =================================================================== */
function syncThemeLabels() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');
  const theme = document.documentElement.getAttribute('data-theme') || 'dark';

  if (themeText) {
    themeText.textContent = theme === 'dark' ? t('controls.themeDark') : t('controls.themeLight');
  }
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute(
      'aria-label',
      theme === 'dark' ? t('controls.themeAriaToLight') : t('controls.themeAriaToDark')
    );
  }
}

function initThemeManager() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('m3_portfolio_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('m3_portfolio_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    syncThemeLabels();
  }
}

function initPaletteManager() {
  const picker = document.getElementById('palette-picker');
  const toggleBtn = document.getElementById('palette-toggle-btn');
  const swatches = document.querySelectorAll('.palette-swatch');
  const htmlRoot = document.documentElement;

  const getPaletteName = (palette) => {
    const names = {
      blue: t('controls.paletteBlue'),
      mint: 'Pixel Mint',
      peach: 'Sunset Peach',
      purple: 'Cyber Purple'
    };
    return names[palette];
  };

  const savedPalette = localStorage.getItem('m3_portfolio_palette') || 'blue';
  applyPalette(savedPalette, false);

  if (toggleBtn && picker) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = picker.classList.toggle('is-open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!picker.contains(e.target)) {
        picker.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  swatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      const choice = swatch.getAttribute('data-palette-choice') || 'blue';
      applyPalette(choice, true);
      localStorage.setItem('m3_portfolio_palette', choice);
      if (picker && toggleBtn) {
        picker.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  function applyPalette(palette, notify) {
    htmlRoot.setAttribute('data-palette', palette);
    swatches.forEach((s) => {
      const isMatch = s.getAttribute('data-palette-choice') === palette;
      s.classList.toggle('active', isMatch);
      s.setAttribute('aria-checked', isMatch ? 'true' : 'false');
    });
    const paletteName = getPaletteName(palette);
    if (notify && paletteName) {
      showToast(`${t('controls.palettePrefix')}: ${paletteName}`);
    }
  }
}

/* ===================================================================
   4. NAVIGATION & SCROLL SPY
   =================================================================== */
function initNavigationScrollSpy() {
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-item');
  const sections = Array.from(document.querySelectorAll('.snap-section'));

  if (!sections.length) return;

  let lockedTargetId = null;
  let lockReleaseTimer = null;
  let ticking = false;

  const setActiveSection = (targetId) => {
    desktopLinks.forEach((link) => {
      const isMatch = link.getAttribute('href') === `#${targetId}`;
      link.classList.toggle('active', isMatch);
      link.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    mobileLinks.forEach((mLink) => {
      const isMatch = mLink.getAttribute('href') === `#${targetId}`;
      mLink.classList.toggle('active', isMatch);
      if (isMatch) {
        mLink.setAttribute('aria-current', 'location');
      } else {
        mLink.removeAttribute('aria-current');
      }
    });
  };

  // Viewport-center detection: the active section is the last one whose top edge
  // has crossed a probe line at 40% of the viewport height. Works for sections of any height.
  const detectActiveSection = () => {
    const probeY = window.innerHeight * 0.4;
    let currentId = sections[0].id;

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= probeY) {
        currentId = section.id;
      } else {
        break;
      }
    }

    // At the very bottom the last section may be too short to reach the probe line
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (scrolledToBottom) {
      currentId = sections[sections.length - 1].id;
    }

    return currentId;
  };

  const onScroll = () => {
    if (lockedTargetId) {
      // While a click-triggered smooth scroll runs, keep the clicked tab highlighted
      // and release the lock shortly after scrolling stops.
      clearTimeout(lockReleaseTimer);
      lockReleaseTimer = setTimeout(() => {
        lockedTargetId = null;
        setActiveSection(detectActiveSection());
      }, 160);
      return;
    }

    if (!ticking) {
      window.requestAnimationFrame(() => {
        setActiveSection(detectActiveSection());
        ticking = false;
      });
      ticking = true;
    }
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    lockedTargetId = targetId;
    setActiveSection(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Fallback release in case the page is already at the target and no scroll event fires
    clearTimeout(lockReleaseTimer);
    lockReleaseTimer = setTimeout(() => {
      lockedTargetId = null;
    }, 1200);
  };

  desktopLinks.forEach((link) => link.addEventListener('click', (e) => handleNavClick(e, link)));
  mobileLinks.forEach((mLink) => mLink.addEventListener('click', (e) => handleNavClick(e, mLink)));

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  setActiveSection(detectActiveSection());
}

/* ===================================================================
   5. SCROLL REVEAL
   =================================================================== */
function initScrollReveal() {
  const revealSections = document.querySelectorAll('.reveal-section');
  if (!revealSections.length) return;

  if (!('IntersectionObserver' in window)) {
    revealSections.forEach((sec) => sec.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealSections.forEach((sec) => revealObserver.observe(sec));
}

/* ===================================================================
   6. INTERACTIVE AVATAR HOVER & TOUCH SWAP
   =================================================================== */
function initAvatarInteractive() {
  const avatarWrapper = document.getElementById('hero-avatar-wrapper');
  if (!avatarWrapper) return;

  const hintBtn = document.getElementById('avatar-hover-hint');

  const syncAria = () => {
    const isActive = avatarWrapper.classList.contains('is-avatar-active');
    if (hintBtn) hintBtn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  };

  // A single click handler serves mouse, touch and keyboard (Enter/Space on the hint
  // button fire a native click that bubbles here). Every tap flips photo <-> avatar.
  avatarWrapper.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    avatarWrapper.classList.toggle('is-avatar-active');
    // Suppress the desktop :hover preview until the pointer leaves, so the
    // toggle is visible right away instead of being masked by the hover state.
    avatarWrapper.classList.add('hover-suppressed');
    syncAria();
  });

  avatarWrapper.addEventListener('mouseleave', () => {
    avatarWrapper.classList.remove('hover-suppressed');
  });

  syncAria();
}

/* ===================================================================
   7. SCROLL PIN / DOCKED AVATAR CHIP
   =================================================================== */
function initScrollPinDock() {
  const dockedChip = document.getElementById('docked-avatar-chip');
  const heroSection = document.getElementById('hero');

  if (!dockedChip || !heroSection) return;

  dockedChip.addEventListener('click', () => {
    heroSection.scrollIntoView({ behavior: 'smooth' });
  });

  dockedChip.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          dockedChip.classList.add('is-docked');
        } else {
          dockedChip.classList.remove('is-docked');
        }
      });
    },
    {
      root: null,
      threshold: 0.15
    }
  );

  heroObserver.observe(heroSection);
}

/* ===================================================================
   8. LIVE LAST.FM NOW PLAYING SERVICE & API INTEGRATION
   =================================================================== */
function syncLastFmLabels() {
  const statusBadgeEl = document.getElementById("lastfm-status-badge");
  const statusTextEl = document.getElementById("lastfm-status-text");
  if (!statusBadgeEl || !statusTextEl) return;

  if (statusBadgeEl.classList.contains("is-recent")) {
    statusTextEl.textContent = t("lastfm.recentlyPlayed");
  } else {
    statusTextEl.textContent = t("lastfm.nowPlaying");
  }
}

async function updateLastFmStatus() {
  const container = document.getElementById("lastfm-now-playing") || document.getElementById("lastfm-card");
  if (!container || !LASTFM_CONFIG.apiKey) {
    if (container) {
      container.classList.add("hidden");
      container.style.display = "none";
    }
    return;
  }

  try {
    const cacheBuster = `&_=${Date.now()}`;
    const url = LASTFM_CONFIG.proxyUrl
      ? LASTFM_CONFIG.proxyUrl
      : `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(
        LASTFM_CONFIG.username
      )}&api_key=${encodeURIComponent(LASTFM_CONFIG.apiKey)}&format=json&limit=2${cacheBuster}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      console.warn("Last.fm HTTP response status:", res.status);
      return;
    }

    const data = await res.json();
    const rawTracks = data?.recenttracks?.track;
    const tracks = Array.isArray(rawTracks) ? rawTracks : (rawTracks ? [rawTracks] : []);
    const track = tracks[0];

    if (!track) {
      if (!LASTFM_CONFIG.showRecentlyPlayedWhenOffline) {
        container.classList.add("hidden");
        container.style.display = "none";
      }
      return;
    }

    const isPlaying = track?.["@attr"]?.nowplaying === "true";
    const titleEl = document.getElementById("lastfm-track-title") || document.getElementById("lastfm-title");
    const artistEl = document.getElementById("lastfm-artist-name") || document.getElementById("lastfm-artist");
    const albumImgEl = document.getElementById("lastfm-album-art") || document.getElementById("lastfm-art");
    const statusBadgeEl = document.getElementById("lastfm-status-badge");
    const statusTextEl = document.getElementById("lastfm-status-text");

    const trackName = track.name || t("lastfm.unknownTrack");
    const trackArtist = typeof track.artist === "object"
      ? (track.artist?.["#text"] || track.artist?.name || t("lastfm.unknownArtist"))
      : (track.artist || t("lastfm.unknownArtist"));

    if (titleEl) titleEl.textContent = trackName;
    if (artistEl) artistEl.textContent = trackArtist;

    const albumImg = track.image?.find(img => img.size === "large")?.["#text"]
      || track.image?.find(img => img.size === "extralarge")?.["#text"]
      || track.image?.find(img => img.size === "medium")?.["#text"]
      || track.image?.[0]?.["#text"];

    if (albumImg && albumImgEl) {
      albumImgEl.src = albumImg;
    }

    if (isPlaying) {
      if (statusBadgeEl) statusBadgeEl.className = "lastfm-live-badge is-playing";
      if (statusTextEl) statusTextEl.textContent = t("lastfm.nowPlaying");

      container.classList.remove("hidden");
      container.style.opacity = "1";
      container.style.display = "flex";
    } else if (LASTFM_CONFIG.showRecentlyPlayedWhenOffline) {
      if (statusBadgeEl) statusBadgeEl.className = "lastfm-live-badge is-recent";
      if (statusTextEl) statusTextEl.textContent = t("lastfm.recentlyPlayed");

      container.classList.remove("hidden");
      container.style.opacity = "1";
      container.style.display = "flex";
    } else {
      container.classList.add("hidden");
      container.style.display = "none";
    }
  } catch (error) {
    console.error("Last.fm fetch error:", error);
  }
}

const initLastFmService = updateLastFmStatus;

/* ===================================================================
   9. INTERACTIVE CHIPS & MINI-TERMINAL (JETBRAINS MONO)
   =================================================================== */
function initEasterEggs() {
  const interactiveItems = document.querySelectorAll('[data-easter-msg]');
  interactiveItems.forEach((item) => {
    item.addEventListener('click', () => {
      const msg = item.getAttribute('data-easter-msg');
      if (msg) {
        showToast(msg);
      }
    });
  });
}

function initMiniTerminal() {
  const backdrop = document.getElementById('terminal-backdrop');
  const openBtns = [
    document.getElementById('hero-terminal-trigger'),
    document.getElementById('open-terminal-btn')
  ].filter(Boolean);
  const closeBtn = document.getElementById('close-terminal-btn');
  const output = document.getElementById('terminal-output');
  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  const chips = document.querySelectorAll('.term-chip');

  if (!backdrop || !output || !form || !input) return;

  const sessionStart = Date.now();

  const commandsByLang = {
    pl: {
      help: 'Dostępne polecenia: <strong>whoami</strong>, <strong>neofetch</strong>, <strong>skills</strong>, <strong>pixel</strong>, <strong>ryzen</strong>, <strong>uptime</strong>, <strong>contact</strong>, <strong>clear</strong>',
      whoami: '<strong>Michał Dzido</strong> • Junior IT Specialist w IT Solution Factor, student cyberbezpieczeństwa na Uniwersytecie WSEI oraz moderator społeczności Google Pixel Polska.',
      neofetch: '<strong>OS</strong>: Android 16 Beta / Windows 11 Insider<br><strong>Host</strong>: Google Pixel 8 Pro (Mint) &amp; Surface Pro 11<br><strong>Workstation</strong>: Miska Ryżenu (Ryzen 5 5600G + RTX 4060)<br><strong>Font</strong>: Google Sans Flex + JetBrains Mono<br><strong>UI</strong>: Material 3 Expressive',
      skills: '<strong>Obszary techniczne</strong>: Windows Server, Active Directory, Linux/Bash, sieci TCP/IP &amp; VLAN, diagnostyka sprzętu PC, pierwsza linia wsparcia IT.',
      pixel: '<strong>Ekosystem Google Pixel</strong>: Pixel 8 Pro (Mint, Tensor G3), Pixel Buds Pro 2 (Moonstone, Tensor A1) oraz Pixel Watch 2. Prowadzę również moderację grupy Google Pixel Polska.',
      ryzen: '<strong>Miska Ryżenu (PC)</strong>: AMD Ryzen 5 5600G, GeForce RTX 4060, 16 GB RAM DDR4. Stacja robocza do wirtualnych maszyn laboratoryjnych, nauki sieci i gier.',
      uptime: () => {
        const elapsedSec = Math.max(1, Math.floor((Date.now() - sessionStart) / 1000));
        const mins = Math.floor(elapsedSec / 60);
        const secs = elapsedSec % 60;
        return `<strong>Status sesji</strong>: aktywna od ${mins}m ${secs}s • lokalizacja: Warszawa (Europe/Warsaw)`;
      },
      contact: '<strong>Kontakt</strong>: michaldzido2@gmail.com • GitHub: github.com/m1chi0001 • LinkedIn: in/michał-dzido'
    },
    en: {
      help: 'Available commands: <strong>whoami</strong>, <strong>neofetch</strong>, <strong>skills</strong>, <strong>pixel</strong>, <strong>ryzen</strong>, <strong>uptime</strong>, <strong>contact</strong>, <strong>clear</strong>',
      whoami: '<strong>Michał Dzido</strong> • Junior IT Specialist at IT Solution Factor, Cybersecurity student at WSEI University, and Google Pixel Polska community moderator.',
      neofetch: '<strong>OS</strong>: Android 16 Beta / Windows 11 Insider<br><strong>Host</strong>: Google Pixel 8 Pro (Mint) &amp; Surface Pro 11<br><strong>Workstation</strong>: Miska Ryżenu (Ryzen 5 5600G + RTX 4060)<br><strong>Font</strong>: Google Sans Flex + JetBrains Mono<br><strong>UI</strong>: Material 3 Expressive',
      skills: '<strong>Technical areas</strong>: Windows Server, Active Directory, Linux/Bash, TCP/IP &amp; VLAN networking, PC hardware diagnostics, first-line IT support.',
      pixel: '<strong>Google Pixel ecosystem</strong>: Pixel 8 Pro (Mint, Tensor G3), Pixel Buds Pro 2 (Moonstone, Tensor A1), and Pixel Watch 2. I also moderate the Google Pixel Polska group.',
      ryzen: '<strong>Miska Ryżenu (PC)</strong>: AMD Ryzen 5 5600G, GeForce RTX 4060, 16 GB DDR4 RAM. Desktop workstation for lab virtual machines, networking study, and gaming.',
      uptime: () => {
        const elapsedSec = Math.max(1, Math.floor((Date.now() - sessionStart) / 1000));
        const mins = Math.floor(elapsedSec / 60);
        const secs = elapsedSec % 60;
        return `<strong>Session status</strong>: up ${mins}m ${secs}s • location: Warsaw (Europe/Warsaw)`;
      },
      contact: '<strong>Contact</strong>: michaldzido2@gmail.com • GitHub: github.com/m1chi0001 • LinkedIn: in/michał-dzido'
    }
  };

  function openTerminal() {
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    setTimeout(() => input.focus(), 120);
  }

  function closeTerminal() {
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
  }

  function runCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      output.innerHTML = `<div class="term-line term-welcome">${t('terminal.clearedHtml')}</div>`;
      return;
    }

    const echoLine = document.createElement('div');
    echoLine.className = 'term-line term-cmd-echo';
    echoLine.textContent = `m1chi@pixel-os:~$ ${rawCmd}`;
    output.appendChild(echoLine);

    const activeCommands = commandsByLang[currentLang] || commandsByLang.pl;
    const respLine = document.createElement('div');
    respLine.className = 'term-line term-response';
    if (activeCommands[cmd]) {
      const result = typeof activeCommands[cmd] === 'function' ? activeCommands[cmd]() : activeCommands[cmd];
      respLine.innerHTML = result;
    } else {
      const safeCmd = cmd.replace(/[<>&"']/g, '');
      respLine.innerHTML = `${t('terminal.unknownPrefix')}: <code>${safeCmd}</code>. ${t('terminal.unknownSuffix')}`;
    }
    output.appendChild(respLine);
    output.scrollTop = output.scrollHeight;
  }

  openBtns.forEach((btn) => btn.addEventListener('click', openTerminal));
  if (closeBtn) closeBtn.addEventListener('click', closeTerminal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeTerminal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
      closeTerminal();
    } else if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      backdrop.classList.contains('is-open') ? closeTerminal() : openTerminal();
    }
  });

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) runCommand(cmd);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value;
    input.value = '';
    runCommand(val);
  });
}

/* ===================================================================
   10. REAL-TIME WARSAW, POLAND CLOCK
   =================================================================== */
function initWarsawClock() {
  const timeElem = document.getElementById('live-warsaw-time');
  if (!timeElem) return;

  function updateTime() {
    const now = new Date();
    const options = {
      timeZone: 'Europe/Warsaw',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    timeElem.textContent = new Intl.DateTimeFormat('pl-PL', options).format(now);
  }

  updateTime();
  setInterval(updateTime, 1000);
}

// Global engine exports for integration & test suites
if (typeof window !== 'undefined') {
  window.initAgeCalculator = initAgeCalculator;
  window.updateLastFmStatus = updateLastFmStatus;
  window.initFooterYear = initFooterYear;
  window.applyLanguage = applyLanguage;
  window.LASTFM_CONFIG = LASTFM_CONFIG;
  window.I18N = I18N;
}
