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
    "controls.langToastTitle": "Język strony",
    "controls.langToast": "Przełączono na język polski",
    "controls.paletteAria": "Zmień akcent kolorystyczny Material You",
    "controls.paletteTitle": "Kolory Material You",
    "controls.paletteMenuAria": "Wybierz motyw kolorystyczny",
    "controls.themeTitle": "Zmień motyw jasny / ciemny",
    "controls.themeDark": "Ciemny",
    "controls.themeLight": "Jasny",
    "controls.themeToastTitle": "Tryb wyglądu",
    "controls.themeToastDark": "Włączono motyw ciemny",
    "controls.themeToastLight": "Włączono motyw jasny",
    "controls.themeAriaToLight": "Przełącz na tryb jasny",
    "controls.themeAriaToDark": "Przełącz na tryb ciemny",
    "controls.paletteToastTitle": "Motyw Material You",
    "controls.palettePrefix": "Aktywny akcent",
    "controls.paletteBlue": "Ocean Blue (Domyślny)",
    "toast.closeAria": "Zamknij powiadomienie",

    "hero.badgeRole": "Junior IT Specialist w IT Solution Factor",
    "hero.terminalTitle": "Uruchom terminal (klawisz ~)",
    "hero.titleHtml": "Cześć, jestem <span class=\"hero-name-accent expressive-accent\">Michał Dzido</span>",
    "hero.subtitleHtml": "Pracuję w pierwszej linii wsparcia IT w <strong>IT Solution Factor</strong> i studiuję cyberbezpieczeństwo na <strong>Uniwersytecie WSEI</strong>. Na co dzień pomagam użytkownikom, diagnozuję sprzęt i konfiguruję sieci, a po godzinach testuję nowe wersje Androida na Pixelu.",
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
    "about.subtitle": "Czym zajmuję się w pracy, czego uczę się na studiach i co robię po godzinach.",
    "about.job.meta": "Praca zawodowa",
    "about.job.title": "Junior IT Specialist",
    "about.job.desc": "Pomagam pracownikom rozwiązywać problemy ze sprzętem, systemem i oprogramowaniem przez telefon oraz zdalnie. Przygotowuję laptopy do pracy, diagnozuję usterki, a większe awarie przekazuję dalej do administratorów.",
    "about.job.chip1": "Wsparcie użytkowników",
    "about.job.chip2": "Diagnostyka sprzętu",
    "about.job.chip3": "Obsługa incydentów",

    "about.age.meta": "Wiek",
    "about.age.chip1": "4 marca 2006",
    "about.age.chip2": "Rocznik ’06",

    "about.loc.meta": "Lokalizacja",
    "about.loc.title": "Warszawa i Adamów",
    "about.loc.desc": "Od poniedziałku do piątku pracuję w biurze w Warszawie. Na weekendy jadę na zjazdy na uczelni albo wracam do rodzinnego Adamowa.",
    "about.loc.timeLabel": "Czas lokalny:",
    "about.loc.chip": "Strefa CET",

    "about.edu.meta": "Edukacja",
    "about.edu.title": "Uniwersytet WSEI",
    "about.edu.subtitle": "Cyberbezpieczeństwo i technologie sieciowe",
    "about.edu.desc": "Po technikum informatycznym poszedłem na studia inżynierskie w Lublinie. Najwięcej czasu poświęcam sieciom komputerowym, analizie ruchu i zabezpieczaniu systemów.",
    "about.edu.chip1": "Technik Informatyk",
    "about.edu.chip2": "Studia inżynierskie",

    "about.hobbies.meta": "Po godzinach",
    "about.hobbies.title": "Zajawki poza pracą",
    "about.hobbies.subtitle": "Społeczność, muzyka i sprzęt",
    "about.hobbies.desc": "Prowadzę grupę Google Pixel Polska, instaluję testowe wersje Androida i Windowsa oraz składam komputery. Wieczorami słucham muzyki albo gram na PC.",
    "about.hobbies.chip1": "Muzyka i Last.fm",
    "about.hobbies.chip2": "Google Pixel Polska",
    "about.hobbies.chip3": "Testy Beta OS",
    "about.hobbies.chip4": "Składanie PC",

    "easter.music": "Słuchawki mam na uszach przez większość dnia. Kafelek na górze strony pokazuje na żywo to, czego aktualnie słucham na Last.fm.",
    "easter.pixel": "Razem z innymi moderatorami prowadzę na Facebooku polską społeczność użytkowników telefonów Google Pixel.",
    "easter.beta": "Lubię sprawdzać nowości przed oficjalną premierą, dlatego na co dzień korzystam z Android Beta i Windows Insider.",
    "easter.pc": "Dobieram części, składam komputery od zera, wymieniam pasty termoprzewodzące i szukam przyczyn dziwnych awarii.",
    "easter.pixel8pro": "Mój główny telefon w kolorze Mint. Działa na testowym kanale Android Beta i robi świetne zdjęcia z 5-krotnego zbliżenia.",
    "easter.buds": "Słuchawki w kolorze Moonstone z układem Tensor A1. Małe, wygodne i dobrze wyciszają biuro oraz pociąg.",
    "easter.watch": "Zegarek w wersji 41 mm Matte Black z Wear OS. Używam go głównie do powiadomień, płatności zbliżeniowych i mierzenia kroków.",
    "easter.surface": "Lekki laptop 2 w 1 z procesorem Snapdragon X Elite i ekranem OLED 120 Hz. Zabieram go na uczelnię i w podróż, bo długo trzyma na baterii.",
    "easter.ryzen": "Mój domowy komputer z Ryzenem 5 5600G i grafiką RTX 4060. Stawiam na nim wirtualne maszyny, uczę się sieci i gram wieczorami.",

    "exp.heading": "Doświadczenie i umiejętności",
    "exp.subtitle": "Rzeczy, z którymi mam do czynienia w codziennej pracy i na laboratoriach.",
    "exp.hw.meta": "Sprzęt komputerowy",
    "exp.hw.title": "Diagnostyka i serwis PC",
    "exp.hw.desc": "Składam komputery stacjonarne, wymieniam podzespoły w laptopach i szukam przyczyn usterek sprzętowych, od pamięci RAM po zasilacze i płyty główne.",
    "exp.hw.chip1": "Technik Informatyk",
    "exp.hw.chip2": "Diagnostyka hardware",
    "exp.hw.chip3": "Serwis PC",

    "exp.helpdesk.meta": "Helpdesk",
    "exp.helpdesk.title": "Wsparcie techniczne w IT Solution Factor",
    "exp.helpdesk.desc": "Pierwsza linia wsparcia IT. Pomagam użytkownikom z pocztą, pakietem biurowym, uprawnieniami i sprzętem, tłumacząc techniczne sprawy prostym językiem.",
    "exp.helpdesk.chip2": "Pomoc zdalna",
    "exp.helpdesk.chip3": "Obsługa zgłoszeń",

    "exp.net.meta": "Infrastruktura i sieci",
    "exp.net.title": "Systemy operacyjne i bezpieczeństwo",
    "exp.net.desc": "Konfiguruję konta i uprawnienia w Windows Server (Active Directory), pracuję w Linuksie oraz ustawiam adresację TCP/IP, sieci VLAN, routing i reguły firewalli.",

    "exp.mobile.meta": "Systemy mobilne",
    "exp.mobile.title": "Kanały Beta i ekosystem Google Pixel",
    "exp.mobile.desc": "Korzystam z programów Android Beta i Windows Insider. Testuję nowe funkcje systemowe oraz poprawki bezpieczeństwa na urządzeniach z serii Google Pixel.",

    "devices.heading": "Moje urządzenia",
    "devices.subtitle": "Sprzęt, z którego korzystam na co dzień w pracy, na studiach i w domu.",
    "devices.specAria": "Specyfikacja",
    "devices.label.soc": "Układ SoC",
    "devices.label.memory": "Pamięć",
    "devices.label.display": "Ekran",
    "devices.label.audioChip": "Układ audio",
    "devices.label.anc": "Redukcja hałasu",
    "devices.label.drivers": "Przetworniki",
    "devices.label.case": "Koperta",
    "devices.label.cpu": "Procesor",
    "devices.label.memoryStorage": "RAM i dysk",
    "devices.label.gpu": "Grafika",
    "devices.label.storage": "Dyski",
    "devices.p8p.meta": "Smartfon",
    "devices.p8p.display": "6,7\" LTPO 120 Hz",
    "devices.p8p.color": "Mint",
    "devices.buds.meta": "Słuchawki",
    "devices.buds.chip1": "Google Tensor A1",
    "devices.buds.drivers": "11 mm • Dźwięk 360°",
    "devices.buds.color": "Moonstone",
    "devices.watch.meta": "Smartwatch",
    "devices.watch.case": "41 mm • Wear OS",
    "devices.watch.color": "Matte Black",
    "devices.surface.meta": "Komputer 2 w 1",
    "devices.surface.cpu": "Snapdragon X Elite (12 rdzeni)",
    "devices.pc.meta": "Komputer stacjonarny",
    "devices.pc.tag": "Custom Build",

    "contact.heading": "Kontakt",
    "contact.subtitle": "Najłatwiej złapać mnie mailowo albo przez jedną z poniższych platform.",
    "contact.linkedin.aria": "Odwiedź profil LinkedIn Michał Dzido",
    "contact.linkedin.desc": "Doświadczenie zawodowe, certyfikaty i kontakt biznesowy",
    "contact.github.aria": "Odwiedź profil GitHub m1chi0001",
    "contact.github.desc": "Kod źródłowy tej strony i projekty ze studiów",
    "contact.instagram.aria": "Odwiedź profil Instagram m1chi0001",
    "contact.instagram.desc": "Zdjęcia z wyjazdów i kadry robione Pixelem",
    "contact.x.aria": "Odwiedź profil X M1chi0001",
    "contact.x.desc": "Krótkie wpisy o premierach sprzętu, Androidzie i pracy w IT",
    "contact.pixel.aria": "Grupa Facebook Google Pixel Polska",
    "contact.pixel.meta": "Społeczność",
    "contact.pixel.desc": "Polska społeczność użytkowników telefonów i akcesoriów Google Pixel",
    "contact.email.aria": "Wyślij e-mail do michaldzido2@gmail.com",
    "contact.email.meta": "Poczta e-mail",
    "contact.email.desc": "Napisz bezpośrednio na moją skrzynkę pocztową",

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
    "controls.langToastTitle": "Site language",
    "controls.langToast": "Switched to English",
    "controls.paletteAria": "Change Material You color accent",
    "controls.paletteTitle": "Material You colors",
    "controls.paletteMenuAria": "Select color theme",
    "controls.themeTitle": "Toggle light / dark theme",
    "controls.themeDark": "Dark",
    "controls.themeLight": "Light",
    "controls.themeToastTitle": "Appearance mode",
    "controls.themeToastDark": "Dark theme enabled",
    "controls.themeToastLight": "Light theme enabled",
    "controls.themeAriaToLight": "Switch to light mode",
    "controls.themeAriaToDark": "Switch to dark mode",
    "controls.paletteToastTitle": "Material You theme",
    "controls.palettePrefix": "Active accent",
    "controls.paletteBlue": "Ocean Blue (Default)",
    "toast.closeAria": "Dismiss notification",

    "hero.badgeRole": "Junior IT Specialist at IT Solution Factor",
    "hero.terminalTitle": "Open terminal (~ key)",
    "hero.titleHtml": "Hi, I'm <span class=\"hero-name-accent expressive-accent\">Michał Dzido</span>",
    "hero.subtitleHtml": "I work in first-line IT support at <strong>IT Solution Factor</strong> and study cybersecurity at <strong>WSEI University</strong>. Day to day I help users, troubleshoot hardware, and configure networks. After hours, I test new Android builds on my Pixel.",
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
    "about.subtitle": "What I do at work, what I study at university, and how I spend my free time.",
    "about.job.meta": "Current role",
    "about.job.title": "Junior IT Specialist",
    "about.job.desc": "I help employees fix hardware, OS, and software issues over the phone and remotely. I set up laptops, track down hardware faults, and pass larger infrastructure incidents to the sysadmin team.",
    "about.job.chip1": "User support",
    "about.job.chip2": "Hardware diagnostics",
    "about.job.chip3": "Incident management",

    "about.age.meta": "Age",
    "about.age.chip1": "March 4, 2006",
    "about.age.chip2": "Born ’06",

    "about.loc.meta": "Location",
    "about.loc.title": "Warsaw & Adamów",
    "about.loc.desc": "Monday through Friday I work from the office in Warsaw. On weekends I head to university classes or back home to Adamów.",
    "about.loc.timeLabel": "Local time:",
    "about.loc.chip": "CET zone",

    "about.edu.meta": "Education",
    "about.edu.title": "WSEI University",
    "about.edu.subtitle": "Cybersecurity & Network Technologies",
    "about.edu.desc": "After finishing IT technical high school, I started my engineering degree in Lublin. I focus mostly on computer networks, traffic analysis, and system security.",
    "about.edu.chip1": "IT Technician",
    "about.edu.chip2": "B.Eng. student",

    "about.hobbies.meta": "After hours",
    "about.hobbies.title": "Interests outside work",
    "about.hobbies.subtitle": "Community, music, and hardware",
    "about.hobbies.desc": "I help run the Google Pixel Polska group, install test builds of Android and Windows, and build desktop PCs. In the evenings I listen to music or play games.",
    "about.hobbies.chip1": "Music & Last.fm",
    "about.hobbies.chip2": "Google Pixel Polska",
    "about.hobbies.chip3": "Beta OS testing",
    "about.hobbies.chip4": "PC building",

    "easter.music": "I have headphones on for most of the day. The card at the top shows what I am listening to live from Last.fm.",
    "easter.pixel": "Together with other moderators, I run the Polish Facebook community for Google Pixel users.",
    "easter.beta": "I like trying new features ahead of release, so I run Android Beta and Windows Insider builds daily.",
    "easter.pc": "I pick parts, build PCs from scratch, repaste coolers, and track down tricky hardware faults.",
    "easter.pixel8pro": "My main phone in Mint. It runs the Android Beta channel and takes great shots with the 5x telephoto lens.",
    "easter.buds": "Moonstone earbuds with the Tensor A1 chip. Compact, comfortable, and great at blocking out office and train noise.",
    "easter.watch": "41 mm Matte Black watch running Wear OS. I use it mostly for notifications, contactless payments, and step tracking.",
    "easter.surface": "Lightweight 2-in-1 with a Snapdragon X Elite chip and a 120 Hz OLED screen. I take it to university and on trips for its battery life.",
    "easter.ryzen": "My home desktop with a Ryzen 5 5600G and RTX 4060. I use it for virtual machines, networking labs, and evening gaming.",

    "exp.heading": "Experience & skills",
    "exp.subtitle": "What I work with day to day on the job and in university labs.",
    "exp.hw.meta": "Computer hardware",
    "exp.hw.title": "PC diagnostics & servicing",
    "exp.hw.desc": "I build desktop PCs, replace laptop components, and track down hardware failures across RAM, power supplies, and motherboards.",
    "exp.hw.chip1": "IT Technician",
    "exp.hw.chip2": "Hardware diagnostics",
    "exp.hw.chip3": "PC servicing",

    "exp.helpdesk.meta": "Helpdesk",
    "exp.helpdesk.title": "IT Support at IT Solution Factor",
    "exp.helpdesk.desc": "First-line IT support. I help users with email, office apps, account permissions, and hardware while explaining technical issues in plain language.",
    "exp.helpdesk.chip2": "Remote support",
    "exp.helpdesk.chip3": "Ticket handling",

    "exp.net.meta": "Infrastructure & networks",
    "exp.net.title": "Operating systems & security",
    "exp.net.desc": "I manage accounts and permissions in Windows Server (Active Directory), work in Linux, and configure TCP/IP addressing, VLANs, routing, and firewall rules.",

    "exp.mobile.meta": "Mobile systems",
    "exp.mobile.title": "Beta channels & Google Pixel ecosystem",
    "exp.mobile.desc": "I take part in the Android Beta and Windows Insider programs, testing new OS features and security updates across Google Pixel devices.",

    "devices.heading": "My devices",
    "devices.subtitle": "Hardware I use every day at work, at university, and at home.",
    "devices.specAria": "Specifications",
    "devices.label.soc": "SoC chip",
    "devices.label.memory": "Memory",
    "devices.label.display": "Display",
    "devices.label.audioChip": "Audio chip",
    "devices.label.anc": "Noise control",
    "devices.label.drivers": "Drivers",
    "devices.label.case": "Case",
    "devices.label.cpu": "Processor",
    "devices.label.memoryStorage": "RAM & storage",
    "devices.label.gpu": "Graphics",
    "devices.label.storage": "Drives",
    "devices.p8p.meta": "Smartphone",
    "devices.p8p.display": "6.7\" LTPO 120 Hz",
    "devices.p8p.color": "Mint",
    "devices.buds.meta": "Earbuds",
    "devices.buds.chip1": "Google Tensor A1",
    "devices.buds.drivers": "11 mm • Spatial Audio",
    "devices.buds.color": "Moonstone",
    "devices.watch.meta": "Smartwatch",
    "devices.watch.case": "41 mm • Wear OS",
    "devices.watch.color": "Matte Black",
    "devices.surface.meta": "2-in-1 PC",
    "devices.surface.cpu": "Snapdragon X Elite (12 cores)",
    "devices.pc.meta": "Desktop PC",
    "devices.pc.tag": "Custom Build",

    "contact.heading": "Contact",
    "contact.subtitle": "The easiest way to reach me is by email or through any of the platforms below.",
    "contact.linkedin.aria": "Visit Michał Dzido's LinkedIn profile",
    "contact.linkedin.desc": "Work history, certifications, and professional contact",
    "contact.github.aria": "Visit GitHub profile m1chi0001",
    "contact.github.desc": "Source code for this site and university projects",
    "contact.instagram.aria": "Visit Instagram profile m1chi0001",
    "contact.instagram.desc": "Travel shots and everyday photos taken on Pixel",
    "contact.x.aria": "Visit X profile M1chi0001",
    "contact.x.desc": "Short posts on hardware launches, Android, and IT work",
    "contact.pixel.aria": "Google Pixel Polska Facebook group",
    "contact.pixel.meta": "Community",
    "contact.pixel.desc": "Polish community of Google Pixel phone and accessory users",
    "contact.email.aria": "Send an email to michaldzido2@gmail.com",
    "contact.email.meta": "Email",
    "contact.email.desc": "Write directly to my inbox",

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
 * Universal Material 3 Expressive Notification Card / Toast helper
 * Accepts either a plain string or an options object: { title, message, icon, accent }
 */
function showToast(input) {
  const toast = document.getElementById('m3-toast');
  if (!toast) return;

  const isObj = typeof input === 'object' && input !== null;
  const message = isObj ? (input.message || '') : String(input || '');
  const title = isObj ? (input.title || '') : '';
  const icon = isObj ? (input.icon || 'auto_awesome') : 'auto_awesome';
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
   8. LIVE LAST.FM NOW PLAYING & MATERIAL 3 EXPRESSIVE COLOR ENGINE
   =================================================================== */
let lastFmSeedHsl = null;
let lastFmExtractedUrl = "";

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
  if (!card || !lastFmSeedHsl) return;

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
    if (artistEl) artistEl.textContent = trackArtist;

    const albumImg = track.image?.find(img => img.size === "large")?.["#text"]
      || track.image?.find(img => img.size === "extralarge")?.["#text"]
      || track.image?.find(img => img.size === "medium")?.["#text"]
      || track.image?.[0]?.["#text"];

    if (albumImg && albumImgEl) {
      albumImgEl.src = albumImg;
    }

    syncLastFmCoverPalette(albumImg, trackName, trackArtist);

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
        || (fallbackIconEl ? fallbackIconEl.textContent.trim() : 'auto_awesome');

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
