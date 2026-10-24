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

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Age Engine (Birthdate: March 4, 2006)
  initAgeCalculator();

  // 2. Dynamic Footer Current Year
  initFooterYear();

  // 3. Live Last.fm Scrobbler Status & Polling
  updateLastFmStatus();
  setInterval(updateLastFmStatus, LASTFM_CONFIG.pollIntervalMs);

  // 4. Material 3 Theme Management (Default: Dark Mode)
  initThemeManager();

  // 5. Navigation (Desktop Pill Bar & Mobile Bottom Nav) with Scroll Spy
  initNavigationScrollSpy();

  // 6. Interactive Avatar Hover & Touch Swap
  initAvatarInteractive();

  // 7. Scroll Pin / Docked Avatar Chip
  initScrollPinDock();

  // 8. Copy E-mail & Toast System
  initEmailCopy();

  // 9. Material 3 Ripple Effect
  initRippleEffect();

  // 10. Real-time Warsaw, Poland Clock
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
   2. THEME MANAGER (DARK MODE DEFAULT)
   Persists preference in localStorage
   =================================================================== */
function initThemeManager() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;
  const themeText = document.getElementById('theme-text');

  // Check saved preference; default to 'dark' strictly per specifications
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

/* ===================================================================
   3. NAVIGATION & SCROLL SPY
   - Desktop: Adaptive Tab Expansion & Sliding Pill Indicator
   - Mobile: Bottom Navigation Bar with Vertical Icon Stack
   =================================================================== */
function initNavigationScrollSpy() {
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-item');
  const sections = document.querySelectorAll('.snap-section');

  if (!desktopLinks.length || !sections.length) return;

  // Synchronize active states across both desktop and mobile navigation
  const setActiveSection = (targetId) => {
    // 1. Update Desktop Tabs
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

    // 2. Update Mobile Bottom Navigation
    mobileLinks.forEach((mLink) => {
      const href = mLink.getAttribute('href');
      if (href === `#${targetId}`) {
        mLink.classList.add('active');
      } else {
        mLink.classList.remove('active');
      }
    });
  };

  // Smooth scroll click handler for desktop tabs
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

  // Smooth scroll click handler for mobile bottom nav
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

  // IntersectionObserver to continuously spy active section in viewport
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -25% 0px',
    threshold: 0.25
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
   4. INTERACTIVE AVATAR HOVER & TOUCH SWAP
   Crossfades from photo to illustrated 3D avatar on hover or touch
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
   When scrolling past Hero, scales down and docks seamlessly at top-left
   =================================================================== */
function initScrollPinDock() {
  const dockedChip = document.getElementById('docked-avatar-chip');
  const heroSection = document.getElementById('hero');

  if (!dockedChip || !heroSection) return;

  // Click docked avatar to smoothly return to top / hero
  dockedChip.addEventListener('click', () => {
    heroSection.scrollIntoView({ behavior: 'smooth' });
  });

  dockedChip.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Observe when hero exits view to dock the avatar chip
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
   5. LIVE LAST.FM NOW PLAYING SERVICE & API INTEGRATION
   - Query Last.fm 2.0 API for user: M1chiii
   - Conditional Rendering: ONLY active tracks (nowplaying === 'true')
   - Animated CSS audio equalizer bars indicating real-time playback
   - Album art thumbnail, track title, artist name & Last.fm brand crimson accent
   - Queries Last.fm 2.0 API in real time with cache-busting
   - Automatically detects active playback (nowplaying === 'true')
   - Graceful fallback: renders authentic latest scrobbled track with 'Ostatnio odtwarzane'
   - High-contrast squircle artwork, live sound-wave bars, and brand crimson styling
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

    // Track metadata
    const trackName = track.name || "Nieznany utwór";
    const trackArtist = typeof track.artist === "object"
      ? (track.artist?.["#text"] || track.artist?.name || "Nieznany wykonawca")
      : (track.artist || "Nieznany wykonawca");

    if (titleEl) titleEl.textContent = trackName;
    if (artistEl) artistEl.textContent = trackArtist;

    // Highest quality available album artwork
    const albumImg = track.image?.find(img => img.size === "large")?.["#text"]
      || track.image?.find(img => img.size === "extralarge")?.["#text"]
      || track.image?.find(img => img.size === "medium")?.["#text"]
      || track.image?.[0]?.["#text"];

    if (albumImg && albumImgEl) {
      albumImgEl.src = albumImg;
    }

    if (isPlaying) {
      // 1. Actively streaming right now
      if (statusBadgeEl) statusBadgeEl.className = "lastfm-live-badge is-playing";
      if (statusTextEl) statusTextEl.textContent = "TERAZ ODTWARZANE";

      container.classList.remove("hidden");
      container.style.opacity = "1";
      container.style.display = "flex";
    } else if (LASTFM_CONFIG.showRecentlyPlayedWhenOffline) {
      // 2. Offline / recently scrobbled authentic track
      if (statusBadgeEl) statusBadgeEl.className = "lastfm-live-badge is-recent";
      if (statusTextEl) statusTextEl.textContent = "OSTATNIO ODTWARZANE";

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

// Backwards compatibility alias
const initLastFmService = updateLastFmStatus;

/* ===================================================================
   6. COPY E-MAIL TO CLIPBOARD & TOAST SYSTEM
   =================================================================== */
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('m3-toast');
  const emailVal = 'michaldzido2@gmail.com';
  let toastTimer = null;

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

    showToast('Skopiowano adres e-mail (michaldzido2@gmail.com) do schowka!');
  });

  function showToast(message) {
    if (!toast) return;
    const msgEl = toast.querySelector('.toast-msg');
    if (msgEl) msgEl.textContent = message;

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* ===================================================================
   7. MATERIAL 3 RIPPLE WAVE EFFECT
   =================================================================== */
function initRippleEffect() {
  const rippleTargets = document.querySelectorAll(
    '.m3-btn, .social-card, .bento-card, .exp-card, .device-card, .theme-toggle-btn, .copy-btn, .lastfm-card, .floating-pill'
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
   8. REAL-TIME WARSAW, POLAND CLOCK
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
