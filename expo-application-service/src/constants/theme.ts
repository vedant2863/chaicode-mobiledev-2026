import '@/global.css';

import { Platform } from 'react-native';

const zinc = {
  50: '#fafafa',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  800: '#27272a',
  900: '#18181b',
  950: '#09090b',
} as const;

const ocean = {
  300: '#5eead4',
  400: '#2dd4bf',
  500: '#14b8a6',
  600: '#0d9488',
  700: '#0f766e',
} as const;

export const Colors = {
  light: {
    text: zinc[50],
    background: zinc[950],
    backgroundElement: zinc[900],
    backgroundSelected: zinc[800],
    textSecondary: zinc[400],
    accent: ocean[400],
    accentMuted: ocean[600],
    border: zinc[700],
  },
  dark: {
    text: zinc[50],
    background: zinc[950],
    backgroundElement: zinc[900],
    backgroundSelected: zinc[800],
    textSecondary: zinc[400],
    accent: ocean[400],
    accentMuted: ocean[600],
    border: zinc[700],
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
