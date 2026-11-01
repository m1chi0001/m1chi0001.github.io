#!/usr/bin/env python3
"""
Material 3 Expressive — Static Code Validator for Google Antigravity
Scans Jetpack Compose (.kt) and Web (.css, .scss, .tsx, .jsx, .vue, .html) files for:
1. Deprecated M3 components (SegmentedButton, BottomAppBar, Medium/LargeTopAppBar)
2. Legacy time-based animations (tween, ease-in-out, linear) instead of M3 Spring tokens
3. Spatial springs mistakenly applied to opacity/color/background (causes overshoot flashing)
4. Missing @media (prefers-reduced-motion: reduce) in stylesheets with spring transitions
5. Non-Expressive typography anti-patterns (e.g., text-transform: uppercase)
"""

import argparse
import json
import os
import re
import sys
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import List, Set

IGNORE_DIRS: Set[str] = {
    ".git", ".gradle", ".idea", ".antigravity", ".agent", ".agents",
    "build", "dist", "node_modules", ".next", "out", "venv", "__pycache__"
}

KOTLIN_EXTS: Set[str] = {".kt", ".kts"}
STYLE_EXTS: Set[str] = {".css", ".scss"}
WEB_COMP_EXTS: Set[str] = {".tsx", ".jsx", ".vue", ".svelte", ".html"}


@dataclass
class Issue:
    rule_id: str
    severity: str  # "ERROR" | "WARNING"
    file: str
    line: int
    message: str
    suggestion: str
    snippet: str


# ==============================================================================
# REGUŁY DLA JETPACK COMPOSE / KOTLIN
# ==============================================================================
KOTLIN_LINE_RULES = [
    {
        "id": "M3E-COMP-001",
        "severity": "ERROR",
        "pattern": re.compile(
            r"\b(SegmentedButton|SingleChoiceSegmentedButtonRow|MultiChoiceSegmentedButtonRow)\b"
        ),
        "message": "Wykryto wycofany komponent SegmentedButton.",
        "suggestion": "Zastąp go komponentem ButtonGroup / ConnectedButtonGroup z przyciskami ToggleButton (M3 Expressive)."
    },
    {
        "id": "M3E-COMP-002",
        "severity": "ERROR",
        "pattern": re.compile(r"\bBottomAppBar\s*\("),
        "message": "Wykryto wycofany komponent BottomAppBar.",
        "suggestion": "Zastąp go komponentem HorizontalFloatingToolbar, VerticalFloatingToolbar lub DockedToolbar."
    },
    {
        "id": "M3E-COMP-003",
        "severity": "ERROR",
        "pattern": re.compile(r"\b(MediumTopAppBar|LargeTopAppBar)\s*\("),
        "message": "Wykryto przestarzały wariant paska MediumTopAppBar / LargeTopAppBar.",
        "suggestion": "Użyj elastycznych wariantów M3 Expressive: MediumFlexibleTopAppBar lub LargeFlexibleTopAppBar."
    },
    {
        "id": "M3E-MOTION-001",
        "severity": "WARNING",
        "pattern": re.compile(r"\btween\s*\("),
        "message": "Wykryto sztywną animację czasową tween() zamiast fizyki sprężyn M3 Expressive.",
        "suggestion": "Użyj MaterialTheme.motionScheme.fastSpatialSpec() / defaultSpatialSpec() (dla ruchu/rozmiaru) lub fastEffectsSpec() (dla koloru/alfa)."
    },
    {
        "id": "M3E-MOTION-002",
        "severity": "ERROR",
        "pattern": re.compile(
            r"animateColorAsState\s*\([^)]*(fastSpatialSpec|defaultSpatialSpec|slowSpatialSpec)"
        ),
        "message": "Użyto sprężyny przestrzennej (SpatialSpec) do animacji koloru.",
        "suggestion": "Sprężyny Spatial posiadają odbicie (overshoot < 1.0), co powoduje błędne błyskanie kolorów. Użyj fastEffectsSpec() lub defaultEffectsSpec()."
    },
    {
        "id": "M3E-THEME-001",
        "severity": "WARNING",
        "pattern": re.compile(r"\bMaterialTheme\s*\("),
        "message": "Użyto standardowego wrappera MaterialTheme() zamiast MaterialExpressiveTheme().",
        "suggestion": "Zastosuj MaterialExpressiveTheme(motionScheme = MotionScheme.expressive(), ...) w głównym komponencie motywu."
    },
]

# ==============================================================================
# REGUŁY DLA WEB (CSS / SCSS / TSX / JSX / VUE / HTML)
# ==============================================================================
WEB_LINE_RULES = [
    {
        "id": "M3E-WEB-COMP-001",
        "severity": "ERROR",
        "pattern": re.compile(
            r"(<md-segmented-button|\bSegmentedButton\b|md-bottom-app-bar)"
        ),
        "message": "Wykryto wycofany komponent Web (SegmentedButton lub BottomAppBar).",
        "suggestion": "Zastąp go wzorcem Connected Button Group lub Floating/Docked Toolbar zgodnie ze specyfikacją M3 Expressive."
    },
    {
        "id": "M3E-WEB-MOTION-001",
        "severity": "WARNING",
        "pattern": re.compile(
            r"transition\s*:[^;]*\b(ease|ease-in|ease-out|ease-in-out|linear)\b"
        ),
        "message": "Wykryto klasyczną krzywą czasową CSS zamiast tokenu sprężyny M3 Expressive.",
        "suggestion": "Użyj zmiennej var(--md-sys-motion-spring-fast-spatial) (dla geometrii) lub var(--md-sys-motion-spring-fast-effects) (dla koloru i opacity)."
    },
    {
        "id": "M3E-WEB-MOTION-002",
        "severity": "ERROR",
        "pattern": re.compile(
            r"(opacity|background-color|color|box-shadow)\s+[^,;]*--md-sys-motion-spring-(fast|default|slow)-spatial"
        ),
        "message": "Przypisano sprężynę przestrzenną (-spatial) do właściwości wizualnej (kolor/opacity/cień).",
        "suggestion": "Tokeny -spatial mają wartość krzywych przekraczającą 1.0 (overshoot). Dla koloru i przezroczystości używaj wyłącznie tokenów -effects."
    },
    {
        "id": "M3E-WEB-TYPE-001",
        "severity": "WARNING",
        "pattern": re.compile(r"text-transform\s*:\s*uppercase"),
        "message": "Wykryto wymuszenie wielkich liter (text-transform: uppercase).",
        "suggestion": "M3 Expressive wymaga stosowania Sentence case we wszystkich przyciskach, etykietach i nagłówkach. Zamiast wersalików użyj wagi Emphasized."
    },
]


def scan_file(filepath: Path, root_dir: Path) -> List[Issue]:
    issues: List[Issue] = []
    ext = filepath.suffix.lower()
    rel_path = str(filepath.relative_to(root_dir))

    try:
        content = filepath.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return issues

    lines = content.splitlines()

    # 1. Skanowanie plików Kotlin / Jetpack Compose
    if ext in KOTLIN_EXTS:
        for idx, line in enumerate(lines, start=1):
            stripped = line.strip()
            if stripped.startswith("//") or stripped.startswith("*"):
                continue
            for rule in KOTLIN_LINE_RULES:
                if rule["pattern"].search(line):
                    issues.append(
                        Issue(
                            rule_id=rule["id"],
                            severity=rule["severity"],
                            file=rel_path,
                            line=idx,
                            message=rule["message"],
                            suggestion=rule["suggestion"],
                            snippet=stripped[:120],
                        )
                    )

    # 2. Skanowanie plików Web (CSS, SCSS, TSX, JSX, Vue, HTML)
    elif ext in STYLE_EXTS or ext in WEB_COMP_EXTS:
        has_animations = False
        has_reduced_motion = "prefers-reduced-motion" in content

        for idx, line in enumerate(lines, start=1):
            stripped = line.strip()
            if stripped.startswith("//") or stripped.startswith("/*") or stripped.startswith("*"):
                continue

            if re.search(r"\b(transition|animation)\s*:", line) or "--md-sys-motion-spring-" in line:
                has_animations = True

            for rule in WEB_LINE_RULES:
                if rule["pattern"].search(line):
                    issues.append(
                        Issue(
                            rule_id=rule["id"],
                            severity=rule["severity"],
                            file=rel_path,
                            line=idx,
                            message=rule["message"],
                            suggestion=rule["suggestion"],
                            snippet=stripped[:120],
                        )
                    )

        # Sprawdzenie obecności @media (prefers-reduced-motion: reduce) w arkuszach stylów
        if ext in STYLE_EXTS and has_animations and not has_reduced_motion:
            issues.append(
                Issue(
                    rule_id="M3E-WEB-A11Y-001",
                    severity="WARNING",
                    file=rel_path,
                    line=1,
                    message="Arkusz stylów definiuje animacje/przejścia, ale nie obsługuje prefers-reduced-motion.",
                    suggestion="Dodaj blok @media (prefers-reduced-motion: reduce), który zastępuje tokeny -spatial tokenami -effects lub skraca czas przejścia.",
                    snippet="Brak reguły @media (prefers-reduced-motion: reduce) w pliku.",
                )
            )

    return issues


def collect_files(target_path: Path) -> List[Path]:
    if target_path.is_file():
        return [target_path]

    collected: List[Path] = []
    valid_exts = KOTLIN_EXTS | STYLE_EXTS | WEB_COMP_EXTS

    for root, dirs, files in os.walk(target_path):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        for file in files:
            p = Path(root) / file
            if p.suffix.lower() in valid_exts:
                collected.append(p)

    return sorted(collected)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Walidator zgodności kodu z oficjalną specyfikacją Material 3 Expressive."
    )
    parser.add_argument(
        "path",
        nargs="?",
        default=".",
        help="Ścieżka do katalogu projektu lub pojedynczego pliku (domyślnie: bieżący katalog)."
    )
    parser.add_argument(
        "--format",
        choices=["text", "json"],
        default="text",
        help="Format wyjściowy raportu (text lub json)."
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Traktuj ostrzeżenia (WARNING) jako błędy blokujące (kod wyjścia 1)."
    )

    args = parser.parse_args()
    target = Path(args.path).resolve()

    if not target.exists():
        print(f"Błąd: Ścieżka '{target}' nie istnieje.", file=sys.stderr)
        return 2

    root_dir = target if target.is_dir() else target.parent
    files = collect_files(target)

    all_issues: List[Issue] = []
    for f in files:
        all_issues.extend(scan_file(f, root_dir))

    errors_count = sum(1 for i in all_issues if i.severity == "ERROR")
    warnings_count = sum(1 for i in all_issues if i.severity == "WARNING")

    if args.format == "json":
        report = {
            "summary": {
                "scanned_files": len(files),
                "total_issues": len(all_issues),
                "errors": errors_count,
                "warnings": warnings_count,
                "passed": errors_count == 0 and (not args.strict or warnings_count == 0),
            },
            "issues": [asdict(i) for i in all_issues],
        }
        print(json.dumps(report, indent=2, ensure_ascii=False))
    else:
        print("=" * 72)
        print(f" Raport Audytu Material 3 Expressive (Przeskanowano plików: {len(files)})")
        print("=" * 72)

        if not all_issues:
            print(" [OK] Nie wykryto żadnych naruszeń specyfikacji Material 3 Expressive!")
        else:
            for issue in all_issues:
                badge = "[BŁĄD]" if issue.severity == "ERROR" else "[OSTRZEŻENIE]"
                print(f"\n{badge} {issue.rule_id} -> {issue.file}:{issue.line}")
                print(f"  Problem   : {issue.message}")
                print(f"  Kod       : {issue.snippet}")
                print(f"  Poprawka  : {issue.suggestion}")

        print("\n" + "-" * 72)
        print(f" Podsumowanie: {errors_count} błędów (ERROR), {warnings_count} ostrzeżeń (WARNING)")
        print("-" * 72)

    if errors_count > 0 or (args.strict and warnings_count > 0):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())