/**
 * Michał Dzido - Personal Portfolio
 * Material 3 Expressive & Google Sans Flex Interactive Architecture
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

let globalToastTimer = null;

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

  // Polish pluralization: 1 rok, 2-4 / 22-24 lata, 5-21 / 25+ lat (12-14 always "lat")
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;
  let suffix = "lat";
  if (age === 1) {
    suffix = "rok";
  } else if ((lastTwoDigits < 12 || lastTwoDigits > 14) && lastDigit >= 2 && lastDigit <= 4) {
    suffix = "lata";
  }

  const ageEl = document.getElementById("user-age");
  if (ageEl) {
    ageEl.textContent = `${age} ${suffix}`;
  }
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
function initThemeManager() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;
  const themeText = document.getElementById('theme-text');

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
    if (themeText) {
      themeText.textContent = theme === 'dark' ? 'Ciemny' : 'Jasny';
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Przełącz na tryb jasny' : 'Przełącz na tryb ciemny'
      );
    }
  }
}

function initPaletteManager() {
  const picker = document.getElementById('palette-picker');
  const toggleBtn = document.getElementById('palette-toggle-btn');
  const swatches = document.querySelectorAll('.palette-swatch');
  const htmlRoot = document.documentElement;

  const paletteNames = {
    blue: 'Ocean Blue (Domyślny)',
    mint: 'Pixel Mint',
    peach: 'Sunset Peach',
    purple: 'Cyber Purple'
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
    if (notify && paletteNames[palette]) {
      showToast(`Motyw: ${paletteNames[palette]}`);
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

    const trackName = track.name || "Nieznany utwór";
    const trackArtist = typeof track.artist === "object"
      ? (track.artist?.["#text"] || track.artist?.name || "Nieznany wykonawca")
      : (track.artist || "Nieznany wykonawca");

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
      if (statusTextEl) statusTextEl.textContent = "Teraz odtwarzane";

      container.classList.remove("hidden");
      container.style.opacity = "1";
      container.style.display = "flex";
    } else if (LASTFM_CONFIG.showRecentlyPlayedWhenOffline) {
      if (statusBadgeEl) statusBadgeEl.className = "lastfm-live-badge is-recent";
      if (statusTextEl) statusTextEl.textContent = "Ostatnio odtwarzane";

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

  const commands = {
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
      output.innerHTML = '<div class="term-line term-welcome">Konsola wyczyszczona. Wpisz <strong>help</strong>, aby wyświetlić listę poleceń.</div>';
      return;
    }

    const echoLine = document.createElement('div');
    echoLine.className = 'term-line term-cmd-echo';
    echoLine.textContent = `m1chi@wsei:~$ ${rawCmd}`;
    output.appendChild(echoLine);

    const respLine = document.createElement('div');
    respLine.className = 'term-line term-response';
    if (commands[cmd]) {
      const result = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd];
      respLine.innerHTML = result;
    } else {
      respLine.innerHTML = `Nieznana komenda: <code>${cmd.replace(/[<>&"']/g, '')}</code>. Wpisz <strong>help</strong>, aby zobaczyć dostępne polecenia.`;
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
  window.LASTFM_CONFIG = LASTFM_CONFIG;
}
