# Google Sans Flex w Material 3 Expressive

Przewodnik integracji zmiennej czcionki **Google Sans Flex** z systemem projektowania **Material 3 Expressive**.

---

## 1. Ośmiostopniowa przestrzeń projektowa Google Sans Flex (6 osi zmiennych)

Repozytorium [googlefonts/googlesans-flex](https://github.com/googlefonts/googlesans-flex) definiuje zaawansowany krój bezszeryfowy oparty na 6 ciągłych osiach OpenType:

| Oś | Pełna nazwa | Zakres | Domyślnie | Rola w interfejsie |
|:---|:---|:---:|:---:|:---|
| **`wght`** | Weight | `1` – `1000` | `400` | Hierarchia ważności (od cienkich linii po potężne akcenty Display). |
| **`wdth`** | Width | `25` – `151` | `100` | Płynne dopasowanie do szerokości kontenera/ekranu (od ultra-condensed po wide). |
| **`slnt`** | Slant | `-10` – `0` | `0` | Dynamiczne pochylenie dla cytatów, stanów wyróżnienia i kursywy. |
| **`opsz`** | Optical Size | `1` – `144` | `18` | Zmiana proporcji i grubości detali w zależności od wielkości tekstu na ekranie. |
| **`GRAD`** | Grade | `0` – `100` | `0` | **Klucz M3:** Zwiększa optyczną grubość tekstu bez zmiany metryki i bez rozpychania układu! |
| **`ROND`** | Roundness | `0` – `100` | `0` | **Klucz M3 Expressive:** Zaokrągla końcówki i narożniki liter, harmonizując z kształtami komponentów. |

---

## 2. Synergia z wytycznymi Material 3 Expressive

Zgodnie z filozofią **Material 3 Expressive** typografia jest aktywnym elementem przekazu nastroju, hierarchii oraz płynności przestrzennej.

### A. ROND (Roundness) i ciągłość kształtów (Shape Continuity)
Material 3 Expressive wykorzystuje zróżnicowany promień zaokrągleń: od subtelnych kart (`--md-shape-card`), przez squircles (`--md-shape-squircle`), aż po pigułki (`--md-shape-pill`).
* **W pigułkach i chipach (`pill`, `badge`, `action-chip`)**: ustawienie `'ROND' 100` powoduje, że litery zyskują zaokrąglone końcówki, które idealnie rezonują z obłym kształtem przycisku.
* **W nagłówkach Hero / Display**: `'ROND' 80..100` nadaje tytułom przyjazny, nowoczesny, ludzki charakter (mniej technokratyczny, bardziej organiczny).
* **W gęstym tekście akapitowym**: `'ROND' 0..50` zapewnia optymalną czytelność bez rozmywania geometrii znaków.

### B. GRAD (Grade) – kompensacja Dark Mode i stanów Hover
Jednym z najczęstszych problemów w UI jest tzw. "text jumping" przy najechaniu kursorem (gdy zmiana `font-weight: 500` na `600` zmienia szerokość tekstu i powoduje drganie sąsiadujących elementów) oraz rozmycie na ciemnym tle (halacja).
* **W trybie ciemnym (Dark Mode)**:
  ```css
  html[data-theme="dark"] {
    --font-grad: 50; /* lub 60 dla optycznej kompensacji kontrastu */
  }
  ```
* **W stanach interaktywnych (Hover / Focus)**:
  Zamiast zmieniać wagę `wght` (co przesuwa tekst), zwiększamy `GRAD` (np. z `0` do `40`), uzyskując wyrazistszy tekst bez przestawiania layoutu.

### C. Responsywna adaptacja szerokości (Width `wdth`)
Material 3 definiuje punkty przerwania (Compact, Medium, Expanded). Oś `wdth` pozwala uniknąć łamania słów na telefonach:
* **Desktop (Expanded)**: `'wdth' 104..108` dla imponujących, szerokich nagłówków.
* **Mobile (Compact, < 600px)**: `'wdth' 90..95` dla zachowania tego samego rozmiaru fontu (`font-size`) bez ryzyka obcinania lub przenoszenia pojedynczych wyrazów.

### D. Skala typograficzna M3 z Optical Size (`opsz`)
W Material 3 każda rola typograficzna otrzymuje dopasowaną wartość `opsz`:
* **Display Large/Medium**: `font-size: 45..57px; font-variation-settings: 'opsz' 56, 'wght' 800, 'ROND' 100;`
* **Headline Large/Medium**: `font-size: 28..36px; font-variation-settings: 'opsz' 36, 'wght' 700, 'ROND' 80;`
* **Title Large/Medium**: `font-size: 16..22px; font-variation-settings: 'opsz' 20, 'wght' 650, 'ROND' 60;`
* **Body Large/Medium**: `font-size: 14..16px; font-variation-settings: 'opsz' 16, 'wght' 400, 'ROND' 40;`
* **Label Large/Medium (Chips, Buttons)**: `font-size: 11..14px; font-variation-settings: 'opsz' 14, 'wght' 600, 'ROND' 80;`

---

## 3. Poprawny import i składnia CSS

Dla pełnej obsługi wszystkich 6 osi:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:GRAD,ROND,opsz,slnt,wdth,wght@0..100,0..100,8..144,-10..0,25..151,100..1000&display=swap" rel="stylesheet">
```

W CSS:
```css
:root {
  --font-family: 'Google Sans Flex', system-ui, -apple-system, sans-serif;
  --font-grad: 0;
}

html[data-theme="dark"] {
  --font-grad: 50; /* Kompensacja optyczna ciemnego tła */
}

/* Expressive Display Headline */
.hero-title {
  font-family: var(--font-family);
  font-variation-settings: 
    'wght' 850, 
    'wdth' 106, 
    'slnt' 0, 
    'ROND' 100, 
    'GRAD' var(--font-grad), 
    'opsz' 56;
}

/* Expressive Pill Button */
.m3-btn {
  font-family: var(--font-family);
  font-variation-settings: 
    'wght' 650, 
    'wdth' 96, 
    'ROND' 90, 
    'GRAD' var(--font-grad), 
    'opsz' 15;
}
```

