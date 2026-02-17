import { definePreset, presetUno, presetWebFonts } from 'unocss'

export const presetVena = definePreset(() => {
  return {
    name: '@dammgo/vena-visual-engine',
    theme: {
      colors: {
        bos: {
          slate: '#020617',
          pink: '#E91E63',
          white: '#f8fafc',
          gray: '#94a3b8',
          cobalt: '#00d4ff',
          void: '#0d1117',
          surface: '#161b22', // Absorbido de vena-pulse docs
          armor: '#30363d',   // Absorbido de vena-pulse docs
        },
        // Mapeo de compatibilidad para evitar roturas
        void: '#0d1117',
        cobalt: '#00d4ff',
        armor: '#30363d',
        muted: '#8b949e',
      },
      borderRadius: {
        'bos-sm': '2px',
        'bos-md': '4px',
        'bos-lg': '6px',
      },
      // PUNTO FINO: Curva de animación oficial del BOS
      easing: {
        'bos-pulse': 'cubic-bezier(0.4, 0, 0.2, 1)',
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
      ['bos-surface', 'bg-bos-surface/40 backdrop-blur-md border border-bos-armor/30 rounded-bos-sm shadow-none'],
      ['precision-bracket', 'relative before:content-[""] before:absolute before:-top-1 before:-left-1 before:w-2 before:h-2 before:border-t-1 before:border-l-1 before:border-bos-pink after:content-[""] after:absolute after:-bottom-1 after:-right-1 after:w-2 after:h-2 after:border-b-1 after:border-r-1 after:border-bos-pink'],
      ['infra-grid', 'relative before:content-[""] before:absolute before:inset-0 before:opacity-0 before:pointer-events-none before:[background-image:radial-gradient(#f8fafc_1px,transparent_1px)] before:[background-size:10px_10px] focus-within:before:opacity-10 before:transition-opacity'],
      ['synapse-line', 'h-1 bg-white/5 relative overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-bos-pink after:to-transparent after:animate-pulse'],
      ['text-authority', 'font-brand font-black uppercase tracking-widest text-bos-white'],
      
      // PROTOCOLO: Cinematic Loading (Radar Sweep)
      ['bos-loader', 'relative overflow-hidden before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-bos-cobalt/20 before:to-transparent before:animate-scan'],
      
      // Inputs Soberanos
      ['bos-input', 'bos-surface infra-grid px-4 py-3 font-mono text-sm bg-transparent outline-none focus:precision-bracket transition-all placeholder:opacity-20'],
      ['bos-checkbox', 'w-4 h-4 border border-white/20 rounded-bos-sm bg-white/5 appearance-none cursor-pointer checked:bg-bos-pink checked:border-bos-pink checked:shadow-[0_0_10px_rgba(233,30,99,0.5)] transition-all'],
      ['bos-radio', 'w-4 h-4 border border-white/20 rounded-full bg-white/5 appearance-none cursor-pointer checked:border-bos-pink transition-all relative after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-0 after:h-0 checked:after:w-2 checked:after:h-2 after:bg-bos-pink after:rounded-full after:transition-all'],
    ],
    rules: [
      ['animate-scan', { animation: 'scan 2s linear infinite' }],
    ],
  }
})
