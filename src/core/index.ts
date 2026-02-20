import { presetUno, presetWebFonts } from 'unocss'

/**
 * VENA Visual Engine - Core Infrastructure
 * Shared fonts and base UnoCSS presets for the entire ecosystem.
 */

export const coreTheme = {
  colors: {
    bos: {
      slate: '#020617',
      pink: '#E91E63',
      indigo: '#818cf8',
      white: '#f8fafc',
      gray: '#94a3b8',
      cobalt: '#00d4ff',
      void: '#0d1117',
      surface: '#161b22',
      armor: '#30363d',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    matrix: {
      green: '#00FF41',
      dark: '#0D0208',
    }
  }
}

export const corePresets = [
  presetUno(),
  presetWebFonts({
    provider: 'google',
    fonts: {
      brand: 'Montserrat:400,700,900',
      ui: 'Inter:400,500,600,700',
      mono: 'JetBrains Mono:400,700',
    },
  }),
]

/**
 * Shared Shortcuts (DNA Only)
 */
export const coreShortcuts = [
  ['bos-surface', 'bg-bos-surface/40 backdrop-blur-md border border-bos-armor/30 rounded-bos-sm shadow-none'],
  ['precision-bracket', 'relative before:content-[""] before:absolute before:-top-1 before:-left-1 before:w-2 before:h-2 before:border-t-1 before:border-l-1 before:border-bos-pink after:content-[""] after:absolute after:-bottom-1 after:-right-1 after:w-2 after:h-2 after:border-b-1 after:border-r-1 after:border-bos-pink'],
  ['infra-grid', 'relative before:content-[""] before:absolute before:inset-0 before:opacity-0 before:pointer-events-none before:[background-image:radial-gradient(#f8fafc_1px,transparent_1px)] before:[background-size:10px_10px] focus-within:before:opacity-10 before:transition-opacity'],
  ['synapse-line', 'h-1 bg-white/5 relative overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-bos-pink after:to-transparent after:animate-pulse'],
]

/**
 * Reality Category Preflights (The Elastic Root)
 */
export const realityPreflights = `
  :root {
    /* Safe Default Multipliers */
    --vve-u-font: 1rem;
    --vve-u-gap: 1rem;
  }

  /* Reality: App (The Vault) - Height Priority */
  .vve-reality-app {
    --vve-u-font: clamp(0.85rem, 4.5vh, 1.15rem);
    --vve-u-gap: clamp(0.5rem, 2vh, 1.5rem);
  }

  /* Reality: Content (The Atlas) - Width/Reading Priority */
  .vve-reality-content {
    --vve-u-font: clamp(1rem, 1.2vw, 1.25rem);
    --vve-u-gap: clamp(1rem, 2vw, 2.5rem);
  }

  /* Reality: Landing (The Stage) - Aggressive Impact */
  .vve-reality-landing {
    --vve-u-font: clamp(1.1rem, 2vh + 1vw, 1.5rem);
    --vve-u-gap: clamp(1.5rem, 4vh, 4rem);
  }
`
