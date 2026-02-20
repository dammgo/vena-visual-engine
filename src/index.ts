import { definePreset, presetUno, presetWebFonts } from 'unocss'

export interface VenaOptions {
  /**
   * Visual Protocol to activate.
   * @default 'erpbsg'
   */
  protocol?: 'erpbsg' | 'dammgo' | 'vena' | 'kode-reboot'
}

export const presetVena = definePreset((options: VenaOptions = {}) => {
  const protocol = options.protocol || 'erpbsg'

  // --- 1. THEME DEFINITION (DNA) ---
  const theme = {
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
    },
    borderRadius: {
      'bos-sm': protocol === 'kode-reboot' ? '0px' : '2px',
      'bos-md': protocol === 'kode-reboot' ? '0px' : '4px',
      'bos-lg': protocol === 'kode-reboot' ? '0px' : '6px',
    }
  }

  // --- 2. SIGNATURE SHORTCUTS (SHARED CORE) ---
  const coreShortcuts: any[] = [
    ['bos-surface', 'bg-bos-surface/40 backdrop-blur-md border border-bos-armor/30 rounded-bos-sm shadow-none'],
    ['precision-bracket', 'relative before:content-[""] before:absolute before:-top-1 before:-left-1 before:w-2 before:h-2 before:border-t-1 before:border-l-1 before:border-bos-pink after:content-[""] after:absolute after:-bottom-1 after:-right-1 after:w-2 after:h-2 after:border-b-1 after:border-r-1 after:border-bos-pink'],
    ['infra-grid', 'relative before:content-[""] before:absolute before:inset-0 before:opacity-0 before:pointer-events-none before:[background-image:radial-gradient(#f8fafc_1px,transparent_1px)] before:[background-size:10px_10px] focus-within:before:opacity-10 before:transition-opacity'],
    ['synapse-line', 'h-1 bg-white/5 relative overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-bos-pink after:to-transparent after:animate-pulse'],
    ['bos-input-base', 'bos-surface infra-grid px-4 py-3 font-mono text-sm bg-transparent outline-none focus:precision-bracket transition-all placeholder:opacity-20'],
  ]

  // --- 3. PROTOCOL SPECIFIC SHORTCUTS ---
  const protocolShortcuts: Record<string, any[]> = {
    erpbsg: [
      ['erpbsg-card', 'bos-surface p-6 hover:border-bos-pink/30 transition-all duration-500'],
      ['erpbsg-input', 'w-full bg-bos-white border border-white/10 rounded-bos-sm px-6 py-4 text-bos-slate font-bold placeholder:text-bos-slate/30 focus:outline-none focus:ring-4 focus:ring-bos-pink/10 transition-all z-10 relative'],
      ['erpbsg-button', 'px-10 py-5 rounded-bos-sm bg-bos-pink text-bos-white font-brand font-900 uppercase tracking-[0.3em] text-[10px] hover:bg-bos-white hover:text-bos-pink transition-all duration-500 shadow-2xl relative overflow-hidden'],
      ['erpbsg-gradient-text', 'text-transparent bg-clip-text bg-gradient-to-r from-bos-pink to-bos-indigo'],
      ['erpbsg-input-compact', 'px-4 py-2 text-xs'],
      ['erpbsg-button-compact', 'px-6 py-3 text-[9px]'],
      
      // erpbsg Identity & Navigation
      ['erpbsg-button-manual', 'w-full group p-1 border-b border-white/[0.03] hover:border-bos-pink/30 transition-all duration-500 bg-transparent'],
      ['erpbsg-button-manual-content', 'flex items-center justify-between py-4 px-2'],
      ['erpbsg-button-manual-label', 'font-brand font-black text-[10px] text-bos-gray/40 uppercase tracking-widest group-hover:text-bos-white transition-colors'],
      ['erpbsg-button-manual-sub', 'font-ui text-[9px] text-bos-gray/20 uppercase tracking-wider group-hover:text-bos-gray/60 transition-colors'],
      ['erpbsg-button-manual-icon', 'w-8 h-8 rounded-full border border-white/[0.03] flex items-center justify-center text-bos-gray/20 group-hover:border-bos-pink/30 group-hover:bg-bos-pink/5 group-hover:text-bos-pink transition-all'],
      ['erpbsg-button-back', 'mb-12 flex items-center gap-3 text-bos-gray/40 hover:text-bos-white transition-all group bg-transparent border-none p-0 outline-none'],
      ['erpbsg-button-back-icon', 'w-6 h-6 rounded-full border border-white/[0.03] flex items-center justify-center text-bos-gray/20 group-hover:border-bos-pink/30 group-hover:text-bos-pink transition-all'],
      ['erpbsg-button-back-text', 'text-[10px] font-brand font-black uppercase tracking-[0.3em]'],
    ],
    dammgo: [
      ['dammgo-hero', 'font-brand font-900 text-8xl md:text-[12rem] tracking-tighter uppercase leading-[0.8]'],
    ],
    vena: [
      ['vena-monitor', 'bg-black border-[0.5px] border-bos-cobalt/20 p-4 font-mono text-[11px] text-bos-cobalt/80'],
      ['vena-pulse-line', 'h-[1px] bg-bos-cobalt/10 relative overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-bos-cobalt after:animate-scan'],
    ],
    'kode-reboot': [
      ['kode-terminal', 'bg-matrix-dark border border-matrix-green/30 p-8 font-mono text-matrix-green shadow-[0_0_20px_rgba(0,255,65,0.1)]'],
      ['kode-button', 'px-6 py-3 border border-matrix-green text-matrix-green font-mono uppercase tracking-widest hover:bg-matrix-green hover:text-matrix-dark transition-all'],
    ]
  }

  // --- 4. TYPOGRAPHY (ALTITUDE-AWARE) ---
  const typographyShortcuts: any[] = [
    // Triple Vertical Shielding Protocol
    ['bos-title-hero', 'font-brand font-900 text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-bos-white [@media(min-height:600px)]:text-6xl [@media(min-height:600px)]:xl:text-7xl [@media(min-height:850px)]:text-8xl [@media(min-height:1000px)]:text-[9.5rem]'],
    ['bos-title-terminal', 'font-brand font-900 text-4xl md:text-6xl tracking-tighter uppercase leading-none text-bos-white'],
    ['bos-title-section', 'font-brand font-900 text-[10px] text-bos-gray uppercase tracking-[0.4em] opacity-40'],
  ]

  // --- 5. PREFLIGHTS (INFRASTRUCTURE RESETS) ---
  const preflights: any[] = []
  
  if (protocol === 'erpbsg') {
    preflights.push({
      getCSS: () => `
        html, body { 
          height: 100%; 
          margin: 0; 
          padding: 0; 
          overflow: hidden; 
          background-color: #020617;
        }
        #root { height: 100%; }
      `
    })
  }

  return {
    name: '@dammgo/vena-visual-engine',
    theme,
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
    shortcuts: [
      ...coreShortcuts,
      ...(protocolShortcuts[protocol] || []),
      ...typographyShortcuts,
    ],
    preflights,
    rules: [
      ['animate-scan', { animation: 'scan 2s linear infinite' }],
    ],
  }
})

export default presetVena
