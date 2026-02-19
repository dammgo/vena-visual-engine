import { definePreset, presetUno, presetWebFonts } from 'unocss'

export interface VenaOptions {
  /**
   * Protocolo visual a activar.
   * @default 'erpbsg'
   */
  protocol?: 'erpbsg' | 'dammgo' | 'vena' | 'kode-reboot'
}

export const presetVena = definePreset((options: VenaOptions = {}) => {
  const protocol = options.protocol || 'erpbsg'

  return {
    name: '@dammgo/vena-visual-engine',
    theme: {
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
    shortcuts: [
      // --- CAPA CORE ---
      ['bos-surface', 'bg-bos-surface/40 backdrop-blur-md border border-bos-armor/30 rounded-bos-sm shadow-none'],
      ['precision-bracket', 'relative before:content-[""] before:absolute before:-top-1 before:-left-1 before:w-2 before:h-2 before:border-t-1 before:border-l-1 before:border-bos-pink after:content-[""] after:absolute after:-bottom-1 after:-right-1 after:w-2 after:h-2 after:border-b-1 after:border-r-1 after:border-bos-pink'],
      ['infra-grid', 'relative before:content-[""] before:absolute before:inset-0 before:opacity-0 before:pointer-events-none before:[background-image:radial-gradient(#f8fafc_1px,transparent_1px)] before:[background-size:10px_10px] focus-within:before:opacity-10 before:transition-opacity'],
      ['synapse-line', 'h-1 bg-white/5 relative overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-bos-pink after:to-transparent after:animate-pulse'],
      
      // --- PROTOCOLO: erpbsg ---
      ['erpbsg-card', 'bos-surface p-6 hover:border-bos-pink/30 transition-all duration-500'],
      ['erpbsg-input', 'w-full bg-bos-white border border-white/10 rounded-bos-sm px-6 py-4 text-bos-slate font-bold placeholder:text-bos-slate/30 focus:outline-none focus:ring-4 focus:ring-bos-pink/10 transition-all z-10 relative'],
      ['erpbsg-button', 'px-10 py-5 rounded-bos-sm bg-bos-pink text-bos-white font-brand font-900 uppercase tracking-[0.3em] text-[10px] hover:bg-bos-white hover:text-bos-pink transition-all duration-500 shadow-2xl relative overflow-hidden'],
      ['erpbsg-gradient-text', 'text-transparent bg-clip-text bg-gradient-to-r from-bos-pink to-bos-indigo'],
      
      // --- MODOS ESPECIALES (COMPACT) ---
      ['erpbsg-input-compact', 'px-4 py-2 text-xs'],
      ['erpbsg-button-compact', 'px-6 py-3 text-[9px]'],
      
      // --- PROTOCOLO: vena ---
      ['vena-monitor', 'bg-black border-[0.5px] border-bos-cobalt/20 p-4 font-mono text-[11px] text-bos-cobalt/80'],
      ['vena-pulse-line', 'h-[1px] bg-bos-cobalt/10 relative overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-bos-cobalt after:animate-scan'],
      
      // --- PROTOCOLO: kode-reboot ---
      ['kode-terminal', 'bg-matrix-dark border border-matrix-green/30 p-8 font-mono text-matrix-green shadow-[0_0_20px_rgba(0,255,65,0.1)]'],
      ['kode-button', 'px-6 py-3 border border-matrix-green text-matrix-green font-mono uppercase tracking-widest hover:bg-matrix-green hover:text-matrix-dark transition-all'],

      // --- TIPOGRAFÍA ---
      ['bos-title-hero', 'font-brand font-900 text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.85] text-bos-white'],
      ['bos-title-terminal', 'font-brand font-900 text-4xl md:text-6xl tracking-tighter uppercase leading-none text-bos-white'],
      ['bos-title-section', 'font-brand font-900 text-[10px] text-bos-gray uppercase tracking-[0.4em] opacity-40'],
      
      // --- COMPONENTES ---
      ['bos-input', 'bos-surface infra-grid px-4 py-3 font-mono text-sm bg-transparent outline-none focus:precision-bracket transition-all placeholder:opacity-20'],
    ],
    rules: [
      ['animate-scan', { animation: 'scan 2s linear infinite' }],
    ],
  }
})

export default presetVena
