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
        pink: '#E91E63',    // Legado erpbsg
        white: '#f8fafc',
      },
    },
    fontFamily: {
      brand: 'Montserrat, sans-serif',
      ui: 'Inter, sans-serif',
      mono: 'JetBrains Mono, monospace',
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
    ['glass-armor', 'backdrop-blur-md bg-void/10 border border-armor/20'],
    ['text-glow', 'drop-shadow-[0_0_10px_currentColor]'],
    ['bos-surface', 'bg-white/3 backdrop-blur-lg border border-white/10 rounded-bos-sm shadow-none'],
    ['text-authority', 'font-brand font-black uppercase tracking-widest text-white'],
    
    // PROTOCOLOS DE CAPTURA (VVE Precision)
    ['bos-input', 'bg-void border border-armor/50 px-4 py-3 font-mono text-sm focus:border-cobalt/50 transition-all outline-none'],
  ],
  rules: [
    ['animate-scan', { animation: 'scan 2s linear infinite' }],
  ],
})
