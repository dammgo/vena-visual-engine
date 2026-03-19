export const venaShortcuts = [
  // --- IDENTIDAD DE INTELIGENCIA (ATÓMICA) ---
  ['vena-monitor', 'bg-black border-[0.5px] border-cobalt/20 font-mono text-[11px] text-cobalt/80'],
  ['vena-pulse-line', 'h-[1px] bg-cobalt/10 relative overflow-hidden after:content-[""] after:absolute after:inset-0 after:bg-cobalt after:animate-scan'],

  // --- ESTRUCTURAS CINEMÁTICAS (Soberanía Visual) ---
  ['vena-glass-armor', 'glass-armor'],
  ['vena-text-glow', 'text-glow'],

  // --- PROTOCOLOS DE CAPTURA (Ingeniería de Precisión) ---
  // El input cinemático de VENA: Fondo abisal, texto blanco y brackets de cobalto al enfocar.
  ['vena-input', 'bg-void border border-armor/50 px-4 py-3 font-mono text-sm text-white placeholder:text-armor/50 outline-none transition-all focus:border-cobalt/50 relative before:content-[""] before:absolute before:-top-1 before:-left-1 before:w-2 before:h-2 before:border-t-1 before:border-l-1 before:border-cobalt before:opacity-0 focus:before:opacity-100 after:content-[""] after:absolute after:-bottom-1 after:-right-1 after:w-2 after:h-2 after:border-b-1 after:border-r-1 after:border-cobalt after:opacity-0 focus:after:opacity-100'],
  
  // --- ACCIONES SOBERANAS (Contraste Máximo) ---
  // El botón de vanguardia: Cobalto con texto abisal. Invierte en hover.
  ['vena-btn-primary', 'bg-cobalt text-void font-black uppercase tracking-[0.2em] text-[10px] px-8 py-4 hover:bg-white hover:text-void transition-all duration-500 shadow-[0_0_15px_rgba(0,212,255,0.3)] shadow-glow disabled:opacity-50 disabled:cursor-not-allowed'],
]

export const venaRules: any[] = [
  ['animate-scan', { animation: 'scan 2s linear infinite' }],
]
