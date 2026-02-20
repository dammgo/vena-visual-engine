import { definePreset } from 'unocss'
import { coreTheme, coreShortcuts, corePresets, realityPreflights } from './core'
import { erpbsgShortcuts, erpbsgPreflights, erpbsgTheme } from './protocols/erpbsg'
import { dammgoShortcuts } from './protocols/dammgo'
import { venaShortcuts, venaRules } from './protocols/vena'
import { labShortcuts, labTheme } from './protocols/lab'

export interface VenaOptions {
  /**
   * Visual Protocol to activate.
   * @default 'erpbsg'
   */
  protocol?: 'erpbsg' | 'dammgo' | 'vena' | 'kode-reboot'
}

export const presetVena = definePreset((options: VenaOptions = {}) => {
  const protocol = options.protocol || 'erpbsg'

  // --- 1. THEME ASSEMBLY ---
  const protocolThemes: Record<string, any> = {
    erpbsg: erpbsgTheme,
    'kode-reboot': labTheme,
  }

  const theme = {
    ...coreTheme,
    ...(protocolThemes[protocol] || {})
  }

  // --- 2. SHORTCUT ASSEMBLY ---
  const protocolShortcuts: Record<string, any[]> = {
    erpbsg: erpbsgShortcuts,
    dammgo: dammgoShortcuts,
    vena: venaShortcuts,
    'kode-reboot': labShortcuts,
  }

  const typographyShortcuts = [
    // Triple Vertical Shielding Protocol (Altitude-Aware)
    ['bos-title-hero', 'font-brand font-900 font-black tracking-tighter uppercase leading-[0.9] text-bos-white [font-size:calc(var(--vve-u-font)*5)] [@media(min-height:850px)]:[font-size:calc(var(--vve-u-font)*7)] [@media(min-height:1000px)]:[font-size:calc(var(--vve-u-font)*9)]'],
    ['bos-title-terminal', 'font-brand font-900 text-4xl md:text-6xl tracking-tighter uppercase leading-none text-bos-white'],
    ['bos-title-section', 'font-brand font-900 text-[10px] text-bos-gray uppercase tracking-[0.4em] opacity-40'],
  ]

  // --- 3. RULE ASSEMBLY ---
  const protocolRules: Record<string, any[]> = {
    vena: venaRules,
  }

  // --- 4. PREFLIGHT INJECTION (THE REALITY ENGINE) ---
  const preflights: any[] = [
    {
      getCSS: () => realityPreflights // Global Reality Variables
    }
  ]

  if (protocol === 'erpbsg') {
    preflights.push({
      getCSS: () => erpbsgPreflights
    })
  }

  // --- 5. FINAL FACTORY OUTPUT ---
  return {
    name: '@dammgo/vena-visual-engine',
    theme,
    presets: corePresets,
    shortcuts: [
      ...coreShortcuts,
      ...(protocolShortcuts[protocol] || []),
      ...typographyShortcuts,
    ],
    rules: [
      ...(protocolRules[protocol] || []),
    ],
    preflights,
  }
})

export default presetVena
