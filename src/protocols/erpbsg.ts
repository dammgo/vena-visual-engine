export const erpbsgTheme = {
  borderRadius: {
    'bos-sm': '2px',
    'bos-md': '4px',
    'bos-lg': '6px',
  }
}

export const erpbsgShortcuts = [
  ['erpbsg-card', 'bos-surface p-6 hover:border-bos-pink/30 transition-all duration-500'],
  ['erpbsg-input', 'w-full bg-bos-white border border-white/10 rounded-bos-sm px-6 py-4 text-bos-slate font-bold placeholder:text-bos-slate/30 focus:outline-none focus:ring-4 focus:ring-bos-pink/10 transition-all z-10 relative'],
  ['erpbsg-button', 'px-10 py-5 rounded-bos-sm bg-bos-pink text-bos-white font-brand font-900 uppercase tracking-[0.3em] text-[10px] hover:bg-bos-white hover:text-bos-pink transition-all duration-500 shadow-2xl relative overflow-hidden'],
  ['erpbsg-gradient-text', 'text-transparent bg-clip-text bg-gradient-to-r from-bos-pink to-bos-indigo'],
  ['erpbsg-input-compact', 'px-4 py-2 text-xs'],
  ['erpbsg-button-compact', 'px-6 py-3 text-[9px]'],
  
  // erpbsg Identity & Navigation
  ['erpbsg-button-manual', 'w-full p-1 border-b border-white/[0.03] hover:border-bos-pink/30 transition-all duration-500 bg-transparent'],
  ['erpbsg-button-manual-content', 'flex items-center justify-between py-4 px-2'],
  ['erpbsg-button-manual-label', 'font-brand font-black text-[10px] text-bos-gray/40 uppercase tracking-widest group-hover:text-bos-white transition-colors'],
  ['erpbsg-button-manual-sub', 'font-ui text-[9px] text-bos-gray/20 uppercase tracking-wider group-hover:text-bos-gray/60 transition-colors'],
  ['erpbsg-button-manual-icon', 'w-8 h-8 rounded-full border border-white/[0.03] flex items-center justify-center text-bos-gray/20 group-hover:border-bos-pink/30 group-hover:bg-bos-pink/5 group-hover:text-bos-pink transition-all'],
  ['erpbsg-button-back', 'mb-12 flex items-center gap-3 text-bos-gray/40 hover:text-bos-white transition-all bg-transparent border-none p-0 outline-none'],
  ['erpbsg-button-back-icon', 'w-6 h-6 rounded-full border border-white/[0.03] flex items-center justify-center text-bos-gray/20 group-hover:border-bos-pink/30 group-hover:text-bos-pink transition-all'],
  ['erpbsg-button-back-text', 'text-[10px] font-brand font-black uppercase tracking-[0.3em]'],
]

export const erpbsgPreflights = `
  html, body { 
    height: 100%; 
    margin: 0; 
    padding: 0; 
    overflow: hidden; 
    background-color: #020617;
  }
  #root { height: 100%; }
`
