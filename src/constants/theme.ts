import type { CSSProperties } from 'react'
import type { ThemeTokens } from './types'

export const theme: ThemeTokens = {
  colors: {
    background: '#eef7f9',
    surface: '#ffffff',
    surfaceSoft: '#dcebf2',
    text: '#24323a',
    muted: '#617682',
    heading: '#102d42',
    line: '#c2d8e3',
    dark: '#102d42',
    darkSoft: '#24647f',
    accent: '#9fd3f1',
    accentSoft: '#d8edf8',
    sale: '#c65f50',
  },
  radii: {
    card: '8px',
    control: '8px',
    pill: '999px',
  },
  shadows: {
    card: '0 18px 50px rgba(16, 45, 66, 0.12)',
    drawer: '0 24px 70px rgba(16, 45, 66, 0.26)',
  },
  layout: {
    container: '1240px',
  },
}

export function themeStyle() {
  return {
    '--color-background': theme.colors.background,
    '--color-surface': theme.colors.surface,
    '--color-surface-soft': theme.colors.surfaceSoft,
    '--color-text': theme.colors.text,
    '--color-muted': theme.colors.muted,
    '--color-heading': theme.colors.heading,
    '--color-line': theme.colors.line,
    '--color-dark': theme.colors.dark,
    '--color-dark-soft': theme.colors.darkSoft,
    '--color-accent': theme.colors.accent,
    '--color-accent-soft': theme.colors.accentSoft,
    '--color-sale': theme.colors.sale,
    '--radius-card': theme.radii.card,
    '--radius-control': theme.radii.control,
    '--radius-pill': theme.radii.pill,
    '--shadow-card': theme.shadows.card,
    '--shadow-drawer': theme.shadows.drawer,
    '--container': theme.layout.container,
  } as CSSProperties
}
