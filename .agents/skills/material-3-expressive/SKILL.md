---
name: material-3-expressive
description: Design, refactor, and audit user interfaces according to the official Google Material 3 Expressive specification (m3.material.io). Activate this skill when designing UI, writing components in Jetpack Compose, Flutter, or Web (CSS/React/Tailwind/Material Web), defining design tokens, spring animations (motion physics), shape morphing, and implementing the 14 M3 Expressive components.
---

# Material 3 Expressive — Official Guidelines and Technical Specification

You are an expert in the **Material Design 3 Expressive (M3 Expressive)** design system based on the official documentation at `https://m3.material.io/`. Your role is to design and implement interfaces that pair an emotional, expressive character with peak usability and accessibility.

---

## 1. Philosophy and 7 Expressive Tactics

M3 Expressive is not a standalone "M4" version, but an evolution of Material 3 informed by 46 UX research studies (over 18,000 participants), which revealed that expressive interfaces allow users to locate primary actions up to 4x faster.

When building views, apply the **7 official M3 Expressive tactics**:

1. **Use a variety of shapes:** Break monotony by pairing fully rounded (`Full`) shapes with squarer shapes featuring smaller corner radii to build intentional visual tension.

2. **Apply rich and nuanced colors:** Leverage contrast between `Primary`, `Secondary`, and `Tertiary` roles, alongside surface container hierarchy (`Surface Container Lowest` -> `Highest`, `Surface Bright`), to draw focus to core actions.

3. **Guide attention with typography:** Combine the baseline type scale (*Baseline*) with new emphasized styles (*Emphasized*) for headlines, active states, and primary CTAs.

4. **Contain content for emphasis:** Organize related elements into logical cards and containers with distinct surface luminance and clear spatial rhythm.

5. **Add fluid and natural motion:** Replace rigid duration-based transitions with the spring-based *Motion Physics System* and shape morphing (*Shape Morph*).

6. **Leverage component flexibility:** Adapt component sizes and variants (e.g., button heights from `XS` to `XL`, collapsing toolbars) to task context and *Window Size Classes*.

7. **Combine tactics to create hero moments:** Combine several of the tactics above in **at most 1–2 key moments** per screen or flow. Too many expressive elements at once introduce visual clutter.

---

## 2. Motion Physics System

**CRITICAL CHANGE:** In M3 Expressive, the legacy system based on *Easing and Duration* has been replaced by the spring-based **Motion Physics System**. The legacy system is retained strictly as a fallback for full-screen transitions (*Transitions*).

### Spring Parameters

Each spring is defined by 3 properties:

- **Stiffness:** Higher stiffness brings motion to rest faster.

- **Damping:** Higher damping reduces bounce faster. A value of `damping = 1.0` eliminates bounce completely (critical damping).

- **Initial Velocity:** Smoothly captures user gestures and enables on-the-fly interruption (*retargeting*).

### Two Motion Schemes

- **Expressive (Default for M3 Expressive):** Bold, lively behavior with noticeable overshoot in spatial movements.

- **Standard:** Functional, subdued motion with minimal bounce for utility-focused applications.

### Two Spring Token Types and 3 Speeds

Each scheme provides **2 style categories** across **3 speeds** (`fast`, `default`, `slow`):

1. **Spatial Springs (`md.sys.motion.spring.<speed>.spatial`):**

   - **Scope:** Position (`x`, `y`), size (`width`, `height`, `scale`), rotation, corner radius (`corner-radius`), and shape morphing.

   - **Behavior:** Features intentional overshoot (damping below 1.0) and settles gently at the target position.

2. **Effects Springs (`md.sys.motion.spring.<speed>.effects`):**

   - **Scope:** Color (`background-color`, `color`), opacity, elevation/shadows.

   - **Behavior:** **Strictly no overshoot** (`damping = 1.0`). Color or opacity transitions must never flash or exceed their target values.

**Speed Selection:**

- `fast` — small components, buttons, icons, switches (default for most internal component interactions).

- `default` — medium UI elements, cards, floating toolbars, menus.

- `slow` — large surfaces, bottom sheets, navigation, and full-screen transitions.

### Official Web Conversion Table (CSS `cubic-bezier` + `duration`)

On Web platforms, when native JS/Web Animations API springs do not support gesture interruption, use the official approximation curves from `m3.material.io/styles/motion/overview/specs`:

| M3 Token | Scheme | CSS `cubic-bezier()` | Duration |

|---|---|---|---|

| `md.sys.motion.spring.fast.spatial` | **Expressive** | `cubic-bezier(0.42, 1.67, 0.21, 0.90)` | `350ms` |

| `md.sys.motion.spring.default.spatial` | **Expressive** | `cubic-bezier(0.38, 1.21, 0.22, 1.00)` | `500ms` |

| `md.sys.motion.spring.slow.spatial` | **Expressive** | `cubic-bezier(0.39, 1.29, 0.35, 0.98)` | `650ms` |

| `md.sys.motion.spring.fast.effects` | **Expressive / Standard** | `cubic-bezier(0.31, 0.94, 0.34, 1.00)` | `150ms` |

| `md.sys.motion.spring.default.effects` | **Expressive / Standard** | `cubic-bezier(0.34, 0.80, 0.34, 1.00)` | `200ms` |

| `md.sys.motion.spring.slow.effects` | **Expressive / Standard** | `cubic-bezier(0.34, 0.88, 0.34, 1.00)` | `300ms` |

| `md.sys.motion.spring.fast.spatial` | **Standard** | `cubic-bezier(0.27, 1.06, 0.18, 1.00)` | `350ms` |

| `md.sys.motion.spring.default.spatial` | **Standard** | `cubic-bezier(0.27, 1.06, 0.18, 1.00)` | `500ms` |

| `md.sys.motion.spring.slow.spatial` | **Standard** | `cubic-bezier(0.27, 1.06, 0.18, 1.00)` | `750ms` |

---

## 3. Expanded Shape System and Shape Morphing

### Corner Radius Scale

M3 Expressive introduces 3 new intermediate and large tokens and redefines `Full`:

| Token Name | System Token | Value | M3 Expressive Notes |

|---|---|---|---|

| **None** | `md.sys.shape.corner.none` | `0dp` / `0px` | Squared edges (e.g., Docked Toolbar) |

| **Extra small** | `md.sys.shape.corner.extra-small` | `4dp` / `4px` | Small auxiliary elements |

| **Small** | `md.sys.shape.corner.small` | `8dp` / `8px` | Chips, small fields |

| **Medium** | `md.sys.shape.corner.medium` | `12dp` / `12px` | Cards, square buttons |

| **Large** | `md.sys.shape.corner.large` | `16dp` / `16px` | Medium containers, FABs |

| **Large increased** *(NEW)* | `md.sys.shape.corner.large-increased` | `20dp` / `20px` | Introduced in M3 Expressive |

| **Extra large** | `md.sys.shape.corner.extra-large` | `28dp` / `28px` | Dialogs, large containers |

| **Extra large increased** *(NEW)* | `md.sys.shape.corner.extra-large-increased` | `32dp` / `32px` | Introduced in M3 Expressive |

| **Extra extra large** *(NEW)* | `md.sys.shape.corner.extra-extra-large` | `48dp` / `48px` | Large hero surfaces / expressive cards |

| **Full** *(UPDATED)* | `md.sys.shape.corner.full` | `9999px` (`full`) | Full pill/circle (previously defined as 50% of component height) |

### Material Shape Library (35 Shapes) & Shape Morphing

- **35 Decorative Shapes (Material Shape Library):** Available in Figma and Jetpack Compose (`androidx.graphics.shapes`). Use them for avatar masking, photo cropping, badges, and the `Loading Indicator`.

- **Shape Morphing:** Shapes dynamically respond to interaction states:

  - **Pressed State (`Pressed`):** Both `Round` and `Square` buttons morph into squarer geometries with decreased corner radii on press.

  - **Selected State (`Selected` in Toggle Buttons):** A default rounded button (`Full`) morphs into a square shape (e.g., `12dp`–`16dp`) upon selection, while a default square button morphs into a rounded shape (`Full`).

- **Non-Semantic Shape Principle:** Shape acts as an aesthetic tool and a visual indicator of state changes, not as a rigid semantic symbol (e.g., a wavy shape is not exclusively reserved for progress bars).

---

## 4. Visually Emphasized Typography

The M3 typography scale is divided into **two parallel sets of 15 styles** (**30 tokens total**):

1. **Baseline styles (15):** Standard styles for body copy and secondary UI elements.

2. **Emphasized styles (15 — NEW in M3 Expressive):** Every scale size has an `Emphasized` equivalent featuring higher font weights and optimized variable axes (e.g., using **Google Sans Flex** or variable **Roboto Flex**).

### Type Scale Hierarchy (Largest to Smallest)

- **Display:** `Display Large` (`57sp`), `Display Medium` (`45sp`), `Display Small` (`36sp`) — + `Emphasized` equivalents.

- **Headline:** `Headline Large` (`32sp`), `Headline Medium` (`28sp`), `Headline Small` (`24sp`) — + `Emphasized` equivalents.

- **Title:** `Title Large` (`22sp`), `Title Medium` (`16sp`), `Title Small` (`14sp`) — + `Emphasized` equivalents.

- **Body:** `Body Large` (`16sp`), `Body Medium` (`14sp`), `Body Small` (`12sp`) — + `Emphasized` equivalents.

- **Label:** `Label Large` (`14sp`), `Label Medium` (`12sp`), `Label Small` (`11sp`) — + `Emphasized` equivalents.

### Typography Guidelines

- Use `Emphasized` styles for: selected navigation/button group items, prominent calls to action (e.g., "Start recording"), unread count badges, and editorial headlines.

- **Always use Sentence case** (capitalize only the first letter) across all UI elements: buttons, labels, tabs, and headers. Avoid `ALL CAPS` and `Title Case`.

---

## 5. Vibrant Color Schemes & Surface Hierarchy

M3 Expressive emphasizes crisp container separation and rich accent pairings:

### Surface Container Hierarchy

Instead of relying on drop shadows (`drop-shadow`) for depth separation, use the 5-step tonal surface scale:

- `surfaceContainerLowest` -> `surfaceContainerLow` -> `surfaceContainer` -> `surfaceContainerHigh` -> `surfaceContainerHighest`

- Use `surfaceBright` (the brightest surface in both light and dark themes) to highlight the focal container ("Hero Container"), and `surfaceDim` for de-emphasized backgrounds.

### Accent Roles & Fixed Colors

- Deliberately utilize contrast between `Primary`, `Secondary`, and `Tertiary` (along with their `*Container` and `on*Container` counterparts) on the same screen to distinguish primary actions from secondary tasks.

- **Fixed Roles (`primaryFixed`, `primaryFixedDim`, `onPrimaryFixed`, `onPrimaryFixedVariant` — and their `secondary`/`tertiary` counterparts):** Maintain the exact same bright, saturated tone across both Light and Dark themes. Ideal for expressive elements and cards requiring consistent brand identity.

---

## 6. Specification of 14 New and Updated M3 Expressive Components

When generating UI code, strictly follow the new component specifications and deprecations:

### 1. Button Groups *(NEW COMPONENT)*

- **Variants:** `Standard button group` (independent buttons that react to touch by shifting width) and `Connected button group` (segmented unified shape with internal dividers).

- **DEPRECATION:** **`Connected button group` completely replaces `Segmented button`**, which is deprecated in M3 Expressive.

- **Behavior:** Pressing or selecting an item triggers a spring shape morph (`fast spatial spring`) and dynamic width expansion that gently pushes neighboring buttons (*bump effect*).

- **Sizes:** Supports all 5 button sizes (`XS`, `S`, `M`, `L`, `XL`) across `single-select` and `multi-select` modes.

### 2. Split Button *(NEW COMPONENT)*

- Composed of two joined segments: a leading button (*Leading button* — performs the default action; contains an icon, text, or both) and a trailing button (*Trailing button* — displays a dropdown chevron/menu icon to reveal contextual options).

- Opening the menu causes the trailing button to morph its shape and rotate its icon.

### 3. Toolbars *(NEW COMPONENT — Replaces Bottom App Bar)*

- **DEPRECATION:** The classic `Bottom app bar` is no longer recommended; replace it with `Toolbar`.

- **Two Variants:**

  1. **Docked toolbar:** Spans 100% of the screen width along the bottom edge. Used for global actions. **Must use straight corners (`0dp`)** — rounded corners are forbidden on this container. Do not pair with a bottom `Navigation bar`.

  2. **Floating toolbar:** Floats above content (horizontally or vertically) with a minimum `16dp` window margin. Used for page-level contextual actions. Features a fully rounded container (`Full`).

- **Floating Toolbar Design Rules:**

  - **Square filled icon buttons are strictly forbidden** inside a `Floating toolbar` to avoid visual clipping with the rounded container.

  - Can be paired alongside a single `FAB` for the primary screen action.

  - On scroll, it can remain persistent, pin off-screen, OR morph/collapse into a single `FAB` (never combine off-screen exit and FAB collapse simultaneously).

### 4. FAB Menu *(NEW COMPONENT — Replaces Speed Dial)*

- **DEPRECATION:** Replaces the legacy *Speed Dial* pattern and stacked small FABs (*stacked small FABs*).

- Expands from a standard `FAB` (any size) to reveal **2 to 6 related actions** (each item must feature both a text label and an icon, matching `Medium` button height).

- The trigger `FAB` transforms its top trailing corner into a circular close button (`Close button`) with a fixed size of `56dp`.

- **Constraints:**

  - **Never launch a `FAB Menu` from an `Extended FAB`**.

  - **Never use a `FAB Menu` when the `FAB` is docked to a `Floating toolbar` or `Navigation rail`**.

- **Color Roles:** `Primary`, `Secondary`, `Tertiary` (match the palette to the base trigger FAB).

### 5. Loading Indicator *(NEW COMPONENT)*

- Designed for short, indeterminate wait states and pull-to-refresh gestures.

- Uses fluid shape morphing across the 35 Material shapes alongside continuous rotation.

- **Dimensions:** Default `48dp`, scalable between `24dp` (e.g., inside buttons) and `240dp` (large displays).

### 6. Common Buttons *(UPDATED)*

- **5 Height Sizes:**

  - `Extra Small (XS)` — `32dp` (must maintain a minimum touch target of `48x48dp`)

  - `Small (S)` — `40dp` *(Default base size)*

  - `Medium (M)` — `56dp`

  - `Large (L)` — `96dp`

  - `Extra Large (XL)` — `136dp`

- **2 Resting Shapes:** `Round` (`Full` radius) and `Square` (radius determined by size, e.g., `12dp` for `S`).

- **2 Interaction Modes:** `Default button` and `Toggle button` (note: `Text button` cannot be used as a `Toggle`).

- **5 Color Styles:** `Elevated`, `Filled` (default), `Tonal`, `Outlined`, `Text`.

### 7. Icon Buttons *(UPDATED)*

- **5 Sizes:** `XS`, `S`, `M`, `L`, `XL`.

- **3 Width Variants:** `Narrow`, `Default` (square/circular), `Wide`.

- Supports `Round` and `Square` shapes with interactive press and selection morphing.

### 8. FAB and Extended FAB *(UPDATED)*

- Available in `Small`, `Medium`, and `Large`, scaled proportionally according to the active `Window Size Class`.

### 9. App Bars *(UPDATED — Renamed from Top App Bar)*

- **DEPRECATION:** Classic `Medium` and `Large` variants are deprecated. Replace them with **`Medium flexible`** and **`Large flexible`**.

- **4 Official Variants:**

  1. `Search app bar` — Integrated search bar (`Body large` text), supports interior and exterior action icons.

  2. `Small` — Compact app bar (title: `Title large`, subtitle: `Label medium`), no text wrapping.

  3. `Medium flexible` — Expanded bar (title: `Headline medium`, subtitle: `Label large`), supports up to 2-line title wrapping, collapses to `Small` on scroll.

  4. `Large flexible` — Expressive hero bar (title: `Display small`, subtitle: `Title medium`), up to 2-line title wrapping.

- All variants support leading or centered alignment, an optional subtitle (`Subtitle`), and a single prominent `Filled icon button` in the action slot. No elevation shadow on scroll — separation is achieved through surface container color shifts.

### 10. Progress Indicators *(UPDATED)*

- `Linear` and `Circular` variants support a **Wavy (Waveform)** style with customizable amplitude and wavelength (suited for extended tasks or media playback), along with increased track thickness options.

- The `Circular` variant scales from `24dp` to `240dp`.

### 11. Sliders *(UPDATED)*

- **3 Variants:** `Standard`, `Centered` (zero point centered), `Range` (dual handles).

- **5 Track Heights:** `XS`, `S`, `M`, `L`, `XL`.

- **Orientation:** Horizontal and **Vertical**.

- Supports inset track icons (`Inset icons`).

### 12. Navigation Bar *(UPDATED)*

- Supports flexible item layouts: classic stacked arrangement (icon above label) on compact screens, and side-by-side arrangement (icon beside label) on wider viewports.

### 13. Navigation Rail *(UPDATED)*

- Supports smooth expansion from a compact rail (`Collapsed`) to a wide rail with full labels (`Expanded`), replacing the need for an independent `Navigation drawer` in most layouts.

---

## 7. Quality & Accessibility Checklist (Agent Enforced Rules)

Before completing UI generation or code reviews, verify:

- [ ] **No Deprecated Components:** Verify no occurrences of `SegmentedButton` (replace with `ConnectedButtonGroup`), legacy `BottomAppBar` (replace with `DockedToolbar` or `FloatingToolbar`), legacy `MediumTopAppBar`/`LargeTopAppBar` (replace with `MediumFlexible` / `LargeFlexible`), or *Speed Dial* (replace with `FABMenu`).

- [ ] **Accurate Motion Physics:** Verify that spatial animations use `spatial` tokens (with overshoot) and color/opacity animations use `effects` tokens (strictly no overshoot / critical damping).

- [ ] **Semantic Tokens Over Hardcoded Values:** Verify that all colors, corner radii (`none` -> `extra-extra-large`, `full`), and type styles (`Baseline` and `Emphasized`) reference official M3 tokens.

- [ ] **Contrast and Accessibility:**

  - Minimum touch target for all interactive elements (including `XS` and `S` buttons) is **48x48dp (`48x48px`)**.

  - Text-to-background contrast ratio meets at least **4.5:1**, with container/outline contrast meeting at least **3:1**.

  - Layout supports up to **200% text scaling** without truncation (allow multi-line wrapping in `Medium/Large flexible app bar`, avoid fixed item widths in `FAB Menu`).

  - All spring and waveform animations (`Wavy progress indicator`, `Shape morph`) honor the system `prefers-reduced-motion` flag (switching to short `effects` transitions or instant state changes when active).

- [ ] **Expressive Moderation:** Confirm the view uses a maximum of 1–2 "Hero Moments" per screen to preserve clear information hierarchy.

---

## 8. Supplementary Resources

Depending on the project's technology stack, load the appropriate file from the `resources/` directory before generating code:

- **Web (HTML / CSS / React / Vue / Angular / Tailwind):** Load `resources/tokens.css` to use the exact CSS variable values (`--md-sys-motion-spring-*`, `--md-sys-shape-corner-*`, `--md-sys-typescale-*`, `--md-sys-color-surface-container-*`) and `@media (prefers-reduced-motion: reduce)` rules.

- **Android (Jetpack Compose / Kotlin Multiplatform):** Load `resources/ExpressiveTheme.kt` to configure `MaterialExpressiveTheme`, `MotionScheme.expressive()`, `ExpressiveExtendedShapes`, `EmphasizedTypography`, and new components from the `@ExperimentalMaterial3ExpressiveApi` API.

---

## 9. Automated Code Validation (`scripts/validate_m3_expressive.py`)

After generating or modifying UI files (`.kt`, `.css`, `.scss`, `.tsx`, `.jsx`, `.vue`, `.html`), **always run the validation script** to ensure the code contains no deprecated components or incorrect motion curves:

```bash

python3 .antigravity/skills/material-3-expressive/scripts/validate_m3_expressive.py <path_to_directory_or_file>

```

10. ---

## 3. Complete Structure of Your Skill in Antigravity

After adding all files, your skill directory is fully complete and compliant with the **Agent Skills** architecture standard in Google Antigravity:

```text

.antigravity/

└── skills/

    └── material-3-expressive/

        ├── SKILL.md                        # Main instructions, 7 tactics, 14-component specification, and rules

        ├── resources/

        │   ├── tokens.css                  # CSS variables, Web spring curves, typography and shape scales

        │   └── ExpressiveTheme.kt          # Jetpack Compose configuration, MotionScheme, and component patterns

        └── scripts/

            └── validate_m3_expressive.py   # Automated linter/code auditor for M3 Expressive

```

