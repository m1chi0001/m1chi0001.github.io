package com.example.designsystem.theme

import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ButtonGroup
import androidx.compose.material3.ExperimentalMaterial3ExpressiveApi
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.FloatingToolbarDefaults
import androidx.compose.material3.HorizontalFloatingToolbar
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.LoadingIndicator
import androidx.compose.material3.MaterialExpressiveTheme
import androidx.compose.material3.MaterialShapes
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.MotionScheme
import androidx.compose.material3.Shapes
import androidx.compose.material3.SplitButtonDefaults
import androidx.compose.material3.SplitButtonLayout
import androidx.compose.material3.Text
import androidx.compose.material3.ToggleButton
import androidx.compose.material3.Typography
import androidx.compose.material3.WavyProgressIndicator
import androidx.compose.material3.toShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

/**
 * 1. Rozszerzona skala promieni zaokrągleń M3 Expressive
 * Uzupełnia standardowy obiekt Shapes o nowe tokeny 20.dp, 32.dp i 48.dp.
 */
@Immutable
data class ExpressiveExtendedShapes(
    val largeIncreased: Shape = RoundedCornerShape(20.dp),
    val extraLargeIncreased: Shape = RoundedCornerShape(32.dp),
    val extraExtraLarge: Shape = RoundedCornerShape(48.dp)
)

val LocalExpressiveShapes = staticCompositionLocalOf { ExpressiveExtendedShapes() }

val M3ExpressiveShapes = Shapes(
    extraSmall = RoundedCornerShape(4.dp),
    small = RoundedCornerShape(8.dp),
    medium = RoundedCornerShape(12.dp),
    large = RoundedCornerShape(16.dp),
    extraLarge = RoundedCornerShape(28.dp)
)

/**
 * 2. Typografia Emphasized (15 wyróżnionych stylów komplementarnych do Baseline)
 */
@Immutable
data class EmphasizedTypography(
    val displayLarge: TextStyle = TextStyle(fontSize = 57.sp, lineHeight = 64.sp, fontWeight = FontWeight.SemiBold, letterSpacing = (-0.25).sp),
    val displayMedium: TextStyle = TextStyle(fontSize = 45.sp, lineHeight = 52.sp, fontWeight = FontWeight.SemiBold),
    val displaySmall: TextStyle = TextStyle(fontSize = 36.sp, lineHeight = 44.sp, fontWeight = FontWeight.SemiBold),
    val headlineLarge: TextStyle = TextStyle(fontSize = 32.sp, lineHeight = 40.sp, fontWeight = FontWeight.SemiBold),
    val headlineMedium: TextStyle = TextStyle(fontSize = 28.sp, lineHeight = 36.sp, fontWeight = FontWeight.SemiBold),
    val headlineSmall: TextStyle = TextStyle(fontSize = 24.sp, lineHeight = 32.sp, fontWeight = FontWeight.SemiBold),
    val titleLarge: TextStyle = TextStyle(fontSize = 22.sp, lineHeight = 28.sp, fontWeight = FontWeight.SemiBold),
    val titleMedium: TextStyle = TextStyle(fontSize = 16.sp, lineHeight = 24.sp, fontWeight = FontWeight.Bold, letterSpacing = 0.15.sp),
    val titleSmall: TextStyle = TextStyle(fontSize = 14.sp, lineHeight = 20.sp, fontWeight = FontWeight.Bold, letterSpacing = 0.1.sp),
    val bodyLarge: TextStyle = TextStyle(fontSize = 16.sp, lineHeight = 24.sp, fontWeight = FontWeight.SemiBold, letterSpacing = 0.5.sp),
    val bodyMedium: TextStyle = TextStyle(fontSize = 14.sp, lineHeight = 20.sp, fontWeight = FontWeight.SemiBold, letterSpacing = 0.25.sp),
    val bodySmall: TextStyle = TextStyle(fontSize = 12.sp, lineHeight = 16.sp, fontWeight = FontWeight.SemiBold, letterSpacing = 0.4.sp),
    val labelLarge: TextStyle = TextStyle(fontSize = 14.sp, lineHeight = 20.sp, fontWeight = FontWeight.Bold, letterSpacing = 0.1.sp),
    val labelMedium: TextStyle = TextStyle(fontSize = 12.sp, lineHeight = 16.sp, fontWeight = FontWeight.Bold, letterSpacing = 0.5.sp),
    val labelSmall: TextStyle = TextStyle(fontSize = 11.sp, lineHeight = 16.sp, fontWeight = FontWeight.Bold, letterSpacing = 0.5.sp)
)

val LocalEmphasizedTypography = staticCompositionLocalOf { EmphasizedTypography() }

/**
 * 3. Główny wrapper motywu Material 3 Expressive
 */
@OptIn(ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun AppExpressiveTheme(
    content: @Composable () -> Unit
) {
    MaterialExpressiveTheme(
        motionScheme = MotionScheme.expressive(), // Aktywuje fizykę sprężyn Spatial & Effects
        shapes = M3ExpressiveShapes,
        typography = Typography(),
        content = content
    )
}

/**
 * 4. Szybki dostęp do tokenów sprężyn wewnątrz własnych animacji Compose
 */
@OptIn(ExperimentalMaterial3ExpressiveApi::class)
object ExpressiveMotionSpecs {
    // Do animacji pozycji, rozmiaru, zaokrągleń narożników i morfingu (posiada lekki bounce)
    @Composable
    fun <T> fastSpatial(): FiniteAnimationSpec<T> = MaterialTheme.motionScheme.fastSpatialSpec()

    @Composable
    fun <T> defaultSpatial(): FiniteAnimationSpec<T> = MaterialTheme.motionScheme.defaultSpatialSpec()

    @Composable
    fun <T> slowSpatial(): FiniteAnimationSpec<T> = MaterialTheme.motionScheme.slowSpatialSpec()

    // Do animacji koloru, alfa/opacity i elewacji (damping = 1.0, BRAK overshootu)
    @Composable
    fun <T> fastEffects(): FiniteAnimationSpec<T> = MaterialTheme.motionScheme.fastEffectsSpec()

    @Composable
    fun <T> defaultEffects(): FiniteAnimationSpec<T> = MaterialTheme.motionScheme.defaultEffectsSpec()

    @Composable
    fun <T> slowEffects(): FiniteAnimationSpec<T> = MaterialTheme.motionScheme.slowEffectsSpec()
}

/**
 * 5. Wzorce użycia nowych komponentów M3 Expressive
 */
@OptIn(ExperimentalMaterial3ExpressiveApi::class)
@Composable
fun ExpressiveComponentsShowcase(
    selectedIndex: Int,
    onSelect: (Int) -> Unit,
    isMenuExpanded: Boolean,
    onToggleMenu: () -> Unit
) {
    // A. Connected Button Group (zastępuje wycofany SegmentedButton)
    ButtonGroup {
        val options = listOf("Dzień", "Tydzień", "Miesiąc")
        options.forEachIndexed { index, label ->
            ToggleButton(
                checked = selectedIndex == index,
                onCheckedChange = { onSelect(index) }
            ) {
                Text(
                    text = label,
                    style = if (selectedIndex == index) {
                        LocalEmphasizedTypography.current.labelLarge
                    } else {
                        MaterialTheme.typography.labelLarge
                    }
                )
            }
        }
    }

    // B. Split Button (przycisk główny + połączony przycisk rozwijania menu z morfingiem)
    SplitButtonLayout(
        leadingButton = {
            SplitButtonDefaults.LeadingButton(onClick = { /* Akcja główna */ }) {
                Text("Wyślij teraz")
            }
        },
        trailingButton = {
            SplitButtonDefaults.TrailingButton(
                checked = isMenuExpanded,
                onCheckedChange = { onToggleMenu() }
            ) {
                // Ikona obraca się automatycznie przy zmianie stanu checked
            }
        }
    )

    // C. Floating Toolbar sparowany z FAB (zastępuje klasyczny BottomAppBar)
    // UWAGA: Wewnątrz FloatingToolbar nie używamy kwadratowych przycisków ikon!
    Row(
        modifier = Modifier.padding(16.dp),
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        HorizontalFloatingToolbar(
            expanded = true,
            colors = FloatingToolbarDefaults.vibrantFloatingToolbarColors()
        ) {
            IconButton(onClick = { /* Akcja 1 */ }) { /* Icon */ }
            IconButton(onClick = { /* Akcja 2 */ }) { /* Icon */ }
        }
        FloatingActionButton(
            onClick = { /* Główna akcja kontekstowa */ },
            shape = MaterialShapes.Cookie9Sided.toShape() // Kształt z biblioteki 35 kształtów
        ) {
            /* Icon */
        }
    }

    // D. Loading Indicator & Wavy Progress Indicator
    LoadingIndicator()
    WavyProgressIndicator(progress = { 0.65f })
}