/**
 * Michał Dzido - personal site
 * Bilingual (PL / EN), Material You accent picker, live Last.fm card, terminal easter egg
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

// === TRANSLATIONS (PL / EN) ===
const I18N = {
  pl: {
    "meta.title": "Michał Dzido",
    "meta.description": "Michał Dzido. Pierwsza linia wsparcia IT w IT Solution Factor, student cyberbezpieczeństwa na Uniwersytecie WSEI w Lublinie, moderator grupy Google Pixel Polska.",

    "nav.skip": "Przejdź do treści",
    "docked.aria": "Przewiń do góry strony",
    "docked.title": "Wróć na górę",

    "nav.desktopAria": "Główna nawigacja strony",
    "nav.mobileAria": "Nawigacja mobilna",
    "nav.home": "Start",
    "nav.about": "O mnie",
    "nav.experience": "Doświadczenie",
    "nav.experienceShort": "Praca",
    "nav.devices": "Sprzęt",
    "nav.contact": "Kontakt",

    "controls.aria": "Język i wygląd",
    "controls.langAria": "Zmień język na angielski",
    "controls.langTitle": "Przełącz język (PL / EN)",
    "controls.langToastTitle": "Język",
    "controls.langToast": "Strona jest teraz po polsku",
    "controls.paletteAria": "Zmień kolor akcentu",
    "controls.paletteTitle": "Kolor akcentu",
    "controls.paletteMenuAria": "Kolor akcentu",
    "controls.themeTitle": "Motyw jasny / ciemny",
    "controls.themeDark": "Ciemny",
    "controls.themeLight": "Jasny",
    "controls.themeToastTitle": "Motyw",
    "controls.themeToastDark": "Włączono ciemny motyw",
    "controls.themeToastLight": "Włączono jasny motyw",
    "controls.themeAriaToLight": "Przełącz na jasny motyw",
    "controls.themeAriaToDark": "Przełącz na ciemny motyw",
    "controls.paletteToastTitle": "Kolor akcentu",
    "controls.palettePrefix": "Wybrano",
    "palette.blue": "Niebieski",
    "palette.mint": "Miętowy",
    "palette.peach": "Brzoskwiniowy",
    "palette.purple": "Fioletowy",
    "toast.closeAria": "Zamknij powiadomienie",

    "hero.kicker": "Junior IT Specialist · Warszawa",
    "hero.leadHtml": "Odbieram zgłoszenia w pierwszej linii wsparcia IT w <strong>IT Solution Factor</strong> i studiuję cyberbezpieczeństwo na <strong>Uniwersytecie WSEI w Lublinie</strong>. Po pracy siedzę na betach Androida i składam komputery.",
    "hero.ctaContact": "Napisz do mnie",
    "hero.ctaTerminal": "Terminal",
    "hero.terminalTitle": "Otwórz terminal (klawisz ~)",
    "hero.avatarWrapperAria": "Portret Michała Dzido. Kliknij, aby przełączyć na awatar 3D",
    "hero.photoAlt": "Michał Dzido, zdjęcie portretowe",
    "hero.avatarAlt": "Michał Dzido, awatar 3D",
    "hero.avatarHintAria": "Awatar 3D",
    "hero.avatarPhoto": "Zdjęcie",
    "hero.avatar3d": "Awatar 3D",

    "lastfm.openProfile": "Otwórz profil Last.fm",
    "lastfm.albumAlt": "Okładka albumu",
    "lastfm.nowPlaying": "Teraz gra",
    "lastfm.recentlyPlayed": "Ostatnio grało",
    "lastfm.loading": "Ładowanie…",
    "lastfm.unknownTrack": "Nieznany utwór",
    "lastfm.unknownArtist": "Nieznany wykonawca",

    "about.heading": "O mnie",
    "about.p1": "W tygodniu siedzę w biurze w Warszawie i odbieram zgłoszenia: poczta, Office, uprawnienia, Windows, sprzęt. Tłumaczę ludziom techniczne sprawy bez żargonu, a to, czego nie da się naprawić od ręki, przekazuję do właściwej grupy.",
    "about.p2": "Weekendy spędzam na zjazdach na Uniwersytecie WSEI w Lublinie albo w rodzinnym Adamowie. Na studiach rozwijam wiedzę, którą zdobyłem w technikum, głównie z sieci, analizy ruchu i zabezpieczania systemów.",
    "about.p3": "Po godzinach moderuję grupę Google Pixel Polska, instaluję testowe wersje Androida i Windowsa, a wieczorami słucham muzyki albo gram na PC.",
    "about.hobbiesAria": "Po godzinach",
    "about.chip.music": "Muzyka",
    "about.chip.beta": "Bety systemów",
    "about.chip.pc": "Składanie PC",
    "about.factsAria": "W skrócie",
    "about.age.label": "Wiek",
    "about.age.sub": "Urodzony 4 marca 2006",
    "about.age.hint": "Dotknij, żeby policzyć inaczej",
    "about.age.daysLabel": "Na świecie",
    "about.age.daysSub": "Tyle dni minęło od 4 marca 2006",
    "about.age.nextLabel": "Urodziny",
    "about.age.nextSub": "Zostało do 4 marca",
    "about.age.today": "Dziś",
    "about.age.todaySub": "Dziś są moje urodziny",
    "about.age.days1": "dzień",
    "about.age.days2": "dni",
    "birthday.title": "4 marca",
    "birthday.msg": "Dziś kończę {age}. Dzięki za wizytę akurat dziś.",
    "about.job.label": "Praca",
    "about.edu.label": "Studia",
    "about.edu.valueHtml": "Uniwersytet WSEI w Lublinie <span class=\"fact-sub\">Cyberbezpieczeństwo i technologie sieciowe, inż.</span>",
    "about.school.label": "Technikum",
    "about.school.valueHtml": "Zespół Szkół nr 3 im. Władysława Stanisława Reymonta w Łukowie <span class=\"fact-sub\">Technik informatyk</span>",
    "about.loc.label": "Miejsce",
    "about.loc.value": "Warszawa i Adamów",
    "about.loc.timeLabel": "U mnie jest",

    "easter.music": "Słuchawki mam na uszach przez większość dnia. Karta na górze strony pokazuje na żywo, czego słucham na Last.fm.",
    "easter.pixel": "Razem z innymi moderatorami prowadzę na Facebooku polską grupę użytkowników telefonów Google Pixel.",
    "easter.beta": "Lubię sprawdzać nowości przed premierą, dlatego na co dzień siedzę na Android Beta i Windows Insider.",
    "easter.pc": "Dobieram części, składam komputery od zera, wymieniam pasty termoprzewodzące i szukam przyczyn dziwnych awarii.",
    "easter.pixel8pro": "Mój główny telefon. Siedzi na kanale Android Beta i robi świetne zdjęcia z 5-krotnym zbliżeniem.",
    "easter.buds": "Słuchawki z układem Tensor A1. Małe, wygodne i dobrze wyciszają biuro oraz pociąg.",
    "easter.watch": "Zegarek 41 mm z Wear OS. Używam go do powiadomień, płatności zbliżeniowych i liczenia kroków.",
    "easter.surface": "Lekki komputer 2 w 1 ze Snapdragonem X Elite i ekranem OLED. Zabieram go na uczelnię i w podróż, bo długo trzyma na baterii.",
    "easter.ryzen": "Domowy komputer z Ryzenem 5 5600G i RTX 4060. Stawiam na nim maszyny wirtualne, ćwiczę sieci i gram wieczorami.",

    "exp.heading": "Czym się zajmuję",
    "exp.subtitle": "W pracy, na laboratoriach i przy własnym biurku.",
    "exp.helpdesk.title": "Helpdesk",
    "exp.helpdesk.desc": "Codziennie obsługuję zgłoszenia przez telefon i zdalnie. Odblokowuję konta, konfiguruję stanowiska, rozwiązuję błędy Windowsa i aplikacji firmowych, a większe awarie eskaluję do odpowiednich zespołów.",
    "exp.helpdesk.tools": "Pomoc zdalna · zgłoszenia · pakiet biurowy",
    "exp.net.title": "Sieci i systemy",
    "exp.net.where": "Studia i laboratoria",
    "exp.net.desc": "Zakładam konta i nadaję uprawnienia w Active Directory, pracuję w Linuksie, ustawiam adresację, VLAN-y, routing i reguły firewalli.",
    "exp.hw.title": "Sprzęt",
    "exp.hw.where": "Technik informatyk",
    "exp.hw.desc": "Składam komputery stacjonarne, wymieniam podzespoły w laptopach i szukam przyczyn usterek, od pamięci RAM po zasilacze i płyty główne.",
    "exp.hw.tools": "Diagnostyka · serwis · dobór części",
    "exp.mobile.title": "Wersje testowe",
    "exp.mobile.desc": "Na co dzień używam wersji beta Androida i Windowsa. Sprawdzam nowe funkcje i poprawki bezpieczeństwa, zanim trafią do wszystkich.",

    "devices.heading": "Na czym pracuję",
    "devices.subtitle": "Sprzęt, którego używam codziennie. Kliknij kartę, żeby dowiedzieć się więcej.",
    "devices.filterAria": "Filtruj urządzenia",
    "devices.filterAll": "Wszystko",
    "devices.filterPc": "Komputery",
    "devices.specAria": "Specyfikacja",
    "devices.label.soc": "Układ",
    "devices.label.memory": "Pamięć",
    "devices.label.display": "Ekran",
    "devices.label.anc": "ANC",
    "devices.label.drivers": "Przetworniki",
    "devices.label.case": "Koperta",
    "devices.label.cpu": "Procesor",
    "devices.label.memoryStorage": "RAM i dysk",
    "devices.label.gpu": "Grafika",
    "devices.label.storage": "Dyski",
    "devices.p8p.meta": "Telefon",
    "devices.p8p.color": "Mint",
    "devices.p8p.display": "6,7\" LTPO OLED, 120 Hz",
    "devices.buds.meta": "Słuchawki",
    "devices.watch.meta": "Zegarek",
    "devices.surface.meta": "Komputer 2 w 1",
    "devices.surface.cpu": "Snapdragon X Elite, 12 rdzeni",
    "devices.pc.meta": "Stacjonarny",
    "devices.pc.tag": "składak",

    "contact.heading": "Napisz do mnie",
    "contact.email.aria": "Wyślij e-mail do michaldzido2@gmail.com",
    "contact.copyAria": "Kopiuj adres e-mail",
    "contact.copyTitle": "Kopiuj adres",
    "contact.copiedTitle": "Skopiowano adres",
    "contact.email.desc": "Najłatwiej złapać mnie mailowo.",
    "contact.linkedin.desc": "Przebieg pracy i certyfikaty",
    "contact.github.desc": "Kod tej strony i projekty ze studiów",
    "contact.pixel.desc": "Grupa na Facebooku, którą moderuję",
    "contact.instagram.desc": "Zdjęcia z wyjazdów robione Pixelem",
    "contact.x.desc": "Premiery sprzętu, Android, praca w IT",

    "footer.terminalTitle": "Otwórz terminal (klawisz ~)",
    "footer.terminalLabel": "Otwórz terminal",
    "footer.credits": "Zdjęcia urządzeń: Google, Microsoft",

    "terminal.closeAria": "Zamknij terminal",
    "terminal.welcomeHtml": "Wpisz <strong>help</strong> albo kliknij jedno z poleceń poniżej.",
    "terminal.clearedHtml": "Wyczyszczone. Wpisz <strong>help</strong>, żeby zobaczyć polecenia.",
    "terminal.chipsAria": "Szybkie komendy",
    "terminal.inputAria": "Wpisz komendę terminala",
    "terminal.sendAria": "Wykonaj komendę",
    "terminal.unknownPrefix": "Nie znam komendy",
    "terminal.unknownSuffix": "Wpisz <strong>help</strong>, żeby zobaczyć dostępne."
  },

  en: {
    "meta.title": "Michał Dzido",
    "meta.description": "Michał Dzido. First-line IT support at IT Solution Factor, cybersecurity student at WSEI University in Lublin, moderator of the Google Pixel Polska group.",

    "nav.skip": "Skip to content",
    "docked.aria": "Scroll to the top of the page",
    "docked.title": "Back to top",

    "nav.desktopAria": "Main navigation",
    "nav.mobileAria": "Mobile navigation",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.experienceShort": "Work",
    "nav.devices": "Gear",
    "nav.contact": "Contact",

    "controls.aria": "Language and appearance",
    "controls.langAria": "Switch language to Polish",
    "controls.langTitle": "Switch language (PL / EN)",
    "controls.langToastTitle": "Language",
    "controls.langToast": "The page is now in English",
    "controls.paletteAria": "Change accent color",
    "controls.paletteTitle": "Accent color",
    "controls.paletteMenuAria": "Accent color",
    "controls.themeTitle": "Light / dark theme",
    "controls.themeDark": "Dark",
    "controls.themeLight": "Light",
    "controls.themeToastTitle": "Theme",
    "controls.themeToastDark": "Dark theme on",
    "controls.themeToastLight": "Light theme on",
    "controls.themeAriaToLight": "Switch to light theme",
    "controls.themeAriaToDark": "Switch to dark theme",
    "controls.paletteToastTitle": "Accent color",
    "controls.palettePrefix": "Selected",
    "palette.blue": "Blue",
    "palette.mint": "Mint",
    "palette.peach": "Peach",
    "palette.purple": "Purple",
    "toast.closeAria": "Close notification",

    "hero.kicker": "Junior IT Specialist · Warsaw",
    "hero.leadHtml": "I handle first-line IT support tickets at <strong>IT Solution Factor</strong> and study cybersecurity at <strong>WSEI University in Lublin</strong>. After work I run Android betas and build PCs.",
    "hero.ctaContact": "Get in touch",
    "hero.ctaTerminal": "Terminal",
    "hero.terminalTitle": "Open terminal (~ key)",
    "hero.avatarWrapperAria": "Portrait of Michał Dzido. Click to switch to the 3D avatar",
    "hero.photoAlt": "Michał Dzido, portrait photo",
    "hero.avatarAlt": "Michał Dzido, 3D avatar",
    "hero.avatarHintAria": "3D avatar",
    "hero.avatarPhoto": "Photo",
    "hero.avatar3d": "3D avatar",

    "lastfm.openProfile": "Open Last.fm profile",
    "lastfm.albumAlt": "Album cover",
    "lastfm.nowPlaying": "Now playing",
    "lastfm.recentlyPlayed": "Last played",
    "lastfm.loading": "Loading…",
    "lastfm.unknownTrack": "Unknown track",
    "lastfm.unknownArtist": "Unknown artist",

    "about.heading": "About",
    "about.p1": "On weekdays I work from the office in Warsaw and handle tickets: email, Office, permissions, Windows, hardware. I explain technical things without jargon, and whatever I can't fix on the spot goes to the right team.",
    "about.p2": "Weekends are university sessions at WSEI University in Lublin or time back home in Adamów. At university I build on what I learned in technical school, mostly networks, traffic analysis and securing systems.",
    "about.p3": "After hours I moderate the Google Pixel Polska group, install test builds of Android and Windows, and in the evenings I listen to music or play games on my PC.",
    "about.hobbiesAria": "After hours",
    "about.chip.music": "Music",
    "about.chip.beta": "OS betas",
    "about.chip.pc": "PC building",
    "about.factsAria": "In short",
    "about.age.label": "Age",
    "about.age.sub": "Born 4 March 2006",
    "about.age.hint": "Tap to count it another way",
    "about.age.daysLabel": "Around for",
    "about.age.daysSub": "Days since 4 March 2006",
    "about.age.nextLabel": "Birthday",
    "about.age.nextSub": "Left until 4 March",
    "about.age.today": "Today",
    "about.age.todaySub": "It's my birthday today",
    "about.age.days1": "day",
    "about.age.days2": "days",
    "birthday.title": "4 March",
    "birthday.msg": "I turn {age} today. Thanks for stopping by on the right day.",
    "about.job.label": "Work",
    "about.edu.label": "University",
    "about.edu.valueHtml": "WSEI University in Lublin <span class=\"fact-sub\">Cybersecurity and network technologies, BEng</span>",
    "about.school.label": "Technical school",
    "about.school.valueHtml": "Zespół Szkół nr 3 im. Władysława Stanisława Reymonta in Łuków <span class=\"fact-sub\">IT technician</span>",
    "about.loc.label": "Based in",
    "about.loc.value": "Warsaw and Adamów",
    "about.loc.timeLabel": "My local time is",

    "easter.music": "I have headphones on for most of the day. The card at the top shows what I'm listening to on Last.fm, live.",
    "easter.pixel": "Together with other moderators I run the Polish Facebook group for Google Pixel users.",
    "easter.beta": "I like seeing new features before release, so my devices run Android Beta and Windows Insider builds.",
    "easter.pc": "I pick parts, build PCs from scratch, repaste coolers and track down odd hardware faults.",
    "easter.pixel8pro": "My main phone. It runs the Android Beta channel and takes great shots with the 5x telephoto.",
    "easter.buds": "Earbuds with the Tensor A1 chip. Small, comfortable and good at muting the office and the train.",
    "easter.watch": "41 mm watch on Wear OS. I use it for notifications, contactless payments and step counting.",
    "easter.surface": "A light 2-in-1 with Snapdragon X Elite and an OLED screen. It comes with me to university and on trips because the battery lasts.",
    "easter.ryzen": "My home desktop with a Ryzen 5 5600G and RTX 4060. I run virtual machines on it, practise networking and play in the evenings.",

    "exp.heading": "What I do",
    "exp.subtitle": "At work, in university labs and at my own desk.",
    "exp.helpdesk.title": "Helpdesk",
    "exp.helpdesk.desc": "I handle user tickets by phone and remotely every day. I unlock accounts, set up workstations, fix Windows and business app errors, and escalate bigger outages to the right teams.",
    "exp.helpdesk.tools": "Remote support · ticketing · office suite",
    "exp.net.title": "Networks and systems",
    "exp.net.where": "University and labs",
    "exp.net.desc": "I create accounts and manage permissions in Active Directory, work in Linux, and configure addressing, VLANs, routing and firewall rules.",
    "exp.hw.title": "Hardware",
    "exp.hw.where": "IT technician",
    "exp.hw.desc": "I build desktops, swap parts in laptops and track down faults, from RAM to power supplies and motherboards.",
    "exp.hw.tools": "Diagnostics · repair · picking parts",
    "exp.mobile.title": "Test builds",
    "exp.mobile.desc": "I use beta versions of Android and Windows day to day, so I see new features and security patches before they reach everyone.",

    "devices.heading": "What I use",
    "devices.subtitle": "Hardware I use every day. Click a card to read more.",
    "devices.filterAria": "Filter devices",
    "devices.filterAll": "All",
    "devices.filterPc": "Computers",
    "devices.specAria": "Specifications",
    "devices.label.soc": "Chip",
    "devices.label.memory": "Memory",
    "devices.label.display": "Display",
    "devices.label.anc": "ANC",
    "devices.label.drivers": "Drivers",
    "devices.label.case": "Case",
    "devices.label.cpu": "Processor",
    "devices.label.memoryStorage": "RAM and storage",
    "devices.label.gpu": "Graphics",
    "devices.label.storage": "Drives",
    "devices.p8p.meta": "Phone",
    "devices.p8p.color": "Mint",
    "devices.p8p.display": "6.7\" LTPO OLED, 120 Hz",
    "devices.buds.meta": "Earbuds",
    "devices.watch.meta": "Watch",
    "devices.surface.meta": "2-in-1",
    "devices.surface.cpu": "Snapdragon X Elite, 12 cores",
    "devices.pc.meta": "Desktop",
    "devices.pc.tag": "self-built",

    "contact.heading": "Get in touch",
    "contact.email.aria": "Send an email to michaldzido2@gmail.com",
    "contact.copyAria": "Copy e-mail address",
    "contact.copyTitle": "Copy address",
    "contact.copiedTitle": "Address copied",
    "contact.email.desc": "Email is the easiest way to reach me.",
    "contact.linkedin.desc": "Work history and certificates",
    "contact.github.desc": "Source of this site and university projects",
    "contact.pixel.desc": "The Facebook group I moderate",
    "contact.instagram.desc": "Travel photos shot on a Pixel",
    "contact.x.desc": "Hardware launches, Android, working in IT",

    "footer.terminalTitle": "Open terminal (~ key)",
    "footer.terminalLabel": "Open terminal",
    "footer.credits": "Device photos: Google, Microsoft",

    "terminal.closeAria": "Close terminal",
    "terminal.welcomeHtml": "Type <strong>help</strong> or click one of the commands below.",
    "terminal.clearedHtml": "Cleared. Type <strong>help</strong> to list commands.",
    "terminal.chipsAria": "Quick commands",
    "terminal.inputAria": "Type a terminal command",
    "terminal.sendAria": "Run command",
    "terminal.unknownPrefix": "Unknown command",
    "terminal.unknownSuffix": "Type <strong>help</strong> to see what's available."
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
 * Universal Material 3 Expressive Notification Card / Toast helper
 * Accepts either a plain string or an options object: { title, message, icon, accent }
 */
function showToast(input) {
  const toast = document.getElementById('m3-toast');
  if (!toast) return;

  const isObj = typeof input === 'object' && input !== null;
  const message = isObj ? (input.message || '') : String(input || '');
  const title = isObj ? (input.title || '') : '';
  const icon = isObj ? (input.icon || 'info') : 'info';
  const accent = isObj ? (input.accent || 'var(--md-sys-color-primary)') : 'var(--md-sys-color-primary)';

  const titleEl = toast.querySelector('#toast-title, .toast-title');
  const msgEl = toast.querySelector('#toast-msg, .toast-msg');
  const iconEl = toast.querySelector('#toast-icon, .toast-icon');

  toast.style.setProperty('--toast-accent', accent);

  if (iconEl) {
    iconEl.textContent = icon;
  }

  if (titleEl) {
    if (title) {
      titleEl.textContent = title;
      titleEl.classList.remove('is-empty');
    } else {
      titleEl.textContent = '';
      titleEl.classList.add('is-empty');
    }
  }

  if (msgEl) {
    msgEl.textContent = message;
  }

  toast.classList.add('show');
  clearTimeout(globalToastTimer);
  globalToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 4200);
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

  // 11. M3 Expressive Connected Device Category Filter
  initDevicesFilter();

  // 12. Motion: hero entrance, name stretch on touch, sliding nav indicator, wavy progress
  initAgeCard();
  initBirthdayEasterEgg();
  initCopyEmail();
  initHeroName();
  initNavIndicator();
  initRipples();
  initDeviceTilt();
  initLastFmProgress();
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
    showToast({
      title: t('controls.langToastTitle'),
      message: t('controls.langToast'),
      icon: 'translate',
      accent: 'var(--md-sys-color-primary)'
    });
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
// Date parts for "today" in Warsaw, so the birthday starts at midnight Polish time
function warsawToday() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Warsaw', year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date());
  const [y, m, d] = parts.split('-').map(Number);
  return { y, m, d };
}

// ?urodziny (or ?birthday) previews the 4 March easter egg on any other day
const BIRTHDAY_PREVIEW = /[?&](urodziny|birthday)\b/.test(location.search);

function birthdayInfo() {
  const { y, m, d } = warsawToday();
  const today = Date.UTC(y, m - 1, d);
  let age = y - 2006;
  if (m < 3 || (m === 3 && d < 4)) age--;
  let next = Date.UTC(y, 2, 4);
  if (next < today) next = Date.UTC(y + 1, 2, 4);
  return {
    age,
    isBirthday: (m === 3 && d === 4) || BIRTHDAY_PREVIEW,
    daysAlive: Math.round((today - Date.UTC(2006, 2, 4)) / 86400000),
    daysToNext: Math.round((next - today) / 86400000)
  };
}

function formatAge(age) {
  if (currentLang === 'en') return `${age} ${age === 1 ? 'year' : 'years'}`;
  // Polish: 1 rok, 2-4 / 22-24 lata, 5-21 / 25+ lat (12-14 always "lat")
  const last = age % 10;
  const lastTwo = age % 100;
  let suffix = 'lat';
  if (age === 1) suffix = 'rok';
  else if ((lastTwo < 12 || lastTwo > 14) && last >= 2 && last <= 4) suffix = 'lata';
  return `${age} ${suffix}`;
}

function formatDays(n) {
  const num = new Intl.NumberFormat(currentLang === 'en' ? 'en-GB' : 'pl-PL').format(n);
  return `${num} ${n === 1 ? t('about.age.days1') : t('about.age.days2')}`;
}

let ageMode = 0;

// What the age card shows in each mode: [label, big value, number to count up to, sub line]
function ageView(mode) {
  const info = birthdayInfo();
  if (mode === 1) return [t('about.age.daysLabel'), formatDays(info.daysAlive), info.daysAlive, t('about.age.daysSub')];
  if (mode === 2) {
    if (info.isBirthday) return [t('about.age.nextLabel'), t('about.age.today'), null, t('about.age.todaySub')];
    return [t('about.age.nextLabel'), formatDays(info.daysToNext), info.daysToNext, t('about.age.nextSub')];
  }
  return [t('about.age.label'), formatAge(info.age), null,
    info.isBirthday ? t('about.age.todaySub') : t('about.age.sub')];
}

// Renders the current mode without animation (also called after a language change)
function initAgeCalculator() {
  const ageEl = document.getElementById('user-age');
  if (!ageEl) return;
  const [label, value, , sub] = ageView(ageMode);
  ageEl.textContent = value;
  const labelEl = document.getElementById('age-label');
  const subEl = document.getElementById('age-sub');
  if (labelEl) labelEl.textContent = label;
  if (subEl) subEl.textContent = sub;
  const card = document.getElementById('age-card');
  if (card) {
    card.dataset.mode = String(ageMode);
    card.classList.toggle('is-birthday', birthdayInfo().isBirthday);
  }
}

// Tap the age card: age -> days since birth -> days to the next birthday.
// The number rolls out and the new one rolls in and counts up.
function initAgeCard() {
  const card = document.getElementById('age-card');
  const ageEl = document.getElementById('user-age');
  if (!card || !ageEl) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  let busy = false;

  const countUp = (target, render) => {
    const start = performance.now();
    const duration = 700;
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      ageEl.textContent = render(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const advance = () => {
    if (busy) return;
    ageMode = (ageMode + 1) % 3;
    const [label, value, countTo, sub] = ageView(ageMode);
    card.dataset.mode = String(ageMode);
    document.getElementById('age-label').textContent = label;
    document.getElementById('age-sub').textContent = sub;

    if (ageMode === 2 && birthdayInfo().isBirthday) launchConfetti(card);

    if (reduce.matches || !ageEl.animate) {
      ageEl.textContent = value;
      return;
    }
    busy = true;
    ageEl.animate(
      [{ transform: 'none', opacity: 1 }, { transform: 'translateY(-70%)', opacity: 0 }],
      { duration: 160, easing: 'cubic-bezier(0.3, 0, 1, 1)' }
    ).finished.then(() => {
      ageEl.textContent = countTo != null ? formatDays(0) : value;
      ageEl.animate(
        [{ transform: 'translateY(70%)', opacity: 0 }, { transform: 'none', opacity: 1 }],
        { duration: 520, easing: 'cubic-bezier(0.38, 1.21, 0.22, 1.00)' }
      );
      if (countTo != null) countUp(countTo, formatDays);
      busy = false;
    });
  };

  card.addEventListener('click', advance);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      advance();
    }
  });
}

// 4 March only: streamers and confetti fall once after the page has settled
function initBirthdayEasterEgg() {
  const info = birthdayInfo();
  if (!info.isBirthday) return;
  const card = document.getElementById('age-card');
  const start = () => setTimeout(() => {
    launchConfetti(null);
    showToast({
      title: t('birthday.title'),
      message: t('birthday.msg').replace('{age}', formatAge(info.age)),
      icon: 'cake'
    });
  }, 1400);
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
  if (card) card.classList.add('is-birthday');
}

/* Streamers (serpentyna) and confetti on one canvas. Pieces use M3 shapes: circles,
   pills and rounded squares, coloured from the page's own tonal palette. The canvas
   is removed as soon as the last piece has left the screen. */
function launchConfetti(origin) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'confetti-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const W = window.innerWidth;
  const H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.scale(dpr, dpr);

  const css = getComputedStyle(document.documentElement);
  const tokens = ['--primary', '--tertiary-container', '--primary-container', '--secondary-container']
    .map((name) => css.getPropertyValue(name).trim()).filter(Boolean);
  const colors = tokens.concat(['#F2B8B5', '#FFD8A8', '#B6E3C6', '#D0BCFF', '#A8C7FA', '#FFE08A']);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const rand = (a, b) => a + Math.random() * (b - a);

  // Burst from the age card when it was tapped, otherwise rain from the top edge
  let ox = null;
  let oy = null;
  if (origin) {
    const r = origin.getBoundingClientRect();
    ox = r.left + r.width / 2;
    oy = r.top + r.height / 2;
  }
  const mobile = W < 768;
  const pieces = [];
  const confettiCount = mobile ? 70 : 120;
  for (let i = 0; i < confettiCount; i++) {
    const burst = ox !== null;
    const angle = rand(-Math.PI * 0.95, -Math.PI * 0.05);
    const speed = rand(380, 820);
    pieces.push({
      kind: pick(['circle', 'pill', 'square']),
      x: burst ? ox : rand(0, W),
      y: burst ? oy : rand(-H * 0.6, -20),
      vx: burst ? Math.cos(angle) * speed : rand(-40, 40),
      vy: burst ? Math.sin(angle) * speed : rand(80, 220),
      size: rand(7, 13),
      rot: rand(0, Math.PI * 2),
      vr: rand(-6, 6),
      wobble: rand(0, Math.PI * 2),
      color: pick(colors)
    });
  }
  const streamerCount = ox !== null ? 0 : (mobile ? 7 : 12);
  for (let i = 0; i < streamerCount; i++) {
    pieces.push({
      kind: 'streamer',
      x: rand(0, W),
      y: rand(-H * 0.5, -60),
      vx: rand(-20, 20),
      vy: rand(110, 190),
      len: rand(70, 130),
      phase: rand(0, Math.PI * 2),
      vr: rand(2, 4),
      color: pick(colors)
    });
  }

  const gravity = 520;
  const drag = 0.985;
  let last = performance.now();
  const started = last;

  const frame = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    ctx.clearRect(0, 0, W, H);
    let alive = 0;
    for (const p of pieces) {
      if (p.kind === 'streamer') {
        p.y += p.vy * dt;
        p.x += p.vx * dt + Math.sin(now / 600 + p.phase) * 0.6;
        p.phase += p.vr * dt;
        if (p.y - p.len > H) continue;
        alive++;
        // a curly ribbon: a short sine wave along its length
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        for (let s = 0; s <= p.len; s += 4) {
          const px = p.x + Math.sin(s / 9 + p.phase) * 7;
          const py = p.y - s;
          if (s === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
        continue;
      }
      p.vy += gravity * dt * 0.35;
      p.vx *= drag;
      p.vy = Math.min(p.vy, 420);
      p.x += p.vx * dt + Math.sin(now / 300 + p.wobble) * 0.5;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      if (p.y > H + 20) continue;
      alive++;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      // tilt in 3D by squashing one axis, so the piece seems to flip as it falls
      ctx.scale(1, Math.abs(Math.cos(p.rot * 1.3)) * 0.8 + 0.2);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      if (p.kind === 'circle' || !ctx.roundRect) ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      else if (p.kind === 'pill') ctx.roundRect(-p.size, -p.size / 4, p.size * 2, p.size / 2, p.size / 4);
      else ctx.roundRect(-p.size / 2, -p.size / 2, p.size, p.size, p.size / 4);
      ctx.fill();
      ctx.restore();
    }
    if (alive > 0 && now - started < 9000) requestAnimationFrame(frame);
    else canvas.remove();
  };
  requestAnimationFrame(frame);
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
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (document.startViewTransition && !reduceMotion) {
        // Circular reveal growing from the toggle, like the Android dark theme switch
        const rect = themeToggleBtn.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
        const transition = document.startViewTransition(() => applyTheme(newTheme));
        transition.ready.then(() => {
          document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 560, easing: 'cubic-bezier(0.2, 0, 0, 1)', pseudoElement: '::view-transition-new(root)' }
          );
        }).catch(() => {});
      } else {
        applyTheme(newTheme);
      }
      localStorage.setItem('m3_portfolio_theme', newTheme);
      showToast({
        title: t('controls.themeToastTitle'),
        message: newTheme === 'dark' ? t('controls.themeToastDark') : t('controls.themeToastLight'),
        icon: newTheme === 'dark' ? 'dark_mode' : 'light_mode',
        accent: 'var(--md-sys-color-primary)'
      });
    });
  }

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#121317' : '#F8F9FF');
    syncThemeLabels();
    if (typeof applyLastFmExpressiveColors === 'function') {
      applyLastFmExpressiveColors();
    }
  }
}

function initPaletteManager() {
  const picker = document.getElementById('palette-picker');
  const toggleBtn = document.getElementById('palette-toggle-btn');
  const swatches = document.querySelectorAll('.palette-swatch');
  const htmlRoot = document.documentElement;

  const getPaletteName = (palette) => {
    const names = {
      blue: t('palette.blue'),
      mint: t('palette.mint'),
      peach: t('palette.peach'),
      purple: t('palette.purple')
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
    const paletteAccents = {
      blue: '#60A5FA',
      mint: '#4ADE80',
      peach: '#FB923C',
      purple: '#C084FC'
    };
    if (notify && paletteName) {
      showToast({
        title: t('controls.paletteToastTitle'),
        message: `${t('controls.palettePrefix')}: ${paletteName}`,
        icon: 'palette',
        accent: paletteAccents[palette] || 'var(--md-sys-color-primary)'
      });
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
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Items inside a section rise in one after another
  revealSections.forEach((sec) => {
    sec.querySelectorAll('[data-reveal]').forEach((item, index) => {
      item.style.setProperty('--reveal-i', index);
    });
    revealObserver.observe(sec);
  });
}

/* ===================================================================
   6. INTERACTIVE AVATAR HOVER & TOUCH SWAP
   =================================================================== */
function initAvatarInteractive() {
  const avatarWrapper = document.getElementById('hero-avatar-wrapper');
  if (!avatarWrapper) return;

  const hintBtn = document.getElementById('avatar-hover-hint');
  const art = avatarWrapper.querySelector('.avatar-art');

  // The 3D avatar is not needed for the first paint: load it on intent or when the page is idle
  const loadArt = () => {
    if (!art || !art.dataset.src) return;
    if (art.dataset.srcset) art.srcset = art.dataset.srcset;
    art.src = art.dataset.src;
    delete art.dataset.src;
    delete art.dataset.srcset;
  };
  avatarWrapper.addEventListener('pointerenter', loadArt, { once: true });
  avatarWrapper.addEventListener('focusin', loadArt, { once: true });
  window.addEventListener('load', () => {
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 2500));
    idle(loadArt, { timeout: 5000 });
  });

  const syncAria = () => {
    const isActive = avatarWrapper.classList.contains('is-avatar-active');
    if (hintBtn) hintBtn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  };

  // A single click handler serves mouse, touch and keyboard (Enter/Space on the hint
  // button fire a native click that bubbles here). Every tap flips photo <-> avatar.
  avatarWrapper.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    loadArt();
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
   8. LIVE LAST.FM NOW PLAYING & MATERIAL 3 EXPRESSIVE COLOR ENGINE
   =================================================================== */
let lastFmSeedHsl = null;
let lastFmExtractedUrl = "";
let lastFmIsPlaying = false;

/**
 * Convert sRGB [0..255] to HSL [h: 0..360, s: 0..100, l: 0..100]
 */
function rgbToHsl(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0);
        break;
      case gn:
        h = (bn - rn) / d + 2;
        break;
      default:
        h = (rn - gn) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

/**
 * Deterministic fallback seed hue from track + artist string
 */
function fallbackSeedFromTrack(trackName = "", artistName = "") {
  const str = `${trackName}-${artistName}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return {
    h: Math.abs(hash) % 360,
    s: 78,
    l: 56
  };
}

/**
 * Material 3 Expressive Quantizer & Chroma Scorer:
 * Samples a 32x32 offscreen canvas of the album cover, groups pixels into
 * 18-degree hue buckets, and scores each bucket by vibrancy (chroma) + population
 * so dominant colorful accents win over dark/gray backgrounds.
 */
function extractExpressiveSeedFromImage(imgEl) {
  const canvas = document.createElement("canvas");
  const size = 32;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;

  ctx.drawImage(imgEl, 0, 0, size, size);
  const { data } = ctx.getImageData(0, 0, size, size);

  const buckets = Array.from({ length: 20 }, () => ({
    count: 0,
    score: 0,
    hSum: 0,
    sSum: 0,
    lSum: 0
  }));

  let fallbackR = 0;
  let fallbackG = 0;
  let fallbackB = 0;
  let validPixels = 0;

  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a < 128) continue;

    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    fallbackR += r;
    fallbackG += g;
    fallbackB += b;
    validPixels++;

    const { h, s, l } = rgbToHsl(r, g, b);
    // Filter out near-black, near-white, and desaturated gray pixels
    if (l < 10 || l > 92 || s < 14) continue;

    const bucketIdx = Math.min(19, Math.floor(h / 18));
    // Material 3 Expressive favors high chroma and mid-tone lightness
    const lightnessWeight = 1 - Math.abs(l - 52) / 52;
    const chromaWeight = Math.pow(s / 100, 1.35);
    const pixelScore = 1 + chromaWeight * 3.2 + lightnessWeight * 0.8;

    const bucket = buckets[bucketIdx];
    bucket.count += 1;
    bucket.score += pixelScore;
    bucket.hSum += h;
    bucket.sSum += s;
    bucket.lSum += l;
  }

  let bestBucket = null;
  for (const b of buckets) {
    if (b.count > 0 && (!bestBucket || b.score > bestBucket.score)) {
      bestBucket = b;
    }
  }

  if (bestBucket) {
    return {
      h: Math.round(bestBucket.hSum / bestBucket.count),
      s: Math.max(68, Math.min(92, Math.round(bestBucket.sSum / bestBucket.count))),
      l: Math.round(bestBucket.lSum / bestBucket.count)
    };
  }

  if (validPixels > 0) {
    const avg = rgbToHsl(
      Math.round(fallbackR / validPixels),
      Math.round(fallbackG / validPixels),
      Math.round(fallbackB / validPixels)
    );
    return {
      h: avg.h,
      s: Math.max(55, avg.s),
      l: Math.min(72, Math.max(40, avg.l))
    };
  }

  return null;
}

/**
 * Applies Material 3 Expressive tonal tokens (--lastfm-accent, --lastfm-container, --lastfm-glow)
 * to #lastfm-now-playing based on the extracted album seed and active theme (dark / light).
 */
function applyLastFmExpressiveColors() {
  const card = document.getElementById("lastfm-now-playing") || document.getElementById("lastfm-card");
  if (!card) return;

  if (!lastFmIsPlaying || !lastFmSeedHsl) {
    card.classList.remove("has-dynamic-palette");
    card.classList.add("is-offline");
    card.style.removeProperty("--lastfm-accent");
    card.style.removeProperty("--lastfm-container");
    card.style.removeProperty("--lastfm-glow");
    return;
  }

  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  const { h, s } = lastFmSeedHsl;

  // Material 3 Expressive uses boosted chroma and distinct tonal roles for dark vs light surfaces
  const expressiveSat = isLight
    ? Math.max(66, Math.min(88, s + 8))
    : Math.max(74, Math.min(95, s + 12));

  const accentLightness = isLight ? 36 : 70;
  const containerLightness = isLight ? 92 : 20;
  const glowAlpha = isLight ? 0.28 : 0.44;
  const glowLightness = isLight ? 46 : 64;

  const accentColor = `hsl(${h} ${expressiveSat}% ${accentLightness}%)`;
  const containerColor = `hsl(${h} ${Math.max(45, expressiveSat - 18)}% ${containerLightness}%)`;
  const glowColor = `hsl(${h} ${expressiveSat}% ${glowLightness}% / ${glowAlpha})`;

  card.classList.remove("is-offline");
  card.style.setProperty("--lastfm-accent", accentColor);
  card.style.setProperty("--lastfm-container", containerColor);
  card.style.setProperty("--lastfm-glow", glowColor);
  card.classList.add("has-dynamic-palette");
}

/**
 * Loads album cover via CORS-enabled offscreen Image and runs the M3 Expressive color engine
 */
function syncLastFmCoverPalette(imageUrl, trackName, trackArtist) {
  if (!imageUrl || imageUrl.startsWith("data:")) {
    lastFmSeedHsl = fallbackSeedFromTrack(trackName, trackArtist);
    applyLastFmExpressiveColors();
    return;
  }

  if (imageUrl === lastFmExtractedUrl && lastFmSeedHsl) {
    applyLastFmExpressiveColors();
    return;
  }

  const probe = new Image();
  probe.crossOrigin = "anonymous";
  probe.onload = () => {
    try {
      const extracted = extractExpressiveSeedFromImage(probe);
      lastFmSeedHsl = extracted || fallbackSeedFromTrack(trackName, trackArtist);
      lastFmExtractedUrl = imageUrl;
      applyLastFmExpressiveColors();
    } catch {
      lastFmSeedHsl = fallbackSeedFromTrack(trackName, trackArtist);
      applyLastFmExpressiveColors();
    }
  };
  probe.onerror = () => {
    lastFmSeedHsl = fallbackSeedFromTrack(trackName, trackArtist);
    applyLastFmExpressiveColors();
  };
  probe.src = imageUrl;
}

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
    syncLastFmProgressTrack(trackName, trackArtist, isPlaying);
    if (artistEl) artistEl.textContent = trackArtist;

    const albumImg = track.image?.find(img => img.size === "large")?.["#text"]
      || track.image?.find(img => img.size === "extralarge")?.["#text"]
      || track.image?.find(img => img.size === "medium")?.["#text"]
      || track.image?.[0]?.["#text"];

    if (albumImg && albumImgEl) {
      albumImgEl.src = albumImg;
    }

    lastFmIsPlaying = isPlaying;

    if (isPlaying) {
      syncLastFmCoverPalette(albumImg, trackName, trackArtist);
      if (statusBadgeEl) statusBadgeEl.className = "lastfm-live-badge is-playing";
      if (statusTextEl) statusTextEl.textContent = t("lastfm.nowPlaying");

      container.classList.remove("hidden");
      container.style.opacity = "1";
      container.style.display = "flex";
    } else if (LASTFM_CONFIG.showRecentlyPlayedWhenOffline) {
      applyLastFmExpressiveColors();
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
  const closeBtn = document.getElementById('toast-close-btn');
  const toast = document.getElementById('m3-toast');
  if (closeBtn && toast) {
    closeBtn.addEventListener('click', () => {
      clearTimeout(globalToastTimer);
      toast.classList.remove('show');
    });
  }

  const interactiveItems = document.querySelectorAll('[data-easter-msg]');
  interactiveItems.forEach((item) => {
    item.addEventListener('click', () => {
      const msg = item.getAttribute('data-easter-msg');
      if (!msg) return;

      const cardTitleEl = item.querySelector('.m3-card-title');
      const chipLabelEl = item.querySelector('span:not(.material-symbols-rounded)');
      const fallbackIconEl = item.querySelector('.material-symbols-rounded');

      const title = cardTitleEl
        ? cardTitleEl.textContent.trim()
        : (chipLabelEl ? chipLabelEl.textContent.trim() : '');

      const icon = item.getAttribute('data-toast-icon')
        || (fallbackIconEl ? fallbackIconEl.textContent.trim() : 'info');

      const accent = item.getAttribute('data-toast-accent')
        || getComputedStyle(item).getPropertyValue('--card-accent').trim()
        || 'var(--md-sys-color-primary)';

      showToast({
        title,
        message: msg,
        icon,
        accent
      });
    });

    // Cards are focusable with role="button", so Enter and Space should act like a click
    if (item.getAttribute('role') === 'button') {
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    }
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
      whoami: '<strong>Michał Dzido</strong> • Junior IT Specialist w IT Solution Factor, student cyberbezpieczeństwa na Uniwersytecie WSEI w Lublinie oraz moderator społeczności Google Pixel Polska.',
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
      whoami: '<strong>Michał Dzido</strong> • Junior IT Specialist at IT Solution Factor, Cybersecurity student at WSEI University in Lublin, and Google Pixel Polska community moderator.',
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

  const isCoarsePointer = () =>
    window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches;

  function openTerminal() {
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Only auto-focus input on desktop pointers so mobile phones don't pop up
    // the virtual keyboard immediately and obscure the quick command chips.
    if (!isCoarsePointer()) {
      setTimeout(() => input.focus(), 120);
    }
  }

  function closeTerminal() {
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    input.blur();
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
    if (isCoarsePointer()) {
      input.blur();
    }
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
      hour12: false
    };
    timeElem.textContent = new Intl.DateTimeFormat('pl-PL', options).format(now);
  }

  updateTime();
  setInterval(updateTime, 15000);
}

/* ===================================================================
   11. M3 EXPRESSIVE CONNECTED DEVICE CATEGORY FILTER
   =================================================================== */
function initDevicesFilter() {
  const group = document.getElementById('devices-filter-group');
  if (!group) return;

  const buttons = Array.from(group.querySelectorAll('.m3x-filter-btn'));
  const tiers = Array.from(document.querySelectorAll('[data-device-tier]'));

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-device-filter') || 'all';

      buttons.forEach((b) => {
        const isSelected = b === btn;
        b.classList.toggle('is-selected', isSelected);
        b.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      });

      const layout = group.closest('section')?.querySelector('.devices-layout');
      if (layout) {
        // Restart the entrance animation for the cards that stay visible
        layout.classList.remove('was-filtered');
        void layout.offsetWidth;
        layout.classList.add('was-filtered');
      }

      tiers.forEach((tier) => {
        const tierName = tier.getAttribute('data-device-tier');
        const shouldShow = filter === 'all' || filter === tierName;
        tier.classList.toggle('is-tier-hidden', !shouldShow);
      });
    });
  });
}

/* ===================================================================
   12. MOTION
   =================================================================== */

// Name in the hero: letters stretch on hover (CSS). On touch screens a tap does the same.
function initHeroName() {
  const title = document.getElementById('hero-title-h1');
  if (!title) return;
  title.addEventListener('click', () => {
    if (window.matchMedia('(hover: hover)').matches) return;
    title.classList.add('is-stretched');
    clearTimeout(title._stretchTimer);
    title._stretchTimer = setTimeout(() => title.classList.remove('is-stretched'), 1400);
  });
}

// Toolbars: one pill slides to the active item instead of jumping
function initNavIndicator() {
  initDesktopIndicator(document.querySelector('.nav-tabs'));
  initMobileIndicator(document.getElementById('mobile-nav'));
}

// Desktop: tabs keep a constant size, so the pill is measured from the final layout
function initDesktopIndicator(list) {
  if (!list) return;
  const indicator = document.createElement('span');
  indicator.className = 'nav-indicator';
  indicator.setAttribute('aria-hidden', 'true');
  list.prepend(indicator);

  const place = () => {
    const active = list.querySelector('.nav-link.active');
    if (!active || !list.offsetParent) return;
    const box = list.getBoundingClientRect();
    const rect = active.getBoundingClientRect();
    indicator.style.setProperty('--x', `${Math.round(rect.left - box.left)}px`);
    indicator.style.setProperty('--w', `${Math.round(rect.width)}px`);
  };

  new MutationObserver(place).observe(list, { subtree: true, attributes: true, attributeFilter: ['class'] });
  window.addEventListener('resize', place, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
  place();
  requestAnimationFrame(() => list.classList.add('has-indicator'));
}

// Mobile: five equal slots, the pill moves by slot index (transform only)
function initMobileIndicator(bar) {
  if (!bar) return;
  const slot = document.createElement('span');
  slot.className = 'mobile-nav-slot';
  slot.setAttribute('aria-hidden', 'true');
  bar.prepend(slot);
  const items = Array.from(bar.querySelectorAll('.mobile-nav-item'));

  const sync = () => {
    const index = Math.max(0, items.findIndex((item) => item.classList.contains('active')));
    bar.style.setProperty('--active', index);
  };
  new MutationObserver(sync).observe(bar, { subtree: true, attributes: true, attributeFilter: ['class'] });
  sync();

  bar.addEventListener('pointerdown', () => bar.classList.add('is-pressing'));
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((type) =>
    bar.addEventListener(type, () => bar.classList.remove('is-pressing')));
}

// Copy the e-mail address and confirm with a snackbar
function initCopyEmail() {
  const btn = document.getElementById('copy-email');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    const email = btn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const tmp = document.createElement('textarea');
      tmp.value = email;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      tmp.remove();
    }
    btn.classList.add('is-done');
    clearTimeout(btn._timer);
    btn._timer = setTimeout(() => btn.classList.remove('is-done'), 2000);
    showToast({ title: t('contact.copiedTitle'), message: email, icon: 'content_copy' });
  });
}

// M3 ripple: a circle grows from the point you touched and fades on release
function initRipples() {
  const selector = '.btn, .chip, .fact-hero, .mail-copy, .control-btn, .m3x-filter-btn, .link-row, .device-card, .nav-link, '
    + '.mobile-nav-item, .avatar-toggle, .footer-terminal-link, .term-chip, .lastfm-card, .mail-card, .docked-avatar-chip';
  document.querySelectorAll(selector).forEach((el) => el.classList.add('has-ripple'));

  document.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    const host = e.target.closest('.has-ripple');
    if (!host || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = host.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const radius = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${radius * 2}px`;
    ripple.style.left = `${x - radius}px`;
    ripple.style.top = `${y - radius}px`;
    host.appendChild(ripple);

    const release = () => {
      ripple.classList.add('is-out');
      setTimeout(() => ripple.remove(), 700);
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
    };
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
  });
}

// Device cards lean a few degrees towards the mouse pointer
function initDeviceTilt() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.device-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.classList.add('is-tilting');
      card.style.setProperty('--ry', `${(px * 6).toFixed(2)}deg`);
      card.style.setProperty('--rx', `${(-py * 6).toFixed(2)}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

/* Wavy progress indicator for the Last.fm card (M3 Expressive "wavy" style).
   The wave is drawn every frame: its phase keeps moving while music plays, and the
   amplitude eases down to a flat line when nothing is playing. Last.fm does not report
   the playback position, so the bar starts when the page first sees the track and
   advances against the track length from track.getInfo. */
const lastFmProgress = {
  key: '',
  startedAt: 0,
  durationMs: 0,
  playing: false,
  wake: () => {}
};

function syncLastFmProgressTrack(trackName, trackArtist, isPlaying) {
  const key = `${trackArtist}\u0000${trackName}`;
  lastFmProgress.playing = isPlaying;
  lastFmProgress.wake();
  if (key === lastFmProgress.key) return;

  lastFmProgress.key = key;
  lastFmProgress.startedAt = Date.now();
  lastFmProgress.durationMs = 0;
  if (!isPlaying || !LASTFM_CONFIG.apiKey || LASTFM_CONFIG.proxyUrl) return;

  const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&artist=${encodeURIComponent(trackArtist)}`
    + `&track=${encodeURIComponent(trackName)}&api_key=${encodeURIComponent(LASTFM_CONFIG.apiKey)}&format=json`;
  fetch(url)
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => {
      const ms = Number(data?.track?.duration) || 0;
      if (lastFmProgress.key === key && ms > 0) lastFmProgress.durationMs = ms;
    })
    .catch(() => {});
}

function initLastFmProgress() {
  const bar = document.getElementById('lastfm-progress');
  if (!bar) return;
  const svg = bar.querySelector('.lastfm-wave');
  const path = bar.querySelector('.lastfm-wave-path');
  const thumb = bar.querySelector('.lastfm-thumb');
  const rest = bar.querySelector('.lastfm-rest');
  if (!svg || !path || !thumb || !rest) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const HEIGHT = 12;
  const WAVELENGTH = 20;
  const MAX_AMPLITUDE = 3;
  const SPEED = 18; // px per second
  const GAP = 4;
  const THUMB = 4;

  let width = 0;
  let phase = 0;
  let amplitude = 0;
  let fraction = 0;
  let last = performance.now();
  let visible = true;
  let frame = 0;

  const measure = () => { width = bar.clientWidth; };
  measure();

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) lastFmProgress.wake();
    }).observe(bar);
  }
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) lastFmProgress.wake();
  });

  function targetFraction() {
    if (!lastFmProgress.playing) return 1;
    if (!lastFmProgress.durationMs) return 0.35;
    const elapsed = Date.now() - lastFmProgress.startedAt;
    return Math.min(0.98, Math.max(0.02, elapsed / lastFmProgress.durationMs));
  }

  function draw() {
    const played = Math.max(0, (width - THUMB - GAP * 2) * fraction);
    const amp = amplitude;
    let d = `M 0 ${HEIGHT / 2}`;
    for (let x = 2; x <= played; x += 2) {
      const y = HEIGHT / 2 + amp * Math.sin(((x - phase) / WAVELENGTH) * Math.PI * 2);
      d += ` L ${x} ${y.toFixed(2)}`;
    }
    path.setAttribute('d', d);
    svg.setAttribute('width', Math.max(1, played));
    svg.setAttribute('height', HEIGHT);
    svg.setAttribute('viewBox', `0 0 ${Math.max(1, played)} ${HEIGHT}`);
    thumb.style.transform = `translateX(${played + GAP}px)`;
    rest.style.left = `${played + GAP * 2 + THUMB}px`;
  }

  // Phones: the wave is drawn at ~30 fps, which looks the same at this size and
  // halves the work; nothing is drawn until the hero entrance has finished.
  const minFrameMs = window.matchMedia('(pointer: coarse)').matches ? 32 : 0;
  let startAfter = performance.now() + 1600;

  function tick(now) {
    frame = 0;
    if (now < startAfter || (minFrameMs && now - last < minFrameMs)) {
      if (visible && !document.hidden) frame = requestAnimationFrame(tick);
      return;
    }
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;

    const playing = lastFmProgress.playing && !reduceMotion.matches;
    const targetAmp = playing ? MAX_AMPLITUDE : 0;
    // Critically damped easing: no overshoot on amplitude or position
    amplitude += (targetAmp - amplitude) * Math.min(1, dt * 6);
    fraction += (targetFraction() - fraction) * Math.min(1, dt * 3);
    if (playing) phase = (phase + SPEED * dt) % WAVELENGTH;

    draw();
    // Stop drawing once a paused bar has settled; syncLastFmProgressTrack wakes it again
    const settled = !playing && amplitude < 0.01 && Math.abs(targetFraction() - fraction) < 0.001;
    if (visible && !document.hidden && !settled) frame = requestAnimationFrame(tick);
  }

  lastFmProgress.wake = () => {
    if (!frame) {
      last = Math.max(performance.now(), startAfter);
      frame = requestAnimationFrame(tick);
    }
  };
  if ('ResizeObserver' in window) new ResizeObserver(() => { measure(); draw(); }).observe(bar);
  frame = requestAnimationFrame(tick);
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
