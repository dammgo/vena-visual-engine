import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      void: '#030712',      // Negro abisal (Sovereign Base)
      cobalt: '#00d4ff',    // VENA Intelligence (Cyan Electric)
      armor: '#1e293b',     // Gris blindaje (Border/Infrastructure)
      muted: '#64748b',     // Texto secundario
      bos: {
        pink: '#E91E63',    // El pulso erpbsg (Legado)
        white: '#f8fafc',
      },
    },
    fontFamily: {
      brand: 'Montserrat, sans-serif',    // Autoridad
      ui: 'Inter, sans-serif',            // Operación
      mono: 'JetBrains Mono, monospace',  // Precisión técnica
    },
    borderRadius: {
      'bos-sm': '2px',
      'bos-md': '4px',
      'bos-lg': '6px',
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        brand: 'Montserrat:400,700,900',
        ui: 'Inter:400,500,600,700',
        mono: 'JetBrains Mono:400,700',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: [
    // ESTRUCTURA CINEMÁTICA
    ['glass-armor', 'backdrop-blur-md bg-void/10 border border-armor/20'],
    ['text-glow', 'drop-shadow-[0_0_10px_currentColor]'],
    ['bos-surface', 'bg-white/3 backdrop-blur-lg border border-white/10 rounded-bos-sm shadow-none'],
    
    // SINTAXIS SOBERANA (Precisión Geométrica)
    ['precision-bracket', 'relative before:content-[""] before:absolute before:-top-1 before:-left-1 before:w-2 before:h-2 before:border-t-1 before:border-l-1 before:border-cobalt after:content-[""] after:absolute after:-bottom-1 after:-right-1 after:w-2 after:h-2 after:border-b-1 after:border-r-1 after:border-cobalt'],
    ['infra-grid', 'relative before:content-[""] before:absolute before:inset-0 before:opacity-0 before:pointer-events-none before:[background-image:radial-gradient(#f8fafc_1px,transparent_1px)] before:[background-size:10px_10px] focus-within:before:opacity-10 before:transition-opacity'],
    ['synapse-line', 'h-1 bg-white/5 relative overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-cobalt after:to-transparent after:animate-pulse'],
    ['text-authority', 'font-brand font-black uppercase tracking-widest text-white'],
    
    // PROTOCOLOS DE CAPTURA (VVE Standard)
    ['bos-input', 'bg-void/50 border border-armor/50 px-4 py-3 font-mono text-sm focus:border-cobalt/50 transition-all outline-none focus:precision-bracket'],
    ['bos-checkbox', 'w-4 h-4 border border-armor/50 rounded-bos-sm bg-void/50 appearance-none cursor-pointer checked:bg-cobalt/20 checked:border-cobalt checked:shadow-[0_0_10px_rgba(0,212,255,0.3)] transition-all relative after:content-[""] after:absolute after:inset-0 after:bg-cobalt after:opacity-0 checked:after:opacity-10'],
    ['bos-radio', 'w-4 h-4 border border-armor/50 rounded-full bg-void/50 appearance-none cursor-pointer checked:border-cobalt transition-all relative after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-0 after:h-0 checked:after:w-2 checked:after:h-2 after:bg-cobalt after:rounded-full after:transition-all'],
  ],
  rules: [
    ['animate-scan', { animation: 'scan 2s linear infinite' }],
  ],
})
