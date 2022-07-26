/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import {
    ThemeColors,
    ThemeFontSize,
    ThemeMetricsSizes,
    ThemeNavigationColors,
} from '@/Theme/theme.type'

/**
 * Colors
 */
export const Colors: ThemeColors = {
    // Example colors:
    transparent: 'rgba(0,0,0,0)',
    inputBackground: '#FFFFFF',
    success: '#28a745',
    error: '#dc3545',
    primary: '#2479C2',
    secondary: '#FFB339',
    background: '#EDF4FA',
    text: '#143057',
    white: '#ffffff',
    black: '#000000',
    basicShadow: '#1A32529A',
    inputText: '#143057',
    dateContainer: '#071D2F',
    articleCard: '#143057',
}

export const NavigationColors: Partial<ThemeNavigationColors> = {
    primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize: ThemeFontSize = {
    small: 14,
    regular: 17,
    medium: 20,
    large: 24,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes: ThemeMetricsSizes = {
    tiny,
    small,
    regular,
    large,
}
