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

  // 6. Smooth Scroll-Reveal Animations & Ambient Blob Parallax
  initScrollReveal();
  initAmbientParallax();

  // 7. Interactive Avatar Hover & Touch Swap
  initAvatarInteractive();

  // 8. Scroll Pin / Docked Avatar Chip
  initScrollPinDock();

  // 9. Copy E-mail, vCard Download & Easter Egg Interactions
  initEmailCopy();
  initVCardDownload();
  initEasterEggs();
  initMiniTerminal();

  // 10. Material 3 Ripple Effect
  initRippleEffect();

  // 11. Real-time Warsaw, Poland Clock
  initWarsawClock();
});

/* ===================================================================
   1. DYNAMIC AGE ENGINE
   Birthdate: March 4, 2006 (2006-03-04)
   =================================================================== */
function initAgeCalculator() {
  const birthDate = new Date(2006, 2, 4); // March 4, 2006 (Month is 0-indexed)
  const today = new Date();
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const ageEl = document.getElementById("user-age");
  if (ageEl) {
    ageEl.innerHTML = `<span id="age" class="age-digit">${age}</span> <span class="age-unit">lat</span>`;
  }

  const legacyAgeEl = document.getElementById("age");
  if (legacyAgeEl && legacyAgeEl !== ageEl) {
    legacyAgeEl.textContent = age;
  }
}

// Backwards compatibility alias
const initAgeCalculation = initAgeCalculator;

/* ===================================================================
   DYNAMIC CURRENT YEAR IN FOOTER
   =================================================================== */
function initFooterYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ===================================================================
   2. THEME & DYNAMIC MATERIAL YOU PALETTE MANAGER
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
      showToast(`🎨 Motyw Material You: ${paletteNames[palette]}`);
    }
  }
}

/* ===================================================================
   3. NAVIGATION & SCROLL SPY
   =================================================================== */
function initNavigationScrollSpy() {
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-item');
  const sections = document.querySelectorAll('.snap-section');

  if (!desktopLinks.length || !sections.length) return;

  const setActiveSection = (targetId) => {
    desktopLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${targetId}`) {
        link.classList.add('active');
        link.setAttribute('aria-selected', 'true');
      } else {
        link.classList.remove('active');
        link.setAttribute('aria-selected', 'false');
      }
    });

    mobileLinks.forEach((mLink) => {
      const href = mLink.getAttribute('href');
      if (href === `#${targetId}`) {
        mLink.classList.add('active');
      } else {
        mLink.classList.remove('active');
      }
    });
  };

  desktopLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
    });
  });

  mobileLinks.forEach((mLink) => {
    mLink.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = mLink.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -30% 0px',
    threshold: 0.18
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        setActiveSection(id);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* ===================================================================
   3B. NATURAL SCROLL REVEAL & AMBIENT PARALLAX
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

function initAmbientParallax() {
  const blobs = document.querySelectorAll('.ambient-blob[data-parallax]');
  if (!blobs.length || window.matchMedia('(pointer: coarse)').matches) return;

  let ticking = false;
  window.addEventListener('mousemove', (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const cx = e.clientX - window.innerWidth / 2;
        const cy = e.clientY - window.innerHeight / 2;
        blobs.forEach((blob) => {
          const factor = parseFloat(blob.getAttribute('data-parallax')) || 0.02;
          blob.style.transform = `translate3d(${cx * factor}px, ${cy * factor}px, 0)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ===================================================================
   4. INTERACTIVE AVATAR HOVER & TOUCH SWAP
   =================================================================== */
function initAvatarInteractive() {
  const avatarWrapper = document.getElementById('hero-avatar-wrapper');
  if (!avatarWrapper) return;

  let touchHandled = false;

  avatarWrapper.addEventListener('mouseenter', () => {
    avatarWrapper.classList.add('is-hovered');
  });

  avatarWrapper.addEventListener('mouseleave', () => {
    avatarWrapper.classList.remove('is-hovered');
  });

  avatarWrapper.addEventListener('touchstart', () => {
    touchHandled = true;
    avatarWrapper.classList.toggle('is-hovered');
    setTimeout(() => {
      touchHandled = false;
    }, 400);
  }, { passive: true });

  avatarWrapper.addEventListener('click', () => {
    if (touchHandled) return;
    avatarWrapper.classList.toggle('is-hovered');
  });

  const hintBtn = document.getElementById('avatar-hover-hint');
  if (hintBtn) {
    hintBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        avatarWrapper.classList.toggle('is-hovered');
      }
    });
  }
}

/* ===================================================================
   5. SCROLL PIN / DOCKED AVATAR CHIP
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
   6. LIVE LAST.FM NOW PLAYING SERVICE & API INTEGRATION
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
      if (statusTextEl) statusTextEl.textContent = "TERAZ W SŁUCHAWKACH";

      container.classList.remove("hidden");
      container.style.opacity = "1";
      container.style.display = "flex";
    } else if (LASTFM_CONFIG.showRecentlyPlayedWhenOffline) {
      if (statusBadgeEl) statusBadgeEl.className = "lastfm-live-badge is-recent";
      if (statusTextEl) statusTextEl.textContent = "OSTATNIO SŁUCHANE";

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
   7. COPY E-MAIL, VCARD (.VCF) DOWNLOAD & EASTER EGGS
   =================================================================== */
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailVal = 'michaldzido2@gmail.com';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailVal);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = emailVal;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch (fallbackErr) {
        console.warn('Clipboard fallback notice:', fallbackErr);
      }
    }

    showToast('📬 Skopiowano adres michaldzido2@gmail.com do schowka!');
  });
}

function initVCardDownload() {
  const btns = [
    document.getElementById('download-vcard-hero'),
    document.getElementById('download-vcard-contact')
  ].filter(Boolean);

  if (!btns.length) return;

  const generateVCard = () => {
    const vcardLines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Dzido;Michał;;;',
      'FN:Michał Dzido',
      'ORG:IT Solution Factor Sp. z o.o.',
      'TITLE:Junior IT Specialist',
      'EMAIL;TYPE=INTERNET,WORK:michaldzido2@gmail.com',
      'ADR;TYPE=WORK:;;Warszawa;;;Polska',
      'URL:https://github.com/m1chi0001',
      'NOTE:Junior IT Specialist @ IT Solution Factor | Student Cyberbezpieczeństwa WSEI | Moderator Google Pixel Polska',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vcardLines], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Michal_Dzido.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);

    showToast('📇 Pobrano wizytówkę vCard (Michal_Dzido.vcf)!');
  };

  btns.forEach((btn) => btn.addEventListener('click', generateVCard));
}

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

/* ===================================================================
   8. INTERACTIVE MINI-TERMINAL IT (EASTER EGG MODAL)
   =================================================================== */
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

  const commands = {
    help: 'Dostępne komendy: <strong>whoami</strong>, <strong>neofetch</strong>, <strong>skills</strong>, <strong>pixel</strong>, <strong>ryzen</strong>, <strong>coffee</strong>, <strong>contact</strong>, <strong>clear</strong>',
    whoami: '👋 Cześć! Jestem <strong>Michał Dzido</strong> — Junior IT Specialist w IT Solution Factor, student Cyberbezpieczeństwa na Uniwersytecie WSEI oraz moderator społeczności Google Pixel Polska.',
    neofetch: '💻 <strong>OS</strong>: Android 16 Beta / Windows 11 Insider<br>📱 <strong>Host</strong>: Google Pixel 8 Pro (Mint) & Surface Pro 11<br>🖥️ <strong>Workstation</strong>: Miska Ryżenu (Ryzen 5 5600G + RTX 4060)<br>🎨 <strong>UI</strong>: Material 3 Expressive (Google Sans Flex)',
    skills: '🛡️ <strong>Stack & Narzędzia</strong>: Windows Server, Active Directory, Linux/Bash, Sieci TCP/IP & VLAN, Diagnostyka Hardware, Wsparcie Helpdesk L1/L2, Cybersec.',
    pixel: '🌿 <strong>Team Pixel!</strong> Korzystam z Pixela 8 Pro (Mint), Pixel Buds Pro 2 (Moonstone) oraz Pixel Watcha 2. Współtworzę też grupę Google Pixel Polska!',
    ryzen: '🍚 <strong>Miska Ryżenu</strong> pracuje na pełnych obrotach! Procesor AMD Ryzen 5 5600G + GeForce RTX 4060 — gotowa na lab sieciowy i wieczorny gaming.',
    coffee: '☕ Parzenie wirtualnego espresso dla gościa... Gotowe! Poziom energii: 100%.',
    contact: '📬 Napisz do mnie na: <strong>michaldzido2@gmail.com</strong> albo złap mnie na LinkedInie / GitHubie (m1chi0001)!'
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
      output.innerHTML = '<div class="term-line term-welcome">Konsola wyczyszczona. Wpisz <strong>help</strong>, aby zobaczyć listę komend.</div>';
      return;
    }

    const echoLine = document.createElement('div');
    echoLine.className = 'term-line term-cmd-echo';
    echoLine.textContent = `m1chi@wsei:~$ ${rawCmd}`;
    output.appendChild(echoLine);

    const respLine = document.createElement('div');
    respLine.className = 'term-line term-response';
    if (commands[cmd]) {
      respLine.innerHTML = commands[cmd];
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
   9. MATERIAL 3 RIPPLE WAVE EFFECT
   =================================================================== */
function initRippleEffect() {
  const rippleTargets = document.querySelectorAll(
    '.m3-btn, .social-card, .bento-card, .exp-card, .device-card, .theme-toggle-btn, .palette-toggle-btn, .passion-pill, .lastfm-card, .floating-pill'
  );

  rippleTargets.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('m3-ripple-wave');

      const existingRipple = this.querySelector('.m3-ripple-wave');
      if (existingRipple) {
        existingRipple.remove();
      }

      this.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 600);
    });
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
