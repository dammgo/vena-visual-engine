export const erpbsgTheme = {
  borderRadius: {
    'bos-sm': '2px',
    'bos-md': '4px',
    'bos-lg': '6px',
  }
}

export const erpbsgShortcuts = [
  // --- IDENTIDAD TIPOGRÁFICA ELÁSTICA (v0.3.0) ---
  // Los tamaños ahora dependen del multiplicador --vve-u-font definido por la realidad.
  ['erpbsg-title-access', 'font-brand font-black text-bos-white tracking-[-0.05em] uppercase leading-[0.9] whitespace-nowrap [font-size:calc(var(--vve-u-font)*3.5)]'],
  ['erpbsg-technical-label', 'font-brand font-black text-bos-pink uppercase tracking-[0.4em] block [font-size:calc(var(--vve-u-font)*0.7)]'],
  ['erpbsg-technical-sub', 'font-ui text-bos-gray/40 uppercase tracking-[0.3em] [font-size:calc(var(--vve-u-font)*0.65)]'],
  
  // --- COMPONENTES ATÓMICOS ---
  ['erpbsg-card', 'bos-surface hover:border-bos-pink/30 transition-all duration-500 [padding:calc(var(--vve-u-gap)*1.5)]'],
  ['erpbsg-input', 'w-full bg-bos-white border border-white/10 rounded-bos-sm text-bos-slate font-bold placeholder:text-bos-slate/30 focus:outline-none focus:ring-4 focus:ring-bos-pink/10 transition-all z-10 relative [padding:calc(var(--vve-u-gap)*1.2)] [font-size:calc(var(--vve-u-font)*0.9)]'],
  ['erpbsg-button', 'rounded-bos-sm bg-bos-pink text-bos-white font-brand font-900 uppercase tracking-[0.3em] hover:bg-bos-white hover:text-bos-pink transition-all duration-500 shadow-2xl relative overflow-hidden [padding:calc(var(--vve-u-gap)*1.5)] [font-size:calc(var(--vve-u-font)*0.75)]'],
  ['erpbsg-gradient-text', 'text-transparent bg-clip-text bg-gradient-to-r from-bos-pink to-bos-indigo'],
  
  // --- NAVEGACIÓN Y COMANDO ---
  ['erpbsg-button-manual', 'w-full p-1 border-b border-white/[0.03] hover:border-bos-pink/30 transition-all duration-500 bg-transparent'],
  ['erpbsg-button-manual-content', 'flex items-center justify-between [padding-block:calc(var(--vve-u-gap)*1.2)] px-2'],
  ['erpbsg-button-manual-label', 'font-brand font-black text-bos-gray/40 uppercase tracking-widest group-hover:text-bos-white transition-colors [font-size:calc(var(--vve-u-font)*0.75)]'],
  ['erpbsg-button-manual-sub', 'font-ui text-bos-gray/20 uppercase tracking-wider group-hover:text-bos-gray/60 transition-colors [font-size:calc(var(--vve-u-font)*0.65)]'],
  ['erpbsg-button-manual-icon', 'w-8 h-8 rounded-full border border-white/[0.03] flex items-center justify-center text-bos-gray/20 group-hover:border-bos-pink/30 group-hover:bg-bos-pink/5 group-hover:text-bos-pink transition-all'],
  ['erpbsg-button-back', 'flex items-center gap-3 text-bos-gray/40 hover:text-bos-white transition-all bg-transparent border-none p-0 outline-none [margin-bottom:calc(var(--vve-u-gap)*2)]'],
  ['erpbsg-button-back-icon', 'w-6 h-6 rounded-full border border-white/[0.03] flex items-center justify-center text-bos-gray/20 group-hover:border-bos-pink/30 group-hover:text-bos-pink transition-all'],
  ['erpbsg-button-back-text', 'font-brand font-black uppercase tracking-[0.3em] [font-size:calc(var(--vve-u-font)*0.75)]'],
]

export const erpbsgPreflights = `
  /* erpbsg Protocol Base Resets */
  *, *::before, *::after {
    box-sizing: border-box;
  }
`
